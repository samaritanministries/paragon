(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{152:function(e,c,a){"use strict";a.r(c);var l=a(7),t=a.n(l),n=a(0),o=a.n(n),r=a(214),d=a(4),b=a.n(d),i=a(219),s=a(218),h=a(217),m=a(223),k=a(227),x="Checkboxes".toLowerCase(),p=function(e){function c(){return e.apply(this,arguments)||this}return t()(c,e),c.prototype.render=function(){var e=this.props.location;return o.a.createElement(i.a,null,o.a.createElement("header",{className:"subnav"},o.a.createElement("h1",null,"Checkboxes"),o.a.createElement(s.a,{pageName:x})),o.a.createElement(h.a,null,o.a.createElement("div",{className:"grid grid-padding"},o.a.createElement("p",{className:"intro"},'Checkboxes are used as an "on/off" function to select any number of options from a list. Each checkbox is independent from the others in the list, so checking one item should never uncheck another.'),o.a.createElement("h2",{id:"CheckboxStyles"},"Styles",o.a.createElement(r.a,{to:e.pathname+"/#CheckboxStyles",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Checkboxes"),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"checkbox1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"checkbox2"}),o.a.createElement("label",{htmlFor:"checkbox2"},"Option 2")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"checkbox3"}),o.a.createElement("label",{htmlFor:"checkbox3"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Inline Checkboxes"),o.a.createElement("div",{className:"checkbox--custom inline"},o.a.createElement("input",{type:"checkbox",id:"inline-checkbox1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"inline-checkbox1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom inline"},o.a.createElement("input",{type:"checkbox",id:"inline-checkbox2"}),o.a.createElement("label",{htmlFor:"inline-checkbox2"},"Option 2")),o.a.createElement("div",{className:"checkbox--custom inline"},o.a.createElement("input",{type:"checkbox",id:"inline-checkbox3"}),o.a.createElement("label",{htmlFor:"inline-checkbox3"},"Option 3"))))),o.a.createElement(m.a,null,'\x3c!-- Default --\x3e\n<fieldset>\n  <label>Checkboxes</label>\n  <div class="checkbox--custom">\n    <input type="checkbox" id="checkbox1" checked/>\n    <label for="checkbox1">Option 1</label>\n  </div>\n  <div class="checkbox--custom">\n    <input type="checkbox" id="checkbox2"/>\n    <label for="checkbox2">Option 2</label>\n  </div>\n  <div class="checkbox--custom">\n    <input type="checkbox" id="checkbox3"/>\n    <label for="checkbox3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Inline --\x3e\n<fieldset>\n  <label>Inline Checkboxes</label>\n  <div class="checkbox--custom inline">\n    <input type="checkbox" id="inline-checkbox1" checked/>\n    <label for="inline-checkbox1">Option 1</label>\n  </div>\n  <div class="checkbox--custom inline">\n    <input type="checkbox" id="inline-checkbox2"/>\n    <label for="inline-checkbox2">Option 2</label>\n  </div>\n  <div class="checkbox--custom inline">\n    <input type="checkbox" id="inline-checkbox3"/>\n    <label for="inline-checkbox3">Option 3</label>\n  </div>\n</fieldset>')),o.a.createElement("h2",{className:"mt-space-xl",id:"CheckboxStates"},"States",o.a.createElement(r.a,{to:e.pathname+"/#CheckboxStates",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Default Checkboxes"),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"default-checkbox1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"default-checkbox1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"default-checkbox2"}),o.a.createElement("label",{htmlFor:"default-checkbox2"},"Option 2")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"default-checkbox3"}),o.a.createElement("label",{htmlFor:"default-checkbox3"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Disabled Checkboxes"),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"disabled-checkbox1",disabled:!0,defaultChecked:!0}),o.a.createElement("label",{htmlFor:"disabled-checkbox1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"disabled-checkbox2",disabled:!0}),o.a.createElement("label",{htmlFor:"disabled-checkbox2"},"Option 2")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"disabled-checkbox3",disabled:!0}),o.a.createElement("label",{htmlFor:"disabled-checkbox3"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",{className:"has-error"},o.a.createElement("label",null,"Error Checkboxes"),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"error-checkbox1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"error-checkbox1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"error-checkbox2"}),o.a.createElement("label",{htmlFor:"error-checkbox2"},"Option 2")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"error-checkbox3"}),o.a.createElement("label",{htmlFor:"error-checkbox3"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",{className:"has-warning"},o.a.createElement("label",null,"Warning Checkboxes"),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"warning-checkbox1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"warning-checkbox1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"warning-checkbox2"}),o.a.createElement("label",{htmlFor:"warning-checkbox2"},"Option 2")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",id:"warning-checkbox3"}),o.a.createElement("label",{htmlFor:"warning-checkbox3"},"Option 3"))))),o.a.createElement(m.a,null,'\x3c!-- Default --\x3e\n<fieldset>\n  <label>Default Checkboxes</label>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="default-checkbox1" defaultChecked={true}/>\n    <label htmlFor="default-checkbox1">Option 1</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="default-checkbox2"/>\n    <label htmlFor="default-checkbox2">Option 2</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="default-checkbox3"/>\n    <label htmlFor="default-checkbox3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Disabled --\x3e\n<fieldset>\n  <label>Disabled Checkboxes</label>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="disabled-checkbox1" disabled defaultChecked={true}/>\n    <label htmlFor="disabled-checkbox1">Option 1</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="disabled-checkbox2" disabled/>\n    <label htmlFor="disabled-checkbox2">Option 2</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="disabled-checkbox3" disabled/>\n    <label htmlFor="disabled-checkbox3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Error --\x3e\n<fieldset className="has-error">\n  <label>Error Checkboxes</label>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="error-checkbox1" defaultChecked={true}/>\n    <label htmlFor="error-checkbox1">Option 1</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="error-checkbox2"/>\n    <label htmlFor="error-checkbox2">Option 2</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="error-checkbox3"/>\n    <label htmlFor="error-checkbox3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Warning --\x3e\n<fieldset className="has-warning">\n  <label>Warning Checkboxes</label>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="warning-checkbox1" defaultChecked={true}/>\n    <label htmlFor="warning-checkbox1">Option 1</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="warning-checkbox2"/>\n    <label htmlFor="warning-checkbox2">Option 2</label>\n  </div>\n  <div className="checkbox--custom">\n    <input type="checkbox" id="warning-checkbox3"/>\n    <label htmlFor="warning-checkbox3">Option 3</label>\n  </div>\n</fieldset>')),o.a.createElement("h1",{className:"mt-space-xl"},"Checkbox Card"),o.a.createElement("h2",{id:"CheckboxCardStates"},"States",o.a.createElement(r.a,{to:e.pathname+"/#CheckboxCardStates",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Default Checkbox Card"),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card",id:"checkbox-card1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-card1",className:"card"},"Option 1")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card",id:"checkbox-card2"}),o.a.createElement("label",{htmlFor:"checkbox-card2",className:"card"},"Option 2")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card",id:"checkbox-card3"}),o.a.createElement("label",{htmlFor:"checkbox-card3",className:"card"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Disabled Checkbox Card"),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"disabled-checkbox-card",id:"disabled-checkbox-card1",disabled:!0,defaultChecked:!0}),o.a.createElement("label",{htmlFor:"disabled-checkbox-card1",className:"card"},"Option 1")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"disabled-checkbox-card",id:"disabled-checkbox-card2",disabled:!0}),o.a.createElement("label",{htmlFor:"disabled-checkbox-card2",className:"card"},"Option 2")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"disabled-checkbox-card",id:"disabled-checkbox-card3",disabled:!0}),o.a.createElement("label",{htmlFor:"disabled-checkbox-card3",className:"card"},"Option 3"))))),o.a.createElement(m.a,null,'\x3c!-- Checkbox Cards --\x3e\n<fieldset>\n  <label>Default Checkbox Card</label>\n  <div class="checkbox-card">\n    <input type="checkbox" name="checkbox-card" id="checkbox-card1" checked/>\n    <label for="checkbox-card1" class="card">Option 1</label>\n  </div>\n  <div class="checkbox-card">\n    <input type="checkbox" name="checkbox-card" id="checkbox-card2" />\n    <label for="checkbox-card2" class="card">Option 2</label>\n  </div>\n  <div class="checkbox-card">\n    <input type="checkbox" name="checkbox-card" id="checkbox-card3" />\n    <label for="checkbox-card3" class="card">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Disabled Checkbox Cards --\x3e\n<fieldset>\n  <label>Disabled Checkbox Card</label>\n  <div class="checkbox-card">\n    <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card1" disabled checked/>\n    <label for="disabled-checkbox-card1" class="card">Option 1</label>\n  </div>\n  <div class="checkbox-card">\n    <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card2" disabled />\n    <label for="disabled-checkbox-card2" class="card">Option 2</label>\n  </div>\n  <div class="checkbox-card">\n    <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card3" disabled />\n    <label for="disabled-checkbox-card3" class="card">Option 3</label>\n  </div>\n</fieldset>')),o.a.createElement("h2",{className:"mt-space-xl",id:"CheckboxCardSizes"},"Sizes",o.a.createElement(r.a,{to:e.pathname+"/#CheckboxCardSizes",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Small Checkbox Card"),o.a.createElement("div",{className:"checkbox-card checkbox-card--small"},o.a.createElement("input",{type:"checkbox",name:"checkbox-small",id:"checkbox-small1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-small1",className:"card"},"Option 1")),o.a.createElement("div",{className:"checkbox-card checkbox-card--small"},o.a.createElement("input",{type:"checkbox",name:"checkbox-small",id:"checkbox-small2"}),o.a.createElement("label",{htmlFor:"checkbox-small2",className:"card"},"Option 2")),o.a.createElement("div",{className:"checkbox-card checkbox-card--small"},o.a.createElement("input",{type:"checkbox",name:"checkbox-small",id:"checkbox-small3"}),o.a.createElement("label",{htmlFor:"checkbox-small3",className:"card"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Default Checkbox Card"),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-normal",id:"checkbox-card-normal1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-card-normal1",className:"card"},"Option 1")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-normal",id:"checkbox-card-normal2"}),o.a.createElement("label",{htmlFor:"checkbox-card-normal2",className:"card"},"Option 2")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-normal",id:"checkbox-card-normal3"}),o.a.createElement("label",{htmlFor:"checkbox-card-normal3",className:"card"},"Option 3"))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content flex-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Flex Checkbox Card"),o.a.createElement("div",{className:"flex-row"},o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-flex",id:"checkbox-card-flex1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-card-flex1",className:"card"},"Option 3")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-flex",id:"checkbox-card-flex2"}),o.a.createElement("label",{htmlFor:"checkbox-card-flex2",className:"card"},"Option 3")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-flex",id:"checkbox-card-flex3"}),o.a.createElement("label",{htmlFor:"checkbox-card-flex3",className:"card"},"Option 3")))))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Block Checkbox Card"),o.a.createElement("div",{className:"checkbox-card checkbox-card--block"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-block",id:"checkbox-card-block1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-card-block1",className:"card"},"Option 1")),o.a.createElement("div",{className:"checkbox-card checkbox-card--block"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-block",id:"checkbox-card-block2"}),o.a.createElement("label",{htmlFor:"checkbox-card-block2",className:"card"},"Option 2")),o.a.createElement("div",{className:"checkbox-card checkbox-card--block"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-block",id:"checkbox-card-block3"}),o.a.createElement("label",{htmlFor:"checkbox-card-block3",className:"card"},"Option 3"))))),o.a.createElement(m.a,null,'\x3c!-- Small Checkbox Card --\x3e\n<fieldset>\n  <label>Small Checkbox Card</label>\n  <div class="checkbox-card checkbox-card--small">\n    <input type="checkbox" name="checkbox-small" id="checkbox-small1" checked/>\n    <label for="checkbox-small1" class="card">Option 1</label>\n  </div>\n  <div class="checkbox-card checkbox-card--small">\n    <input type="checkbox" name="checkbox-small" id="checkbox-small2" />\n    <label for="checkbox-small2" class="card">Option 2</label>\n  </div>\n  <div class="checkbox-card checkbox-card--small">\n    <input type="checkbox" name="checkbox-small" id="checkbox-small3" />\n    <label for="checkbox-small3" class="card">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Default Radio Card --\x3e\n<fieldset>\n  <label>Default Checkbox Card</label>\n  <div class="checkbox-card">\n    <input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal1" checked/>\n    <label for="checkbox-card-normal1" class="card">Option 1</label>\n  </div>\n  <div class="checkbox-card">\n    <input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal2" />\n    <label for="checkbox-card-normal2" class="card">Option 2</label>\n  </div>\n  <div class="checkbox-card">\n    <input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal3" />\n    <label for="checkbox-card-normal3" class="card">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Flex Radio Card --\x3e\n<fieldset>\n  <label>Flex Checkbox Card</label>\n  <div class="flex-row">\n    <div class="checkbox-card">\n      <input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex1" checked/>\n      <label for="checkbox-card-flex1" class="card">Option 3</label>\n    </div>\n    <div class="checkbox-card">\n      <input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex2" />\n      <label for="checkbox-card-flex2" class="card">Option 3</label>\n    </div>\n    <div class="checkbox-card">\n      <input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex3" />\n      <label for="checkbox-card-flex3" class="card">Option 3</label>\n    </div>\n  </div>\n</fieldset>\n\n\x3c!-- Block Radio Card --\x3e\n<fieldset>\n  <label>Block Checkbox Card</label>\n  <div class="checkbox-card checkbox-card--block">\n    <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block1" checked/>\n    <label for="checkbox-card-block1" class="card">Option 1</label>\n  </div>\n  <div class="checkbox-card checkbox-card--block">\n    <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block2" />\n    <label for="checkbox-card-block2" class="card">Option 2</label>\n  </div>\n  <div class="checkbox-card checkbox-card--block">\n    <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block3" />\n    <label for="checkbox-card-block3" className="card">Option 3</label>\n  </div>\n</fieldset>')),o.a.createElement("h1",{className:"mt-space-xl"},"Theme"),o.a.createElement("h2",{id:"CheckboxTheme"},"Checkbox Theme",o.a.createElement(r.a,{to:e.pathname+"/#CheckboxTheme",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("div",{className:"card hide-HTML-code"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Checkbox"),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",name:"checkbox-theme",id:"checkbox-theme1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-theme1"},"Option 1")),o.a.createElement("div",{className:"checkbox--custom"},o.a.createElement("input",{type:"checkbox",name:"checkbox-theme",id:"checkbox-theme2"}),o.a.createElement("label",{htmlFor:"checkbox-theme2"},"Option 2"))))),o.a.createElement(m.a,null),o.a.createElement(k.a,null,"//Include these variables in your theme file to change the color of your checkbox\n$checkbox--active: $blue !default; //Color of checkbox when checked\n$checkbox--icon: $white !default; //Color of check icon when checked\n$checkbox--focus: $blue-300 !default; //Color of border around checkbox when focused\n$checkbox--disabled: $gray-150 !default; //Color of checkbox when checked and disabled\n$checkbox--icon-disabled: $gray-500 !default; //Color of check icon when checked and disabled")),o.a.createElement("h2",{className:"mt-space-xl",id:"CheckboxCardTheme"},"Checkbox Card Theme",o.a.createElement(r.a,{to:e.pathname+"/#CheckboxCardTheme",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"example-container"},o.a.createElement("div",{className:"card hide-HTML-code"},o.a.createElement("div",{className:"card-content"},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Checkbox"),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-theme",id:"checkbox-card-theme1",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"checkbox-card-theme1",className:"card"},"Option 1")),o.a.createElement("div",{className:"checkbox-card"},o.a.createElement("input",{type:"checkbox",name:"checkbox-card-theme",id:"checkbox-card-theme2"}),o.a.createElement("label",{htmlFor:"checkbox-card-theme2",className:"card"},"Option 2"))))),o.a.createElement(m.a,null),o.a.createElement(k.a,null,"//Include these variables in your theme file\n$card-checkbox--active: $blue !default; //Color of checkbox and card when checked\n$card-checkbox--focus: $blue-300 !default; //Color of border around card-checkbox when focused\n$card-checkbox--padding: 1rem !default; //Padding of checkbox")))))},c}(o.a.Component);p.propTypes={location:b.a.object.isRequired},c.default=p},218:function(e,c,a){"use strict";a(34);var l=a(0),t=a.n(l),n=a(214);c.a=function(e){var c=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===c?c="css-grid":"progress stepper"===c?c="progress-stepper":"radio buttons"===c&&(c="radio-buttons");var l=c,o=a,r=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},d=function(e){return t.a.createElement(n.a,Object.assign({getProps:r},e),e.children)};return t.a.createElement("div",{className:"subnav-links"},t.a.createElement(d,{to:o+"/"+l+"/code"},"Code"),t.a.createElement(d,{to:o+"/"+l+"/guidelines"},"Guidelines"))}},223:function(e,c,a){"use strict";var l=a(35),t=a.n(l),n=a(7),o=a.n(n),r=a(0),d=a.n(r),b=a(225),i=a.n(b),s=(a(224),function(e){function c(c){var a;return(a=e.call(this,c)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(t()(a)),a}o()(c,e);var a=c.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){i.a.highlightAll()},a.render=function(){return i.a.plugins.customClass.map({tag:"exampletag"}),d.a.createElement("div",{className:this.state.showCode?"group-open":""},d.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},d.a.createElement("i",{className:"icon--code"})),d.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},d.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},c}(d.a.Component));c.a=s},224:function(e,c,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var c={classMap:{}};Prism.plugins.customClass={map:function(e){c.classMap=e},prefix:function(e){c.prefixString=e}},Prism.hooks.add("wrap",function(e){(c.classMap||c.prefixString)&&(e.classes=e.classes.map(function(e){return(c.prefixString||"")+(c.classMap[e]||e)}))})}}()}).call(this,a(76))}}]);
//# sourceMappingURL=component---src-pages-components-checkboxes-code-js-4bd2e3fb9b098a65c06f.js.map