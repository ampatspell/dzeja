import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { alive } from 'zuglet/utils';
import { reads } from 'macro-decorators';
import { tracked } from "@glimmer/tracking";

export default class RouteBackendPostsPostEditComponent extends Component {

  @service
  router

  @reads('args.model')
  model

  @tracked
  isBusy = false

  @action
  async onSave() {
    this.withBusy(async () => {
      await this.model.save();
      this.transitionBack();
    });
  }

  @action
  async onCancel() {
    this.withBusy(async () => {
      await this.model.reload();
      this.transitionBack();
    });
  }

  async withBusy(cb) {
    this.isBusy = true;
    try {
      await cb();
    } catch(err) {
      console.error(err.stack);
    } finally {
      this.isBusy = false;
    }
  }

  @alive()
  transitionBack() {
    this.router.transitionTo('backend.posts.post', this.model.id);
  }

}
