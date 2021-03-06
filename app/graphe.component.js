System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GrapheComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GrapheComponent = (function () {
                function GrapheComponent() {
                }
                GrapheComponent.prototype.ngOnInit = function () {
                    this.runGraphe();
                };
                GrapheComponent.prototype.runGraphe = function () {
                    // voir http://bl.ocks.org/d3noob/b3ff6ae1c120eea654b5
                    // Set the dimensions of the canvas / graph
                    var margin = { top: 30, right: 20, bottom: 30, left: 50 }, width = 600 - margin.left - margin.right, height = 270 - margin.top - margin.bottom;
                    // Parse the date / time
                    var parseDate = d3.time.format("%d-%b-%y").parse;
                    // Set the ranges
                    var x = d3.time.scale().range([0, width]);
                    var y = d3.scale.linear().range([height, 0]);
                    // Define the axes
                    var xAxis = d3.svg.axis().scale(x)
                        .orient("bottom").ticks(5);
                    var yAxis = d3.svg.axis().scale(y)
                        .orient("left").ticks(5);
                    // Define the line
                    var valueline = d3.svg.line()
                        .x(function (d) { return x(d.date); })
                        .y(function (d) { return y(d.close); });
                    // Adds the svg canvas
                    var svg = d3.select("#grapheD3")
                        .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    // Get the data
                    d3.csv("app/data.csv", function (error, data) {
                        data.forEach(function (d) {
                            d.date = parseDate(d.date);
                            d.close = +d.close;
                        });
                        // Scale the range of the data
                        x.domain(d3.extent(data, function (d) { return d.date; }));
                        y.domain([0, d3.max(data, function (d) { return d.close; })]);
                        // Add the valueline path.
                        svg.append("path")
                            .attr("class", "line")
                            .attr("d", valueline(data));
                        // Add the X Axis
                        svg.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);
                        // Add the Y Axis
                        svg.append("g")
                            .attr("class", "y axis")
                            .call(yAxis);
                    });
                };
                GrapheComponent = __decorate([
                    core_1.Component({
                        selector: 'graphe',
                        templateUrl: 'app/graphe.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], GrapheComponent);
                return GrapheComponent;
            }());
            exports_1("GrapheComponent", GrapheComponent);
        }
    }
});
//# sourceMappingURL=graphe.component.js.map