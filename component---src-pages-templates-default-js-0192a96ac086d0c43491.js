(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(198);n(206);t.default=function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement("header",{className:"header"},r.a.createElement(i.Link,{to:"/templates/mobile",className:"mobile-sidebar--button",id:"close-button"},r.a.createElement("i",{className:"dashing-icon dashing-icon--menu"})),r.a.createElement("div",{className:"logo"},r.a.createElement("p",{className:"text-color--white"},"LOGO")),r.a.createElement("nav",{className:"header-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/",className:"active"},"Home")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Shares")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Bill's")))),r.a.createElement("div",{className:"alert"},r.a.createElement("i",{className:"dashing-icon dashing-icon--notification"}),r.a.createElement("div",{className:"count"},"100")),r.a.createElement("div",{className:"profile"},r.a.createElement("i",{className:"dashing-icon dashing-icon--face-good"}))),r.a.createElement("nav",{className:"sub-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/",className:"active"},"Option 1")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Option 2")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Option 3")))),r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("div",null,r.a.createElement("h1",null,"Enter Information About Your Membership"),r.a.createElement("p",null,"Add information below."))))))}},197:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(214)),i=a(n(215)),o=a(n(8)),l=a(n(52)),c=a(n(54)),s=a(n(4)),u=a(n(0)),d=n(15),p=n(198);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,l=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return u.default.createElement(d.Link,(0,i.default)({to:v,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var E=function(e){window.___push(f(e))};t.push=E;t.replace=function(e){window.___replace(f(e))};t.navigateTo=function(e){return E(e)}},198:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(197),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(199),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var p=n(38);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},199:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},200:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(53),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},214:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},215:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-templates-default-js-0192a96ac086d0c43491.js.map