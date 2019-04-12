# 基于数据创建DOM元素
  比较简单,直接看代码吧

    // 构建模拟数据
    var dataset = [];
    for(var i=0; i< 25; i++){
        var newNumber = Math.random() *30;
        dataset.push(newNumber);
    }

    d3.select("body")
            .selectAll("div")
            .data(dataset)              // 将数据集和DIV绑定
            .enter()                    //当DOM数量少于data的数量，或者压根一个都没有的时候，我们一般会希望让程序帮忙创建
            .append("div")
            .attr("class", "bar")
            .style("height", function(d){
                // 设置高度
                var barHeight = d * 5;
                return barHeight + "px";
            })

[例子](example1.html)