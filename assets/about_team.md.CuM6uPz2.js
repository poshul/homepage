import{V as T,a as A,b as B,c as y,d as D}from"./chunks/theme.CCouwPqY.js";import{d as b,_ as P,o as r,c as l,F as V,E as C,n as M,j as h,a2 as $,t as j,s as K,h as L,D as o,I as n,w as u,a as I}from"./chunks/framework.B1EckeLR.js";const E={avatar:"/images/team/elhabashi-hadeer.png",name:"Hadeer Elhabashy",title:"Postdoc",links:[]},x={avatar:"/images/team/default.png",name:"Ayesha Feroz",title:"PhD Student",links:[]},z={avatar:"/images/team/kaipf-camill.jpg",name:"Camill Kaipf",title:"Researcher",links:[]},H={avatar:"/images/team/default.png",name:"Jihyung Kim",title:"PhD Student",links:[]},_={avatar:"https://www.github.com/okohlbacher.png",name:"Oliver Kohlbacher",title:"Professor & Lead",links:[{icon:"github",link:"https://github.com/okohlbacher"}]},N={avatar:"/images/team/jeong-kyowon.png",name:"Kyowon Jeong",title:"Postdoc",links:[]},R={avatar:"/images/team/kuchenbecker-leon.png",name:"Leon Kuchenbecker",title:"Researcher",links:[]},W={avatar:"/images/team/nagel-andreas.png",name:"Andreas Nagel",title:"Systemadministrator",links:[]},J={avatar:"/images/team/default.png",name:"Matteo Pilz",title:"PhD Student",links:[]},v={avatar:"https://www.github.com/Nightknight3000.png",name:"Alexander Röhl",title:"PhD Student",links:[{icon:"github",link:"https://github.com/Nightknight3000"}]},F={avatar:"/images/team/sachsenberg-timo.png",name:"Timo Sachsenberg",title:"Postdoc"},O={avatar:"/images/team/default.png",name:"Arslan Siraj",title:"PhD Student",links:[]},q={avatar:"/images/team/sueruen-bilge.png",name:"Bilge Sueruen",title:"PhD Student",links:[]},Q={avatar:"/images/team/default.png",name:"Alex Walter",title:"Postdoc",links:[]},U={avatar:"/images/team/default.png",name:"Claudia Walter",title:"Assistant",links:[]},X={avatar:"/images/team/wein-samuel.jpg",name:"Samuel Wein",title:"PostDoc",links:[]},p=[_,U,z,R,W,E,N,F,Q,X,H,J,v,O,q,x];var t=(e=>(e.ALL="all",e.TBI="tbi",e.ABI="abi",e))(t||{});const Y=b({props:{group:{type:String,required:!0,default:`${t.ALL}`}},emits:["picked"],setup(e,{emit:a}){return{items:[{id:t.ALL,value:"All"},{id:t.ABI,value:"ABI"},{id:t.TBI,value:"TBI"}],pick:m=>{a("picked",m)}}}}),Z={class:"d-flex flex-row gap-2"},G={class:"mb-0"},ee=["onClick"];function te(e,a,i,c,m,f){return r(),l("div",Z,[(r(!0),l(V,null,C(e.items,(s,d)=>(r(),l("div",{key:d,class:M(["entity-card w-100 ratio-1x1 text-center",{active:e.group===s.id}])},[h("h3",G,[h("a",{href:"",class:"stretched-link",onClick:$(g=>e.pick(s.id),["prevent"])},j(s.value),9,ee)])],2))),128))])}const ae=P(Y,[["render",te]]),ne={avatar:"https://www.github.com/lucienclin.png",name:"Lucien Clin",title:"Researcher",links:[{icon:"github",link:"https://github.com/lucienclin"}]},ie={avatar:"/images/team/dijkstra-tjeerd.png",name:"Tjeerd Dijkstra",title:"Postdoc"},se={avatar:"https://www.github.com/SirHerr.png",name:"Marius de Arruda Botelho Herr",title:"PhD Student",links:[{icon:"github",link:"https://github.com/SirHerr"},{icon:"linkedin",link:"https://de.linkedin.com/in/marius-de-arruda-botelho-herr-60b89b18b"}]},oe={avatar:"https://www.github.com/antidodo.png",name:"David Hieber",title:"Researcher",links:[{icon:"github",link:"https://github.com/antidodo"}]},re={avatar:"https://www.github.com/tada5hi.png",name:"Peter Placzek",title:"Researcher",links:[{icon:"github",link:"https://github.com/tada5hi"},{icon:"twitter",link:"https://twitter.com/tada5hi"},{icon:"linkedin",link:"https://www.linkedin.com/in/peter-placzek-047a74210/"}]},le={avatar:"/images/team/default.png",name:"Aydin Can Polatkan",title:"PostDoc",links:[]},ce={avatar:"/images/team/siebrasse-birgit.png",name:"Siebrasse Birgit",title:"Projektkoordinatorin BWHC & DNPM"},k=[_,re,ne,oe,ce,ie,le,v,se],me=b({components:{KTeamSwitch:ae,VPTeamPage:T,VPTeamPageTitle:A,VPTeamMembers:B,VPTeamPageSection:y},setup(){const e=K(t.ALL),a=c=>{e.value=c},i=L(()=>e.value===t.ABI?p:e.value===t.TBI?k:D([...p,...k]));return{group:e,handlePicked:a,items:i}}}),de={class:"container mb-3"},ue={class:"mt-3 m-auto"};function he(e,a,i,c,m,f){const s=o("VPTeamPageTitle"),d=o("KTeamSwitch"),g=o("VPTeamMembers"),w=o("VPTeamPageSection"),S=o("VPTeamPage");return r(),l("div",de,[n(s,null,{title:u(()=>[I(" Team ")]),_:1}),h("div",ue,[n(d,{group:e.group,onPicked:e.handlePicked},null,8,["group","onPicked"])]),n(S,null,{default:u(()=>[n(w,null,{members:u(()=>[n(g,{size:"small",members:e.items},null,8,["members"])]),_:1})]),_:1})])}const ge=P(me,[["render",he],["__scopeId","data-v-6894b1a0"]]),Pe=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"about/team.md","filePath":"about/team.md"}'),pe={name:"about/team.md"},_e=Object.assign(pe,{setup(e){return(a,i)=>(r(),l("div",null,[n(ge)]))}});export{Pe as __pageData,_e as default};