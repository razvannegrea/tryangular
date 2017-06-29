/**
 * Created by negr on 6/28/2017.
 */
'use strict';
angular.module('tryangular')
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/", { template: "<blog-list></blog-list>" })
            .when("/about", { templateUrl: "/about.html" })
            .when("/blog/:id", { template: "<blog-detail></blog-detail>" })
            .otherwise({ template: "Not found !" });
    } );