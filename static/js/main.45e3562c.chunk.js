(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),l=n(3),r=n.n(l),i=(n(14),n(1)),o=n(4),c=n(5),u=n(7),d=n(6),h=n(8);n(15);var y=function(e){var t=e.currentQuestion/e.totalQuestion*100,n=e.currentQuestion+1;return a.a.createElement("div",{className:"Header"},a.a.createElement("div",{className:"LeftSide"},a.a.createElement("div",{className:"ProgressBar",style:{width:350*(t+e.progressBar)/100}},a.a.createElement("span",{className:"Percent"},"Ti\u1ebfn \u0111\u1ed9: ",t+e.progressBar,"%"))),a.a.createElement("div",{className:"RightSide"},a.a.createElement("div",{className:"CurrentQuestion"},n,"/",e.totalQuestion)))};var p=function(e){var t=e.quizzes[e.currentQuestion];return a.a.createElement("main",null,a.a.createElement("div",{className:"Body",style:{display:e.displayQuestion}},a.a.createElement("div",{className:"Question"},t.question),a.a.createElement("div",{className:"PossibleAnwsers"},t.answers.map((function(n,s){return a.a.createElement("div",{className:e.userSelectClass[s],key:s,onClick:function(){e.selectQuestion(s,n,t.answerTrue)}},a.a.createElement("div",{className:"AnswerIndex"},s),a.a.createElement("div",{className:"AnswerContent"},n),a.a.createElement("div",{className:"WrongAnswer",style:{display:e.displayWrongAnswer[s]}},"Kh\xf4ng ch\xednh x\xe1c, \u0111\xe1p \xe1n \u0111\xfang l\xe0: ",t.answerTrue))})))),a.a.createElement("div",{className:"Footer"},a.a.createElement("button",{className:"Button ButtonSmall btn btn-secondary btn-new score",style:{display:e.displayQuestionButton},onClick:e.nextQuestion},"C\xe2u h\u1ecfi ti\u1ebfp theo"),a.a.createElement("div",{className:"score",style:{display:e.displayScore}},"S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi \u0111\xfang: ",e.score),a.a.createElement("button",{className:"Button ButtonSmall btn btn-secondary btn-new score",style:{display:e.displayResultButton},onClick:e.result},"Ho\xe0n th\xe0nh")),a.a.createElement("div",{className:"result",style:{display:e.displayResult}},a.a.createElement("div",{className:"resultPlay"},"Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh ph\u1ea7n ch\u01a1i"),a.a.createElement("div",null,"S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi \u0111\xfang c\u1ee7a b\u1ea1n l\xe0: ",e.score),a.a.createElement("div",{className:"playReload",style:{display:e.playReload},onClick:e.playReloadButton},"Ch\u01a1i l\u1ea1i")))},m=10,w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).selectQuestion=function(e,t,s){if(!n.state.isSelectAnswer){var a=n.state.score,l=n.state.userSelectClass.map((function(l,r){return r===e&&t===s&&(l="Answer true",n.setState({score:a+1})),r===e&&t!==s&&(l="Answer false",n.setState({displayWrongAnswer:"block"})),l})),r=n.state.displayWrongAnswer.map((function(n,a){return a===e&&t!==s&&(n="inline-block"),n}));n.setState({displayWrongAnswer:r,userSelectClass:l,isSelectAnswer:!0})}},n.nextQuestion=function(){n.state.currentQuestion<n.state.quizzes.length-1&&(console.log(n.progressBar),n.setState({userSelectClass:["Answer","Answer","Answer","Answer","Answer"],displayWrongAnswer:["none","none","none","none","none"],currentQuestion:n.state.currentQuestion+1,isSelectAnswer:!1})),n.state.currentQuestion+1===n.state.quizzes.length&&n.setState((function(e){return{displayQuestionButton:"none",displayResultButton:"block",progressBar:100-(e.quizzes.length-1)/e.quizzes.length*100}}))},n.result=function(){n.setState({displayResult:"block",displayQuestion:"none",displayScore:"none",displayResultButton:"none",displayPlayReload:"inline-block"})},n.playReloadButton=function(){window.location.reload()},n.state={quizzes:[{question:"Con ch\xf3 \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1 ch\xe2n","2 ch\xe2n","3 ch\xe2n","4 ch\xe2n"],answerTrue:"4 ch\xe2n"},{question:"Con m\xe8o \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1 ch\xe2n","2 ch\xe2n","3 ch\xe2n","4 ch\xe2n"],answerTrue:"4 ch\xe2n"},{question:"Con ng\u01b0\u1eddi \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1 ch\xe2n","2 ch\xe2n","3 ch\xe2n","4 ch\xe2n"],answerTrue:"2 ch\xe2n"},{question:"Con chim c\xe1nh c\u1ee5t \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1 ch\xe2n","2 ch\xe2n","3 ch\xe2n","4 ch\xe2n"],answerTrue:"2 ch\xe2n"},{question:"Con c\xe1 s\u1ea5u \u0111i b\u1eb1ng m\u1ea5y ch\xe2n?",answers:["1 ch\xe2n","2 ch\xe2n","3 ch\xe2n","4 ch\xe2n"],answerTrue:"4 ch\xe2n"}],timeLeft:m,currentQuestion:0,userSelectClass:["Answer","Answer","Answer","Answer","Answer"],isSelectAnswer:!1,progressBar:0,displayQuestion:"block",displayResultButton:"none",displayQuestionButton:"block",displayResult:"none",displayScore:"inline-block",displayPlayReload:"none",displayWrongAnswer:["none","none","none","none","none"],score:0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return a.a.createElement("div",{className:"App container-fluid"},a.a.createElement("div",{className:"Box"},a.a.createElement(y,{totalQuestion:this.state.quizzes.length,currentQuestion:this.state.currentQuestion,progressBar:this.state.progressBar}),a.a.createElement(p,(e={totalQuestion:this.state.quizzes.length,quizzes:this.state.quizzes,currentQuestion:this.state.currentQuestion,userSelectClass:this,nextQuestion:this.nextQuestion,displayQuestion:this.state.displayQuestion,displayResult:this.state.displayResult,result:this.result,displayQuestionButton:this.state.displayQuestionButton,displayResultButton:this.state.displayResultButton,score:this.state.score,displayScore:this.state.displayScore,selectQuestion:this.selectQuestion},Object(i.a)(e,"userSelectClass",this.state.userSelectClass),Object(i.a)(e,"playReload",this.state.displayPlayReload),Object(i.a)(e,"playReloadButton",this.playReloadButton),Object(i.a)(e,"displayWrongAnswer",this.state.displayWrongAnswer),e))))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.45e3562c.chunk.js.map