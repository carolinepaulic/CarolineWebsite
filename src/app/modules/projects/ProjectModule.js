angular.module('caroline-website.ProjectModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('allProjects', {
                url: '/allProjects',
                templateUrl: 'modules/projects/AllProjectsView.html',
                controller: 'AllProjectsController'
            })
            .state('/project/:projectId', {
                url: '/project/:projectId',
                templateUrl: 'modules/projects/SingleProjectView.html',
                controller: 'SingleProjectController'
            });
    });