import Component from '@glimmer/component';
import { action } from "@ember/object"
import { reads } from 'macro-decorators';
import { tracked } from "@glimmer/tracking";

export default class BlockBackendPostEditParallelComponent extends Component {

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

  @reads('column.author')
  author

  @reads('column.body')
  body

  get canRemoveAuthor() {
    return this.columns.length > 1;
  }

  //

  @action
  updateColumn(key, value) {
    this.column[key] = value;
  }

  @action
  removeColumn() {
    this.columns.removeObject(this.column);
  }

  @action
  addColumn() {
    this.columns.push({ author: '', body: '' });
    this.selectColumn(this.columns.lastObject);
  }

  @action
  selectColumn(column) {
    this._column = this.columns.indexOf(column);
  }

}
