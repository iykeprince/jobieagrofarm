(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[488],{9079:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password/Form",function(){return n(1401)}])},143:function(t,e,n){"use strict";var i=n(5893),r=n(1664),o=n.n(r),l=n(6794),a=n.n(l);let s=t=>{let{disabled:e,link:n,to:r,className:l,onClick:s,children:c}=t;return n?(0,i.jsx)(o(),{href:r,className:" ".concat(l," "),children:(0,i.jsx)("span",{children:c})}):(0,i.jsx)("button",{disabled:e,onClick:s,className:" ".concat(l," ").concat(a().button),children:c})};e.Z=s},9667:function(t,e,n){"use strict";function i(t){let e=RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");return!!t.match(e)}function r(t){return!!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(t)}n.d(e,{J:function(){return i},X:function(){return r}})},1401:function(t,e,n){"use strict";n.r(e);var i=n(5893),r=n(7294),o=n(9667),l=n(2875),a=n(143),s=n(4849),c=n.n(s);let u=t=>{let[e,n]=(0,r.useState)({email:"",emailIsValid:!1,emailIsFocus:!1}),s=t=>{n(e=>({...e,email:t.target.value}));let{passwordIsValid:i}=e,r=(0,o.J)(t.target.value);i&&r?n(t=>({...t,formIsValid:!0})):n(t=>({...t,formIsValid:!1}))},u=t=>{n(t=>({...t,emailIsFocus:!0}));let i=(0,o.J)(e.email);i?n(t=>({...t,emailIsValid:!0})):n(t=>({...t,emailIsValid:!1}))},_=i=>{i.preventDefault(),t.onSubmit({email:e.email}),n({email:"",emailIsValid:!1,emailIsFocus:!1})};return(0,i.jsxs)("form",{className:c().forgot__form,onSubmit:_,children:[(0,i.jsx)(l.default,{id:"email",label:"Email",type:"email",invalid:!e.emailIsValid&&e.emailIsFocus?"invalid":"",placeholder:"example@email.com",value:e.email,onChange:s,onBlur:u}),e.emailIsFocus&&!e.emailIsValid&&(0,i.jsx)("pre",{className:c().invalid__input,children:"Enter a valid email."}),(0,i.jsx)("div",{className:c().btn__box,children:(0,i.jsx)(a.Z,{id:"btn__submit",type:"submit",className:c().button,children:"Continue"})})]})};e.default=u},2875:function(t,e,n){"use strict";n.r(e);var i=n(5893),r=n(5697),o=n.n(r),l=n(8193),a=n(7549),s=n.n(a);let c=t=>{let{invalid:e="",passwordIcon:n,showPassword:r,setShowPassword:o,...a}=t;return(0,i.jsxs)("div",{className:"".concat(t.className," ").concat(s().input__group),"data-testid":"login__input",children:[(0,i.jsx)("label",{className:s().label,children:t.label}),(0,i.jsx)("input",{...a,className:"".concat(e?"".concat(s().invalid):""," ").concat(s().input)}),n?(0,i.jsx)("div",{className:s().eye,onClick:()=>o(!r),children:r?(0,i.jsx)("span",{className:s().eyeSvg,children:(0,i.jsx)(l.p3W,{})}):(0,i.jsx)("span",{className:s().eyeSvg,children:(0,i.jsx)(l.w8I,{})})}):null]})};c.propTypes={id:null===o()||void 0===o()?void 0:o().string,label:null===o()||void 0===o()?void 0:o().string,type:null===o()||void 0===o()?void 0:o().string,invalid:null===o()||void 0===o()?void 0:o().string,placeholder:o().string,value:o().string,onBlur:o().func,onChange:o().func},e.default=c},4849:function(t){t.exports={forgot__password:"ForgotForm_forgot__password__WAsen",text:"ForgotForm_text__vFEHz",invalid__input:"ForgotForm_invalid__input__ieRF_",btn__box:"ForgotForm_btn__box__N_oiH",button:"ForgotForm_button__RV0rI",p:"ForgotForm_p__CgFS5",a:"ForgotForm_a__zBfnW"}},7549:function(t){t.exports={input__group:"LoginInput_input__group__N8Vcq",label:"LoginInput_label__xzyVx",input:"LoginInput_input__eRrtF",eye:"LoginInput_eye__057FY",eyeSvg:"LoginInput_eyeSvg__9_5Qj"}},6794:function(t){t.exports={button:"Button_button__HxzDS"}},8357:function(t,e,n){"use strict";n.d(e,{w_:function(){return s}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),l=function(){return(l=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)0>e.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function s(t){return function(e){return i.createElement(c,l({attr:l({},t.attr)},e),function t(e){return e&&e.map(function(e,n){return i.createElement(e.tag,l({key:n},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var n,r=t.attr,o=t.size,s=t.title,c=a(t,["attr","size","title"]),u=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,c,{className:n,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),t.children)};return void 0!==o?i.createElement(o.Consumer,null,function(t){return e(t)}):e(r)}}},function(t){t.O(0,[617,210,774,888,179],function(){return t(t.s=9079)}),_N_E=t.O()}]);