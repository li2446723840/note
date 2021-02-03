| 字上查看效果                                                 |                                                              |                            | 要注意光标的实际效果依赖于用户的系统设置，与你在这里看到的效果并不一定一致。 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------ |
| cursor: crosshair;                                           | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/148aa2d3782b2dd8a9ec9a06.jpg) | 十字准心                   | The cursor render as a crosshair 游标表现为十字准线          |
| cursor: pointer; cursor: hand; 写两个是为了照顾IE5，它只认hand。 | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/217f41df98ebb61463279806.jpg) | 手                         | The cursor render as a pointer (a hand) that indicates a link 游标以暗示(手指)的形式来表明有一个连接 |
| cursor: wait;                                                | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/dfbfda1350205ed7f7039e06.jpg) | 等待/沙漏                  | The cursor indicates that the program is busy (often a watch or an hourglass) 游标暗示当前程序正忙(一般为一块表或是一个沙漏) |
| cursor: help;                                                | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/c548e051eb10ba1f367abe00.jpg) | 帮助                       | The cursor indicates that help is available (often a question mark or a balloon) 游标暗示当前位置可得到帮助(一般为问号或是气球) |
| cursor: no-drop;                                             | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/276e769762e7016a55fb9600.jpg) | 无法释放                   | cursor: no-drop;                                             |
| cursor: text;                                                | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/2fbd6d6d68f28efc43169400.jpg) | 文字/编辑                  | The cursor indicates text 游标暗示当前所处位置为文字内容     |
| cursor: move;                                                | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/a75ae3de3388ed5fccbf1a01.jpg) | 可移动对象                 | The cursor indicates something that should be moved 游标暗示一些东西应该被移动 |
| cursor: n-resize;                                            |                                                              | 向上改变大小(North)        | The cursor indicates that an edge of a box is to be moved up (north) 边缘可向上移动(北) |
| cursor: s-resize;                                            | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/a710fd4b24184ff782025c02.jpg) | 向下改变大小(South)        | The cursor indicates that an edge of a box is to be moved down (south) 边缘可向下方移动(南) |
| cursor: e-resize;                                            | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/a74023f0750966a8a40f5202.jpg) | 向右改变大小(East)         | The cursor indicates that an edge of a box is to be moved right (east) box边缘可向右(东)边移动 |
| cursor: w-resize;                                            | [![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/a74023f0750966a8a40f5202.jpg)](http://hiphotos.baidu.com/wydmz/pic/item/a74023f0750966a8a40f5202.jpg) | 向左改变大小(West)         | The cursor indicates that an edge of a box is to be moved left (west) 边缘可向左移动(西) |
| cursor: ne-resize;                                           | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/307059f7d55fa425720eec0c.jpg) | 向上右改变大小(North East) | The cursor indicates that an edge of a box is to be moved up and right (north/east) 游标暗示box的边缘可向右上方移动(东北方向) |
| cursor: nw-resize;                                           | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/045d5cf39ec747cc0a46e00c.jpg) | 向上左改变大小(North West) | The cursor indicates that an edge of a box is to be moved up and left (north/west) 边缘可向左上方移动(西北) |
| cursor: se-resize;                                           | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/045d5cf39ec747cc0a46e00c.jpg) | 向下右改变大小(South East) | The cursor indicates that an edge of a box is to be moved down and right (south/east) 边缘可向右下方移动(东南) |
| cursor: sw-resize;                                           | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/b848cd166aee9356f3de320b.jpg) | 向下左改变大小(South West) | The cursor indicates that an edge of a box is to be moved down and left (south/west) 边缘可向左下方移动(西南) |
| cursor: auto;                                                |                                                              | 自动                       | The browser sets a cursor 浏览器设置一个游标                 |
| cursor:not-allowed;                                          | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/858de48f1740a8e9f01f360b.jpg) | 禁止                       | cursor:not-allowed;                                          |
| cursor: progress;                                            | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/fa07c4ee6d0b062e2df5340b.jpg) | 处理中                     | cursor: progress;                                            |
| cursor: default;                                             | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/bcd335387dc2ad2497ddd814.jpg) | 系统默认                   | The default cursor (often an arrow) 默认的游标状态（通常为一个箭头） |
| cursor: url(' # '); # = 光标文件地址   (注意文件格式必须为：.cur 或 .ani)。 | ![点击查看图片](http://hiphotos.baidu.com/wydmz/pic/item/7a84c123e4c89d43ad34de14.jpg) | 用户自定义（可用动画）     | The url of a custom cursor to be used. 自定义游标的url位置**Note:** Always define a generic cursor at the end of the list in case none of the url-defined cursors can be used 注意：在定义完自定义的游标之后在末尾加上一般性的游标，以防那些url所定义的游标不能使用 |

 十字准心 cursor:crosshair;
手  cursor:pointer;
  cursor:hand;
  写两个是为了照顾IE5，它只认hand。
等待/沙漏 cursor:wait;
帮助  cursor:help;
无法释放 cursor:no-drop;
文字/编辑 cursor:text;
可移动对象 cursor:move;
向上改变大小 cursor:n-resize;
向下改变大小 cursor:s-resize;
向右改变大小 cursor:e-resize;
向左改变大小 cursor:w-resize;
向上右改变大小 cursor:ne-resize;
向上左改变大小 cursor:nw-resize;
向下右改变大小 cursor:se-resize;
向下左改变大小 cursor:sw-resize;
自动  cursor:auto;
禁止  cursor:not-allowed;
处理中  cursor:progress;
系统默认 cursor:default;
用户自定义 cursor:url('#');#=光标文件地址(注意文件格式必须为.cur或.ani)。