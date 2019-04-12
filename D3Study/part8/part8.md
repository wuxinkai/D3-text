# 数轴
  我们接着给[part7](../part7/example2.html)的散点图增加一个X轴,一个Y轴

## 创建X轴

    var padding = 20;
    var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(5)

    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0, " + (h - padding) + ")")
            .call(xAxis);
  scale()函数接受X方向的比例尺
  orient()函数设定数轴的显示方向,接受的参数有"left","right","top","bottom",设置了"top","bottom"就是X轴
  ticks()函数设定刻度的数量(默认是10),不过,你设定的这个刻度只是一个建议值,如果D3在分的时候觉得这个值不合适,他会设定一个更合理的值
  设置transform属性,让X轴显示在SVG的下方

## 美化一下数轴
  我们可以使用样式,来美化SVG中的元素

    .axis path,
    .axis line{
        fill: none;
        stroke: black;
        shap-rendering: crispEdges;
    }

## 创建Y轴

    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis)
  和创建X轴相似

[例子](example1.html)


