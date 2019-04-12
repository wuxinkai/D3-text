# SVG基础
  下面呢,我们来看看SVG的基本形状及属性

## 矩形 (rect)

    <rect x="10" y="10" width="30" height="30"/>
    <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
  x,y-矩形左上角的坐标; rx,ry-圆角的半径

## 圆形 (circle)

    <circle cx="25" cy="75" r="20"/>
  cx,cy-圆心的坐标; r-半径

## 椭圆 (ellipse)

    <ellipse cx="75" cy="75" rx="20" ry="5"/>
  cx,cy-圆心的坐标; rx-x轴的半径; ry-y轴的半径

## 线 (line)

    <line x1="0" y1="0" x2="150" y2="150" stroke="red" />
  两点决定一条线,所以呢,线段就是给定两个点的坐标, x1,y1-第一个点的坐标; x2,y2-第二个点的坐标

## 折线 (polyline)

    <polyline points="0 0, 40 50, 200 115" stroke="black" fill="none"/>
  points属性用","分割每个点的x,y坐标,然后把这些点连接起来

## 多边形 (polygon)

    <polygon points="60 60, 40 50, 200 115 20, 20"/>
  和折线相似,唯一不同的是,他会吧最后一个点和第一个点连起来,形成封闭的多边形

## 路径 (path)

    <path d="M 20 230 Q 40 205, 50 230 T 90230"/>
  最NB的形状,几乎可以画出任何东西,当然了,靠手工去拼d属性么,嘿嘿,死去吧

## 文本 (text)

    <text x="0" y="15" fill="red">I love SVG</text>

[例子](example1.html)