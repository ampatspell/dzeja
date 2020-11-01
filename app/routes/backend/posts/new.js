import Route from '@ember/routing/route';
import { route } from 'zuglet/decorators';
import { inject as service } from "@ember/service";

@route()
export default class BackendPostsPostRoute extends Route {

  @service
  store

  model() {
    let posts = this.modelFor('backend.posts');
    return this.store.models.create('pages/post/new', { posts });
  }

}
