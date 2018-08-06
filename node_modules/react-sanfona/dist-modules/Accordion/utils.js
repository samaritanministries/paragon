"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildrenActiveItems = getChildrenActiveItems;
exports.getActiveItems = getActiveItems;
exports.isSame = isSame;
var arrayify = exports.arrayify = function arrayify(obj) {
  return [].concat(obj);
};

function getChildrenActiveItems(children) {
  var activeItems = [];

  arrayify(children).filter(function (c) {
    return c;
  }).forEach(function (children, index) {
    if (!children.props.disabled && children.props.expanded) {
      activeItems.push(index);
    }
  });

  return activeItems;
}

function getActiveItems(children, allowMultiple) {
  var activeItems = getChildrenActiveItems(children);

  if (!allowMultiple && activeItems.length > 0) {
    activeItems = activeItems.slice(0, 1);
  }

  return activeItems;
}

// https://stackoverflow.com/a/22395463/338762
function isSame(array1, array2) {
  return array1.length === array2.length && array1.every(function (element, index) {
    return element === array2[index];
  });
}