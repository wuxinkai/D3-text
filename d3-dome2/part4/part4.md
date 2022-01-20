# 绘制柱状图
  前面我们用DIV绘制了个柱状图,现在我们用SVG来绘制一个柱状图

## 创建SVG
  这次我们灵活一点,把高和宽用变量保存起来

    var w = 500;
    var h = 200;

    var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

## 根据数据绘制柱状图

    svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")

## 设置尺寸和坐标
  为了能让这些柱状图根据svg的宽/高,平均的分布在SVG中,我们需要设置一下x,y,width这些属性

    .attr("x", function(d, i){
        return i * ( w/ dataset.length);
    })
    .attr("width", w / dataset.length - 1)
    .attr("height", function(d){
        return d;
    })

## 让柱状图正过来
  这个时候,你会发现,其实柱状图是倒的, 这是因为SVG是以左上角作为坐标的原点,我们只能自己处理一下了

    .attr("y", function(d){
        return h - d;
    })

## 放大高度
  我觉得这个图有点小,给这些柱图都放高一点吧,修改下height和y属性

    .attr("height", function(d){
          return d * 4;
     })
     .attr("y", function(d){
         return h - d * 4;
     })


## 上色
  我们可以根据数据的大小,给图形填充不同的颜色,这样看起来更生动些

    .attr("fill", function(d){
        return "rgb(0, 0, " + Math.floor(d * 10) + ")";
    })
  注意:因为随机数生成的时候是有小数点的,所以如果不取整的化,填充色是出不来的

## 加标签
  我们最后来给这些柱子配上实际的数值

  创建text元素,绑定到dataset上

    svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
  把数值赋值到text属性中

    .text(function(d){
        return Math.floor(d);
    })
  设置坐标

    .attr("x", function(d, i){
        return i * (w / dataset.length) + (w/dataset.length - 1) / 2;
    })
    .attr("y", function(d){
        return h - (d * 4) + 14
    })
  设置字体大小,颜色及对齐方式

    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle")

  好了,这个简单的柱状图就画好了,[例子](exapmle1.html)

