import Post, { data } from './post';

export default class TextPost extends Post {

  typeName = "Text Post"

  @data('title')
  title

  @data('body')
  body

  get description() {
    return [
      { type: 'strong', value: this.title },
      { value: this.body }
    ];
  }

}
