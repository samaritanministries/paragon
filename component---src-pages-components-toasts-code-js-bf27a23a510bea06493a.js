(window.webpackJsonp=window.webpackJsonp||[]).push([[49,51],{DOjo:function(e,t,a){(function(e){a("bWfx"),a("LK8F"),function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t,a,n="";Prism.plugins.customClass={add:function(e){t=e},map:function(e){a="function"==typeof e?e:function(t){return e[t]||t}},prefix:function(e){n=e||""}},Prism.hooks.add("wrap",(function(e){if(t){var s=t({content:e.content,type:e.type,language:e.language});Array.isArray(s)?e.classes.push.apply(e.classes,s):s&&e.classes.push(s)}(a||n)&&(e.classes=e.classes.map((function(t){return n+(a?a(t,e.language):t)})))}))}}()}).call(this,a("eKGF"))},K6lm:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=a("Wbzz"),i=a("eDTC"),o=a("Bl7J"),l=a("VGxr"),c=a("OmYv"),u=a("xBU5");var g="Toasts".toLowerCase(),d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={showToast:!1},a.toggleToast=a.toggleToast.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var d=n.prototype;return d.toggleToast=function(){var e=this;this.setState({showToast:!0}),setTimeout((function(){e.setState({showToast:!1})}),4e3)},d.render=function(){var e=this.props.location;return s.a.createElement(o.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Toasts"),s.a.createElement(l.a,{pageName:g})),s.a.createElement(c.a,null,s.a.createElement("div",{className:"grid grid-padding"},s.a.createElement("h2",{id:"toast-styles"},"Styles",s.a.createElement(r.a,{to:e.pathname+"/#toast-styles",className:"button button--transparent button--copy-link"})),s.a.createElement("p",null,"To show and animate a toast message onto the screen, add the class ",s.a.createElement("code",{className:"example-text"},".is-visible")," to the ",s.a.createElement("code",{className:"example-text"},".toast-message"),"."),s.a.createElement("div",{className:"example-container"},s.a.createElement("div",{className:"toast-message success toast-message--example"},s.a.createElement("i",{className:"toast-message--icon"}),s.a.createElement("p",null,"This is a success toast message")),s.a.createElement("div",{className:"toast-message error toast-message--example"},s.a.createElement("i",{className:"toast-message--icon"}),s.a.createElement("p",null,"This is an error toast message")),s.a.createElement("div",{className:"toast-message toast-message--example mb-space-m"},s.a.createElement("i",{className:"toast-message--icon"}),s.a.createElement("p",null,"This is a default toast message")),s.a.createElement(u.a,null,'\x3c!-- Success Toast Message --\x3e\n<div class="toast-message success">\n  <i class="toast-message--icon"></i>\n  <p>This is a success toast message</p>\n</div>\n\n\x3c!-- Error Toast Message --\x3e\n<div class="toast-message error">\n  <i class="toast-message--icon"></i>\n  <p>This is an error toast message</p>\n</div>\n\n\x3c!-- Default Toast Message --\x3e\n<div class="toast-message">\n  <i class="toast-message--icon"></i>\n  <p>This is a default toast message</p>\n</div>\n')),s.a.createElement("h2",{className:"mt-space-xl",id:"toast-styles"},"Example",s.a.createElement(r.a,{to:e.pathname+"/#toast-example",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"example-container"},s.a.createElement("button",{className:"button button--primary",onClick:this.toggleToast},"Show Toast")),this.state.showToast&&s.a.createElement(i.default,{isSuccess:!0,message:"This is a success toast message"}))))},n}(s.a.Component);t.default=d},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&e.push(i)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},eDTC:function(e,t,a){"use strict";a.r(t),a.d(t,"Toast",(function(){return o}));var n=a("TSYQ"),s=a.n(n),r=a("q1tI"),i=a.n(r);function o(e){var t,a=e.className,n=e.message,r=e.isError,o=e.isSuccess;e.isWarning;return i.a.createElement("div",{className:s()("toast-message",(t={},t[a]=!!a,t.error=r,t.success=o,t)),"data-id":"toast-message"},i.a.createElement("i",{className:"toast-message--icon"}),i.a.createElement("p",null,n))}o.defaultProps={className:void 0,isError:!1,isSuccess:!1,message:void 0},t.default=o},wZee:function(e,t,a){(function(t){a("rGqo"),a("yt8O"),a("RW0V"),a("Oyvg"),a("SRfc"),a("8+KV"),a("HAE/"),a("a1Th"),a("h7Nl"),a("Btvt"),a("pIFo"),a("bWfx"),a("LK8F");var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var s,r,i=n.util.type(t);switch(a=a||{},i){case"Object":if(r=n.util.objId(t),a[r])return a[r];for(var o in s={},a[r]=s,t)t.hasOwnProperty(o)&&(s[o]=e(t[o],a));return s;case"Array":return r=n.util.objId(t),a[r]?a[r]:(s=[],a[r]=s,t.forEach((function(t,n){s[n]=e(t,a)})),s);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var r=(s=s||n.languages)[e],i={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);a.hasOwnProperty(o)||(i[o]=r[o])}var c=s[e];return s[e]=i,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,a,s,r){r=r||{};var i=n.util.objId;for(var o in t)if(t.hasOwnProperty(o)){a.call(t,o,t[o],s||o);var l=t[o],c=n.util.type(l);"Object"!==c||r[i(l)]?"Array"!==c||r[i(l)]||(r[i(l)]=!0,e(l,a,o,r)):(r[i(l)]=!0,e(l,a,null,r))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),n.hooks.run("before-all-elements-highlight",s);for(var r,i=0;r=s.elements[i++];)n.highlightElement(r,!0===t,s.callback)},highlightElement:function(a,s,r){var i=n.util.getLanguage(a),o=n.languages[i];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=a.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var c={element:a,language:i,grammar:o,code:a.textContent};function u(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),r&&r.call(c.element)}if(n.hooks.run("before-sanity-check",c),!c.code)return n.hooks.run("complete",c),void(r&&r.call(c.element));if(n.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u(e.data)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code))},highlight:function(e,t,a){var r={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",r),r.tokens=n.tokenize(r.code,r.grammar),n.hooks.run("after-tokenize",r),s.stringify(n.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,a,r,i,o,l){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var u=a[c];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(l&&l==c+","+g)return;var d=u[g],p=d.inside,m=!!d.lookbehind,f=!!d.greedy,h=0,v=d.alias;if(f&&!d.pattern.global){var y=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var b=r,w=i;b<t.length;w+=t[b].length,++b){var F=t[b];if(t.length>e.length)return;if(!(F instanceof s)){if(f&&b!=t.length-1){if(d.lastIndex=w,!(N=d.exec(e)))break;for(var x=N.index+(m&&N[1]?N[1].length:0),k=N.index+N[0].length,A=b,E=w,S=t.length;A<S&&(E<k||!t[A].type&&!t[A-1].greedy);++A)x>=(E+=t[A].length)&&(++b,w=E);if(t[b]instanceof s)continue;T=A-b,F=e.slice(w,E),N.index-=w}else{d.lastIndex=0;var N=d.exec(F),T=1}if(N){m&&(h=N[1]?N[1].length:0);k=(x=N.index+h)+(N=N[0].slice(h)).length;var C=F.slice(0,x),_=F.slice(k),$=[b,T];C&&(++b,w+=C.length,$.push(C));var j=new s(c,p?n.tokenize(N,p):N,v,N,f);if($.push(j),_&&$.push(_),Array.prototype.splice.apply(t,$),1!=T&&n.matchGrammar(e,t,a,b,w,!0,c+","+g),o)break}else if(o)break}}}}},tokenize:function(e,t){var a=[e],s=t.rest;if(s){for(var r in s)t[r]=s[r];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var s,r=0;s=a[r++];)s(t)}},Token:s};function s(e,t,a,n,s){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!s}if(e.Prism=n,s.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return s.stringify(e,t)})).join("");var a={type:e.type,content:s.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,r)}n.hooks.run("wrap",a);var i=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),s=a.language,r=a.code,i=a.immediateClose;e.postMessage(n.highlight(r,n.languages[s],s)),i&&e.close()}),!1),n):n;var r=n.util.currentScript();if(r&&(n.filename=r.src,r.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var i=function(){n.manual||n.highlightAll()},o=document.readyState;"loading"===o||"interactive"===o&&r&&r.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",r)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,s=e.getAttribute("data-src"),r=e,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(a=(e.className.match(i)||[,""])[1]),!a){var o=(s.match(/\.(\w+)$/)||[,""])[1];a=t[o]||o}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a("eKGF"))},xBU5:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("wZee"),i=a.n(r);a("DOjo");var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},r.componentDidMount=function(){i.a.highlightAll()},r.render=function(){return i.a.plugins.customClass.map({tag:"exampletag"}),s.a.createElement("div",{className:this.state.showCode?"group-open":""},s.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},s.a.createElement("i",{className:"icon--code"})),s.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},s.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},n}(s.a.Component);t.a=o}}]);
//# sourceMappingURL=component---src-pages-components-toasts-code-js-bf27a23a510bea06493a.js.map