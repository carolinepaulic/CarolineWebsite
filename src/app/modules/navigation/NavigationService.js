(function () {
    function NavigationService($state) {
        this.goToHomePage = function() {
            $state.go('home');
        };

        this.goToHireMePage = function() {
          $state.go('hire-me');
        };

        this.goToAllProjectsPage = function() {
            $state.go('allProjects');
        };

        this.goToSingleProjectPage = function(projectId) {
            $state.go('project', {'projectId': projectId});
        };

        this.goToProfessionalPage = function() {
            $state.go('professional');
        };
    }

    angular
        .module('caroline-website.navigation-module')
        .service('NavigationService', ['$state', NavigationService]);
})();
