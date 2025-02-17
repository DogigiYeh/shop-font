import{R as j,ad as G,aC as W,G as m,c as T,U as X,Y as U,W as Y,L as l,X as o,au as Z,ai as n,af as $,ag as p,ah as H,av as S,V as J,$ as K,aj as Q,Z as s,aD as _,at as ee,aq as ae,as as te,aE as le,aF as re,O as oe,am as se,ac as ue}from"./index-BJ2HPGnx.js";import{c as ie,a as h,b as de,d as ne,u as pe,e as g}from"./index.esm-CyyLiRh2.js";import{b as M}from"./route-block-B_A1xBdJ.js";import{V as ce,a as B}from"./VRow-CyYTV1R3.js";import{V as me}from"./VDivider-CPLPdu1a.js";import{V as ge,a as ve}from"./VDataTable-dZAQ2ywc.js";import{V as Ve}from"./VToolbar-TEz53eif.js";import{V as fe}from"./VContainer-DNpj8hzz.js";import{V as be}from"./VForm-D8x0ILmx.js";import{V as ye,a as ke}from"./VTextarea-BlzJM5mm.js";import"./VPagination-B7b6f9Jq.js";import"./VList-2pHna4ml.js";import"./VMenu-owVufuy2.js";const Ce={class:"text-center"},$e={__name:"blockade",setup(we){const{t:r}=j(),{apiAuth:w}=se(),v=G(),V=W([]),P=m(""),I=T(()=>[{title:"ID",key:"_id",sortable:!0},{title:r("product.image"),key:"image",sortable:!1},{title:r("product.name"),key:"name",sortable:!0},{title:r("product.description"),key:"description",sortable:!0},{title:r("product.price"),key:"price",sortable:!0},{title:r("product.category"),key:"category",sortable:!0},{title:r("product.sell"),key:"sell",sortable:!0},{title:r("product.createdAt"),key:"createdAt",sortable:!0},{title:r("product.updatedAt"),key:"updatedAt",sortable:!0},{title:r("adminProduct.edit"),key:"edit",sortable:!1}]),A=async()=>{var a,t;try{const{data:d}=await w.get("/product/all");V.push(...d.result)}catch(d){console.log(d),v({text:r("api."+(((t=(a=d==null?void 0:d.response)==null?void 0:a.data)==null?void 0:t.message)||"unknownError")),snackbarProps:{color:"red"}})}};A();const i=m({open:!1,id:""}),q=a=>{a&&(i.value.id=a._id,f.value.value=a.name,b.value.value=a.price,y.value.value=a.description,k.value.value=a.category,C.value.value=a.sell),i.value.open=!0},x=()=>{z(),i.value.id="",i.value.open=!1,F.value.deleteFileRecord()},E=ie({name:h().required(r("api.productNameRequired")),price:de().typeError(r("api.productPriceRequired")).required(r("api.productPriceRequired")).min(0,r("api.productPriceTooSmall")),description:h().required(r("api.productDescriptionRequired")),category:h().required(r("api.productCategoryRequired")).oneOf(["food","drink","music","phone"],r("api.productCategoryInvalid")),sell:ne().required(r("api.productSellRequired"))}),{handleSubmit:N,isSubmitting:D,resetForm:z}=pe({validationSchema:E,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),f=g("name"),b=g("price"),y=g("description"),k=g("category"),C=g("sell"),L=T(()=>[{text:r("productCategory.food"),value:"food"},{text:r("productCategory.drink"),value:"drink"},{text:r("productCategory.music"),value:"music"},{text:r("productCategory.phone"),value:"phone"}]),F=m(null),c=m([]),R=m([]),O=N(async a=>{var t,d,e;if(!((t=c.value[0])!=null&&t.error)){if(i.value.id.length===0&&c.value.length===0){v({text:r("api.productImageRequired"),snackbarProps:{color:"red"}});return}try{const u=new FormData;u.append("name",a.name),u.append("price",a.price),u.append("description",a.description),u.append("category",a.category),u.append("sell",a.sell),c.value.length>0&&u.append("image",c.value[0].file),i.value.id.length>0?await w.patch("/product/"+i.value.id,u):await w.post("/product",u),V.splice(0,V.length),A(),v({text:r(i.value.id.length>0?"adminProduct.editSuccess":"adminProduct.newSuccess"),snackbarProps:{color:"green"}}),x()}catch(u){console.log(u),v({text:r("api."+(((e=(d=u==null?void 0:u.response)==null?void 0:d.data)==null?void 0:e.message)||"unknownError")),snackbarProps:{color:"red"}})}}});return(a,t)=>{const d=X("VueFileAgent");return U(),Y(oe,null,[l(fe,null,{default:o(()=>[l(ce,null,{default:o(()=>[l(B,{cols:"12"},{default:o(()=>[Z("h1",Ce,n(a.$t("nav.adminProducts")),1)]),_:1}),l(me),l(B,{cols:"12"},{default:o(()=>[l(ge,{items:V,headers:I.value,search:P.value},{top:o(()=>[l(Ve,null,{default:o(()=>[l($,{onClick:t[0]||(t[0]=e=>q(null))},{default:o(()=>[p(n(a.$t("adminProduct.new")),1)]),_:1}),l(H),l(S,{modelValue:P.value,"onUpdate:modelValue":t[1]||(t[1]=e=>P.value=e),"prepend-inner-icon":"mdi-magnify",variant:"underlined"},null,8,["modelValue"])]),_:1})]),"item.image":o(({value:e})=>[l(J,{src:e,height:"50"},null,8,["src"])]),"item.sell":o(({value:e})=>[e?(U(),K(ue,{key:0,icon:"mdi-check"})):Q("",!0)]),"item.createdAt":o(({value:e})=>[p(n(new Date(e).toLocaleString()),1)]),"item.updatedAt":o(({value:e})=>[p(n(new Date(e).toLocaleString()),1)]),"item.category":o(({value:e})=>[p(n(a.$t("productCategory."+e)),1)]),"item.edit":o(({item:e})=>[l($,{icon:"mdi-pencil",variant:"text",onClick:u=>q(e)},null,8,["onClick"])]),_:2},1032,["items","headers","search"])]),_:1})]),_:1})]),_:1}),l(re,{modelValue:i.value.open,"onUpdate:modelValue":t[9]||(t[9]=e=>i.value.open=e),persistent:""},{default:o(()=>[l(be,{disabled:s(D),onSubmit:_(s(O),["prevent"])},{default:o(()=>[l(ee,null,{default:o(()=>[l(ae,null,{default:o(()=>[p(n(a.$t(i.value.id?"adminProduct.edit":"adminProduct.new")),1)]),_:1}),l(te,null,{default:o(()=>[l(S,{modelValue:s(f).value.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s(f).value.value=e),label:a.$t("product.name"),"error-messages":s(f).errorMessage.value},null,8,["modelValue","label","error-messages"]),l(S,{modelValue:s(b).value.value,"onUpdate:modelValue":t[3]||(t[3]=e=>s(b).value.value=e),label:a.$t("product.price"),"error-messages":s(b).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","label","error-messages"]),l(ve,{modelValue:s(k).value.value,"onUpdate:modelValue":t[4]||(t[4]=e=>s(k).value.value=e),"error-messages":s(k).errorMessage.value,items:L.value,label:a.$t("product.category"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),l(ye,{modelValue:s(C).value.value,"onUpdate:modelValue":t[5]||(t[5]=e=>s(C).value.value=e),label:a.$t("product.onSell"),"error-messages":s(C).errorMessage.value},null,8,["modelValue","label","error-messages"]),l(ke,{modelValue:s(y).value.value,"onUpdate:modelValue":t[6]||(t[6]=e=>s(y).value.value=e),label:a.$t("product.description"),"error-messages":s(y).errorMessage.value},null,8,["modelValue","label","error-messages"]),l(d,{ref_key:"fileAgent",ref:F,modelValue:c.value,"onUpdate:modelValue":t[7]||(t[7]=e=>c.value=e),"raw-model-value":R.value,"onUpdate:rawModelValue":t[8]||(t[8]=e=>R.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":a.$t("fileAgent.helpText"),"error-text":{type:a.$t("fileAgent.errorType"),size:a.$t("fileAgent.errorSize")}},null,8,["modelValue","raw-model-value","help-text","error-text"])]),_:1}),l(le,null,{default:o(()=>[l($,{onClick:x},{default:o(()=>[p(n(a.$t("adminProduct.cancel")),1)]),_:1}),l($,{type:"submit",loading:s(D)},{default:o(()=>[p(n(a.$t("adminProduct.submit")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};typeof M=="function"&&M($e);export{$e as default};
