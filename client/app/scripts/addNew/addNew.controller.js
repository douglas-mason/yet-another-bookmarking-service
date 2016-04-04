'use strict';

(function(){
  angular.module('bookmarkApp').
    controller('addNewCtrl', function(BookmarkService){
      var ctrl = this;
      ctrl.bookmark = {};
      ctrl.addClick = function(){
        if(ctrl.bookmark){
          BookmarkService.save(ctrl.bookmark).then(function(resp){
            ctrl.bookmark = {};
          });
        }
      };
    });
})();
