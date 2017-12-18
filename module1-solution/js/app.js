(function(){
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunch = '';
  $scope.lunchItems = undefined;
  $scope.checkLunch = function(){
    var items = $scope.lunch.split(',');
    $scope.lunchItems = [];
    for (var i=0; i<items.length; i++){
      var trimmedItem = items[i].trim();
      if(trimmedItem){
        $scope.lunchItems.push(trimmedItem);
      }
    }
  },
  $scope.getLunchMessage = function(){
    if($scope.lunchItems == undefined){
      return;
    }
    var message = 'Please enter data first';
    if($scope.lunchItems.length > 0){
      if($scope.lunchItems.length <= 3){
        message = 'Enjoy!';
      }else if ($scope.lunchItems.length > 3){
        message = 'Too much!';
      }
    }
    return message;
  }
}
})();

