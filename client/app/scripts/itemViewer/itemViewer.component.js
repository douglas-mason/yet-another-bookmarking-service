(function(){
  'use strict';

  angular.module('bookmarkApp').component('itemViewer', {
    templateUrl: 'scripts/itemViewer/itemViewer.html',
    controller: function($scope){
      if(!$scope.$parent.notes){
        $scope.$parent.notes = "";
      }
    }
  });
})();
