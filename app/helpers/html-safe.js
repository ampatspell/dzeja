import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function _htmlSafe([ string ]) {
  return htmlSafe(string);
});
