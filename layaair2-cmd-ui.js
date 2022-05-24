#!/usr/bin/env node
const program = require("commander");
const path = require("path");

program
	.option("-w, --workspace <workspacePath>", "Incoming workspace path")
	.option('-c --clear', 'clear will delete old ui code file.')
	.option('-a --atlas', 'generate atlas')
	.option('-d --code', 'generate ui code files')
	.option('-m --mode <mode>', "'normal' or 'release', specify 'release' will generate UI code files exclude unused resources.")
	.parse(process.argv);

let projPath = program.workspace ? program.workspace : process.cwd();

let clear = program.clear || false,
	mode  = program.mode || 'normal',
	code  = program.code || false,
	atlas = program.atlas || false;

/////////////////////////////////////////////////////////////
// Call external interface define in LayaAirCmdTool.max.js //
/////////////////////////////////////////////////////////////
var args = [];
let exe = path.join(__dirname, "ProjectExportTools", "LayaAirCmdTool.max.js");
args.push(path.join(projPath, "laya", ".laya"));
args.push(`clear=${clear}`);
args.push(`releasemode=${mode}`);
args.push(`exportUICode=${code}`);
args.push(`exportRes=${atlas}`);

var sp = require("child_process").fork(exe, args);

sp.on("close", (code) => {
	console.log(`exit：${code}`);
});