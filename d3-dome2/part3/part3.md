# 绘制基本的SVG图形
  开始进入正题了,我们先来画一个简单的圆点图

## 创建SVG

    var svg = d3.select("body")
    			.append("svg")
    			.attr("width", 500)
    			.attr("height", 100)

## 根据数据绘制图形
  用前一个例子的模拟数据吧

    var dataset = [];
    for(var i=0; i< 5; i++){
        var newNumber = Math.random() *30;
        dataset.push(newNumber);
    }

  迭代每个数据点创建圆形

    var circles = svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")

  设置这些圆形的坐标

    circles
            .attr("cx", function (d, i) {
                return (i * 50) + 25;
            })
            .attr("cy", 50)
            .attr("r", function(d){
                return d;
            })

   设置颜色, fill-颜色填充,stroke-描边, stroke-width-设置边的宽度


    .attr("fill", "yellow") //填充
    .attr("stroke", "orange") //描边
    .attr("stroke-width", function(d){ //描边宽度
        return d/2;
    })

  [例子](example1.html)