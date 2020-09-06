#### 以下代码css样式

```css
<style>
    div {
        position: relative;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
    }

    div p {
        position: absolute;
    }
</style>
```



### 在html中使用svg的四种方式：

1、使用img标签引入

```html
<body>
    <img src="./svg.svg"/>
</body>
```

2、设置为背景图片

```html
<body>
    <div style="height: 200px;width: 200px;background: url(./svg.svg) no-repeat;"></div> 
</body>
```

3、使用iframe框架引入

```html
<body>
    <iframe src="./svg.svg" frameborder="0"></iframe>
</body>
```

4、在html中直接使用svg标签

```html
<body>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%"></svg>
    </div>
</body>
```

#### 标签

1、<font color="red">svg</font>标签，version="1.1"为版本号，xmlns="http://www.w3.org/2000/svg"为命名空间

```html
<div>
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%"></svg>
</div>
```

2、<font color="red">g</font>标签，是一个容器(分组)标签，用来组合元素，例：

```html
<div>
	<p>g标签实现靶心</p>
	<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
		<g stroke="yellow" stroke-width="3">
			<circle cx="100" cy="100" r="20" fill="transparent"></circle>
			<circle cx="100" cy="100" r="30" fill="transparent"></circle>
			<circle cx="100" cy="100" r="40" fill="transparent"></circle>
		</g>
	</svg>
</div>
```

g标签下面的元素可以继承g标签的属性，故g标签里面写一些公共属性。

g标签属性：

1、transform：transform="translate(x, y)"，平移g标签，

```html
<div>
    <p>g标签实现靶心</p>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)" stroke="yellow" stroke-width="3">
            <circle r="20" fill="transparent"></circle>
            <circle r="30" fill="transparent"></circle>
            <circle r="40" fill="transparent"></circle>
        </g>
    </svg>
</div>
```

3、<font color="red">text</font>标签，设置文字

text标签属性：

x：x轴坐标，基于左下角

y：y轴坐标，基于左下角

font-size：文字大小

text-anchor：文字x轴位置，middle(居中)，start(原点右侧)，end(原点左侧)，文字y轴居中需要计算(文字大小的一半减去2再加上y轴坐标)设置y轴坐标

```html
<div>
    <p>text标签</p>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g style="cursor:pointer">
            <circle cx="100" cy="100" r="50" fill="transparent" stroke="yellow" stroke-width="3"></circle>
            <text x="100" y="108" font-size="20" text-anchor="middle">居中</text>
        </g>
    </svg>
</div>
```

4、<font color="red">image</font>标签，设置图片

image标签属性：

x：x轴坐标，基于左上角

y：y轴坐标，基于左上角

width：标签宽度

height：标签高度

xlink:href：图片路径

```html
<div>
    <p>text标签</p>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g style="cursor:pointer">
            <image x="60" y="60" width="80" height="80" xlink:href="../../../image/image/whale.jpg"></image>
            <text x="100" y="108" font-size="20" text-anchor="middle">居中</text>
        </g>
    </svg>
</div>
```

{cursor:pointer}，鼠标悬停显示手形

5、<font color="red">animate</font>标签，运动

| 参数          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| attributeName | 要变化属性名称 1.可以是元素直接暴露的属性 2.可以是CSS属性    |
| attributeType | 用来表明attributeName属性值的类型 支持三个固定参数，CSS/XML/auto，默认值auto。 例如：x、 y以及transform就属于XML, opacity就属于CSS。 |
| from          | 起始值 起始值与元素的默认值是一样的，该参数可省略。          |
| to            | 结束值                                                       |
| by            | 相对from的变化值 PS：当有to值时，该值无效。                  |
| values        | 动画的多个关键值，用分号分隔。                               |
| dur           | 持续时间 取值：常规时间值 \| "indefinite"                    |
| repeatCount   | 动画执行次数 取值：合法数值或者“indefinite”                  |
| fill          | 动画间隙的填充方式 取值：freeze \| remove（默认值）。 remove：表示动画结束直接回到开始的地方。 freeze：表示动画结束后保持了动画结束之后的状态。 |
| calcMode      | 控制动画的快慢 取值：discrete \| linear（默认值） \| paced \| spline. 中文意思分别是：“离散”\|“线性”\|“踏步”\|“样条”。 另外，该参数要结合keyTimes、keySplines使用，数值的是对应values的， 所以如果没有设置values和keyTime或keySplines，是没有效果的。 |
| begin         | 动画开始的时机，取值： time-value \| offset-value \| syncbase-value \| event-value \| repeat-value \| accessKey-value \| media-marker-value \| wallclock-sync-value \| "indefinite" 1. time-value：动画开始时间，可传多个值，分号分隔。 2. syncbase-value：[元素的id].begin/end +/- 时间值（offset-value）   某个动画效果开始或结束触发此动画的，可加上偏移量。 3. event-value：事件触发 4. repeat-value：指某animation重复多少次开始。   语法为：[元素的id].repeat(整数) +/- 时间值 |
| end           | end与begin除了名字和字面含义不一样，其值的种类与表意都是一模一样的。 |

```html
<div>
    <p>animate标签</p>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g style="cursor:pointer">
            <rect width="20" height="150" x="150" y="20" fill="yellow">
                <animate attributeName="height" dur="1" from="50" to="150"></animate>
            </rect>
        </g>
    </svg>
</div>
```



#### 基本图形

##### 公共属性

fill：填充颜色，默认填充黑色，fill="none"不填充，效果与transparent类似，fill="transparent"为透明颜色，		(<font color="red">line没有fill属性</font>)。

stroke：边框颜色，stroke="transparent"边框透明

stroke-width：边框宽度

