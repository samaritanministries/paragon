(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{186:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),l=a(0),c=a.n(l),o=a(210),r=a(4),i=a.n(r),u=a(213),m=a(214),h=a(212),w=a(220),p=a(221),d="Toggle".toLowerCase(),g=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.location;return c.a.createElement(u.a,null,c.a.createElement("header",{className:"subnav"},c.a.createElement("h1",null,"Toggle"),c.a.createElement(m.a,{pageName:d})),c.a.createElement(h.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column column--full"},c.a.createElement("h2",{className:"example-header no-margin--top",id:"customToggleSwitch"},"Custom Toggle Switch",c.a.createElement(o.a,{to:e.pathname+"/#customToggleSwitch",className:"button button--transparent button--copy-link"})),c.a.createElement("div",{className:"row example-container"},c.a.createElement("fieldset",{className:"column column--full"},c.a.createElement("label",{className:"inline",htmlFor:"switch1"},"Switch"),c.a.createElement("div",{className:"switch"},c.a.createElement("input",{name:"switch",type:"checkbox",className:"switch--checkbox",id:"switch1"}),c.a.createElement("label",{className:"switch--label",htmlFor:"switch1"},c.a.createElement("span",{className:"switch--inner"}),c.a.createElement("span",{className:"switch--handle"}))))),c.a.createElement(w.a,null,'\x3c!-- Custom Toggle Switch --\x3e\n<fieldset class="column column--full">\n  <label class="inline" for="switch1">Switch</label>\n  <div class="switch">\n    <input name="switch" type="checkbox" class="switch--checkbox" id="switch1" />\n    <label class="switch--label" for="switch1">\n      <span class="switch--inner"></span>\n      <span class="switch--handle"></span>\n    </label>\n  </div>\n</fieldset>'),c.a.createElement(p.a,null,"//Include these variables in your theme file to change the color of your switch\n$switch--on: $blue !default; //Color of switch when on\n$switch--off: $gray-250 !default; //Color of switch when off\n}")))))},t}(c.a.Component);g.propTypes={location:i.a.object.isRequired},t.default=g},221:function(e,t,a){"use strict";var n=a(7),s=a.n(n),l=a(35),c=a.n(l),o=a(0),r=a.n(o),i=a(223),u=a.n(i),m=(a(222),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(c()(c()(a))),a}s()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return r.a.createElement("pre",{className:"language-scss"},r.a.createElement("code",{className:"language-scss"},this.props.children))},t}(r.a.Component));t.a=m},222:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-toggle-code-js-54d6280fe7e884ee3e38.js.map