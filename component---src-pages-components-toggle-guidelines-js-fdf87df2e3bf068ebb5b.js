(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{187:function(e,t,M){"use strict";M.r(t);var a=M(0),s=M.n(a),c=M(215),N=M(216),n=M(214),L="Toggle".toLowerCase();t.default=function(){return s.a.createElement(c.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Toggle"),s.a.createElement(N.a,{pageName:L})),s.a.createElement(n.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("p",{className:"intro"},"Toggle Switches are used for quick “on/off” options. They take up less space then radio button/checkbox groups, and give the user immediate feedback."),s.a.createElement("h2",{className:"has-number has-number--one no-margin--top"},"Instant Feedback"),s.a.createElement("p",null,"A toggles switches state should be updated instantly. The user should not have to apply the settings with another action. If this is needed, use ",s.a.createElement("a",{href:"/components/checkboxes/code"},"checkboxes")," or ",s.a.createElement("a",{href:"/components/radio-buttons/code"},"radio buttons"),"."),s.a.createElement("div",{className:"image-container double-padding"},s.a.createElement("fieldset",{className:"column column--full"},s.a.createElement("label",{className:"inline",htmlFor:"switch1"},"Off"),s.a.createElement("div",{className:"switch"},s.a.createElement("input",{name:"switch",type:"checkbox",className:"switch--checkbox",id:"switch1"}),s.a.createElement("label",{className:"switch--label",htmlFor:"switch1"},s.a.createElement("span",{className:"switch--inner"}),s.a.createElement("span",{className:"switch--handle"})))),s.a.createElement("fieldset",{className:"column column--full"},s.a.createElement("label",{className:"inline",htmlFor:"switch2"},"On"),s.a.createElement("div",{className:"switch"},s.a.createElement("input",{name:"switch",type:"checkbox",className:"switch--checkbox",id:"switch2",defaultChecked:!0}),s.a.createElement("label",{className:"switch--label",htmlFor:"switch2"},s.a.createElement("span",{className:"switch--inner"}),s.a.createElement("span",{className:"switch--handle"}))))),s.a.createElement("h2",{className:"has-number has-number--two"},"Label Text"),s.a.createElement("p",null,"When using a label make sure it clearly describes the option the user is interacting with. The label text should be one or two positive words that the user can clearly understand what will happen if the toggle is turned on or off."),s.a.createElement("div",{className:"image-container double-padding",style:{marginBottom:"2rem"}},s.a.createElement("div",{className:"flex-container"},s.a.createElement("div",{className:"icon-container"},s.a.createElement("i",{className:"dashing-icon dashing-icon--alert-filled dashing-icon--red"})),s.a.createElement("fieldset",{className:"column column--full no-padding"},s.a.createElement("label",{className:"inline",htmlFor:"switch3"},"Remove a Member"),s.a.createElement("div",{className:"switch"},s.a.createElement("input",{name:"switch",type:"checkbox",className:"switch--checkbox",id:"switch3"}),s.a.createElement("label",{className:"switch--label",htmlFor:"switch3"},s.a.createElement("span",{className:"switch--inner"}),s.a.createElement("span",{className:"switch--handle"}))))),s.a.createElement("br",null),s.a.createElement("div",{className:"flex-container"},s.a.createElement("div",{className:"icon-container"},s.a.createElement("i",{className:"dashing-icon dashing-icon--checkmark-filled dashing-icon--green"})),s.a.createElement("fieldset",{className:"column column--full no-padding"},s.a.createElement("label",{className:"inline",htmlFor:"switch4"},"Active"),s.a.createElement("div",{className:"switch"},s.a.createElement("input",{name:"switch",type:"checkbox",className:"switch--checkbox",id:"switch4",defaultChecked:!0}),s.a.createElement("label",{className:"switch--label",htmlFor:"switch4"},s.a.createElement("span",{className:"switch--inner"}),s.a.createElement("span",{className:"switch--handle"})))))),s.a.createElement("blockquote",{className:"caution"},s.a.createElement("strong",null,"Caution: Removing the Label"),s.a.createElement("p",null,"Toggle switches can be used without labels if it is clearly described elsewhere."))))))}},212:function(e,t,M){"use strict";var a=M(0),s=M.n(a),c=M(4),N=M.n(c),n=M(33),L=M.n(n);M.d(t,"a",function(){return L.a});M(213),s.a.createContext({});N.a.object,N.a.string.isRequired,N.a.func,N.a.func},213:function(e,t,M){var a;e.exports=(a=M(217))&&a.default||a},214:function(e,t,M){"use strict";var a=M(0),s=M.n(a);t.a=function(e){var t=e.children;return s.a.createElement("main",{className:"content content-m content--example-page"},t)}},215:function(e,t,M){"use strict";var a=M(0),s=M.n(a),c=(M(74),M(75),M(35)),N=M.n(c),n=M(7),L=M.n(n),i=M(212),o=M(220),u=M.n(o),j=M(218),l=M.n(j),T=function(e){function t(t){var M;return(M=e.call(this,t)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},M.handleClick=M.handleClick.bind(N()(M)),M.toggleParagon=M.toggleParagon.bind(N()(M)),M.toggleComponents=M.toggleComponents.bind(N()(M)),M.toggleStyle=M.toggleStyle.bind(N()(M)),M}L()(t,e);var M=t.prototype;return M.componentDidMount=function(){this.loadStateWithLocalStorage();var e=window.location.href;u()(".menu-group a").each(function(){var t=u()(this).text().toLowerCase();e.includes("css-grid")?u()("#css-grid").addClass("active"):e.includes("progress-stepper")?u()("#progress-stepper").addClass("active"):e.includes("radio-buttons")?u()("#radio-buttons").addClass("active"):e.includes(t)&&u()(this).addClass("active")})},M.handleClick=function(){this.setState(function(e){return{showSidebar:!e.showSidebar}})},M.toggleParagon=function(){this.setState(function(e){return{showParagon:!e.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},M.toggleComponents=function(){this.setState(function(e){return{showComponents:!e.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},M.toggleStyle=function(){this.setState(function(e){return{showStyle:!e.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},M.loadStateWithLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{var M;t=JSON.parse(t),this.setState(((M={})[e]=t,M))}catch(s){var a;this.setState(((a={})[e]=t,a))}}},M.render=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},s.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},s.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),s.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},s.a.createElement("ul",null,s.a.createElement("div",{className:"logo-container"},s.a.createElement("img",{src:l.a,alt:"Paragon Logo"})),s.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},s.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Get Started"),s.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),s.a.createElement("div",{className:"menu-group"},s.a.createElement(i.a,{to:"/",activeClassName:"active"},"Principles"),s.a.createElement(i.a,{to:"/setup",activeClassName:"active"},"Setup"),s.a.createElement(i.a,{to:"/templates"},"Templates"),s.a.createElement(i.a,{to:"/resources"},"Resources"))),s.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},s.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),s.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),s.a.createElement("div",{className:"menu-group"},s.a.createElement(i.a,{to:"/style/accessibility/code"},"Accessibility"),s.a.createElement(i.a,{to:"/style/color/code"},"Color"),s.a.createElement(i.a,{to:"/style/spacing/code"},"Spacing"),s.a.createElement(i.a,{to:"/style/typography/code"},"Typography"))),s.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},s.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),s.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),s.a.createElement("div",{className:"menu-group"},s.a.createElement(i.a,{to:"/components/accordion/code"},"Accordion"),s.a.createElement(i.a,{to:"/components/actions/code"},"Actions"),s.a.createElement(i.a,{to:"/components/banner/code"},"Banner"),s.a.createElement(i.a,{to:"/components/cards/code"},"Cards"),s.a.createElement(i.a,{to:"/components/checkboxes/code"},"Checkboxes"),s.a.createElement(i.a,{to:"/components/clippy/code"},"Clippy"),s.a.createElement(i.a,{to:"/components/footer/code"},"Footer"),s.a.createElement(i.a,{to:"/components/forms/code"},"Forms"),s.a.createElement(i.a,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),s.a.createElement(i.a,{to:"/components/grid/code"},"Grid"),s.a.createElement(i.a,{to:"/components/icons/code"},"Icons"),s.a.createElement(i.a,{to:"/components/lists/code"},"Lists"),s.a.createElement(i.a,{to:"/components/modal/code"},"Modal"),s.a.createElement(i.a,{to:"/components/navigation/code"},"Navigation"),s.a.createElement(i.a,{to:"/components/overpanel/code"},"Overpanel"),s.a.createElement(i.a,{to:"/components/pagination/code"},"Pagination"),s.a.createElement(i.a,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),s.a.createElement(i.a,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),s.a.createElement(i.a,{to:"/components/spinner/code"},"Spinner"),s.a.createElement(i.a,{to:"/components/tables/code"},"Tables"),s.a.createElement(i.a,{to:"/components/tags/code"},"Tags"),s.a.createElement(i.a,{to:"/components/toggle/code"},"Toggle"),s.a.createElement(i.a,{to:"/components/tooltip/code"},"Tooltip"))),s.a.createElement("a",{href:"https://badge.fury.io/js/paragon-framework"},s.a.createElement("img",{src:"https://badge.fury.io/js/paragon-framework.svg",alt:"npm version",height:"18"})))))},t}(s.a.Component);M(219),t.a=function(e){var t=e.children;return s.a.createElement("div",null,s.a.createElement(T,null),s.a.createElement("div",{className:"app-content"},t,s.a.createElement("footer",null,s.a.createElement("div",{className:"copyright"},"© 2019 Samaritan Ministries International"),s.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},216:function(e,t,M){"use strict";M(34);var a=M(0),s=M.n(a),c=M(212);t.a=function(e){var t=e.pageName,M=e.sectionName;null==M&&(M="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var a=t,N=M,n=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},L=function(e){return s.a.createElement(c.a,Object.assign({getProps:n},e),e.children)};return s.a.createElement("div",{className:"subnav-links"},s.a.createElement(L,{to:N+"/"+a+"/code"},"Code"),s.a.createElement(L,{to:N+"/"+a+"/guidelines"},"Guidelines"))}},217:function(e,t,M){"use strict";M.r(t);M(34);var a=M(0),s=M.n(a),c=M(4),N=M.n(c),n=M(55),L=M(2),i=function(e){var t=e.location,M=L.default.getResourcesForPathnameSync(t.pathname);return M?s.a.createElement(n.a,Object.assign({location:t,pageResources:M},M.json)):null};i.propTypes={location:N.a.shape({pathname:N.a.string.isRequired}).isRequired},t.default=i},218:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAyLjM1MiAzNjIuMzU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAyLjM1MiAzNjIuMzU1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6I0Y5Q0Y1Njt9Cgkuc3Qye2ZpbGw6IzRENEQ2ODt9Cgkuc3Qze2ZpbGw6I0E5OEY2RTt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzRENEQ2ODtzdHJva2Utd2lkdGg6MTA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NXtmaWxsOiNGNkNENjY7fQoJLnN0NntmaWxsOiMyNzM0NkQ7fQoJLnN0N3tmaWxsOm5vbmU7c3Ryb2tlOiMyNzM0NkQ7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDh7ZmlsbDojNzM1NjlCO30KCS5zdDl7ZmlsbDojRTk2OTYzO30KPC9zdHlsZT4KPGcgaWQ9IlhNTElEXzJfIj4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0xMjUuNTg1LDEwMy43MTFjLTAuMTU2LDEuNDM5LTAuMzcxLDIuODc5LTAuNjU3LDQuMzA3TDEwNS4xNDcsODguMDhjLTYuNDY0LTYuNTE2LTE2Ljk4NC02LjU1OC0yMy41MS0wLjA5MwoJCQljNi41MjYtNi40NjQsNi41NjgtMTYuOTk0LDAuMDkzLTIzLjUxTDYwLjM4Niw0Mi45NjFjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3CgkJCUMxMjIuMTI1LDcwLjg1NywxMjcuMzc5LDg3LjYwOCwxMjUuNTg1LDEwMy43MTF6Ii8+CgkJPHBhdGggY2xhc3M9InN0NSIgZD0iTTcwLjU3NywyNTYuNDg0bC0zNi45MTUsNDguOTY0Yy02LjM5NCw4LjQ4NS0xOS45MTYsMy45MzEtMTkuODc0LTYuNjk5bDAuMDU1LTEzLjlsMC4zOSwwLjAwMmw0NS44OTItNjAuODc4CgkJCWM2LjkwNi05LjE0MywxMC42NjEtMjAuMjg4LDEwLjcwNi0zMS43NDhsMC4xNDUtMzYuMzdsLTAuMDI5LTIuOGMxMy45NjEtMC4xMjQsMjcuODgyLTUuNDg5LDM4LjU2NC0xNi4wOTcKCQkJYzguMjUzLTguMTc3LDEzLjM5My0xOC4zMTcsMTUuNDE1LTI4LjkzOWwwLjYzNywwLjY0M2wtMC4yMjksNTcuNjRjLTAuMDQ2LDExLjQ2LTMuOCwyMi41OTUtMTAuNjk2LDMxLjc0OGwtMjQuMjI4LDMyLjEzNAoJCQlMNzAuNTc3LDI1Ni40ODR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyNS41ODUsMTAzLjcxMWwtMC4wMiw0Ljk1bC0wLjYzNy0wLjY0M0MxMjUuMjEzLDEwNi41OSwxMjUuNDI5LDEwNS4xNTEsMTI1LjU4NSwxMDMuNzExeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05Mi4yNTcsMTA1LjYzOWM0LjMzMyw0LjM2Nyw0LjMwNSwxMS4zOTctMC4wNjMsMTUuNzNjLTQuMzU3LDQuMzIzLTExLjM5Nyw0LjI5NS0xNS43Mi0wLjA2MwoJCQljLTQuMzIzLTQuMzY3LTQuMjk1LTExLjM5NywwLjA2My0xNS43M0M4MC44OTQsMTAxLjI1NCw4Ny45MzQsMTAxLjI4Miw5Mi4yNTcsMTA1LjYzOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNzAuOTc3LDE1NS44NTVsLTAuMTQ1LDM2LjM3Yy0wLjA0NiwxMS40Ni0zLjgsMjIuNjA1LTEwLjcwNiwzMS43NDhMMTQuMjMzLDI4NC44NWwtMC4zOS0wLjAwMkwxNC41ODYsOTguMTIKCQkJbDAuMzMsMC4wMDFjMC4xMzUsMTMuOTUxLDUuNDk5LDI3Ljg1MiwxNi4wOTcsMzguNTI0YzEwLjk4NiwxMS4wNzQsMjUuNDg0LDE2LjU1MSwzOS45MzUsMTYuNDA5TDcwLjk3NywxNTUuODU1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02OC4yOTUsMTAzLjQwM2wtMC4wMzIsOC4xN2MtMC4wMDQsMC45LTAuNTY3LDEuNzA4LTEuNDE4LDIuMDM0bC0xNC40MjIsNS40NjMKCQkJYy0xLjMyMiwwLjQ5NS0yLjYwNy0wLjgtMi4wOTItMi4xMThsNS41NjctMTQuMzc4YzAuMzMzLTAuODQ5LDEuMTQ2LTEuNDA1LDIuMDU2LTEuNDAybDguMTYsMC4wMzIKCQkJQzY3LjMyNCwxMDEuMjEsNjguMywxMDIuMTkzLDY4LjI5NSwxMDMuNDAzeiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0NiIgY3g9IjU2LjE3OCIgY3k9Ijg1LjA1NSIgcj0iMTEuMTE2Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTI0LjkyNywxMDguMDE5Yy0yLjAyMiwxMC42MjItNy4xNjMsMjAuNzYyLTE1LjQxNSwyOC45MzljLTEwLjY4MiwxMC42MDgtMjQuNjA0LDE1Ljk3Mi0zOC41NjQsMTYuMDk3CgkJCWMtMTQuNDUxLDAuMTQzLTI4Ljk0OS01LjMzNS0zOS45MzUtMTYuNDA5Yy0xMC41OTgtMTAuNjcyLTE1Ljk2Mi0yNC41NzQtMTYuMDk3LTM4LjUyNGMtMC4xNTItMTQuNDYxLDUuMzI1LTI4Ljk3OSwxNi40MDktMzkuOTc1CgkJCWM4LjI1My04LjE4NywxOC40MzMtMTMuMjQ3LDI5LjA2MS0xNS4xODVjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3YzEyLjMwMSwxMi4zOTksMTcuNTU0LDI5LjE1LDE1Ljc2LDQ1LjI1MwoJCQlDMTI1LjQyOSwxMDUuMTUxLDEyNS4yMTMsMTA2LjU5LDEyNC45MjcsMTA4LjAxOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNjMuNDA1LDE1LjUxM2wtMy40NDQsMy40MTZjLTYuNTE2LDYuNDY0LTYuNTU4LDE2Ljk5NC0wLjA5MywyMy41MWwwLjUxOCwwLjUyMkw4MS43Myw2NC40NzcKCQkJYzYuNDc0LDYuNTE2LDYuNDMyLDE3LjA0Ni0wLjA5MywyMy41MSIvPgoJCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xNTMuOTYzLDEwNi43OTRsLTMuNDQ0LDMuNDE2Yy02LjUxNiw2LjQ2NC0xNy4wMzYsNi40MjItMjMuNTEtMC4wOTNsLTEuNDQ0LTEuNDU2bC0wLjYzNy0wLjY0MwoJCQlMMTA1LjE0Nyw4OC4wOGMtNi40NjQtNi41MTYtMTYuOTg0LTYuNTU4LTIzLjUxLTAuMDkzIi8+CgkJPHBhdGggY2xhc3M9InN0NyIgZD0iTTE0LjU4Niw5OC4xMmwtMC43NDMsMTg2LjcyOWwtMC4wNTUsMTMuOWMtMC4wNDIsMTAuNjMsMTMuNDgsMTUuMTg0LDE5Ljg3NCw2LjY5OWwzNi45MTUtNDguOTY0CgkJCWwxOS44MzUtMjYuMzAxbDI0LjIyOC0zMi4xMzRjNi44OTYtOS4xNTMsMTAuNjUxLTIwLjI4OCwxMC42OTYtMzEuNzQ4bDAuMjI5LTU3LjY0bDAuMDItNC45NWwwLjAyLTUuMTUiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTQuMjMzLDI4NC44NWw0NS44OTItNjAuODc4YzYuOTA2LTkuMTQzLDEwLjY2MS0yMC4yODgsMTAuNzA2LTMxLjc0OGwwLjE0NS0zNi4zNyIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjM4LjA2NywzNDYuODQ1IDcxLjk0NiwzMDEuOSA5MS43MiwyNzUuNjc4IDEyNy4zNTksMjI4LjQwOSAJCSIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjcwLjU3NywyNTYuMzc0IDcwLjU3NywyNTYuNDg0IDcwLjQwMSwzMDAuNzMzIAkJIi8+CgkJPGxpbmUgY2xhc3M9InN0NyIgeDE9IjkwLjcxIiB5MT0iMjMwLjQxNCIgeDI9IjkwLjUzNCIgeTI9IjI3NC43ODMiLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05ODkuOTY1LDIxNy44MzRjLTYuNTM2LDAtMTIuNzg5LDAtMTkuNjc2LDBjMC0yLjExMywwLjAwNS00LjA1OS0wLjAwMS02LjAwNgoJCWMtMC4wNTItMTguNDgxLDAuMzM3LTM2Ljk3OC0wLjI4Ny01NS40NGMtMC42MDEtMTcuNzc1LTE5LjE0NC0yOS4wOTgtMzUuNjc4LTIyLjQ1NWMtMTIuMzEyLDQuOTQ3LTIwLjE2NCwxNi4zOTQtMjAuMjQzLDI5Ljk0MgoJCWMtMC4xMDQsMTcuODA5LTAuMDI2LDM1LjYyLTAuMDI2LDUzLjgxNWMtNi41ODUsMC0xMi45NjQsMC0xOS42NjksMGMwLTMyLjkwMSwwLTY1LjgwMiwwLTk5LjEzOGM2LjIyNSwwLDEyLjYxMiwwLDE5LjM4MSwwCgkJYzAuMTQ1LDEuMzUyLDAuMzE0LDIuOTMyLDAuNTc3LDUuMzg1YzEuODQxLTEuMzQ0LDMuMzI4LTIuNDY0LDQuODUtMy41MzVjMTMuODYxLTkuNzU4LDI4LjczMy0xMC45ODYsNDMuOTEtNC4wMzYKCQljMTUuNDc2LDcuMDg3LDI1LjU3NSwxOS40NjUsMjYuNTYzLDM2LjQ4MUM5OTAuOTA3LDE3NC4yNDYsOTg5Ljk2NSwxOTUuNzcxLDk4OS45NjUsMjE3LjgzNHoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02NDcuNDY5LDI2Ny4yNjVjNC43MTYtNC42NzQsOS4yMjctOS4xNDQsMTMuNzc0LTEzLjY1YzE0LjkyNywxMi41NjEsMzEuMjkxLDE1LjA5MSw0OC4yMSw0LjQ1NQoJCQljMTYuMjg3LTEwLjIzOCwxOS4wOC0yNi40NzgsMTcuMjM2LTQ0LjQyOWMtMTMuMjA1LDEwLjA4Mi0yNy45MzksMTMuMTg5LTQ0LjAwNyw5Ljg5MmMtMTMuMzgzLTIuNzQ2LTI0LjI3NC05LjY3OC0zMi42NzktMjAuMzk3CgkJCWMtMTYuNDUzLTIwLjk4My0xNS40ODEtNTEuMDk3LDEuNzMzLTcxLjExN2MxNi45ODctMTkuNzU2LDUwLjkwOC0yNy4zNjEsNzUuMTYxLTguMTY4YzAtMS43NDUsMC0zLjI5NCwwLTUuMDI4CgkJCWM2LjcwNywwLDEzLjEzOCwwLDE5LjgzNCwwYzAuMDUxLDAuNzAzLDAuMTU3LDEuNDcyLDAuMTU3LDIuMjQyYzAuMDA4LDM0Ljg4MSwwLjExMyw2OS43NjItMC4wMjYsMTA0LjY0MgoJCQljLTAuMTExLDI3LjkzNi0xOC44MTEsNTEuMjgtNDYuMTQ5LDU3LjEzM2MtMTkuNTQxLDQuMTgzLTM3LjAxNC0wLjYyNy01MS45MS0xNC4xNjYKCQkJQzY0OC4zNDUsMjY4LjI1OCw2NDcuOTQ4LDI2Ny43NzMsNjQ3LjQ2OSwyNjcuMjY1eiBNNzI3LjAxOCwxNjguNjI3YzAtMS4wNzksMC0yLjE1NywwLTMuMjM2CgkJCWMtMC4wMDQtMjAuMjM3LTE3LjI2Mi0zNS4zNDktMzcuMzE2LTMyLjY3NmMtMTUuNDUzLDIuMDYtMjcuOTg0LDEzLjY5My0zMS4xMDgsMjguODc5Yy0zLjAzMiwxNC43NCwzLjc3NSwzMC4xMDcsMTYuOTA3LDM4LjE2OQoJCQljMTMuMDU3LDguMDE2LDMwLjA0MSw2Ljg0NSw0MC41ODItMi45OTZDNzI0LjIwMSwxODkuMTg3LDcyNy41OTksMTc5LjY1LDcyNy4wMTgsMTY4LjYyN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjA4LjkwNywyMTMuMzY0YzAsMjMuNzk4LDAsNDcuMTI4LDAsNzAuNjczYy02LjYyMiwwLTEzLjAzNSwwLTE5LjY0NCwwYzAtNTQuOTY2LDAtMTEwLjAwNCwwLTE2NS4yMgoJCQljNi40MDEsMCwxMi44MTgsMCwxOS40NSwwYzAuMTAyLDEuNjYsMC4yMDMsMy4zMDEsMC4zMjgsNS4zMzdjMTMuNDc3LTEwLjQ5NywyOC4zNzctMTMuNTUsNDQuNjMtMTAuMTIyCgkJCWMxMy4yNDksMi43OTQsMjQuMTU3LDkuNTQ4LDMyLjQ1NiwyMC4yNDRjMTYuNjgzLDIxLjUsMTUuNSw1MS4wMTktMi4zMzEsNzEuMzgzQzI2Ni4zNDQsMjI1LjU5MSwyMzEuOTY4LDIzMS43MTcsMjA4LjkwNywyMTMuMzY0CgkJCXogTTIwOC44NzQsMTY4LjMwNWMwLDEuMDc5LTAuMDE3LDIuMTU3LDAuMDAzLDMuMjM2YzAuMjk2LDE2LjM3LDEyLjY2OCwzNS44NDEsMzcuNTQ3LDMyLjczMQoJCQljMjUuMjQ3LTMuMTU2LDM5LjA5NC0yOS45MDIsMjcuNTA3LTUyLjU2MWMtOS4zNzMtMTguMzMtMzQuNjgzLTI1LjE2OC01MC44OTQtMTMuNTQ2CgkJCUMyMTIuODA0LDE0NS41MDEsMjA4LjcyMSwxNTUuOTY3LDIwOC44NzQsMTY4LjMwNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNDAwLjcxMiwyMTIuOTk0Yy0yOC4zNzMsMjEuOTUtNjMuMTk4LDguNDAxLTc3LjQxMy0xMC40ODNjLTE1LjgwOC0yMS0xNC45MDktNTAuNzU5LDIuOTYxLTcxLjI5NQoJCQljMTUuOTQtMTguMzE4LDQ5LjE3OS0yNi45NjYsNzQuMjAzLTcuMTcyYzAuMDk0LTEuODcsMC4xNzUtMy40ODgsMC4yNjMtNS4yNDVjNi41ODEsMCwxMi45OTQsMCwxOS41NTgsMAoJCQljMCwzMy4xNzksMCw2Ni4yMTIsMCw5OS40MzdjLTYuNDc0LDAtMTIuODg3LDAtMTkuNTczLDBDNDAwLjcxMiwyMTYuNjQ3LDQwMC43MTIsMjE1LjA2OSw0MDAuNzEyLDIxMi45OTR6IE00MDAuNjEsMTY4Ljc1NwoJCQljMC0xLjE2OCwwLjA1Mi0yLjMzOC0wLjAwOC0zLjUwM2MtMS4wMjMtMjAuMTMtMTcuNzUyLTM3LjQ2Ni00MS4zMzQtMzEuNjEyYy0xNS4wNDYsMy43MzUtMjQuMzQ1LDEzLjcwNi0yNi44OTcsMjguOTUxCgkJCWMtMi41MSwxNC45OTEsMi45NTcsMjcuMTk3LDE1LjQ1MiwzNS45N2MxMS44NzksOC4zNCwyOS4xMDgsOC4wNjIsMzkuODE5LTAuNjQ2QzM5Ni44NDQsMTkwLjQzNyw0MDAuNzUyLDE4MC40NjMsNDAwLjYxLDE2OC43NTd6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02MTkuNDUsMjE4LjI4M2MtNi41NjgsMC0xMi45MTksMC0xOS4zNzMsMGMtMC4wODYtMS43MjUtMC4xNjUtMy4zMTItMC4yNjgtNS4zODgKCQkJYy0xNC44ODEsMTEuNTM0LTMxLjIxMiwxNC4xMDgtNDguNzMzLDkuMTA4Yy0xMi4zNDUtMy41MjItMjIuMjMxLTEwLjc5OS0yOS42MTctMjEuMjkxCgkJCWMtMTUuMjg3LTIxLjcxNy0xMy4yMDQtNTAuMzk2LDQuNTI4LTcwLjA1NGMxNS42MjUtMTcuMzIzLDQ4LjYwNS0yNi41OTgsNzMuNzg2LTYuNjExYzAuMTE4LTEuODM0LDAuMjIzLTMuNDgsMC4zMzgtNS4yNjMKCQkJYzYuNDUxLDAsMTIuNzk3LDAsMTkuMzM5LDBDNjE5LjQ1LDE1MS45MDUsNjE5LjQ1LDE4NS4wMDQsNjE5LjQ1LDIxOC4yODN6IE02MDAuMTEyLDE2Ny41MzMKCQkJYy0wLjI1NC0yLjA4NS0wLjM4Ny01LjMzNS0xLjA3Ni04LjQ2M2MtMy45MS0xNy43NS0xOC44OTMtMjguNTQ2LTM2LjM4Ni0yNi4zNjJjLTI0LjA5MiwzLjAwOC0zOC40MDksMjguNTU2LTI4LjQxNSw1MC43MDgKCQkJYzguNTY5LDE4Ljk5NSwzMi4yNzQsMjcuMTUsNDkuNDE2LDE2LjcyOEM1OTUuMzI4LDE5My4wNDMsNTk5LjczNSwxODEuODczLDYwMC4xMTIsMTY3LjUzM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNODc1Ljk1LDE2OC41NjFjLTAuMDI0LDMxLjExMy0yNC45MTgsNTUuODM1LTU2LjE3Niw1NS43ODdjLTMwLjQ1OS0wLjA0Ni01NS40MzYtMjUuMjA3LTU1LjQwNi01NS44MTIKCQkJYzAuMDMxLTMwLjg1NywyNS4xMDYtNTUuODY1LDU1Ljk3LTU1LjgyMUM4NTEuMDgzLDExMi43Niw4NzUuOTczLDEzNy43NTUsODc1Ljk1LDE2OC41NjF6IE04MjAuMzcsMjA0LjY3NQoJCQljMjAuMDU3LDAuMDE1LDM2LjE5OC0xNi4wMDgsMzYuMzItMzYuMDUzYzAuMTIxLTE5Ljg3Ni0xNi4xMDgtMzYuMTAzLTM2LjE3OC0zNi4xNzNjLTE5Ljk4MS0wLjA3LTM2LjI0OSwxNi4wNzMtMzYuMzExLDM2LjAzMgoJCQlDNzg0LjEzOSwxODguMzg1LDgwMC40MDIsMjA0LjY2LDgyMC4zNywyMDQuNjc1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik01MDkuNzY3LDEyMS4xMDhjLTQuMjQyLDUuMTcyLTguMzIzLDEwLjE0Ny0xMi4xMTYsMTQuNzcxYy0zLjI5Ny0xLjE3Ni02LjE0My0yLjc4My05LjE0LTMuMTQ5CgkJCWMtOC44MS0xLjA3NS0xNS44MjEsMy41LTE5LjQ0MiwxMi4xMzZjLTIuNTc0LDYuMTQtMy42MTksMTIuNjI5LTMuNjgsMTkuMjA5Yy0wLjE1NywxNi44OTgtMC4wODQsMzMuNzk3LTAuMTAzLDUwLjY5NgoJCQljLTAuMDAxLDEuMDc1LDAsMi4xNSwwLDMuNDQxYy02LjU4MywwLTEzLjA2NiwwLTE5LjY5MywwYzAtMzMuMTIzLDAtNjYuMTYsMC05OS41NzJjNS4wODQsMCwxMC4wODItMC4wNjQsMTUuMDc3LDAuMDI3CgkJCWMyLjQ3LDAuMDQ1LDQuNjE5LTAuNTAzLDYuOTA0LTEuNTljMTMuMDQ5LTYuMjA1LDI1Ljk4NS02LjEzMiwzOC41OCwxLjRDNTA3LjM2MSwxMTkuMTk4LDUwOC40NCwxMjAuMTMzLDUwOS43NjcsMTIxLjEwOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-components-toggle-guidelines-js-fdf87df2e3bf068ebb5b.js.map