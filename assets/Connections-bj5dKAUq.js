import{g as O,c as t,L as pe,i as n,F as R,P as se,a9 as ze,aa as Ge,ab as Ke,ac as Me,ad as Re,S as Se,b as y,d as m,a5 as ee,a2 as Le,a3 as Ae,O as xe,l as Ie,ae as re,af as je,ag as Ve,m as He,ah as Be,ai as Ue,aj as qe,f as ge,ak as We,o as me,e as W,h as Ze,a7 as Ye,v as E,B as A,t as j,al as Je,am as Qe,N as Xe,Q as te,an as fe,ao as he,ap as et,aq as tt,E as nt,z as st}from"./vendor-zz06Ag2Q.js";import{c as rt,g as at,a as lt,b as ot,d as it,e as ct,f as Z,r as dt}from"./index-yYmmC4vu.js";import{u as Y,B as D,f as ut,g as gt,h as mt,T as ft,i as B,j as ye,k as Fe,M as we,m as ae,n as ht,o as d,p as be,q as bt,r as $e,v as ve,w as $t,x as vt,y as Ct,z as _t}from"./index-LOTH-7ft.js";import{C as ne}from"./ConfigTitle-Fd4OdpHw.js";const pt=m('<form><div class="join flex"><select name=sourceIP class="select join-item select-bordered"><option></option></select><input name=tagName class="input join-item input-bordered min-w-0 flex-1"placeholder=name>'),St=m("<option class=badge>"),xt=m('<div><div class="flex justify-between py-2"><div class="flex items-center gap-2"><span></span></div><input type=checkbox class=toggle>'),It=m("<div>"),yt=m('<div class="flex flex-col gap-4"><div><select class="select select-bordered w-full"></select></div><div><div class="flex flex-col gap-4"><div class="flex flex-col gap-2"></div></div></div><div>'),Ft=m("<option>"),wt=m('<div class="badge badge-primary w-full items-center justify-between gap-2 py-4"><span class=truncate> (<!>)'),Dt=()=>{const r=ee.object({tagName:ee.string().nonempty(),sourceIP:ee.string().nonempty()}),[g]=Y(),{form:a,reset:C}=Le({extend:Ae({schema:r}),onSubmit:({tagName:$,sourceIP:F})=>{ye(_=>_.some(o=>o.tagName===$||o.sourceIP===F)?_:[..._,{tagName:$,sourceIP:F}]),C()}});return(()=>{const $=pt(),F=$.firstChild,_=F.firstChild;return _.firstChild,_.nextSibling,xe(a,$,()=>a),n(_,t(re,{get each(){return Ie.uniq(ae().map(({metadata:{sourceIP:o}})=>o)).sort().filter(o=>!B().some(({sourceIP:c})=>c===o))},children:o=>(()=>{const c=St();return n(c,o),y(()=>c.value=o()),c})()}),null),n(F,t(D,{type:"submit",class:"join-item",get children(){return g("tag")}}),null),$})()},Pt=r=>{const[g]=Y(),[a,C]=O(null),$=({draggable:o})=>C(o.id),F=({draggable:o,droppable:c})=>{if(o&&c){const p=r.order,f=p.indexOf(o.id),x=p.indexOf(c.id);if(f!==x){const S=p.slice();S.splice(x,0,...S.splice(f,1)),r.onOrderChange(S)}}},_=({key:o})=>{const c=je(o),[p]=Ve();return(()=>{const f=xt(),x=f.firstChild,S=x.firstChild,k=S.firstChild,h=S.nextSibling,w=c.ref;return typeof w=="function"?xe(w,f):c.ref=f,n(S,t(D,He({class:"btn-ghost btn-sm cursor-grab",get icon(){return t(Be,{size:24})}},()=>c.dragActivators)),k),n(k,()=>g(o)),h.addEventListener("change",v=>{r.onVisibleChange({...r.visible,[o]:v.target.checked})}),y(v=>{const P=!!c.isActiveDraggable,z=!!p.active.draggable,L=Ue(c.transform);return P!==v._v$&&f.classList.toggle("opacity-25",v._v$=P),z!==v._v$2&&f.classList.toggle("transition-transform",v._v$2=z),v._v$3=qe(f,L,v._v$3),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),y(()=>h.checked=r.visible[o]),f})()};return t(we,{ref:o=>{var c;return(c=r.ref)==null?void 0:c.call(r,o)},get icon(){return t(pe,{size:24})},get title(){return g("connectionsSettings")},get action(){return t(D,{class:"btn-neutral btn-sm",onClick:()=>{r.onOrderChange(ut),r.onVisibleChange(gt)},get children(){return g("reset")}})},get children(){const o=yt(),c=o.firstChild,p=c.firstChild,f=c.nextSibling,x=f.firstChild,S=x.firstChild,k=f.nextSibling;return n(c,t(ne,{withDivider:!0,get children(){return g("tableSize")}}),p),p.addEventListener("change",h=>mt(h.target.value)),n(p,t(R,{get each(){return Object.values(ft)},children:h=>(()=>{const w=Ft();return w.value=h,n(w,()=>g(h)),w})()})),n(f,t(ne,{withDivider:!0,get children(){return g("tagClientSourceIPWithName")}}),x),n(x,t(Dt,{}),S),n(S,t(R,{get each(){return B()},children:({tagName:h,sourceIP:w})=>(()=>{const v=wt(),P=v.firstChild,z=P.firstChild,L=z.nextSibling;return L.nextSibling,n(P,h,z),n(P,w,L),n(v,t(D,{class:"btn-circle btn-ghost btn-xs",onClick:()=>ye(G=>G.filter(V=>V.tagName!==h)),get icon(){return t(se,{size:12})}}),null),v})()})),n(k,t(ne,{withDivider:!0,get children(){return g("sort")}}),null),n(k,t(ze,{onDragStart:$,onDragEnd:F,collisionDetector:Ge,get children(){return[t(Ke,{}),t(Me,{get ids(){return r.order},get children(){return t(R,{get each(){return r.order},children:h=>t(_,{key:h})})}}),t(Re,{get children(){return t(Se,{get when(){return a()},get children(){const h=It();return n(h,()=>g(a())),h}})}})]}}),null),y(()=>p.value=Fe()),o}})},Tt=m("<pre><code>"),Nt=r=>{const[g]=Y();return t(we,{ref:a=>{var C;return(C=r.ref)==null?void 0:C.call(r,a)},get icon(){return t(pe,{size:24})},get title(){return g("connectionsDetails")},get children(){return t(Se,{get when(){return r.selectedConnectionID},get children(){const a=Tt(),C=a.firstChild;return n(C,()=>JSON.stringify(ae().find(({id:$})=>$===r.selectedConnectionID),null,2)),a}})}})};var Et=async r=>{typeof r=="string"?await navigator.clipboard.writeText(r):await navigator.clipboard.write(r)};const Ce=m('<div class="flex h-4 items-center">'),Ot=m('<div class="flex h-full flex-col gap-2"><div class="flex w-full flex-wrap items-center gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><select class="select select-bordered select-primary select-sm w-full max-w-full flex-1"><option value=""></option></select></div><div class="flex flex-1 items-center gap-2"><input type=search class="input input-primary input-sm min-w-0 flex-1"><input class=toggle type=checkbox></div></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),kt=m('<button><span></span><div class="badge badge-sm">'),zt=m("<option>"),Gt=m("<tr>"),Kt=m("<th class=bg-base-200><div><div>"),Mt=m("<button class=cursor-pointer>"),Rt=m('<tr class="hover:!bg-primary hover:text-primary-content">'),Lt=m("<td class=py-2><div>"),At=m("<button><div></div><div></div><div>(<!>)");var H=function(r){return r[r.activeConnections=0]="activeConnections",r[r.closedConnections=1]="closedConnections",r}(H||{});const _e=(r,g,a,C)=>{const $=dt(r.getValue(g),a);return C({itemRank:$}),$.passed},Ut=()=>{let r,g;const[a]=Y(),[C,$]=O(H.activeConnections),{activeConnections:F,closedConnections:_,paused:o,setPaused:c}=ht(),[p,f]=O(""),[x,S]=ge(O(!0),{name:"directFilter",storage:localStorage}),[k,h]=O(),w=[{header:()=>a("details"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:d.Details,cell:({row:e})=>(()=>{const i=Ce();return n(i,t(D,{class:"btn-circle btn-xs",onClick:()=>{h(e.original.id),g==null||g.showModal()},get icon(){return t(We,{size:"16"})}})),i})()},{header:()=>a("close"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:d.Close,cell:({row:e})=>(()=>{const i=Ce();return n(i,t(D,{class:"btn-circle btn-xs",onClick:()=>be(e.original.id),get icon(){return t(se,{size:"16"})}})),i})()},{header:()=>a("ID"),enableGrouping:!1,accessorKey:d.ID,accessorFn:e=>e.id},{header:()=>a("type"),accessorKey:d.Type,accessorFn:e=>`${e.metadata.type}(${e.metadata.network})`},{header:()=>a("process"),accessorKey:d.Process,accessorFn:e=>e.metadata.process||e.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>a("host"),accessorKey:d.Host,accessorFn:e=>`${e.metadata.host?e.metadata.host:e.metadata.destinationIP}:${e.metadata.destinationPort}`},{header:()=>a("sniffHost"),accessorKey:d.SniffHost,accessorFn:e=>e.metadata.sniffHost||"-"},{header:()=>a("rules"),accessorKey:d.Rule,accessorFn:e=>e.rulePayload?`${e.rule} :: ${e.rulePayload}`:e.rule},{header:()=>a("chains"),accessorKey:d.Chains,accessorFn:e=>e.chains.slice().reverse().join(" :: ")},{header:()=>a("connectTime"),enableGrouping:!1,accessorKey:d.ConnectTime,accessorFn:e=>bt(e.start),sortingFn:(e,i)=>me(e.original.start).valueOf()-me(i.original.start).valueOf()},{header:()=>a("dlSpeed"),enableGrouping:!1,accessorKey:d.DlSpeed,accessorFn:e=>`${W(e.downloadSpeed,{units:"iec"})}/s`,sortingFn:(e,i)=>e.original.downloadSpeed-i.original.downloadSpeed},{header:()=>a("ulSpeed"),enableGrouping:!1,accessorKey:d.ULSpeed,accessorFn:e=>`${W(e.uploadSpeed,{units:"iec"})}/s`,sortingFn:(e,i)=>e.original.uploadSpeed-i.original.uploadSpeed},{header:()=>a("dl"),enableGrouping:!1,accessorKey:d.Download,accessorFn:e=>W(e.download,{units:"iec"}),sortingFn:(e,i)=>e.original.download-i.original.download},{header:()=>a("ul"),enableGrouping:!1,accessorKey:d.Upload,accessorFn:e=>W(e.upload,{units:"iec"}),sortingFn:(e,i)=>e.original.upload-i.original.upload},{header:()=>a("sourceIP"),accessorKey:d.SourceIP,accessorFn:e=>{const i=B().find(U=>U.sourceIP===e.metadata.sourceIP);return i?i.tagName:e.metadata.sourceIP}},{header:()=>a("sourcePort"),accessorKey:d.SourcePort,accessorFn:e=>e.metadata.sourcePort},{header:()=>a("destination"),accessorKey:d.Destination,accessorFn:e=>e.metadata.remoteDestination||e.metadata.destinationIP||e.metadata.host},{header:()=>a("inboundUser"),accessorKey:d.InboundUser,accessorFn:e=>e.metadata.inboundUser||e.metadata.inboundName||e.metadata.inboundPort}],[v,P]=O([]),[z,L]=ge(O([{id:d.ConnectTime,desc:!0}]),{name:"connectionsTableSorting",storage:localStorage}),G=rt({filterFns:{fuzzy:_e},state:{get columnOrder(){return $e()},get grouping(){return v()},get sorting(){return z()},get columnVisibility(){return ve()},get globalFilter(){return p()}},get data(){const e=C()===H.activeConnections?F():_();return x()?e.filter(i=>!(i.chains.includes("Direct")||i.chains.includes("DNS"))):e},sortDescFirst:!0,enableHiding:!0,columns:w,onGlobalFilterChange:f,globalFilterFn:_e,onGroupingChange:P,onSortingChange:L,getFilteredRowModel:at(),getSortedRowModel:lt(),getExpandedRowModel:ot(),getGroupedRowModel:it(),getCoreRowModel:ct()}),V=G.getFlatHeaders().find(({id:e})=>e===d.SourceIP),[J,De]=O("");Ze(Ye(J,()=>{const e=B().find(i=>i.sourceIP===J());V==null||V.column.setFilterValue(e?e.tagName:J())}));const Pe=E(()=>[{type:H.activeConnections,name:a("active"),count:F().length},{type:H.closedConnections,name:a("closed"),count:_().length}]);return(()=>{const e=Ot(),i=e.firstChild,U=i.firstChild,le=U.firstChild,Q=le.nextSibling,Te=Q.firstChild,q=U.nextSibling,X=q.firstChild,oe=X.nextSibling,Ne=i.nextSibling,ie=Ne.firstChild,ce=ie.firstChild,Ee=ce.nextSibling;return n(le,t(re,{get each(){return Pe()},children:s=>(()=>{const u=kt(),l=u.firstChild,T=l.nextSibling;return u.$$click=()=>$(s().type),n(l,()=>s().name),n(T,()=>s().count),y(()=>A(u,j(C()===s().type&&"tab-active","tab-sm tab gap-2"))),u})()})),Q.addEventListener("change",s=>De(s.target.value)),n(Te,()=>a("all")),n(Q,t(re,{get each(){return Ie.uniq(ae().map(({metadata:{sourceIP:s}})=>{const u=B().find(l=>l.sourceIP===s);return u?u.tagName:s})).sort()},children:s=>(()=>{const u=zt();return n(u,s),y(()=>u.value=s()),u})()}),null),X.$$input=s=>f(s.target.value),oe.addEventListener("change",s=>S(s.target.checked)),n(q,t(D,{class:"btn-circle btn-sm",onClick:()=>c(s=>!s),get icon(){return E(()=>!!o())()?t(Je,{}):t(Qe,{})}}),null),n(q,t(D,{class:"btn-circle btn-sm",onClick:()=>{G.getState().globalFilter?G.getFilteredRowModel().rows.forEach(({original:s})=>{be(s.id)}):$t()},get icon(){return t(se,{})}}),null),n(q,t(D,{class:"btn-circle btn-sm",onClick:()=>r==null?void 0:r.showModal(),get icon(){return t(Xe,{})}}),null),n(ce,t(R,{get each(){return G.getHeaderGroups()},children:s=>(()=>{const u=Gt();return n(u,t(R,{get each(){return s.headers},children:l=>(()=>{const T=Kt(),K=T.firstChild,N=K.firstChild;return n(K,(()=>{const b=E(()=>!!l.column.getCanGroup());return()=>b()?(()=>{const I=Mt();return te(I,"click",l.column.getToggleGroupingHandler(),!0),n(I,(()=>{const M=E(()=>!!l.column.getIsGrouped());return()=>M()?t(fe,{size:18}):t(he,{size:18})})()),I})():null})(),N),te(N,"click",l.column.getToggleSortingHandler(),!0),n(N,()=>Z(l.column.columnDef.header,l.getContext())),n(K,()=>({asc:t(et,{}),desc:t(tt,{})})[l.column.getIsSorted()]??null,null),y(b=>{const I=j("flex items-center gap-2"),M=j(l.column.getCanSort()&&"cursor-pointer select-none","flex-1");return I!==b._v$3&&A(K,b._v$3=I),M!==b._v$4&&A(N,b._v$4=M),b},{_v$3:void 0,_v$4:void 0}),T})()})),u})()})),n(Ee,t(R,{get each(){return G.getRowModel().rows},children:s=>(()=>{const u=Rt();return n(u,t(R,{get each(){return s.getVisibleCells()},children:l=>(()=>{const T=Lt(),K=T.firstChild;return T.$$contextmenu=N=>{N.preventDefault();const b=l.renderValue();b&&Et(b).catch(()=>{})},n(K,(()=>{const N=E(()=>!!l.getIsGrouped());return()=>N()?(()=>{const b=At(),I=b.firstChild,M=I.nextSibling,de=M.nextSibling,Oe=de.firstChild,ue=Oe.nextSibling;return ue.nextSibling,te(b,"click",s.getToggleExpandedHandler(),!0),n(I,(()=>{const ke=E(()=>!!s.getIsExpanded());return()=>ke()?t(fe,{size:18}):t(he,{size:18})})()),n(M,()=>Z(l.column.columnDef.cell,l.getContext())),n(de,()=>s.subRows.length,ue),y(()=>A(b,j(s.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),b})():(()=>{const b=E(()=>!!l.getIsAggregated());return()=>b()?Z(l.column.columnDef.aggregatedCell??l.column.columnDef.cell,l.getContext()):(()=>{const I=E(()=>!!l.getIsPlaceholder());return()=>I()?null:Z(l.column.columnDef.cell,l.getContext())})()})()})()),y(()=>A(K,j(l.column.id===d.Rule&&"max-w-sm truncate"))),T})()})),u})()})),n(e,t(Pt,{ref:s=>r=s,get order(){return $e()},get visible(){return ve()},onOrderChange:s=>vt(s),onVisibleChange:s=>Ct({...s})}),null),n(e,t(Nt,{ref:s=>g=s,get selectedConnectionID(){return k()}}),null),y(s=>{const u=a("search"),l=j(_t(Fe()),"table table-zebra relative rounded-none");return u!==s._v$&&nt(X,"placeholder",s._v$=u),l!==s._v$2&&A(ie,s._v$2=l),s},{_v$:void 0,_v$2:void 0}),y(()=>oe.checked=x()),e})()};st(["input","click","contextmenu"]);export{Ut as default};