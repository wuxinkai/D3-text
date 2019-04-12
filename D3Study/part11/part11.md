# 更新、添加与移除

## 更新
 数据的更新比较简单只用将dataset重新绑定到所选择的元素上即可
 我们在[part9](part9/part9.html)的基础上加一个按钮可以动态修改柱图的值

  页面添加一个button

    <button id="btn1">更新</button>
  给这个button添加一个click事件的监听

    d3.select("#btn1").on("click", function(){
        ...
    })
  在监听的函数内重新生成数据

    var dataset = [];
    for (var i = 0; i < 10; i++) {
        var newNumber = Math.random() * 30;
        dataset.push({
            number: newNumber,
            name: "柱子" + i
        });
    }
  重设比例尺

    yScale.domain([
        d3.max(dataset, function(d){
            return d.number;
        }),
        0
    ]);
  更新柱状图,其实和初始添加的时候的代码差不多,不过把enter()和append()这两个函数去掉

    svg.selectAll("rect")
        .data(dataset)
        .attr("x", function (d, i) {
            return xScale(d.name);
        })
        .attr("width", xScale.rangeBand())
        .attr("height", function (d) {
            return h- yScale(d.number) - padding;
        })
        .attr("y", function (d) {
            return yScale(d.number);
        })
  坐标轴要能更新,我们得在append坐标轴的时候,定义一个class

    .attr("class", "axis j_yAxis")
  更新坐标轴

    svg.select(".j_yAxis")
                .call(yAxis)
  [例子](example1.html)

## 添加
  如果我们新改变的数据集的个数比原来的大,用上面的方式,我们会发现不会增加柱图,所以,我们在click事件中代码就应该改成下面这个样子

    svg.selectAll("rect")
                    .data(dataset)
                    .enter()
                    .append("rect")
                    .attr("x", function (d, i) {
                        return xScale(d.name);
                    })
                    .attr("width", xScale.rangeBand())
                    .attr("height", function (d) {
                        return h- yScale(d.number) - padding;
                    })
                    .attr("y", function (d) {
                        return yScale(d.number);
                    })
    svg.selectAll("rect")
                    .data(dataset)
                    .attr("x", function (d, i) {
                        return xScale(d.name);
                    })
                    .attr("width", xScale.rangeBand())
                    .attr("height", function (d) {
                        return h- yScale(d.number) - padding;
                    })
                    .attr("y", function (d) {
                        return yScale(d.number);
                    })
  第一个是增加的,第二个是修改的
  [例子](example2.html)

## 移除
  这次,我们生成随机个数的数据

    var dataset = [];
    var l = Math.floor(Math.random() * 10);

    for (var i = 0; i < l; i++) {
        var newNumber = Math.random() * 30;
        dataset.push({
            number: newNumber,
            name: "柱子" + i
        });
    }
  在click事件里面加上移除的代码

    svg.selectAll("rect")
            .data(dataset)
            .exit()
            .remove()
[例子](example3.html)