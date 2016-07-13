(function() {
  function Controller($scope, NavigationService) {
    $scope.goToHomePage = function() {
      NavigationService.goToHomePage();
    };

    $scope.goToHireMePage = function() {
      NavigationService.goToHireMePage();
    };
  }


  function Directive() {
    return {
      restrict: 'A',
      templateUrl: 'modules/navigation/navigation.html',
      controller: ['$scope', 'NavigationService', Controller]
    };
  }

  angular
    .module('caroline-website.navigation-module')
    .directive('navigation', [Directive]);
})();
