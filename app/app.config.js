/**
 * Created by negr on 6/28/2017.
 */
'use strict';
angular.module('tryangular')
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/", { template: "<blog-list></blog-list>" })
            .when("/about", { template: "<h1>About us</h1>" })
            .when("/blog/1", { template: "<h1> Hi, from blog 1 </h1>" })
            .when("/blog/2", { template: "<blog-list></blog-list>" })
            .otherwise({ template: "Not found !" });
    } );