(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["conversion"],{1148:function(t,e,r){"use strict";var n=r("a691"),i=r("1d80");t.exports="".repeat||function(t){var e=String(i(this)),r="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},b680:function(t,e,r){"use strict";var n=r("23e7"),i=r("a691"),o=r("408a"),a=r("1148"),c=r("d039"),s=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},b=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));n({target:"Number",proto:!0,forced:b},{toFixed:function(t){var e,r,n,c,s=o(this),b=i(t),m=[0,0,0,0,0,0],p="",h="0",d=function(t,e){var r=-1,n=e;while(++r<6)n+=t*m[r],m[r]=n%1e7,n=l(n/1e7)},v=function(t){var e=6,r=0;while(--e>=0)r+=m[e],m[e]=l(r/t),r=r%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var r=String(m[t]);e=""===e?r:e+a.call("0",7-r.length)+r}return e};if(b<0||b>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(e=f(s*u(2,69,1))-69,r=e<0?s*u(2,-e,1):s/u(2,e,1),r*=4503599627370496,e=52-e,e>0){d(0,r),n=b;while(n>=7)d(1e7,0),n-=7;d(u(10,n,1),0),n=e-1;while(n>=23)v(1<<23),n-=23;v(1<<n),d(1,1),v(2),h=g()}else d(0,r),d(1<<-e,0),h=g()+a.call("0",b);return b>0?(c=h.length,h=p+(c<=b?"0."+a.call("0",b-c)+h:h.slice(0,c-b)+"."+h.slice(c-b))):h=p+h,h}})},f60b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-3"},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"m-0"},[t._v("Ofte brugte konverteringer")])])],1),t._l(t.combinations,(function(t){return r("div",{key:t.from+t.to},[r("Conversion",{attrs:{fromUnit:t.from,toUnit:t.to}})],1)})),r("b-row",[r("b-col",{staticClass:"mt-5",attrs:{cols:"12"}},[r("h1",{staticClass:"m-0"},[t._v("Byg-selv-enhedskonvertering")])])],1)],2)},i=[],o=r("d4ec"),a=r("bee2"),c=r("262e"),s=r("2caf"),l=r("9ab4"),u=r("60a3"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"pl-0 mt-4"},[t._v(t._s(t.capitalize(t.fromUnit))+" til "+t._s(t.capitalize(t.toUnit)))])])],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-input",{attrs:{type:"number",size:"md",placeholder:t.measurementType+" i "+t.fromUnit},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}})],1),r("b-col",{staticClass:"mt-1",attrs:{cols:"12",md:"6"}},[r("p",{staticClass:"ml-0 pl-0 text-center text-md-left",domProps:{innerHTML:t._s(t.conversion(t.fromUnit,t.toUnit)+" "+t.unitSymbol[t.toUnit])}})])],1)],1)},b=[],m=(r("fb6a"),r("b680"),u["c"].extend({props:{fromUnit:{type:String,required:!0},toUnit:{type:String,required:!0}}})),p=function(t){Object(c["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.unit=0,t.conversionRate={fahrenheit:{celsius:(t.unit-32)/1.8,kelvin:5*(t.unit+459.67)/9}},t.unitSymbol={celsius:"&deg;C",fahrenheit:"&deg;F",deciliter:"dl",milliliter:"ml",grams:"gr"},t}return Object(a["a"])(r,[{key:"conversion",value:function(t,e){var r=0;switch(t){case"fahrenheit":r="celsius"===e?(this.unit-32)/1.8:5*(this.unit+459.67)/9;break;case"cups":r=2.36588237*this.unit;break;case"ounces":r=28.35*this.unit;break;default:r=0}return r.toFixed(2)}},{key:"capitalize",value:function(t){return t[0].toUpperCase()+t.slice(1).toLowerCase()}},{key:"measurementType",get:function(){return"fahrenheit"===this.fromUnit?"Temperature":"Volume"}}]),r}(m);p=Object(l["a"])([Object(u["a"])({})],p);var h=p,d=h,v=r("2877"),g=Object(v["a"])(d,f,b,!1,null,null,null),w=g.exports,y=u["c"].extend({props:{}}),x=function(t){Object(c["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(o["a"])(this,r),e.apply(this,arguments)}return Object(a["a"])(r,[{key:"data",value:function(){return{combinations:[{from:"fahrenheit",to:"celsius"},{from:"cups",to:"deciliter"},{from:"ounces",to:"grams"}]}}}]),r}(y);x=Object(l["a"])([Object(u["a"])({components:{Conversion:w}})],x);var O=x,j=O,k=Object(v["a"])(j,n,i,!1,null,null,null);e["default"]=k.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),l=r("8418"),u=r("b622"),f=r("1dde"),b=r("ae40"),m=f("slice"),p=b("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),d=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,e){var r,n,u,f=s(this),b=c(f.length),m=a(t,b),p=a(void 0===e?b:e,b);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return d.call(f,m,p);for(n=new(void 0===r?Array:r)(v(p-m,0)),u=0;m<p;m++,u++)m in f&&l(n,u,f[m]);return n.length=u,n}})}}]);
//# sourceMappingURL=conversion.a45617b8.js.map