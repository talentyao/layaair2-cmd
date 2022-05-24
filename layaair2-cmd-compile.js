#!/usr/bin/env node
const program = require('commander');
const { spawn, fork } = require("child_process");
const path = require("path");
const { exit } = require('process');

program
    .option("-w, --workspace <workspacePath>", "Incoming workspace path")
    .parse(process.argv);

let projPath = program.workspace ? program.workspace : process.cwd();
let gulpFilePath = path.join(projPath, ".laya", "compile.js");

let gulpDir = path.join(process.argv[1], "../node_modules", "gulp/bin/gulp.js");

let cmd = [`--gulpfile=${gulpFilePath}`, "compile"];

let _gulp = fork(gulpDir, cmd, {
    silent: true,
    shell: true
});

_gulp.stdout.on('data', (data) => {
    console.log(`${data}`);
});

_gulp.stderr.on('data', (data) => {
    console.log(`${data}`);
});

_gulp.on('close', (code) => {
    console.log(`exit：${code}`);
    exit(code);
});