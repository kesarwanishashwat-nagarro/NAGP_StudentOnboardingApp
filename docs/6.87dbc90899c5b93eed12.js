(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cAcB:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),r=u("Ip0R"),i=u("gIcY"),a=function(){return function(n,l){this.username=n||"",this.password=l||""}}(),s=u("qc5V"),c=function(){function n(n){this._apiService=n}return n.prototype.logon=function(n){var l=window.btoa(n.username),u=window.btoa(n.password);return this._apiService.get("auth?userid="+l+"&pwd="+u)},n.ngInjectableDef=t.S({factory:function(){return new n(t.W(s.a))},token:n,providedIn:"root"}),n}(),b=u("gI3B"),g=u("Xqy7"),d=function(){function n(n,l,u){this._authService=n,this._trackAuthService=l,this._router=u}return n.prototype.ngOnInit=function(){this.user=new a,this.isLoginError=!1},n.prototype.logon=function(){var n=this;this._authService.logon(this.user).subscribe(function(l){if(l.length)n._trackAuthService.setAuthentication(!0,l[0].name),n._router.navigateByUrl("/");else{n.isLoginError=!0,n.user=new a;var u=Object(b.a)(3e3);n._trackAuthService.setAuthentication(!1),n.timerSubscription=u.subscribe(function(){return n.isLoginError=!1})}})},n.prototype.ngOnDestroy=function(){this.timerSubscription&&this.timerSubscription.unsubscribe()},n}(),p=u("ZYCi"),h=t.nb({encapsulation:0,styles:[[".login-error[_ngcontent-%COMP%]{font-size:15px}.login-error[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:5px}.box-container[_ngcontent-%COMP%]{padding:20px}.box-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.box-container[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex}.box-container[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{margin-right:10px;font-size:14px;margin-top:20px;width:100%}.box-container[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]],data:{}});function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,7,"div",[["class","login-error"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,6,"div",[["class","alert alert-danger alert-dismissible fade show"],["role","alert"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,0,"em",[["class","fa fa-exclamation-circle"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Incorrect username or password."])),(n()(),t.pb(5,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["data-dismiss","alert"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=0!=(n.component.isLoginError=!1)&&t),t},null,null)),(n()(),t.pb(6,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["\xd7"]))],null,null)}function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Please enter username."]))],null,null)}function C(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Please enter password."]))],null,null)}function v(n){return t.Jb(0,[(n()(),t.gb(16777216,null,null,1,null,f)),t.ob(1,16384,null,0,r.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(2,0,null,null,37,"div",[["class","box-container"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Login to account"])),(n()(),t.pb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Please enter your credentials to onboard the students."])),(n()(),t.pb(7,0,null,null,32,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var o=!0,e=n.component;return"submit"===l&&(o=!1!==t.zb(n,9).onSubmit(u)&&o),"reset"===l&&(o=!1!==t.zb(n,9).onReset()&&o),"ngSubmit"===l&&(o=!1!==e.logon()&&o),o},null,null)),t.ob(8,16384,null,0,i.z,[],null,null),t.ob(9,4210688,[["loginForm",4]],0,i.q,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Eb(2048,null,i.c,null,[i.q]),t.ob(11,16384,null,0,i.p,[[4,i.c]],null,null),(n()(),t.pb(12,0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),t.pb(13,0,null,null,8,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t.pb(14,0,null,null,7,"input",[["class","form-control"],["name","username"],["placeholder","Enter Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,e=n.component;return"input"===l&&(o=!1!==t.zb(n,15)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,15).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,15)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,15)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.user.username=u)&&o),o},null,null)),t.ob(15,16384,null,0,i.d,[t.D,t.k,[2,i.a]],null,null),t.ob(16,16384,null,0,i.u,[],{required:[0,"required"]},null),t.Eb(1024,null,i.l,function(n){return[n]},[i.u]),t.Eb(1024,null,i.m,function(n){return[n]},[i.d]),t.ob(19,671744,[["username",4]],0,i.r,[[2,i.c],[6,i.l],[8,null],[6,i.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,i.n,null,[i.r]),t.ob(21,16384,null,0,i.o,[[4,i.n]],null,null),(n()(),t.gb(16777216,null,null,1,null,m)),t.ob(23,16384,null,0,r.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(24,0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),t.pb(25,0,null,null,8,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t.pb(26,0,null,null,7,"input",[["class","form-control"],["name","password"],["placeholder","Enter Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,e=n.component;return"input"===l&&(o=!1!==t.zb(n,27)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,27).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,27)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,27)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.user.password=u)&&o),o},null,null)),t.ob(27,16384,null,0,i.d,[t.D,t.k,[2,i.a]],null,null),t.ob(28,16384,null,0,i.u,[],{required:[0,"required"]},null),t.Eb(1024,null,i.l,function(n){return[n]},[i.u]),t.Eb(1024,null,i.m,function(n){return[n]},[i.d]),t.ob(31,671744,[["password",4]],0,i.r,[[2,i.c],[6,i.l],[8,null],[6,i.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,i.n,null,[i.r]),t.ob(33,16384,null,0,i.o,[[4,i.n]],null,null),(n()(),t.gb(16777216,null,null,1,null,C)),t.ob(35,16384,null,0,r.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(36,0,null,null,3,"div",[["class","action-group"]],null,null,null,null,null)),(n()(),t.pb(37,0,null,null,2,"div",[["class","action"]],null,null,null,null,null)),(n()(),t.pb(38,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Login"]))],function(n,l){var u=l.component;n(l,1,0,u.isLoginError),n(l,16,0,""),n(l,19,0,"username",u.user.username),n(l,23,0,t.zb(l,19).touched&&(null==t.zb(l,19).errors?null:t.zb(l,19).errors.required)),n(l,28,0,""),n(l,31,0,"password",u.user.password),n(l,35,0,t.zb(l,31).touched&&(null==t.zb(l,31).errors?null:t.zb(l,31).errors.required))},function(n,l){n(l,7,0,t.zb(l,11).ngClassUntouched,t.zb(l,11).ngClassTouched,t.zb(l,11).ngClassPristine,t.zb(l,11).ngClassDirty,t.zb(l,11).ngClassValid,t.zb(l,11).ngClassInvalid,t.zb(l,11).ngClassPending),n(l,14,0,t.zb(l,16).required?"":null,t.zb(l,21).ngClassUntouched,t.zb(l,21).ngClassTouched,t.zb(l,21).ngClassPristine,t.zb(l,21).ngClassDirty,t.zb(l,21).ngClassValid,t.zb(l,21).ngClassInvalid,t.zb(l,21).ngClassPending),n(l,26,0,t.zb(l,28).required?"":null,t.zb(l,33).ngClassUntouched,t.zb(l,33).ngClassTouched,t.zb(l,33).ngClassPristine,t.zb(l,33).ngClassDirty,t.zb(l,33).ngClassValid,t.zb(l,33).ngClassInvalid,t.zb(l,33).ngClassPending),n(l,38,0,t.zb(l,9).invalid||t.zb(l,9).pristine)})}var z=function(){function n(n){this._trackAuth=n}return n.prototype.ngOnInit=function(){this._trackAuth.setAuthentication(!1)},n}(),x=t.nb({encapsulation:0,styles:[[".auth-container[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%}.auth-container[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background:url(bg-image.d9c27665389564a1bb53.jpg) center/cover;z-index:-1}.auth-container[_ngcontent-%COMP%]   .bg-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.8);z-index:-1}.auth-container[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]{max-width:340px;margin:auto}.auth-container[_ngcontent-%COMP%]   .box-container.login-container[_ngcontent-%COMP%]{background-color:#fff;margin-top:8%;border-radius:10px;padding:20px 0;transition:all .5s ease-out 0s}.auth-container[_ngcontent-%COMP%]   .box-container.brand-container[_ngcontent-%COMP%]{display:flex;color:#fff;margin-top:80px;font-size:28px;font-weight:700}.auth-container[_ngcontent-%COMP%]   .box-container.brand-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-right:10px}"]],data:{}});function _(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,10,"div",[["class","auth-container"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,0,"div",[["class","bg-overlay"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,4,"div",[["class","box-container brand-container"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,1,"div",[["class","logo"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,0,"em",[["class","fa fa-graduation-cap"]],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"div",[["class","brand"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Student Onboarding"])),(n()(),t.pb(8,0,null,null,2,"div",[["class","box-container login-container"]],null,null,null,null,null)),(n()(),t.pb(9,0,null,null,1,"app-logincontainer",[],null,null,null,v,h)),t.ob(10,245760,null,0,d,[c,g.a,p.o],null,null)],function(n,l){n(l,10,0)},null)}function P(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-landing",[],null,null,null,_,x)),t.ob(1,114688,null,0,z,[g.a],null,null)],function(n,l){n(l,1,0)},null)}var w=t.lb("app-landing",z,P,{},{},[]),M=u("z5nN"),O=u("NJnL"),y=u("lqqz"),q=u("DQlY"),S=function(){return function(){}}(),I=u("PCNd");u.d(l,"AuthModuleNgFactory",function(){return E});var E=t.mb(o,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[e.a,w,M.a,M.b]],[3,t.j],t.x]),t.xb(4608,r.n,r.m,[t.u,[2,r.z]]),t.xb(4608,i.A,i.A,[]),t.xb(4608,O.a,O.a,[t.E,t.B]),t.xb(4608,y.a,y.a,[t.j,t.z,t.q,O.a,t.g]),t.xb(4608,q.a,q.a,[t.E,y.a]),t.xb(1073742336,r.c,r.c,[]),t.xb(1073742336,p.q,p.q,[[2,p.w],[2,p.o]]),t.xb(1073742336,S,S,[]),t.xb(1073742336,i.x,i.x,[]),t.xb(1073742336,i.k,i.k,[]),t.xb(1073742336,q.e,q.e,[]),t.xb(1073742336,I.a,I.a,[]),t.xb(1073742336,o,o,[]),t.xb(1024,p.m,function(){return[[{path:"",component:z}]]},[])])})}}]);