#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n🌿 Branch Manager v1.0.0\n'));
  console.log(chalk.yellow('Use: gh repo view owner/repo --json defaultBranchRef'));
}
if (require.main === module) main();
module.exports = { main };
