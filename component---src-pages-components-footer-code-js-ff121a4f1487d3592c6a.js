(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{DOjo:function(e,t,n){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t,n,a="";Prism.plugins.customClass={add:function(e){t=e},map:function(e){n="function"==typeof e?e:function(t){return e[t]||t}},prefix:function(e){a=e||""}},Prism.hooks.add("wrap",(function(e){if(t){var s=t({content:e.content,type:e.type,language:e.language});Array.isArray(s)?e.classes.push.apply(e.classes,s):s&&e.classes.push(s)}(n||a)&&(e.classes=e.classes.map((function(t){return a+(n?n(t,e.language):t)})))}))}}()}).call(this,n("yLpj"))},VGxr:function(e,t,n){"use strict";var a=n("q1tI"),s=n.n(a),o=n("Wbzz"),i=function(e){var t,n=e.pageName,a=e.sectionName,i=e.hasReact,l=a;return null===a&&(l="components"),t=n.replace(/\s+/g,"-"),s.a.createElement("div",{className:"subnav-links"},s.a.createElement(o.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+l+"/"+t+"/code"},"Html"),i&&s.a.createElement(o.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+l+"/"+t+"/component"},"React"),s.a.createElement(o.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+l+"/"+t+"/guidelines"},"Guidelines"))};i.defaultProps={pageName:"/",sectionName:null,hasReact:!1},t.a=i},cMve:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},ekGf:function(e,t,n){"use strict";var a=n("JX7q"),s=n("dI71"),o=n("q1tI"),i=n.n(o),l=n("wZee"),r=n.n(l),c=(n("cMve"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(Object(a.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},n.componentDidMount=function(){r.a.highlightAll()},n.render=function(){return i.a.createElement("pre",{className:"language-scss"},i.a.createElement("code",{className:"language-scss"},this.props.children))},t}(i.a.Component));t.a=c},lmDM:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),s=n("q1tI"),o=n.n(s),i=n("Wbzz"),l=n("Bl7J"),r=n("VGxr"),c=n("OmYv"),u=n("xBU5"),g=(n("ekGf"),"Footer".toLowerCase()),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.location;return o.a.createElement(l.a,null,o.a.createElement("header",{className:"subnav"},o.a.createElement("h1",null,"Footer"),o.a.createElement(r.a,{pageName:g})),o.a.createElement(c.a,null,o.a.createElement("div",{className:"grid grid-padding"},o.a.createElement("h2",{id:"styles"},"Footer",o.a.createElement(i.Link,{to:e.pathname+"/#footer",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("footer",{className:"footer",style:{marginTop:"0",marginBottom:"1rem"}},o.a.createElement("nav",{className:"footer-nav"},o.a.createElement("ul",{className:"footer-nav-links"},o.a.createElement("li",null,o.a.createElement("a",{href:"",target:"_blank"},"Careers ",o.a.createElement("i",{className:"dashing-icon dashing-icon--new-tab dashing-icon--blue"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"",target:"_blank"},"Guidelines ",o.a.createElement("i",{className:"dashing-icon dashing-icon--new-tab dashing-icon--blue"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"",target:"_blank"},"What's New"))))),o.a.createElement(u.a,null,'<footer class="footer">\n\n  <nav class="footer-nav">\n    <ul class="footer-nav-links">\n      <li>\n        <a href="" target="_blank">\n          Careers <i class="dashing-icon dashing-icon--new-tab dashing-icon--blue"></i>\n        </a>\n      </li>\n      <li>\n        <a href="" target="_blank">\n        Guidelines <i class="dashing-icon dashing-icon--new-tab dashing-icon--blue"></i>\n        </a>\n      </li>\n      <li>\n        <a href="" target="_blank">\n          {"What\'s New"}\n        </a>\n      </li>\n    </ul>\n  </nav>\n\n</footer>')))))},t}(o.a.Component);t.default=p},s4fy:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||function t(a){for(var s=[],o=0;o<a.length;o++){var i=a[o],l=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?0<s.length&&s[s.length-1].tagName===n(i.content[0].content[1])&&s.pop():"/>"===i.content[i.content.length-1].content||s.push({tagName:n(i.content[0].content[1]),openedBraces:0}):0<s.length&&"punctuation"===i.type&&"{"===i.content?s[s.length-1].openedBraces++:0<s.length&&0<s[s.length-1].openedBraces&&"punctuation"===i.type&&"}"===i.content?s[s.length-1].openedBraces--:l=!0),(l||"string"==typeof i)&&0<s.length&&0===s[s.length-1].openedBraces){var r=n(i);o<a.length-1&&("string"==typeof a[o+1]||"plain-text"===a[o+1].type)&&(r+=n(a[o+1]),a.splice(o+1,1)),0<o&&("string"==typeof a[o-1]||"plain-text"===a[o-1].type)&&(r=n(a[o-1])+r,a.splice(o-1,1),o--),a[o]=new e.Token("plain-text",r,null,r)}i.content&&"string"!=typeof i.content&&t(i.content)}}(t.tokens)}))}(Prism)},xBU5:function(e,t,n){"use strict";var a=n("JX7q"),s=n("dI71"),o=n("q1tI"),i=n.n(o),l=n("wZee"),r=n.n(l),c=(n("DOjo"),n("s4fy"),n("cMve"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(Object(a.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){r.a.highlightAll()},n.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},n.render=function(){var e=this.props,t=e.children,n=e.language,a=this.state.showCode;return r.a.plugins.customClass.map({tag:"exampletag"}),i.a.createElement("div",{className:a?"group-open":""},i.a.createElement("div",{onClick:this.toggleCode,className:a?"code-toggle is-open":"code-toggle"},i.a.createElement("i",{className:"icon--code"})),i.a.createElement("pre",{className:a?"language-"+n+" show":"language-"+n},i.a.createElement("code",{className:a?"language-"+n+" show":"language-"+n},t)))},t}(i.a.Component));c.defaultProps={children:"Default",language:"html"},t.a=c}}]);
//# sourceMappingURL=component---src-pages-components-footer-code-js-ff121a4f1487d3592c6a.js.map