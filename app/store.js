import Store from 'zuglet/store';
import { load } from 'zuglet/utils';
import { model } from 'zuglet/decorators';

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

export default class DzejaStore extends Store {

  options = options

  @model().named('posts')
  posts

  async load() {
    await load(this.auth);
    await this.posts.load();
  }

  //

  async getRole(uid) {
    let { data } = await store.functions.call('callable_user_getRole', { uid });
    return data;
  }

  async setRole(uid, role) {
    let { data } = await store.functions.call('callable_user_setRole', { uid, role });
    return data;
  }

}
