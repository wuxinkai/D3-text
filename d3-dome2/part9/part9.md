# 比例尺 - 序数比例尺

## 定义一个序数比例尺

    var xScale = d3.scale.ordinal()
            .rangeBands([0, w], 0.1)
            .domain(["张三","李四","王五"])
  序数比例尺会根据domain的个数,将rangeBands的第一个参数分割成相同的块,rangeBands的第二个参数设置,各个分割的块之间的间隔
  rangeBands也可以用rangeRoundBands()来代替

## 用序数比例尺画柱状图
  我们用序数比例尺画一个和[part4](part4/example1.html) 一样的柱状图

### 生成数据源

    var dataset = [];
    for (var i = 0; i < 10; i++) {
        var newNumber = Math.random() * 30;
        dataset.push({
            number: newNumber,
            name: "柱子" + i
        });
    }
  在数据源中增加一个name作为柱状图的名称

### 定义x的比例尺

    var xScale = d3.scale.ordinal()
            .rangeRoundBands([padding, w - padding], 0.1)
            .domain(dataset.map(function (d) {
                return d.name;
            }))

    dataset.map(function (d) {
        return d.name;
    })
 Array.map()函数是ECMAScript 5规范中新增加的函数,返回值为['柱子1', '柱子2', '柱子3',....]

### 设置坐标和宽度

    .attr("x", function (d, i) {
        return xScale(d.name);
    })
    .attr("width", xScale.rangeBand())
  height和y属性的设置和part8(part8/example1.html)差不多

    .attr("height", function (d) {
        return h - yScale(d.number) - padding;
    })
    .attr("y", function (d) {
        return yScale(d.number);
    })

[例子](example1.html)