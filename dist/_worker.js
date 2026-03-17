var bt=Object.defineProperty;var $e=e=>{throw TypeError(e)};var xt=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f=(e,t,n)=>xt(e,typeof t!="symbol"?t+"":t,n),Fe=(e,t,n)=>t.has(e)||$e("Cannot "+n);var i=(e,t,n)=>(Fe(e,t,"read from private field"),n?n.call(e):t.get(e)),g=(e,t,n)=>t.has(e)?$e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),u=(e,t,n,s)=>(Fe(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),v=(e,t,n)=>(Fe(e,t,"access private method"),n);var Le=(e,t,n,s)=>({set _(r){u(e,t,r,n)},get _(){return i(e,t,s)}});var Ue=(e,t,n)=>(s,r)=>{let a=-1;return o(0);async function o(d){if(d<=a)throw new Error("next() called multiple times");a=d;let c,l=!1,p;if(e[d]?(p=e[d][0][0],s.req.routeIndex=d):p=d===e.length&&r||void 0,p)try{c=await p(s,()=>o(d+1))}catch(h){if(h instanceof Error&&t)s.error=h,c=await t(h,s),l=!0;else throw h}else s.finalized===!1&&n&&(c=await n(s));return c&&(s.finalized===!1||l)&&(s.res=c),s}},yt=Symbol(),wt=async(e,t=Object.create(null))=>{const{all:n=!1,dot:s=!1}=t,a=(e instanceof st?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?St(e,{all:n,dot:s}):{}};async function St(e,t){const n=await e.formData();return n?Et(n,t):{}}function Et(e,t){const n=Object.create(null);return e.forEach((s,r)=>{t.all||r.endsWith("[]")?jt(n,r,s):n[r]=s}),t.dot&&Object.entries(n).forEach(([s,r])=>{s.includes(".")&&(Rt(n,s,r),delete n[s])}),n}var jt=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:t.endsWith("[]")?e[t]=[n]:e[t]=n},Rt=(e,t,n)=>{let s=e;const r=t.split(".");r.forEach((a,o)=>{o===r.length-1?s[a]=n:((!s[a]||typeof s[a]!="object"||Array.isArray(s[a])||s[a]instanceof File)&&(s[a]=Object.create(null)),s=s[a])})},Xe=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},kt=e=>{const{groups:t,path:n}=Pt(e),s=Xe(n);return Ot(s,t)},Pt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,s)=>{const r=`@${s}`;return t.push([r,n]),r}),{groups:t,path:e}},Ot=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[s]=t[n];for(let r=e.length-1;r>=0;r--)if(e[r].includes(s)){e[r]=e[r].replace(s,t[n][1]);break}}return e},Re={},Tt=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const s=`${e}#${t}`;return Re[s]||(n[2]?Re[s]=t&&t[0]!==":"&&t[0]!=="*"?[s,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:Re[s]=[e,n[1],!0]),Re[s]}return null},He=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},Ct=e=>He(e,decodeURI),Ze=e=>{const t=e.url,n=t.indexOf("/",t.indexOf(":")+4);let s=n;for(;s<t.length;s++){const r=t.charCodeAt(s);if(r===37){const a=t.indexOf("?",s),o=t.indexOf("#",s),d=a===-1?o===-1?void 0:o:o===-1?a:Math.min(a,o),c=t.slice(n,d);return Ct(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(r===63||r===35)break}return t.slice(n,s)},Dt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ne=(e,t,...n)=>(n.length&&(t=ne(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let s="";return t.forEach(r=>{if(r!==""&&!/\:/.test(r))s+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){n.length===0&&s===""?n.push("/"):n.push(s);const a=r.replace("?","");s+="/"+a,n.push(s)}else s+="/"+r}),n.filter((r,a,o)=>o.indexOf(r)===a)},Ie=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?He(e,nt):e):e,tt=(e,t,n)=>{let s;if(!n&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const d=e.charCodeAt(o+t.length+1);if(d===61){const c=o+t.length+2,l=e.indexOf("&",c);return Ie(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";o=e.indexOf(`&${t}`,o+1)}if(s=/[%+]/.test(e),!s)return}const r={};s??(s=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const o=e.indexOf("&",a+1);let d=e.indexOf("=",a);d>o&&o!==-1&&(d=-1);let c=e.slice(a+1,d===-1?o===-1?void 0:o:d);if(s&&(c=Ie(c)),a=o,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,o===-1?void 0:o),s&&(l=Ie(l))),n?(r[c]&&Array.isArray(r[c])||(r[c]=[]),r[c].push(l)):r[c]??(r[c]=l)}return t?r[t]:r},At=tt,Ft=(e,t)=>tt(e,t,!0),nt=decodeURIComponent,qe=e=>He(e,nt),ae,P,M,rt,at,Ne,U,Je,st=(Je=class{constructor(e,t="/",n=[[]]){g(this,M);f(this,"raw");g(this,ae);g(this,P);f(this,"routeIndex",0);f(this,"path");f(this,"bodyCache",{});g(this,U,e=>{const{bodyCache:t,raw:n}=this,s=t[e];if(s)return s;const r=Object.keys(t)[0];return r?t[r].then(a=>(r==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,u(this,P,n),u(this,ae,{})}param(e){return e?v(this,M,rt).call(this,e):v(this,M,at).call(this)}query(e){return At(this.url,e)}queries(e){return Ft(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,s)=>{t[s]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await wt(this,e))}json(){return i(this,U).call(this,"text").then(e=>JSON.parse(e))}text(){return i(this,U).call(this,"text")}arrayBuffer(){return i(this,U).call(this,"arrayBuffer")}blob(){return i(this,U).call(this,"blob")}formData(){return i(this,U).call(this,"formData")}addValidatedData(e,t){i(this,ae)[e]=t}valid(e){return i(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return i(this,P)}get matchedRoutes(){return i(this,P)[0].map(([[,e]])=>e)}get routePath(){return i(this,P)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,P=new WeakMap,M=new WeakSet,rt=function(e){const t=i(this,P)[0][this.routeIndex][1][e],n=v(this,M,Ne).call(this,t);return n&&/\%/.test(n)?qe(n):n},at=function(){const e={},t=Object.keys(i(this,P)[0][this.routeIndex][1]);for(const n of t){const s=v(this,M,Ne).call(this,i(this,P)[0][this.routeIndex][1][n]);s!==void 0&&(e[n]=/\%/.test(s)?qe(s):s)}return e},Ne=function(e){return i(this,P)[1]?i(this,P)[1][e]:e},U=new WeakMap,Je),It={Stringify:1},it=async(e,t,n,s,r)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(r?r[0]+=e:r=[e],Promise.all(a.map(d=>d({phase:t,buffer:r,context:s}))).then(d=>Promise.all(d.filter(Boolean).map(c=>it(c,t,!1,s,r))).then(()=>r[0]))):Promise.resolve(e)},_t="text/plain; charset=UTF-8",_e=(e,t)=>({"Content-Type":e,...t}),me,be,I,ie,_,k,xe,oe,le,W,ye,we,q,se,Qe,Nt=(Qe=class{constructor(e,t){g(this,q);g(this,me);g(this,be);f(this,"env",{});g(this,I);f(this,"finalized",!1);f(this,"error");g(this,ie);g(this,_);g(this,k);g(this,xe);g(this,oe);g(this,le);g(this,W);g(this,ye);g(this,we);f(this,"render",(...e)=>(i(this,oe)??u(this,oe,t=>this.html(t)),i(this,oe).call(this,...e)));f(this,"setLayout",e=>u(this,xe,e));f(this,"getLayout",()=>i(this,xe));f(this,"setRenderer",e=>{u(this,oe,e)});f(this,"header",(e,t,n)=>{this.finalized&&u(this,k,new Response(i(this,k).body,i(this,k)));const s=i(this,k)?i(this,k).headers:i(this,W)??u(this,W,new Headers);t===void 0?s.delete(e):n!=null&&n.append?s.append(e,t):s.set(e,t)});f(this,"status",e=>{u(this,ie,e)});f(this,"set",(e,t)=>{i(this,I)??u(this,I,new Map),i(this,I).set(e,t)});f(this,"get",e=>i(this,I)?i(this,I).get(e):void 0);f(this,"newResponse",(...e)=>v(this,q,se).call(this,...e));f(this,"body",(e,t,n)=>v(this,q,se).call(this,e,t,n));f(this,"text",(e,t,n)=>!i(this,W)&&!i(this,ie)&&!t&&!n&&!this.finalized?new Response(e):v(this,q,se).call(this,e,t,_e(_t,n)));f(this,"json",(e,t,n)=>v(this,q,se).call(this,JSON.stringify(e),t,_e("application/json",n)));f(this,"html",(e,t,n)=>{const s=r=>v(this,q,se).call(this,r,t,_e("text/html; charset=UTF-8",n));return typeof e=="object"?it(e,It.Stringify,!1,{}).then(s):s(e)});f(this,"redirect",(e,t)=>{const n=String(e);return this.header("Location",/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)});f(this,"notFound",()=>(i(this,le)??u(this,le,()=>new Response),i(this,le).call(this,this)));u(this,me,e),t&&(u(this,_,t.executionCtx),this.env=t.env,u(this,le,t.notFoundHandler),u(this,we,t.path),u(this,ye,t.matchResult))}get req(){return i(this,be)??u(this,be,new st(i(this,me),i(this,we),i(this,ye))),i(this,be)}get event(){if(i(this,_)&&"respondWith"in i(this,_))return i(this,_);throw Error("This context has no FetchEvent")}get executionCtx(){if(i(this,_))return i(this,_);throw Error("This context has no ExecutionContext")}get res(){return i(this,k)||u(this,k,new Response(null,{headers:i(this,W)??u(this,W,new Headers)}))}set res(e){if(i(this,k)&&e){e=new Response(e.body,e);for(const[t,n]of i(this,k).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const s=i(this,k).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of s)e.headers.append("set-cookie",r)}else e.headers.set(t,n)}u(this,k,e),this.finalized=!0}get var(){return i(this,I)?Object.fromEntries(i(this,I)):{}}},me=new WeakMap,be=new WeakMap,I=new WeakMap,ie=new WeakMap,_=new WeakMap,k=new WeakMap,xe=new WeakMap,oe=new WeakMap,le=new WeakMap,W=new WeakMap,ye=new WeakMap,we=new WeakMap,q=new WeakSet,se=function(e,t,n){const s=i(this,k)?new Headers(i(this,k).headers):i(this,W)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,d]of a)o.toLowerCase()==="set-cookie"?s.append(o,d):s.set(o,d)}if(n)for(const[a,o]of Object.entries(n))if(typeof o=="string")s.set(a,o);else{s.delete(a);for(const d of o)s.append(a,d)}const r=typeof t=="number"?t:(t==null?void 0:t.status)??i(this,ie);return new Response(e,{status:r,headers:s})},Qe),y="ALL",Ht="all",Mt=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",lt=class extends Error{},$t="__COMPOSED_HANDLER",Lt=e=>e.text("404 Not Found",404),ze=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},O,w,dt,T,Q,ke,Pe,de,Ut=(de=class{constructor(t={}){g(this,w);f(this,"get");f(this,"post");f(this,"put");f(this,"delete");f(this,"options");f(this,"patch");f(this,"all");f(this,"on");f(this,"use");f(this,"router");f(this,"getPath");f(this,"_basePath","/");g(this,O,"/");f(this,"routes",[]);g(this,T,Lt);f(this,"errorHandler",ze);f(this,"onError",t=>(this.errorHandler=t,this));f(this,"notFound",t=>(u(this,T,t),this));f(this,"fetch",(t,...n)=>v(this,w,Pe).call(this,t,n[1],n[0],t.method));f(this,"request",(t,n,s,r)=>t instanceof Request?this.fetch(n?new Request(t,n):t,s,r):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ne("/",t)}`,n),s,r)));f(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,w,Pe).call(this,t.request,t,void 0,t.request.method))})});[...Mt,Ht].forEach(a=>{this[a]=(o,...d)=>(typeof o=="string"?u(this,O,o):v(this,w,Q).call(this,a,i(this,O),o),d.forEach(c=>{v(this,w,Q).call(this,a,i(this,O),c)}),this)}),this.on=(a,o,...d)=>{for(const c of[o].flat()){u(this,O,c);for(const l of[a].flat())d.map(p=>{v(this,w,Q).call(this,l.toUpperCase(),i(this,O),p)})}return this},this.use=(a,...o)=>(typeof a=="string"?u(this,O,a):(u(this,O,"*"),o.unshift(a)),o.forEach(d=>{v(this,w,Q).call(this,y,i(this,O),d)}),this);const{strict:s,...r}=t;Object.assign(this,r),this.getPath=s??!0?t.getPath??Ze:Dt}route(t,n){const s=this.basePath(t);return n.routes.map(r=>{var o;let a;n.errorHandler===ze?a=r.handler:(a=async(d,c)=>(await Ue([],n.errorHandler)(d,()=>r.handler(d,c))).res,a[$t]=r.handler),v(o=s,w,Q).call(o,r.method,r.path,a)}),this}basePath(t){const n=v(this,w,dt).call(this);return n._basePath=ne(this._basePath,t),n}mount(t,n,s){let r,a;s&&(typeof s=="function"?a=s:(a=s.optionHandler,s.replaceRequest===!1?r=c=>c:r=s.replaceRequest));const o=a?c=>{const l=a(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};r||(r=(()=>{const c=ne(this._basePath,t),l=c==="/"?0:c.length;return p=>{const h=new URL(p.url);return h.pathname=h.pathname.slice(l)||"/",new Request(h,p)}})());const d=async(c,l)=>{const p=await n(r(c.req.raw),...o(c));if(p)return p;await l()};return v(this,w,Q).call(this,y,ne(t,"*"),d),this}},O=new WeakMap,w=new WeakSet,dt=function(){const t=new de({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,u(t,T,i(this,T)),t.routes=this.routes,t},T=new WeakMap,Q=function(t,n,s){t=t.toUpperCase(),n=ne(this._basePath,n);const r={basePath:this._basePath,path:n,method:t,handler:s};this.router.add(t,n,[s,r]),this.routes.push(r)},ke=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},Pe=function(t,n,s,r){if(r==="HEAD")return(async()=>new Response(null,await v(this,w,Pe).call(this,t,n,s,"GET")))();const a=this.getPath(t,{env:s}),o=this.router.match(r,a),d=new Nt(t,{path:a,matchResult:o,env:s,executionCtx:n,notFoundHandler:i(this,T)});if(o[0].length===1){let l;try{l=o[0][0][0][0](d,async()=>{d.res=await i(this,T).call(this,d)})}catch(p){return v(this,w,ke).call(this,p,d)}return l instanceof Promise?l.then(p=>p||(d.finalized?d.res:i(this,T).call(this,d))).catch(p=>v(this,w,ke).call(this,p,d)):l??i(this,T).call(this,d)}const c=Ue(o[0],this.errorHandler,i(this,T));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return v(this,w,ke).call(this,l,d)}})()},de),ct=[];function qt(e,t){const n=this.buildAllMatchers(),s=((r,a)=>{const o=n[r]||n[y],d=o[2][a];if(d)return d;const c=a.match(o[0]);if(!c)return[[],ct];const l=c.indexOf("",1);return[o[1][l],c]});return this.match=s,s(e,t)}var Te="[^/]+",ge=".*",ve="(?:|/.*)",re=Symbol(),zt=new Set(".\\+*[^]$()");function Bt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ge||e===ve?1:t===ge||t===ve?-1:e===Te?1:t===Te?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var V,Y,C,ee,Gt=(ee=class{constructor(){g(this,V);g(this,Y);g(this,C,Object.create(null))}insert(t,n,s,r,a){if(t.length===0){if(i(this,V)!==void 0)throw re;if(a)return;u(this,V,n);return}const[o,...d]=t,c=o==="*"?d.length===0?["","",ge]:["","",Te]:o==="/*"?["","",ve]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const p=c[1];let h=c[2]||Te;if(p&&c[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw re;if(l=i(this,C)[h],!l){if(Object.keys(i(this,C)).some(b=>b!==ge&&b!==ve))throw re;if(a)return;l=i(this,C)[h]=new ee,p!==""&&u(l,Y,r.varIndex++)}!a&&p!==""&&s.push([p,i(l,Y)])}else if(l=i(this,C)[o],!l){if(Object.keys(i(this,C)).some(p=>p.length>1&&p!==ge&&p!==ve))throw re;if(a)return;l=i(this,C)[o]=new ee}l.insert(d,n,s,r,a)}buildRegExpStr(){const n=Object.keys(i(this,C)).sort(Bt).map(s=>{const r=i(this,C)[s];return(typeof i(r,Y)=="number"?`(${s})@${i(r,Y)}`:zt.has(s)?`\\${s}`:s)+r.buildRegExpStr()});return typeof i(this,V)=="number"&&n.unshift(`#${i(this,V)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},V=new WeakMap,Y=new WeakMap,C=new WeakMap,ee),Ce,Se,Ke,Jt=(Ke=class{constructor(){g(this,Ce,{varIndex:0});g(this,Se,new Gt)}insert(e,t,n){const s=[],r=[];for(let o=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${o}`;return r[o]=[l,c],o++,d=!0,l}),!d)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=r.length-1;o>=0;o--){const[d]=r[o];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(d)!==-1){a[c]=a[c].replace(d,r[o][1]);break}}return i(this,Se).insert(a,t,s,i(this,Ce),n),s}buildRegExp(){let e=i(this,Se).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,a,o)=>a!==void 0?(n[++t]=Number(a),"$()"):(o!==void 0&&(s[Number(o)]=++t),"")),[new RegExp(`^${e}`),n,s]}},Ce=new WeakMap,Se=new WeakMap,Ke),Qt=[/^$/,[],Object.create(null)],Oe=Object.create(null);function pt(e){return Oe[e]??(Oe[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function Kt(){Oe=Object.create(null)}function Wt(e){var l;const t=new Jt,n=[];if(e.length===0)return Qt;const s=e.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,h],[b,x])=>p?1:b?-1:h.length-x.length),r=Object.create(null);for(let p=0,h=-1,b=s.length;p<b;p++){const[x,S,D]=s[p];x?r[S]=[D.map(([E])=>[E,Object.create(null)]),ct]:h++;let m;try{m=t.insert(S,h,x)}catch(E){throw E===re?new lt(S):E}x||(n[h]=D.map(([E,$])=>{const Ee=Object.create(null);for($-=1;$>=0;$--){const[je,A]=m[$];Ee[je]=A}return[E,Ee]}))}const[a,o,d]=t.buildRegExp();for(let p=0,h=n.length;p<h;p++)for(let b=0,x=n[p].length;b<x;b++){const S=(l=n[p][b])==null?void 0:l[1];if(!S)continue;const D=Object.keys(S);for(let m=0,E=D.length;m<E;m++)S[D[m]]=d[S[D[m]]]}const c=[];for(const p in o)c[p]=n[o[p]];return[a,c,r]}function te(e,t){if(e){for(const n of Object.keys(e).sort((s,r)=>r.length-s.length))if(pt(n).test(t))return[...e[n]]}}var z,B,De,ht,We,Vt=(We=class{constructor(){g(this,De);f(this,"name","RegExpRouter");g(this,z);g(this,B);f(this,"match",qt);u(this,z,{[y]:Object.create(null)}),u(this,B,{[y]:Object.create(null)})}add(e,t,n){var d;const s=i(this,z),r=i(this,B);if(!s||!r)throw new Error(ot);s[e]||[s,r].forEach(c=>{c[e]=Object.create(null),Object.keys(c[y]).forEach(l=>{c[e][l]=[...c[y][l]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=pt(t);e===y?Object.keys(s).forEach(l=>{var p;(p=s[l])[t]||(p[t]=te(s[l],t)||te(s[y],t)||[])}):(d=s[e])[t]||(d[t]=te(s[e],t)||te(s[y],t)||[]),Object.keys(s).forEach(l=>{(e===y||e===l)&&Object.keys(s[l]).forEach(p=>{c.test(p)&&s[l][p].push([n,a])})}),Object.keys(r).forEach(l=>{(e===y||e===l)&&Object.keys(r[l]).forEach(p=>c.test(p)&&r[l][p].push([n,a]))});return}const o=et(t)||[t];for(let c=0,l=o.length;c<l;c++){const p=o[c];Object.keys(r).forEach(h=>{var b;(e===y||e===h)&&((b=r[h])[p]||(b[p]=[...te(s[h],p)||te(s[y],p)||[]]),r[h][p].push([n,a-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(i(this,B)).concat(Object.keys(i(this,z))).forEach(t=>{e[t]||(e[t]=v(this,De,ht).call(this,t))}),u(this,z,u(this,B,void 0)),Kt(),e}},z=new WeakMap,B=new WeakMap,De=new WeakSet,ht=function(e){const t=[];let n=e===y;return[i(this,z),i(this,B)].forEach(s=>{const r=s[e]?Object.keys(s[e]).map(a=>[a,s[e][a]]):[];r.length!==0?(n||(n=!0),t.push(...r)):e!==y&&t.push(...Object.keys(s[y]).map(a=>[a,s[y][a]]))}),n?Wt(t):null},We),G,N,Ve,Yt=(Ve=class{constructor(e){f(this,"name","SmartRouter");g(this,G,[]);g(this,N,[]);u(this,G,e.routers)}add(e,t,n){if(!i(this,N))throw new Error(ot);i(this,N).push([e,t,n])}match(e,t){if(!i(this,N))throw new Error("Fatal error");const n=i(this,G),s=i(this,N),r=n.length;let a=0,o;for(;a<r;a++){const d=n[a];try{for(let c=0,l=s.length;c<l;c++)d.add(...s[c]);o=d.match(e,t)}catch(c){if(c instanceof lt)continue;throw c}this.match=d.match.bind(d),u(this,G,[d]),u(this,N,void 0);break}if(a===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(i(this,N)||i(this,G).length!==1)throw new Error("No active router has been determined yet.");return i(this,G)[0]}},G=new WeakMap,N=new WeakMap,Ve),fe=Object.create(null),J,R,X,ce,j,H,K,pe,Xt=(pe=class{constructor(t,n,s){g(this,H);g(this,J);g(this,R);g(this,X);g(this,ce,0);g(this,j,fe);if(u(this,R,s||Object.create(null)),u(this,J,[]),t&&n){const r=Object.create(null);r[t]={handler:n,possibleKeys:[],score:0},u(this,J,[r])}u(this,X,[])}insert(t,n,s){u(this,ce,++Le(this,ce)._);let r=this;const a=kt(n),o=[];for(let d=0,c=a.length;d<c;d++){const l=a[d],p=a[d+1],h=Tt(l,p),b=Array.isArray(h)?h[0]:l;if(b in i(r,R)){r=i(r,R)[b],h&&o.push(h[1]);continue}i(r,R)[b]=new pe,h&&(i(r,X).push(h),o.push(h[1])),r=i(r,R)[b]}return i(r,J).push({[t]:{handler:s,possibleKeys:o.filter((d,c,l)=>l.indexOf(d)===c),score:i(this,ce)}}),r}search(t,n){var c;const s=[];u(this,j,fe);let a=[this];const o=Xe(n),d=[];for(let l=0,p=o.length;l<p;l++){const h=o[l],b=l===p-1,x=[];for(let S=0,D=a.length;S<D;S++){const m=a[S],E=i(m,R)[h];E&&(u(E,j,i(m,j)),b?(i(E,R)["*"]&&s.push(...v(this,H,K).call(this,i(E,R)["*"],t,i(m,j))),s.push(...v(this,H,K).call(this,E,t,i(m,j)))):x.push(E));for(let $=0,Ee=i(m,X).length;$<Ee;$++){const je=i(m,X)[$],A=i(m,j)===fe?{}:{...i(m,j)};if(je==="*"){const L=i(m,R)["*"];L&&(s.push(...v(this,H,K).call(this,L,t,i(m,j))),u(L,j,A),x.push(L));continue}const[vt,Me,ue]=je;if(!h&&!(ue instanceof RegExp))continue;const F=i(m,R)[vt],mt=o.slice(l).join("/");if(ue instanceof RegExp){const L=ue.exec(mt);if(L){if(A[Me]=L[0],s.push(...v(this,H,K).call(this,F,t,i(m,j),A)),Object.keys(i(F,R)).length){u(F,j,A);const Ae=((c=L[0].match(/\//))==null?void 0:c.length)??0;(d[Ae]||(d[Ae]=[])).push(F)}continue}}(ue===!0||ue.test(h))&&(A[Me]=h,b?(s.push(...v(this,H,K).call(this,F,t,A,i(m,j))),i(F,R)["*"]&&s.push(...v(this,H,K).call(this,i(F,R)["*"],t,A,i(m,j)))):(u(F,j,A),x.push(F)))}}a=x.concat(d.shift()??[])}return s.length>1&&s.sort((l,p)=>l.score-p.score),[s.map(({handler:l,params:p})=>[l,p])]}},J=new WeakMap,R=new WeakMap,X=new WeakMap,ce=new WeakMap,j=new WeakMap,H=new WeakSet,K=function(t,n,s,r){const a=[];for(let o=0,d=i(t,J).length;o<d;o++){const c=i(t,J)[o],l=c[n]||c[y],p={};if(l!==void 0&&(l.params=Object.create(null),a.push(l),s!==fe||r&&r!==fe))for(let h=0,b=l.possibleKeys.length;h<b;h++){const x=l.possibleKeys[h],S=p[l.score];l.params[x]=r!=null&&r[x]&&!S?r[x]:s[x]??(r==null?void 0:r[x]),p[l.score]=!0}}return a},pe),Z,Ye,Zt=(Ye=class{constructor(){f(this,"name","TrieRouter");g(this,Z);u(this,Z,new Xt)}add(e,t,n){const s=et(t);if(s){for(let r=0,a=s.length;r<a;r++)i(this,Z).insert(e,s[r],n);return}i(this,Z).insert(e,t,n)}match(e,t){return i(this,Z).search(e,t)}},Z=new WeakMap,Ye),ut=class extends Ut{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Vt,new Zt]})}},en=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Be=(e,t=nn)=>{const n=/\.([a-zA-Z0-9]+?)$/,s=e.match(n);if(!s)return;let r=t[s[1]];return r&&r.startsWith("text")&&(r+="; charset=utf-8"),r},tn={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},nn=tn,sn=(...e)=>{let t=e.filter(r=>r!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const n=t.split("/"),s=[];for(const r of n)r===".."&&s.length>0&&s.at(-1)!==".."?s.pop():r!=="."&&s.push(r);return s.join("/")||"."},ft={br:".br",zstd:".zst",gzip:".gz"},rn=Object.keys(ft),an="index.html",on=e=>{const t=e.root??"./",n=e.path,s=e.join??sn;return async(r,a)=>{var p,h,b,x;if(r.finalized)return a();let o;if(e.path)o=e.path;else try{if(o=decodeURIComponent(r.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o))throw new Error}catch{return await((p=e.onNotFound)==null?void 0:p.call(e,r.req.path,r)),a()}let d=s(t,!n&&e.rewriteRequestPath?e.rewriteRequestPath(o):o);e.isDir&&await e.isDir(d)&&(d=s(d,an));const c=e.getContent;let l=await c(d,r);if(l instanceof Response)return r.newResponse(l.body,l);if(l){const S=e.mimes&&Be(d,e.mimes)||Be(d);if(r.header("Content-Type",S||"application/octet-stream"),e.precompressed&&(!S||en.test(S))){const D=new Set((h=r.req.header("Accept-Encoding"))==null?void 0:h.split(",").map(m=>m.trim()));for(const m of rn){if(!D.has(m))continue;const E=await c(d+ft[m],r);if(E){l=E,r.header("Content-Encoding",m),r.header("Vary","Accept-Encoding",{append:!0});break}}}return await((b=e.onFound)==null?void 0:b.call(e,d,r)),r.body(l)}await((x=e.onNotFound)==null?void 0:x.call(e,d,r)),await a()}},ln=async(e,t)=>{let n;t&&t.manifest?typeof t.manifest=="string"?n=JSON.parse(t.manifest):n=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?n=JSON.parse(__STATIC_CONTENT_MANIFEST):n=__STATIC_CONTENT_MANIFEST;let s;t&&t.namespace?s=t.namespace:s=__STATIC_CONTENT;const r=n[e];if(!r)return null;const a=await s.get(r,{type:"stream"});return a||null},dn=e=>async function(n,s){return on({...e,getContent:async a=>ln(a,{manifest:e.manifest,namespace:e.namespace?e.namespace:n.env?n.env.__STATIC_CONTENT:void 0})})(n,s)},cn=e=>dn(e);const pn=`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>航空券予約システム - FlightSearch</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <!-- Header -->
    <header class="bg-blue-600 text-white shadow-lg">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-plane text-3xl"></i>
                    <h1 class="text-2xl font-bold">FlightSearch</h1>
                </div>
                <nav class="hidden md:flex space-x-6">
                    <a href="/" class="hover:text-blue-200 transition">
                        <i class="fas fa-plane mr-1"></i>
                        フライト
                    </a>
                    <a href="/jrpass" class="hover:text-blue-200 transition">
                        <i class="fas fa-train mr-1"></i>
                        JR Pass
                    </a>
                    <a href="#" onclick="showMyPage(); return false;" class="hover:text-blue-200 transition" id="myPageLink">
                        <i class="fas fa-user mr-1"></i>
                        マイページ
                    </a>
                    <a href="#" onclick="handleLogout(); return false;" class="hover:text-blue-200 transition hidden" id="logoutLink">
                        <i class="fas fa-sign-out-alt mr-1"></i>
                        ログアウト
                    </a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main id="mainContent">
        <div class="container mx-auto px-4 py-8">
            <!-- Hero Section -->
            <div class="text-center mb-8">
                <h2 class="text-4xl font-bold text-gray-800 mb-2">お得な航空券を検索</h2>
                <p class="text-gray-600">世界中のフライトを比較して、最安値を見つけましょう</p>
            </div>

            <!-- Search Form -->
            <div class="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
                <!-- Trip Type Selection -->
                <div class="flex flex-wrap gap-4 mb-6">
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="tripType" value="roundtrip" checked class="w-4 h-4 text-blue-600" onchange="handleTripTypeChange()" />
                        <span class="text-gray-700 font-medium">往復</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="tripType" value="oneway" class="w-4 h-4 text-blue-600" onchange="handleTripTypeChange()" />
                        <span class="text-gray-700 font-medium">片道</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="tripType" value="multicity" class="w-4 h-4 text-blue-600" onchange="handleTripTypeChange()" />
                        <span class="text-gray-700 font-medium">複数都市</span>
                    </label>
                </div>

                <!-- Single/Round Trip Search Fields -->
                <div id="singleTripFields">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <!-- From -->
                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-2">出発地</label>
                            <div class="relative">
                                <i class="fas fa-plane-departure absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="fromLocation" placeholder="東京 (TYO)" 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>

                        <!-- To -->
                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-2">目的地</label>
                            <div class="relative">
                                <i class="fas fa-plane-arrival absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="toLocation" placeholder="ニューヨーク (JFK)" 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>

                        <!-- Departure Date -->
                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-2">出発日</label>
                            <div class="relative">
                                <i class="fas fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="date" id="departureDate" 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>

                        <!-- Return Date -->
                        <div class="relative" id="returnDateField">
                            <label class="block text-sm font-medium text-gray-700 mb-2">帰国日</label>
                            <div class="relative">
                                <i class="fas fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="date" id="returnDate" 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>
                    </div>

                    <!-- Passengers and Class -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-2">搭乗者数</label>
                            <div class="relative">
                                <i class="fas fa-users absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="number" id="passengers" value="1" min="1" max="9" 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>

                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-2">クラス</label>
                            <div class="relative">
                                <i class="fas fa-chair absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <select id="travelClass" 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                                    <option value="economy">エコノミー</option>
                                    <option value="premium_economy">プレミアムエコノミー</option>
                                    <option value="business">ビジネス</option>
                                    <option value="first">ファースト</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Multi-City Fields (Hidden by default) -->
                <div id="multiCityFields" class="hidden">
                    <div id="multiCitySegments"></div>
                    <button type="button" onclick="addMultiCitySegment()" 
                        class="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                        <i class="fas fa-plus mr-2"></i>区間を追加
                    </button>
                </div>

                <!-- Search Button -->
                <div class="text-center">
                    <button onclick="handleSearch()" 
                        class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg">
                        <i class="fas fa-search mr-2"></i>検索
                    </button>
                </div>
            </div>

            <!-- Search Results -->
            <div id="searchResults" class="hidden">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">検索結果</h3>
                
                <!-- Airline Lowest Fares Card -->
                <div class="bg-white rounded-lg border-4 border-red-500 p-6 mb-6">
                    <!-- Header -->
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-user-tie text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <a href="#" class="text-lg font-bold text-blue-600 hover:underline">最安値運賃をご覧ください</a>
                                <p class="text-sm text-blue-600">今すぐ旅行の専門家にご相談ください！</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <a href="tel:1-844-725-2099" class="text-blue-600 font-semibold flex items-center hover:underline">
                                <i class="fas fa-phone mr-2"></i>
                                1-844-725-2099
                            </a>
                            <button onclick="document.getElementById('searchResults').querySelector('.border-red-500').classList.add('hidden')" class="text-gray-400 hover:text-gray-600">
                                <i class="fas fa-times text-xl"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Looking for specific airline -->
                    <p class="text-gray-700 font-semibold mb-4">特定の航空会社をお探しですか？</p>

                    <!-- Airline Tabs -->
                    <div class="relative mb-6">
                        <button onclick="scrollAirlineTabs('left')" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                            <i class="fas fa-chevron-left text-gray-600"></i>
                        </button>
                        <button onclick="scrollAirlineTabs('right')" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                            <i class="fas fa-chevron-right text-gray-600"></i>
                        </button>
                        
                        <div id="airlineTabsContainer" class="overflow-x-auto scrollbar-hide scroll-smooth px-10">
                            <div class="flex space-x-2" id="airlineTabsList">
                                <!-- Airline tabs will be populated here -->
                            </div>
                        </div>
                    </div>

                    <!-- Route Type Selection -->
                    <div class="flex items-center justify-center space-x-4 mb-4">
                        <button onclick="scrollRouteTypes('left')" class="text-gray-400 hover:text-gray-600">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="flex items-center space-x-2">
                            <span class="font-semibold text-gray-700">直行便 / 1回経由</span>
                            <span class="text-gray-500">---</span>
                            <span class="text-gray-500">---</span>
                        </div>
                        <button onclick="scrollRouteTypes('right')" class="text-gray-400 hover:text-gray-600">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <!-- Price Grid -->
                    <div class="grid grid-cols-6 gap-2 mb-4" id="airlinePriceGrid">
                        <!-- Price grid will be populated here -->
                    </div>

                    <!-- Disclaimer -->
                    <p class="text-xs text-gray-500 mb-6">
                        料金は1名様あたりで、税金・手数料を含みます。購入完了時のみ最終料金となります。追加の手荷物料金が適用される場合があります。一部のフライトは検索条件と一致しない場合があります（代替日程や空港）。
                    </p>

                    <!-- Best, Cheapest, Shortest, Flexible Cards -->
                    <div class="grid grid-cols-4 gap-4 mb-4">
                        <div class="border border-gray-300 rounded-lg p-4 text-center">
                            <div class="flex items-center justify-center mb-2">
                                <i class="fas fa-check-circle text-green-600 mr-2"></i>
                                <span class="font-semibold text-gray-700">ベスト</span>
                            </div>
                            <div class="text-2xl font-bold text-red-600">¥<span id="bestPrice">129,342</span></div>
                        </div>
                        <div class="border border-gray-300 rounded-lg p-4 text-center">
                            <div class="font-semibold text-gray-700 mb-2">最安値</div>
                            <div class="text-2xl font-bold text-gray-800">¥<span id="cheapestPrice">129,342</span></div>
                        </div>
                        <div class="border border-gray-300 rounded-lg p-4 text-center">
                            <div class="font-semibold text-gray-700 mb-2">最短</div>
                            <div class="text-2xl font-bold text-gray-800">¥<span id="shortestPrice">243,343</span></div>
                        </div>
                        <div class="border border-gray-300 rounded-lg p-4 text-center">
                            <div class="flex items-center justify-center mb-2">
                                <span class="font-semibold text-gray-700 mr-1">フレキシブル</span>
                                <i class="fas fa-info-circle text-gray-400 text-sm"></i>
                            </div>
                            <div class="text-2xl font-bold text-gray-800">¥<span id="flexiblePrice">153,997</span></div>
                        </div>
                    </div>

                    <!-- Alert -->
                    <div class="bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
                        <div class="flex items-center">
                            <i class="fas fa-exclamation-circle text-orange-600 mr-2"></i>
                            <span class="font-bold text-orange-800">残り2席</span>
                        </div>
                    </div>
                </div>

                <!-- Flight Results List -->
                <div id="resultsList" class="space-y-4">
                    <!-- Results will be populated here -->
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-lg font-bold mb-4">FlightSearch</h3>
                    <p class="text-gray-400">世界中の航空券を最安値で検索</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">リンク</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="/" class="hover:text-white transition">ホーム</a></li>
                        <li><a href="/jrpass" class="hover:text-white transition">JR Pass</a></li>
                        <li><a href="#" onclick="showMyPage(); return false;" class="hover:text-white transition">マイページ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">お問い合わせ</h4>
                    <p class="text-gray-400">support@flightsearch.com</p>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                <p>&copy; 2026 FlightSearch. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="/static/app.js"><\/script>
</body>
</html>
`,hn=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>JR Pass Order - IACE Travel</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
  <style>
    .pass-type-tab {
      @apply px-8 py-3 font-semibold transition-all duration-200 cursor-pointer;
    }
    .pass-type-tab.active {
      @apply bg-green-700 text-white;
    }
    .pass-type-tab:not(.active) {
      @apply bg-gray-200 text-gray-700 hover:bg-gray-300;
    }
    .progress-step {
      @apply flex-1 text-center py-3 text-white font-semibold relative;
    }
    .progress-step.active {
      @apply bg-green-700;
    }
    .progress-step.completed {
      @apply bg-green-600;
    }
    .progress-step:not(.active):not(.completed) {
      @apply bg-gray-300 text-gray-600;
    }
  </style>
</head>
<body class="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
  <!-- Header -->
  <header class="bg-green-700 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <i class="fas fa-train text-3xl"></i>
          <h1 class="text-2xl font-bold">JR Pass Order</h1>
        </div>
        <nav class="hidden md:flex space-x-6">
          <a href="/" class="hover:text-green-200 transition">
            <i class="fas fa-plane mr-1"></i>
            Flights
          </a>
          <a href="/jrpass" class="hover:text-green-200 transition">
            <i class="fas fa-train mr-1"></i>
            JR Pass
          </a>
          <a href="/" onclick="showMyPage(); return false;" class="hover:text-green-200 transition">
            <i class="fas fa-user mr-1"></i>
            My Page
          </a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Progress Bar -->
  <div class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex">
        <div class="progress-step active" data-step="1">
          <span>1. Choose Pass</span>
        </div>
        <div class="progress-step" data-step="2">
          <span>2. Order Info</span>
        </div>
        <div class="progress-step" data-step="3">
          <span>3. Payment Info</span>
        </div>
        <div class="progress-step" data-step="4">
          <span>4. Complete</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <main class="container mx-auto px-4 py-8">
    <!-- Step 1: Choose Pass -->
    <div id="step1" class="jrpass-step">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Pass Selection -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 class="text-2xl font-bold text-green-800 mb-4">1. Choose Pass</h2>
            
            <!-- Pass Type Tabs -->
            <div class="flex mb-6 rounded-lg overflow-hidden">
              <button class="pass-type-tab active" data-pass-type="ordinary" onclick="switchPassType('ordinary')">
                Ordinary
              </button>
              <button class="pass-type-tab" data-pass-type="green" onclick="switchPassType('green')">
                Green
              </button>
            </div>

            <!-- Ordinary Options -->
            <div id="ordinaryOptions" class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Adult (from 12 years old)</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div class="text-center mb-3">
                      <div class="text-green-700 font-semibold mb-1">7 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 321.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('adult', 7, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div class="text-center mb-3">
                      <div class="text-green-700 font-semibold mb-1">14 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 514.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('adult', 14, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div class="text-center mb-3">
                      <div class="text-green-700 font-semibold mb-1">21 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 643.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('adult', 21, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Child (6-11 years old)</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div class="text-center mb-3">
                      <div class="text-green-700 font-semibold mb-1">7 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 161.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('child', 7, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div class="text-center mb-3">
                      <div class="text-green-700 font-semibold mb-1">14 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 257.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('child', 14, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div class="text-center mb-3">
                      <div class="text-green-700 font-semibold mb-1">21 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 321.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('child', 21, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Green Options (hidden by default) -->
            <div id="greenOptions" class="space-y-6 hidden">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Adult (from 12 years old)</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                    <div class="text-center mb-3">
                      <div class="text-amber-700 font-semibold mb-1">7 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 450.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('adult', 7, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                    <div class="text-center mb-3">
                      <div class="text-amber-700 font-semibold mb-1">14 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 720.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('adult', 14, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                    <div class="text-center mb-3">
                      <div class="text-amber-700 font-semibold mb-1">21 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 900.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('adult', 21, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Child (6-11 years old)</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                    <div class="text-center mb-3">
                      <div class="text-amber-700 font-semibold mb-1">7 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 225.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('child', 7, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                    <div class="text-center mb-3">
                      <div class="text-amber-700 font-semibold mb-1">14 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 360.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('child', 14, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                    <div class="text-center mb-3">
                      <div class="text-amber-700 font-semibold mb-1">21 Days</div>
                      <div class="text-2xl font-bold text-gray-800">USD 450.00</div>
                    </div>
                    <select class="pass-quantity-select w-full px-3 py-2 border border-gray-300 rounded-lg"
                      onchange="updatePassQuantity('child', 21, this.value)">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Details -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h3 class="text-xl font-bold text-green-800 mb-4">Order Details</h3>
            
            <div class="mb-4">
              <div class="text-sm text-gray-600 mb-2">Quantity: <span id="orderQuantity" class="font-semibold">0</span> Person(s)</div>
            </div>

            <div class="border-t border-gray-200 pt-4 mb-4 space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold">USD $<span id="orderSubtotal">0.00</span></span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Handling Fee</span>
                <span class="font-semibold">USD $<span id="orderHandlingFee">30.00</span></span>
              </div>
            </div>

            <div class="border-t-2 border-gray-300 pt-4 mb-6">
              <div class="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span class="text-green-700">USD $<span id="orderTotal">0.00</span></span>
              </div>
              <p class="text-xs text-red-600 mt-2">* Shipping is not included.</p>
            </div>

            <button id="proceedToOrderInfo" onclick="proceedToOrderInfo()"
              class="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Order Info -->
    <div id="step2" class="jrpass-step hidden">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-green-800 mb-6">2. Order Info</h2>
        <p class="text-sm text-gray-600 mb-6">Please fill the information below in English.</p>
        <p class="text-sm text-red-600 mb-6">* Required fields</p>
        
        <div id="orderInfoContainer">
          <!-- Form will be rendered dynamically -->
        </div>
      </div>
    </div>

    <!-- Step 3: Payment (handled by Stripe) -->
    <div id="step3" class="jrpass-step hidden">
      <div class="bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 class="text-2xl font-bold text-green-800 mb-4">3. Payment Info</h2>
        <p class="text-gray-600">Redirecting to Stripe Checkout...</p>
      </div>
    </div>

    <!-- Step 4: Complete -->
    <div id="step4" class="jrpass-step hidden">
      <div id="orderCompleteContainer">
        <!-- Order complete content will be rendered dynamically -->
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-6 mt-12">
    <div class="container mx-auto px-4 text-center">
      <p>© 2026 IACE Travel. All rights reserved.</p>
    </div>
  </footer>

  <script src="/static/jrpass.js"><\/script>
</body>
</html>
`,un=`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JR Pass Features Documentation</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>
    <style>
        .markdown-body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
            line-height: 1.6;
        }
        .markdown-body h1 {
            font-size: 2em;
            font-weight: 600;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 0.3em;
            margin-top: 24px;
            margin-bottom: 16px;
        }
        .markdown-body h2 {
            font-size: 1.5em;
            font-weight: 600;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 0.3em;
            margin-top: 24px;
            margin-bottom: 16px;
        }
        .markdown-body h3 {
            font-size: 1.25em;
            font-weight: 600;
            margin-top: 24px;
            margin-bottom: 16px;
        }
        .markdown-body h4 {
            font-size: 1em;
            font-weight: 600;
            margin-top: 24px;
            margin-bottom: 16px;
        }
        .markdown-body p {
            margin-top: 0;
            margin-bottom: 16px;
        }
        .markdown-body ul, .markdown-body ol {
            padding-left: 2em;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .markdown-body li {
            margin-top: 0.25em;
        }
        .markdown-body code {
            background-color: rgba(175, 184, 193, 0.2);
            padding: 0.2em 0.4em;
            border-radius: 6px;
            font-family: ui-monospace, monospace;
            font-size: 85%;
        }
        .markdown-body pre {
            background-color: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
            overflow: auto;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .markdown-body pre code {
            background-color: transparent;
            padding: 0;
            font-size: 85%;
            line-height: 1.45;
        }
        .markdown-body table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .markdown-body table th,
        .markdown-body table td {
            padding: 6px 13px;
            border: 1px solid #d0d7de;
        }
        .markdown-body table th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
        .markdown-body table tr {
            background-color: #ffffff;
            border-top: 1px solid #d0d7de;
        }
        .markdown-body table tr:nth-child(2n) {
            background-color: #f6f8fa;
        }
        .markdown-body blockquote {
            padding: 0 1em;
            color: #57606a;
            border-left: 0.25em solid #d0d7de;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .markdown-body hr {
            height: 0.25em;
            padding: 0;
            margin: 24px 0;
            background-color: #d0d7de;
            border: 0;
        }
        .markdown-body a {
            color: #0969da;
            text-decoration: none;
        }
        .markdown-body a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-green-600 text-white shadow-lg">
        <div class="container mx-auto px-4 py-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <i class="fas fa-train text-3xl"></i>
                    <div>
                        <h1 class="text-2xl font-bold">JR Pass Purchase System</h1>
                        <p class="text-green-100">機能詳細ドキュメント</p>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <a href="/" class="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition">
                        <i class="fas fa-home mr-2"></i>
                        ホーム
                    </a>
                    <a href="/jrpass" class="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                        <i class="fas fa-ticket-alt mr-2"></i>
                        JRパス購入
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Table of Contents Sidebar -->
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar -->
            <aside class="lg:w-64 flex-shrink-0">
                <div class="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                    <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-list-ul text-green-600 mr-2"></i>
                        目次
                    </h3>
                    <nav id="toc" class="space-y-2 text-sm">
                        <!-- TOC will be generated here -->
                    </nav>
                </div>
            </aside>

            <!-- Main Content -->
            <main class="flex-1">
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <!-- Loading indicator -->
                    <div id="loading" class="text-center py-12">
                        <i class="fas fa-spinner fa-spin text-4xl text-green-600 mb-4"></i>
                        <p class="text-gray-600">ドキュメントを読み込み中...</p>
                    </div>
                    
                    <!-- Markdown content -->
                    <div id="markdown-content" class="markdown-body hidden"></div>
                </div>
            </main>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; 2026 FlightSearch. All rights reserved.</p>
            <p class="text-sm text-gray-400 mt-2">JR Pass Purchase System - Technical Documentation</p>
        </div>
    </footer>

    <script>
        // Fetch and render markdown
        async function loadMarkdown() {
            try {
                const response = await fetch('/static/JRPASS_FEATURES.md');
                if (!response.ok) {
                    throw new Error('Failed to load documentation');
                }
                
                const markdown = await response.text();
                
                // Configure marked options
                marked.setOptions({
                    breaks: true,
                    gfm: true,
                    headerIds: true
                });
                
                // Convert markdown to HTML
                const html = marked.parse(markdown);
                
                // Display content
                document.getElementById('loading').classList.add('hidden');
                const contentDiv = document.getElementById('markdown-content');
                contentDiv.innerHTML = html;
                contentDiv.classList.remove('hidden');
                
                // Generate table of contents
                generateTOC();
                
                // Add smooth scroll to anchor links
                addSmoothScroll();
                
            } catch (error) {
                console.error('Error loading markdown:', error);
                document.getElementById('loading').innerHTML = \`
                    <i class="fas fa-exclamation-triangle text-4xl text-red-600 mb-4"></i>
                    <p class="text-gray-600">ドキュメントの読み込みに失敗しました</p>
                    <p class="text-sm text-gray-500 mt-2">\${error.message}</p>
                \`;
            }
        }
        
        // Generate table of contents
        function generateTOC() {
            const content = document.getElementById('markdown-content');
            const headings = content.querySelectorAll('h2, h3');
            const toc = document.getElementById('toc');
            
            headings.forEach((heading, index) => {
                const level = heading.tagName === 'H2' ? 0 : 1;
                const id = \`heading-\${index}\`;
                heading.id = id;
                
                const link = document.createElement('a');
                link.href = \`#\${id}\`;
                link.textContent = heading.textContent;
                link.className = \`block py-1 hover:text-green-600 transition \${level === 1 ? 'pl-4 text-gray-600' : 'font-semibold text-gray-800'}\`;
                
                toc.appendChild(link);
            });
        }
        
        // Add smooth scroll behavior
        function addSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
        
        // Load markdown on page load
        window.addEventListener('DOMContentLoaded', loadMarkdown);
    <\/script>
</body>
</html>
`,he=new ut;he.use("/static/*",cn({root:"./"}));he.post("/api/search",async e=>{const t=await e.req.json();return e.json({success:!0,message:"Search received",data:t})});he.get("/",e=>e.html(pn));he.get("/jrpass",e=>e.html(hn));he.get("/jrpass-docs",e=>e.html(un));const Ge=new ut,fn=Object.assign({"/src/index.tsx":he});let gt=!1;for(const[,e]of Object.entries(fn))e&&(Ge.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Ge.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ge as default};
