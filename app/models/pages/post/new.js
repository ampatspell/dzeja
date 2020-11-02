import EmberObject from '@ember/object';
import { activate } from 'zuglet/decorators';

export default class NewPostPage extends EmberObject {

  posts

  definitions = [
    { type: 'text', label: 'Text Post' },
    { type: 'parallel', label: 'Parallel Post', build: () => ({
        columns: [
          { author: '', body: '' }
        ]
      })
    }
  ];

  @activate()
  post = null;

  definition = null;

  // init() {
  //   super.init(...arguments);
  //   this.selectDefinition(this.definitions[1]);
  // }

  selectDefinition(definition) {
    let post = null;
    if(definition) {
      let { type, build } = definition;
      let props = build && build.call(this);
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
