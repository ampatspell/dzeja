import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service"

export default class RouteBackendPostsNewComponent extends Component {

  @service
  router

  @service
  dialogs

  @action
  selectDefinition(definition) {
    this.args.model.selectDefinition(definition);
  }

  @action
  async onSave() {
    let { id } = await this.args.model.save();
    this.router.transitionTo('backend.posts.post', id);
  }

  @action
  async onCancel() {
    let confirmed = await this.dialogs.alert('Are you sure you want to discard this post?', 'Discard this post', 'Keep editing');
    if(!confirmed) {
      return;
    }
    this.router.transitionTo('backend.posts');
  }

}
