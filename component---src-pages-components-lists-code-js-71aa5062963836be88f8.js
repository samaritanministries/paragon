(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{159:function(e,t,s){"use strict";s.r(t);var a=s(7),n=s.n(a),l=s(0),i=s.n(l),r=s(200),o=s(4),c=s.n(o),u=s(204),m=s(202),d=s(203),p=s(208),h=s(213),g="Lists".toLowerCase(),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.location;return i.a.createElement(u.a,null,i.a.createElement("header",{className:"subnav"},i.a.createElement("h1",null,"Lists"),i.a.createElement(m.a,{pageName:g})),i.a.createElement(d.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column column--full"},i.a.createElement("h2",{className:"example-header no-margin--top",id:"orderedLists"},"Ordered Lists",i.a.createElement(r.Link,{to:e.pathname+"/#orderedLists",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"row example-container"},i.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},i.a.createElement("ol",{className:"ordered-list--custom"},i.a.createElement("li",null,"This is the first item"),i.a.createElement("li",null,"This is the second item"),i.a.createElement("li",null,"This is the third item"),i.a.createElement("li",null,"This is the fourth item")))),i.a.createElement(p.a,null,'<ol class="ordered-list--custom">\n  <li>This is the first item</li>\n  <li>This is the second item</li>\n  <li>This is the third item</li>\n  <li>This is the fourth item</li>\n</ol>'),i.a.createElement("h2",{className:"example-header",id:"customColoredLists"},"Custom Colored Lists",i.a.createElement(r.Link,{to:e.pathname+"/#customColoredLists",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"row example-container"},i.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},i.a.createElement("ol",{className:"ordered-list--custom ordered-list--sharing-blue"},i.a.createElement("li",null,"This is a custom colored list item")))),i.a.createElement(p.a,null,'<ol class="ordered-list--custom ordered-list--sharing-blue">\n  <li>This is a custom colored list item</li>\n</ol>'),i.a.createElement(h.a,null,"//Example: Custom Colored Lists\n.ordered-list--sharing-blue {\n  @include ordered-list($sharing-blue, $white);\n}")))))},t}(i.a.Component);f.propTypes={location:c.a.object.isRequired},t.default=f},202:function(e,t,s){"use strict";s(32);var a=s(0),n=s.n(a),l=s(200);t.a=function(e){var t=e.pageName,s=e.sectionName;null==s&&(s="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var a=t,i=s,r=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},o=function(e){return n.a.createElement(l.Link,Object.assign({getProps:r},e),e.children)};return n.a.createElement("div",{className:"subnav-links"},n.a.createElement(o,{to:i+"/"+a+"/code"},"Code"),n.a.createElement(o,{to:i+"/"+a+"/guidelines"},"Guidelines"))}},208:function(e,t,s){"use strict";var a=s(7),n=s.n(a),l=s(51),i=s.n(l),r=s(0),o=s.n(r),c=s(211),u=s.n(c),m=(s(209),function(e){function t(t){var s;return(s=e.call(this,t)||this).state={showCode:!1},s.toggleCode=s.toggleCode.bind(i()(i()(s))),s}n()(t,e);var s=t.prototype;return s.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},s.componentDidMount=function(){u.a.highlightAll()},s.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),o.a.createElement("div",{className:this.state.showCode?"group-open":""},o.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},o.a.createElement("i",{className:"icon--code"})),o.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},o.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(o.a.Component));t.a=m},209:function(e,t,s){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,s(75))},213:function(e,t,s){"use strict";var a=s(7),n=s.n(a),l=s(51),i=s.n(l),r=s(0),o=s.n(r),c=s(211),u=s.n(c),m=(s(214),function(e){function t(t){var s;return(s=e.call(this,t)||this).state={showCode:!1},s.toggleCode=s.toggleCode.bind(i()(i()(s))),s}n()(t,e);var s=t.prototype;return s.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},s.componentDidMount=function(){u.a.highlightAll()},s.render=function(){return o.a.createElement("pre",{className:"language-scss"},o.a.createElement("code",{className:"language-scss"},this.props.children))},t}(o.a.Component));t.a=m},214:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-lists-code-js-71aa5062963836be88f8.js.map