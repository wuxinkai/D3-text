# 曲线图

## 基本曲线图

### 数据源

    var dataset = [
        {
            date: new Date(),
            value: 50
        },
        {
            ...
        }
    ]

### 定义line对象

    var line = d3.svg.line()
            .x(function(d) {
                return x(d.date);
            })
            .y(function(d) {
                return y(d.value);
            });

### 把line渲染到SVG中

    svg.append("path")
            .datum(dataset)
            .attr("class", "line")
            .attr("d", line);
[例子](example1.html)

## 多曲线
  和单曲线差不多,不过对数据源要做一些调整

### 数据源

    var dataset = [
        {
            date: new Date(),
            line1: 10,
            line2: 20,
            line3: 25
        },
        {
            ...
        }
    ]
调整后的数据源

    var lineData = [
        {
            name: "line1",
            values:[
                {
                    date: new Date(),
                    value: 10
                },
                {
                    ...
                }
            ]
        },
        {
            ...
        }
    ]

### 定义Y轴比例尺

    var lineDataMin = d3.min(lineData, function(l){
        return d3.min(l.values, function(v){
            return v.value;
        })
    });
    var lineDataMax = d3.max(lineData, function(l){
        return d3.max(l.values, function(v){
            return v.value;
        })
    })

    var y = d3.scale.linear()
            .range([height, 0])
            .domain([
                    lineDataMin,
                    lineDataMax
            ]);

### 渲染曲线

    svg.selectAll(".line_g")
            .data(lineData)
            .enter()
            .append("g")
            .attr("class", "line_g");

    svg.selectAll(".line_g")
            .append("path")
            .attr("class", "line")
            .attr("d", function(d) {
                return line(d.values);
            })
            .style("stroke", function(d) {
                return color(d.name);
            });
[例子2](example2.html)

## 曲线平滑
和例子一差不多,只用在实例化d3.svg.line()的时候加上函数interpolate("basis")即可

``` js
var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) {
        return x(d.date);
    })
    .y(function(d) {
        return y(d.value);
    });
```
[例子3](example3.html)


