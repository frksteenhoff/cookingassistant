(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function o(e){return l.p+"js/"+({conversion:"conversion",recipes:"recipes"}[e]||e)+"."+{"chunk-7899b127":"c45d78d6",conversion:"a45617b8",recipes:"5bb2fbb1"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-7899b127":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({conversion:"conversion",recipes:"recipes"}[e]||e)+"."+{"chunk-7899b127":"ad258bbf",conversion:"31d6cfe0",recipes:"31d6cfe0"}[e]+".css",s=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],m=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(m===n||m===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],m=c.getAttribute("data-href");if(m===n||m===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=s;var u=document.getElementsByTagName("head")[0];u.appendChild(p)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=i);var c,m=document.createElement("script");m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.src=o(e);var d=new Error;c=function(t){m.onerror=m.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:m})}),12e4);m.onerror=m.onload=c,document.head.appendChild(m)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],m=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=m;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"33e5":function(e,t,a){e.exports=a.p+"img/front.54135a91.jpg"},3774:function(e,t,a){e.exports=a.p+"img/logo_cropped.b4530a1f.png"},"49eb":function(e,t,a){e.exports=a.p+"img/instagram_logo.cb116fe2.png"},"85ec":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{sticky:"",toggleable:"lg",type:"dark",variant:"hest"}},[n("b-navbar-brand",{staticClass:"mb-0 pb-0 pt-0",attrs:{href:"/Home"}},[n("img",{staticStyle:{width:"60px"},attrs:{src:a("3774")}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-nav-item-dropdown",{attrs:{text:"Opskrifter",right:""}},[n("b-dropdown-item",{attrs:{href:"#/Recipes"}},[e._v("Alle opskrifter")]),n("b-dropdown-item",{attrs:{href:"#/Recipes"}},[e._v("Aftensmad")]),n("b-dropdown-item",{attrs:{href:"#/Recipes"}},[e._v("Morgenmad")]),n("b-dropdown-item",{attrs:{href:"#/Recipes"}},[e._v("Brød")]),n("b-dropdown-item",{attrs:{href:"#/Recipes"}},[e._v("Saucer og dips")]),n("b-dropdown-item",{attrs:{href:"#/Recipes"}},[e._v("Dessert og bagning")])],1),n("b-navbar-nav",e._l(e.links,(function(t){return n("div",{key:t.id},[n("b-nav-item",{attrs:{to:t.page}},[e._v(e._s(t.text))])],1)})),0)],1)],1),n("div",{attrs:{id:"content"}},[n("router-view")],1),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"footerinfo"},[n("p",{staticClass:"font-bold m-0",staticStyle:{"font-size":"1rem","font-family":"'Permanent Marker'"}},[e._v(" Henriette Steenhoff "),n("span",{attrs:{id:"insta_logo"}},[n("a",{attrs:{href:"https://www.instagram.com/frksteenhoff/",target:"_blank"}},[n("img",{staticClass:"m-4",staticStyle:{float:"right"},attrs:{src:a("49eb")}})])])]),n("p",{staticClass:"m-0"},[n("a",{staticClass:"pl-0",staticStyle:{"font-size":"0.8rem"},attrs:{href:"mailto:henriette.steenhoff@gmail.com?Subject=Vriiinsk",target:"_blank"}},[e._v("henriette.steenhoff@gmail.com")])]),n("p",{staticClass:"mt-0"},[n("a",{staticClass:"pl-0",staticStyle:{"font-size":"0.8rem"},attrs:{href:"https://www.twitter.com/frksteehoff"}},[e._v("@frksteenhoff")])])])])}],i=a("d4ec"),o=a("262e"),l=a("2caf"),c=a("9ab4"),m=a("60a3"),d=m["c"].extend({props:{}}),p=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.links=[{id:3,text:"Enhedsoversætter",page:"/UnitConverter"},{id:4,text:"Andre madlinks",page:"/FoodLinks"},{id:5,text:"Opret",page:"/Create"}],e}return a}(d);p=Object(c["a"])([Object(m["a"])({components:{}})],p);var u=p,k=u,h=(a("034f"),a("2877")),f=Object(h["a"])(k,r,s,!1,null,null,null),b=f.exports,g=(a("d3b7"),a("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{staticStyle:{"margin-bottom":"20px"},attrs:{alt:"Landing page Logo",src:a("33e5")}}),n("Section",{attrs:{header:"Madglæde",content:"Velkommen til!*På denne side findes der et bredt udvalg af de opskrifter, som jeg benytter meget i hverdagen og som jeg synes er så gode, at de burde deles med verden -- eller hvertfald Danmark.*Min idé med disse opskrifter er at give en kort og præcis beskrivelse af ingredienser og fremgangsmåder samt at undgå for meget sniksnak og lange beskrivende tekster. Alle opskrifter kan ganges op i størrelse og jeg udvider løbende siden med ny funktionalitet.*Sammen med opskrifterne er der også en enhedsoversætter, så du nemt kan oversætte enheder fra en måleenhed til en anden. Der er mulighed både for at bruge nogle predefinerede oversættelser og at bygge din egen oversætte, hvis der ikke lige skulle være, det du havde behov for. Find den under 'enhedsoversætter' i menuen.*Nogle opskrifter er stærkt inspireret af opskrifter jeg har fundet på nettet. Her har jeg linket til originalen i den pågældende opskrift. Disse opskrifter har jeg som oftest forfinet lidt/ændret lidt i mængder ellr ingredienser fra originalen.*Jeg håber du finder noget du kan lide!*Skulle du opleve fejl eller mangler på siden, hvis der er noget der ikke er beskrevet godt nok, eller har du nogle gode idéer til, hvordan siden kunne gøres bedre, er du mere end velkommen til at kotakte mig på en af medierne angivet nedenunder."}})],1)},v=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",{staticClass:"mb-3"},[a("b-col",[a("h1",[e._v(e._s(e.header))])])],1),a("b-row",{staticClass:"mb-3"},e._l(e.content.split("*"),(function(t){return a("b-col",{key:t,attrs:{cols:"12"}},[a("p",[e._v(e._s(t))])])})),1)],1)},_=[],j=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(m["c"]);Object(c["a"])([Object(m["b"])()],j.prototype,"header",void 0),Object(c["a"])([Object(m["b"])()],j.prototype,"content",void 0),j=Object(c["a"])([m["a"]],j);var O=j,C=O,x=Object(h["a"])(C,y,_,!1,null,null,null),S=x.exports,P={name:"Home",components:{Section:S}},R=P,B=Object(h["a"])(R,w,v,!1,null,null,null),z=B.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"mt-3"},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"m-0"},[e._v("Page not found")])])],1),a("b-row",[a("b-col",{staticClass:"mt-5",attrs:{cols:"12"}},[a("p",{staticClass:"p-0 m-0"},[e._v("Uh oh! Page does not exist.")])])],1)],1)},L=[],M=m["c"].extend({props:{}}),T=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(M);T=Object(c["a"])([Object(m["a"])({})],T);var $=T,F=$,A=Object(h["a"])(F,E,L,!1,null,null,null),H=A.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"mt-3 mb-3"},[a("b-row",[a("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[a("h1",[e._v("Madlinks")])]),a("b-col",{attrs:{cols:"12"}},[a("h3",[e._v("Hovedretter")]),a("p",[e._v("Disse opskrifter bliver stille og roligt integreret på denne side med de retterser/tiføjelser som jeg har til dem. Jeg har tilføjet dem her som inspiration.")]),a("p",e._l(e.foodLinks,(function(t){return a("ul",{key:t.name},[a("li",[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))])])])})),0),a("h3",[e._v("Desserter")]),a("p",e._l(e.dessertLinks,(function(t){return a("ul",{key:t.name},[a("li",[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))])])])})),0),a("h3",[e._v("Andet")]),a("p",e._l(e.otherLinks,(function(t){return a("ul",{key:t.name},[a("li",[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))])])])})),0)])],1)],1)],1)},D=[],J={data:function(){return{otherLinks:[{name:"Meltyper",link:"https://madensverden.dk/meltyper/"}],dessertLinks:[{name:"Lemon meringue pie",link:"https://www.lurpak.com/da-dk/opskrifter-med-lurpak/lemon-meringue-taerte/"},{name:"Triple chocolate tart",link:"https://www.epicurious.com/recipes/food/views/triple-chocolate-tart-with-boozy-whipped-cream-365216"},{name:"Chokoladetærte med saltkaramel",link:"https://spisbedre.dk/opskrifter/chokoladetaerte-med-saltkaramel?utm_medium=gallery&utm_source=skedlink"},{name:"Plain cheesecake",link:"https://www.plainchicken.com/2015/01/the-best-homemade-cheesecake.html"},{name:"Chocolte covered cheesecake bites",link:"https://www.cookingpanda.com/content/get-recipe-cheesecake-bites"},{name:"Key lime cheesecake",link:"https://bakerbynature.com/key-lime-cheesecake/"},{name:"Creme linser",link:"https://www.metteblomsterberg.dk/opskrifter/smoerbagte-cremelinser"},{name:"Raspberry pavlova",link:"http://www.redonline.co.uk/food/best-recipes/best-easy-dinner-party-dessert-recipes#image=25"},{name:"Pavlova",link:"https://www.dansukker.dk/dk/inspiration/aret-rundt/sommer/sommerdesserter.aspx "},{name:"Lagkage på chokolade og hindbær mousse",link:"https://www.femina.dk/mad/desserter/lagkage-paa-kiksebund-med-maelkechokolademousse-og-hindbaermousse"},{name:"Chokoladekage med kaffemousse",link:"https://www.femina.dk/mad/desserter/chokoladekage-med-kaffemousse"},{name:"Brownies",link:"https://www.alt.dk/mad/opskrift/brownie"},{name:"Crumble cake",link:"https://www.marthastewart.com/1162570/black-raspberry-crumb-cake"},{name:"Chokolademoussekage",link:"https://www.femina.dk/mad/desserter/chokolademousse-kage-med-troeffelpynt"},{name:"Passionsmousse med marengs",link:"https://www.femina.dk/mad/desserter/passionsmousse-med-marengs"},{name:"Jordbær chokolademousse tårn",link:"https://bageglad.dk/jordbaer-chokolademousse-tarn/"},{name:"Chokolademousse",link:"https://www.louiogbearnaisen.dk/2017/01/chokolademousse.html"},{name:"Creme brulée",link:"https://madensverden.dk/creme-brulee/"},{name:"Creme brulée 2",link:"https://www.valdemarsro.dk/creme-brulee/"},{name:"Baked alaska",link:"https://www.femina.dk/mad/desserter/baked-alaska-med-hindbaerparfait"},{name:"Hindbær mousse",link:"https://www.gastrofun.dk/opskrift/hindbaer-mousse"},{name:"Passionsfrugt mousse",link:"https://www.laylita.com/recipes/maracuya-or-passion-fruit-mousse/"},{name:"Jordbærcreme",link:"https://spisbedre.dk/opskrifter/jordbaerlagkage-med-jordbaercreme"},{name:"Gateau marcel 2 lag",link:"https://www.femina.dk/mad/desserter/gateau-marcel-chokoladekage-i-lag"},{name:"Proteinpandekager",link:"http://www.webopskrifter.dk/opskrifter/proteinpandekagerbanankokos-21277/"},{name:"Havregrynskugler",link:"https://www.valdemarsro.dk/havregrynskugler/"}],foodLinks:[{name:"5 forskellige hverdagsretter",link:"https://www.facebook.com/buzzfeedtasty/videos/206721910731884/"},{name:"Blomkålssuppe",link:" https://www.valdemarsro.dk/blomkaalssuppe/"},{name:"Kyllingelasagne",link:"https://www.dk-kogebogen.dk/opskrifter/visopskrift.php?id=19934"},{name:"Porretærte",link:"http://www.webopskrifter.dk/madopskrifter/3321"},{name:"Blomkålsdeller",link:" http://anna-mad.dk/2017/02/sproede-blomkaalsdeller-med-foraarsloeg-og-parmesan/"},{name:"Squashpasta",link:"http://www.webopskrifter.dk/opskrifter/squashpasta-20541/"},{name:"Pasta i champignonsauce",link:"https://www.arla.dk/opskrifter/pasta-i-champignonsauce/"},{name:"Laksetartar",link:"https://www.spisbedre.dk/forretter/fisk/laekker-laksetatar-med-krydderurter"},{name:"Laksetartar (den med mayo)",link:"https://kreamorskoekken.dk/roeget-laksetatar/"},{name:"Grilled vegetables + feta + tabbouleh",link:"https://www.jamieoliver.com/recipes/cheese-recipes/griddled-vegetables-feta-with-tabbouleh/"},{name:"Kyllingeboller med rodfrugtspaghetti",link:"https://www.nemlig.com/opskrifter?search=Kyllingek%C3%B8dboller"},{name:"Gnocchi",link:"https://rigeligtsmor.dk/opskrift-hjemmelavet-gnocchi/"},{name:"Risotto",link:"http://www.saeson-web.dk/opskrifter/risotto-med-kylling-og-blomkaal/"},{name:"Risotto, svampe",link:"http://clemfoodie.com/2019/11/13/risotto-potimarron-champignons-noisettes/"},{name:"Græskarsrisotto",link:"http://clemfoodie.com/?s=Risotto+courge"},{name:"Aubergine parmigiana",link:"https://www.jamieoliver.com/recipes/vegetable-recipes/aubergine-parmigiana-with-crispy-breadcrumbs/"},{name:"Wine braised chicken",link:"https://www.jamieoliver.com/recipes/chicken-recipes/wine-braised-chicken-with-roasted-grapes/"},{name:"Wild rice mushroom risotto",link:"http://www.olivemagazine.com/recipes/wild-rice-and-mushroom-risotto-with-roast-garlic/15078.html"},{name:"Roast duck leg",link:"hhttps://www.bbcgoodfood.com/recipes/1188/roast-duck-legs-with-red-wine-sauceere"},{name:"Duck and shallots au vin",link:"http://www.olivemagazine.com/recipes/duck-and-shallots-au-vin/11690.html"},{name:"Bagt kylling med kartofler",link:"https://www.valdemarsro.dk/bagt-kylling/"},{name:"Ravioli med svampe",link:"https://www.valdemarsro.dk/ravioli-med-svampe-hasselnoedder-og-rosmarinsauce/"},{name:"Ravioli med gorgonzola sauce",link:"https://www.valdemarsro.dk/ravioli-opskrift/"},{name:"Butter chicken",link:"https://thekitchenpaper.com/indian-butter-chicken/"},{name:"Chicken Biryani",link:"https://www.thedeliciouscrescent.com/easy-hyderabadi-chicken-biryani/"},{name:"Chicken Korma",link:"https://dinnerthendessert.com/indian-chicken-korma/"},{name:"Naan Brød",link:"https://drkoch.dk/indiske-naanbroed-med-og-uden-hvidloeg-opskrift/"},{name:"Naan",link:"https://www.frokenkraesen.com/opskrift-naanbroed-paa-30-minutter/"},{name:"Mushroom curry",link:"https://www.jamieoliver.com/recipes/vegetable-recipes/mushroom-curry/"},{name:"Pulled chicken",link:"http://www.myrecipes.com/recipe/pulled-chicken-sandwiches"},{name:"Beef wellington",link:"https://tasty.co/recipe/show-stopping-beef-wellington"},{name:"Chicken fried rice",link:"https://www.valdemarsro.dk/fried-rice-med-kylling/"},{name:"Jacket potato",link:"http://www.foodnetwork.co.uk/article/jacket-potato-recipes/twice-baked-potatoes-0/3.html"},{name:"Buddha bowl",link:"https://www.valdemarsro.dk/buddha-bowl/"},{name:"Chicken satay",link:"https://www.yummly.com/recipe/Thai-Chicken-Satay-with-Peanut-Sauce-9026800?prm-v1#directions"},{name:"Bao",link:"https://www.bbcgoodfood.com/recipes/steamed-bao-buns"},{name:"Panang Curry Chicken",link:"https://www.louisesmadblog.dk/panang-karry-med-kylling-panang-gai/"},{name:"Tacos",link:"http://www.louisesmadblog.dk/tacos/"},{name:"Meatless tacos",link:"https://www.google.com/amp/s/tasty.co/compilation/meatless-tacos-5-ways"},{name:"Quinoa deller",link:"https://www.valdemarsro.dk/quinoadeller/"},{name:"Mexi kyllinge lasagne",link:"http://www.webopskrifter.dk/madopskrifter/150/"},{name:"Black bean enchiladas",link:"https://cookieandkate.com/2016/vegetarian-enchiladas-recipe/"},{name:"One-pot",link:"http://www.taste.com.au/recipes/mexican-beef-bean-frying-pan-meatballs/UbBjZVOS?r=recipes/onepotrecipes&c=eb502bf5-c548-4ff9-8e78-47ff7efef8ec/One%20pot%20recipes"},{name:"Peruvian style ceviche",link:"https://www.jamieoliver.com/recipes/seafood-recipes/peruvian-ceviche/"},{name:"Fish tacos",link:"https://www.delish.com/uk/cooking/recipes/a28869036/easy-fish-taco-recipe/"},{name:"Poached eggs",link:"https://downshiftology.com/recipes/poached-eggs/"},{name:"Black bean burgers",link:"https://www.jamieoliver.com/recipes/vegetable-recipes/black-bean-burgers/"},{name:"Mushroom wellington",link:"https://www.bbcgoodfood.com/recipes/12804/melty-mushroom-wellingtons"},{name:"Beetroot feta tarts",link:"https://www.bbcgoodfood.com/recipes/spiced-beetroot-feta-tarts-tahini-dressed-leaves"},{name:"Spinach/ricotta rotolo",link:"https://www.bbcgoodfood.com/recipes/spinach-ricotta-rotolo"},{name:"Garlic cheese stuffed mushrooms*",link:"https://www.happyfoodstube.com/garlic-stuffed-mushrooms/"},{name:"Salad chevre chaud",link:"https://www.valdemarsro.dk/salade-chevre-chaud/"},{name:"Veggie shepherd's pie",link:"https://www.valdemarsro.dk/vegetarisk-shepards-pie/"},{name:"Friturestegte svampe",link:"https://www.shroomi.dk/svampeopskrift/friturestegte-champignon/"},{name:"Potato roll",link:"https://www.instagram.com/p/B3eOWUoAs2E/?igshid=1rg33htw9fz6"},{name:"Moussaka",link:"https://www.valdemarsro.dk/moussaka/"},{name:"Egg plant goat cheese tomato bake",link:"https://www.allrecipes.com/recipe/63704/grilled-eggplant-tomato-and-goat-cheese/"},{name:"Spicy cauliflower wings",link:"https://www.veganricha.com/2019/07/sticky-sesame-cauliflower-recipe.html"},{name:"Sushi tacos",link:"http://coupleeatsfood.com/sushi-tacos-with-crispy-fried-seaweed-shells/"},{name:"Teriyaki",link:"https://www.tasteandtellblog.com/teriyaki-chicken/"},{name:"Salmon sashimi",link:"https://www.santamariaworld.com/ie/recipes/salmon-sashimi/"},{name:"Gyoza dipping sauce",link:"https://www.recipezazz.com/recipe/gyoza-dipping-sauce-20523"},{name:"Gyoza",link:"https://youtu.be/z60_v7NhFck"},{name:"Hoisin sauce",link:"https://www.daringgourmet.com/best-homemade-hoisin-sauce/"},{name:"Chinese five spice",link:"https://www.daringgourmet.com/2013/04/12/chinese-five-spice-powder/"},{name:"Homemade black bean sauce",link:"https://www.daringgourmet.com/2016/03/04/how-to-make-homemade-black-bean-sauce-or-black-bean-paste/"},{name:"Okonomiyaki",link:"https://www.valdemarsro.dk/okonomiyaki/"},{name:"Bao",link:"https://www.valdemarsro.dk/bao-opskrift/"},{name:"Bao filling",link:"https://www.google.com/amp/s/www.brit.co/steamed-bao-recipes-2639446564.amp.html"},{name:"Forårsruller",link:"https://www.valdemarsro.dk/sproede-foraarsruller/"},{name:"Miso",link:"https://www.chopstickchronicles.com/how-to-make-miso/"},{name:"Fried dumplings",link:"https://www.thespruceeats.com/chinese-pan-fried-dumplings-694499"},{name:"Miso glaced salmon",link:"http://clemfoodie.com/2019/01/28/saumon-glace-au-miso-riz-kale-et-avocat/"},{name:"Sticky garlic sesame chicken",link:"https://www.swankyrecipes.com/sticky-garlic-sesame-chicken.html"}]}}},G=J,K=Object(h["a"])(G,N,D,!1,null,null,null),U=K.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("RecipeForm")],1)},V=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",[a("b-col",{staticClass:"mt-4",attrs:{cols:"12"}},[a("h1",{staticClass:"ml-4 mt-4"},[e._v("Opret opskrift")])]),a("b-col",{staticClass:"mt-4"},[a("p",[e._v('Her kan du oprette en opskrift og sende den til godkendelse af mig. Hvis jeg synes om opskriften bliver den en del af "læseropskrifter".')])])],1),a("b-row",{staticClass:"m-2"},[a("b-col",{attrs:{cols:"12"}},[e._v(" Overordnet ")]),a("b-col",{attrs:{cols:"12",md:"6"}},[a("small",[e._v("Titel")]),a("b-form-input",{model:{value:e.recipe.name,callback:function(t){e.$set(e.recipe,"name",t)},expression:"recipe.name"}})],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("small",[e._v("Kort beskrivelse")]),a("b-form-textarea",{attrs:{placeholder:"Giv en kort beskrivelse af din ret",rows:"2","max-rows":"4",size:"sm"},model:{value:e.recipe.teaser,callback:function(t){e.$set(e.recipe,"teaser",t)},expression:"recipe.teaser"}})],1)],1),a("b-row",{staticClass:"m-2"},[a("b-col",{attrs:{cols:"12"}},[e._v(" Ingredienser ")])],1),e._l(e.recipe.ingredients,(function(t,n){return a("b-row",{key:n,staticClass:"m-2"},[a("b-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[a("small",[e._v("Mængde")]),a("b-form-input",{model:{value:t.amount,callback:function(a){e.$set(t,"amount",a)},expression:"ing.amount"}})],1),a("b-col",{attrs:{cols:"12",sm:"3",lg:"2"}},[a("small",[e._v("Enhed")]),a("b-form-select",{attrs:{options:e.$store.state.units},model:{value:t.unit,callback:function(a){e.$set(t,"unit",a)},expression:"ing.unit"}})],1),a("b-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[a("small",[e._v("Ingrediens")]),a("b-form-input",{model:{value:t.ingredient,callback:function(a){e.$set(t,"ingredient",a)},expression:"ing.ingredient"}})],1),a("b-col",{staticClass:"mt-4 ml-0 pl-0",attrs:{cols:"1"},on:{click:function(t){return e.deleteRow(n)}}},[e._v(" x ")])],1)})),a("b-row",{staticClass:"m-2 mt-4 mb-4"},[a("b-col",[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){return e.addIngredient()}}},[e._v(" Tilføj række ")])],1)],1),a("b-row",{staticClass:"m-2"},[a("b-col",{attrs:{cols:"12"}},[e._v(" Fremgangsmåde ")])],1),e._l(e.recipe.steps,(function(t,n){return a("b-row",{key:n,staticClass:"m-2"},[a("b-col",{attrs:{cols:"11",md:"6",xl:"4"}},[a("small",[e._v("Step "+e._s(n+1))]),a("b-textarea",{attrs:{placeholder:"Beskriv hvordan retten tilberedes",size:"sm"},model:{value:e.recipe.steps[n],callback:function(t){e.$set(e.recipe.steps,n,t)},expression:"recipe.steps[index]"}})],1),a("b-col",{staticClass:"mt-4 ml-0 pl-0",attrs:{cols:"1"},on:{click:function(t){return e.deleteStep(n)}}},[e._v(" x ")])],1)})),a("b-row",{staticClass:"m-2 mt-4 mb-4"},[a("b-col",[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){return e.addStep()}}},[e._v(" Tilføj step ")])],1)],1),a("b-row",{staticClass:"m-2 mb-0"},[a("b-col",{attrs:{cols:"16",md:"8"}},[a("FormTag")],1)],1),a("b-row",{staticClass:"m-2"},[a("b-button",{staticClass:"ml-3 mt-4",attrs:{variant:"success"}},[a("a",{attrs:{href:"mailto:henriette.steenhoff@gmail.com?subject="+e.recipe.name+"&body="+JSON.stringify(e.recipe,void 0,4)}},[e._v("Indsend")])])],1),a("b-row",{staticClass:"ml-2 mt-5 mb-5"},[a("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[e._v(" Forhåndsvisning af opskrift ")]),a("b-col",{attrs:{cols:"12",md:"6"}},[e._v(" "+e._s(JSON.stringify(e.recipe,void 0,4))+" ")])],1)],2)},W=[],Q=(a("a434"),a("bee2")),Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form-group",{attrs:{label:"Relaterede emner"}},[a("b-form-tags",{attrs:{size:"lg","add-on-change":"","no-outer-focus":""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.tags,r=t.inputAttrs,s=t.inputHandlers,i=t.disabled,o=t.removeTag;return[n.length>0?a("ul",{staticClass:"list-inline d-inline-block mb-1"},e._l(n,(function(t){return a("li",{key:t,staticClass:"list-inline-item"},[a("b-form-tag",{staticClass:"m",attrs:{title:t,disabled:i,variant:"secondary",size:"sm"},on:{remove:function(e){return o(t)}}},[e._v(e._s(t))])],1)})),0):e._e(),a("b-form-select",e._g(e._b({attrs:{disabled:i||0===e.availableOptions.length,options:e.availableOptions},scopedSlots:e._u([{key:"first",fn:function(){return[a("option",{attrs:{disabled:"",value:""}},[e._v("Vælg relatedere tags...")])]},proxy:!0}],null,!0)},"b-form-select",r,!1),s))]}}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},X=[],Y=m["c"].extend({props:{}}),ee=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.value=[],e}return Object(Q["a"])(a,[{key:"availableOptions",get:function(){return this.$store.state.tags}}]),a}(Y);ee=Object(c["a"])([Object(m["a"])({})],ee);var te=ee,ae=te,ne=Object(h["a"])(ae,Z,X,!1,null,null,null),re=ne.exports,se=m["c"].extend({props:{}}),ie=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.recipe={name:"",teaser:"",image:"",ingredients:[{amount:0,unit:"",ingredient:"f.eks hvedemel"},{amount:0,unit:"",ingredient:"f.eks vand"},{amount:0,unit:"",ingredient:"f.eks salt"}],steps:["","",""],path:"description"},e}return Object(Q["a"])(a,[{key:"addIngredient",value:function(){this.recipe.ingredients.push({amount:0,unit:"",ingredient:""})}},{key:"addStep",value:function(){this.recipe.steps.push("")}},{key:"deleteStep",value:function(e){this.recipe.steps.splice(e,1)}},{key:"deleteRow",value:function(e){this.recipe.ingredients.splice(e,1)}}]),a}(se);ie=Object(c["a"])([Object(m["a"])({components:{Vue:m["c"],FormTag:re}})],ie);var oe=ie,le=oe,ce=Object(h["a"])(le,q,W,!1,null,null,null),me=ce.exports,de=m["c"].extend({props:{}}),pe=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(de);pe=Object(c["a"])([Object(m["a"])({components:{RecipeForm:me}})],pe);var ue=pe,ke=ue,he=Object(h["a"])(ke,I,V,!1,null,null,null),fe=he.exports;n["default"].use(g["a"]);var be=[{path:"/",name:"Home",component:z},{path:"/UnitConverter",name:"UnitConverter",component:function(){return a.e("conversion").then(a.bind(null,"f60b"))}},{path:"/FoodLinks",name:"Madlinks",component:U},{path:"/Create",name:"Opret",component:fe},{path:"/Recipes",name:"Recipes",component:function(){return a.e("recipes").then(a.bind(null,"9637"))}},{path:"/Recipes/:name",name:"Recipe",component:function(){return a.e("chunk-7899b127").then(a.bind(null,"9012"))}},{path:"*",name:"404",component:H}],ge=new g["a"]({routes:be}),we=ge,ve=a("2f62");n["default"].use(ve["a"]);var ye=new ve["a"].Store({state:{recipe:Object,units:["ml","dl","L","F","C","K","tsk","spsk","knivspis","g","kg","stk","bundt","fed"],tags:["aftensmad","snack","brød","bagning","dessert","specielle anledninger","sauce","dip","dressing","marinade","morgenmad","frokost","marinade","drink","tilbehør"]},mutations:{setRecipe:function(e,t){e.recipe=t}},actions:{setRecipe:function(e,t){e.commit("setRecipe",t)}},modules:{}}),_e=(a("f9e3"),a("2dd8"),a("5f5b"));n["default"].use(_e["a"]),n["default"].config.productionTip=!1,new n["default"]({router:we,store:ye,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.f11f9f0d.js.map