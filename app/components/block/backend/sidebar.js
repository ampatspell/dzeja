import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class BlockSidebarComponent extends Component {

  @service
  router

  @action
  route(route) {
    this.router.transitionTo(route);
  }

}
