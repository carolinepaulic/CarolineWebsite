(function () {
    function HomeController($scope, NavigationService) {
        $scope.goToProfessionalPage = function() {
            NavigationService.goToProfessionalPage();
        };

        $scope.goToAllProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };
    }

    angular
        .module('caroline-website.HomeModule')
        .controller('HomeController', ['$scope', 'NavigationService', HomeController]);
})();
