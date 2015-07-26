(function () {
    function FooterController($scope) {
        $scope.getCurrentDate = function() {
            return Date.now();
        }
    }

    angular
        .module('caroline-website.FooterModule')
        .controller('FooterController', ['$scope', FooterController]);
})();