(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,a,t){"use strict";t.r(a);var n=t(8),o=t.n(n),i=t(0),c=t.n(i),s=t(196),l=t.n(s),r=t(189),d=t(186),m=t(188),u=t(190),g="Accordion".toLowerCase(),p=function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){l()("#toggleAccordion").click(function(){this.parentElement.classList.toggle("expanded"),l()(".accordion--content").slideToggle(200)})},t.render=function(){return c.a.createElement(r.a,null,c.a.createElement("header",{className:"subnav"},c.a.createElement("h1",null,"Accordion"),c.a.createElement(d.a,{pageName:g})),c.a.createElement(m.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column column--full"},c.a.createElement("h2",{className:"example-header no-margin--top"},"Default Accordion ",c.a.createElement("button",{className:"button button--transparent button--copy-link","data-id":"copyurl",id:"Default_Spinner"})),c.a.createElement("div",{className:"row example-container"},c.a.createElement("div",{className:"column column--full"},c.a.createElement("div",{className:"accordion"},c.a.createElement("div",{className:"accordion--header",id:"toggleAccordion",tabIndex:"0"},c.a.createElement("i",{className:"dashing-icon accordion--arrow"}),c.a.createElement("h3",{className:"title"},"Accordion Title"),c.a.createElement("h3",{className:"secondary-title"},"$100.00")),c.a.createElement("div",{className:"accordion--content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))),c.a.createElement(u.a,null,'<div class="accordion">\n  <div class="accordion--header" id="toggleAccordion" tabindex="0">\n    <i class="dashing-icon accordion--arrow"></i>\n    <h3 class="title">Accordion Title</h3>\n  </div>\n\n  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n\n</div>')))))},a}(c.a.Component);a.default=p},186:function(e,a,t){"use strict";var n=t(0),o=t.n(n),i=t(187);a.a=function(e){var a=e.pageName,t=e.sectionName;null==t&&(t="components"),"css grid"===a?a="css-grid":"progress stepper"===a?a="progress-stepper":"radio buttons"===a&&(a="radio-buttons");var n=a,c=t;return o.a.createElement("div",{className:"subnav-links"},o.a.createElement(i.Link,{to:c+"/"+n+"/code",activeClassName:"active"},"Code"),o.a.createElement(i.Link,{to:c+"/"+n+"/guidelines",activeClassName:"active"},"Guidelines"))}},190:function(e,a,t){"use strict";t(191);var n=t(8),o=t.n(n),i=t(52),c=t.n(i),s=t(0),l=t.n(s),r=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={showCode:!1},t.toggleCode=t.toggleCode.bind(c()(c()(t))),t}o()(a,e);var t=a.prototype;return t.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},t.componentDidMount=function(){window.Prism.highlightAll()},t.render=function(){return l.a.createElement("div",{className:this.state.showCode?"group-open":""},l.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},l.a.createElement("i",{className:"icon--code"})),l.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},l.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},a}(l.a.Component);a.a=r}}]);
//# sourceMappingURL=component---src-pages-components-accordion-code-js-888fcff75127892c8481.js.map