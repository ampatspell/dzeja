import Post, { data } from './post';
import { toHTML } from '../../utils/remark';

export default class TextPost extends Post {

  typeName = "Text Post"

  @data('title')
  title

  @data('body')
  body

  @data('html')
  html

  get _title() {
    return this.title || 'Untitled';
  }

  async render() {
    let html = await toHTML(this.body);
    this.update('html', html);
  }

  get description() {
    let { _title, body } = this;
    return [
      { type: 'strong', value: _title },
      { value: body }
    ];
  }

}
