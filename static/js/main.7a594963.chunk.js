(this.webpackJsonpwebinv=this.webpackJsonpwebinv||[]).push([[0],{23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),c=a(17),r=a.n(c),i=(a(23),a(4)),o=a(5),d=a(7),l=a(6),u=a(18),j=a.n(u),m=a(1),h=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).openBtnRef=s.a.createRef(),n.waitTxtRef=s.a.createRef(),n.state={recipient:""},n}return Object(o.a)(a,[{key:"getParameterByName",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,a=new RegExp("[?&]untuk(=([^&#]*)|&|#|$)"),n=null!==(e=a.exec(t))&&void 0!==e?e:["?untuk=Guest","=Guest","Guest"];if(!n)return null;if(!n[2])return"";var s=decodeURIComponent(n[2].replace(/\+/g," "));this.setState({recipient:"Dear ".concat(s,",")})}},{key:"playMusic",value:function(){document.getElementById("audio").play();var e=document.getElementById("popUp");e.removeAttribute("data-aos"),e.classList.remove("fadeInDown"),e.style.display="none",document.getElementById("wrapper").style.display="block",document.body.style.overflowY="auto",j.a.init()}},{key:"componentDidMount",value:function(){var e=this;this.getParameterByName(),window.addEventListener("load",(function(){e.openBtnRef.current.style.display="inline-block",e.waitTxtRef.current.style.display="none"}))}},{key:"render",value:function(){return Object(m.jsxs)("section",{id:"popUp",className:"popup overlay-dark fadeInDown",children:[Object(m.jsx)("h2",{id:"headerText",className:"section-title text-center",children:this.state.recipient}),Object(m.jsx)("p",{children:"You are invited"}),Object(m.jsx)("p",{ref:this.waitTxtRef,children:Object(m.jsx)("i",{children:"Please wait..."})}),Object(m.jsx)("a",{ref:this.openBtnRef,onClick:this.playMusic,style:{textDecoration:"none"},children:"Open Invitation"})]})}}]),a}(s.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"header overlay-dark white-text",style:{backgroundImage:"url('./res/header.jpeg')"},children:[Object(m.jsx)("div",{className:"lead","data-aos":"fade-down","data-aos-duration":"1500",children:"The Wedding Of"}),Object(m.jsx)("h1",{"data-aos":"zoom-in","data-aos-duration":"1500",children:"Silvy & Febiana"}),Object(m.jsx)("div",{className:"lead","data-aos":"fade-up","data-aos-duration":"1500",children:"#WeAreMarried!"}),Object(m.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1900",children:"21 . 08 . 2021"})]})}}]),a}(n.Component),p=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"meet",style:{backgroundImage:"url('./res/meet.jpeg')"},children:[Object(m.jsx)("h2",{className:"text-center section-title","data-aos":"fade-down","data-aos-duration":"1500",children:"Our Story Started With"}),Object(m.jsx)("p",{className:"text-center","data-aos":"fade-down","data-aos-duration":"1500",children:'"Kamu bendahara 1 juga ya?"'}),Object(m.jsxs)("article",{"data-aos":"fade-left","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/treasurer.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:"Treasurer"}),Object(m.jsx)("p",{children:"Our story begins when we first met as treasurers in a student organization when we were still in high school."})]})]}),Object(m.jsxs)("article",{"data-aos":"fade-right","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/backstreet.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:"Backstreet"}),Object(m.jsx)("p",{children:"We continue to communicate until we feel comfortable and harbor feelings for each other and keep it hidden."})]})]}),Object(m.jsxs)("article",{"data-aos":"fade-left","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/gf.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:'"Would you like to be my girlfriend?"'}),Object(m.jsx)("p",{children:"At the time of high school graduation, Febiana ventured to express his feelings by saying: \"Viw, let's date!\" and Silvy accepted Febiana's feelings."})]})]}),Object(m.jsxs)("article",{"data-aos":"fade-right","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/propose.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:'"I have talked to your parents that i will propose you"'}),Object(m.jsx)("p",{children:"5 years of long distance relationship have passed, Febiana decides and tells silvy's parents that he will propose silvy in december and tells silvy that he has spoken to her parents to propose to her."})]})]})]})}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"married",style:{backgroundImage:"url('./res/married.jpeg')"},children:[Object(m.jsx)("h2",{className:"section-title text-center","data-aos":"fade-down","data-aos-duration":"1500",children:"We Are Getting Married"}),Object(m.jsxs)("p",{className:"text-center","data-aos":"fade-down","data-aos-duration":"1500",children:[Object(m.jsx)("q",{cite:"QS. An-Nahl: 72",children:"Dan Allah menjadikan bagimu pasangan (suami atau istri) dari jenis kamu sendiri, menjadikan anak dan cucu bagimu dari pasanganmu, serta memberimu rezeki dari yang baik-baik. Mengapa mereka beriman kepada yang batil dan mengingkari nikmat Allah?."}),Object(m.jsx)("br",{}),"(QS. An-Nahl: 72)"]}),Object(m.jsxs)("div",{className:"married-content","data-aos":"fade-up","data-aos-duration":"1500",children:[Object(m.jsxs)("article",{className:"couple",children:[Object(m.jsx)("img",{className:"circle",src:"./res/kebo.jpeg",alt:""}),Object(m.jsx)("h3",{className:"section-subtitle text-center",children:"Silvy Wahyuni, S.Sn."}),Object(m.jsxs)("p",{className:"text-center",children:["2",Object(m.jsx)("sup",{children:"nd"})," daughter of",Object(m.jsx)("br",{}),"H. Jae Juarsa, S.Pd., M.Pd. and Hj. Ita Karnita, S.Pd."]})]}),Object(m.jsx)("h3",{className:"section-subtitle text-center",children:"&"}),Object(m.jsxs)("article",{className:"couple",children:[Object(m.jsx)("img",{className:"circle",src:"./res/pp.jpeg",alt:""}),Object(m.jsx)("h3",{className:"section-subtitle text-center",children:"Febiana Nur Ramdani, S.Kom."}),Object(m.jsxs)("p",{className:"text-center",children:["1",Object(m.jsx)("sup",{children:"st"})," son of",Object(m.jsx)("br",{}),"H. Adang Surahman, S.Kep.Ners. and Hj. Lilis Yulianti, S.ST."]})]})]})]})}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"openMap",value:function(){window.open("https://www.google.com/maps/place/Institut+Agama+Islam+Cipasung/@-7.3496343,108.127125,15z/data=!4m5!3m4!1s0x0:0x9eb404166b256d11!8m2!3d-7.3496343!4d108.127125","_blank").focus()}},{key:"addToCalendar",value:function(){var e="21082021",t="http://www.google.com/calendar/event?action=TEMPLATE&text=".concat("Silvy and Febiana Wedding","&dates=").concat(e,"/").concat(e,"&location=").concat("Institut Agama Islam Cipasung");window.open(t).focus()}},{key:"render",value:function(){return Object(m.jsxs)("section",{className:"agenda text-center",style:{backgroundImage:"url('./res/agenda.jpeg')"},children:[Object(m.jsx)("p",{"data-aos":"fade-down","data-aos-duration":"1500",children:"Saturday"}),Object(m.jsxs)("div",{className:"date",children:[Object(m.jsx)("h2",{"data-aos":"fade-right","data-aos-duration":"1500",children:"21"}),Object(m.jsxs)("div",{className:"month-year","data-aos":"fade-left","data-aos-duration":"1500",children:[Object(m.jsx)("p",{children:"August"}),Object(m.jsx)("p",{children:"2021"})]})]}),Object(m.jsx)("h3",{"data-aos":"fade-up","data-aos-duration":"1500",children:"Reception"}),Object(m.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1500",children:"11.00 - 12.30"}),Object(m.jsx)("button",{id:"addToCalendarBtn","data-aos":"fade-up","data-aos-duration":"1500",onClick:this.addToCalendar,children:"Add to calender"}),Object(m.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1500",children:"IAIC Building"}),Object(m.jsxs)("div",{className:"location","data-aos":"fade-up","data-aos-duration":"1500",children:[Object(m.jsx)("p",{children:"Jalan Muktamar NU XXIX No.1, Cipakat, Cipasung, Singaparna, Cipakat, Kec. Singaparna, Tasikmalaya, Jawa Barat 46417"}),Object(m.jsx)("button",{onClick:this.openMap,children:"Open Map"})]})]})}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"pandemic overlay-dark",style:{backgroundImage:"url('./res/reminder.jpeg')"},children:[Object(m.jsxs)("p",{className:"text-center","data-aos":"zoom-in","data-aos-duration":"1500",children:['"Due to the COVID-19 pandemic, reception guests are requested to implement and comply with health protocols."',Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:"protocol","data-aos":"zoom-in","data-aos-duration":"1500",children:[Object(m.jsxs)("div",{className:"protocol-item",children:[Object(m.jsx)("img",{src:"./res/wash.png",alt:"Wash hands icon"}),Object(m.jsx)("p",{children:"Wash your hands"})]}),Object(m.jsxs)("div",{className:"protocol-item",children:[Object(m.jsx)("img",{src:"./res/mask.png",alt:"Wash hands icon"}),Object(m.jsx)("p",{children:"Wearing mask"})]}),Object(m.jsxs)("div",{className:"protocol-item",children:[Object(m.jsx)("img",{src:"./res/distance.png",alt:"Wash hands icon"}),Object(m.jsx)("p",{children:"Social distancing"})]})]})]})}}]),a}(n.Component),g=a(9),v=a(12),y=a.n(v),k=a(13),w=a(15);a(27);w.a.initializeApp({apiKey:"AIzaSyBaWutMZ_Df05WHLgAbWXX_W8BNg8OLRg0",authDomain:"nurram-projects.firebaseapp.com",databaseURL:"https://nurram-projects-default-rtdb.firebaseio.com",projectId:"nurram-projects",storageBucket:"nurram-projects.appspot.com",messagingSenderId:"67835346400",appId:"1:67835346400:web:0b59be15e9d59d73a5ff85",measurementId:"G-T6CNGSRKR5"});var N=w.a.database().ref("/comments"),C=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return N.orderByChild("millis")}},{key:"create",value:function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.push(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),S=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeName=n.onChangeName.bind(Object(g.a)(n)),n.onChangeComment=n.onChangeComment.bind(Object(g.a)(n)),n.saveComment=n.saveComment.bind(Object(g.a)(n)),n.formRef=s.a.createRef(),n.state={name:"",comment:""},n}return Object(o.a)(a,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeComment",value:function(e){this.setState({comment:e.target.value})}},{key:"saveComment",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t,a,n,s,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},a=new Date,n=a.toLocaleString("id-ID",t),s=this.state.name,c=this.state.comment,""===s.trim()||""===c.trim()){e.next=10;break}return r={name:s,comment:c,date:n,millis:Date.now()},e.next=9,C.create(r);case 9:this.formRef.current.reset();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"section-title text-center",children:"Comment"}),Object(m.jsxs)("form",{ref:this.formRef,action:"#",method:"post",children:[Object(m.jsx)("input",{id:"name",className:"input",type:"text",name:"name",placeholder:"Your name",onChange:this.onChangeName,required:!0}),Object(m.jsx)("textarea",{id:"comment",className:"input",name:"commentVal",rows:"5",placeholder:"Pray for us please",onChange:this.onChangeComment,required:!0}),Object(m.jsx)("input",{id:"submitBtn",className:"input",type:"button",value:"Submit",onClick:this.saveComment})]})]})}}]),a}(s.a.Component),I=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onDataChange=n.onDataChange.bind(Object(g.a)(n)),n.state={comments:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){C.getAll().on("value",this.onDataChange)}},{key:"componentWillUnmount",value:function(){C.getAll().off("value",this.onDataChange)}},{key:"onDataChange",value:function(e){var t=[];e.forEach((function(e){var a=e.val();t.push({name:a.name,comment:a.comment,date:a.date})})),this.setState({comments:t})}},{key:"render",value:function(){var e=this.state.comments;return Object(m.jsx)("section",{className:"comment overlay-dark",style:{backgroundImage:"url('./res/comment.jpeg')"},children:Object(m.jsxs)("div",{id:"comment-content",className:"comment-content",children:[Object(m.jsx)(S,{}),Object(m.jsx)("div",{id:"comment-list",children:e&&e.reverse().map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:e.name}),Object(m.jsx)("p",{style:{marginBottom:"4px"},children:e.comment}),Object(m.jsx)("p",{children:e.date}),Object(m.jsx)("hr",{})]},t)}))})]})})}}]),a}(n.Component),A=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("footer",{children:Object(m.jsxs)("p",{className:"text-center",children:["Created with ",Object(m.jsx)("span",{children:"\u2665"})," by the bride and groom"]})})}}]),a}(n.Component);var B=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("audio",{id:"audio",src:"./res/song.mp3"}),Object(m.jsx)(h,{}),Object(m.jsxs)("div",{id:"wrapper",className:"wrapper",children:[Object(m.jsx)(b,{}),Object(m.jsx)(p,{}),Object(m.jsx)(O,{}),Object(m.jsx)(x,{}),Object(m.jsx)(f,{}),Object(m.jsx)(I,{}),Object(m.jsx)(A,{})]})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),D()}},[[31,1,2]]]);
//# sourceMappingURL=main.7a594963.chunk.js.map