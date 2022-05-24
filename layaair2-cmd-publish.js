#!/usr/bin/env node
const program = require('commander');
const { spawn ,fork ,exec } = require("child_process");
const path = require("path");

program
    .option("-c, --config <configPlatform>", "Set the publishing platform name[web|wxgame|bdgame|xmgame|qqgame|oppogame|vivogame|biligame|Alipaygame|bytedancegame|hwgame|taobaominiapp|taobaowidget]")
    .option("-w, --workspace <workspacePath>", "Incoming workspace path")
    .parse(process.argv);

let jsonName = program.config ? `${program.config}.json` : "web.json";
let projPath = program.workspace ? program.workspace : process.cwd();
let gulpFilePath = path.join(projPath , ".laya","publish.js");
let gulpDir = path.join(process.argv[1],"../node_modules","gulp/bin/gulp.js");
let cmd = [`--gulpfile=${gulpFilePath}`, `--config=${jsonName}`, "publish"];

let _gulp = fork(gulpDir, cmd, {
    silent: true
});

_gulp.stdout.on('data', (data) => {
    console.log(`${data}`);
});

_gulp.stderr.on('data', (data) => {
    console.log(`${data}`);
});

_gulp.on('close', (code) => {
    console.log(`exit：${code}`);
});