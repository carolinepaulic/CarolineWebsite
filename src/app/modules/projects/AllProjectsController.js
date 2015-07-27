(function() {
    function AllProjectsController($scope, ProjectService, NavigationService) {
        $scope.filters = ProjectService.getProjectFilters();
        $scope.allProjects = ProjectService.getAllProjects();

        $scope.filterBy = function(filterBy) {
            angular.forEach($scope.filters, function(filter) {
                filter.iSSelected = false;
            });

            filterBy.isSelected = true;
        };

        $scope.goToProjectPage = function(project) {
            NavigationService.goToSingleProjectPage(project.id);
        };
    }

    angular
        .module('caroline-website.ProjectModule')
        .controller('AllProjectsController', ['$scope', 'ProjectService', 'NavigationService', AllProjectsController])
})();