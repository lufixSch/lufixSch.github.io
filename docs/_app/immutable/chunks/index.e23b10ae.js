function w(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(D)}function L(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function lt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function G(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(I(n,e))}function at(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],u=Math.max(n.dirty.length,r.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,l){if(r){const u=O(n,e,i,l);t.p(u,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:Q(1,r,x=>n[e[x]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],u=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<u.length;c++){for(;s<l.length&&u[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(u[c],a)}}function W(t,n){if(E){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){E&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){tt(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function B(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const l=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>r.removeAttribute(u))},()=>i(n))}function wt(t,n,e){return B(t,n,e,X)}function Et(t,n,e){return B(t,n,e,Y)}function nt(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function vt(t){return nt(t," ")}function Nt(t,n){n=""+n,t.data!==n&&(t.data=n)}function At(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n,e){t.classList[e?"add":"remove"](n)}function jt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function kt(t,n){return new t(n)}let y;function p(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){H().$$.on_mount.push(t)}function Tt(t){H().$$.after_update.push(t)}const h=[],T=[];let m=[];const M=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function Mt(){return z(),P}function A(t){m.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),et(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;T.length;)T.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function it(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Lt(){_.r||g(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=n[l];if(o){for(const c in u)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[l]=o}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const u=t.$$.on_mount.map(D).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),l.forEach(A)}function ut(t,n){const e=t.$$;e.fragment!==null&&(it(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,l,u,o=[-1]){const c=y;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};u&&u(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,x,...j)=>{const k=j.length?j[0]:x;return s.ctx&&r(s.ctx[f],s.ctx[f]=k)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](k),a&&ot(t,f)),x}):[],s.update(),a=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=Z(n.target);s.fragment&&s.fragment.l(f),f.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),F()}p(c)}class Ft{$destroy(){ut(this,1),this.$destroy=w}$on(n,e){if(!L(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,Bt as B,ut as C,mt as D,At as E,lt as F,jt as G,Dt as H,Lt as I,yt as J,xt as K,Tt as L,Ct as M,T as N,kt as O,Y as P,Et as Q,bt as R,Ft as S,St as T,Mt as U,gt as a,Z as b,wt as c,nt as d,X as e,V as f,vt as g,$t as h,zt as i,pt as j,W as k,Nt as l,ft as m,w as n,at as o,ht as p,_t as q,rt as r,st as s,S as t,dt as u,Ot as v,R as w,Ht as x,Pt as y,ct as z};