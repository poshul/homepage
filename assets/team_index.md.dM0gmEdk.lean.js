import{_ as y,c as A,d as M,a as B,e as I,f as w}from"./chunks/theme.bJM_6J8K.js";import{d as b,_ as P,B as l,o as t,c as a,j as r,G as i,w as _,a as v,t as h,e as f,n as k,h as g,F as $,C as V,a0 as z,p as C}from"./chunks/framework.DTD4QSDX.js";import{d as K}from"./chunks/team.data.DCPKVqTy.js";var d=(e=>(e.ALL="all",e.TBI="tbi",e.ABI="abi",e))(d||{});const N=b({components:{VPLink:y,VPSocialLinks:A},props:{size:{type:String,default:"medium"},member:{type:Object,required:!0},slug:{type:String,required:!0}}}),O={class:"profile"},j=["src","alt"],q={class:"data"},F={class:"name"},H={key:0,class:"affiliation"},E={class:"title"},G=["innerHTML"],J={key:2,class:"links"},D={key:0,class:"sp"};function Q(e,s,m,c,n,p){const o=l("VPLink"),u=l("VPSocialLinks");return t(),a("article",{class:k(["VPTeamMembersItem",[e.size]])},[r("div",O,[r("div",null,[r("img",{class:"avatar",src:e.member.avatar,alt:e.member.name},null,8,j)]),r("div",q,[r("h1",F,[i(o,{href:"/team/"+e.slug},{default:_(()=>[v(h(e.member.name),1)]),_:1},8,["href"])]),e.member.role?(t(),a("p",H,[r("span",E,h(e.member.role),1)])):f("",!0),e.member.description?(t(),a("p",{key:1,class:"desc",innerHTML:e.member.description},null,8,G)):f("",!0),e.member.socialLinks?(t(),a("div",J,[i(u,{links:e.member.socialLinks},null,8,["links"])])):f("",!0)])]),e.member.sponsor?(t(),a("div",D,[i(o,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:_(()=>[s[0]||(s[0]=r("span",{class:"vpi-heart sp-icon"},null,-1)),v(" "+h(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):f("",!0)],2)}const R=P(N,[["render",Q],["__scopeId","data-v-a8111fd1"]]),U={class:"container"},W=b({__name:"KTeamMembers",props:{size:{default:"medium"},members:{}},setup(e){const s=e,m=g(()=>[s.size,`count-${s.members.length}`]);return(c,n)=>(t(),a("div",{class:k(["VPTeamMembers",m.value])},[r("div",U,[(t(!0),a($,null,V(c.members,([p,o])=>(t(),a("div",{key:o.name,class:"item"},[i(R,{size:c.size,member:o,slug:p},null,8,["size","member","slug"])]))),128))])],2))}}),X=P(W,[["__scopeId","data-v-161721db"]]),Y=b({props:{group:{type:String,required:!0,default:`${d.ALL}`}},emits:["picked"],setup(e,{emit:s}){return{items:[{id:d.ALL,value:"All"},{id:d.ABI,value:"ABI"},{id:d.TBI,value:"TBI"}],pick:n=>{s("picked",n)}}}}),Z={class:"d-flex flex-row gap-2"},x={class:"mb-0"},ee=["onClick"];function se(e,s,m,c,n,p){return t(),a("div",Z,[(t(!0),a($,null,V(e.items,(o,u)=>(t(),a("div",{key:u,class:k(["entity-card w-100 ratio-1x1 text-center",{active:e.group===o.id}])},[r("h3",x,[r("a",{href:"",class:"stretched-link",onClick:z(T=>e.pick(o.id),["prevent"])},h(o.value),9,ee)])],2))),128))])}const te=P(Y,[["render",se]]),ae=b({components:{KTeamMembers:X,KTeamSwitch:te,VPTeamPage:M,VPTeamPageTitle:B,VPTeamMembers:I,VPTeamPageSection:w},setup(){const e=C(d.ALL),s=n=>{e.value=n},m=K,c=g(()=>m.filter(([,n])=>e.value===d.ALL?!0:(Array.isArray(n.team)?n.team:[n.team]).indexOf(e.value)!==-1));return{group:e,handlePicked:s,items:c}}}),ne={class:"container mb-3"},oe={class:"mt-3 m-auto"};function re(e,s,m,c,n,p){const o=l("VPTeamPageTitle"),u=l("KTeamSwitch"),T=l("KTeamMembers"),L=l("VPTeamPageSection"),S=l("VPTeamPage");return t(),a("div",ne,[i(o,null,{title:_(()=>s[0]||(s[0]=[v(" Team ")])),_:1}),r("div",oe,[i(u,{group:e.group,onPicked:e.handlePicked},null,8,["group","onPicked"])]),i(S,null,{default:_(()=>[i(L,null,{members:_(()=>[i(T,{members:e.items},null,8,["members"])]),_:1})]),_:1})])}const ie=P(ae,[["render",re],["__scopeId","data-v-a05f4b96"]]),pe=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"team/index.md","filePath":"team/index.md"}'),me={name:"team/index.md"},ue=Object.assign(me,{setup(e){return(s,m)=>(t(),a("div",null,[i(ie)]))}});export{pe as __pageData,ue as default};