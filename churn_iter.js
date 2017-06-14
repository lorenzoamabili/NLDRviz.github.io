function churn_iter() {
 
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

d3.csv("churn_iter.csv", function(error, data) {
  if (error) throw error;

  var color = d3.scale.ordinal().domain([0, 1]) .range(["#d7191c", "#2c7bb6"]);
 
  data.forEach(function(d) {
    d.s11 = +d.s11;
    d.s12 = +d.s12;
    d.s21 = +d.s21;
    d.s22 = +d.s22;
    d.s31 = +d.s31;
    d.s32 = +d.s32;
    d.s41 = +d.s41;
    d.s42 = +d.s42;
    d.s51 = +d.s51;
    d.s52 = +d.s52;
    d.sn11 = +d.sn11;
    d.sn12 = +d.sn12;
    d.sn21 = +d.sn21;
    d.sn22 = +d.sn22;
    d.sn31 = +d.sn31;
    d.sn32 = +d.sn32;
    d.sn41 = +d.sn41;
    d.sn42 = +d.sn42;
    d.sn51 = +d.sn51;
    d.sn52 = +d.sn52;
    d.ts11 = +d.ts11;
    d.ts12 = +d.ts12;
    d.ts21 = +d.ts21;
    d.ts22 = +d.ts22;
    d.ts31 = +d.ts31;
    d.ts32 = +d.ts32;
    d.ts41 = +d.ts41;
    d.ts42 = +d.ts42;
    d.ts51 = +d.ts51;
    d.ts52 = +d.ts52;
    d.labels = +d.labels;
  });

  var domainbyplot_x = {}, domainbyplot_y = {},
      vecOdd = d3.keys(data[0]).filter(function(d) { return d == "s12" | d == "s22" | d == "s32"| d == "s42" | d == "s52" | d == "sn12" | d == "sn22" | d == "sn32"| d == "sn42" | d == "sn52" | d == "ts12" | d == "ts22" | d == "ts32"| d == "ts42" | d == "ts52" ; }), 
      vecEven = d3.keys(data[0]).filter(function(d) { return d == "s11" | d == "s21" | d == "s31" | d == "s41" | d == "s51" | d == "sn11" | d == "sn21" | d == "sn31" |d == "sn41" | d == "sn51" | d == "ts11" | d == "ts21" | d == "ts31" | d == "ts41" | d == "ts51" ; }); 

  vecEven.forEach(function(vec) {
    domainbyplot_x[vec] = d3.extent(data, function(d) { return d[vec]; });
  });

  vecOdd.forEach(function(vec) {
    domainbyplot_y[vec] = d3.extent(data, function(d) { return d[vec]; });
  });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svg.selectAll(".cell")
      .data(box(vecEven,vecOdd))
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
    
    x.domain(domainbyplot_x[p.x]).nice();
    y.domain(domainbyplot_y[p.y]).nice();

    cell.append("rect")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding)
        .attr("class", "frame");

    cell.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x]); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("class", "S")
        .style("fill", function(d) { return color(d.labels); });}

  var brushCell;

  function brushstart(p) {
    if (brushCell !== this) {
      d3.select(brushCell).call(brush.clear());
      x.domain(domainbyplot_x[p.x]).nice();
      y.domain(domainbyplot_y[p.y]).nice();
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

  function box(a, b) {
    var c = [], m = 14, i = -1, j;
    for (j = -1; j++ < m;) {
    i = j;
    c.push({y: b[j], j: j , x: a[i], i: i});
}
    return c;
  }
}


  
