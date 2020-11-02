import Component from '@glimmer/component';
import { action } from "@ember/object"
import { reads } from 'macro-decorators';

export default class BlockBackendPostEditParallelComponent extends Component {

  @reads('args.post')
  post

  get isLastAuthor() {
    return this.post.authors.length < 2;
  }

  @action
  updateAuthor(author, key, value) {
    author[key] = value;
  }

  @action
  removeAuthor(author) {
    this.post.authors.removeObject(author);
  }

  @action
  addAuthor() {
    this.post.authors.push({ name: '', body: '' });
  }

}
