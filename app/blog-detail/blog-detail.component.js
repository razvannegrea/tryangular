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

            $scope.addReply = function() {
                console.log($scope.reply);
                $scope.post.comments.push($scope.reply);

                resetReply($scope);
            }

            $scope.deleteComment = function(comment) {
                console.log("Delete comment " + comment.text);
                $scope.$apply(
                    $scope.post.comments.splice($scope.post.comments.indexOf(comment), 1)
                );
            }

            Post.query(function(data){
                $scope.notFound = true;
                angular.forEach(data, function(post){
                    if (post.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = post;
                        //Initialize a reply:
                        resetReply($scope);
                    }
                });
                redirectToHome($scope.notFound);
            });

            function resetReply(scope){
                scope.reply = {
                    "id" : scope.post.comments ? scope.post.comments.length  + 1 : 1,
                    "text" : ""
                };
            }
            
            function redirectToHome(notFound){
                if (notFound) {
                    $location.path("/");
                }
            }
        }
    });