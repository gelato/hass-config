import{dv as r,dc as t,cQ as n,l as a}from"./card-4e88bdfb.js";const e=async(e,s,i,c)=>{if(!i.sign)return i.endpoint;let l;try{l=await r(s,i.endpoint,c)}catch(r){return t(r),null}return l?l.replace(/^http/i,"ws"):(n(e,a("error.failed_sign")),null)};export{e as g};