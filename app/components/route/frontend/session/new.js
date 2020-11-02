import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RouteFrontendSessionNewComponent extends Component {

  @service
  router

  @action
  async perform() {
    if(!await this.args.model.perform()) {
      return;
    }
    this.router.transitionTo('backend');
  }

}
