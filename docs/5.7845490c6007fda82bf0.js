(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cAcB:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),r=u("Ip0R"),i=u("gIcY"),a=function(){return function(n,l){this.username=n||"",this.password=l||""}}(),s=u("qc5V"),c=function(){function n(n){this._apiService=n}return n.prototype.logon=function(n){var l=window.btoa(n.username),u=window.btoa(n.password);return this._apiService.get("auth?userid="+l+"&pwd="+u)},n.ngInjectableDef=t.S({factory:function(){return new n(t.W(s.a))},token:n,providedIn:"root"}),n}(),b=u("6blF"),d=u("T1DM"),g=u("isby");function p(n){return!Object(g.a)(n)&&n-parseFloat(n)+1>=0}var h=u("nkY7");function f(n){var l=n.index,u=n.period,t=n.subscriber;if(t.next(l),!t.closed){if(-1===u)return t.complete();n.index=l+1,this.schedule(n,u)}}var m=u("Xqy7"),v=function(){function n(n,l,u){this._authService=n,this._trackAuthService=l,this._router=u}return n.prototype.ngOnInit=function(){this.user=new a,this.isLoginError=!1},n.prototype.logon=function(){var n=this;this._authService.logon(this.user).subscribe(function(l){if(l.length)n._trackAuthService.setAuthentication(!0,l[0].name),n._router.navigateByUrl("/");else{n.isLoginError=!0,n.user=new a;var u=function(n,l,u){void 0===n&&(n=0);var t=-1;return p(void 0)?t=Number(void 0)<1?1:Number(void 0):Object(h.a)(void 0)&&(u=void 0),Object(h.a)(u)||(u=d.a),new b.a(function(l){var o=p(n)?n:+n-u.now();return u.schedule(f,o,{index:0,period:t,subscriber:l})})}(3e3);n._trackAuthService.setAuthentication(!1),n.timerSubscription=u.subscribe(function(){return n.isLoginError=!1})}})},n.prototype.ngOnDestroy=function(){this.timerSubscription&&this.timerSubscription.unsubscribe()},n}(),C=u("ZYCi"),x=t.nb({encapsulation:0,styles:[[".login-error[_ngcontent-%COMP%]{font-size:15px}.login-error[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:5px}.box-container[_ngcontent-%COMP%]{padding:20px}.box-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.box-container[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex}.box-container[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{margin-right:10px;font-size:14px;margin-top:20px}.box-container[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]   .action.shift-down[_ngcontent-%COMP%]{margin-top:25px}"]],data:{}});function z(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,7,"div",[["class","login-error"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,6,"div",[["class","alert alert-danger alert-dismissible fade show"],["role","alert"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,0,"em",[["class","fa fa-exclamation-circle"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Incorrect username or password."])),(n()(),t.pb(5,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["data-dismiss","alert"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=0!=(n.component.isLoginError=!1)&&t),t},null,null)),(n()(),t.pb(6,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["\xd7"]))],null,null)}function _(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Please enter username."]))],null,null)}function w(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Please enter password."]))],null,null)}function P(n){return t.Jb(0,[(n()(),t.gb(16777216,null,null,1,null,z)),t.ob(1,16384,null,0,r.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(2,0,null,null,40,"div",[["class","box-container"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Login to account"])),(n()(),t.pb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Please enter your credentials to onboard the students."])),(n()(),t.pb(7,0,null,null,35,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var o=!0;return"submit"===l&&(o=!1!==t.zb(n,9).onSubmit(u)&&o),"reset"===l&&(o=!1!==t.zb(n,9).onReset()&&o),o},null,null)),t.ob(8,16384,null,0,i.z,[],null,null),t.ob(9,4210688,[["loginForm",4]],0,i.q,[[8,null],[8,null]],null,null),t.Eb(2048,null,i.c,null,[i.q]),t.ob(11,16384,null,0,i.p,[[4,i.c]],null,null),(n()(),t.pb(12,0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),t.pb(13,0,null,null,8,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t.pb(14,0,null,null,7,"input",[["class","form-control"],["name","username"],["placeholder","Enter Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,e=n.component;return"input"===l&&(o=!1!==t.zb(n,15)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,15).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,15)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,15)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.user.username=u)&&o),o},null,null)),t.ob(15,16384,null,0,i.d,[t.D,t.k,[2,i.a]],null,null),t.ob(16,16384,null,0,i.u,[],{required:[0,"required"]},null),t.Eb(1024,null,i.l,function(n){return[n]},[i.u]),t.Eb(1024,null,i.m,function(n){return[n]},[i.d]),t.ob(19,671744,[["username",4]],0,i.r,[[2,i.c],[6,i.l],[8,null],[6,i.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,i.n,null,[i.r]),t.ob(21,16384,null,0,i.o,[[4,i.n]],null,null),(n()(),t.gb(16777216,null,null,1,null,_)),t.ob(23,16384,null,0,r.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(24,0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),t.pb(25,0,null,null,8,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t.pb(26,0,null,null,7,"input",[["class","form-control"],["name","password"],["placeholder","Enter Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,e=n.component;return"input"===l&&(o=!1!==t.zb(n,27)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,27).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,27)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,27)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.user.password=u)&&o),o},null,null)),t.ob(27,16384,null,0,i.d,[t.D,t.k,[2,i.a]],null,null),t.ob(28,16384,null,0,i.u,[],{required:[0,"required"]},null),t.Eb(1024,null,i.l,function(n){return[n]},[i.u]),t.Eb(1024,null,i.m,function(n){return[n]},[i.d]),t.ob(31,671744,[["password",4]],0,i.r,[[2,i.c],[6,i.l],[8,null],[6,i.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,i.n,null,[i.r]),t.ob(33,16384,null,0,i.o,[[4,i.n]],null,null),(n()(),t.gb(16777216,null,null,1,null,w)),t.ob(35,16384,null,0,r.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(36,0,null,null,6,"div",[["class","action-group"]],null,null,null,null,null)),(n()(),t.pb(37,0,null,null,2,"div",[["class","action"]],null,null,null,null,null)),(n()(),t.pb(38,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logon()&&t),t},null,null)),(n()(),t.Hb(-1,null,["Login"])),(n()(),t.pb(40,0,null,null,2,"div",[["class","action shift-down"]],null,null,null,null,null)),(n()(),t.pb(41,0,null,null,1,"a",[["href","/forgot-pass"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Forgot Password?"]))],function(n,l){var u=l.component;n(l,1,0,u.isLoginError),n(l,16,0,""),n(l,19,0,"username",u.user.username),n(l,23,0,t.zb(l,19).touched&&(null==t.zb(l,19).errors?null:t.zb(l,19).errors.required)),n(l,28,0,""),n(l,31,0,"password",u.user.password),n(l,35,0,t.zb(l,31).touched&&(null==t.zb(l,31).errors?null:t.zb(l,31).errors.required))},function(n,l){n(l,7,0,t.zb(l,11).ngClassUntouched,t.zb(l,11).ngClassTouched,t.zb(l,11).ngClassPristine,t.zb(l,11).ngClassDirty,t.zb(l,11).ngClassValid,t.zb(l,11).ngClassInvalid,t.zb(l,11).ngClassPending),n(l,14,0,t.zb(l,16).required?"":null,t.zb(l,21).ngClassUntouched,t.zb(l,21).ngClassTouched,t.zb(l,21).ngClassPristine,t.zb(l,21).ngClassDirty,t.zb(l,21).ngClassValid,t.zb(l,21).ngClassInvalid,t.zb(l,21).ngClassPending),n(l,26,0,t.zb(l,28).required?"":null,t.zb(l,33).ngClassUntouched,t.zb(l,33).ngClassTouched,t.zb(l,33).ngClassPristine,t.zb(l,33).ngClassDirty,t.zb(l,33).ngClassValid,t.zb(l,33).ngClassInvalid,t.zb(l,33).ngClassPending),n(l,38,0,t.zb(l,9).invalid||t.zb(l,9).pristine)})}var O=function(){function n(n){this._trackAuth=n}return n.prototype.ngOnInit=function(){this._trackAuth.setAuthentication(!1)},n}(),M=t.nb({encapsulation:0,styles:[[".auth-container[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%}.auth-container[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background:url(bg-image.d9c27665389564a1bb53.jpg) center/cover;z-index:-1}.auth-container[_ngcontent-%COMP%]   .bg-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.8);z-index:-1}.auth-container[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]{max-width:340px;margin:auto}.auth-container[_ngcontent-%COMP%]   .box-container.login-container[_ngcontent-%COMP%]{background-color:#fff;margin-top:8%;border-radius:10px;padding:20px 0;transition:all .5s ease-out 0s}.auth-container[_ngcontent-%COMP%]   .box-container.brand-container[_ngcontent-%COMP%]{display:flex;color:#fff;margin-top:80px;font-size:28px;font-weight:700}.auth-container[_ngcontent-%COMP%]   .box-container.brand-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-right:10px}"]],data:{}});function y(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,10,"div",[["class","auth-container"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,0,"div",[["class","bg-overlay"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,4,"div",[["class","box-container brand-container"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,1,"div",[["class","logo"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,0,"em",[["class","fa fa-graduation-cap"]],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"div",[["class","brand"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Student Onboarding"])),(n()(),t.pb(8,0,null,null,2,"div",[["class","box-container login-container"]],null,null,null,null,null)),(n()(),t.pb(9,0,null,null,1,"app-logincontainer",[],null,null,null,P,x)),t.ob(10,245760,null,0,v,[c,m.a,C.o],null,null)],function(n,l){n(l,10,0)},null)}function q(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-landing",[],null,null,null,y,M)),t.ob(1,114688,null,0,O,[m.a],null,null)],function(n,l){n(l,1,0)},null)}var k=t.lb("app-landing",O,q,{},{},[]),E=u("z5nN"),I=u("NJnL"),S=u("lqqz"),A=u("DQlY"),L=function(){return function(){}}(),D=u("PCNd");u.d(l,"AuthModuleNgFactory",function(){return H});var H=t.mb(o,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[e.a,k,E.a,E.b]],[3,t.j],t.x]),t.xb(4608,r.n,r.m,[t.u,[2,r.z]]),t.xb(4608,i.A,i.A,[]),t.xb(4608,I.a,I.a,[t.E,t.B]),t.xb(4608,S.a,S.a,[t.j,t.z,t.q,I.a,t.g]),t.xb(4608,A.a,A.a,[t.E,S.a]),t.xb(1073742336,r.c,r.c,[]),t.xb(1073742336,C.q,C.q,[[2,C.w],[2,C.o]]),t.xb(1073742336,L,L,[]),t.xb(1073742336,i.x,i.x,[]),t.xb(1073742336,i.k,i.k,[]),t.xb(1073742336,A.e,A.e,[]),t.xb(1073742336,D.a,D.a,[]),t.xb(1073742336,o,o,[]),t.xb(1024,C.m,function(){return[[{path:"",component:O}]]},[])])})}}]);