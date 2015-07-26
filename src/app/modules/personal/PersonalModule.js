angular.module('caroline-website.PersonalModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('personal', {
                url: '/personal',
                templateUrl: 'modules/personal/PersonalView.html',
                controller: 'PersonalController'
            });
    });