M = moveto                 起点

L = lineto                      终点

H = horizontal lineto   水平线

V = vertical lineto       垂直线

C = curveto            曲线

S = smooth curveto     平滑曲线

Q = quadratic Belzier curve       贝塞尔曲线

T = smooth quadratic Belzier curveto    二次曲线

A = elliptical Arc   椭圆弧

Z = closepath    闭合路径







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
    从当前点画一条直线到路径的起点

注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。



作者：前端召唤师
链接：https://www.jianshu.com/p/2c9e96aa8802
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。