import { helper } from '@ember/component/helper';

export default helper(function clazz(params, hash) {
  let strings = [];

  params.forEach(param => {
    if(param) {
      strings.push(param);
    }
  });

  for(let key in hash) {
    let value = hash[key];
    if(value) {
      strings.push(`${key}-${value}`);
    }
  }

  return strings.join(' ');
});
