global.sharedObject = {
  InnerVer: 'auto'
}

var BrowserWindow = require('electron').BrowserWindow;
var app = require('electron').app;
var path = require('path');
var fs = require("fs");
var childProcess = require("child_process");
var BrowserWindow = require('electron').BrowserWindow;
app.on('ready', function () {
    var win = new BrowserWindow({"title":"LayaAir Updating...",width: 710, height: 60, frame: false, resizable: false, closable: false});
    win.loadURL('file://' + path.join(__dirname, "index.html"));
    // win.openDevTools();
    if(process.argv.length>1)
    {
        if(process.argv[1].indexOf("$$")!=-1)
        {
            var unzipArg=process.argv[1].split("$$");
            unzipArg[0] = path.dirname(unzipArg[0]);
            unzipArg[1] = unzipArg[1];
            var unzipexepath = path.join(__dirname, "js", "unzip.exe");
            // var cmdstring = unzipexepath+" -o "+unzipArg[1]+" -d "+unzipArg[0];
            // fs.writeFileSync(path.join(__dirname,"layaupdate.bat"),cmdstring);
            setTimeout(start, 4000);
            function start()
            {
                var { spawn } = require('child_process');
                // var cmdPath = path.join(__dirname,"layaupdate.bat");
                var bat = spawn(unzipexepath, ['-o', unzipArg[1], '-d', unzipArg[0]]);

                bat.stdout.on('data', (data) => {
                  console.log(data.toString());
                });

                bat.stderr.on('data', (data) => {
                  console.log(data.toString());
                });

                bat.on('exit', (code) => {
                    console.log(`子进程退出码：${code}`);
                    childProcess.exec("\""+process.argv[1].split("$$")[0]+"\"");
                    win.hide();
                    setTimeout(function(){
                        app.exit(0);
                    },20000)
                });
            }

        }
    }
})
app.on('window-all-closed',function(){
    app.exit(0);
})
