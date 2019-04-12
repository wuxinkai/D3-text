
//读取svg文件 用服务启动  
d3.csv("data.csv",type,function(data){
	console.log(data);  

	// var data=[1,4,7,2,9,13,5,8,2,9],
	bar_width=50,
	bar_padding=10,
	svg_width=(bar_width+bar_padding)*data.length,
	svg_height=500;

	//div--svg--bar--rect--text

	var scale=d3.scale.linear()
	.domain([0,d3.max(data,function(d){return d.population;})])
	.range([svg_height,0])

	//SVG
	var svg=d3.select("#container")
	.append("svg")
	.attr("width",svg_width) 
	.attr("height",svg_height)

// select 符合第一个匹配的元素 
//  selectAll 所有满足的都匹配 

	//给svg添加 元素
	var bar=svg.selectAll("g")
	.data(data)
	.enter()
	.append("g")
	.attr("transform",function(d,i){return "translate("+i*(bar_width+bar_padding)+",0)";})

	//rect
	bar.append("rect") //
	.attr({
		"y":function(d){return scale(d.population);},
		"width":bar_width,
		"height":function(d){return svg_height-scale(d.population);}
	})
	.style("fill","steelblue")

	//text
	bar.append("text")
	.text(function(d){return d.year;})
	.attr({
		"y":function(d){return scale(d.population);},
		"x":bar_width/2,
		"dy":15,
		"text-anchor":"middle" //文字居中对齐
	})

});

//�ַ���ת��ֵ
function type(d){
	d.population=+d.population;
	return d;
}

