import{S as j,i as y,s as z,e as k,c as b,b as $,f as o,j as d,H as A,v as p,I as B,r as m,o as E,E as g,u as w,p as C,q as H,J as U,x as D,y as F,z as G,C as K,a as M,g as O,t as J,d as N,h as v,k as Q,l as P}from"./index.e23b10ae.js";function R(i){let t,r;const a=i[2].default,e=E(a,i,i[1],null);return{c(){t=k("p"),e&&e.c(),this.h()},l(l){t=b(l,"P",{style:!0});var n=$(t);e&&e.l(n),n.forEach(o),this.h()},h(){g(t,"margin-left",h(i[0])*12+"px")},m(l,n){d(l,t,n),e&&e.m(t,null),r=!0},p(l,n){e&&e.p&&(!r||n&2)&&w(e,a,l,l[1],r?H(a,l[1],n,null):C(l[1]),null),(!r||n&1)&&g(t,"margin-left",h(l[0])*12+"px")},i(l){r||(m(e,l),r=!0)},o(l){p(e,l),r=!1},d(l){l&&o(t),e&&e.d(l)}}}function T(i){let t,r;const a=i[2].default,e=E(a,i,i[1],null);return{c(){t=k("h6"),e&&e.c(),this.h()},l(l){t=b(l,"H6",{style:!0});var n=$(t);e&&e.l(n),n.forEach(o),this.h()},h(){g(t,"margin-left",h(i[0])*12+"px")},m(l,n){d(l,t,n),e&&e.m(t,null),r=!0},p(l,n){e&&e.p&&(!r||n&2)&&w(e,a,l,l[1],r?H(a,l[1],n,null):C(l[1]),null),(!r||n&1)&&g(t,"margin-left",h(l[0])*12+"px")},i(l){r||(m(e,l),r=!0)},o(l){p(e,l),r=!1},d(l){l&&o(t),e&&e.d(l)}}}function V(i){let t,r;const a=i[2].default,e=E(a,i,i[1],null);return{c(){t=k("h5"),e&&e.c(),this.h()},l(l){t=b(l,"H5",{style:!0});var n=$(t);e&&e.l(n),n.forEach(o),this.h()},h(){g(t,"margin-left",h(i[0])*12+"px")},m(l,n){d(l,t,n),e&&e.m(t,null),r=!0},p(l,n){e&&e.p&&(!r||n&2)&&w(e,a,l,l[1],r?H(a,l[1],n,null):C(l[1]),null),(!r||n&1)&&g(t,"margin-left",h(l[0])*12+"px")},i(l){r||(m(e,l),r=!0)},o(l){p(e,l),r=!1},d(l){l&&o(t),e&&e.d(l)}}}function W(i){let t,r;const a=i[2].default,e=E(a,i,i[1],null);return{c(){t=k("h4"),e&&e.c(),this.h()},l(l){t=b(l,"H4",{style:!0});var n=$(t);e&&e.l(n),n.forEach(o),this.h()},h(){g(t,"margin-left",h(i[0])*12+"px")},m(l,n){d(l,t,n),e&&e.m(t,null),r=!0},p(l,n){e&&e.p&&(!r||n&2)&&w(e,a,l,l[1],r?H(a,l[1],n,null):C(l[1]),null),(!r||n&1)&&g(t,"margin-left",h(l[0])*12+"px")},i(l){r||(m(e,l),r=!0)},o(l){p(e,l),r=!1},d(l){l&&o(t),e&&e.d(l)}}}function X(i){let t,r,a,e,l,n,s;const f=[W,V,T,R],_=[];function q(u,c){return c&1&&(r=null),c&1&&(a=null),c&1&&(e=null),r==null&&(r=h(u[0])<1),r?0:(a==null&&(a=h(u[0])<2),a?1:(e==null&&(e=h(u[0])<3),e?2:3))}return l=q(i,-1),n=_[l]=f[l](i),{c(){t=k("li"),n.c()},l(u){t=b(u,"LI",{});var c=$(t);n.l(c),c.forEach(o)},m(u,c){d(u,t,c),_[l].m(t,null),s=!0},p(u,[c]){let I=l;l=q(u,c),l===I?_[l].p(u,c):(A(),p(_[I],1,1,()=>{_[I]=null}),B(),n=_[l],n?n.p(u,c):(n=_[l]=f[l](u),n.c()),m(n,1),n.m(t,null))},i(u){s||(m(n),s=!0)},o(u){p(n),s=!1},d(u){u&&o(t),_[l].d()}}}function h(i){return i.replace("/index","").split("/").length-3}function Y(i,t,r){let{$$slots:a={},$$scope:e}=t,{slug:l}=t;return i.$$set=n=>{"slug"in n&&r(0,l=n.slug),"$$scope"in n&&r(1,e=n.$$scope)},[l,e,a]}class Z extends j{constructor(t){super(),y(this,t,Y,X,z,{slug:0})}}function L(i,t,r){const a=i.slice();return a[1]=t[r],a}function x(i){let t,r=i[1].metadata.title+"",a,e,l;return{c(){t=k("a"),a=J(r),this.h()},l(n){t=b(n,"A",{class:!0,href:!0,title:!0});var s=$(t);a=N(s,r),s.forEach(o),this.h()},h(){v(t,"class","hover:text-primary dark:hover:text-primary-dark"),v(t,"href",e=i[1].slug),v(t,"title",l=i[1].metadata.description)},m(n,s){d(n,t,s),Q(t,a)},p(n,s){s&1&&r!==(r=n[1].metadata.title+"")&&P(a,r),s&1&&e!==(e=n[1].slug)&&v(t,"href",e),s&1&&l!==(l=n[1].metadata.description)&&v(t,"title",l)},d(n){n&&o(t)}}}function ee(i){let t=i[1].metadata.title+"",r;return{c(){r=J(t)},l(a){r=N(a,t)},m(a,e){d(a,r,e)},p(a,e){e&1&&t!==(t=a[1].metadata.title+"")&&P(r,t)},d(a){a&&o(r)}}}function le(i){let t;function r(l,n){var s;return(s=l[1].metadata)!=null&&s.header?ee:x}let a=r(i),e=a(i);return{c(){e.c(),t=M()},l(l){e.l(l),t=O(l)},m(l,n){e.m(l,n),d(l,t,n)},p(l,n){a===(a=r(l))&&e?e.p(l,n):(e.d(1),e=a(l),e&&(e.c(),e.m(t.parentNode,t)))},d(l){e.d(l),l&&o(t)}}}function S(i){let t,r;return t=new Z({props:{slug:i[1].slug,$$slots:{default:[le]},$$scope:{ctx:i}}}),{c(){D(t.$$.fragment)},l(a){F(t.$$.fragment,a)},m(a,e){G(t,a,e),r=!0},p(a,e){const l={};e&1&&(l.slug=a[1].slug),e&17&&(l.$$scope={dirty:e,ctx:a}),t.$set(l)},i(a){r||(m(t.$$.fragment,a),r=!0)},o(a){p(t.$$.fragment,a),r=!1},d(a){K(t,a)}}}function te(i){let t,r,a=i[0],e=[];for(let n=0;n<a.length;n+=1)e[n]=S(L(i,a,n));const l=n=>p(e[n],1,1,()=>{e[n]=null});return{c(){t=k("ul");for(let n=0;n<e.length;n+=1)e[n].c()},l(n){t=b(n,"UL",{});var s=$(t);for(let f=0;f<e.length;f+=1)e[f].l(s);s.forEach(o)},m(n,s){d(n,t,s);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(t,null);r=!0},p(n,[s]){if(s&1){a=n[0];let f;for(f=0;f<a.length;f+=1){const _=L(n,a,f);e[f]?(e[f].p(_,s),m(e[f],1)):(e[f]=S(_),e[f].c(),m(e[f],1),e[f].m(t,null))}for(A(),f=a.length;f<e.length;f+=1)l(f);B()}},i(n){if(!r){for(let s=0;s<a.length;s+=1)m(e[s]);r=!0}},o(n){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)p(e[s]);r=!1},d(n){n&&o(t),U(e,n)}}}function ne(i,t,r){let{articles:a}=t;return i.$$set=e=>{"articles"in e&&r(0,a=e.articles)},[a]}class ae extends j{constructor(t){super(),y(this,t,ne,te,z,{articles:0})}}export{ae as C};
