import{d as k,r as x,k as F,l as j,o as i,c,a as s,b as l,w as u,t as d,m as B,e as S,F as p,n as h,g as m,p as $,q,s as w,v as N,y as E}from"./index-BwxMtfXP.js";import{u as U}from"./useCustomersStore-CPitVRMG.js";import{c as P}from"./customerTypes-C0s5vjj7.js";import{_ as R,a as A,b as D}from"./InputSelectBaseComponent.vue_vue_type_script_setup_true_lang-CFG72SYW.js";import{_ as y,b as M,a as b}from"./ButtonComponent.vue_vue_type_script_setup_true_lang-Cr0yePC1.js";import{_ as I}from"./TextSectionPageComponent.vue_vue_type_script_setup_true_lang-DvKA9nun.js";const T={class:"flex flex-col gap-4 mb-8 sm:items-center sm:justify-between sm:flex-row sm:mb-10"},z={class:"w-full"},G={class:"flex gap-4 flex-wrap justify-end"},H={class:"relative mt-1 ml-2 flex-1"},J={key:0,class:"text-red-500 text-xs absolute"},K={class:"flex gap-2 justify-center mt-10 sm:mt-2 sm:justify-end"},O={class:"overflow-auto mt-10 max-h-80 shadow-md"},Q={class:"w-full border-collapse border-gray-400 border-solid border text-left min-w-md"},W={class:"border-b border-gray-400 w-full"},X={class:"text-gray-500 text-sm w-full"},Y={class:"px-3 py-3"},Z={class:"px-3 py-3"},ee={class:"px-3 py-3"},se=s("td",{class:"px-3 py-3"},"Contato",-1),te=s("td",{class:"px-3 py-3"},"Endereço",-1),ae={class:"px-3 py-3"},oe={class:"px-3 py-3"},le=s("span",null,"Editar",-1),fe=k({__name:"CustomerListView",setup(re){const r=U(),e=x({name:"",status:"",doc:"",error:""}),t=x([]);F(()=>{t.value=[...r.customers]});const g=j(()=>t.value);function C(){e.value.name&&!e.value.status&&!e.value.doc?(t.value=r.customers.filter(a=>a.name.toLowerCase().includes(e.value.name.toLowerCase())),t.value.length||(e.value.error="Cliente não existe",t.value=[...r.customers])):!e.value.name&&e.value.status&&!e.value.doc?t.value=r.customers.filter(a=>a.status===e.value.status):!e.value.name&&!e.value.status&&e.value.doc?(t.value=r.customers.filter(a=>a.cpf===e.value.doc),t.value.length||(e.value.error="Não temos nenhum cliente com esse CPF",t.value=[...r.customers])):e.value.name&&e.value.status&&e.value.doc?(t.value=r.customers.filter(a=>a.name.toLowerCase().includes(e.value.name.toLowerCase())&&a.status===e.value.status&&a.cpf===e.value.doc),t.value.length||(e.value.error="Cliente não existe",t.value=[...r.customers])):e.value.name&&e.value.status&&!e.value.doc?(t.value=r.customers.filter(a=>a.name.toLowerCase().includes(e.value.name.toLowerCase())&&a.status===e.value.status),t.value.length||(e.value.error="Cliente não existe 2",t.value=[...r.customers])):e.value.name&&!e.value.status&&e.value.doc?(t.value=r.customers.filter(a=>a.name.toLowerCase().includes(e.value.name.toLowerCase())&&a.cpf===e.value.doc),t.value.length||(e.value.error="Cliente não existe 3",t.value=[...r.customers])):e.value.error="Preencha ou selecione no minimo um campo"}function v(){e.value.error=""}function V(){e.value.error="",e.value.name="",e.value.status="",e.value.doc=""}function L(){V(),t.value=[...r.customers]}return(a,n)=>{const _=$("RouterLink");return i(),c(p,null,[s("div",T,[s("div",null,[l(I,{title:"Bem-vindo!",text:"Aqui está uma lista de clientes."})]),l(_,{to:"/customer/create",class:"flex items-center justify-center gap-2 bg-gray-900 h-12 hover:bg-gray-700 duration-200 ease-in box-border p-4 fill-current text-white stroke-2 rounded w-48"},{default:u(()=>[q(" Criar cliente ")]),_:1})]),s("div",{class:"text-sm flex justify-end mb-4"},[s("button",{onClick:L,class:"hover:text-brand duration-200"}," Limpar filtros ")]),s("form",z,[s("div",G,[l(y,{"for-name":"name",class:"w-full flex-1 sm:w-2/4"},{icon:u(()=>[l(m(w))]),input:u(()=>[l(b,{placeholder:"Buscar cliente",type:"text",id:"name",required:"",modelValue:e.value.name,"onUpdate:modelValue":[n[0]||(n[0]=o=>e.value.name=o),v]},null,8,["modelValue"])]),_:1}),l(y,{"for-name":"doc",class:"w-full sm:w-1/4"},{icon:u(()=>[l(m(w))]),input:u(()=>[l(b,{placeholder:"Buscar CPF",type:"text",id:"doc",required:"",modelValue:e.value.doc,"onUpdate:modelValue":[n[1]||(n[1]=o=>e.value.doc=o),v]},null,8,["modelValue"])]),_:1}),l(R,{"for-name":"status",class:"w-full sm:w-1/4"},{icon:u(()=>[l(m(N))]),input:u(()=>[l(A,{id:"status",required:"",modelValue:e.value.status,"onUpdate:modelValue":[n[2]||(n[2]=o=>e.value.status=o),v],list:["Ativo","Desativado"]},null,8,["modelValue"])]),_:1})]),s("div",H,[e.value.error?(i(),c("span",J,d(e.value.error),1)):B("",!0)]),s("div",K,[l(M,{class:"min-w-max",title:"Buscar",onClick:S(C,["prevent"])})])]),s("div",O,[s("table",Q,[s("thead",W,[s("tr",null,[(i(!0),c(p,null,h(m(r).tabs,(o,f)=>(i(),c("th",{class:"px-3 py-3",key:f},d(o),1))),128))])]),s("tbody",X,[(i(!0),c(p,null,h(g.value,(o,f)=>(i(),c("tr",{key:f,class:"border-b border-gray-400"},[s("td",Y,d(o.id),1),s("td",Z,d(o.name)+" "+d(o.surname),1),s("td",ee,d(o.cpf),1),se,te,s("td",ae,[l(D,{title:o.status,color:m(P)[o.status]},null,8,["title","color"])]),s("td",oe,[l(_,{to:{params:{id:o.id},name:"customer-update"},class:"flex items-center justify-center gap-2 bg-gray-900 text-white text-xs font-bold max-w-max py-1 px-2 rounded hover:bg-gray-700 duration-200 ease-in"},{default:u(()=>[l(m(E),{class:"stroke-2"}),le]),_:2},1032,["to"])])]))),128))])])])],64)}}});export{fe as default};
