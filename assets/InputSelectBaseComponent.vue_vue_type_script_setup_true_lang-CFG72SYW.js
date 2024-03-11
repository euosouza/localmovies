import{d as n,o as t,c as s,a as r,C as m,t as u,m as _,B as i,F as g,n as f,A as h}from"./index-BwxMtfXP.js";const b={class:"flex items-center gap-2"},B=n({__name:"StatusComponent",props:{title:{type:String,required:!0},color:{type:String,required:!0}},setup(e){return(a,l)=>(t(),s("div",b,[r("span",{class:m(["block w-2 h-2 rounded-full",e.color])},null,2),r("span",null,u(e.title),1)]))}}),y=["for"],S={key:0,class:"font-bold"},$={class:"relative flex items-center"},v={class:"absolute left-3 text-lg"},N=n({__name:"InputSelectWrapperComponent",props:{label:{type:String},forName:{type:String,required:!0}},setup(e){return(a,l)=>(t(),s("label",{for:e.forName,class:"text-sm grid gap-1 cursor-pointer"},[e.label?(t(),s("span",S,u(e.label),1)):_("",!0),r("span",$,[r("span",v,[i(a.$slots,"icon")]),i(a.$slots,"input")])],8,y))}}),C=["value"],V=r("option",{value:"",selected:"",disabled:"",class:""},"Status",-1),x=["value"],w=n({__name:"InputSelectBaseComponent",props:{modelValue:{type:String,required:!0},list:{type:Array,required:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const l=a,d=o=>{o.target&&l("update:modelValue",o.target.value)};return(o,k)=>(t(),s("select",h({class:"p-4 pl-10 h-12 border-gray-500 border rounded box-border placeholder-gray-400 w-full"},o.$attrs,{value:e.modelValue,onChange:d}),[V,(t(!0),s(g,null,f(e.list,(c,p)=>(t(),s("option",{value:c,key:p},u(c),9,x))),128))],16,C))}});export{N as _,w as a,B as b};
