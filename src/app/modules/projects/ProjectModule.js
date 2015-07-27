angular.module('caroline-website.ProjectModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('allProjects', {
                url: '/allProjects',
                templateUrl: 'modules/projects/AllProjectsView.html',
                controller: 'ProjectController'
            });
    });