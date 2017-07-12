const app = require('./src/server/server');
const config = require('./src/server/config/config');

app.listen(config.port);

console.log(`listening to on http://localhost:${config.port}`);