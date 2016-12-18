var getUsers = function(dbSession, res) {
	dbSession.fetchAll("SELECT * from users", null, function(err, response) {
		res.json(response);
	})
}
module.exports = getUsers;