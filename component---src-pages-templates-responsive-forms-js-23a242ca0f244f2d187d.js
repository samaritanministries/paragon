(window.webpackJsonp=window.webpackJsonp||[]).push([[82,33,35,36],{"+hQr":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=(a("Wbzz"),a("xBU5")),l=a("tz0Y");a("EfUI"),a("yAO8");t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.default,null),r.a.createElement("main",{className:"content"},r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("div",{className:"grid--half"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header has-border"},r.a.createElement("h2",{className:"no-margin"},"Flex form updates")),r.a.createElement("div",{className:"card-content flex-content"},r.a.createElement("p",{className:"mb-space-m"},"Gives fieldsets a min-width. They will break to the next line if they get to small."),r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"first-name"},"First Name"),r.a.createElement("input",{type:"text",id:"first-name"})),r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"middle-name"},"Middle Name"),r.a.createElement("input",{type:"text",id:"middle-name"})),r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"last-name"},"Last Name"),r.a.createElement("input",{type:"text",id:"last-name"}))),r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"birthday"},"Date of Birth"),r.a.createElement("input",{type:"date",id:"birthday"})),r.a.createElement("fieldset",{className:"select--has-icon"},r.a.createElement("label",{htmlFor:"gender"},"Gender"),r.a.createElement("select",{id:"gender"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))),r.a.createElement("fieldset",{className:"spacer"})),r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",{className:"select--has-icon"},r.a.createElement("label",{htmlFor:"Occupation"},"Occupation"),r.a.createElement("select",{id:"Occupation"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"))),r.a.createElement("fieldset",{className:"spacer"}))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"mr-space-xs"},"Submit"),r.a.createElement("button",{className:"button--transparent button--gray"},"Cancel"))),r.a.createElement("div",{className:"show-code"},r.a.createElement(i.a,null,'<div className="card-content flex-content">\n\t<div className="flex-row">\n\t\t<fieldset>\n\t\t\t<label htmlFor="first-name">First Name</label>\n\t\t\t<input type="text" id="first-name"/>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<label htmlFor="middle-name">Middle Name</label>\n\t\t\t<input type="text" id="middle-name"/>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<label htmlFor="last-name">Last Name</label>\n\t\t\t<input type="text" id="last-name"/>\n\t\t</fieldset>\n\t</div>\n\t<div className="flex-row">\n\t\t<fieldset>\n\t\t\t<label htmlFor="birthday">Date of Birth</label>\n\t\t\t<input type="date" id="birthday"/>\n\t\t</fieldset>\n\t\t<fieldset className="select--has-icon">\n\t\t\t<label htmlFor="gender">Gender</label>\n\t\t\t<select id="gender">\n\t\t\t\t<option>Male</option>\n\t\t\t\t<option>Female</option>\n\t\t\t</select>\n\t\t</fieldset>\n\t\t<fieldset className="spacer"></fieldset>\n\t</div>\n\t<div className="flex-row">\n\t\t<fieldset className="select--has-icon">\n\t\t\t<label htmlFor="Occupation">Occupation</label>\n\t\t\t<select id="Occupation">\n\t\t\t\t<option>1</option>\n\t\t\t\t<option>2</option>\n\t\t\t</select>\n\t\t</fieldset>\n\t\t<fieldset className="spacer"></fieldset>\n\t</div>\n</div>'))),r.a.createElement("div",{className:"grid--half"},r.a.createElement("h3",null,"Changes"),r.a.createElement("ul",null,r.a.createElement("li",null,"Give ",r.a.createElement("code",{className:"example-text"},"fieldset")," in flex-row's margin left instead of right so when they wrap it lines up correctly."),r.a.createElement("li",null,"Give the flex-row negative left margin to offset the fieldet left margins"))))))}},"6oEm":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("TSYQ"),r=a.n(n),i=a("q1tI"),l=a.n(i);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hideMenu:!0},a.toggleMenu=a.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.render=function(){var e=this.SubNavigation.bind(this);return l.a.createElement(e,null)},i.SubNavigation=function(){var e,t,a=this.SubNavTitle.bind(this),n=this.props,i=n.children,s=n.className,o=n.listClassName,c=n.title;return l.a.createElement("nav",{className:r()("sub-nav",(e={},e[s]=!!s,e["has-title"]=null!=c,e))},null!=c&&l.a.createElement(a,null),l.a.createElement("ul",{className:r()((t={},t[o]=!!o,t["hide-menu"]=this.state.hideMenu,t))},i))},i.SubNavTitle=function(){var e=this.props.title;this.toggleMenu.bind(this);return l.a.createElement("div",{className:"sub-nav--title",onClick:this.toggleMenu},e,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon"}))},i.toggleMenu=function(){this.setState((function(e){return{hideMenu:!e.hideMenu}}))},n}(l.a.Component);s.defaultProps={className:void 0,listClassName:void 0,message:void 0}},DOjo:function(e,t,a){(function(e){a("bWfx"),a("LK8F"),function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t,a,n="";Prism.plugins.customClass={add:function(e){t=e},map:function(e){a="function"==typeof e?e:function(t){return e[t]||t}},prefix:function(e){n=e||""}},Prism.hooks.add("wrap",(function(e){if(t){var r=t({content:e.content,type:e.type,language:e.language});Array.isArray(r)?e.classes.push.apply(e.classes,r):r&&e.classes.push(r)}(a||n)&&(e.classes=e.classes.map((function(t){return n+(a?a(t,e.language):t)})))}))}}()}).call(this,a("eKGF"))},DqTS:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("TSYQ"),r=a.n(n),i=a("q1tI"),l=a.n(i);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.render=function(){var e=this.MobileMenu.bind(this);return l.a.createElement(e,null)},i.MobileMenu=function(){var e=this.SubNavLinks.bind(this),t=this.props.disableClick;return this.toggleMenuOpen=this.toggleMenuOpen.bind(this),l.a.createElement("div",{className:"mobile-menu_container"},l.a.createElement("button",{type:"button",style:{position:"absolute"},onClick:this.toggleMenuOpen,className:r()({"mobile-menu_toggle":!0,"is-open":this.state.isOpen,"disable-click":t})},l.a.createElement("i",{"data-id":"menu-icon",className:"dashing-icon no-margin "+(this.state.isOpen?"dashing-icon--close":"dashing-icon--menu")})),l.a.createElement(e,null))},i.SubNavLinks=function(){return l.a.createElement("section",{className:"mobile-menu_overlay "+(this.state.isOpen?"":"is-collapsed")},l.a.createElement("aside",{className:"mobile-sidebar"},l.a.createElement("div",{className:"mobile-sidebar_header"}),l.a.createElement("nav",{className:"mobile-sidebar_nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Page 1")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Page 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Page 3"))))))},i.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},n}(l.a.Component);s.defaultProps={disableClick:!1}},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},tz0Y:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("Wbzz"),r=a("q1tI"),i=a.n(r),l=a("DqTS"),s=a("6oEm");var o=function(e){var t,a;function r(t){return e.call(this,t)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.render=function(){var e=this.MainHeader.bind(this),t=this.props.hasSubNav;return i.a.createElement(i.a.Fragment,null,i.a.createElement(e,null),t&&i.a.createElement(s.default,null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/",className:"active"},"Option 1")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Option 2")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Option 3"))))},o.MainHeader=function(){return i.a.createElement("header",{className:"header"},i.a.createElement(l.default,null),i.a.createElement("div",{className:"logo"},i.a.createElement("p",{className:"text-color--purple"},"LOGO")),i.a.createElement("nav",{className:"header-nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/",className:"active"},"Page 1")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Page 2")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Page 3")))),i.a.createElement("div",{className:"alert"},i.a.createElement("i",{className:"dashing-icon dashing-icon--notification"}),i.a.createElement("div",{className:"count"},"100")),i.a.createElement("div",{className:"profile"},i.a.createElement("div",{className:"profile-image"},i.a.createElement("span",{className:"initials"},"RF")),i.a.createElement("span",{className:"profile-name"},"Ryan Fitzgerald"),i.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--black"})))},o.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},r}(i.a.Component);o.defaultProps={hasSubNav:!1}},wZee:function(e,t,a){(function(t){a("rGqo"),a("yt8O"),a("RW0V"),a("Oyvg"),a("SRfc"),a("8+KV"),a("HAE/"),a("a1Th"),a("h7Nl"),a("Btvt"),a("pIFo"),a("bWfx"),a("LK8F");var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var r,i,l=n.util.type(t);switch(a=a||{},l){case"Object":if(i=n.util.objId(t),a[i])return a[i];for(var s in r={},a[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],a));return r;case"Array":return i=n.util.objId(t),a[i]?a[i]:(r=[],a[i]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||n.languages)[e],l={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var o in a)a.hasOwnProperty(o)&&(l[o]=a[o]);a.hasOwnProperty(s)||(l[s]=i[s])}var c=r[e];return r[e]=l,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=l)})),l},DFS:function e(t,a,r,i){i=i||{};var l=n.util.objId;for(var s in t)if(t.hasOwnProperty(s)){a.call(t,s,t[s],r||s);var o=t[s],c=n.util.type(o);"Object"!==c||i[l(o)]?"Array"!==c||i[l(o)]||(i[l(o)]=!0,e(o,a,s,i)):(i[l(o)]=!0,e(o,a,null,i))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(a,r,i){var l=n.util.getLanguage(a),s=n.languages[l];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l;var o=a.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l);var c={element:a,language:l,grammar:s,code:a.textContent};function u(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),i&&i.call(c.element)}if(n.hooks.run("before-sanity-check",c),!c.code)return n.hooks.run("complete",c),void(i&&i.call(c.element));if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code))},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,i,l,s,o){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var u=a[c];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(o&&o==c+","+d)return;var m=u[d],p=m.inside,g=!!m.lookbehind,f=!!m.greedy,h=0,v=m.alias;if(f&&!m.pattern.global){var b=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,b+"g")}m=m.pattern||m;for(var y=i,E=l;y<t.length;E+=t[y].length,++y){var F=t[y];if(t.length>e.length)return;if(!(F instanceof r)){if(f&&y!=t.length-1){if(m.lastIndex=E,!(S=m.exec(e)))break;for(var w=S.index+(g&&S[1]?S[1].length:0),N=S.index+S[0].length,x=y,k=E,A=t.length;x<A&&(k<N||!t[x].type&&!t[x-1].greedy);++x)w>=(k+=t[x].length)&&(++y,E=k);if(t[y]instanceof r)continue;O=x-y,F=e.slice(E,k),S.index-=E}else{m.lastIndex=0;var S=m.exec(F),O=1}if(S){g&&(h=S[1]?S[1].length:0);N=(w=S.index+h)+(S=S[0].slice(h)).length;var _=F.slice(0,w),C=F.slice(N),$=[y,O];_&&(++y,E+=_.length,$.push(_));var j=new r(c,p?n.tokenize(S,p):S,v,S,f);if($.push(j),C&&$.push(C),Array.prototype.splice.apply(t,$),1!=O&&n.matchGrammar(e,t,a,y,E,!0,c+","+d),s)break}else if(s)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}n.hooks.run("wrap",a);var l=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(l?" "+l:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,i=a.code,l=a.immediateClose;e.postMessage(n.highlight(i,n.languages[r],r)),l&&e.close()}),!1),n):n;var i=n.util.currentScript();if(i&&(n.filename=i.src,i.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var l=function(){n.manual||n.highlightAll()},s=document.readyState;"loading"===s||"interactive"===s&&i&&i.defer?document.addEventListener("DOMContentLoaded",l):window.requestAnimationFrame?window.requestAnimationFrame(l):window.setTimeout(l,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,r=e.getAttribute("data-src"),i=e,l=/\blang(?:uage)?-([\w-]+)\b/i;i&&!l.test(i.className);)i=i.parentNode;if(i&&(a=(e.className.match(l)||[,""])[1]),!a){var s=(r.match(/\.(\w+)$/)||[,""])[1];a=t[s]||s}var o=document.createElement("code");o.className="language-"+a,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,n.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a("eKGF"))},xBU5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("wZee"),l=a.n(i);a("DOjo");var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},i.componentDidMount=function(){l.a.highlightAll()},i.render=function(){return l.a.plugins.customClass.map({tag:"exampletag"}),r.a.createElement("div",{className:this.state.showCode?"group-open":""},r.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},r.a.createElement("i",{className:"icon--code"})),r.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},r.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},n}(r.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-templates-responsive-forms-js-23a242ca0f244f2d187d.js.map