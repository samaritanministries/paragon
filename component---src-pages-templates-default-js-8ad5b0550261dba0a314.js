/*! For license information please see component---src-pages-templates-default-js-8ad5b0550261dba0a314.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[73,36,38,39,77],{"3d4j":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("footer",{className:"footer-container","data-id":"footer-container"},l.a.createElement("div",{className:"footer"},l.a.createElement("nav",{className:"footer-nav"},l.a.createElement("ul",{className:"footer-nav-links"},l.a.createElement("li",null,l.a.createElement("a",{href:""},"Contact Us")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"What's New")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://samaritanministries.org/uploads/documents/Samaritan_Given_Guidelines.pdf",rel:"noopener noreferrer",target:"_blank"},"Guidelines ",l.a.createElement("i",{className:"dashing-icon dashing-icon--new-tab dashing-icon--blue"})))))))},t}(l.a.Component)},"51Wt":function(e,t,n){e.exports=n.p+"static/Avatar-da0cdc8918955fd59b3691fc2137df05.jpg"},"6oEm":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("JX7q"),r=n("dI71"),l=n("TSYQ"),i=n.n(l),s=n("q1tI"),c=n.n(s),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hideMenu:!0},n.toggleMenu=n.toggleMenu.bind(Object(a.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.SubNavigation.bind(this);return c.a.createElement(e,null)},n.SubNavigation=function(){var e,t,n=this.SubNavTitle.bind(this),a=this.props,r=a.children,l=a.className,s=a.listClassName,o=a.title;return c.a.createElement("nav",{className:i()("sub-nav",(e={},e[l]=!!l,e["has-title"]=null!=o,e))},null!=o&&c.a.createElement(n,null),c.a.createElement("ul",{className:i()((t={},t[s]=!!s,t["hide-menu"]=this.state.hideMenu,t))},r))},n.SubNavTitle=function(){var e=this.props.title;this.toggleMenu.bind(this);return c.a.createElement("div",{className:"sub-nav--title",onClick:this.toggleMenu},e,c.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon"}))},n.toggleMenu=function(){this.setState((function(e){return{hideMenu:!e.hideMenu}}))},t}(c.a.Component);o.defaultProps={className:void 0,listClassName:void 0,message:void 0}},DqTS:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("dI71"),r=n("TSYQ"),l=n.n(r),i=n("q1tI"),s=n.n(i),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.MobileMenu.bind(this);return s.a.createElement(e,null)},n.MobileMenu=function(){var e=this.SubNavLinks.bind(this),t=this.props.disableClick;return this.toggleMenuOpen=this.toggleMenuOpen.bind(this),s.a.createElement("div",{className:"mobile-menu_container"},s.a.createElement("button",{type:"button",style:{position:"absolute"},onClick:this.toggleMenuOpen,className:l()({"mobile-menu_toggle":!0,"is-open":this.state.isOpen,"disable-click":t})},s.a.createElement("i",{"data-id":"menu-icon",className:"dashing-icon no-margin "+(this.state.isOpen?"dashing-icon--close":"dashing-icon--menu")})),s.a.createElement(e,null))},n.SubNavLinks=function(){return s.a.createElement("section",{className:"mobile-menu_overlay "+(this.state.isOpen?"":"is-collapsed")},s.a.createElement("aside",{className:"mobile-sidebar"},s.a.createElement("div",{className:"mobile-sidebar_header"}),s.a.createElement("nav",{className:"mobile-sidebar_nav"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Page 1")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Page 2")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Page 3"))))))},n.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},t}(s.a.Component);c.defaultProps={disableClick:!1}},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},"MiG/":function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=n("Wbzz"),s=n("3d4j"),c=n("tz0Y"),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.default,null),l.a.createElement("main",{className:"content"},l.a.createElement("div",{className:"grid grid-padding"},l.a.createElement("div",{className:"grid--full grid--half_desktop"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h1",null,"Primary Header"),l.a.createElement("p",null,"Header description"),l.a.createElement(i.Link,{to:"/templates/overpanel"},"View Overpanel")," ",l.a.createElement("br",null)))))),l.a.createElement(s.default,null))},t}(l.a.Component);t.default=o},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},tz0Y:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("dI71"),r=n("Wbzz"),l=n("51Wt"),i=n.n(l),s=n("q1tI"),c=n.n(s),o=n("DqTS"),u=n("6oEm"),m=function(e){function t(t){return e.call(this,t)||this}Object(a.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.MainHeader.bind(this),t=this.props.hasSubNav;return c.a.createElement(c.a.Fragment,null,c.a.createElement(e,null),t&&c.a.createElement(u.default,null,c.a.createElement("li",null,c.a.createElement(r.Link,{to:"/",className:"active"},"Option 1")),c.a.createElement("li",null,c.a.createElement(r.Link,{to:"/"},"Option 2")),c.a.createElement("li",null,c.a.createElement(r.Link,{to:"/"},"Option 3"))))},n.MainHeader=function(){return c.a.createElement("header",{className:"header"},c.a.createElement(o.default,null),c.a.createElement("div",{className:"logo"},c.a.createElement("p",{className:"text-color--purple no-margin"},"LOGO")),c.a.createElement("nav",{className:"header-nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.Link,{to:"/",className:"active"},"Page 1")),c.a.createElement("li",null,c.a.createElement(r.Link,{to:"/"},"Page 2")),c.a.createElement("li",null,c.a.createElement(r.Link,{to:"/"},"Page 3")))),c.a.createElement("div",{className:"profile",tabIndex:"0",style:{marginLeft:"auto"}},c.a.createElement("div",{className:"avatar-container center"},c.a.createElement("img",{className:"avatar",src:i.a})),c.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down"})))},n.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},t}(c.a.Component);m.defaultProps={hasSubNav:!1}}}]);
//# sourceMappingURL=component---src-pages-templates-default-js-8ad5b0550261dba0a314.js.map