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