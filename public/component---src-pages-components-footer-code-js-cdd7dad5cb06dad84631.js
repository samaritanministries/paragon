(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(189),l=o(186),s=o(188),c=o(190),i=o(193),u="Footer".toLowerCase();t.default=function(){return n.a.createElement(r.a,null,n.a.createElement("header",{className:"subnav"},n.a.createElement("h1",null,"Footer"),n.a.createElement(l.a,{pageName:u})),n.a.createElement(s.a,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column column--full"},n.a.createElement("h2",{className:"example-header no-margin--top"},"Footer ",n.a.createElement("button",{className:"button button--transparent button--copy-link","data-id":"copyurl",id:"Footer"})),n.a.createElement("div",{className:"row example-container"},n.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},n.a.createElement("footer",{className:"app-footer example--footer",style:{position:"relative"}},n.a.createElement("div",{className:"row no-padding"},n.a.createElement("button",{className:"button button--primary float-left"},"Save"),n.a.createElement("button",{className:"button button--primary button--green float-right"},"Submit"))))),n.a.createElement(c.a,null,'\x3c!-- Apply the fixed class to the app-footer element to fix it to the bottom --\x3e\n<footer class="app-footer fixed">\n  <div class="row no-padding">\n    <button class="float-left">Save</button>\n    <button class="button--green float-right">Submit</button>\n  </div>\n</footer>'),n.a.createElement(i.a,null,"//Include these variables in your theme file to change the color theme of your footer\n$footer-color: $white !default; //Override this variable to change the color of your footer\n$footer-border-color: $gray-200 !default; //Override this variable to change the color of the top border of your footer")))))}},186:function(e,t,o){"use strict";var a=o(0),n=o.n(a),r=o(187);t.a=function(e){var t=e.pageName,o=e.sectionName;null==o&&(o="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var a=t,l=o;return n.a.createElement("div",{className:"subnav-links"},n.a.createElement(r.Link,{to:l+"/"+a+"/code",activeClassName:"active"},"Code"),n.a.createElement(r.Link,{to:l+"/"+a+"/guidelines",activeClassName:"active"},"Guidelines"))}},190:function(e,t,o){"use strict";o(191);var a=o(8),n=o.n(a),r=o(52),l=o.n(r),s=o(0),c=o.n(s),i=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={showCode:!1},o.toggleCode=o.toggleCode.bind(l()(l()(o))),o}n()(t,e);var o=t.prototype;return o.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},o.componentDidMount=function(){window.Prism.highlightAll()},o.render=function(){return c.a.createElement("div",{className:this.state.showCode?"group-open":""},c.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},c.a.createElement("i",{className:"icon--code"})),c.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},c.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(c.a.Component);t.a=i},193:function(e,t,o){"use strict";o(191);var a=o(8),n=o.n(a),r=o(52),l=o.n(r),s=o(0),c=o.n(s),i=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={showCode:!1},o.toggleCode=o.toggleCode.bind(l()(l()(o))),o}n()(t,e);var o=t.prototype;return o.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},o.componentDidMount=function(){window.Prism.highlightAll()},o.render=function(){return c.a.createElement("pre",{className:"language-scss"},c.a.createElement("code",{className:"language-scss"},this.props.children))},t}(c.a.Component);t.a=i}}]);
//# sourceMappingURL=component---src-pages-components-footer-code-js-cdd7dad5cb06dad84631.js.map