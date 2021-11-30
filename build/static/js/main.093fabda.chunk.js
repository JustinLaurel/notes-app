(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(30),o=n.n(c),i=n(55),s=n(20),u=n(13),l=n(240),b=n(241),d=n(229),j=3e3,p={notLoggedIn:{description:"You need to be logged in to add notes",status:"error",duration:j,isClosable:!0},noteTooShort:{description:"Note is too short!",status:"error",duration:j,isClosable:!0},failedGet:{description:"Failed to get notes, please check your network",status:"error",duration:j,isClosable:!0},failedCreate:{description:"Failed to create note",status:"error",duration:j,isClosable:!0}},f=n(2),O=n(10),h=n.n(O),g=n(17),m=n(12),v=n(43),x=n.n(v),w=function(e){if(k(e))return{username:e.username,password:e.password};throw new Error("Invalid username or password")},y=function(e){return!(!e||"object"!==typeof e)&&("token"in e&&"username"in e&&"name"in e)},k=function(e){return!!(e&&"object"===typeof e&&"username"in e&&"password"in e)},S=function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("logging in"),e.next=4,x.a.post("/api/login",Object(f.a)({},t));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(null===(a=e.t0.response)||void 0===a?void 0:a.data.error);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F={login:S},C=function(){var e=window.localStorage.getItem("tokenData");return e?function(e){if(!e||!y(e))throw new Error("Invalid or missing token");return e}(JSON.parse(e)):null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=window.localStorage;switch(n){case"login/init":return y(r)?Object(f.a)({},r):Object(f.a)({},e);case"login/storeToken":return y(r)?(a.setItem("tokenData",JSON.stringify(r)),Object(f.a)({},r)):(console.error("Missing or invalid token after login, cannot set to localStorage"),Object(f.a)({},e));case"login/logout":return a.removeItem("tokenData"),{};default:return Object(f.a)({},e)}},N="/api/notes",I="POSITION",A="CONTENT",V=function(){var e=Object(g.a)(h.a.mark((function e(t,n){var r,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=N,e.t0=n,e.next=e.t0===I?4:e.t0===A?6:8;break;case 4:return r+="/position",e.abrupt("break",10);case 6:return r+="/content",e.abrupt("break",10);case 8:return a=n,e.abrupt("return",a);case 10:return e.next=12,x.a.put(r,t);case 12:return c=e.sent,e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z={getAll:function(){var e=Object(g.a)(h.a.mark((function e(){var t,n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=C())){e.next=10;break}return n={headers:{authorization:t.token}},e.next=5,x.a.get(N,n);case 5:return r=e.sent,a=r.data,e.abrupt("return",a);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addNew:function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r,a,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=C(),e.prev=1,!n){e.next=11;break}return r={note:t,token:n.token},e.next=6,x.a.post(N,r);case 6:return a=e.sent,c=a.data,e.abrupt("return",c);case 11:throw new Error("Failed to add note, user currently not logged in");case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(1),new Error(null===(o=e.t0.response)||void 0===o?void 0:o.data);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(g.a)(h.a.mark((function e(t,n){var r,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=C())){e.next=9;break}return a=r.token,e.next=5,x.a.delete("".concat(N,"/").concat(t),{data:{token:a,toUpdate:n}});case 5:return c=e.sent,e.abrupt("return",c);case 9:throw new Error("Failed to delete note, user currently not logged in");case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),update:V},_=function(e){return"string"===typeof e||e instanceof String},D=function(e){return!(!e&&"string"!==typeof e)&&!!_(e)},L=D,P=function(e){return!!e&&(!!L(e._id)&&!!function(e){return!!e&&!!L(e.content)&&!(!L(e.created)||!R(e.created))&&!!L(e.position)}(e))},T=function(e){return!!e&&(!!L(e.match)&&P(e.note))},J=function(e){return Array.isArray(e)&&e.every(P)},R=function(e){return Boolean(Date.parse(e))},U=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],a={_id:r._id,position:r.position};t.push(a)}return t},B=n(57),G=function(e){return JSON.stringify(Number(e)+1)},M=function(e,t,n){return e>=t&&e<=n},q=function(e,t){return e.filter((function(e){return e._id!==t}))},H=function(e,t,n){var r,a=[];if(n>t)for(var c=0;c<e.length;c++){var o=e[c];M(Number(o.position),t+1,n)&&(o.position=(r=o.position,JSON.stringify(Number(r)-1)),a.push(o))}else if(n<t)for(var i=0;i<e.length;i++){var s=e[i];M(Number(s.position),n,t-1)&&(s.position=G(s.position),a.push(s))}return e[n].position=JSON.stringify(n),a.push(e[n]),{updated:e,changedNotes:a}},W=function(e,t,n){return Object(m.a)(Object(B.b)(e,t,n))},K=function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=U(t),e.next=3,z.update(n,I);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e,t){for(var n=[],r=0;r<e.length;r++){var a=e[r];Number(a.position)>Number(t)&&(a.position=JSON.stringify(Number(a.position)-1),n.push(a))}return{updated:e,changedNotes:n}},Z=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getAll();case 2:n=e.sent,t({type:"notes/initialize",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"notes/initialize":return J(r)?Object(m.a)(r):Object(m.a)(e);case"notes/remove":if(L(r)){var a=r,c=q(e,a);return c}return console.error("Failed deletion of note state"),Object(m.a)(e);case"notes/create":return P(r)?[].concat(Object(m.a)(e),[r]):(console.error("Failed adding created note to state"),Object(m.a)(e));case"notes/updateOne":if(T(r)){var o=Object(m.a)(e),i=o.findIndex((function(e){return e._id===r.match}));return o[i]=r.note,o}return console.error("Payload in notes/updateOne reducer is not an UpdatePayload"),Object(m.a)(e);case"notes/updateArray":return J(r)?Object(m.a)(r):(console.error("Failed to update notes in notes reducer"),Object(m.a)(e));case"notes/clear":return[];default:return Object(m.a)(e)}},X=n(228),$=n(3),ee=function(){return Object($.jsxs)(X.a,Object(f.a)(Object(f.a)({},{separator:"-",fontWeight:"medium",fontSize:"25px",fontFamily:"flexa"}),{},{children:[Object($.jsx)(X.b,{children:Object($.jsx)(X.c,{as:i.b,to:"/",d:"inline",children:"Home"})}),Object($.jsx)(X.b,{children:Object($.jsx)(X.c,{as:i.b,to:"/notes",d:"inline",children:"Notes"})}),Object($.jsx)(X.b,{children:Object($.jsx)(X.c,{as:i.b,to:"/pad",d:"inline",children:"Pad"})}),Object($.jsx)(X.b,{children:Object($.jsx)(X.c,{as:i.b,to:"/user",d:"inline",children:"User"})}),Object($.jsx)(X.b,{children:Object($.jsx)(X.c,{as:i.b,to:"/about",d:"inline",children:"About"})})]}))},te=function(){return Object($.jsxs)(d.a,Object(f.a)(Object(f.a)({},{fontFamily:'"Lato",  sans serif',fontSize:"16px"}),{},{children:[Object($.jsx)("h3",{children:Object($.jsx)("i",{children:"Notes app, by Chiew Weng Keat"})}),Object($.jsxs)("p",{children:["\u2003 total notes stored: ",Object($.jsx)("br",{}),"\u2003 total users:"]})]}))},ne=n(22),re=n(94),ae=n(234),ce=n(242),oe=function(e){for(var t=e.rows,n={height:"26px",width:"500px",alignSelf:"center"},r=[],c=0;c<t;c++)r.push(Object($.jsxs)(a.a.Fragment,{children:[Object($.jsx)(ce.a,{style:n}),Object($.jsx)(ce.b,{visibility:"hidden"}),Object($.jsx)(ce.b,{visibility:"hidden"})]},c));return Object($.jsx)($.Fragment,{children:r})},ie=n(6),se=n(68),ue=n(232),le=n(124),be=n(233),de=n(21),je=n(230),pe=n(114),fe="noteActionViews/editing",Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isEditing:!1,noteId:null},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"".concat(fe,"/set"):return _(r)?Object(f.a)(Object(f.a)({},e),{},{isEditing:!0,noteId:r}):(console.log("Invalid noteId: ".concat(JSON.stringify(r))),Object(f.a)({},e));case"".concat(fe,"/reset"):return Object(f.a)(Object(f.a)({},e),{},{isEditing:!1,noteId:null});default:return Object(f.a)({},e)}},he=Object(de.a)(pe.a),ge=function(e){var t=e.handleEdit,n={bgColor:e.isEditing?"gray.400":"transparent",borderRadius:"full",size:"sm",_hover:{bgColor:"gray.400"},title:"edit"};return Object($.jsx)(je.a,Object(f.a)(Object(f.a)({},n),{},{"aria-label":"edit note",icon:Object($.jsx)(he,{}),onClick:t}))},me=function(e){var t=e.note,n=e.isEditing,r=Object(u.b)();return Object($.jsx)(ge,{isEditing:n,handleEdit:function(e){var n;e.preventDefault(),r((n=t._id,function(e){e({type:"".concat(fe,"/set"),payload:n})}))}})},ve=n(243),xe=function(e){var t=e.handleDelete,n=e.toggleHighlight;return Object($.jsx)(je.a,Object(f.a)(Object(f.a)({},{color:"black",borderRadius:"full",bgColor:"transparent",size:"sm",_hover:{color:"white",bgColor:"red.900"},title:"delete"}),{},{"aria-label":"delete",icon:Object($.jsx)(ve.a,{}),onClick:t,onMouseOver:n,onMouseOut:n,children:"delete"}))},we=function(e){var t=e.note,n=Object(u.b)();return Object($.jsx)(xe,{handleDelete:function(e){e.preventDefault(),n(function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n,r){var a,c,o,i,s,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(m.a)(r().notes),c=e.position,o=Y(a,c),i=o.updated,s=o.changedNotes,u=U(s),n({type:"notes/updateArray",payload:i}),n({type:"notes/remove",payload:e._id}),t.next=9,z.remove(e._id,u);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error deleting note: ".concat(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))},toggleHighlight:function(){var e=document.getElementById(t._id);if(e)switch(e.style.color){case"red":e.style.color="";break;case"":e.style.color="red"}}})},ye=n(115),ke=function(e){var t=e.note,n=Object(u.b)(),a=Object(r.useState)(t.content),c=Object(ie.a)(a,2),o=c[0],i=c[1],s=Object(r.useRef)(null);Object(r.useEffect)((function(){i(t.content)}),[t.content]);var l=function(e){if(e.preventDefault(),n((function(e){e({type:"".concat(fe,"/reset")})})),o!==t.content){var r=Object(f.a)(Object(f.a)({},t),{},{content:o});n(function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"notes/updateOne",payload:{match:e._id,note:e}}),t.prev=1,t.next=4,z.update(e,A);case 4:return r=t.sent,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(1),console.error("Error deleting note: ".concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(r))}};return Object($.jsxs)(se.a,{as:"form",onSubmit:l,children:[Object($.jsx)(ue.a,{ref:s,as:"textarea",id:t._id,style:{height:"32px",padding:"0px",verticalAlign:"top",overflow:"hidden"},autoFocus:!0,autoComplete:"off",value:o,rows:1,spellCheck:!1,onChange:function(e){return i(e.currentTarget.value)},onBlur:l}),Object($.jsx)(le.a,{style:{display:"none"}})]})},Se=function(e){var t=e.note,n=Object(B.c)({id:t.position}),c=n.setNodeRef,o=n.attributes,i=n.listeners,s=n.transition,l=n.transform,b={transition:s,transform:l?"translate3d(".concat(null===l||void 0===l?void 0:l.x,"px, ").concat(null===l||void 0===l?void 0:l.y,"px, 0)"):void 0},j=Object(u.c)((function(e){return e.noteActionViews})),p=j.isEditing&&j.noteId===t._id,O=Object($.jsx)(d.a,Object(f.a)(Object(f.a)(Object(f.a)({id:t._id,ref:c},o),i),{},{style:b,children:t.content})),h=p?Object($.jsx)(ke,{note:t}):O;return Object(r.useEffect)((function(){p&&Object(ye.a)(document.querySelector("textarea"))}),[p]),Object($.jsxs)(a.a.Fragment,{children:[h,Object($.jsx)(be.a,{children:Object($.jsx)(me,{note:t,isEditing:p})}),Object($.jsx)(be.a,{children:Object($.jsx)(we,{note:t})})]},t._id)},Fe=function(){var e=Object(u.c)((function(e){return e.notes})),t=Object(u.b)(),n=C()&&0===e.length?Object($.jsx)(oe,{rows:5}):e.map((function(e){return Object($.jsx)(Se,{note:e},e.position)}));return Object($.jsx)(ae.a,Object(f.a)(Object(f.a)(Object(f.a)({},{mt:"1",templateColumns:"minmax(auto, 600px) 30px 30px",autoRows:"min-max(32px, max-content)",rowGap:"5px"}),{fontFamily:'"Lato",  sans serif',fontSize:"16px"}),{},{children:Object($.jsx)(ne.a,{onDragEnd:function(n){var r=n.active,a=n.over;if(r&&a){var c=e.findIndex((function(e){return e.position===r.id})),o=e.findIndex((function(e){return e.position===a.id}));c!==o&&t(function(e,t){return function(){var n=Object(g.a)(h.a.mark((function n(r,a){var c,o,i,s,u;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a().notes,o=W(c,e,t),i=H(o,e,t),s=i.updated,u=i.changedNotes,r({type:"notes/updateArray",payload:s}),n.next=6,K(u);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(c,o))}},modifiers:[re.b,re.a],collisionDetection:ne.c,children:Object($.jsx)(B.a,{items:e.map((function(e){return e.position})),strategy:B.d,children:n})})}))},Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(r.useState)(t),a=Object(ie.a)(n,2),c=a[0],o=a[1],i=function(e){return o(e.currentTarget.value)},s=function(){return o("")};return{type:e,value:c,onChange:i,clearField:s}},Ee=n(235),Ne=Object(r.forwardRef)((function(e,t){var n=e.onSubmit,r=e.noteInput;return Object($.jsxs)(se.a,{as:"form",onSubmit:n,children:[Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)({ref:t},{placeholder:"new note...",size:"sm",w:350,variant:"filled",borderRadius:"2xl",m:1.5,ml:-.5,colorScheme:"facebook",autoComplete:"off"}),r)),Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},{size:"xs",bgColor:"black",color:"white",colorScheme:"twitter",_hover:{bgColor:"gray.600"},title:"save new note"}),{},{children:"save"}))]})})),Ie=function(){var e=Ce("text"),t=Object(u.b)(),n=Object(l.a)(),a=Object(r.useRef)(null);return document.addEventListener("keyup",(function(e){var t;"Slash"===e.code&&a.current&&!(null===(t=document.activeElement)||void 0===t?void 0:t.id)&&a.current.focus()})),Object($.jsx)(Ne,{ref:a,onSubmit:function(r){var a;if(r.preventDefault(),!(e.value.length<4))if(Boolean(C()))try{t((a=e.value,function(){var e=Object(g.a)(h.a.mark((function e(t,n){var r,c,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().notes.at(-1),c={content:a,created:(new Date).toString(),position:r?JSON.stringify(Number(r.position)+1):"0"},o=JSON.stringify(Math.round(1e8*Math.random())),e.prev=3,t({type:"notes/create",payload:Object(f.a)(Object(f.a)({},c),{},{_id:o})}),e.next=7,z.addNew(c);case 7:i=e.sent,t({type:"notes/remove",payload:o}),t({type:"notes/create",payload:i}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error("Error adding note: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n){return e.apply(this,arguments)}}())),e.clearField()}catch(r){console.error(r.message),n(p.failedCreate)}else n(p.notLoggedIn)},noteInput:e})},Ae=n(123),Ve=(n(169),n(171),n(173),n(175),n(177),n(179),n(181),n(183),n(185),n(187),n(189),n(191),n(193),n(195),n(197),n(199),n(201),n(203),n(205),n(207),n(208),n(209),function(){return Object($.jsx)(d.a,Object(f.a)(Object(f.a)({},{mt:2}),{},{children:Object($.jsx)(Ae.a,{apiKey:"qtitdvrlkre0paqdsjf5y2ov79vqbc0bp9s9oji0y102hol2",init:{skin:!1,height:500,menubar:!1,plugins:["advlist autolink lists link image","charmap print preview anchor help textcolor","searchreplace visualblocks code","insertdatetime media table"],statusbar:!1,toolbar:"undo redo | bold italic |                        underline strikethrough | superscript subscript charmap code |                        alignleft aligncenter alignright alignjustify |                        bullist numlist outdent indent |                        link image media table | forecolor backcolor |                        removeformat fontsizeselect help",toolbar_mode:"wrap",content_css:"./pad.css",width:1020,branding:!1},onChange:function(e){console.log("Content was updated: ".concat(e.target.getContent())),e.target.getContent()}})}))}),ze="userFormViews/loginForm",_e="userFormViews/signupForm",De=function(){return function(e){e({type:"".concat(ze,"/toggle")})}},Le=function(){return function(e){e({type:"".concat(ze,"/spinner/hide")})}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loginForm:!1,loginSpinner:!1,signupForm:!1,signupSpinner:!1},t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"".concat(ze,"/toggle"):return Object(f.a)(Object(f.a)({},e),{},{signupForm:!1,loginForm:!e.loginForm});case"".concat(ze,"/show"):return Object(f.a)(Object(f.a)({},e),{},{signupForm:!1,loginForm:!0});case"".concat(ze,"/hide"):return Object(f.a)(Object(f.a)({},e),{},{loginForm:!1});case"".concat(ze,"/spinner/show"):return Object(f.a)(Object(f.a)({},e),{},{loginSpinner:!0});case"".concat(ze,"/spinner/hide"):return Object(f.a)(Object(f.a)({},e),{},{loginSpinner:!1});case"".concat(_e,"/toggle"):return Object(f.a)(Object(f.a)({},e),{},{loginForm:!1,signupForm:!e.signupForm});case"".concat(_e,"/show"):return Object(f.a)(Object(f.a)({},e),{},{loginForm:!1,signupForm:!0});case"".concat(_e,"/hide"):return Object(f.a)(Object(f.a)({},e),{},{signupForm:!1});case"".concat(_e,"/spinner/show"):return Object(f.a)(Object(f.a)({},e),{},{signupSpinner:!0});case"".concat(_e,"/spinner/hide"):return Object(f.a)(Object(f.a)({},e),{},{signupSpinner:!1});default:return Object(f.a)({},e)}},Te=3e3,Je={failed:{description:"Login failed. Please try again",status:"error",duration:Te,isClosable:!0},success:function(e){return{description:"logged in as ".concat(e),status:"success",duration:Te,isClosable:!0}},error:function(e){return{description:"".concat(e),status:"error",duration:Te,isClosable:!0}}},Re={success:function(e){return{description:"".concat(e," logged out"),status:"success",duration:Te,isClosable:!0}},failed:function(e){return{description:"Error logging out: ".concat(e),status:"error",duration:Te,isClosable:!0}}},Ue=n(236),Be=n(245),Ge=n(237),Me=n(238),qe=n(244),He=n(59),We=function(e){var t=e.handleLogin,n=e.username,r=e.password,a=e.showSpinner,c={size:"sm",w:200,variant:"filled",borderRadius:"xl"},o=Object(de.a)(He.c),i=Object(de.a)(He.b);return Object($.jsxs)(se.a,{as:"form",onSubmit:t,children:[Object($.jsx)(Ue.a,{as:"legend",children:"Login"}),Object($.jsxs)(Be.a,{spacing:.5,children:[Object($.jsxs)(Ge.a,Object(f.a)(Object(f.a)({},c),{},{children:[Object($.jsx)(Me.a,{pointerEvents:"none",children:Object($.jsx)(o,{})}),Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},n),c),{},{placeholder:"username"}))," ",Object($.jsx)("br",{})]})),Object($.jsxs)(Ge.a,Object(f.a)(Object(f.a)({},c),{},{children:[Object($.jsx)(Me.a,{pointerEvents:"none",children:Object($.jsx)(i,{})}),Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},r),c),{},{placeholder:"password"}))]})),Object($.jsxs)(d.a,{children:[Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},{size:"xs",bgColor:"blue.300",display:"inline"}),{},{children:"login"})),Object($.jsx)(Ke,{isVisible:a})]})]})]})},Ke=function(e){return e.isVisible?Object($.jsx)(qe.a,Object(f.a)({},{size:"sm",verticalAlign:"middle",margin:"7px"})):null},Ye=function(){var e=Object(u.b)(),t=Object(l.a)(),n=Object(u.c)((function(e){return e.userFormViews.loginForm})),r=Object(u.c)((function(e){return e.userFormViews.loginSpinner})),a=Ce("text"),c=Ce("password"),o=function(t){t.clear(),e(Le())};return Object($.jsx)($.Fragment,{children:n?Object($.jsx)(We,{handleLogin:function(n){n.preventDefault();var r=function(){var e=null;return{set:function(t,n){if(t instanceof Function){var r=setTimeout(t,n);e=r}},clear:function(){e&&(clearTimeout(e),e=null)}}}();new Promise((function(n){var o;e((function(e){e({type:"".concat(ze,"/spinner/show")})})),function(n){n.set((function(){t(Je.failed),e(Le())}),5e3)}(r),n(e((o={username:a.value,password:c.value},function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w(o),e.next=3,F.login(n);case 3:if(r=e.sent,y(r)){e.next=6;break}throw new Error("Invalid username or password");case 6:return t({type:"login/storeToken",payload:r}),t({type:"login/init",payload:r}),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())))})).then((function(n){y(n)&&(o(r),e(Z()),t(Je.success(n.name)),a.clearField(),c.clearField(),e(De()))})).catch((function(e){o(r),t(Je.error(e.message))}))},username:a,password:c,showSpinner:r}):null})},Ze=function(e){var t=e.handleSubmit;return Object($.jsx)(le.a,Object(f.a)(Object(f.a)({onClick:t},{size:"xs",fontSize:"12px",borderRadius:"6px",color:"black",bg:"red.500",_hover:{bg:"red.800",color:"white"}}),{},{children:"logout"}))},Qe=function(){var e=Object(u.b)(),t=Object(l.a)(),n=Object(u.c)((function(e){return e.login}));return 0===Object.keys(n).length?null:Object($.jsx)(Ze,{handleSubmit:function(n){n.preventDefault();try{var r,a=null===(r=C())||void 0===r?void 0:r.name;e((function(e){var t;(null===(t=C())||void 0===t?void 0:t.name)&&e({type:"login/logout",payload:{}})})),e((function(e){e({type:"".concat(ze,"/show")})})),function(e){e&&t(Re.success(e))}(a),e((function(e){e({type:"notes/clear"})}))}catch(n){t(Re.failed(n.message))}}})},Xe=function(e){var t=e.toggleVisibility;return Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},{size:"xs",bgColor:"blue.300"}),{},{onClick:function(e){e.preventDefault(),t()},children:"login"}))},$e=function(e){var t=e.toggleVisibility;return Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},{size:"xs",bgColor:"green.300"}),{},{onClick:function(e){e.preventDefault(),t()},children:"sign up"}))},et=function(e){var t=e.name;return Object($.jsxs)("p",{style:{display:"inline",marginLeft:"5px",fontFamily:'"Lato", sans-serif'},children:["logged in as ",t]})},tt=function(){var e=Object(u.c)((function(e){return e.login})),t=Object(u.b)(),n={display:"inline",fontSize:"0.9em",fontStyle:"italic",wordSpacing:"-0.1em"};return y(e)?Object($.jsxs)("div",{style:n,children:[Object($.jsx)(Qe,{}),Object($.jsx)(et,{name:e.name})]}):Object($.jsxs)("div",{style:n,children:[Object($.jsx)(Xe,{toggleVisibility:function(){t(De())}}),Object($.jsx)($e,{toggleVisibility:function(){t((function(e){e({type:"".concat(_e,"/toggle")})}))}})]})},nt=n(239),rt=n(118),at=n(119),ct=Object(de.a)(rt.a),ot=Object(de.a)(at.a),it={padding:"0",marginLeft:"0",fontSize:"14",fontFamily:'"Lato",  sans serif'},st={fontWeight:"bold"},ut={listStyleType:"none"},lt=Object($.jsx)(nt.a,{as:ct,color:"green.500"}),bt=Object($.jsx)(nt.a,{as:ot,color:"red.500"}),dt="Username must have at least ".concat(6," characters"),jt="You must have a first and a last name",pt=function(e){return/[a-zA-Z]/.test(e)},ft=function(e){return/\d/.test(e)},Ot=function(e,t){return e.length>=t},ht=function(e){if(!e)throw console.error("argument to parseSignupData is falsey"),new Error("Unexpected error. Please refresh the page");var t,n=e;if("firstName"in n&&gt(n.firstName,1)){if("lastName"in n&&gt(n.lastName,1)){if("username"in n&&gt(n.username,6)){if("password"in n&&(t=n.password,pt(t)&&ft(t)&&Ot(t,8))){if("verify"in n&&n.verify===n.password)return{username:n.username,name:n.firstName+" "+n.lastName,password:n.password};throw new Error("Passwords do not match")}throw new Error("Invalid password format")}throw new Error(dt)}throw new Error(jt)}throw new Error(jt)},gt=function(e,t){return _(e)&&Ot(e,t)},mt=function(e){var t=e.letterIsValid,n=e.numberIsValid,r=e.characterIsValid;return Object($.jsxs)(d.a,Object(f.a)(Object(f.a)({},it),{},{children:[Object($.jsx)(d.a,Object(f.a)(Object(f.a)({as:"span"},st),{},{children:"Password"})),Object($.jsxs)(nt.c,Object(f.a)(Object(f.a)({},ut),{},{children:[Object($.jsxs)(nt.b,{children:[t?lt:bt,"1 letter minimum"]}),Object($.jsxs)(nt.b,{children:[n?lt:bt,"1 number minimum"]}),Object($.jsxs)(nt.b,{children:[r?lt:bt,"8 characters minimum"]})]}))]}))},vt=function(e){var t=e.password,n=Object(r.useState)(!1),a=Object(ie.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(!1),s=Object(ie.a)(i,2),u=s[0],l=s[1],b=Object(r.useState)(!1),d=Object(ie.a)(b,2),j=d[0],p=d[1];return Object(r.useEffect)((function(){o(Ot(t,8)),l(ft(t)),p(pt(t))}),[t]),Object($.jsx)(mt,{letterIsValid:j,numberIsValid:u,characterIsValid:c})},xt=function(e){var t=e.characterIsValid,n=e.usernameAvailable;return Object($.jsxs)(d.a,Object(f.a)(Object(f.a)({},it),{},{children:[Object($.jsx)(d.a,Object(f.a)(Object(f.a)({as:"span"},st),{},{children:"Username"})),Object($.jsxs)(nt.c,Object(f.a)(Object(f.a)({},ut),{},{children:[Object($.jsxs)(nt.b,{children:[t?lt:bt,"6 characters minimum"]}),Object($.jsxs)(nt.b,{children:[n?lt:bt,"checked"]})]}))]}))},wt=function(e){var t=e.username,n=Object(r.useState)(!1),a=Object(ie.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(!1),s=Object(ie.a)(i,2),l=s[0],b=s[1],d=Object(u.c)((function(e){return e.signup}));return Object(r.useEffect)((function(){o(Ot(t,6)),b(d.includes(t.toLowerCase()))}),[t,d]),Object($.jsx)(xt,{characterIsValid:c,usernameAvailable:l})},yt=function(e){var t=e.password,n=e.username,r=e.gridArea;return Object($.jsxs)(d.a,{gridArea:r,children:[Object($.jsx)(wt,{username:n}),Object($.jsx)(vt,{password:t})]})},kt="/api/users",St={signup:function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post(kt,t);case 3:if(n=e.sent,r=n.data,y(r)){e.next=7;break}throw new Error("Failed to create account. Please try again");case 7:return e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(null===(a=e.t0.response)||void 0===a?void 0:a.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),checkUsernameAvailable:function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(kt,"/").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Username available checking error with backend: ".concat(null===(a=e.t0.response)||void 0===a?void 0:a.data.error));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Ft=function(){var e=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,St.checkUsernameAvailable(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"signup/username/save":return D(r)?[].concat(Object(m.a)(e),[r]):Object(m.a)(e);default:return Object(m.a)(e)}},Et=3e3,Nt={failed:function(e){return{description:e,status:"error",duration:Et,isClosable:!0}},success:{description:"Account successfully created",status:"success",duration:Et,isClosable:!0},available:function(e){return{description:"username ".concat(e," is available"),status:"success",duration:Et,isClosable:!0}}},It=function(e){var t=e.username,n=Object(u.b)(),r=Object(l.a)();return Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},{fontSize:"12px",height:"24px",alignSelf:"center",color:"white",width:"min-content",marginLeft:"6px",backgroundColor:"red.700",_hover:{bg:"red.500",cursor:"pointer"},_focus:{bg:"blue"}}),{},{as:"div",onClick:function(e){e.preventDefault();var a=t.toLowerCase();new Promise((function(e){if(t.length<6)throw new Error(dt);e(n(function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n,r){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.toLowerCase(),!(c=r().signup)||!c.includes(a)){t.next=6;break}return t.abrupt("return",!0);case 6:return t.next=8,Ft(a);case 8:if(!t.sent){t.next=14;break}return n({type:"signup/username/save",payload:e}),t.abrupt("return",!0);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(a)))})).then((function(e){"boolean"===typeof e&&r(e?Nt.available(t):Nt.failed("username ".concat(t," is already taken")))})).catch((function(e){r(Nt.failed(e.message)),console.log("failed checking availability: ".concat(e.message))}))},children:"check"}))},At=Object(de.a)(He.c),Vt=Object(de.a)(He.b),zt=Object(de.a)(He.a),_t=function(e){var t=e.firstName,n=e.lastName,r=e.username,a=e.password,c=e.verify,o=e.spinnerVisible,i=e.handleSignup,s={size:"sm",w:"100%",variant:"filled"},u={size:"xs",textColor:"white",bgColor:"blue.700",width:"min-content",_hover:{bg:"blue.400"},justifySelf:"right",marginRight:"10px",display:"inline",type:"submit"},l=o?Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},u),{},{gridArea:"submit",isLoading:!0,onSubmit:i,children:"sign up"})):Object($.jsx)(le.a,Object(f.a)(Object(f.a)({},u),{},{gridArea:"submit",onSubmit:i,children:"sign up"}));return Object($.jsx)(se.a,{as:"form",onSubmit:i,children:Object($.jsxs)(ae.a,Object(f.a)(Object(f.a)({},{templateColumns:"1fr 1fr",templateAreas:"'firstName lastName'\n            'username username'\n            'password verify'\n            'tooltips submit'",width:400,columnGap:"5px",rowGap:"7px"}),{},{children:[Object($.jsxs)(Ge.a,Object(f.a)(Object(f.a)({},s),{},{gridArea:"firstName",children:[Object($.jsx)(Me.a,{pointerEvents:"none",children:Object($.jsx)(zt,{})}),Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},t),s),{},{maxlength:20,placeholder:"first name"}))]})),Object($.jsx)(Ge.a,Object(f.a)(Object(f.a)({},s),{},{gridArea:"lastName",children:Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},n),s),{},{maxlength:20,placeholder:"last name"}))})),Object($.jsxs)(Ge.a,Object(f.a)(Object(f.a)({},s),{},{gridArea:"username",children:[Object($.jsx)(Me.a,{pointerEvents:"none",children:Object($.jsx)(At,{})}),Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},r),s),{},{maxlength:24,placeholder:"username"})),Object($.jsx)(It,{username:r.value})]})),Object($.jsxs)(Ge.a,Object(f.a)(Object(f.a)({},s),{},{gridArea:"password",children:[Object($.jsx)(Me.a,{pointerEvents:"none",children:Object($.jsx)(Vt,{})}),Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},a),s),{},{maxlength:18,placeholder:"password"}))]})),Object($.jsx)(Ge.a,Object(f.a)(Object(f.a)({},s),{},{gridArea:"verify",children:Object($.jsx)(Ee.a,Object(f.a)(Object(f.a)(Object(f.a)({},c),s),{},{placeholder:"verify"}))})),Object($.jsx)(yt,{username:r.value,password:a.value,gridArea:"tooltips"}),l]}))})},Dt=function(){var e=Object(u.c)((function(e){return e.userFormViews.signupForm})),t=Object(u.c)((function(e){return e.userFormViews.signupSpinner})),n=Object(u.b)(),r=Object(l.a)(),a=Ce("text"),c=Ce("text"),o=Ce("text"),i=Ce("password"),s=Ce("password");return e?Object($.jsx)(_t,{username:a,firstName:c,lastName:o,password:i,verify:s,handleSignup:function(e){e.preventDefault(),new Promise((function(e){var t;n((function(e){e({type:"".concat(_e,"/spinner/show")})})),e(n((t={username:a.value,firstName:c.value,lastName:o.value,password:i.value,verify:s.value},function(){var e=Object(g.a)(h.a.mark((function e(n){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ht(t),e.next=3,St.signup(r);case 3:return a=e.sent,n({type:"login/storeToken",payload:a}),n({type:"login/init",payload:a}),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())))})).then((function(e){y(e)&&(r(Je.success(e.name)),a.clearField(),c.clearField(),o.clearField(),i.clearField(),s.clearField(),n((function(e){e({type:"".concat(_e,"/hide")})})))})).catch((function(e){console.error("Failed to create user: ".concat(e.message)),r(Nt.failed("Failed to create user"))})).finally((function(){n((function(e){e({type:"".concat(_e,"/spinner/hide")})}))}))},spinnerVisible:t}):null};var Lt=function(){var e=Object(u.b)(),t=Object(l.a)();return Object(r.useEffect)((function(){try{e(Z()),e((function(e){var t=C();t&&e({type:"login/init",payload:t})}))}catch(n){console.error("Network error during notes initialization"),t(p.failedGet)}}),[e]),Object($.jsx)(b.a,{children:Object($.jsx)(i.a,{children:Object($.jsxs)(d.a,{children:[Object($.jsx)(ee,{}),Object($.jsx)(tt,{}),Object($.jsxs)(s.c,{children:[Object($.jsxs)(s.a,{path:"/notes",children:[Object($.jsx)(Fe,{}),Object($.jsx)(Ie,{})]}),Object($.jsx)(s.a,{path:"/pad",children:Object($.jsx)(Ve,{})}),Object($.jsx)(s.a,{path:"/",children:Object($.jsx)(te,{})})]})," ",Object($.jsx)("br",{}),Object($.jsx)(Ye,{}),Object($.jsx)(Dt,{})]})})})},Pt=n(62),Tt=n(120),Jt=Object(Pt.c)({notes:Q,login:E,signup:Ct,userFormViews:Pe,noteActionViews:Oe}),Rt=Object(Pt.d)(Jt,Object(Pt.a)(Tt.a));n(211);o.a.render(Object($.jsx)(u.a,{store:Rt,children:Object($.jsx)(Lt,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.093fabda.chunk.js.map