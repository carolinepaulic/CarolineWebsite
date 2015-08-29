(function() {
    function GithubEventFeedController($scope) {

    }

    function GithubEventFeed() {
        return {
            restrict: 'A',
            templateUrl: 'modules/github/GithubEventFeed.html',
            controller: ['$scope', GithubEventFeedController]
        }
    }

    angular.module('caroline-website.GithubModule')
        .directive('githubEventFeed', GithubEventFeed);
})();