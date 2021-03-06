angular.module('myApp', [])
  .controller('MyController', function($scope, $timeout) {
    $scope.clock = {};
    var updateClock = function() {
      $scope.clock.now = new Date();
      $timeout(function() {
        updateClock();
      }, 1000);
    };
  updateClock();
  
})
  .controller('FirstController', function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) { $scope.counter += amount; };
    $scope.subtract = function(amount) { $scope.counter -= amount; };
})

   .controller('ParentController', function($scope) { 
    	$scope.person = {greeted: true};
    })
    
   .controller('ChildController', function($scope) { 
      $scope.sayHello = function() {
        $scope.person.name = "Denzyl Balram";
      };
    });

  