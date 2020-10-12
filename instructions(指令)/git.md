git 是一个版本管理工具。
    是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。

*****************************************************
git三大件：
    1、仓库： git 隐藏文件
    2、工作区：可见的文件（项目开发文件）
    3、缓冲区（暂存区）：文件不能直接提交到仓库，而是只能提交到暂存区，然后再从暂存区提交一仓库。
      git status:查看状态。‘
        红色字体说明未在暂存区
        绿色字体说明在暂存区
      可以通过git add 文件名 放置到暂存区

*****************************************************
设置：
git config --global user.name "li2446723840"
git config --global user.email "WSL19951995710jianli"
查看：
git config user.name
git config user.email
查看GIT版本：
git  --version

*****************************************************
1、git init   初始化本地仓库
2、git status 查看文件状态
3、git diff 文件名：查看当前文件与仓库中的文件的差异
      红色代表的是删除
      绿色代表的是添加
      白色代表的是未操作
4、git reset HEAD 文件名：将你添加或删除的文件从暂存区拉回到工作区
   git reset HEAD *：将所有的文件操作从暂存区拉回到工作区
5、git reflog:可以查看操作记录
6、git reset --hard 版本ID:进行切换
   git reset --hard HEAD^
******************************
添加：
    1、git add 添加指定文件到暂存区
        git add index.html:将index.html提交
        git add index.html index2.html:将index.html index2.html提交.提交多个文件用空格分隔
        git * :提交所有未提交过的文件。
    2、git commit -m "说明"
修改：
    1、git add * ：添加到暂存区
    2、git commit -m "说明"
删除：
    1、误删除
        1、物理性删除（右键删除）可以通过以下命令恢复
            git checkout -- 文件名
        2、git rm 文件名：将你要删除的文件操作，放置到暂存区
            git reset HEAD 文件名  ：将指定的文件从暂存区移除
            git checkout -- 文件名：恢复
    2、真的删除
        1、物理删除
            git rm
            git commit -m "说明"
        2、git rm
            git commit -m "说明"
*******************************************************************************
    分支：主分支master
    git branch                  :查看当前分支
    git branch --all           :查看所有的分支。
    git branch dev            :创建一个名字为dev的分支
    git checkout dev         :进入到dev分支
    git checkout -b haha   :创建并进入haha分支
    合并分支：
    将dev分支合并到master分支：
    1、进入master分支当中:git checkout master
    2、git merge dev
********************************************************************************
远程仓库：https://github.com/
本地生成key:
     ssh-keygen -t rsa -C "15083493779@163.com"
    1、将以上命令在cmd当中运行
    2、打开 C:\Users\86151/.ssh/id_rsa.pub.
    3、将文件的内容复制到github
设置key:
    https://github.com/settings/keys
ssh -T git@github.com  ：检查ssh key配置是否成功
********************************************************************************
1、创建一个远程仓库
2、
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/li2446723840/仓库名.git
git push -u origin master
****************************************************************************************
git流程：
    负责人：
     1、创建项目
     2、项目当中增加一些配置项，比如加上样式，写上views文件，components,router,setupProxy.js等
     3、进行该项目所在的文件夹,创建主分支。
        git init
        git add *
        git commit -m "first commit"
        git remote add origin https://github.com/li2446723840/仓库名.git
        git push -u origin master
        如果已经在本地创建了git，只需要执行后两行代码即可
     4、创建dev分支
        1、git checkout -b dev
        2、git push -u origin dev
     其它成员：
        1、克隆项目
        git clone -b dev git@github.com:li2446723840/仓库名.git
        2、进入到项目
            cd 仓库名
***************************************
上传遇到冲突：
    1、git pull
    2、手动合并
    3、git push

git 指令

```
touch .gitignore         //创建.gitignore文件
git push -f              //强制上传
git remote -v            //查看远程分支

```

从远程拉代码使用的命令（用于长期没有更新过代码的情况）

upstream可以是任意字符(习惯写法)

```
git remote -v
git remote add upstream path(路径) 
git remote -v
git fetch upstream//默认拉取master分支下的代码
git fetch upstream dev//拉取dev分支下的代码
```

pull = fetch + merge

git pull会自动合并冲突

git branch         //查看本地分支

git branch -r      //查看远程分支

如果对项目做了贡献就应该使用git merge

如果对项目没有贡献使用git rebase就可以了

