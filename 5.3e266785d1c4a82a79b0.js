(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qLZO:function(e,t,i){"use strict";i.r(t),i.d(t,"DeckModule",(function(){return D}));var r=i("tyNb");const n=e=>({attribute:e,moving:!1,cardMoveAreas:null,createCardTo:function(){const e=document.createElement("div");return e.classList.add("card-to"),e},itemMouseDown:function(e){if(e.target.parentElement.hasAttribute("insert-mode"))this.moving=!1;else{if(this.moving=!0,e.target.parentElement.hasAttribute("extract-mode")){const t=e.target.cloneNode(!0);t.addEventListener("mousedown",this.itemMouseDown.bind(this)),e.target.parentElement.insertBefore(t,e.target.nextSibling)}e.target.addEventListener("mousemove",this.itemMouseMove.bind(this)),e.target.addEventListener("mouseup",this.itemMouseUp.bind(this)),e.target.style.top=e.target.getBoundingClientRect().top+"px",e.target.style.left=e.target.getBoundingClientRect().left+"px",e.target.style.position="fixed",e.target.style.zIndex=10}},itemMouseMove:function(e){if(this.moving){e.target.style.top=e.y-e.target.clientHeight/2+"px",e.target.style.left=e.x-e.target.clientWidth/2+"px";const t=document.elementsFromPoint(e.clientX,e.clientY).find(t=>t.hasAttribute(this.attribute+"-item")&&t.getAttribute(this.attribute+"-item-id")!==e.target.getAttribute(this.attribute+"-item-id")||t.classList.contains("card-to"));if(t)t.parentElement.hasAttribute("extract-mode")||t.classList.contains("card-to")||(document.querySelectorAll(".card-to").forEach(e=>e.remove()),t.parentElement.insertBefore(this.createCardTo(),t));else{const t=document.elementsFromPoint(e.clientX,e.clientY).find(e=>e.hasAttribute(this.attribute));document.querySelectorAll(".card-to").forEach(e=>e.remove()),t&&!t.hasAttribute("extract-mode")&&t.appendChild(this.createCardTo())}}},itemMouseUp:function(e){if(this.moving){e.target.removeEventListener("mousemove",e=>this.itemMouseMove),e.target.removeEventListener("mouseup",e=>this.itemMouseUp);const t=document.elementsFromPoint(e.clientX,e.clientY).find(e=>e.hasAttribute(this.attribute)),i={from:null,to:null};let r=!1;if(t)if(t.hasAttribute("extract-mode"))r=!0;else{const r=document.elementsFromPoint(e.clientX,e.clientY).find(t=>t.classList.contains("card-to")||t.hasAttribute(this.attribute+"-item")&&t.getAttribute(this.attribute+"-item-id")!=e.target.getAttribute(this.attribute+"-item-id"));e.target.setAttribute(this.attribute+"-id",t.getAttribute(this.attribute+"-id")),i.from=e.target.parentElement,r?t.insertBefore(e.target,r):t.appendChild(e.target),i.to=e.target.parentElement}e.target.style.removeProperty("top"),e.target.style.removeProperty("left"),e.target.style.removeProperty("position"),e.target.style.removeProperty("z-index"),i.from&&i.to&&(this.reorderAreaIds(i.from),this.reorderAreaIds(i.to),i.from.getAttribute(this.attribute+"-id")===i.to.getAttribute(this.attribute+"-id")?this.doEvents.moveSameArea(this,i.to):this.doEvents.moveDifferentAreas(this,i.from,i.to)),r&&e.target.remove(),document.querySelectorAll(".card-to").forEach(e=>e.remove()),this.moving=!1}},reorderAreaIds:function(e){for(let t=0;t<e.children.length;t++)e.children[t].setAttribute(this.attribute+"-item-id",`${e.getAttribute(this.attribute+"-id")}-${t}`)},initArea:function(e,t,i){for(let r=0;r<t.children.length;r++){const n=t.children[r];n.hasAttribute(this.attribute+"-item")||(n.setAttribute(this.attribute+"-item",!0),n.setAttribute(this.attribute+"-id",i),n.setAttribute(this.attribute+"-item-id",`${i}-${r}`),n.addEventListener("mousedown",e.itemMouseDown.bind(e)))}},initCardMove:function(e){e.cardMoveAreas=document.querySelectorAll("["+e.attribute+"]"),e.cardMoveAreas.forEach((t,i)=>{t.setAttribute(this.attribute+"-id",i),e.initArea(e,t,i)}),e.doEvents.init(e)},events:{init:null,moveSameArea:null,moveDifferentAreas:null},doEvents:{init:e=>{e.events.init&&e.events.init()},moveSameArea:(e,t)=>{e.events.moveSameArea&&e.events.moveSameArea(t)},moveDifferentAreas:(e,t,i)=>{e.events.moveDifferentAreas&&e.events.moveDifferentAreas(t,i)}}});var a=i("fXoL"),c=i("QJME"),o=i("sm2E"),s=i("3Pt+"),d=i("ofXK"),l=i("h3Nf");const u=function(e){return{backgroundImage:e}};function m(e,t){if(1&e){const e=a.Lb();a.Kb(0,"div",5),a.Rb("mouseenter",(function(){a.ac(e);const i=t.$implicit;return a.Tb().cardHover.emit(i)})),a.Jb()}2&e&&a.Wb("ngStyle",a.Yb(1,u,"url("+t.$implicit.card_images[0].image_url_small+")"))}function b(e,t){if(1&e){const e=a.Lb();a.Kb(0,"div",5),a.Rb("mouseenter",(function(){a.ac(e);const i=t.$implicit;return a.Tb().cardHover.emit(i)})),a.Jb()}2&e&&a.Wb("ngStyle",a.Yb(1,u,"url("+t.$implicit.card_images[0].image_url_small+")"))}function p(e,t){if(1&e){const e=a.Lb();a.Kb(0,"div",5),a.Rb("mouseenter",(function(){a.ac(e);const i=t.$implicit;return a.Tb().cardHover.emit(i)})),a.Jb()}2&e&&a.Wb("ngStyle",a.Yb(1,u,"url("+t.$implicit.card_images[0].image_url_small+")"))}let v=(()=>{class e{constructor(){this.cardHover=new a.n}ngOnInit(){}getMainCardsInfo(e){const t=e.filter(e=>e.type.includes("Monster")).length,i=e.filter(e=>e.type.includes("Spell")||e.type.includes("Skill")).length,r=e.filter(e=>e.type.includes("Trap")).length;return`${e.length} [ Monstros: ${t}, Magia: ${i}, Armadilha: ${r} ]`}getExtraCardsInfo(e){const t=e.filter(e=>e.type.includes("Fusion")).length,i=e.filter(e=>e.type.includes("Spell")||e.type.includes("XYZ")).length,r=e.filter(e=>e.type.includes("Synchro")).length,n=e.filter(e=>e.type.includes("Link")).length;return`${e.length} [ Fus\xe3o: ${t}, XYZ: ${i}, Sincro: ${r}, Link: ${n} ]`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Bb({type:e,selectors:[["app-active-deck"]],inputs:{deck:"deck"},outputs:{cardHover:"cardHover"},decls:25,vars:6,consts:[[1,"deck-container"],[1,"deck-section"],[1,"deck-header"],["card-move-area","",1,"deck-cards"],["class","card-move",3,"ngStyle","mouseenter",4,"ngFor","ngForOf"],[1,"card-move",3,"ngStyle","mouseenter"]],template:function(e,t){1&e&&(a.Kb(0,"div",0),a.Kb(1,"section",1),a.Kb(2,"div",2),a.Kb(3,"span"),a.ec(4,"Main"),a.Jb(),a.Kb(5,"span"),a.ec(6),a.Jb(),a.Jb(),a.Kb(7,"div",3),a.dc(8,m,1,3,"div",4),a.Jb(),a.Jb(),a.Kb(9,"section",1),a.Kb(10,"div",2),a.Kb(11,"span"),a.ec(12,"Extra"),a.Jb(),a.Kb(13,"span"),a.ec(14),a.Jb(),a.Jb(),a.Kb(15,"div",3),a.dc(16,b,1,3,"div",4),a.Jb(),a.Jb(),a.Kb(17,"section",1),a.Kb(18,"div",2),a.Kb(19,"span"),a.ec(20,"Apoio"),a.Jb(),a.Kb(21,"span"),a.ec(22),a.Jb(),a.Jb(),a.Kb(23,"div",3),a.dc(24,p,1,3,"div",4),a.Jb(),a.Jb(),a.Jb()),2&e&&(a.xb(6),a.fc(t.getMainCardsInfo(t.deck.main)),a.xb(2),a.Wb("ngForOf",t.deck.main),a.xb(6),a.fc(t.getExtraCardsInfo(t.deck.extra)),a.xb(2),a.Wb("ngForOf",t.deck.extra),a.xb(6),a.fc(t.getMainCardsInfo(t.deck.side)),a.xb(2),a.Wb("ngForOf",t.deck.side))},directives:[d.i,d.k],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.deck-container[_ngcontent-%COMP%]{width:100%}.deck-container[_ngcontent-%COMP%], .deck-section[_ngcontent-%COMP%]{border:1px solid #000}.deck-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px 5px 0}.deck-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(13,1fr);gap:5px;padding:5px}.deck-cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.card-move[_ngcontent-%COMP%], .card-to[_ngcontent-%COMP%]{width:56.61px!important;height:82.89px!important}"]}),e})();var g=i("BBkE");const h=["inputImportDeck"];function f(e,t){if(1&e){const e=a.Lb();a.Kb(0,"label",9),a.Kb(1,"input",10),a.Rb("change",(function(){a.ac(e);const i=t.$implicit;return a.Tb().setActiveDeck(i)})),a.Jb(),a.ec(2),a.Jb()}if(2&e){const e=t.$implicit;a.Xb("for",e.name),a.xb(1),a.Xb("id",e.name),a.xb(1),a.gc(" ",e.name," ")}}function k(e,t){if(1&e){const e=a.Lb();a.Kb(0,"app-active-deck",11),a.Rb("cardHover",(function(t){return a.ac(e),a.Tb().cardPreview=t})),a.Jb()}if(2&e){const e=a.Tb();a.Wb("deck",e.activeDeck)}}function y(e,t){if(1&e){const e=a.Lb();a.Kb(0,"app-card-search",12),a.Rb("cardHover",(function(t){return a.ac(e),a.Tb().cardPreview=t}))("searchEvent",(function(t){return a.ac(e),a.Tb().searchEvent(t)})),a.Jb()}if(2&e){const e=a.Tb();a.Wb("moveattribute",e.areaMoveAttribute)}}const M=[{path:"",component:(()=>{class e{constructor(e,t){this.ygoprodeckService=e,this.deckService=t,this.modalSearch=!1,this.decks=[],this.newDeckName="",this.areaMoveAttribute="card-move-area",this.moveHandler=n(this.areaMoveAttribute)}ngOnInit(){this.decks.push(this.deckService.ydk2Deck("Dark Magician",["#created by pedroatem","#main","46986414","46986415","46986416","40737112","71703785","71703785","71703785","35191415","35191415","35191415","30603688","38033125","7084129","7084129","71696014","71696014","1784686","2314238","12580477","49702428","55144522","75500286","82404868","82404868","83764719","98645731","111280","23020408","41735184","59514116","69542930","73616671","75190122","47222536","47222536","68462976","7922915","7922915","9287078","9287078","16964437","32754886","44095762","62279055","81210420","48680970","48680970","48680970","54175023","78625592","86509711","89448140","#extra","41721210","75380687","98502114","50237654","73452089","43892408","39030163","96471335","85551711","!side","38033121","38033123","82627406","7198399","56132807","34318086","20747792","97631303","49941059","47222536","7922915",""])),this.activeDeck=this.decks[0],this.cardPreview={id:97631303,name:"Almas dos Magos",type:"Effect Monster",desc:'Voc\xea pode enviar at\xe9 2 Magias/Armadilhas da sua m\xe3o e/ou do campo para o Cemit\xe9rio; compre esse n\xfamero de cards. Se este card estiver na sua m\xe3o: voc\xea pode enviar 1 monstro Mago de N\xedvel 6 ou mais do seu Deck para o Cemit\xe9rio e, depois, ative 1 desses efeitos;\r\n\u25cf Invoque este card por Invoca\xe7\xe3o-Especial.\r\n\u25cf Envie este card para o Cemit\xe9rio e, depois, voc\xea pode Invocar por Invoca\xe7\xe3o-Especial 1 "Mago Negro" ou 1 "Pequena Maga Negra" do seu Cemit\xe9rio.\r\nVoc\xea s\xf3 pode usar cada efeito de "Almas dos Magos" uma vez por turno.\n',atk:0,def:0,level:1,scale:0,race:"Spellcaster",attribute:"DARK",name_en:"Magicians' Souls",archetype:"Dark Magician",card_sets:[{set_name:"Legendary Duelists: Magical Hero",set_code:"LED6-EN002",set_rarity:"Ultra Rare",set_rarity_code:"(UR)",set_price:"93.52"}],card_images:[{id:97631303,image_url:"https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg",image_url_small:"https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg"}],card_prices:[{cardmarket_price:"56.62",tcgplayer_price:"89.72",ebay_price:"99.99",amazon_price:"129.59",coolstuffinc_price:"89.99"}]},this.initMove()}modalCardSelect(e){console.log(e)}openModal(){this.modalSearch=!0}setActiveDeck(e){this.activeDeck=e}addDeck(){this.decks.push({name:this.newDeckName,createdBy:"",main:[],extra:[],side:[]}),this.newDeckName=""}importDeck(){this.inputImportDeck.nativeElement.click()}handleInputDeck(e){const t=new FileReader;t.onload=i=>{this.decks.push(this.deckService.ydk2Deck(e[0].name.replace(".ydk",""),t.result.split("\n"))),this.activeDeck=this.decks[0]},t.readAsText(e[0])}initMove(){setTimeout(()=>{this.moveHandler.initCardMove(this.moveHandler)},1e3)}searchEvent(e){this.initMove()}}return e.\u0275fac=function(t){return new(t||e)(a.Hb(c.a),a.Hb(o.a))},e.\u0275cmp=a.Bb({type:e,selectors:[["app-deck"]],viewQuery:function(e,t){var i;1&e&&a.hc(h,!0),2&e&&a.Zb(i=a.Sb())&&(t.inputImportDeck=i.first)},decls:16,vars:5,consts:[["type","text","placeholder","Nome do novo deck",3,"ngModel","ngModelChange"],[3,"click"],["type","file","name","",2,"display","none",3,"change"],["inputImportDeck",""],[3,"for",4,"ngFor","ngForOf"],[1,"active-deck"],[1,"active-deck-preview",3,"card"],["class","active-deck-cards",3,"deck","cardHover",4,"ngIf"],["class","active-deck-search",3,"moveattribute","cardHover","searchEvent",4,"ngIf"],[3,"for"],["type","radio","name","deck-radio",3,"id","change"],[1,"active-deck-cards",3,"deck","cardHover"],[1,"active-deck-search",3,"moveattribute","cardHover","searchEvent"]],template:function(e,t){1&e&&(a.Kb(0,"div"),a.Kb(1,"input",0),a.Rb("ngModelChange",(function(e){return t.newDeckName=e})),a.Jb(),a.Kb(2,"button",1),a.Rb("click",(function(){return t.addDeck()})),a.ec(3,"Novo Deck"),a.Jb(),a.Kb(4,"div"),a.Kb(5,"input",2,3),a.Rb("change",(function(e){return t.handleInputDeck(e.target.files)})),a.Jb(),a.Kb(7,"button",1),a.Rb("click",(function(){return t.importDeck()})),a.ec(8,"Importar Deck"),a.Jb(),a.Jb(),a.Ib(9,"br"),a.Ib(10,"br"),a.dc(11,f,3,3,"label",4),a.Jb(),a.Kb(12,"div",5),a.Ib(13,"app-card-preview",6),a.dc(14,k,1,1,"app-active-deck",7),a.dc(15,y,1,1,"app-card-search",8),a.Jb()),2&e&&(a.xb(1),a.Wb("ngModel",t.newDeckName),a.xb(10),a.Wb("ngForOf",t.decks),a.xb(2),a.Wb("card",t.cardPreview),a.xb(1),a.Wb("ngIf",t.activeDeck),a.xb(1),a.Wb("ngIf",t.activeDeck))},directives:[s.a,s.e,s.f,d.i,l.a,d.j,v,g.a],styles:[".active-deck[_ngcontent-%COMP%]{display:flex}.active-deck-preview[_ngcontent-%COMP%]{width:300px}.active-deck-cards[_ngcontent-%COMP%], .active-deck-search[_ngcontent-%COMP%]{width:calc(50% - 150px)}"]}),e})()}];let A=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[r.a.forChild(M)],r.a]}),e})();var x=i("PCNd");let D=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[x.a,A]]}),e})()}}]);