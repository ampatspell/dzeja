import User from 'zuglet/user';
import { activate } from 'zuglet/decorators';
import { load } from 'zuglet/utils';
import { reads, alias, equal } from 'macro-decorators';
import { tracked } from "@glimmer/tracking";

const data = key => alias(`doc.data.${key}`);

export default class DzejaUser extends User {

  @tracked
  role

  @activate().content(({ store, uid }) => store.doc(`users/${uid}`).existing())
  doc

  @data('author')
  author

  @reads('doc.isDirty')
  isDirty

  @equal('role', 'editor')
  isEditor

  async _role() {
    let { claims: { role } } = await this.token({ type: 'json' });
    this.role = role;
  }

  async restore(user) {
    await super.restore(user);
    await Promise.all([
      this._role(),
      load(this.doc)
    ]);
    if(!this.author) {
      this.author = this.user.displayName;
    }
  }

  async save() {
    await this.doc.save();
  }

}
