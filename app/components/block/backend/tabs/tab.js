import Component from '@glimmer/component';

export default class BlockBackendTabsTabComponent extends Component {

  get isSelected() {
    let { model, selected } = this.args;
    return model === selected;
  }

}
