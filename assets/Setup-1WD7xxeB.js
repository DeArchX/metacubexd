import{C as F,a1 as P,a2 as q,a3 as A,a4 as H,O as M,i as c,c as h,P as N,F as O,d as E,a5 as f,p as U,z as T,q as X}from"./vendor-zz06Ag2Q.js";import{u as G,e as m,B as _,s as v,a as J,b as S,t as K}from"./index-Fs8qIoZj.js";let y;const Q=new Uint8Array(16);function W(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(Q)}const l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function Y(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}const Z=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:Z};function tt(t,e,d){if(C.randomUUID&&!e&&!t)return C.randomUUID();t=t||{};const i=t.random||(t.rng||W)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){d=d||0;for(let r=0;r<16;++r)e[d+r]=i[r];return e}return Y(i)}const et=E('<div class="mx-auto flex max-w-screen-sm flex-col items-center gap-4 py-10"><form class=contents><div class="flex w-full flex-col gap-4"><div class=flex-1><label class=label><span class=label-text></span></label><input name=url type=url class="input input-bordered w-full"placeholder=http://127.0.0.1:9090 list=defaultEndpoints><datalist id=defaultEndpoints><option value=http://127.0.0.1:9090></option></datalist></div><div class=flex-1><label class=label><span class=label-text></span></label><input name=secret type=password class="input input-bordered w-full"placeholder=secret></div></div></form><div class="grid w-full grid-cols-2 gap-4">'),nt=E('<div class="badge badge-info flex w-full cursor-pointer items-center justify-between gap-4 py-4"><span class=truncate>'),st=f.object({url:f.string().min(1),secret:f.string()}),it=()=>{const[t]=G(),e=F(),d=P(),i=n=>{S(n),d("/overview")},r=(n,s)=>X.get(n,{headers:s?{Authorization:`Bearer ${s}`}:{}}).then(({ok:a})=>a).catch(a=>{const{message:o}=a;U.error(o)}),R=async n=>{const s=m().find(a=>a.id===n);s&&await r(s.url,s.secret)&&i(n)},b=async({url:n,secret:s})=>{const a=K(n);if(!await r(a,s))return;const o=tt(),u=m().slice(),p=u.find(x=>x.url===a);if(!p){v([{id:o,url:a,secret:s},...u]),i(o);return}p.secret=s,p.id=o,v(u),i(o)},I=n=>{const{message:s}=n;U.error(s)},{form:$}=q({extend:A({schema:st}),onSubmit:b,onError:I}),L=n=>{J()===n&&S(""),v(m().filter(s=>s.id!==n))};return H(()=>{const n=new URLSearchParams(e.search);n.has("hostname")?b({url:`${window.location.protocol}//${n.get("hostname")}${n.get("port")?`:${n.get("port")}`:""}`,secret:n.get("secret")??""}):m().length===0&&b({url:"http://127.0.0.1:9090",secret:""})}),(()=>{const n=et(),s=n.firstChild,a=s.firstChild,o=a.firstChild,u=o.firstChild,p=u.firstChild,x=o.nextSibling,k=x.firstChild,D=k.firstChild,V=s.nextSibling;return M($,s,()=>$),c(p,()=>t("endpointURL")),c(D,()=>t("secret")),c(a,h(_,{type:"submit",class:"btn-primary uppercase",get children(){return t("add")}}),null),c(V,h(O,{get each(){return m()},children:({id:w,url:j})=>(()=>{const g=nt(),z=g.firstChild;return g.$$click=()=>R(w),c(z,j),c(g,h(_,{class:"btn-circle btn-ghost btn-xs text-white",onClick:B=>{B.stopPropagation(),L(w)},get children(){return h(N,{})}}),null),g})()})),n})()};T(["click"]);export{it as default};