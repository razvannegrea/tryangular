/**
 * Created by negr on 6/28/2017.
 */
'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: "/templates/blog-list.html",
        controller: function(Post, $routeParams, $scope) {
            $scope.items = Post.query();
            $scope.title = 'Hi, there';
        }
    });
