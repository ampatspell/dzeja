import Component from '@glimmer/component';
import { action } from "@ember/object"
import { inject as service } from "@ember/service"

export default class RouteBackendPostsIndexComponent extends Component {

  @service
  router

  @action
  onSelected(post) {
    this.router.transitionTo('backend.posts.post', post.id);
  }

  @action
  onAdd() {
  }

}
