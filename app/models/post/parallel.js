import Post, { data } from './post';
import { toHTML } from '../../utils/remark';

export default class TextPost extends Post {

  typeName = "Parallel Post"

  @data('title')
  title

  @data('authors')
  authors

  get _title() {
    return this.title || 'Untitled';
  }

  async render() {
    await this.authors.map(async author => {
      let renderedBody = await toHTML(author.body);
      author.renderedBody = renderedBody;
    });
  }

  get description() {
    let { _title } = this;
    return [
      { type: 'strong', value: _title }
    ];
  }

}
