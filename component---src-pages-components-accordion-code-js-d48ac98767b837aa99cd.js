(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a.n(n),i=a(0),c=a.n(i),s=a(4),r=a.n(s),l=a(211),d=a.n(l),m=a(201),u=a(205),p=a(203),g=a(204),h=a(209),f="Accordion".toLowerCase(),v=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){d()("#toggleAccordion").click(function(){this.parentElement.classList.toggle("expanded")})},a.render=function(){var e=this.props.location;return c.a.createElement(u.a,null,c.a.createElement("header",{className:"subnav"},c.a.createElement("h1",null,"Accordion"),c.a.createElement(p.a,{pageName:f})),c.a.createElement(g.a,null,c.a.createElement("div",{className:"grid grid-padding"},c.a.createElement("h2",{id:"defaultAccordian"},"Default Accordion",c.a.createElement(m.Link,{to:e.pathname+"/#defaultAccordian",className:"button button--transparent button--copy-link"})),c.a.createElement("p",null,"To expand the accordion, apply the class ",c.a.createElement("code",{className:"example-text"},".expanded")," to the ",c.a.createElement("code",{className:"example-text"},".accordion"),"."),c.a.createElement("div",{className:"example-container"},c.a.createElement("div",{className:"accordion",style:{marginBottom:"1rem"}},c.a.createElement("div",{className:"accordion-header",id:"toggleAccordion",tabIndex:"0"},c.a.createElement("i",{className:"dashing-icon accordion-arrow"}),c.a.createElement("h3",{className:"title"},"Accordion Title"),c.a.createElement("h3",{className:"secondary-title"},"$100.00")),c.a.createElement("div",{className:"accordion-content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),c.a.createElement("div",{className:"accordion-footer"},c.a.createElement("button",{className:"button"},"Save & Continue"))),c.a.createElement(h.a,null,'<div class="accordion">\n  <div class="accordion-header" id="toggleAccordion" tabindex="0">\n    <i class="dashing-icon accordion-arrow"></i>\n    <h3 class="title">Accordion Title</h3>\n    <h3 class="secondary-title">$100.00</h3>\n  </div>\n\n  <div class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n\n  <div class="accordion-footer">\n    <button class="button">Save & Continue</button>\n  </div>\n\n</div>')))))},t}(c.a.Component);v.propTypes={location:r.a.object.isRequired},t.default=v},203:function(e,t,a){"use strict";a(32);var n=a(0),o=a.n(n),i=a(201);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,c=a,s=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},r=function(e){return o.a.createElement(i.Link,Object.assign({getProps:s},e),e.children)};return o.a.createElement("div",{className:"subnav-links"},o.a.createElement(r,{to:c+"/"+n+"/code"},"Code"),o.a.createElement(r,{to:c+"/"+n+"/guidelines"},"Guidelines"))}},209:function(e,t,a){"use strict";var n=a(7),o=a.n(n),i=a(51),c=a.n(i),s=a(0),r=a.n(s),l=a(212),d=a.n(l),m=(a(210),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(c()(c()(a))),a}o()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){d.a.highlightAll()},a.render=function(){return d.a.plugins.customClass.map({tag:"exampletag"}),r.a.createElement("div",{className:this.state.showCode?"group-open":""},r.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},r.a.createElement("i",{className:"icon--code"})),r.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},r.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(r.a.Component));t.a=m},210:function(e,t,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,a(75))}}]);
//# sourceMappingURL=component---src-pages-components-accordion-code-js-d48ac98767b837aa99cd.js.map