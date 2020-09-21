#### 一、安装数据库

1、安装mongodb
2、在控制台输入mongo:
    只要不是提示“不是内部命令”，即成功。
    配置：
    windows10:
        环境变量:我的电脑-》右击属性-》高级系统设置--》点击高级选项-》环境变量
            -》系统变量：path->新建-》C:\Program Files\MongoDB\Server\3.4\bin
            -》保存
    windows7:
        环境变量:我的电脑-》右击属性-》高级系统设置--》点击高级选项-》环境变量
                -》系统变量：path->在弹出的容口内（有一行字符串），在字符串的尾部
                追加;C:\Program Files\MongoDB\Server\3.4\bin
                ->保存
3、重新打开控制台，输入mongo命令，只要不是提示“不是内部命令”，即安装成功。

#### 二、连接mongodb(挂载mongodb)

1、创建一个文件夹用于存放你的数据库文件:比如我在E盘新建一个mongo的文件夹。
2、mongod --dbpath E:\mongo         //<font color="red">mongod  没有b ！！！！</font>
    光标闪烁说明成功了。
3、将当前的控制台最小化。

#### 三、操作数据库

1、进入mongo环境，打开powershell窗口，输入mongo命令，即可在该环境下使用命令操作数据库

#### 四、使用cmd操作
##### 1、其它
```js
show dbs                 //显示当前所有数据库
use 库名                 //进入到数据库
db                       //查看当前所在的库
show collections         //查看当前库当中所有的集合
```

##### 2、增
```js
db.集合.insert({userName:"laowang"})   //在当前库的集合当中插入文档 {userName:"laowang"}
导入数据：不能够在mongo环境中。退出该环境
    1、mongoimport --db 库 --collection 集合 --file E:\1915\Lession04\data
    db                   //导入的库
    collection           //导入的集合
    file                 //指定文件
    向之前数据追加数据
    2、mongoimport --db 库 --collection 集合 --file E:\1915\Lession04\data --drop
    --drop               //先清除之前数据，然后再导入。可选项。
```


##### 3、删
```js
db.dropDatabase()                               //删除当前数据库
db.集合.remove({age:100})                       //将年龄为100的记录删除掉（可以删除多条）
db.集合.remove({sex:"男"},{justOne:true})       //删除性别为男的，只删除一条记录。
db.集合.remove({})                              //删除所有记录，
db.集合.drop()                                  //删除指定集合。
```


##### 4、改
```js
db.集合.update({userName:"王上一"},{$set:{sex:"未知"}})      //将姓名为王上一的性别修改为未知。update({查询条件},{修改内容})，当查询条件为一个空对象时，修改全部内容
db.集合.updateOne({条件},{修改内容},[callback])              //修改一条数据
db.集合.update({userName:"张三"},{age:100})                  //完整修改。
db.集合.update({userName:"王上一"},{$inc:{age:-1}})          //将年龄减1
db.集合.update({sex:"男"},{$set:{age:16}},{multi:true})      //修改多条，在后面添加{multi:true}。
```

###### $set修改器  
​    $set修改器用来指定一个键值对,如果存在键就进行修改不存在则进行添加
###### $inc修改器
​    $inc修改器inc修改器只是使用与数字类型,他可以为指定的键对应的数字类型的数值进行加减操作.
###### $unset修改器
​    $unset修改器unset修改器用法很简单,就是删除指定的键值对。
###### $push修改器
​    1.如果指定的键是数组增追加新的数值
​    2.如果指定的键不是数组则中断当前操作Cannot apply $push/$pushAll modifier to non-array
​    3.如果不存在指定的键则创建数组类型的键值对
​    4.此方法可添加重复数据
###### $pushAll修改器  
​    $pushAll修改器用法和$push相似他可以批量添加数组数据,  即可以添加整个数组
###### $addToSet修改器  
​    $addToSet修改器是如果目标数组存在此项则不操作,不存在此项则加进去，即不添加重复数据。
###### $pop修改器  
​    $pop修改器从指定数组删除一个值1删除最后一个数值,-1删除第一个数值。
###### $pull修改器  
​    $pull修改器是删除一个被指定的数值。
###### $pullAll修改器  
​    $pullAll修改器是一次性删除多个指定的数值。
###### $addToSet与$each结合完成批量数组更新
​    db.sample.update({name:"evers"},{$addToSet:{database:{$each:["JS","DB","DB" ]}}})
​    $each会循环后面的数组把每一个数值进行$addToSet操作  

##### 5、查
```js
db.集合.find()                          //显示当前集合的文档列表。
db.集合.find({age:21})                  //精确查找，查找指定集合当中age值为21的
db.集合.find({sex:"女",age:23})         //多条件查找：性别为女，年龄23
db.集合.find({age:{$lt:21}})            //小于
   $gt        //大于
   $lt        //小于
   $gte      //大于等于
   $lte      //小于等于
   $ne       //不等于
db.集合.find({age:{$ne:23},sex:"女"}))       //年龄不等于23，性别为女。
db.集合.find({userName:/王/})                //查找姓名当中包含王
db.集合.find({$or:[{age:23},{sex:"男"}]}     //年龄为23或性别为男
db.集合.find({"集合.yuwen":50})              //查找语文成绩为50。
db.集合.find({sex:"男"}).countDocuments()   //根据条件统计文档的数量。
db.集合.find().sort({age:1})                 //按照年龄的正序。  1正序，-1倒序
db.集合.find().sort({age:-1,sex:1})          //当你的年龄相同，则按性别的倒序。
db.集合.find().limit(1)                      //显示前n条数据
db.集合.find().skip(2)                       //跳过N条数据。
```

结合使用。先排序，跳过，取指定条数。
db.集合.find().sort({age:1}).skip(4).limit(4)
分页：
    总页数：pageSum
    当前页：pageIndex
    每页显示的条数：pageNum
    // 1
    pageIndex
    pageSum
    pageNum

总页数：  math.ceil(总条数/每页显示的数量)
          const pageSum = math.ceil(count/pageNum);
skip:     (pageIndex - 1 ) * pageNum;



#### 五、使用node操作
##### node 操作数据库，操作指令与cmd操作指令有区别

1、下载

```js
cnpm install mongodb -S
```

2、引入

```js
const mongodb = require("mongodb")
```

3、使用

```js
const mongoClient = mongodb.MongoClient;
mongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){  //数据存放在client中
    const db = client.db("zhang");   //client中的db方法用来连接数据库
})
```