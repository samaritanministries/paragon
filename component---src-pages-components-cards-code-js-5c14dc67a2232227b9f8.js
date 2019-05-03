(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return b});var l=t(7),n=t.n(l),s=t(35),c=t.n(s),i=t(0),d=t.n(i),r=t(210),m=t(4),o=t.n(m),h=t(213),E=t(214),p=t(212),u=t(220),N="Cards".toLowerCase(),b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isLoading:!0},t.toggleLoading=t.toggleLoading.bind(c()(c()(t))),t}n()(a,e);var t=a.prototype;return t.toggleLoading=function(){this.setState(function(e){return{isLoading:!e.isLoading}})},t.render=function(){var e=this.props.location;return d.a.createElement(h.a,null,d.a.createElement("header",{className:"subnav"},d.a.createElement("h1",null,"Cards"),d.a.createElement(E.a,{pageName:N})),d.a.createElement(p.a,null,d.a.createElement("div",{className:"grid grid-padding"},d.a.createElement("h2",{id:"form"},"Form",d.a.createElement(r.a,{to:e.pathname+"/#form",className:"button button--transparent button--copy-link"})),d.a.createElement("div",{className:"example-container"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header has-border"},d.a.createElement("h2",{className:"no-margin"},"Card Header")),d.a.createElement("div",{className:"card-content flex-content"},d.a.createElement("div",{className:"flex-row"},d.a.createElement("fieldset",null,d.a.createElement("label",{htmlFor:"first-name"},"First Name"),d.a.createElement("input",{type:"text",id:"first-name"})),d.a.createElement("fieldset",null,d.a.createElement("label",{htmlFor:"middle-name"},"Middle Name"),d.a.createElement("input",{type:"text",id:"middle-name"})),d.a.createElement("fieldset",null,d.a.createElement("label",{htmlFor:"last-name"},"Last Name"),d.a.createElement("input",{type:"text",id:"last-name"}))),d.a.createElement("div",{className:"flex-row"},d.a.createElement("fieldset",null,d.a.createElement("label",{htmlFor:"birthday"},"Date of Birth"),d.a.createElement("input",{type:"date",id:"birthday"})),d.a.createElement("fieldset",{className:"select--has-icon"},d.a.createElement("label",{htmlFor:"gender"},"Gender"),d.a.createElement("select",{id:"gender"},d.a.createElement("option",null,"Male"),d.a.createElement("option",null,"Female"))),d.a.createElement("fieldset",{className:"spacer"}))),d.a.createElement("div",{className:"card-footer"},d.a.createElement("button",{className:"mr-space-xs"},"Submit"),d.a.createElement("button",{className:"button--transparent button--gray"},"Cancel"))),d.a.createElement(u.a,null,'\x3c!-- Form within a card --\x3e\n<div class="card">\n<div class="card-header has-border">\n  <h2 class="no-margin">Card Header</h2>\n</div>\n\n<div class="card-content flex-content">\n  <div class="flex-row">\n    <fieldset>\n      <label for="first-name">First Name</label>\n      <input type="text" id="first-name"/>\n    </fieldset>\n    <fieldset>\n      <label for="middle-name">Middle Name</label>\n      <input type="text" id="middle-name"/>\n    </fieldset>\n    <fieldset>\n      <label for="last-name">Last Name</label>\n      <input type="text" id="last-name"/>\n    </fieldset>\n  </div>\n  <div class="flex-row">\n    <fieldset>\n      <label for="birthday">Date of Birth</label>\n      <input type="date" id="birthday"/>\n    </fieldset>\n    <fieldset class="select--has-icon">\n      <label for="gender">Gender</label>\n      <select id="gender">\n        <option>Male</option>\n        <option>Female</option>\n      </select>\n    </fieldset>\n    <fieldset class="spacer"></fieldset>\n  </div>\n</div>\n<div class="card-footer">\n  <button class="mr-space-xs">Submit</button>\n  <button class="button--transparent button--gray">Cancel</button>\n</div>\n</div>')),d.a.createElement("h2",{className:"mt-space-xl",id:"states"},"States",d.a.createElement(r.a,{to:e.pathname+"/#states",className:"button button--transparent button--copy-link"})),d.a.createElement("div",{className:"example-container"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h3",null,"Default")),d.a.createElement("div",{className:"card-content"},d.a.createElement("p",null,"This is a default card."))),d.a.createElement("div",{className:"card is-selectable"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h3",null,"Selectable")),d.a.createElement("div",{className:"card-content"},d.a.createElement("p",null,"To use a selectable card, apply ",d.a.createElement("code",{className:"example-text"},".is-selectable")," to the ",d.a.createElement("code",{className:"example-text"},".card"),"."))),d.a.createElement("div",{className:"card is-selectable is-disabled"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h3",null,"Disabled")),d.a.createElement("div",{className:"card-content"},d.a.createElement("p",null,"To use a disabled card, apply ",d.a.createElement("code",{className:"example-text"},".is-disabled")," to the ",d.a.createElement("code",{className:"example-text"},".card"),"."))),d.a.createElement("div",{className:"card card--dashed"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h3",null,"Dashed")),d.a.createElement("div",{className:"card-content"},d.a.createElement("p",null,"To use a dashed card, apply ",d.a.createElement("code",{className:"example-text"},".card--dashed")," to the ",d.a.createElement("code",{className:"example-text"},".card"),"."))),d.a.createElement("div",{className:this.state.isLoading?"card":"card is-loading"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h3",{className:this.state.isLoading?"hidden":""}," "),d.a.createElement("h3",{className:this.state.isLoading?"":"hidden"},"Loading")),d.a.createElement("div",{className:"card-content"},d.a.createElement("p",{className:this.state.isLoading?"hidden":""}," "),d.a.createElement("p",{className:this.state.isLoading?"":"hidden"},"To use the loading card, apply ",d.a.createElement("code",{className:"example-text"},".is-loading")," to the ",d.a.createElement("code",{className:"example-text"},".card"),". Then add empty elements within the card."))),d.a.createElement("button",{className:"button mb-space-m",onClick:this.toggleLoading},"Toggle Loading"),d.a.createElement(u.a,null,'\x3c!-- Different states of cards --\x3e\n<div class="card">\n  <div class="card-header">\n    <h3>Default</h3>\n  </div>\n  <div class="card-content">\n    <p>This is a default card.</p>\n  </div>\n</div>\n\n<div class="card is-selectable">\n  <div class="card-header">\n    <h3>Selectable</h3>\n  </div>\n  <div class="card-content">\n    <p>To use a selectable card, apply <code class="example-text">.is-selectable</code> to the <code class="example-text">.card</code>.</p>\n  </div>\n</div>\n\n<div class="card is-selectable is-disabled">\n  <div class="card-header">\n    <h3>Disabled</h3>\n  </div>\n  <div class="card-content">\n    <p>To use a disabled card, apply <code class="example-text">.is-disabled</code> to the <code class="example-text">.card</code>.</p>\n  </div>\n</div>\n\n<div class="card card--dashed">\n  <div class="card-header">\n    <h3>Dashed</h3>\n  </div>\n  <div class="card-content">\n    <p>To use a dashed card, apply <code class="example-text">.card--dashed</code> to the <code class="example-text">.card</code>.</p>\n  </div>\n</div>\n\n<div class="card is-loading">\n  <div class="card-header">\n    <h3></h3>\n  </div>\n  <div class="card-content">\n    <p></p>\n  </div>\n</div>')),d.a.createElement("h2",{className:"mt-space-xl",id:"lists"},"Lists",d.a.createElement(r.a,{to:e.pathname+"/#lists",className:"button button--transparent button--copy-link"})),d.a.createElement("div",{className:"example-container"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h3",null,"Simple List")),d.a.createElement("div",{className:"card-content"},d.a.createElement("ul",{className:"text-list"},d.a.createElement("li",{className:"text-list_item"},"List Item 1"),d.a.createElement("li",{className:"text-list_item"},"List Item 2"),d.a.createElement("li",{className:"text-list_item"},"List Item 3")))),d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header has-border"},d.a.createElement("h2",null,"Selectable List")),d.a.createElement("ul",{className:"card-list is-selectable"},d.a.createElement("li",{className:"space-between"},d.a.createElement("span",null,"Ryan Fitz"),d.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})),d.a.createElement("li",{className:"space-between"},d.a.createElement("span",null,"Jill Fitz"),d.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})),d.a.createElement("li",{className:"space-between"},d.a.createElement("span",null,"Jackson Fitz"),d.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})),d.a.createElement("li",{className:"space-between"},d.a.createElement("span",null,"Emily Fitz"),d.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})))),d.a.createElement(u.a,null,'\x3c!-- Different types of lists within cards --\x3e\n<div className="card">\n<div className="card-header">\n  <h3>Simple List</h3>\n</div>\n<div className="card-content">\n  <ul className="text-list">\n    <li className="text-list_item">List Item 1</li>\n    <li className="text-list_item">List Item 2</li>\n    <li className="text-list_item">List Item 3</li>\n  </ul>\n</div>\n</div>\n\n<div className="card">\n<div className="card-header has-border">\n  <h2>Selectable List</h2>\n</div>\n<ul className="card--list is-selectable">\n  <li className="space-between"><span>Ryan Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>\n  <li className="space-between"><span>Jill Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>\n  <li className="space-between"><span>Jackson Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>\n  <li className="space-between"><span>Emily Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>\n</ul>\n</div>')),d.a.createElement("h2",{className:"mt-space-xl",id:"card-table"},"Card Table",d.a.createElement(r.a,{to:e.pathname+"/#card-table",className:"button button--transparent button--copy-link"})),d.a.createElement("div",{className:"example-container"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("h2",null,"Table within a Card")),d.a.createElement("div",{className:"card-table"},d.a.createElement("table",{className:"table has-dividers is-selectable has-arrow"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Name"),d.a.createElement("th",null,"Type"),d.a.createElement("th",null,"Age"),d.a.createElement("th",null,"Start Date"),d.a.createElement("th",null))),d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,"Ryan Fitz"),d.a.createElement("td",null,"Primary"),d.a.createElement("td",null,"47"),d.a.createElement("td",null,"01/01/2018"),d.a.createElement("td",{className:"align-right"},d.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"}))),d.a.createElement("tr",null,d.a.createElement("td",null,"Lisa Fitz"),d.a.createElement("td",null,"Spouse"),d.a.createElement("td",null,"42"),d.a.createElement("td",null,"01/01/2018"),d.a.createElement("td",{className:"align-right"},d.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"}))))))),d.a.createElement(u.a,null,'<div class="card">\n  <div class="card-header">\n    <h2>Table within a Card</h2>\n  </div>\n  <div class="card-table">\n    <table class="table has-dividers is-selectable has-arrow">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Age</th>\n          <th>Start Date</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Ryan Fitz</td>\n          <td>Primary</td>\n          <td>47</td>\n          <td>01/01/2018</td>\n          <td class="align-right">\n            <i class="dashing-icon dashing-icon--arrow-right"></i>\n          </td>\n        </tr>\n        <tr>\n          <td>Lisa Fitz</td>\n          <td>Spouse</td>\n          <td>42</td>\n          <td>01/01/2018</td>\n          <td class="align-right">\n            <i class="dashing-icon dashing-icon--arrow-right"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>')))))},a}(d.a.Component);b.propTypes={location:o.a.object.isRequired}}}]);
//# sourceMappingURL=component---src-pages-components-cards-code-js-5c14dc67a2232227b9f8.js.map