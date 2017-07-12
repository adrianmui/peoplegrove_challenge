const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('./../../src/server/server');
const db = require('./../../src/server/config/db');

chai.use(chaiHttp);

describe('POST /auth/login', () => {
  it('should login a user', (done) => {
    chai.request(server)
    .post('/auth/login')
    .send({email: 'test@test.com'})
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

describe('GET /auth/logout', () => {
  it('should logout a user after he has logged in', (done) => {
    let chow = chai.request(server);

    chow.post('/auth/login')
      .send({email: 'admin@admin.com'})
      .then(() => {
        chow.get('/auth/logout')
          .end((err, res) => {
            should.not.exist(err);
            res.redirects.length.should.eql(0);
            res.status.should.eql(200);
            res.type.should.eql('application/json');
            res.body.status.should.eql('success');
            done();
          });
      })
  });
});
