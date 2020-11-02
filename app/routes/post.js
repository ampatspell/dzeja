import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from 'zuglet/decorators';

@route()
export default class PostRoute extends Route {

  @service
  store

  model({ post_id }) {
    let model = this.store.posts.byId(post_id);
    if(!model) {
      this.transitionTo('index');
      return;
    }
    return model;
  }

  async load(model) {
    await (model && model.load());
  }

}
