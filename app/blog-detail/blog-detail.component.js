/**
 * Created by negr on 6/29/2017.
 */
'use strict';
angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: "/templates/blog-detail.html",
        controller: function ($http, $location, $routeParams, $scope) {
            $scope.title = "Blog " + $routeParams.id;
            $scope.notFound = true;

            function successCallback(response, status, configuration, statusText){
                $scope.notFound = true;

                var blogItems = response.data;
                $scope.posts = blogItems;
                angular.forEach(blogItems, function(blogItem) {
                    if (blogItem.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = blogItem;
                    }
                });
                redirectToHome($scope.notFound);
            }

            function errorCallback(response, status, configuration, statusText) {
                $scope.notFound = false;
                redirectToHome($scope.notFound);
            }

            function redirectToHome(notFound){
                if (notFound) {
                    $location.path("/");
                }
            }


            $http.get("/json/posts.json").then(successCallback, errorCallback);
        }
    });