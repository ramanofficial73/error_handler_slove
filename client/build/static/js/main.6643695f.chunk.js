(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{167:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},422:function(e,t,c){},447:function(e,t){},462:function(e,t,c){},463:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(42),r=c.n(s),o=c(7),i=c(24),l=c(4),j=(c(167),c(21)),d=c(3),u=c(11),b=c(10),p=c(0);function O(){return Object(p.jsx)("div",{className:"bgimg"})}var m=c(5),h=c.n(m),x=c(12),v=c(13),g=c.n(v),f="SET_LODER",N="CLOSE_LODER",y="SET_TOKEN",E="REGISTER_ERROR",_="LOGOUT",w="LOGIN_ERROR",R=function(e){return function(){var t=Object(x.a)(h.a.mark((function t(c){var a,n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c({type:f}),t.prev=2,t.next=5,g.a.post("/register",e,a);case 5:n=t.sent,s=n.data,c({type:N}),console.log(s),localStorage.setItem("myToken",s.token),c({type:y,payload:s.token}),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),c({type:"CLOSE_LODER"}),c({type:E,payload:t.t0.response.data.errors}),console.log(t.t0.response);case 18:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()},S=c(9);function P(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.AuthReducer})),c=t.loading,n=t.loginError,s=t.user,r=Object(a.useState)({email:"",password:""}),o=Object(u.a)(r,2),i=o[0],m=o[1],v=function(e){m(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){n.length>0&&n.map((function(e){return S.b.error(e.msg)}))}),[n,s]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"User Login"}),Object(p.jsx)("meta",{name:"description",content:"User Login form"})]}),Object(p.jsxs)("div",{className:"row mt-80",children:[Object(p.jsxs)("div",{className:"col-8",children:[Object(p.jsx)(O,{}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}})]}),Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("div",{className:"account",children:Object(p.jsx)("div",{className:"account_section",children:Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(x.a)(h.a.mark((function t(c){var a,n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={Headers:{"Content-Type":"application/json"}},t.prev=1,c({type:f}),t.next=5,g.a.post("/login",e,a);case 5:n=t.sent,s=n.data,c({type:N}),localStorage.setItem("myToken",s.token),c({type:y,payload:s.token}),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(1),c({type:N}),c({type:w,payload:t.t0.response.data.errors}),console.log(t.t0.response);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()}(i))},children:[Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("h2",{className:"form-heading",children:"Login"})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"email",name:"email",value:i.email,onChange:v,className:"group_control",placeholder:"Enter your Email"})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"password",name:"password",value:i.password,onChange:v,className:"group_control",placeholder:"Create yout Paste"})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-default btn-block",value:c?" ...":"Login"})})]})})})})]})]})}function k(e){var t=Object(a.useState)({name:"",email:"",password:""}),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(l.c)((function(e){return e.AuthReducer})),o=r.loading,i=r.registerError,m=r.user,v=Object(l.b)(),g=function(e){s(Object(d.a)(Object(d.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v(R(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i.length>0&&i.map((function(e){return S.b.error(e.msg)}))}),[i,m]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"User Register"}),Object(p.jsx)("meta",{name:"description",content:"User Register form"})]}),Object(p.jsxs)("div",{className:"row mt-80",children:[Object(p.jsxs)("div",{className:"col-8",children:[Object(p.jsx)(O,{}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}})]}),Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("div",{className:"account",children:Object(p.jsx)("div",{className:"account_section",children:Object(p.jsxs)("form",{action:"",onSubmit:f,children:[Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("h2",{className:"form-heading",children:"You have a Create Account"})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"text",name:"name",className:"group_control",placeholder:"Enter Your Name",value:n.name,onChange:g})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"email",name:"email",className:"group_control",placeholder:"Enter your Email",value:n.email,onChange:g})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"password",name:"password",className:"group_control",placeholder:"Create yout Password",value:n.password,onChange:g})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-default btn-block",value:o?"...":"Register"})})]})})})})]})]})}c(88);var A=c(27),C=c.n(A),T=c(153),D="CREATE_ERRORS",F="REMOVE_ERRORS",I="SET_LOADER",U="CLOSE_LOADER",L="REDIRECT_TRUE",M="REDIRECT_FALSE",z="SET_MESSAGE",B="REMOVE_MESSAGE",Y="SET_POSTS",G="SET_POST",V="POST_REQUEST",J="POST_RESET",H="SET_UPDATE_ERRORS",K="RESET_UPDATE_ERRORS",W="UPDATE_IMAGE_ERROR",Q="RESET_UPDATE_IMAGE_ERRORS",q="SET_DETAILS",X="COMMENTS";var Z=function(e,t){return function(){var c=Object(x.a)(h.a.mark((function c(a,n){var s,r,o,i,l,j,d,u;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s=n(),r=s.AuthReducer.token,a({type:I}),c.prev=2,o={headers:{Authorization:"Bearer ".concat(r)}},c.next=6,g.a.get("/posts/".concat(e,"/").concat(t),o);case 6:i=c.sent,l=i.data,j=l.response,d=l.count,u=l.perPage,a({type:U}),a({type:Y,payload:{response:j,count:d,perPage:u}}),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(2),a({type:U});case 18:case"end":return c.stop()}}),c,null,[[2,15]])})));return function(e,t){return c.apply(this,arguments)}}()},$=function(e){return function(){var t=Object(x.a)(h.a.mark((function t(c){var a,n,s,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:I}),t.prev=1,t.next=4,g.a.get("/explore/".concat(e));case 4:a=t.sent,n=a.data,s=n.post,r=n.comments,c({type:U}),c({type:q,payload:s}),c({type:X,payload:r}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),c({type:U}),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()};c(199);function ee(){return Object(p.jsx)("div",{className:"loader_container",children:Object(p.jsx)("div",{className:"item"})})}var te=c(29),ce=(c(200),function(e){var t=e.path,c=e.count,a=e.page,n=e.perPage,s=Math.ceil(c/n),r=a;s-a<=3&&(r=s-3);var i=r+3;r<=0&&(r=1);return s&&c>3?Object(p.jsxs)("div",{className:"pagination",children:[function(){if(a>1)return Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/".concat(t,"/").concat(parseInt(a-1)),children:Object(p.jsx)(te.b,{})})})}(),function(){for(var e=[],c=r;c<=i;c++)e.push(Object(p.jsx)("li",{className:c==a?"active":"",children:Object(p.jsx)(o.b,{to:"/".concat(t,"/").concat(c),children:c})},c));return e}(),function(){if(a<s)return Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/".concat(t,"/").concat(parseInt(a)+1),children:Object(p.jsx)(te.c,{})})})}()]}):""}),ae=function(){var e=Object(i.h)().page;void 0===e&&(e=1);var t=Object(l.c)((function(e){return e.PostReducer})).loading,c=Object(l.c)((function(e){return e.FetchPosts})),n=c.posts,s=c.count,r=c.perPage,j=Object(l.b)();return Object(a.useEffect)((function(){j(function(e){return function(){var t=Object(x.a)(h.a.mark((function t(c){var a,n,s,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:I}),t.prev=1,t.next=4,g.a.get("/home/".concat(e));case 4:a=t.sent,n=a.data,s=n.response,r=n.count,o=n.perPage,c({type:U}),c({type:Y,payload:{response:s,count:r,perPage:o}}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),c({type:U}),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Web articles"}),Object(p.jsx)("meta",{name:"description",content:"Learn HTML, CSS, JavaScript, React, Vue, Flutter etc"})]}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row mt-100",style:{marginBottom:"30px"},children:Object(p.jsx)("div",{className:"col-9 home",children:t?Object(p.jsx)(ee,{}):n.length>0?n.map((function(e){return Object(p.jsxs)("div",{className:"row post_style",children:[Object(p.jsx)("div",{className:"col-8",children:Object(p.jsxs)("div",{className:"post",children:[Object(p.jsxs)("div",{className:"post_header",children:[Object(p.jsx)("div",{className:"post_avatar",children:e.userName[0]}),Object(p.jsxs)("div",{className:"post_user",children:[Object(p.jsx)("span",{children:e.userName}),Object(p.jsx)("span",{children:C()(e.updatedAt).format("MMM Do YY")})]})]}),Object(p.jsxs)("div",{className:"post_body",children:[Object(p.jsx)("h1",{className:"post_title",children:Object(p.jsx)(o.b,{to:"/details/".concat(e.slug),children:e.title})}),Object(p.jsx)("div",{className:"post_details",children:Object(T.a)(e.body.slice(0,300))})]})]})}),Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("div",{className:"post_img",children:Object(p.jsx)("img",{src:"/imges/".concat(e.img),alt:e.img})})})]},e._id)})):"No posts"})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-9",children:Object(p.jsx)(ce,{path:"home",page:e,perPage:r,count:s})})})]})]})};function ne(){var e=Object(l.c)((function(e){return e.AuthReducer})).user,t=Object(l.b)(),c=e?Object(p.jsxs)("div",{className:"navbar_right",children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/create",children:"Create Post"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"dashboard/1",children:e.name})}),Object(p.jsx)("li",{children:Object(p.jsx)("span",{onClick:function(){localStorage.removeItem("myToken"),t({type:_})},children:"LogOut"})})]}):Object(p.jsxs)("div",{className:"navbar_right",children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/login",children:"Login"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/register",children:"SignUp"})})]});return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("nav",{className:"navbar",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"navbar_row",children:[Object(p.jsx)("div",{className:"navbar_left",children:Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)("img",{src:"/imges/logo.png",alt:""})})}),c]})})})})}var se=c(44),re=c(155),oe={loading:!1,registerError:[],loginError:[],token:"",user:""},ie=function(e){if(e){var t=Object(re.a)(e),c=new Date(1e3*t.exp);return new Date>c?(localStorage.removeItem("myToken"),null):t}},le=localStorage.getItem("myToken");if(le){var je=ie(le);if(je){oe.token=le;var de=je.user;oe.user=de}}var ue=c(157),be=c(156),pe={loading:!1,createErrors:[],redirect:!1,message:"",posts:[],perPage:0,count:0,post:{},postStatus:!1,editErrors:[],updateImageErrors:[],details:{},comments:[]},Oe="SET_PROFILE_ERROR",me="PROFILE_RESET_ERRORS",he={updateErrors:[]},xe=Object(se.combineReducers)({AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;if(t.type===f)return Object(d.a)(Object(d.a)({},e),{},{loading:!0});if(t.type===N)return Object(d.a)(Object(d.a)({},e),{},{loading:!1});if(t.type===E)return Object(d.a)(Object(d.a)({},e),{},{registerError:t.payload});if(t.type===y){var c=ie(t.payload),a=c.user;return Object(d.a)(Object(d.a)({},e),{},{token:t.payload,user:a,loginError:[],registerError:[]})}return t.type===_?Object(d.a)(Object(d.a)({},e),{},{token:"",user:""}):t.type===w?Object(d.a)(Object(d.a)({},e),{},{loginError:t.payload}):e},PostReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;return c===I?Object(d.a)(Object(d.a)({},e),{},{loading:!0}):c===U?Object(d.a)(Object(d.a)({},e),{},{loading:!1}):c===D?Object(d.a)(Object(d.a)({},e),{},{createErrors:a}):c===L?Object(d.a)(Object(d.a)({},e),{},{redirect:!0}):c===M?Object(d.a)(Object(d.a)({},e),{},{redirect:!1}):c===z?Object(d.a)(Object(d.a)({},e),{},{message:t.payload}):c===B?Object(d.a)(Object(d.a)({},e),{},{message:""}):c===F?Object(d.a)(Object(d.a)({},e),{},{createErrors:[]}):c===q?Object(d.a)(Object(d.a)({},e),{},{details:a}):c===X?Object(d.a)(Object(d.a)({},e),{},{comments:a}):e},FetchPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;return c===Y?Object(d.a)(Object(d.a)({},e),{},{posts:a.response,count:a.count,perPage:a.perPage}):e},FetchPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;return c===G?Object(d.a)(Object(d.a)({},e),{},{post:a}):c===V?Object(d.a)(Object(d.a)({},e),{},{postStatus:!0}):c===J?Object(d.a)(Object(d.a)({},e),{},{postStatus:!1}):e},UpdatePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;return c===H?Object(d.a)(Object(d.a)({},e),{},{editErrors:a}):c===K?Object(d.a)(Object(d.a)({},e),{},{editErrors:[]}):e},UpdateImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,c=t.payload,a=t.type;return a===W?Object(d.a)(Object(d.a)({},e),{},{updateImageErrors:c}):a===Q?Object(d.a)(Object(d.a)({},e),{},{updateImageErrors:[]}):e},updateName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;return c===Oe?Object(d.a)(Object(d.a)({},e),{},{updateErrors:a}):c===me?Object(d.a)(Object(d.a)({},e),{},{updateErrors:[]}):e}}),ve=[ue.a],ge=Object(se.createStore)(xe,Object(be.composeWithDevTools)(se.applyMiddleware.apply(void 0,ve)));c(202),c(203);function fe(){return Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebar_elemet",children:[Object(p.jsx)("h3",{children:"Settings"})," "]}),Object(p.jsx)("div",{className:"sidebar_elemet",children:Object(p.jsx)(o.b,{to:"/updateName",children:"Change Name"})}),Object(p.jsx)("div",{className:"sidebar_elemet",children:Object(p.jsx)(o.b,{to:"/updatePassword",children:"Change Password"})}),Object(p.jsx)("div",{className:"sidebar_elemet",children:Object(p.jsx)(o.b,{children:"Email Id"})}),Object(p.jsx)("div",{className:"sidebar_elemet",children:Object(p.jsx)(o.b,{children:"Phone No."})})]})}function Ne(){var e=Object(l.c)((function(e){return e.PostReducer})),t=e.redirect,c=e.message,n=e.loading,s=Object(l.c)((function(e){return e.AuthReducer})),r=s.user._id,j=s.token,d=Object(l.c)((function(e){return e.FetchPosts})),u=d.posts,O=d.count,m=d.perPage;console.log(u);var v=Object(i.h)().page;void 0===v&&(v=1);var f=Object(l.b)(),N=Object(i.g)(),y=function(){var e=Object(x.a)(h.a.mark((function e(t){var c,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you realy want to Delete this post")){e.next=17;break}return f({type:I}),e.prev=3,c={headers:{Authorization:"Bearer ".concat(j)}},e.next=7,g.a.get("/delete/".concat(t),c);case 7:a=e.sent,n=a.data.msg,f(Z(r,v)),f({type:z,payload:n}),N.push("/dashboard"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),f({type:U});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t&&f({type:M}),c&&(S.b.success(c),f({type:B}))}),[c]),Object(a.useEffect)((function(){f(Z(r,v))}),[v]),Object(p.jsxs)("div",{children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Dashboard User"}),Object(p.jsx)("meta",{name:"description",content:"User Dashboard"})]}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}}),Object(p.jsx)("div",{className:"container mt-100 ",children:Object(p.jsxs)("div",{className:"row ml-minus-15 mr-minus-15",children:[Object(p.jsx)("div",{className:"col-3 p-15",children:Object(p.jsx)(fe,{})}),Object(p.jsxs)("div",{className:"col-9 p-15",children:[n?Object(p.jsx)(ee,{}):u.length>0?u.map((function(e){return Object(p.jsxs)("div",{className:"dashboard_post",children:[Object(p.jsxs)("div",{className:"dashboard_post_title",children:[Object(p.jsx)(o.b,{to:"/details/".concat(e.slug),children:e.title}),Object(p.jsxs)("spna",{className:"time_span",children:["Published ",C()(e.updatedAt).fromNow()]})]}),Object(p.jsxs)("div",{className:"dashboard_post_links",children:[Object(p.jsx)(o.b,{to:"/updateImage/".concat(e._id),className:"icons",children:Object(p.jsx)(te.d,{})}),Object(p.jsx)(o.b,{to:"/edit/".concat(e._id),className:"icons",children:Object(p.jsx)(te.e,{})}),Object(p.jsx)(o.b,{to:"/",className:"icons",children:Object(p.jsx)(te.a,{onClick:function(){y(e._id)}})})]})]},e._id)})):"You dont have any post",Object(p.jsx)(ce,{path:"dashboard",page:v,perPage:m,count:O})]})]})})]})}var ye=function(e){return Object(l.c)((function(e){return e.AuthReducer})).user?Object(p.jsx)(i.b,{path:e.path,exact:e.exact,component:e.component}):Object(p.jsx)(i.a,{to:"/login"})};function Ee(e){return Object(l.c)((function(e){return e.AuthReducer})).user?Object(p.jsx)(i.a,{to:"/dashboard"}):Object(p.jsx)(i.b,{path:e.path,exact:e.exact,component:e.component})}function _e(){return Object(p.jsxs)("div",{className:"notFound",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"404 - Not Found"}),Object(p.jsx)("meta",{name:"description",content:"404 Not Found"})]}),Object(p.jsxs)("div",{className:"notFound_container",children:[Object(p.jsx)("h1",{className:"notFound_h1",children:"404"}),Object(p.jsx)("p",{className:"notFound_p",children:"Oops! That page could not Found"})]})]})}c(204),c(93);var we=c(61),Re=c.n(we);c(307);function Se(e){var t=Object(l.c)((function(e){return e.PostReducer})),c=t.createErrors,n=t.redirect,s=t.loading,r=Object(a.useState)("Choose Images"),o=Object(u.a)(r,2),i=o[0],O=o[1],m=Object(a.useState)(""),v=Object(u.a)(m,2),f=v[0],N=v[1],y=Object(l.b)(),E=Object(l.c)((function(e){return e.AuthReducer})),_=E.user,w=_._id,R=_.name,P=Object(a.useState)(""),k=Object(u.a)(P,2),A=k[0],C=k[1],T=Object(a.useState)({title:"",description:"",img:""}),M=Object(u.a)(T,2),B=M[0],Y=M[1],G=Object(a.useState)(""),V=Object(u.a)(G,2),J=V[0],H=V[1],K=Object(a.useState)(!1),W=Object(u.a)(K,2),Q=W[0],q=W[1];return Object(a.useEffect)((function(){n&&e.history.push("/dashboard"),0!==c.length&&c.map((function(e){S.b.error(e.msg)}))}),[c,n]),Object(p.jsxs)("div",{className:"create",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Create New Post"}),Object(p.jsx)("meta",{name:"description",content:"Create New Post"})]}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}}),s?Object(p.jsx)(ee,{}):Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault();var t,c=B.title,a=B.description,n=B.img,s=new FormData;s.append("title",c),s.append("body",A),s.append("img",n),s.append("description",a),s.append("slug",J),s.append("name",R),s.append("id",w),y((t=s,function(){var e=Object(x.a)(h.a.mark((function e(c,a){var n,s,r,o,i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),s=n.AuthReducer.token,c({type:I}),e.prev=2,r={headers:{Authorization:"Bearer ".concat(s)}},e.next=6,g.a.post("/create_post",t,r);case 6:o=e.sent,i=o.data.msg,c({type:U}),c({type:F}),c({type:L}),c({type:z,payload:i}),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.response),l=e.t0.response.data.errors,c({type:U}),c({type:D,payload:l});case 20:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,c){return e.apply(this,arguments)}}()))},children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6 p-15 ml-minus-15 mr-minus-15",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h3",{className:"card_h3",children:"Create A New Post"}),Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Post Title"}),Object(p.jsx)("input",{type:"text",className:"group_control",value:B.title,onChange:function(e){Y(Object(d.a)(Object(d.a)({},B),{},Object(j.a)({},e.target.name,e.target.value)));var t=e.target.value.trim().split(" ").join("-");H(t)},name:"title",id:"title",placeholder:"Post Title"})]}),Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"img",className:"img_label",children:i}),Object(p.jsx)("input",{type:"file",name:"img",id:"img",className:"group_control input_file",onChange:function(e){if(0!==e.target.files.length){O(e.target.files[0].name),Y(Object(d.a)(Object(d.a)({},B),{},Object(j.a)({},e.target.name,e.target.files[0])));var t=new FileReader;t.onloadend=function(){N(t.result)},t.readAsDataURL(e.target.files[0])}}})]}),Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"body",children:"Post Body"}),Object(p.jsx)(Re.a,{theme:"snow",id:"body",placeholder:"Post Body...",value:A,onChange:C})]}),Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"description",children:"Meta Description"}),Object(p.jsx)("textarea",{name:"description",className:"group_control",id:"description",defaultValue:B.description,onChange:function(e){Y(Object(d.a)(Object(d.a)({},B),{},Object(j.a)({},e.target.name,e.target.value)))},placeholder:"Meta Description ....",maxLength:"500",cols:"30",rows:"10"}),Object(p.jsx)("p",{className:"length",children:B.description?B.description.length:0})]})]})}),Object(p.jsx)("div",{className:"col-6 p-15",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"slug",children:"Post Url"}),Object(p.jsx)("input",{type:"text",name:"slug",id:"slug",value:J,onChange:function(e){q(!0),H(e.target.value)},className:"group_control",placeholder:"Post URL ..."})]}),Object(p.jsx)("div",{className:"group",children:Q?Object(p.jsx)("button",{className:"btn btn-default btn-block",onClick:function(e){e.preventDefault(),H(J.trim().split(" ").join("-"))},children:"Update Slug"}):""}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("div",{className:"imgPreview",children:f?Object(p.jsx)("img",{src:f}):""})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",value:"create post",className:"btn btn-default btn-block"})})]})})]})})})]})}c(422);function Pe(){var e=Object(i.h)().id,t=Object(i.g)().push,c=Object(a.useState)(""),n=Object(u.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)({title:"",description:""}),j=Object(u.a)(o,2),O=j[0],m=j[1],v=Object(l.b)(),f=Object(l.c)((function(e){return e.PostReducer})),N=f.loading,y=f.redirect,E=Object(l.c)((function(e){return e.FetchPost})),_=E.post,w=E.postStatus,R=Object(l.c)((function(e){return e.UpdatePost})),P=R.editErrors;Object(a.useEffect)((function(){w?(m({title:_.title,description:_.description}),r(_.body),v({type:J})):v(function(e){return function(){var t=Object(x.a)(h.a.mark((function t(c,a){var n,s,r,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a(),s=n.AuthReducer.token,r={headers:{Authorization:"Bearer ".concat(s)}},c({type:I}),t.prev=3,t.next=6,g.a.get("/post/".concat(e),r);case 6:o=t.sent,i=o.data.post,c({type:U}),c({type:G,payload:i}),c({type:V}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(3),c({type:U}),console.log(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e,c){return t.apply(this,arguments)}}()}(e))}),[_]);return Object(a.useEffect)((function(){0!==P.length&&(P.map((function(e){S.b.error(e.msg)})),v({type:K}))}),[P]),Object(a.useEffect)((function(){y&&t("/dashboard")}),[y]),N?Object(p.jsx)(ee,{}):Object(p.jsxs)("div",{className:"mt-100",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Edit Post"}),Object(p.jsx)("meta",{name:"description",content:"Edit Post"})]}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h3",{className:"card_h3",children:"Edit Post"}),Object(p.jsxs)("form",{onSubmit:function(t){var c;t.preventDefault(),v((c={title:O.title,body:s,description:O.description,id:_._id},function(){var e=Object(x.a)(h.a.mark((function e(t,a){var n,s,r,o,i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),s=n.AuthReducer.token,r={headers:{Authorization:"Bearer ".concat(s)}},t({type:I}),e.prev=3,e.next=6,g.a.post("/update",c,r);case 6:o=e.sent,i=o.data,t({type:U}),t({type:L}),t({type:z,payload:i.msg}),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(3),l=e.t0.response.data.errors,t({type:U}),t({type:H,payload:l}),console.log(e.t0.response);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,c){return e.apply(this,arguments)}}())),console.log(e)},children:[Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Post Title"}),Object(p.jsx)("input",{type:"text",name:"title",id:"title",value:O.title,onChange:function(e){return m(Object(d.a)(Object(d.a)({},O),{},{title:e.target.value}))},className:"group_control",placeholder:"Edit your  post title"})]}),Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"body",children:"Post Body"}),Object(p.jsx)(Re.a,{theme:"snow",id:"body",placeholder:"Post Body...",value:s,onChange:r})]}),Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"description",children:"Meta Description"}),Object(p.jsx)("textarea",{name:"description",className:"group_control",id:"description",defaultValue:O.description,onChange:function(e){return m(Object(d.a)(Object(d.a)({},O),{},{description:e.target.value}))},placeholder:"Meta Description ....",maxLength:"500",cols:"30",rows:"10",onKeyUp:function(e){return m(Object(d.a)(Object(d.a)({},O),{},{description:e.target.value}))}}),Object(p.jsx)("p",{className:"length",children:O.description?O.description.length:0})]}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",value:"Update post",className:"btn btn-default btn-block"})})]})]})})})})]})}var ke=function(e){var t=Object(i.h)().id,c=(Object(i.g)().push,Object(l.b)()),n=Object(l.c)((function(e){return e.UpdateImage})),s=n.updateImageErrors,r=Object(l.c)((function(e){return e.PostReducer})),o=r.redirect,j=Object(a.useState)({img:"",imgPreview:"",imgName:"Choose image"}),O=Object(u.a)(j,2),m=O[0],v=O[1];return Object(a.useEffect)((function(){0!==s.length&&(s.map((function(e){S.b.error(e.msg)})),c({type:Q}))}),[s]),Object(a.useEffect)((function(){o&&e.history.push("/dashboard")}),[o]),Object(p.jsxs)("div",{className:"container mt-100",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Update Image"}),Object(p.jsx)("meta",{name:"description",content:"Update Image"})]}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card_h3",children:"Upade Image"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a,n=new FormData;n.append("id",t),n.append("img",m.img),c((a=n,function(){var e=Object(x.a)(h.a.mark((function e(t,c){var n,s,r,o,i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),s=n.AuthReducer.token,r={headers:{Authorization:"Bearer ".concat(s)}},t({type:I}),e.prev=3,e.next=6,g.a.post("/updateImage",a,r);case 6:o=e.sent,i=o.data.msg,t({type:U}),t({type:L}),t({type:z,payload:i}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),l=e.t0.response.data.errors,t({type:U}),t({type:W,payload:l});case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,c){return e.apply(this,arguments)}}()))},children:[Object(p.jsxs)("div",{className:"group",children:[Object(p.jsx)("label",{htmlFor:"img",className:"img_label",children:m.imgName}),Object(p.jsx)("input",{type:"file",name:"img",id:"img",className:"group_control input_file",onChange:function(e){if(0!==e.target.files.length){var t=new FileReader;t.onloadend=function(){v(Object(d.a)(Object(d.a)({},m),{},{imgPreview:t.result,img:e.target.files[0],imgName:e.target.files[0].name}))},t.readAsDataURL(e.target.files[0])}}})]}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("div",{className:"imgPreview",children:m.imgPreview?Object(p.jsx)("img",{src:m.imgPreview}):""})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",value:"Update Image",className:"btn btn-default btn-block"})})]})]})})})]})};function Ae(){var e=Object(i.g)().push,t=Object(a.useState)(""),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(l.c)((function(e){return e.AuthReducer})).user,o=r.name,j=r._id,d=Object(l.c)((function(e){return e.PostReducer})),O=(d.loading,d.redirect),m=Object(l.c)((function(e){return e.updateName})).updateErrors,v=Object(l.b)();return Object(a.useEffect)((function(){s(o)}),[]),Object(a.useEffect)((function(){0!==m.length&&(m.map((function(e){S.b.error(e.msg)})),v({type:me}))}),[m]),Object(a.useEffect)((function(){O&&e("/dashboard")}),[O]),Object(p.jsxs)("div",{className:"container mt-100",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Change your Name"}),Object(p.jsx)("meta",{name:"description",content:"Edit Name"})]}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}}),Object(p.jsxs)("div",{className:"row ml-minus-15 mr-minus-15",children:[Object(p.jsx)("div",{className:"col-3 p-15",children:Object(p.jsx)(fe,{})}),Object(p.jsx)("div",{className:"col-9 p-15 ",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h3",{className:"card_h3",children:"Update Name"}),Object(p.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),v((t={name:n,id:j},function(){var e=Object(x.a)(h.a.mark((function e(c,a){var n,s,r,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),s=n.AuthReducer.token,r={headers:{Authorization:"Bearer ".concat(s)}},c({type:I}),e.prev=3,e.next=6,g.a.post("/updateName",t,r);case 6:o=e.sent,i=o.data,c({type:U}),localStorage.setItem("myToken",i.token),c({type:"SET_TOKEN",payload:i.token}),c({type:z,payload:i.msg}),c({type:L}),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),c({type:U}),console.log(e.t0.response.data.errors),c({type:Oe,payload:e.t0.response.data.errors});case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,c){return e.apply(this,arguments)}}()))},children:[Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"text",name:"",placeholder:"Name...",className:"group_control",onChange:function(e){return s(e.target.value)},value:n})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",value:"Update Name",className:"btn btn-default btn-block"})})]})]})})]})]})}function Ce(){var e=Object(i.g)().push,t=Object(a.useState)({current:"",newPassword:"",userId:null}),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(l.b)(),o=Object(l.c)((function(e){return e.PostReducer})),j=o.loading,O=o.redirect,m=Object(l.c)((function(e){return e.updateName})),v=m.updateErrors,f=Object(l.c)((function(e){return e.AuthReducer})),N=f.user._id;return Object(a.useEffect)((function(){0!==v.length&&(v.map((function(e){return S.b.error(e.msg)})),r({type:me}))}),[v]),Object(a.useEffect)((function(){O&&e("/dashboard")}),[O]),j?Object(p.jsx)(ee,{}):Object(p.jsxs)("div",{className:"container mt-100",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("title",{children:"Change your Password"}),Object(p.jsx)("meta",{name:"description",content:"Edit Password"})]}),Object(p.jsx)(S.a,{toastOptions:{style:{fontSize:"15px"}}}),Object(p.jsxs)("div",{className:"row ml-minus-15 mr-minus-15",children:[Object(p.jsx)("div",{className:"col-3 p-15",children:Object(p.jsx)(fe,{})}),Object(p.jsx)("div",{className:"col-9 p-15",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h3",{className:"card_h3",children:"Change Password"}),Object(p.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),r((t={current:n.current,newPassword:n.newPassword,userId:N},function(){var e=Object(x.a)(h.a.mark((function e(c,a){var n,s,r,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),s=n.AuthReducer.token,r={headers:{Authorization:"Bearer ".concat(s)}},c({type:I}),e.prev=3,e.next=6,g.a.post("/updatePassword",t,r);case 6:o=e.sent,i=o.data,c({type:U}),c({type:z,payload:i.msg}),c({type:L}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),c({type:U}),c({type:Oe,payload:e.t0.response.data.errors});case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,c){return e.apply(this,arguments)}}()))},children:[Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"password",name:"",className:"group_control",placeholder:"Current Password....",onChange:function(e){return s(Object(d.a)(Object(d.a)({},n),{},{current:e.target.value}))},value:n.current})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"password",name:"",className:"group_control",placeholder:"New Password....",onChange:function(e){return s(Object(d.a)(Object(d.a)({},n),{},{newPassword:e.target.value}))},value:n.newPassword})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",value:"Update Password",className:"btn btn-default btn-block"})})]})]})})]})]})}var Te=c(158),De=c.n(Te),Fe=(c(462),function(e){var t=e.comments;return t.length>0?t.map((function(e){return Object(p.jsxs)("div",{className:"commentSection",children:[Object(p.jsxs)("div",{className:"post_header",children:[Object(p.jsx)("div",{className:"post_avatar",children:e.userName?e.userName[0]:""}),Object(p.jsxs)("div",{className:"post_user",children:[Object(p.jsx)("span",{children:e.userName}),Object(p.jsx)("span",{children:C()(e.updatedAt).format("MMM Do YY")})]})]}),Object(p.jsx)("div",{className:"comment__body",children:e.comment})]},e._id)})):"No comments"}),Ie=function(){var e=Object(i.h)().id,t=Object(a.useState)(""),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(l.c)((function(e){return e.AuthReducer})).user,o=Object(l.c)((function(e){return e.PostReducer})),j=o.loading,d=o.details,O=o.comments,m=Object(l.b)();return Object(a.useEffect)((function(){m($(e))}),[e]),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row mt-100",children:Object(p.jsx)("div",{className:"col-8",children:j?Object(p.jsx)(ee,{}):Object(p.jsxs)("div",{className:"post_details",children:[Object(p.jsxs)(b.b,{children:[Object(p.jsx)("title",{children:d.title}),Object(p.jsx)("meta",{name:"description",content:"Learn HTML, CSS, JavaScript, React, Vue, Flutter etc"})]}),Object(p.jsxs)("div",{className:"post_header",children:[Object(p.jsx)("div",{className:"post_avatar",children:d.userName?d.userName[0]:""}),Object(p.jsxs)("div",{className:"post_user",children:[Object(p.jsx)("span",{children:d.userName}),Object(p.jsx)("span",{children:C()(d.updatedAt).format("MMM Do YY")})]})]}),Object(p.jsxs)("div",{className:"post_body",children:[Object(p.jsx)("h1",{className:"post_title",children:d.title}),Object(p.jsx)("div",{className:"post_details",children:De()(d.body)}),Object(p.jsx)("div",{className:"post__img",children:Object(p.jsx)("img",{src:"/imges/".concat(d.img),alt:d.img})})]}),r?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"post_comment",children:Object(p.jsxs)("form",{onSubmit:function(t){var c;t.preventDefault(),console.log(n),m((c={id:d._id,comment:n,userName:r.name},function(){var e=Object(x.a)(h.a.mark((function e(t,a){var n,s,r,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),s=n.AuthReducer.token,r={headers:{Authorization:"Bearer ".concat(s)}},t({type:I}),e.prev=3,e.next=6,g.a.post("/comment",c,r);case 6:o=e.sent,i=o.data,t({type:U}),console.log(i),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),t({type:U}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,c){return e.apply(this,arguments)}}())),s(""),m($(e))},children:[Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"text",name:"",id:"",onChange:function(e){return s(e.target.value)},value:n,className:"group_control",placeholder:"Write a comment..."})}),Object(p.jsx)("div",{className:"group",children:Object(p.jsx)("input",{type:"submit",value:"Post Comment",className:"btn btn-default btn-block"})})]})}),Object(p.jsx)(Fe,{comments:O})]}):""]})})})})};var Ue=function(){return Object(p.jsx)(l.a,{store:ge,children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(ne,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/",exact:!0,component:ae}),Object(p.jsx)(i.b,{path:"/home/:page",exact:!0,component:ae}),Object(p.jsx)(i.b,{path:"/details/:id",exact:!0,component:Ie}),Object(p.jsx)(Ee,{path:"/register",exact:!0,component:k}),Object(p.jsx)(Ee,{path:"/login",exact:!0,component:P}),Object(p.jsx)(ye,{path:"/dashboard/:page?",exact:!0,component:Ne}),Object(p.jsx)(ye,{path:"/create",exact:!0,component:Se}),Object(p.jsx)(ye,{path:"/edit/:id",exact:!0,component:Pe}),Object(p.jsx)(ye,{path:"/updateImage/:id",exact:!0,component:ke}),Object(p.jsx)(ye,{path:"/updateName",exact:!0,component:Ae}),Object(p.jsx)(ye,{path:"/updatePassword",exact:!0,component:Ce}),Object(p.jsx)(i.b,{path:"*",exact:!0,component:_e})]})]})})})},Le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,464)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Ue,{})}),document.getElementById("root")),Le()},88:function(e,t,c){}},[[463,1,2]]]);
//# sourceMappingURL=main.6643695f.chunk.js.map