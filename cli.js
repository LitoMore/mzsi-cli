#! /usr/bin/env node

'use strict';

const mzsi = require('mzsi');
const chalk = require('chalk');
const pkg = require('./package.json');
const updateNotifier = require('update-notifier');

updateNotifier({pkg}).notify();

process.argv.forEach(function(arg){
  if (arg === '--version') {
    console.log(pkg.version);
    process.exit(0);
  } else if (arg === '--help' || arg === 'help') {
    console.log(`
  ${chalk.cyan.bold('Usage:')}
    mzsi <month> <day>
      
  ${chalk.blue.bold('Example:')}
    mzsi 07 07
`);
    process.exit(0);
  }
});


const month = parseInt(process.argv[2]);

if (isNaN(month)) {
  console.log(chalk.red.bold('Please, the month must be a number.'));
  process.exit(1);
}

const day = parseInt(process.argv[3]);

if (isNaN(day)) {
  console.log(chalk.red.bold('Please, the day must be a number.'));
  process.exit(1);
}


const sign = mzsi(month, day);

if (sign.about.element == 'Water' || sign.about.element == 'Air') {
  console.log(chalk.cyan.bold(`${sign.symbol} ${sign.name}`));
} else if (sign.about.element == 'Fire') {
  console.log(chalk.red.bold(`${sign.symbol} ${sign.name}`));
} else if (sign.about.element == 'Earth') {
  console.log(chalk.green.bold(`${sign.symbol} ${sign.name}`));
}