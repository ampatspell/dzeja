import Service from '@ember/service';
import { tracked } from "@glimmer/tracking"

const defer = () => {
  let resolve;
  let reject;
  let promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}

export const cancelled = () => {
  let err = new Error('Cancelled');
  err.code = 'dialogs/cancelled';
  return err;
}

// @action
// async confirm() {
//   let result = await this.dialogs.alert('Are you sure?', 'Yes', 'No');
//   console.log(result);
// }
export default class DialogsService extends Service {

  @tracked
  model

  present(type, ...args) {
    if(this.model) {
      this.model.deferred.reject(cancelled());
    }

    let deferred = defer();
    let model = { type, args, deferred };
    let done = () => {
      if(this.model === model) {
        this.model = null;
      }
    };
    deferred.promise.then(done, done);

    this.model = model;
    return deferred.promise;
  }

  async alert() {
    try {
      return await this.present('alert', ...arguments);
    } catch(err) {
      if(err.code === 'dialogs/cancelled') {
        return false;
      }
      throw err;
    }
  }

}
