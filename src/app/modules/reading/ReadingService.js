(function () {
    function ReadingService() {
        this.bookImageDirectory = "resources/images/books";

        this.getAllBooksRead = function() {
            return [
                {
                    title: "Evil by Design",
                    author: "Chris Nodder",
                    imagePath: this.bookImageDirectory + "EvilByDesign.jpg",
                    url: "http://evilbydesign.info/book/"
                },
                {
                    title: "Usable Usability: Simple Steps for Making Stuff Better",
                    author: "Eric Reiss",
                    imagePath: this.bookImageDirectory + "UsableUsability.jpg",
                    url: "http://www.amazon.com/Usable-Usability-Simple-Making-Better/dp/1118185471"
                },
                {
                    title: "100 Things Every Designer Needs to Know About People",
                    author: "Susan Weinschenk",
                    imagePath: this.bookImageDirectory + "100Things.jpg",
                    url: "http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"
                }
            ];
        }
    }

    angular
        .module('caroline-website.ReadingModule')
        .service('ReadingService', [ReadingService]);
})();