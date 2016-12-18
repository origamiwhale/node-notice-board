

//////////////////////////////////////////////////////////////
//////DELETE EVERYTHING FROM DB
//////////////////////////////////////////////////////////////
function insert_users(dbSession) {
	var users_data = [
		{
			id: 1,
			name: "John"
		},
		{
			id: 2,
			name: "Ryu"
		},
		{
			id: 3,
			name: "Xiao Lung"
		}
	]
	for(var i in users_data) {
		dbSession.insert('users', users_data[i], function(err){
			if( !err )
				console.log("User inserted into DB");
		})	
	}
	
}

function insert_notices(dbSession) {
	var notices_data = [
		{
			id: 1,
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo felis nec leo auctor tempor. Sed a pretium odio, et posuere enim. Nam sed tempus risus. Duis scelerisque velit et neque aliquam, non cursus mauris iaculis. Aenean vel eros eget augue ullamcorper varius. Nunc sollicitudin sollicitudin ipsum quis varius. Donec dignissim pulvinar massa, eget finibus velit accumsan vestibulum. Cras eleifend condimentum bibendum. Phasellus vitae convallis quam. Ut egestas pharetra urna id accumsan. Ut tristique diam ac ex iaculis, a malesuada nisl vestibulum. Integer pellentesque sem ac turpis consectetur, a euismod risus pellentesque. Ut auctor ligula sollicitudin nulla auctor fermentum ut id erat. Nam ac mollis metus, id auctor arcu.",
			author_id: 1
		},
		{
			id: 2,
			content: "Morbi condimentum porttitor arcu, vitae viverra metus dictum sit amet. Quisque nec luctus mauris. Curabitur pharetra sit amet urna et ullamcorper. Morbi lacus turpis, luctus ac tincidunt a, luctus in mi. Cras faucibus mauris quis feugiat consequat. Donec risus lorem, ultricies eget risus quis, imperdiet tincidunt ante. Etiam ac sapien quis tortor tristique pellentesque id sed leo. Ut ornare, velit laoreet dignissim faucibus, eros sem cursus urna, id vestibulum velit eros condimentum sapien. Sed tempus sem a odio egestas tincidunt in id enim.",
			author_id: 2
		},
		{
			id: 3,
			content: "Sed eu nunc cursus, faucibus nunc et, pellentesque nulla. Vestibulum id urna nunc. Curabitur efficitur tincidunt nunc, ut consectetur purus semper eget. Fusce erat justo, tempor nec lobortis vitae, scelerisque eget dolor. Suspendisse vitae ipsum lectus. Vivamus finibus quam nec turpis fermentum, eu maximus eros varius. Donec ligula nisl, euismod a maximus eu, lacinia at metus. Vestibulum pulvinar, ipsum et maximus placerat, ex felis interdum tellus, eget tempus massa lacus eu ex. Aenean non risus et mauris porta lacinia.",
			author_id: 1
		},
		{
			id: 4,
			content: "Nullam blandit est nulla, in facilisis tortor dignissim nec. Proin tortor tortor, malesuada et consequat quis, elementum at nulla. Etiam posuere sed lacus eu laoreet. Aenean elit lorem, gravida eu nisi id, condimentum elementum neque. Sed ac facilisis lorem. Sed ac condimentum orci. In sed tellus faucibus, tristique justo vel, convallis urna.",
			author_id: 3
		},
		{
			id: 5,
			content: "Maecenas ullamcorper tellus vel orci vulputate, ut convallis risus aliquet. Sed eu posuere sem. Pellentesque quis risus nisi. Proin eu urna nisl. Vestibulum vulputate et velit eu fringilla. Donec vel interdum nunc. Maecenas dictum elit vitae eros pellentesque, sit amet scelerisque sem faucibus. Mauris egestas faucibus venenatis. Aenean tempor posuere felis, suscipit porta tortor facilisis sollicitudin. Vivamus commodo nibh est. Donec eu sapien lectus. Suspendisse iaculis magna a feugiat varius. Duis pulvinar posuere aliquet. Maecenas ac pellentesque turpis. Maecenas volutpat ultricies ante. Phasellus ut lectus diam.",
			author_id: 3
		}
	]
	for(var i in notices_data) {
		dbSession.insert('notices', notices_data[i], function(err){
			if( !err )
				console.log("Notice inserted into DB");
			else
				console.log(err);
		})	
	}
}

function remove_users(dbSession) {
	dbSession.remove('users', '1=1', function(resp){
		console.log("Cleaned table users: " + resp);
		insert_users(dbSession);
	});
}

function remove_notices(dbSession) {
	dbSession.remove('notices', '1=1', function(resp){
		console.log("Cleaned table notices: " + resp);
		insert_users(dbSession);
	});
}

var resetDb = function(dbSession) {
	remove_users(dbSession);
	insert_users(dbSession);
	remove_notices(dbSession);
	insert_notices(dbSession);
}

module.exports = resetDb;

