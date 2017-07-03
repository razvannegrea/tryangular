/**
 * Created by negr on 6/28/2017.
 */
'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: "/templates/blog-list.html",
        controller: function(Post, $location, $routeParams, $rootScope, $scope) {
            $scope.items = Post.query();
            $scope.title = 'Hi, there';
            $scope.goToItem = function(post) {
                $rootScope.$apply(function(){
                    $location.path("/blog/" + post.id)
                });
            }
        }
    });
