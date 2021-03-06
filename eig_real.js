function eig_real() {

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
      .text("Ionosphere");

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

d3.tsv("eig_iono.txt", function(error, data) {
  if (error) throw error;
 
  data.forEach(function(d) {
    d.s11 = +d.s11;
    d.s12 = +d.s12;
    d.s21 = +d.s21;
    d.s22 = +d.s22;
    d.s31 = +d.s31;
    d.s32 = +d.s32;
    d.labels = +d.labels;
  });

var color = d3.scale.ordinal().domain([1, 2]).range(["#4B0082", "#FF7F00"]);

  var domainbyplot_x = {}, domainbyplot_y = {},
      vecOdd = d3.keys(data[0]).filter(function(d) { return d == "s12" | d == "s22" | d == "s32"; }), 
      vecEven = d3.keys(data[0]).filter(function(d) { return d == "s11" | d == "s21" | d == "s31"; }); 

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

  var cell = svgs1.selectAll(".cell")
      .data(box(vecEven,vecOdd))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
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
        .attr("class", "M")
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
    svgs1.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs1.selectAll(".hidden").classed("hidden", false);
  }
});


var svgs2 = d3.select("#Container2").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

     svgs2.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Churn");

d3.tsv("eig_churn.txt", function(error, data2) {
  if (error) throw error;
 
  data2.forEach(function(d) {
    d.s11 = +d.s11;
    d.s12 = +d.s12;
    d.s21 = +d.s21;
    d.s22 = +d.s22;
    d.s31 = +d.s31;
    d.s32 = +d.s32;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([0, 1]) .range(["#d7191c", "#2c7bb6"]);

  var domainbyplot_x = {}, domainbyplot_y = {},
      vecOdd = d3.keys(data2[0]).filter(function(d) { return d == "s12" | d == "s22" | d == "s32"; }), 
      vecEven = d3.keys(data2[0]).filter(function(d) { return d == "s11" | d == "s21" | d == "s31"; });  

  vecEven.forEach(function(vec) {
    domainbyplot_x[vec] = d3.extent(data2, function(d) { return d[vec]; });
  });

    vecOdd.forEach(function(vec) {
    domainbyplot_y[vec] = d3.extent(data2, function(d) { return d[vec]; });
  });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs2.selectAll(".cell")
      .data(box(vecEven,vecOdd))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot2);
  
   cell.call(brush);

  function plot2(p) {
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
        .data(data2)
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
    svgs2.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs2.selectAll(".hidden").classed("hidden", false);
  }
});

var svgs3 = d3.select("#Container3").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

     svgs3.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Semeion");
    
d3.tsv("eig_seme.txt", function(error, data3) {
  if (error) throw error;
 
  data3.forEach(function(d) {
    d.s11 = +d.s11;
    d.s12 = +d.s12;
    d.s21 = +d.s21;
    d.s22 = +d.s22;
    d.s31 = +d.s31;
    d.s32 = +d.s32;
  });

  var domainbyplot_x = {}, domainbyplot_y = {},
      vecOdd = d3.keys(data3[0]).filter(function(d) { return d == "s12" | d == "s22" | d == "s32"; }), 
      vecEven = d3.keys(data3[0]).filter(function(d) { return d == "s11" | d == "s21" | d == "s31"; }); 

  vecEven.forEach(function(vec) {
    domainbyplot_x[vec] = d3.extent(data3, function(d) { return d[vec]; });
  });

    vecOdd.forEach(function(vec) {
    domainbyplot_y[vec] = d3.extent(data3, function(d) { return d[vec]; });
  });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs3.selectAll(".cell")
      .data(box(vecEven,vecOdd))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot3);
  
   cell.call(brush);

  function plot3(p) {
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
        .data(data3)
        .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x]); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("class", "S");  }

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
    svgs3.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs3.selectAll(".hidden").classed("hidden", false);
  }
});


var svgs4 = d3.select("#Container4").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

     svgs4.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Mushroom");
    
