import{S as Ns,i as Ps,s as Cs,w as ra,x as Ms,y as Os,z as Ts,A as Rs,B as ks,r as Fs,v as js,C as Bs,D as Ds,e as l,t as r,a as c,c as a,b as s,d as n,f as o,g as f,E as d,h as W,j as p,k as e,n as Us}from"./index.e23b10ae.js";import{A as Hs}from"./article.e19d21fa.js";function qs(Y){let u,b,L,g,m,v,k,lo,bt,Q,C,Be,ao,so,Ue,ro,no,Lt,z,He,qe,io,gt,J,po,wt,V,co,St,y,Ge,fo,uo,H,mo,$e,ho,Eo,_o,Ke,vo,yo,We,Ao,xt,M,bo,Ye,Lo,go,kt,O,Qe,wo,So,ze,xo,Dt,X,ko,It,Z,Do,Nt,T,Io,Je,No,Po,Pt,R,ee,Co,q,Ve,Mo,Oo,Xe,To,Ro,te,Fo,G,Ze,jo,Bo,et,Uo,Ct,oe,Ho,Mt,F,qo,tt,Go,$o,Ot,j,ot,Ko,Wo,le,lt,Yo,Qo,Tt,ae,zo,Rt,se,at,Jo,Ft,D,$,w,re,Vo,ne,Xo,ie,Zo,pe,el,ce,tl,ol,S,fe,ll,de,al,ue,sl,me,rl,he,nl,jt,B,il,st,pl,cl,Bt,Ee,A,rt,fl,dl,nt,ul,ml,it,hl,El,pt,_l,vl,Ut,_e,yl,Ht,ve,Al,qt,I,ct,h,ye,bl,Ae,Ll,be,gl,Le,wl,ge,Sl,we,xl,Se,kl,xe,Dl,ke,Il,De,Nl,Ie,Pl,Ne,Cl,Gt,Pe,Ml,$t,E,Ce,Ol,N,ft,Tl,Rl,dt,Fl,jl,ut,Bl,Ul,Me,Hl,mt,ht,ql,Gl,K,$l,Et,Kl,Wl,Yl,Oe,Ql,_t,Te,zl,vt,Jl,Vl,yt,Xl;return{c(){u=l("h1"),b=r("AutoLLaMa"),L=c(),g=l("p"),m=r("Supercharge your local LLM with different agents"),v=c(),k=l("p"),lo=r("This project is a union off different smaller ideas I had/build to improve the capabilities of LLMs, build into a modular framework. The framework is built to be extendable, so feel free to experiment with it."),bt=c(),Q=l("blockquote"),C=l("p"),Be=l("strong"),ao=r("ℹ️ NOTE:"),so=r(" Maybe you also found my text_generation_webui_auto_llama repository on GitHub. This is "),Ue=l("strong"),ro=r("NOT"),no=r(" (yet) a extension of auto-llama for oobabooga/text-generation-webui!"),Lt=c(),z=l("blockquote"),He=l("p"),qe=l("strong"),io=r("⚠️ WARNING: This project is still in early development!"),gt=c(),J=l("h2"),po=r("Framework"),wt=c(),V=l("p"),co=r("At the moment the framework is based on four main ideas:"),St=c(),y=l("ol"),Ge=l("li"),fo=r("Agents - Agent that uses an LLM and/or other tools to perform a specific task derived from a single prompt or a chat history."),uo=c(),H=l("li"),mo=r("Managers - A system that decides which agent to use for a given prompt or chat history. However, the boundaries between Agents and Managers are not clear cut (see for example "),$e=l("code"),ho=r("auto_llama.agents.research.ResearchAgent"),Eo=r(")"),_o=c(),Ke=l("li"),vo=r("Memory - A system that stores information across agents and prompts to improve the performance of the system."),yo=c(),We=l("li"),Ao=r("LLMs - A interface to interact with a LLM for regular text generation and chat."),xt=c(),M=l("p"),bo=r("Additionally the "),Ye=l("code"),Lo=r("auto_llama"),go=r(" module provides some submodules with helpful utilities."),kt=c(),O=l("ol"),Qe=l("li"),wo=r("nlp - Some functions for text processing"),So=c(),ze=l("li"),xo=r("react - Small ReAct framework to make an implementation easier"),Dt=c(),X=l("h2"),ko=r("Implementations"),It=c(),Z=l("h3"),Do=r("Agents"),Nt=c(),T=l("p"),Io=r("There are a few agents implemented currently. They are accessible over the "),Je=l("code"),No=r("auto_llama.agents"),Po=r(" module:"),Pt=c(),R=l("ul"),ee=l("li"),Co=r("code - Agents based around executing code in a sandbox environment (Docker container)"),q=l("ul"),Ve=l("li"),Mo=r("CodeExecAgent - Executes code included in the prompt or last chat message"),Oo=c(),Xe=l("li"),To=r("CodeAgent - Uses an LLM to generate code based on a objective and executes it"),Ro=c(),te=l("li"),Fo=r("research - Agents based around finding information in the internet"),G=l("ul"),Ze=l("li"),jo=r("SearchAgent: Retrieves information using a single tool (e.g. WikipediaSearchAgent, DuckDuckGoSearchAgent)"),Bo=c(),et=l("li"),Uo=r("ResearchAgent: Thoroughly researchs a given topic using multiple SearchAgents and ReAct"),Ct=c(),oe=l("h2"),Ho=r("Installation"),Mt=c(),F=l("p"),qo=r("At the moment it is not possible to install AutoLLaMa using "),tt=l("code"),Go=r("pip"),$o=r(". You need to install it from source."),Ot=c(),j=l("ol"),ot=l("li"),Ko=r("Clone the repository"),Wo=c(),le=l("li"),lt=l("code"),Yo=r("pip install ."),Qo=r(" in the root directory of the repository"),Tt=c(),ae=l("p"),zo=r("In order to make the package light weight there are optional dependencies defined separately for each submodule or group of agents. You cann install them separately."),Rt=c(),se=l("p"),at=l("em"),Jo=r("Example:"),Ft=c(),D=l("pre"),$=l("code"),w=l("span"),re=l("span"),Vo=r("pip"),ne=l("span"),Xo=r(" "),ie=l("span"),Zo=r("install"),pe=l("span"),el=r(" "),ce=l("span"),tl=r(".[agent.code]"),ol=r(`
`),S=l("span"),fe=l("span"),ll=r("pip"),de=l("span"),al=r(" "),ue=l("span"),sl=r("install"),me=l("span"),rl=r(" "),he=l("span"),nl=r(".[module.nlp]"),jt=c(),B=l("p"),il=r("To install all dependencies, run "),st=l("code"),pl=r("pip install .[all]"),cl=r(". This will install all optional dependencies for the project."),Bt=c(),Ee=l("blockquote"),A=l("p"),rt=l("strong"),fl=r("ℹ️ NOTE:"),dl=r(" Optional dependencies including the "),nt=l("code"),ul=r("nlp"),ml=r(" module (e.g. "),it=l("code"),hl=r("module.nlp"),El=r(", "),pt=l("code"),_l=r("agent.research"),vl=r(" …) will install torch. Depending on you system you might want to install it beforehand."),Ut=c(),_e=l("h3"),yl=r("Development"),Ht=c(),ve=l("p"),Al=r("Install the package in editable mode"),qt=c(),I=l("pre"),ct=l("code"),h=l("span"),ye=l("span"),bl=r("pip"),Ae=l("span"),Ll=r(" "),be=l("span"),gl=r("install"),Le=l("span"),wl=r(" "),ge=l("span"),Sl=r("-e"),we=l("span"),xl=r(" "),Se=l("span"),kl=r(".["),xe=l("span"),Dl=r("<"),ke=l("span"),Il=r("opional_dependencie"),De=l("span"),Nl=r("s"),Ie=l("span"),Pl=r(">"),Ne=l("span"),Cl=r("]"),Gt=c(),Pe=l("h2"),Ml=r("ToDo"),$t=c(),E=l("ul"),Ce=l("li"),Ol=r("Add Manager implementations"),N=l("ul"),ft=l("li"),Tl=r("CommandManager - Select agent based on a command (e.g. /code, /search …)"),Rl=c(),dt=l("li"),Fl=r("KeywordManager - Select agent based on keywords in the input"),jl=c(),ut=l("li"),Bl=r("AutoManager - Automatically decides which agent to use based on the context"),Ul=c(),Me=l("li"),Hl=r("Improve agent response system"),mt=l("ul"),ht=l("li"),ql=r("Rework response types -> don’t force a position, just give information about the response"),Gl=c(),K=l("li"),$l=r("Improve agent "),Et=l("code"),Kl=r("run_chat"),Wl=r(" default"),Yl=c(),Oe=l("li"),Ql=r("Add time aware memory (No Idea how to do this!)"),_t=l("ul"),Te=l("li"),zl=r("Idea: "),vt=l("em"),Jl=r("Fetch x recent memory’s and y memory’s (time independent) and mark them as recent/general"),Vl=c(),yt=l("li"),Xl=r("Add image/multimodal memory (Supported by txtai out of the box)"),this.h()},l(t){u=a(t,"H1",{});var i=s(u);b=n(i,"AutoLLaMa"),i.forEach(o),L=f(t),g=a(t,"P",{});var na=s(g);m=n(na,"Supercharge your local LLM with different agents"),na.forEach(o),v=f(t),k=a(t,"P",{});var ia=s(k);lo=n(ia,"This project is a union off different smaller ideas I had/build to improve the capabilities of LLMs, build into a modular framework. The framework is built to be extendable, so feel free to experiment with it."),ia.forEach(o),bt=f(t),Q=a(t,"BLOCKQUOTE",{});var pa=s(Q);C=a(pa,"P",{});var At=s(C);Be=a(At,"STRONG",{});var ca=s(Be);ao=n(ca,"ℹ️ NOTE:"),ca.forEach(o),so=n(At," Maybe you also found my text_generation_webui_auto_llama repository on GitHub. This is "),Ue=a(At,"STRONG",{});var fa=s(Ue);ro=n(fa,"NOT"),fa.forEach(o),no=n(At," (yet) a extension of auto-llama for oobabooga/text-generation-webui!"),At.forEach(o),pa.forEach(o),Lt=f(t),z=a(t,"BLOCKQUOTE",{});var da=s(z);He=a(da,"P",{});var ua=s(He);qe=a(ua,"STRONG",{});var ma=s(qe);io=n(ma,"⚠️ WARNING: This project is still in early development!"),ma.forEach(o),ua.forEach(o),da.forEach(o),gt=f(t),J=a(t,"H2",{});var ha=s(J);po=n(ha,"Framework"),ha.forEach(o),wt=f(t),V=a(t,"P",{});var Ea=s(V);co=n(Ea,"At the moment the framework is based on four main ideas:"),Ea.forEach(o),St=f(t),y=a(t,"OL",{});var U=s(y);Ge=a(U,"LI",{});var _a=s(Ge);fo=n(_a,"Agents - Agent that uses an LLM and/or other tools to perform a specific task derived from a single prompt or a chat history."),_a.forEach(o),uo=f(U),H=a(U,"LI",{});var Kt=s(H);mo=n(Kt,"Managers - A system that decides which agent to use for a given prompt or chat history. However, the boundaries between Agents and Managers are not clear cut (see for example "),$e=a(Kt,"CODE",{});var va=s($e);ho=n(va,"auto_llama.agents.research.ResearchAgent"),va.forEach(o),Eo=n(Kt,")"),Kt.forEach(o),_o=f(U),Ke=a(U,"LI",{});var ya=s(Ke);vo=n(ya,"Memory - A system that stores information across agents and prompts to improve the performance of the system."),ya.forEach(o),yo=f(U),We=a(U,"LI",{});var Aa=s(We);Ao=n(Aa,"LLMs - A interface to interact with a LLM for regular text generation and chat."),Aa.forEach(o),U.forEach(o),xt=f(t),M=a(t,"P",{});var Wt=s(M);bo=n(Wt,"Additionally the "),Ye=a(Wt,"CODE",{});var ba=s(Ye);Lo=n(ba,"auto_llama"),ba.forEach(o),go=n(Wt," module provides some submodules with helpful utilities."),Wt.forEach(o),kt=f(t),O=a(t,"OL",{});var Yt=s(O);Qe=a(Yt,"LI",{});var La=s(Qe);wo=n(La,"nlp - Some functions for text processing"),La.forEach(o),So=f(Yt),ze=a(Yt,"LI",{});var ga=s(ze);xo=n(ga,"react - Small ReAct framework to make an implementation easier"),ga.forEach(o),Yt.forEach(o),Dt=f(t),X=a(t,"H2",{});var wa=s(X);ko=n(wa,"Implementations"),wa.forEach(o),It=f(t),Z=a(t,"H3",{});var Sa=s(Z);Do=n(Sa,"Agents"),Sa.forEach(o),Nt=f(t),T=a(t,"P",{});var Qt=s(T);Io=n(Qt,"There are a few agents implemented currently. They are accessible over the "),Je=a(Qt,"CODE",{});var xa=s(Je);No=n(xa,"auto_llama.agents"),xa.forEach(o),Po=n(Qt," module:"),Qt.forEach(o),Pt=f(t),R=a(t,"UL",{});var zt=s(R);ee=a(zt,"LI",{});var Zl=s(ee);Co=n(Zl,"code - Agents based around executing code in a sandbox environment (Docker container)"),q=a(Zl,"UL",{});var Jt=s(q);Ve=a(Jt,"LI",{});var ka=s(Ve);Mo=n(ka,"CodeExecAgent - Executes code included in the prompt or last chat message"),ka.forEach(o),Oo=f(Jt),Xe=a(Jt,"LI",{});var Da=s(Xe);To=n(Da,"CodeAgent - Uses an LLM to generate code based on a objective and executes it"),Da.forEach(o),Jt.forEach(o),Zl.forEach(o),Ro=f(zt),te=a(zt,"LI",{});var ea=s(te);Fo=n(ea,"research - Agents based around finding information in the internet"),G=a(ea,"UL",{});var Vt=s(G);Ze=a(Vt,"LI",{});var Ia=s(Ze);jo=n(Ia,"SearchAgent: Retrieves information using a single tool (e.g. WikipediaSearchAgent, DuckDuckGoSearchAgent)"),Ia.forEach(o),Bo=f(Vt),et=a(Vt,"LI",{});var Na=s(et);Uo=n(Na,"ResearchAgent: Thoroughly researchs a given topic using multiple SearchAgents and ReAct"),Na.forEach(o),Vt.forEach(o),ea.forEach(o),zt.forEach(o),Ct=f(t),oe=a(t,"H2",{});var Pa=s(oe);Ho=n(Pa,"Installation"),Pa.forEach(o),Mt=f(t),F=a(t,"P",{});var Xt=s(F);qo=n(Xt,"At the moment it is not possible to install AutoLLaMa using "),tt=a(Xt,"CODE",{});var Ca=s(tt);Go=n(Ca,"pip"),Ca.forEach(o),$o=n(Xt,". You need to install it from source."),Xt.forEach(o),Ot=f(t),j=a(t,"OL",{});var Zt=s(j);ot=a(Zt,"LI",{});var Ma=s(ot);Ko=n(Ma,"Clone the repository"),Ma.forEach(o),Wo=f(Zt),le=a(Zt,"LI",{});var ta=s(le);lt=a(ta,"CODE",{});var Oa=s(lt);Yo=n(Oa,"pip install ."),Oa.forEach(o),Qo=n(ta," in the root directory of the repository"),ta.forEach(o),Zt.forEach(o),Tt=f(t),ae=a(t,"P",{});var Ta=s(ae);zo=n(Ta,"In order to make the package light weight there are optional dependencies defined separately for each submodule or group of agents. You cann install them separately."),Ta.forEach(o),Rt=f(t),se=a(t,"P",{});var Ra=s(se);at=a(Ra,"EM",{});var Fa=s(at);Jo=n(Fa,"Example:"),Fa.forEach(o),Ra.forEach(o),Ft=f(t),D=a(t,"PRE",{class:!0,style:!0,tabindex:!0});var ja=s(D);$=a(ja,"CODE",{});var eo=s($);w=a(eo,"SPAN",{class:!0});var Re=s(w);re=a(Re,"SPAN",{style:!0});var Ba=s(re);Vo=n(Ba,"pip"),Ba.forEach(o),ne=a(Re,"SPAN",{style:!0});var Ua=s(ne);Xo=n(Ua," "),Ua.forEach(o),ie=a(Re,"SPAN",{style:!0});var Ha=s(ie);Zo=n(Ha,"install"),Ha.forEach(o),pe=a(Re,"SPAN",{style:!0});var qa=s(pe);el=n(qa," "),qa.forEach(o),ce=a(Re,"SPAN",{style:!0});var Ga=s(ce);tl=n(Ga,".[agent.code]"),Ga.forEach(o),Re.forEach(o),ol=n(eo,`
`),S=a(eo,"SPAN",{class:!0});var Fe=s(S);fe=a(Fe,"SPAN",{style:!0});var $a=s(fe);ll=n($a,"pip"),$a.forEach(o),de=a(Fe,"SPAN",{style:!0});var Ka=s(de);al=n(Ka," "),Ka.forEach(o),ue=a(Fe,"SPAN",{style:!0});var Wa=s(ue);sl=n(Wa,"install"),Wa.forEach(o),me=a(Fe,"SPAN",{style:!0});var Ya=s(me);rl=n(Ya," "),Ya.forEach(o),he=a(Fe,"SPAN",{style:!0});var Qa=s(he);nl=n(Qa,".[module.nlp]"),Qa.forEach(o),Fe.forEach(o),eo.forEach(o),ja.forEach(o),jt=f(t),B=a(t,"P",{});var to=s(B);il=n(to,"To install all dependencies, run "),st=a(to,"CODE",{});var za=s(st);pl=n(za,"pip install .[all]"),za.forEach(o),cl=n(to,". This will install all optional dependencies for the project."),to.forEach(o),Bt=f(t),Ee=a(t,"BLOCKQUOTE",{});var Ja=s(Ee);A=a(Ja,"P",{});var P=s(A);rt=a(P,"STRONG",{});var Va=s(rt);fl=n(Va,"ℹ️ NOTE:"),Va.forEach(o),dl=n(P," Optional dependencies including the "),nt=a(P,"CODE",{});var Xa=s(nt);ul=n(Xa,"nlp"),Xa.forEach(o),ml=n(P," module (e.g. "),it=a(P,"CODE",{});var Za=s(it);hl=n(Za,"module.nlp"),Za.forEach(o),El=n(P,", "),pt=a(P,"CODE",{});var es=s(pt);_l=n(es,"agent.research"),es.forEach(o),vl=n(P," …) will install torch. Depending on you system you might want to install it beforehand."),P.forEach(o),Ja.forEach(o),Ut=f(t),_e=a(t,"H3",{});var ts=s(_e);yl=n(ts,"Development"),ts.forEach(o),Ht=f(t),ve=a(t,"P",{});var os=s(ve);Al=n(os,"Install the package in editable mode"),os.forEach(o),qt=f(t),I=a(t,"PRE",{class:!0,style:!0,tabindex:!0});var ls=s(I);ct=a(ls,"CODE",{});var as=s(ct);h=a(as,"SPAN",{class:!0});var _=s(h);ye=a(_,"SPAN",{style:!0});var ss=s(ye);bl=n(ss,"pip"),ss.forEach(o),Ae=a(_,"SPAN",{style:!0});var rs=s(Ae);Ll=n(rs," "),rs.forEach(o),be=a(_,"SPAN",{style:!0});var ns=s(be);gl=n(ns,"install"),ns.forEach(o),Le=a(_,"SPAN",{style:!0});var is=s(Le);wl=n(is," "),is.forEach(o),ge=a(_,"SPAN",{style:!0});var ps=s(ge);Sl=n(ps,"-e"),ps.forEach(o),we=a(_,"SPAN",{style:!0});var cs=s(we);xl=n(cs," "),cs.forEach(o),Se=a(_,"SPAN",{style:!0});var fs=s(Se);kl=n(fs,".["),fs.forEach(o),xe=a(_,"SPAN",{style:!0});var ds=s(xe);Dl=n(ds,"<"),ds.forEach(o),ke=a(_,"SPAN",{style:!0});var us=s(ke);Il=n(us,"opional_dependencie"),us.forEach(o),De=a(_,"SPAN",{style:!0});var ms=s(De);Nl=n(ms,"s"),ms.forEach(o),Ie=a(_,"SPAN",{style:!0});var hs=s(Ie);Pl=n(hs,">"),hs.forEach(o),Ne=a(_,"SPAN",{style:!0});var Es=s(Ne);Cl=n(Es,"]"),Es.forEach(o),_.forEach(o),as.forEach(o),ls.forEach(o),Gt=f(t),Pe=a(t,"H2",{});var _s=s(Pe);Ml=n(_s,"ToDo"),_s.forEach(o),$t=f(t),E=a(t,"UL",{});var x=s(E);Ce=a(x,"LI",{});var oa=s(Ce);Ol=n(oa,"Add Manager implementations"),N=a(oa,"UL",{});var je=s(N);ft=a(je,"LI",{});var vs=s(ft);Tl=n(vs,"CommandManager - Select agent based on a command (e.g. /code, /search …)"),vs.forEach(o),Rl=f(je),dt=a(je,"LI",{});var ys=s(dt);Fl=n(ys,"KeywordManager - Select agent based on keywords in the input"),ys.forEach(o),jl=f(je),ut=a(je,"LI",{});var As=s(ut);Bl=n(As,"AutoManager - Automatically decides which agent to use based on the context"),As.forEach(o),je.forEach(o),oa.forEach(o),Ul=f(x),Me=a(x,"LI",{});var la=s(Me);Hl=n(la,"Improve agent response system"),mt=a(la,"UL",{});var bs=s(mt);ht=a(bs,"LI",{});var Ls=s(ht);ql=n(Ls,"Rework response types -> don’t force a position, just give information about the response"),Ls.forEach(o),bs.forEach(o),la.forEach(o),Gl=f(x),K=a(x,"LI",{});var oo=s(K);$l=n(oo,"Improve agent "),Et=a(oo,"CODE",{});var gs=s(Et);Kl=n(gs,"run_chat"),gs.forEach(o),Wl=n(oo," default"),oo.forEach(o),Yl=f(x),Oe=a(x,"LI",{});var aa=s(Oe);Ql=n(aa,"Add time aware memory (No Idea how to do this!)"),_t=a(aa,"UL",{});var ws=s(_t);Te=a(ws,"LI",{});var sa=s(Te);zl=n(sa,"Idea: "),vt=a(sa,"EM",{});var Ss=s(vt);Jl=n(Ss,"Fetch x recent memory’s and y memory’s (time independent) and mark them as recent/general"),Ss.forEach(o),sa.forEach(o),ws.forEach(o),aa.forEach(o),Vl=f(x),yt=a(x,"LI",{});var xs=s(yt);Xl=n(xs,"Add image/multimodal memory (Supported by txtai out of the box)"),xs.forEach(o),x.forEach(o),this.h()},h(){d(re,"color","#88C0D0"),d(ne,"color","#D8DEE9FF"),d(ie,"color","#A3BE8C"),d(pe,"color","#D8DEE9FF"),d(ce,"color","#A3BE8C"),W(w,"class","line"),d(fe,"color","#88C0D0"),d(de,"color","#D8DEE9FF"),d(ue,"color","#A3BE8C"),d(me,"color","#D8DEE9FF"),d(he,"color","#A3BE8C"),W(S,"class","line"),W(D,"class","shiki nord"),d(D,"background-color","#2e3440ff"),W(D,"tabindex","0"),d(ye,"color","#88C0D0"),d(Ae,"color","#D8DEE9FF"),d(be,"color","#A3BE8C"),d(Le,"color","#D8DEE9FF"),d(ge,"color","#A3BE8C"),d(we,"color","#D8DEE9FF"),d(Se,"color","#A3BE8C"),d(xe,"color","#81A1C1"),d(ke,"color","#A3BE8C"),d(De,"color","#D8DEE9FF"),d(Ie,"color","#81A1C1"),d(Ne,"color","#A3BE8C"),W(h,"class","line"),W(I,"class","shiki nord"),d(I,"background-color","#2e3440ff"),W(I,"tabindex","0")},m(t,i){p(t,u,i),e(u,b),p(t,L,i),p(t,g,i),e(g,m),p(t,v,i),p(t,k,i),e(k,lo),p(t,bt,i),p(t,Q,i),e(Q,C),e(C,Be),e(Be,ao),e(C,so),e(C,Ue),e(Ue,ro),e(C,no),p(t,Lt,i),p(t,z,i),e(z,He),e(He,qe),e(qe,io),p(t,gt,i),p(t,J,i),e(J,po),p(t,wt,i),p(t,V,i),e(V,co),p(t,St,i),p(t,y,i),e(y,Ge),e(Ge,fo),e(y,uo),e(y,H),e(H,mo),e(H,$e),e($e,ho),e(H,Eo),e(y,_o),e(y,Ke),e(Ke,vo),e(y,yo),e(y,We),e(We,Ao),p(t,xt,i),p(t,M,i),e(M,bo),e(M,Ye),e(Ye,Lo),e(M,go),p(t,kt,i),p(t,O,i),e(O,Qe),e(Qe,wo),e(O,So),e(O,ze),e(ze,xo),p(t,Dt,i),p(t,X,i),e(X,ko),p(t,It,i),p(t,Z,i),e(Z,Do),p(t,Nt,i),p(t,T,i),e(T,Io),e(T,Je),e(Je,No),e(T,Po),p(t,Pt,i),p(t,R,i),e(R,ee),e(ee,Co),e(ee,q),e(q,Ve),e(Ve,Mo),e(q,Oo),e(q,Xe),e(Xe,To),e(R,Ro),e(R,te),e(te,Fo),e(te,G),e(G,Ze),e(Ze,jo),e(G,Bo),e(G,et),e(et,Uo),p(t,Ct,i),p(t,oe,i),e(oe,Ho),p(t,Mt,i),p(t,F,i),e(F,qo),e(F,tt),e(tt,Go),e(F,$o),p(t,Ot,i),p(t,j,i),e(j,ot),e(ot,Ko),e(j,Wo),e(j,le),e(le,lt),e(lt,Yo),e(le,Qo),p(t,Tt,i),p(t,ae,i),e(ae,zo),p(t,Rt,i),p(t,se,i),e(se,at),e(at,Jo),p(t,Ft,i),p(t,D,i),e(D,$),e($,w),e(w,re),e(re,Vo),e(w,ne),e(ne,Xo),e(w,ie),e(ie,Zo),e(w,pe),e(pe,el),e(w,ce),e(ce,tl),e($,ol),e($,S),e(S,fe),e(fe,ll),e(S,de),e(de,al),e(S,ue),e(ue,sl),e(S,me),e(me,rl),e(S,he),e(he,nl),p(t,jt,i),p(t,B,i),e(B,il),e(B,st),e(st,pl),e(B,cl),p(t,Bt,i),p(t,Ee,i),e(Ee,A),e(A,rt),e(rt,fl),e(A,dl),e(A,nt),e(nt,ul),e(A,ml),e(A,it),e(it,hl),e(A,El),e(A,pt),e(pt,_l),e(A,vl),p(t,Ut,i),p(t,_e,i),e(_e,yl),p(t,Ht,i),p(t,ve,i),e(ve,Al),p(t,qt,i),p(t,I,i),e(I,ct),e(ct,h),e(h,ye),e(ye,bl),e(h,Ae),e(Ae,Ll),e(h,be),e(be,gl),e(h,Le),e(Le,wl),e(h,ge),e(ge,Sl),e(h,we),e(we,xl),e(h,Se),e(Se,kl),e(h,xe),e(xe,Dl),e(h,ke),e(ke,Il),e(h,De),e(De,Nl),e(h,Ie),e(Ie,Pl),e(h,Ne),e(Ne,Cl),p(t,Gt,i),p(t,Pe,i),e(Pe,Ml),p(t,$t,i),p(t,E,i),e(E,Ce),e(Ce,Ol),e(Ce,N),e(N,ft),e(ft,Tl),e(N,Rl),e(N,dt),e(dt,Fl),e(N,jl),e(N,ut),e(ut,Bl),e(E,Ul),e(E,Me),e(Me,Hl),e(Me,mt),e(mt,ht),e(ht,ql),e(E,Gl),e(E,K),e(K,$l),e(K,Et),e(Et,Kl),e(K,Wl),e(E,Yl),e(E,Oe),e(Oe,Ql),e(Oe,_t),e(_t,Te),e(Te,zl),e(Te,vt),e(vt,Jl),e(E,Vl),e(E,yt),e(yt,Xl)},p:Us,d(t){t&&o(u),t&&o(L),t&&o(g),t&&o(v),t&&o(k),t&&o(bt),t&&o(Q),t&&o(Lt),t&&o(z),t&&o(gt),t&&o(J),t&&o(wt),t&&o(V),t&&o(St),t&&o(y),t&&o(xt),t&&o(M),t&&o(kt),t&&o(O),t&&o(Dt),t&&o(X),t&&o(It),t&&o(Z),t&&o(Nt),t&&o(T),t&&o(Pt),t&&o(R),t&&o(Ct),t&&o(oe),t&&o(Mt),t&&o(F),t&&o(Ot),t&&o(j),t&&o(Tt),t&&o(ae),t&&o(Rt),t&&o(se),t&&o(Ft),t&&o(D),t&&o(jt),t&&o(B),t&&o(Bt),t&&o(Ee),t&&o(Ut),t&&o(_e),t&&o(Ht),t&&o(ve),t&&o(qt),t&&o(I),t&&o(Gt),t&&o(Pe),t&&o($t),t&&o(E)}}}function Gs(Y){let u,b;const L=[Y[0],Is];let g={$$slots:{default:[qs]},$$scope:{ctx:Y}};for(let m=0;m<L.length;m+=1)g=ra(g,L[m]);return u=new Hs({props:g}),{c(){Ms(u.$$.fragment)},l(m){Os(u.$$.fragment,m)},m(m,v){Ts(u,m,v),b=!0},p(m,[v]){const k=v&1?Rs(L,[v&1&&ks(m[0]),v&0&&ks(Is)]):{};v&2&&(k.$$scope={dirty:v,ctx:m}),u.$set(k)},i(m){b||(Fs(u.$$.fragment,m),b=!0)},o(m){js(u.$$.fragment,m),b=!1},d(m){Bs(u,m)}}}const Is={description:"Supercharge your local LLM with different agents, long term memory and more!",image:"/articles/pcb_buttons.png",layout:"project",repository:"https://github.com/lufixSch/auto_llama",repository_icon:"github",status:"wip",title:"AutoLLaMa",update:"https://raw.githubusercontent.com/lufixSch/auto_llama/main/README.md"};function $s(Y,u,b){return Y.$$set=L=>{b(0,u=ra(ra({},u),Ds(L)))},u=Ds(u),[u]}class Ys extends Ns{constructor(u){super(),Ps(this,u,$s,Gs,Cs,{})}}export{Ys as default,Is as metadata};
