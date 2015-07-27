(function () {
    function NavigationService($state) {
        this.goToHomePage = function() {
            $state.go('home');
        };

        this.goToAllProjectsPage = function() {
            $state.go('allProjects');
        };

        this.goToSingleProjectPage = function(projectId) {
            $state.go('project/' + projectId);
        };

        this.goToProfessionalPage = function() {
            $state.go('professional');
        };
    }

    angular
        .module('caroline-website.SidebarModule')
        .service('NavigationService', ['$state', NavigationService]);
})();