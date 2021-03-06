import EmberObject from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PagesSessionBase extends EmberObject {

  @service
  store

  @tracked isBusy
  @tracked error

  async perform() {
    if(this.isBusy) {
      return;
    }

    this.error = null;
    this.isBusy = true;

    let { store: { auth } } = this;

    try {
      await this._perform(auth);
      return true;
    } catch(err) {
      this.error = err;
      return false;
    } finally {
      this.isBusy = false;
    }
  }

}
