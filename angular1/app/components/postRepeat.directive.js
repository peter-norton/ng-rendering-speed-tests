(function() {
  "use strict";

  angular
    .module("myApp.postRepeat", [])
    .directive("postRepeat", postRepeat);

    /* @ngInject */
    function postRepeat($timeout, TimeTracker) {
      return function(scope) {
        if (scope.$last){
           $timeout(function(){
              var ref = new Date(TimeTracker.reviewListLoaded());
              var end = new Date();
              console.log("## DOM rendering list took: " + ((end - ref) / 1000) + " seconds");
           });
         }
      };
    }

})();