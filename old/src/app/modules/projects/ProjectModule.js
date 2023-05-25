angular.module('caroline-website.ProjectModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('allProjects', {
                url: '/allProjects',
                templateUrl: 'modules/projects/AllProjectsView.html',
                controller: 'AllProjectsController'
            })
            .state('project', {
                url: '/project/:projectId',
                templateUrl: 'modules/projects/SingleProjectView.html',
                controller: 'SingleProjectController'
            });
    });