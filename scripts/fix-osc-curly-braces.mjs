#!/usr/bin/env node
import fs from 'fs';

const files = [
  '/app/docs/manual/02-using-hydrogen/14-osc-api-commands.md',
  '/app/docs/manual/02-using-hydrogen/14-osc-api.md',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');

  // Replace specific curly brace patterns not already in backticks
  content = content.replace(/\| \{-1;0;1\} \|/g, '| `{-1;0;1}` |');
  content = content.replace(/\| \{-1;1\} \|/g, '| `{-1;1}` |');
  content = content.replace(/\| \{0,1\} \|/g, '| `{0,1}` |');
  content = content.replace(/\| \{0;1\} \|/g, '| `{0;1}` |');
  content = content.replace(/\{VALUE;\.\.\.\}/g, '`{VALUE;...}`');

  fs.writeFileSync(file, content);
  console.log('Fixed:', file);
}
