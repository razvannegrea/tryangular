/**
 * Created by negr on 7/6/2017.
 */
'use strict';

angular.module('tryNav', [])
    .directive('tryNav', function() {
       return {
           restrict: "E",
           templateUrl: "/templates/try-nav.html",
           link: function(scope, element, attr){

           }
       }
    });