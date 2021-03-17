'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        node: {
          global: true,
          fs: 'empty'
        }
      }
    },
    sassOptions: {
      includePaths: [
        'app/components'
      ]
    }
  });

  return app.toTree();
};
