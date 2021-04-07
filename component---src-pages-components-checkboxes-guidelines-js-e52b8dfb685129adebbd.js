(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{VGxr:function(e,a,t){"use strict";var l=t("q1tI"),c=t.n(l),n=t("Wbzz"),s=function(e){var a,t=e.pageName,l=e.sectionName,s=e.hasReact,o=l;return null===l&&(o="components"),a=t.replace(/\s+/g,"-"),c.a.createElement("div",{className:"subnav-links"},c.a.createElement(n.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+o+"/"+a+"/code"},"Html"),s&&c.a.createElement(n.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+o+"/"+a+"/component"},"React"),c.a.createElement(n.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+o+"/"+a+"/guidelines"},"Guidelines"))};s.defaultProps={pageName:"/",sectionName:null,hasReact:!1},a.a=s},i4up:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),c=t.n(l),n=t("Bl7J"),s=t("VGxr"),o=t("OmYv"),i="Checkboxes".toLowerCase();a.default=function(){return c.a.createElement(n.a,null,c.a.createElement("header",{className:"subnav"},c.a.createElement("h1",null,"Checkboxes"),c.a.createElement(s.a,{pageName:i})),c.a.createElement(o.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column column--full"},c.a.createElement("p",{className:"intro"},'Checkboxes are used as an "on/off" function to select any number of options from a list. Each checkbox is independent from the others in the list, so checking one item should never uncheck another.'),c.a.createElement("h2",{className:"has-number has-number--one no-margin--top"},"Checkbox Style"),c.a.createElement("p",null,"Custom checkbox styles allow for a larger click area and color customization. It is advised that custom checkboxes be utilized whenever possible."),c.a.createElement("div",{className:"image-container double-padding"},c.a.createElement("fieldset",{className:"column column--full"},c.a.createElement("div",{className:"example--checkbox"},c.a.createElement("input",{type:"checkbox",id:"custom-checkbox--custom-inline1",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"custom-checkbox--custom-inline1"},"Default Checkbox")),c.a.createElement("div",{className:"checkbox--custom inline"},c.a.createElement("input",{type:"checkbox",id:"custom-checkbox--custom-inline2",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"custom-checkbox--custom-inline2"},"Custom Checkbox")))),c.a.createElement("blockquote",{className:"tips",style:{marginTop:"2rem"}},c.a.createElement("strong",null,"Tip: Fitts's Law"),c.a.createElement("p",null,"Allow users to to click on both the checkbox and the label to allow for a larger click target. This supports ",c.a.createElement("a",{href:"https://www.interaction-design.org/literature/book/the-glossary-of-human-computer-interaction/fitts-s-law",target:"_blank",rel:"noopener noreferrer"},"Fitts’s Law"),", which states “the time to acquire a target is a function of the distance to and size of the target.”")),c.a.createElement("h2",{className:"has-number has-number--two"},"Use positive and active language"),c.a.createElement("p",null,"When labeling your checkboxes, use positive language. A user should know exactly what will happen if they check a box, and what will happen if they leave the box unchecked."),c.a.createElement("div",{className:"image-container double-padding"},c.a.createElement("fieldset",{className:"column column--full"},c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"icon-container float-left"},c.a.createElement("i",{className:"dashing-icon dashing-icon--alert-filled dashing-icon--red"})),c.a.createElement("div",{className:"checkbox--custom"},c.a.createElement("input",{type:"checkbox",id:"custom-checkbox--positivelanguage1",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"custom-checkbox--positivelanguage1"},"No note was received"))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"icon-container float-left"},c.a.createElement("i",{className:"dashing-icon dashing-icon--checkmark-filled dashing-icon--green"})),c.a.createElement("div",{className:"checkbox--custom"},c.a.createElement("input",{type:"checkbox",id:"custom-checkbox--positivelanguage2",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"custom-checkbox--positivelanguage2"},"I received a note"))))),c.a.createElement("h2",{className:"has-number has-number--three"},"Submit to make changes"),c.a.createElement("p",null,"Checkboxes should be used to select options and change settings, but should only apply those changes after a submit action is completed (“Save Settings”, “Next Step”, etc.)."),c.a.createElement("div",{className:"image-container double-padding"},c.a.createElement("fieldset",{className:"column column--full"},c.a.createElement("div",{className:"checkbox--custom"},c.a.createElement("input",{type:"checkbox",id:"custom-checkbox--save-changes1",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"custom-checkbox--save-changes1"},"Opt-in to Paperless Notifications")),c.a.createElement("button",{className:"button--smooth",style:{marginTop:"1rem"}},"Save Settings"))),c.a.createElement("h2",{className:"has-number has-number--four"},"Selectable Checkbox Cards"),c.a.createElement("p",null,"Use checkbox cards to provide emphasis on the selection. These cards can include multiple lines of text. icons, and illustrations."),c.a.createElement("div",{className:"image-container double-padding",style:{marginBottom:"2rem"}},c.a.createElement("div",{className:"column column--full"},c.a.createElement("h3",null,"People in your membership")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column column--third"},c.a.createElement("div",{className:"checkbox-card",style:{display:"block"}},c.a.createElement("input",{type:"checkbox",name:"checkbox-inline",id:"checkbox-inline1",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"checkbox-inline1",className:"card",style:{display:"block"}},c.a.createElement("span",{style:{display:"inline-table"}},c.a.createElement("span",{style:{fontSize:"1rem",display:"block"}},"Ryan Fitz"),c.a.createElement("span",{style:{fontSize:"0.8rem",display:"block"}},"Primary"))))),c.a.createElement("div",{className:"column column--third"},c.a.createElement("div",{className:"checkbox-card",style:{display:"block"}},c.a.createElement("input",{type:"checkbox",name:"checkbox-inline",id:"checkbox-inline2"}),c.a.createElement("label",{htmlFor:"checkbox-inline2",className:"card",style:{display:"block"}},c.a.createElement("span",{style:{display:"inline-table"}},c.a.createElement("span",{style:{fontSize:"1rem",display:"block"}},"Jill Fitz"),c.a.createElement("span",{style:{fontSize:"0.8rem",display:"block"}},"Spouse"))))),c.a.createElement("div",{className:"column column--third"},c.a.createElement("div",{className:"checkbox-card",style:{display:"block"}},c.a.createElement("input",{type:"checkbox",name:"checkbox-inline",id:"checkbox-inline3"}),c.a.createElement("label",{htmlFor:"checkbox-inline3",className:"card",style:{display:"block"}},c.a.createElement("span",{style:{display:"inline-table"}},c.a.createElement("span",{style:{fontSize:"1rem",display:"block"}},"Jackson Fitz"),c.a.createElement("span",{style:{fontSize:"0.8rem",display:"block"}},"Son")))))))))))}}}]);
//# sourceMappingURL=component---src-pages-components-checkboxes-guidelines-js-e52b8dfb685129adebbd.js.map