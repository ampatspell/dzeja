import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class SessionDeleteRoute extends Route {

  @service
  store

  async beforeModel() {
    await this.store.auth.signOut();
    this.transitionTo('index');
  }

}
