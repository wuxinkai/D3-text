//设置图标大小
var width=500,height=250,
margin={left:50,top:30,right:20,bottom:20},
g_width=width-margin.left-margin.right,
g_height=height-margin.top-margin.bottom;



//SVG
var svg=d3.select("#container")
.append("svg")
//width,height
.attr("width",width) //attribute .����ÿ��Ԫ�� 
.attr("height",height)

//g
var g=svg
.append("g")
.attr("transform","translate("+margin.left+","+margin.top+")")

var data=[1,3,5,7,8,4,3,7]

//x轴   // domain输入范围    //range输出范围
var scale_x=d3.scale.linear().domain([0,data.length-1]) .range([0,g_width])
// y轴    //获取最大值
var scale_y=d3.scale.linear().domain([0,d3.max(data)]) .range([g_height,0]) //设置高度  g_height和0调换位置就是从下往上排列了


var line_generator=d3.svg.line()
.x(function(d,i){return scale_x(i);})//0,1,2,3...
.y(function(d){return scale_y(d);})//1,3,5...
.interpolate("cardinal")//圆润曲线

//设置坐标轴
g
.append("path")
.attr("d",line_generator(data))//d="M1,0L20,40L40,50L100,100L0,200",d -path data
.style("line","steelblue")


var x_axis=d3.svg.axis().scale(scale_x),
y_axis=d3.svg.axis().scale(scale_y).orient("left")  //orient x轴 左侧

//设置坐标轴的 位置在底部
g.append("g")
.call(x_axis)
.attr("transform","translate(0,"+g_height+")")


g.append("g")
.call(y_axis)
.append("text")
.text("添加文字")
.attr("transform","rotate(-90)") //设置位置
.attr("text-anchor","end") //文字末尾和上边对其
.attr("dy","1em") //y周偏移 1rem



