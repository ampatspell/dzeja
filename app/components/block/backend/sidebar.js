import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class BlockSidebarComponent extends Component {

  @service
  router

  @service
  dialogs

  @action
  route(route) {
    this.router.transitionTo(route);
  }

  @action
  async signOut() {
    let confirmed = await this.dialogs.alert('Done, see you?', 'Sign out', 'Cancel');
    if(!confirmed) {
      return;
    }
    this.router.transitionTo('session.delete');
  }

}
