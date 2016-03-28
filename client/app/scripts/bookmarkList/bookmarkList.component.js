(function(){
  'use strict';

  angular.module("bookmarkApp").component("bookmarkList", {
    templateUrl: "/scripts/bookmarkList/bookmarkList.html",
    controller: function(BookmarkService){
      var ctrl = this;
      BookmarkService.getAllBookmarks().then(function(response){
        ctrl.bookmarks = response.data;
      });
    }
  });
})();
