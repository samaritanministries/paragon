(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{DOjo:function(e,a,n){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a,n,t="";Prism.plugins.customClass={add:function(e){a=e},map:function(e){n="function"==typeof e?e:function(a){return e[a]||a}},prefix:function(e){t=e||""}},Prism.hooks.add("wrap",(function(e){if(a){var i=a({content:e.content,type:e.type,language:e.language});Array.isArray(i)?e.classes.push.apply(e.classes,i):i&&e.classes.push(i)}(n||t)&&(e.classes=e.classes.map((function(a){return t+(n?n(a,e.language):a)})))}))}}()}).call(this,n("yLpj"))},InEJ:function(e){e.exports=JSON.parse('{"a":[{"iconName":"arrow-down","id":1},{"iconName":"arrow-up","id":2},{"iconName":"arrow-right","id":3},{"iconName":"arrow-left","id":4},{"iconName":"arrow-long-down","id":5},{"iconName":"arrow-long-up","id":6},{"iconName":"arrow-long-right","id":7},{"iconName":"arrow-long-left","id":8},{"iconName":"alert-filled","id":9},{"iconName":"alert-stroke","id":10},{"iconName":"checkmark-filled","id":11},{"iconName":"checkmark-stroke","id":12},{"iconName":"info-filled","id":13},{"iconName":"info-stroke","id":14},{"iconName":"question-filled","id":15},{"iconName":"question-stroke","id":16},{"iconName":"calendar","id":17},{"iconName":"time","id":18},{"iconName":"search","id":19},{"iconName":"checkmark","id":20},{"iconName":"close","id":21},{"iconName":"add","id":22},{"iconName":"minus","id":23},{"iconName":"fit-page","id":24},{"iconName":"fit-width","id":25},{"iconName":"flip","id":26},{"iconName":"rotate","id":27},{"iconName":"phone","id":28},{"iconName":"comment","id":29},{"iconName":"comment-add","id":30},{"iconName":"show","id":31},{"iconName":"hidden","id":32},{"iconName":"info","id":33},{"iconName":"location","id":34},{"iconName":"locked","id":35},{"iconName":"unlocked","id":36},{"iconName":"new-tab","id":37},{"iconName":"notification","id":38},{"iconName":"page","id":39},{"iconName":"pencil","id":40},{"iconName":"play","id":41},{"iconName":"grid","id":42},{"iconName":"reply","id":43},{"iconName":"settings","id":44},{"iconName":"trash","id":45},{"iconName":"view-single","id":46},{"iconName":"view-double","id":47},{"iconName":"heart","id":48},{"iconName":"add-person","id":49},{"iconName":"paper-check","id":50},{"iconName":"inbox","id":51},{"iconName":"face-amazing","id":52},{"iconName":"face-awful","id":53},{"iconName":"face-ok","id":54},{"iconName":"face-good","id":55},{"iconName":"face-bad","id":56},{"iconName":"mobile-phone","id":57},{"iconName":"notification-off","id":58},{"iconName":"star-stroke","id":59},{"iconName":"star-filled","id":60},{"iconName":"menu","id":61},{"iconName":"categories","id":62},{"iconName":"mail","id":63},{"iconName":"chat-filled","id":64},{"iconName":"popular","id":65},{"iconName":"paper-check-2","id":66},{"iconName":"pause","id":67}]}')},VGxr:function(e,a,n){"use strict";var t=n("q1tI"),i=n.n(t),c=n("Wbzz"),s=function(e){var a,n=e.pageName,t=e.sectionName,s=e.hasReact,l=t;return null===t&&(l="components"),a=n.replace(/\s+/g,"-"),i.a.createElement("div",{className:"subnav-links"},i.a.createElement(c.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+l+"/"+a+"/code"},"Html"),s&&i.a.createElement(c.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+l+"/"+a+"/component"},"React"),i.a.createElement(c.Link,{partiallyActive:!0,activeClassName:"active",to:"/"+l+"/"+a+"/guidelines"},"Guidelines"))};s.defaultProps={pageName:"/",sectionName:null,hasReact:!1},a.a=s},cMve:function(e,a){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},lT2K:function(e,a,n){"use strict";n.r(a);var t=n("JX7q"),i=n("dI71"),c=n("q1tI"),s=n.n(c),l=n("Wbzz"),o=n("EVdn"),r=n.n(o),d=n("InEJ"),m=n("Bl7J"),g=n("VGxr"),h=n("OmYv"),p=n("xBU5"),u="Icons".toLowerCase(),N=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={showCodeContainer:!0,activeId:null,iconText:"",copyCodeText:"Copy Code",copyCodeClass:null},n.handleClick=n.handleClick.bind(Object(t.a)(n)),n.copyToClipboard=n.copyToClipboard.bind(Object(t.a)(n)),n}Object(i.a)(a,e);var n=a.prototype;return n.copyToClipboard=function(e){var a=this,n=r()("<input>");r()("body").append(n),n.val(r()(e).text()).select(),document.execCommand("copy"),n.remove(),this.setState({copyCodeText:"Copied",copyCodeClass:"copied"}),setTimeout((function(){a.setState({copyCodeText:"Copy Code",copyCodeClass:null})}),2e3)},n.handleClick=function(e,a){this.setState({iconText:e}),a===this.state.activeId?this.setState({activeId:null}):this.setState({activeId:a})},n.render=function(){var e=this,a=this.props.location;return s.a.createElement(m.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Icons"),s.a.createElement(g.a,{pageName:u})),s.a.createElement(h.a,null,s.a.createElement("div",{className:"grid grid-padding"},s.a.createElement("h2",{id:"styles"},"Icons",s.a.createElement(l.Link,{to:a.pathname+"/#icons",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"grid example-container"},d.a.map((function(a){return s.a.createElement(s.a.Fragment,{key:a.id},s.a.createElement("div",{className:"grid--fourth grid--sixth_desktop grid--fourth_mobile example--icon-container "+(a.id===e.state.activeId?"active":""),onClick:function(){return e.handleClick(a.iconName,a.id)&&e.handleClick.bind(e)}},s.a.createElement("i",{className:"dashing-icon dashing-icon--"+a.iconName}),s.a.createElement("span",{className:"example--caption"},a.iconName)))}))),s.a.createElement("div",{className:"icon-code--container "+(null===this.state.activeId?"":"slideIn")},s.a.createElement("div",{className:"icon-code"},s.a.createElement("h3",{className:"text-color--white no-margin"},this.state.iconText),s.a.createElement("div",{className:"hover-code",onClick:function(){return e.copyToClipboard("code.text-to-copy")}},s.a.createElement("code",{className:"text-to-copy language-html show",style:{display:"inline-block"}},'<i class="dashing-icon dashing-icon--'+this.state.iconText+'"></i>'),s.a.createElement("button",{type:"button",className:"button--secondary button--copy-code "+this.state.copyCodeClass},this.state.copyCodeText)))),s.a.createElement("h2",{className:"mt-space-xl",id:"styles"},"Icon Colors",s.a.createElement(l.Link,{to:a.pathname+"/#icon-colors",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"example-container"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-content"},s.a.createElement("p",{className:"no-margin"},"To change the color of an icon, add the class ",s.a.createElement("code",{className:"example-text"},".dashing-icon--[color]")),s.a.createElement(l.Link,{to:"/style/color/code"},"View available colors"),s.a.createElement("hr",{className:"mb-space-m mt-space-m"}),s.a.createElement("i",{className:"dashing-icon dashing-icon--alert-filled dashing-icon--red"}),s.a.createElement("div",{className:"show-code mt-space-xs mb-space-m"},s.a.createElement(p.a,null,'<i class="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>')),s.a.createElement("i",{className:"dashing-icon dashing-icon--checkmark-filled dashing-icon--green"}),s.a.createElement("div",{className:"show-code mt-space-xs"},s.a.createElement(p.a,null,'<i class="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>'))))),s.a.createElement("h2",{className:"mt-space-xl",id:"styles"},"Icon Sizing",s.a.createElement(l.Link,{to:a.pathname+"/#icon-sizing",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"example-container"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",null,"Custom sizing")),s.a.createElement("div",{className:"card-content"},s.a.createElement("p",null,"To change the size of an icon, add the class ",s.a.createElement("code",{className:"example-text"},".dashing-icon--[size]"),"."),s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled dashing-icon--xs",style:{marginRight:"0.25rem"}}),s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled dashing-icon--s",style:{marginRight:"0.25rem"}}),s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled dashing-icon--m",style:{marginRight:"0.25rem"}}),s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled dashing-icon--l",style:{marginRight:"0.25rem"}}),s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled dashing-icon--xl"}),s.a.createElement("div",{className:"show-code mt-space-xs mb-space-m"},s.a.createElement(p.a,null,'<i class="dashing-icon dashing-icon--info-filled dashing-icon--xs"></i>\n<i class="dashing-icon dashing-icon--info-filled dashing-icon--s"></i>\n<i class="dashing-icon dashing-icon--info-filled dashing-icon--m"></i>\n<i class="dashing-icon dashing-icon--info-filled dashing-icon--l"></i>\n<i class="dashing-icon dashing-icon--info-filled dashing-icon--xl"></i>\n')),s.a.createElement("div",{className:"flex-table is-condensed font-small"},s.a.createElement("ol",{className:"table-row--header"},s.a.createElement("li",null,"Class"),s.a.createElement("li",null,"Size")),s.a.createElement("ol",{className:"table-row"},s.a.createElement("li",null,s.a.createElement("code",{className:"example-text"},"dashing-icon--xs")),s.a.createElement("li",null,"0.8rem")),s.a.createElement("ol",{className:"table-row"},s.a.createElement("li",null,s.a.createElement("code",{className:"example-text"},"dashing-icon--s")),s.a.createElement("li",null,"0.9rem")),s.a.createElement("ol",{className:"table-row"},s.a.createElement("li",null,s.a.createElement("code",{className:"example-text"},"dashing-icon--m")),s.a.createElement("li",null,"1.25rem")),s.a.createElement("ol",{className:"table-row"},s.a.createElement("li",null,s.a.createElement("code",{className:"example-text"},"dashing-icon--l")),s.a.createElement("li",null,"1.563rem")),s.a.createElement("ol",{className:"table-row"},s.a.createElement("li",null,s.a.createElement("code",{className:"example-text"},"dashing-icon--xl")),s.a.createElement("li",null,"1.953rem"))))),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",null,"Relative sizing")),s.a.createElement("div",{className:"card-content"},s.a.createElement("p",null,"Nesting an icon inside of an element will make it take on the size of the parent container."),s.a.createElement("h2",{className:"text-color--green"},s.a.createElement("i",{className:"dashing-icon dashing-icon--checkmark-filled dashing-icon--green"})," ","Success"),s.a.createElement("div",{className:"show-code mt-space-xs"},s.a.createElement(p.a,null,'<h2 class="text-color--green">\n  <i class="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>\n  Success\n</h2>'))))),s.a.createElement("h2",{className:"mt-space-xl",id:"styles"},"Icons with Text",s.a.createElement(l.Link,{to:a.pathname+"/#icons-with-text",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"example-container"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header has-icon"},s.a.createElement("h3",null,s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled"}),"Card Header with Icon")),s.a.createElement("div",{className:"card-content"},s.a.createElement("p",{className:"no-margin"},"This is an example of placing an icon in a card header"))),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",null,"Card Content with Icon")),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"flex flex-baseline has-icon"},s.a.createElement("i",{className:"dashing-icon dashing-icon--info-filled"}),s.a.createElement("p",{className:"no-margin"},"This is an example of placing an icon in card content that could be multiple lines.")))),s.a.createElement(p.a,null,'\x3c!-- Use flex to align the icon. Us has-icon to give the icon proper spacing --\x3e\n<div class="card">\n  <div class="card-header has-icon">\n    <i class="dashing-icon dashing-icon--info-filled" />\n    <h3>Card Header with Icons</h3>\n  </div>\n  <div class="card-content">\n    <p class="no-margin">This is an example of placing an icon in a card header</p>\n  </div>\n</div>\n\n\x3c!-- For multi-line content use flex-baseline to align the icon --\x3e\n<div class="card">\n  <div class="card-header">\n    <h3>Card Content with Icon</h3>\n  </div>\n  <div class="card-content">\n    <div class="flex flex-baseline has-icon">\n      <i class="dashing-icon dashing-icon--info-filled" />\n      <p class="no-margin">This is an example of placing an icon in card content that could be multiple lines.</p>\n    </div>\n  </div>\n</div>\n')))))},a}(s.a.Component);a.default=N},s4fy:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(t){for(var i=[],c=0;c<t.length;c++){var s=t[c],l=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?0<i.length&&i[i.length-1].tagName===n(s.content[0].content[1])&&i.pop():"/>"===s.content[s.content.length-1].content||i.push({tagName:n(s.content[0].content[1]),openedBraces:0}):0<i.length&&"punctuation"===s.type&&"{"===s.content?i[i.length-1].openedBraces++:0<i.length&&0<i[i.length-1].openedBraces&&"punctuation"===s.type&&"}"===s.content?i[i.length-1].openedBraces--:l=!0),(l||"string"==typeof s)&&0<i.length&&0===i[i.length-1].openedBraces){var o=n(s);c<t.length-1&&("string"==typeof t[c+1]||"plain-text"===t[c+1].type)&&(o+=n(t[c+1]),t.splice(c+1,1)),0<c&&("string"==typeof t[c-1]||"plain-text"===t[c-1].type)&&(o=n(t[c-1])+o,t.splice(c-1,1),c--),t[c]=new e.Token("plain-text",o,null,o)}s.content&&"string"!=typeof s.content&&a(s.content)}}(a.tokens)}))}(Prism)},xBU5:function(e,a,n){"use strict";var t=n("JX7q"),i=n("dI71"),c=n("q1tI"),s=n.n(c),l=n("wZee"),o=n.n(l),r=(n("DOjo"),n("s4fy"),n("cMve"),function(e){function a(a){var n;return(n=e.call(this,a)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(Object(t.a)(n)),n}Object(i.a)(a,e);var n=a.prototype;return n.componentDidMount=function(){o.a.highlightAll()},n.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},n.render=function(){var e=this.props,a=e.children,n=e.language,t=this.state.showCode;return o.a.plugins.customClass.map({tag:"exampletag"}),s.a.createElement("div",{className:t?"group-open":""},s.a.createElement("div",{onClick:this.toggleCode,className:t?"code-toggle is-open":"code-toggle"},s.a.createElement("i",{className:"icon--code"})),s.a.createElement("pre",{className:t?"language-"+n+" show":"language-"+n},s.a.createElement("code",{className:t?"language-"+n+" show":"language-"+n},a)))},a}(s.a.Component));r.defaultProps={children:"Default",language:"html"},a.a=r}}]);
//# sourceMappingURL=component---src-pages-components-icons-code-js-b7abd3ff13f3534aa8c4.js.map