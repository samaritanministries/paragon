(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{162:function(M,e,t){"use strict";t.r(e);var L=t(0),N=t.n(L),n=t(204),a=t(202),s=t(203),i=t(212),u="Navigation".toLowerCase();e.default=function(){return N.a.createElement(n.a,null,N.a.createElement("header",{className:"subnav"},N.a.createElement("h1",null,"Navigation"),N.a.createElement(a.a,{pageName:u})),N.a.createElement(s.a,null,N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"column column--full"},N.a.createElement(i.a,null)))))}},200:function(M,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return D}),t.d(e,"StaticQueryContext",function(){return o}),t.d(e,"StaticQuery",function(){return T});var L=t(0),N=t.n(L),n=t(4),a=t.n(n),s=t(199),i=t.n(s);t.d(e,"Link",function(){return i.a}),t.d(e,"withPrefix",function(){return s.withPrefix}),t.d(e,"navigate",function(){return s.navigate}),t.d(e,"push",function(){return s.push}),t.d(e,"replace",function(){return s.replace}),t.d(e,"navigateTo",function(){return s.navigateTo});var u=t(201),j=t.n(u);t.d(e,"PageRenderer",function(){return j.a});var c=t(33);t.d(e,"parsePath",function(){return c.a});var o=N.a.createContext({}),T=function(M){return N.a.createElement(o.Consumer,null,function(e){return M.data||e[M.query]&&e[M.query].data?(M.render||M.children)(M.data?M.data.data:e[M.query].data):N.a.createElement("div",null,"Loading (StaticQuery)")})};function D(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}T.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},201:function(M,e,t){var L;M.exports=(L=t(205))&&L.default||L},202:function(M,e,t){"use strict";t(32);var L=t(0),N=t.n(L),n=t(200);e.a=function(M){var e=M.pageName,t=M.sectionName;null==t&&(t="components"),"css grid"===e?e="css-grid":"progress stepper"===e?e="progress-stepper":"radio buttons"===e&&(e="radio-buttons");var L=e,a=t,s=function(M){return M.isPartiallyCurrent?{className:"active"}:{className:""}},i=function(M){return N.a.createElement(n.Link,Object.assign({getProps:s},M),M.children)};return N.a.createElement("div",{className:"subnav-links"},N.a.createElement(i,{to:a+"/"+L+"/code"},"Code"),N.a.createElement(i,{to:a+"/"+L+"/guidelines"},"Guidelines"))}},203:function(M,e,t){"use strict";var L=t(0),N=t.n(L);e.a=function(M){var e=M.children;return N.a.createElement("main",{className:"content content-m content--example-page"},e)}},204:function(M,e,t){"use strict";var L=t(0),N=t.n(L),n=(t(73),t(74),t(7)),a=t.n(n),s=t(51),i=t.n(s),u=t(200),j=t(210),c=t.n(j),o=t(206),T=t.n(o),D=function(M){function e(e){var t;return(t=M.call(this,e)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},t.handleClick=t.handleClick.bind(i()(i()(t))),t.toggleParagon=t.toggleParagon.bind(i()(i()(t))),t.toggleComponents=t.toggleComponents.bind(i()(i()(t))),t.toggleStyle=t.toggleStyle.bind(i()(i()(t))),t}a()(e,M);var t=e.prototype;return t.componentDidMount=function(){this.loadStateWithLocalStorage();var M=window.location.href;c()(".menu-group a").each(function(){var e=c()(this).text().toLowerCase();M.includes("css-grid")?c()("#css-grid").addClass("active"):M.includes("progress-stepper")?c()("#progress-stepper").addClass("active"):M.includes("radio-buttons")?c()("#radio-buttons").addClass("active"):M.includes(e)&&c()(this).addClass("active")})},t.handleClick=function(){this.setState(function(M){return{showSidebar:!M.showSidebar}})},t.toggleParagon=function(){this.setState(function(M){return{showParagon:!M.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},t.toggleComponents=function(){this.setState(function(M){return{showComponents:!M.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},t.toggleStyle=function(){this.setState(function(M){return{showStyle:!M.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},t.loadStateWithLocalStorage=function(){for(var M in this.state)if(localStorage.hasOwnProperty(M)){var e=localStorage.getItem(M);try{var t;e=JSON.parse(e),this.setState(((t={})[M]=e,t))}catch(N){var L;this.setState(((L={})[M]=e,L))}}},t.render=function(){return N.a.createElement("div",null,N.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},N.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},N.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),N.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},N.a.createElement("ul",null,N.a.createElement("div",{className:"logo-container"},N.a.createElement("img",{src:T.a,alt:"Paragon Logo"})),N.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},N.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Get Started"),N.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),N.a.createElement("div",{className:"menu-group"},N.a.createElement(u.Link,{to:"/",activeClassName:"active"},"Principles"),N.a.createElement(u.Link,{to:"/setup",activeClassName:"active"},"Setup"),N.a.createElement(u.Link,{to:"/templates"},"Templates"),N.a.createElement(u.Link,{to:"/resources"},"Resources"))),N.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},N.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),N.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),N.a.createElement("div",{className:"menu-group"},N.a.createElement(u.Link,{to:"/style/accessibility/code"},"Accessibility"),N.a.createElement(u.Link,{to:"/style/color/code"},"Color"),N.a.createElement(u.Link,{to:"/style/typography/code"},"Typography"))),N.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},N.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),N.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),N.a.createElement("div",{className:"menu-group"},N.a.createElement(u.Link,{to:"/components/accordion/code"},"Accordion"),N.a.createElement(u.Link,{to:"/components/actions/code"},"Actions"),N.a.createElement(u.Link,{to:"/components/banner/code"},"Banner"),N.a.createElement(u.Link,{to:"/components/cards/code"},"Cards"),N.a.createElement(u.Link,{to:"/components/checkboxes/code"},"Checkboxes"),N.a.createElement(u.Link,{to:"/components/footer/code"},"Footer"),N.a.createElement(u.Link,{to:"/components/forms/code"},"Forms"),N.a.createElement(u.Link,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),N.a.createElement(u.Link,{to:"/components/grid/code"},"Grid"),N.a.createElement(u.Link,{to:"/components/icons/code"},"Icons"),N.a.createElement(u.Link,{to:"/components/lists/code"},"Lists"),N.a.createElement(u.Link,{to:"/components/navigation/code"},"Navigation"),N.a.createElement(u.Link,{to:"/components/overpanel/code"},"Overpanel"),N.a.createElement(u.Link,{to:"/components/pagination/code"},"Pagination"),N.a.createElement(u.Link,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),N.a.createElement(u.Link,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),N.a.createElement(u.Link,{to:"/components/spinner/code"},"Spinner"),N.a.createElement(u.Link,{to:"/components/tables/code"},"Tables"),N.a.createElement(u.Link,{to:"/components/tags/code"},"Tags"),N.a.createElement(u.Link,{to:"/components/toggle/code"},"Toggle"))),N.a.createElement("a",{href:"https://badge.fury.io/js/paragon-framework"},N.a.createElement("img",{src:"https://badge.fury.io/js/paragon-framework.svg",alt:"npm version",height:"18"})))))},e}(N.a.Component);t(207),e.a=function(M){var e=M.children;return N.a.createElement("div",null,N.a.createElement(D,null),N.a.createElement("div",{className:"app-content"},e,N.a.createElement("footer",null,N.a.createElement("div",{className:"copyright"},"© 2019 Samaritan Ministries International"),N.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},205:function(M,e,t){"use strict";t.r(e);t(32);var L=t(0),N=t.n(L),n=t(4),a=t.n(n),s=t(52),i=t(2),u=function(M){var e=M.location,t=i.default.getResourcesForPathnameSync(e.pathname);return N.a.createElement(s.a,Object.assign({location:e,pageResources:t},t.json))};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},e.default=u},206:function(M,e){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAyLjM1MiAzNjIuMzU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAyLjM1MiAzNjIuMzU1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6I0Y5Q0Y1Njt9Cgkuc3Qye2ZpbGw6IzRENEQ2ODt9Cgkuc3Qze2ZpbGw6I0E5OEY2RTt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzRENEQ2ODtzdHJva2Utd2lkdGg6MTA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NXtmaWxsOiNGNkNENjY7fQoJLnN0NntmaWxsOiMyNzM0NkQ7fQoJLnN0N3tmaWxsOm5vbmU7c3Ryb2tlOiMyNzM0NkQ7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDh7ZmlsbDojNzM1NjlCO30KCS5zdDl7ZmlsbDojRTk2OTYzO30KPC9zdHlsZT4KPGcgaWQ9IlhNTElEXzJfIj4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0xMjUuNTg1LDEwMy43MTFjLTAuMTU2LDEuNDM5LTAuMzcxLDIuODc5LTAuNjU3LDQuMzA3TDEwNS4xNDcsODguMDhjLTYuNDY0LTYuNTE2LTE2Ljk4NC02LjU1OC0yMy41MS0wLjA5MwoJCQljNi41MjYtNi40NjQsNi41NjgtMTYuOTk0LDAuMDkzLTIzLjUxTDYwLjM4Niw0Mi45NjFjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3CgkJCUMxMjIuMTI1LDcwLjg1NywxMjcuMzc5LDg3LjYwOCwxMjUuNTg1LDEwMy43MTF6Ii8+CgkJPHBhdGggY2xhc3M9InN0NSIgZD0iTTcwLjU3NywyNTYuNDg0bC0zNi45MTUsNDguOTY0Yy02LjM5NCw4LjQ4NS0xOS45MTYsMy45MzEtMTkuODc0LTYuNjk5bDAuMDU1LTEzLjlsMC4zOSwwLjAwMmw0NS44OTItNjAuODc4CgkJCWM2LjkwNi05LjE0MywxMC42NjEtMjAuMjg4LDEwLjcwNi0zMS43NDhsMC4xNDUtMzYuMzdsLTAuMDI5LTIuOGMxMy45NjEtMC4xMjQsMjcuODgyLTUuNDg5LDM4LjU2NC0xNi4wOTcKCQkJYzguMjUzLTguMTc3LDEzLjM5My0xOC4zMTcsMTUuNDE1LTI4LjkzOWwwLjYzNywwLjY0M2wtMC4yMjksNTcuNjRjLTAuMDQ2LDExLjQ2LTMuOCwyMi41OTUtMTAuNjk2LDMxLjc0OGwtMjQuMjI4LDMyLjEzNAoJCQlMNzAuNTc3LDI1Ni40ODR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyNS41ODUsMTAzLjcxMWwtMC4wMiw0Ljk1bC0wLjYzNy0wLjY0M0MxMjUuMjEzLDEwNi41OSwxMjUuNDI5LDEwNS4xNTEsMTI1LjU4NSwxMDMuNzExeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05Mi4yNTcsMTA1LjYzOWM0LjMzMyw0LjM2Nyw0LjMwNSwxMS4zOTctMC4wNjMsMTUuNzNjLTQuMzU3LDQuMzIzLTExLjM5Nyw0LjI5NS0xNS43Mi0wLjA2MwoJCQljLTQuMzIzLTQuMzY3LTQuMjk1LTExLjM5NywwLjA2My0xNS43M0M4MC44OTQsMTAxLjI1NCw4Ny45MzQsMTAxLjI4Miw5Mi4yNTcsMTA1LjYzOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNzAuOTc3LDE1NS44NTVsLTAuMTQ1LDM2LjM3Yy0wLjA0NiwxMS40Ni0zLjgsMjIuNjA1LTEwLjcwNiwzMS43NDhMMTQuMjMzLDI4NC44NWwtMC4zOS0wLjAwMkwxNC41ODYsOTguMTIKCQkJbDAuMzMsMC4wMDFjMC4xMzUsMTMuOTUxLDUuNDk5LDI3Ljg1MiwxNi4wOTcsMzguNTI0YzEwLjk4NiwxMS4wNzQsMjUuNDg0LDE2LjU1MSwzOS45MzUsMTYuNDA5TDcwLjk3NywxNTUuODU1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02OC4yOTUsMTAzLjQwM2wtMC4wMzIsOC4xN2MtMC4wMDQsMC45LTAuNTY3LDEuNzA4LTEuNDE4LDIuMDM0bC0xNC40MjIsNS40NjMKCQkJYy0xLjMyMiwwLjQ5NS0yLjYwNy0wLjgtMi4wOTItMi4xMThsNS41NjctMTQuMzc4YzAuMzMzLTAuODQ5LDEuMTQ2LTEuNDA1LDIuMDU2LTEuNDAybDguMTYsMC4wMzIKCQkJQzY3LjMyNCwxMDEuMjEsNjguMywxMDIuMTkzLDY4LjI5NSwxMDMuNDAzeiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0NiIgY3g9IjU2LjE3OCIgY3k9Ijg1LjA1NSIgcj0iMTEuMTE2Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTI0LjkyNywxMDguMDE5Yy0yLjAyMiwxMC42MjItNy4xNjMsMjAuNzYyLTE1LjQxNSwyOC45MzljLTEwLjY4MiwxMC42MDgtMjQuNjA0LDE1Ljk3Mi0zOC41NjQsMTYuMDk3CgkJCWMtMTQuNDUxLDAuMTQzLTI4Ljk0OS01LjMzNS0zOS45MzUtMTYuNDA5Yy0xMC41OTgtMTAuNjcyLTE1Ljk2Mi0yNC41NzQtMTYuMDk3LTM4LjUyNGMtMC4xNTItMTQuNDYxLDUuMzI1LTI4Ljk3OSwxNi40MDktMzkuOTc1CgkJCWM4LjI1My04LjE4NywxOC40MzMtMTMuMjQ3LDI5LjA2MS0xNS4xODVjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3YzEyLjMwMSwxMi4zOTksMTcuNTU0LDI5LjE1LDE1Ljc2LDQ1LjI1MwoJCQlDMTI1LjQyOSwxMDUuMTUxLDEyNS4yMTMsMTA2LjU5LDEyNC45MjcsMTA4LjAxOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNjMuNDA1LDE1LjUxM2wtMy40NDQsMy40MTZjLTYuNTE2LDYuNDY0LTYuNTU4LDE2Ljk5NC0wLjA5MywyMy41MWwwLjUxOCwwLjUyMkw4MS43Myw2NC40NzcKCQkJYzYuNDc0LDYuNTE2LDYuNDMyLDE3LjA0Ni0wLjA5MywyMy41MSIvPgoJCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xNTMuOTYzLDEwNi43OTRsLTMuNDQ0LDMuNDE2Yy02LjUxNiw2LjQ2NC0xNy4wMzYsNi40MjItMjMuNTEtMC4wOTNsLTEuNDQ0LTEuNDU2bC0wLjYzNy0wLjY0MwoJCQlMMTA1LjE0Nyw4OC4wOGMtNi40NjQtNi41MTYtMTYuOTg0LTYuNTU4LTIzLjUxLTAuMDkzIi8+CgkJPHBhdGggY2xhc3M9InN0NyIgZD0iTTE0LjU4Niw5OC4xMmwtMC43NDMsMTg2LjcyOWwtMC4wNTUsMTMuOWMtMC4wNDIsMTAuNjMsMTMuNDgsMTUuMTg0LDE5Ljg3NCw2LjY5OWwzNi45MTUtNDguOTY0CgkJCWwxOS44MzUtMjYuMzAxbDI0LjIyOC0zMi4xMzRjNi44OTYtOS4xNTMsMTAuNjUxLTIwLjI4OCwxMC42OTYtMzEuNzQ4bDAuMjI5LTU3LjY0bDAuMDItNC45NWwwLjAyLTUuMTUiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTQuMjMzLDI4NC44NWw0NS44OTItNjAuODc4YzYuOTA2LTkuMTQzLDEwLjY2MS0yMC4yODgsMTAuNzA2LTMxLjc0OGwwLjE0NS0zNi4zNyIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjM4LjA2NywzNDYuODQ1IDcxLjk0NiwzMDEuOSA5MS43MiwyNzUuNjc4IDEyNy4zNTksMjI4LjQwOSAJCSIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjcwLjU3NywyNTYuMzc0IDcwLjU3NywyNTYuNDg0IDcwLjQwMSwzMDAuNzMzIAkJIi8+CgkJPGxpbmUgY2xhc3M9InN0NyIgeDE9IjkwLjcxIiB5MT0iMjMwLjQxNCIgeDI9IjkwLjUzNCIgeTI9IjI3NC43ODMiLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05ODkuOTY1LDIxNy44MzRjLTYuNTM2LDAtMTIuNzg5LDAtMTkuNjc2LDBjMC0yLjExMywwLjAwNS00LjA1OS0wLjAwMS02LjAwNgoJCWMtMC4wNTItMTguNDgxLDAuMzM3LTM2Ljk3OC0wLjI4Ny01NS40NGMtMC42MDEtMTcuNzc1LTE5LjE0NC0yOS4wOTgtMzUuNjc4LTIyLjQ1NWMtMTIuMzEyLDQuOTQ3LTIwLjE2NCwxNi4zOTQtMjAuMjQzLDI5Ljk0MgoJCWMtMC4xMDQsMTcuODA5LTAuMDI2LDM1LjYyLTAuMDI2LDUzLjgxNWMtNi41ODUsMC0xMi45NjQsMC0xOS42NjksMGMwLTMyLjkwMSwwLTY1LjgwMiwwLTk5LjEzOGM2LjIyNSwwLDEyLjYxMiwwLDE5LjM4MSwwCgkJYzAuMTQ1LDEuMzUyLDAuMzE0LDIuOTMyLDAuNTc3LDUuMzg1YzEuODQxLTEuMzQ0LDMuMzI4LTIuNDY0LDQuODUtMy41MzVjMTMuODYxLTkuNzU4LDI4LjczMy0xMC45ODYsNDMuOTEtNC4wMzYKCQljMTUuNDc2LDcuMDg3LDI1LjU3NSwxOS40NjUsMjYuNTYzLDM2LjQ4MUM5OTAuOTA3LDE3NC4yNDYsOTg5Ljk2NSwxOTUuNzcxLDk4OS45NjUsMjE3LjgzNHoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02NDcuNDY5LDI2Ny4yNjVjNC43MTYtNC42NzQsOS4yMjctOS4xNDQsMTMuNzc0LTEzLjY1YzE0LjkyNywxMi41NjEsMzEuMjkxLDE1LjA5MSw0OC4yMSw0LjQ1NQoJCQljMTYuMjg3LTEwLjIzOCwxOS4wOC0yNi40NzgsMTcuMjM2LTQ0LjQyOWMtMTMuMjA1LDEwLjA4Mi0yNy45MzksMTMuMTg5LTQ0LjAwNyw5Ljg5MmMtMTMuMzgzLTIuNzQ2LTI0LjI3NC05LjY3OC0zMi42NzktMjAuMzk3CgkJCWMtMTYuNDUzLTIwLjk4My0xNS40ODEtNTEuMDk3LDEuNzMzLTcxLjExN2MxNi45ODctMTkuNzU2LDUwLjkwOC0yNy4zNjEsNzUuMTYxLTguMTY4YzAtMS43NDUsMC0zLjI5NCwwLTUuMDI4CgkJCWM2LjcwNywwLDEzLjEzOCwwLDE5LjgzNCwwYzAuMDUxLDAuNzAzLDAuMTU3LDEuNDcyLDAuMTU3LDIuMjQyYzAuMDA4LDM0Ljg4MSwwLjExMyw2OS43NjItMC4wMjYsMTA0LjY0MgoJCQljLTAuMTExLDI3LjkzNi0xOC44MTEsNTEuMjgtNDYuMTQ5LDU3LjEzM2MtMTkuNTQxLDQuMTgzLTM3LjAxNC0wLjYyNy01MS45MS0xNC4xNjYKCQkJQzY0OC4zNDUsMjY4LjI1OCw2NDcuOTQ4LDI2Ny43NzMsNjQ3LjQ2OSwyNjcuMjY1eiBNNzI3LjAxOCwxNjguNjI3YzAtMS4wNzksMC0yLjE1NywwLTMuMjM2CgkJCWMtMC4wMDQtMjAuMjM3LTE3LjI2Mi0zNS4zNDktMzcuMzE2LTMyLjY3NmMtMTUuNDUzLDIuMDYtMjcuOTg0LDEzLjY5My0zMS4xMDgsMjguODc5Yy0zLjAzMiwxNC43NCwzLjc3NSwzMC4xMDcsMTYuOTA3LDM4LjE2OQoJCQljMTMuMDU3LDguMDE2LDMwLjA0MSw2Ljg0NSw0MC41ODItMi45OTZDNzI0LjIwMSwxODkuMTg3LDcyNy41OTksMTc5LjY1LDcyNy4wMTgsMTY4LjYyN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjA4LjkwNywyMTMuMzY0YzAsMjMuNzk4LDAsNDcuMTI4LDAsNzAuNjczYy02LjYyMiwwLTEzLjAzNSwwLTE5LjY0NCwwYzAtNTQuOTY2LDAtMTEwLjAwNCwwLTE2NS4yMgoJCQljNi40MDEsMCwxMi44MTgsMCwxOS40NSwwYzAuMTAyLDEuNjYsMC4yMDMsMy4zMDEsMC4zMjgsNS4zMzdjMTMuNDc3LTEwLjQ5NywyOC4zNzctMTMuNTUsNDQuNjMtMTAuMTIyCgkJCWMxMy4yNDksMi43OTQsMjQuMTU3LDkuNTQ4LDMyLjQ1NiwyMC4yNDRjMTYuNjgzLDIxLjUsMTUuNSw1MS4wMTktMi4zMzEsNzEuMzgzQzI2Ni4zNDQsMjI1LjU5MSwyMzEuOTY4LDIzMS43MTcsMjA4LjkwNywyMTMuMzY0CgkJCXogTTIwOC44NzQsMTY4LjMwNWMwLDEuMDc5LTAuMDE3LDIuMTU3LDAuMDAzLDMuMjM2YzAuMjk2LDE2LjM3LDEyLjY2OCwzNS44NDEsMzcuNTQ3LDMyLjczMQoJCQljMjUuMjQ3LTMuMTU2LDM5LjA5NC0yOS45MDIsMjcuNTA3LTUyLjU2MWMtOS4zNzMtMTguMzMtMzQuNjgzLTI1LjE2OC01MC44OTQtMTMuNTQ2CgkJCUMyMTIuODA0LDE0NS41MDEsMjA4LjcyMSwxNTUuOTY3LDIwOC44NzQsMTY4LjMwNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNDAwLjcxMiwyMTIuOTk0Yy0yOC4zNzMsMjEuOTUtNjMuMTk4LDguNDAxLTc3LjQxMy0xMC40ODNjLTE1LjgwOC0yMS0xNC45MDktNTAuNzU5LDIuOTYxLTcxLjI5NQoJCQljMTUuOTQtMTguMzE4LDQ5LjE3OS0yNi45NjYsNzQuMjAzLTcuMTcyYzAuMDk0LTEuODcsMC4xNzUtMy40ODgsMC4yNjMtNS4yNDVjNi41ODEsMCwxMi45OTQsMCwxOS41NTgsMAoJCQljMCwzMy4xNzksMCw2Ni4yMTIsMCw5OS40MzdjLTYuNDc0LDAtMTIuODg3LDAtMTkuNTczLDBDNDAwLjcxMiwyMTYuNjQ3LDQwMC43MTIsMjE1LjA2OSw0MDAuNzEyLDIxMi45OTR6IE00MDAuNjEsMTY4Ljc1NwoJCQljMC0xLjE2OCwwLjA1Mi0yLjMzOC0wLjAwOC0zLjUwM2MtMS4wMjMtMjAuMTMtMTcuNzUyLTM3LjQ2Ni00MS4zMzQtMzEuNjEyYy0xNS4wNDYsMy43MzUtMjQuMzQ1LDEzLjcwNi0yNi44OTcsMjguOTUxCgkJCWMtMi41MSwxNC45OTEsMi45NTcsMjcuMTk3LDE1LjQ1MiwzNS45N2MxMS44NzksOC4zNCwyOS4xMDgsOC4wNjIsMzkuODE5LTAuNjQ2QzM5Ni44NDQsMTkwLjQzNyw0MDAuNzUyLDE4MC40NjMsNDAwLjYxLDE2OC43NTd6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02MTkuNDUsMjE4LjI4M2MtNi41NjgsMC0xMi45MTksMC0xOS4zNzMsMGMtMC4wODYtMS43MjUtMC4xNjUtMy4zMTItMC4yNjgtNS4zODgKCQkJYy0xNC44ODEsMTEuNTM0LTMxLjIxMiwxNC4xMDgtNDguNzMzLDkuMTA4Yy0xMi4zNDUtMy41MjItMjIuMjMxLTEwLjc5OS0yOS42MTctMjEuMjkxCgkJCWMtMTUuMjg3LTIxLjcxNy0xMy4yMDQtNTAuMzk2LDQuNTI4LTcwLjA1NGMxNS42MjUtMTcuMzIzLDQ4LjYwNS0yNi41OTgsNzMuNzg2LTYuNjExYzAuMTE4LTEuODM0LDAuMjIzLTMuNDgsMC4zMzgtNS4yNjMKCQkJYzYuNDUxLDAsMTIuNzk3LDAsMTkuMzM5LDBDNjE5LjQ1LDE1MS45MDUsNjE5LjQ1LDE4NS4wMDQsNjE5LjQ1LDIxOC4yODN6IE02MDAuMTEyLDE2Ny41MzMKCQkJYy0wLjI1NC0yLjA4NS0wLjM4Ny01LjMzNS0xLjA3Ni04LjQ2M2MtMy45MS0xNy43NS0xOC44OTMtMjguNTQ2LTM2LjM4Ni0yNi4zNjJjLTI0LjA5MiwzLjAwOC0zOC40MDksMjguNTU2LTI4LjQxNSw1MC43MDgKCQkJYzguNTY5LDE4Ljk5NSwzMi4yNzQsMjcuMTUsNDkuNDE2LDE2LjcyOEM1OTUuMzI4LDE5My4wNDMsNTk5LjczNSwxODEuODczLDYwMC4xMTIsMTY3LjUzM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNODc1Ljk1LDE2OC41NjFjLTAuMDI0LDMxLjExMy0yNC45MTgsNTUuODM1LTU2LjE3Niw1NS43ODdjLTMwLjQ1OS0wLjA0Ni01NS40MzYtMjUuMjA3LTU1LjQwNi01NS44MTIKCQkJYzAuMDMxLTMwLjg1NywyNS4xMDYtNTUuODY1LDU1Ljk3LTU1LjgyMUM4NTEuMDgzLDExMi43Niw4NzUuOTczLDEzNy43NTUsODc1Ljk1LDE2OC41NjF6IE04MjAuMzcsMjA0LjY3NQoJCQljMjAuMDU3LDAuMDE1LDM2LjE5OC0xNi4wMDgsMzYuMzItMzYuMDUzYzAuMTIxLTE5Ljg3Ni0xNi4xMDgtMzYuMTAzLTM2LjE3OC0zNi4xNzNjLTE5Ljk4MS0wLjA3LTM2LjI0OSwxNi4wNzMtMzYuMzExLDM2LjAzMgoJCQlDNzg0LjEzOSwxODguMzg1LDgwMC40MDIsMjA0LjY2LDgyMC4zNywyMDQuNjc1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik01MDkuNzY3LDEyMS4xMDhjLTQuMjQyLDUuMTcyLTguMzIzLDEwLjE0Ny0xMi4xMTYsMTQuNzcxYy0zLjI5Ny0xLjE3Ni02LjE0My0yLjc4My05LjE0LTMuMTQ5CgkJCWMtOC44MS0xLjA3NS0xNS44MjEsMy41LTE5LjQ0MiwxMi4xMzZjLTIuNTc0LDYuMTQtMy42MTksMTIuNjI5LTMuNjgsMTkuMjA5Yy0wLjE1NywxNi44OTgtMC4wODQsMzMuNzk3LTAuMTAzLDUwLjY5NgoJCQljLTAuMDAxLDEuMDc1LDAsMi4xNSwwLDMuNDQxYy02LjU4MywwLTEzLjA2NiwwLTE5LjY5MywwYzAtMzMuMTIzLDAtNjYuMTYsMC05OS41NzJjNS4wODQsMCwxMC4wODItMC4wNjQsMTUuMDc3LDAuMDI3CgkJCWMyLjQ3LDAuMDQ1LDQuNjE5LTAuNTAzLDYuOTA0LTEuNTljMTMuMDQ5LTYuMjA1LDI1Ljk4NS02LjEzMiwzOC41OCwxLjRDNTA3LjM2MSwxMTkuMTk4LDUwOC40NCwxMjAuMTMzLDUwOS43NjcsMTIxLjEwOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},212:function(M,e,t){"use strict";var L=t(0),N=t.n(L);t(207);e.a=function(){return N.a.createElement("div",{className:"follow-message"},N.a.createElement("div",{className:"follow-message-inner"},N.a.createElement("h3",null,"Guidelines coming soon!")))}}}]);
//# sourceMappingURL=component---src-pages-components-navigation-guidelines-js-35e5f5de70245a99c684.js.map