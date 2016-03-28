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
        .otherwise({
          redirectTo: '/'
        });
    });
})();
