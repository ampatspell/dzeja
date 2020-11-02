import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class RouteBackendPostsPostIndexComponent extends Component {

  @service
  router

  @service
  dialogs

  @action
  async onDelete() {
    let confirmed = await this.dialogs.alert('Are you sure you want to delete this post?', 'Delete this post', 'Cancel');
    if(!confirmed) {
      return;
    }
    this.args.model.delete();
    this.router.transitionTo('backend.posts');
  }

  @action
  onEdit() {
    this.router.transitionTo('backend.posts.post.edit', this.args.model.id);
  }

  @action
  onPreview() {
    this.router.transitionTo('posts.post', this.args.model.id);
  }

}
