(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qLZO:function(e,t,i){"use strict";i.r(t),i.d(t,"DeckModule",(function(){return x}));var r=i("tyNb");const n=e=>({attribute:e,moving:!1,cardMoveAreas:null,createCardTo:function(){const e=document.createElement("div");return e.classList.add("card-to"),e},itemMouseDown:function(e){if(e.target.parentElement.hasAttribute("insert-mode"))this.moving=!1;else{if(this.moving=!0,e.target.parentElement.hasAttribute("extract-mode")){const t=e.target.cloneNode(!0);t.addEventListener("mousedown",this.itemMouseDown.bind(this)),e.target.parentElement.insertBefore(t,e.target.nextSibling)}e.target.addEventListener("mousemove",this.itemMouseMove.bind(this)),e.target.addEventListener("mouseup",this.itemMouseUp.bind(this)),e.target.style.top=e.target.getBoundingClientRect().top+"px",e.target.style.left=e.target.getBoundingClientRect().left+"px",e.target.style.position="fixed",e.target.style.zIndex=10}},itemMouseMove:function(e){if(this.moving){e.target.style.top=e.y-e.target.clientHeight/2+"px",e.target.style.left=e.x-e.target.clientWidth/2+"px";const t=document.elementsFromPoint(e.clientX,e.clientY).find(t=>t.hasAttribute(this.attribute+"-item")&&t.getAttribute(this.attribute+"-item-id")!==e.target.getAttribute(this.attribute+"-item-id")||t.classList.contains("card-to"));if(t)t.parentElement.hasAttribute("extract-mode")||t.classList.contains("card-to")||(document.querySelectorAll(".card-to").forEach(e=>e.remove()),t.parentElement.insertBefore(this.createCardTo(),t));else{const t=document.elementsFromPoint(e.clientX,e.clientY).find(e=>e.hasAttribute(this.attribute));document.querySelectorAll(".card-to").forEach(e=>e.remove()),t&&!t.hasAttribute("extract-mode")&&t.appendChild(this.createCardTo())}}},itemMouseUp:function(e){if(this.moving){e.target.removeEventListener("mousemove",e=>this.itemMouseMove),e.target.removeEventListener("mouseup",e=>this.itemMouseUp);const t=document.elementsFromPoint(e.clientX,e.clientY).find(e=>e.hasAttribute(this.attribute)),i={from:null,to:null};if(t.hasAttribute("extract-mode"))e.target.remove();else{if(t){const r=document.elementsFromPoint(e.clientX,e.clientY).find(t=>t.classList.contains("card-to")||t.hasAttribute(this.attribute+"-item")&&t.getAttribute(this.attribute+"-item-id")!=e.target.getAttribute(this.attribute+"-item-id"));e.target.setAttribute(this.attribute+"-id",t.getAttribute(this.attribute+"-id")),i.from=e.target.parentElement,r?t.insertBefore(e.target,r):t.appendChild(e.target),i.to=e.target.parentElement}e.target.style.removeProperty("top"),e.target.style.removeProperty("left"),e.target.style.removeProperty("position"),e.target.style.removeProperty("z-index"),i.from&&i.to&&(this.reorderAreaIds(i.from),this.reorderAreaIds(i.to),i.from.getAttribute(this.attribute+"-id")===i.to.getAttribute(this.attribute+"-id")?this.doEvents.moveSameArea(this,i.to):this.doEvents.moveDifferentAreas(this,i.from,i.to))}document.querySelectorAll(".card-to").forEach(e=>e.remove()),this.moving=!1}},reorderAreaIds:function(e){for(let t=0;t<e.children.length;t++)e.children[t].setAttribute(this.attribute+"-item-id",`${e.getAttribute(this.attribute+"-id")}-${t}`)},initArea:function(e,t,i){for(let r=0;r<t.children.length;r++){const n=t.children[r];n.setAttribute(this.attribute+"-item",!0),n.setAttribute(this.attribute+"-id",i),n.setAttribute(this.attribute+"-item-id",`${i}-${r}`),n.addEventListener("mousedown",e.itemMouseDown.bind(e))}},initCardMove:function(e){e.cardMoveAreas=document.querySelectorAll("["+e.attribute+"]"),e.cardMoveAreas.forEach((t,i)=>{t.setAttribute(this.attribute+"-id",i),e.initArea(e,t,i)}),e.doEvents.init(e)},events:{init:null,moveSameArea:null,moveDifferentAreas:null},doEvents:{init:e=>{e.events.init&&e.events.init()},moveSameArea:(e,t)=>{e.events.moveSameArea&&e.events.moveSameArea(t)},moveDifferentAreas:(e,t,i)=>{e.events.moveDifferentAreas&&e.events.moveDifferentAreas(t,i)}}});var o=i("fXoL"),a=i("QJME"),c=i("sm2E"),s=i("3Pt+"),d=i("ofXK"),l=i("h3Nf");const m=function(e){return{backgroundImage:e}};function u(e,t){if(1&e){const e=o.Lb();o.Kb(0,"div",5),o.Rb("mouseenter",(function(){o.ac(e);const i=t.$implicit;return o.Tb().cardHover.emit(i)})),o.Jb()}2&e&&o.Wb("ngStyle",o.Yb(1,m,"url("+t.$implicit.card_images[0].image_url_small+")"))}function p(e,t){if(1&e){const e=o.Lb();o.Kb(0,"div",5),o.Rb("mouseenter",(function(){o.ac(e);const i=t.$implicit;return o.Tb().cardHover.emit(i)})),o.Jb()}2&e&&o.Wb("ngStyle",o.Yb(1,m,"url("+t.$implicit.card_images[0].image_url_small+")"))}function g(e,t){if(1&e){const e=o.Lb();o.Kb(0,"div",5),o.Rb("mouseenter",(function(){o.ac(e);const i=t.$implicit;return o.Tb().cardHover.emit(i)})),o.Jb()}2&e&&o.Wb("ngStyle",o.Yb(1,m,"url("+t.$implicit.card_images[0].image_url_small+")"))}let b=(()=>{class e{constructor(){this.cardHover=new o.n}ngOnInit(){}getMainCardsInfo(e){const t=e.filter(e=>e.type.includes("Monster")).length,i=e.filter(e=>e.type.includes("Spell")||e.type.includes("Skill")).length,r=e.filter(e=>e.type.includes("Trap")).length;return`${e.length} [ Monstros: ${t}, Magia: ${i}, Armadilha: ${r} ]`}getExtraCardsInfo(e){const t=e.filter(e=>e.type.includes("Fusion")).length,i=e.filter(e=>e.type.includes("Spell")||e.type.includes("XYZ")).length,r=e.filter(e=>e.type.includes("Synchro")).length,n=e.filter(e=>e.type.includes("Link")).length;return`${e.length} [ Fus\xe3o: ${t}, XYZ: ${i}, Sincro: ${r}, Link: ${n} ]`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-active-deck"]],inputs:{deck:"deck"},outputs:{cardHover:"cardHover"},decls:25,vars:6,consts:[[1,"deck-container"],[1,"deck-section"],[1,"deck-header"],["card-move-area","",1,"deck-cards"],["class","card-move",3,"ngStyle","mouseenter",4,"ngFor","ngForOf"],[1,"card-move",3,"ngStyle","mouseenter"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"section",1),o.Kb(2,"div",2),o.Kb(3,"span"),o.ec(4,"Main"),o.Jb(),o.Kb(5,"span"),o.ec(6),o.Jb(),o.Jb(),o.Kb(7,"div",3),o.dc(8,u,1,3,"div",4),o.Jb(),o.Jb(),o.Kb(9,"section",1),o.Kb(10,"div",2),o.Kb(11,"span"),o.ec(12,"Extra"),o.Jb(),o.Kb(13,"span"),o.ec(14),o.Jb(),o.Jb(),o.Kb(15,"div",3),o.dc(16,p,1,3,"div",4),o.Jb(),o.Jb(),o.Kb(17,"section",1),o.Kb(18,"div",2),o.Kb(19,"span"),o.ec(20,"Apoio"),o.Jb(),o.Kb(21,"span"),o.ec(22),o.Jb(),o.Jb(),o.Kb(23,"div",3),o.dc(24,g,1,3,"div",4),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(6),o.fc(t.getMainCardsInfo(t.deck.main)),o.xb(2),o.Wb("ngForOf",t.deck.main),o.xb(6),o.fc(t.getExtraCardsInfo(t.deck.extra)),o.xb(2),o.Wb("ngForOf",t.deck.extra),o.xb(6),o.fc(t.getMainCardsInfo(t.deck.side)),o.xb(2),o.Wb("ngForOf",t.deck.side))},directives:[d.i,d.k],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.deck-container[_ngcontent-%COMP%]{width:100%}.deck-container[_ngcontent-%COMP%], .deck-section[_ngcontent-%COMP%]{border:1px solid #000}.deck-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px 5px 0}.deck-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(13,1fr);gap:5px;padding:5px}.deck-cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.card-move[_ngcontent-%COMP%], .card-to[_ngcontent-%COMP%]{width:56.61px!important;height:82.89px!important}"]}),e})();var v=i("BBkE");const h=["inputImportDeck"];function f(e,t){if(1&e){const e=o.Lb();o.Kb(0,"label",9),o.Kb(1,"input",10),o.Rb("change",(function(){o.ac(e);const i=t.$implicit;return o.Tb().setActiveDeck(i)})),o.Jb(),o.ec(2),o.Jb()}if(2&e){const e=t.$implicit;o.Xb("for",e.name),o.xb(1),o.Xb("id",e.name),o.xb(1),o.gc(" ",e.name," ")}}function k(e,t){if(1&e){const e=o.Lb();o.Kb(0,"app-active-deck",11),o.Rb("cardHover",(function(t){return o.ac(e),o.Tb().cardPreview=t})),o.Jb()}if(2&e){const e=o.Tb();o.Wb("deck",e.activeDeck)}}function y(e,t){if(1&e){const e=o.Lb();o.Kb(0,"app-card-search",12),o.Rb("cardHover",(function(t){return o.ac(e),o.Tb().cardPreview=t}))("searchEvent",(function(t){return o.ac(e),o.Tb().searchEvent(t)})),o.Jb()}if(2&e){const e=o.Tb();o.Wb("moveattribute",e.areaMoveAttribute)}}const M=[{path:"",component:(()=>{class e{constructor(e,t){this.ygoprodeckService=e,this.deckService=t,this.modalSearch=!1,this.decks=[],this.newDeckName="",this.areaMoveAttribute="card-move-area",this.moveHandler=n(this.areaMoveAttribute)}ngOnInit(){this.decks.push(this.deckService.ydk2Deck("Dark Magician",["#created by pedroatem","#main","46986414","46986415","46986416","40737112","71703785","71703785","71703785","35191415","35191415","35191415","30603688","38033125","7084129","7084129","71696014","71696014","1784686","2314238","12580477","49702428","55144522","75500286","82404868","82404868","83764719","98645731","111280","23020408","41735184","59514116","69542930","73616671","75190122","47222536","47222536","68462976","7922915","7922915","9287078","9287078","16964437","32754886","44095762","62279055","81210420","48680970","48680970","48680970","54175023","78625592","86509711","89448140","#extra","41721210","75380687","98502114","50237654","73452089","43892408","39030163","96471335","85551711","!side","38033121","38033123","82627406","7198399","56132807","34318086","20747792","97631303","49941059","47222536","7922915",""])),this.activeDeck=this.decks[0],this.cardPreview={id:97631303,name:"Almas dos Magos",type:"Effect Monster",desc:'Voc\xea pode enviar at\xe9 2 Magias/Armadilhas da sua m\xe3o e/ou do campo para o Cemit\xe9rio; compre esse n\xfamero de cards. Se este card estiver na sua m\xe3o: voc\xea pode enviar 1 monstro Mago de N\xedvel 6 ou mais do seu Deck para o Cemit\xe9rio e, depois, ative 1 desses efeitos;\r\n\u25cf Invoque este card por Invoca\xe7\xe3o-Especial.\r\n\u25cf Envie este card para o Cemit\xe9rio e, depois, voc\xea pode Invocar por Invoca\xe7\xe3o-Especial 1 "Mago Negro" ou 1 "Pequena Maga Negra" do seu Cemit\xe9rio.\r\nVoc\xea s\xf3 pode usar cada efeito de "Almas dos Magos" uma vez por turno.\n',atk:0,def:0,level:1,scale:0,race:"Spellcaster",attribute:"DARK",name_en:"Magicians' Souls",archetype:"Dark Magician",card_sets:[{set_name:"Legendary Duelists: Magical Hero",set_code:"LED6-EN002",set_rarity:"Ultra Rare",set_rarity_code:"(UR)",set_price:"93.52"}],card_images:[{id:97631303,image_url:"https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg",image_url_small:"https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg"},{id:97631303,image_url:"https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg",image_url_small:"https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg"},{id:97631303,image_url:"https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg",image_url_small:"https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg"},{id:97631303,image_url:"https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg",image_url_small:"https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg"},{id:97631303,image_url:"https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg",image_url_small:"https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg"}],card_prices:[{cardmarket_price:"56.62",tcgplayer_price:"89.72",ebay_price:"99.99",amazon_price:"129.59",coolstuffinc_price:"89.99"}]},this.initMove()}modalCardSelect(e){console.log(e)}openModal(){this.modalSearch=!0}setActiveDeck(e){this.activeDeck=e}addDeck(){this.decks.push({name:this.newDeckName,createdBy:"",main:[],extra:[],side:[]}),this.newDeckName=""}importDeck(){this.inputImportDeck.nativeElement.click()}handleInputDeck(e){const t=new FileReader;t.onload=i=>{this.decks.push(this.deckService.ydk2Deck(e[0].name.replace(".ydk",""),t.result.split("\n"))),this.activeDeck=this.decks[0]},t.readAsText(e[0])}initMove(){setTimeout(()=>{this.moveHandler.initCardMove(this.moveHandler)},100)}searchEvent(e){this.initMove()}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(a.a),o.Hb(c.a))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-deck"]],viewQuery:function(e,t){var i;1&e&&o.hc(h,!0),2&e&&o.Zb(i=o.Sb())&&(t.inputImportDeck=i.first)},decls:16,vars:5,consts:[["type","text","placeholder","Nome do novo deck",3,"ngModel","ngModelChange"],[3,"click"],["type","file","name","",2,"display","none",3,"change"],["inputImportDeck",""],[3,"for",4,"ngFor","ngForOf"],[1,"active-deck"],[1,"active-deck-preview",3,"card"],["class","active-deck-cards",3,"deck","cardHover",4,"ngIf"],["class","active-deck-search",3,"moveattribute","cardHover","searchEvent",4,"ngIf"],[3,"for"],["type","radio","name","deck-radio",3,"id","change"],[1,"active-deck-cards",3,"deck","cardHover"],[1,"active-deck-search",3,"moveattribute","cardHover","searchEvent"]],template:function(e,t){1&e&&(o.Kb(0,"div"),o.Kb(1,"input",0),o.Rb("ngModelChange",(function(e){return t.newDeckName=e})),o.Jb(),o.Kb(2,"button",1),o.Rb("click",(function(){return t.addDeck()})),o.ec(3,"Novo Deck"),o.Jb(),o.Kb(4,"div"),o.Kb(5,"input",2,3),o.Rb("change",(function(e){return t.handleInputDeck(e.target.files)})),o.Jb(),o.Kb(7,"button",1),o.Rb("click",(function(){return t.importDeck()})),o.ec(8,"Importar Deck"),o.Jb(),o.Jb(),o.Ib(9,"br"),o.Ib(10,"br"),o.dc(11,f,3,3,"label",4),o.Jb(),o.Kb(12,"div",5),o.Ib(13,"app-card-preview",6),o.dc(14,k,1,1,"app-active-deck",7),o.dc(15,y,1,1,"app-card-search",8),o.Jb()),2&e&&(o.xb(1),o.Wb("ngModel",t.newDeckName),o.xb(10),o.Wb("ngForOf",t.decks),o.xb(2),o.Wb("card",t.cardPreview),o.xb(1),o.Wb("ngIf",t.activeDeck),o.xb(1),o.Wb("ngIf",t.activeDeck))},directives:[s.a,s.e,s.f,d.i,l.a,d.j,b,v.a],styles:[".active-deck[_ngcontent-%COMP%]{display:flex}.active-deck-preview[_ngcontent-%COMP%]{width:300px}.active-deck-cards[_ngcontent-%COMP%], .active-deck-search[_ngcontent-%COMP%]{width:calc(50% - 150px)}"]}),e})()}];let _=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[r.a.forChild(M)],r.a]}),e})();var A=i("PCNd");let x=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[A.a,_]]}),e})()}}]);