(function() {
    function CurrentlyReadingController($scope, ReadingService) {
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


    function CurrentlyReading() {
        return {
            restrict: 'A',
            templateUrl: 'modules/reading/CurrentlyReading.html',
            controller: ['$scope', 'ReadingService', CurrentlyReadingController]
        }
    }

    angular
        .module('caroline-website.ReadingModule')
        .directive('currentlyReading', [CurrentlyReading]);
})();