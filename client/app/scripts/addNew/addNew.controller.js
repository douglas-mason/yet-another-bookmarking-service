'use strict';

(function(){
  angular.module('bookmarkApp').
    controller('addNewCtrl', function(BookmarkService){
      this.bookmark = {};
      this.addClick = function(){
        if(this.bookmark){
          BookmarkService.save(this.bookmark);
        }
      };
    });
})();
