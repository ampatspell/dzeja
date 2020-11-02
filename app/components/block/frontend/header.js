import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

export default class BlockFrontendHeaderComponent extends Component {

  @service
  store

  get isSignedIn() {
    return !!this.store.auth.user;
  }

  get backend() {
    if(!this.isSignedIn) {
      return;
    }
    return this.args.backend;
  }

}
