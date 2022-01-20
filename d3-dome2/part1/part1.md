# D3的基本操作
  我们用D3来画一个DIV的柱状图 [例子1](example1.html)

## 选择器
  D3的选择器其实和jquery差不多

    d3.select("body")       // 只取一个
    d3.selectAll("div")     // 选择一个集合

## 设置属性
  用selection.attr()方法设置选中元素的属性

    d3.selectAll("div").attr("data-id", 2);

## 设置样式
  用selection.style()直接给元素添加CSS样式

    d3.selectAll("div").style("width", "200px");

## 添加/删除元素的类
  用classed()给元素添加或者删除类

    d3.selectAll("div").classed("bar", true);
    d3.selectAll("div").classed("bar", false);


