# 绘制散点图
  其实和[part3](part3/part3.md)的差不多, 不过数据源不是简单的数组

    var dataset = [];
    for (var i = 0; i < 10; i++) {
        var xNumber = Math.random() * 500;
        var yNumber = Math.random() * 400;
        dataset.push({
            x: xNumber,
            y: yNumber
        });
    }
  设置cx和cy属性

    .attr("cx", function (d, i) {
        return d.x;
    })
    .attr("cy", function(d, i){
        return d.y
    })

[例子](example1.html)