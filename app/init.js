var app = require('express')();

// routing
// require('./routes/getMembros')(app);

require('consign')()
    .include('app/routes')
    .then('database/').
    .into(app);

module.exports = app;