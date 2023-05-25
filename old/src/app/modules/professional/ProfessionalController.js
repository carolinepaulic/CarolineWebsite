(function() {
    function ProfessionalController($scope, NavigationService) {
        $scope.goToSoftwareProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };
    }

    angular
        .module('caroline-website.ProfessionalModule')
        .controller('ProfessionalController', ['$scope', 'NavigationService', ProfessionalController])
})();