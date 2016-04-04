(function(){
  'use strict';

  angular.module("bookmarkApp").component("itemEditor", {
    templateUrl: "/scripts/itemEditor/itemEditor.html",
    controller: function($scope, BookmarkService){
      var ctrl = this;
      BookmarkService.getBookmark($scope.$parent.id).
        then(function(resp){
          ctrl.bookmark = resp.data;
        });
    }
  });
})();