d3.tsv("eig_mush.txt", function(error, data4) {
  if (error) throw error;
 
  data4.forEach(function(d) {
    d.s11 = +d.s11;
    d.s12 = +d.s12;
    d.s21 = +d.s21;
    d.s22 = +d.s22;
    d.s31 = +d.s31;
    d.s32 = +d.s32;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([0, 1]).range(["#ffff00", "#0000ff"]);

  var domainbyplot_x = {}, domainbyplot_y = {},
      vecOdd = d3.keys(data4[0]).filter(function(d) { return d == "s12" | d == "s22" | d == "s32"; }), 
      vecEven = d3.keys(data4[0]).filter(function(d) { return d == "s11" | d == "s21" | d == "s31"; }); 
  vecEven.forEach(function(vec) {
    domainbyplot_x[vec] = d3.extent(data4, function(d) { return d[vec]; });
  });

    vecOdd.forEach(function(vec) {
    domainbyplot_y[vec] = d3.extent(data4, function(d) { return d[vec]; });
  });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs4.selectAll(".cell")
      .data(box(vecEven,vecOdd))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot4);
  
   cell.call(brush);

  function plot4(p) {
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
        .data(data4)
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
    svgs4.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs3.selectAll(".hidden").classed("hidden", false);
  }
});

var size = 200, padding = 10, labspace = 50, rows = 3, cols = 1;

var svgs5 = d3.select("#Container5").append("svg")
      .attr("width", (size + labspace + padding) * cols)
      .attr("height", size * rows  + padding * rows )
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

     svgs5.append("text")
      .attr("x", padding)
      .attr("y", size * rows + padding)
      .style("text-anchor", "start")
      .text("Breast Cancer");

var laby = ["kPCA","LLE","Isomap"], n = rows-1, yiter;
   for (yiter = -1; yiter++ < n;) {
     svgs5.append("text")
      .attr("x", (size - 3))
      .attr("y", (size * (yiter + 1) - padding))
      .style("text-anchor", "start")
      .text(laby[yiter]);}
    
d3.tsv("eig_breast.txt", function(error, data5) {
  if (error) throw error;
 
  data5.forEach(function(d) {
    d.s11 = +d.s11;
    d.s12 = +d.s12;
    d.s21 = +d.s21;
    d.s22 = +d.s22;
    d.s31 = +d.s31;
    d.s32 = +d.s32;
    d.labels = +d.labels;
  });

  var color = d3.scale.ordinal().domain([1, 2]).range(["#1b9e77", "#d95f02"]);

  var domainbyplot_x = {}, domainbyplot_y = {},
      vecOdd = d3.keys(data5[0]).filter(function(d) { return d == "s12" | d == "s22" | d == "s32"; }), 
      vecEven = d3.keys(data5[0]).filter(function(d) { return d == "s11" | d == "s21" | d == "s31"; }); 

  vecEven.forEach(function(vec) {
    domainbyplot_x[vec] = d3.extent(data5, function(d) { return d[vec]; });
  });

    vecOdd.forEach(function(vec) {
    domainbyplot_y[vec] = d3.extent(data5, function(d) { return d[vec]; });
  });

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var cell = svgs5.selectAll(".cell")
      .data(box(vecEven,vecOdd))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) {if (d.i == 0) {return "translate(" + 0 + "," + 0 + ")";} 
        else if (d.i == 1) {return "translate(" + 0 + "," + size*(rows-2) + ")";} 
        else {return "translate(" + 0 + "," + size*(rows-1)  + ")"; }})
      .each(plot5);
  
   cell.call(brush);

  function plot5(p) {
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
        .data(data5)
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
    svgs5.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  function brushend() {
    if (brush.empty()) svgs5.selectAll(".hidden").classed("hidden", false);
  }
});


function box(a, b) {
  var c = [], m = 2, i = -1, j;
   for (j = -1; j++ < m;) {
  i = j;
  c.push({y: b[j], j: j , x: a[i], i: i});
}
    return c;
  }
}  
