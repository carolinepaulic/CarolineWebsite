(function() {
    function AllProjectsController($scope, ProjectService, NavigationService) {
        $scope.filterBy = function() {

        };

        $scope.filterBy = function(filterBy) {
            console.info("here");
/*            angular.forEach($scope.filters, function(filter) {
                filter.iSSelected = false;
            });

            filterBy.isSelected = true;
            $scope.filterBy = filteryBy.name;
            console.info($scope.filterBy);

            angular.forEach($scope.allProjects, function(project) {
                angular.forEach(project.tags, function(tag) {
                    if (tag == $scope.filterBy) {
                        project.isShowing = true;
                    }
                });
            });*/
        };

        $scope.goToProjectPage = function(project) {
            NavigationService.goToSingleProjectPage(project.id);
        };

        function load() {
            $scope.filters = ProjectService.getProjectFilters();
            $scope.allProjects = ProjectService.getAllProjects();
            $scope.filterBy = "All";

            angular.forEach($scope.allProjects, function(project) {
                project.isShowing = true;
            })
        }

        load();
    }

    angular
        .module('caroline-website.ProjectModule')
        .controller('AllProjectsController', ['$scope', 'ProjectService', 'NavigationService', AllProjectsController])
})();