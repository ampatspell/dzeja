import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from 'zuglet/decorators';

@route()
export default class ApplicationRoute extends Route {

  @service
  store

  async model() {
    return this.store;
  }

  async load(model) {
    await model.load();
  }

}
