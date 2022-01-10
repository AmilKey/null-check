import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    const models = {
      data: [
        {
          id: 1,
          type: 'test',
          attributes: {
            name: 'test',
          },
          relationships: {
            checks : {
              data: [
                { type: "check", id: "1" },
                { type: "check", id: "2" },
                { type: "check", id: "3" }
              ]
            }
          }
        },
        {
          id: 1,
          type: 'check',
          attributes: {
            full: false,
          },
          relationships: {}
        },
        {
          id: 2,
          type: 'check',
          attributes: {
            full: true,
          },
          relationships: {}
        },
        {
          id: 3,
          type: 'check',
          attributes: {
            full: false,
          },
          relationships: {}
        }
      ]
    };

    this.store.pushPayload(models);

    return this.store.peekRecord('test', 1);
  }
}
