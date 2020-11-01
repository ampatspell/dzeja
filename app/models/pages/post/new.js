import EmberObject from '@ember/object';
import { activate } from 'zuglet/decorators';

export default class NewPostPage extends EmberObject {

  posts

  definitions = [
    { type: 'text', label: 'Text Post' }
  ];

  @activate()
  post = null;

  definition = null;

  selectDefinition(definition) {
    let post = null;
    if(definition) {
      let { type } = definition;
      post = this.posts.buildPost(type);
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
