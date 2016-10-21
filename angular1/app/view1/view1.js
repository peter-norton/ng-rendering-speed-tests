'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'TimeTracker', function($scope, $http, TimeTracker) {
  $scope.items = [];
  $scope.getInfo = getInfo;
  $scope.getTags = getTags;
  
  $http.get('view1/data.json')
    .then(function(res){
      TimeTracker.setReviewListLoaded(new Date());
      $scope.items = res.data;
      console.log('Completed');
    });

  function getInfo(item) {
    return item.company + item.address + item.about + item.phone + item.email;
  }

  function getTags(item) {
    var tags = "";
    for (var i=0; i < item.tags.length; i++) {
      tags = tags + item.tags[i];
    }
    return tags;
  }
}]);