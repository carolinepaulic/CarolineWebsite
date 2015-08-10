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
                    dateRange: "Started July 2015",
                    thumbnailPath: this.projectImageDirectory + "PersonalWebsiteThumbnail.png",
                    imagePath: "",
                    about: "I really wanted to make a personal website to get some practice with building an application " +
                           "from scratch and to have a place to showcase my software projects to prospective employers. Plus, " +
                           "it sounded like fun. Tech specs: Angular, HTML, CSS, JavaScript, BootStrap, D3 charting",
                    challenges: "This was my first time building a project from scratch by myself, so there were a few bumps " +
                                "along the way coding-wise. I also had a hard time deciding which information to include, and what " +
                                "to keep to myself.",
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