(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"uP/6":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("gIcY"),e=function(){function l(){this.profileForm=new o.g({nameProduct:new o.e(""),price:new o.e(""),description:new o.e("")}),this.products=localStorage.getItem("object2")?JSON.parse(localStorage.getItem("object2")):JSON.parse(localStorage.getItem("object")),this.products_length=this.products.length}return l.prototype.onSubmit=function(){this.products.push({id:this.products.length+1,count:0,name:this.profileForm.value.nameProduct,price:this.profileForm.value.price+"$",description:this.profileForm.value.description,img:"https://www.krasotka-market.ru/storage/img_cache/202/045/20204563/front.jpg"}),this.products_length=this.products.length,localStorage.setItem("object2",JSON.stringify(this.products)),this.products=JSON.parse(localStorage.getItem("object2"))},l.prototype.deleteItem=function(l){localStorage.getItem("object2")?(this.products=JSON.parse(localStorage.getItem("object2")),this.products.splice(l,1),localStorage.setItem("object2",JSON.stringify(this.products))):(this.products=JSON.parse(localStorage.getItem("object")),this.products.splice(l,1),localStorage.setItem("object",JSON.stringify(this.products))),this.products_length=this.products.length},l.prototype.ngOnInit=function(){for(var l=0,n=0;n<this.products.length;n++)l+=parseInt(this.products[n].count);this.products_count=l},l}(),i=function(){return function(){}}(),s=u("pMnS"),r=u("Ip0R"),a=t.nb({encapsulation:0,styles:[[".pt-3__top[_ngcontent-%COMP%]{padding-top:3rem!important}.sidebar-sticky__top[_ngcontent-%COMP%]{margin-top:50px}.bg-dark[_ngcontent-%COMP%]{height:50px}.container-form[_ngcontent-%COMP%]{margin-bottom:50px;display:flex;flex-direction:column;max-width:300px}"]],data:{}});function c(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Db(2,null,["",""])),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Db(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Db(6,null,["",""])),(l()(),t.pb(7,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteItem(l.context.index)&&t),t},null,null)),(l()(),t.Db(-1,null,["x"]))],null,function(l,n){l(n,2,0,n.context.$implicit.name),l(n,4,0,n.context.$implicit.price),l(n,6,0,n.context.$implicit.count)})}function b(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"nav",[["class","navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"a",[["class","navbar-brand col-sm-3 col-md-2 mr-0"],["href","#/list"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Beauty Catalog - List"])),(l()(),t.pb(3,0,null,null,75,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,74,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,11,"nav",[["class","col-md-2 d-none d-md-block bg-light sidebar"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,10,"div",[["class","sidebar-sticky sidebar-sticky__top"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,4,"ul",[["class","nav flex-column"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,3,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,2,"a",[["class","nav-link"],["href","#/list"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,0,"span",[["data-feather","file"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" List products "])),(l()(),t.pb(12,0,null,null,4,"h6",[["class","sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Saved reports"])),(l()(),t.pb(15,0,null,null,1,"a",[["class","d-flex align-items-center text-muted"],["href","#"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,0,"span",[["data-feather","plus-circle"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,61,"main",[["class","col-md-9 ml-sm-auto col-lg-10 px-4"],["role","main"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,2,"div",[["class","d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pt-3__top pb-2 mb-3"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"h1",[["class","h2"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Dashboard"])),(l()(),t.pb(21,0,null,null,20,"div",[["class","table"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,19,"table",[["class","table able-sm"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Name product"])),(l()(),t.pb(27,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Price"])),(l()(),t.pb(29,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["View count"])),(l()(),t.pb(31,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Del"])),(l()(),t.pb(33,0,null,null,8,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,c)),t.ob(35,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(36,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),t.pb(37,0,null,null,4,"td",[["colspan","4"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(39,null,["Number of products - ",""])),(l()(),t.pb(40,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(41,null,["Total views - ",""])),(l()(),t.pb(42,0,null,null,36,"div",[["class","container container-form"]],null,null,null,null,null)),(l()(),t.pb(43,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Add new items to catalog"])),(l()(),t.pb(45,0,null,null,33,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==t.yb(l,47).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.yb(l,47).onReset()&&o),"ngSubmit"===n&&(e.onSubmit(),o=!1!==t.yb(l,47).reset()&&o),o},null,null)),t.ob(46,16384,null,0,o.p,[],null,null),t.ob(47,540672,[["myForm",4]],0,o.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Bb(2048,null,o.b,null,[o.h]),t.ob(49,16384,null,0,o.m,[[4,o.b]],null,null),(l()(),t.pb(50,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,1,"label",[["for","nameProduct"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Name product"])),(l()(),t.pb(53,0,null,null,5,"input",[["class","form-control"],["formControlName","nameProduct"],["id","nameProduct"],["placeholder","name product"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.yb(l,54)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.yb(l,54).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.yb(l,54)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.yb(l,54)._compositionEnd(u.target.value)&&o),o},null,null)),t.ob(54,16384,null,0,o.c,[t.D,t.k,[2,o.a]],null,null),t.Bb(1024,null,o.j,function(l){return[l]},[o.c]),t.ob(56,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.r]],{name:[0,"name"]},null),t.Bb(2048,null,o.k,null,[o.f]),t.ob(58,16384,null,0,o.l,[[4,o.k]],null,null),(l()(),t.pb(59,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(60,0,null,null,1,"label",[["for","price"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Price"])),(l()(),t.pb(62,0,null,null,5,"input",[["class","form-control"],["formControlName","price"],["id","price"],["placeholder","price"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.yb(l,63)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.yb(l,63).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.yb(l,63)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.yb(l,63)._compositionEnd(u.target.value)&&o),o},null,null)),t.ob(63,16384,null,0,o.c,[t.D,t.k,[2,o.a]],null,null),t.Bb(1024,null,o.j,function(l){return[l]},[o.c]),t.ob(65,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.r]],{name:[0,"name"]},null),t.Bb(2048,null,o.k,null,[o.f]),t.ob(67,16384,null,0,o.l,[[4,o.k]],null,null),(l()(),t.pb(68,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(69,0,null,null,1,"label",[["for","price"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Description"])),(l()(),t.pb(71,0,null,null,5,"input",[["class","form-control"],["formControlName","description"],["id","description"],["placeholder","description"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.yb(l,72)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.yb(l,72).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.yb(l,72)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.yb(l,72)._compositionEnd(u.target.value)&&o),o},null,null)),t.ob(72,16384,null,0,o.c,[t.D,t.k,[2,o.a]],null,null),t.Bb(1024,null,o.j,function(l){return[l]},[o.c]),t.ob(74,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.r]],{name:[0,"name"]},null),t.Bb(2048,null,o.k,null,[o.f]),t.ob(76,16384,null,0,o.l,[[4,o.k]],null,null),(l()(),t.pb(77,0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Db(-1,null,["Submit"]))],function(l,n){var u=n.component;l(n,35,0,u.products),l(n,47,0,u.profileForm),l(n,56,0,"nameProduct"),l(n,65,0,"price"),l(n,74,0,"description")},function(l,n){var u=n.component;l(n,39,0,u.products_length),l(n,41,0,u.products_count),l(n,45,0,t.yb(n,49).ngClassUntouched,t.yb(n,49).ngClassTouched,t.yb(n,49).ngClassPristine,t.yb(n,49).ngClassDirty,t.yb(n,49).ngClassValid,t.yb(n,49).ngClassInvalid,t.yb(n,49).ngClassPending),l(n,53,0,t.yb(n,58).ngClassUntouched,t.yb(n,58).ngClassTouched,t.yb(n,58).ngClassPristine,t.yb(n,58).ngClassDirty,t.yb(n,58).ngClassValid,t.yb(n,58).ngClassInvalid,t.yb(n,58).ngClassPending),l(n,62,0,t.yb(n,67).ngClassUntouched,t.yb(n,67).ngClassTouched,t.yb(n,67).ngClassPristine,t.yb(n,67).ngClassDirty,t.yb(n,67).ngClassValid,t.yb(n,67).ngClassInvalid,t.yb(n,67).ngClassPending),l(n,71,0,t.yb(n,76).ngClassUntouched,t.yb(n,76).ngClassTouched,t.yb(n,76).ngClassPristine,t.yb(n,76).ngClassDirty,t.yb(n,76).ngClassValid,t.yb(n,76).ngClassInvalid,t.yb(n,76).ngClassPending),l(n,77,0,!u.profileForm.valid)})}function p(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"dashboard",[],null,null,null,b,a)),t.ob(1,114688,null,0,e,[],null,null)],function(l,n){l(n,1,0)},null)}var d=t.lb("dashboard",e,p,{},{},[]),g=u("ZYCi");u.d(n,"DashboardModuleNgFactory",function(){return m});var m=t.mb(i,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[s.a,d]],[3,t.j],t.x]),t.xb(4608,r.k,r.j,[t.u,[2,r.q]]),t.xb(4608,o.d,o.d,[]),t.xb(4608,o.q,o.q,[]),t.xb(1073742336,g.m,g.m,[[2,g.s],[2,g.k]]),t.xb(1073742336,r.c,r.c,[]),t.xb(1073742336,o.o,o.o,[]),t.xb(1073742336,o.n,o.n,[]),t.xb(1073742336,i,i,[]),t.xb(1024,g.i,function(){return[[{path:"",component:e}]]},[])])})}}]);