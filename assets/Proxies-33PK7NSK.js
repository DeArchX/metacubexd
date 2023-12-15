import{c as e,H as me,i as n,A as f,F as O,b as _,d as v,at as fe,au as te,S as F,t as B,g as ue,D as xe,f as $e,av as pe,h as ne,q as _e,Y as be,a4 as we,k as ye,aw as re,M as Ce,Q as se,e as Pe}from"./vendor-K_-04A7A.js";import{u as X,J as Se,K as Te,N as Le,O as Ne,P as Ee,Q as Ie,R as De,S as Me,U as ke,V as H,W as Oe,X as Ae,Y as Ue,Z as Fe,_ as J,$ as ge,a0 as Re,a1 as W,M as je,a2 as I,a3 as he,a4 as K,B as Y,a5 as Be,a6 as le,a7 as ie,a8 as ae}from"./index-56y5dDCp.js";import{f as He}from"./global-LbJd8TF1.js";import{C as k}from"./ConfigTitle-j1HkXMNR.js";const Ye=v('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full">'),ze=v('<option class="flex items-center gap-2">'),Qe=v("<option>"),We=t=>{const[s]=X();return e(je,{ref:r=>{var i;return(i=t.ref)==null?void 0:i.call(t,r)},get icon(){return e(me,{size:24})},get title(){return s("proxiesSettings")},get children(){const r=Ye(),i=r.firstChild,o=i.firstChild,d=o.firstChild,g=i.nextSibling,h=g.firstChild,u=g.nextSibling,D=u.firstChild,x=u.nextSibling,S=x.firstChild,$=x.nextSibling,y=$.firstChild,m=$.nextSibling,T=m.firstChild,L=T.firstChild,C=m.nextSibling,M=C.firstChild,z=M.firstChild,Q=C.nextSibling,R=Q.firstChild;return n(i,e(k,{withDivider:!0,get children(){return s("autoCloseConns")}}),o),d.addEventListener("change",c=>Se(c.target.checked)),n(g,e(k,{withDivider:!0,get children(){return s("urlForLatencyTest")}}),h),h.addEventListener("change",c=>Te(c.target.value)),n(u,e(k,{withDivider:!0,get children(){return[f(()=>s("latencyTestTimeoutDuration"))," (",f(()=>s("ms")),")"]}}),D),D.addEventListener("change",c=>Le(Number(c.target.value))),n(x,e(k,{withDivider:!0,get children(){return s("urlForIPv6SupportTest")}}),S),S.addEventListener("change",c=>{var p;return Ne((p=c.target.value)==null?void 0:p.trim())}),n($,e(k,{withDivider:!0,get children(){return s("proxiesSorting")}}),y),y.addEventListener("change",c=>Ee(c.target.value)),n(y,e(O,{get each(){return Object.values(Ie)},children:c=>(()=>{const p=ze();return p.value=c,n(p,()=>s(c)),p})()})),n(m,e(k,{withDivider:!0,get children(){return s("hideUnAvailableProxies")}}),T),L.addEventListener("change",c=>De(c.target.checked)),n(C,e(k,{withDivider:!0,get children(){return s("renderInTwoColumns")}}),M),z.addEventListener("change",c=>Me(c.target.checked)),n(Q,e(k,{withDivider:!0,get children(){return s("proxiesPreviewType")}}),R),R.addEventListener("change",c=>ke(c.target.value)),n(R,e(O,{get each(){return Object.values(H)},children:c=>(()=>{const p=Qe();return p.value=c,n(p,()=>s(c)),p})()})),_(()=>d.checked=Oe()),_(()=>h.value=Ae()),_(()=>D.value=Ue()),_(()=>S.value=Fe()),_(()=>y.value=J()),_(()=>L.checked=ge()),_(()=>z.checked=Re()),_(()=>R.value=W()),r}})},ce=t=>{const s=()=>W()===H.OFF,r=f(()=>t.proxyNameList.length<=10),i=f(()=>{const d=W();return d===H.BAR||d===H.Auto&&!r()}),o=f(()=>{const d=W();return d===H.DOTS||d===H.Auto&&r()});return e(F,{get when(){return!s()},get children(){return e(fe,{get children(){return[e(te,{get when(){return i()},get children(){return e(Ve,{get proxyNameList(){return t.proxyNameList},get now(){return t.now}})}}),e(te,{get when(){return o()},get children(){return e(Ze,{get proxyNameList(){return t.proxyNameList},get now(){return t.now}})}})]}})}})},Xe=v('<div class="flex items-center gap-2 py-2"><div class="my-2 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-success></div><div class=bg-warning></div><div class=bg-error></div><div class=bg-neutral>'),Ve=t=>{const{latencyMap:s}=K(),r=f(()=>t.proxyNameList.map(u=>s()[u])),i=f(()=>r().length),o=f(()=>r().filter(u=>u>I().NOT_CONNECTED&&u<=I().MEDIUM).length),d=f(()=>r().filter(u=>u>I().MEDIUM&&u<=I().HIGH).length),g=f(()=>r().filter(u=>u>I().HIGH).length),h=f(()=>r().filter(u=>u===I().NOT_CONNECTED).length);return(()=>{const u=Xe(),D=u.firstChild,x=D.firstChild,S=x.nextSibling,$=S.nextSibling,y=$.nextSibling;return n(u,e(he,{get name(){return t.now}}),null),_(m=>{const T=`${o()*100/i()}%`,L=`${d()*100/i()}%`,C=`${g()*100/i()}%`,M=`${h()*100/i()}%`;return T!==m._v$&&((m._v$=T)!=null?x.style.setProperty("width",T):x.style.removeProperty("width")),L!==m._v$2&&((m._v$2=L)!=null?S.style.setProperty("width",L):S.style.removeProperty("width")),C!==m._v$3&&((m._v$3=C)!=null?$.style.setProperty("width",C):$.style.removeProperty("width")),M!==m._v$4&&((m._v$4=M)!=null?y.style.setProperty("width",M):y.style.removeProperty("width")),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()},qe=v("<div>"),Je=v('<div class="flex items-center gap-2 py-2"><div class="flex flex-1 flex-wrap items-center gap-1">'),Ke=t=>{let s=t.selected?"bg-white border-4 border-success":"bg-success";return typeof t.latency!="number"||t.latency===I().NOT_CONNECTED?s=t.selected?"bg-white border-4 border-neutral":"bg-neutral":t.latency>I().HIGH?s=t.selected?"bg-white border-4 border-error":"bg-error":t.latency>I().MEDIUM&&(s=t.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const r=qe();return _(i=>{const o=B("h-4 w-4 rounded-full",s),d=t.name;return o!==i._v$&&ue(r,i._v$=o),d!==i._v$2&&xe(r,"title",i._v$2=d),i},{_v$:void 0,_v$2:void 0}),r})()},Ze=t=>{const{latencyMap:s}=K();return(()=>{const r=Je(),i=r.firstChild;return n(i,e(O,{get each(){return t.proxyNameList.map(o=>[o,s()[o]])},children:([o,d])=>{const g=t.now===o;return e(Ke,{name:o,latency:d,selected:g})}})),n(r,e(he,{get name(){return t.now}}),null),r})()},oe=v('<div class="flex flex-1 flex-col gap-2">'),Ge=v('<div class="flex flex-col gap-2 sm:flex-row">'),de=t=>{const s=$e(()=>t.children),r=pe(),i=f(()=>r.width>=640),o=f(()=>s.toArray().filter((g,h)=>h%2===0)),d=f(()=>s.toArray().filter((g,h)=>h%2===1));return(()=>{const g=Ge();return n(g,e(F,{get when(){return i()},get fallback(){return t.children},get children(){return[(()=>{const h=oe();return n(h,o),h})(),(()=>{const h=oe();return n(h,d),h})()]}})),g})()},et=v("<progress class=progress max=100>"),tt=v('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),nt=v('<div class="text-sm text-slate-500">: '),rt=t=>{const{Download:s=0,Upload:r=0,Total:i=0,Expire:o=0}=t,d=ne(i,{units:"iec"}),g=ne(s+r,{units:"iec"}),h=_e.toFinite(((s+r)/i*100).toFixed(2));return{total:d,used:g,percentage:h,expirePrefix:()=>{const[x]=X();return x("expire")},expireStr:()=>{const[x]=X();return o===0?x("noExpire"):be(o*1e3).format("YYYY-MM-DD")}}},st=t=>{if(!t.subscriptionInfo)return;const s=rt(t.subscriptionInfo);return[(()=>{const r=et();return _(()=>r.value=s.percentage),r})(),(()=>{const r=tt(),i=r.firstChild,o=i.nextSibling,d=o.nextSibling,g=d.nextSibling;return g.nextSibling,n(r,()=>`${s.used}`,i),n(r,()=>`${s.total}`,o),n(r,()=>s.percentage,g),r})(),(()=>{const r=nt(),i=r.firstChild;return n(r,()=>s.expirePrefix(),i),n(r,()=>s.expireStr(),null),r})()]},lt=v('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),it=v('<button><span></span><div class="badge badge-sm">'),at=v('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm">'),ct=v('<div class="text-sm text-slate-500"> '),ot=v('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),dt=v('<div class="text-sm text-slate-500"> :: <!> ');var U=function(t){return t.proxyProviders="proxyProviders",t.proxies="proxies",t}(U||{});const mt=()=>{let t;const[s]=X(),{fetchProxies:r,proxies:i,selectProxyInGroup:o,latencyMap:d,proxyGroupNames:g,proxyProviders:h,updateProviderByProviderName:u,updateAllProvider:D,proxyGroupLatencyTest:x,proxyProviderLatencyTest:S,collapsedMap:$,setCollapsedMap:y,proxyGroupLatencyTestingMap:m,proxyProviderLatencyTestingMap:T,isAllProviderUpdating:L,updatingMap:C}=K();we(r);const M=async(b,N)=>{b.stopPropagation(),x(N)},z=(b,N)=>{b.stopPropagation(),S(N)},Q=(b,N)=>{b.stopPropagation(),u(N)},R=async b=>{b.stopPropagation(),D()},[c,p]=ye(U.proxies),ve=()=>[{type:U.proxies,name:s("proxies"),count:i().length},{type:U.proxyProviders,name:s("proxyProviders"),count:h().length}];return(()=>{const b=lt(),N=b.firstChild,Z=N.firstChild,G=Z.nextSibling,ee=N.nextSibling;return n(Z,e(O,{get each(){return ve()},children:l=>(()=>{const P=it(),j=P.firstChild,a=j.nextSibling;return P.$$click=()=>p(l.type),n(j,()=>l.name),n(a,()=>l.count),_(()=>ue(P,B(c()===l.type&&"tab-active","tab-sm tab gap-2 px-2"))),P})()})),n(N,e(F,{get when(){return c()===U.proxyProviders},get children(){return e(Y,{class:"btn btn-circle btn-sm",get disabled(){return L()},onClick:l=>R(l),get icon(){return e(re,{get class(){return B(L()&&"animate-spin text-success")}})}})}}),G),n(G,e(Y,{class:"btn-circle btn-sm",onClick:()=>t==null?void 0:t.showModal(),get icon(){return e(Ce,{})}})),n(ee,e(F,{get when(){return c()===U.proxies},get children(){return e(de,{get children(){return e(O,{get each(){return i()},children:l=>{const P=f(()=>Be(le(l.all??[],d(),J(),g()),d(),g(),ge())),j=[(()=>{const a=at(),E=a.firstChild,w=E.firstChild,V=w.nextSibling;return n(w,()=>l.name),n(V,()=>{var A;return(A=l.all)==null?void 0:A.length}),n(a,e(Y,{class:"btn-circle btn-sm",get disabled(){return m()[l.name]},onClick:A=>M(A,l.name),get icon(){return e(se,{get class(){return B(m()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),(()=>{const a=ct(),E=a.firstChild;return n(a,()=>l.type,E),n(a,()=>{var w;return((w=l.now)==null?void 0:w.length)>0&&` :: ${l.now}`},null),a})(),e(F,{get when(){return!$()[l.name]},get children(){return e(ce,{get proxyNameList(){return P()},get now(){return l.now}})}})];return e(ie,{get isOpen(){return $()[l.name]},title:j,onCollapse:a=>y(l.name,a),get children(){return e(O,{get each(){return P()},children:a=>e(ae,{proxyName:a,get isSelected(){return l.now===a},onClick:()=>void o(l,a)})})}})}})}})}}),null),n(ee,e(F,{get when(){return c()===U.proxyProviders},get children(){return e(de,{get children(){return e(O,{get each(){return h()},children:l=>{const P=f(()=>le(l.proxies.map(a=>a.name)??[],d(),J(),void 0)),j=[(()=>{const a=ot(),E=a.firstChild,w=E.firstChild,V=w.nextSibling,A=E.nextSibling;return n(w,()=>l.name),n(V,()=>l.proxies.length),n(A,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return C()[l.name]},onClick:q=>Q(q,l.name),get icon(){return e(re,{get class(){return B(C()[l.name]&&"animate-spin text-success")}})}}),null),n(A,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return T()[l.name]},onClick:q=>z(q,l.name),get icon(){return e(se,{get class(){return B(T()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),e(st,{get subscriptionInfo(){return l.subscriptionInfo}}),(()=>{const a=dt(),E=a.firstChild,w=E.nextSibling;return w.nextSibling,n(a,()=>l.vehicleType,E),n(a,()=>s("updated"),w),n(a,()=>He(l.updatedAt),null),a})(),e(F,{get when(){return!$()[l.name]},get children(){return e(ce,{get proxyNameList(){return P()}})}})];return e(ie,{get isOpen(){return $()[l.name]},title:j,onCollapse:a=>y(l.name,a),get children(){return e(O,{get each(){return P()},children:a=>e(ae,{proxyName:a})})}})}})}})}}),null),n(b,e(We,{ref:l=>t=l}),null),b})()};Pe(["click"]);export{mt as default};
