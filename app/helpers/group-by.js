import { helper } from '@ember/component/helper';

export default helper(function groupBy([ array, key ]) {
  let groups = (array || []).reduce((groups, item) => {
    let value = item[key];
    let group = groups[value];
    if(!group) {
      group = [];
      groups[value] = group;
    }
    group.push(item);
    return groups;
  }, {});
  return Object.values(groups);
});
