angular.module('caroline-website.FooterModule', []);

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/HomeView.html',
                controller: 'HomeController'
            });

        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.when('/', '/home');
    });

    .config(function($stateProvider) {
        $stateProvider
            .state('professional', {
                url: '/professional',
                templateUrl: 'modules/professional/ProfessionalView.html',
                controller: 'ProfessionalController'
            });
    });

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



    [
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

angular.module("caroline-website.FooterModule",[]),angular.module("caroline-website.HomeModule",[]).config(function(a,b){a.state("home",{url:"/home",templateUrl:"modules/home/HomeView.html",controller:"HomeController"}),b.when("","/home"),b.when("/","/home")}),angular.module("caroline-website.ProfessionalModule",[]).config(function(a){a.state("professional",{url:"/professional",templateUrl:"modules/professional/ProfessionalView.html",controller:"ProfessionalController"})}),angular.module("caroline-website.ProjectModule",[]).config(function(a){a.state("allProjects",{url:"/allProjects",templateUrl:"modules/projects/AllProjectsView.html",controller:"AllProjectsController"}).state("project",{url:"/project/:projectId",templateUrl:"modules/projects/SingleProjectView.html",controller:"SingleProjectController"})}),angular.module("caroline-website.ReadingModule",[]),angular.module("caroline-website.SidebarModule",[]),angular.module("caroline-website",["ui.router","ui.bootstrap","ngRoute","caroline-website.SidebarModule","caroline-website.HomeModule","caroline-website.ProjectModule","caroline-website.ReadingModule","caroline-website.ProfessionalModule","caroline-website.FooterModule"]),angular.module("caroline-website.FooterModule",[]),angular.module("caroline-website.HomeModule",[]).config(function(a,b){a.state("home",{url:"/home",templateUrl:"modules/home/HomeView.html",controller:"HomeController"}),b.when("","/home"),b.when("/","/home")}),angular.module("caroline-website.ProfessionalModule",[]).config(function(a){a.state("professional",{url:"/professional",templateUrl:"modules/professional/ProfessionalView.html",controller:"ProfessionalController"})}),angular.module("caroline-website.ProjectModule",[]).config(function(a){a.state("allProjects",{url:"/allProjects",templateUrl:"modules/projects/AllProjectsView.html",controller:"AllProjectsController"}).state("project",{url:"/project/:projectId",templateUrl:"modules/projects/SingleProjectView.html",controller:"SingleProjectController"})}),angular.module("caroline-website.ReadingModule",[]),angular.module("caroline-website.SidebarModule",[]),angular.module("caroline-website",["ui.router","ui.bootstrap","ngRoute","caroline-website.SidebarModule","caroline-website.HomeModule","caroline-website.ProjectModule","caroline-website.ReadingModule","caroline-website.ProfessionalModule","caroline-website.FooterModule"]),angular.module("caroline-website.FooterModule",[]),angular.module("caroline-website.HomeModule",[]).config(function(a,b){a.state("home",{url:"/home",templateUrl:"modules/home/HomeView.html",controller:"HomeController"}),b.when("","/home"),b.when("/","/home")}),angular.module("caroline-website.ProfessionalModule",[]).config(function(a){a.state("professional",{url:"/professional",templateUrl:"modules/professional/ProfessionalView.html",controller:"ProfessionalController"})}),angular.module("caroline-website.ProjectModule",[]).config(function(a){a.state("allProjects",{url:"/allProjects",templateUrl:"modules/projects/AllProjectsView.html",controller:"AllProjectsController"}).state("project",{url:"/project/:projectId",templateUrl:"modules/projects/SingleProjectView.html",controller:"SingleProjectController"})}),angular.module("caroline-website.ReadingModule",[]),angular.module("caroline-website.SidebarModule",[]),angular.module("caroline-website",["ui.router","ui.bootstrap","ngRoute","caroline-website.SidebarModule","caroline-website.HomeModule","caroline-website.ProjectModule","caroline-website.ReadingModule","caroline-website.ProfessionalModule","caroline-website.FooterModule"]),angular.module("caroline-website.FooterModule",[]),angular.module("caroline-website.HomeModule",[]).config(function(a,b){a.state("home",{url:"/home",templateUrl:"modules/home/HomeView.html",controller:"HomeController"}),b.when("","/home"),b.when("/","/home")}),angular.module("caroline-website.ProfessionalModule",[]).config(function(a){a.state("professional",{url:"/professional",templateUrl:"modules/professional/ProfessionalView.html",controller:"ProfessionalController"})}),angular.module("caroline-website.ProjectModule",[]).config(function(a){a.state("allProjects",{url:"/allProjects",templateUrl:"modules/projects/AllProjectsView.html",controller:"AllProjectsController"}).state("project",{url:"/project/:projectId",templateUrl:"modules/projects/SingleProjectView.html",controller:"SingleProjectController"})}),angular.module("caroline-website.ReadingModule",[]),angular.module("caroline-website.SidebarModule",[]),angular.module("caroline-website",["ui.router","ui.bootstrap","ngRoute","caroline-website.SidebarModule","caroline-website.HomeModule","caroline-website.ProjectModule","caroline-website.ReadingModule","caroline-website.ProfessionalModule","caroline-website.FooterModule"]),function(){function a(a){a.getCurrentDate=function(){return Date.now()}}angular.module("caroline-website.FooterModule").controller("FooterController",["$scope",a])}(),function(){function a(a,b){a.goToProfessionalPage=function(){b.goToProfessionalPage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.HomeModule").controller("HomeController",["$scope","NavigationService",a])}(),function(){function a(a){this.getHomeText=function(){return"hola"}}angular.module("caroline-website.HomeModule").service("HomeService",["$http",a])}(),function(){function a(a,b){a.goToSoftwareProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.ProfessionalModule").controller("ProfessionalController",["$scope","NavigationService",a])}(),function(){function a(a,b,c){function d(){a.filters=b.getProjectFilters(),a.allProjects=b.getAllProjects(),a.filterBy="All",angular.forEach(a.allProjects,function(a){a.isShowing=!0})}a.filterBy=function(){},a.filterBy=function(a){},a.goToProjectPage=function(a){c.goToSingleProjectPage(a.id)},d()}angular.module("caroline-website.ProjectModule").controller("AllProjectsController",["$scope","ProjectService","NavigationService",a])}(),function(){function a(){this.projectImageDirectory="resources/images/projects/",this.getProjectWithId=function(a){var b=this.getAllProjects(),c=null;return angular.forEach(b,function(b){b.id==a&&(c=b)}),c},this.getAllProjects=function(){return[{id:1,name:"This Website",tagline:"",dateRange:"Started July 2015",thumbnailPath:this.projectImageDirectory+"PersonalWebsiteThumbnail.png",imagePath:"",about:"My personal website that I built using HTML, CSS, BootStrap, JavaScript, and AngularJS. This project is still in progress.",githubUrl:"https://github.com/carolinepaulic/CarolineWebsite",goals:[{name:"Build a single page application from scratch",complete:!0},{name:"Learn about and implement Sass",complete:!1},{name:"Learn about and implement a build tool",complete:!1},{name:"Learn about and implement a chart using D3",complete:!1},{name:"Get practice designing for mobile devices",complete:!1},{name:"Showcase my software portfolio",complete:!0},{name:"Gain a deeper understanding of HTML, CSS, JavaScript, AngularJS, and overall website design",complete:!0}],challenges:"This was my first time building an Angular application from scratch by myself, so I hit a few bumps when I was initially setting up the project. I had trouble making sure all of the Angular pieces were working together properly, but once I got past that I didn't have many technical issues. It was surprisingly difficult to design a website from scratch with no external guidance regarding what content to include. At work, I'm used to having a client determine the information that will be shown, and I struggled quite a bit when it came time to decide what content to ditch and what to keep.",thingsLearned:["How to build an Angular application from scratch","A lot of random things about HTML, CSS, and JavaScript","How to deploy a web application using a hosting website","Writing an entire website full of information about yourself is harder than it sounds"],tags:["software"]}]},this.getProjectFilters=function(){return[{name:"View All",icon:"",isSelected:!0},{name:"Software",icon:"fa fa-laptop",isSelected:!1},{name:"Baking",icon:"fa fa-birthday-cake",isSelected:!1},{name:"Cooking",icon:"glyphicon glyphicon-cutlery",isSelected:!1},{name:"Health",icon:"fa fa-heartbeat",isSelected:!1},{name:"Arts & Crafts",icon:"fa fa-paint-brush",isSelected:!1}]}}angular.module("caroline-website.ProjectModule").service("ProjectService",[a])}(),function(){function a(a,b,c,d){function e(){console.info(b),a.project=c.getProjectWithId(b.projectId)}a.filters=c.getProjectFilters(),a.allProjects=c.getAllProjects(),a.filterBy=function(b){angular.forEach(a.filters,function(a){a.iSSelected=!1}),b.isSelected=!0},a.goToProjectPage=function(a){d.goToSingleProjectPage(a.id)},e()}angular.module("caroline-website.ProjectModule").controller("SingleProjectController",["$scope","$stateParams","ProjectService","NavigationService",a])}(),function(){function a(a,b){function c(){return a.booksRead[a.booksRead.length-1]}function d(){a.booksRead=b.getAllBooksRead(),angular.forEach(a.booksRead,function(a){a.active=!1}),c().active=!0}a.getTitle=function(){return c().active?"Currently Reading":"Previously Read"},d()}function b(){return{restrict:"A",templateUrl:"modules/reading/CurrentlyReading.html",controller:["$scope","ReadingService",a]}}angular.module("caroline-website.ReadingModule").directive("currentlyReading",[b])}(),function(){function a(){this.bookImageDirectory="resources/images/books/",this.getAllBooksRead=function(){return[{title:"100 Things Every Designer Needs to Know About People",author:"Susan Weinschenk",imagePath:this.bookImageDirectory+"100Things.jpg",url:"http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"},{title:"Usable Usability: Simple Steps for Making Stuff Better",author:"Eric Reiss",imagePath:this.bookImageDirectory+"UsableUsability.jpg",url:"http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471"},{title:"Evil by Design",author:"Chris Nodder",imagePath:this.bookImageDirectory+"EvilByDesign.jpg",url:"http://evilbydesign.info/book/"}]}}angular.module("caroline-website.ReadingModule").service("ReadingService",[a])}(),function(){function a(a){this.goToHomePage=function(){a.go("home")},this.goToAllProjectsPage=function(){a.go("allProjects")},this.goToSingleProjectPage=function(b){a.go("project",{projectId:b})},this.goToProfessionalPage=function(){a.go("professional")}}angular.module("caroline-website.SidebarModule").service("NavigationService",["$state",a])}(),function(){function a(a,b){a.goHome=function(){b.goToHomePage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()},a.goToProfessionalPage=function(){b.goToProfessionalPage()}}angular.module("caroline-website.SidebarModule").controller("SidebarController",["$scope","NavigationService",a])}(),function(){function a(a){a.getCurrentDate=function(){return Date.now()}}angular.module("caroline-website.FooterModule").controller("FooterController",["$scope",a])}(),function(){function a(a,b){a.goToProfessionalPage=function(){b.goToProfessionalPage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.HomeModule").controller("HomeController",["$scope","NavigationService",a])}(),function(){function a(a){this.getHomeText=function(){return"hola"}}angular.module("caroline-website.HomeModule").service("HomeService",["$http",a])}(),function(){function a(a,b){a.goToSoftwareProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.ProfessionalModule").controller("ProfessionalController",["$scope","NavigationService",a])}(),function(){function a(a,b,c){function d(){a.filters=b.getProjectFilters(),a.allProjects=b.getAllProjects(),a.filterBy="All",angular.forEach(a.allProjects,function(a){a.isShowing=!0})}a.filterBy=function(){},a.filterBy=function(a){},a.goToProjectPage=function(a){c.goToSingleProjectPage(a.id)},d()}angular.module("caroline-website.ProjectModule").controller("AllProjectsController",["$scope","ProjectService","NavigationService",a])}(),function(){function a(){this.projectImageDirectory="resources/images/projects/",this.getProjectWithId=function(a){var b=this.getAllProjects(),c=null;return angular.forEach(b,function(b){b.id==a&&(c=b)}),c},this.getAllProjects=function(){return[{id:1,name:"This Website",tagline:"",dateRange:"Started July 2015",thumbnailPath:this.projectImageDirectory+"PersonalWebsiteThumbnail.png",imagePath:"",about:"My personal website that I built using HTML, CSS, BootStrap, JavaScript, and AngularJS. This project is still in progress.",githubUrl:"https://github.com/carolinepaulic/CarolineWebsite",goals:[{name:"Build a single page application from scratch",complete:!0},{name:"Learn about and implement Sass",complete:!1},{name:"Learn about and implement a build tool",complete:!1},{name:"Learn about and implement a chart using D3",complete:!1},{name:"Get practice designing for mobile devices",complete:!1},{name:"Showcase my software portfolio",complete:!0},{name:"Gain a deeper understanding of HTML, CSS, JavaScript, AngularJS, and overall website design",complete:!0}],challenges:"This was my first time building an Angular application from scratch by myself, so I hit a few bumps when I was initially setting up the project. I had trouble making sure all of the Angular pieces were working together properly, but once I got past that I didn't have many technical issues. It was surprisingly difficult to design a website from scratch with no external guidance regarding what content to include. At work, I'm used to having a client determine the information that will be shown, and I struggled quite a bit when it came time to decide what content to ditch and what to keep.",thingsLearned:["How to build an Angular application from scratch","A lot of random things about HTML, CSS, and JavaScript","How to deploy a web application using a hosting website","Writing an entire website full of information about yourself is harder than it sounds"],tags:["software"]}]},this.getProjectFilters=function(){return[{name:"View All",icon:"",isSelected:!0},{name:"Software",icon:"fa fa-laptop",isSelected:!1},{name:"Baking",icon:"fa fa-birthday-cake",isSelected:!1},{name:"Cooking",icon:"glyphicon glyphicon-cutlery",isSelected:!1},{name:"Health",icon:"fa fa-heartbeat",isSelected:!1},{name:"Arts & Crafts",icon:"fa fa-paint-brush",isSelected:!1}]}}angular.module("caroline-website.ProjectModule").service("ProjectService",[a])}(),function(){function a(a,b,c,d){function e(){console.info(b),a.project=c.getProjectWithId(b.projectId)}a.filters=c.getProjectFilters(),a.allProjects=c.getAllProjects(),a.filterBy=function(b){angular.forEach(a.filters,function(a){a.iSSelected=!1}),b.isSelected=!0},a.goToProjectPage=function(a){d.goToSingleProjectPage(a.id)},e()}angular.module("caroline-website.ProjectModule").controller("SingleProjectController",["$scope","$stateParams","ProjectService","NavigationService",a])}(),function(){function a(a,b){function c(){return a.booksRead[a.booksRead.length-1]}function d(){a.booksRead=b.getAllBooksRead(),angular.forEach(a.booksRead,function(a){a.active=!1}),c().active=!0}a.getTitle=function(){return c().active?"Currently Reading":"Previously Read"},d()}function b(){return{restrict:"A",templateUrl:"modules/reading/CurrentlyReading.html",controller:["$scope","ReadingService",a]}}angular.module("caroline-website.ReadingModule").directive("currentlyReading",[b])}(),function(){function a(){this.bookImageDirectory="resources/images/books/",this.getAllBooksRead=function(){return[{title:"100 Things Every Designer Needs to Know About People",author:"Susan Weinschenk",imagePath:this.bookImageDirectory+"100Things.jpg",url:"http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"},{title:"Usable Usability: Simple Steps for Making Stuff Better",author:"Eric Reiss",imagePath:this.bookImageDirectory+"UsableUsability.jpg",url:"http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471"},{title:"Evil by Design",author:"Chris Nodder",imagePath:this.bookImageDirectory+"EvilByDesign.jpg",url:"http://evilbydesign.info/book/"}]}}angular.module("caroline-website.ReadingModule").service("ReadingService",[a])}(),function(){function a(a){this.goToHomePage=function(){a.go("home")},this.goToAllProjectsPage=function(){a.go("allProjects")},this.goToSingleProjectPage=function(b){a.go("project",{projectId:b})},this.goToProfessionalPage=function(){a.go("professional")}}angular.module("caroline-website.SidebarModule").service("NavigationService",["$state",a])}(),function(){function a(a,b){a.goHome=function(){b.goToHomePage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()},a.goToProfessionalPage=function(){b.goToProfessionalPage()}}angular.module("caroline-website.SidebarModule").controller("SidebarController",["$scope","NavigationService",a])}(),function(){function a(a){a.getCurrentDate=function(){return Date.now()}}angular.module("caroline-website.FooterModule").controller("FooterController",["$scope",a])}(),function(){function a(a,b){a.goToProfessionalPage=function(){b.goToProfessionalPage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.HomeModule").controller("HomeController",["$scope","NavigationService",a])}(),function(){function a(a){this.getHomeText=function(){return"hola"}}angular.module("caroline-website.HomeModule").service("HomeService",["$http",a])}(),function(){function a(a,b){a.goToSoftwareProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.ProfessionalModule").controller("ProfessionalController",["$scope","NavigationService",a])}(),function(){function a(a,b,c){function d(){a.filters=b.getProjectFilters(),a.allProjects=b.getAllProjects(),a.filterBy="All",angular.forEach(a.allProjects,function(a){a.isShowing=!0})}a.filterBy=function(){},a.filterBy=function(a){},a.goToProjectPage=function(a){c.goToSingleProjectPage(a.id)},d()}angular.module("caroline-website.ProjectModule").controller("AllProjectsController",["$scope","ProjectService","NavigationService",a])}(),function(){function a(){this.projectImageDirectory="resources/images/projects/",this.getProjectWithId=function(a){var b=this.getAllProjects(),c=null;return angular.forEach(b,function(b){b.id==a&&(c=b)}),c},this.getAllProjects=function(){return[{id:1,name:"This Website",tagline:"",dateRange:"Started July 2015",thumbnailPath:this.projectImageDirectory+"PersonalWebsiteThumbnail.png",imagePath:"",about:"My personal website that I built using HTML, CSS, BootStrap, JavaScript, and AngularJS. This project is still in progress.",githubUrl:"https://github.com/carolinepaulic/CarolineWebsite",goals:[{name:"Build a single page application from scratch",complete:!0},{name:"Learn about and implement Sass",complete:!1},{name:"Learn about and implement a build tool",complete:!1},{name:"Learn about and implement a chart using D3",complete:!1},{name:"Get practice designing for mobile devices",complete:!1},{name:"Showcase my software portfolio",complete:!0},{name:"Gain a deeper understanding of HTML, CSS, JavaScript, AngularJS, and overall website design",complete:!0}],challenges:"This was my first time building an Angular application from scratch by myself, so I hit a few bumps when I was initially setting up the project. I had trouble making sure all of the Angular pieces were working together properly, but once I got past that I didn't have many technical issues. It was surprisingly difficult to design a website from scratch with no external guidance regarding what content to include. At work, I'm used to having a client determine the information that will be shown, and I struggled quite a bit when it came time to decide what content to ditch and what to keep.",thingsLearned:["How to build an Angular application from scratch","A lot of random things about HTML, CSS, and JavaScript","How to deploy a web application using a hosting website","Writing an entire website full of information about yourself is harder than it sounds"],tags:["software"]}]},this.getProjectFilters=function(){return[{name:"View All",icon:"",isSelected:!0},{name:"Software",icon:"fa fa-laptop",isSelected:!1},{name:"Baking",icon:"fa fa-birthday-cake",isSelected:!1},{name:"Cooking",icon:"glyphicon glyphicon-cutlery",isSelected:!1},{name:"Health",icon:"fa fa-heartbeat",isSelected:!1},{name:"Arts & Crafts",icon:"fa fa-paint-brush",isSelected:!1}]}}angular.module("caroline-website.ProjectModule").service("ProjectService",[a])}(),function(){function a(a,b,c,d){function e(){console.info(b),a.project=c.getProjectWithId(b.projectId)}a.filters=c.getProjectFilters(),a.allProjects=c.getAllProjects(),a.filterBy=function(b){angular.forEach(a.filters,function(a){a.iSSelected=!1}),b.isSelected=!0},a.goToProjectPage=function(a){d.goToSingleProjectPage(a.id)},e()}angular.module("caroline-website.ProjectModule").controller("SingleProjectController",["$scope","$stateParams","ProjectService","NavigationService",a])}(),function(){function a(a,b){function c(){return a.booksRead[a.booksRead.length-1]}function d(){a.booksRead=b.getAllBooksRead(),angular.forEach(a.booksRead,function(a){a.active=!1}),c().active=!0}a.getTitle=function(){return c().active?"Currently Reading":"Previously Read"},d()}function b(){return{restrict:"A",templateUrl:"modules/reading/CurrentlyReading.html",controller:["$scope","ReadingService",a]}}angular.module("caroline-website.ReadingModule").directive("currentlyReading",[b])}(),function(){function a(){this.bookImageDirectory="resources/images/books/",this.getAllBooksRead=function(){return[{title:"100 Things Every Designer Needs to Know About People",author:"Susan Weinschenk",imagePath:this.bookImageDirectory+"100Things.jpg",url:"http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"},{title:"Usable Usability: Simple Steps for Making Stuff Better",author:"Eric Reiss",imagePath:this.bookImageDirectory+"UsableUsability.jpg",url:"http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471"},{title:"Evil by Design",author:"Chris Nodder",imagePath:this.bookImageDirectory+"EvilByDesign.jpg",url:"http://evilbydesign.info/book/"}]}}angular.module("caroline-website.ReadingModule").service("ReadingService",[a])}(),function(){function a(a){this.goToHomePage=function(){a.go("home")},this.goToAllProjectsPage=function(){a.go("allProjects")},this.goToSingleProjectPage=function(b){a.go("project",{projectId:b})},this.goToProfessionalPage=function(){a.go("professional")}}angular.module("caroline-website.SidebarModule").service("NavigationService",["$state",a])}(),function(){function a(a,b){a.goHome=function(){b.goToHomePage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()},a.goToProfessionalPage=function(){b.goToProfessionalPage()}}angular.module("caroline-website.SidebarModule").controller("SidebarController",["$scope","NavigationService",a])}(),function(){function a(a){a.getCurrentDate=function(){return Date.now()}}angular.module("caroline-website.FooterModule").controller("FooterController",["$scope",a])}(),function(){function a(a,b){a.goToProfessionalPage=function(){b.goToProfessionalPage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.HomeModule").controller("HomeController",["$scope","NavigationService",a])}(),function(){function a(a){this.getHomeText=function(){return"hola"}}angular.module("caroline-website.HomeModule").service("HomeService",["$http",a])}(),function(){function a(a,b){a.goToSoftwareProjectsPage=function(){b.goToAllProjectsPage()}}angular.module("caroline-website.ProfessionalModule").controller("ProfessionalController",["$scope","NavigationService",a])}(),function(){function a(a,b,c){function d(){a.filters=b.getProjectFilters(),a.allProjects=b.getAllProjects(),a.filterBy="All",angular.forEach(a.allProjects,function(a){a.isShowing=!0})}a.filterBy=function(){},a.filterBy=function(a){},a.goToProjectPage=function(a){c.goToSingleProjectPage(a.id)},d()}angular.module("caroline-website.ProjectModule").controller("AllProjectsController",["$scope","ProjectService","NavigationService",a])}(),function(){function a(){this.projectImageDirectory="resources/images/projects/",this.getProjectWithId=function(a){var b=this.getAllProjects(),c=null;return angular.forEach(b,function(b){b.id==a&&(c=b)}),c},this.getAllProjects=function(){return[{id:1,name:"This Website",tagline:"",dateRange:"Started July 2015",thumbnailPath:this.projectImageDirectory+"PersonalWebsiteThumbnail.png",imagePath:"",about:"My personal website that I built using HTML, CSS, BootStrap, JavaScript, and AngularJS. This project is still in progress.",githubUrl:"https://github.com/carolinepaulic/CarolineWebsite",goals:[{name:"Build a single page application from scratch",complete:!0},{name:"Learn about and implement Sass",complete:!1},{name:"Learn about and implement a build tool",complete:!1},{name:"Learn about and implement a chart using D3",complete:!1},{name:"Get practice designing for mobile devices",complete:!1},{name:"Showcase my software portfolio",complete:!0},{name:"Gain a deeper understanding of HTML, CSS, JavaScript, AngularJS, and overall website design",complete:!0}],challenges:"This was my first time building an Angular application from scratch by myself, so I hit a few bumps when I was initially setting up the project. I had trouble making sure all of the Angular pieces were working together properly, but once I got past that I didn't have many technical issues. It was surprisingly difficult to design a website from scratch with no external guidance regarding what content to include. At work, I'm used to having a client determine the information that will be shown, and I struggled quite a bit when it came time to decide what content to ditch and what to keep.",thingsLearned:["How to build an Angular application from scratch","A lot of random things about HTML, CSS, and JavaScript","How to deploy a web application using a hosting website","Writing an entire website full of information about yourself is harder than it sounds"],tags:["software"]}]},this.getProjectFilters=function(){return[{name:"View All",icon:"",isSelected:!0},{name:"Software",icon:"fa fa-laptop",isSelected:!1},{name:"Baking",icon:"fa fa-birthday-cake",isSelected:!1},{name:"Cooking",icon:"glyphicon glyphicon-cutlery",isSelected:!1},{name:"Health",icon:"fa fa-heartbeat",isSelected:!1},{name:"Arts & Crafts",icon:"fa fa-paint-brush",isSelected:!1}]}}angular.module("caroline-website.ProjectModule").service("ProjectService",[a])}(),function(){function a(a,b,c,d){function e(){console.info(b),a.project=c.getProjectWithId(b.projectId)}a.filters=c.getProjectFilters(),a.allProjects=c.getAllProjects(),a.filterBy=function(b){angular.forEach(a.filters,function(a){a.iSSelected=!1}),b.isSelected=!0},a.goToProjectPage=function(a){d.goToSingleProjectPage(a.id)},e()}angular.module("caroline-website.ProjectModule").controller("SingleProjectController",["$scope","$stateParams","ProjectService","NavigationService",a])}(),function(){function a(a,b){function c(){return a.booksRead[a.booksRead.length-1]}function d(){a.booksRead=b.getAllBooksRead(),angular.forEach(a.booksRead,function(a){a.active=!1}),c().active=!0}a.getTitle=function(){return c().active?"Currently Reading":"Previously Read"},d()}function b(){return{restrict:"A",templateUrl:"modules/reading/CurrentlyReading.html",controller:["$scope","ReadingService",a]}}angular.module("caroline-website.ReadingModule").directive("currentlyReading",[b])}(),function(){function a(){this.bookImageDirectory="resources/images/books/",this.getAllBooksRead=function(){return[{title:"100 Things Every Designer Needs to Know About People",author:"Susan Weinschenk",imagePath:this.bookImageDirectory+"100Things.jpg",url:"http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"},{title:"Usable Usability: Simple Steps for Making Stuff Better",author:"Eric Reiss",imagePath:this.bookImageDirectory+"UsableUsability.jpg",url:"http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471"},{title:"Evil by Design",author:"Chris Nodder",imagePath:this.bookImageDirectory+"EvilByDesign.jpg",url:"http://evilbydesign.info/book/"}]}}angular.module("caroline-website.ReadingModule").service("ReadingService",[a])}(),function(){function a(a){this.goToHomePage=function(){a.go("home")},this.goToAllProjectsPage=function(){a.go("allProjects")},this.goToSingleProjectPage=function(b){a.go("project",{projectId:b})},this.goToProfessionalPage=function(){a.go("professional")}}angular.module("caroline-website.SidebarModule").service("NavigationService",["$state",a])}(),function(){function a(a,b){a.goHome=function(){b.goToHomePage()},a.goToAllProjectsPage=function(){b.goToAllProjectsPage()},a.goToProfessionalPage=function(){b.goToProfessionalPage()}}angular.module("caroline-website.SidebarModule").controller("SidebarController",["$scope","NavigationService",a])}();

    function FooterController($scope) {
        $scope.getCurrentDate = function() {
            return Date.now();
        }
    }

    angular
        .module('caroline-website.FooterModule')
        .controller('FooterController', ['$scope', FooterController]);
})();

    function HomeController($scope, NavigationService) {
        $scope.goToProfessionalPage = function() {
            NavigationService.goToProfessionalPage();
        };

        $scope.goToAllProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };
    }

    angular
        .module('caroline-website.HomeModule')
        .controller('HomeController', ['$scope', 'NavigationService', HomeController]);
})();


    function HomeService($http) {
        this.getHomeText = function() {
            return "hola";
        }
    }

    angular
        .module('caroline-website.HomeModule')
        .service('HomeService', ['$http', HomeService]);
})();

    function ProfessionalController($scope, NavigationService) {
        $scope.goToSoftwareProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };
    }

    angular
        .module('caroline-website.ProfessionalModule')
        .controller('ProfessionalController', ['$scope', 'NavigationService', ProfessionalController])
})();

    function AllProjectsController($scope, ProjectService, NavigationService) {
        $scope.filterBy = function() {

        };

        $scope.filterBy = function(filterBy) {
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

    function ProjectService() {
        this.projectImageDirectory = "resources/images/projects/";

        this.getProjectWithId = function(projectId) {
            var projects = this.getAllProjects();
            var projectToReturn = null;
            angular.forEach(projects, function(project) {
                if (project.id == projectId) {
                    projectToReturn = project;
                }
            });

            return projectToReturn;
        };

        this.getAllProjects = function() {
            return [
                {
                    id: 1,
                    name: "This Website",
                    tagline: "",
                    dateRange: "Started July 2015",
                    thumbnailPath: this.projectImageDirectory + "PersonalWebsiteThumbnail.png",
                    imagePath: "",
                    about: "My personal website that I built using HTML, CSS, BootStrap, JavaScript, and AngularJS. This project is " +
                    "still in progress.",
                    githubUrl: "https://github.com/carolinepaulic/CarolineWebsite",
                    goals: [
                        {
                            name: "Build a single page application from scratch",
                            complete: true
                        },
                        {
                            name: "Learn about and implement Sass",
                            complete: false
                        }, {
                            name: "Learn about and implement a build tool",
                            complete: false

                        },
                        {
                            name: "Learn about and implement a chart using D3",
                            complete: false
                        },
                        {
                            name: "Get practice designing for mobile devices",
                            complete: false
                        },
                        {
                            name: "Showcase my software portfolio",
                            complete: true
                        },
                        {
                            name: "Gain a deeper understanding of HTML, CSS, JavaScript, AngularJS, and overall website design",
                            complete: true
                        }
                    ],
                    challenges: "This was my first time building an Angular application from scratch by myself, so I hit " +
                    "a few bumps when I was initially setting up the project. I had trouble making sure all of the Angular " +
                    "pieces were working together properly, but once I got past that I didn't have many technical issues. " +
                    "It was surprisingly difficult to design a website from scratch with no external guidance regarding " +
                    "what content to include. At work, I'm used to having a client determine the information that will be " +
                    "shown, and I struggled quite a bit when it came time to decide what content to ditch and what to keep.",
                    thingsLearned: ["How to build an Angular application from scratch",
                        "A lot of random things about HTML, CSS, and JavaScript",
                        "How to deploy a web application using a hosting website",
                        "Writing an entire website full of information about yourself is harder than it sounds"],
                    tags: ["software"]
                }/*,
                 {
                 id: 2,
                 name: "Hiking",
                 dateRange: "Started May 2015",
                 imagePath: this.projectImageDirectory + "KuliououRidgeTrail.jpg",
                 imageCaption: "The view from the top of Kuliouou Ridge Trail in Honolulu, Hawaii",
                 about: "I started hiking regularly with the goals of getting in shape and being " +
                 "outside more. I ended up doing this trail a lot more than I originally intended, " +
                 "and I kept track of my progress. I'm excited that I was able to improve so much in a short period of time.",
                 challenges: "When I first started, I was pretty out of shape and I was embarrassed at how much I was huffing " +
                 "and puffing on the way up. I'm also not usually a big fan of exercise, but once I got into the routine " +
                 "I started enjoying it quite a bit. I broke my toe a few weeks ago and that has kept me from hiking. " +
                 "Staying inside is making me crazy.",
                 thingsLearned: ["It seems counterintuitive but exercising gives you a lot more energy.",
                 "Pent up energy from suddenly ceasing to exercise can motivate you to build that " +
                 "personal website you've been thinking about for awhile.",
                 "Don't break your toe if you want to go hiking."],
                 data: [
                 {
                 date: new Date(2015, 5, 25),
                 minsToTop: 80,
                 minsToBottom: 60
                 },
                 {
                 date: new Date(2015, 5, 30),
                 minsToTop: 80,
                 minsToBottom: 59
                 },
                 {
                 date: new Date(2015, 6, 6),
                 minsToTop: 86,
                 minsToBottom: 48
                 },
                 {
                 date: new Date(2015, 6, 13),
                 minsToTop: 74,
                 minsToBottom: 48
                 },
                 {
                 date: new Date(2015, 6, 14),
                 minsToTop: 73,
                 minsToBottom: 52
                 },
                 {
                 date: new Date(2015, 6, 20),
                 minsToTop: 73,
                 minsToBottom: 53
                 },
                 {
                 date: new Date(2015, 6, 23),
                 minsToTop: 59,
                 minsToBottom: 39
                 },
                 {
                 date: new Date(2015, 6, 25),
                 minsToTop: 59,
                 minsToBottom: 39
                 },
                 {
                 date: new Date(2015, 6, 30),
                 minsToTop: 67,
                 minsToBottom: 37
                 },
                 {
                 date: new Date(2015, 7, 3),
                 minsToTop: 62,
                 minsToBottom: 36
                 }
                 ],
                 tags: ["health", "exercise", "hiking", "kuliouou"]
                 }
                 {
                 id: 11111111,
                 name: "Wedding Cake",
                 dateRange: "N/A"
                 },
                 {
                 id: 222222222,
                 name: "Striped Curtains",
                 dateRange: "April 2014 - Dec 2014",
                 imagePath: this.projectImageDirectory + "StripedCurtains.jpg",
                 about: "I sewed my own curtains using Thai silk for the front and a heavy linen lining.",
                 challenges: "It was difficult to get all of the stripes lined up.",
                 thingsLearned: "Thai silk is super delicate and it WILL get threads all over your house, no matter how hard you try.",
                 tags: ["crafts", "sewing", "home"]
                 }*/
                /*
                {
                 id: 3,
                 name: "D3 Charting",
                 tagline: "",
                 dateRange: "Started August 2015",
                 thumbnailPath: this.projectImageDirectory + "D3ChartingThumbnail.png",
                 imagePath: "",
                 about: "A little app that I made to learn how to use the D3.js charting library. This project is " +
                 "still in progress.",
                 githubUrl: "https://github.com/carolinepaulic/D3Charting",
                 goals: [
                 {
                 name: "Learn how to use D3.js to build simple graphs such as bar charts, line graphs,
                 scatter plots, and pie charts.",
                 complete: false
                 },
                 {
                 name: "Learn how to use D3.js to build more complex graphs.",
                 complete: false
                 }, {
                 name: "Use a public REST endpoint to grab data to populate a graph made with D3.js.",
                 complete: false

                 },
                 {
                 name: "Learn how to update a graph in real time when new data is available.",
                 complete: false
                 },
                 {
                 name: "Learn how to integrate D3.js with AngularJS.",
                 complete: false
                 }
                 ],
                 challenges: "None yet!",
                 thingsLearned: ["Nothing yet :("],
                 tags: ["software"]
                 }*/
            ]
        };

        this.getProjectFilters = function() {
            return [
                {
                    name: "View All",
                    icon: "",
                    isSelected: true
                },
                {
                    name: "Software",
                    icon: "fa fa-laptop",
                    isSelected: false
                },
                {
                    name: "Baking",
                    icon: "fa fa-birthday-cake",
                    isSelected: false
                },
                {
                    name: "Cooking",
                    icon: "glyphicon glyphicon-cutlery",
                    isSelected: false
                },
                {
                    name: "Health",
                    icon: "fa fa-heartbeat",
                    isSelected: false
                },
                {
                    name: "Arts & Crafts",
                    icon: "fa fa-paint-brush",
                    isSelected: false
                }
            ];
        }
    }

    angular
        .module('caroline-website.ProjectModule')
        .service('ProjectService', [ProjectService]);
})();

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

    function CurrentlyReadingController($scope, ReadingService) {
        function getMostRecentBook() {
            return $scope.booksRead[$scope.booksRead.length - 1];
        }

        $scope.getTitle = function() {
            if (getMostRecentBook().active) {
                return "Currently Reading";
            }
            return "Previously Read";
        };

        function load() {
            $scope.booksRead = ReadingService.getAllBooksRead();
            angular.forEach($scope.booksRead, function(book) {
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
            controller: ['$scope', 'ReadingService', CurrentlyReadingController]
        }
    }

    angular
        .module('caroline-website.ReadingModule')
        .directive('currentlyReading', [CurrentlyReading]);
})();

    function ReadingService() {
        this.bookImageDirectory = "resources/images/books/";

        //Results are sorted chronologically- last book that was read is the last in the list
        this.getAllBooksRead = function() {
            return [
                {
                    title: "100 Things Every Designer Needs to Know About People",
                    author: "Susan Weinschenk",
                    imagePath: this.bookImageDirectory + "100Things.jpg",
                    url: "http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"
                },
                {
                    title: "Usable Usability: Simple Steps for Making Stuff Better",
                    author: "Eric Reiss",
                    imagePath: this.bookImageDirectory + "UsableUsability.jpg",
                    url: "http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471"
                },
                {
                    title: "Evil by Design",
                    author: "Chris Nodder",
                    imagePath: this.bookImageDirectory + "EvilByDesign.jpg",
                    url: "http://evilbydesign.info/book/"
                }
            ];
        }
    }

    angular
        .module('caroline-website.ReadingModule')
        .service('ReadingService', [ReadingService]);
})();

    function NavigationService($state) {
        this.goToHomePage = function() {
            $state.go('home');
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
        .module('caroline-website.SidebarModule')
        .service('NavigationService', ['$state', NavigationService]);
})();

    function SidebarController($scope, NavigationService) {
        $scope.goHome = function() {
            NavigationService.goToHomePage();
        };

        $scope.goToAllProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };

        $scope.goToProfessionalPage = function() {
            NavigationService.goToProfessionalPage();
        }
    }

    angular.module('caroline-website.SidebarModule')
        .controller('SidebarController', ['$scope', 'NavigationService', SidebarController]);
})();