angular.module('caroline-website.MapsModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                templateUrl: 'modules/maps/MapsTest.html'
            });
    });