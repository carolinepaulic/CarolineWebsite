(function() {
    function SidebarController($scope, NavigationService) {
        $scope.goHome = function() {
            NavigationService.goToHomePage();
        };

        $scope.goToAllProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };

        $scope.goToProfessionalPage = function() {
            NavigationService.goToProfessionalPage();
        }
    }

    angular.module('caroline-website.SidebarModule')
        .controller('SidebarController', ['$scope', 'NavigationService', SidebarController]);
})();