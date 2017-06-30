/**
 * Created by negr on 6/30/2017.
 */
'use strict';
angular.module('confirmClick')
    .directive('confirmClick', function() {
        return {
            scope: {
                message: "@message",
                eq: "=eq",
                post: "=post"
            },
            restrict: "E",
            template: "<a ng-href='/blog/{{ post.id }}'>{{ post.title }} - {{ post.publishDate }}</a>",
            link: function (scope, element, attr) {

                var msg = scope.message || "Are you sure ?";
                //console.log(scope.message);
                //console.log(scope.eq);
                //console.log(scope.post);
                //console.log(element);
                //console.log(attr);
                //console.log(attr.ngHref);
                //console.log(attr.href);
            }
        }
    });