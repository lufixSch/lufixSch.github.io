import{S as va,i as ha,s as Aa,w as Jl,x as ya,y as Na,z as Sa,A as ba,B as Ea,r as Pa,v as xa,C as ma,D as da,e as s,t as o,a as u,c as a,b as r,d as n,f as t,g as E,h as c,E as i,j as f,k as e,n as Da}from"./index.e23b10ae.js";import{A as Ca}from"./article.4aee75b0.js";function Fa(g){let d,S,b,P,_,y,v,Me,kt,wt,Te,It,Vt,qe,G,Lt,$t,Je,Rt,pt,ee,Ot,it,R,Ke,Gt,Ut,Qe,zt,ft,m,We,U,te,Ht,le,Bt,ct,z,Xe,jt,ut,D,Ye,C,se,Mt,ae,Tt,re,qt,oe,Jt,Et,H,Ze,Kt,dt,F,k,B,ne,Qt,pe,Wt,Xt,ie,fe,Yt,Zt,A,ce,gt,ue,el,Ee,tl,de,ll,_e,sl,ve,al,he,rl,Ae,ol,_t,j,M,nl,ge,pl,il,vt,w,et,h,ye,fl,Ne,cl,Se,ul,be,El,Pe,dl,xe,_l,me,vl,De,hl,Ce,Al,ht,T,Fe,yl,q,Nl,At,ke,Sl,yt,we,tt,bl,Nt,I,lt,J,Ie,Pl,Ve,xl,St,V,st,at,K,ml,Dl,rt,ot,Cl,bt,L,Q,N,Le,Fl,$e,kl,Re,wl,Oe,Il,Ge,Vl,Ue,Ll,$l,W,ze,Rl,He,Ol,Pt,Be,Gl,xt,X,Ul,Y,zl;return{c(){d=s("h1"),S=o("Raspberry VNC Setup"),b=u(),P=s("h2"),_=o("Raspberry aufsetzen"),y=u(),v=s("ol"),Me=s("li"),kt=o("Raspbian mit grafischer Oberfläche installieren"),wt=u(),Te=s("li"),It=o("SSH einrichten"),Vt=u(),qe=s("li"),G=s("a"),Lt=o("VNC einrichten"),$t=u(),Je=s("li"),Rt=o("Automatisch in GUI booten deaktivieren"),pt=u(),ee=s("h2"),Ot=o("VNC configurieren"),it=u(),R=s("ol"),Ke=s("li"),Gt=o("Verbinden über ssh"),Ut=u(),Qe=s("li"),zt=o("VNC config öffnen mit"),ft=u(),m=s("pre"),We=s("code"),U=s("span"),te=s("span"),Ht=o("~"),le=s("span"),Bt=o(" $ nano .vnc/config"),ct=u(),z=s("ol"),Xe=s("li"),jt=o("Folgenden Text hinzufügen und speichern"),ut=u(),D=s("pre"),Ye=s("code"),C=s("span"),se=s("span"),Mt=o("-randr"),ae=s("span"),Tt=o(" "),re=s("span"),qt=o("800"),oe=s("span"),Jt=o("x600,1024x768,1280x800,1280x960,1280x1024,1680x1050,1920x1080,3360x1050,1024x700,1200x740,1600x1000,3200x1000"),Et=u(),H=s("ol"),Ze=s("li"),Kt=o("VNC Server starten mit folgendem befehl"),dt=u(),F=s("pre"),k=s("code"),B=s("span"),ne=s("span"),Qt=o("~"),pe=s("span"),Wt=o(" $ vncserver"),Xt=o(`
`),ie=s("span"),fe=s("span"),Yt=o("..."),Zt=o(`
`),A=s("span"),ce=s("span"),gt=o("New"),ue=s("span"),el=o(" "),Ee=s("span"),tl=o("desktop"),de=s("span"),ll=o(" "),_e=s("span"),sl=o("is"),ve=s("span"),al=o(" "),he=s("span"),rl=o("raspberry:1"),Ae=s("span"),ol=o(" (192.168.178.61:1)"),_t=u(),j=s("ol"),M=s("li"),nl=o("Auflösung anpassen (Display bezeichnung ist "),ge=s("code"),pl=o(":1"),il=o(")"),vt=u(),w=s("pre"),et=s("code"),h=s("span"),ye=s("span"),fl=o("~"),Ne=s("span"),cl=o(" $ xrandr -display "),Se=s("span"),ul=o("<"),be=s("span"),El=o("display"),Pe=s("span"),dl=o(">"),xe=s("span"),_l=o(" -s "),me=s("span"),vl=o("<"),De=s("span"),hl=o("auflösung"),Ce=s("span"),Al=o(">"),ht=u(),T=s("ol"),Fe=s("li"),yl=o("Mit VNC verbinden über den "),q=s("a"),Nl=o("RealVNC Viewer"),At=u(),ke=s("h2"),Sl=o("GUI ändern"),yt=u(),we=s("ol"),tt=s("li"),bl=o("tasksel installieren"),Nt=u(),I=s("pre"),lt=s("code"),J=s("span"),Ie=s("span"),Pl=o("~"),Ve=s("span"),xl=o(" $ sudo apt install tasksel"),St=u(),V=s("ol"),st=s("li"),at=s("p"),K=s("a"),ml=o("GUI installieren und starten"),Dl=u(),rt=s("li"),ot=s("p"),Cl=o("VNC display neu starten"),bt=u(),L=s("pre"),Q=s("code"),N=s("span"),Le=s("span"),Fl=o("~"),$e=s("span"),kl=o(" $ vncserver "),Re=s("span"),wl=o("<"),Oe=s("span"),Il=o("display"),Ge=s("span"),Vl=o(">"),Ue=s("span"),Ll=o(" -kill"),$l=o(`
`),W=s("span"),ze=s("span"),Rl=o("~"),He=s("span"),Ol=o(" $ vncserver"),Pt=u(),Be=s("h3"),Gl=o("GUI ändern alternative"),xt=u(),X=s("p"),Ul=o("Siehe "),Y=s("a"),zl=o("hier"),this.h()},l(l){d=a(l,"H1",{});var p=r(d);S=n(p,"Raspberry VNC Setup"),p.forEach(t),b=E(l),P=a(l,"H2",{});var Kl=r(P);_=n(Kl,"Raspberry aufsetzen"),Kl.forEach(t),y=E(l),v=a(l,"OL",{});var O=r(v);Me=a(O,"LI",{});var Ql=r(Me);kt=n(Ql,"Raspbian mit grafischer Oberfläche installieren"),Ql.forEach(t),wt=E(O),Te=a(O,"LI",{});var Wl=r(Te);It=n(Wl,"SSH einrichten"),Wl.forEach(t),Vt=E(O),qe=a(O,"LI",{});var Xl=r(qe);G=a(Xl,"A",{href:!0,rel:!0});var Yl=r(G);Lt=n(Yl,"VNC einrichten"),Yl.forEach(t),Xl.forEach(t),$t=E(O),Je=a(O,"LI",{});var Zl=r(Je);Rt=n(Zl,"Automatisch in GUI booten deaktivieren"),Zl.forEach(t),O.forEach(t),pt=E(l),ee=a(l,"H2",{});var gl=r(ee);Ot=n(gl,"VNC configurieren"),gl.forEach(t),it=E(l),R=a(l,"OL",{});var mt=r(R);Ke=a(mt,"LI",{});var es=r(Ke);Gt=n(es,"Verbinden über ssh"),es.forEach(t),Ut=E(mt),Qe=a(mt,"LI",{});var ts=r(Qe);zt=n(ts,"VNC config öffnen mit"),ts.forEach(t),mt.forEach(t),ft=E(l),m=a(l,"PRE",{class:!0,style:!0,tabindex:!0});var ls=r(m);We=a(ls,"CODE",{});var ss=r(We);U=a(ss,"SPAN",{class:!0});var Hl=r(U);te=a(Hl,"SPAN",{style:!0});var as=r(te);Ht=n(as,"~"),as.forEach(t),le=a(Hl,"SPAN",{style:!0});var rs=r(le);Bt=n(rs," $ nano .vnc/config"),rs.forEach(t),Hl.forEach(t),ss.forEach(t),ls.forEach(t),ct=E(l),z=a(l,"OL",{start:!0});var os=r(z);Xe=a(os,"LI",{});var ns=r(Xe);jt=n(ns,"Folgenden Text hinzufügen und speichern"),ns.forEach(t),os.forEach(t),ut=E(l),D=a(l,"PRE",{class:!0,style:!0,tabindex:!0});var ps=r(D);Ye=a(ps,"CODE",{});var is=r(Ye);C=a(is,"SPAN",{class:!0});var nt=r(C);se=a(nt,"SPAN",{style:!0});var fs=r(se);Mt=n(fs,"-randr"),fs.forEach(t),ae=a(nt,"SPAN",{style:!0});var cs=r(ae);Tt=n(cs," "),cs.forEach(t),re=a(nt,"SPAN",{style:!0});var us=r(re);qt=n(us,"800"),us.forEach(t),oe=a(nt,"SPAN",{style:!0});var Es=r(oe);Jt=n(Es,"x600,1024x768,1280x800,1280x960,1280x1024,1680x1050,1920x1080,3360x1050,1024x700,1200x740,1600x1000,3200x1000"),Es.forEach(t),nt.forEach(t),is.forEach(t),ps.forEach(t),Et=E(l),H=a(l,"OL",{start:!0});var ds=r(H);Ze=a(ds,"LI",{});var _s=r(Ze);Kt=n(_s,"VNC Server starten mit folgendem befehl"),_s.forEach(t),ds.forEach(t),dt=E(l),F=a(l,"PRE",{class:!0,style:!0,tabindex:!0});var vs=r(F);k=a(vs,"CODE",{});var je=r(k);B=a(je,"SPAN",{class:!0});var Bl=r(B);ne=a(Bl,"SPAN",{style:!0});var hs=r(ne);Qt=n(hs,"~"),hs.forEach(t),pe=a(Bl,"SPAN",{style:!0});var As=r(pe);Wt=n(As," $ vncserver"),As.forEach(t),Bl.forEach(t),Xt=n(je,`
`),ie=a(je,"SPAN",{class:!0});var ys=r(ie);fe=a(ys,"SPAN",{style:!0});var Ns=r(fe);Yt=n(Ns,"..."),Ns.forEach(t),ys.forEach(t),Zt=n(je,`
`),A=a(je,"SPAN",{class:!0});var $=r(A);ce=a($,"SPAN",{style:!0});var Ss=r(ce);gt=n(Ss,"New"),Ss.forEach(t),ue=a($,"SPAN",{style:!0});var bs=r(ue);el=n(bs," "),bs.forEach(t),Ee=a($,"SPAN",{style:!0});var Ps=r(Ee);tl=n(Ps,"desktop"),Ps.forEach(t),de=a($,"SPAN",{style:!0});var xs=r(de);ll=n(xs," "),xs.forEach(t),_e=a($,"SPAN",{style:!0});var ms=r(_e);sl=n(ms,"is"),ms.forEach(t),ve=a($,"SPAN",{style:!0});var Ds=r(ve);al=n(Ds," "),Ds.forEach(t),he=a($,"SPAN",{style:!0});var Cs=r(he);rl=n(Cs,"raspberry:1"),Cs.forEach(t),Ae=a($,"SPAN",{style:!0});var Fs=r(Ae);ol=n(Fs," (192.168.178.61:1)"),Fs.forEach(t),$.forEach(t),je.forEach(t),vs.forEach(t),_t=E(l),j=a(l,"OL",{start:!0});var ks=r(j);M=a(ks,"LI",{});var Dt=r(M);nl=n(Dt,"Auflösung anpassen (Display bezeichnung ist "),ge=a(Dt,"CODE",{});var ws=r(ge);pl=n(ws,":1"),ws.forEach(t),il=n(Dt,")"),Dt.forEach(t),ks.forEach(t),vt=E(l),w=a(l,"PRE",{class:!0,style:!0,tabindex:!0});var Is=r(w);et=a(Is,"CODE",{});var Vs=r(et);h=a(Vs,"SPAN",{class:!0});var x=r(h);ye=a(x,"SPAN",{style:!0});var Ls=r(ye);fl=n(Ls,"~"),Ls.forEach(t),Ne=a(x,"SPAN",{style:!0});var $s=r(Ne);cl=n($s," $ xrandr -display "),$s.forEach(t),Se=a(x,"SPAN",{style:!0});var Rs=r(Se);ul=n(Rs,"<"),Rs.forEach(t),be=a(x,"SPAN",{style:!0});var Os=r(be);El=n(Os,"display"),Os.forEach(t),Pe=a(x,"SPAN",{style:!0});var Gs=r(Pe);dl=n(Gs,">"),Gs.forEach(t),xe=a(x,"SPAN",{style:!0});var Us=r(xe);_l=n(Us," -s "),Us.forEach(t),me=a(x,"SPAN",{style:!0});var zs=r(me);vl=n(zs,"<"),zs.forEach(t),De=a(x,"SPAN",{style:!0});var Hs=r(De);hl=n(Hs,"auflösung"),Hs.forEach(t),Ce=a(x,"SPAN",{style:!0});var Bs=r(Ce);Al=n(Bs,">"),Bs.forEach(t),x.forEach(t),Vs.forEach(t),Is.forEach(t),ht=E(l),T=a(l,"OL",{start:!0});var js=r(T);Fe=a(js,"LI",{});var jl=r(Fe);yl=n(jl,"Mit VNC verbinden über den "),q=a(jl,"A",{href:!0,rel:!0});var Ms=r(q);Nl=n(Ms,"RealVNC Viewer"),Ms.forEach(t),jl.forEach(t),js.forEach(t),At=E(l),ke=a(l,"H2",{});var Ts=r(ke);Sl=n(Ts,"GUI ändern"),Ts.forEach(t),yt=E(l),we=a(l,"OL",{});var qs=r(we);tt=a(qs,"LI",{});var Js=r(tt);bl=n(Js,"tasksel installieren"),Js.forEach(t),qs.forEach(t),Nt=E(l),I=a(l,"PRE",{class:!0,style:!0,tabindex:!0});var Ks=r(I);lt=a(Ks,"CODE",{});var Qs=r(lt);J=a(Qs,"SPAN",{class:!0});var Ml=r(J);Ie=a(Ml,"SPAN",{style:!0});var Ws=r(Ie);Pl=n(Ws,"~"),Ws.forEach(t),Ve=a(Ml,"SPAN",{style:!0});var Xs=r(Ve);xl=n(Xs," $ sudo apt install tasksel"),Xs.forEach(t),Ml.forEach(t),Qs.forEach(t),Ks.forEach(t),St=E(l),V=a(l,"OL",{start:!0});var Ct=r(V);st=a(Ct,"LI",{});var Ys=r(st);at=a(Ys,"P",{});var Zs=r(at);K=a(Zs,"A",{href:!0,rel:!0});var gs=r(K);ml=n(gs,"GUI installieren und starten"),gs.forEach(t),Zs.forEach(t),Ys.forEach(t),Dl=E(Ct),rt=a(Ct,"LI",{});var ea=r(rt);ot=a(ea,"P",{});var ta=r(ot);Cl=n(ta,"VNC display neu starten"),ta.forEach(t),ea.forEach(t),Ct.forEach(t),bt=E(l),L=a(l,"PRE",{class:!0,style:!0,tabindex:!0});var la=r(L);Q=a(la,"CODE",{});var Ft=r(Q);N=a(Ft,"SPAN",{class:!0});var Z=r(N);Le=a(Z,"SPAN",{style:!0});var sa=r(Le);Fl=n(sa,"~"),sa.forEach(t),$e=a(Z,"SPAN",{style:!0});var aa=r($e);kl=n(aa," $ vncserver "),aa.forEach(t),Re=a(Z,"SPAN",{style:!0});var ra=r(Re);wl=n(ra,"<"),ra.forEach(t),Oe=a(Z,"SPAN",{style:!0});var oa=r(Oe);Il=n(oa,"display"),oa.forEach(t),Ge=a(Z,"SPAN",{style:!0});var na=r(Ge);Vl=n(na,">"),na.forEach(t),Ue=a(Z,"SPAN",{style:!0});var pa=r(Ue);Ll=n(pa," -kill"),pa.forEach(t),Z.forEach(t),$l=n(Ft,`
`),W=a(Ft,"SPAN",{class:!0});var Tl=r(W);ze=a(Tl,"SPAN",{style:!0});var ia=r(ze);Rl=n(ia,"~"),ia.forEach(t),He=a(Tl,"SPAN",{style:!0});var fa=r(He);Ol=n(fa," $ vncserver"),fa.forEach(t),Tl.forEach(t),Ft.forEach(t),la.forEach(t),Pt=E(l),Be=a(l,"H3",{});var ca=r(Be);Gl=n(ca,"GUI ändern alternative"),ca.forEach(t),xt=E(l),X=a(l,"P",{});var ql=r(X);Ul=n(ql,"Siehe "),Y=a(ql,"A",{href:!0,rel:!0});var ua=r(Y);zl=n(ua,"hier"),ua.forEach(t),ql.forEach(t),this.h()},h(){c(G,"href","https://www.raspberrypi.org/documentation/remote-access/vnc/"),c(G,"rel","nofollow"),i(te,"color","#81A1C1"),i(le,"color","#D8DEE9FF"),c(U,"class","line"),c(m,"class","shiki nord"),i(m,"background-color","#2e3440ff"),c(m,"tabindex","0"),c(z,"start","3"),i(se,"color","#88C0D0"),i(ae,"color","#D8DEE9FF"),i(re,"color","#B48EAD"),i(oe,"color","#A3BE8C"),c(C,"class","line"),c(D,"class","shiki nord"),i(D,"background-color","#2e3440ff"),c(D,"tabindex","0"),c(H,"start","4"),i(ne,"color","#81A1C1"),i(pe,"color","#D8DEE9FF"),c(B,"class","line"),i(fe,"color","#88C0D0"),c(ie,"class","line"),i(ce,"color","#88C0D0"),i(ue,"color","#D8DEE9FF"),i(Ee,"color","#A3BE8C"),i(de,"color","#D8DEE9FF"),i(_e,"color","#A3BE8C"),i(ve,"color","#D8DEE9FF"),i(he,"color","#A3BE8C"),i(Ae,"color","#D8DEE9FF"),c(A,"class","line"),c(F,"class","shiki nord"),i(F,"background-color","#2e3440ff"),c(F,"tabindex","0"),c(j,"start","5"),i(ye,"color","#81A1C1"),i(Ne,"color","#D8DEE9FF"),i(Se,"color","#81A1C1"),i(be,"color","#D8DEE9FF"),i(Pe,"color","#81A1C1"),i(xe,"color","#D8DEE9FF"),i(me,"color","#81A1C1"),i(De,"color","#D8DEE9FF"),i(Ce,"color","#81A1C1"),c(h,"class","line"),c(w,"class","shiki nord"),i(w,"background-color","#2e3440ff"),c(w,"tabindex","0"),c(q,"href","https://www.realvnc.com/de/connect/download/viewer/"),c(q,"rel","nofollow"),c(T,"start","3"),i(Ie,"color","#81A1C1"),i(Ve,"color","#D8DEE9FF"),c(J,"class","line"),c(I,"class","shiki nord"),i(I,"background-color","#2e3440ff"),c(I,"tabindex","0"),c(K,"href","https://linoxide.com/linux-how-to/how-install-gui-ubuntu-server-guide/"),c(K,"rel","nofollow"),c(V,"start","2"),i(Le,"color","#81A1C1"),i($e,"color","#D8DEE9FF"),i(Re,"color","#81A1C1"),i(Oe,"color","#D8DEE9FF"),i(Ge,"color","#81A1C1"),i(Ue,"color","#D8DEE9FF"),c(N,"class","line"),i(ze,"color","#81A1C1"),i(He,"color","#D8DEE9FF"),c(W,"class","line"),c(L,"class","shiki nord"),i(L,"background-color","#2e3440ff"),c(L,"tabindex","0"),c(Y,"href","https://forum-raspberrypi.de/forum/thread/48950-tutorial-eine-unendliche-geschichte-raspberry-4b-und-usb-boot/?postID=453256#post453256"),c(Y,"rel","nofollow")},m(l,p){f(l,d,p),e(d,S),f(l,b,p),f(l,P,p),e(P,_),f(l,y,p),f(l,v,p),e(v,Me),e(Me,kt),e(v,wt),e(v,Te),e(Te,It),e(v,Vt),e(v,qe),e(qe,G),e(G,Lt),e(v,$t),e(v,Je),e(Je,Rt),f(l,pt,p),f(l,ee,p),e(ee,Ot),f(l,it,p),f(l,R,p),e(R,Ke),e(Ke,Gt),e(R,Ut),e(R,Qe),e(Qe,zt),f(l,ft,p),f(l,m,p),e(m,We),e(We,U),e(U,te),e(te,Ht),e(U,le),e(le,Bt),f(l,ct,p),f(l,z,p),e(z,Xe),e(Xe,jt),f(l,ut,p),f(l,D,p),e(D,Ye),e(Ye,C),e(C,se),e(se,Mt),e(C,ae),e(ae,Tt),e(C,re),e(re,qt),e(C,oe),e(oe,Jt),f(l,Et,p),f(l,H,p),e(H,Ze),e(Ze,Kt),f(l,dt,p),f(l,F,p),e(F,k),e(k,B),e(B,ne),e(ne,Qt),e(B,pe),e(pe,Wt),e(k,Xt),e(k,ie),e(ie,fe),e(fe,Yt),e(k,Zt),e(k,A),e(A,ce),e(ce,gt),e(A,ue),e(ue,el),e(A,Ee),e(Ee,tl),e(A,de),e(de,ll),e(A,_e),e(_e,sl),e(A,ve),e(ve,al),e(A,he),e(he,rl),e(A,Ae),e(Ae,ol),f(l,_t,p),f(l,j,p),e(j,M),e(M,nl),e(M,ge),e(ge,pl),e(M,il),f(l,vt,p),f(l,w,p),e(w,et),e(et,h),e(h,ye),e(ye,fl),e(h,Ne),e(Ne,cl),e(h,Se),e(Se,ul),e(h,be),e(be,El),e(h,Pe),e(Pe,dl),e(h,xe),e(xe,_l),e(h,me),e(me,vl),e(h,De),e(De,hl),e(h,Ce),e(Ce,Al),f(l,ht,p),f(l,T,p),e(T,Fe),e(Fe,yl),e(Fe,q),e(q,Nl),f(l,At,p),f(l,ke,p),e(ke,Sl),f(l,yt,p),f(l,we,p),e(we,tt),e(tt,bl),f(l,Nt,p),f(l,I,p),e(I,lt),e(lt,J),e(J,Ie),e(Ie,Pl),e(J,Ve),e(Ve,xl),f(l,St,p),f(l,V,p),e(V,st),e(st,at),e(at,K),e(K,ml),e(V,Dl),e(V,rt),e(rt,ot),e(ot,Cl),f(l,bt,p),f(l,L,p),e(L,Q),e(Q,N),e(N,Le),e(Le,Fl),e(N,$e),e($e,kl),e(N,Re),e(Re,wl),e(N,Oe),e(Oe,Il),e(N,Ge),e(Ge,Vl),e(N,Ue),e(Ue,Ll),e(Q,$l),e(Q,W),e(W,ze),e(ze,Rl),e(W,He),e(He,Ol),f(l,Pt,p),f(l,Be,p),e(Be,Gl),f(l,xt,p),f(l,X,p),e(X,Ul),e(X,Y),e(Y,zl)},p:Da,d(l){l&&t(d),l&&t(b),l&&t(P),l&&t(y),l&&t(v),l&&t(pt),l&&t(ee),l&&t(it),l&&t(R),l&&t(ft),l&&t(m),l&&t(ct),l&&t(z),l&&t(ut),l&&t(D),l&&t(Et),l&&t(H),l&&t(dt),l&&t(F),l&&t(_t),l&&t(j),l&&t(vt),l&&t(w),l&&t(ht),l&&t(T),l&&t(At),l&&t(ke),l&&t(yt),l&&t(we),l&&t(Nt),l&&t(I),l&&t(St),l&&t(V),l&&t(bt),l&&t(L),l&&t(Pt),l&&t(Be),l&&t(xt),l&&t(X)}}}function ka(g){let d,S;const b=[g[0],_a];let P={$$slots:{default:[Fa]},$$scope:{ctx:g}};for(let _=0;_<b.length;_+=1)P=Jl(P,b[_]);return d=new Ca({props:P}),{c(){ya(d.$$.fragment)},l(_){Na(d.$$.fragment,_)},m(_,y){Sa(d,_,y),S=!0},p(_,[y]){const v=y&1?ba(b,[y&1&&Ea(_[0]),y&0&&Ea(_a)]):{};y&2&&(v.$$scope={dirty:y,ctx:_}),d.$set(v)},i(_){S||(Pa(d.$$.fragment,_),S=!0)},o(_){xa(d.$$.fragment,_),S=!1},d(_){ma(d,_)}}}const _a={description:"Setup VNC on a Raspberry Pi",image:null,layout:"article",repository:"https://github.com/lufixSch/guides",repository_icon:"github",status:"finished",title:"VNC on Raspbian",update:"https://raw.githubusercontent.com/lufixSch/guides/main/Raspberry%20Pi/Raspbian%20with%20vnc.md"};function wa(g,d,S){return g.$$set=b=>{S(0,d=Jl(Jl({},d),da(b)))},d=da(d),[d]}class La extends va{constructor(d){super(),ha(this,d,wa,ka,Aa,{})}}export{La as default,_a as metadata};
