(function() {
    function SingleProjectController($scope, $stateParams, ProjectService, NavigationService) {
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

        function load() {
            console.info($stateParams);
            $scope.project = ProjectService.getProjectWithId($stateParams.projectId);
        }

        load();
    }

    angular
        .module('caroline-website.ProjectModule')
        .controller('SingleProjectController', ['$scope', '$stateParams', 'ProjectService', 'NavigationService', SingleProjectController])
})();