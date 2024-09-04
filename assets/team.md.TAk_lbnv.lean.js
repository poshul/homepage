import{b as T,V as A,c as B,d as y,e as D}from"./chunks/theme.BO76HwEB.js";import{d as b,_ as P,o as r,c as l,J as V,K as C,n as K,s as u,a5 as M,t as $,A as L,q as j,I as o,N as n,w as h,e as I}from"./chunks/framework.BN363E3l.js";const N={avatar:"/images/team/elhabashi-hadeer.png",name:"Hadeer Elhabashy",title:"Postdoc",links:[]},x={avatar:"/images/team/default.png",name:"Ayesha Feroz",title:"PhD Student",links:[]},z={avatar:"/images/team/kaipf-camill.jpg",name:"Camill Kaipf",title:"Researcher",links:[]},E={avatar:"/images/team/default.png",name:"Jihyung Kim",title:"PhD Student",links:[]},_={avatar:"https://www.github.com/okohlbacher.png",name:"Oliver Kohlbacher",title:"Professor & Lead",links:[{icon:"github",link:"https://github.com/okohlbacher"}]},H={avatar:"/images/team/jeong-kyowon.png",name:"Kyowon Jeong",title:"Postdoc",links:[]},R={avatar:"/images/team/kuchenbecker-leon.png",name:"Leon Kuchenbecker",title:"Researcher",links:[]},W={avatar:"/images/team/nagel-andreas.png",name:"Andreas Nagel",title:"Systemadministrator",links:[]},J={avatar:"/images/team/default.png",name:"Matteo Pilz",title:"PhD Student",links:[]},v={avatar:"https://www.github.com/Nightknight3000.png",name:"Alexander Röhl",title:"PhD Student",links:[{icon:"github",link:"https://github.com/Nightknight3000"}]},O={avatar:"/images/team/sachsenberg-timo.png",name:"Timo Sachsenberg",title:"Postdoc"},F={avatar:"/images/team/default.png",name:"Arslan Siraj",title:"PhD Student",links:[]},q={avatar:"/images/team/sueruen-bilge.png",name:"Bilge Sueruen",title:"PhD Student",links:[]},Q={avatar:"/images/team/default.png",name:"Alex Walter",title:"Postdoc",links:[]},U={avatar:"/images/team/default.png",name:"Claudia Walter",title:"Assistant",links:[]},X={avatar:"/images/team/wein-samuel.jpg",name:"Samuel Wein",title:"PostDoc",links:[]},p=[_,U,z,R,W,N,H,O,Q,X,E,J,v,F,q,x];var t=(e=>(e.ALL="all",e.TBI="tbi",e.ABI="abi",e))(t||{});const Y=b({props:{group:{type:String,required:!0,default:`${t.ALL}`}},emits:["picked"],setup(e,{emit:a}){return{items:[{id:t.ALL,value:"All"},{id:t.ABI,value:"ABI"},{id:t.TBI,value:"TBI"}],pick:m=>{a("picked",m)}}}}),Z={class:"d-flex flex-row gap-2"},G={class:"mb-0"},ee=["onClick"];function te(e,a,i,c,m,f){return r(),l("div",Z,[(r(!0),l(V,null,C(e.items,(s,d)=>(r(),l("div",{key:d,class:K(["entity-card w-100 ratio-1x1 text-center",{active:e.group===s.id}])},[u("h3",G,[u("a",{href:"",class:"stretched-link",onClick:M(g=>e.pick(s.id),["prevent"])},$(s.value),9,ee)])],2))),128))])}const ae=P(Y,[["render",te]]),ne={avatar:"https://www.github.com/lucienclin.png",name:"Lucien Clin",title:"Researcher",links:[{icon:"github",link:"https://github.com/lucienclin"}]},ie={avatar:"/images/team/dijkstra-tjeerd.png",name:"Tjeerd Dijkstra",title:"Postdoc"},se={avatar:"https://www.github.com/SirHerr.png",name:"Marius de Arruda Botelho Herr",title:"PhD Student",links:[{icon:"github",link:"https://github.com/SirHerr"},{icon:"linkedin",link:"https://de.linkedin.com/in/marius-de-arruda-botelho-herr-60b89b18b"}]},oe={avatar:"https://www.github.com/antidodo.png",name:"David Hieber",title:"Researcher",links:[{icon:"github",link:"https://github.com/antidodo"}]},re={avatar:"https://www.github.com/tada5hi.png",name:"Peter Placzek",title:"Researcher",links:[{icon:"github",link:"https://github.com/tada5hi"},{icon:"twitter",link:"https://twitter.com/tada5hi"},{icon:"linkedin",link:"https://www.linkedin.com/in/peter-placzek-047a74210/"}]},le={avatar:"/images/team/default.png",name:"Aydin Can Polatkan",title:"PostDoc",links:[]},ce={avatar:"/images/team/siebrasse-birgit.png",name:"Siebrasse Birgit",title:"Projektkoordinatorin BWHC & DNPM"},k=[_,re,ne,oe,ce,ie,le,v,se],me=b({components:{KTeamSwitch:ae,VPTeamPage:T,VPTeamPageTitle:A,VPTeamMembers:B,VPTeamPageSection:y},setup(){const e=L(t.ALL),a=c=>{e.value=c},i=j(()=>e.value===t.ABI?p:e.value===t.TBI?k:D([...p,...k]));return{group:e,handlePicked:a,items:i}}}),de={class:"container mb-3"},he={class:"mt-3 m-auto"};function ue(e,a,i,c,m,f){const s=o("VPTeamPageTitle"),d=o("KTeamSwitch"),g=o("VPTeamMembers"),w=o("VPTeamPageSection"),S=o("VPTeamPage");return r(),l("div",de,[n(s,null,{title:h(()=>[I(" Team ")]),_:1}),u("div",he,[n(d,{group:e.group,onPicked:e.handlePicked},null,8,["group","onPicked"])]),n(S,null,{default:h(()=>[n(w,null,{members:h(()=>[n(g,{size:"small",members:e.items},null,8,["members"])]),_:1})]),_:1})])}const ge=P(me,[["render",ue],["__scopeId","data-v-68d400c5"]]),Pe=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"team.md","filePath":"team.md"}'),pe={name:"team.md"},_e=Object.assign(pe,{setup(e){return(a,i)=>(r(),l("div",null,[n(ge)]))}});export{Pe as __pageData,_e as default};