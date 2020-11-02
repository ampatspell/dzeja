import { helper } from '@ember/component/helper';
import { formatTimestamp } from '../utils/timestamp';

export default helper(function timestamp([ value ], { format }) {
  return formatTimestamp(value, format);
});
