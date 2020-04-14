| [$.extend()](https://www.runoob.com/jquery/misc-extend.html) | 将一个或多个对象的内容合并到目标对象 |
| ------------------------------------------------------------ | ------------------------------------ |
| [$.fn.extend()](https://www.runoob.com/jquery/misc-fn-extend.html) | 为jQuery扩展一个或多个实例属性和方法 |

两种方法可以达到相同的效果，但是调用方法不一样，例：

```html
<body>
    <ul>
        <li>兄弟多个1</li>
        <li>兄弟多个2</li>
        <li>兄弟多个3</li>
        <li>兄弟多个4</li>
        <li>兄弟多个5</li>
        <li>兄弟多个6</li>
        <li>兄弟多个7</li>
    </ul>
</body>
```

```js
<script src="jquery-3.4.1.min.js"></script>
<script type="text/javascript">
// $.fn.extend()	为jQuery扩展一个或多个实例属性和方法
    $.fn.extend({
        fnOver: function () {
            this.mouseenter(function () {
                $(this).css("background-color", "pink");
            })
            return this;  //不返回的话链式调用fnOut()的时候报错；
        },
        fnOut: function () {
            //this指向方法的调用者  
            this.mouseleave(function () {
                //指向dom元素  当前操作的dom元素
                $(this).css("background-color", "");
            })
        }
    })
    $("li").fnOver().fnOut();//调用方法

// $.extend()	将一个或多个对象的内容合并到目标对象
    $.extend( {
        fnOver : function($list){
            $list.mouseover(function(){
                $(this).css( "background-color","pink" );
            })
            return this;
        },
        fnOut : function($list){
            $list.mouseout(function(){
                $(this).css( "background-color","" );
            })
        }
    } )
    $.fnOver( $("li") ).fnOut( $("li") );//调用方法
</script>
```

