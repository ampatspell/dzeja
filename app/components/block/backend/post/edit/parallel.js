import Component from '@glimmer/component';
import { action } from "@ember/object"
import { reads, alias } from 'macro-decorators';
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class BlockBackendPostEditParallelComponent extends Component {

  @service
  dialogs

  @service
  store

  @reads('args.post')
  post

  @reads('post.columns')
  columns

  @tracked
  _column

  get column() {
    let { columns, _column } = this;
    let column = columns[_column] || columns[0];
    return column;
  }

  @alias('column.author')
  author

  @alias('column.body')
  body

  get canRemoveColumn() {
    return this.columns.length > 1;
  }

  //

  @action
  async removeColumn() {
    if(this.body) {
      let confirmed = await this.dialogs.alert('Are you sure you want to remove this author?', 'Remove author', 'Cancel');
      if(!confirmed) {
        return;
      }
    }
    this.columns.removeObject(this.column);
  }

  @action
  addColumn() {
    let author = this.store.auth.user.author;
    this.columns.push({ author, body: '' });
    this.selectColumn(this.columns.lastObject);
  }

  @action
  selectColumn(column) {
    this._column = this.columns.indexOf(column);
  }

}
