angular.module('caroline-website.home-module', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html',
                controller: 'Controller'
            });

        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.when('/', '/home');
    });
