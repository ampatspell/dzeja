import Store from 'zuglet/store';

const options = {
  firebase: {
    apiKey: "AIzaSyANGrOhzrovbsAPVQ8Wgz4PBSVT6fNm0q0",
    authDomain: "dzeja-ir.firebaseapp.com",
    databaseURL: "https://dzeja-ir.firebaseio.com",
    projectId: "dzeja-ir",
    storageBucket: "dzeja-ir.appspot.com",
    messagingSenderId: "347538497489",
    appId: "1:347538497489:web:76df8760eeac851a098af0",
    measurementId: "G-D295S9KXFJ"
  },
  firestore: {
    persistenceEnabled: true
  },
  auth: {
    user: 'user'
  },
  functions: {
    region: 'europe-west2'
  }
};

if(!options.firebase.projectId) {
  // eslint-disable-next-line no-console
  console.log([
    '',
    '🔥',
    '',
    'No Firebase config provided.',
    'Get your Firebase project configuration from https://console.firebase.google.com/',
    'and paste it in the `app/store.js`',
    '',
    ''
  ].join('\n'));

  throw new Error('No firebase config provided in app/store.js');
}

export default class DzejaStore extends Store {

  options = options

}
