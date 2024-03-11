import{d as V,r as v,o as b,c as h,b as e,a as s,w as l,F as g,f as C,g as n,h as d}from"./index-BwxMtfXP.js";import{u as y}from"./useCustomersStore-CPitVRMG.js";import{S as _}from"./customerTypes-C0s5vjj7.js";import{_ as r,a as u,b as x}from"./ButtonComponent.vue_vue_type_script_setup_true_lang-Cr0yePC1.js";import{_ as D}from"./BackRouterLinkComponent.vue_vue_type_script_setup_true_lang-4236_ml8.js";import{_ as U}from"./TextSectionPageComponent.vue_vue_type_script_setup_true_lang-DvKA9nun.js";const q={class:"grid gap-6"},B=V({__name:"CustomerCreateView",setup($){const m=C(),a=v({name:"",surname:"",cpf:"",status:_.ATIVO,contacts:{email:"",phone:""},address:{zipCode:"",publicPlace:"",neighborhood:"",city:"",state:""}}),{addCustomerAsync:p}=y();function c(i){i.preventDefault(),p(a.value).then(()=>m.push({path:"/customer"})).catch(o=>console.log(o))}function f(){a.value.address.zipCode.length>=8&&fetch(`http://viacep.com.br/ws/${a.value.address.zipCode}/json/`).then(i=>i.json()).then(i=>{a.value.address.city=i.localidade,a.value.address.neighborhood=i.bairro,a.value.address.publicPlace=`${i.logradouro}, ${i.complemento}`,a.value.address.state=i.uf,a.value.address.zipCode=i.cep})}return(i,o)=>(b(),h(g,null,[e(D,{path:"/customer",title:"Voltar"}),e(U,{title:"Criar cliente",text:"Digite as informações abaixo para criar seu cliente"}),s("form",{class:"mt-8",onSubmit:c},[s("div",q,[e(r,{label:"Nome","for-name":"name"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o nome do cliente",type:"text",id:"name",required:"",modelValue:a.value.name,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.name=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"Sobrenome","for-name":"surname"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o sobrenome",type:"text",id:"surname",required:"",modelValue:a.value.surname,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.surname=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"CPF","for-name":"cpf"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o CPF",type:"text",id:"cpf",required:"",modelValue:a.value.cpf,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.cpf=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"E-mail","for-name":"email"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o e-mail",type:"email",id:"email",required:"",modelValue:a.value.contacts.email,"onUpdate:modelValue":o[3]||(o[3]=t=>a.value.contacts.email=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"Telefone","for-name":"phone"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o telefone",type:"phone",id:"phone",required:"",modelValue:a.value.contacts.phone,"onUpdate:modelValue":o[4]||(o[4]=t=>a.value.contacts.phone=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"CEP","for-name":"cep"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o CEP",type:"text",id:"cep",required:"",modelValue:a.value.address.zipCode,"onUpdate:modelValue":[o[5]||(o[5]=t=>a.value.address.zipCode=t),f]},null,8,["modelValue"])]),_:1}),e(r,{label:"Endereço","for-name":"neighborhood"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o endereço",type:"text",id:"neighborhood",required:"",modelValue:a.value.address.neighborhood,"onUpdate:modelValue":o[6]||(o[6]=t=>a.value.address.neighborhood=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"Cidade","for-name":"city"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o cidade",type:"text",id:"city",required:"",modelValue:a.value.address.city,"onUpdate:modelValue":o[7]||(o[7]=t=>a.value.address.city=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"Estado","for-name":"state"},{icon:l(()=>[e(n(d))]),input:l(()=>[e(u,{placeholder:"Digite o estado",type:"text",id:"state",required:"",modelValue:a.value.address.state,"onUpdate:modelValue":o[8]||(o[8]=t=>a.value.address.state=t)},null,8,["modelValue"])]),_:1}),e(x,{title:"Criar cliente",type:"submit"})])],32)],64))}});export{B as default};