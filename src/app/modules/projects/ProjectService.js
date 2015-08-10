(function () {
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