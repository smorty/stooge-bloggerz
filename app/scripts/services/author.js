'use strict';

angular.module('stoogeBloggerzApp')
  .service('Author', function Author(Blog) {
    var posts = Blog.getPosts();
	this.getAuthors = function(){
		var auth = ['All'];
		var hash = {};
		for (var i=0; i<posts.length; i++){
			if (!(posts[i].author in hash)){
				auth.push(posts[i].author);
				hash[posts[i].author] = true;
				console.log(hash);
			};
			console.log(auth);
		};
		return auth;
	};
});
