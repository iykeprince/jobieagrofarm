(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{8437:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/checkouts",function(){return n(9769)}])},143:function(e,t,n){"use strict";var a=n(5893),l=n(1664),s=n.n(l),r=n(6794),o=n.n(r);let c=e=>{let{disabled:t,link:n,to:l,className:r,onClick:c,children:i}=e;return n?(0,a.jsx)(s(),{href:l,className:" ".concat(r," "),children:(0,a.jsx)("span",{children:i})}):(0,a.jsx)("button",{disabled:t,onClick:c,className:" ".concat(r," ").concat(o().button),children:i})};t.Z=c},6267:function(e,t,n){"use strict";var a=n(5893),l=n(7294),s=n(3935),r=n(8193),o=n(5349),c=n.n(o);let i=e=>(0,a.jsx)("div",{onClick:e.onClick,className:c().backdrop}),d=e=>{let{children:t,onClick:n}=e;return(0,a.jsxs)("div",{className:c().overlay,children:[(0,a.jsx)(r.SV5,{className:c().close__icon,onClick:n}),(0,a.jsx)("div",{children:t})]})},u=e=>(0,a.jsxs)(l.Fragment,{children:[s.createPortal((0,a.jsx)(i,{onClick:e.onClick}),document.getElementById("modal-root")),s.createPortal((0,a.jsx)(d,{onClick:e.onClick,children:e.children}),document.getElementById("modal-root"))]});t.Z=u},9720:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(5893),l=n(9473),s=n(5675),r=n.n(s),o=n(4438),c=n(839),i=n.n(c);let d=e=>{let{title:t,price:n,totalPrice:s,id:c,image:d,quantity:u}=e,m=(0,l.I0)(),_=()=>{m(o.a.deleteCartItem({id:c}))},h=()=>{m(o.a.removeCartItem({id:c}))},p=()=>{m(o.a.addCartItem({id:c,title:t,image:d,price:n,amount:1,totalPrice:s,quantity:u}))};return(0,a.jsxs)("li",{className:"".concat(i().li),children:[(0,a.jsxs)("div",{className:i().box__1,children:[(0,a.jsx)(r(),{src:d,width:80,height:20,alt:t}),(0,a.jsxs)("div",{className:i().title__box,children:[(0,a.jsx)("p",{className:i().title,children:t}),(0,a.jsxs)("p",{className:i().price__box,children:[(0,a.jsx)("p",{children:n}),(0,a.jsxs)("p",{className:i().actions,children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{className:"icofont-ui-delete ".concat(i().delete),onClick:_})}),(0,a.jsxs)("p",{className:i().quantity,children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{className:"icofont-minus ".concat(i().add),onClick:h})}),u,(0,a.jsx)("span",{children:(0,a.jsx)("i",{className:"icofont-plus ".concat(i().add),onClick:p})})]})]})]})]})]}),(0,a.jsxs)("p",{className:i().total__price,children:["Total price: ",(0,a.jsxs)("span",{children:["₦",s]})]})]})},u=e=>{let{title:t,price:n,totalPrice:s,id:c,image:d,quantity:u}=e,m=(0,l.I0)(),_=()=>{m(o.a.deleteCartItem({id:c}))},h=()=>{m(o.a.removeCartItem({id:c}))},p=()=>{m(o.a.addCartItem({id:c,title:t,image:d,price:n,amount:1,totalPrice:s,quantity:u}))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("tr",{className:i().tr,children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{className:"icofont-ui-delete ".concat(i().delete),onClick:_})}),(0,a.jsx)("td",{className:i().image,children:(0,a.jsx)(r(),{src:d,width:120,height:20,alt:t})}),(0,a.jsx)("td",{children:t}),(0,a.jsxs)("td",{children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{className:"icofont-minus ".concat(i().add),onClick:h})}),u," ",(0,a.jsx)("span",{children:(0,a.jsx)("i",{className:"icofont-plus ".concat(i().add),onClick:p})})]}),(0,a.jsxs)("td",{children:["₦",n]}),(0,a.jsxs)("td",{children:["₦",s]})]})})},m=()=>{let{carts:e}=(0,l.v9)(e=>e.products);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"".concat(i().desktop),children:(0,a.jsxs)("table",{className:"".concat(i().table),children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:i().tr,children:[(0,a.jsx)("th",{children:"Remove"}),(0,a.jsx)("th",{children:"Image"}),(0,a.jsx)("th",{children:"Product Name"}),(0,a.jsx)("th",{children:"Quantity"}),(0,a.jsx)("th",{children:"Unit Price"}),(0,a.jsx)("th",{children:"Total Price"})]})}),(0,a.jsx)("tbody",{children:null==e?void 0:e.map(e=>(0,a.jsx)(u,{id:e.id,title:e.title,totalPrice:e.totalPrice,price:e.price,image:e.image,quantity:e.quantity},e.id))})]})}),(0,a.jsx)("ul",{className:"".concat(i().mobile," ").concat(i().ul),children:null==e?void 0:e.map(e=>(0,a.jsx)(d,{id:e.id,title:e.title,totalPrice:e.totalPrice,price:e.price,image:e.image,quantity:e.quantity},e.id))})]})};var _=m},9769:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var a=n(5893),l=n(7823),s=n(4260),r=n(7294),o=[],c=function(e){var t=window.PaystackPop&&window.PaystackPop.setup(e);t&&t.openIframe()};function i(e){var t,n,a,l,s=(t="https://js.paystack.co/v1/inline.js",a=(n=(0,r.useState)({loaded:!1,error:!1}))[0],l=n[1],(0,r.useEffect)(function(){if(o.includes(t))l({loaded:!0,error:!1});else{o.push(t);var e=document.createElement("script");e.src=t,e.async=!0;var n=function(){l({loaded:!0,error:!1})},a=function(){var n=o.indexOf(t);n>=0&&o.splice(n,1),e.remove(),l({loaded:!0,error:!0})};return e.addEventListener("load",n),e.addEventListener("complete",n),e.addEventListener("error",a),document.body.appendChild(e),function(){e.removeEventListener("load",n),e.removeEventListener("error",a)}}},[t]),[a.loaded,a.error]),i=s[0],d=s[1],u=e.publicKey,m=e.firstname,_=e.lastname,h=e.phone,p=e.email,x=e.amount,v=e.reference,f=e.metadata,b=void 0===f?{}:f,j=e.currency,y=void 0===j?"NGN":j,N=e.channels,g=e.label,k=void 0===g?"":g,C=e.plan,w=void 0===C?"":C,P=e.quantity,S=void 0===P?"":P,E=e.subaccount,O=void 0===E?"":E,I=e.transaction_charge,B=void 0===I?0:I,F=e.bearer,T=void 0===F?"account":F,z=e.split,Z=e.split_code;return(0,r.useEffect)(function(){if(d)throw Error("Unable to load paystack inline script")},[d]),function(t,n){if(d)throw Error("Unable to load paystack inline script");i&&c({callback:t||function(){return null},onClose:n||function(){return null},key:u,ref:v,email:p,firstname:m,lastname:_,phone:h,amount:x,currency:y,plan:w,quantity:S,"data-custom-button":e["data-custom-button"]||"",channels:N,subaccount:O,transaction_charge:B,bearer:T,label:k,metadata:b,split:z,split_code:Z})}}var d=function(){return(d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n}var m=(0,r.createContext)({initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),_=function(e){var t=e.children,n=e.onSuccess,a=e.onClose,l=i(u(e,["children","onSuccess","onClose"]));return r.createElement(m.Provider,{value:{initializePayment:l,onSuccess:n,onClose:a}},t)},h=function(e){var t=e.children,n=e.ref,a=(0,r.useContext)(m),l=a.initializePayment,s=a.onSuccess,o=a.onClose;return t({initializePayment:function(){return l(s,o)},ref:n})};(0,r.forwardRef)(function(e,t){var n=e.children,a=e.onSuccess,l=e.onClose,s=u(e,["children","onSuccess","onClose"]);return r.createElement(_,d({},s,{onSuccess:a||function(){return null},onClose:l||function(){return null}}),r.createElement(h,{ref:t},n))});var p=n(5096),x=n(1163),v=n(143),f=n(5697),b=n.n(f),j=n(8193),y=n(4725),N=n.n(y);let g=e=>{let{passwordIcon:t,showPassword:n,setShowPassword:l,placeholder:s,...r}=e;return(0,a.jsxs)("div",{className:"form-group text-left",children:[(0,a.jsx)("label",{className:"",children:e.label}),(0,a.jsx)("input",{...r,className:"form-control",required:!0}),t?(0,a.jsx)("div",{className:N().eye,onClick:()=>l(!n),children:n?(0,a.jsx)("span",{className:N().eyeSvg,children:(0,a.jsx)(j.p3W,{})}):(0,a.jsx)("span",{className:N().eyeSvg,children:(0,a.jsx)(j.w8I,{})})}):null,(0,a.jsx)("small",{children:s})]})};g.propTypes={id:null===b()||void 0===b()?void 0:b().string,label:null===b()||void 0===b()?void 0:b().string,type:null===b()||void 0===b()?void 0:b().string,placeholder:b().string,value:b().string,onChange:b().func};var k=n(7957),C=n.n(k);let w=e=>{let{onBank:t,onFlutter:n,onPaystack:l}=e,[s,o]=(0,r.useState)({email:"",firstName:"",lastName:"",address:"",phone:"",state:"",zip:"",country:""}),c=e=>{o(t=>({...t,firstName:e.target.value}))},i=e=>{o(t=>({...t,lastName:e.target.value}))},d=e=>{o(t=>({...t,address:e.target.value}))},u=e=>{o(t=>({...t,email:e.target.value}))},m=e=>{o(t=>({...t,country:e.target.value}))},_=e=>{o(t=>({...t,zip:e.target.value}))},h=e=>{o(t=>({...t,phone:e.target.value}))},p=e=>{o(t=>({...t,state:e.target.value}))},x=e=>{e.preventDefault(),l({email:s.email,firstname:s.firstName,lastname:s.lastName,address:s.address,zip:s.zip,country:s.country,state:s.state,phone:s.phone})},f=e=>{e.preventDefault(),t()},b=e=>{e.preventDefault(),console.log("flutter"),n()};return(0,a.jsxs)("form",{oValidate:!0,children:[(0,a.jsx)("h3",{className:"display-6 text-left",children:"Delivery Details"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:C().row,children:[(0,a.jsx)("div",{className:C().row__left,children:(0,a.jsx)(g,{id:"firstName",label:"First Name",type:"text",placeholder:"What's your first name?",value:s.firstName,onChange:c})}),(0,a.jsx)("div",{className:C().row__right,children:(0,a.jsx)(g,{id:"lastName",label:"Last Name",type:"text",placeholder:"What's your last name?",value:s.lastName,onChange:i})})]}),(0,a.jsxs)("div",{className:C().row,children:[(0,a.jsx)("div",{className:C().row__left,children:(0,a.jsx)(g,{id:"phone",label:"Phone Number",type:"nomber",placeholder:"Enter your phone number",value:s.phone,onChange:h})}),(0,a.jsx)("div",{className:C().row__right,children:(0,a.jsx)(g,{id:"zip",label:"Zip Code",type:"nomber",placeholder:"Enter your zip code",value:s.zip,onChange:_})})]}),(0,a.jsxs)("div",{className:C().row,children:[(0,a.jsx)("div",{className:C().row__left,children:(0,a.jsx)(g,{id:"state",label:"State",type:"text",placeholder:"Enter your State",value:s.state,onChange:p})}),(0,a.jsx)("div",{className:C().row__right,children:(0,a.jsx)(g,{id:"country",label:"Country",type:"text",placeholder:"Where are you from",value:s.country,onChange:m})})]}),(0,a.jsx)(g,{id:"email",label:"Email Address",type:"email",placeholder:"What's your email address?",value:s.email,onChange:u}),(0,a.jsx)(g,{id:"address",label:"House Address",type:"text",placeholder:"Enter your address",value:s.address,onChange:d}),(0,a.jsxs)("div",{className:"flex flex-column flex-md-row justify-content-between ",children:[(0,a.jsx)(v.Z,{id:"btn__submit",type:"button",className:"btn btn-dark mb-2 mb-md-0",onClick:f,children:"Pay with Bank"}),(0,a.jsx)(v.Z,{id:"btn__submit",type:"button",className:"btn btn-dark mb-2 mb-md-0",onClick:x,children:"Pay with PayStack"}),(0,a.jsx)(v.Z,{id:"btn__submit",type:"button",className:"btn btn-dark mb-2 mb-md-0",onClick:b,children:"Pay with Flutterwave"})]})]})};var P=n(6267),S=n(5434),E=n(6037),O=n.n(E),I=n(3247),B=n(2583);let F=e=>{let{onClose:t,totalAmount:n,checkoutFormData:l}=e,s=()=>{t()},r=async()=>{let e=(0,I.hJ)(B.db,"transactions");await (0,I.ET)(e,{email:null==l?void 0:l.email,firstname:null==l?void 0:l.firstname,lastname:null==l?void 0:l.lastname,address:null==l?void 0:l.address,zip:null==l?void 0:l.zip,country:null==l?void 0:l.country,state:null==l?void 0:l.state,phone:null==l?void 0:l.phone,status:"Success",date:new Date().toLocaleDateString(),amount:100*parseInt(n),paymentType:"Bank Transfer"}),t()};return(0,a.jsxs)(P.Z,{onClick:s,children:[(0,a.jsxs)("div",{className:O().bank,children:[(0,a.jsx)("h3",{className:O().h3,children:"PAYMENT DETAILS FOR BANK TRANSFERS"}),(0,a.jsx)("div",{className:O().div,children:"Bank Name: Access Bank"}),(0,a.jsxs)("div",{className:O().div,children:[" ","Account Name: Jobie Agro Farm limited"]}),(0,a.jsx)("div",{className:O().div,children:"Account No: 0088833445"}),(0,a.jsx)("div",{className:O().btn__box,children:(0,a.jsx)(v.Z,{onClick:r,className:O().button,children:"I have Paid"})})]}),(0,a.jsx)(S.B4e,{className:O().cancel,onClick:s})]})};var T=n(6696),z=n.n(T);let Z=e=>{let{onClose:t}=e,n=()=>{t()};return(0,a.jsxs)(P.Z,{onClick:n,children:[(0,a.jsx)("div",{className:z().flutter,children:"Coming soon...."}),(0,a.jsx)(S.B4e,{className:z().cancel,onClick:n})]})};var A=n(5973),D=n.n(A),L=n(9473),q=n(9720);let W=()=>{var e,t,n;let[l,s]=(0,r.useState)(!1),[o,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(null),[m,_]=(0,r.useState)(!1),{users:h,carts:v,totalAmount:f}=(0,L.v9)(e=>e.products),{authUser:b}=(0,p.a)(),j=i((t=null!==(e=null==d?void 0:d.email)&&void 0!==e?e:"",n=100*parseInt(f),{reference:new Date().getTime().toString(),email:t,amount:n,publicKey:"pk_test_3c05acae869f6af01fef3db9bfb2f074b69fea39"})),y=(0,x.useRouter)();(0,r.useEffect)(()=>{let e=async()=>{let e=(0,I.hJ)(B.db,"transactions");console.log(e),await (0,I.ET)(e,{email:null==d?void 0:d.email,firstname:null==d?void 0:d.firstname,lastname:null==d?void 0:d.lastname,address:null==d?void 0:d.address,zip:null==d?void 0:d.zip,country:null==d?void 0:d.country,state:null==d?void 0:d.state,phone:null==d?void 0:d.phone,status:"Success",date:new Date().toLocaleDateString(),amount:100*parseInt(f),paymentType:"Paystack"})},t=async()=>{let e=null==b?void 0:b.email,t=h.find(t=>t.email===e),n=(0,I.hJ)(B.db,"orders");await (0,I.ET)(n,{totalQuantity:v.length,carts:v,grandTotal:f,paymentStatus:"Pending",orderStatus:"Pending",customerName:t.lastName?"".concat(t.lastName," ").concat(t.firstName):"",customerEmail:t.email||"",customerPhone:t.phone||""})};m&&(e(),t())},[m,d,f,v,h,b]);let N=e=>{_(!0),setTimeout(()=>{_(!1)},2e3),y.push("/shop/ps-checkout-success")},k=()=>{},C=e=>{u(e),setTimeout(()=>{j(N,k)},500)},P=()=>{s(!1)},S=()=>{c(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:D().payment__form,children:[l&&(0,a.jsx)(F,{onClose:P,totalAmount:f,checkoutFormData:d}),o&&(0,a.jsx)(Z,{onClose:S})]}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row mb-8",children:[(0,a.jsxs)("div",{className:"col-sm-12 col-md-4",children:[(0,a.jsxs)("button",{className:"btn btn-dark ",onClick:()=>y.back(),children:[(0,a.jsx)("i",{className:"fa fa-arrow-left",style:{color:"white"}})," Back"]}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(q.Z,{})}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"border p-2",children:[(0,a.jsx)("h3",{}),(0,a.jsx)(g,{label:"Apply your coupon to get discount",placeholder:"Enter coupon code"}),(0,a.jsxs)("div",{className:"flex justify-content-between align-baseline",children:[(0,a.jsxs)("p",{children:["How do i get a coupon?",(0,a.jsxs)("a",{href:"#",className:"underline ml-1",children:[" ","Click here"]})]}),(0,a.jsx)("button",{className:"btn btn-dark",children:"Apply Coupon"})]})]})]}),(0,a.jsx)("div",{className:"col-1 d-sm-none d-md-block"}),(0,a.jsx)("div",{className:"col-sm-12 col-md-6 mt-8 border",children:(0,a.jsx)(w,{onPaystack:C,onBank:()=>s(!0),onFlutter:()=>c(!0)})})]})})]})},R=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)("section",{style:{marginTop:"130px"}}),(0,a.jsx)(W,{}),(0,a.jsx)(s.Z,{})]});var V=R},6037:function(e){e.exports={bank:"Bank_bank__eZgGH",h3:"Bank_h3__aPw2D",div:"Bank_div__Pey6P",cancel:"Bank_cancel__OZPkc",btn__box:"Bank_btn__box__ZNq9e",button:"Bank_button__BCFI5"}},7957:function(e){e.exports={contact__form:"CheckoutForm_contact__form__z85vv",h1:"CheckoutForm_h1__BEr49",row:"CheckoutForm_row__cSWw2",row__left:"CheckoutForm_row__left__vOCbo",row__right:"CheckoutForm_row__right__BW80b",btn__box:"CheckoutForm_btn__box__TxtvM",button:"CheckoutForm_button__plgIA"}},5973:function(e){e.exports={payment__form:"Checkouts_payment__form__VVfiS",contact__form:"Checkouts_contact__form__ZlT0O",success:"Checkouts_success__SaBLh",btn__box:"Checkouts_btn__box__otfuP",button:"Checkouts_button__n5JBB"}},6696:function(e){e.exports={flutter:"Flutter_flutter__4fe1s",cancel:"Flutter_cancel__Od8w1"}},4725:function(e){e.exports={input__group:"Input_input__group__6E2BC",label:"Input_label__AAbsp",input:"Input_input__5dUG_",eye:"Input_eye__sNMSq",eyeSvg:"Input_eyeSvg__AOVxg"}},5349:function(e){e.exports={backdrop:"Modal_backdrop__xsPw5",overlay:"Modal_overlay__o4XKP",close__icon:"Modal_close__icon__lbS3K"}},839:function(e){e.exports={desktop:"SelectedProducts_desktop__4C0Vg",mobile:"SelectedProducts_mobile__ZQRZe",table:"SelectedProducts_table__iQyeL",tr:"SelectedProducts_tr__6ZALM",delete:"SelectedProducts_delete__diVQJ",add:"SelectedProducts_add__Keios",image:"SelectedProducts_image__pu2m8",ul:"SelectedProducts_ul__k4TVj",li:"SelectedProducts_li__ElvSg",box__1:"SelectedProducts_box__1__x2jKz",title__box:"SelectedProducts_title__box__B7Nnv",title:"SelectedProducts_title__lNfnl",price__box:"SelectedProducts_price__box__TiGug",actions:"SelectedProducts_actions__nR3rO",total__price:"SelectedProducts_total__price__RuvWW"}},6794:function(e){e.exports={button:"Button_button__HxzDS"}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var a=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(l),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n};function c(e){return function(t){return a.createElement(i,r({attr:r({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return a.createElement(t.tag,r({key:n},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var n,l=e.attr,s=e.size,c=e.title,i=o(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:n,style:r(r({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==s?a.createElement(s.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[617,228,210,115,667,774,888,179],function(){return e(e.s=8437)}),_N_E=e.O()}]);