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
    let { _title, columns } = this;
    let lines = [ { type: 'strong', value: _title } ];
    columns.forEach(({ author, body }) => {
      if(author && body) {
        let line = [];
        if(author) {
          line.push(author);
        }
        if(body) {
          line.push(body);
        }
        lines.push({ value: line.join(': ') });
      }
    });
    return lines;
  }

}
