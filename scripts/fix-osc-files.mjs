#!/usr/bin/env node
import fs from 'fs';

// Fix 14-osc-api-commands.md
let content = fs.readFileSync('/app/docs/manual/02-using-hydrogen/14-osc-api-commands.md', 'utf-8');
content = content.replace('```\n$ **oscsend', '```bash\n$ **oscsend');
content = content.replace('{VALUE;...}', '`{VALUE;...}`');
fs.writeFileSync('/app/docs/manual/02-using-hydrogen/14-osc-api-commands.md', content);
console.log('Fixed 14-osc-api-commands.md');

// Fix 14-osc-api.md
content = fs.readFileSync('/app/docs/manual/02-using-hydrogen/14-osc-api.md', 'utf-8');
content = content.replace('```\n$ **oscsend', '```bash\n$ **oscsend');
fs.writeFileSync('/app/docs/manual/02-using-hydrogen/14-osc-api.md', content);
console.log('Fixed 14-osc-api.md');
