#!/usr/bin/env node

import program from 'commander';
import gendiff from '../index.js';

program.version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig, option) => {
    console.log(gendiff(firstConfig, secondConfig, option.format));
  });

program.parse(process.argv);
