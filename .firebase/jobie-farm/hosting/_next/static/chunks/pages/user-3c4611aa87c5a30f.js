(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{8948:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return a(2968)}])},143:function(e,s,a){"use strict";var t=a(5893),n=a(1664),r=a.n(n),l=a(6794),o=a.n(l);let i=e=>{let{disabled:s,link:a,to:n,className:l,onClick:i,children:c}=e;return a?(0,t.jsx)(r(),{href:n,className:" ".concat(l," "),children:(0,t.jsx)("span",{children:c})}):(0,t.jsx)("button",{disabled:s,onClick:i,className:" ".concat(l," ").concat(o().button),children:c})};s.Z=i},3057:function(e,s,a){"use strict";a.d(s,{Z:function(){return m}});var t=a(5893),n=a(3790),r=a.n(n),l=a(1163),o=a(1664),i=a.n(o),c=a(5697),d=a.n(c);let _=e=>{let{href:s,exact:a,children:n,...r}=e,{pathname:o}=(0,l.useRouter)(),c=a?o===s:o.startsWith(s);return c&&(r.className+=" activeNav"),(0,t.jsx)(i(),{href:s,legacyBehavior:!0,children:(0,t.jsx)("a",{...r,children:n})})};_.propTypes={href:d().string.isRequired,exact:d().bool},_.defaultProps={exact:!1};let u=()=>(0,t.jsxs)("ul",{className:r().nav,children:[(0,t.jsx)("li",{children:(0,t.jsx)(_,{href:"/user",exact:!0,className:r().nav__list,children:"Profile"})}),(0,t.jsx)("li",{className:r().nav__list,children:(0,t.jsx)(_,{href:"/user/orders",exact:!0,className:r().nav__list,children:"Orders"})}),(0,t.jsx)("li",{className:r().nav__list,children:(0,t.jsx)(_,{href:"/user/transactions",exact:!0,className:r().nav__list,children:"Transactions"})})]});var m=u},2968:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t=a(5893),n=a(7294),r=a(4260),l=a(7823),o=a(143),i=a(5697),c=a.n(i),d=a(8193),_=a(3790),u=a.n(_);let m=e=>{let{invalid:s="",passwordIcon:a,showPassword:n,setShowPassword:r,...l}=e;return(0,t.jsxs)("div",{className:"".concat(e.className," ").concat(u().input__group),"data-testid":"login__input",children:[(0,t.jsx)("label",{className:u().label,children:e.label}),(0,t.jsx)("input",{...l,className:"".concat(s?"".concat(u().invalid):""," ").concat(u().input)}),a?(0,t.jsx)("div",{className:u().eye,onClick:()=>r(!n),children:n?(0,t.jsx)("span",{className:u().eyeSvg,children:(0,t.jsx)(d.p3W,{})}):(0,t.jsx)("span",{className:u().eyeSvg,children:(0,t.jsx)(d.w8I,{})})}):null]})};m.propTypes={id:null===c()||void 0===c()?void 0:c().string,label:null===c()||void 0===c()?void 0:c().string,type:null===c()||void 0===c()?void 0:c().string,invalid:null===c()||void 0===c()?void 0:c().string,placeholder:c().string,value:c().string,onBlur:c().func,onChange:c().func};var h=a(5543),p=a.n(h);let f=e=>{let{onSubmit:s}=e,[a,r]=(0,n.useState)({oldPassword:"",newPassword:"",confirmNewPassword:""}),l=e=>{r(s=>({...s,oldPassword:e.target.value}))},i=e=>{r(s=>({...s,newPassword:e.target.value}))},c=e=>{r(s=>({...s,confirmNewPassword:e.target.value}))},d=e=>{e.preventDefault(),s({oldPassword:a.oldPassword,newPassword:a.newPassword,confirmNewPassword:a.confirmNewPassword})};return(0,t.jsxs)("form",{className:p().contact__form,noValidate:!0,onSubmit:d,children:[(0,t.jsx)("h1",{className:p().h1,children:"Change Password"}),(0,t.jsx)("div",{className:"input-group",children:(0,t.jsx)(m,{id:"oldPassword",label:"Old Password ",type:"text",placeholder:"Enter your old password",value:a.oldPassword,onChange:l})}),(0,t.jsx)("div",{className:"input-group",children:(0,t.jsx)(m,{id:"newPassword",label:"New Password",type:"text",placeholder:"Enter your new password",value:a.newPassword,onChange:i})}),(0,t.jsx)("div",{className:"input-group",children:(0,t.jsx)(m,{id:"confirmNewPassword",label:"New Password",type:"text",placeholder:"Enter your new password again",value:a.confirmNewPassword,onChange:c})}),(0,t.jsx)("div",{className:p().btn__box,children:(0,t.jsx)(o.Z,{type:"submit",className:" btn btn-dark",children:"Change Password"})})]})},x=()=>{let e=e=>{console.log(e)};return(0,t.jsx)(f,{onSubmit:e})};var v=a(3247),N=a(9473),w=a(2583),j=a(4438),b=a(9701),g=a.n(b);let P=e=>{let{onSubmit:s,email:a,firstName:r,lastName:l,phone:i}=e,[c,d]=(0,n.useState)({email:a,firstName:r,lastName:l,phone:i}),_=e=>{d(s=>({...s,firstName:e.target.value}))},u=e=>{d(s=>({...s,lastName:e.target.value}))},h=e=>{d(e=>({...e,email:a}))},p=e=>{d(s=>({...s,phone:e.target.value}))},f=e=>{e.preventDefault(),s({email:c.email,firstName:c.firstName,lastName:c.lastName,phone:c.phone})};return(0,t.jsxs)("form",{className:g().contact__form,onSubmit:f,children:[(0,t.jsx)("h1",{className:"display-5",children:"Update Profile"}),(0,t.jsxs)("div",{className:g().row,children:[(0,t.jsx)("div",{className:g().row__left,children:(0,t.jsx)(m,{id:"firstName",label:"First Name",type:"text",placeholder:"What's your first name?",value:c.firstName,onChange:_})}),(0,t.jsx)("div",{className:g().row__right,children:(0,t.jsx)(m,{id:"lastName",label:"Last Name",type:"text",placeholder:"What's your last name?",value:c.lastName,onChange:u})})]}),(0,t.jsx)(m,{id:"email",label:"Email Address",type:"email",readOnly:!0,placeholder:a,value:c.email,onChange:h}),(0,t.jsx)(m,{id:"phone",label:"Phone Number",type:"nomber",placeholder:"Enter your phone number",value:c.phone,onChange:p}),(0,t.jsx)("div",{className:"".concat(g().btn__box),children:(0,t.jsx)(o.Z,{type:"submit",className:"btn btn-dark",children:"Update Profile"})})]})},y=e=>{let{email:s}=e,{users:a}=(0,N.v9)(e=>e.products),n=(0,N.I0)(),r=null==a?void 0:a.find(e=>e.email===s),l=null==r?void 0:r.id;console.log(r);let o=async e=>{let t=(0,v.JU)(w.db,"users",l);await (0,v.r7)(t,{lastName:e.lastName,firstName:e.firstName,phone:e.phone,email:s}).then(()=>{console.log("Document successfully updated!",a);let e=(0,v.hJ)(w.db,"users");return(0,v.PL)(e)}).then(e=>{let s=e.docs.map(e=>{let s=e.data();return s.id=e.id,s});n(j.a.addUsers({users:s})),console.log("again",a)}).catch(e=>{console.error("Error updating document: ",e)})};return(0,t.jsx)(P,{onSubmit:o,email:s,firstName:null==r?void 0:r.firstName,lastName:null==r?void 0:r.lastName,phone:null==r?void 0:r.phone})};var C=a(3057),U=a(5096),O=a(3750),E=a(1102),S=a.n(E);function k(){let{users:e}=(0,N.v9)(e=>e.products),{authUser:s}=(0,U.a)(),a=null==s?void 0:s.email,n=e.find(e=>e.email===a);return(0,t.jsxs)("div",{children:[(0,t.jsx)(l.Z,{}),(0,t.jsx)("div",{className:"p-10"}),(0,t.jsx)("div",{className:S().head,children:(0,t.jsx)(C.Z,{})}),(0,t.jsxs)("div",{className:S().container,children:[(0,t.jsxs)("div",{className:S().left,children:[(0,t.jsx)("p",{className:S().icon__box,children:(0,t.jsx)(O._Tb,{className:S().icon})}),(0,t.jsxs)("div",{className:S().profile__details,children:[(0,t.jsxs)("p",{className:S().p,children:["Full Name ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:S().span,children:"".concat(null==n?void 0:n.lastName," ").concat(null==n?void 0:n.firstName)})]}),(0,t.jsxs)("p",{className:S().p,children:["Email:",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:S().span,children:null==n?void 0:n.email})]}),(0,t.jsxs)("p",{className:S().p,children:["Phone Number: ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:S().span,children:null==n?void 0:n.phone})]})]})]}),(0,t.jsxs)("div",{className:S().right,children:[(0,t.jsx)("div",{children:(0,t.jsx)(y,{email:null==n?void 0:n.email})}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{children:(0,t.jsx)(x,{})})]})]}),(0,t.jsx)(r.Z,{})]})}},5543:function(e){e.exports={contact__form:"ChangePassword_contact__form__H_yc2",h1:"ChangePassword_h1__nmyHL",row:"ChangePassword_row__WUxbi",row__left:"ChangePassword_row__left__HrLUJ",row__right:"ChangePassword_row__right__uJyWm",btn__box:"ChangePassword_btn__box__zuynu",button:"ChangePassword_button__pMoeM"}},9701:function(e){e.exports={contact__form:"UpdateProfile_contact__form__PHbtS",h1:"UpdateProfile_h1__OcdfW",row:"UpdateProfile_row__Pv1bO",row__left:"UpdateProfile_row__left__yR_dh",row__right:"UpdateProfile_row__right__t7h90",btn__box:"UpdateProfile_btn__box__zxYrf",button:"UpdateProfile_button__ywHQ1"}},3790:function(e){e.exports={input__group:"UserInput_input__group__1_9uZ",label:"UserInput_label__hrWpX",input:"UserInput_input__Fc1Bk",nav:"UserInput_nav__HumbZ",nav__list:"UserInput_nav__list__MeSnC"}},1102:function(e){e.exports={head:"User_head__6p2PJ",container:"User_container__X5vad",left:"User_left__cZ35A",icon__box:"User_icon__box__pmjRB",icon:"User_icon__mKO16",profile__details:"User_profile__details__lbNc2",p:"User_p__lt1DB",span:"User_span__maLOu",right:"User_right__YnWrp"}},6794:function(e){e.exports={button:"Button_button__HxzDS"}},8357:function(e,s,a){"use strict";a.d(s,{w_:function(){return i}});var t=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=t.createContext&&t.createContext(n),l=function(){return(l=Object.assign||function(e){for(var s,a=1,t=arguments.length;a<t;a++)for(var n in s=arguments[a])Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);return e}).apply(this,arguments)},o=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>s.indexOf(t)&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)0>s.indexOf(t[n])&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function i(e){return function(s){return t.createElement(c,l({attr:l({},e.attr)},s),function e(s){return s&&s.map(function(s,a){return t.createElement(s.tag,l({key:a},s.attr),e(s.child))})}(e.child))}}function c(e){var s=function(s){var a,n=e.attr,r=e.size,i=e.title,c=o(e,["attr","size","title"]),d=r||s.size||"1em";return s.className&&(a=s.className),e.className&&(a=(a?a+" ":"")+e.className),t.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,n,c,{className:a,style:l(l({color:e.color||s.color},s.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==r?t.createElement(r.Consumer,null,function(e){return s(e)}):s(n)}}},function(e){e.O(0,[617,13,210,115,667,774,888,179],function(){return e(e.s=8948)}),_N_E=e.O()}]);