(this.webpackJsonpnews1=this.webpackJsonpnews1||[]).push([[0],{28:function(e,t,n){},58:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(29),c=n.n(a),i=n(19),o=n(2),l=n(12),u=n(4),d=n(3),j=n.n(d),h=n(7),b=n(6),p=n.n(b),x=(n(58),n(0));function O(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded ",children:[Object(x.jsx)("img",{src:e.image,lazy:!0,alt:"Loading error",style:{maxHeight:150},className:"img-thumbnail"}),Object(x.jsxs)("div",{className:"news",children:[e.shortnews&&Object(x.jsx)("h6",{className:"heading ",children:e.news}),!e.shortnews&&Object(x.jsx)("h6",{className:"heading",children:e.news}),Object(x.jsx)("p",{className:"summary text-muted",children:e.shortnews}),Object(x.jsx)("a",{className:"btn btn-outline-primary",rel:"noreferrer",href:e.link,target:"_blank",children:"Source"})]})]})})}function f(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://newsapi-abipravi.herokuapp.com/news").then((function(e){return r(e.data)})).then((function(e){return console.error(e)}));case 2:console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()})),Object(x.jsxs)("div",{children:[0===n.length&&Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),n.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})}))]})}function m(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://newsapi-abipravi.herokuapp.com/tech").then((function(e){return r(e.data)})).then((function(e){return console.error(e)}));case 2:console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[1]),Object(x.jsxs)("div",{children:[0===n.length&&Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),n.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})}))]})}var g=n.p+"static/media/menu.644fa295.svg",w=n.p+"static/media/x.2f8f6a1e.svg",v=n(32);n(28);function y(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),c=Object(o.a)(a,2),i=c[0],l=c[1],u=Object(s.useState)([]),d=Object(o.a)(u,2),b=d[0],f=d[1],m=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://newsapi-abipravi.herokuapp.com/search/education zee news").then((function(e){return r(e.data)})).then((function(e){return console.error(e)}));case 2:return e.next=4,p.a.get("https://newsapi-abipravi.herokuapp.com/search/education exams").then((function(e){l(e.data)}));case 4:return e.next=6,p.a.get("https://newsapi-abipravi.herokuapp.com/search/education times of india").then((function(e){f(e.data)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){m()}),[]),Object(x.jsxs)("div",{children:[0===n.length&&Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),n.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})})),b.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})})),i.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})}))]})}function k(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://newsapi-abipravi.herokuapp.com/sports").then((function(e){return r(e.data)})).then((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[1]),Object(x.jsxs)("div",{children:[0===n.length&&Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),n.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})}))]})}function S(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://newsapi-abipravi.herokuapp.com/sports/latest").then((function(e){return r(e.data)})).then((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[1]),Object(x.jsxs)("div",{children:[0===n.length&&Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),n.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})}))]})}function N(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://newsapi-abipravi.herokuapp.com/business").then((function(e){return r(e.data)})).then((function(e){return console.error(e)}));case 2:console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[1]),Object(x.jsxs)("div",{children:[0===n.length&&Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),n.map((function(e){return Object(x.jsx)(O,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})}))]})}var C=n(30),L=n.n(C),E=n(31),F=n(34);function I(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),c=Object(o.a)(a,2),i=c[0],l=c[1],u=Object(s.useState)(""),d=Object(o.a)(u,2),b=d[0],O=d[1],f=Object(s.useState)(""),m=Object(o.a)(f,2),g=m[0],w=m[1],v=Object(s.useState)(!1),y=Object(o.a)(v,2),k=y[0],S=y[1],N=function(){var e=Object(h.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={subject:n,message:i,name:b,gmailid:g},S(!0),e.next=5,F.a.send("service_d77dv6o","template_42dykej",s,"user_xP3wFo8GpIigDLn6mfB95").then((function(e){S(!1),alert("Feedback Sent")}),(function(e){alert("error sending feedback")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.profileObj.name);case 2:return e.next=4,w(t.profileObj.email);case 4:return S(!0),n={email:t.profileObj.email,name:t.profileObj.name,password:t.profileObj.googleId,avatar:t.profileObj.imageUrl},e.next=8,p.a.post("https://newsapi-abipravi.herokuapp.com/auth",n).then((function(e){S(!1),alert("Sucessfully logged in as: ".concat(t.profileObj.name))}),(function(e){S(!1),alert("err",e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(E.GoogleLogin,{clientId:"692593559541-2rgin6kcfke1et55od12epm3tth3dp7a.apps.googleusercontent.com",onSuccess:C,onFailure:C}),!1===k?Object(x.jsxs)("div",{style:{margin:10,display:"flex",flexDirection:"column",height:"60vh",width:"50%",justifyContent:"space-between"},children:[Object(x.jsx)("input",{type:"text",value:b,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Name",onChange:function(e){O(e.target.value)}}),Object(x.jsx)("input",{type:"email",onChange:function(e){w(e.target.value)},value:g,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Email Address"}),Object(x.jsx)("input",{type:"text",value:n,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Subject",onChange:function(e){r(e.target.value)}}),Object(x.jsx)("textarea",{value:i,onChange:function(e){return l(e.target.value)},className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Message","aria-label":"With textarea"}),Object(x.jsx)("div",{style:{margin:10},children:Object(x.jsx)("button",{onClick:N,class:"btn btn-outline-primary",children:"Send FeedBack Mail"})})]}):Object(x.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"},children:Object(x.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(x.jsx)("span",{class:"visually-hidden",children:"Loading..."})})})]})}function _(){var e=r.a.useState(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],a=r.a.useState(window.location.pathname),c=Object(o.a)(a,2),d=c[0],j=c[1];function h(){s(!n)}var b=Object(v.useSwipeable)({onSwipedRight:function(){return s(!n)},onSwipedLeft:function(){return s(!n)}});return r.a.useEffect((function(){!function(){var e=window.location.pathname;j("/sports"===e?"/sports/latest":"")}()}),[window.location.pathname]),Object(x.jsxs)(l.a,{children:[Object(x.jsx)(L.a,{pageId:"105673224167318",appId:"402215664792382"}),Object(x.jsx)("div",{style:{overflow:"hidden",height:"100vh"},children:Object(x.jsxs)("div",Object(i.a)(Object(i.a)({},b),{},{className:"App",style:{display:"flex",height:"100vh"},children:[Object(x.jsxs)("div",{onClick:h,className:!0===n?"open":"closed",children:[!1===n?Object(x.jsx)("img",{src:g,onClick:h,alt:"menu icon",style:{width:"70%"}}):Object(x.jsx)("div",{}),!0===n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{src:w,onClick:h,alt:"close menu icon",style:{width:"auto",height:"5%"}}),Object(x.jsx)("div",{className:"container_sidebar ",children:Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{class:"btn btn-primary",to:"/home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{class:"btn btn-primary",to:"/tech",children:"Tech News"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{class:"btn btn-primary",to:"/sports",children:"Sports News"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{class:"btn btn-primary",to:"/education",children:"Educational News"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{class:"btn btn-primary",to:"/business",children:"Business News"})})]})})})]})]}),Object(x.jsxs)("div",{class:"main",children:[d&&Object(x.jsx)("div",{class:"url",children:Object(x.jsxs)("p",{children:["Go to",Object(x.jsx)(l.b,{to:d,className:"link1",children:d})]})}),Object(x.jsx)("div",{class:"news-container",children:Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{exact:!0,path:"/home",children:Object(x.jsx)(f,{})}),Object(x.jsx)(u.a,{path:"/tech",children:Object(x.jsx)(m,{})}),Object(x.jsx)(u.a,{path:"/education",children:Object(x.jsx)(y,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/sports",children:Object(x.jsx)(k,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/sports/latest",children:Object(x.jsx)(S,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/business",children:Object(x.jsx)(N,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/gauth",children:Object(x.jsx)(I,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(f,{})})]})})]})]}))})]})}c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[69,1,2]]]);