import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { alive } from 'zuglet/utils';
import { reads } from 'macro-decorators';

export default class RouteBackendPostsPostEditComponent extends Component {

  @service
  router

  @reads('args.model')
  model

  @action
  async onSave() {
    await this.model.save();
    this.transitionBack();
  }

  @action
  async onCancel() {
    await this.model.reload();
    this.transitionBack();
  }

  @action
  onUpdate(key, value) {
    this.model.update(key, value);
  }

  @alive()
  transitionBack() {
    this.router.transitionTo('backend.posts.post', this.model.id);
  }

}
