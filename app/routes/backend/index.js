import Route from '@ember/routing/route';

export default class BackendRoute extends Route {

  beforeModel() {
    this.transitionTo('backend.posts');
  }

}
