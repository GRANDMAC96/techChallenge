(this.webpackJsonpfootyball=this.webpackJsonpfootyball||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),u=(a(36),a(16)),m=a(2),o=function(e){var t=e.text;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"h1"},t)))},i=a(7),E=a(24),s=a(25),p=a(11),y=a(30),b=a(29),h=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handlePlayer=n.handlePlayer.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleCreate=n.handleCreate.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handlePlayer",value:function(e){this.props.setPlayerName(e.currentTarget.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleAddition(this.props.playername)}},{key:"handleCreate",value:function(e){e.preventDefault(),this.props.handleTeam(this.props.playerlist)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form"},l.a.createElement("div",null,l.a.createElement("label",null,"Player Name"),l.a.createElement("input",{type:"name",placeholder:"Enter name",value:this.props.playername,onChange:this.handlePlayer}))),l.a.createElement("button",{onClick:this.handleSubmit,className:"btn btn-danger button"},"Add Player"),l.a.createElement("button",{onClick:this.handleCreate,className:"btn btn-danger button"},l.a.createElement(u.b,{to:"/teampage",className:"button"},"Create Team")))}}]),a}(n.Component),d=Object(i.b)((function(e){return{playername:e.playername,playerlist:e.playerlist}}),(function(e){return{setPlayerName:function(t){e(function(e){return{type:"CHANGENAME",playername:e}}(t))},handleAddition:function(t){e({type:"ADDPLAYER",playername:t})},handleTeam:function(t){e(function(e){return{type:"CREATETEAM",players:e}}(t))}}}))(h),f=a(12),O=function(e){var t=e.playerlist;e.playername;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.playername))})))))},A=Object(i.b)((function(e){return{playerlist:e.playerlist}}))(O),j=function(e){var t=e.teamA,a=e.teamB;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Team A"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.playername))}))),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Team B"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.playername))})))))},v=Object(i.b)((function(e){return{teamA:e.teamA,teamB:e.teamB}}))(j),T=function(e){var t=e.resetTeams;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-danger button",onClick:t},"Reset"))},g=Object(i.b)(null,(function(e){return{resetTeams:function(){return e({type:"RESETTEAMS"})}}}))(T),N=function(){return l.a.createElement(u.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(o,{text:"Select Your Team"}),l.a.createElement(d,null),l.a.createElement(A,null),l.a.createElement(g,null)),l.a.createElement(m.a,{exact:!0,path:"/teampage"},l.a.createElement(o,{text:"Teams"}),l.a.createElement(v,null))))},C=(a(42),a(10)),k=a(28),S=a(8),P={playername:"",playerlist:[],teamA:[],teamB:[]},M=function(e,t){var a=function(e){for(var t=e.length-1;t>0;t-=1){var a=Math.floor((t+1)*Math.random()),n=e[t];e[t]=e[a],e[a]=n}return e}(e.playerlist),n=a.slice(0,a.length/2),l=a.slice(a.length/2);return Object(S.a)(Object(S.a)({},e),{},{teamA:n,teamB:l})},B=function(e,t){switch(t.type){case"CHANGENAME":return function(e,t){return Object(S.a)(Object(S.a)({},e),{},{playername:t.playername})}(e,t);case"ADDPLAYER":return function(e,t){return Object(S.a)(Object(S.a)({},e),{},{playerlist:[].concat(Object(k.a)(e.playerlist),[{playername:t.playername}]),playername:""})}(e,t);case"CREATETEAM":return M(e);case"RESETTEAMS":return function(e){return Object(S.a)(Object(S.a)({},e),{},{playername:"",playerlist:[],teamA:[],teamB:[]})}(e);default:return e}},D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.c,R=Object(C.d)(B,P,D(Object(C.a)()));c.a.render(l.a.createElement(i.a,{store:R},l.a.createElement(N,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d0cc2472.chunk.js.map