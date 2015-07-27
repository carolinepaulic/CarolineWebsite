(function () {
    function ProjectService() {
        this.projectImageDirectory = "resources/images/projects/";

        this.getAllProjects = function() {
            return [
                {
                    name: "This Website",
                    dateRange: "Started July 2015",
                    tags: ["software"]
                },
                {
                    name: "Wedding Cake",
                    dateRange: "N/A"
                },
                {
                    name: "Striped Curtains",
                    dateRange: "April 2014 - Dec 2014",
                    imagePath: this.projectImageDirectory + "StripedCurtains.jpg",
                    about: "I sewed my own curtains using Thai silk for the front and a heavy linen lining.",
                    challenges: "It was difficult to get all of the stripes lined up.",
                    thingsLearned: "Thai silk is super delicate and it WILL get threads all over your house, no matter how hard you try.",
                    tags: ["crafts", "sewing", "home"]
                }
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