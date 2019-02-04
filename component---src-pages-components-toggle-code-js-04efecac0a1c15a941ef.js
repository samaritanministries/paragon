(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{177:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),l=a(0),o=a.n(l),i=a(200),c=a(4),r=a.n(c),u=a(204),m=a(202),h=a(203),p=a(208),d=a(213),g="Toggle".toLowerCase(),w=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.location;return o.a.createElement(u.a,null,o.a.createElement("header",{className:"subnav"},o.a.createElement("h1",null,"Toggle"),o.a.createElement(m.a,{pageName:g})),o.a.createElement(h.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column column--full"},o.a.createElement("h2",{className:"example-header no-margin--top",id:"customToggleSwitch"},"Custom Toggle Switch",o.a.createElement(i.Link,{to:e.pathname+"/#customToggleSwitch",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"row example-container"},o.a.createElement("fieldset",{className:"column column--full"},o.a.createElement("label",{className:"inline",htmlFor:"switch1"},"Switch"),o.a.createElement("div",{className:"switch"},o.a.createElement("input",{name:"switch",type:"checkbox",className:"switch--checkbox",id:"switch1"}),o.a.createElement("label",{className:"switch--label",htmlFor:"switch1"},o.a.createElement("span",{className:"switch--inner"}),o.a.createElement("span",{className:"switch--handle"}))))),o.a.createElement(p.a,null,'\x3c!-- Custom Toggle Switch --\x3e\n<fieldset class="column column--full">\n  <label class="inline" for="switch1">Switch</label>\n  <div class="switch">\n    <input name="switch" type="checkbox" class="switch--checkbox" id="switch1" />\n    <label class="switch--label" for="switch1">\n      <span class="switch--inner"></span>\n      <span class="switch--handle"></span>\n    </label>\n  </div>\n</fieldset>'),o.a.createElement(d.a,null,"//Include these variables in your theme file to change the color of your switch\n$switch--on: $blue !default; //Color of switch when on\n$switch--off: $gray-250 !default; //Color of switch when off\n}")))))},t}(o.a.Component);w.propTypes={location:r.a.object.isRequired},t.default=w},202:function(e,t,a){"use strict";a(32);var n=a(0),s=a.n(n),l=a(200);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,o=a,i=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},c=function(e){return s.a.createElement(l.Link,Object.assign({getProps:i},e),e.children)};return s.a.createElement("div",{className:"subnav-links"},s.a.createElement(c,{to:o+"/"+n+"/code"},"Code"),s.a.createElement(c,{to:o+"/"+n+"/guidelines"},"Guidelines"))}},208:function(e,t,a){"use strict";var n=a(7),s=a.n(n),l=a(51),o=a.n(l),i=a(0),c=a.n(i),r=a(211),u=a.n(r),m=(a(209),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(o()(o()(a))),a}s()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),c.a.createElement("div",{className:this.state.showCode?"group-open":""},c.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},c.a.createElement("i",{className:"icon--code"})),c.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},c.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(c.a.Component));t.a=m},209:function(e,t,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,a(75))},213:function(e,t,a){"use strict";var n=a(7),s=a.n(n),l=a(51),o=a.n(l),i=a(0),c=a.n(i),r=a(211),u=a.n(r),m=(a(214),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(o()(o()(a))),a}s()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return c.a.createElement("pre",{className:"language-scss"},c.a.createElement("code",{className:"language-scss"},this.props.children))},t}(c.a.Component));t.a=m},214:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-toggle-code-js-04efecac0a1c15a941ef.js.map