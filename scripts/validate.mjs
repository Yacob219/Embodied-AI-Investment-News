import {readFile,readdir} from 'node:fs/promises';
import {events} from '../dist/data.js';
import {validateDataset} from '../dist/model.js';
validateDataset(events);
const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');
for(const ref of [...html.matchAll(/(?:href|src)="\.\/([^"]+)"/g)].map(m=>m[1]))await readFile(new URL('../dist/'+ref,import.meta.url));
for(const name of await readdir(new URL('../dist/',import.meta.url))){const body=await readFile(new URL('../dist/'+name,import.meta.url),'utf8');if(/4galbot|READY_FROM_PROVIDED_SOURCE/.test(body))throw Error('Unexpected reference-project content in authored application');}
console.log(`Validated ${events.length} unique sourced records, local assets and application branding.`);
