import Component from '@glimmer/component';
import { cached } from 'tracked-toolbox';
import { action } from "@ember/object";

export default class BlockDialogsAlertComponent extends Component {

  @cached
  get props() {
    let [ message, resolve, reject ] = this.args.model.args;
    return {
      message,
      resolve,
      reject
    };
  }

  @action
  resolve() {
    this.args.model.deferred.resolve(true);
  }

  @action
  reject() {
    this.args.model.deferred.resolve(false);
  }

}
