import{b4 as L,s as M,aF as B,bT as g,b6 as Y,G as A,p as R,E as _,c as v,b as Z,br as Ve,y as z,aP as Ce,bU as ee,f as te,l as ae,q as ne,J as le,L as y,bV as Oe,a1 as W,be as $,m as Me,b1 as Le,ao as Be,i as Ne,k as je,bg as _e,n as De,bd as Re,b2 as Ee,bl as Ge,w as Te,t as Fe,v as xe,bi as Ue,b5 as He,ap as Ke,z as ze,B as We,bW as $e,aa as qe,aW as Je,bm as Qe,O as q,bo as J,ac as Q,N as X,M as Xe}from"./index-BNIr4EN7.js";const D=Symbol.for("vuetify:list");function vt(){const e=L(D,{hasPrepend:M(!1),updateHasPrepend:()=>null}),r={hasPrepend:M(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return B(D,r),e}function Ye(){return L(D,null)}const E=e=>{const r={activate:l=>{let{id:a,value:n,activated:t}=l;return a=g(a),e&&!n&&t.size===1&&t.has(a)||(n?t.add(a):t.delete(a)),t},in:(l,a,n)=>{let t=new Set;if(l!=null)for(const s of Y(l))t=r.activate({id:s,value:!0,activated:new Set(t),children:a,parents:n});return t},out:l=>Array.from(l)};return r},ie=e=>{const r=E(e);return{activate:a=>{let{activated:n,id:t,...s}=a;t=g(t);const c=n.has(t)?new Set([t]):new Set;return r.activate({...s,id:t,activated:c})},in:(a,n,t)=>{let s=new Set;if(a!=null){const c=Y(a);c.length&&(s=r.in(c.slice(0,1),n,t))}return s},out:(a,n,t)=>r.out(a,n,t)}},Ze=e=>{const r=E(e);return{activate:a=>{let{id:n,activated:t,children:s,...c}=a;return n=g(n),s.has(n)?t:r.activate({id:n,activated:t,children:s,...c})},in:r.in,out:r.out}},et=e=>{const r=ie(e);return{activate:a=>{let{id:n,activated:t,children:s,...c}=a;return n=g(n),s.has(n)?t:r.activate({id:n,activated:t,children:s,...c})},in:r.in,out:r.out}},tt={open:e=>{let{id:r,value:l,opened:a,parents:n}=e;if(l){const t=new Set;t.add(r);let s=n.get(r);for(;s!=null;)t.add(s),s=n.get(s);return t}else return a.delete(r),a},select:()=>null},se={open:e=>{let{id:r,value:l,opened:a,parents:n}=e;if(l){let t=n.get(r);for(a.add(r);t!=null&&t!==r;)a.add(t),t=n.get(t);return a}else a.delete(r);return a},select:()=>null},at={open:se.open,select:e=>{let{id:r,value:l,opened:a,parents:n}=e;if(!l)return a;const t=[];let s=n.get(r);for(;s!=null;)t.push(s),s=n.get(s);return new Set(t)}},G=e=>{const r={select:l=>{let{id:a,value:n,selected:t}=l;if(a=g(a),e&&!n){const s=Array.from(t.entries()).reduce((c,h)=>{let[m,S]=h;return S==="on"&&c.push(m),c},[]);if(s.length===1&&s[0]===a)return t}return t.set(a,n?"on":"off"),t},in:(l,a,n)=>{let t=new Map;for(const s of l||[])t=r.select({id:s,value:!0,selected:new Map(t),children:a,parents:n});return t},out:l=>{const a=[];for(const[n,t]of l.entries())t==="on"&&a.push(n);return a}};return r},re=e=>{const r=G(e);return{select:a=>{let{selected:n,id:t,...s}=a;t=g(t);const c=n.has(t)?new Map([[t,n.get(t)]]):new Map;return r.select({...s,id:t,selected:c})},in:(a,n,t)=>{let s=new Map;return a!=null&&a.length&&(s=r.in(a.slice(0,1),n,t)),s},out:(a,n,t)=>r.out(a,n,t)}},nt=e=>{const r=G(e);return{select:a=>{let{id:n,selected:t,children:s,...c}=a;return n=g(n),s.has(n)?t:r.select({id:n,selected:t,children:s,...c})},in:r.in,out:r.out}},lt=e=>{const r=re(e);return{select:a=>{let{id:n,selected:t,children:s,...c}=a;return n=g(n),s.has(n)?t:r.select({id:n,selected:t,children:s,...c})},in:r.in,out:r.out}},it=e=>{const r={select:l=>{let{id:a,value:n,selected:t,children:s,parents:c}=l;a=g(a);const h=new Map(t),m=[a];for(;m.length;){const f=m.shift();t.set(g(f),n?"on":"off"),s.has(f)&&m.push(...s.get(f))}let S=g(c.get(a));for(;S;){const f=s.get(S),w=f.every(i=>t.get(g(i))==="on"),p=f.every(i=>!t.has(g(i))||t.get(g(i))==="off");t.set(S,w?"on":p?"off":"indeterminate"),S=g(c.get(S))}return e&&!n&&Array.from(t.entries()).reduce((w,p)=>{let[i,u]=p;return u==="on"&&w.push(i),w},[]).length===0?h:t},in:(l,a,n)=>{let t=new Map;for(const s of l||[])t=r.select({id:s,value:!0,selected:new Map(t),children:a,parents:n});return t},out:(l,a)=>{const n=[];for(const[t,s]of l.entries())s==="on"&&!a.has(t)&&n.push(t);return n}};return r},C=Symbol.for("vuetify:nested"),ce={id:M(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:A(!1),selectable:A(!1),opened:A(new Set),activated:A(new Set),selected:A(new Map),selectedValues:A([]),getPath:()=>[]}},ft=R({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),yt=e=>{let r=!1;const l=A(new Map),a=A(new Map),n=_(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),t=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Ze(e.mandatory);case"single-leaf":return et(e.mandatory);case"independent":return E(e.mandatory);case"single-independent":default:return ie(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return lt(e.mandatory);case"leaf":return nt(e.mandatory);case"independent":return G(e.mandatory);case"single-independent":return re(e.mandatory);case"classic":default:return it(e.mandatory)}}),c=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return at;case"single":return tt;case"multiple":default:return se}}),h=_(e,"activated",e.activated,i=>t.value.in(i,l.value,a.value),i=>t.value.out(i,l.value,a.value)),m=_(e,"selected",e.selected,i=>s.value.in(i,l.value,a.value),i=>s.value.out(i,l.value,a.value));Z(()=>{r=!0});function S(i){const u=[];let o=i;for(;o!=null;)u.unshift(o),o=a.value.get(o);return u}const f=Ve("nested"),w=new Set,p={id:M(),root:{opened:n,activatable:z(e,"activatable"),selectable:z(e,"selectable"),activated:h,selected:m,selectedValues:v(()=>{const i=[];for(const[u,o]of m.value.entries())o==="on"&&i.push(u);return i}),register:(i,u,o)=>{if(w.has(i)){S(i).map(String).join(" -> "),S(u).concat(i).map(String).join(" -> ");return}else w.add(i);u&&i!==u&&a.value.set(i,u),o&&l.value.set(i,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],i])},unregister:i=>{if(r)return;w.delete(i),l.value.delete(i);const u=a.value.get(i);if(u){const o=l.value.get(u)??[];l.value.set(u,o.filter(b=>b!==i))}a.value.delete(i)},open:(i,u,o)=>{f.emit("click:open",{id:i,value:u,path:S(i),event:o});const b=c.value.open({id:i,value:u,opened:new Set(n.value),children:l.value,parents:a.value,event:o});b&&(n.value=b)},openOnSelect:(i,u,o)=>{const b=c.value.select({id:i,value:u,selected:new Map(m.value),opened:new Set(n.value),children:l.value,parents:a.value,event:o});b&&(n.value=b)},select:(i,u,o)=>{f.emit("click:select",{id:i,value:u,path:S(i),event:o});const b=s.value.select({id:i,value:u,selected:new Map(m.value),children:l.value,parents:a.value,event:o});b&&(m.value=b),p.root.openOnSelect(i,u,o)},activate:(i,u,o)=>{if(!e.activatable)return p.root.select(i,!0,o);f.emit("click:activate",{id:i,value:u,path:S(i),event:o});const b=t.value.activate({id:i,value:u,activated:new Set(h.value),children:l.value,parents:a.value,event:o});b&&(h.value=b)},children:l,parents:a,getPath:S}};return B(C,p),p.root},st=(e,r)=>{const l=L(C,ce),a=Symbol(Ce()),n=v(()=>e.value!==void 0?e.value:a),t={...l,id:n,open:(s,c)=>l.root.open(n.value,s,c),openOnSelect:(s,c)=>l.root.openOnSelect(n.value,s,c),isOpen:v(()=>l.root.opened.value.has(n.value)),parent:v(()=>l.root.parents.value.get(n.value)),activate:(s,c)=>l.root.activate(n.value,s,c),isActivated:v(()=>l.root.activated.value.has(g(n.value))),select:(s,c)=>l.root.select(n.value,s,c),isSelected:v(()=>l.root.selected.value.get(g(n.value))==="on"),isIndeterminate:v(()=>l.root.selected.value.get(n.value)==="indeterminate"),isLeaf:v(()=>!l.root.children.value.get(n.value)),isGroupActivator:l.isGroupActivator};return ee(()=>{!l.isGroupActivator&&l.root.register(n.value,l.id.value,r)}),Z(()=>{!l.isGroupActivator&&l.root.unregister(n.value)}),r&&B(C,t),t},gt=()=>{const e=L(C,ce);B(C,{...e,isGroupActivator:!0})},rt=R({opacity:[Number,String],...te(),...ae()},"VListItemSubtitle"),ct=ne()({name:"VListItemSubtitle",props:rt(),setup(e,r){let{slots:l}=r;return le(()=>y(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l)),{}}}),ut=Oe("v-list-item-title"),ot=R({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:W,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:W,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:$(),onClickOnce:$(),...Me(),...te(),...Le(),...Be(),...Ne(),...je(),..._e(),...ae(),...De(),...Re({variant:"text"})},"VListItem"),mt=ne()({name:"VListItem",directives:{Ripple:Ee},props:ot(),emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:a,emit:n}=r;const t=Ge(e,l),s=v(()=>e.value===void 0?t.href.value:e.value),{activate:c,isActivated:h,select:m,isOpen:S,isSelected:f,isIndeterminate:w,isGroupActivator:p,root:i,parent:u,openOnSelect:o,id:b}=st(s,!1),P=Ye(),I=v(()=>{var d;return e.active!==!1&&(e.active||((d=t.isActive)==null?void 0:d.value)||(i.activatable.value?h.value:f.value))}),T=v(()=>e.link!==!1&&t.isLink.value),F=v(()=>!!P&&(i.selectable.value||i.activatable.value||e.value!=null)),V=v(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||F.value)),ue=v(()=>e.rounded||e.nav),oe=v(()=>e.color??e.activeColor),de=v(()=>({color:I.value?oe.value??e.baseColor:e.baseColor,variant:e.variant}));Te(()=>{var d;return(d=t.isActive)==null?void 0:d.value},d=>{d&&x()}),ee(()=>{var d;(d=t.isActive)!=null&&d.value&&x()});function x(){u.value!=null&&i.open(u.value,!0),o(!0)}const{themeClasses:ve}=Fe(e),{borderClasses:fe}=xe(e),{colorClasses:ye,colorStyles:ge,variantClasses:me}=Ue(de),{densityClasses:Se}=He(e),{dimensionStyles:be}=Ke(e),{elevationClasses:he}=ze(e),{roundedClasses:pe}=We(ue),ke=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=v(()=>({isActive:I.value,select:m,isOpen:S.value,isSelected:f.value,isIndeterminate:w.value}));function we(d){var O;n("click",d),V.value&&((O=t.navigate)==null||O.call(t,d),!p&&(i.activatable.value?c(!h.value,d):(i.selectable.value||e.value!=null)&&m(!f.value,d)))}function Ae(d){(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),d.target.dispatchEvent(new MouseEvent("click",d)))}return le(()=>{const d=T.value?"a":e.tag,O=a.title||e.title!=null,Pe=a.subtitle||e.subtitle!=null,U=!!(e.appendAvatar||e.appendIcon),Ie=!!(U||a.append),H=!!(e.prependAvatar||e.prependIcon),j=!!(H||a.prepend);return P==null||P.updateHasPrepend(j),e.activeColor&&$e("active-color",["color","base-color"]),qe(y(d,Xe({class:["v-list-item",{"v-list-item--active":I.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!j&&(P==null?void 0:P.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&I.value},ve.value,fe.value,ye.value,Se.value,he.value,ke.value,pe.value,me.value,e.class],style:[ge.value,be.value,e.style],tabindex:V.value?P?-2:0:void 0,"aria-selected":F.value?i.activatable.value?h.value:i.selectable.value?f.value:I.value:void 0,onClick:we,onKeydown:V.value&&!T.value&&Ae},t.linkProps),{default:()=>{var K;return[Qe(V.value||I.value,"v-list-item"),j&&y("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?y(X,{key:"prepend-defaults",disabled:!H,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=a.prepend)==null?void 0:k.call(a,N.value)]}}):y(q,null,[e.prependAvatar&&y(J,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&y(Q,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),y("div",{class:"v-list-item__spacer"},null)]),y("div",{class:"v-list-item__content","data-no-activator":""},[O&&y(ut,{key:"title"},{default:()=>{var k;return[((k=a.title)==null?void 0:k.call(a,{title:e.title}))??e.title]}}),Pe&&y(ct,{key:"subtitle"},{default:()=>{var k;return[((k=a.subtitle)==null?void 0:k.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(K=a.default)==null?void 0:K.call(a,N.value)]),Ie&&y("div",{key:"append",class:"v-list-item__append"},[a.append?y(X,{key:"append-defaults",disabled:!U,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=a.append)==null?void 0:k.call(a,N.value)]}}):y(q,null,[e.appendIcon&&y(Q,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&y(J,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),y("div",{class:"v-list-item__spacer"},null)])]}}),[[Je("ripple"),V.value&&e.ripple]])}),{activate:c,isActivated:h,isGroupActivator:p,isSelected:f,list:P,select:m,root:i,id:b}}});export{mt as V,st as a,Ye as b,vt as c,yt as d,ft as m,gt as u};
