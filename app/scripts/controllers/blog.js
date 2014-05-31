'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Author) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      ];
    $scope.blogPosts = Blog.getPosts();
    $scope.authors = Author.getAuthors();

    $scope.filters = {};
    var selected = 0;
    $scope.filterData = function(index){
    	if(index === 0){
    		$scope.filters.author = '';
    	} else {
    		$scope.filters.author = $scope.authors[index];
    	}

    	selected = index;
    	$scope.activeClass = function(index){
    		if(index === selected){
    			return true;
    		}
    	}
    }
  });
