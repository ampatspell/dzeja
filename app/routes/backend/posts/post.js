import Route from '@ember/routing/route';
import { route } from 'zuglet/decorators';

@route()
export default class BackendPostsPostRoute extends Route {

  model({ post_id }) {
    let model = this.modelFor('backend.posts').byId(post_id);
    if(!model) {
      this.transitionTo('backend.posts');
      return;
    }
    return model;
  }

  async load(model) {
    await (model && model.load());
  }

}
