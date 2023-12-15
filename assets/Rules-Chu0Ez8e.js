import{k as U,m as ae,ar as Oe,a4 as Q,a6 as Te,as as Ae,ax as Me,ay as $e,A as ce,i as p,c as $,b as w,g as _e,t as ee,F as ze,aw as de,S as Y,N as te,D as ne,d as V,e as we}from"./vendor-K_-04A7A.js";import{a9 as ke,aa as Re,ab as fe,u as Pe,ac as Ne,B as ve}from"./index-56y5dDCp.js";import{f as Ue}from"./global-LbJd8TF1.js";const Ve=()=>{const[i,r]=U([]),[e,t]=U([]),n=async()=>{const[{rules:l},{providers:o}]=await Promise.all([ke(),Re()]);r(Object.values(l)),t(Object.values(o))};return{rules:i,ruleProviders:e,updateRules:n,updateAllRuleProvider:async()=>{await Promise.all(e().map(l=>fe(l.name))),await n()},updateRuleProviderByName:async l=>{await fe(l),await n()}}};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},X.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(i,r,e){var t,n=(t=e.initialDeps)!=null?t:[],a;return function(){var s;e.key&&e.debug!=null&&e.debug()&&(s=Date.now());var l=i(),o=l.length!==n.length||l.some(function(m,c){return n[c]!==m});if(!o)return a;n=l;var u;if(e.key&&e.debug!=null&&e.debug()&&(u=Date.now()),a=r.apply(void 0,l),e.key&&e.debug!=null&&e.debug()){var f=Math.round((Date.now()-s)*100)/100,d=Math.round((Date.now()-u)*100)/100,h=d/16,v=function(c,x){for(c=String(c);c.length<x;)c=" "+c;return c};console.info("%c⏱ "+v(d,5)+" /"+v(f,5)+" ms",`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(`+Math.max(0,Math.min(120-120*h,120))+"deg 100% 31%);",e==null?void 0:e.key)}return e==null||e.onChange==null||e.onChange(a),a}}function re(i,r){if(i===void 0)throw new Error("Unexpected undefined"+(r?": "+r:""));return i}var De=function(r,e){return Math.abs(r-e)<1};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fe=function(r){return r},Be=function(r){for(var e=Math.max(r.startIndex-r.overscan,0),t=Math.min(r.endIndex+r.overscan,r.count-1),n=[],a=e;a<=t;a++)n.push(a);return n},je=function(r,e){var t=r.scrollElement;if(t){var n=function(l){var o=l.width,u=l.height;e({width:Math.round(o),height:Math.round(u)})};n(t.getBoundingClientRect());var a=new ResizeObserver(function(s){var l=s[0];if(l!=null&&l.borderBoxSize){var o=l.borderBoxSize[0];if(o){n({width:o.inlineSize,height:o.blockSize});return}}n(t.getBoundingClientRect())});return a.observe(t,{box:"border-box"}),function(){a.unobserve(t)}}},He=function(r,e){var t=r.scrollElement;if(t){var n=function(){e(t[r.options.horizontal?"scrollLeft":"scrollTop"])};return n(),t.addEventListener("scroll",n,{passive:!0}),function(){t.removeEventListener("scroll",n)}}},Ke=function(r,e,t){if(e!=null&&e.borderBoxSize){var n=e.borderBoxSize[0];if(n){var a=Math.round(n[t.options.horizontal?"inlineSize":"blockSize"]);return a}}return Math.round(r.getBoundingClientRect()[t.options.horizontal?"width":"height"])},We=function(r,e,t){var n,a,s=e.adjustments,l=s===void 0?0:s,o=e.behavior,u=r+l;(n=t.scrollElement)==null||n.scrollTo==null||n.scrollTo((a={},a[t.options.horizontal?"left":"top"]=u,a.behavior=o,a))},Le=function(r){var e=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=function(){var t=null,n=function(){return t||(typeof ResizeObserver<"u"?t=new ResizeObserver(function(s){s.forEach(function(l){e._measureElement(l.target,l)})}):null)};return{disconnect:function(){var s;return(s=n())==null?void 0:s.disconnect()},observe:function(s){var l;return(l=n())==null?void 0:l.observe(s,{box:"border-box"})},unobserve:function(s){var l;return(l=n())==null?void 0:l.unobserve(s)}}}(),this.range=null,this.setOptions=function(t){Object.entries(t).forEach(function(n){var a=n[0],s=n[1];typeof s>"u"&&delete t[a]}),e.options=X({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Fe,rangeExtractor:Be,onChange:function(){},measureElement:Ke,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},t)},this.notify=function(t){e.options.onChange==null||e.options.onChange(e,t)},this.maybeNotify=N(function(){return e.calculateRange(),[e.isScrolling,e.range?e.range.startIndex:null,e.range?e.range.endIndex:null]},function(t){e.notify(t)},{key:!1,debug:function(){return e.options.debug},initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=function(){e.unsubs.filter(Boolean).forEach(function(t){return t()}),e.unsubs=[],e.scrollElement=null},this._didMount=function(){return e.measureElementCache.forEach(e.observer.observe),function(){e.observer.disconnect(),e.cleanup()}},this._willUpdate=function(){var t=e.options.getScrollElement();e.scrollElement!==t&&(e.cleanup(),e.scrollElement=t,e._scrollToOffset(e.scrollOffset,{adjustments:void 0,behavior:void 0}),e.unsubs.push(e.options.observeElementRect(e,function(n){e.scrollRect=n,e.maybeNotify()})),e.unsubs.push(e.options.observeElementOffset(e,function(n){e.scrollAdjustments=0,e.scrollOffset!==n&&(e.isScrollingTimeoutId!==null&&(clearTimeout(e.isScrollingTimeoutId),e.isScrollingTimeoutId=null),e.isScrolling=!0,e.scrollDirection=e.scrollOffset<n?"forward":"backward",e.scrollOffset=n,e.maybeNotify(),e.isScrollingTimeoutId=setTimeout(function(){e.isScrollingTimeoutId=null,e.isScrolling=!1,e.scrollDirection=null,e.maybeNotify()},e.options.scrollingDelay))})))},this.getSize=function(){return e.scrollRect[e.options.horizontal?"width":"height"]},this.memoOptions=N(function(){return[e.options.count,e.options.paddingStart,e.options.scrollMargin,e.options.getItemKey]},function(t,n,a,s){return e.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:n,scrollMargin:a,getItemKey:s}},{key:!1}),this.getFurthestMeasurement=function(t,n){for(var a=new Map,s=new Map,l=n-1;l>=0;l--){var o=t[l];if(!a.has(o.lane)){var u=s.get(o.lane);if(u==null||o.end>u.end?s.set(o.lane,o):o.end<u.end&&a.set(o.lane,!0),a.size===e.options.lanes)break}}return s.size===e.options.lanes?Array.from(s.values()).sort(function(f,d){return f.end-d.end})[0]:void 0},this.getMeasurements=N(function(){return[e.memoOptions(),e.itemSizeCache]},function(t,n){var a=t.count,s=t.paddingStart,l=t.scrollMargin,o=t.getItemKey,u=e.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,e.pendingMeasuredCacheIndexes):0;e.pendingMeasuredCacheIndexes=[];for(var f=e.measurementsCache.slice(0,u),d=u;d<a;d++){var h=o(d),v=e.options.lanes===1?f[d-1]:e.getFurthestMeasurement(f,d),m=v?v.end:s+l,c=n.get(h),x=typeof c=="number"?c:e.options.estimateSize(d),C=m+x,T=v?v.lane:d%e.options.lanes;f[d]={index:d,start:m,size:x,end:C,key:h,lane:T}}return e.measurementsCache=f,f},{key:!1,debug:function(){return e.options.debug}}),this.calculateRange=N(function(){return[e.getMeasurements(),e.getSize(),e.scrollOffset]},function(t,n,a){return e.range=t.length>0&&n>0?Ye({measurements:t,outerSize:n,scrollOffset:a}):null},{key:!1,debug:function(){return e.options.debug}}),this.getIndexes=N(function(){return[e.options.rangeExtractor,e.calculateRange(),e.options.overscan,e.options.count]},function(t,n,a,s){return n===null?[]:t(X({},n,{overscan:a,count:s}))},{key:!1,debug:function(){return e.options.debug}}),this.indexFromElement=function(t){var n=e.options.indexAttribute,a=t.getAttribute(n);return a?parseInt(a,10):(console.warn("Missing attribute name '"+n+"={index}' on measured element."),-1)},this._measureElement=function(t,n){var a=e.measurementsCache[e.indexFromElement(t)];if(!a||!t.isConnected){e.measureElementCache.forEach(function(o,u){o===t&&(e.observer.unobserve(t),e.measureElementCache.delete(u))});return}var s=e.measureElementCache.get(a.key);s!==t&&(s&&e.observer.unobserve(s),e.observer.observe(t),e.measureElementCache.set(a.key,t));var l=e.options.measureElement(t,n,e);e.resizeItem(a,l)},this.resizeItem=function(t,n){var a,s=(a=e.itemSizeCache.get(t.key))!=null?a:t.size,l=n-s;l!==0&&(t.start<e.scrollOffset&&e._scrollToOffset(e.scrollOffset,{adjustments:e.scrollAdjustments+=l,behavior:void 0}),e.pendingMeasuredCacheIndexes.push(t.index),e.itemSizeCache=new Map(e.itemSizeCache.set(t.key,n)),e.notify(!1))},this.measureElement=function(t){t&&e._measureElement(t,void 0)},this.getVirtualItems=N(function(){return[e.getIndexes(),e.getMeasurements()]},function(t,n){for(var a=[],s=0,l=t.length;s<l;s++){var o=t[s],u=n[o];a.push(u)}return a},{key:!1,debug:function(){return e.options.debug}}),this.getVirtualItemForOffset=function(t){var n=e.getMeasurements();return re(n[ye(0,n.length-1,function(a){return re(n[a]).start},t)])},this.getOffsetForAlignment=function(t,n){var a=e.getSize();n==="auto"&&(t<=e.scrollOffset?n="start":t>=e.scrollOffset+a?n="end":n="start"),n==="start"?t=t:n==="end"?t=t-a:n==="center"&&(t=t-a/2);var s=e.options.horizontal?"scrollWidth":"scrollHeight",l=e.scrollElement?"document"in e.scrollElement?e.scrollElement.document.documentElement[s]:e.scrollElement[s]:0,o=l-e.getSize();return Math.max(Math.min(o,t),0)},this.getOffsetForIndex=function(t,n){n===void 0&&(n="auto"),t=Math.max(0,Math.min(t,e.options.count-1));var a=re(e.getMeasurements()[t]);if(n==="auto")if(a.end>=e.scrollOffset+e.getSize()-e.options.scrollPaddingEnd)n="end";else if(a.start<=e.scrollOffset+e.options.scrollPaddingStart)n="start";else return[e.scrollOffset,n];var s=n==="end"?a.end+e.options.scrollPaddingEnd:a.start-e.options.scrollPaddingStart;return[e.getOffsetForAlignment(s,n),n]},this.isDynamicMode=function(){return e.measureElementCache.size>0},this.cancelScrollToIndex=function(){e.scrollToIndexTimeoutId!==null&&(clearTimeout(e.scrollToIndexTimeoutId),e.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(t,n){var a=n===void 0?{}:n,s=a.align,l=s===void 0?"start":s,o=a.behavior;e.cancelScrollToIndex(),o==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.getOffsetForAlignment(t,l),{adjustments:void 0,behavior:o})},this.scrollToIndex=function(t,n){var a=n===void 0?{}:n,s=a.align,l=s===void 0?"auto":s,o=a.behavior;t=Math.max(0,Math.min(t,e.options.count-1)),e.cancelScrollToIndex(),o==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var u=e.getOffsetForIndex(t,l),f=u[0],d=u[1];e._scrollToOffset(f,{adjustments:void 0,behavior:o}),o!=="smooth"&&e.isDynamicMode()&&(e.scrollToIndexTimeoutId=setTimeout(function(){e.scrollToIndexTimeoutId=null;var h=e.measureElementCache.has(e.options.getItemKey(t));if(h){var v=e.getOffsetForIndex(t,d),m=v[0];De(m,e.scrollOffset)||e.scrollToIndex(t,{align:d,behavior:o})}else e.scrollToIndex(t,{align:d,behavior:o})}))},this.scrollBy=function(t,n){var a=n===void 0?{}:n,s=a.behavior;e.cancelScrollToIndex(),s==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.scrollOffset+t,{adjustments:void 0,behavior:s})},this.getTotalSize=function(){var t;return(((t=e.getMeasurements()[e.options.count-1])==null?void 0:t.end)||e.options.paddingStart)-e.options.scrollMargin+e.options.paddingEnd},this._scrollToOffset=function(t,n){var a=n.adjustments,s=n.behavior;e.options.scrollToFn(t,{behavior:s,adjustments:a},e)},this.measure=function(){e.itemSizeCache=new Map,e.notify(!1)},this.setOptions(r),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(function(t){e.itemSizeCache.set(t.key,t.size)}),this.maybeNotify()},ye=function(r,e,t,n){for(;r<=e;){var a=(r+e)/2|0,s=t(a);if(s<n)r=a+1;else if(s>n)e=a-1;else return a}return r>0?r-1:0};function Ye(i){for(var r=i.measurements,e=i.outerSize,t=i.scrollOffset,n=r.length-1,a=function(u){return r[u].start},s=ye(0,n,a,t),l=s;l<n&&r[l].end<t+e;)l++;return{startIndex:s,endIndex:l}}/**
 * solid-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qe(i){var r=ae(i),e=new Le(r),t=Oe(e.getVirtualItems()),n=t[0],a=t[1],s=U(e.getTotalSize()),l=s[0],o=s[1],u={get:function(h,v){switch(v){case"getVirtualItems":return function(){return n};case"getTotalSize":return function(){return l()};default:return Reflect.get(h,v)}}},f=new Proxy(e,u);return f.setOptions(r),Q(function(){var d=f._didMount();f._willUpdate(),Te(d)}),Ae(function(){f.setOptions(ae(r,i,{onChange:function(h,v){h._willUpdate(),a(Me(h.getVirtualItems(),{key:"index"})),o(h.getTotalSize()),i.onChange==null||i.onChange(h,v)}})),f.measure()}),f}function he(i){return Qe(ae({observeElementRect:je,observeElementOffset:He,scrollToFn:We},i))}function G(){return G=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},G.apply(this,arguments)}var q={exports:{}},xe={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Ie=Object.keys(xe).join("|"),Xe=new RegExp(Ie,"g"),Ge=new RegExp(Ie,""),Ee=function(i){return i.replace(Xe,function(r){return xe[r]})},qe=function(i){return!!i.match(Ge)};q.exports=Ee;q.exports.has=qe;q.exports.remove=Ee;var Ze=q.exports;const Je=$e(Ze);var I={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};ie.rankings=I;var et=function(r,e){return String(r.rankedValue).localeCompare(String(e.rankedValue))};function ie(i,r,e){e===void 0&&(e={});var t=e,n=t.keys,a=t.threshold,s=a===void 0?I.MATCHES:a,l=t.baseSort,o=l===void 0?et:l,u=t.sorter,f=u===void 0?function(v){return v.sort(function(m,c){return at(m,c,o)})}:u,d=i.reduce(h,[]);return f(d).map(function(v){var m=v.item;return m});function h(v,m,c){var x=tt(m,n,r,e),C=x.rank,T=x.keyThreshold,_=T===void 0?s:T;return C>=_&&v.push(G({},x,{item:m,index:c})),v}}function tt(i,r,e,t){if(!r){var n=i;return{rankedValue:n,rank:me(n,e,t),keyIndex:-1,keyThreshold:t.threshold}}var a=lt(i,r);return a.reduce(function(s,l,o){var u=s.rank,f=s.rankedValue,d=s.keyIndex,h=s.keyThreshold,v=l.itemValue,m=l.attributes,c=me(v,e,t),x=f,C=m.minRanking,T=m.maxRanking,_=m.threshold;return c<C&&c>=I.MATCHES?c=C:c>T&&(c=T),c>u&&(u=c,d=o,h=_,x=v),{rankedValue:x,rank:u,keyIndex:d,keyThreshold:h}},{rankedValue:i,rank:I.NO_MATCH,keyIndex:-1,keyThreshold:t.threshold})}function me(i,r,e){return i=ge(i,e),r=ge(r,e),r.length>i.length?I.NO_MATCH:i===r?I.CASE_SENSITIVE_EQUAL:(i=i.toLowerCase(),r=r.toLowerCase(),i===r?I.EQUAL:i.startsWith(r)?I.STARTS_WITH:i.includes(" "+r)?I.WORD_STARTS_WITH:i.includes(r)?I.CONTAINS:r.length===1?I.NO_MATCH:nt(i).includes(r)?I.ACRONYM:rt(i,r))}function nt(i){var r="",e=i.split(" ");return e.forEach(function(t){var n=t.split("-");n.forEach(function(a){r+=a.substr(0,1)})}),r}function rt(i,r){var e=0,t=0;function n(h,v,m){for(var c=m,x=v.length;c<x;c++){var C=v[c];if(C===h)return e+=1,c+1}return-1}function a(h){var v=1/h,m=e/r.length,c=I.MATCHES+m*v;return c}var s=n(r[0],i,0);if(s<0)return I.NO_MATCH;t=s;for(var l=1,o=r.length;l<o;l++){var u=r[l];t=n(u,i,t);var f=t>-1;if(!f)return I.NO_MATCH}var d=t-s;return a(d)}function at(i,r,e){var t=-1,n=1,a=i.rank,s=i.keyIndex,l=r.rank,o=r.keyIndex,u=a===l;return u?s===o?e(i,r):s<o?t:n:a>l?t:n}function ge(i,r){var e=r.keepDiacritics;return i=""+i,e||(i=Je(i)),i}function it(i,r){typeof r=="object"&&(r=r.key);var e;if(typeof r=="function")e=r(i);else if(i==null)e=null;else if(Object.hasOwnProperty.call(i,r))e=i[r];else{if(r.includes("."))return st(r,i);e=null}return e==null?[]:Array.isArray(e)?e:[String(e)]}function st(i,r){for(var e=i.split("."),t=[r],n=0,a=e.length;n<a;n++){for(var s=e[n],l=[],o=0,u=t.length;o<u;o++){var f=t[o];if(f!=null)if(Object.hasOwnProperty.call(f,s)){var d=f[s];d!=null&&l.push(d)}else s==="*"&&(l=l.concat(f))}t=l}if(Array.isArray(t[0])){var h=[];return h.concat.apply(h,t)}return t}function lt(i,r){for(var e=[],t=0,n=r.length;t<n;t++)for(var a=r[t],s=ot(a),l=it(i,a),o=0,u=l.length;o<u;o++)e.push({itemValue:l[o],attributes:s});return e}var pe={maxRanking:1/0,minRanking:-1/0};function ot(i){return typeof i=="string"?pe:G({},pe,i)}const be=V("<div class=relative>"),ut=V('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div></div><input class="input input-bordered input-primary input-sm"><div class="flex-1 overflow-y-auto">'),ct=V('<button><span></span><div class="badge badge-sm">'),dt=V('<div class="badge badge-sm">'),ft=V('<div class="absolute inset-x-0 top-0 pb-2 last:pb-0"><div class="card card-bordered card-compact bg-base-200 p-4"><div class="flex items-center gap-2"><span class=break-all></span></div><div class="text-xs text-slate-500"> :: '),vt=V('<div class="absolute inset-x-0 top-0 pb-2 last:pb-0"><div class="card card-bordered card-compact bg-base-200 p-4"><div class="flex items-center gap-2 pr-8"><span class=break-all></span><div class="badge badge-sm"></div></div><div class="text-xs text-slate-500"> / <!> /<!> ');var k=function(i){return i.ruleProviders="ruleProviders",i.rules="rules",i}(k||{});const pt=()=>{const[i]=Pe(),{rules:r,ruleProviders:e,updateRules:t,updateAllRuleProvider:n,updateRuleProviderByName:a}=Ve();Q(t);const{map:s,setWithCallback:l}=Ne(),[o,u]=U(!1),f=(E,A)=>{E.stopPropagation(),l(A,()=>a(A))},d=async E=>{E.stopPropagation(),u(!0);try{await n()}catch{}u(!1)},[h,v]=U(k.rules),m=()=>[{type:k.rules,name:i("rules"),count:r().length},{type:k.ruleProviders,name:i("ruleProviders"),count:e().length}],[c,x]=U(""),C=ce(()=>c()?ie(r(),c(),{keys:["type","payload","type"]}):r()),T=ce(()=>c()?ie(e(),c(),{keys:["name","vehicleType","behavior"]}):e());let _;const se=({type:E,payload:A,proxy:D})=>`${E}-${A}-${D}`,H=he({get count(){return C().length},getItemKey:E=>se(C()[E]),getScrollElement:()=>_,estimateSize:()=>82,overscan:5}),Se=H.getVirtualItems(),le=({type:E,name:A,vehicleType:D,behavior:R})=>`${E}-${A}-${D}-${R}`,K=he({get count(){return T().length},getItemKey:E=>le(T()[E]),getScrollElement:()=>_,estimateSize:()=>82,overscan:5}),Ce=K.getVirtualItems();return(()=>{const E=ut(),A=E.firstChild,D=A.firstChild,R=A.nextSibling,Z=R.nextSibling;return p(D,$(ze,{get each(){return m()},children:g=>(()=>{const O=ct(),y=O.firstChild,b=y.nextSibling;return O.$$click=()=>v(g.type),p(y,()=>g.name),p(b,()=>g.count),w(()=>_e(O,ee(h()===g.type&&"tab-active","tab-sm tab gap-2 px-2"))),O})()})),p(A,$(Y,{get when(){return h()===k.ruleProviders},get children(){return $(ve,{class:"btn btn-circle btn-sm",get disabled(){return o()},onClick:g=>d(g),get icon(){return $(de,{get class(){return ee(o()&&"animate-spin text-success")}})}})}}),null),R.$$input=g=>x(g.currentTarget.value),te(g=>_=g,Z),p(Z,$(Y,{get when(){return h()===k.rules},get children(){const g=be();return p(g,()=>Se.map(O=>{const y=C().find(b=>se(b)===O.key);return(()=>{const b=ft(),W=b.firstChild,P=W.firstChild,L=P.firstChild,F=P.nextSibling,z=F.firstChild;return te(S=>Q(()=>H.measureElement(S)),b),p(L,()=>y.payload),p(P,$(Y,{get when(){return y.size!==-1},get children(){const S=dt();return p(S,()=>y.size),S}}),null),p(F,()=>y.type,z),p(F,()=>y.proxy,null),w(S=>{const B=O.index,j=`translateY(${O.start}px)`;return B!==S._v$&&ne(b,"data-index",S._v$=B),j!==S._v$2&&((S._v$2=j)!=null?b.style.setProperty("transform",j):b.style.removeProperty("transform")),S},{_v$:void 0,_v$2:void 0}),b})()})),w(()=>`${H.getTotalSize()}px`!=null?g.style.setProperty("height",`${H.getTotalSize()}px`):g.style.removeProperty("height")),g}}),null),p(Z,$(Y,{get when(){return h()===k.ruleProviders},get children(){const g=be();return p(g,()=>Ce.map(O=>{const y=e().find(b=>le(b)===O.key);return(()=>{const b=vt(),W=b.firstChild,P=W.firstChild,L=P.firstChild,F=L.nextSibling,z=P.nextSibling,S=z.firstChild,B=S.nextSibling,j=B.nextSibling,oe=j.nextSibling;return oe.nextSibling,te(M=>Q(()=>K.measureElement(M)),b),p(L,()=>y.name),p(F,()=>y.ruleCount),p(z,()=>y.vehicleType,S),p(z,()=>y.behavior,B),p(z,()=>i("updated"),oe),p(z,()=>Ue(y.updatedAt),null),p(W,$(ve,{class:"btn-circle btn-sm absolute right-2 top-2 mr-2 h-4",get disabled(){return s()[y.name]},onClick:M=>f(M,y.name),get icon(){return $(de,{get class(){return ee(s()[y.name]&&"animate-spin text-success")}})}}),null),w(M=>{const ue=O.index,J=`translateY(${O.start}px)`;return ue!==M._v$3&&ne(b,"data-index",M._v$3=ue),J!==M._v$4&&((M._v$4=J)!=null?b.style.setProperty("transform",J):b.style.removeProperty("transform")),M},{_v$3:void 0,_v$4:void 0}),b})()})),w(()=>`${K.getTotalSize()}px`!=null?g.style.setProperty("height",`${K.getTotalSize()}px`):g.style.removeProperty("height")),g}}),null),w(()=>ne(R,"placeholder",i("search"))),w(()=>R.value=c()),E})()};we(["input","click"]);export{pt as default};
