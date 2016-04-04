(function(){
  'use strict';
  angular.module('bookmarkApp').service('BookmarkService', function($http, $rootScope){

    this.getBookmark = function(itemId){
      if(itemId){
        return $http.get(ENV.apiUrlRoot + '/bookmarks/'+ itemId);
      }
    };

    this.save = function(item){
      if(item){
        return $http.post(ENV.apiUrlRoot + '/bookmarks', {bookmark: item}).then(function(){
          $rootScope.$emit('bookmarkListModified');
          return;
        });
      }
    };

    this.update = function(item){
      if(item){
        return $http.put(ENV.apiUrlRoot + '/bookmarks', {bookmark: item}).then(function(){
          $rootScope.$emit('bookmarkUpdateComplete');
          return;
        });
      }
    };

    this.delete = function(itemId){
      return $http.delete(ENV.apiUrlRoot + '/bookmarks/' + itemId).then(function(){
      $rootScope.$emit('bookmarkListModified');
      return;
    });
  };

    this.getAllBookmarks = function(){
      return $http.get(ENV.apiUrlRoot + '/bookmarks');
    };
  });
})();
