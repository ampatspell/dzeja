import User from 'zuglet/user';

export default class DzejaUser extends User {

  async restore(user) {
    await super.restore(user);
  }

}
