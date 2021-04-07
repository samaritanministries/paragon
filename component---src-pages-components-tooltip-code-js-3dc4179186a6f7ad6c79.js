(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{Vi1i:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),o=a("q1tI"),l=a.n(o),i=a("Wbzz"),r=a("Bl7J"),c=a("VGxr"),s=a("OmYv"),p=a("SXpb"),m=a("6m5P"),u="Tooltip".toLowerCase(),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.location;return l.a.createElement(r.a,null,l.a.createElement("header",{className:"subnav"},l.a.createElement("h1",null,"Tooltip"),l.a.createElement(c.a,{pageName:u})),l.a.createElement(s.a,null,l.a.createElement("div",{className:"grid grid-padding"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content no-padding--top no-padding--bottom"},l.a.createElement("div",{className:"card-banner has-warning",style:{borderRadius:"5px"}},l.a.createElement("i",{className:"dashing-icon dashing-icon--alert-filled"}),l.a.createElement("p",null,"This Component has been built for React applications")))),l.a.createElement("h2",null,"Tooltip Installation"),l.a.createElement("p",{className:"no-margin--bottom"},"Paragon utilizes the ",l.a.createElement("a",{href:"https://atomiks.github.io/tippyjs/",target:"_blank",rel:"noopener noreferrer"},"Tippy.js")," component to deliver tooltips. To use in your project you must import the following:"),l.a.createElement("ul",{className:"no-margin"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/atomiks/tippyjs",target:"_blank",rel:"noopener noreferrer"},"Tippy.js package")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/atomiks/tippyjs-react",target:"_blank",rel:"noopener noreferrer"},"Tippy.js react component")),l.a.createElement("li",null,l.a.createElement("a",{href:"#defaultProps"},"Custom Paragon Tooltip Component"))),l.a.createElement("h2",{className:"mt-space-xl",id:"defaultTooltip"},"Default Tooltip",l.a.createElement(i.Link,{to:e.pathname+"/#defaultTooltip",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"grid-full mb-space-xl"},l.a.createElement("span",null,"Tooltip "),l.a.createElement(m.c,{content:"Hello Tooltip"},l.a.createElement("i",{className:"paragon-tooltip"}))),l.a.createElement("div",{className:"grid-full"},l.a.createElement(m.c,{content:"You cannot delete the Primary Phone Number"},l.a.createElement("span",{style:{display:"inline-block"}},l.a.createElement("button",{className:"button",disabled:!0},"This is Disabled")))))),l.a.createElement(p.a,null,'/* Tooltip */\n<Tooltip content="Hello Tooltip">\n  <i className="paragon-tooltip"></i>\n</Tooltip>\n\n/* Tooltip on Disabled Button */\n/*  You must wrap a tag around the disabled button to utilize a tooltip */\n<Tooltip content="You cannot delete the Primary Phone Number">\n  <span style={{ display: "inline-block" }}>\n    <button className="button" disabled>\n      This is Disabled\n    </button>\n  </span>\n</Tooltip>\n')),l.a.createElement("h2",{className:"mt-space-xl",id:"defaultTooltip"},"Icon Tooltip",l.a.createElement(i.Link,{to:e.pathname+"/#defaultTooltip",className:"button button--transparent button--copy-link"})),l.a.createElement("p",null,"Icon tooltips can be used to give the user more information about an action that is only represented by an icon. They are built to show after a 1 second delay."),l.a.createElement("div",{className:"example-container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"grid-full"},l.a.createElement(m.b,{content:"Delete"},l.a.createElement("button",{className:"button button--red button--icon button--transparent"},l.a.createElement("i",{className:"dashing-icon dashing-icon--trash"}))),l.a.createElement(m.b,{content:"Add"},l.a.createElement("button",{className:"button button--icon button--icon--main"},l.a.createElement("i",{className:"dashing-icon dashing-icon--add"})))))),l.a.createElement(p.a,null,'/* Icon Description */\n<IconDescription content="Delete">\n  <button className="button button--red button--icon button--transparent">\n    <i className="dashing-icon dashing-icon--trash"></i>\n  </button>\n</IconDescription>\n<IconDescription content="Add">\n  <button className="button button--icon button--icon--main">\n    <i className="dashing-icon dashing-icon--add"></i>\n  </button>\n</IconDescription>\n')),l.a.createElement("h2",{className:"mt-space-xl",id:"defaultProps"},"Tooltip Default Props",l.a.createElement(i.Link,{to:e.pathname+"/#defaultProps",className:"button button--transparent button--copy-link"})),l.a.createElement("p",null,"Below are the Default Props we have assigned to tooltip's in Paragon."),l.a.createElement("div",{className:"show-code"},l.a.createElement(p.a,null,"/* Tooltip Default Props */\nexport const Tooltip = props => <Tippy {...props} />\nTooltip.defaultProps = {\n  animation: 'fade',\n  boundary: 'viewport',\n  arrow: roundArrow,\n  theme: 'default',\n  maxWidth: 250,\n}\n\n/* Icon Description Default Props */\nexport const IconDescription = props => <Tippy {...props} />\nIconDescription.defaultProps = {\n  animation: 'fade',\n  placement: 'bottom',\n  boundary: 'viewport',\n  arrow: false,\n  theme: 'default',\n  maxWidth: 250,\n  delay: [1000, 0],\n  distance: 5,\n}\n")))))},t}(l.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-components-tooltip-code-js-3dc4179186a6f7ad6c79.js.map