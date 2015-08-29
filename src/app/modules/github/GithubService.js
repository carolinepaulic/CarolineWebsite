(function() {
    function GithubService($http) {
        var baseUrl = "https://api.github.com/";

        this.getCarolinePaulicUserEvents = function() {
            return $http({
                url: baseUrl + 'users/carolinepaulic/events',
                method: "GET"
            });
        };

        this.getCarolineWebsiteEvents = function() {
            return $http({
                url: baseUrl + 'repos/carolinepaulic/CarolineWebsite/events',
                method: "GET"
            });
        };
    }

    angular.module('caroline-website.GithubModule')
        .service('GithubService', ['$http', GithubService]);
})();