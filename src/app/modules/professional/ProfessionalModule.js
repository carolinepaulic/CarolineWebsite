angular.module('caroline-website.ProfessionalModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('professional', {
                url: '/professional',
                templateUrl: 'modules/professional/ProfessionalView.html',
                controller: 'ProfessionalController'
            });
    });