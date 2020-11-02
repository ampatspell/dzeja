import EmberObject from '@ember/object';
import { reads, alias } from 'macro-decorators';

export const data = key => alias(`doc.data.${key}`);

export default class Post extends EmberObject {

  doc

  @reads('doc.id')
  id

  @reads('doc.isDirty')
  isDirty

  @data('type')
  type

  @data('createdAt')
  createdAt

  async load() {
  }

  //

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
