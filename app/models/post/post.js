import EmberObject from '@ember/object';
import { reads } from 'macro-decorators';

export const data = key => reads(`doc.data.${key}`);

export default class Post extends EmberObject {

  doc

  @reads('doc.id')
  id

  @data('type')
  type

  @data('createdAt')
  createdAt

  @data('author')
  author

  async load() {
  }

  //

  update(key, value) {
    this.doc.data[key] = value;
  }

  async render() {
  }

  async save() {
    await this.render();
    await this.doc.save();
  }

  async reload() {
    await this.doc.reload();
  }

  async delete() {
    await this.doc.delete();
  }

}
