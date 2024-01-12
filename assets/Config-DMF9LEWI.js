import{k as j,a4 as re,i as e,c as t,S as E,d as h,a5 as k,a2 as K,N as Y,F as T,a1 as ie,az as ce,p as ee,P as oe,b as g,D as R,a3 as le,v as de}from"./vendor-K_-04A7A.js";import{u as O,ae as ue,af as G,ag as ge,B as D,ah as m,ai as pe,aj as he,ak as ve,al as fe,am as be,an as me,ao as _e,ap as $e,aq as xe,ar as Ce,b as ke,as as ye,at as M,au as W,av as Se,ad as we,aw as De,ax as Z,ay as Ee,az as J,aA as Ne,aB as Pe,aC as Ae,aD as Ie,aE as Le}from"./index-k1LuxfTd.js";import{C as y}from"./ConfigTitle-j1HkXMNR.js";const Te=h('<div class="flex flex-col p-4">'),Fe=h('<div class="flex flex-col"><form class="flex gap-2 sm:flex-row"><input type=search name=name class="input input-bordered min-w-0 flex-1"placeholder=google.com><div class="flex items-center gap-2"><select name=type class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),Be=h("<div class=py-2>"),Re=h('<form class="grid grid-cols-3 gap-2 sm:grid-cols-5">'),Oe=h('<div class="grid grid-cols-2 gap-2 sm:grid-cols-4"><div class=form-control><label for=enable-allow-lan class="label gap-2"><span class=label-text></span></label><input id=enable-allow-lan type=checkbox class=toggle></div><div class=form-control><label for=enable-tun-device class="label gap-2"><span class=label-text></span></label><input id=enable-tun-device type=checkbox class=toggle></div><div class=form-control><label for=tun-ip-stack class="label gap-2"><span class=label-text></span></label><select id=tun-ip-stack class="select select-bordered flex-1"><option>Mixed</option><option>gVisor</option><option>System</option><option>LWIP</option></select></div><div class=form-control><label for=device-name class="label gap-2"><span class=label-text></span></label><input id=device-name class="input input-bordered min-w-0"></div><div class=form-control><label for=interface-name class="label gap-2"><span class=label-text></span></label><input id=interface-name class="input input-bordered min-w-0">'),Me=h('<div class="flex flex-col gap-4"><select class="select select-bordered"><option></option><option></option><option></option></select><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">'),Qe=h('<div class=form-control><label class=label><span class=label-text></span></label><input type=number class="input input-bordered">'),Ge=h('<div class="flex flex-col gap-2"><div class="flex flex-col"><select class="select select-bordered"></select></div><div class="flex flex-col"><select class="select select-bordered">'),je=h('<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-2"><div class="flex flex-col"><select class="select select-bordered"></select></div></div><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle>'),Q=h("<option>"),qe=h('<span class="absolute -right-1 -top-1 flex h-3 w-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"></span><span class="inline-flex h-3 w-3 rounded-full bg-info">'),ze=h('<div class="grid grid-cols-2 gap-4"><kbd class=kbd></kbd><div class=relative><kbd class="kbd w-full">'),Ue=h('<div class="mx-auto flex max-w-screen-md flex-col gap-4">'),Ve=k.object({name:k.string(),type:k.string()}),He=()=>{const[r]=O(),a=ge(),{form:f,isSubmitting:s}=K({extend:le({schema:Ve}),onSubmit:p=>a.get("dns/query",{searchParams:{name:p.name,type:p.type}}).json().then(({Answer:i})=>_((i==null?void 0:i.map(({data:c})=>c))||[])).catch(i=>de.error(i.message))}),[b,_]=j([]);return(()=>{const p=Fe(),i=p.firstChild,c=i.firstChild,l=c.nextSibling;return l.firstChild,Y(f,i,()=>f),e(l,t(D,{type:"submit",class:"btn-primary",get loading(){return s()},get children(){return r("dnsQuery")}}),null),e(p,t(E,{get when(){return b().length>0},get children(){const u=Te();return e(u,t(T,{get each(){return b()},children:$=>(()=>{const x=Be();return e(x,$),x})()})),u}}),null),p})()},Xe=k.object({port:k.number(),"socks-port":k.number(),"redir-port":k.number(),"tproxy-port":k.number(),"mixed-port":k.number()}),We=({backendVersion:r})=>{const[a]=O(),f=ie(),s=[{label:()=>a("port",{name:"HTTP"}),key:"port",onChange:l=>void m("port",Number(l.target.value),c)},{label:()=>a("port",{name:"Socks"}),key:"socks-port",onChange:l=>void m("socks-port",Number(l.target.value),c)},{label:()=>a("port",{name:"Redir"}),key:"redir-port",onChange:l=>void m("redir-port",Number(l.target.value),c)},{label:()=>a("port",{name:"TProxy"}),key:"tproxy-port",onChange:l=>void m("tproxy-port",Number(l.target.value),c)},{label:()=>a("port",{name:"Mixed"}),key:"mixed-port",onChange:l=>void m("mixed-port",Number(l.target.value),c)}],{form:b,setInitialValues:_,reset:p}=K({extend:le({schema:Xe})}),[i,{refetch:c}]=ce(Le);return ee(()=>{const l=i();l&&(_(l),p())}),(()=>{const l=Me(),u=l.firstChild,$=u.firstChild,x=$.nextSibling,S=x.nextSibling,d=u.nextSibling;return u.addEventListener("change",o=>void m("mode",o.target.value,c)),e($,()=>a("global")),e(x,()=>a("rule")),e(S,()=>a("direct")),e(l,t(E,{get when(){return!G(r())},get children(){return[(()=>{const o=Re();return Y(b,o,()=>b),e(o,t(T,{each:s,children:C=>(()=>{const N=Qe(),P=N.firstChild,F=P.firstChild,w=P.nextSibling;return e(F,()=>C.label()),oe(w,"change",C.onChange),g(v=>{const B=C.key,A=C.key,I=C.key,L=C.label();return B!==v._v$&&R(P,"for",v._v$=B),A!==v._v$2&&R(w,"id",v._v$2=A),I!==v._v$3&&R(w,"name",v._v$3=I),L!==v._v$4&&R(w,"placeholder",v._v$4=L),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),N})()})),o})(),(()=>{const o=Oe(),C=o.firstChild,N=C.firstChild,P=N.firstChild,F=N.nextSibling,w=C.nextSibling,v=w.firstChild,B=v.firstChild,A=v.nextSibling,I=w.nextSibling,L=I.firstChild,te=L.firstChild,q=L.nextSibling,z=I.nextSibling,U=z.firstChild,ae=U.firstChild,V=U.nextSibling,ne=z.nextSibling,H=ne.firstChild,se=H.firstChild,X=H.nextSibling;return e(P,()=>a("allowLan")),F.addEventListener("change",n=>void m("allow-lan",n.target.checked,c)),e(B,()=>a("enableTunDevice")),A.addEventListener("change",n=>void m("tun",{enable:n.target.checked},c)),e(te,()=>a("tunModeStack")),q.addEventListener("change",n=>void m("tun",{stack:n.target.value},c)),e(ae,()=>a("tunDeviceName")),V.addEventListener("change",n=>void m("tun",{device:n.target.value},c)),e(se,()=>a("interfaceName")),X.addEventListener("change",n=>void m("interface-name",n.target.value,c)),g(()=>{var n;return F.checked=(n=i())==null?void 0:n["allow-lan"]}),g(()=>{var n;return A.checked=(n=i())==null?void 0:n.tun.enable}),g(()=>{var n;return q.value=(n=i())==null?void 0:n.tun.stack}),g(()=>{var n;return V.value=(n=i())==null?void 0:n.tun.device}),g(()=>{var n;return X.value=(n=i())==null?void 0:n["interface-name"]}),o})()]}}),d),e(d,t(D,{class:"btn-primary",get loading(){return pe()},onClick:he,get children(){return a("reloadConfig")}}),null),e(d,t(D,{class:"btn-secondary",get loading(){return ve()},onClick:fe,get children(){return a("updateGEODatabases")}}),null),e(d,t(D,{class:"btn-accent",get loading(){return be()},onClick:me,get children(){return a("flushFakeIP")}}),null),e(d,t(E,{get when(){return!G(r())},get children(){return t(D,{class:"btn-error",get loading(){return _e()},onClick:$e,get children(){return a("upgradeCore")}})}}),null),e(d,t(D,{class:"btn-warning",get loading(){return xe()},onClick:Ce,get children(){return a("restartCore")}}),null),e(d,t(D,{class:"btn-info",onClick:()=>{ke(""),f(ye.Setup)},get children(){return a("switchEndpoint")}}),null),g(()=>{var o;return u.value=(o=i())==null?void 0:o.mode}),g(()=>$.value=M.Global),g(()=>x.value=M.Rule),g(()=>S.value=M.Direct),l})()},Ze=()=>{const[r]=O(),a=[{label:()=>r("en"),value:W.EN},{label:()=>r("zh"),value:W.ZH}];return(()=>{const f=je(),s=f.firstChild,b=s.firstChild,_=b.firstChild,p=s.nextSibling,i=p.firstChild,c=i.firstChild;return e(b,t(y,{get children(){return r("switchLanguage")}}),_),_.addEventListener("change",l=>Se(l.target.value)),e(_,t(T,{each:a,children:l=>(()=>{const u=Q();return e(u,()=>l.label()),g(()=>u.selected=we()===l.value),g(()=>u.value=l.value),u})()})),e(i,t(y,{get children(){return r("autoSwitchTheme")}}),c),c.addEventListener("change",l=>De(l.target.checked)),e(p,t(E,{get when(){return Z()},get children(){const l=Ge(),u=l.firstChild,$=u.firstChild,x=u.nextSibling,S=x.firstChild;return e(u,t(y,{get children(){return r("favDayTheme")}}),$),$.addEventListener("change",d=>Ee(d.target.value)),e($,t(T,{each:J,children:d=>(()=>{const o=Q();return o.value=d,e(o,d),o})()})),e(x,t(y,{get children(){return r("favNightTheme")}}),S),S.addEventListener("change",d=>Ne(d.target.value)),e(S,t(T,{each:J,children:d=>(()=>{const o=Q();return o.value=d,e(o,d),o})()})),g(()=>$.value=Pe()),g(()=>S.value=Ae()),l}}),null),g(()=>c.checked=Z()),f})()},Je=({backendVersion:r})=>{const[a,f]=j(!1);return ee(async()=>{const s=r();s&&f(await Ie(s))}),(()=>{const s=ze(),b=s.firstChild,_=b.nextSibling,p=_.firstChild;return e(b,()=>"1.134.0"),e(_,t(E,{get when(){return a()},get children(){return qe()}}),p),e(p,r),s})()},ll=()=>{const[r]=O(),[a,f]=j("");return re(async()=>{f(await ue())}),(()=>{const s=Ue();return e(s,t(E,{get when(){return!G(a())},get children(){return[t(y,{withDivider:!0,get children(){return r("dnsQuery")}}),t(He,{})]}}),null),e(s,t(y,{withDivider:!0,get children(){return r("coreConfig")}}),null),e(s,t(We,{backendVersion:a}),null),e(s,t(y,{withDivider:!0,get children(){return r("xdConfig")}}),null),e(s,t(Ze,{}),null),e(s,t(y,{withDivider:!0,get children(){return r("version")}}),null),e(s,t(Je,{backendVersion:a}),null),s})()};export{ll as default};