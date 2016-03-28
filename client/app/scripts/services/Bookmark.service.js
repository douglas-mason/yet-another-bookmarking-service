(function(){
  'use strict';
  angular.module('bookmarkApp').service('BookmarkService', function($http){
    this.save = function(item){
      if(item){
        $http.post(ENV.apiUrlRoot + '/bookmarks', {bookmark: item}).then(function(response){
          //$scope.emit("", function(){});
        });
      }
    };

    this.getAllBookmarks = function(){
      return $http.get(ENV.apiUrlRoot + '/bookmarks');
    };
  });
})();
