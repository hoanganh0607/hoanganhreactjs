(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(2),r=n.n(i),l=(n(13),n(3)),u=n(4),c=n(6),o=n(5),m=n(7);n(14);var d=function(e){var t=e.currentQuestion/e.totalQuestion*100,n=e.currentQuestion+1;return a.a.createElement("div",{className:"Header"},a.a.createElement("div",{className:"LeftSide"},a.a.createElement("div",{className:"ProgressBar",style:{width:350*t/100}},a.a.createElement("span",{className:"Percent"},t,"%"))),a.a.createElement("div",{className:"RightSide"},a.a.createElement("div",{className:"CurrentQuestion"},n,"/",e.totalQuestion)))};var h=function(e){var t=e.quizzes[e.currentQuestion];return a.a.createElement("main",null,a.a.createElement("div",{className:"Body",style:{display:e.displayQuestion}},a.a.createElement("div",{className:"Question"},t.question),a.a.createElement("div",{className:"PossibleAnwsers"},t.answers.map((function(n,s){return a.a.createElement("div",{className:"Anwser",key:s,onClick:function(){!function(e,t){e==t?alert("chinh xac"):alert("Khong chinh xac")}(n,t.answerTrue)}},a.a.createElement("div",{className:"AnwserIndex"},s),a.a.createElement("div",{className:"AnwserContent"},n),a.a.createElement("div",{className:"True",style:{display:e.displayAnswerTrue}},"\u0110\xfang"),a.a.createElement("div",{className:"False",style:{display:e.displayAnswerFalse}},"Sai"))})))),a.a.createElement("div",{className:"Footer"},a.a.createElement("button",{className:"Button ButtonSmall btn btn-secondary",onClick:e.nextQuestion},"Next Question"),a.a.createElement("button",{className:"Button ButtonSmall btn btn-secondary",style:{display:e.displayResult},onClick:e.result},"Ho\xe0n th\xe0nh")),a.a.createElement("div",{className:"result",style:{display:e.displayResult}},a.a.createElement("div",{className:"resultPlay"},"Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh ph\u1ea7n ch\u01a1i")))},y=10,p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).nextQuestion=function(){n.state.currentQuestion<=n.state.quizzes.length-1&&n.setState((function(e){return{currentQuestion:e.currentQuestion+1}}))},n.result=function(){n.state.currentQuestion==n.state.quizzes.length&&n.setState((function(e){return{displayResult:"block"}}))},n.state={quizzes:[{question:"Con ch\xf3 \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1","2","3","4"],answerTrue:"4"},{question:"Con m\xe8o \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1","2","3","4"],answerTrue:"4"},{question:"Con l\u1ee3n \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1","2","3","4"],answerTrue:"4"},{question:"Con voi \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1","2","3","4"],answerTrue:"4"},{question:"Con c\xe1 s\u1ea5u \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1","2","3","4"],answerTrue:"4"},{}],timeLeft:y,currentQuestion:0,displayAnswerTrue:"none",displayAnswerFalse:"none",displayQuestion:"block",displayResult:"none"},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App container-fluid"},a.a.createElement("div",{className:"Box"},a.a.createElement(d,{totalQuestion:this.state.quizzes.length,currentQuestion:this.state.currentQuestion}),a.a.createElement(h,{quizzes:this.state.quizzes,currentQuestion:this.state.currentQuestion,nextQuestion:this.nextQuestion,displayQuestion:this.state.displayQuestion,displayAnswerTrue:this.state.displayAnswerTrue,displayAnswerFalse:this.state.displayAnswerFalse,selectTrue:this.selectTrue,displayResult:this.state.displayResult,result:this.result})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5a06d28d.chunk.js.map