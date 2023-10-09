import{S as uo,i as ho,s as Eo,w as hl,x as vo,y as _o,z as mo,A as yo,B as po,r as bo,v as ko,C as Oo,D as co,e as a,t as o,a as c,c as i,b as r,d as s,f as l,g as f,E as _,h as Ye,j as p,k as t,n as So}from"./index.e23b10ae.js";import{A as Do}from"./article.4aee75b0.js";function Po(H){let h,m,y,b,E,v,D,ge,xe,u,ie,et,tt,re,lt,ot,ne,st,at,pe,it,rt,ce,nt,pt,fe,ct,ft,C,ut,ue,dt,ht,Et,de,vt,_t,he,mt,yt,Ee,bt,kt,ve,Ot,St,_e,Dt,Ce,I,me,Pt,Me,$,wt,He,k,At,ye,Lt,xt,be,Ct,Mt,Ie,L,Ht,ke,It,$t,$e,F,P,Ft,Oe,Nt,qt,Se,Bt,jt,Fe,w,Tt,De,Rt,Ut,Pe,Kt,Ne,N,Vt,qe,q,Gt,Be,B,Zt,je,j,zt,Te,T,Qt,Re,x,Jt,we,Wt,Xt,Ue,R,Yt,Ke,U,Ae,gt,Ve,K,el,Ge,A,M,O,V,tl,G,ll,Z,ol,z,sl,Q,al,il,S,J,rl,W,nl,X,pl,Y,cl,g,fl,Ze,ee,ul,ze,te,dl;return{c(){h=a("h1"),m=o("Shell Setup"),y=c(),b=a("p"),E=o("Scripts for easy shell backup/setup"),v=c(),D=a("p"),ge=o("At the moment the script supports MacOS with Homebrew and Manjaro Linux with KDE Plasma DE. The following configurations are saved:"),xe=c(),u=a("ul"),ie=a("li"),et=o("Homebrew packages (Only MacOS)"),tt=c(),re=a("li"),lt=o("Pacman packages (Only Linux)"),ot=c(),ne=a("li"),st=o("KDE configuration (Only Linux)"),at=c(),pe=a("li"),it=o("LatteDock configuration (Only Linux)"),rt=c(),ce=a("li"),nt=o("Dotfiles"),pt=c(),fe=a("li"),ct=o("Python dependencies"),ft=c(),C=a("li"),ut=o("Global venv dependencies (Only when the "),ue=a("code"),dt=o("pyenv"),ht=o(" script is used)"),Et=c(),de=a("li"),vt=o("Global NPM packages"),_t=c(),he=a("li"),mt=o("VSCode settings and keyboard shortcuts"),yt=c(),Ee=a("li"),bt=o("VSCode extensions"),kt=c(),ve=a("li"),Ot=o("OMZ setup"),St=c(),_e=a("li"),Dt=o("OMZ plugins"),Ce=c(),I=a("blockquote"),me=a("p"),Pt=o("DISCLAIMER: At the moment it is not possible to only backup specific data. It might work even if you don’t use all the tools listed above but there is no guarantee"),Me=c(),$=a("h2"),wt=o("Usage"),He=c(),k=a("p"),At=o("create a private Fork of this repository and clone it into your "),ye=a("code"),Lt=o("$HOME"),xt=o(" directory. Add the "),be=a("code"),Ct=o("bin/"),Mt=o(" folder to your path."),Ie=c(),L=a("p"),Ht=o("Create backups using "),ke=a("code"),It=o("shell-backup"),$t=o("."),$e=c(),F=a("blockquote"),P=a("p"),Ft=o("Before the first backup you might move the dotfiles you want to backup into the folder "),Oe=a("code"),Nt=o("$HOME/shell_setup/dotfiles"),qt=o(" and create a symbolic link in your "),Se=a("code"),Bt=o("$HOME"),jt=o(" directory"),Fe=c(),w=a("p"),Tt=o("If you have an existing backup clone your repository into the "),De=a("code"),Rt=o("$HOME"),Ut=o(" of a new machine and run "),Pe=a("code"),Kt=o("shell-setup"),Ne=c(),N=a("h2"),Vt=o("Other Scripts"),qe=c(),q=a("p"),Gt=o("This repo also contains some simple utility scripts"),Be=c(),B=a("h3"),Zt=o("pyenv"),je=c(),j=a("p"),zt=o("Script which makes the usage of python venv easier. Allows you to create global or local environments and manage them. Backup of the global environments (dependencies) is supported by the backup script"),Te=c(),T=a("h3"),Qt=o("executable"),Re=c(),x=a("p"),Jt=o("Make a file executable (same as "),we=a("code"),Wt=o("chmod 755"),Xt=o(",I am just lazy)"),Ue=c(),R=a("h3"),Yt=o("sf"),Ke=c(),U=a("blockquote"),Ae=a("p"),gt=o("MacOS only"),Ve=c(),K=a("p"),el=o("Show/hide hidden files in Finder"),Ge=c(),A=a("pre"),M=a("code"),O=a("span"),V=a("span"),tl=o("sf"),G=a("span"),ll=o(" "),Z=a("span"),ol=o("TRUE"),z=a("span"),sl=o(" "),Q=a("span"),al=o("# Show hidden files"),il=o(`
`),S=a("span"),J=a("span"),rl=o("sf"),W=a("span"),nl=o(" "),X=a("span"),pl=o("FALSE"),Y=a("span"),cl=o(" "),g=a("span"),fl=o("# Hide files"),Ze=c(),ee=a("h3"),ul=o("discord-activate-vcam"),ze=c(),te=a("p"),dl=o("Remove Discord’s code signature so it can be used with VCam (might be unnecessary now)"),this.h()},l(e){h=i(e,"H1",{});var n=r(h);m=s(n,"Shell Setup"),n.forEach(l),y=f(e),b=i(e,"P",{});var El=r(b);E=s(El,"Scripts for easy shell backup/setup"),El.forEach(l),v=f(e),D=i(e,"P",{});var vl=r(D);ge=s(vl,"At the moment the script supports MacOS with Homebrew and Manjaro Linux with KDE Plasma DE. The following configurations are saved:"),vl.forEach(l),xe=f(e),u=i(e,"UL",{});var d=r(u);ie=i(d,"LI",{});var _l=r(ie);et=s(_l,"Homebrew packages (Only MacOS)"),_l.forEach(l),tt=f(d),re=i(d,"LI",{});var ml=r(re);lt=s(ml,"Pacman packages (Only Linux)"),ml.forEach(l),ot=f(d),ne=i(d,"LI",{});var yl=r(ne);st=s(yl,"KDE configuration (Only Linux)"),yl.forEach(l),at=f(d),pe=i(d,"LI",{});var bl=r(pe);it=s(bl,"LatteDock configuration (Only Linux)"),bl.forEach(l),rt=f(d),ce=i(d,"LI",{});var kl=r(ce);nt=s(kl,"Dotfiles"),kl.forEach(l),pt=f(d),fe=i(d,"LI",{});var Ol=r(fe);ct=s(Ol,"Python dependencies"),Ol.forEach(l),ft=f(d),C=i(d,"LI",{});var Qe=r(C);ut=s(Qe,"Global venv dependencies (Only when the "),ue=i(Qe,"CODE",{});var Sl=r(ue);dt=s(Sl,"pyenv"),Sl.forEach(l),ht=s(Qe," script is used)"),Qe.forEach(l),Et=f(d),de=i(d,"LI",{});var Dl=r(de);vt=s(Dl,"Global NPM packages"),Dl.forEach(l),_t=f(d),he=i(d,"LI",{});var Pl=r(he);mt=s(Pl,"VSCode settings and keyboard shortcuts"),Pl.forEach(l),yt=f(d),Ee=i(d,"LI",{});var wl=r(Ee);bt=s(wl,"VSCode extensions"),wl.forEach(l),kt=f(d),ve=i(d,"LI",{});var Al=r(ve);Ot=s(Al,"OMZ setup"),Al.forEach(l),St=f(d),_e=i(d,"LI",{});var Ll=r(_e);Dt=s(Ll,"OMZ plugins"),Ll.forEach(l),d.forEach(l),Ce=f(e),I=i(e,"BLOCKQUOTE",{});var xl=r(I);me=i(xl,"P",{});var Cl=r(me);Pt=s(Cl,"DISCLAIMER: At the moment it is not possible to only backup specific data. It might work even if you don’t use all the tools listed above but there is no guarantee"),Cl.forEach(l),xl.forEach(l),Me=f(e),$=i(e,"H2",{});var Ml=r($);wt=s(Ml,"Usage"),Ml.forEach(l),He=f(e),k=i(e,"P",{});var le=r(k);At=s(le,"create a private Fork of this repository and clone it into your "),ye=i(le,"CODE",{});var Hl=r(ye);Lt=s(Hl,"$HOME"),Hl.forEach(l),xt=s(le," directory. Add the "),be=i(le,"CODE",{});var Il=r(be);Ct=s(Il,"bin/"),Il.forEach(l),Mt=s(le," folder to your path."),le.forEach(l),Ie=f(e),L=i(e,"P",{});var Je=r(L);Ht=s(Je,"Create backups using "),ke=i(Je,"CODE",{});var $l=r(ke);It=s($l,"shell-backup"),$l.forEach(l),$t=s(Je,"."),Je.forEach(l),$e=f(e),F=i(e,"BLOCKQUOTE",{});var Fl=r(F);P=i(Fl,"P",{});var oe=r(P);Ft=s(oe,"Before the first backup you might move the dotfiles you want to backup into the folder "),Oe=i(oe,"CODE",{});var Nl=r(Oe);Nt=s(Nl,"$HOME/shell_setup/dotfiles"),Nl.forEach(l),qt=s(oe," and create a symbolic link in your "),Se=i(oe,"CODE",{});var ql=r(Se);Bt=s(ql,"$HOME"),ql.forEach(l),jt=s(oe," directory"),oe.forEach(l),Fl.forEach(l),Fe=f(e),w=i(e,"P",{});var Le=r(w);Tt=s(Le,"If you have an existing backup clone your repository into the "),De=i(Le,"CODE",{});var Bl=r(De);Rt=s(Bl,"$HOME"),Bl.forEach(l),Ut=s(Le," of a new machine and run "),Pe=i(Le,"CODE",{});var jl=r(Pe);Kt=s(jl,"shell-setup"),jl.forEach(l),Le.forEach(l),Ne=f(e),N=i(e,"H2",{});var Tl=r(N);Vt=s(Tl,"Other Scripts"),Tl.forEach(l),qe=f(e),q=i(e,"P",{});var Rl=r(q);Gt=s(Rl,"This repo also contains some simple utility scripts"),Rl.forEach(l),Be=f(e),B=i(e,"H3",{});var Ul=r(B);Zt=s(Ul,"pyenv"),Ul.forEach(l),je=f(e),j=i(e,"P",{});var Kl=r(j);zt=s(Kl,"Script which makes the usage of python venv easier. Allows you to create global or local environments and manage them. Backup of the global environments (dependencies) is supported by the backup script"),Kl.forEach(l),Te=f(e),T=i(e,"H3",{});var Vl=r(T);Qt=s(Vl,"executable"),Vl.forEach(l),Re=f(e),x=i(e,"P",{});var We=r(x);Jt=s(We,"Make a file executable (same as "),we=i(We,"CODE",{});var Gl=r(we);Wt=s(Gl,"chmod 755"),Gl.forEach(l),Xt=s(We,",I am just lazy)"),We.forEach(l),Ue=f(e),R=i(e,"H3",{});var Zl=r(R);Yt=s(Zl,"sf"),Zl.forEach(l),Ke=f(e),U=i(e,"BLOCKQUOTE",{});var zl=r(U);Ae=i(zl,"P",{});var Ql=r(Ae);gt=s(Ql,"MacOS only"),Ql.forEach(l),zl.forEach(l),Ve=f(e),K=i(e,"P",{});var Jl=r(K);el=s(Jl,"Show/hide hidden files in Finder"),Jl.forEach(l),Ge=f(e),A=i(e,"PRE",{class:!0,style:!0,tabindex:!0});var Wl=r(A);M=i(Wl,"CODE",{});var Xe=r(M);O=i(Xe,"SPAN",{class:!0});var se=r(O);V=i(se,"SPAN",{style:!0});var Xl=r(V);tl=s(Xl,"sf"),Xl.forEach(l),G=i(se,"SPAN",{style:!0});var Yl=r(G);ll=s(Yl," "),Yl.forEach(l),Z=i(se,"SPAN",{style:!0});var gl=r(Z);ol=s(gl,"TRUE"),gl.forEach(l),z=i(se,"SPAN",{style:!0});var eo=r(z);sl=s(eo," "),eo.forEach(l),Q=i(se,"SPAN",{style:!0});var to=r(Q);al=s(to,"# Show hidden files"),to.forEach(l),se.forEach(l),il=s(Xe,`
`),S=i(Xe,"SPAN",{class:!0});var ae=r(S);J=i(ae,"SPAN",{style:!0});var lo=r(J);rl=s(lo,"sf"),lo.forEach(l),W=i(ae,"SPAN",{style:!0});var oo=r(W);nl=s(oo," "),oo.forEach(l),X=i(ae,"SPAN",{style:!0});var so=r(X);pl=s(so,"FALSE"),so.forEach(l),Y=i(ae,"SPAN",{style:!0});var ao=r(Y);cl=s(ao," "),ao.forEach(l),g=i(ae,"SPAN",{style:!0});var io=r(g);fl=s(io,"# Hide files"),io.forEach(l),ae.forEach(l),Xe.forEach(l),Wl.forEach(l),Ze=f(e),ee=i(e,"H3",{});var ro=r(ee);ul=s(ro,"discord-activate-vcam"),ro.forEach(l),ze=f(e),te=i(e,"P",{});var no=r(te);dl=s(no,"Remove Discord’s code signature so it can be used with VCam (might be unnecessary now)"),no.forEach(l),this.h()},h(){_(V,"color","#88C0D0"),_(G,"color","#D8DEE9FF"),_(Z,"color","#A3BE8C"),_(z,"color","#D8DEE9FF"),_(Q,"color","#616E88"),Ye(O,"class","line"),_(J,"color","#88C0D0"),_(W,"color","#D8DEE9FF"),_(X,"color","#A3BE8C"),_(Y,"color","#D8DEE9FF"),_(g,"color","#616E88"),Ye(S,"class","line"),Ye(A,"class","shiki nord"),_(A,"background-color","#2e3440ff"),Ye(A,"tabindex","0")},m(e,n){p(e,h,n),t(h,m),p(e,y,n),p(e,b,n),t(b,E),p(e,v,n),p(e,D,n),t(D,ge),p(e,xe,n),p(e,u,n),t(u,ie),t(ie,et),t(u,tt),t(u,re),t(re,lt),t(u,ot),t(u,ne),t(ne,st),t(u,at),t(u,pe),t(pe,it),t(u,rt),t(u,ce),t(ce,nt),t(u,pt),t(u,fe),t(fe,ct),t(u,ft),t(u,C),t(C,ut),t(C,ue),t(ue,dt),t(C,ht),t(u,Et),t(u,de),t(de,vt),t(u,_t),t(u,he),t(he,mt),t(u,yt),t(u,Ee),t(Ee,bt),t(u,kt),t(u,ve),t(ve,Ot),t(u,St),t(u,_e),t(_e,Dt),p(e,Ce,n),p(e,I,n),t(I,me),t(me,Pt),p(e,Me,n),p(e,$,n),t($,wt),p(e,He,n),p(e,k,n),t(k,At),t(k,ye),t(ye,Lt),t(k,xt),t(k,be),t(be,Ct),t(k,Mt),p(e,Ie,n),p(e,L,n),t(L,Ht),t(L,ke),t(ke,It),t(L,$t),p(e,$e,n),p(e,F,n),t(F,P),t(P,Ft),t(P,Oe),t(Oe,Nt),t(P,qt),t(P,Se),t(Se,Bt),t(P,jt),p(e,Fe,n),p(e,w,n),t(w,Tt),t(w,De),t(De,Rt),t(w,Ut),t(w,Pe),t(Pe,Kt),p(e,Ne,n),p(e,N,n),t(N,Vt),p(e,qe,n),p(e,q,n),t(q,Gt),p(e,Be,n),p(e,B,n),t(B,Zt),p(e,je,n),p(e,j,n),t(j,zt),p(e,Te,n),p(e,T,n),t(T,Qt),p(e,Re,n),p(e,x,n),t(x,Jt),t(x,we),t(we,Wt),t(x,Xt),p(e,Ue,n),p(e,R,n),t(R,Yt),p(e,Ke,n),p(e,U,n),t(U,Ae),t(Ae,gt),p(e,Ve,n),p(e,K,n),t(K,el),p(e,Ge,n),p(e,A,n),t(A,M),t(M,O),t(O,V),t(V,tl),t(O,G),t(G,ll),t(O,Z),t(Z,ol),t(O,z),t(z,sl),t(O,Q),t(Q,al),t(M,il),t(M,S),t(S,J),t(J,rl),t(S,W),t(W,nl),t(S,X),t(X,pl),t(S,Y),t(Y,cl),t(S,g),t(g,fl),p(e,Ze,n),p(e,ee,n),t(ee,ul),p(e,ze,n),p(e,te,n),t(te,dl)},p:So,d(e){e&&l(h),e&&l(y),e&&l(b),e&&l(v),e&&l(D),e&&l(xe),e&&l(u),e&&l(Ce),e&&l(I),e&&l(Me),e&&l($),e&&l(He),e&&l(k),e&&l(Ie),e&&l(L),e&&l($e),e&&l(F),e&&l(Fe),e&&l(w),e&&l(Ne),e&&l(N),e&&l(qe),e&&l(q),e&&l(Be),e&&l(B),e&&l(je),e&&l(j),e&&l(Te),e&&l(T),e&&l(Re),e&&l(x),e&&l(Ue),e&&l(R),e&&l(Ke),e&&l(U),e&&l(Ve),e&&l(K),e&&l(Ge),e&&l(A),e&&l(Ze),e&&l(ee),e&&l(ze),e&&l(te)}}}function wo(H){let h,m;const y=[H[0],fo];let b={$$slots:{default:[Po]},$$scope:{ctx:H}};for(let E=0;E<y.length;E+=1)b=hl(b,y[E]);return h=new Do({props:b}),{c(){vo(h.$$.fragment)},l(E){_o(h.$$.fragment,E)},m(E,v){mo(h,E,v),m=!0},p(E,[v]){const D=v&1?yo(y,[v&1&&po(E[0]),v&0&&po(fo)]):{};v&2&&(D.$$scope={dirty:v,ctx:E}),h.$set(D)},i(E){m||(bo(h.$$.fragment,E),m=!0)},o(E){ko(h.$$.fragment,E),m=!1},d(E){Oo(h,E)}}}const fo={description:"A template for easily backing up and setting up shell configurations and various other system components.",image:"/articles/projects/jungle.png",layout:"project",repository:"https://github.com/lufixSch/shell_setup",repository_icon:"github",status:"wip",title:"Hunter and Prey",update:"https://raw.githubusercontent.com/lufixSch/shell_setup/main/README.md"};function Ao(H,h,m){return H.$$set=y=>{m(0,h=hl(hl({},h),co(y)))},h=co(h),[h]}class Co extends uo{constructor(h){super(),ho(this,h,Ao,wo,Eo,{})}}export{Co as default,fo as metadata};
