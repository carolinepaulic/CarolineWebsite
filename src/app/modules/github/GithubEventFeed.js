(function() {
    function GithubEventFeedController($scope, GithubService) {
        $scope.getEventDate = function(event) {
            var eventDate = "";
            if (event && event.created_at) {
                eventDate = Date.parse(event.created_at).toString("M/d/yyyy h:mm tt");
            }

            return eventDate;
        };

        $scope.getCommitMessages = function(event) {
            var messages = "";
            var firstMessage = true;
            if (event && event.payload && event.payload.commits && event.payload.commits.length > 0) {
                angular.forEach(event.payload.commits, function(commit) {
                    if (firstMessage) {
                        messages = commit.message;
                        firstMessage = false;
                    }
                    else {
                        messages += "<b> | </b> " + commit.message;
                    }
                });
            }
            return messages;
        };

        $scope.getBranchName = function(event) {
            var branchName = "";
            if (event && event.payload && event.payload.ref) {
                if (event.payload.ref.indexOf('refs/heads/') != -1) {
                    branchName = event.payload.ref.replace('refs/heads/', '');
                }
                else {
                    branchName = event.payload.ref;
                }
            }

            return branchName;
        };

        $scope.getEventType = function(event) {
            var eventType = "";
            if (event && event.type && (event.type.indexOf('Event') != -1)) {
                eventType = event.type.replace('Event', '');
            }

            return eventType;
        };

        $scope.getRepoName = function(event) {
            var repoName = "";
            if (event && event.repo && event.repo.name) {
                if (event.repo.name.indexOf('carolinepaulic/') != -1) {
                    repoName = event.repo.name.replace('carolinepaulic/', '');
                }
                else {
                    repoName = event.repo.name;
                }
            }

            return repoName;
        };

        $scope.getEventTitle = function(event) {
            var eventType = $scope.getEventType(event);
            if (eventType == 'Push') {
                eventType += 'ed to';
            }
            else if (eventType == 'Create') {
                eventType += 'd';
            }

            return eventType + ' ' + $scope.getBranchName(event) + ' in ' + $scope.getRepoName(event);
        };

        function load() {
            $scope.events = {};
            GithubService.getCarolinePaulicUserEvents()
                .success(function(response) {
                    $scope.userEvents = response;
                });
        }

        load();
    }

    function GithubEventFeed() {
        return {
            restrict: 'A',
            templateUrl: 'modules/github/GithubEventFeed.html',
            controller: ['$scope', 'GithubService', GithubEventFeedController]
        }
    }

    angular.module('caroline-website.GithubModule')
        .directive('githubEventFeed', GithubEventFeed);
})();