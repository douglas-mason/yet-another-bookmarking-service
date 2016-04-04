(function(){
  'use strict';

  angular.module('bookmarkApp')
    .controller('ItemCtrl', function($routeParams, $scope){
      if($routeParams.id){
        $scope.id = $routeParams.id;
      }
    });
})();
