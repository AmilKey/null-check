import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  delete(model) {
    model.unloadRecord();
    model.checks.then(checks => console.log(checks));
  }
}
