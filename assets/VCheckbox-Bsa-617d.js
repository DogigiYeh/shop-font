import{m as g,b as t}from"./VDataTable-BvXuHLws.js";import{p as A,aG as F,aH as B,q as U,E as J,aI as L,aJ as M,c as R,J as q,aK as D,aL as l,L as u,M as r}from"./index-LJ2CQGpZ.js";const E=A({...F(),...B(g(),["inline"])},"VCheckbox"),K=U()({name:"VCheckbox",inheritAttrs:!1,props:E(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:o}=c;const s=J(e,"modelValue"),{isFocused:n,focus:i,blur:m}=L(e),V=M(),b=R(()=>e.id||`checkbox-${V}`);return q(()=>{const[p,v]=D(d),f=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},p,f,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:b.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=a;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},v,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":I=>s.value=I,onFocus:i,onBlur:m}),o)}})}),{}}});export{K as V};
