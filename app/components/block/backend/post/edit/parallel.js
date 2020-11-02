import Component from '@glimmer/component';
import { action } from "@ember/object"
import { reads, alias } from 'macro-decorators';
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

  @alias('column.author')
  author

  @alias('column.body')
  body

  get canRemoveColumn() {
    return this.columns.length > 1;
  }

  //

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
