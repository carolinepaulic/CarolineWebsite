(function() {
  function Controller($scope, ReadingService) {
    function getMostRecentBook() {
      return $scope.booksRead[$scope.booksRead.length - 1];
    }

    $scope.getTitle = function() {
      if (getMostRecentBook().active) {
        return "Currently Reading";
      }
      return "Previously Read";
    };

    function load() {
      $scope.booksRead = ReadingService.getAllBooksRead();
      angular.forEach($scope.booksRead, function(book) {
        book.active = false;
      });
      getMostRecentBook().active = true;
    }

    load();
  }

  function Directive() {
    return {
      restrict: 'A',
      templateUrl: 'modules/reading/currently-reading.html',
      controller: ['$scope', 'ReadingService', Controller]
    };
  }

  angular
    .module('caroline-website.reading-module')
    .directive('currentlyReading', [Directive]);
})();
