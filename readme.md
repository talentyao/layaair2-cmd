## layaair2-cmd
layaair2-cmd是layaair 2.0的命令行工具，可以使用layaair2-cmd不打开IDE的情况下对layaair 2.0项目进行编译发布等操作。它包含以下功能，这些功能都对应一个子命令。


|功能|子命令|
|-|-|
|编译|compile|
|发布|publish|
|导出资源或ui|ui|

注：
- 需要publish的IDE版本号为2.4.0+
- node版本推荐10.* ，目前已知12.*、14.*和gulp之间有兼容性问题


## 安装
```
$ npm install layaair2-cmd -g
```


## CLI
layaair2-cmd的命令类似git命令，它的形式是：
```
$ layaair2-cmd [command] [args]
```
比如编译项目：
```
$ layaair2-cmd compile
```
或者查看帮助信息：
```
$ layaair2-cmd --help
```
不仅layaair2-cmd本身，所有的子命令都有版本信息和帮助信息，查看子命令帮助信息：
```
$ layaair2-cmd command -h
```


## 编译
```
$ layaair2-cmd compile -h

    Usage: layaair2-cmd compile [options]

    Options:
        -w, --workspace <workspacePath>  Incoming workspace path
        -h, --help                       output usage information
```
如果当前目录是layaair项目，该命令会生成编译后的JavaScript文件。

如果使用-w指定了项目位置，则使用给定的位置；如果没有使用-w指定位置，则默认使用当前目录作为项目路径。

#### 使用
```
layaair2-cmd compile
```
```
layaair2-cmd compile -w E:/workspace/layademo
```


## 发布
```
$ layaair2-cmd publish -h

    Usage: layaair2-cmd publish [options]

    Options:
        -c, --config <configPlatform>    Set the publishing platform name[web|wxgame|bdgame|xmgame]
        -w, --workspace <workspacePath>  Incoming workspace path
        -h, --help                       output usage information
```
如果当前目录是layaair项目，该命令会将发布的文件夹在release下面。

如果使用-w指定了项目位置，则使用给定的位置；如果没有使用-w指定位置，则默认使用当前目录作为项目路径。

支持的发布平台保持与项目中的引擎版本支持的发布平台一致。且需要开发者已经使用IDE发布过一次（或者有对应平台的发布配置的json文件），开发者可以查看项目.laya下的publish相关js文件。例如：
- publish.js -- web

- publish_wxgame.js -- wxgame

- publish_bdgame.js -- bdgame

  ........

支持的发布平台有: taobaowidget|taobaominiapp|hwgame|bytedancegame|Alipaygame|biligame|vivogame|oppogame|xmgame|bdgame|qqgame|web|wxgame

#### 使用
```
layaair2-cmd publish -c wxgame
```
```
layaair2-cmd publish -c web -w E:/workspace/layademo
```


## 导出资源或ui
```
layaair2-cmd ui -h
    Usage: layaair2-cmd-ui [options]

    Options:
        -w, --workspace <workspacePath>  Incoming workspace path
        -c --clear                       clear will delete old ui code file.
        -a --atlas                       generate atlas
        -d --code                        generate ui code files
        -m --mode <mode>                 'normal' or 'release', specify 'release' will generate UI code files exclude unused resources.
        -h, --help                       output usage information
```
如果当前目录是layaair项目，该命令会生成资源或ui文件。

如果使用-w指定了项目位置，则使用给定的位置；如果没有使用-w指定位置，则默认使用当前目录作为项目路径。

#### 使用
```
layaair-cmd ui -c -m release    # 导出前清理，并且把mode设置为release
layaair-cmd ui -d               # 导出UI代码文件
layaair-cmd ui -a               # 导出图集文件
```
