import{s as E,a as k,f as d,c as x,g as y,h as b,H as T,d as p,i as $,u,G,l as w,N as I,m as H,O as P,j as v,F as q}from"../chunks/scheduler.0c4d99cf.js";import{S as M,i as N,b as j,d as z,m as K,a as L,t as O,e as D}from"../chunks/index.c7e22c97.js";import{e as S}from"../chunks/each.e93c367b.js";import{S as F}from"../chunks/Seo.39de9ab7.js";function A(i,t,n){const r=i.slice();return r[1]=t[n].title,r[2]=t[n].href,r[3]=t[n].description,r}function C(i){let t,n,r=i[1]+"",c,_,h,m=i[3]+"",f;return{c(){t=d("li"),n=d("a"),c=w(r),_=w(": "),h=new I(!1),f=k(),this.h()},l(s){t=y(s,"LI",{class:!0});var a=b(t);n=y(a,"A",{class:!0,href:!0,target:!0});var e=b(n);c=H(e,r),e.forEach(p),_=H(a,": "),h=P(a,!1),f=x(a),a.forEach(p),this.h()},h(){v(n,"class","text-link svelte-4yy4y"),v(n,"href",i[2]),v(n,"target","_blank"),h.a=f,v(t,"class","svelte-4yy4y")},m(s,a){$(s,t,a),u(t,n),u(n,c),u(t,_),h.m(m,t),u(t,f)},p:q,d(s){s&&p(t)}}}function J(i){let t,n,r,c,_=`A blog is forthcoming! In the meantime, you can take a look at some math
        I've written:`,h,m,f;t=new F({props:{title:"Maxwell Jiang – Writing"}});let s=S(i[0]),a=[];for(let e=0;e<s.length;e+=1)a[e]=C(A(i,s,e));return{c(){j(t.$$.fragment),n=k(),r=d("section"),c=d("p"),c.textContent=_,h=k(),m=d("ul");for(let e=0;e<a.length;e+=1)a[e].c()},l(e){z(t.$$.fragment,e),n=x(e),r=y(e,"SECTION",{});var l=b(r);c=y(l,"P",{"data-svelte-h":!0}),T(c)!=="svelte-1z13lrd"&&(c.textContent=_),h=x(l),m=y(l,"UL",{});var o=b(m);for(let g=0;g<a.length;g+=1)a[g].l(o);o.forEach(p),l.forEach(p)},m(e,l){K(t,e,l),$(e,n,l),$(e,r,l),u(r,c),u(r,h),u(r,m);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(m,null);f=!0},p(e,[l]){if(l&1){s=S(e[0]);let o;for(o=0;o<s.length;o+=1){const g=A(e,s,o);a[o]?a[o].p(g,l):(a[o]=C(g),a[o].c(),a[o].m(m,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=s.length}},i(e){f||(L(t.$$.fragment,e),f=!0)},o(e){O(t.$$.fragment,e),f=!1},d(e){e&&(p(n),p(r)),D(t,e),G(a,e)}}}function Q(i){return[[{title:"Generalizations of Knotoids and Spatial Graphs",href:"https://arxiv.org/abs/2209.01922",description:"Paper exploring combinatorial and geometric properties of a new family of knot-theoretic objects."},{title:"Hyperbolic Knotoids",href:"https://arxiv.org/abs/2209.04556",description:'Paper establishing hyperbolic volume invariants for knotoids, a class of "open-ended knots".'},{title:"Quantum Groups and Hopf Algebras",href:"/math/quantum.pdf",description:"An expository paper on quantum groups and their applications to knot theory."},{title:"Category Theory Notes",href:"/math/vakilnotes.pdf",description:"Some notes on category theory, loosely following the first chapter of Vakil's algebraic geometry text. Don't read this to learn category theory for the first time, but it might be useful as a reference."}]]}class R extends M{constructor(t){super(),N(this,t,Q,J,E,{})}}export{R as component};
