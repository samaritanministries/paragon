(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,i,a){"use strict";a.r(i);var d=a(7),r=a.n(d),t=a(0),l=a.n(t),s=a(212),n=a(4),c=a.n(n),g=a(215),h=a(216),m=a(214),v=a(222),o="CSS Grid".toLowerCase(),f=function(e){function i(){return e.apply(this,arguments)||this}return r()(i,e),i.prototype.render=function(){var e=this.props.location;return l.a.createElement(g.a,null,l.a.createElement("header",{className:"subnav"},l.a.createElement("h1",null,"CSS Grid"),l.a.createElement(h.a,{pageName:o})),l.a.createElement(m.a,null,l.a.createElement("h4",{className:"grid-compatibility"},l.a.createElement("i",{className:"dashing-icon dashing-icon--white dashing-icon--alert-filled"})," You are viewing a grid fallback. This page will mimic grid as closely as it can."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("h2",{className:"example-header",id:"gridWithPadding"},"Grid with Padding",l.a.createElement(s.a,{to:e.pathname+"/#gridWithPadding",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("div",{className:"grid grid-highlight-blue grid-padding"},l.a.createElement("div",{className:"grid--full"},"Padded Grid Content")))),l.a.createElement(v.a,null,'\x3c!-- Grid with Padding --\x3e\n    <div class="app-content grid-wrapper">\n      <div class="grid grid-padding"></div>\n    </div>'),l.a.createElement("h2",{className:"example-header",id:"gridSeperations"},"Grid Seperations",l.a.createElement(s.a,{to:e.pathname+"/#gridSeperations",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("div",{className:"grid grid--full grid-highlight-blue"},l.a.createElement("div",{className:"grid--full"},".grid--full"),l.a.createElement("div",{className:"grid--half"},".grid--half"),l.a.createElement("div",{className:"grid--half"},".grid--half"),l.a.createElement("div",{className:"grid--three-fourths"},".grid--three-fourths"),l.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),l.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),l.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),l.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),l.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),l.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),l.a.createElement("div",{className:"grid--third"},".grid--third"),l.a.createElement("div",{className:"grid--five-sixths"},".grid--five-sixths"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth")))),l.a.createElement(v.a,null,'\x3c!-- Grid Example --\x3e\n    <div class="grid">\n      <div class="grid--full">.grid--full</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid--three-fourths">.grid--three-fourths</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--two-thirds">.grid--two-thirds</div>\n      <div class="grid--third">.grid--third</div>\n      <div class="grid--five-sixth">.grid--five-sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n    </div>'),l.a.createElement("h2",{className:"example-header",id:"gridMultipleBreakpoints"},"Multiple Grid Breakpoints",l.a.createElement(s.a,{to:e.pathname+"/#gridMultipleBreakpoints",className:"button button--transparent button--copy-link"})),l.a.createElement("p",null,"To resize a grid for different breakpoints, use a combination of classes. You can add ",l.a.createElement("code",{className:"example-text"},"_desktop")," to any grid class to apply to the desktop breakpoint."),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("div",{className:"grid grid--full grid-highlight-blue"},l.a.createElement("div",{className:"grid--two-thirds grid--half_desktop"},".grid--two-thirds .grid--half_desktop"),l.a.createElement("div",{className:"grid--third grid--full_desktop"},".grid--third .grid--full_desktop"),l.a.createElement("div",{className:"grid--full"},".grid--full")))),l.a.createElement(v.a,null,'\x3c!-- Grid Example --\x3e\n<div class="grid grid--full grid-highlight-blue">\n\x3c!-- Grid is two-thirds on tablet and changes to half on desktop --\x3e\n  <div class="grid--two-thirds grid--half_desktop">.grid--two-thirds .grid--half_desktop</div>\n  \x3c!-- Grid is one third on tablet and changes to full on desktop --\x3e\n  <div class="grid--third grid--full_desktop">.grid--third .grid--full_desktop</div>\n  <div class="grid--full">.grid--full</div>\n</div>'),l.a.createElement("h2",{className:"example-header",id:"nestedGrids"},"Nested Grids",l.a.createElement(s.a,{to:e.pathname+"/#nestedGrids",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("div",{className:"grid grid--full grid-highlight-blue"},l.a.createElement("div",{className:"grid--full"},".grid--full"),l.a.createElement("div",{className:"grid--half"},".grid--half"),l.a.createElement("div",{className:"grid--half"},".grid--half"),l.a.createElement("div",{className:"grid--three-fourths grid grid-highlight-green"},l.a.createElement("div",{className:"grid--half"},".grid--half"),l.a.createElement("div",{className:"grid--half"},".grid--half")),l.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),l.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),l.a.createElement("div",{className:"grid--third"},".grid--third"),l.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),l.a.createElement("div",{className:"grid--five-sixths grid grid-highlight-green"},l.a.createElement("div",{className:"grid--third"},".grid--third"),l.a.createElement("div",{className:"grid--third"},".grid--third"),l.a.createElement("div",{className:"grid--third"},".grid--third"),l.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),l.a.createElement("div",{className:"grid--third"},".grid--third"))))),l.a.createElement(v.a,null,'\x3c!-- Nested Grid Example --\x3e\n    <div class="grid">\n      <div class="grid--full">.grid--full</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid grid--three-fourths">\n        <div class="grid--half">.grid--half</div>\n        <div class="grid--half">.grid--half</div>\n      </div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--two-thirds">.grid--two-thirds</div>\n      <div class="grid--third">.grid--third</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid grid--five-sixths">\n        <div class="grid--third">.grid--third</div>\n        <div class="grid--third">.grid--third</div>\n        <div class="grid--third">.grid--third</div>\n        <div class="grid--two-thirds">.grid--two-thirds</div>\n        <div class="grid--third">.grid--third</div>\n      </div>\n    </div>'),l.a.createElement("h2",{className:"example-header",id:"gridInAndWithCards"},"Grid in and with Cards",l.a.createElement(s.a,{to:e.pathname+"/#gridInAndWithCards",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("div",{className:"grid grid--full grid-highlight"},l.a.createElement("div",{className:"grid--full"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card--header"},l.a.createElement("h3",null,"Card Header (.grid--full)")),l.a.createElement("div",{className:"card--content"},l.a.createElement("div",{className:"grid grid-highlight-blue"},l.a.createElement("div",{className:"grid--full"},".grid--full"),l.a.createElement("div",{className:"grid--half"},".grid--half"),l.a.createElement("div",{className:"grid--half"},".grid--half"))))),l.a.createElement("div",{className:"grid--half"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card--header"},l.a.createElement("h3",null,"Card Header (.grid--half)")),l.a.createElement("div",{className:"card--content"},l.a.createElement("div",{className:"grid grid-highlight-green"},l.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),l.a.createElement("div",{className:"grid--third"},".grid--third"),l.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),l.a.createElement("div",{className:"grid--third"},".grid--third"))))),l.a.createElement("div",{className:"grid--half"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card--header"},l.a.createElement("h3",null,"Card Header (.grid--half)")),l.a.createElement("div",{className:"card--content"},l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"grid--two-thirds"},"Some Information"),l.a.createElement("div",{className:"grid--third align-right"},l.a.createElement(s.a,{to:"/components/css-grid/code"},"LINK")),l.a.createElement("div",{className:"grid--two-thirds"},"More Information"),l.a.createElement("div",{className:"grid--third align-right"},l.a.createElement(s.a,{to:"/components/css-grid/code"},"LINK"))))))))),l.a.createElement(v.a,null,'\x3c!-- Grid in and with Cards Example --\x3e\n    <div class="grid">\n\n      <div class="grid--full">\n        <div class="card">\n          <div class="card--header"><h3>Card Header (.grid--full)</h3></div>\n          <div class="card--content">\n            <div class="grid">\n              <div class="grid--full">.grid--full</div>\n              <div class="grid--half">.grid--half</div>\n              <div class="grid--half">.grid--half</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="grid--half">\n        <div class="card">\n          <div class="card--header"><h3>Card Header (.grid--half)</h3></div>\n          <div class="card--content">\n            <div class="grid">\n              <div class="grid--two-thirds">.grid--two-thirds</div>\n              <div class="grid--third">.grid--third</div>\n              <div class="grid--two-thirds">.grid--two-thirds</div>\n              <div class="grid--third">.grid--third</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="grid--half">\n        <div class="card">\n          <div class="card--header"><h3>Card Header (.grid--half)</h3></div>\n          <div class="card--content">\n            <div class="grid">\n              <div class="grid--two-thirds">Some Information</div>\n              <div class="grid--third align-right"><a href="#">LINK</a></div>\n              <div class="grid--two-thirds">More Information</div>\n              <div class="grid--third align-right"><a href="#">LINK</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>')))))},i}(l.a.Component);f.propTypes={location:c.a.object.isRequired},i.default=f}}]);
//# sourceMappingURL=component---src-pages-components-css-grid-code-js-fd12a5c2d11a57dbeb61.js.map