import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service"

export default class RouteBackendPostsNewComponent extends Component {

  @service
  router

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
  onCancel() {
    this.router.transitionTo('backend.posts');
  }

}
