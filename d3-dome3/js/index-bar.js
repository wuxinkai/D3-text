var data = [1, 4, 7, 2, 9, 13, 5, 8, 2, 9],
  bar_height = 50,
  bar_padding = 10,
  svg_height = (bar_height + bar_padding) * data.length,
  svg_width = 500;

//div--svg--bar--rect--text
//线性缩放
var scale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, svg_width])

//SVG
var svg = d3.select("#container")
  .append("svg")
  .attr("width", svg_width)
  .attr("height", svg_height)

//选择所有的g元素 
var bar = svg.selectAll("g")
  .data(data)
  .enter() //
  .append("g")
  .attr("transform", function (d, i) { //这是每个柱子的位置
    return "translate(0," + i * (bar_height + bar_padding) + ")";
  })

//rect 生成柱形图
bar.append("rect")
  .attr({
    "width": function (d) {
      return scale(d); //x轴缩放
    },
    "height": bar_height
  })
  .style("fill", "steelblue") //填充

//文字显示位置
bar.append("text")
  .text(function (d) {
    return d;
  })
  .attr({
    "x": function (d) {
      return scale(d);
    },
    "y": bar_height / 2,
    "text-anchor": "end" //文字显示到里面
  })