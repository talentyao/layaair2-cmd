#!/usr/bin/env node
const program = require('commander');
const data = require('./package.json'); 
program
    .version(data.version, '-v, --version')
    .usage("[command] [args]")
    .command('compile', 'compile project.')
    .command('publish', 'publish project.')
    .command('ui', 'export ui code, atlas')
    .parse(process.argv);