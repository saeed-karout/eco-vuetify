import{p as L,r as v,c as O,O as i,B as j,Y as I,$ as w}from"./index-43595bc9.js";const S=(t,c,e)=>t==null||c==null?-1:t.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),A=L({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function x(t,c,e){var M;const f=[],s=(e==null?void 0:e.default)??S,m=e!=null&&e.filterKeys?I(e.filterKeys):!1,g=Object.keys((e==null?void 0:e.customKeyFilter)??{}).length;if(!(t!=null&&t.length))return f;e:for(let r=0;r<t.length;r++){const[a,y=a]=I(t[r]),d={},u={};let l=-1;if(c&&!(e!=null&&e.noFilter)){if(typeof a=="object"){const K=m||Object.keys(y);for(const n of K){const b=w(y,n,y),k=(M=e==null?void 0:e.customKeyFilter)==null?void 0:M[n];if(l=k?k(b,c,a):s(b,c,a),l!==-1&&l!==!1)k?d[n]=l:u[n]=l;else if((e==null?void 0:e.filterMode)==="every")continue e}}else l=s(a,c,a),l!==-1&&l!==!1&&(u.title=l);const h=Object.keys(u).length,F=Object.keys(d).length;if(!h&&!F||(e==null?void 0:e.filterMode)==="union"&&F!==g&&!h||(e==null?void 0:e.filterMode)==="intersection"&&(F!==g||!h))continue}f.push({index:r,matches:{...u,...d}})}return f}function B(t,c,e,f){const s=v([]),m=v(new Map),g=O(()=>f!=null&&f.transform?i(c).map(r=>[r,f.transform(r)]):i(c));j(()=>{const r=typeof e=="function"?e():i(e),a=typeof r!="string"&&typeof r!="number"?"":String(r),y=x(g.value,a,{customKeyFilter:{...t.customKeyFilter,...i(f==null?void 0:f.customKeyFilter)},default:t.customFilter,filterKeys:t.filterKeys,filterMode:t.filterMode,noFilter:t.noFilter}),d=i(c),u=[],l=new Map;y.forEach(h=>{let{index:F,matches:K}=h;const n=d[F];u.push(n),l.set(n.value,K)}),s.value=u,m.value=l});function M(r){return m.value.get(r.value)}return{filteredItems:s,filteredMatches:m,getMatches:M}}export{A as m,B as u};
