import{R as C,ad as R,ae as q,Y as M,$ as P,X as t,L as l,ay as V,ai as b,Z as e,aR as T,az as i,af as E,ag as B,am as F}from"./index-DltmmLW-.js";import{c as N,a as n,f as U,u as _,e as m,V as I}from"./index.esm-CHv9wIEN.js";import{v as w}from"./index-5ZSPfkdU.js";import{b as h}from"./route-block-B_A1xBdJ.js";import{V as $,a as L}from"./VRow-C9rCZ-np.js";import{V as D}from"./VDivider-CuwvY7VY.js";import{V as z}from"./VContainer-BwMTvylf.js";const O={class:"text-center"},X={class:"text-center"},Y={__name:"register",setup(Z){const{t:s}=C(),{api:x}=F(),f=R(),y=q(),S=N({account:n().required(s("api.userAccountRequired")).min(4,s("api.userAccountTooShort")).max(20,s("api.userAccountTooLong")).test("isAlphanumeric",s("api.userAccountInvalid"),a=>w.isAlphanumeric(a)),email:n().required(s("api.userEmailRequired")).test("isEmail",s("api.userEmailInvalid"),a=>w.isEmail(a)),password:n().required(s("api.userPasswordRequired")).min(4,s("api.userPasswordTooShort")).max(20,s("api.userPasswordTooLong")),passwordConfirm:n().oneOf([U("password")],s("api.userPasswordNotMatch"))}),{handleSubmit:k,isSubmitting:v}=_({validationSchema:S}),d=m("account"),c=m("email"),p=m("password"),g=m("passwordConfirm"),A=k(async a=>{var r,o;try{await x.post("/user",{account:a.account,email:a.email,password:a.password}),f({text:s("register.success"),snackbarProps:{color:"green"}}),y.push("/login")}catch(u){console.log(u),f({text:s("api."+(((o=(r=u==null?void 0:u.response)==null?void 0:r.data)==null?void 0:o.message)||"unknownError")),snackbarProps:{color:"red"}})}});return(a,r)=>(M(),P(z,null,{default:t(()=>[l(L,null,{default:t(()=>[l($,{cols:"12"},{default:t(()=>[V("h1",O,b(a.$t("nav.register")),1)]),_:1}),l(D),l($,{cols:"12"},{default:t(()=>[l(I,{disabled:e(v),onSubmit:T(e(A),["prevent"])},{default:t(()=>[l(i,{modelValue:e(d).value.value,"onUpdate:modelValue":r[0]||(r[0]=o=>e(d).value.value=o),"error-messages":e(d).errorMessage.value,label:a.$t("user.account"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),l(i,{modelValue:e(c).value.value,"onUpdate:modelValue":r[1]||(r[1]=o=>e(c).value.value=o),"error-messages":e(c).errorMessage.value,label:a.$t("user.email")},null,8,["modelValue","error-messages","label"]),l(i,{modelValue:e(p).value.value,"onUpdate:modelValue":r[2]||(r[2]=o=>e(p).value.value=o),type:"password","error-messages":e(p).errorMessage.value,label:a.$t("user.password"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),l(i,{modelValue:e(g).value.value,"onUpdate:modelValue":r[3]||(r[3]=o=>e(g).value.value=o),type:"password","error-messages":e(g).errorMessage.value,label:a.$t("user.passwordConfirm"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),V("div",X,[l(E,{loading:e(v),type:"submit",color:"primary"},{default:t(()=>[B(b(a.$t("register.submit")),1)]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};typeof h=="function"&&h(Y);export{Y as default};
