(function(){
  var app = angular.module("bookmarkApp");
  app.controller("MainCtrl", function($http){
    var ctrl = this;
    $http.get("/bookmarks", function(data){
      ctrl.bookmarks = data;
    });
  });
})();
