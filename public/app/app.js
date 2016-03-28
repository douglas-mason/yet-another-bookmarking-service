(function(){
  angular.module("bookmarkApp").config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: "main/main.html",
      controller: "MainCtrl",
      controllerAs: "ctrl"
    });
  });
})();
