function eig_art1D() {

var size = 200, padding = 10, labspace = 0, rows = 3, cols = 1;

var svgs1 = d3.select("#Container1").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

      svgs1.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Clustered");

var x = d3.scale.linear()
    .range([padding / 2, size - padding / 2]);

var y = d3.scale.linear()
    .range([size - padding / 2, padding / 2]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

d3.tsv("eig_cl2D.txt", function(error, data) {
  if (error) throw error;
 
  data.forEach(function(d) {
    d.s1 = +d.s1;
    d.s2 = +d.s2;
    d.s3 = +d.s3;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([1, 2, 3 , 4, 5]).range(["#2ca25f", "#de2d26", "#3182bd", "#FFFF00", "#000000"]);

  var domainbyplot = {},
      veckey = d3.keys(data[0]).filter(function(d) { return d !== "labels"; });

  veckey.forEach(function(vec) {
    domainbyplot[vec] = d3.extent(data, function(d) { return d[vec]; }); });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs1.selectAll(".cell")
      .data(box(veckey))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot);

  cell.call(brush);

  function plot(p) {
    var cell = d3.select(this);
    
    x.domain(domainbyplot[p.x]).nice();
    y.domain(domainbyplot[p.y]).nice();

    cell.append("rect")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding)
        .attr("class", "frame");

    cell.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x] * d3.randomUniform(1)()); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("class", "M")
        .style("fill", function(d) { return color(d.labels); });}

  var brushCell;

  function brushstart(p) {
    if (brushCell !== this) {
      d3.select(brushCell).call(brush.clear());
      x.domain(domainbyplot[p.x]).nice();
      y.domain(domainbyplot[p.y]).nice();
      brushCell = this;
    }
  }

  function brushmove(p) {
    var e = brush.extent();
    svgs1.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs1.selectAll(".hidden").classed("hidden", false);
  }
});

var size = 200, padding = 10, labspace = 0, rows = 3, cols = 1;

var svgs2 = d3.select("#Container2").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

     svgs2.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Mickey Mouse");

d3.tsv("eig_mickey.txt", function(error, data2) {
  if (error) throw error;
 
  data2.forEach(function(d) {
    d.s1 = +d.s1;
    d.s2 = +d.s2;
    d.s3 = +d.s3;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([1, 2, 3, 4]).range(["#2ca25f", "#de2d26", "#3182bd", "#FFFF00"]);

  var domainbyplot = {},
      veckey = d3.keys(data2[0]).filter(function(d) { return d !== "labels"; });

  veckey.forEach(function(vec) {
    domainbyplot[vec] = d3.extent(data2, function(d) { return d[vec]; }); });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs2.selectAll(".cell")
      .data(box(veckey))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot2);
  
   cell.call(brush);

  function plot2(p) {
    var cell = d3.select(this);
    
    x.domain(domainbyplot[p.x]).nice();
    y.domain(domainbyplot[p.y]).nice();

    cell.append("rect")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding)
        .attr("class", "frame");

    cell.selectAll("circle")
        .data(data2)
        .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x] * d3.randomUniform(1)()); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("class", "M")
        .style("fill", function(d) { return color(d.labels); });}

  var brushCell;

  function brushstart(p) {
    if (brushCell !== this) {
      d3.select(brushCell).call(brush.clear());
      x.domain(domainbyplot[p.x]).nice();
      y.domain(domainbyplot[p.y]).nice();
      brushCell = this;
    }
  }

  function brushmove(p) {
    var e = brush.extent();
    svgs2.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs2.selectAll(".hidden").classed("hidden", false);
  }
});

var size = 200, padding = 10, labspace = 50, rows = 3, cols = 1;

var svgs3 = d3.select("#Container3").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

     svgs3.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Circle");

            var laby = ["kPCA","LLE","Isomap"], n = rows-1, yiter;
   for (yiter = -1; yiter++ < n;) {
     svgs3.append("text")
      .attr("x", (size - 3))
      .attr("y", (size * (yiter + 1) - padding))
      .style("text-anchor", "start")
      .text(laby[yiter]);}
    
d3.tsv("eig_circle.txt", function(error, data3) {
  if (error) throw error;
 
  data3.forEach(function(d) {
    d.s1 = +d.s1;
    d.s2 = +d.s2;
    d.s3 = +d.s3;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([1, 2]).range(["#0000ff", "#ff0000"]);

  var domainbyplot = {},
      veckey = d3.keys(data3[0]).filter(function(d) { return d !== "labels"; });

  veckey.forEach(function(vec) {
    domainbyplot[vec] = d3.extent(data3, function(d) { return d[vec]; }); });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs3.selectAll(".cell")
      .data(box(veckey))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot3);
  
   cell.call(brush);

  function plot3(p) {
    var cell = d3.select(this);
    
    x.domain(domainbyplot[p.x]).nice();
    y.domain(domainbyplot[p.y]).nice();

    cell.append("rect")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding)
        .attr("class", "frame");

    cell.selectAll("circle")
        .data(data3)
        .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x] * d3.randomUniform(1)()); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("class", "M")
        .style("fill", function(d) { return color(d.labels); });}

  var brushCell;

  function brushstart(p) {
    if (brushCell !== this) {
      d3.select(brushCell).call(brush.clear());
      x.domain(domainbyplot[p.x]).nice();
      y.domain(domainbyplot[p.y]).nice();
      brushCell = this;
    }
  }

  function brushmove(p) {
    var e = brush.extent();
    svgs3.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs3.selectAll(".hidden").classed("hidden", false);
  }
});

  function box(a) {
   var c = [], m = 2, i;
     for (i = -1; i++ < m;) {
     c.push({y: a[i], x: a[i], i: i});
}
    return c;
  }
}


