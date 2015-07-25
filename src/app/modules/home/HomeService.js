(function () {
    function HomeService($http) {
        this.getHomeText = function() {
            return "hola";
        }
    }

    angular
        .module('caroline-website.HomeModule')
        .service('HomeService', ['$http', HomeService]);
})();