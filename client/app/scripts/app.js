'use strict';

(function(){
  angular
    .module('bookmarkApp', [
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'scripts/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'ctrl'
        })
        .when('/bookmark/:id', {
          templateUrl: 'scripts/item/item.html',
          controller: 'ItemCtrl',
          controllerAs: 'ctrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
