import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BackendRoute extends Route {

  @service
  store

  beforeModel() {
    if(!this.store.auth.user) {
      this.transitionTo('session.new');
    }
  }

}
