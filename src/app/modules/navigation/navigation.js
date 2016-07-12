(function() {
  function Controller($scope, NavigationService) {
    $scope.test = "yo";
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
