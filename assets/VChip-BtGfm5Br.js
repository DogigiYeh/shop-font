import{p as J,a1 as w,f as Y,h as ge,l as Z,bU as re,q as ee,r as Se,A as Ce,bV as de,s as G,c as m,at as le,bW as Ie,bi as te,w as xe,J as ve,L as i,aC as ae,ac as E,bA as Pe,b9 as Ve,n as fe,bG as pe,t as he,I as ze,y as L,M as j,bu as ne,m as Ae,ba as Re,i as we,b1 as Ee,k as _e,bP as Te,bF as Fe,bb as Be,a4 as Ge,v as Oe,bR as Me,be as De,z as We,B as Le,bX as He,E as $e,b2 as qe,bQ as Ke,aa as se,b6 as Ne,bT as Ue,bY as Qe,N as H,ab as Xe,O as ie,aR as oe}from"./index-DoTAM53F.js";function je(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const b=O(o,a),c=be(o,u,a),y=O(o,n),v=ye(o,n),g=y*.4;return c>v?v-g:c+b<v+y?v-b+y+g:c}function Je(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=O(u,a),b=ye(u,n),c=O(u,n);return b-o/2+c/2}function ce(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ye(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function be(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:b}=a;return e?n?b-o+u:u:a.scrollTop}function O(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ye(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ze=Symbol.for("vuetify:v-slide-group"),ke=J({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Y(),...ge({mobile:null}),...Z(),...re({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=ee()({name:"VSlideGroup",props:ke(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:b}=Ce(e),c=de(e,e.symbol),y=G(!1),v=G(0),g=G(0),I=G(0),d=m(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:_}=le(),{resizeRef:p,contentRect:P}=le(),s=Ie(),k=m(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),$=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(te){let l=-1;xe(()=>[c.selected.value,_.value,P.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(_.value&&P.value){const t=d.value?"width":"height";g.value=_.value[t],I.value=P.value[t],y.value=g.value+1<I.value}if($.value>=0&&p.el){const t=p.el.children[S.value];T(t,e.centerActive)}})})}const V=G(!1);function T(l,t){let r=0;t?r=Je({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=je({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),M(r)}function M(l){if(!te||!f.el)return;const t=O(d.value,f.el),r=be(d.value,u.value,f.el);if(!(ce(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:X}=f.el;l=W-X-l}d.value?s.horizontal(l,k.value):s(l,k.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function x(l){if(V.value=!0,!(!y.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){T(r);return}}}function q(l){V.value=!1}let F=!1;function D(l){var t;!F&&!V.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),F=!1}function B(){F=!0}function K(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,R;if(!p.el)return;let t;if(!l)t=Pe(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(R=p.el.querySelector(":focus"))==null?void 0:R.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function z(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*g.value;let R=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:X}=f.el;R+=W-X}M(R)}const A=m(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),N=m(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return b.value||y.value||Math.abs(v.value)>0;default:return!b.value&&(y.value||Math.abs(v.value)>0)}}),U=m(()=>Math.abs(v.value)>1),Q=m(()=>{if(!f.value)return!1;const l=ce(d.value,f.el),t=Ye(d.value,f.el);return l-t-Math.abs(v.value)>1});return ve(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:V.value||c.selected.value.length?-1:0,onFocus:D},{default:()=>{var l,t,r;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!U.value}],onMousedown:B,onClick:()=>U.value&&z("prev")},[((l=a.prev)==null?void 0:l.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:x,onFocusout:q,onKeydown:K},[(t=a.default)==null?void 0:t.call(a,A.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Q.value}],onMousedown:B,onClick:()=>Q.value&&z("next")},[((r=a.next)==null?void 0:r.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C,hasPrev:U,hasNext:Q}}}),me=Symbol.for("vuetify:v-chip-group"),el=J({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ve},...ke(),...Y(),...re({selectedClass:"v-chip--selected"}),...Z(),...fe(),...pe({variant:"tonal"})},"VChipGroup");ee()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=he(e),{isSelected:o,select:b,next:c,prev:y,selected:v}=de(e,me);return ze({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),ve(()=>{const g=ue.filterProps(e);return i(ue,j(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=a.default)==null?void 0:I.call(a,{isSelected:o,select:b,next:c,prev:y,selected:v.value})]}})}),{}}});const ll=J({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:w,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ne(),onClickOnce:ne(),...Ae(),...Y(),...Re(),...we(),...Ee(),..._e(),...Te(),...Fe(),...Z({tag:"span"}),...fe(),...pe({variant:"tonal"})},"VChip"),al=ee()({name:"VChip",directives:{Ripple:Be},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:b}=Ge(),{borderClasses:c}=Oe(e),{colorClasses:y,colorStyles:v,variantClasses:g}=Me(e),{densityClasses:I}=De(e),{elevationClasses:d}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:_}=He(e),{themeClasses:p}=he(e),P=$e(e,"modelValue"),s=qe(e,me,!1),k=Ke(e,a),$=m(()=>e.link!==!1&&k.isLink.value),S=m(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||k.isClickable.value)),V=m(()=>({"aria-label":b(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),P.value=!1,u("click:close",h)}}));function T(h){var x;u("click",h),S.value&&((x=k.navigate)==null||x.call(k,h),s==null||s.toggle())}function M(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),T(h))}return()=>{var z;const h=k.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),q=!!(x||o.append),F=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&s,B=!!(e.prependIcon||e.prependAvatar),K=!!(B||o.prepend),C=!s||s.isSelected.value;return P.value&&se(i(h,j({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":D,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((z=k.isActive)==null?void 0:z.value)},p.value,c.value,C?y.value:void 0,I.value,d.value,f.value,_.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:T,onKeydown:S.value&&!$.value&&M},k.linkProps),{default:()=>{var A;return[Ue(S.value,"v-chip"),D&&i(Qe,{key:"filter"},{default:()=>[se(i("div",{class:"v-chip__filter"},[o.filter?i(H,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(E,{key:"filter-icon",icon:e.filterIcon},null)]),[[Xe,s.isSelected.value]])]}),K&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(H,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ie,null,[e.prependIcon&&i(E,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(oe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((A=o.default)==null?void 0:A.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),q&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(H,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ie,null,[e.appendIcon&&i(E,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(oe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),F&&i("button",j({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},V.value),[o.close?i(H,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(E,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ne("ripple"),S.value&&e.ripple,null]])}}});export{al as V,Ze as a,ue as b};
