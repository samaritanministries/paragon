(window.webpackJsonp=window.webpackJsonp||[]).push([[70,33,35,36,74],{"3d4j":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a("q1tI"),r=a.n(n);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer-container","data-id":"footer-container"},r.a.createElement("div",{className:"footer"},r.a.createElement("nav",{className:"footer-nav"},r.a.createElement("ul",{className:"footer-nav-links"},r.a.createElement("li",null,r.a.createElement("a",{href:""},"Contact Us")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"What's New")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://samaritanministries.org/uploads/documents/Samaritan_Given_Guidelines.pdf",rel:"noopener noreferrer",target:"_blank"},"Guidelines ",r.a.createElement("i",{className:"dashing-icon dashing-icon--new-tab dashing-icon--blue"})))))))},n}(r.a.Component)},"6oEm":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l);var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hideMenu:!0},a.toggleMenu=a.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.render=function(){var e=this.SubNavigation.bind(this);return i.a.createElement(e,null)},l.SubNavigation=function(){var e,t,a=this.SubNavTitle.bind(this),n=this.props,l=n.children,o=n.className,s=n.listClassName,c=n.title;return i.a.createElement("nav",{className:r()("sub-nav",(e={},e[o]=!!o,e["has-title"]=null!=c,e))},null!=c&&i.a.createElement(a,null),i.a.createElement("ul",{className:r()((t={},t[s]=!!s,t["hide-menu"]=this.state.hideMenu,t))},l))},l.SubNavTitle=function(){var e=this.props.title;this.toggleMenu.bind(this);return i.a.createElement("div",{className:"sub-nav--title",onClick:this.toggleMenu},e,i.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon"}))},l.toggleMenu=function(){this.setState((function(e){return{hideMenu:!e.hideMenu}}))},n}(i.a.Component);o.defaultProps={className:void 0,listClassName:void 0,message:void 0}},DqTS:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l);var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.render=function(){var e=this.MobileMenu.bind(this);return i.a.createElement(e,null)},l.MobileMenu=function(){var e=this.SubNavLinks.bind(this),t=this.props.disableClick;return this.toggleMenuOpen=this.toggleMenuOpen.bind(this),i.a.createElement("div",{className:"mobile-menu_container"},i.a.createElement("button",{type:"button",style:{position:"absolute"},onClick:this.toggleMenuOpen,className:r()({"mobile-menu_toggle":!0,"is-open":this.state.isOpen,"disable-click":t})},i.a.createElement("i",{"data-id":"menu-icon",className:"dashing-icon no-margin "+(this.state.isOpen?"dashing-icon--close":"dashing-icon--menu")})),i.a.createElement(e,null))},l.SubNavLinks=function(){return i.a.createElement("section",{className:"mobile-menu_overlay "+(this.state.isOpen?"":"is-collapsed")},i.a.createElement("aside",{className:"mobile-sidebar"},i.a.createElement("div",{className:"mobile-sidebar_header"}),i.a.createElement("nav",{className:"mobile-sidebar_nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Page 1")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Page 2")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Page 3"))))))},l.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},n}(i.a.Component);o.defaultProps={disableClick:!1}},"MiG/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("3d4j"),o=a("tz0Y");a("EfUI"),a("yAO8");var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,null),r.a.createElement("main",{className:"content"},r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("div",{className:"grid--full grid--half_desktop"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h1",null,"Primary Header"),r.a.createElement("p",null,"Header description"),r.a.createElement(l.a,{to:"/templates/overpanel"},"View Overpanel")," ",r.a.createElement("br",null)))))),r.a.createElement(i.default,null))},n}(r.a.Component);t.default=s},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},tz0Y:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),i=a("DqTS"),o=a("6oEm");var s=function(e){var t,a;function r(t){return e.call(this,t)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.render=function(){var e=this.MainHeader.bind(this),t=this.props.hasSubNav;return l.a.createElement(l.a.Fragment,null,l.a.createElement(e,null),t&&l.a.createElement(o.default,null,l.a.createElement("li",null,l.a.createElement(n.a,{to:"/",className:"active"},"Option 1")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Option 2")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Option 3"))))},s.MainHeader=function(){return l.a.createElement("header",{className:"header"},l.a.createElement(i.default,null),l.a.createElement("div",{className:"logo"},l.a.createElement("p",{className:"text-color--purple"},"LOGO")),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(n.a,{to:"/",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Page 2")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Page 3")))),l.a.createElement("div",{className:"alert"},l.a.createElement("i",{className:"dashing-icon dashing-icon--notification"}),l.a.createElement("div",{className:"count"},"100")),l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"profile-image"},l.a.createElement("span",{className:"initials"},"RF")),l.a.createElement("span",{className:"profile-name"},"Ryan Fitzgerald"),l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--black"})))},s.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},r}(l.a.Component);s.defaultProps={hasSubNav:!1}}}]);
//# sourceMappingURL=component---src-pages-templates-default-js-939e5af76744113d592a.js.map