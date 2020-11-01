import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from 'zuglet/decorators';

@route()
export default class IndexRoute extends Route {

  @service
  store

  model() {
  }

  async load() {
  }

}
