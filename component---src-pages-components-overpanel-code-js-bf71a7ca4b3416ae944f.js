(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),s=a(205),i=a(206),o=a(204),c=a(279);var u="Overpanel".toLowerCase(),p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.location;return r.a.createElement(s.a,null,r.a.createElement("header",{className:"subnav"},r.a.createElement("h1",null,"Overpanel"),r.a.createElement(i.a,{pageName:u})),r.a.createElement(o.a,null,r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("h2",{id:"overpanel"},"Overpanel",r.a.createElement(l.Link,{to:e.pathname+"/#overpanel",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"example-container"},r.a.createElement(l.Link,{className:"button button--primary",to:"../../templates/overpanel-example",style:{marginBottom:"1rem"}},"View Example Overpanel"),r.a.createElement(c.a,null,'<div class="overpanel">\n<header class="title-bar">\n  <div class="title-content">\n    <div>\n      <h2 class="title">Overpanel Title</h2>\n      <p>Overpanel description</p>\n    </div>\n    <a href="/templates/default">\n      <button class="button button--secondary"><i class="dashing-icon dashing-icon--close"></i> Close</button>\n    </a>\n  </div>\n</header>\n\n<section class="content">\n  <div class="grid grid-padding">\n    <h2>Example Fullscreen Page</h2>\n    <p>This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple!</p>\n  </div>\n</section>\n</div>')),r.a.createElement("h2",{className:"mt-space-xl",id:"overpanelWidths"},"Overpanel Widths",r.a.createElement(l.Link,{to:e.pathname+"/#overpanelWidths",className:"button button--transparent button--copy-link"})),r.a.createElement("p",{className:"no-margin"},"To change the max width of the overpanel and page content, all you need to do is apply an additional class ",r.a.createElement("strong",null,"AFTER")," ",r.a.createElement("code",{className:"example-text"},"overpanel"),"."),r.a.createElement("ul",{className:"no-margin"},r.a.createElement("li",null,r.a.createElement("strong",null,"Extra Small Width (350px):")," ",r.a.createElement("code",{className:"example-text"},"overpanel-xs")),r.a.createElement("li",null,r.a.createElement("strong",null,"Small Width (600px):")," ",r.a.createElement("code",{className:"example-text"},"overpanel-s")),r.a.createElement("li",null,r.a.createElement("strong",null,"Medium Width (800px):")," ",r.a.createElement("code",{className:"example-text"},"overpanel-m")),r.a.createElement("li",null,r.a.createElement("strong",null,"Large Width (1200px):")," ",r.a.createElement("code",{className:"example-text"},"overpanel-l"))),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"show-code"},r.a.createElement(c.a,null,'\x3c!-- By default the content width is set to overpanel-s --\x3e\n<div class="overpanel overpanel-l">\n...'))),r.a.createElement("h2",{className:"mt-space-xl",id:"overpanelAnimation"},"Overpanel Animation",r.a.createElement(l.Link,{to:e.pathname+"/#overpanelAnimation",className:"button button--transparent button--copy-link"})),r.a.createElement("p",{className:"no-margin"},"To add the sliding animation, all you need to do is apply an additional class ",r.a.createElement("strong",null,"AFTER")," ",r.a.createElement("code",{className:"example-text"},"overpanel"),"."),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"show-code"},r.a.createElement(c.a,null,'\x3c!-- Overpanel slides in from the bottom of the screen  --\x3e\n<div class="overpanel slide-up">\n...'))))))},n}(r.a.Component);t.default=p},277:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}e.exports=a},278:function(e,t,a){(function(t){a(36),a(25),a(55),a(142),a(45),a(76),a(56),a(75),a(15),a(103),a(16),a(44);var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];l={};for(var r in t[a.util.objId(e)]=l,e)e.hasOwnProperty(r)&&(l[r]=a.util.clone(e[r],t));return l;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];var l=[];return t[a.util.objId(e)]=l,e.forEach((function(e,n){l[n]=a.util.clone(e,t)})),l}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var l=(r=r||a.languages)[e];if(2==arguments.length){for(var s in n=arguments[1])n.hasOwnProperty(s)&&(l[s]=n[s]);return l}var i={};for(var o in l)if(l.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);i[o]=l[o]}return a.languages.DFS(a.languages,(function(t,a){a===r[e]&&t!=e&&(this[t]=i)})),r[e]=i},DFS:function(e,t,n,r){for(var l in r=r||{},e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],n||l),"Object"!==a.util.type(e[l])||r[a.util.objId(e[l])]?"Array"!==a.util.type(e[l])||r[a.util.objId(e[l])]||(r[a.util.objId(e[l])]=!0,a.languages.DFS(e[l],t,l,r)):(r[a.util.objId(e[l])]=!0,a.languages.DFS(e[l],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var l,s=r.elements||e.querySelectorAll(r.selector),i=0;l=s[i++];)a.highlightElement(l,!0===t,r.callback)},highlightElement:function(t,r,l){for(var s,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1].toLowerCase(),i=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var c={element:t,language:s,grammar:i,code:t.textContent};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(a.hooks.run("before-highlight",c),c.element.textContent=c.code,a.hooks.run("after-highlight",c)),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),r&&n.Worker){var u=new Worker(a.filename);u.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,l&&l.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,l&&l.call(t),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,t,n){var l={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",l),l.tokens=a.tokenize(l.code,l.grammar),a.hooks.run("after-tokenize",l),r.stringify(a.util.encode(l.tokens),l.language)},matchGrammar:function(e,t,n,r,l,s,i){var o=a.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==i)return;var u=n[c];u="Array"===a.util.type(u)?u:[u];for(var p=0;p<u.length;++p){var g=u[p],d=g.inside,m=!!g.lookbehind,h=!!g.greedy,f=0,v=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var b=r,w=l;b<t.length;w+=t[b].length,++b){var x=t[b];if(t.length>e.length)return;if(!(x instanceof o)){if(h&&b!=t.length-1){if(g.lastIndex=w,!(S=g.exec(e)))break;for(var k=S.index+(m?S[1].length:0),E=S.index+S[0].length,N=b,F=w,A=t.length;N<A&&(F<E||!t[N].type&&!t[N-1].greedy);++N)k>=(F+=t[N].length)&&(++b,w=F);if(t[b]instanceof o)continue;C=N-b,x=e.slice(w,F),S.index-=w}else{g.lastIndex=0;var S=g.exec(x),C=1}if(S){m&&(f=S[1]?S[1].length:0);E=(k=S.index+f)+(S=S[0].slice(f)).length;var j=x.slice(0,k),O=x.slice(E),P=[b,C];j&&(++b,w+=j.length,P.push(j));var T=new o(c,d?a.tokenize(S,d):S,v,S,h);if(P.push(T),O&&P.push(O),Array.prototype.splice.apply(t,P),1!=C&&a.matchGrammar(e,t,n,b,w,!0,c),s)break}else if(s)break}}}}},tokenize:function(e,t,n){var r=[e],l=t.rest;if(l){for(var s in l)t[s]=l[s];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,l=0;r=n[l++];)r(t)}}},r=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map((function(a){return r.stringify(a,t,e)})).join("");var l={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,s)}a.hooks.run("wrap",l);var i=Object.keys(l.attributes).map((function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(i?" "+i:"")+">"+l.content+"</"+l.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",(function(e){var t=JSON.parse(e.data),r=t.language,l=t.code,s=t.immediateClose;n.postMessage(a.highlight(l,a.languages[r],r)),s&&n.close()}),!1),n.Prism):n.Prism;var l=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return l&&(a.filename=l.src,a.manual||l.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();e.exports&&(e.exports=r),void 0!==t&&(t.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.languages.css,r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css",greedy:!0}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),r.languages.javascript["template-string"].inside.interpolation.inside.rest=r.languages.javascript,r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript",greedy:!0}}),r.languages.js=r.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach((function(t){for(var a,n=t.getAttribute("data-src"),l=t,s=/\blang(?:uage)?-([\w-]+)\b/i;l&&!s.test(l.className);)l=l.parentNode;if(l&&(a=(t.className.match(s)||[,""])[1]),!a){var i=(n.match(/\.(\w+)$/)||[,""])[1];a=e[i]||i}var o=document.createElement("code");o.className="language-"+a,t.textContent="",o.textContent="Loading…",t.appendChild(o);var c=new XMLHttpRequest;c.open("GET",n,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,r.highlightElement(o)):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)})),r.plugins.toolbar&&r.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}}))},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,a(277))},279:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(278),s=a.n(l);a(280);var i=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},l.componentDidMount=function(){s.a.highlightAll()},l.render=function(){return s.a.plugins.customClass.map({tag:"exampletag"}),r.a.createElement("div",{className:this.state.showCode?"group-open":""},r.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},r.a.createElement("i",{className:"icon--code"})),r.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},r.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},n}(r.a.Component);t.a=i},280:function(e,t,a){(function(e){a(44),function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",(function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map((function(e){return(t.prefixString||"")+(t.classMap[e]||e)})))}))}}()}).call(this,a(277))}}]);
//# sourceMappingURL=component---src-pages-components-overpanel-code-js-bf71a7ca4b3416ae944f.js.map