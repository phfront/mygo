(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7UCR":function(t,n,e){"use strict";e.r(n),e.d(n,"UserModule",(function(){return P}));var o=e("PCNd"),r=e("tyNb"),i=e("/vdw"),c=e("3Pt+"),s=e("IzEk"),a=e("fXoL"),g=e("e0Ib");let b=(()=>{class t{constructor(t,n,e){this.mygoService=t,this.router=n,this.route=e,this.form=(new c.b).group({password:["",c.l.required],confirmPassword:["",c.l.required],hash:[""]})}ngOnInit(){this.route.params.pipe(Object(s.a)(1)).subscribe(t=>{this.form.get("hash").setValue(t.hashId)})}submit(){const{hash:t,password:n,confirmPassword:e}=this.form.value;if(n!==e)return alert("Senhas diferentes");this.mygoService.changePassword(t,n,e).pipe(Object(s.a)(1)).subscribe(t=>{t.success?(alert("Senha alterada com sucesso"),this.backToLogin()):alert(t.errors.join("|"))},t=>{alert(t.error.errors.join("|"))})}backToLogin(){this.router.navigate(["/user/login"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(g.a),a.Hb(r.b),a.Hb(r.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-change-password"]],decls:16,vars:4,consts:[[1,"change",3,"formGroup","submit"],[1,"change-container"],["src","assets/images/logo.png","alt","",1,"logo"],[1,"mygo-input"],["for","password"],["id","password","type","password","placeholder","Nova senha",3,"formControl"],["for","confirmPassword"],["id","confirmPassword","type","password","placeholder","Confirmar senha",3,"formControl"],[1,"buttons"],["type","submit",1,"mygo-button",3,"disabled"],["type","button",1,"mygo-button",3,"click"]],template:function(t,n){1&t&&(a.Kb(0,"form",0),a.Rb("submit",(function(){return n.submit()})),a.Kb(1,"div",1),a.Ib(2,"img",2),a.Kb(3,"div",3),a.Kb(4,"label",4),a.ec(5,"Nova senha"),a.Jb(),a.Ib(6,"input",5),a.Jb(),a.Kb(7,"div",3),a.Kb(8,"label",6),a.ec(9,"Confirmar senha"),a.Jb(),a.Ib(10,"input",7),a.Jb(),a.Kb(11,"div",8),a.Kb(12,"button",9),a.ec(13,"Enviar email"),a.Jb(),a.Kb(14,"button",10),a.Rb("click",(function(){return n.backToLogin()})),a.ec(15,"Voltar"),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.Wb("formGroup",n.form),a.xb(6),a.Wb("formControl",n.form.get("password")),a.xb(4),a.Wb("formControl",n.form.get("confirmPassword")),a.xb(2),a.Wb("disabled",!n.form.valid))},directives:[c.n,c.h,c.e,c.a,c.g,c.d],styles:[".change[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;background-image:var(--loginBg);background-repeat:no-repeat;background-position:bottom;background-position-x:5vw}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]{padding:20px;display:grid;grid-template-columns:1fr;gap:10px;width:400px;position:fixed;right:25vw}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]{display:flex;align-items:center}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:180px}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:260px}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px}.change[_ngcontent-%COMP%]   .change-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{grid-column:1/span 2;text-align:center}"]}),t})(),l=(()=>{class t{constructor(t,n){this.mygoService=t,this.router=n,this.form=(new c.b).group({email:[""]})}ngOnInit(){}sendEmail(){const{email:t}=this.form.value;if(!t)return alert("Email inv\xe1lido");this.mygoService.forgotPassword(t).pipe(Object(s.a)(1)).subscribe(t=>{t.success?alert("Foi enviado para seu email um link para criar uma nova senha"):alert(t.errors.join("|"))},t=>{alert(t.error.errors.join("|"))})}backToLogin(){this.router.navigate(["/user/login"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(g.a),a.Hb(r.b))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-forgot-password"]],decls:14,vars:2,consts:[[1,"forgot",3,"formGroup","submit"],[1,"forgot-container"],["src","assets/images/logo.png","alt","",1,"logo"],[1,"mygo-input"],["for","email"],["id","email","type","text","placeholder","Email",3,"formControl"],[1,"buttons"],["type","submit",1,"mygo-button"],["type","button",1,"mygo-button",3,"click"]],template:function(t,n){1&t&&(a.Kb(0,"form",0),a.Rb("submit",(function(){return n.sendEmail()})),a.Kb(1,"div",1),a.Ib(2,"img",2),a.Kb(3,"h3"),a.ec(4,"Informe seu email que iremos enviar um link para cria\xe7\xe3o da nova senha"),a.Jb(),a.Kb(5,"div",3),a.Kb(6,"label",4),a.ec(7,"Email"),a.Jb(),a.Ib(8,"input",5),a.Jb(),a.Kb(9,"div",6),a.Kb(10,"button",7),a.ec(11,"Enviar email"),a.Jb(),a.Kb(12,"button",8),a.Rb("click",(function(){return n.backToLogin()})),a.ec(13,"Voltar"),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.Wb("formGroup",n.form),a.xb(8),a.Wb("formControl",n.form.get("email")))},directives:[c.n,c.h,c.e,c.a,c.g,c.d],styles:[".forgot[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;background-image:var(--loginBg);background-repeat:no-repeat;background-position:bottom;background-position-x:5vw}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]{padding:20px;display:grid;grid-template-columns:1fr;gap:10px;width:400px;position:fixed;right:25vw}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]{display:flex;align-items:center}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100px}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:260px}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px}.forgot[_ngcontent-%COMP%]   .forgot-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{grid-column:1/span 2;text-align:center}"]}),t})();var u=e("ofXK");function p(t,n){if(1&t&&(a.Kb(0,"section"),a.Kb(1,"h1"),a.ec(2,"Usuario"),a.Jb(),a.Kb(3,"p"),a.ec(4),a.Jb(),a.Kb(5,"p"),a.ec(6),a.Jb(),a.Kb(7,"p"),a.ec(8),a.Jb(),a.Kb(9,"p"),a.ec(10),a.Jb(),a.Jb()),2&t){const t=a.Tb();a.xb(4),a.gc("ID: ",t.user._id,""),a.xb(2),a.gc("Username: ",t.user.username,""),a.xb(2),a.gc("Nome: ",t.user.name,""),a.xb(2),a.gc("Email: ",t.user.email,"")}}function m(t,n){if(1&t){const t=a.Lb();a.Kb(0,"p"),a.ec(1),a.Kb(2,"button",1),a.Rb("click",(function(){a.ac(t);const e=n.$implicit;return a.Tb().editDeck(e)})),a.ec(3,"Editar deck"),a.Jb(),a.Jb()}if(2&t){const t=n.$implicit;a.xb(1),a.hc(" ",t.name," ( ",t.createdBy," ) ")}}let d=(()=>{class t{constructor(t,n){this.mygoService=t,this.router=n,this.decks=[]}ngOnInit(){this.getUser()}getUser(){this.mygoService.user().pipe(Object(s.a)(1)).subscribe(t=>{this.user=t.user,this.getDecks()},t=>{alert(t.error.errors.join("|")),this.mygoService.logout(),this.router.navigate(["/user/login"])})}getDecks(){this.mygoService.myDecks().pipe(Object(s.a)(1)).subscribe(t=>{this.decks=t.decks},t=>{alert(t.error.errors.join("|"))})}editDeck(t){this.router.navigate(["/deck/"+t._id])}myCards(){this.router.navigate(["/mycards"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(g.a),a.Hb(r.b))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-home"]],decls:10,vars:2,consts:[[4,"ngIf"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(a.dc(0,p,11,4,"section",0),a.Ib(1,"br"),a.Kb(2,"section"),a.Kb(3,"button",1),a.Rb("click",(function(){return n.myCards()})),a.ec(4,"Minhas cartas"),a.Jb(),a.Jb(),a.Ib(5,"br"),a.Kb(6,"section"),a.Kb(7,"h1"),a.ec(8,"Decks"),a.Jb(),a.dc(9,m,4,2,"p",2),a.Jb()),2&t&&(a.Wb("ngIf",n.user),a.xb(9),a.Wb("ngForOf",n.decks))},directives:[u.j,u.i],styles:[""]}),t})();var f=e("xrvM");const h=function(){return["/user/forgot-password"]},C=[{path:"",redirectTo:"home"},{path:"login",component:(()=>{class t{constructor(t,n,e,o){this.mygoService=t,this.router=n,this.formBuilder=e,this.themeService=o,this.form=this.formBuilder.group({username:[""],password:[""]})}ngOnInit(){localStorage.getItem("token")&&this.mygoService.verifyToken().pipe(Object(s.a)(1)).subscribe(t=>{t.success&&this.loginComplete(!1)})}login(){this.mygoService.login(this.form.get("username").value,this.form.get("password").value).pipe(Object(s.a)(1)).subscribe(t=>{t.success&&(localStorage.setItem("token",t.token),this.loginComplete(!0))},t=>{alert(t.error.errors.join(" | "))})}loginComplete(t){const n=localStorage.getItem("temptheme");n&&t&&this.themeService.saveTheme(n),this.router.navigate(["/user/home"])}register(){this.router.navigate(["/user/register"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(g.a),a.Hb(r.b),a.Hb(c.b),a.Hb(f.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-login"]],decls:18,vars:6,consts:[[1,"login",3,"formGroup","submit"],[1,"login-container"],["src","assets/images/logo.png","alt","",1,"logo"],[1,"mygo-input"],["for","username"],["id","username","type","text","placeholder","Usu\xe1rio",3,"formControl"],["for","password"],["id","password","type","password","placeholder","Senha",3,"formControl"],[1,"buttons"],["type","submit",1,"mygo-button",3,"disabled"],["type","button",1,"mygo-button",3,"click"],[1,"mygo-anchor",3,"routerLink"]],template:function(t,n){1&t&&(a.Kb(0,"form",0),a.Rb("submit",(function(){return n.login()})),a.Kb(1,"div",1),a.Ib(2,"img",2),a.Kb(3,"div",3),a.Kb(4,"label",4),a.ec(5,"Usu\xe1rio"),a.Jb(),a.Ib(6,"input",5),a.Jb(),a.Kb(7,"div",3),a.Kb(8,"label",6),a.ec(9,"Senha"),a.Jb(),a.Ib(10,"input",7),a.Jb(),a.Kb(11,"div",8),a.Kb(12,"button",9),a.ec(13,"Login"),a.Jb(),a.Kb(14,"button",10),a.Rb("click",(function(){return n.register()})),a.ec(15,"Registrar"),a.Jb(),a.Kb(16,"a",11),a.ec(17,"Esqueceu sua senha?"),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.Wb("formGroup",n.form),a.xb(6),a.Wb("formControl",n.form.get("username")),a.xb(4),a.Wb("formControl",n.form.get("password")),a.xb(2),a.Wb("disabled",!n.form.valid),a.xb(4),a.Wb("routerLink",a.Xb(5,h)))},directives:[c.n,c.h,c.e,c.a,c.g,c.d,r.c],styles:[".login[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;background-image:var(--loginBg);background-repeat:no-repeat;background-position:bottom;background-position-x:5vw}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]{padding:20px;display:grid;grid-template-columns:1fr;gap:10px;width:400px;position:fixed;right:25vw}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]{display:flex;align-items:center}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100px}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:260px}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px}.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{grid-column:1/span 2;text-align:center}"]}),t})()},{path:"register",component:(()=>{class t{constructor(t,n){this.mygoService=t,this.router=n,this.user=(new c.b).group({name:[""],email:[""],username:[""],password:[""]})}ngOnInit(){}register(){this.mygoService.register(this.user.get("name").value,this.user.get("email").value,this.user.get("username").value,this.user.get("password").value).pipe(Object(s.a)(1)).subscribe(t=>{t.success?(this.backToLogin(),alert("Usu\xe1rio criado com sucesso")):alert(t.errors.join("|"))},t=>{alert(t.error.errors.join("|"))})}backToLogin(){this.router.navigate(["/user/login"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(g.a),a.Hb(r.b))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-register"]],decls:24,vars:6,consts:[[1,"register",3,"formGroup","submit"],[1,"register-container"],["src","assets/images/logo.png","alt","",1,"logo"],[1,"mygo-input"],["for","name"],["id","name","type","text","placeholder","Nome",3,"formControl"],["for","email"],["id","email","type","text","placeholder","Email",3,"formControl"],["for","username"],["id","username","type","text","placeholder","Usu\xe1rio",3,"formControl"],["for","password"],["id","password","type","password","placeholder","Senha",3,"formControl"],[1,"buttons"],["type","submit",1,"mygo-button",3,"disabled"],["type","button",1,"mygo-button",3,"click"]],template:function(t,n){1&t&&(a.Kb(0,"form",0),a.Rb("submit",(function(){return n.register()})),a.Kb(1,"div",1),a.Ib(2,"img",2),a.Kb(3,"div",3),a.Kb(4,"label",4),a.ec(5,"Nome"),a.Jb(),a.Ib(6,"input",5),a.Jb(),a.Kb(7,"div",3),a.Kb(8,"label",6),a.ec(9,"Email"),a.Jb(),a.Ib(10,"input",7),a.Jb(),a.Kb(11,"div",3),a.Kb(12,"label",8),a.ec(13,"Usu\xe1rio"),a.Jb(),a.Ib(14,"input",9),a.Jb(),a.Kb(15,"div",3),a.Kb(16,"label",10),a.ec(17,"Senha"),a.Jb(),a.Ib(18,"input",11),a.Jb(),a.Kb(19,"div",12),a.Kb(20,"button",13),a.ec(21,"Criar conta"),a.Jb(),a.Kb(22,"button",14),a.Rb("click",(function(){return n.backToLogin()})),a.ec(23,"Voltar"),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.Wb("formGroup",n.user),a.xb(6),a.Wb("formControl",n.user.get("name")),a.xb(4),a.Wb("formControl",n.user.get("email")),a.xb(4),a.Wb("formControl",n.user.get("username")),a.xb(4),a.Wb("formControl",n.user.get("password")),a.xb(2),a.Wb("disabled",!n.user.valid))},directives:[c.n,c.h,c.e,c.a,c.g,c.d],styles:[".register[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;background-image:var(--loginBg);background-repeat:no-repeat;background-position:bottom;background-position-x:5vw}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]{padding:20px;display:grid;grid-template-columns:1fr;gap:10px;width:400px;position:fixed;right:25vw}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]{display:flex;align-items:center}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100px}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]   .mygo-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:260px}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px}.register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{grid-column:1/span 2;text-align:center}"]}),t})()},{path:"forgot-password",component:l},{path:"change-password/:hashId",component:b},{path:"home",component:d,canActivate:[i.a]}];let O=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[r.d.forChild(C)],r.d]}),t})(),P=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[o.a,O]]}),t})()}}]);