function b(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function A(){return Object.create(null)}function g(t){t.forEach(O)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function M(t){return Object.keys(t).length===0}function V(t,n){t.appendChild(n)}function W(t,n,e){t.insertBefore(n,e||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function Y(){return z(" ")}function Z(){return z("")}function tt(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function q(t){return Array.from(t.childNodes)}function et(t,n){n=""+n,t.data!==n&&(t.data=n)}function D(t,n,{bubbles:e=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,r,n),o}function rt(t,n){return new t(n)}let p;function m(t){p=t}function B(){if(!p)throw new Error("Function called outside component initialization");return p}function ot(t){B().$$.on_mount.push(t)}function ct(){const t=B();return(n,e,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[n];if(o){const i=D(n,e,{cancelable:r});return o.slice().forEach(u=>{u.call(t,i)}),!i.defaultPrevented}return!0}}function st(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const h=[],C=[];let _=[];const N=[],F=Promise.resolve();let x=!1;function T(){x||(x=!0,F.then(L))}function E(t){_.push(t)}const y=new Set;let d=0;function L(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),G(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;C.length;)C.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];y.has(e)||(y.add(e),e())}_.length=0}while(h.length);for(;N.length;)N.pop()();x=!1,y.clear(),m(t)}function G(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}function H(t){const n=[],e=[];_.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),_=n}const $=new Set;let l;function ut(){l={r:0,c:[],p:l}}function it(){l.r||g(l.c),l=l.p}function I(t,n){t&&t.i&&($.delete(t),t.i(n))}function ft(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),l.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}else r&&r()}function at(t,n){const e={},r={},o={$$scope:1};let i=t.length;for(;i--;){const u=t[i],a=n[i];if(a){for(const s in u)s in a||(r[s]=1);for(const s in a)o[s]||(e[s]=a[s],o[s]=1);t[i]=a}else for(const s in u)o[s]=1}for(const u in r)u in e||(e[u]=void 0);return e}function lt(t){return typeof t=="object"&&t!==null?t:{}}function dt(t){t&&t.c()}function J(t,n,e,r){const{fragment:o,after_update:i}=t.$$;o&&o.m(n,e),r||E(()=>{const u=t.$$.on_mount.map(O).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),i.forEach(E)}function K(t,n){const e=t.$$;e.fragment!==null&&(H(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Q(t,n){t.$$.dirty[0]===-1&&(h.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ht(t,n,e,r,o,i,u,a=[-1]){const s=p;m(t);const c=t.$$={fragment:null,ctx:[],props:i,update:b,not_equal:o,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:A(),dirty:a,skip_bound:!1,root:n.target||s.$$.root};u&&u(c.root);let k=!1;if(c.ctx=e?e(t,n.props||{},(f,w,...v)=>{const j=v.length?v[0]:w;return c.ctx&&o(c.ctx[f],c.ctx[f]=j)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](j),k&&Q(t,f)),w}):[],c.update(),k=!0,g(c.before_update),c.fragment=r?r(c.ctx):!1,n.target){if(n.hydrate){const f=q(n.target);c.fragment&&c.fragment.l(f),f.forEach(P)}else c.fragment&&c.fragment.c();n.intro&&I(t.$$.fragment),J(t,n.target,n.anchor,n.customElement),L()}m(s)}class _t{$destroy(){K(this,1),this.$destroy=b}$on(n,e){if(!S(e))return b;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}$set(n){this.$$set&&!M(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{lt as A,R as B,_t as S,Y as a,nt as b,W as c,V as d,X as e,it as f,I as g,P as h,ht as i,ct as j,ut as k,dt as l,J as m,b as n,K as o,z as p,et as q,tt as r,U as s,ft as t,st as u,Z as v,ot as w,C as x,rt as y,at as z};
//# sourceMappingURL=index-bafa6a1f.js.map