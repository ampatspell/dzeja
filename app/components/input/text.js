import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class InputTextComponent extends Component {

  @action
  onInput(e) {
    let value = e.target.value;
    if(this.args.value === value) {
      return;
    }
    this.args.onUpdate && this.args.onUpdate(value);
  }

}
