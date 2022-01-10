import Model, { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';

export default class TestModel extends Model {
  @attr('string') name;

  @hasMany('check', { inverse: null }) checks;

  @computed('checks.@each.full')
  get anyFullCheck() {
    return this.checks.then(checks=> checks.isAny('full'));
  }
}
