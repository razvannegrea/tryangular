/**
 * Created by negr on 6/28/2017.
 */
'use strict'

angular.module('tryangular', [
    //external
    'angularUtils.directives.dirPagination',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',

    //internal
    'blogDetail',
    'blogList',
    'confirmClick',
    'tryNav'
]);