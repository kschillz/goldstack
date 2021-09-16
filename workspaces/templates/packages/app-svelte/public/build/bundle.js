(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function i(t,e){t.appendChild(e)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let f;function h(t){f=t}new Set,new Set;const $=[],p=[],m=[],b=[],g=Promise.resolve();let y=!1;function _(t){m.push(t)}let k=!1;const w=new Set;function x(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),v(e.$$)}for(h(null),$.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];w.has(e)||(w.add(e),e())}m.length=0}while($.length);for(;b.length;)b.pop()();y=!1,k=!1,w.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const E=new Set;let S;function C(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(r,l,i,a,u,d,p=[-1]){const m=f;h(r);const b=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:p,skip_bound:!1};let k=!1;if(b.ctx=i?i(r,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&u(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),k&&function(t,e){-1===t.$$.dirty[0]&&($.push(t),y||(y=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(r,t)),e})):[],b.update(),k=!0,o(b.before_update),b.fragment=!!a&&a(b.ctx),l.target){if(l.hydrate){const t=(S=l.target,Array.from(S.childNodes));b.fragment&&b.fragment.l(t),t.forEach(c)}else b.fragment&&b.fragment.c();l.intro&&((w=r.$$.fragment)&&w.i&&(E.delete(w),w.i(v))),function(t,n,r,l){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,r),l||_((()=>{const n=c.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(_)}(r,l.target,l.anchor,l.customElement),x()}var w,v,S;h(m)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function j(e){let n,o,s,r,l,f,h;return{c(){n=a("main"),o=a("h1"),s=u("Hello "),r=u(e[0]),l=u("!"),f=u(" "),h=a("p"),h.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',d(o,"class","svelte-1tky8bj"),d(n,"class","svelte-1tky8bj")},m(t,e){(function(t,e,n){t.insertBefore(e,n||null)})(t,n,e),i(n,o),i(o,s),i(o,r),i(o,l),i(n,f),i(n,h)},p(t,[e]){var n,o;1&e&&(n=r,o=""+(o=t[0]),n.wholeText!==o&&(n.data=o))},i:t,o:t,d(t){t&&c(n)}}}function A(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}new class extends class{$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,A,j,r,{name:0})}}({target:document.body,props:{name:"world"}})})();