(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{h3Nf:function(c,n,i){"use strict";i.d(n,"a",(function(){return x}));var a=i("fXoL"),b=i("ofXK");function t(c,n){if(1&c){const c=a.Mb();a.Lb(0,"img",9),a.Sb("click",(function(){a.cc(c);const i=n.$implicit;return a.Ub(2).setBigImage(i)})),a.Kb()}2&c&&a.Xb("src",n.$implicit.image_url_small,a.dc)}function e(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Nome:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.name,"")}}function r(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Tipo:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.type,"")}}function g(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"ATK:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.atk,"")}}function s(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"DEF:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.def,"")}}function d(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Level:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.level,"")}}function p(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Ra\xe7a:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.race,"")}}function f(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Atributo:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.attribute,"")}}function o(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Arqu\xe9tipo:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.archetype,"")}}function l(c,n){if(1&c&&(a.Lb(0,"p"),a.Lb(1,"span"),a.gc(2,"Escala:"),a.Kb(),a.gc(3),a.Kb()),2&c){const c=a.Ub(2);a.xb(3),a.ic(" ",c.card.scale,"")}}function u(c,n){1&c&&(a.Lb(0,"div",10),a.Lb(1,"h3"),a.gc(2,"Pre\xe7o"),a.Kb(),a.Kb())}function m(c,n){if(1&c&&(a.Lb(0,"div",1),a.Jb(1,"img",2),a.Lb(2,"div",3),a.fc(3,t,1,1,"img",4),a.Kb(),a.Lb(4,"div"),a.fc(5,e,4,1,"p",5),a.fc(6,r,4,1,"p",5),a.fc(7,g,4,1,"p",5),a.fc(8,s,4,1,"p",5),a.fc(9,d,4,1,"p",5),a.fc(10,p,4,1,"p",5),a.fc(11,f,4,1,"p",5),a.fc(12,o,4,1,"p",5),a.fc(13,l,4,1,"p",5),a.Lb(14,"div",6),a.fc(15,u,3,0,"div",7),a.Kb(),a.Lb(16,"div",8),a.Lb(17,"span"),a.gc(18,"Descri\xe7\xe3o:"),a.Kb(),a.Lb(19,"div"),a.gc(20),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&c){const c=a.Ub();a.xb(1),a.Xb("src",c.bigImage,a.dc),a.xb(2),a.Xb("ngForOf",c.card.card_images),a.xb(2),a.Xb("ngIf",c.card.name),a.xb(1),a.Xb("ngIf",c.card.type),a.xb(1),a.Xb("ngIf",c.card.atk),a.xb(1),a.Xb("ngIf",c.card.def),a.xb(1),a.Xb("ngIf",c.card.level),a.xb(1),a.Xb("ngIf",c.card.race),a.xb(1),a.Xb("ngIf",c.card.attribute),a.xb(1),a.Xb("ngIf",c.card.archetype),a.xb(1),a.Xb("ngIf",c.card.scale),a.xb(2),a.Xb("ngForOf",c.card.card_prices),a.xb(5),a.hc(c.card.desc)}}let x=(()=>{class c{constructor(){}ngOnInit(){this.card&&this.card.card_images.length&&(this.bigImage=this.card.card_images[0].image_url)}ngOnChanges(c){c.card&&c.card.currentValue&&(this.bigImage=c.card.currentValue.card_images[0].image_url)}setBigImage(c){this.bigImage=c.image_url}}return c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=a.Cb({type:c,selectors:[["app-card-preview"]],inputs:{card:"card"},features:[a.vb],decls:1,vars:1,consts:[["class","card-preview",4,"ngIf"],[1,"card-preview"],["alt","",1,"big-image",3,"src"],[1,"images-small"],["alt","",3,"src","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-prices"],["class","card-price",4,"ngFor","ngForOf"],[1,"description"],["alt","",3,"src","click"],[1,"card-price"]],template:function(c,n){1&c&&a.fc(0,m,21,13,"div",0),2&c&&a.Xb("ngIf",n.card)},directives:[b.k,b.j],styles:[".card-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 10px;width:300px}.images-small[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin:5px 0}.images-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;cursor:pointer}.big-image[_ngcontent-%COMP%]{width:100%}span[_ngcontent-%COMP%]{font-weight:700;display:inline-flex;width:80px}.description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:100px;overflow:auto;padding:3px 0}"]}),c})()}}]);