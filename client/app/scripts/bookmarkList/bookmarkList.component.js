(function(){
  'use strict';

  angular.module("bookmarkApp").component("bookmarkList", {
    templateUrl: "/scripts/bookmarkList/bookmarkList.html",
    controller: function(BookmarkService, $rootScope){
      var ctrl = this;
      var buildList = function(){
        BookmarkService.getAllBookmarks().then(function(response){
          ctrl.bookmarks = response.data;
        });
      };
      buildList();
      $rootScope.$on("bookmarkListModified", buildList);
    }
  });
})();
