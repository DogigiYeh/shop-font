import{aw as m,bZ as _,ae as f,G as V,Y as g,W as v,L as e,X as a,ag as l,aj as s,V as x,af as h,ai as y,bB as b,O as k,an as B}from"./index-DoTAM53F.js";import{b as n}from"./route-block-B_A1xBdJ.js";import{V as w,a as r}from"./VRow-Df0VMOjh.js";import{V as C}from"./VDivider-CJTIQWI9.js";import{V as N}from"./VContainer-DSrIv1AE.js";const O={class:"text-center"},R={class:"text-center"},u={__name:"[id]",setup(j){const{api:i}=B(),d=_(),c=f(),t=V({_id:"",name:"",description:"",image:""});(async()=>{try{const{data:o}=await i.get("/product/"+d.params.id);t.value=o.result,document.title=t.value.name+" | 購物網站"}catch(o){console.log(o),c.push("/")}})();const p=()=>{c.push("/explore")};return(o,I)=>(g(),v(k,null,[e(N,null,{default:a(()=>[e(w,null,{default:a(()=>[e(r,{cols:"12"},{default:a(()=>[l("h1",O,s(t.value.name),1)]),_:1}),e(C),e(r,{cols:"12",md:"6"},{default:a(()=>[e(x,{src:t.value.image},null,8,["src"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[l("p",null,s(t.value.description),1),e(h,{"prepend-icon":"mdi-magnify-expand",class:"explore-btn",style:{color:"#102b05"},onClick:p},{default:a(()=>[y(s(o.$t("nav.explore")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{"model-value":!t.value.sell,class:"align-center justify-center",scrim:"black",opacity:"0.8",persistent:""},{default:a(()=>[l("h1",R,s(o.$t("api.productNotOnSell")),1)]),_:1},8,["model-value"])],64))}};typeof n=="function"&&n(u);const F=m(u,[["__scopeId","data-v-99da8304"]]);export{F as default};
