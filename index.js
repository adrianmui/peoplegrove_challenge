const app = require('./server/server');
const config = require('./server/config/config');

app.listen(config.port);

console.log(`listening to on http://localhost:${config}`);