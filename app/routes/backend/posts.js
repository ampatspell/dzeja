import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from 'zuglet/decorators';

@route()
export default class BackendPostsRoute extends Route {

  @service
  store

  model() {
    return this.store.models.create('posts');
  }

  async load(model) {
    await model.load();
  }

}
