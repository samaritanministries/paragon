(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{192:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(198);n(206);t.default=function(){return r.a.createElement("div",{className:"content content-s center-align"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("p",null,"or ",r.a.createElement(o.Link,{to:"/"},"create an account")),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",for:"email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",for:"password"})),r.a.createElement("span",{className:"space-between"},r.a.createElement("fieldset",{className:"checkbox--custom"},r.a.createElement("input",{type:"checkbox",id:"remember-me"}),r.a.createElement("label",{for:"remember-me"},"Remember me")),r.a.createElement("button",{className:"button button--transparent"},"Forgot your password")),r.a.createElement("button",{className:"button button-block"},"Sign in"))}},197:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(214)),o=a(n(215)),i=a(n(8)),u=a(n(52)),s=a(n(54)),c=a(n(4)),l=a(n(0)),p=n(15),f=n(198);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=d(n);return l.default.createElement(p.Link,(0,o.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:c,replace:h})),!0}},m))},t}(l.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=m;t.default=v;var y=function(e,t){window.___navigate(d(e),t)};t.navigate=y;var g=function(e){window.___push(d(e))};t.push=g;t.replace=function(e){window.___replace(d(e))};t.navigateTo=function(e){return g(e)}},198:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(197),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(27);n.d(t,"waitForRouteChange",function(){return c.c});var l=n(199),p=n.n(l);n.d(t,"PageRenderer",function(){return p.a});var f=n(38);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},199:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},200:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(53),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},214:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},215:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-templates-sign-in-js-f80429d5bf960830e347.js.map