var copy = require('copy');

copy.one('CNAME', 'docs', function(err, file) {
    if (err) throw err;
  });