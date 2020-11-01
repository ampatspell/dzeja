import Post, { data } from './post';

export default class TextPost extends Post {

  typeName = "Text Post"

  @data('title')
  title

  @data('body')
  body

  get _title() {
    return this.title || 'Untitled';
  }

  get description() {
    let { _title, body } = this;
    return [
      { type: 'strong', value: _title },
      { value: body }
    ];
  }

}
