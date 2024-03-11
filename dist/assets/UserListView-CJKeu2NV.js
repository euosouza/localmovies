import{d as k,j as C,r as x,k as L,l as F,o as n,c as i,a as s,b as a,w as u,e as S,t as d,m as U,F as p,n as h,g as c,p as $,q as b,s as j,v as B,x as q,y as N}from"./index-BwxMtfXP.js";import{_ as E,a as R,b as A}from"./InputSelectBaseComponent.vue_vue_type_script_setup_true_lang-CFG72SYW.js";import{_ as D,b as M,a as I}from"./ButtonComponent.vue_vue_type_script_setup_true_lang-Cr0yePC1.js";import{_ as P}from"./TextSectionPageComponent.vue_vue_type_script_setup_true_lang-DvKA9nun.js";const T={class:"flex flex-col gap-4 mb-8 sm:items-center sm:justify-between sm:flex-row sm:mb-10"},z={class:""},G={class:"w-full"},H={class:"flex gap-4 flex-wrap justify-end"},J={class:"relative mt-1 ml-2"},K={key:0,class:"text-red-500 text-xs absolute"},O={class:"overflow-auto mt-10 max-h-80 shadow-md"},Q={class:"w-full border-collapse border-gray-400 border-solid border text-left min-w-md"},W={class:"border-b border-gray-400 w-full"},X={class:"text-gray-500 text-sm w-full"},Y={class:"px-3 py-3"},Z={class:"px-3 py-3"},ee={class:"px-3 py-3"},se={class:"px-3 py-3"},te={class:"px-3 py-3"},ae=s("span",null,"Editar",-1),de=k({__name:"UserListView",setup(oe){const r=C(),e=x({name:"",status:"",error:""}),o=x([]);L(()=>{o.value=[...r.users]});const w=F(()=>o.value);function y(){e.value.name&&!e.value.status?(o.value=r.users.filter(l=>l.name.toLowerCase().includes(e.value.name.toLowerCase())),o.value.length||(e.value.error="Usuário não existe",o.value=[...r.users])):!e.value.name&&e.value.status?o.value=r.users.filter(l=>l.status===e.value.status):e.value.name&&e.value.status?(o.value=r.users.filter(l=>l.name.toLowerCase().includes(e.value.name.toLowerCase())&&l.status===e.value.status),o.value.length||(e.value.error="Usuário não existe",o.value=[...r.users])):e.value.error="Preencha ou selecione no minimo um campo"}function v(){e.value.error=""}function g(){e.value.error="",e.value.name="",e.value.status=""}function V(){g(),o.value=[...r.users]}return(l,m)=>{const f=$("RouterLink");return n(),i(p,null,[s("div",T,[s("div",z,[a(P,{title:"Bem-vindo!",text:"Aqui está uma lista de usuários."})]),a(f,{to:"/user/create",class:"flex items-center justify-center gap-2 bg-gray-900 h-12 hover:bg-gray-700 duration-200 ease-in box-border p-4 fill-current text-white stroke-2 rounded w-48"},{default:u(()=>[b(" Criar usuário ")]),_:1})]),s("div",{class:"text-sm flex justify-end mb-4"},[s("button",{onClick:V,class:"hover:text-brand duration-200"}," Limpar filtros ")]),s("form",G,[s("div",H,[a(D,{"for-name":"name",class:"flex-1 min-w-max w-full"},{icon:u(()=>[a(c(j))]),input:u(()=>[a(I,{placeholder:"Buscar usuário",type:"text",id:"name",required:"",modelValue:e.value.name,"onUpdate:modelValue":[m[0]||(m[0]=t=>e.value.name=t),v]},null,8,["modelValue"])]),_:1}),a(E,{"for-name":"status",class:"min-w-max w-full md:w-auto"},{icon:u(()=>[a(c(B))]),input:u(()=>[a(R,{id:"status",required:"",modelValue:e.value.status,"onUpdate:modelValue":[m[1]||(m[1]=t=>e.value.status=t),v],list:["Ativo","Desativado"]},null,8,["modelValue"])]),_:1}),a(M,{class:"min-w-max",title:"Buscar",onClick:S(y,["prevent"])})]),s("div",J,[e.value.error?(n(),i("span",K,d(e.value.error),1)):U("",!0)])]),s("div",O,[s("table",Q,[s("thead",W,[s("tr",null,[(n(!0),i(p,null,h(c(r).tabs,(t,_)=>(n(),i("th",{class:"px-3 py-3",key:_},d(t),1))),128))])]),s("tbody",X,[(n(!0),i(p,null,h(w.value,(t,_)=>(n(),i("tr",{key:_,class:"border-b border-gray-400"},[s("td",Y,d(t.id),1),s("td",Z,[a(f,{to:{params:{id:t.id},name:"user-update"},class:"hover:text-brand duration-200"},{default:u(()=>[b(d(t.name),1)]),_:2},1032,["to"])]),s("td",ee,d(t.doc),1),s("td",se,[a(A,{title:t.status,color:c(q)[t.status]},null,8,["title","color"])]),s("td",te,[a(f,{to:{params:{id:t.id},name:"user-update"},class:"flex items-center justify-center gap-2 bg-gray-900 text-white text-xs font-bold max-w-max py-1 px-2 rounded hover:bg-gray-700 duration-200 ease-in"},{default:u(()=>[a(c(N),{class:"stroke-2"}),ae]),_:2},1032,["to"])])]))),128))])])])],64)}}});export{de as default};