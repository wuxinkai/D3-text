# 比例尺-线性比例尺
  我们今天只讨论线性比例尺,其他的以后再说

## D3比例尺的类型

  * sqrt 平方根比例尺
  * pow 幂比例尺, 适合值以指数级变化的数据集
  * pow 对数比例尺
  * quantize 输出范围独立的值的线性比例尺,适合想把数据分类的情形
  * quantile 与quantize类似,但输入值域是独立的值,适合已经对数据分类的情形
  * ordinal 使用非定量值(如类名)作为输出的序数比例尺,比较适合柱状图的对比
  * d3.scale.category10(), d3.scale.category20(), d3.scale.category20b(), d3.scale.category20c() 输出10到20种颜色
  * d3.time.scale() 日期比例尺

  呃~~,sqrt、pow、pow、quantize、quantile 这几个比例尺有些不明觉厉,以后再研究吧

## 创建比例尺

    var scale = d3.scale.linear()
            .range([10, 350])
            .domain([100, 500]);

    scale(100);		// 10
    scale(500);		// 350
    scale(200);		// 95
  我们可以看到,一旦关系对应上了,我们就可以按照比例计算出相应的值了
  [例子](example1.html)

## 其他常用方法

* nice() 告诉比例尺取得为range()设置的任何值域,把两端的值扩展到最接近的整数.
* rangeRound() 用rangeRound()代替range()后,则比例尺输出的所有值都会舍入到最接近的整数值
* clamp() 线性比例尺可以返回指定范围的值,true-强制所有输出值都位于指定的范围内

## 更灵活的散点图
  [part5](part5/part5.md)中我们绘制了散点图,但是,有个问题,如果数据比较大,超出了svg的尺寸,这些点就会不见掉,如果数据都偏小呢,又会浪费了svg的大部分空间,下面我们就用比例尺来改善这个散点图,让散点图平均的分布在svg中

### 创建SVG
  我们定义两个变量w、h来保存svg的宽和高,这样,创建SVG就变成了

    var w = 500;
    var h = 400;

    var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
### 创建X轴方向的比例尺

    var scaleX = d3.scale.linear()
            .range([0, w])
            .domain([
                d3.min(dataset,function(d){
                    return d.x;
                }),
                d3.max(dataset,function(d){
                    return d.x;
                })
            ]);
  这里用了d3.max,d3.min这两个函数求数组的最大值,因为我们的数组不是简单数组,所以需要在函数体内,指定按哪个属性来取

### 创建Y轴方向的比例尺

    var scaleY = d3.scale.linear()
            .range([0, h])
            .domain([
                d3.min(dataset, function(d){
                    return d.y;
                }),
                d3.max(dataset, function(d){
                    return d.y;
                })
            ]);

### 修改坐标
  用scaleX()和scaleY()两个函数重新计算坐标

    .attr("cx", function (d, i) {
        return scaleX(d.x);
    })
    .attr("cy", function(d, i){
        return scaleY(d.y)
    })

  好了,我们可以看到,整个散点图已经平均分布了,当然,因为用的是整个SVG的w和h来做范围,会出现有些点只有一半,这个问题以后在说了

[例子](example2.html)

