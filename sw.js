if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>i(s,l),t={module:{uri:l},exports:u,require:o};e[l]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-ZlAKIhdu.js",revision:null},{url:"assets/ConfigTitle-Fd4OdpHw.js",revision:null},{url:"assets/Connections-bj5dKAUq.js",revision:null},{url:"assets/index-LOTH-7ft.js",revision:null},{url:"assets/index-T_58zMZE.css",revision:null},{url:"assets/index-yYmmC4vu.js",revision:null},{url:"assets/Logs-bL9RBqsy.js",revision:null},{url:"assets/Overview-I3fkFZju.js",revision:null},{url:"assets/Proxies-0uHMwNFc.js",revision:null},{url:"assets/Rules-rds59d_p.js",revision:null},{url:"assets/Setup-ADVlxEch.js",revision:null},{url:"assets/vendor-zz06Ag2Q.js",revision:null},{url:"index.html",revision:"b7c94a6687fd9b38d1d6910d0c84f069"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"f5b3372f312fbbe60a6ed8c03741ff80"},{url:"pwa-192x192.png",revision:"c45f48fc59b5bf47e6cbf1626aff51fc"},{url:"pwa-512x512.png",revision:"a311504ae6a46bd29b5678a410aaafc6"},{url:"manifest.webmanifest",revision:"4d78c8bc6207146065400ff644fe5a13"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
