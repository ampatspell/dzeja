import EmberRouter from '@ember/routing/router';
import config from 'dzeja/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {

  this.route('session', function() {
    this.route('new');
    this.route('delete');
  });

  this.route('backend', function() {
    this.route('posts', function() {
      this.route('new');
      this.route('post', { path: ':post_id' }, function() {
        this.route('edit');
      });
    });
    this.route('user', function() {
    });
  });

  this.route('posts', function() {
    this.route('post', { path: ':post_id' }, function() {
    });
  });

});
