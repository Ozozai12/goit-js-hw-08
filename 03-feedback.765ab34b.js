var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function T(){var e=m();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return v?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,b&&r?y(e):(r=o=void 0,a)}function w(){var e=m(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(v)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),S={email:"",message:""};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(y.value=t.email,j.value=t.message)}(),b.addEventListener("input",t((e=>{S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.addEventListener("submit",(function(e){if(e.preventDefault(),!y.value||!j.value)return;console.log(S),function(e){localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}(e)}));
//# sourceMappingURL=03-feedback.765ab34b.js.map