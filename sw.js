if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-e6njFIx6.js",revision:null},{url:"assets/ConfigTitle-mdfEp71g.js",revision:null},{url:"assets/Connections-ejGDZVTZ.js",revision:null},{url:"assets/index--1c1jgIB.js",revision:null},{url:"assets/index-0roT6USE.js",revision:null},{url:"assets/index-NfgHqgMZ.css",revision:null},{url:"assets/Logs-F2m2v5WM.js",revision:null},{url:"assets/Overview-8mOZTQCy.js",revision:null},{url:"assets/Proxies-Tk-M8Y6k.js",revision:null},{url:"assets/Rules-tDd7R9jU.js",revision:null},{url:"assets/Setup-a4otYl7p.js",revision:null},{url:"assets/vendor-XL6gZW1S.js",revision:null},{url:"index.html",revision:"6c08afbce833d5b129398873707f6735"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"f5b3372f312fbbe60a6ed8c03741ff80"},{url:"pwa-192x192.png",revision:"c45f48fc59b5bf47e6cbf1626aff51fc"},{url:"pwa-512x512.png",revision:"a311504ae6a46bd29b5678a410aaafc6"},{url:"manifest.webmanifest",revision:"4d78c8bc6207146065400ff644fe5a13"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
