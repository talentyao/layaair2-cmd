console.__log = console.log;
console.log = function(s) {
    if (!s || ["string", "number"].indexOf(typeof s) !== -1) {
        console.__log(s);
    } else {
        console.__log("[Object object]");
    }
}

require("weapp-adapter.js");
require("libs/laya.bilimini.js");

window.loadLib = require;

require("index.js");

// 上报小游戏启动成功埋点。 需要在游戏首页成功渲染时调用。
bl.launchSuccess();