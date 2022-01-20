# 绘制区域图

## 基本的区域图

### 数据源

    dataset = [
        {
            date: new Date(),
            value: 5
        },
        {
            ...
        }
    ]

### 定义区域

    var area = d3.svg.area()
            .x(function(d) {
                return x(d.date);
            })
            .y0(height)
            .y1(function(d) { return y(d.value); });

### 把area渲染到SVG中

    svg.append("path")
            .datum(dataset)
            .attr("class", "area")
            .attr("d", area);
[例子](example1.html)

## 双线区域图
  只用修改一下例子1的area就行,其他的不变

### 数据源

    dataset = [
        {
            date: new Date(),
            high: 10,
            low: 4
        },
        {
            ...
        }
    ]
### 修改创建area对象

    var area = d3.svg.area()
            .x(function(d) {
                return x(d.date);
            })
            .y0(function(d){
                return y(d.low);
            })
            .y1(function(d) {
                return y(d.high);
            });
[例子](example2.html)

## 堆叠区域图