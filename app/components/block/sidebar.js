import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object"

export default class BlockSidebarComponent extends Component {

  @tracked
  stats

  @action
  toggleStats() {
    this.stats = !this.stats;
  }

}
