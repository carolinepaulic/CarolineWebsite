(function() {
    function PersonalController($scope) {
        $scope.hi = "hola";
    }

    angular
        .module('caroline-website.PersonalModule')
        .controller('PersonalController', ['$scope', PersonalController])
})();