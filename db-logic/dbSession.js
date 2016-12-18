var DBWrapper = require('node-dbi').DBWrapper;

var dbWrapper = new DBWrapper( 'sqlite3', {path: '/var/tmp/db/notice-board.sqlite3'} );
dbWrapper.connect();

module.exports = dbWrapper;