var getNotices = function(dbSession, res) {
	dbSession.fetchAll('SELECT * FROM notices', null, function(err, result) {
		res.json(result);
	})
}

module.exports = getNotices;