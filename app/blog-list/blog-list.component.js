/**
 * Created by negr on 6/28/2017.
 */
'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: "/templates/blog-list.html",
        controller: function($scope) {
            var blogItems = [
                {title: "Blog title 1", id: 1, description: "Some description 1"},
                {title: "Blog title 2", id: 2, description: "Some description 2"},
                {title: "Blog title 3", id: 3, description: "Some description 3"},
                {title: "Blog title 4", id: 4, description: "Some description 4"}
            ];

            $scope.items = blogItems;

            $scope.title = 'Hi, there';
            $scope.clicks = 0;
            $scope.someClickTest = function() {
                console.log('Clicked');
                $scope.clicks += 1;
                $scope.title = 'Clicked ' + $scope.clicks;
            }
        }
    });
