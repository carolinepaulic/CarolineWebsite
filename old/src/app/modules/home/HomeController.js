(function () {
    function HomeController($scope, NavigationService) {
        $scope.goToProfessionalPage = function() {
            NavigationService.goToProfessionalPage();
        };

        $scope.goToAllProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };

        $scope.goToHireMePage = function() {
          NavigationService.goToHireMePage();
        };
    }

    angular
        .module('caroline-website.HomeModule')
        .controller('HomeController', ['$scope', 'NavigationService', HomeController]);
})();
