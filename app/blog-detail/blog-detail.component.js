/**
 * Created by negr on 6/29/2017.
 */
'use strict';
angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: "/templates/blog-detail.html",
        controller: function (Post, $http, $location, $routeParams, $scope) {
            $scope.title = "Blog " + $routeParams.id;
            $scope.notFound = true;

            Post.query(function(data){
                $scope.notFound = true;
               angular.forEach(data, function(post){
                   if (post.id == $routeParams.id) {
                       $scope.notFound = false;
                       $scope.post = post;
                   }
               });
               redirectToHome($scope.notFound);
            });


            function redirectToHome(notFound){
                if (notFound) {
                    $location.path("/");
                }
            }
        }
    });