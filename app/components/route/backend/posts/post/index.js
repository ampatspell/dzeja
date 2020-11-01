import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class RouteBackendPostsPostIndexComponent extends Component {

  @action
  onDelete() {
    console.log('onDelete');
  }

  @action
  onEdit() {
    console.log('onEdit');
  }

}
