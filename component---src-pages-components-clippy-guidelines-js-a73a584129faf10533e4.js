(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(M,e,t){"use strict";t.r(e);var N=t(0),L=t.n(N),a=t(215),j=t(216),s=t(214),c=t(221),u="Clippy".toLowerCase();e.default=function(){return L.a.createElement(a.a,null,L.a.createElement("header",{className:"subnav"},L.a.createElement("h1",null,"Clippy"),L.a.createElement(j.a,{pageName:u})),L.a.createElement(s.a,null,L.a.createElement("div",{className:"row"},L.a.createElement("div",{className:"column column--full"},L.a.createElement(c.a,null)))))}},212:function(M,e,t){"use strict";var N=t(0),L=t.n(N),a=t(4),j=t.n(a),s=t(33),c=t.n(s);t.d(e,"a",function(){return c.a});t(213),L.a.createContext({});j.a.object,j.a.string.isRequired,j.a.func,j.a.func},213:function(M,e,t){var N;M.exports=(N=t(217))&&N.default||N},214:function(M,e,t){"use strict";var N=t(0),L=t.n(N);e.a=function(M){var e=M.children;return L.a.createElement("main",{className:"content content-m content--example-page"},e)}},215:function(M,e,t){"use strict";var N=t(0),L=t.n(N),a=(t(74),t(75),t(35)),j=t.n(a),s=t(7),c=t.n(s),u=t(212),o=t(220),n=t.n(o),i=t(218),T=t.n(i),D=function(M){function e(e){var t;return(t=M.call(this,e)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},t.handleClick=t.handleClick.bind(j()(t)),t.toggleParagon=t.toggleParagon.bind(j()(t)),t.toggleComponents=t.toggleComponents.bind(j()(t)),t.toggleStyle=t.toggleStyle.bind(j()(t)),t}c()(e,M);var t=e.prototype;return t.componentDidMount=function(){this.loadStateWithLocalStorage();var M=window.location.href;n()(".menu-group a").each(function(){var e=n()(this).text().toLowerCase();M.includes("css-grid")?n()("#css-grid").addClass("active"):M.includes("progress-stepper")?n()("#progress-stepper").addClass("active"):M.includes("radio-buttons")?n()("#radio-buttons").addClass("active"):M.includes(e)&&n()(this).addClass("active")})},t.handleClick=function(){this.setState(function(M){return{showSidebar:!M.showSidebar}})},t.toggleParagon=function(){this.setState(function(M){return{showParagon:!M.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},t.toggleComponents=function(){this.setState(function(M){return{showComponents:!M.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},t.toggleStyle=function(){this.setState(function(M){return{showStyle:!M.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},t.loadStateWithLocalStorage=function(){for(var M in this.state)if(localStorage.hasOwnProperty(M)){var e=localStorage.getItem(M);try{var t;e=JSON.parse(e),this.setState(((t={})[M]=e,t))}catch(L){var N;this.setState(((N={})[M]=e,N))}}},t.render=function(){return L.a.createElement("div",null,L.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},L.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},L.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),L.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},L.a.createElement("ul",null,L.a.createElement("div",{className:"logo-container"},L.a.createElement("img",{src:T.a,alt:"Paragon Logo"})),L.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},L.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Get Started"),L.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),L.a.createElement("div",{className:"menu-group"},L.a.createElement(u.a,{to:"/",activeClassName:"active"},"Principles"),L.a.createElement(u.a,{to:"/setup",activeClassName:"active"},"Setup"),L.a.createElement(u.a,{to:"/templates"},"Templates"),L.a.createElement(u.a,{to:"/resources"},"Resources"))),L.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},L.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),L.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),L.a.createElement("div",{className:"menu-group"},L.a.createElement(u.a,{to:"/style/accessibility/code"},"Accessibility"),L.a.createElement(u.a,{to:"/style/color/code"},"Color"),L.a.createElement(u.a,{to:"/style/spacing/code"},"Spacing"),L.a.createElement(u.a,{to:"/style/typography/code"},"Typography"))),L.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},L.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),L.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),L.a.createElement("div",{className:"menu-group"},L.a.createElement(u.a,{to:"/components/accordion/code"},"Accordion"),L.a.createElement(u.a,{to:"/components/actions/code"},"Actions"),L.a.createElement(u.a,{to:"/components/banner/code"},"Banner"),L.a.createElement(u.a,{to:"/components/cards/code"},"Cards"),L.a.createElement(u.a,{to:"/components/checkboxes/code"},"Checkboxes"),L.a.createElement(u.a,{to:"/components/clippy/code"},"Clippy"),L.a.createElement(u.a,{to:"/components/footer/code"},"Footer"),L.a.createElement(u.a,{to:"/components/forms/code"},"Forms"),L.a.createElement(u.a,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),L.a.createElement(u.a,{to:"/components/grid/code"},"Grid"),L.a.createElement(u.a,{to:"/components/icons/code"},"Icons"),L.a.createElement(u.a,{to:"/components/lists/code"},"Lists"),L.a.createElement(u.a,{to:"/components/modal/code"},"Modal"),L.a.createElement(u.a,{to:"/components/navigation/code"},"Navigation"),L.a.createElement(u.a,{to:"/components/overpanel/code"},"Overpanel"),L.a.createElement(u.a,{to:"/components/pagination/code"},"Pagination"),L.a.createElement(u.a,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),L.a.createElement(u.a,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),L.a.createElement(u.a,{to:"/components/spinner/code"},"Spinner"),L.a.createElement(u.a,{to:"/components/tables/code"},"Tables"),L.a.createElement(u.a,{to:"/components/tags/code"},"Tags"),L.a.createElement(u.a,{to:"/components/toggle/code"},"Toggle"),L.a.createElement(u.a,{to:"/components/tooltip/code"},"Tooltip"))),L.a.createElement("a",{href:"https://badge.fury.io/js/paragon-framework"},L.a.createElement("img",{src:"https://badge.fury.io/js/paragon-framework.svg",alt:"npm version",height:"18"})))))},e}(L.a.Component);t(219),e.a=function(M){var e=M.children;return L.a.createElement("div",null,L.a.createElement(D,null),L.a.createElement("div",{className:"app-content"},e,L.a.createElement("footer",null,L.a.createElement("div",{className:"copyright"},"© 2019 Samaritan Ministries International"),L.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},216:function(M,e,t){"use strict";t(34);var N=t(0),L=t.n(N),a=t(212);e.a=function(M){var e=M.pageName,t=M.sectionName;null==t&&(t="components"),"css grid"===e?e="css-grid":"progress stepper"===e?e="progress-stepper":"radio buttons"===e&&(e="radio-buttons");var N=e,j=t,s=function(M){return M.isPartiallyCurrent?{className:"active"}:{className:""}},c=function(M){return L.a.createElement(a.a,Object.assign({getProps:s},M),M.children)};return L.a.createElement("div",{className:"subnav-links"},L.a.createElement(c,{to:j+"/"+N+"/code"},"Code"),L.a.createElement(c,{to:j+"/"+N+"/guidelines"},"Guidelines"))}},217:function(M,e,t){"use strict";t.r(e);t(34);var N=t(0),L=t.n(N),a=t(4),j=t.n(a),s=t(55),c=t(2),u=function(M){var e=M.location,t=c.default.getResourcesForPathnameSync(e.pathname);return t?L.a.createElement(s.a,Object.assign({location:e,pageResources:t},t.json)):null};u.propTypes={location:j.a.shape({pathname:j.a.string.isRequired}).isRequired},e.default=u},218:function(M,e){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAyLjM1MiAzNjIuMzU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAyLjM1MiAzNjIuMzU1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6I0Y5Q0Y1Njt9Cgkuc3Qye2ZpbGw6IzRENEQ2ODt9Cgkuc3Qze2ZpbGw6I0E5OEY2RTt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzRENEQ2ODtzdHJva2Utd2lkdGg6MTA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NXtmaWxsOiNGNkNENjY7fQoJLnN0NntmaWxsOiMyNzM0NkQ7fQoJLnN0N3tmaWxsOm5vbmU7c3Ryb2tlOiMyNzM0NkQ7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDh7ZmlsbDojNzM1NjlCO30KCS5zdDl7ZmlsbDojRTk2OTYzO30KPC9zdHlsZT4KPGcgaWQ9IlhNTElEXzJfIj4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0xMjUuNTg1LDEwMy43MTFjLTAuMTU2LDEuNDM5LTAuMzcxLDIuODc5LTAuNjU3LDQuMzA3TDEwNS4xNDcsODguMDhjLTYuNDY0LTYuNTE2LTE2Ljk4NC02LjU1OC0yMy41MS0wLjA5MwoJCQljNi41MjYtNi40NjQsNi41NjgtMTYuOTk0LDAuMDkzLTIzLjUxTDYwLjM4Niw0Mi45NjFjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3CgkJCUMxMjIuMTI1LDcwLjg1NywxMjcuMzc5LDg3LjYwOCwxMjUuNTg1LDEwMy43MTF6Ii8+CgkJPHBhdGggY2xhc3M9InN0NSIgZD0iTTcwLjU3NywyNTYuNDg0bC0zNi45MTUsNDguOTY0Yy02LjM5NCw4LjQ4NS0xOS45MTYsMy45MzEtMTkuODc0LTYuNjk5bDAuMDU1LTEzLjlsMC4zOSwwLjAwMmw0NS44OTItNjAuODc4CgkJCWM2LjkwNi05LjE0MywxMC42NjEtMjAuMjg4LDEwLjcwNi0zMS43NDhsMC4xNDUtMzYuMzdsLTAuMDI5LTIuOGMxMy45NjEtMC4xMjQsMjcuODgyLTUuNDg5LDM4LjU2NC0xNi4wOTcKCQkJYzguMjUzLTguMTc3LDEzLjM5My0xOC4zMTcsMTUuNDE1LTI4LjkzOWwwLjYzNywwLjY0M2wtMC4yMjksNTcuNjRjLTAuMDQ2LDExLjQ2LTMuOCwyMi41OTUtMTAuNjk2LDMxLjc0OGwtMjQuMjI4LDMyLjEzNAoJCQlMNzAuNTc3LDI1Ni40ODR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyNS41ODUsMTAzLjcxMWwtMC4wMiw0Ljk1bC0wLjYzNy0wLjY0M0MxMjUuMjEzLDEwNi41OSwxMjUuNDI5LDEwNS4xNTEsMTI1LjU4NSwxMDMuNzExeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05Mi4yNTcsMTA1LjYzOWM0LjMzMyw0LjM2Nyw0LjMwNSwxMS4zOTctMC4wNjMsMTUuNzNjLTQuMzU3LDQuMzIzLTExLjM5Nyw0LjI5NS0xNS43Mi0wLjA2MwoJCQljLTQuMzIzLTQuMzY3LTQuMjk1LTExLjM5NywwLjA2My0xNS43M0M4MC44OTQsMTAxLjI1NCw4Ny45MzQsMTAxLjI4Miw5Mi4yNTcsMTA1LjYzOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNzAuOTc3LDE1NS44NTVsLTAuMTQ1LDM2LjM3Yy0wLjA0NiwxMS40Ni0zLjgsMjIuNjA1LTEwLjcwNiwzMS43NDhMMTQuMjMzLDI4NC44NWwtMC4zOS0wLjAwMkwxNC41ODYsOTguMTIKCQkJbDAuMzMsMC4wMDFjMC4xMzUsMTMuOTUxLDUuNDk5LDI3Ljg1MiwxNi4wOTcsMzguNTI0YzEwLjk4NiwxMS4wNzQsMjUuNDg0LDE2LjU1MSwzOS45MzUsMTYuNDA5TDcwLjk3NywxNTUuODU1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02OC4yOTUsMTAzLjQwM2wtMC4wMzIsOC4xN2MtMC4wMDQsMC45LTAuNTY3LDEuNzA4LTEuNDE4LDIuMDM0bC0xNC40MjIsNS40NjMKCQkJYy0xLjMyMiwwLjQ5NS0yLjYwNy0wLjgtMi4wOTItMi4xMThsNS41NjctMTQuMzc4YzAuMzMzLTAuODQ5LDEuMTQ2LTEuNDA1LDIuMDU2LTEuNDAybDguMTYsMC4wMzIKCQkJQzY3LjMyNCwxMDEuMjEsNjguMywxMDIuMTkzLDY4LjI5NSwxMDMuNDAzeiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0NiIgY3g9IjU2LjE3OCIgY3k9Ijg1LjA1NSIgcj0iMTEuMTE2Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTI0LjkyNywxMDguMDE5Yy0yLjAyMiwxMC42MjItNy4xNjMsMjAuNzYyLTE1LjQxNSwyOC45MzljLTEwLjY4MiwxMC42MDgtMjQuNjA0LDE1Ljk3Mi0zOC41NjQsMTYuMDk3CgkJCWMtMTQuNDUxLDAuMTQzLTI4Ljk0OS01LjMzNS0zOS45MzUtMTYuNDA5Yy0xMC41OTgtMTAuNjcyLTE1Ljk2Mi0yNC41NzQtMTYuMDk3LTM4LjUyNGMtMC4xNTItMTQuNDYxLDUuMzI1LTI4Ljk3OSwxNi40MDktMzkuOTc1CgkJCWM4LjI1My04LjE4NywxOC40MzMtMTMuMjQ3LDI5LjA2MS0xNS4xODVjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3YzEyLjMwMSwxMi4zOTksMTcuNTU0LDI5LjE1LDE1Ljc2LDQ1LjI1MwoJCQlDMTI1LjQyOSwxMDUuMTUxLDEyNS4yMTMsMTA2LjU5LDEyNC45MjcsMTA4LjAxOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNjMuNDA1LDE1LjUxM2wtMy40NDQsMy40MTZjLTYuNTE2LDYuNDY0LTYuNTU4LDE2Ljk5NC0wLjA5MywyMy41MWwwLjUxOCwwLjUyMkw4MS43Myw2NC40NzcKCQkJYzYuNDc0LDYuNTE2LDYuNDMyLDE3LjA0Ni0wLjA5MywyMy41MSIvPgoJCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xNTMuOTYzLDEwNi43OTRsLTMuNDQ0LDMuNDE2Yy02LjUxNiw2LjQ2NC0xNy4wMzYsNi40MjItMjMuNTEtMC4wOTNsLTEuNDQ0LTEuNDU2bC0wLjYzNy0wLjY0MwoJCQlMMTA1LjE0Nyw4OC4wOGMtNi40NjQtNi41MTYtMTYuOTg0LTYuNTU4LTIzLjUxLTAuMDkzIi8+CgkJPHBhdGggY2xhc3M9InN0NyIgZD0iTTE0LjU4Niw5OC4xMmwtMC43NDMsMTg2LjcyOWwtMC4wNTUsMTMuOWMtMC4wNDIsMTAuNjMsMTMuNDgsMTUuMTg0LDE5Ljg3NCw2LjY5OWwzNi45MTUtNDguOTY0CgkJCWwxOS44MzUtMjYuMzAxbDI0LjIyOC0zMi4xMzRjNi44OTYtOS4xNTMsMTAuNjUxLTIwLjI4OCwxMC42OTYtMzEuNzQ4bDAuMjI5LTU3LjY0bDAuMDItNC45NWwwLjAyLTUuMTUiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTQuMjMzLDI4NC44NWw0NS44OTItNjAuODc4YzYuOTA2LTkuMTQzLDEwLjY2MS0yMC4yODgsMTAuNzA2LTMxLjc0OGwwLjE0NS0zNi4zNyIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjM4LjA2NywzNDYuODQ1IDcxLjk0NiwzMDEuOSA5MS43MiwyNzUuNjc4IDEyNy4zNTksMjI4LjQwOSAJCSIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjcwLjU3NywyNTYuMzc0IDcwLjU3NywyNTYuNDg0IDcwLjQwMSwzMDAuNzMzIAkJIi8+CgkJPGxpbmUgY2xhc3M9InN0NyIgeDE9IjkwLjcxIiB5MT0iMjMwLjQxNCIgeDI9IjkwLjUzNCIgeTI9IjI3NC43ODMiLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05ODkuOTY1LDIxNy44MzRjLTYuNTM2LDAtMTIuNzg5LDAtMTkuNjc2LDBjMC0yLjExMywwLjAwNS00LjA1OS0wLjAwMS02LjAwNgoJCWMtMC4wNTItMTguNDgxLDAuMzM3LTM2Ljk3OC0wLjI4Ny01NS40NGMtMC42MDEtMTcuNzc1LTE5LjE0NC0yOS4wOTgtMzUuNjc4LTIyLjQ1NWMtMTIuMzEyLDQuOTQ3LTIwLjE2NCwxNi4zOTQtMjAuMjQzLDI5Ljk0MgoJCWMtMC4xMDQsMTcuODA5LTAuMDI2LDM1LjYyLTAuMDI2LDUzLjgxNWMtNi41ODUsMC0xMi45NjQsMC0xOS42NjksMGMwLTMyLjkwMSwwLTY1LjgwMiwwLTk5LjEzOGM2LjIyNSwwLDEyLjYxMiwwLDE5LjM4MSwwCgkJYzAuMTQ1LDEuMzUyLDAuMzE0LDIuOTMyLDAuNTc3LDUuMzg1YzEuODQxLTEuMzQ0LDMuMzI4LTIuNDY0LDQuODUtMy41MzVjMTMuODYxLTkuNzU4LDI4LjczMy0xMC45ODYsNDMuOTEtNC4wMzYKCQljMTUuNDc2LDcuMDg3LDI1LjU3NSwxOS40NjUsMjYuNTYzLDM2LjQ4MUM5OTAuOTA3LDE3NC4yNDYsOTg5Ljk2NSwxOTUuNzcxLDk4OS45NjUsMjE3LjgzNHoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02NDcuNDY5LDI2Ny4yNjVjNC43MTYtNC42NzQsOS4yMjctOS4xNDQsMTMuNzc0LTEzLjY1YzE0LjkyNywxMi41NjEsMzEuMjkxLDE1LjA5MSw0OC4yMSw0LjQ1NQoJCQljMTYuMjg3LTEwLjIzOCwxOS4wOC0yNi40NzgsMTcuMjM2LTQ0LjQyOWMtMTMuMjA1LDEwLjA4Mi0yNy45MzksMTMuMTg5LTQ0LjAwNyw5Ljg5MmMtMTMuMzgzLTIuNzQ2LTI0LjI3NC05LjY3OC0zMi42NzktMjAuMzk3CgkJCWMtMTYuNDUzLTIwLjk4My0xNS40ODEtNTEuMDk3LDEuNzMzLTcxLjExN2MxNi45ODctMTkuNzU2LDUwLjkwOC0yNy4zNjEsNzUuMTYxLTguMTY4YzAtMS43NDUsMC0zLjI5NCwwLTUuMDI4CgkJCWM2LjcwNywwLDEzLjEzOCwwLDE5LjgzNCwwYzAuMDUxLDAuNzAzLDAuMTU3LDEuNDcyLDAuMTU3LDIuMjQyYzAuMDA4LDM0Ljg4MSwwLjExMyw2OS43NjItMC4wMjYsMTA0LjY0MgoJCQljLTAuMTExLDI3LjkzNi0xOC44MTEsNTEuMjgtNDYuMTQ5LDU3LjEzM2MtMTkuNTQxLDQuMTgzLTM3LjAxNC0wLjYyNy01MS45MS0xNC4xNjYKCQkJQzY0OC4zNDUsMjY4LjI1OCw2NDcuOTQ4LDI2Ny43NzMsNjQ3LjQ2OSwyNjcuMjY1eiBNNzI3LjAxOCwxNjguNjI3YzAtMS4wNzksMC0yLjE1NywwLTMuMjM2CgkJCWMtMC4wMDQtMjAuMjM3LTE3LjI2Mi0zNS4zNDktMzcuMzE2LTMyLjY3NmMtMTUuNDUzLDIuMDYtMjcuOTg0LDEzLjY5My0zMS4xMDgsMjguODc5Yy0zLjAzMiwxNC43NCwzLjc3NSwzMC4xMDcsMTYuOTA3LDM4LjE2OQoJCQljMTMuMDU3LDguMDE2LDMwLjA0MSw2Ljg0NSw0MC41ODItMi45OTZDNzI0LjIwMSwxODkuMTg3LDcyNy41OTksMTc5LjY1LDcyNy4wMTgsMTY4LjYyN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjA4LjkwNywyMTMuMzY0YzAsMjMuNzk4LDAsNDcuMTI4LDAsNzAuNjczYy02LjYyMiwwLTEzLjAzNSwwLTE5LjY0NCwwYzAtNTQuOTY2LDAtMTEwLjAwNCwwLTE2NS4yMgoJCQljNi40MDEsMCwxMi44MTgsMCwxOS40NSwwYzAuMTAyLDEuNjYsMC4yMDMsMy4zMDEsMC4zMjgsNS4zMzdjMTMuNDc3LTEwLjQ5NywyOC4zNzctMTMuNTUsNDQuNjMtMTAuMTIyCgkJCWMxMy4yNDksMi43OTQsMjQuMTU3LDkuNTQ4LDMyLjQ1NiwyMC4yNDRjMTYuNjgzLDIxLjUsMTUuNSw1MS4wMTktMi4zMzEsNzEuMzgzQzI2Ni4zNDQsMjI1LjU5MSwyMzEuOTY4LDIzMS43MTcsMjA4LjkwNywyMTMuMzY0CgkJCXogTTIwOC44NzQsMTY4LjMwNWMwLDEuMDc5LTAuMDE3LDIuMTU3LDAuMDAzLDMuMjM2YzAuMjk2LDE2LjM3LDEyLjY2OCwzNS44NDEsMzcuNTQ3LDMyLjczMQoJCQljMjUuMjQ3LTMuMTU2LDM5LjA5NC0yOS45MDIsMjcuNTA3LTUyLjU2MWMtOS4zNzMtMTguMzMtMzQuNjgzLTI1LjE2OC01MC44OTQtMTMuNTQ2CgkJCUMyMTIuODA0LDE0NS41MDEsMjA4LjcyMSwxNTUuOTY3LDIwOC44NzQsMTY4LjMwNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNDAwLjcxMiwyMTIuOTk0Yy0yOC4zNzMsMjEuOTUtNjMuMTk4LDguNDAxLTc3LjQxMy0xMC40ODNjLTE1LjgwOC0yMS0xNC45MDktNTAuNzU5LDIuOTYxLTcxLjI5NQoJCQljMTUuOTQtMTguMzE4LDQ5LjE3OS0yNi45NjYsNzQuMjAzLTcuMTcyYzAuMDk0LTEuODcsMC4xNzUtMy40ODgsMC4yNjMtNS4yNDVjNi41ODEsMCwxMi45OTQsMCwxOS41NTgsMAoJCQljMCwzMy4xNzksMCw2Ni4yMTIsMCw5OS40MzdjLTYuNDc0LDAtMTIuODg3LDAtMTkuNTczLDBDNDAwLjcxMiwyMTYuNjQ3LDQwMC43MTIsMjE1LjA2OSw0MDAuNzEyLDIxMi45OTR6IE00MDAuNjEsMTY4Ljc1NwoJCQljMC0xLjE2OCwwLjA1Mi0yLjMzOC0wLjAwOC0zLjUwM2MtMS4wMjMtMjAuMTMtMTcuNzUyLTM3LjQ2Ni00MS4zMzQtMzEuNjEyYy0xNS4wNDYsMy43MzUtMjQuMzQ1LDEzLjcwNi0yNi44OTcsMjguOTUxCgkJCWMtMi41MSwxNC45OTEsMi45NTcsMjcuMTk3LDE1LjQ1MiwzNS45N2MxMS44NzksOC4zNCwyOS4xMDgsOC4wNjIsMzkuODE5LTAuNjQ2QzM5Ni44NDQsMTkwLjQzNyw0MDAuNzUyLDE4MC40NjMsNDAwLjYxLDE2OC43NTd6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02MTkuNDUsMjE4LjI4M2MtNi41NjgsMC0xMi45MTksMC0xOS4zNzMsMGMtMC4wODYtMS43MjUtMC4xNjUtMy4zMTItMC4yNjgtNS4zODgKCQkJYy0xNC44ODEsMTEuNTM0LTMxLjIxMiwxNC4xMDgtNDguNzMzLDkuMTA4Yy0xMi4zNDUtMy41MjItMjIuMjMxLTEwLjc5OS0yOS42MTctMjEuMjkxCgkJCWMtMTUuMjg3LTIxLjcxNy0xMy4yMDQtNTAuMzk2LDQuNTI4LTcwLjA1NGMxNS42MjUtMTcuMzIzLDQ4LjYwNS0yNi41OTgsNzMuNzg2LTYuNjExYzAuMTE4LTEuODM0LDAuMjIzLTMuNDgsMC4zMzgtNS4yNjMKCQkJYzYuNDUxLDAsMTIuNzk3LDAsMTkuMzM5LDBDNjE5LjQ1LDE1MS45MDUsNjE5LjQ1LDE4NS4wMDQsNjE5LjQ1LDIxOC4yODN6IE02MDAuMTEyLDE2Ny41MzMKCQkJYy0wLjI1NC0yLjA4NS0wLjM4Ny01LjMzNS0xLjA3Ni04LjQ2M2MtMy45MS0xNy43NS0xOC44OTMtMjguNTQ2LTM2LjM4Ni0yNi4zNjJjLTI0LjA5MiwzLjAwOC0zOC40MDksMjguNTU2LTI4LjQxNSw1MC43MDgKCQkJYzguNTY5LDE4Ljk5NSwzMi4yNzQsMjcuMTUsNDkuNDE2LDE2LjcyOEM1OTUuMzI4LDE5My4wNDMsNTk5LjczNSwxODEuODczLDYwMC4xMTIsMTY3LjUzM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNODc1Ljk1LDE2OC41NjFjLTAuMDI0LDMxLjExMy0yNC45MTgsNTUuODM1LTU2LjE3Niw1NS43ODdjLTMwLjQ1OS0wLjA0Ni01NS40MzYtMjUuMjA3LTU1LjQwNi01NS44MTIKCQkJYzAuMDMxLTMwLjg1NywyNS4xMDYtNTUuODY1LDU1Ljk3LTU1LjgyMUM4NTEuMDgzLDExMi43Niw4NzUuOTczLDEzNy43NTUsODc1Ljk1LDE2OC41NjF6IE04MjAuMzcsMjA0LjY3NQoJCQljMjAuMDU3LDAuMDE1LDM2LjE5OC0xNi4wMDgsMzYuMzItMzYuMDUzYzAuMTIxLTE5Ljg3Ni0xNi4xMDgtMzYuMTAzLTM2LjE3OC0zNi4xNzNjLTE5Ljk4MS0wLjA3LTM2LjI0OSwxNi4wNzMtMzYuMzExLDM2LjAzMgoJCQlDNzg0LjEzOSwxODguMzg1LDgwMC40MDIsMjA0LjY2LDgyMC4zNywyMDQuNjc1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik01MDkuNzY3LDEyMS4xMDhjLTQuMjQyLDUuMTcyLTguMzIzLDEwLjE0Ny0xMi4xMTYsMTQuNzcxYy0zLjI5Ny0xLjE3Ni02LjE0My0yLjc4My05LjE0LTMuMTQ5CgkJCWMtOC44MS0xLjA3NS0xNS44MjEsMy41LTE5LjQ0MiwxMi4xMzZjLTIuNTc0LDYuMTQtMy42MTksMTIuNjI5LTMuNjgsMTkuMjA5Yy0wLjE1NywxNi44OTgtMC4wODQsMzMuNzk3LTAuMTAzLDUwLjY5NgoJCQljLTAuMDAxLDEuMDc1LDAsMi4xNSwwLDMuNDQxYy02LjU4MywwLTEzLjA2NiwwLTE5LjY5MywwYzAtMzMuMTIzLDAtNjYuMTYsMC05OS41NzJjNS4wODQsMCwxMC4wODItMC4wNjQsMTUuMDc3LDAuMDI3CgkJCWMyLjQ3LDAuMDQ1LDQuNjE5LTAuNTAzLDYuOTA0LTEuNTljMTMuMDQ5LTYuMjA1LDI1Ljk4NS02LjEzMiwzOC41OCwxLjRDNTA3LjM2MSwxMTkuMTk4LDUwOC40NCwxMjAuMTMzLDUwOS43NjcsMTIxLjEwOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},221:function(M,e,t){"use strict";var N=t(0),L=t.n(N);t(219);e.a=function(){return L.a.createElement("div",{className:"follow-message"},L.a.createElement("div",{className:"follow-message-inner"},L.a.createElement("h3",null,"Guidelines coming soon!")))}}}]);
//# sourceMappingURL=component---src-pages-components-clippy-guidelines-js-a73a584129faf10533e4.js.map