(function(){
  'use strict';

  angular.module('bookmarkApp').filter('markdownToHtml', function($sce){
    return function(input){
      return markdown.toHTML(input);
    };
  });
})();
