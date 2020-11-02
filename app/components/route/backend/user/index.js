import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class RouteBackendUserIndexComponent extends Component {

  @action
  async save() {
    await this.args.model.save();
  }

}
