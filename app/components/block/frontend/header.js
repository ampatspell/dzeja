import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

export default class BlockFrontendHeaderComponent extends Component {

  @service
  store

  get isSignedIn() {
    let user = this.store.auth.user;
    return !!user && user.isEditor;
  }

  get backend() {
    if(!this.isSignedIn) {
      return undefined;
    }
    return this.args.backend;
  }

}
