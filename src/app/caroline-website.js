angular.module('caroline-website.D3Module', []);
angular.module('caroline-website.FooterModule', []);
angular.module('caroline-website.GithubModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('github', {
                url: '/github',
                templateUrl: 'modules/github/GithubTest.html'
            });
    });
angular.module('caroline-website.HomeModule', [])
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
angular.module('caroline-website.MapsModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                templateUrl: 'modules/maps/MapsTest.html'
            });
    });
angular.module('caroline-website.ProfessionalModule', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('professional', {
                url: '/professional',
                templateUrl: 'modules/professional/ProfessionalView.html',
                controller: 'ProfessionalController'
            });
    });
angular.module('caroline-website.ProjectModule', [])
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
angular.module('caroline-website.ReadingModule', []);
angular.module('caroline-website.SidebarModule', []);
(function () {
    function D3Service($document, $q, $rootScope) {
        var d = $q.defer();
        function onScriptLoad() {
            // Load client in the browser
            $rootScope.$apply(function() { d.resolve(window.d3); });
        }
        // Create a script tag with d3 as the source
        // and call our onScriptLoad callback when it
        // has been loaded
        var scriptTag = $document[0].createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.async = true;
        scriptTag.src = '../../bower_components/d3/d3.js';
        scriptTag.onreadystatechange = function () {
            if (this.readyState == 'complete') onScriptLoad();
        };
        scriptTag.onload = onScriptLoad;

        var s = $document[0].getElementsByTagName('body')[0];
        s.appendChild(scriptTag);

        return {
            d3: function() { return d.promise; }
        };
    }

    angular.module('caroline-website.D3Module')
        .service('D3Service', ['$document', '$q', '$rootScope', D3Service]);
})();
(function () {
    function FooterController($scope) {
        $scope.getCurrentDate = function() {
            return Date.now();
        }
    }

    angular
        .module('caroline-website.FooterModule')
        .controller('FooterController', ['$scope', FooterController]);
})();
(function () {
    function CommitWordCloud(D3Service, GithubService) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                D3Service.d3().then(function(d3) {
                    function getCarolineWebsiteCommitMessages() {
                        var commitMessages = [];
                        GithubService.getCarolineWebsiteEvents()
                            .success(function(response) {
                                angular.forEach(response, function(event) {
                                    if (event.payload && event.payload.commits && event.payload.commits.length > 0) {
                                        angular.forEach(event.payload.commits, function(commit) {
                                            if (commitMessages.indexOf(commit.message) == -1) {
                                                commitMessages.push(commit.message);
                                            }
                                        });
                                    }
                                });

                                var messages = getCommitMessageWordsWithFrequencies(commitMessages);
                                setupChart(messages);
                            });
                    }

                    function getCommitMessageWordsWithFrequencies(commitMessages) {
                        var wordsToExclude = ["to", "in", "on", "for", "and", "into", "of", "with", "up", "files", "page"];
                        var wordsWithFrequencies = [];

                        angular.forEach(commitMessages, function(commitMessage) {
                            var words = commitMessage.split(' ');
                            angular.forEach(words, function(word) {
                                if (wordsToExclude.indexOf(word) == -1) {
                                    var wordIsInMap = false;
                                    angular.forEach(wordsWithFrequencies, function (wordFrequencyPair) {
                                        if (wordFrequencyPair.text == word) {
                                            wordIsInMap = true;
                                            wordFrequencyPair.size++;
                                            return;
                                        }
                                    });
                                    if (!wordIsInMap) {
                                        var newWordFrequencyPair = {
                                            text: word,
                                            size: 1
                                        };
                                        wordsWithFrequencies.push(newWordFrequencyPair);
                                    }
                                }
                            });
                        });

                        wordsWithFrequencies.sort(function(a, b) {
                            return parseInt(b.size) - parseInt(a.size);
                        });
                        var mostFrequent = [];
                        for (var i = 0; i < 20 && i < wordsWithFrequencies.length; i++) {
                            mostFrequent.push(wordsWithFrequencies[i]);
                        }

                        return mostFrequent;
                    }

                    function setupChart(messages) {
                        var fill = d3.scale.linear()
                            .domain([0,2,4,6,10,16,20,100])
                            .range(["#d8f1f8", "#59c3e3", "#36b6dd", "#23a9d1"]);


                        d3.layout.cloud().size([320, 320])
                            .words(messages)
                            .rotate(function () {
                                return ~~(Math.random() * 2) * 90;
                            })
                            .fontSize(function (d) {
                                return d.size * 2;
                            })
                            .on("end", draw)
                            .start();

                        function draw(words) {
                            d3.select("#plot").append("svg")
                                .attr("width", 320)
                                .attr("height", 320)
                                .append("g")
                                .attr("transform", "translate(130,130)")
                                .selectAll("text")
                                .data(words)
                                .enter().append("text")
                                .style("font-size", function (d) {
                                    return d.size * 2 + "px";
                                })
                                .style("fill", function (d, i) {
                                    return fill(i);
                                })
                                .attr("text-anchor", "middle")
                                .attr("transform", function (d) {
                                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                                })
                                .text(function (d) {
                                    return d.text;
                                });
                        }
                    }

                    function load() {
                        getCarolineWebsiteCommitMessages();
                    }





                    // Word cloud layout by Jason Davies, http://www.jasondavies.com/word-cloud/
                    // Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf
                    (function() {

                        if (typeof define === "function" && define.amd) define(["d3"], cloud);
                        else cloud(this.d3);

                        function cloud(d3) {
                            d3.layout.cloud = function cloud() {
                                var size = [256, 256],
                                    text = cloudText,
                                    font = cloudFont,
                                    fontSize = cloudFontSize,
                                    fontStyle = cloudFontNormal,
                                    fontWeight = cloudFontNormal,
                                    rotate = cloudRotate,
                                    padding = cloudPadding,
                                    spiral = archimedeanSpiral,
                                    words = [],
                                    timeInterval = Infinity,
                                    event = d3.dispatch("word", "end"),
                                    timer = null,
                                    random = Math.random,
                                    cloud = {};

                                cloud.start = function() {
                                    var board = zeroArray((size[0] >> 5) * size[1]),
                                        bounds = null,
                                        n = words.length,
                                        i = -1,
                                        tags = [],
                                        data = words.map(function(d, i) {
                                            d.text = text.call(this, d, i);
                                            d.font = font.call(this, d, i);
                                            d.style = fontStyle.call(this, d, i);
                                            d.weight = fontWeight.call(this, d, i);
                                            d.rotate = rotate.call(this, d, i);
                                            d.size = ~~fontSize.call(this, d, i);
                                            d.padding = padding.call(this, d, i);
                                            return d;
                                        }).sort(function(a, b) { return b.size - a.size; });

                                    if (timer) clearInterval(timer);
                                    timer = setInterval(step, 0);
                                    step();

                                    return cloud;

                                    function step() {
                                        var start = Date.now();
                                        while (Date.now() - start < timeInterval && ++i < n && timer) {
                                            var d = data[i];
                                            d.x = (size[0] * (random() + .5)) >> 1;
                                            d.y = (size[1] * (random() + .5)) >> 1;
                                            cloudSprite(d, data, i);
                                            if (d.hasText && place(board, d, bounds)) {
                                                tags.push(d);
                                                event.word(d);
                                                if (bounds) cloudBounds(bounds, d);
                                                else bounds = [{x: d.x + d.x0, y: d.y + d.y0}, {x: d.x + d.x1, y: d.y + d.y1}];
                                                // Temporary hack
                                                d.x -= size[0] >> 1;
                                                d.y -= size[1] >> 1;
                                            }
                                        }
                                        if (i >= n) {
                                            cloud.stop();
                                            event.end(tags, bounds);
                                        }
                                    }
                                }

                                cloud.stop = function() {
                                    if (timer) {
                                        clearInterval(timer);
                                        timer = null;
                                    }
                                    return cloud;
                                };

                                function place(board, tag, bounds) {
                                    var perimeter = [{x: 0, y: 0}, {x: size[0], y: size[1]}],
                                        startX = tag.x,
                                        startY = tag.y,
                                        maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
                                        s = spiral(size),
                                        dt = random() < .5 ? 1 : -1,
                                        t = -dt,
                                        dxdy,
                                        dx,
                                        dy;

                                    while (dxdy = s(t += dt)) {
                                        dx = ~~dxdy[0];
                                        dy = ~~dxdy[1];

                                        if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta) break;

                                        tag.x = startX + dx;
                                        tag.y = startY + dy;

                                        if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 ||
                                            tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1]) continue;
                                        // TODO only check for collisions within current bounds.
                                        if (!bounds || !cloudCollide(tag, board, size[0])) {
                                            if (!bounds || collideRects(tag, bounds)) {
                                                var sprite = tag.sprite,
                                                    w = tag.width >> 5,
                                                    sw = size[0] >> 5,
                                                    lx = tag.x - (w << 4),
                                                    sx = lx & 0x7f,
                                                    msx = 32 - sx,
                                                    h = tag.y1 - tag.y0,
                                                    x = (tag.y + tag.y0) * sw + (lx >> 5),
                                                    last;
                                                for (var j = 0; j < h; j++) {
                                                    last = 0;
                                                    for (var i = 0; i <= w; i++) {
                                                        board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
                                                    }
                                                    x += sw;
                                                }
                                                delete tag.sprite;
                                                return true;
                                            }
                                        }
                                    }
                                    return false;
                                }

                                cloud.timeInterval = function(_) {
                                    return arguments.length ? (timeInterval = _ == null ? Infinity : _, cloud) : timeInterval;
                                };

                                cloud.words = function(_) {
                                    return arguments.length ? (words = _, cloud) : words;
                                };

                                cloud.size = function(_) {
                                    return arguments.length ? (size = [+_[0], +_[1]], cloud) : size;
                                };

                                cloud.font = function(_) {
                                    return arguments.length ? (font = d3.functor(_), cloud) : font;
                                };

                                cloud.fontStyle = function(_) {
                                    return arguments.length ? (fontStyle = d3.functor(_), cloud) : fontStyle;
                                };

                                cloud.fontWeight = function(_) {
                                    return arguments.length ? (fontWeight = d3.functor(_), cloud) : fontWeight;
                                };

                                cloud.rotate = function(_) {
                                    return arguments.length ? (rotate = d3.functor(_), cloud) : rotate;
                                };

                                cloud.text = function(_) {
                                    return arguments.length ? (text = d3.functor(_), cloud) : text;
                                };

                                cloud.spiral = function(_) {
                                    return arguments.length ? (spiral = spirals[_] || _, cloud) : spiral;
                                };

                                cloud.fontSize = function(_) {
                                    return arguments.length ? (fontSize = d3.functor(_), cloud) : fontSize;
                                };

                                cloud.padding = function(_) {
                                    return arguments.length ? (padding = d3.functor(_), cloud) : padding;
                                };

                                cloud.random = function(_) {
                                    return arguments.length ? (random = _, cloud) : random;
                                };

                                return d3.rebind(cloud, event, "on");
                            };

                            function cloudText(d) {
                                return d.text;
                            }

                            function cloudFont() {
                                return "serif";
                            }

                            function cloudFontNormal() {
                                return "normal";
                            }

                            function cloudFontSize(d) {
                                return Math.sqrt(d.value);
                            }

                            function cloudRotate() {
                                return (~~(Math.random() * 6) - 3) * 30;
                            }

                            function cloudPadding() {
                                return 1;
                            }

                            // Fetches a monochrome sprite bitmap for the specified text.
                            // Load in batches for speed.
                            function cloudSprite(d, data, di) {
                                if (d.sprite) return;
                                c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
                                var x = 0,
                                    y = 0,
                                    maxh = 0,
                                    n = data.length;
                                --di;
                                while (++di < n) {
                                    d = data[di];
                                    c.save();
                                    c.font = d.style + " " + d.weight + " " + ~~((d.size + 1) / ratio) + "px " + d.font;
                                    var w = c.measureText(d.text + "m").width * ratio,
                                        h = d.size << 1;
                                    if (d.rotate) {
                                        var sr = Math.sin(d.rotate * cloudRadians),
                                            cr = Math.cos(d.rotate * cloudRadians),
                                            wcr = w * cr,
                                            wsr = w * sr,
                                            hcr = h * cr,
                                            hsr = h * sr;
                                        w = (Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5 << 5;
                                        h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
                                    } else {
                                        w = (w + 0x1f) >> 5 << 5;
                                    }
                                    if (h > maxh) maxh = h;
                                    if (x + w >= (cw << 5)) {
                                        x = 0;
                                        y += maxh;
                                        maxh = 0;
                                    }
                                    if (y + h >= ch) break;
                                    c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
                                    if (d.rotate) c.rotate(d.rotate * cloudRadians);
                                    c.fillText(d.text, 0, 0);
                                    if (d.padding) c.lineWidth = 2 * d.padding, c.strokeText(d.text, 0, 0);
                                    c.restore();
                                    d.width = w;
                                    d.height = h;
                                    d.xoff = x;
                                    d.yoff = y;
                                    d.x1 = w >> 1;
                                    d.y1 = h >> 1;
                                    d.x0 = -d.x1;
                                    d.y0 = -d.y1;
                                    d.hasText = true;
                                    x += w;
                                }
                                var pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
                                    sprite = [];
                                while (--di >= 0) {
                                    d = data[di];
                                    if (!d.hasText) continue;
                                    var w = d.width,
                                        w32 = w >> 5,
                                        h = d.y1 - d.y0;
                                    // Zero the buffer
                                    for (var i = 0; i < h * w32; i++) sprite[i] = 0;
                                    x = d.xoff;
                                    if (x == null) return;
                                    y = d.yoff;
                                    var seen = 0,
                                        seenRow = -1;
                                    for (var j = 0; j < h; j++) {
                                        for (var i = 0; i < w; i++) {
                                            var k = w32 * j + (i >> 5),
                                                m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
                                            sprite[k] |= m;
                                            seen |= m;
                                        }
                                        if (seen) seenRow = j;
                                        else {
                                            d.y0++;
                                            h--;
                                            j--;
                                            y++;
                                        }
                                    }
                                    d.y1 = d.y0 + seenRow;
                                    d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
                                }
                            }

                            // Use mask-based collision detection.
                            function cloudCollide(tag, board, sw) {
                                sw >>= 5;
                                var sprite = tag.sprite,
                                    w = tag.width >> 5,
                                    lx = tag.x - (w << 4),
                                    sx = lx & 0x7f,
                                    msx = 32 - sx,
                                    h = tag.y1 - tag.y0,
                                    x = (tag.y + tag.y0) * sw + (lx >> 5),
                                    last;
                                for (var j = 0; j < h; j++) {
                                    last = 0;
                                    for (var i = 0; i <= w; i++) {
                                        if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0))
                                            & board[x + i]) return true;
                                    }
                                    x += sw;
                                }
                                return false;
                            }

                            function cloudBounds(bounds, d) {
                                var b0 = bounds[0],
                                    b1 = bounds[1];
                                if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
                                if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
                                if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
                                if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1;
                            }

                            function collideRects(a, b) {
                                return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y;
                            }

                            function archimedeanSpiral(size) {
                                var e = size[0] / size[1];
                                return function(t) {
                                    return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)];
                                };
                            }

                            function rectangularSpiral(size) {
                                var dy = 4,
                                    dx = dy * size[0] / size[1],
                                    x = 0,
                                    y = 0;
                                return function(t) {
                                    var sign = t < 0 ? -1 : 1;
                                    // See triangular numbers: T_n = n * (n + 1) / 2.
                                    switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
                                        case 0:  x += dx; break;
                                        case 1:  y += dy; break;
                                        case 2:  x -= dx; break;
                                        default: y -= dy; break;
                                    }
                                    return [x, y];
                                };
                            }

                            // TODO reuse arrays?
                            function zeroArray(n) {
                                var a = [],
                                    i = -1;
                                while (++i < n) a[i] = 0;
                                return a;
                            }

                            var cloudRadians = Math.PI / 180,
                                cw = 1 << 11 >> 5,
                                ch = 1 << 11,
                                canvas,
                                ratio = 1;

                            if (typeof document !== "undefined") {
                                canvas = document.createElement("canvas");
                                canvas.width = 1;
                                canvas.height = 1;
                                ratio = Math.sqrt(canvas.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
                                canvas.width = (cw << 5) / ratio;
                                canvas.height = ch / ratio;
                            } else {
                                // Attempt to use node-canvas.
                                canvas = new Canvas(cw << 5, ch);
                            }

                            var c = canvas.getContext("2d"),
                                spirals = {
                                    archimedean: archimedeanSpiral,
                                    rectangular: rectangularSpiral
                                };
                            c.fillStyle = c.strokeStyle = "red";
                            c.textAlign = "center";
                        }

                    })();

                    load();
                });
            }
        }
    }

    angular.module('caroline-website.GithubModule')
        .directive('commitWordCloud', ['D3Service', 'GithubService', CommitWordCloud]);
})();
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
                    $scope.userEvents = [];
                    //Workaround because return page size is fixed at 30 items
                    for (var i = 0; i < response.length && i < 10; i++) {
                        $scope.userEvents.push(response[i]);
                    }
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
(function() {
    function GithubService($http) {
        var baseUrl = "https://api.github.com/";

        this.getCarolinePaulicUserEvents = function() {
            return $http({
                url: baseUrl + 'users/carolinepaulic/events',
                method: "GET"
            });
        };

        this.getCarolineWebsiteEvents = function() {
            return $http({
                url: baseUrl + 'repos/carolinepaulic/CarolineWebsite/events',
                method: "GET"
            });
        };
    }

    angular.module('caroline-website.GithubModule')
        .service('GithubService', ['$http', GithubService]);
})();
(function () {
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

(function () {
    function HomeService($http) {
        this.getHomeText = function() {
            return "hola";
        }
    }

    angular
        .module('caroline-website.HomeModule')
        .service('HomeService', ['$http', HomeService]);
})();
(function() {
    function GovDataService() {

    }

    angular.module('caroline-website.MapsModule')
        .service('GovDataService', [GovDataService]);
})();
(function () {
    function TestMap(D3Service, GovDataService) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                D3Service.d3().then(function(d3) {
                    var width = 960,
                        height = 600;

                    var rateById = d3.map();

                    var quantize = d3.scale.quantize()
                        .domain([0, 20])
                        .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

                    var projection = d3.geo.albersUsa()
                        .scale(1280)
                        .translate([width / 2, height / 2]);

                    var path = d3.geo.path()
                        .projection(projection);

                    var svg = d3.select("#map").append("svg")
                        .attr("width", width)
                        .attr("height", height);

                    queue()
                        .defer(d3.json, "modules/maps/us.json")
                        .defer(d3.csv, "modules/maps/DataDownload/HealthTable.csv", function(d) { rateById.set(+d.FIPS, +d.RECFAC07); })
                        .await(ready);

                    function ready(error, us) {
                        if (error) throw error;

                        svg.append("g")
                            .attr("class", "counties")
                            .selectAll("path")
                            .data(topojson.feature(us, us.objects.counties).features)
                            .enter().append("path")
                            .attr("class", function(d) { return quantize(rateById.get(d.id)); })
                            .attr("d", path);

                        svg.append("path")
                            .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
                            .attr("class", "states")
                            .attr("d", path);
                    }

                    d3.select(self.frameElement).style("height", height + "px");
                });
            }
        }
    }

    angular.module('caroline-website.MapsModule')
        .directive('testMap', ['D3Service', 'GovDataService', TestMap]);
})();
(function() {
    function ProfessionalController($scope, NavigationService) {
        $scope.goToSoftwareProjectsPage = function() {
            NavigationService.goToAllProjectsPage();
        };
    }

    angular
        .module('caroline-website.ProfessionalModule')
        .controller('ProfessionalController', ['$scope', 'NavigationService', ProfessionalController])
})();
(function() {
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
(function() {
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
(function() {
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
(function () {
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
(function () {
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
(function() {
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
angular.module('caroline-website',
    [
        'ui.router',
        'ui.bootstrap',
        'ngRoute',
        'ngSanitize',
        'emoji',
        'caroline-website.SidebarModule',
        'caroline-website.HomeModule',
        'caroline-website.ProjectModule',
        'caroline-website.ReadingModule',
        'caroline-website.GithubModule',
        'caroline-website.MapsModule',
        'caroline-website.D3Module',
        'caroline-website.ProfessionalModule',
        'caroline-website.FooterModule'
    ]);