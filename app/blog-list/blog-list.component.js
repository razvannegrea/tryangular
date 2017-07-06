/**
 * Created by negr on 6/28/2017.
 */
'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: "/templates/blog-list.html",
        controller: function(Post, $location, $routeParams, $rootScope, $scope) {
            $scope.title = 'Hi, there';
            $scope.order = "title";
            $scope.goToItem = function(post) {
                $rootScope.$apply(function(){
                    $location.path("/blog/" + post.id)
                });
            }

            $scope.changeCols = function(numberOfCols) {
                if (angular.isNumber(numberOfCols)) {
                    $scope.numCols = numberOfCols;
                }else {
                    $scope.numCols = 2;
                }
            }

            $scope.loadingQuery = false;
            $scope.$watch(function() {
               if ($scope.query) {
                   $scope.loadingQuery = true;
                   $scope.cssClass = 'col-sm-12';
               } else{
                   if ($scope.loadingQuery)
                   {
                       setupCol($scope.items, 2);
                       $scope.loadingQuery = false;
                   }
               }
            });

            function setupCol(data, numberOfCols) {
                $scope.items = data;
                //console.log("# of ITEMS " + data.length);
                if (angular.isNumber(numberOfCols)) {
                    $scope.numCols = numberOfCols;
                }else {
                    $scope.numCols = 2;
                }
                $scope.cssClass = 'col-sm-'+(12/$scope.numCols);
                $scope.colItems = chunkArrayInGroups($scope.items, $scope.numCols);
                //console.log("# of COL ITEMS " + $scope.colItems.length);
            }

            function chunkArrayInGroups(array, unit) {
                var results = [];
                var length = Math.ceil(array.length/unit);
                for (var i = 0; i < length; i++){
                    results.push(array.slice(i*unit, (i+1) * unit));
                }
                return results;
            }

            Post.query(
                function(data) {
                    setupCol(data, 4);
                },
                function(errorData) {

                });
        }
    });
