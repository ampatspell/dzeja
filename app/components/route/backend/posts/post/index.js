import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class RouteBackendPostsPostIndexComponent extends Component {

  @service
  router

  @action
  async onDelete() {
    this.args.model.delete();
    this.router.transitionTo('backend.posts');
  }

  @action
  onEdit() {
    console.log('onEdit');
  }

}
