(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(205),o=(a(213),a(208)),s=a.n(o),u=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"example-sidebar"},r.a.createElement("ul",null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:s.a,alt:"Paragon Logo"}))))),r.a.createElement("div",{className:"app-content"},t,r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright"},"© 2018 Samaritan Ministries International"),r.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))},l=a(209);t.default=function(){return r.a.createElement(u,null,r.a.createElement(l.a,null,r.a.createElement("section",{className:"splash-image"},r.a.createElement("div",{className:"splash-image--content"},r.a.createElement("div",{className:"row",style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"column column--full"},r.a.createElement("h1",{className:"splash-image--title"},"404 Not Found!"),r.a.createElement("h3",{className:"splash-image--subtitle"},"Hey, that's awesome. This page either doesn't exist, or the page is loading..."),r.a.createElement(i.Link,{className:"button button--primary",to:"/"},"Return to Home"))))),r.a.createElement("div",{className:"row"})))}},204:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(221)),i=n(a(222)),o=n(a(9)),s=n(a(56)),u=n(a(58)),l=n(a(4)),c=n(a(0)),d=a(16),p=a(205);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(a);return c.default.createElement(d.Link,(0,i.default)({to:v,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:l,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){window.___push(f(e))};t.push=y;t.replace=function(e){window.___replace(f(e))};t.navigateTo=function(e){return y(e)}},205:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(204),u=a.n(s);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(29);a.d(t,"waitForRouteChange",function(){return l.c});var c=a(206),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var p=a(40);a.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},206:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},207:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(57),u=a(1),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},208:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuNjIiIGhlaWdodD0iMTIzLjYzIiB2aWV3Qm94PSIwIDAgMTIzLjYyIDEyMy42MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NzZmYjY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ3LjI0LDg2LjE5VjYxLjgySDBhNjEuODEsNjEuODEsMCwwLDAsMTIzLjYyLjY4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjY1LDU0LjcyaDQ3LjU3YTYxLjgxLDYxLjgxLDAsMCwwLTEyMywyLjE1TDc1LjY1LDM3LjQ1WiIvPjwvZz48L2c+PC9zdmc+"},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("section",null,t)}},221:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},222:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-404-js-a715dabe8774ad981d84.js.map