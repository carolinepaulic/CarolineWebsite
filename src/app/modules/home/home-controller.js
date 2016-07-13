(function () {
    function Controller($scope, NavigationService) {
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
        .module('caroline-website.home-module')
        .controller('Controller', ['$scope', 'NavigationService', Controller]);
})();
