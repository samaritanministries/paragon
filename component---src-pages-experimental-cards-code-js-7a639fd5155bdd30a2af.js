(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(203),s=a(204),i=a(202),l="Card".toLowerCase();t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("header",{className:"subnav"},r.a.createElement("h1",null,"Card"),r.a.createElement(s.a,{pageName:l})),r.a.createElement(i.a,null,r.a.createElement("main",{className:"content content-m"},r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("div",{className:"card no-padding"},r.a.createElement("div",{className:"card--header has-border"},r.a.createElement("h2",null,"Form")),r.a.createElement("div",{className:"card--content flex-content"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",null,r.a.createElement("label",{for:"first-name"},"First Name"),r.a.createElement("input",{type:"text",id:"first-name"})),r.a.createElement("fieldset",null,r.a.createElement("label",{for:"middle-name"},"Middle Name"),r.a.createElement("input",{type:"text",id:"middle-name"})),r.a.createElement("fieldset",null,r.a.createElement("label",{for:"last-name"},"Last Name"),r.a.createElement("input",{type:"text",id:"last-name"}))),r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",null,r.a.createElement("label",{for:"birthday"},"Date of Birth"),r.a.createElement("input",{type:"date",id:"birthday"})),r.a.createElement("fieldset",{className:"select--has-icon"},r.a.createElement("label",{for:"gender"},"Gender"),r.a.createElement("select",{id:"gender"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))),r.a.createElement("fieldset",{className:"spacer"}))),r.a.createElement("div",{className:"card--footer"},r.a.createElement("button",{className:"mr-space-xs"},"Submit"),r.a.createElement("button",{className:"button--transparent button--gray"},"Cancel"))),r.a.createElement("div",{className:"card no-padding"},r.a.createElement("div",{className:"card--header center-align"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("p",null,"Sign in to your account")),r.a.createElement("div",{className:"card--content flex-content"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",null,r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"text",id:"email"}))),r.a.createElement("div",{className:"flex-row"},r.a.createElement("fieldset",null,r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password"}))),r.a.createElement("div",{className:"space-between"},r.a.createElement("span",null,r.a.createElement("fieldset",{className:"checkbox--custom"},r.a.createElement("input",{type:"checkbox",id:"remember-me"}),r.a.createElement("label",{for:"remember-me"},"Remember me"))),r.a.createElement("button",{className:"button button--transparent"},"Forgot your password"))),r.a.createElement("div",{className:"card--footer"},r.a.createElement("button",{className:"button-block"},"Sign In"))),r.a.createElement("div",{className:"card grid"},r.a.createElement("h2",null,"Grid Card"),r.a.createElement("hr",null),r.a.createElement("fieldset",{className:"grid--third"},r.a.createElement("label",{for:"first-name"},"First Name"),r.a.createElement("input",{type:"text",id:"first-name"})),r.a.createElement("fieldset",{className:"grid--third"},r.a.createElement("label",{for:"middle-name"},"Middle Name"),r.a.createElement("input",{type:"text",id:"middle-name"})),r.a.createElement("fieldset",{className:"grid--third"},r.a.createElement("label",{for:"last-name"},"Last Name"),r.a.createElement("input",{type:"text",id:"last-name"})),r.a.createElement("fieldset",{className:"grid--third"},r.a.createElement("label",{for:"birthday"},"Date of Birth"),r.a.createElement("input",{type:"text",id:"birthday"})),r.a.createElement("fieldset",{className:"grid--third select--has-icon"},r.a.createElement("label",{for:"gender"},"Gender"),r.a.createElement("select",{id:"gender"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))),r.a.createElement("div",null,r.a.createElement("button",null,"Submit")))))))}},198:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(197),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var m=a(199),d=a.n(m);a.d(t,"PageRenderer",function(){return d.a});var u=a(38);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),g=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},199:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},200:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(53),l=a(1),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},201:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuNjIiIGhlaWdodD0iMTIzLjYzIiB2aWV3Qm94PSIwIDAgMTIzLjYyIDEyMy42MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NzZmYjY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ3LjI0LDg2LjE5VjYxLjgySDBhNjEuODEsNjEuODEsMCwwLDAsMTIzLjYyLjY4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjY1LDU0LjcyaDQ3LjU3YTYxLjgxLDYxLjgxLDAsMCwwLTEyMywyLjE1TDc1LjY1LDM3LjQ1WiIvPjwvZz48L2c+PC9zdmc+"},202:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("section",{className:"content-container"},t)}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(208),s=(a(209),a(210),a(205),a(8)),i=a.n(s),l=a(52),c=a.n(l),m=a(198),d=a(207),u=a.n(d),p=a(201),g=a.n(p),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},a.handleClick=a.handleClick.bind(c()(c()(a))),a.toggleParagon=a.toggleParagon.bind(c()(c()(a))),a.toggleComponents=a.toggleComponents.bind(c()(c()(a))),a.toggleStyle=a.toggleStyle.bind(c()(c()(a))),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadStateWithLocalStorage();var e=window.location.href;u()(".menu-group a").each(function(){var t=u()(this).text().toLowerCase();e.includes("css-grid")?u()("#css-grid").addClass("active"):e.includes("progress-stepper")?u()("#progress-stepper").addClass("active"):e.includes("radio-buttons")?u()("#radio-buttons").addClass("active"):e.includes(t)&&u()(this).addClass("active")})},a.handleClick=function(){this.setState(function(e){return{showSidebar:!e.showSidebar}})},a.toggleParagon=function(){this.setState(function(e){return{showParagon:!e.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},a.toggleComponents=function(){this.setState(function(e){return{showComponents:!e.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},a.toggleStyle=function(){this.setState(function(e){return{showStyle:!e.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},a.loadStateWithLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{var a;t=JSON.parse(t),this.setState(((a={})[e]=t,a))}catch(a){var n;this.setState(((n={})[e]=t,n))}}},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},r.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},r.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),r.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},r.a.createElement("ul",null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:g.a,alt:"Paragon Logo"})),r.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},r.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Paragon"),r.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),r.a.createElement("div",{className:"menu-group"},r.a.createElement(m.Link,{to:"/",activeClassName:"active"},"Principles"),r.a.createElement(m.Link,{to:"/get-started",activeClassName:"active"},"Get Started"),r.a.createElement(m.Link,{to:"/templates"},"Templates"),r.a.createElement(m.Link,{to:"/resources"},"Resources"))),r.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},r.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),r.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),r.a.createElement("div",{className:"menu-group"},r.a.createElement(m.Link,{to:"/style/accessibility"},"Accessibility"),r.a.createElement(m.Link,{to:"/style/color/code"},"Color"),r.a.createElement(m.Link,{to:"/style/typography/code"},"Typography"))),r.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},r.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),r.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),r.a.createElement("div",{className:"menu-group"},r.a.createElement(m.Link,{to:"/components/accordion/code"},"Accordion"),r.a.createElement(m.Link,{to:"/components/actions/code"},"Actions"),r.a.createElement(m.Link,{to:"/components/banner/code"},"Banner"),r.a.createElement(m.Link,{to:"/components/cards/code"},"Cards"),r.a.createElement(m.Link,{to:"/components/checkboxes/code"},"Checkboxes"),r.a.createElement(m.Link,{to:"/components/footer/code"},"Footer"),r.a.createElement(m.Link,{to:"/components/forms/code"},"Forms"),r.a.createElement(m.Link,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),r.a.createElement(m.Link,{to:"/components/grid/code"},"Grid"),r.a.createElement(m.Link,{to:"/components/icons/code"},"Icons"),r.a.createElement(m.Link,{to:"/components/lists/code"},"Lists"),r.a.createElement(m.Link,{to:"/components/navigation/code"},"Navigation"),r.a.createElement(m.Link,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),r.a.createElement(m.Link,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),r.a.createElement(m.Link,{to:"/components/spinner/code"},"Spinner"),r.a.createElement(m.Link,{to:"/components/tables/code"},"Tables"),r.a.createElement(m.Link,{to:"/components/tags/code"},"Tags"),r.a.createElement(m.Link,{to:"/components/toggle/code"},"Toggle"))))))},t}(r.a.Component);a(206),t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(o.Helmet,null,r.a.createElement("script",{src:"/static/prism.js",type:"application/javascript"})),r.a.createElement(h,null),r.a.createElement("div",{className:"app-content"},t,r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright"},"© 2018 Samaritan Ministries International"),r.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(198);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,s=a;return r.a.createElement("div",{className:"subnav-links"},r.a.createElement(o.Link,{to:s+"/"+n+"/code",activeClassName:"active"},"Code"),r.a.createElement(o.Link,{to:s+"/"+n+"/guidelines",activeClassName:"active"},"Guidelines"))}}}]);
//# sourceMappingURL=component---src-pages-experimental-cards-code-js-7a639fd5155bdd30a2af.js.map