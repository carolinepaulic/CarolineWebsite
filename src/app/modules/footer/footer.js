(function() {
  function Controller($scope) {
    $scope.getCurrentDate = function() {
      return Date.now();
    };
  }

  function Directive() {
    return {
      restrict: 'A',
      templateUrl: 'modules/footer/footer.html',
      controller: ['$scope', Controller]
    };
  }

  angular
    .module('caroline-website.footer-module')
    .directive('footer', [Directive]);
})();
