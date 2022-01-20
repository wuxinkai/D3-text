# 布局 - 饼图布局

## 创建饼图布局

    var pie = d3.layout.pie();

    var arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)

## 渲染饼图

    var arcs = svg.selectAll("g.arc")
            .data(pie(dataset))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")")

    arcs.append("path")
            .attr("fill", function(d, i){
                return color(i);
            })
            .attr("d", arc)
[例子](example1.html)