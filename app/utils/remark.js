import unified from 'unified';
import parse from 'remark-parse';
import breaks from 'remark-breaks';
import html from 'remark-html';

let tap = () => ast => {
  return ast;
}

let pipe = unified()
  .use(parse)
  .use(breaks)
  .use(tap)
  .use(html);

export const toHTML = async string => {
  if(!string || typeof string !== 'string') {
    return null;
  }
  let vfile = await pipe.process(string);
  return vfile.contents;
}
