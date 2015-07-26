(function() {
    function ProfessionalController($scope) {
        $scope.hi = "holaaa";
    }

    angular
        .module('caroline-website.ProfessionalModule')
        .controller('ProfessionalController', ['$scope', ProfessionalController])
})();