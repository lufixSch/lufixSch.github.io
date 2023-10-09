import{S as U,i as V,s as q,e as b,a as M,P as Q,c as w,b as v,f,g as x,Q as J,F as Y,h as c,j as H,k as h,R as oe,n as P,J as ne,m as K,t as T,d as z,T as S,o as ie,x as W,y as X,z as Z,u as ce,p as ue,q as he,r as B,v as C,C as ee,M as fe}from"../chunks/index.e23b10ae.js";import{p as me}from"../chunks/stores.aa6a3662.js";import{w as de}from"../chunks/singletons.20d1ec32.js";const _e=!0,Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"})),D=de("dark");function te(o,e,t){const l=o.slice();return l[5]=e[t],l}function se(o,e,t){const l=o.slice();return l[5]=e[t],l}function le(o){let e,t,l=o[5].name+"",a,r;return{c(){e=b("li"),t=b("a"),a=T(l),r=M(),this.h()},l(s){e=w(s,"LI",{class:!0});var i=v(e);t=w(i,"A",{href:!0,class:!0});var u=v(t);a=z(u,l),u.forEach(f),r=x(i),i.forEach(f),this.h()},h(){c(t,"href",o[5].path),c(t,"class","svelte-3njbym"),S(t,"active",o[2].url.pathname.includes(o[5].path)),c(e,"class","svelte-3njbym")},m(s,i){H(s,e,i),h(e,t),h(t,a),h(e,r)},p(s,i){i&12&&S(t,"active",s[2].url.pathname.includes(s[5].path))},d(s){s&&f(e)}}}function ae(o){let e,t=o[3],l=[];for(let a=0;a<t.length;a+=1)l[a]=re(te(o,t,a));return{c(){e=b("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=w(a,"UL",{class:!0,id:!0});var r=v(e);for(let s=0;s<l.length;s+=1)l[s].l(r);r.forEach(f),this.h()},h(){c(e,"class","flex-row"),c(e,"id","main-menu")},m(a,r){H(a,e,r);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null)},p(a,r){if(r&12){t=a[3];let s;for(s=0;s<t.length;s+=1){const i=te(a,t,s);l[s]?l[s].p(i,r):(l[s]=re(i),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(a){a&&f(e),ne(l,a)}}}function re(o){let e,t,l=o[5].name+"",a,r;return{c(){e=b("li"),t=b("a"),a=T(l),r=M(),this.h()},l(s){e=w(s,"LI",{class:!0});var i=v(e);t=w(i,"A",{href:!0,class:!0});var u=v(t);a=z(u,l),u.forEach(f),r=x(i),i.forEach(f),this.h()},h(){c(t,"href",o[5].path),c(t,"class","svelte-3njbym"),S(t,"active",o[2].url.pathname===o[5].path),c(e,"class","svelte-3njbym")},m(s,i){H(s,e,i),h(e,t),h(t,a),h(e,r)},p(s,i){i&12&&S(t,"active",s[2].url.pathname===s[5].path)},d(s){s&&f(e)}}}function pe(o){let e,t,l,a,r,s,i,u,g,n,m,k,j,$,L,I=o[3],_=[];for(let p=0;p<I.length;p+=1)_[p]=le(se(o,I,p));let y=o[0]&&ae(o);return{c(){e=b("nav"),t=b("div"),l=b("div"),a=b("a"),r=b("img"),i=M(),u=b("ul");for(let p=0;p<_.length;p+=1)_[p].c();g=M(),n=b("button"),m=Q("svg"),k=Q("path"),j=M(),y&&y.c(),this.h()},l(p){e=w(p,"NAV",{class:!0});var E=v(e);t=w(E,"DIV",{class:!0});var d=v(t);l=w(d,"DIV",{class:!0});var O=v(l);a=w(O,"A",{href:!0,class:!0});var F=v(a);r=w(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(f),O.forEach(f),i=x(d),u=w(d,"UL",{class:!0});var G=v(u);for(let A=0;A<_.length;A+=1)_[A].l(G);G.forEach(f),g=x(d),n=w(d,"BUTTON",{class:!0,type:!0});var N=v(n);m=J(N,"svg",{class:!0,xmlns:!0,viewBox:!0,height:!0});var R=v(m);k=J(R,"path",{d:!0}),v(k).forEach(f),R.forEach(f),N.forEach(f),d.forEach(f),j=x(E),y&&y.l(E),E.forEach(f),this.h()},h(){Y(r.src,s=o[1]==="light"?"/logo_light_small.png":"/logo_dark_small.png")||c(r,"src",s),c(r,"alt","logo"),c(r,"class","ml-4 w-12 h-12"),c(a,"href","/"),c(a,"class","svelte-3njbym"),c(l,"class","flex items-center"),c(u,"class","hidden sm:flex flex-row"),c(k,"d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"),c(m,"class","fill-current p-4"),c(m,"xmlns","http://www.w3.org/2000/svg"),c(m,"viewBox","0 0 448 512"),c(m,"height","3.5rem"),c(n,"class","flex sm:hidden hover:bg-primary dark:hover:bg-primary-dark hover:text-white"),c(n,"type","button"),c(t,"class","flex justify-between items-center h-14"),c(e,"class","z-20 bg-gray-100 dark:bg-gray-800 fixed top-0 left-0 w-full")},m(p,E){H(p,e,E),h(e,t),h(t,l),h(l,a),h(a,r),h(t,i),h(t,u);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(u,null);h(t,g),h(t,n),h(n,m),h(m,k),h(e,j),y&&y.m(e,null),$||(L=oe(n,"click",o[4]),$=!0)},p(p,[E]){if(E&2&&!Y(r.src,s=p[1]==="light"?"/logo_light_small.png":"/logo_dark_small.png")&&c(r,"src",s),E&12){I=p[3];let d;for(d=0;d<I.length;d+=1){const O=se(p,I,d);_[d]?_[d].p(O,E):(_[d]=le(O),_[d].c(),_[d].m(u,null))}for(;d<_.length;d+=1)_[d].d(1);_.length=I.length}p[0]?y?y.p(p,E):(y=ae(p),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},i:P,o:P,d(p){p&&f(e),ne(_,p),y&&y.d(),$=!1,L()}}}function ge(o,e,t){let l,a;K(o,D,u=>t(1,l=u)),K(o,me,u=>t(2,a=u));let r=!1;return[r,l,a,[{path:"/projects",name:"Projects"},{path:"/resources",name:"Resources"},{path:"/updates",name:"Updates"}],()=>t(0,r=!r)]}class ve extends U{constructor(e){super(),V(this,e,ge,pe,q,{})}}function ye(o){let e,t,l,a,r,s,i,u,g,n,m,k;return{c(){e=b("footer"),t=b("p"),l=T(`Many of the articles on this website are automatically generated from the markdown files in the
		corresponding repositories. This might lead to some unexpected results, so please let me know if
		you find any errors!`),a=M(),r=b("p"),s=T(`Some articles are still in German, but I am working on translating them. If you are interested
		in a specific article, don't hesitate to contact me!`),i=M(),u=b("p"),g=T("If you want to get in touch, you can send me an email at "),n=b("a"),m=T("lukas.schuettler@tum.de"),k=T("."),this.h()},l(j){e=w(j,"FOOTER",{class:!0});var $=v(e);t=w($,"P",{class:!0});var L=v(t);l=z(L,`Many of the articles on this website are automatically generated from the markdown files in the
		corresponding repositories. This might lead to some unexpected results, so please let me know if
		you find any errors!`),L.forEach(f),a=x($),r=w($,"P",{class:!0});var I=v(r);s=z(I,`Some articles are still in German, but I am working on translating them. If you are interested
		in a specific article, don't hesitate to contact me!`),I.forEach(f),i=x($),u=w($,"P",{class:!0});var _=v(u);g=z(_,"If you want to get in touch, you can send me an email at "),n=w(_,"A",{href:!0});var y=v(n);m=z(y,"lukas.schuettler@tum.de"),y.forEach(f),k=z(_,"."),_.forEach(f),$.forEach(f),this.h()},h(){c(t,"class","svelte-opo63t"),c(r,"class","svelte-opo63t"),c(n,"href","mailto:lukas.schuettler@tum.de"),c(u,"class","svelte-opo63t"),c(e,"class","flex flex-col md:flex-row justify-evenly p-4 pt-6 border-t-[1px] border-gray-100 dark:border-gray-600")},m(j,$){H(j,e,$),h(e,t),h(t,l),h(e,a),h(e,r),h(r,s),h(e,i),h(e,u),h(u,g),h(u,n),h(n,m),h(u,k)},p:P,i:P,o:P,d(j){j&&f(e)}}}class be extends U{constructor(e){super(),V(this,e,null,ye,q,{})}}function we(o){let e,t,l,a,r,s,i;e=new ve({});const u=o[1].default,g=ie(u,o,o[0],null);return s=new be({}),{c(){W(e.$$.fragment),t=M(),l=b("div"),a=b("body"),g&&g.c(),r=M(),W(s.$$.fragment),this.h()},l(n){X(e.$$.fragment,n),t=x(n),l=w(n,"DIV",{class:!0});var m=v(l);a=w(m,"BODY",{class:!0});var k=v(a);g&&g.l(k),k.forEach(f),r=x(m),X(s.$$.fragment,m),m.forEach(f),this.h()},h(){c(a,"class",""),c(l,"class","min-h-screen flex flex-col justify-between")},m(n,m){Z(e,n,m),H(n,t,m),H(n,l,m),h(l,a),g&&g.m(a,null),h(l,r),Z(s,l,null),i=!0},p(n,[m]){g&&g.p&&(!i||m&1)&&ce(g,u,n,n[0],i?he(u,n[0],m,null):ue(n[0]),null)},i(n){i||(B(e.$$.fragment,n),B(g,n),B(s.$$.fragment,n),i=!0)},o(n){C(e.$$.fragment,n),C(g,n),C(s.$$.fragment,n),i=!1},d(n){ee(e,n),n&&f(t),n&&f(l),g&&g.d(n),ee(s)}}}function ke(o,e,t){let{$$slots:l={},$$scope:a}=e;return fe(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)");D.set(r.matches?"dark":"light"),r.addEventListener("change",s=>{D.set(s.matches?"dark":"light")})}),o.$$set=r=>{"$$scope"in r&&t(0,a=r.$$scope)},[a,l]}class Me extends U{constructor(e){super(),V(this,e,ke,we,q,{})}}export{Me as component,Ie as universal};