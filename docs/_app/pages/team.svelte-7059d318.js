import{S as e,i as a,s as t,e as n,c as r,a as o,d as s,b as i,f as l,r as h,u,w as c,x as m,j as g,m as p,o as f,v as d,k as $,t as k,n as w,g as b,K as v,F as y,Z as K,G as E,D as T,E as x,X as A,l as N,_ as S,R,J as H}from"../chunks/vendor-0aa77445.js";import{H as W,T as j}from"../chunks/Heading-76e56b48.js";import{P as D}from"../chunks/Paragraph-c82be8aa.js";import{T as C}from"../chunks/Tooltip-45d41086.js";function I(e,a,t){const n=e.slice();return n[8]=a[t],n}function B(e){let a,t;return{c(){a=T("svg"),t=T("path"),this.h()},l(e){a=x(e,"svg",{xmlns:!0,viewBox:!0,fill:!0});var n=o(a);t=x(n,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),o(t).forEach(s),n.forEach(s),this.h()},h(){i(t,"fill-rule","evenodd"),i(t,"d","M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"),i(t,"clip-rule","evenodd"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"viewBox","0 0 20 20"),i(a,"fill","currentColor")},m(e,n){l(e,a,n),y(a,t)},p:E,d(e){e&&s(a)}}}function M(e){let a,t;return{c(){a=n("img"),this.h()},l(e){a=r(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){A(a.src,t=e[5])||i(a,"src",t),i(a,"alt","image of "+e[1]),i(a,"class","svelte-gc0y29")},m(e,t){l(e,a,t)},p:E,d(e){e&&s(a)}}}function P(e){let a;return{c(){a=k(e[1])},l(t){a=b(t,e[1])},m(e,t){l(e,a,t)},p:E,d(e){e&&s(a)}}}function L(e){let a,t;return a=new C({props:{text:e[4].join(".\n")+".",toggles:!0,left:!0,$$slots:{default:[F]},$$scope:{ctx:e}}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};2048&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function J(e){let a,t;return a=new C({props:{text:e[4].join(".\n")+".",toggles:!0,right:!0,$$slots:{default:[O]},$$scope:{ctx:e}}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};2048&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function F(e){let a;return{c(){a=k("Pepeha")},l(e){a=b(e,"Pepeha")},m(e,t){l(e,a,t)},d(e){e&&s(a)}}}function O(e){let a;return{c(){a=k("Pepeha")},l(e){a=b(e,"Pepeha")},m(e,t){l(e,a,t)},d(e){e&&s(a)}}}function Z(e){let a,t=e[8]+"";return{c(){a=k(t)},l(e){a=b(e,t)},m(e,t){l(e,a,t)},p:E,d(e){e&&s(a)}}}function z(e){let a,t;return a=new D({props:{$$slots:{default:[Z]},$$scope:{ctx:e}}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};2048&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function G(e){let a,t,E,T,x,A,N,S,R,H,D,C,F,O=e[2].join(", ")+"";let Z=(e[5]?M:B)(e);A=new W({props:{direction:e[0]?j.BottomLeft:j.BottomRight,$$slots:{default:[P]},$$scope:{ctx:e}}});let G=e[6]&&function(e){let a,t,g,p;const f=[J,L],d=[];function $(e,a){return e[0]?0:1}return t=$(e),g=d[t]=f[t](e),{c(){a=n("button"),g.c(),this.h()},l(e){a=r(e,"BUTTON",{class:!0,"aria-label":!0});var t=o(a);g.l(t),t.forEach(s),this.h()},h(){i(a,"class","button svelte-gc0y29"),i(a,"aria-label","show pepeha tooltip")},m(e,n){l(e,a,n),d[t].m(a,null),p=!0},p(e,n){let r=t;t=$(e),t===r?d[t].p(e,n):(h(),u(d[r],1,1,(()=>{d[r]=null})),c(),g=d[t],g?g.p(e,n):(g=d[t]=f[t](e),g.c()),m(g,1),g.m(a,null))},i(e){p||(m(g),p=!0)},o(e){u(g),p=!1},d(e){e&&s(a),d[t].d()}}}(e),V=e[3],q=[];for(let n=0;n<V.length;n+=1)q[n]=z(I(e,V,n));const U=e=>u(q[e],1,1,(()=>{q[e]=null}));return{c(){a=n("article"),t=n("header"),E=n("div"),Z.c(),T=$(),x=n("section"),g(A.$$.fragment),N=$(),S=n("h2"),R=k(O),H=$(),G&&G.c(),D=$(),C=n("article");for(let e=0;e<q.length;e+=1)q[e].c();this.h()},l(e){a=r(e,"ARTICLE",{class:!0});var n=o(a);t=r(n,"HEADER",{class:!0});var i=o(t);E=r(i,"DIV",{class:!0});var l=o(E);Z.l(l),l.forEach(s),T=w(i),x=r(i,"SECTION",{class:!0});var h=o(x);p(A.$$.fragment,h),h.forEach(s),N=w(i),S=r(i,"H2",{class:!0});var u=o(S);R=b(u,O),u.forEach(s),H=w(i),G&&G.l(i),i.forEach(s),D=w(n),C=r(n,"ARTICLE",{class:!0});var c=o(C);for(let a=0;a<q.length;a+=1)q[a].l(c);c.forEach(s),n.forEach(s),this.h()},h(){i(E,"class","img svelte-gc0y29"),i(x,"class","name svelte-gc0y29"),i(S,"class","titles svelte-gc0y29"),i(t,"class","svelte-gc0y29"),i(C,"class","blurb svelte-gc0y29"),i(a,"class","member svelte-gc0y29"),v(a,"right",e[0])},m(e,n){l(e,a,n),y(a,t),y(t,E),Z.m(E,null),y(t,T),y(t,x),f(A,x,null),y(t,N),y(t,S),y(S,R),y(t,H),G&&G.m(t,null),y(a,D),y(a,C);for(let a=0;a<q.length;a+=1)q[a].m(C,null);F=!0},p(e,[t]){Z.p(e,t);const n={};if(1&t&&(n.direction=e[0]?j.BottomLeft:j.BottomRight),2048&t&&(n.$$scope={dirty:t,ctx:e}),A.$set(n),e[6]&&G.p(e,t),8&t){let a;for(V=e[3],a=0;a<V.length;a+=1){const n=I(e,V,a);q[a]?(q[a].p(n,t),m(q[a],1)):(q[a]=z(n),q[a].c(),m(q[a],1),q[a].m(C,null))}for(h(),a=V.length;a<q.length;a+=1)U(a);c()}1&t&&v(a,"right",e[0])},i(e){if(!F){m(A.$$.fragment,e),m(G);for(let e=0;e<V.length;e+=1)m(q[e]);F=!0}},o(e){u(A.$$.fragment,e),u(G),q=q.filter(Boolean);for(let a=0;a<q.length;a+=1)u(q[a]);F=!1},d(e){e&&s(a),Z.d(),d(A),G&&G.d(),K(q,e)}}}function V(e,a,t){let{member:n}=a;const{name:r,tags:o,about:s,pepeha:i,imgSrc:l}=n;let{right:h=!1}=a;const u=i&&i.length>0;return e.$$set=e=>{"member"in e&&t(7,n=e.member),"right"in e&&t(0,h=e.right)},[h,r,o,s,i,l,u,n]}class q extends e{constructor(e){super(),a(this,e,V,G,t,{member:7,right:0})}}function U(e,a,t){const n=e.slice();return n[1]=a[t],n[3]=t,n}function X(e){let a,t;return a=new q({props:{member:e[1],right:!0}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};1&t&&(n.member=e[1]),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function Y(e){let a,t;return a=new q({props:{member:e[1]}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};1&t&&(n.member=e[1]),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function _(e){let a,t,n,r;const o=[Y,X],i=[];return a=e[3]%2!=0?0:1,t=i[a]=o[a](e),{c(){t.c(),n=N()},l(e){t.l(e),n=N()},m(e,t){i[a].m(e,t),l(e,n,t),r=!0},p(e,a){t.p(e,a)},i(e){r||(m(t),r=!0)},o(e){u(t),r=!1},d(e){i[a].d(e),e&&s(n)}}}function Q(e){let a,t,g,p=e[0],f=[];for(let n=0;n<p.length;n+=1)f[n]=_(U(e,p,n));const d=e=>u(f[e],1,1,(()=>{f[e]=null}));return{c(){a=n("div"),t=n("div");for(let e=0;e<f.length;e+=1)f[e].c();this.h()},l(e){a=r(e,"DIV",{class:!0});var n=o(a);t=r(n,"DIV",{class:!0});var i=o(t);for(let a=0;a<f.length;a+=1)f[a].l(i);i.forEach(s),n.forEach(s),this.h()},h(){i(t,"class","bg-inner gradient-gray fill pad-y gaps-y svelte-r4mg3p"),i(a,"class","bg svelte-r4mg3p")},m(e,n){l(e,a,n),y(a,t);for(let a=0;a<f.length;a+=1)f[a].m(t,null);g=!0},p(e,[a]){if(1&a){let n;for(p=e[0],n=0;n<p.length;n+=1){const r=U(e,p,n);f[n]?(f[n].p(r,a),m(f[n],1)):(f[n]=_(r),f[n].c(),m(f[n],1),f[n].m(t,null))}for(h(),n=p.length;n<f.length;n+=1)d(n);c()}},i(e){if(!g){for(let e=0;e<p.length;e+=1)m(f[e]);g=!0}},o(e){f=f.filter(Boolean);for(let a=0;a<f.length;a+=1)u(f[a]);g=!1},d(e){e&&s(a),K(f,e)}}}function ee(e,a,t){let{team:n}=a;return e.$$set=e=>{"team"in e&&t(0,n=e.team)},[n]}class ae extends e{constructor(e){super(),a(this,e,ee,Q,t,{team:0})}}const te=S([{name:"Jane 🌊",tags:["founder","peer support","tuākana"],pepeha:["Ko Whakapoungakau te maunga","Ko Kaituna te awa","Ko Ruamata te marae","Ko Ngāti Pikiao, Ngāti Whakaue ōku hapū","Ko Te Arawa te iwi","Ko Te Arawa te waka","Ko Jane Beamsley ahau"],about:["Jane is the founder of Whakaoranga Whanau Recovery Hub. Although she has\n      no immediate ties to Kaikohe, she was brought up by by her Te Arawa\n      whakapapa, but her granfathers' roots are with Ngati Te Roroa and Ngāti\n      Kahungunu.","She shares personal lived experience; maintaining mental wellbeing, as\n      well as alcohol and drug addiction. Her recovery journey had brought her\n      to Kaikohe and she wanted to give back and share the gifts of recovery\n      with others who may be struggling. She couldn’t do this journey alone.\n      He waka eke noa!","Jane has saved many lives, and we are forever grateful for her service."],frontline:!0,imgSrc:"/images/people/jane.jpg"},{name:"Dee 🔥",tags:["kaimanāki","peer support","tuākana"],pepeha:["Ko Hikurangi te maunga","Ko Ngātokimatawhaorua te waka","Ko Matawaia te marae","Ko Ngāti Hine te hapu","Ko Ngāpuhi te iwi","Ko Deeann Herkt Kopa ahau"],about:["Ka Kaimanāki ia Deeann Herkt; Dee is a peer support worker. She's been\n      clean and sober for 6 years after being addicted to methamphetamine for\n      many years. Dee checked herself into treatment, completed her programme in\n      2015 and is now very passionate about helping the next addict in their\n      recovery.","Another strong wāhine, she is always there to rescue her whanau and\n      support and teach Māoritanga via waiata & karakia especially."],frontline:!0,imgSrc:"/images/people/dee.jpg"},{name:"Rhonda 🔥",tags:["manager","co-founder","nāhi","trustee"],pepeha:["Ko Maungaemiemi tōku maunga","Ko Whangaroa tōku moana","Ko Kaingapipiwai tōku awa","Ko Mātaatua tōku waka","Ko Pupuke tōku marae","Ko Te Huia tōku whare tūpuna","Ko Ngapuhi tōku iwi","Ko Ngāti Pakahi tōku hapu","Ko Aaron Toki tōku hoa rangatira","Ko Shannyn, ko Rawiri, ko Julian, ko Fern āku tamariki","Ko nāhi ahau","Ko Kaikohe te kainga noho","Ko Rhonda Zielinski ahau"],about:["Rhonda is a registered Nurse and helped establish Whakaoranga Whanau\n      Recovery Hub in March 2020 alongside Jane. She's like a mother to the\n      Whakaoranga Whanau too. Born & bred in Rotorua, Rhonda moved North with\n      her parents at the age of 13 and has lived in Kaikohe ever since.","Rhonda also helps with Freedom Whare as a director of Whakamanamai\n      Whanau Charitable Trust; Freedom Whare help whanau with housing\n      solutions. Kaha nui ia Rhonda & very busy to put it mildly."],frontline:!0,imgSrc:"/images/people/rhonda.jpg"},{name:"Te Miringa 🔥",tags:["trustee of whakamanamai & freedom whare","life coach"],pepeha:[],about:[],imgSrc:"/images/people/te-miringa.jpg"},{name:"Stu 💪🏽",tags:["he waka eke noa","aod counsellor","kaumātua"],pepeha:[],about:[],frontline:!0,imgSrc:"/images/people/stu-bess.jpg"},{name:"Bess 🔥",tags:["he waka eke noa","therapist","kaumātua"],pepeha:[],about:[],frontline:!0,imgSrc:"/images/people/stu-bess.jpg"},{name:"Noreen 🔥",tags:["kaimanāki","peer support","tuākana"],pepeha:["Ko Mauao te maunga","Ko Tauranga Moana tōku kainga whenua","Ko Wairoa tāku awa","Ko Ngāti Ranginui raua, ko Ngāiterangi te iwi","Ko Noreen Ahau"],about:["Wāhine Māori Noreen has been blessed to have survived and overcome some\n      of life's tribulations, such as child sexual abuse, abandonment, loss and\n      violence. She has experienced her fair share of grief and emotional\n      trauma.","She is a survivor of drug and alcohol abuse and has struggled to maintain\n      her mental health all of her life. Now being clean and sober, as well as a\n      Christian, she has a heart to help other people through their grief and\n      trauma by sharing her experience and knowledge of health and wellbeing,\n      particularly using the Māori world view of health and wellness."],frontline:!0,imgSrc:"/images/people/noreen.jpg"},{name:"Aiden 💻",tags:["kaipūkaha rorohiko","tuākana"],pepeha:["I whanau mai au i Tāmaki","I tupu ake au i tāwāhi, London, Ingarangi","Ko Whakatere te maunga","Ko Tāheke te awa","Ko Ngātokimatawhaorua te waka","Ko Ngāpuhi te iwi","Ko Ngāti Pākau te hapu","Ko Tāhekeroa te marae","Ko Pehi, ko Jack, ko Langley ōku whanau","Ko kaipūkaha rorohiko 'au","Ko Aiden Langley ahau"],about:["Aiden has been described as more of a walker than a talker, so don't\n      expect much charisma from him. Aiden wrote this website, manages the IT\n      infrastructure and is our resident geek. 🤓","He was born in Tāmaki but moved with his parents to London at a young age\n      where he spent 20+ years growing up. His whanau originates from Tāheke &\n      Waima. He lives in Kaikohe these days.","He has been diagnosed with ADHD and has a mild form of Tourette's, so if\n      you ever meet him, you'll have to excuse any surprises. Drugs and alcohol\n      have played a large part in his life too.","You will probably see Aiden frequently, he runs ka kura rorohiko for te\n      kaimahi, and hopefully for the rōpū in the near future, but he prefers to\n      assume the stance of being 'behind the scenes' for the reasons mentioned\n      above."],imgSrc:"/images/people/aiden.jpg"},{name:"Doug",tags:["trustee of whakamanamai and freedom whare"],about:["Doug Healey is the founder of Influence Gym, which stretches the nation.\n      Rhonda runs the Influence gym here in Kaikohe. Doug is also director of\n      Whanau Ora Community Clinic.","A successful entrepreneur, a lot has been written about Doug on the\n      internet already so we won't go into too much detail here! But rest\n      assured, Doug is a community focused individual with talent and is one\n      piece that makes up the backbone of Whakaoranga Whanau Recovery Hub & it's\n      siblings."],imgSrc:"/images/people/doug.jpg"},{name:"Craig",tags:["trustee of whakamanamai & freedom whare"],about:["Craig Zielinski' skill lies in agriculture and industrial flavoured\n      trade. He is a big part of Freedom Whare, and also Whakamanamai Charitable\n      Trust.","As he's also a Zielinski, kaha nui ia Craig, e kaha nui te Zielinski\n      whanau. A lot of the large scale investment and planning is conducted by\n      Craig in accordance with Rhonda & ngā tīma.","Whenever we need a professional, Craig's phone rings."],imgSrc:"/images/people/craig.jpg"},{name:"Lily",tags:["trustee of whakaoranga whanau"],about:[],imgSrc:"/images/people/lily.jpg"}]);function ne(e){let a,t,h,u,c;return{c(){a=n("span"),t=k("Tātou tīma he hui mai!"),h=$(),u=n("span"),c=k("Meet our team!"),this.h()},l(e){a=r(e,"SPAN",{});var n=o(a);t=b(n,"Tātou tīma he hui mai!"),n.forEach(s),h=w(e),u=r(e,"SPAN",{class:!0});var i=o(u);c=b(i,"Meet our team!"),i.forEach(s),this.h()},h(){i(u,"class","small")},m(e,n){l(e,a,n),y(a,t),l(e,h,n),l(e,u,n),y(u,c)},d(e){e&&s(a),e&&s(h),e&&s(u)}}}function re(e){let a,t;return{c(){a=n("span"),t=k("Behind the scenes...")},l(e){a=r(e,"SPAN",{});var n=o(a);t=b(n,"Behind the scenes..."),n.forEach(s)},m(e,n){l(e,a,n),y(a,t)},d(e){e&&s(a)}}}function oe(e){let a,t,h,c,k,b,v,K,E,T,x,A,N,S,H,j;return a=new R({props:{title:"Meet the team",description:"Ngā kaimahi. Tātou tīma he hui mai! Those in front and behind\n    the scenes"}}),k=new W({props:{$$slots:{default:[ne]},$$scope:{ctx:e}}}),K=new ae({props:{team:e[0].filter(se)}}),A=new W({props:{$$slots:{default:[re]},$$scope:{ctx:e}}}),H=new ae({props:{team:e[0].filter(ie)}}),{c(){g(a.$$.fragment),t=$(),h=n("article"),c=n("header"),g(k.$$.fragment),b=$(),v=n("section"),g(K.$$.fragment),E=$(),T=n("article"),x=n("header"),g(A.$$.fragment),N=$(),S=n("section"),g(H.$$.fragment),this.h()},l(e){p(a.$$.fragment,e),t=w(e),h=r(e,"ARTICLE",{id:!0,class:!0});var n=o(h);c=r(n,"HEADER",{class:!0});var i=o(c);p(k.$$.fragment,i),i.forEach(s),b=w(n),v=r(n,"SECTION",{id:!0,class:!0});var l=o(v);p(K.$$.fragment,l),l.forEach(s),n.forEach(s),E=w(e),T=r(e,"ARTICLE",{id:!0,class:!0});var u=o(T);x=r(u,"HEADER",{class:!0});var m=o(x);p(A.$$.fragment,m),m.forEach(s),N=w(u),S=r(u,"SECTION",{id:!0,class:!0});var g=o(S);p(H.$$.fragment,g),g.forEach(s),u.forEach(s),this.h()},h(){i(c,"class","heading column svelte-13s0nmc"),i(v,"id","members"),i(v,"class","pad-x"),i(h,"id","kaimahi"),i(h,"class","pad-y"),i(x,"class","heading column svelte-13s0nmc"),i(S,"id","members-bts"),i(S,"class","pad-x"),i(T,"id","kaimahi-bts"),i(T,"class","pad-y")},m(e,n){f(a,e,n),l(e,t,n),l(e,h,n),y(h,c),f(k,c,null),y(h,b),y(h,v),f(K,v,null),l(e,E,n),l(e,T,n),y(T,x),f(A,x,null),y(T,N),y(T,S),f(H,S,null),j=!0},p(e,[a]){const t={};2&a&&(t.$$scope={dirty:a,ctx:e}),k.$set(t);const n={};1&a&&(n.team=e[0].filter(se)),K.$set(n);const r={};2&a&&(r.$$scope={dirty:a,ctx:e}),A.$set(r);const o={};1&a&&(o.team=e[0].filter(ie)),H.$set(o)},i(e){j||(m(a.$$.fragment,e),m(k.$$.fragment,e),m(K.$$.fragment,e),m(A.$$.fragment,e),m(H.$$.fragment,e),j=!0)},o(e){u(a.$$.fragment,e),u(k.$$.fragment,e),u(K.$$.fragment,e),u(A.$$.fragment,e),u(H.$$.fragment,e),j=!1},d(e){d(a,e),e&&s(t),e&&s(h),d(k),d(K),e&&s(E),e&&s(T),d(A),d(H)}}}const se=e=>e.frontline,ie=e=>!e.frontline;function le(e,a,t){let n;return H(e,te,(e=>t(0,n=e))),[n]}class he extends e{constructor(e){super(),a(this,e,le,oe,t,{})}}export{he as default};
