module.exports = {
  passport: {
    secret: 'ilovewaifu'
  },
  facebook: {
    APP_ID: 1944184189191283,
    APP_SECRET: '9f546b6cc5de2684f947af4cdc99341b'
  },
  db: {
    url: 'postgres://kwhhvcca:6VVKiscEUlx5eXWKIha2DFeo36ePS9r7@babar.elephantsql.com:5432/kwhhvcca',
    options: {
      dialect: 'postgres',
      pool: { max: 5, min: 0, idle: 1000 }
    }
  },
  port: 8081
}