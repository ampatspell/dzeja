import { helper } from '@ember/component/helper';

export default helper(function isLast([ array, object ]) {
  let len = array.length;
  if(len === 0) {
    return false;
  }
  return array.indexOf(object) === len - 1;
});
