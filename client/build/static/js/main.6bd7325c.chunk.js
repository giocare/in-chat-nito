(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},43:function(e,t,n){e.exports=n(87)},50:function(e,t,n){},83:function(e,t){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(8),r=n.n(o),c=n(24),i=n(9),u=n.n(i),l=n(23),m=n(3),h=n(4),f=n(6),d=n(5),g=n(7),v=(n(10),n(50),function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("h3",{className:"title"},"IN CHAT NITO"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-5 image-container"}),s.a.createElement("div",{className:"col-xs-7 form-container"},s.a.createElement("form",{onSubmit:e.getUsername},s.a.createElement("h4",null,"Login"),s.a.createElement("input",{id:"login_input",type:"text",name:"name",className:"login-button",placeholder:"ENTER USERNAME"}),s.a.createElement("button",{type:"submit",id:"getData",className:"btn"},"Submit"),s.a.createElement("p",{id:"login_error"})),s.a.createElement("form",{className:"SignUponSubmit",onSubmit:e.createUsername},s.a.createElement("h4",null,"Sign Up"),s.a.createElement("input",{id:"login_input",type:"text",name:"new_username",className:"login-button",placeholder:"ENTER NEW USERNAME"}),s.a.createElement("button",{id:"getData",className:"SignUpbtn"},"Submit"),s.a.createElement("p",{id:"signup_error"})))))}),p=n(40),E=n.n(p);var b=function(e){return s.a.createElement("div",{class:"course-title"},s.a.createElement("h4",null,"Here are the courses you are enrolled in: "),s.a.createElement("div",{className:"courses_sec"},e.courses.map(function(t){return s.a.createElement(E.a,{className:"courses_btn",onClick:function(){e.switchToChat(),e.handleRoomClick(t.courseID)},key:t.courseID},t.courseName)})))},S=function(e){return s.a.createElement("form",{onSubmit:e.logOut},s.a.createElement("button",{id:"log-btn"},"Logout"))},N=function(e){return s.a.createElement("div",{className:"navbtn"},s.a.createElement("form",null,s.a.createElement("button",{className:"navbtn",onClick:e.backToCourses},"Courses"),s.a.createElement("button",{className:"navbtn",onClick:e.logOut},"Logout")))},k=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).state={text:""},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={from:this.props.name,text:this.state.text};this.props.onMessageSubmit(t),this.setState({text:""})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"MessageForm",onSubmit:function(t){return e.handleSubmit(t)}},s.a.createElement("input",{className:"MessageInput",onChange:function(t){return e.handleChange(t)},value:this.state.text,placeholder:"Message"}))}}]),t}(a.Component),C=n(41),O=function(e){return s.a.createElement("div",{className:"Message"+(e.from===e.name?" MessageRight":"")},s.a.createElement("strong",null,e.last===e.from?"":e.from===e.name?"You":e.from),s.a.createElement("span",{className:"Cloud"+(e.from===e.name?" CloudRight":"")},e.text))},y=function(e){function t(e){return Object(m.a)(this,t),Object(f.a)(this,Object(d.a)(t).call(this,e))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"loadMessages",value:function(){C.Socket.emit("load messages")}},{key:"componentWillUpdate",value:function(){var e=r.a.findDOMNode(this);this.shouldScrollBottom=e.scrollTop+e.offsetHeight===e.scrollHeight}},{key:"componentDidUpdate",value:function(){if(this.shouldScrollBottom){var e=r.a.findDOMNode(this);e.scrollTop=e.scrollHeight}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"MessageList"},this.props.messages.map(function(t,n){return s.a.createElement(O,{key:n,from:t.from,text:t.text,name:e.props.name,last:n>0?e.props.messages[n-1].from:""})}))}}]),t}(s.a.Component);var w=n(42),T=n.n(w)()("/"),j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).handleRoomClick=function(e){var t=e;n.setState({room:t}),console.log("room "+n.state.room+" was clicked"),fetch("/cookies/".concat(t),{method:"POST",header:t}).then(function(e){return console.log(e.status)})},n.getUsername=function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.elements.name.value,console.log(a),fetch("/login/".concat(a),{method:"GET",header:a}).then(function(e){if(console.log(e.status),404===e.status){document.getElementById("login_error").innerHTML="No user found."}200===e.status&&(n.setState({name:a}),n.handleUserSubmit(a),fetch("/courses",{method:"POST"}).then(function(e){return e.json()}).then(function(e){return n.setState({courses:e})}).then(function(e){return console.log(n.state.courses)}))});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.createUsername=function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.elements.new_username.value,console.log(a),fetch("/signup/".concat(a),{method:"GET",header:a}).then(function(e){if(console.log(e.status),404===e.status){document.getElementById("signup_error").innerHTML="Username already exists."}if(200===e.status){fetch("/courses",{method:"POST"}).then(function(e){return e.json()}).then(function(e){return n.setState({courses:e})}).then(function(e){return console.log(n.state.courses)}),n.setState({name:a}),n.handleUserSubmit(a)}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.logOut=function(e){e.preventDefault(),fetch("/logout",{method:"POST"}).then(function(e){n.setState({name:void 0,activeChat:!1})}).then(function(e){T.on("disconnect",function(){n.setState({users:[],activeChat:!1,courses:[],messages:[],text:"",name:void 0})})})},n.backToCourses=function(e){n.setState({activeChat:!1}),fetch("/cookies/chatroom",{method:"DELETE",header:"chatroom"}).then(function(e){return console.log(e.status)})},n.switchToChat=function(e){n.setState({activeChat:!0})},n.state={name:void 0,activeChat:!1,users:[],courses:[],messages:[],text:"",room:""},n.onDisconnectStatus="",n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this;void 0===this.state.name&&fetch("/cookies",{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(console.log(t),console.log(t.username),void 0===t.username){console.log("No user found"),document.getElementById("login_error").innerHTML="No user found"}else void 0!=t.username&&null!=t.chatroom?(e.setState({name:t.username,room:t.chatroom,activeChat:!0}),T.emit("join room",e.state.room)):void 0!=t.username&&null==t.chatroom&&e.setState({name:t.username,activeChat:!1})}),fetch("/courses",{method:"POST"}).then(function(e){return e.json()}).then(function(t){return e.setState({courses:t})}).then(function(t){return console.log(e.state.courses)})}},{key:"componentDidMount",value:function(){var e=this;T.on("message",function(t){return e.messageReceive(t)}),T.on("update",function(t){var n=t.users;return e.chatUpdate(n)})}},{key:"messageReceive",value:function(e){var t=[].concat(Object(c.a)(this.state.messages),[e]);this.setState({messages:t})}},{key:"chatUpdate",value:function(e){this.setState({users:e})}},{key:"handleUserSubmit",value:function(e){e&&(this.setState({name:e}),T.emit("join",e))}},{key:"handleMessageSubmit",value:function(e){if(e.text){var t=[].concat(Object(c.a)(this.state.messages),[e]);this.setState({messages:t}),T.emit("message",e)}}},{key:"renderHomePage",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(v,{getUsername:this.getUsername,createUsername:this.createUsername}))}},{key:"renderChat",value:function(){var e=this;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"title"},s.a.createElement("h4",null,"Chat Page "),s.a.createElement("h2",null,"Room ",this.state.room)),s.a.createElement("div",{className:"col-xs-5 image-container"},s.a.createElement(N,{logOut:this.logOut,backToCourses:this.backToCourses})),s.a.createElement("div",{className:"col-xs-7 form-container-nav"},s.a.createElement("div",{className:"MessageWrapper"},s.a.createElement(y,{messages:this.state.messages,name:this.state.name,last:this.state.messages[this.state.messages.length-2]}),s.a.createElement(k,{onMessageSubmit:function(t){return e.handleMessageSubmit(t)},name:this.state.name}))))))}},{key:"renderCoursePage",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(S,{logOut:this.logOut}),s.a.createElement(b,{switchToChat:this.switchToChat,courses:this.state.courses,handleRoomClick:this.handleRoomClick}))}},{key:"render",value:function(){return void 0===this.state.name&&!1===this.state.activeChat?this.renderHomePage():void 0!==this.state.name&&!1===this.state.activeChat?this.renderCoursePage():this.renderChat()}}]),t}(s.a.Component);n(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.6bd7325c.chunk.js.map