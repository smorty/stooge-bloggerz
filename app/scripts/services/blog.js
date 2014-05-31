'use strict';

angular.module('stoogeBloggerzApp')
  .service('Blog', function Blog() {
    var posts = [
	  { title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
	  { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
	  { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
	  { title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
	];
	this.getPosts = function(){
		return posts;
	};
});
