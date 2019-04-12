# 事件与监听
  D3的事件监听和jquery差不多,也是用on函数来监听(其实这个好像已经成惯例了,各个框架都是用on来监听,用trigger来触发)

    d3.select("input").on("click", function(){
      ...
    });

## 得到事件触发的元素

    .on("mouseover", function(){
        d3.select(this)
                .attr("fill", "orange")
    })
    .on("mouseout", function(){
        d3.select(this)
                .attr("fill", "black")
    })
  [例子](example1.html)

## 忽略鼠标事件

    svg text{
        pointer-events: none;
    }

## 显示SVG提示条
  在鼠标移入的时候得到坐标 append一个text

    var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.rangeBand() / 2;
    var yPosition = parseFloat(d3.select(this).attr("y")) + 15;

    svg.append("text")
            .attr("id", "tooltip")
            .attr("x", xPosition)
            .attr("y", yPosition)
  在移出的时候remove掉

    svg.select("#tooltip").remove();
  [例子](example2.html)

## 显示DIV提示条
  对于一些比较复杂的提示条,我们可以用DIV来做,当鼠标移入柱图时显示,移出时隐藏
  提示框

    <div id="tooltip" class="hidden">
        <p>
            值:<span id="value"></span>
        </p>
    </div>
  鼠标移入时

    d3.select("#tooltip")
            .style("left", xPosition + "px")
            .style("top", yPosition + "px")
            .select("#value")
            .text(d.number)
  鼠标移出时

    svg.select("#tooltip").classed("hidden", true);
  给提示条加上,不触发事件的样式

    #tooltip {
        pointer-events: none;
        ...
    }