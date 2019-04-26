(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{165:function(e,t,a){"use strict";a.r(t);var s=a(7),n=a.n(s),l=a(0),r=a.n(l),i=a(207),o=a(4),c=a.n(o),m=a(210),u=a(211),d=a(209),h=a(219),p=a(217),g="Lists".toLowerCase(),w=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.location;return r.a.createElement(m.a,null,r.a.createElement("header",{className:"subnav"},r.a.createElement("h1",null,"Lists"),r.a.createElement(u.a,{pageName:g})),r.a.createElement(d.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column--full"},r.a.createElement("h2",{className:"example-header no-margin--top",id:"orderedLists"},"Ordered Lists",r.a.createElement(i.a,{to:e.pathname+"/#orderedLists",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"row example-container"},r.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},r.a.createElement("ol",{className:"ordered-list--custom"},r.a.createElement("li",null,"This is the first item"),r.a.createElement("li",null,"This is the second item"),r.a.createElement("li",null,"This is the third item"),r.a.createElement("li",null,"This is the fourth item")))),r.a.createElement(h.a,null,'<ol class="ordered-list--custom">\n  <li>This is the first item</li>\n  <li>This is the second item</li>\n  <li>This is the third item</li>\n  <li>This is the fourth item</li>\n</ol>'),r.a.createElement("h2",{className:"example-header",id:"customColoredLists"},"Custom Colored Lists",r.a.createElement(i.a,{to:e.pathname+"/#customColoredLists",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"row example-container"},r.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},r.a.createElement("ol",{className:"ordered-list--custom ordered-list--sharing-blue"},r.a.createElement("li",null,"This is a custom colored list item")))),r.a.createElement(h.a,null,'<ol class="ordered-list--custom ordered-list--sharing-blue">\n  <li>This is a custom colored list item</li>\n</ol>'),r.a.createElement(p.a,null,"//Example: Custom Colored Lists\n.ordered-list--sharing-blue {\n  @include ordered-list($sharing-blue, $white);\n}")))))},t}(r.a.Component);w.propTypes={location:c.a.object.isRequired},t.default=w},217:function(e,t,a){"use strict";var s=a(35),n=a.n(s),l=a(7),r=a.n(l),i=a(0),o=a.n(i),c=a(220),m=a.n(c),u=(a(218),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(n()(a)),a}r()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){m.a.highlightAll()},a.render=function(){return o.a.createElement("pre",{className:"language-scss"},o.a.createElement("code",{className:"language-scss"},this.props.children))},t}(o.a.Component));t.a=u},218:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-lists-code-js-54a7f8e6713e617bc30e.js.map