import{d as l,o,c as s,t as u,m,a as c,B as i,A as p}from"./index-BwxMtfXP.js";const _=["for"],g={key:0,class:"font-bold"},b={class:"relative flex items-center"},f={class:"absolute left-3 text-lg"},k=l({__name:"InputWrapperComponent",props:{label:{type:String},forName:{type:String,required:!0}},setup(e){return(t,a)=>(o(),s("label",{for:e.forName,class:"text-sm grid gap-1 cursor-pointer"},[e.label?(o(),s("span",g,u(e.label),1)):m("",!0),c("span",b,[c("span",f,[i(t.$slots,"icon")]),i(t.$slots,"input")])],8,_))}}),h=["value"],x=l({__name:"InputBaseComponent",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const a=t,n=r=>{r.target&&a("update:modelValue",r.target.value)};return(r,d)=>(o(),s("input",p({class:"w-full p-4 pl-10 h-12 border-gray-400 border rounded box-border border-gray-500 placeholder-gray-40",onInput:n,value:e.modelValue},r.$attrs),null,16,h))}}),C=l({__name:"ButtonComponent",props:{title:{type:String,required:!0}},emits:["handle-click"],setup(e,{emit:t}){const a=t,n=()=>{a("handle-click")};return(r,d)=>(o(),s("button",p({class:"flex items-center justify-center gap-2 bg-gray-900 h-12 hover:bg-gray-700 duration-200 ease-in box-border p-4 fill-current text-white stroke-2 rounded w-48"},r.$attrs,{onClick:n}),u(e.title),17))}});export{k as _,x as a,C as b};