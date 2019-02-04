(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{162:function(e,a,n){"use strict";n.r(a);var t=n(8),l=n.n(t),i=n(0),o=n.n(i),s=n(202),c=n(4),r=n.n(c),m=n(206),u=n(204),p=n(205),d=n(211),g="Navigation".toLowerCase(),v=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){var e=this.props.location;return o.a.createElement(m.a,null,o.a.createElement("header",{className:"subnav"},o.a.createElement("h1",null,"Navigation"),o.a.createElement(u.a,{pageName:g})),o.a.createElement(p.a,null,o.a.createElement("div",{className:"grid grid-padding"},o.a.createElement("h2",{id:"defaultNavigation"},"Default Navigation",o.a.createElement(s.Link,{to:e.pathname+"/#defaultNavigation",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container relative"},o.a.createElement("header",{className:"header mb-space-m"},o.a.createElement("nav",{className:"header-nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3"))))),o.a.createElement(d.a,null,'<header className="header">\n  <nav class="header-nav">\n    <ul>\n      <li><Link to={"/"} class="active">Page 1</Link></li>\n      <li><Link to={"/"}>Page 2</Link></li>\n      <li><Link to={"/"}>Page 3</Link></li>\n    </ul>\n  </nav>\n</header>')),o.a.createElement("h2",{className:"mt-space-xl",id:"subnavigation"},"Subnavigation",o.a.createElement(s.Link,{to:e.pathname+"/#subnavigation",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container relative"},o.a.createElement("header",{className:"header"},o.a.createElement("nav",{className:"header-nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3"))))),o.a.createElement("nav",{className:"sub-nav mb-space-m"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Option 1")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 2")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 3")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 4")))),o.a.createElement(d.a,null,'<header className="header">\n  <nav class="header-nav">\n    <ul>\n      <li><Link to={"/"} class="active">Page 1</Link></li>\n      <li><Link to={"/"}>Page 2</Link></li>\n      <li><Link to={"/"}>Page 3</Link></li>\n    </ul>\n  </nav>\n</header>\n<nav class="sub-nav">\n  <ul>\n    <li><Link to={"/"} class="active">Option 1</Link></li>\n    <li><Link to={"/"}>Option 2</Link></li>\n    <li><Link to={"/"}>Option 3</Link></li>\n    <li><Link to={"/"}>Option 4</Link></li>\n  </ul>\n</nav>')))))},a}(o.a.Component);v.propTypes={location:r.a.object.isRequired},a.default=v},204:function(e,a,n){"use strict";n(38);var t=n(0),l=n.n(t),i=n(202);a.a=function(e){var a=e.pageName,n=e.sectionName;null==n&&(n="components"),"css grid"===a?a="css-grid":"progress stepper"===a?a="progress-stepper":"radio buttons"===a&&(a="radio-buttons");var t=a,o=n,s=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},c=function(e){return l.a.createElement(i.Link,Object.assign({getProps:s},e),e.children)};return l.a.createElement("div",{className:"subnav-links"},l.a.createElement(c,{to:o+"/"+t+"/code"},"Code"),l.a.createElement(c,{to:o+"/"+t+"/guidelines"},"Guidelines"))}},211:function(e,a,n){"use strict";n(54),n(208);var t=n(8),l=n.n(t),i=n(52),o=n.n(i),s=n(0),c=n.n(s),r=n(216),m=n.n(r),u=(n(212),function(e){function a(a){var n;return(n=e.call(this,a)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(o()(o()(n))),n}l()(a,e);var n=a.prototype;return n.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},n.componentDidMount=function(){m.a.highlightAll()},n.render=function(){return m.a.plugins.customClass.map({tag:"exampletag"}),c.a.createElement("div",{className:this.state.showCode?"group-open":""},c.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},c.a.createElement("i",{className:"icon--code"})),c.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},c.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},a}(c.a.Component));a.a=u},212:function(e,a,n){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a={classMap:{}};Prism.plugins.customClass={map:function(e){a.classMap=e},prefix:function(e){a.prefixString=e}},Prism.hooks.add("wrap",function(e){(a.classMap||a.prefixString)&&(e.classes=e.classes.map(function(e){return(a.prefixString||"")+(a.classMap[e]||e)}))})}}()}).call(this,n(218))}}]);
//# sourceMappingURL=component---src-pages-components-navigation-code-js-9bccd844308bb665d2ce.js.map