import User from 'zuglet/user';
import { activate } from 'zuglet/decorators';
import { load } from 'zuglet/utils';
import { reads, alias } from 'macro-decorators';

const data = key => alias(`doc.data.${key}`);

export default class DzejaUser extends User {

  @activate().content(({ store, uid }) => store.doc(`users/${uid}`).existing())
  doc

  @data('author')
  author

  @reads('doc.isDirty')
  isDirty

  async restore(user) {
    await super.restore(user);
    await load(this.doc);
    if(!this.author) {
      this.author = this.user.displayName;
    }
  }

  async save() {
    await this.doc.save();
  }

}
