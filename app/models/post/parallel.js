import Post, { data } from './post';
import { toHTML } from '../../utils/remark';

export default class TextPost extends Post {

  typeName = "Parallel Post"

  @data('title')
  title

  @data('columns')
  columns

  get _title() {
    return this.title || 'Untitled';
  }

  async render() {
    await this.columns.map(async column => {
      let renderedBody = await toHTML(column.body);
      column.renderedBody = renderedBody;
    });
  }

  get description() {
    let { _title } = this;
    return [
      { type: 'strong', value: _title }
    ];
  }

}
