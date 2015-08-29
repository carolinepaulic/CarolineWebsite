(function() {
    function GithubService($http) {

    }

    angular.module('caroline-website.GithubModule')
        .service('GithubService', ['$http', GithubService]);
})();