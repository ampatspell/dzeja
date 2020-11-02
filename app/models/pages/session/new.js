import SessionBase from './-base';

export default class PagesSessioNNew extends SessionBase {

  async _perform(auth) {
    await auth.methods.popup.google.signIn();
  }

}
