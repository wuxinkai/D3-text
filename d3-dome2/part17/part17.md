# 时间格式化

## 定义一个时间格式化

    var format = d3.time.format("%Y-%m-%d");

## 将字符串转换成时间对象

    format.parse("2011-01-01")

## 将时间对象格式化成字符串

    format(new Date())

## 时间格式化类型

* %d - 日
* %H - 小时(24)
* %I - 小时(12)
* %m - 月
* %M - 分钟
* %S - 秒
* %y - 年(09)
* %Y - 年(2009)

[例子](example1.html)