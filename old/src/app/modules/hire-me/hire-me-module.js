angular.module('caroline-website.hire-me-module', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('hire-me', {
                url: '/hire',
                templateUrl: 'modules/hire-me/hire-me.html',
                controller: 'HireMeController'
            });
    });