stroke-opacity：边框透明的，取值范围[0,1]。等于0的时候等价于stroke="transparent"

##### 圆形(circle)：基于圆心

cx：圆心的x坐标

cy：圆心的y坐标

r：半径

```html
<div>
        <p>圆形</p>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <circle cx="100" cy="100" r="40" fill="transparent" stroke="yellow" stroke-width="3">
            </circle>  
        </svg>
</div>
```

<font color="red">fill</font>、<font color="red">stroke</font>、<font color="red">stroke-width</font>属性可以通过style属性来设置，例：

```html
<div>
        <p>圆形</p>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <circle cx="100" cy="100" r="40" style="fill:transparent;stroke:yellow;stroke-width:3;">
            </circle>  
        </svg>
</div>
```

##### 矩形(rect)：基于左上角

width：矩形的宽度

height：矩形的高度

x：矩形左上角的x坐标

y：矩形左上角的的y坐标

rx：矩形圆角的x轴半径

ry：矩形圆角的y轴半径

当rx或ry只设置了一个的时候，另一个值默认相等

```html
<div>
	<p>矩形</p>
	<svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" >
		<rect width="100" height="100" x="100" y="100" rx="10" ry="20" fill="transparent" stroke="yellow" stroke-width="3" ></rect>  
	</svg>
</div>
```

##### 线(line)

x1：起点的x坐标

y1：起点的y坐标

x2：终点的x坐标

y2：终点的y坐标

线的fill属性不起作用

```html
<div>
	<p>线</p>
	<svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" >
		<line x1="50" y1="50" x2="100" y2="100"  stroke="yellow" stroke-width="3" stroke-opacity="0.5"></line>  
	</svg>
</div>
```

##### 椭圆(ellipse)

##### 折线(polyine)

points："x1 y1 x2 y2 x3 y3 ..."，坐标值。通过空格或者逗号隔开。

```html
<div>
    <p>折线</p>
    <svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" >
        <polyline points="10 100 30 140 80 130" fill="none" stroke="yellow" stroke-width="3" stroke-opacity="0.5"></polyline>  
        <polyline points="100,120,160,150,140,40" fill="none" stroke="red" stroke-width="3" stroke-opacity="0.5"></polyline>  
    </svg>
</div>
```



##### 多边形(ploygon)

points："x1 y1 x2 y2 x3 y3 ..."，坐标值。通过空格或者逗号隔开。

```html
<div>
    <p>多边形</p>
    <svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" >
        <polygon points="10 100 130 40 80 20" fill="none" stroke="yellow" stroke-width="3" stroke-opacity="0.5"></polygon>  
        <polygon points="130,100,170,140,190,40" fill="none" stroke="red" stroke-width="3" stroke-opacity="0.5"></polygon>  
    </svg>
</div>
```



##### 路径(path)

| 简写 | 全拼                             |            |
| ---- | -------------------------------- | ---------- |
| M    | moveto                           | 起点       |
| L    | lineto                           | 终点       |
| H    | horizontal lineto                | 水平线     |
| V    | vertical lineto                  | 垂直线     |
| C    | curveto                          | 曲线       |
| S    | smooth curveto                   | 平滑曲线   |
| Q    | quadratic Belzier curve          | 贝塞尔曲线 |
| T    | smooth quadratic Belzier curveto | 二次曲线   |
| A    | elliptical Arc                   | 椭圆弧     |
| Z    | closepath                        | 闭合路径   |



1. M = moveto     ——  M x y
   移动到的点的x轴和y轴的坐标
2. L = lineto         ——   L x y
   需要两个参数，分别是一个点的x轴和y轴坐标，L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段。
3. H = horizontal lineto    ——   H x
   绘制平行线
4. V = vertical lineto     ——   V y
   绘制垂直线
5. C = curveto         ——   C x1 y1 x2 y2 x y
   三次贝塞尔曲线
   当前点为起点，xy为终点，起点和x1y1控制曲线起始的斜率，终点和x2y2控制结束的斜率。
6. S = smooth curveto     ——   S x2 y2 x y
   简化的贝塞尔曲线
   （1）如果S命令跟在一个C命令或者另一个S命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。

（2）如果S命令单独使用，前面没有C命令或者另一个S命令，那么它的两个控制点就会被假设为同一个点。

1. Q = quadratic Bézier curve    ——   Q x1 y1 x y
   二次贝塞尔曲线Q
   只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。
   
2. T = smooth quadratic Bézier curveto
   Q命令的简写命令。</br>
   与S命令相似，T也会通过前一个控制点，推断出一个新的控制点。
   （1）T命令前面必须是一个Q命令，或者是另一个T命令
   （2）如果T单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线
   
3. A = elliptical Arc    ——   A rx,ry x-axis-rotation large-arc-flag sweep-flag x,y
   弧线
   rx 弧的半长轴长度
   ry 弧的半短轴长度
   x-axis-rotation 是此段弧所在的x轴与水平方向的夹角，即x轴的逆时针旋转角度，负数代表顺时针旋转角度。
   large-arc-flag 为1表示大角度弧线，0表示小角度弧线
   sweep-flag 为1表示从起点到终点弧线绕中心顺时针方向（弧线外凸），0表示逆时针方向（弧线内凹）。
   xy 是终点坐标。
   
4. Z = closepath
   从当前点画一条直线到路径的起点，一般放在语句的最后面，例：
   
   ```html
   <div>
       <svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" >
           <path d="M 50 70 L 170 120 L 150 50 200 70Z M100 100 L120 170 L80 180Z " stroke="green" stroke-width="3" fill="none"></path>
       </svg>
   </div>
   ```
   
   

注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

