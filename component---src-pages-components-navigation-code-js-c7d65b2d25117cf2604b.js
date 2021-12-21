/*! For license information please see component---src-pages-components-navigation-code-js-c7d65b2d25117cf2604b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35,38],{"51Wt":function(e,a,n){e.exports=n.p+"static/Avatar-da0cdc8918955fd59b3691fc2137df05.jpg"},"6oEm":function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return r}));var t=n("JX7q"),i=n("dI71"),l=n("TSYQ"),s=n.n(l),o=n("q1tI"),c=n.n(o),r=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={hideMenu:!0},n.toggleMenu=n.toggleMenu.bind(Object(t.a)(n)),n}Object(i.a)(a,e);var n=a.prototype;return n.render=function(){var e=this.SubNavigation.bind(this);return c.a.createElement(e,null)},n.SubNavigation=function(){var e,a,n=this.SubNavTitle.bind(this),t=this.props,i=t.children,l=t.className,o=t.listClassName,r=t.title;return c.a.createElement("nav",{className:s()("sub-nav",(e={},e[l]=!!l,e["has-title"]=null!=r,e))},null!=r&&c.a.createElement(n,null),c.a.createElement("ul",{className:s()((a={},a[o]=!!o,a["hide-menu"]=this.state.hideMenu,a))},i))},n.SubNavTitle=function(){var e=this.props.title;this.toggleMenu.bind(this);return c.a.createElement("div",{className:"sub-nav--title",onClick:this.toggleMenu},e,c.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon"}))},n.toggleMenu=function(){this.setState((function(e){return{hideMenu:!e.hideMenu}}))},a}(c.a.Component);r.defaultProps={className:void 0,listClassName:void 0,message:void 0}},DOjo:function(e,a,n){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a,n,t="";Prism.plugins.customClass={add:function(e){a=e},map:function(e){n="function"==typeof e?e:function(a){return e[a]||a}},prefix:function(e){t=e||""}},Prism.hooks.add("wrap",(function(e){if(a){var i=a({content:e.content,type:e.type,language:e.language});Array.isArray(i)?e.classes.push.apply(e.classes,i):i&&e.classes.push(i)}(n||t)&&(e.classes=e.classes.map((function(a){return t+(n?n(a,e.language):a)})))}))}}()}).call(this,n("yLpj"))},DqTS:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return c}));var t=n("dI71"),i=n("TSYQ"),l=n.n(i),s=n("q1tI"),o=n.n(s),c=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={isOpen:!1},n}Object(t.a)(a,e);var n=a.prototype;return n.render=function(){var e=this.MobileMenu.bind(this);return o.a.createElement(e,null)},n.MobileMenu=function(){var e=this.SubNavLinks.bind(this),a=this.props.disableClick;return this.toggleMenuOpen=this.toggleMenuOpen.bind(this),o.a.createElement("div",{className:"mobile-menu_container"},o.a.createElement("button",{type:"button",style:{position:"absolute"},onClick:this.toggleMenuOpen,className:l()({"mobile-menu_toggle":!0,"is-open":this.state.isOpen,"disable-click":a})},o.a.createElement("i",{"data-id":"menu-icon",className:"dashing-icon no-margin "+(this.state.isOpen?"dashing-icon--close":"dashing-icon--menu")})),o.a.createElement(e,null))},n.SubNavLinks=function(){return o.a.createElement("section",{className:"mobile-menu_overlay "+(this.state.isOpen?"":"is-collapsed")},o.a.createElement("aside",{className:"mobile-sidebar"},o.a.createElement("div",{className:"mobile-sidebar_header"}),o.a.createElement("nav",{className:"mobile-sidebar_nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Page 1")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Page 2")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Page 3"))))))},n.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},a}(o.a.Component);c.defaultProps={disableClick:!1}},TSYQ:function(e,a,n){var t;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)){if(t.length){var s=i.apply(null,t);s&&e.push(s)}}else if("object"===l)if(t.toString===Object.prototype.toString)for(var o in t)n.call(t,o)&&t[o]&&e.push(o);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(a,[]))||(e.exports=t)}()},VGxr:function(e,a,n){"use strict";var t=n("q1tI"),i=n.n(t),l=n("Wbzz"),s=function(e){var a,n=e.pageName,t=e.sectionName,s=e.hasReact,o=t;return null===t&&(o="components"),a=n.replace(/\s+/g,"-"),i.a.createElement("div",{className:"subnav-links"},i.a.createElement(l.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+o+"/"+a+"/code"},"Html"),s&&i.a.createElement(l.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+o+"/"+a+"/component"},"React"),i.a.createElement(l.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+o+"/"+a+"/guidelines"},"Guidelines"))};s.defaultProps={pageName:"/",sectionName:null,hasReact:!1},a.a=s},cMve:function(e,a){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},s4fy:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(t){for(var i=[],l=0;l<t.length;l++){var s=t[l],o=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?0<i.length&&i[i.length-1].tagName===n(s.content[0].content[1])&&i.pop():"/>"===s.content[s.content.length-1].content||i.push({tagName:n(s.content[0].content[1]),openedBraces:0}):0<i.length&&"punctuation"===s.type&&"{"===s.content?i[i.length-1].openedBraces++:0<i.length&&0<i[i.length-1].openedBraces&&"punctuation"===s.type&&"}"===s.content?i[i.length-1].openedBraces--:o=!0),(o||"string"==typeof s)&&0<i.length&&0===i[i.length-1].openedBraces){var c=n(s);l<t.length-1&&("string"==typeof t[l+1]||"plain-text"===t[l+1].type)&&(c+=n(t[l+1]),t.splice(l+1,1)),0<l&&("string"==typeof t[l-1]||"plain-text"===t[l-1].type)&&(c=n(t[l-1])+c,t.splice(l-1,1),l--),t[l]=new e.Token("plain-text",c,null,c)}s.content&&"string"!=typeof s.content&&a(s.content)}}(a.tokens)}))}(Prism)},w3d0:function(e,a,n){"use strict";n.r(a);var t=n("dI71"),i=n("q1tI"),l=n.n(i),s=n("Wbzz"),o=n("51Wt"),c=n.n(o),r=n("Bl7J"),u=n("VGxr"),m=n("OmYv"),g=n("xBU5"),d=n("6oEm"),p=n("DqTS"),v="Navigation".toLowerCase(),h=function(e){function a(){return e.apply(this,arguments)||this}return Object(t.a)(a,e),a.prototype.render=function(){var e=this.props.location;return l.a.createElement(r.a,null,l.a.createElement("header",{className:"subnav"},l.a.createElement("h1",null,"Navigation"),l.a.createElement(u.a,{pageName:v})),l.a.createElement(m.a,null,l.a.createElement("div",{className:"grid grid-padding"},l.a.createElement("h2",{id:"defaultNavigation"},"Default Navigation",l.a.createElement(s.Link,{to:e.pathname+"/#defaultNavigation",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container relative"},l.a.createElement("header",{className:"header mb-space-m"},l.a.createElement(p.default,{disableClick:!0}),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3"))))),l.a.createElement(g.a,null,'<header className="header">\n  <nav class="header-nav">\n    <ul>\n      <li><Link to={"/"} class="active">Page 1</Link></li>\n      <li><Link to={"/"}>Page 2</Link></li>\n      <li><Link to={"/"}>Page 3</Link></li>\n    </ul>\n  </nav>\n</header>')),l.a.createElement("h2",{className:"mt-space-xl",id:"defaultNavigationwProfile"},"Default Navigation with Profile",l.a.createElement(s.Link,{to:e.pathname+"/#defaultNavigation",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container relative"},l.a.createElement("header",{className:"header mb-space-m"},l.a.createElement(p.default,{disableClick:!0}),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3")))),l.a.createElement("div",{className:"profile",tabIndex:"0",style:{marginLeft:"auto"}},l.a.createElement("div",{className:"avatar-container center"},l.a.createElement("img",{className:"avatar",src:c.a})),l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down"}))),l.a.createElement(g.a,null,'<header class="header">\n    <nav class="header-nav">\n      <ul>\n        <li><a href="#" class="active">Page 1</a></li>\n        <li><a href="#">Page 2</a></li>\n        <li><a href="#">Page 3</a></li>\n      </ul>\n    </nav>\n    <div class="profile" style="margin-left: auto;">\n      <div class="avatar-container center">\n        <img class="avatar" src="profile.png" />\n      </div>\n\n      <i class="dashing-icon dashing-icon--arrow-down"></i>\n    </div>\n  </header>')),l.a.createElement("h2",{className:"mt-space-xl",id:"subnavigation"},"Subnavigation",l.a.createElement(s.Link,{to:e.pathname+"/#subnavigation",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container relative"},l.a.createElement("header",{className:"header"},l.a.createElement(p.default,{disableClick:!0}),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3"))))),l.a.createElement("nav",{className:"sub-nav mb-space-m"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Option 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 3")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 4")))),l.a.createElement(g.a,null,'<header className="header">\n  <nav class="header-nav">\n    <ul>\n      <li><Link to={"/"} class="active">Page 1</Link></li>\n      <li><Link to={"/"}>Page 2</Link></li>\n      <li><Link to={"/"}>Page 3</Link></li>\n    </ul>\n  </nav>\n</header>\n<nav class="sub-nav">\n  <ul>\n    <li><Link to={"/"} class="active">Option 1</Link></li>\n    <li><Link to={"/"}>Option 2</Link></li>\n    <li><Link to={"/"}>Option 3</Link></li>\n    <li><Link to={"/"}>Option 4</Link></li>\n  </ul>\n</nav>')),l.a.createElement("h2",{className:"mt-space-xl",id:"subnavigation"},"Subnavigation with Title",l.a.createElement(s.Link,{to:e.pathname+"/#subnavigation-with-title",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container relative"},l.a.createElement("header",{className:"header"},l.a.createElement(p.default,{disableClick:!0}),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3"))))),l.a.createElement(d.default,{title:"Settings",className:"mb-space-m"},l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Option 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Option 3"))),l.a.createElement(g.a,null,'<header class="header">\n    <nav class="header-nav">\n      <ul>\n        <li><Link to={"/"} class="active">Page 1</Link></li>\n        <li><Link to={"/"}>Page 2</Link></li>\n        <li><Link to={"/"}>Page 3</Link></li>\n      </ul>\n    </nav>\n  </header>\n  <nav class="sub-nav has-title">\n    <div class="sub-nav--title">Settings</div>\n    <ul>\n      <li><Link to={"/"} class="active">Option 1</Link></li>\n      <li><Link to={"/"}>Option 2</Link></li>\n      <li><Link to={"/"}>Option 3</Link></li>\n      <li><Link to={"/"}>Option 4</Link></li>\n    </ul>\n  </nav>')),l.a.createElement("h2",{className:"mt-space-xl",id:"subnavigation"},"Subnavigation with Back Button",l.a.createElement(s.Link,{to:e.pathname+"/#subnavigation-with-back-button",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container relative"},l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 2")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/components/navigation/code"},"Page 3"))))),l.a.createElement("nav",{className:"sub-nav sub-nav--back mb-space-m"},l.a.createElement(s.Link,{to:"/components/navigation/code",className:"button button--transparent"},l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-left"}),"Back")),l.a.createElement(g.a,null,'<header class="header">\n      <nav class="header-nav">\n        <ul>\n          <li><Link to={"/"} class="active">Page 1</Link></li>\n          <li><Link to={"/"}>Page 2</Link></li>\n          <li><Link to={"/"}>Page 3</Link></li>\n        </ul>\n      </nav>\n    </header>\n    <nav class="sub-nav sub-nav--back">\n      <a class="button button--transparent">\n        <i class="dashing-icon dashing-icon--arrow-left"></i>\n        Back\n      </a>\n    </nav>')))))},a}(l.a.Component);a.default=h},xBU5:function(e,a,n){"use strict";var t=n("JX7q"),i=n("dI71"),l=n("q1tI"),s=n.n(l),o=n("wZee"),c=n.n(o),r=(n("DOjo"),n("s4fy"),n("cMve"),function(e){function a(a){var n;return(n=e.call(this,a)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(Object(t.a)(n)),n}Object(i.a)(a,e);var n=a.prototype;return n.componentDidMount=function(){c.a.highlightAll()},n.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},n.render=function(){var e=this.props,a=e.children,n=e.language,t=this.state.showCode;return c.a.plugins.customClass.map({tag:"exampletag"}),s.a.createElement("div",{className:t?"group-open":""},s.a.createElement("div",{onClick:this.toggleCode,className:t?"code-toggle is-open":"code-toggle"},s.a.createElement("i",{className:"icon--code"})),s.a.createElement("pre",{className:t?"language-"+n+" show":"language-"+n},s.a.createElement("code",{className:t?"language-"+n+" show":"language-"+n},a)))},a}(s.a.Component));r.defaultProps={children:"Default",language:"html"},a.a=r}}]);
//# sourceMappingURL=component---src-pages-components-navigation-code-js-c7d65b2d25117cf2604b.js.map