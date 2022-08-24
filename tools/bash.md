#### bash命令使用vs code打开文件夹
将vsCode文件目录添加到bash环境变量(.bash_profile文件)中
直接打开~/bash_profile文件添加以下代码。或者使用vim ~/.bash_profile命令在bash中编辑，添加以下代码，然后执行source ~/bash_profile命令
```sh
	export PATH=$PATH:C:/Users/huixiaoer/AppData/Local/Programs/Microsoft\ VS\ Code/bin
```