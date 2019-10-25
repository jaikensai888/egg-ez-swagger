'use strict';

const mock = require('egg-mock');

describe('test/egg-ez-swagger.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-ez-swagger-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggEzSwagger')
      .expect(200);
  });
});
