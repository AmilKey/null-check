import Model, { hasMany } from '@ember-data/model';
import { computed } from '@ember/object';

export default class TestModel extends Model {
  @hasMany('check') checks;

  @computed('checks.@each.full')
  get anyFullCheck() {
    return this.checks.then(checks=> checks.isAny('full'));
  }
}
