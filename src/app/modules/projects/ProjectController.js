(function() {
    function ProjectController($scope, ProjectService) {
        $scope.filters = ProjectService.getProjectFilters();
        $scope.allProjects = ProjectService.getAllProjects();

        $scope.filterBy = function(filterBy) {
            angular.forEach($scope.filters, function(filter) {
                filter.iSSelected = false;
            });

            filterBy.isSelected = true;
        }
    }

    angular
        .module('caroline-website.ProjectModule')
        .controller('ProjectController', ['$scope', 'ProjectService', ProjectController])
})();