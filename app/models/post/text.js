import Post, { data } from './post';
import { toHTML } from '../../utils/remark';

export default class TextPost extends Post {

  typeName = "Text Post"

  @data('title')
  title

  @data('body')
  body

  @data('renderedBody')
  renderedBody

  @data('author')
  author

  get _title() {
    return this.title || 'Untitled';
  }

  async render() {
    let renderedBody = await toHTML(this.body);
    this.renderedBody = renderedBody;
  }

  get description() {
    let { _title, body } = this;
    return [
      { type: 'strong', value: _title },
      { value: body }
    ];
  }

}
