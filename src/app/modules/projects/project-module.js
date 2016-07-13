angular.module('caroline-website.project-module', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('allProjects', {
        url: '/allProjects',
        templateUrl: 'modules/projects/all-projects.html'
      })
      .state('project', {
        url: '/project/:projectId',
        templateUrl: 'modules/projects/single-project.html'
      });
  });
