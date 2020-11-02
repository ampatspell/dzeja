import { helper } from '@ember/component/helper';

export default helper(function not([ param ]) {
  return !param;
});
