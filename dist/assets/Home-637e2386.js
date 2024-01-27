import{_ as $e}from"./logo-d961cabe.js";import{p as Ae}from"./productItem-5a9e25ca.js";import{_ as K,Q as ne,H as P,J as O,K as p,m as r,R as U,S as Y,T as he,p as x,t as q,y as B,d as j,r as oe,c as y,W as le,g as Te,x as H,X as ye,B as Se,w as z,Y as te,C as Ee,Z as G,$ as fe,l as se,e as Le,a0 as Ne,A as ve,N as b,M as V,L as N,a1 as Fe,a2 as Oe,k as je}from"./index-43595bc9.js";import{a as F,V as C}from"./VRow-d55aa01e.js";import{a as be,V as re}from"./VContainer-e86b5cdd.js";import{t as Me}from"./teamMembersList-1c9b74aa.js";import{a as Re,V as Ge}from"./index-cf779adb.js";import{m as _e,a as He,b as ue,q as ze,o as ce,L as Ue,r as qe,p as we,s as Ke,u as Ye}from"./VBtn-21a444ae.js";import{m as We,u as Je}from"./filter-969d035b.js";import{V as Qe,a as Xe,b as Ze}from"./VCard-26dc3fb3.js";import{m as et,a as tt,u as at,V as pe,b as ge,c as ae}from"./VTextField-5b1ba2e8.js";import{V as T}from"./VDivider-fccaa23e.js";import{V as lt,g as nt}from"./VList-6be12af9.js";import{V as ot}from"./VListItem-195105b4.js";import{V as st}from"./VForm-75ef5b00.js";import"./cart-155f2272.js";import"./ssrBoot-214df055.js";const rt={components:{productItem:Ae},created(){fetch("https://dummyjson.com/products").then(e=>e.json()).then(e=>this.products=e.products)},data(){return{products:[]}},props:{all:{type:Boolean}},computed:{items(){return this.all?this.products:this.products.filter(e=>e.id<9)}}};function ut(e,t,l,a,n,d){const i=ne("productItem");return P(),O(be,null,{default:p(()=>[r(F,null,{default:p(()=>[(P(!0),U(Y,null,he(d.items,u=>(P(),O(C,{key:u.id,cols:"12",sm:"12",md:"6",lg:"4",xl:"3"},{default:p(()=>[r(i,{product:u},null,8,["product"])]),_:2},1024))),128))]),_:1})]),_:1})}const ct=K(rt,[["render",ut]]),it=x({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),dt=Symbol.for("vuetify:datatable:expanded");function mt(e){const t=q(e,"expandOnClick"),l=B(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function a(u,c){const s=new Set(l.value);c?s.add(u.value):s.delete(u.value),l.value=s}function n(u){return l.value.has(u.value)}function d(u){a(u,!n(u))}const i={expand:a,expanded:l,expandOnClick:t,isExpanded:n,toggleExpand:d};return j(dt,i),i}const ft=x({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),vt=Symbol.for("vuetify:data-table-group");function pt(e){const{groupBy:t,sortBy:l}=e,a=oe(new Set),n=y(()=>t.value.map(s=>({...s,order:s.order??!1})).concat(l.value));function d(s){return a.value.has(s.id)}function i(s){const o=new Set(a.value);d(s)?o.delete(s.id):o.add(s.id),a.value=o}function u(s){function o(m){const v=[];for(const h of m.items)"type"in h&&h.type==="group"?v.push(...o(h)):v.push(h);return v}return o({type:"group",items:s,id:"dummy",key:"dummy",value:"dummy",depth:0})}const c={sortByWithGroups:n,toggleGroup:i,opened:a,groupBy:t,extractRows:u,isGroupOpen:d};return j(vt,c),c}function gt(e,t){if(!e.length)return[];const l=new Map;for(const a of e){const n=le(a.raw,t);l.has(n)||l.set(n,[]),l.get(n).push(a)}return l}function Ve(e,t){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!t.length)return[];const n=gt(e,t[0]),d=[],i=t.slice(1);return n.forEach((u,c)=>{const s=t[0],o=`${a}_${s}_${c}`;d.push({depth:l,id:o,key:s,value:c,items:i.length?Ve(u,i,l+1,o):u,type:"group"})}),d}function Pe(e,t){const l=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&l.push(a),(t.has(a.id)||a.value==null)&&l.push(...Pe(a.items,t))):l.push(a);return l}function ht(e,t,l){return{flatItems:y(()=>{if(!t.value.length)return e.value;const n=Ve(e.value,t.value.map(d=>d.key));return Pe(n,l.value)})}}function yt(e){let{page:t,itemsPerPage:l,sortBy:a,groupBy:n,search:d}=e;const i=Te("VDataTable"),u=y(()=>({page:t.value,itemsPerPage:l.value,sortBy:a.value,groupBy:n.value,search:d.value}));let c=null;H(u,()=>{ye(c,u.value)||((c==null?void 0:c.search)!==u.value.search&&(t.value=1),i.emit("update:options",u.value),c=u.value)},{deep:!0,immediate:!0})}const St=x({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),bt=Symbol.for("vuetify:data-table-pagination");function _t(e){const t=B(e,"page",void 0,a=>+(a??1)),l=B(e,"itemsPerPage",void 0,a=>+(a??10));return{page:t,itemsPerPage:l}}function wt(e){const{page:t,itemsPerPage:l,itemsLength:a}=e,n=y(()=>l.value===-1?0:l.value*(t.value-1)),d=y(()=>l.value===-1?a.value:Math.min(a.value,n.value+l.value)),i=y(()=>l.value===-1||a.value===0?1:Math.ceil(a.value/l.value));Se(()=>{t.value>i.value&&(t.value=i.value)});function u(v){l.value=v,t.value=1}function c(){t.value=z(t.value+1,1,i.value)}function s(){t.value=z(t.value-1,1,i.value)}function o(v){t.value=z(v,1,i.value)}const m={page:t,itemsPerPage:l,startIndex:n,stopIndex:d,pageCount:i,itemsLength:a,nextPage:c,prevPage:s,setPage:o,setItemsPerPage:u};return j(bt,m),m}function Vt(e){const{items:t,startIndex:l,stopIndex:a,itemsPerPage:n}=e;return{paginatedItems:y(()=>n.value<=0?t.value:t.value.slice(l.value,a.value))}}const Pt={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:t,value:l}=e;return new Set(l?[(a=t[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:t}=e;return t}},xe={showSelectAll:!0,allSelected:e=>{let{currentPage:t}=e;return t},select:e=>{let{items:t,value:l,selected:a}=e;for(const n of t)l?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:t,currentPage:l,selected:a}=e;return xe.select({items:l,value:t,selected:a})}},Ie={showSelectAll:!0,allSelected:e=>{let{allItems:t}=e;return t},select:e=>{let{items:t,value:l,selected:a}=e;for(const n of t)l?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:t,allItems:l,selected:a}=e;return Ie.select({items:l,value:t,selected:a})}},xt=x({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:ye}},"DataTable-select"),It=Symbol.for("vuetify:data-table-selection");function kt(e,t){let{allItems:l,currentPage:a}=t;const n=B(e,"modelValue",e.modelValue,f=>new Set(te(f).map(g=>{var S;return((S=l.value.find(k=>e.valueComparator(g,k.value)))==null?void 0:S.value)??g})),f=>[...f.values()]),d=y(()=>l.value.filter(f=>f.selectable)),i=y(()=>a.value.filter(f=>f.selectable)),u=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Pt;case"all":return Ie;case"page":default:return xe}});function c(f){return te(f).every(g=>n.value.has(g.value))}function s(f){return te(f).some(g=>n.value.has(g.value))}function o(f,g){const S=u.value.select({items:f,value:g,selected:new Set(n.value)});n.value=S}function m(f){o([f],!c([f]))}function v(f){const g=u.value.selectAll({value:f,allItems:d.value,currentPage:i.value,selected:new Set(n.value)});n.value=g}const h=y(()=>n.value.size>0),I=y(()=>{const f=u.value.allSelected({allItems:d.value,currentPage:i.value});return!!f.length&&c(f)}),w={toggleSelect:m,select:o,selectAll:v,isSelected:c,isSomeSelected:s,someSelected:h,allSelected:I,showSelectAll:u.value.showSelectAll};return j(It,w),w}const Ct=x({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Bt=Symbol.for("vuetify:data-table-sort");function Dt(e){const t=B(e,"sortBy"),l=q(e,"mustSort"),a=q(e,"multiSort");return{sortBy:t,mustSort:l,multiSort:a}}function $t(e){const{sortBy:t,mustSort:l,multiSort:a,page:n}=e,d=c=>{if(c.key==null)return;let s=t.value.map(m=>({...m}))??[];const o=s.find(m=>m.key===c.key);o?o.order==="desc"?l.value?o.order="asc":s=s.filter(m=>m.key!==c.key):o.order="desc":a.value?s=[...s,{key:c.key,order:"asc"}]:s=[{key:c.key,order:"asc"}],t.value=s,n&&(n.value=1)};function i(c){return!!t.value.find(s=>s.key===c.key)}const u={sortBy:t,toggleSort:d,isSorted:i};return j(Bt,u),u}function At(e,t,l,a){const n=Ee();return{sortedItems:y(()=>l.value.length?Tt(t.value,l.value,n.current.value,{...e.customKeySort,...a==null?void 0:a.value}):t.value)}}function Tt(e,t,l,a){const n=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return[...e].sort((d,i)=>{for(let u=0;u<t.length;u++){const c=t[u].key,s=t[u].order??"asc";if(s===!1)continue;let o=le(d.raw,c),m=le(i.raw,c);if(s==="desc"&&([o,m]=[m,o]),a!=null&&a[c]){const v=a[c](o,m);if(!v)continue;return v}if(o instanceof Date&&m instanceof Date)return o.getTime()-m.getTime();if([o,m]=[o,m].map(v=>v!=null?v.toString().toLocaleLowerCase():v),o!==m)return G(o)&&G(m)?0:G(o)?-1:G(m)?1:!isNaN(o)&&!isNaN(m)?Number(o)-Number(m):n.compare(o,m)}return 0})}const Et=x({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items");function Lt(e,t){const l=e.returnObject?t:fe(t,e.itemValue),a=fe(t,e.itemSelectable,!0);return{type:"item",value:l,selectable:a,raw:t}}function Nt(e,t){const l=[];for(const a of t)l.push(Lt(e,a));return l}function Ft(e){return{items:y(()=>Nt(e,e.items))}}const Ot=x({search:String,loading:Boolean,..._e(),...Et(),...xt(),...Ct(),...St({itemsPerPage:5}),...it(),...ft(),...We(),...He()},"VDataIterator"),jt=se()({name:"VDataIterator",props:Ot(),emits:{"update:modelValue":e=>!0,"update:groupBy":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0},setup(e,t){let{slots:l}=t;const a=B(e,"groupBy"),n=q(e,"search"),{items:d}=Ft(e),{filteredItems:i}=Je(e,d,n,{transform:R=>R.raw}),{sortBy:u,multiSort:c,mustSort:s}=Dt(e),{page:o,itemsPerPage:m}=_t(e),{toggleSort:v}=$t({sortBy:u,multiSort:c,mustSort:s,page:o}),{sortByWithGroups:h,opened:I,extractRows:w,isGroupOpen:f,toggleGroup:g}=pt({groupBy:a,sortBy:u}),{sortedItems:S}=At(e,i,h),{flatItems:k}=ht(S,a,I),D=y(()=>k.value.length),{startIndex:A,stopIndex:W,pageCount:J,prevPage:Q,nextPage:X,setItemsPerPage:$,setPage:E}=wt({page:o,itemsPerPage:m,itemsLength:D}),{paginatedItems:_}=Vt({items:k,startIndex:A,stopIndex:W,itemsPerPage:m}),M=y(()=>w(_.value)),{isSelected:Z,select:L,selectAll:ke,toggleSelect:Ce}=kt(e,{allItems:d,currentPage:M}),{isExpanded:Be,toggleExpand:De}=mt(e);yt({page:o,itemsPerPage:m,sortBy:u,groupBy:a,search:n});const ee=y(()=>({page:o.value,itemsPerPage:m.value,sortBy:u.value,pageCount:J.value,toggleSort:v,prevPage:Q,nextPage:X,setPage:E,setItemsPerPage:$,isSelected:Z,select:L,selectAll:ke,toggleSelect:Ce,isExpanded:Be,toggleExpand:De,isGroupOpen:f,toggleGroup:g,items:M.value,groupedItems:_.value}));return ue(()=>r(e.tag,{class:["v-data-iterator",e.class],style:e.style},{default:()=>{var R,ie,de,me;return[(R=l.header)==null?void 0:R.call(l,ee.value),_.value.length?(de=l.default)==null?void 0:de.call(l,ee.value):(ie=l["no-data"])==null?void 0:ie.call(l),(me=l.footer)==null?void 0:me.call(l,ee.value)]}})),{}}});const Mt=x({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...et(),...tt()},"VSwitch"),Rt=se()({name:"VSwitch",inheritAttrs:!1,props:Mt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{attrs:l,slots:a}=t;const n=B(e,"indeterminate"),d=B(e,"modelValue"),{loaderClasses:i}=ze(e),{isFocused:u,focus:c,blur:s}=at(e),o=oe(),m=y(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),v=Le(),h=y(()=>e.id||`switch-${v}`);function I(){n.value&&(n.value=!1)}function w(f){var g,S;f.stopPropagation(),f.preventDefault(),(S=(g=o.value)==null?void 0:g.input)==null||S.click()}return ue(()=>{const[f,g]=Ne(l),S=pe.filterProps(e),k=ge.filterProps(e);return r(pe,ve({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},i.value,e.class]},f,S,{modelValue:d.value,"onUpdate:modelValue":D=>d.value=D,id:h.value,focused:u.value,style:e.style}),{...a,default:D=>{let{id:A,messagesId:W,isDisabled:J,isReadonly:Q,isValid:X}=D;return r(ge,ve({ref:o},k,{modelValue:d.value,"onUpdate:modelValue":[$=>d.value=$,I],id:A.value,"aria-describedby":W.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:J.value,readonly:Q.value,onFocus:c,onBlur:s},g),{...a,default:$=>{let{backgroundColorClasses:E,backgroundColorStyles:_}=$;return r("div",{class:["v-switch__track",...E.value],style:_.value,onClick:w},null)},input:$=>{let{inputNode:E,icon:_,backgroundColorClasses:M,backgroundColorStyles:Z}=$;return r(Y,null,[E,r("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":_||e.loading},e.inset?void 0:M.value],style:e.inset?void 0:Z.value},[r(Re,null,{default:()=>[e.loading?r(Ue,{name:"v-switch",active:!0,color:X.value===!1?void 0:m.value},{default:L=>a.loader?a.loader(L):r(qe,{active:L.isActive,color:L.color,indeterminate:!0,size:"16",width:"2"},null)}):_&&r(ce,{key:_,icon:_,size:"x-small"},null)]})])])}})}})}),{}}}),Gt={data:()=>({desserts:[{name:"mohamad saeed",description:"You did a good job. I wish you success. Fast service, competitive prices, and beautiful merchandise",icon:"mdi-message-check-outline",color:"#6EC1E4",date:"2023/8/30"},{name:"Mariam Hamza",description:"I hope you continue to do the best. Your services are very useful and your prices are acceptable",color:"#FFADAD",icon:"mdi-chat",date:"2023/9/11"},{name:"omar alhomsey",description:"Super fast delivery",icon:"mdi-message",color:"#F4A261",date:"2023/12/5"},{name:"Joudy Ebraheem",description:"competitive prices. I would like to share the site with my friends",icon:"mdi-message-star-outline",color:"#6D4C41",date:"2023/11/20"}]})},Ht={class:"px-4"},zt={key:0};function Ut(e,t,l,a,n,d){const i=ne("v-vontainer");return P(),O(i,null,{default:p(()=>[r(jt,{items:e.desserts,"item-value":"name"},{default:p(({items:u,isExpanded:c,toggleExpand:s})=>[r(F,null,{default:p(()=>[(P(!0),U(Y,null,he(u,o=>(P(),O(C,{key:o.raw.name,cols:"12",sm:"12",md:"4"},{default:p(()=>[r(Qe,{class:"mx-auto","max-width":"380","data-aos":"fade-up","data-aos-duration":"3000"},{default:p(()=>[r(Xe,{class:"d-flex align-center justify-space-between"},{default:p(()=>[r(ce,{color:o.raw.color,icon:o.raw.icon,start:"",size:"22"},null,8,["color","icon"]),b("h4",null,V(o.raw.name),1)]),_:2},1024),r(Ze,null,{default:p(()=>[N(V(o.raw.description),1)]),_:2},1024),b("div",Ht,[r(Rt,{"model-value":c(o),label:`${c(o)?"Hide":"Show"} details`,density:"compact",inset:"",onClick:()=>s(o)},null,8,["model-value","label","onClick"])]),r(T),r(Ge,null,{default:p(()=>[c(o)?(P(),U("div",zt,[r(lt,{density:"compact",lines:!1},{default:p(()=>[r(ot,{title:` Sending Date:${o.raw.date}`,active:""},null,8,["title"])]),_:2},1024)])):Fe("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items"])]),_:1})}const qt=K(Gt,[["render",Ut]]),Kt={components:{},data(){return{name:"",email:"",phone:""}},methods:{submitForm(){const e=`Data has been sent 
 Name: ${this.name}
 e-mail: ${this.email}
 phone number : ${this.phone}`;alert(e)}}};function Yt(e,t,l,a,n,d){return P(),O(be,null,{default:p(()=>[r(F,null,{default:p(()=>[r(C,{cols:"6","data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine"},{default:p(()=>[r(re,{src:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ContactCenter_3840x2160:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=95",alt:" image is not found",containt:""})]),_:1}),r(C,{cols:"6"},{default:p(()=>[r(st,{"data-aos":"fade-left","data-aos-offset":"500","data-aos-duration":"500"},{default:p(()=>[r(F,null,{default:p(()=>[r(C,{cols:"12"},{default:p(()=>[r(ae,{label:"Name",outlined:"",modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=i=>n.name=i)},null,8,["modelValue"])]),_:1}),r(C,{cols:"12"},{default:p(()=>[r(ae,{label:"E-mail",outlined:"",modelValue:n.email,"onUpdate:modelValue":t[1]||(t[1]=i=>n.email=i)},null,8,["modelValue"])]),_:1}),r(C,{cols:"12"},{default:p(()=>[r(ae,{label:"phone Number",outlined:"",modelValue:n.phone,"onUpdate:modelValue":t[2]||(t[2]=i=>n.phone=i)},null,8,["modelValue"])]),_:1})]),_:1}),r(F,null,{default:p(()=>[r(C,{cols:"12"},{default:p(()=>[r(we,{onClick:d.submitForm,color:"green",width:"100%"},{default:p(()=>[N("Send")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Wt=K(Kt,[["render",Yt]]);function Jt(e){return Math.floor(Math.abs(e))*Math.sign(e)}const Qt=x({scale:{type:[Number,String],default:.5},..._e()},"VParallax"),Xt=se()({name:"VParallax",props:Qt(),setup(e,t){let{slots:l}=t;const{intersectionRef:a,isIntersecting:n}=Ke(),{resizeRef:d,contentRect:i}=Ye(),{height:u}=Oe(),c=oe();Se(()=>{var h;a.value=d.value=(h=c.value)==null?void 0:h.$el});let s;H(n,h=>{h?(s=nt(a.value),s=s===document.scrollingElement?document:s,s.addEventListener("scroll",v,{passive:!0}),v()):s.removeEventListener("scroll",v)}),je(()=>{s==null||s.removeEventListener("scroll",v)}),H(u,v),H(()=>{var h;return(h=i.value)==null?void 0:h.height},v);const o=y(()=>1-z(+e.scale));let m=-1;function v(){n.value&&(cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var A;const h=((A=c.value)==null?void 0:A.$el).querySelector(".v-img__img");if(!h)return;const I=s instanceof Document?document.documentElement.clientHeight:s.clientHeight,w=s instanceof Document?window.scrollY:s.scrollTop,f=a.value.getBoundingClientRect().top+w,g=i.value.height,S=f+(g-I)/2,k=Jt((w-S)*o.value),D=Math.max(1,(o.value*(I-g)+g)/g);h.style.setProperty("transform",`translateY(${k}px) scale(${D})`)}))}return ue(()=>r(re,{class:["v-parallax",{"v-parallax--active":n.value},e.class],style:e.style,ref:c,cover:!0,onLoadstart:v,onLoad:v},l)),{}}}),Zt={class:"hero d-flex flex-row fill-height justify-space-around align-center"},ea={class:"logo-container","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1500"},ta={class:"d-flex flex-column fill-height justify-center align-center text-white","data-aos":"fade-left","data-aos-duration":"1500"},aa={class:"text-h4 font-weight-thin mb-4"},la={class:"subheading text-h2"},na={class:"text-h2 my-16 text-center"},oa={class:"text-h2 my-16 text-center"},sa={class:"text-h2 my-16 text-center"},ra={class:"text-h2 my-16 text-center"},ua={__name:"Home",setup(e){return(t,l)=>{const a=ne("socailVue");return P(),U(Y,null,[r(Xt,{src:"https://wallpapercave.com/wp/wp3537555.jpg"},{default:p(()=>[N(" --> "),b("div",Zt,[b("div",ea,[r(re,{src:$e})]),b("div",ta,[b("h2",aa,V(t.$t("hero.title")),1),b("h3",la,V(t.$t("hero.subtitle")),1),r(we,{class:"mt-5",to:"/product",color:"warning"},{default:p(()=>[N(V(t.$t("hero.herobtn"))+" ",1),r(ce,{class:"ml-3"},{default:p(()=>[N("mdi mdi-arrow-right")]),_:1})]),_:1}),b("div",null,[r(a)])])])]),_:1}),b("h1",na,V(t.$t("section.section1")),1),r(T,{thickness:2,class:"border-opacity-50 mb-5 w-25 mx-auto",color:"warning"}),r(ct),b("h1",oa,V(t.$t("section.section2")),1),r(T,{thickness:2,class:"border-opacity-50 mb-5 w-25 mx-auto",color:"warning"}),r(Me),b("h1",sa,V(t.$t("section.section3")),1),r(T,{thickness:2,class:"border-opacity-50 mb-5 w-25 mx-auto",color:"warning"}),r(qt),b("h1",ra,V(t.$t("section.section4")),1),r(T,{thickness:2,class:"border-opacity-50 mb-5 w-25 mx-auto",color:"warning"}),r(Wt),r(T,{thickness:2,class:"border-opacity-50 mb-5 w-25 mx-auto",color:"warning"})],64)}}},Ia=K(ua,[["__scopeId","data-v-358c347e"]]);export{Ia as default};
