"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("clear"),t=require("inquirer"),r=require("node:path"),a=require("node:fs"),n=require("node:process"),o=require("chalk");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function s(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const r in e)if("default"!==r){const a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}return t.default=e,Object.freeze(t)}const u=i(e),l=i(t),c=i(r),f=i(o),d=e=>"win32"===n.platform?"file:\\\\\\"+c.default.resolve(c.default.join("pages",e+".js")):c.default.resolve(c.default.join("pages",e+".js")),w=async e=>{try{a.accessSync(d(e),a.constants.F_OK);const r=await(t=d(e),Promise.resolve().then((function(){return s(require(t))})));if(!r.default)throw new Error(`Could not load ${e}, missing default export.`);if(!e.startsWith("_")&&!r.menu)throw new Error(`Could not load ${e}, missing named export menu.`);if(!r.getProps)throw new Error(`Could not load ${e}, missing named export getProps.`);return r}catch(e){if(e.message.includes("ENOENT"))throw new Error("Could not find that file in the pages/ directory.");throw new Error(e.message)}var t},p=async(e,t={})=>{const{default:r,getProps:a}=await w("_app"),{default:n,getProps:o}=await w("_exit");if(e.startsWith("_"))throw new Error(`Could not load ${e}, termpura special file.`);const{default:i,menu:s,getProps:c}=await w(e);u.default();const d=await a(t);await r(e,{...d});const m=await c(t),g=s instanceof Function?s():s,{a:h}=await l.default.prompt(((e,t="")=>[{type:"list",name:"a",message:"\b\b"+f.default.white(t),choices:[new l.default.Separator,...e,{name:f.default.white("Return"),value:"return"}],default:"",prefix:""}])(await(async e=>new Promise((t=>{const r=Object.keys(e),a=Object.values(e),n=[];for(const e in r)n[e]={name:f.default.white(r[e]),value:a[e]};t(n)})))(g),m.menuMessage));if("return"===h&&"index"===e){const e=await o(t);u.default(),await n(e),process.exit(0)}"return"===h&&await p("index");const j=await i(h,{...m});j.to?await p(j.to,j.pass):await p(e,j.pass)};exports.loadPage=p;
