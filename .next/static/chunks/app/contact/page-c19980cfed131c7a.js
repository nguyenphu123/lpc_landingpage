(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{1776:function(e,t,n){Promise.resolve().then(n.bind(n,6806))},6806:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(145),i=n(5160),r=n(3198),c=n(7897),l=n(3235),o=n(227),u=n(7543);t.default=()=>{let e=(0,r.v9)(i.dK),{contact_form_action:t}=s.params;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{title:"DỊCH VỤ IT",meta_title:"",description:"this is meta description",image:""}),(0,a.jsx)(u.Z,{title:"en"==e.changeLanguage.value?l.PX.u:c.PX.u}),(0,a.jsx)("section",{className:"section-sm",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"mx-auto md:col-10 lg:col-6",children:(0,a.jsxs)("form",{action:t,method:"POST",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"form-label",children:["en"==e.changeLanguage.value?l.u2.u:c.u2.u," ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{id:"name",className:"form-input",placeholder:"Nguyễn Văn A",type:"text"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"mail",className:"form-label",children:["Email ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{id:"mail",className:"form-input",placeholder:"john.doe@email.com",type:"email"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"message",className:"form-label",children:["en"==e.changeLanguage.value?l.JP.u:c.JP.u," ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("textarea",{className:"form-input",placeholder:"Message goes here...",id:"message",rows:8})]}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"en"==e.changeLanguage.value?l.lW.u:c.lW.u})]})})})})})]})}},5160:function(e,t,n){"use strict";n.d(t,{D0:function(){return i},dK:function(){return r}});var a=n(64);let s=(0,a.oM)({name:"language",initialState:{value:"vn"},reducers:{changeLanguage:e=>{"vn"==e.value?e.value="en":e.value="vn"}}}),{changeLanguage:i}=s.actions,r=e=>e;t.ZP=s.reducer},9053:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(3608),i=n(1396),r=n.n(i),c=n(4033);t.default=e=>{let{className:t}=e,n=(0,c.usePathname)(),i=n.split("/").filter(e=>e),l=[{label:"Home",href:"/","aria-label":"/"===n?"page":void 0}];return i.forEach((e,t)=>{let a="/".concat(i.slice(0,t+1).join("/"));"page"!==e&&l.push({label:(0,s.OI)(e.replace(/[-_]/g," "))||"",href:a,"aria-label":n===a?"page":void 0})}),(0,a.jsx)("nav",{"aria-label":"Breadcrumb",className:t,children:(0,a.jsx)("ol",{className:"inline-flex",role:"list",children:l.map((e,t)=>{let{label:n,...s}=e;return(0,a.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[t>0&&(0,a.jsx)("span",{className:"inlin-block mr-1",children:"/"}),t!==l.length-1?(0,a.jsx)(r(),{className:"text-primary dark:text-darkmode-primary",...s,children:n}):(0,a.jsx)("span",{className:"text-light dark:text-darkmode-light",children:n})]},t)})})})}},7543:function(e,t,n){"use strict";var a=n(7437),s=n(9053),i=n(3608);t.Z=e=>{let{title:t}=e;return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"container text-center",children:(0,a.jsxs)("div",{className:"rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light",children:[(0,a.jsx)("h1",{children:(0,i.OI)(t)}),(0,a.jsx)(s.default,{className:"mt-6"})]})})})}},227:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(145),i=n(3608),r=n(4033);t.default=e=>{let{title:t,meta_title:n,image:c,description:l,canonical:o,noindex:u}=e,{meta_image:h,meta_author:x,meta_description:m}=s.metadata,{base_url:g}=s.site,p=(0,r.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,i.ab)(n||t||s.site.title)}),o&&(0,a.jsx)("link",{rel:"canonical",href:o,itemProp:"url"}),u&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,i.ab)(l||m)}),(0,a.jsx)("meta",{name:"author",content:x}),(0,a.jsx)("meta",{property:"og:title",content:(0,i.ab)(n||t||s.site.title)}),(0,a.jsx)("meta",{property:"og:description",content:(0,i.ab)(l||m)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(g,"/").concat(p.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,i.ab)(n||t||s.site.title)}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,i.ab)(l||m)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(g).concat(c||h)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(g).concat(c||h)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},3608:function(e,t,n){"use strict";n.d(t,{OI:function(){return c},ab:function(){return l},gI:function(){return r},lV:function(){return i}});var a=n(7206),s=n(8608);s.TU.use({mangle:!1,headerIds:!1});let i=e=>(0,a.o)(e),r=(e,t)=>({__html:t?s.TU.parse(e):s.TU.parseInline(e)}),c=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),l=e=>{let t=e.replace(/<\/?[^>]+(>|$)/gm,""),n=t.replace(/[\r\n]\s*[\r\n]/gm,""),a=o(n);return a},o=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},1396:function(e,t,n){e.exports=n(6685)},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"LPC","base_url":"https://nextplate.netlify.app","yb":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo.png","logo_width":"143","logo_height":"70","logo_text":"LPC"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"contact_form_action":"#","copyright":"Copyright \xa9 2023 Lien Phat Technology Corporation. All Rights Reserved."},"navigation_button":{"enable":true,"label":"Get Started","link":"https://github.com/zeon-studio/nextplate"},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Next Boilerplate"}}')},7897:function(e){"use strict";e.exports=JSON.parse('{"Lf":{"u":"T\xecm hiểu th\xeam"},"fC":{"u":"Li\xean hệ"},"pL":{"u":"Sẵn s\xe0ng, chuy\xean nghiệp v\xe0 chu đ\xe1o"},"oQ":{"u":" Ch\xfang t\xf4i cam kết mang đến những giải ph\xe1p xuất sắc v\xe0 dịch vụ tận t\xe2m cho kh\xe1ch h\xe0ng"},"O7":{"u":" C\xe1c sản phẩm của ch\xfang t\xf4i"},"b6":{"u":"C\xe1c dịch vụ v\xe0 giải ph\xe1p ch\xfang t\xf4i cung cấp"},"Pw":{"u":"Chi tiết"},"Lx":{"u":"Kh\xe1ch h\xe0ng ti\xeau biểu của Li\xean Ph\xe1t","W":"Ch\xfang t\xf4i đ\xe3 cung cấp v\xe0 triển khai th\xe0nh c\xf4ng c\xe1c g\xf3i sản phẩm dịch vụ, giải ph\xe1p v\xe0 t\xedch hợp hệ thống cho Qu\xfd kh\xe1ch h\xe0ng lớn trong nhiều lĩnh vực."},"k":{"u":"Đối t\xe1c","W":"Ch\xfang t\xf4i h\xe2n hạnh l\xe0 đối t\xe1c với những c\xf4ng ty c\xf4ng nghệ h\xe0ng đầu."},"r":{"u":"Tin tức"},"In":{"u":"Xem th\xeam"},"EI":{"u":"Xem tin"},"zn":{"u":"TƯ TƯỞNG CỐT L\xd5I"},"hW":{"u":"NHỮNG CỘT MỐC QUAN TRỌNG","W":"Li\xean Ph\xe1t đ\xe3 ho\xe0n th\xe0nh hơn 700 dự \xe1n"},"q":{"u":"Dự \xe1n"},"PX":{"u":"H\xe3y để lại chi tiết li\xean hệ"},"u2":{"u":"Họ T\xean"},"JP":{"u":"Lời nhắn"},"lW":{"u":"Gửi"},"V4":{"u":"Kh\xe1ch h\xe0ng","W":"ĐỒNG THỜI CH&Uacute;NG T&Ocirc;I TỰ H&Agrave;O L&Agrave; KH&Aacute;CH H&Agrave;NG TI&Ecirc;U BIỂU VỚI C&Aacute;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DOANH NGHIỆP TR&Ecirc;N"},"gX":{"u":"Bắt đầu ngay"},"B$":{"u":"Danh mục"},"M$":{"u":"Thẻ"},"Lw":{"u":"Chia sẻ"},"Mn":{"u":"C\xe1c b\xe0i li\xean quan"}}')},3235:function(e){"use strict";e.exports=JSON.parse('{"Lf":{"u":"Learn more"},"fC":{"u":"Contact us"},"pL":{"u":"Ready, professionel v\xe0 polite"},"oQ":{"u":" We guarantee to bring you our best services and solutions"},"O7":{"u":" Our product"},"b6":{"u":"We provive the following services and solutions"},"Pw":{"u":"detail"},"Lx":{"u":"Some of Li\xean Ph\xe1t customers","W":"Ch\xfang t\xf4i đ\xe3 cung cấp v\xe0 triển khai th\xe0nh c\xf4ng c\xe1c g\xf3i sản phẩm dịch vụ, giải ph\xe1p v\xe0 t\xedch hợp hệ thống cho Qu\xfd kh\xe1ch h\xe0ng lớn trong nhiều lĩnh vực."},"k":{"u":"Our partner","W":"We are honored to partner with leading technology companies."},"r":{"u":"News"},"In":{"u":"See more"},"EI":{"u":"View"},"zn":{"u":"OUR CORE THOUGHT"},"hW":{"u":"OUR IMPORTANT MILESTONES","W":"Li\xean Ph\xe1t has completed over 700 projects"},"q":{"u":"Projects"},"PX":{"u":"Please leave your information"},"u2":{"u":"Fullname"},"JP":{"u":"Note"},"lW":{"u":"Send"},"V4":{"u":"Customer","W":"ALWAYS PROUD TO BE A TYPICAL CUSTOMER For The Above Enterprises."},"gX":{"u":"Start now"},"B$":{"u":"Catagories"},"M$":{"u":"Tags"},"Lw":{"u":"Share"},"Mn":{"u":"Related post"}}')}},function(e){e.O(0,[478,685,141,971,596,744],function(){return e(e.s=1776)}),_N_E=e.O()}]);