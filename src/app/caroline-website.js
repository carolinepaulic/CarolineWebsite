angular.module('caroline-website.FooterModule', []);
angular.module('caroline-website.HomeModule', []).config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'modules/home/HomeView.html',
      controller: 'HomeController'
    });
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.when('/', '/home');
  }
]);
angular.module('caroline-website.ProfessionalModule', []).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('professional', {
      url: '/professional',
      templateUrl: 'modules/professional/ProfessionalView.html',
      controller: 'ProfessionalController'
    });
  }
]);
angular.module('caroline-website.ProjectModule', []).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('allProjects', {
      url: '/allProjects',
      templateUrl: 'modules/projects/AllProjectsView.html',
      controller: 'AllProjectsController'
    }).state('project', {
      url: '/project/:projectId',
      templateUrl: 'modules/projects/SingleProjectView.html',
      controller: 'SingleProjectController'
    });
  }
]);
angular.module('caroline-website.ReadingModule', []);
angular.module('caroline-website.SidebarModule', []);
(function () {
  function FooterController($scope) {
    $scope.getCurrentDate = function () {
      return Date.now();
    };
  }
  angular.module('caroline-website.FooterModule').controller('FooterController', [
    '$scope',
    FooterController
  ]);
}());
(function () {
  function HomeController($scope, NavigationService) {
    $scope.goToProfessionalPage = function () {
      NavigationService.goToProfessionalPage();
    };
    $scope.goToAllProjectsPage = function () {
      NavigationService.goToAllProjectsPage();
    };
  }
  angular.module('caroline-website.HomeModule').controller('HomeController', [
    '$scope',
    'NavigationService',
    HomeController
  ]);
}());
(function () {
  function HomeService($http) {
    this.getHomeText = function () {
      return 'hola';
    };
  }
  angular.module('caroline-website.HomeModule').service('HomeService', [
    '$http',
    HomeService
  ]);
}());
(function () {
  function ProfessionalController($scope, NavigationService) {
    $scope.goToSoftwareProjectsPage = function () {
      NavigationService.goToAllProjectsPage();
    };
  }
  angular.module('caroline-website.ProfessionalModule').controller('ProfessionalController', [
    '$scope',
    'NavigationService',
    ProfessionalController
  ]);
}());
(function () {
  function AllProjectsController($scope, ProjectService, NavigationService) {
    $scope.filterBy = function () {
    };
    $scope.filterBy = function (filterBy) {
    };
    $scope.goToProjectPage = function (project) {
      NavigationService.goToSingleProjectPage(project.id);
    };
    function load() {
      $scope.filters = ProjectService.getProjectFilters();
      $scope.allProjects = ProjectService.getAllProjects();
      $scope.filterBy = 'All';
      angular.forEach($scope.allProjects, function (project) {
        project.isShowing = true;
      });
    }
    load();
  }
  angular.module('caroline-website.ProjectModule').controller('AllProjectsController', [
    '$scope',
    'ProjectService',
    'NavigationService',
    AllProjectsController
  ]);
}());
(function () {
  function ProjectService() {
    this.projectImageDirectory = 'resources/images/projects/';
    this.getProjectWithId = function (projectId) {
      var projects = this.getAllProjects();
      var projectToReturn = null;
      angular.forEach(projects, function (project) {
        if (project.id == projectId) {
          projectToReturn = project;
        }
      });
      return projectToReturn;
    };
    this.getAllProjects = function () {
      return [{
          id: 1,
          name: 'This Website',
          tagline: '',
          dateRange: 'Started July 2015',
          thumbnailPath: this.projectImageDirectory + 'PersonalWebsiteThumbnail.png',
          imagePath: '',
          about: 'My personal website that I built using HTML, CSS, BootStrap, JavaScript, and AngularJS. This project is ' + 'still in progress.',
          githubUrl: 'https://github.com/carolinepaulic/CarolineWebsite',
          goals: [
            {
              name: 'Build a single page application from scratch',
              complete: true
            },
            {
              name: 'Learn about and implement Sass',
              complete: false
            },
            {
              name: 'Learn about and implement a build tool',
              complete: false
            },
            {
              name: 'Learn about and implement a chart using D3',
              complete: false
            },
            {
              name: 'Get practice designing for mobile devices',
              complete: false
            },
            {
              name: 'Showcase my software portfolio',
              complete: true
            },
            {
              name: 'Gain a deeper understanding of HTML, CSS, JavaScript, AngularJS, and overall website design',
              complete: true
            }
          ],
          challenges: 'This was my first time building an Angular application from scratch by myself, so I hit ' + 'a few bumps when I was initially setting up the project. I had trouble making sure all of the Angular ' + 'pieces were working together properly, but once I got past that I didn\'t have many technical issues. ' + 'It was surprisingly difficult to design a website from scratch with no external guidance regarding ' + 'what content to include. At work, I\'m used to having a client determine the information that will be ' + 'shown, and I struggled quite a bit when it came time to decide what content to ditch and what to keep.',
          thingsLearned: [
            'How to build an Angular application from scratch',
            'A lot of random things about HTML, CSS, and JavaScript',
            'How to deploy a web application using a hosting website',
            'Writing an entire website full of information about yourself is harder than it sounds'
          ],
          tags: ['software']
        }];
    };
    this.getProjectFilters = function () {
      return [
        {
          name: 'View All',
          icon: '',
          isSelected: true
        },
        {
          name: 'Software',
          icon: 'fa fa-laptop',
          isSelected: false
        },
        {
          name: 'Baking',
          icon: 'fa fa-birthday-cake',
          isSelected: false
        },
        {
          name: 'Cooking',
          icon: 'glyphicon glyphicon-cutlery',
          isSelected: false
        },
        {
          name: 'Health',
          icon: 'fa fa-heartbeat',
          isSelected: false
        },
        {
          name: 'Arts & Crafts',
          icon: 'fa fa-paint-brush',
          isSelected: false
        }
      ];
    };
  }
  angular.module('caroline-website.ProjectModule').service('ProjectService', [ProjectService]);
}());
(function () {
  function SingleProjectController($scope, $stateParams, ProjectService, NavigationService) {
    $scope.filters = ProjectService.getProjectFilters();
    $scope.allProjects = ProjectService.getAllProjects();
    $scope.filterBy = function (filterBy) {
      angular.forEach($scope.filters, function (filter) {
        filter.iSSelected = false;
      });
      filterBy.isSelected = true;
    };
    $scope.goToProjectPage = function (project) {
      NavigationService.goToSingleProjectPage(project.id);
    };
    function load() {
      console.info($stateParams);
      $scope.project = ProjectService.getProjectWithId($stateParams.projectId);
    }
    load();
  }
  angular.module('caroline-website.ProjectModule').controller('SingleProjectController', [
    '$scope',
    '$stateParams',
    'ProjectService',
    'NavigationService',
    SingleProjectController
  ]);
}());
(function () {
  function CurrentlyReadingController($scope, ReadingService) {
    function getMostRecentBook() {
      return $scope.booksRead[$scope.booksRead.length - 1];
    }
    $scope.getTitle = function () {
      if (getMostRecentBook().active) {
        return 'Currently Reading';
      }
      return 'Previously Read';
    };
    function load() {
      $scope.booksRead = ReadingService.getAllBooksRead();
      angular.forEach($scope.booksRead, function (book) {
        book.active = false;
      });
      getMostRecentBook().active = true;
    }
    load();
  }
  function CurrentlyReading() {
    return {
      restrict: 'A',
      templateUrl: 'modules/reading/CurrentlyReading.html',
      controller: [
        '$scope',
        'ReadingService',
        CurrentlyReadingController
      ]
    };
  }
  angular.module('caroline-website.ReadingModule').directive('currentlyReading', [CurrentlyReading]);
}());
(function () {
  function ReadingService() {
    this.bookImageDirectory = 'resources/images/books/';
    //Results are sorted chronologically- last book that was read is the last in the list
    this.getAllBooksRead = function () {
      return [
        {
          title: '100 Things Every Designer Needs to Know About People',
          author: 'Susan Weinschenk',
          imagePath: this.bookImageDirectory + '100Things.jpg',
          url: 'http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535'
        },
        {
          title: 'Usable Usability: Simple Steps for Making Stuff Better',
          author: 'Eric Reiss',
          imagePath: this.bookImageDirectory + 'UsableUsability.jpg',
          url: 'http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471'
        },
        {
          title: 'Evil by Design',
          author: 'Chris Nodder',
          imagePath: this.bookImageDirectory + 'EvilByDesign.jpg',
          url: 'http://evilbydesign.info/book/'
        }
      ];
    };
  }
  angular.module('caroline-website.ReadingModule').service('ReadingService', [ReadingService]);
}());
(function () {
  function NavigationService($state) {
    this.goToHomePage = function () {
      $state.go('home');
    };
    this.goToAllProjectsPage = function () {
      $state.go('allProjects');
    };
    this.goToSingleProjectPage = function (projectId) {
      $state.go('project', { 'projectId': projectId });
    };
    this.goToProfessionalPage = function () {
      $state.go('professional');
    };
  }
  angular.module('caroline-website.SidebarModule').service('NavigationService', [
    '$state',
    NavigationService
  ]);
}());
(function () {
  function SidebarController($scope, NavigationService) {
    $scope.goHome = function () {
      NavigationService.goToHomePage();
    };
    $scope.goToAllProjectsPage = function () {
      NavigationService.goToAllProjectsPage();
    };
    $scope.goToProfessionalPage = function () {
      NavigationService.goToProfessionalPage();
    };
  }
  angular.module('caroline-website.SidebarModule').controller('SidebarController', [
    '$scope',
    'NavigationService',
    SidebarController
  ]);
}());
angular.module('caroline-website', [
  'ui.router',
  'ui.bootstrap',
  'ngRoute',
  'caroline-website.SidebarModule',
  'caroline-website.HomeModule',
  'caroline-website.ProjectModule',
  'caroline-website.ReadingModule',
  'caroline-website.ProfessionalModule',
  'caroline-website.FooterModule'
]);