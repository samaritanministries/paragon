(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{TSYQ:function(e,t,r){var n;r("LK8F"),function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===l)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},tPgN:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));r("XfO3"),r("HEwt");var n=r("TSYQ"),a=r.n(n),l=r("q1tI"),o=r.n(l);var i=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l=n.prototype;return l.render=function(){var e=this.LoadingTable.bind(this);return o.a.createElement(e,null)},l.LoadingTable=function(){var e=this.TableTitle.bind(this),t=this.TableRows.bind(this),r=this.props,n=r.children,l=r.isExpandable,i=r.isSelectable;return o.a.createElement("div",{className:a()({"row-expandable":l,"row-selectable":i,"flex-table is-loading":!0})},o.a.createElement(e,null),o.a.createElement("ol",{className:"table-row--header"},n),o.a.createElement(t,null))},l.TableTitle=function(){var e=this.props.tableTitle;return null!=e?o.a.createElement("h3",{className:"flex-table--title"},e):null},l.TableRows=function(){var e=this.props.numberOfColumns,t=this.props.numberOfRows;return o.a.createElement(o.a.Fragment,null,Array.from({length:t},(function(t,r){return o.a.createElement("ol",{className:"table-row",key:r},Array.from({length:e},(function(e,t){return o.a.createElement("li",{key:t}," ")})))})))},n}(o.a.Component);i.defaultProps={isExpandable:!1,isSelectable:!1,numberOfColumns:4,numberOfRows:3,tableTitle:null}}}]);
//# sourceMappingURL=component---src-pages-components-tables-loading-table-js-52d784e6fbd3af565c63.js.map