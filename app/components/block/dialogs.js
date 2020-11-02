import Component from '@glimmer/component';
import { inject as service } from "@ember/service";
import { reads } from 'macro-decorators';
import { action } from "@ember/object"
import { cancelled } from '../../services/dialogs';

export default class BlockDialogsComponent extends Component {

  @service
  dialogs

  @reads('dialogs.model')
  model

  @action
  cancel() {
    this.model.deferred.reject(cancelled());
  }

}
