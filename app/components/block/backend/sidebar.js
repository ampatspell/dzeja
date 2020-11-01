import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class BlockSidebarComponent extends Component {

  @tracked
  stats

  @service
  router

  @action
  route(route) {
    this.router.transitionTo(route);
  }

  @action
  toggleStats() {
    this.stats = !this.stats;
  }

}
