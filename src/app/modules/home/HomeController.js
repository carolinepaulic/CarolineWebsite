(function () {
    function HomeController($scope, HomeService) {
        $scope.hi = HomeService.getHomeText();
    }

    angular
        .module('caroline-website.HomeModule')
        .controller('HomeController', ['$scope', 'HomeService', HomeController]);
})();
