#!/usr/bin/env node
import fs from 'fs';

const html = fs.readFileSync('/app/build/docs/manual/using-hydrogen/overview/overview/index.html', 'utf-8');

// Check what the raw href patterns look like
const hrefMatches = html.match(/href=\/docs[^ >"]*/g);
console.log("href=/docs patterns:", hrefMatches ? hrefMatches.slice(0, 5) : "none");

const imgMatches = html.match(/(href|src)=\/img[^ >"]*/g);
console.log("/img patterns:", imgMatches ? imgMatches.slice(0, 5) : "none");

const blogMatches = html.match(/href=\/blog[^ >"]*/g);
console.log("/blog patterns:", blogMatches ? blogMatches.slice(0, 5) : "none");

// Test regex
const test = html.replace(/(href=)\/docs\//g, "$1RELATIVE/docs/");
console.log("Regex matches /docs/:", test.includes("RELATIVE"));

// Check the actual content around /docs
const docsContext = html.match(/.{0,20}\/docs\/.{0,20}/g);
console.log("Context around /docs:", docsContext ? docsContext.slice(0, 3) : "none");
