(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{156:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a.n(n),r=a(0),s=a.n(r),l=a(204),i=a(4),c=a.n(i),u=a(208),m=a(206),p=a(207),d=a(212),f=a(217),g="Footer".toLowerCase(),h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.location;return s.a.createElement(u.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Footer"),s.a.createElement(m.a,{pageName:g})),s.a.createElement(p.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("h2",{className:"example-header no-margin--top",id:"footer"},"Footer",s.a.createElement(l.a,{to:e.pathname+"/#footer",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"row example-container"},s.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},s.a.createElement("footer",{className:"app-footer example--footer",style:{position:"relative"}},s.a.createElement("div",{className:"row no-padding"},s.a.createElement("button",{className:"button button--primary float-left"},"Save"),s.a.createElement("button",{className:"button button--primary button--green float-right"},"Submit"))))),s.a.createElement(d.a,null,'\x3c!-- Apply the fixed class to the app-footer element to fix it to the bottom --\x3e\n<footer class="app-footer fixed">\n  <div class="row no-padding">\n    <button class="float-left">Save</button>\n    <button class="button--green float-right">Submit</button>\n  </div>\n</footer>'),s.a.createElement(f.a,null,"//Include these variables in your theme file to change the color theme of your footer\n$footer-color: $white !default; //Override this variable to change the color of your footer\n$footer-border-color: $gray-200 !default; //Override this variable to change the color of the top border of your footer")))))},t}(s.a.Component);h.propTypes={location:c.a.object.isRequired},t.default=h},206:function(e,t,a){"use strict";a(33);var n=a(0),o=a.n(n),r=a(204);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,s=a,l=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},i=function(e){return o.a.createElement(r.a,Object.assign({getProps:l},e),e.children)};return o.a.createElement("div",{className:"subnav-links"},o.a.createElement(i,{to:s+"/"+n+"/code"},"Code"),o.a.createElement(i,{to:s+"/"+n+"/guidelines"},"Guidelines"))}},212:function(e,t,a){"use strict";var n=a(34),o=a.n(n),r=a(7),s=a.n(r),l=a(0),i=a.n(l),c=a(215),u=a.n(c),m=(a(213),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(o()(a)),a}s()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),i.a.createElement("div",{className:this.state.showCode?"group-open":""},i.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},i.a.createElement("i",{className:"icon--code"})),i.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},i.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(i.a.Component));t.a=m},213:function(e,t,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,a(75))},217:function(e,t,a){"use strict";var n=a(34),o=a.n(n),r=a(7),s=a.n(r),l=a(0),i=a.n(l),c=a(215),u=a.n(c),m=(a(218),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(o()(a)),a}s()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return i.a.createElement("pre",{className:"language-scss"},i.a.createElement("code",{className:"language-scss"},this.props.children))},t}(i.a.Component));t.a=m},218:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-footer-code-js-301c8b98e43b2c0d9fb8.js.map