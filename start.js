const path = require('path');
const app = require('./server/app');

global.appRoot = path.resolve(__dirname);

app.listen(80, () => console.log('Example app listening on port 80'));
