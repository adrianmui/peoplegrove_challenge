const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('./../../src/server/server');
const db = require('./../../src/server/config/db');

describe('routes : auth', () => {
  describe('POST /auth/register', () => {
    it('should register a new user', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        email: 'admin@admin.com'
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        done();
      });
    });
  });
});
