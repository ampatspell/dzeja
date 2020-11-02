import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class RouteFrontendSessionDeniedComponent extends Component {

  @service
  store

  @service
  router

  @action
  async signOut() {
    await this.store.auth.signOut();
    this.router.transitionTo('index');
  }

}
