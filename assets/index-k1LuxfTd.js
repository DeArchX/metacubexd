import{s as Me,a as Ae,m as Ue,t as $,i as m,c,S as T,b as M,d as C,e as X,f as ge,g as k,h as qe,j as b,k as u,l as Fe,n as je,r as ze,o as Ne,p as V,u as pe,q as B,v as Re,w as H,x as me,y as Be,z as He,A as z,B as Oe,I as We,C as K,F as Z,D as J,E as Xe,G as Ve,H as Je,J as Ze,K as Ge,L as Qe,M as Ee,N as Ke,O as Ye,P as et,Q as tt,R as st,T as nt,U as S,V as at,W as ot,X as A,Y as rt,Z as lt,_ as it,$ as ct,a0 as dt}from"./vendor-K_-04A7A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const ut="modulepreload",gt=function(e,t){return new URL(e,t).href},ee={},U=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link");s=Promise.all(a.map(r=>{if(r=gt(r,n),r in ee)return;ee[r]=!0;const g=r.endsWith(".css"),i=g?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const f=o[p];if(f.href===r&&(!g||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const d=document.createElement("link");if(d.rel=g?"stylesheet":ut,g||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),g)return new Promise((p,f)=>{d.addEventListener("load",p),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},pt=C('<div class="loading loading-spinner">'),mt=C('<button><span class="truncate rounded-none">'),fe=e=>{const[t,a]=Me(e,["class","loading","icon"]);return(()=>{const n=mt(),s=n.firstChild;return Ae(n,Ue({get class(){return $("btn flex items-center",t.loading?"btn-disabled":t.class)}},a),!1,!0),m(n,c(T,{get when(){return t.loading},get children(){return pt()}}),s),m(s,()=>e.icon||e.children),M(()=>s.classList.toggle("flex-1",!t.icon)),n})()},ft=C('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),Bs=e=>{const{title:t,onCollapse:a}=e,n=()=>{const o="collapse-open",r="collapse-close";return e.isOpen?o:r},s=()=>{const o="opacity-100",r="opacity-0";return e.isOpen?o:r};return(()=>{const o=ft(),r=o.firstChild,g=r.nextSibling;return r.$$click=()=>a(!e.isOpen),m(r,t),m(g,c(T,{get when(){return e.isOpen},get children(){return ge(()=>e.children)()}})),M(i=>{const l=$(n(),"collapse collapse-arrow select-none border-secondary bg-base-200 shadow-md"),d=$(s(),"collapse-content grid grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5");return l!==i._v$&&k(o,i._v$=l),d!==i._v$2&&k(g,i._v$2=d),i},{_v$:void 0,_v$2:void 0}),o})()};X(["click"]);const ht=["acid","aqua","autumn","black","bumblebee","business","cmyk","coffee","corporate","cupcake","cyberpunk","dark","dim","dracula","emerald","fantasy","forest","garden","halloween","lemonade","light","lofi","luxury","night","nord","pastel","retro","sunset","synthwave","valentine","winter","wireframe"];var P=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(P||{});const vt=10,Hs={title:{align:"center",style:{color:"gray",fontSize:"16px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"16px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:vt,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"13px"},formatter:e=>qe(e).toString()}}};var Y=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=400]="MEDIUM",e[e.HIGH=800]="HIGH",e))(Y||{}),he=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(he||{}),D=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(D||{}),O=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(O||{}),ve=(e=>(e.ID="ID",e.Host="host",e.DlSpeed="dlSpeed",e.Chains="chains",e.Type="type",e.Rule="rules",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.SourceIP="sourceIP",e.SourcePort="sourcePort",e.Destination="destination",e.InboundUser="inboundUser",e.Process="process",e.SniffHost="sniffHost",e.Close="close",e.Details="details",e))(ve||{});const te=200,ye=Object.values(ve),yt={...Object.fromEntries(ye.map(e=>[e,!0])),ID:!1};var I=(e=>(e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e))(I||{}),bt=(e=>(e.Global="global",e.Rule="rule",e.Direct="direct",e))(bt||{}),be=(e=>(e.Info="info",e.Error="error",e.Warning="warning",e.Debug="debug",e.Silent="silent",e))(be||{});const wt=[200,300,500,800,1e3],xt=wt[0],Pt={add:"Add",overview:"Overview",proxies:"Proxies",proxiesSettings:"Proxies Settings",rules:"Rules",connections:"Connections",connectionsSettings:"Connections Settings",connectionsDetails:"Connections Details",logs:"Logs",logsSettings:"Logs Settings",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",sniffHost:"Sniff Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",sourceIP:"Source IP",sourcePort:"Source Port",destination:"Destination",inboundUser:"Inbound User",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForIPv6SupportTest:"URL for IPv6 support test",urlForLatencyTest:"URL for latency test",autoCloseConns:"Automatically Close connections",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",tableSize:"Table size",logLevel:"Log Level",info:"info",silent:"silent",debug:"debug",warning:"warning",error:"error",logMaxRows:"Log Maximum Reserved Rows",xs:"Extra small size",sm:"Small size",md:"Normal size",lg:"Large size",switchEndpoint:"Switch Endpoint",switchLanguage:"Switch Language",latencyTestTimeoutDuration:"Latency Test Timeout Duration",all:"All",sequence:"Sequence",payload:"Payload",details:"Details",endpointURL:"Endpoint URL",secret:"Secret",global:"Global",rule:"Rule",direct:"Direct",active:"Active",closed:"Closed",sort:"Sort",hideUnAvailableProxies:"Hide UnAvailable Proxies",reloadConfig:"Reload Config",flushFakeIP:"Flush Fake-IP",tagClientSourceIPWithName:"Tag Client Source IP With Name",tag:"Tag",coreConfig:"Core Config",xdConfig:"XD Config",version:"Version",expire:"Expire",noExpire:"Null",allowLan:"Allow Lan",enableTunDevice:"Enable TUN Device",tunModeStack:"TUN Mode Stack",tunDeviceName:"TUN Device Name",interfaceName:"Interface Name",en:"English",zh:"Chinese",port:"{{ name }} Port"},Ct={add:"添加",overview:"概览",proxies:"代理",proxiesSettings:"代理设置",rules:"规则",connections:"连接",connectionsSettings:"连接设置",connectionsDetails:"连接详情",logs:"日志",logsSettings:"日志设置",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",sniffHost:"嗅探域名",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",sourceIP:"源地址",sourcePort:"源端口",destination:"目标地址",inboundUser:"入站用户",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForIPv6SupportTest:"测试 IPv6 支持链接",urlForLatencyTest:"测速链接",autoCloseConns:"自动断开连接",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"双列渲染",updateGEODatabases:"更新 GEO 数据库",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",tableSize:"表格大小",logLevel:"日志等级",info:"信息",silent:"静默",debug:"调试",warning:"警告",error:"错误",logMaxRows:"日志最大保留行数",xs:"超小尺寸",sm:"小尺寸",md:"正常尺寸",lg:"超大尺寸",switchEndpoint:"切换后端",switchLanguage:"切换语言",latencyTestTimeoutDuration:"测速超时时间",all:"全部",sequence:"序列号",payload:"内容",details:"详情",endpointURL:"后端地址",secret:"密钥",global:"全局",rule:"规则",direct:"直连",active:"活动",closed:"已关闭",sort:"排序",hideUnAvailableProxies:"隐藏不可用节点",reloadConfig:"重载配置",flushFakeIP:"清空 Fake-IP",tagClientSourceIPWithName:"为客户端源 IP 地址添加名称标记",tag:"标记",coreConfig:"核心配置",xdConfig:"XD 配置",version:"版本",expire:"到期时间",noExpire:"不限时",allowLan:"允许局域网访问",enableTunDevice:"开启 TUN 转发",tunModeStack:"TUN 模式堆栈",tunDeviceName:"TUN 设备名称",interfaceName:"接口名称",en:"英文",zh:"中文",port:"{{ name }} 端口"},we={[O.EN]:Pt,[O.ZH]:Ct},[$t,Os]=b(u(Reflect.has(we,navigator.language)?navigator.language:O.EN),{name:"lang",storage:localStorage}),[Tt,St]=Fe(e=>[je(()=>Ne(we[e.locale]),ze)]),xe=()=>St(),[Ws,Xs]=b(u(he.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Vs,Js]=b(u(D.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[Zs,Gs]=b(u(!1),{name:"hideUnAvailableProxies",storage:localStorage}),[Qs,Es]=b(u(!0),{name:"renderProxiesInTwoColumns",storage:localStorage}),[G,Ks]=b(u("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[Q,Ys]=b(u("https://api-ipv6.ip.sb/ip"),{name:"urlForIPv6SupportTest",storage:localStorage}),[Lt,en]=b(u(!0),{name:"autoCloseConns",storage:localStorage}),[Dt,tn]=b(u(!1),{name:"autoSwitchTheme",storage:localStorage}),[It,sn]=b(u("nord"),{name:"favDayTheme",storage:localStorage}),[_t,nn]=b(u("sunset"),{name:"favNightTheme",storage:localStorage}),[an,on]=b(u(I.XS),{name:"connectionsTableSize",storage:localStorage}),[rn,ln]=b(u(yt),{name:"connectionsTableColumnVisibility",storage:localStorage}),[cn,dn]=b(u(ye),{name:"connectionsTableColumnOrder",storage:localStorage}),[un,gn]=b(u([]),{name:"clientSourceIPTags",storage:localStorage}),[pn,mn]=b(u(I.XS),{name:"logsTableSize",storage:localStorage}),[fn,hn]=b(u(be.Info),{name:"logLevel",storage:localStorage}),[vn,yn]=b(u(xt),{name:"logMaxRows",storage:localStorage}),bn=e=>{let t="table-xs";switch(e){case I.XS:t="table-xs";break;case I.SM:t="table-sm";break;case I.MD:t="table-md";break;case I.LG:t="table-lg";break}return t},[R,wn]=b(u(5e3),{name:"latencyTestTimeoutDuration",storage:localStorage}),L=()=>Y,[kt,Pe]=u([]),[Ce,Mt]=u(null),xn=()=>{const[e,t]=u([]),[a,n]=u([]),[s,o]=u(!1);return V(()=>{var g;const r=(g=Ce())==null?void 0:g.connections;r&&pe(()=>{const i=$e(r,a());if(At(a()),!s()){const l=Ut(i,kt());n(i),t(l.slice(-te))}Pe(l=>l.slice(-(i.length+te)))})}),{closedConnections:e,activeConnections:a,paused:s,setPaused:o}},$e=(e,t)=>{const a=new Map;return t.forEach(n=>a.set(n.id,n)),e.map(n=>{const s=a.get(n.id);return!s||!B.isNumber(s.download)||!B.isNumber(s.upload)?{...n,downloadSpeed:0,uploadSpeed:0}:{...n,downloadSpeed:n.download-s.download,uploadSpeed:n.upload-s.upload}})},At=e=>{Pe(t=>B.unionWith(t,e,(a,n)=>a.id===n.id))},Ut=(e,t)=>B.differenceWith(t,e,(a,n)=>a.id===n.id),Pn=()=>w().delete("connections"),qt=e=>w().delete(`connections/${e}`),[Cn,se]=u(!1),[$n,ne]=u(!1),[Tn,ae]=u(!1),[Sn,oe]=u(!1),[Ln,re]=u(!1),Dn=async()=>{const e=w();se(!0);try{await e.put("configs",{searchParams:{force:!0},json:{path:"",payload:""}})}catch{}se(!1)},In=async()=>{const e=w();ae(!0);try{await e.post("cache/fakeip/flush")}catch{}ae(!1)},_n=async()=>{const e=w();ne(!0);try{await e.post("configs/geo")}catch{}ne(!1)},kn=async()=>{const e=w();oe(!0);try{await e.post("upgrade")}catch{}oe(!1)},Mn=async()=>{const e=w();re(!0);try{await e.post("restart")}catch{}re(!1)},An=()=>w().get("configs").json(),Un=async(e,t,a)=>{try{await w().patch("configs",{json:{[e]:t}}).json(),await a()}catch(n){Re.error(n.message)}},qn=async()=>{const e=w(),{version:t}=await e.get("version").json();return t},Ft=()=>w().get("providers/proxies").json(),jt=()=>w().get("proxies").json(),le=e=>w().put(`providers/proxies/${e}`),Te=e=>w().get(`providers/proxies/${e}/healthcheck`,{timeout:5*1e3}).json(),zt=(e,t)=>w().put(`proxies/${e}`,{body:JSON.stringify({name:t})}),ie=(e,t,a,n)=>{const s=w();return t!==""?Te(t).then(o=>({delay:o[e]})):s.get(`proxies/${e}/delay`,{searchParams:{url:a,timeout:n}}).json()},ce=(e,t,a)=>w().get(`group/${e}/delay`,{searchParams:{url:t,timeout:a}}).json(),Fn=()=>w().get("rules").json(),jn=()=>w().get("providers/rules").json(),zn=e=>w().put(`providers/rules/${e}`),Nn=async e=>{const t="https://api.github.com/repos/MetaCubeX/mihomo",a=/(alpha|beta|meta)-?(\w+)/.exec(e);if(!a)return!1;const n=a[1],s=a[2];if(n==="meta"){const{assets:o}=await H.get(`${t}/releases/latest`).json();return!o.some(({name:g})=>g.includes(s))}if(n==="alpha"){const{assets:o}=await H.get(`${t}/releases/tags/Prerelease-Alpha`).json();return!o.some(({name:g})=>g.includes(s))}return!1},Rn=e=>e.includes("sing-box"),Bn=e=>/^https?/.test(e)?e:`${window.location.protocol}//${e}`,N=()=>{const[e,t]=u({}),a=(s,o)=>{t({...e(),[s]:o})};return{map:e,set:a,setWithCallback:async(s,o)=>{a(s,!0);try{await o()}catch{}a(s,!1)}}},Nt=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?t.replace("shadowsocks","ss"):t.includes("hysteria")?t.replace("hysteria","hy"):t==="wireguard"?"wg":t},Rt=(e="")=>{const t=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(t)},Hn=(e,t,a,n)=>a===D.NATURAL?e:e.sort((s,o)=>{if(n!=null&&n.has(s)&&!(n!=null&&n.has(o)))return-1;if(n!=null&&n.has(o)&&!(n!=null&&n.has(s)))return 1;const r=t[s],g=t[o];switch(a){case D.LATENCY_ASC:return r===L().NOT_CONNECTED?1:g===L().NOT_CONNECTED?-1:r-g;case D.LATENCY_DESC:return r===L().NOT_CONNECTED?1:g===L().NOT_CONNECTED?-1:g-r;case D.NAME_ASC:return s.localeCompare(o);case D.NAME_DESC:return o.localeCompare(s);default:return 0}}),On=(e,t,a,n)=>n?e.filter(s=>a!=null&&a.has(s)?!0:t[s]!==L().NOT_CONNECTED):e,{map:Bt,set:Ht}=N(),{map:Ot,setWithCallback:Wt}=N(),{map:Xt,setWithCallback:Vt}=N(),{map:Jt,setWithCallback:Zt}=N(),{map:Gt,setWithCallback:Qt}=N(),[Et,de]=u(!1),[Kt,Yt]=u([]),[es,ts]=u(new Set),[ue,ss]=u([]),[Se,E]=u({}),[Le,j]=u({}),[De,ns]=u({}),as=e=>{var g;const t={...De()},a={...Se()},n={...Le()},s=(i,l,d=!0)=>{var f,y,x,h;const p=(f=i.extra)==null?void 0:f[l];if(Array.isArray(p)){const v=(y=p.at(-1))==null?void 0:y.delay;if(v)return v}if(d)return(h=(x=i.history)==null?void 0:x.at(-1))==null?void 0:h.delay},o={};e.forEach(i=>{const{udp:l,xudp:d,type:p,now:f,name:y,provider:x=""}=i;if(t[i.name]={udp:l,xudp:d,type:p,now:f,name:y,provider:x},!f)a[i.name]=s(i,G())||L().NOT_CONNECTED;else if(a[f]!==void 0)a[i.name]=a[f];else{const v=o[f]??new Set;v.add(i.name),o[f]=v}const h=(s(i,Q(),!1)??0)>0;n[i.name]=h});const r=Object.keys(o).filter(i=>a[i]!==void 0);for(;r.length>0;){const i=r.shift(),l=a[i];for(const d of((g=o[i])==null?void 0:g.values())??[])a[d]=l,r.push(d)}me(()=>{ns(t),E(a),j(n)})},W=()=>{const e=async()=>{const[{providers:l},{proxies:d}]=await Promise.all([Ft(),jt()]),p=[...d.GLOBAL.all??[],"GLOBAL"],f=Object.values(d).filter(h=>{var v;return(v=h.all)==null?void 0:v.length}).sort((h,v)=>p.indexOf(h.name)-p.indexOf(v.name)),y=Object.values(l).filter(h=>h.name!=="default"&&h.vehicleType!=="Compatible"),x=[...Object.values(d),...y.flatMap(h=>h.proxies.filter(v=>!(v.name in d)).map(v=>({...v,provider:h.name})))];me(()=>{Yt(f),ts(new Set(["DIRECT","REJECT",...f.map(h=>h.name)])),ss(y),as(x)})},t=async(l,d)=>{await zt(l.name,d),await e(),Lt()&&pe(()=>{var f;const p=$e(((f=Ce())==null?void 0:f.connections)??[],[]);p.length>0&&p.forEach(({id:y,chains:x})=>{x.includes(l.name)&&qt(y)})})},a=async(l,d)=>{const p=Q();if(!p||p.length===0){j({});return}let f=!1;try{const{delay:y}=await ie(l,d,p,R());f=y>0}catch{f=!1}j(y=>({...y,[l]:f}))},n=async l=>{const d=Q();if(!d||d.length===0){j({});return}const p=await ce(l,d,R()),f=Object.fromEntries(Object.entries(p).map(([y,x])=>[y,x>0]));j(y=>({...y,...f}))};return{collapsedMap:Bt,setCollapsedMap:Ht,proxyIPv6SupportMap:Le,proxyLatencyTestingMap:Ot,proxyGroupLatencyTestingMap:Xt,proxyProviderLatencyTestingMap:Jt,updatingMap:Gt,isAllProviderUpdating:Et,proxies:Kt,proxyGroupNames:es,proxyProviders:ue,proxyLatencyTest:async(l,d)=>{Wt(l,async()=>{const{delay:p}=await ie(l,d,G(),R());E(f=>({...f,[l]:p}))}),await a(l,d)},proxyGroupLatencyTest:async l=>{Vt(l,async()=>{const d=await ce(l,G(),R());E(p=>({...p,...d})),await e()}),await n(l)},latencyMap:Se,proxyNodeMap:De,fetchProxies:e,selectProxyInGroup:t,updateProviderByProviderName:l=>Qt(l,async()=>{try{await le(l)}catch{}await e()}),updateAllProvider:async()=>{de(!0);try{await Promise.allSettled(ue().map(l=>le(l.name))),await e()}finally{de(!1)}},proxyProviderLatencyTest:l=>Zt(l,async()=>{await Te(l),await e()})}},[os,Wn]=b(u(""),{name:"selectedEndpoint",storage:localStorage}),[rs,Xn]=b(u([]),{name:"endpointList",storage:localStorage}),w=()=>{const e=_();if(!e)return H.create({});const t=new Headers;return e.secret&&t.set("Authorization",`Bearer ${e.secret}`),H.create({prefixUrl:e.url,headers:t})},_=()=>rs().find(({id:e})=>e===os()),ls=()=>{var e;return(e=_())==null?void 0:e.secret},is=()=>{var e;return new URL(((e=_())==null?void 0:e.url)??"").origin.replace("http","ws")},cs=(e,t={})=>{const a=new URLSearchParams(t);a.set("token",ls()??"");const n=Be(`${is()}/${e}?${a.toString()}`),s=He(n,"message");return z(()=>{var r;return s()?JSON.parse((r=s())==null?void 0:r.data):null})},[ds,Ie]=b(u("sunset"),{name:"theme",storage:localStorage}),us=C('<li class="tooltip tooltip-bottom">'),gs=C('<div class="drawer drawer-end w-auto sm:ml-auto"><input id=themes type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=themes class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side overflow-x-hidden"><label for=themes class=drawer-overlay></label><ul class="menu gap-2 rounded-l-box bg-base-300 p-2">'),ps=C('<li class="btn btn-xs">'),ms=C('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal menu-lg gap-2 p-0">'),fs=C('<ul class="navbar z-50 flex w-auto items-center justify-center bg-base-300 px-4 shadow-lg"><div class="navbar-start gap-4"><div class="drawer w-auto lg:hidden"><input id=navs type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=navs class="btn btn-circle drawer-button btn-sm"></label></div><div class=drawer-side><label for=navs class=drawer-overlay></label><ul class="menu min-h-full w-2/5 gap-2 rounded-r-box bg-base-300 pt-20"></ul></div></div></div><div class=navbar-end><div class="flex items-center gap-2">'),hs=C("<li>"),vs=({href:e,tooltip:t,children:a})=>(()=>{const n=us();return J(n,"data-tip",t),m(n,c(K,{class:"rounded-box",href:e,children:a})),n})(),ys=()=>(()=>{const e=gs(),t=e.firstChild,a=t.nextSibling,n=a.firstChild,s=a.nextSibling,o=s.firstChild,r=o.nextSibling;return m(n,c(Xe,{})),m(r,c(Z,{each:ht,children:g=>(()=>{const i=ps();return i.$$click=()=>Ie(g),J(i,"data-theme",g),m(i,g),i})()})),e})(),bs=()=>{const[e]=xe(),t=()=>[{href:P.Overview,name:e("overview"),icon:c(Ve,{})},{href:P.Proxies,name:e("proxies"),icon:c(Je,{})},{href:P.Rules,name:e("rules"),icon:c(Ze,{})},{href:P.Conns,name:e("connections"),icon:c(Ge,{})},{href:P.Log,name:e("logs"),icon:c(Qe,{})},{href:P.Config,name:e("config"),icon:c(Ee,{})}],a=Oe(),[n,s]=u(!1);return(()=>{const o=fs(),r=o.firstChild,g=r.firstChild,i=g.firstChild,l=i.nextSibling,d=l.firstChild,p=l.nextSibling,f=p.firstChild,y=f.nextSibling,x=r.nextSibling,h=x.firstChild;return i.addEventListener("change",v=>s(v.target.checked)),m(d,c(We,{})),m(y,c(Z,{get each(){return t()},children:({href:v,name:q})=>(()=>{const F=hs();return F.$$click=()=>s(!1),m(F,c(K,{href:v,children:q})),F})()})),m(r,c(Ts,{}),null),m(o,c(T,{get when(){return a.pathname!==P.Setup},get children(){const v=ms(),q=v.firstChild;return m(q,c(Z,{get each(){return t()},children:({href:F,name:_e,icon:ke})=>c(vs,{href:F,tooltip:_e,children:ke})})),v}}),x),m(h,c(ys,{})),M(()=>i.checked=n()),o})()};X(["click"]);const ws=C('<span class="badge badge-sm p-px"><span class=scale-75>IPv6'),xs=e=>{const{proxyIPv6SupportMap:t}=W(),a=z(()=>t()[e.name]===!0);return c(T,{get when(){return a()},get children(){return ws()}})},Ps=C("<span>"),Cs=e=>{const[t]=xe(),{latencyMap:a}=W(),[n,s]=u(""),o=z(()=>a()[e.name]);return V(()=>{s("text-success"),o()>L().HIGH?s("text-error"):o()>L().MEDIUM&&s("text-warning")}),c(T,{get when(){return z(()=>typeof o()=="number")()&&o()!==Y.NOT_CONNECTED},get children(){const r=Ps();return m(r,o,null),m(r,()=>t("ms"),null),M(()=>k(r,$(`whitespace-nowrap text-xs ${n()}`,e.class))),r}})},$s=C('<div class="text-md flex items-center gap-1 whitespace-nowrap font-bold uppercase sm:text-xl">'),Ts=()=>(()=>{const e=$s();return m(e,c(K,{class:"bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent",get href(){return _()?"/":"/setup"},children:"metacubexd"})),e})(),Ss=C('<div class="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur"><div class="flex justify-end gap-2">'),Ls=C('<dialog class="modal modal-bottom sm:modal-middle"><div class="modal-box p-0"><div><div class="flex items-center gap-4 text-xl font-bold"><span></span></div></div><div class=p-4></div></div><form method=dialog class=modal-backdrop><button>'),Ds="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur",Vn=e=>{let t;return(()=>{const a=Ls(),n=a.firstChild,s=n.firstChild,o=s.firstChild,r=o.firstChild,g=s.nextSibling;return Ke(i=>{var l;return(t=i)&&((l=e.ref)==null?void 0:l.call(e,i))},a),n.$$contextmenu=i=>i.preventDefault(),m(o,()=>e.icon,r),m(r,()=>e.title),m(s,c(fe,{class:"btn-circle btn-sm",onClick:()=>t==null?void 0:t.close(),get icon(){return c(Ye,{size:20})}}),null),m(g,ge(()=>e.children)),m(n,c(T,{get when(){return e.action},get children(){const i=Ss(),l=i.firstChild;return m(l,()=>e.action),i}}),null),M(()=>k(s,$(Ds,"top-0 justify-between"))),a})()};X(["contextmenu"]);const Is=C('<div><div class="flex items-center justify-between gap-2"><span class="break-all text-left text-sm"></span><span class="flex items-center gap-1"></span></div><div class="flex items-center justify-between gap-1"><div>'),Jn=e=>{const{proxyLatencyTest:t,proxyLatencyTestingMap:a}=W(),{proxyName:n,isSelected:s,onClick:o}=e,{proxyNodeMap:r}=W(),g=z(()=>r()[n]),i=()=>{var l,d,p;return Rt((l=g())==null?void 0:l.type)&&((d=g())!=null&&d.xudp||(p=g())!=null&&p.udp)?"udp":null};return(()=>{const l=Is(),d=l.firstChild,p=d.firstChild,f=p.nextSibling,y=d.nextSibling,x=y.firstChild;return et(l,"click",o,!0),J(l,"title",n),m(p,n),m(f,c(xs,{get name(){return e.proxyName}}),null),m(f,c(fe,{class:"btn-circle btn-ghost h-auto min-h-0 w-auto",get icon(){return c(tt,{size:20,get class(){return $(a()[n]&&"animate-pulse text-success")}})},onClick:h=>{h.stopPropagation(),t(n,g().provider)}}),null),m(x,()=>{var h;return Nt((h=g())==null?void 0:h.type)},null),m(x,c(T,{get when(){return i()},get children(){return` :: ${i()}`}}),null),m(y,c(Cs,{get name(){return e.proxyName},get class(){return $(s&&"badge badge-sm px-1")}}),null),M(h=>{const v=$("border-neutral-focus card card-bordered tooltip-bottom flex flex-col justify-between gap-1 bg-neutral p-2 text-neutral-content",s&&"bg-primary text-primary-content",o&&"cursor-pointer"),q=$("text-xs text-slate-500",s&&"text-primary-content");return v!==h._v$&&k(l,h._v$=v),q!==h._v$2&&k(x,h._v$2=q),h},{_v$:void 0,_v$2:void 0}),l})()};X(["click"]);const _s=C('<div><div class="flex-1 overflow-y-auto p-2"><div class=pb-8>'),ks=A(()=>U(()=>import("./Setup-c1nQzgAs.js"),__vite__mapDeps([0,1]),import.meta.url)),Ms=A(()=>U(()=>import("./Overview-6yTUe1fe.js"),__vite__mapDeps([2,1]),import.meta.url)),As=A(()=>U(()=>import("./Connections-vOf4vwOX.js"),__vite__mapDeps([3,1,4,5,6]),import.meta.url)),Us=A(()=>U(()=>import("./Logs-5DZtt_8L.js"),__vite__mapDeps([7,1,4,5]),import.meta.url)),qs=A(()=>U(()=>import("./Proxies-MWYLcPkd.js"),__vite__mapDeps([8,1,6,5]),import.meta.url)),Fs=A(()=>U(()=>import("./Rules-Mkswjv5x.js"),__vite__mapDeps([9,1,6]),import.meta.url)),js=A(()=>U(()=>import("./Config-DMF9LEWI.js"),__vite__mapDeps([10,1,5]),import.meta.url)),zs=()=>{const e=cs("connections");return V(()=>Mt(e())),null},Ns=()=>{const e=st();return V(()=>{Dt()&&Ie(e()?_t():It())}),c(Tt,{get locale(){return $t()},get children(){const t=_s(),a=t.firstChild,n=a.firstChild;return m(t,c(bs,{}),a),m(n,c(nt,{get children(){return[c(T,{get when(){return _()},get children(){return[c(S,{get path(){return P.Overview},component:Ms}),c(S,{get path(){return P.Proxies},component:qs}),c(S,{get path(){return P.Rules},component:Fs}),c(S,{get path(){return P.Conns},component:As}),c(S,{get path(){return P.Log},component:Us}),c(S,{get path(){return P.Config},component:js}),c(S,{path:"*",get element(){return c(at,{get href(){return P.Overview}})}})]}}),c(S,{get path(){return _()?P.Setup:"*"},component:ks})]}}),null),m(n,c(T,{get when(){return _()},get children(){return c(zs,{})}}),null),m(t,c(ot,{position:"bottom-center"}),null),M(s=>{const o=$("relative flex h-screen flex-col overscroll-y-none subpixel-antialiased"),r=ds();return o!==s._v$&&k(t,s._v$=o),r!==s._v$2&&J(t,"data-theme",s._v$2=r),s},{_v$:void 0,_v$2:void 0}),t}})};rt.extend(lt);it(()=>c(dt,{get source(){return ct()},get children(){return c(Ns,{})}}),document.getElementById("root"));export{Zs as $,hn as A,fe as B,vt as C,Hs as D,yn as E,wt as F,pn as G,fn as H,vn as I,en as J,Ks as K,be as L,Vn as M,wn as N,Ys as O,Js as P,D as Q,Gs as R,Es as S,I as T,Xs as U,he as V,Lt as W,G as X,R as Y,Q as Z,Vs as _,os as a,Qs as a0,Ws as a1,L as a2,W as a3,On as a4,Hn as a5,Cs as a6,Bs as a7,Jn as a8,Fn as a9,nn as aA,It as aB,_t as aC,Nn as aD,An as aE,jn as aa,zn as ab,N as ac,$t as ad,qn as ae,Rn as af,w as ag,Un as ah,Cn as ai,Dn as aj,$n as ak,_n as al,Tn as am,In as an,Sn as ao,kn as ap,Ln as aq,Mn as ar,P as as,bt as at,O as au,Os as av,tn as aw,Dt as ax,sn as ay,ht as az,Wn as b,cs as c,_ as d,rs as e,ye as f,yt as g,on as h,un as i,gn as j,an as k,Ce as l,kt as m,xn as n,ve as o,qt as p,cn as q,rn as r,Xn as s,Bn as t,xe as u,Pn as v,dn as w,ln as x,bn as y,mn as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Setup-c1nQzgAs.js","./vendor-K_-04A7A.js","./Overview-6yTUe1fe.js","./Connections-vOf4vwOX.js","./index-UYRUd8DB.js","./ConfigTitle-j1HkXMNR.js","./global-iY-XlCZP.js","./Logs-5DZtt_8L.js","./Proxies-MWYLcPkd.js","./Rules-Mkswjv5x.js","./Config-DMF9LEWI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}