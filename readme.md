# 自用修改版本,支持Linux下的ui导出功能

## layaair2-cmd

layaair2-cmd 是 layaair 2.0 的命令行工具，可以使用 layaair2-cmd 不打开 IDE 的情况下对 layaair 2.0 项目进行编译发布等操作。它包含以下功能，这些功能都对应一个子命令。

| 功能          | 子命令  |
| ------------- | ------- |
| 编译          | compile |
| 发布          | publish |
| 导出资源或 ui | ui      |

注：

- 需要 publish 的 IDE 版本号为 2.4.0+
- node 版本推荐 10._ ，目前已知 12._、14.\*和 gulp 之间有兼容性问题

## 安装

```
$ npm install layaair2-cmd -g
```

## CLI

layaair2-cmd 的命令类似 git 命令，它的形式是：

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

不仅 layaair2-cmd 本身，所有的子命令都有版本信息和帮助信息，查看子命令帮助信息：

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

如果当前目录是 layaair 项目，该命令会生成编译后的 JavaScript 文件。

如果使用-w 指定了项目位置，则使用给定的位置；如果没有使用-w 指定位置，则默认使用当前目录作为项目路径。

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

如果当前目录是 layaair 项目，该命令会将发布的文件夹在 release 下面。

如果使用-w 指定了项目位置，则使用给定的位置；如果没有使用-w 指定位置，则默认使用当前目录作为项目路径。

支持的发布平台保持与项目中的引擎版本支持的发布平台一致。且需要开发者已经使用 IDE 发布过一次（或者有对应平台的发布配置的 json 文件），开发者可以查看项目.laya 下的 publish 相关 js 文件。例如：

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

## 导出资源或 ui

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

如果当前目录是 layaair 项目，该命令会生成资源或 ui 文件。

如果使用-w 指定了项目位置，则使用给定的位置；如果没有使用-w 指定位置，则默认使用当前目录作为项目路径。

#### 使用

```
layaair-cmd ui -c -m release    # 导出前清理，并且把mode设置为release
layaair-cmd ui -d               # 导出UI代码文件
layaair-cmd ui -a               # 导出图集文件
```
