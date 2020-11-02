import EmberObject from '@ember/object';
import { activate } from 'zuglet/decorators';
import { inject as service } from "@ember/service"
import { reads } from 'macro-decorators';

export default class NewPostPage extends EmberObject {

  @service
  store

  @reads('store.auth.user')
  user

  posts

  definitions = [
    {
      type: 'text',
      label: 'Text Post',
      build: ({ author }) => ({
        author
      })
    },
    {
      type: 'parallel',
      label: 'Parallel Post',
      build: ({ author }) => ({
        columns: [
          { author, body: '' }
        ]
      })
    }
  ];

  @activate()
  post = null;

  definition = null;

  selectDefinition(definition) {
    let post = null;
    if(definition) {
      let { type, build } = definition;
      let props = build && build.call(this, this.user);
      post = this.posts.buildPost(type, props);
    }
    this.definition = definition;
    this.post = post;
  }

  update(key, value) {
    this.post.update(key, value);
  }

  async save() {
    let { post } = this;
    await post.save();
    let { id } = post;
    return {
      id
    };
  }

}
