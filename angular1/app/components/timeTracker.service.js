(function() {
  "use strict";

  angular
    .module("myApp.TimeTracker", [])
    .service("TimeTracker", function () {
      var reviewListLoaded = null;

      this.reviewListLoaded = function () {
        return reviewListLoaded;
      };

      this.setReviewListLoaded = function (date) {
        reviewListLoaded = date;
      };
    });

})();