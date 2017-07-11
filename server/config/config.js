let config = {
  db: {
    url: 'postgres://kwhhvcca:6VVKiscEUlx5eXWKIha2DFeo36ePS9r7@babar.elephantsql.com:5432/kwhhvcca',
    options: {
      host: 'localhost',
      dialect: 'postgres',

      pool: {
          max: 5,
          min: 0,
          idle: 1000
      }
    }
  },
  port: 8081
}

module.exports = config;