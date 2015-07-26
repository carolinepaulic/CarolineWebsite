(function () {
    function HomeController($scope, $state) {
        $scope.goToProfessionalPage = function() {
            $state.go('professional');
        };

        $scope.goToPersonalPage = function() {
            $state.go('personal');
        };
    }

    angular
        .module('caroline-website.HomeModule')
        .controller('HomeController', ['$scope', '$state', HomeController]);
})();
