# 拖拽Event(Drag)

## 定义拖拽

    var drag = d3.behavior.drag();

## 监听拖拽事件
  drag 可以监听的事件有dragstart, drag, dragend

    drag.on("drag", function(d){
        ...
    });

## 将拖拽对象绑定到元素上

    var rect = svg
            .append("rect")
            .datum(dataset)
            .call(drag)
[例子](example1.html)