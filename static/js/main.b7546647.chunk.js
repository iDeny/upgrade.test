(this["webpackJsonpupgrade.todolist"]=this["webpackJsonpupgrade.todolist"]||[]).push([[0],{40:function(e,t,n){},46:function(e,t,n){e.exports=n(60)},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=n(25),s=n(18),l=n(33),d=n(41),u=n(22),p={placeholder:"Add a task",todos:[],taskInput:""},h=n(30),f=n.n(h),v=n(34),m=new(n(35).a)("TodoDB");m.version(1).stores({todos:"++"});var g=m,k=(n(59),n(83)),b=n(84),w=n(81);var E=function(e){var t=e.onCheckboxChange,n=e.todos;return o.a.createElement(k.a,{className:"task-list"},n.map((function(e){return o.a.createElement("div",{className:"task-list_item",key:e.id},o.a.createElement(b.a,{control:o.a.createElement(w.a,{checked:e.completed,onChange:t,name:"".concat(e.id)}),label:e.text}))})))},y=n(40),A=n.n(y),C=n(85),T=n(79),O=n(82),I=n(80);var N=function(e){var t=e.taskInput,n=e.placeholder,a=e.onChange,r=e.onAdd;return o.a.createElement("div",{className:A.a.newTask},o.a.createElement(C.a,{required:!0},o.a.createElement(T.a,{row:!0},o.a.createElement(O.a,{required:!0,id:"outlined-basic",size:"small",variant:"outlined",placeholder:n,value:t,onChange:a}),o.a.createElement(I.a,{variant:"contained",color:"primary",onClick:r},"Add"))))},j={toggleCompleteInDb:function(e){var t=e.target.name;return function(){var e=Object(v.a)(f.a.mark((function e(n){var a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=+t,e.next=3,g.todos.get(a,(function(e){o=e.completed}));case 3:g.todos.update(a,{completed:!o}).then((function(e){return g.todos.toArray().then((function(e){return n({type:"TOGGLE_COMPLETE",payload:e})}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},changeInput:function(e){return{type:"CHANGE_INPUT",payload:e}},addTaskToDb:function(e,t){return function(n){var a={id:e,text:t,completed:!1};g.table("todos").add(a,e).then((function(e){return n({type:"ADD_TASK",payload:Object.assign({},a,{id:e})})}))}}};var D=Object(i.b)((function(e){return{placeholder:e.placeholder,taskInput:e.taskInput,todos:e.todos}}),j)((function(e){var t=e.toggleCompleteInDb,n=e.changeInput,a=e.addTaskToDb,r=e.placeholder,c=e.taskInput,i=e.todos;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"todo"},o.a.createElement("div",{className:"todo_new-task"},o.a.createElement(N,{taskInput:c,placeholder:r,onChange:n,onAdd:function(){return a(i.length,c)}})),o.a.createElement("div",{className:"todo_task-list"},o.a.createElement(E,{onCheckboxChange:t,todos:i}))))})),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TASKS":return Object(u.a)({},e,{todos:t.payload});case"ADD_TASK":var n=t.payload,a=n.id,o=n.text;return Object(u.a)({},e,{todos:[].concat(Object(d.a)(e.todos),[{id:a,text:o,completed:!1}]),taskInput:""});case"CHANGE_INPUT":var r=t.payload.target.value;return Object(u.a)({},e,{taskInput:r});case"TOGGLE_COMPLETE":return Object(u.a)({},e,{todos:t.payload});default:return e}}),Object(s.a)(l.a));S.dispatch((function(e){g.table("todos").toArray().then((function(t){return e({type:"LOAD_TASKS",payload:t})}))})),c.a.render(o.a.createElement(i.a,{store:S},o.a.createElement(D,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/upgrade.test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/upgrade.test","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.b7546647.chunk.js.map