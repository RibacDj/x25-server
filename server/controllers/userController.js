const path = require('path');

exports.home = (req, res) => {
  // es.send(path.join(global.appRoot, '/client/build/index.html'));
  res.sendFile(path.join(global.appRoot, '/client/build/index.html'));
};
