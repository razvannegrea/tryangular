/**
 * Created by negr on 6/29/2017.
 */
'use strict';
angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: "/templates/blog-detail.html",
        controller: function ($location, $routeParams, $scope) {
            var blogItems = [
                {title: "Blog title 1", id: 1, description: "Some description 1", publishDate: "2017-06-29"},
                {title: "Blog title 2", id: 2, description: "Some description 2", publishDate: "2017-06-28"},
                {title: "Blog title 3", id: 3, description: "Some description 3"},
                {title: "Blog title 4", id: 4, description: "Some description 4", publishDate: "2017-06-20"}
            ];

            $scope.title = "Blog " + $routeParams.id;
            $scope.notFound = true;
            angular.forEach(blogItems, function(blogItem) {
                if (blogItem.id == $routeParams.id) {
                    $scope.notFound = false;
                    $scope.post = blogItem;
                }
            });

            if ($scope.notFound) {
                $location.path("/404");
            }
        }
    });