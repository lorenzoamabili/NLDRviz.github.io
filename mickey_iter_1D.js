function mickey_iter_1D() {

var size = 200, padding = 10, labspace = 50, rows = 3, cols = 5;

var svg = d3.select("#Container").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows  )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

var labx = ["i = 1","i = 10","i = 30","i = 100","i = 300"], m = cols-1, xiter;
   for (xiter = -1; xiter++ < m;) {
     svg.append("text")
      .attr("x", (size * xiter)+ padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text(labx[xiter]);}

var laby = ["Sammon","SNE","t-SNE"], n = rows-1, yiter;
   for (yiter = -1; yiter++ < n;) {
     svg.append("text")
      .attr("x", (size * cols - 3))
      .attr("y", (size * (yiter + 1) - padding))
      .style("text-anchor", "start")
      .text(laby[yiter]);}

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

d3.tsv("mickey_iter_1D.txt", function(error, data) {
  if (error) throw error;
 
  data.forEach(function(d) {
    d.s1 = +d.s1;
    d.s2 = +d.s2;
    d.s3 = +d.s3;
    d.s4 = +d.s4;
    d.s5 = +d.s5;
    d.sn1 = +d.sn1;
    d.sn2 = +d.sn2;
    d.sn3 = +d.sn3;
    d.sn4 = +d.sn4;
    d.sn5 = +d.sn5;
    d.ts1 = +d.ts1;
    d.ts2 = +d.ts2;
    d.ts3 = +d.ts3;
    d.ts4 = +d.ts4;
    d.ts5 = +d.ts5;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([1, 2, 3, 4]).range(["#2ca25f", "#de2d26", "#3182bd", "#FFFF00"]);

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

  var cell = svg.selectAll(".cell")
      .data(box(veckey))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + size + "," + 0 + ")"; } 
        else if (d.i == 2) {return "translate(" + 2 * size + "," + 0 + ")"; } 
        else if (d.i == 3) {return "translate(" + 3 * size + "," + 0 + ")"; } 
        else if (d.i == 4) {return "translate(" + 4 * size + "," + 0 + ")"; } 
        else if (d.i == 5) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else if (d.i == 6) {return "translate(" +  size + "," + size*(rows-2)  + ")"; } 
        else if (d.i == 7) {return "translate(" + 2 * size + "," + size*(rows-2) + ")"; } 
        else if (d.i == 8) {return "translate(" + 3 * size + "," + size*(rows-2) + ")";} 
        else if (d.i == 9) {return "translate(" + 4 * size + "," + size*(rows-2) + ")"; } 
        else if (d.i == 10) {return "translate(" + 0 + "," + size*(rows-1)  + ")"; } 
        else if (d.i == 11) {return "translate(" +  size + "," + size*(rows-1)  + ")";} 
        else if (d.i == 12) {return "translate(" + 2 * size + "," + size*(rows-1)  + ")"; } 
        else if (d.i == 13) {return "translate(" + 3 * size + "," + size*(rows-1)  + ")";} 
        else if (d.i == 14) {return "translate(" + 4 * size + "," + size*(rows-1)  + ")"; }
        else {} })
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
    svg.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svg.selectAll(".hidden").classed("hidden", false);
  }
});

  function box(a) {
   var c = [], m = 14, i;
     for (i = -1; i++ < m;) {
     c.push({y: a[i], x: a[i], i: i});
}
    return c;
  }
}
