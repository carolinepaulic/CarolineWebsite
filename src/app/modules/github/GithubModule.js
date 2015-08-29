angular.module('caroline-website.GithubModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('github', {
                url: '/github',
                templateUrl: 'modules/github/GithubTest.html'
            });
    });