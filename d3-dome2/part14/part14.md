# 用刷子(Brush)选择散点
  我们在[part8](../part8/example1.html)的基础上用Brush来选择点

## 定义一个Brush

    var brush = d3.svg.brush()
            .x(xScale)
            .y(yScale)

## 将Brush添加到svg中

    svg.append("g")
            .attr("class", "brush")
            .call(brush)
            .call(brush.event)

## 设置Brush的样式

    .brush .extent {
        stroke: #fff;
        fill-opacity: .6;
    }

## 增加一个显示最大,最小值的DOM

    <div class="brushText j_brushText" style="display: none;">
        <div class="j_xValue">
            x:
            <span class="j_minValue"></span>
            ~
            <span class="j_maxValue"></span>
        </div>
        <div class="j_yValue">
            y:
            <span class="j_minValue"></span>
            ~
            <span class="j_maxValue"></span>
        </div>
    </div>

    .brushText{
        width: 100px;
        height: 80px;
        border-radius: 5px;
        background-color: #dddddd;
        position: absolute;
        top: 20px;
        left: 600px;
    }

## 给Brush增加事件

    .on("brushstart", brushstarted)
    .on("brush", brushed)
    .on("brushend", brushended);

    function brushed(){
        var extent = brush.extent();
        if(extent[0][0] == extent[1][0] && extent[0][1] == extent[1][1]){
            return;
        }
        $(".j_brushText")
                .show();
        $(".j_brushText .j_xValue .j_minValue").text(Math.floor(extent[0][0]));
        $(".j_brushText .j_yValue .j_minValue").text(Math.floor(extent[0][1]));
        $(".j_brushText .j_xValue .j_maxValue").text(Math.floor(extent[1][0]));
        $(".j_brushText .j_yValue .j_maxValue").text(Math.floor(extent[1][1]));


    }

    function brushended(){
        var extent = brush.extent();
        if(extent[0][0] == extent[1][0] && extent[0][1] == extent[1][1]){
            $(".j_brushText").hide();
        }
    }