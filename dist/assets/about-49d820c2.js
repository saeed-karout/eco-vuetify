import{a3 as U,p as S,n as q,l as k,q as J,u as de,C as K,r as L,c as b,s as R,x as T,d as me,m as a,F as Q,a4 as ve,I as fe,y as he,o as ge,S as C,A as $,b as A,i as _e,G as ye,a5 as be,_ as G,H as _,R as w,K as v,T as D,J as B,N as p,M as P,Q as Ve,L as xe}from"./index-43595bc9.js";import{m as Ce,V as X,a as we}from"./VContainer-e86b5cdd.js";import{m as W,a as Z,t as ee,p as I,b as E,V as Ie,v as pe,w as te,x as ne,M as ke,y as Se}from"./VBtn-21a444ae.js";import{m as Te,u as $e}from"./lazy-92551830.js";import{u as Be}from"./ssrBoot-214df055.js";import{V as Y,c as Pe,a as Ee,b as Le}from"./VCard-26dc3fb3.js";import{a as Re,V as Ae}from"./VRow-d55aa01e.js";import{V as O}from"./VDivider-fccaa23e.js";import{t as De}from"./teamMembersList-1c9b74aa.js";import"./VListItem-195105b4.js";const Xe="/eco-vuetify/assets/about-4a1686da.png";const Ye=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:i}=e,l=.5,s=16;e.offsetX=t-n,e.offsetY=i-o,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&i<o-s&&e.up(e),e.down&&i>o+s&&e.down(e))};function je(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function He(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Ye(n)}function Ge(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function We(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>je(t,n),touchend:t=>He(t,n),touchmove:t=>Ge(t,n)}}function Me(e,n){var r;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},l=(r=n.instance)==null?void 0:r.$.uid;if(!o||!l)return;const s=We(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[l]=s,U(s).forEach(u=>{o.addEventListener(u,s[u],i)})}function Fe(e,n){var l,s;const t=(l=n.value)!=null&&l.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const i=t._touchHandlers[o];U(i).forEach(r=>{t.removeEventListener(r,i[r])}),delete t._touchHandlers[o]}const oe={mounted:Me,unmounted:Fe},ze=oe,se=Symbol.for("vuetify:v-window"),ae=Symbol.for("vuetify:v-window-group"),ie=S({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...W(),...Z(),...q()},"VWindow"),j=k()({name:"VWindow",directives:{Touch:oe},props:ie(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=J(e),{isRtl:i}=de(),{t:l}=K(),s=ee(e,ae),r=L(),u=b(()=>i.value?!e.reverse:e.reverse),c=R(!1),V=b(()=>{const m=e.direction==="vertical"?"y":"x",y=(u.value?!c.value:c.value)?"-reverse":"";return`v-window-${m}${y}-transition`}),h=R(0),g=L(void 0),x=b(()=>s.items.value.findIndex(m=>s.selected.value.includes(m.id)));T(x,(m,f)=>{const y=s.items.value.length,N=y-1;y<=2?c.value=m<f:m===N&&f===0?c.value=!0:m===0&&f===N?c.value=!1:c.value=m<f}),me(se,{transition:V,isReversed:c,transitionCount:h,transitionHeight:g,rootRef:r});const d=b(()=>e.continuous||x.value!==0),M=b(()=>e.continuous||x.value!==s.items.value.length-1);function F(){d.value&&s.prev()}function z(){M.value&&s.next()}const ue=b(()=>{const m=[],f={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:s.prev,ariaLabel:l("$vuetify.carousel.prev")};m.push(d.value?t.prev?t.prev({props:f}):a(I,f,null):a("div",null,null));const y={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:s.next,ariaLabel:l("$vuetify.carousel.next")};return m.push(M.value?t.next?t.next({props:y}):a(I,y,null):a("div",null,null)),m}),ce=b(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?F():z()},right:()=>{u.value?z():F()},start:f=>{let{originalEvent:y}=f;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return E(()=>Q(a(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var m,f;return[a("div",{class:"v-window__container",style:{height:g.value}},[(m=t.default)==null?void 0:m.call(t,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[ue.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[ve("touch"),ce.value]])),{group:s}}}),Ne=S({color:String,cycle:Boolean,delimiterIcon:{type:fe,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ie({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Oe=k()({name:"VCarousel",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=he(e,"modelValue"),{t:i}=K(),l=L();let s=-1;T(o,u),T(()=>e.interval,u),T(()=>e.cycle,c=>{c?u():window.clearTimeout(s)}),ge(r);function r(){!e.cycle||!l.value||(s=window.setTimeout(l.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(s),window.requestAnimationFrame(r)}return E(()=>{const c=j.filterProps(e);return a(j,$({ref:l},c,{modelValue:o.value,"onUpdate:modelValue":V=>o.value=V,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:A(e.height)},e.style]}),{default:t.default,additional:V=>{let{group:h}=V;return a(C,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&a(Ie,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((g,x)=>{const d={id:`carousel-item-${g.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",x+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(g.id)&&"v-btn--active"],onClick:()=>h.select(g.id,!0)};return t.item?t.item({props:d,item:g}):a(I,$(g,d),null)})]})]),e.progress&&a(pe,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(h.getItemIndex(o.value)+1)/h.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),le=S({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...W(),...te(),...Te()},"VWindowItem"),H=k()({name:"VWindowItem",directives:{Touch:ze},props:le(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=_e(se),i=ne(e,ae),{isBooted:l}=Be();if(!o||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=R(!1),r=b(()=>l.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){var d;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=A((d=o.rootRef.value)==null?void 0:d.clientHeight)),o.transitionCount.value+=1)}function V(){u()}function h(d){s.value&&be(()=>{!r.value||!s.value||!o||(o.transitionHeight.value=A(d.clientHeight))})}const g=b(()=>{const d=o.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof d!="string"?o.transition.value:d,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:V,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:V,onEnter:h}:!1}),{hasContent:x}=$e(e,i.isSelected);return E(()=>a(ke,{transition:g.value,disabled:!l.value},{default:()=>{var d;return[Q(a("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[x.value&&((d=t.default)==null?void 0:d.call(t))]),[[ye,i.isSelected.value]])]}})),{groupItem:i}}}),Ue=S({...Ce(),...le()},"VCarouselItem"),qe=k()({name:"VCarouselItem",inheritAttrs:!1,props:Ue(),setup(e,n){let{slots:t,attrs:o}=n;E(()=>{const i=X.filterProps(e),l=H.filterProps(e);return a(H,$({class:"v-carousel-item"},l),{default:()=>[a(X,$(o,i),t)]})})}}),Je={data(){return{items:[{src:"https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Ease of use"},{src:"https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Electronic payment"},{src:"https://images.pexels.com/photos/3943729/pexels-photo-3943729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"No need for paper money"},{src:"https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/societe/palestine-vaincra-150-personnes-se-rassemblent-a-lyon-4208119/60688931-1-fre-FR/Palestine-vaincra-150-personnes-se-rassemblent-a-Lyon.jpg",title:"I belong to Palestine"}]}}},Ke={class:"carousel","data-aos":"zoom-in-down"},Qe={class:"d-flex fill-height justify-center align-center"},Ze={class:"text-h4"};function et(e,n,t,o,i,l){return _(),w("div",Ke,[a(Oe,{"hide-delimiters":"",cycle:""},{default:v(()=>[(_(!0),w(C,null,D(i.items,(s,r)=>(_(),B(qe,{key:r,src:s.src,height:"800px",cover:"",title:s.title},{default:v(()=>[p("div",Qe,[p("div",Ze,P(s.title),1)])]),_:2},1032,["src","title"]))),128))]),_:1})])}const tt=G(Je,[["render",et]]);const re=Symbol.for("vuetify:v-item-group"),nt=S({...W(),...Se({selectedClass:"v-item--selected"}),...Z(),...q()},"VItemGroup"),ot=k()({name:"VItemGroup",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=J(e),{isSelected:i,select:l,next:s,prev:r,selected:u}=ee(e,re);return()=>a(e.tag,{class:["v-item-group",o.value,e.class],style:e.style},{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t,{isSelected:i,select:l,next:s,prev:r,selected:u.value})]}})}}),st=k()({name:"VItem",props:te(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const{isSelected:o,select:i,toggle:l,selectedClass:s,value:r,disabled:u}=ne(e,re);return()=>{var c;return(c=t.default)==null?void 0:c.call(t,{isSelected:o.value,selectedClass:s.value,select:i,toggle:l,value:r.value,disabled:u.value})}}}),at={data(){return{length:3,onboarding:0,services:[{id:1,name:"All kinds of products at the cheapest prices"},{id:2,name:"Instant delivery service"},{id:3,name:"Shipping to all countries"},{id:4,name:"Electronic payment"}]}},methods:{next(){this.onboarding=this.onboarding+1>this.length?1:this.onboarding+1},prev(){this.onboarding=this.onboarding-1<=0?this.length:this.onboarding-1}}},it=p("h2",{class:"text-h3 d-flex justify-center"},"Services that we provide",-1),lt={class:"text-h2"};function rt(e,n,t,o,i,l){return _(),w(C,null,[it,a(Y,{border:"",flat:"",rounded:"0",class:"mt-5","data-aos":"zoom-in-down"},{default:v(()=>[a(j,{modelValue:i.onboarding,"onUpdate:modelValue":n[0]||(n[0]=s=>i.onboarding=s)},{default:v(()=>[(_(!0),w(C,null,D(i.services,s=>(_(),B(H,{key:s.id},{default:v(()=>[a(Y,{height:"200",class:"d-flex justify-center align-center",background:"blue"},{default:v(()=>[p("span",lt,P(s.name),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"]),a(Pe,{class:"justify-space-between"},{default:v(()=>[a(I,{variant:"plain",icon:"mdi-chevron-left",onClick:l.prev},null,8,["onClick"]),a(ot,{modelValue:i.onboarding,"onUpdate:modelValue":n[1]||(n[1]=s=>i.onboarding=s),class:"text-center",mandatory:""},{default:v(()=>[(_(!0),w(C,null,D(i.length,s=>(_(),B(st,{key:`btn-${s}`,value:s},{default:v(({isSelected:r,toggle:u})=>[a(I,{variant:r?"outlined":"text",icon:"mdi-record",onClick:u},null,8,["variant","onClick"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(I,{variant:"plain",icon:"mdi-chevron-right",onClick:l.next},null,8,["onClick"])]),_:1})]),_:1})],64)}const ut=G(at,[["render",rt]]);const ct={components:{sliderAbout:ut},data(){return{services:[{id:1,name:"خدمة 1"},{id:2,name:"خدمة 2"},{id:3,name:"خدمة 3"}]}}};function dt(e,n,t,o,i,l){const s=Ve("sliderAbout");return _(),B(we,null,{default:v(()=>[a(Re,null,{default:v(()=>[a(Ae,{cols:"12","data-aos":"zoom-in-down"},{default:v(()=>[a(O,{class:"my-4"}),a(Y,null,{default:v(()=>[a(Ee,{class:"text-h3 d-flex justify-center mb-5"},{default:v(()=>[xe(P(e.$t("about.title")),1)]),_:1}),a(Le,null,{default:v(()=>[p("p",null,P(e.$t("about.subtitle")),1)]),_:1})]),_:1}),a(O,{class:"my-4"})]),_:1})]),_:1}),a(s)]),_:1})}const mt=G(ct,[["render",dt],["__scopeId","data-v-55bb6e53"]]),wt={__name:"about",setup(e){return(n,t)=>(_(),w(C,null,[a(tt),p("div",null,[a(X,{src:Xe,class:"my-5",width:"100%",height:"400px","data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"1000"})]),a(mt),a(De)],64))}};export{wt as default};
