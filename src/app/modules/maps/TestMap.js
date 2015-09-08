(function () {
    function UsMap(D3Service, GovDataService) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                D3Service.d3().then(function(d3) {
                    var width = 960,
                        height = 600;

                    var rateById = d3.map();

                    var quantize = d3.scale.quantize()
                        .domain([0, 50])
                        .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

                    var projection = d3.geo.albersUsa()
                        .scale(1280)
                        .translate([width / 2, height / 2]);

                    var path = d3.geo.path()
                        .projection(projection);

                    var div = d3.select("#recCenters07").append("div")
                        .attr("class", "tooltip")
                        .style("opacity", 0);

                    var svg = d3.select("#recCenters07").append("svg")
                        .attr("width", width)
                        .attr("height", height);

                    queue()
                        .defer(d3.json, "modules/maps/us.json")
                        .defer(d3.csv, "modules/maps/DataDownload/HealthTable.csv", function(d) { rateById.set(+d.FIPS, d); })
                        .await(ready);

                    function getHtmlForTooltip(d) {
                        var data = rateById.get(d.id);
                        if (data) {
                            console.info(data);
                            console.info(data.County);
                            return data.County + ", " + data.State + ": " + data.RECFAC07;
                        }

                        return "";
                    }

                    function ready(error, us) {
                        if (error) throw error;

                        svg.append("g")
                            .attr("class", "counties")
                            .selectAll("path")
                            .data(topojson.feature(us, us.objects.counties).features)
                            .enter().append("path")
                            .attr("class", function(d) { var test = rateById.get(d.id); if(test) return quantize(test.RECFAC07); })
                            .attr("d", path)
                            .on("mouseover", function(d) {
                                div.transition()
                                    .duration(200)
                                    .style("opacity", 1);
                                div .html(getHtmlForTooltip(d))
                                    .style("left", (d3.event.pageX - 210) + "px")
                                    .style("top", (d3.event.pageY - 40) + "px");
                            })
                            .on("mouseout", function(d) {
                                div.transition()
                                    .duration(500)
                                    .style("opacity", 0);
                            });

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
        .directive('usMap', ['D3Service', 'GovDataService', UsMap]);
})();