(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a.n(n),i=a(0),s=a.n(i),r=a(214),c=a.n(r),l=a(210),d=a(211),m=a(209),u=a(218),g="Accordion".toLowerCase(),h=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){c()("#toggleAccordion").click(function(){this.parentElement.classList.toggle("expanded"),c()(".accordion--content").slideToggle(200)})},a.render=function(){return s.a.createElement(l.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Accordion"),s.a.createElement(d.a,{pageName:g})),s.a.createElement(m.a,null,s.a.createElement("main",{className:"content content-m",style:{marginTop:"1rem"}},s.a.createElement("div",{className:"grid grid-padding"},s.a.createElement("h2",null,"Default Accordion"),s.a.createElement("div",{className:"example-container"},s.a.createElement("div",{className:"accordion",style:{marginBottom:"1rem"}},s.a.createElement("div",{className:"accordion--header",id:"toggleAccordion",tabIndex:"0"},s.a.createElement("i",{className:"dashing-icon accordion--arrow"}),s.a.createElement("h3",{className:"title"},"Accordion Title"),s.a.createElement("h3",{className:"secondary-title"},"$100.00")),s.a.createElement("div",{className:"accordion--content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),s.a.createElement(u.a,null,'<div class="accordion">\n  <div class="accordion--header" id="toggleAccordion" tabindex="0">\n    <i class="dashing-icon accordion--arrow"></i>\n    <h3 class="title">Accordion Title</h3>\n  </div>\n\n  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n\n</div>'))))))},t}(s.a.Component);t.default=h},205:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return h});var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=a(204),c=a.n(r);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var l=a(26);a.d(t,"waitForRouteChange",function(){return l.c});var d=a(206),m=a.n(d);a.d(t,"PageRenderer",function(){return m.a});var u=a(37);a.d(t,"parsePath",function(){return u.a});var g=o.a.createContext({}),h=function(e){return o.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},206:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},207:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=a(53),c=a(1),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(r.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},208:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuNjIiIGhlaWdodD0iMTIzLjYzIiB2aWV3Qm94PSIwIDAgMTIzLjYyIDEyMy42MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NzZmYjY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ3LjI0LDg2LjE5VjYxLjgySDBhNjEuODEsNjEuODEsMCwwLDAsMTIzLjYyLjY4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjY1LDU0LjcyaDQ3LjU3YTYxLjgxLDYxLjgxLDAsMCwwLTEyMywyLjE1TDc1LjY1LDM3LjQ1WiIvPjwvZz48L2c+PC9zdmc+"},209:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children;return o.a.createElement("section",null,t)}},210:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(215),s=(a(216),a(217),a(212),a(8)),r=a.n(s),c=a(52),l=a.n(c),d=a(205),m=a(214),u=a.n(m),g=a(208),h=a.n(g),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},a.handleClick=a.handleClick.bind(l()(l()(a))),a.toggleParagon=a.toggleParagon.bind(l()(l()(a))),a.toggleComponents=a.toggleComponents.bind(l()(l()(a))),a.toggleStyle=a.toggleStyle.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadStateWithLocalStorage();var e=window.location.href;u()(".menu-group a").each(function(){var t=u()(this).text().toLowerCase();e.includes("css-grid")?u()("#css-grid").addClass("active"):e.includes("progress-stepper")?u()("#progress-stepper").addClass("active"):e.includes("radio-buttons")?u()("#radio-buttons").addClass("active"):e.includes(t)&&u()(this).addClass("active")})},a.handleClick=function(){this.setState(function(e){return{showSidebar:!e.showSidebar}})},a.toggleParagon=function(){this.setState(function(e){return{showParagon:!e.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},a.toggleComponents=function(){this.setState(function(e){return{showComponents:!e.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},a.toggleStyle=function(){this.setState(function(e){return{showStyle:!e.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},a.loadStateWithLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{var a;t=JSON.parse(t),this.setState(((a={})[e]=t,a))}catch(a){var n;this.setState(((n={})[e]=t,n))}}},a.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},o.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},o.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),o.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},o.a.createElement("ul",null,o.a.createElement("div",{className:"logo-container"},o.a.createElement("img",{src:h.a,alt:"Paragon Logo"})),o.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},o.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Paragon"),o.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),o.a.createElement("div",{className:"menu-group"},o.a.createElement(d.Link,{to:"/",activeClassName:"active"},"Principles"),o.a.createElement(d.Link,{to:"/get-started",activeClassName:"active"},"Get Started"),o.a.createElement(d.Link,{to:"/templates"},"Templates"),o.a.createElement(d.Link,{to:"/resources"},"Resources"))),o.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},o.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),o.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),o.a.createElement("div",{className:"menu-group"},o.a.createElement(d.Link,{to:"/style/accessibility"},"Accessibility"),o.a.createElement(d.Link,{to:"/style/color/code"},"Color"),o.a.createElement(d.Link,{to:"/style/typography/code"},"Typography"))),o.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},o.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),o.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),o.a.createElement("div",{className:"menu-group"},o.a.createElement(d.Link,{to:"/components/accordion/code"},"Accordion"),o.a.createElement(d.Link,{to:"/components/actions/code"},"Actions"),o.a.createElement(d.Link,{to:"/components/banner/code"},"Banner"),o.a.createElement(d.Link,{to:"/components/cards/code"},"Cards"),o.a.createElement(d.Link,{to:"/components/checkboxes/code"},"Checkboxes"),o.a.createElement(d.Link,{to:"/components/footer/code"},"Footer"),o.a.createElement(d.Link,{to:"/components/forms/code"},"Forms"),o.a.createElement(d.Link,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),o.a.createElement(d.Link,{to:"/components/grid/code"},"Grid"),o.a.createElement(d.Link,{to:"/components/icons/code"},"Icons"),o.a.createElement(d.Link,{to:"/components/lists/code"},"Lists"),o.a.createElement(d.Link,{to:"/components/navigation/code"},"Navigation"),o.a.createElement(d.Link,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),o.a.createElement(d.Link,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),o.a.createElement(d.Link,{to:"/components/spinner/code"},"Spinner"),o.a.createElement(d.Link,{to:"/components/tables/code"},"Tables"),o.a.createElement(d.Link,{to:"/components/tags/code"},"Tags"),o.a.createElement(d.Link,{to:"/components/toggle/code"},"Toggle"))))))},t}(o.a.Component);a(213),t.a=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(i.Helmet,null,o.a.createElement("script",{src:"/static/prism.js",type:"application/javascript"})),o.a.createElement(p,null),o.a.createElement("div",{className:"app-content"},t,o.a.createElement("footer",null,o.a.createElement("div",{className:"copyright"},"© 2018 Samaritan Ministries International"),o.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},211:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(205);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,s=a;return o.a.createElement("div",{className:"subnav-links"},o.a.createElement(i.Link,{to:s+"/"+n+"/code",activeClassName:"active"},"Code"),o.a.createElement(i.Link,{to:s+"/"+n+"/guidelines",activeClassName:"active"},"Guidelines"))}},218:function(e,t,a){"use strict";a(212);var n=a(8),o=a.n(n),i=a(52),s=a.n(i),r=a(0),c=a.n(r),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(s()(s()(a))),a}o()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){window.Prism.highlightAll()},a.render=function(){return c.a.createElement("div",{className:this.state.showCode?"group-open":""},c.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},c.a.createElement("i",{className:"icon--code"})),c.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},c.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(c.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-pages-components-accordion-code-js-aba99cbdc30daf6fdd24.js.map