import Model, { attr } from '@ember-data/model';

export default class CheckModel extends Model {
  @attr('boolean') full;
}
