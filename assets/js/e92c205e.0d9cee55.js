exports.ids = [12];
exports.modules = {

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toc", function() { return toc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(310);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(292);
/* harmony import */ var _theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(305);
/* harmony import */ var _theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__);
const frontMatter={};const metadata={"unversionedId":"useRootClose","id":"useRootClose","isDocsHomePage":false,"title":"useRootClose","description":"`js live renderAsComponent","source":"@site/docs/useRootClose.mdx","slug":"/useRootClose","permalink":"/ui/useRootClose","version":"current","sidebar":"docs","previous":{"title":"usePopper","permalink":"/ui/usePopper"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default.a,{imports:()=>Object(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__["allValues"])({"@restart/ui":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(288)))}),mdxType:"ImportContext"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-js","metastring":"live renderAsComponent","live":true,"renderAsComponent":true},`import { useRootClose } from "@restart/ui";

const ref = useRef();
const [show, setShow] = useState(false);
const handleRootClose = () => setShow(false);

useRootClose(ref, handleRootClose, {
  disabled: !show,
});

return (
  <div className="flex flex-col items-center">
    <button
      type="button"
      className="btn"
      onClick={() => setShow(true)}
    >
      Render RootCloseWrapper
    </button>

    {show && (
      <div
        ref={ref}
        className="rounded shadow bg-white p-6"
      >
        <span>Click anywhere to dismiss me!</span>
      </div>
    )}
  </div>
);
`))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return placements; });
/* unused harmony export beforeRead */
/* unused harmony export read */
/* unused harmony export afterRead */
/* unused harmony export beforeMain */
/* unused harmony export main */
/* unused harmony export afterMain */
/* unused harmony export beforeWrite */
/* unused harmony export write */
/* unused harmony export afterWrite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(318)();
}


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(303);


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["a"] = (SelectableContext);

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useButtonProps */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

function useButtonProps({
  tagName = 'button',
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0
}) {
  if (tagName === 'button') return {
    disabled
  };

  const handleClick = event => {
    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return {
    role: 'button',
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
}
const propTypes = {
  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['button', 'reset', 'submit', null]),
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
};
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    type,
    as: Component
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["type", "as"]);

  const tagName = // eslint-disable-next-line no-nested-ternary
  typeof Component === 'string' ? Component : props.href ? 'a' : 'button';
  const buttonProps = useButtonProps(Object.assign({
    tagName
  }, props));
  Component = Component || tagName;

  if (tagName === 'button' && !type) {
    type = 'button';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({}, props, buttonProps, {
    ref: ref,
    type: type
  }));
});
Button.displayName = 'Button';
Button.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ATTRIBUTE_PREFIX */
/* unused harmony export PROPERTY_PREFIX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataProp; });
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(302);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(271);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(320);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);






const escapeKeyCode = 27;

const noop = () => {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */


function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseRootCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  const onClose = onRootClose || noop;
  const handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(e => {
    const currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_5___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(currentTarget, e.target);
  }, [ref]);
  const handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(e => {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  const handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(e => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = window.event;
    const doc = Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    const removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    const removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    let mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(el, 'mousemove', noop));
    }

    return () => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["a"] = (useRootClose);

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ popper_createPopper; });

// UNUSED EXPORTS: placements

// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// EXTERNAL MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(269);

// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var arrow_toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, enums["b" /* basePlacements */]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [enums["f" /* left */], enums["k" /* right */]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = arrow_toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums["m" /* top */] : enums["f" /* left */];
  var maxProp = axis === 'y' ? enums["c" /* bottom */] : enums["k" /* right */];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = enums["f" /* left */];
  var sideY = enums["m" /* top */];
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums["m" /* top */]) {
      sideY = enums["c" /* bottom */]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === enums["f" /* left */]) {
      sideX = enums["k" /* right */]; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function eventListeners_effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === enums["o" /* viewport */] ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums["m" /* top */]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case enums["c" /* bottom */]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case enums["k" /* right */]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case enums["f" /* left */]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case enums["l" /* start */]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case enums["e" /* end */]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? enums["d" /* clippingParents */] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? enums["o" /* viewport */] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? enums["i" /* popper */] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, enums["b" /* basePlacements */]));
  var altContext = elementContext === enums["i" /* popper */] ? enums["j" /* reference */] : enums["i" /* popper */];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === enums["i" /* popper */] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums["i" /* popper */] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [enums["k" /* right */], enums["c" /* bottom */]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums["m" /* top */], enums["c" /* bottom */]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums["h" /* placements */] : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? enums["n" /* variationPlacements */] : enums["n" /* variationPlacements */].filter(function (placement) {
    return getVariation(placement) === variation;
  }) : enums["b" /* basePlacements */];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === enums["a" /* auto */]) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === enums["a" /* auto */] ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === enums["l" /* start */];
    var isVertical = [enums["m" /* top */], enums["c" /* bottom */]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? enums["k" /* right */] : enums["f" /* left */] : isStartVariation ? enums["c" /* bottom */] : enums["m" /* top */];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums["m" /* top */], enums["k" /* right */], enums["c" /* bottom */], enums["f" /* left */]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [enums["f" /* left */], enums["m" /* top */]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [enums["f" /* left */], enums["k" /* right */]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset_offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums["h" /* placements */].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets_popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? enums["m" /* top */] : enums["f" /* left */];
    var altSide = mainAxis === 'y' ? enums["c" /* bottom */] : enums["k" /* right */];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === enums["l" /* start */] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === enums["l" /* start */] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? enums["m" /* top */] : enums["f" /* left */];

      var _altSide = mainAxis === 'x' ? enums["c" /* bottom */] : enums["k" /* right */];

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return enums["g" /* modifierPhases */].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ../src/popper.ts









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

const popper_createPopper = popperGenerator({
  defaultModifiers: [modifiers_hide, modifiers_popperOffsets, modifiers_computeStyles, eventListeners, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow]
});


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(312);
} else {}


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DropdownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["a"] = (DropdownContext);

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDropdownMenu; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(287);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(300);
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(278);
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(297);
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(269);
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}











const noop = () => {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options = {}) {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  const [arrowElement, attachArrowRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  const hasShownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context
  } = options;
  const show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  const handleClose = e => {
    context == null ? void 0 : context.toggle(false, e);
  };

  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context || {};
  const popper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(toggleElement, menuElement, Object(_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    placement: placementOverride || placement || 'bottom-start',
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
const propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to it's Toggle.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_popper__WEBPACK_IMPORTED_MODULE_7__[/* placements */ "h"]),

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  usePopper: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
const defaultProps = {
  usePopper: true
};
/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */

function DropdownMenu(_ref) {
  let {
    children
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, ["children"]);

  const [props, meta] = useDropdownMenu(options);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children(props, meta));
}

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/** @component */

/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDropdownToggle; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(298);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);






const noop = () => {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  const id = Object(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__[/* useSSRSafeId */ "a"])();
  const {
    show = false,
    toggle = noop,
    setToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]) || {};
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    toggle(!show, e);
  }, [show, toggle]);
  return [{
    id,
    ref: setToggle || noop,
    onClick: handleClick,
    'aria-haspopup': true,
    'aria-expanded': !!show
  }, {
    show,
    toggle
  }];
}
const propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */

function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, children(props, meta));
}

DropdownToggle.displayName = 'DropdownToggle';
DropdownToggle.propTypes = propTypes;
/** @component */

/* harmony default export */ __webpack_exports__["a"] = (DropdownToggle);

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDropdownItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(272);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(286);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(276);
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(277);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}









const propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /** @default Button */
  as: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType
};
/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */

function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  const navContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  const {
    activeKey
  } = navContext || {};
  const eventKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__[/* makeEventKey */ "b"])(key, href);
  active = active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__[/* makeEventKey */ "b"])(activeKey) === eventKey : active;
  const handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(event => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    'aria-disabled': disabled || undefined,
    'aria-selected': active,
    [Object(_DataKey__WEBPACK_IMPORTED_MODULE_6__[/* dataAttr */ "a"])('dropdown-item')]: ''
  }, {
    active
  }];
}
const DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"]((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["eventKey", "disabled", "onClick", "active", "as"]);

  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, _extends({}, props, {
      ref: ref
    }, dropdownItemProps))
  );
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (DropdownItem);

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
NavContext.displayName = 'NavContext';
/* harmony default export */ __webpack_exports__["a"] = (NavContext);

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ Button["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ Dropdown["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "useDropdownMenu", function() { return /* reexport */ DropdownMenu["b" /* useDropdownMenu */]; });
__webpack_require__.d(__webpack_exports__, "useDropdownToggle", function() { return /* reexport */ DropdownToggle["b" /* useDropdownToggle */]; });
__webpack_require__.d(__webpack_exports__, "useDropdownItem", function() { return /* reexport */ DropdownItem["b" /* useDropdownItem */]; });
__webpack_require__.d(__webpack_exports__, "Nav", function() { return /* reexport */ src_Nav; });
__webpack_require__.d(__webpack_exports__, "NavItem", function() { return /* reexport */ src_NavItem; });
__webpack_require__.d(__webpack_exports__, "useNavItem", function() { return /* reexport */ useNavItem; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ src_Modal; });
__webpack_require__.d(__webpack_exports__, "Overlay", function() { return /* reexport */ src_Overlay; });
__webpack_require__.d(__webpack_exports__, "Portal", function() { return /* reexport */ src_Portal; });
__webpack_require__.d(__webpack_exports__, "useRootClose", function() { return /* reexport */ useRootClose["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ src_Tabs; });
__webpack_require__.d(__webpack_exports__, "TabPanel", function() { return /* reexport */ src_TabPanel; });

// EXTERNAL MODULE: ../src/Dropdown.tsx + 1 modules
var Dropdown = __webpack_require__(301);

// EXTERNAL MODULE: ../src/DropdownMenu.tsx
var DropdownMenu = __webpack_require__(283);

// EXTERNAL MODULE: ../src/DropdownToggle.tsx
var DropdownToggle = __webpack_require__(284);

// EXTERNAL MODULE: ../src/DropdownItem.tsx
var DropdownItem = __webpack_require__(285);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(273);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/activeElement.js

/**
 * Return the actively focused element safely.
 *
 * @param doc the document to checl
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = Object(ownerDocument["a" /* default */])();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/contains.js
var contains = __webpack_require__(291);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM = __webpack_require__(281);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/listen.js + 1 modules
var listen = __webpack_require__(302);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(270);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(280);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(290);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useUpdatedRef.js

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}
// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useWillUnmount.js


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  Object(react["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(289);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(271);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/addClass.js

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(315);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollbarSize.js

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM["a" /* default */]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/isWindow.js
var isWindow = __webpack_require__(308);

// CONCATENATED MODULE: ../src/isOverflowing.ts



function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  const doc = Object(isWindow["a" /* default */])(node) ? Object(ownerDocument["a" /* default */])() : Object(ownerDocument["a" /* default */])(node);
  const win = Object(isWindow["a" /* default */])(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  const win = Object(isWindow["a" /* default */])(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
// CONCATENATED MODULE: ../src/manageAriaHidden.ts
const BLACKLIST = ['template', 'script', 'style'];

const isHidable = ({
  nodeType,
  tagName
}) => nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;

const siblings = (container, exclude, cb) => {
  [].forEach.call(container.children, node => {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(hide, node) {
  if (!node) return;

  if (hide) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, {
  dialog,
  backdrop
}) {
  siblings(container, [dialog, backdrop], node => ariaHidden(true, node));
}
function showSiblings(container, {
  dialog,
  backdrop
}) {
  siblings(container, [dialog, backdrop], node => ariaHidden(false, node));
}
// CONCATENATED MODULE: ../src/ModalManager.ts







function findIndexOf(arr, cb) {
  let idx = -1;
  arr.some((d, i) => {
    if (cb(d, i)) {
      idx = i;
      return true;
    }

    return false;
  });
  return idx;
}
/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


class ModalManager_ModalManager {
  constructor({
    hideSiblingNodes = true,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = scrollbarSize();
  }

  isContainerOverflowing(modal) {
    const data = this.data[this.containerIndexFromModal(modal)];
    return data ? data.overflowing : false;
  }

  containerIndexFromModal(modal) {
    return findIndexOf(this.data, d => d.modals.indexOf(modal) !== -1);
  }

  setContainerStyle(containerState, container) {
    const style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = `${parseInt(Object(css["a" /* default */])(container, paddingProp) || '0', 10) + this.scrollbarSize}px`;
    }

    Object(css["a" /* default */])(container, style);
  }

  removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  }

  add(modal, container, className) {
    let modalIdx = this.modals.indexOf(modal);
    const containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      hideSiblings(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    const data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: isOverflowing(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    const containerIdx = this.containerIndexFromModal(modal);
    const data = this.data[containerIdx];
    const container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(removeClass.bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        showSiblings(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      const {
        backdrop,
        dialog
      } = data.modals[data.modals.length - 1];
      ariaHidden(false, dialog);
      ariaHidden(false, backdrop);
    }
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

/* harmony default export */ var src_ModalManager = (ModalManager_ModalManager);
// CONCATENATED MODULE: ../src/useWaitForDOMRef.ts


const resolveContainerRef = ref => {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return Object(ownerDocument["a" /* default */])().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const [resolvedRef, setRef] = Object(react["useState"])(() => resolveContainerRef(ref));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  Object(react["useEffect"])(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  Object(react["useEffect"])(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
// CONCATENATED MODULE: ../src/Modal.tsx
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */
















let manager;

function getManager() {
  if (!manager) manager = new src_ModalManager();
  return manager;
}

function useModalManager(provided) {
  const modalManager = provided || getManager();
  const modal = Object(react["useRef"])({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: (container, className) => modalManager.add(modal.current, container, className),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: Object(react["useCallback"])(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: Object(react["useCallback"])(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal = /*#__PURE__*/Object(react["forwardRef"])((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/react["createElement"]("div", props),
    manager: providedManager,
    container: containerRef,
    containerClassName,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);

  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = Object(useMounted["a" /* default */])();
  const prevShow = Object(usePrevious["a" /* default */])(show);
  const [exited, setExited] = Object(react["useState"])(!show);
  const lastFocusRef = Object(react["useRef"])(null);
  Object(react["useImperativeHandle"])(ref, () => modal, [modal]);

  if (canUseDOM["a" /* default */] && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = Object(useEventCallback["a" /* default */])(() => {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = Object(listen["a" /* default */])(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = Object(listen["a" /* default */])(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !Object(contains["a" /* default */])(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = Object(useEventCallback["a" /* default */])(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current; // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)


      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  Object(react["useEffect"])(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  Object(react["useEffect"])(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = Object(useEventCallback["a" /* default */])(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !Object(contains["a" /* default */])(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = Object(useEventCallback["a" /* default */])(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = Object(useEventCallback["a" /* default */])(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = Object(react["useRef"])();
  const removeKeydownListenerRef = Object(react["useRef"])();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/react["createElement"]("div", dialogProps, /*#__PURE__*/react["cloneElement"](children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/react["createElement"](Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/react["createElement"](BackdropTransition, {
        appear: true,
        in: !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react_dom_default.a.createPortal( /*#__PURE__*/react["createElement"](react["Fragment"], null, backdropElement, dialog), container));
});
const propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: prop_types_default.a.bool,

  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: prop_types_default.a.any,

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: prop_types_default.a.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: prop_types_default.a.func,

  /**
   * Include a backdrop component.
   */
  backdrop: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: prop_types_default.a.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: prop_types_default.a.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: prop_types_default.a.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: prop_types_default.a.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: prop_types_default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types_default.a.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: prop_types_default.a.elementType,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: prop_types_default.a.elementType,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types_default.a.bool,

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: prop_types_default.a.shape({
    preventScroll: prop_types_default.a.bool
  }),

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types_default.a.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: prop_types_default.a.instanceOf(src_ModalManager)
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
/* harmony default export */ var src_Modal = (Object.assign(Modal, {
  Manager: src_ModalManager
}));
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useCallbackRef.js
var useCallbackRef = __webpack_require__(287);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useMergedRefs.js


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return Object(react["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ var esm_useMergedRefs = (useMergedRefs);
// EXTERNAL MODULE: ../src/usePopper.ts + 2 modules
var usePopper = __webpack_require__(300);

// EXTERNAL MODULE: ../src/useRootClose.ts
var useRootClose = __webpack_require__(278);

// EXTERNAL MODULE: ../src/mergeOptionsWithPopperConfig.ts
var mergeOptionsWithPopperConfig = __webpack_require__(297);

// EXTERNAL MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(269);

// CONCATENATED MODULE: ../src/Overlay.tsx
function Overlay_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}












/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */

const Overlay = /*#__PURE__*/react["forwardRef"]((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding = 5,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = Object(useCallbackRef["a" /* default */])();
  const [arrowElement, attachArrowRef] = Object(useCallbackRef["a" /* default */])();
  const mergedRef = esm_useMergedRefs(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = Object(react["useState"])(!props.show);

  const _usePopper = Object(usePopper["a" /* default */])(target, rootElement, Object(mergeOptionsWithPopperConfig["a" /* default */])({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  })),
        {
    styles,
    attributes
  } = _usePopper,
        popper = Overlay_objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  const handleHidden = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  const mountOverlay = props.show || Transition && !exited;
  Object(useRootClose["a" /* default */])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let child = props.children(Object.assign({}, popper, {
    show: !!props.show,
    props: Object.assign({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: Object.assign({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));

  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /*#__PURE__*/react["createElement"](Transition, {
      in: props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/react_dom_default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: prop_types_default.a.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: prop_types_default.a.oneOf(enums["h" /* placements */]),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: prop_types_default.a.any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: prop_types_default.a.any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types_default.a.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: prop_types_default.a.func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: prop_types_default.a.number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types_default.a.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: prop_types_default.a.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: prop_types_default.a.oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: prop_types_default.a.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide(props, ...args) {
    if (props.rootClose) {
      return prop_types_default.a.func.isRequired(props, ...args);
    }

    return prop_types_default.a.func(props, ...args);
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: prop_types_default.a.elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types_default.a.func
};
/* harmony default export */ var src_Overlay = (Overlay);
// CONCATENATED MODULE: ../src/Portal.tsx




const Portal_propTypes = {
  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: prop_types_default.a.any,
  onRendered: prop_types_default.a.func
};
/**
 * @public
 */

const Portal = ({
  container,
  children,
  onRendered
}) => {
  const resolvedContainer = useWaitForDOMRef(container, onRendered);
  return resolvedContainer ? /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react_dom_default.a.createPortal(children, resolvedContainer)) : null;
};

Portal.displayName = 'Portal';
Portal.propTypes = Portal_propTypes;
/* harmony default export */ var src_Portal = (Portal);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(293);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__(296);

// EXTERNAL MODULE: ../src/NavContext.tsx
var NavContext = __webpack_require__(286);

// EXTERNAL MODULE: ../src/SelectableContext.tsx
var SelectableContext = __webpack_require__(272);

// CONCATENATED MODULE: ../src/TabContext.tsx

const TabContext = /*#__PURE__*/react["createContext"](null);
/* harmony default export */ var src_TabContext = (TabContext);
// EXTERNAL MODULE: ../src/DataKey.tsx
var DataKey = __webpack_require__(277);

// EXTERNAL MODULE: ../src/Button.tsx
var Button = __webpack_require__(276);

// CONCATENATED MODULE: ../src/NavItem.tsx
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function NavItem_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}









const NavItem_propTypes = {
  id: prop_types_default.a.string,
  active: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  href: prop_types_default.a.string,
  tabIndex: prop_types_default.a.number,
  eventKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  as: prop_types_default.a.any,
  onClick: prop_types_default.a.func,
  onSelect: prop_types_default.a.func,
  'aria-controls': prop_types_default.a.string
};
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  const navContext = Object(react["useContext"])(NavContext["a" /* default */]);
  let isActive = active;
  const props = {};

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[Object(DataKey["a" /* dataAttr */])('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = Object(useEventCallback["a" /* default */])(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect == null ? void 0 : parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react["forwardRef"]((_ref, ref) => {
  let {
    as: Component = Button["a" /* default */],
    eventKey,
    href
  } = _ref,
      options = NavItem_objectWithoutPropertiesLoose(_ref, ["as", "eventKey", "href"]);

  const [props, meta] = useNavItem(Object.assign({
    key: Object(SelectableContext["b" /* makeEventKey */])(eventKey, href)
  }, options)); // @ts-ignore

  props[Object(DataKey["a" /* dataAttr */])('active')] = meta.isActive;
  return /*#__PURE__*/react["createElement"](Component, _extends({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
NavItem.propTypes = NavItem_propTypes;
/* harmony default export */ var src_NavItem = (NavItem);
// CONCATENATED MODULE: ../src/Nav.tsx
function Nav_extends() {
  Nav_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Nav_extends.apply(this, arguments);
}

function Nav_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}











 // eslint-disable-next-line @typescript-eslint/no-empty-function

const noop = () => {};

const Nav_propTypes = {
  onSelect: prop_types_default.a.func,
  as: prop_types_default.a.elementType,
  role: prop_types_default.a.string,

  /** @private */
  onKeyDown: prop_types_default.a.func,

  /** @private */
  activeKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
};
const EVENT_KEY_ATTR = Object(DataKey["a" /* dataAttr */])('event-key');
const Nav = /*#__PURE__*/react["forwardRef"]((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = Nav_objectWithoutPropertiesLoose(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]); // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect


  const forceUpdate = Object(useForceUpdate["a" /* default */])();
  const needsRefocusRef = Object(react["useRef"])(false);
  const parentOnSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  const tabContext = Object(react["useContext"])(src_TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = Object(react["useRef"])(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = Object(querySelectorAll["a" /* default */])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[Object(DataKey["b" /* dataProp */])('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  Object(react["useEffect"])(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = esm_useMergedRefs(ref, listNode);
  return /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: handleSelect
  }, /*#__PURE__*/react["createElement"](NavContext["a" /* default */].Provider, {
    value: {
      role,
      // used by NavLink to determine it's role
      activeKey: Object(SelectableContext["b" /* makeEventKey */])(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/react["createElement"](Component, Nav_extends({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});
Nav.displayName = 'Nav';
Nav.propTypes = Nav_propTypes;
/* harmony default export */ var src_Nav = (Object.assign(Nav, {
  Item: src_NavItem
}));
// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/esm/index.js + 8 modules
var esm = __webpack_require__(299);

// EXTERNAL MODULE: ../node_modules/@react-aria/ssr/dist/module.js
var dist_module = __webpack_require__(298);

// CONCATENATED MODULE: ../src/NoopTransition.tsx


function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = Object(react["useRef"])(inProp);
  Object(react["useEffect"])(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

/* harmony default export */ var src_NoopTransition = (NoopTransition);
// CONCATENATED MODULE: ../src/TabPanel.tsx
function TabPanel_extends() {
  TabPanel_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TabPanel_extends.apply(this, arguments);
}

function TabPanel_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}







const TabPanel_propTypes = {
  as: prop_types_default.a.elementType,

  /**
   * A key that associates the `TabPanel` with it's controlling `NavLink`.
   */
  eventKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /**
   * Toggles the active state of the TabPanel, this is generally controlled by a
   * TabContainer.
   */
  active: prop_types_default.a.bool,

  /**
   * Use animation when showing or hiding `<TabPanel>`s. Defaults to `<Fade>`
   * animation, else use `false` to disable or a react-transition-group
   * `<Transition/>` component.
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.elementType]),

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: prop_types_default.a.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: prop_types_default.a.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: prop_types_default.a.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: prop_types_default.a.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: prop_types_default.a.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: prop_types_default.a.bool,

  /** @ignore * */
  id: prop_types_default.a.string,

  /** @ignore * */
  'aria-labelledby': prop_types_default.a.string
};

function useTabContext(props) {
  const context = Object(react["useContext"])(src_TabContext);
  if (!context) return props;

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = TabPanel_objectWithoutPropertiesLoose(context, ["activeKey", "getControlledId", "getControllerId"]);

  const shouldTransition = props.transition !== false && rest.transition !== false;
  const key = Object(SelectableContext["b" /* makeEventKey */])(props.eventKey);
  return Object.assign({}, props, {
    active: props.active == null && key != null ? Object(SelectableContext["b" /* makeEventKey */])(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

const TabPanel = /*#__PURE__*/react["forwardRef"]((props, ref) => {
  const _useTabContext = useTabContext(props),
        {
    active,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = src_NoopTransition,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div'
  } = _useTabContext,
        rest = TabPanel_objectWithoutPropertiesLoose(_useTabContext, ["active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  if (!active && !Transition && unmountOnExit) return null;
  let pane = /*#__PURE__*/react["createElement"](Component, TabPanel_extends({}, rest, {
    ref: ref,
    role: "tabpanel",
    hidden: !active,
    "aria-hidden": !active
  }));

  if (Transition) {
    pane = /*#__PURE__*/react["createElement"](Transition, {
      in: active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, pane);
  } // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.


  return /*#__PURE__*/react["createElement"](src_TabContext.Provider, {
    value: null
  }, /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: null
  }, pane));
});
TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = TabPanel_propTypes;
/* harmony default export */ var src_TabPanel = (TabPanel);
// CONCATENATED MODULE: ../src/Tabs.tsx








/* eslint-disable react/no-unused-prop-types */

const Tabs_propTypes = {
  /**
   * Sets a default animation strategy for all children `<TabPane>`s.
   * Use a react-transition-group `<Transition/>` component.
   *
   * @type {{Transition | false}}
   * @default {Fade}
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.oneOf([false]), prop_types_default.a.elementType]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: prop_types_default.a.bool,

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}`
   */
  generateChildId: prop_types_default.a.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
};

const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = Object(esm["a" /* useUncontrolledProp */])(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = Object(dist_module["a" /* useSSRSafeId */])(userId);
  const generateChildId = Object(react["useMemo"])(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = Object(react["useMemo"])(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/react["createElement"](src_TabContext.Provider, {
    value: tabContext
  }, /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: onSelect || null
  }, children));
};

Tabs.propTypes = Tabs_propTypes;
Tabs.Panel = src_TabPanel;
/* harmony default export */ var src_Tabs = (Tabs);
// CONCATENATED MODULE: ../src/index.ts















/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contains; });
/* eslint-disable no-bitwise, no-cond-assign */
// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
function contains(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qsa; });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export optionsSupported */
/* unused harmony export onceSupported */
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ __webpack_exports__["a"] = (addEventListener);

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toModifierMap */
/* unused harmony export toModifierArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeOptionsWithPopperConfig; });
function toModifierMap(modifiers) {
  const result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SSRProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSSRSafeId; });
/* unused harmony export useIsSSR */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);

/**
 * When using SSR with React Aria, applications must be wrapped in an SSRProvider.
 * This ensures that auto generated ids are consistent between the client and server.
 */
function SSRProvider(props) {
  let cur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    // If this is the first SSRProvider, set to zero, otherwise increment.
    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? 0 : ++cur.prefix,
    current: 0
  }), [cur]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
    value: value
  }, props.children);
}
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => defaultId || "react-aria-" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */

function useIsSSR() {
  let cur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
      setIsSSR(false);
    }, []);
  }

  return isSSR;
}
//# sourceMappingURL=module.js.map


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useUncontrolledProp; });

// UNUSED EXPORTS: useUncontrolled, uncontrollable

// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/invariant/invariant.js
var invariant = __webpack_require__(295);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/utils.js


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}
function utils_isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function utils_canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/hook.js



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = Object(react["useRef"])(propValue !== undefined);

  var _useState = Object(react["useState"])(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, Object(react["useCallback"])(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = utils_canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? undefined : invariant_default()(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: _extends(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!utils_isProp(props, key) && utils_isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react_default.a.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react_default.a.Component);

  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react_default.a.forwardRef) {
    WrappedComponent = react_default.a.forwardRef(function (props, ref) {
      return react_default.a.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/index.js



/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(290);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useSafeState.js



function useSafeState(state) {
  var isMounted = Object(useMounted["a" /* default */])();
  return [state[0], Object(react["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ var esm_useSafeState = (useSafeState);
// EXTERNAL MODULE: ../src/popper.ts + 49 modules
var popper = __webpack_require__(279);

// CONCATENATED MODULE: ../src/usePopper.ts
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}





const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite'
}; // until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;

    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;

    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = 'bottom',
    strategy = 'absolute',
    modifiers = EMPTY_MODIFIERS
  } = _ref,
      config = _objectWithoutPropertiesLoose(_ref, ["enabled", "placement", "strategy", "modifiers"]);

  const prevModifiers = Object(react["useRef"])(modifiers);
  const popperInstanceRef = Object(react["useRef"])();
  const update = Object(react["useCallback"])(() => {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = Object(react["useCallback"])(() => {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = esm_useSafeState(Object(react["useState"])({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = Object(react["useMemo"])(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = Object(react["useMemo"])(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  Object(react["useEffect"])(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  Object(react["useEffect"])(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = Object(popper["a" /* createPopper */])(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ var src_usePopper = __webpack_exports__["a"] = (usePopper);

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/matches.js
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }

  return matchesImpl(node, selector);
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(293);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__(294);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(270);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/esm/index.js + 8 modules
var esm = __webpack_require__(299);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(289);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__(296);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useGlobalListener.js
var useGlobalListener = __webpack_require__(307);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(271);

// EXTERNAL MODULE: ../src/DropdownContext.ts
var DropdownContext = __webpack_require__(282);

// EXTERNAL MODULE: ../src/DropdownMenu.tsx
var DropdownMenu = __webpack_require__(283);

// EXTERNAL MODULE: ../src/DropdownToggle.tsx
var DropdownToggle = __webpack_require__(284);

// EXTERNAL MODULE: ../src/DropdownItem.tsx
var DropdownItem = __webpack_require__(285);

// EXTERNAL MODULE: ../src/SelectableContext.tsx
var SelectableContext = __webpack_require__(272);

// EXTERNAL MODULE: ../src/DataKey.tsx
var DataKey = __webpack_require__(277);

// EXTERNAL MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(269);

// CONCATENATED MODULE: ../src/Dropdown.tsx


















const propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: prop_types_default.a.node,

  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to it's Toggle.
   *
   * @default 'bottom-start'
   */
  placement: prop_types_default.a.oneOf(enums["h" /* placements */]),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: prop_types_default.a.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: prop_types_default.a.string,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: prop_types_default.a.bool,

  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: prop_types_default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: prop_types_default.a.func
};

function useRefWithUpdate() {
  const forceUpdate = Object(useForceUpdate["a" /* default */])();
  const ref = Object(react["useRef"])(null);
  const attachRef = Object(react["useCallback"])(element => {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
 * @displayName Dropdown
 * @public
 */


function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${Object(DataKey["a" /* dataAttr */])('dropdown-item')}]`,
  focusFirstItemOnShow,
  placement = 'bottom-start',
  children
}) {
  const [show, onToggle] = Object(esm["a" /* useUncontrolledProp */])(rawShow, defaultShow, rawOnToggle); // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set

  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = Object(usePrevious["a" /* default */])(show);
  const lastSourceEvent = Object(react["useRef"])(null);
  const focusInDropdown = Object(react["useRef"])(false);
  const onSelectCtx = Object(react["useContext"])(SelectableContext["a" /* default */]);
  const toggle = Object(react["useCallback"])((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = Object(useEventCallback["a" /* default */])((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);

    if (!event.isDefaultPrevented()) {
      toggle(false, event, 'select');
    }

    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context = Object(react["useMemo"])(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  const focusToggle = Object(useEventCallback["a" /* default */])(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = Object(useEventCallback["a" /* default */])(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && matches(menuRef.current, '[role=menu]') ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    const first = Object(querySelectorAll["a" /* default */])(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  Object(react["useEffect"])(() => {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  Object(react["useEffect"])(() => {
    lastSourceEvent.current = null;
  });

  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current) return null;
    const items = Object(querySelectorAll["a" /* default */])(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  Object(useGlobalListener["a" /* default */])('keydown', event => {
    var _menuRef$current, _toggleRef$current;

    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    const isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && fromMenu)) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (key === 'Tab' && (!menuRef.current || !show)) {
      return;
    }

    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };

    switch (key) {
      case 'ArrowUp':
        {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus) next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        Object(addEventListener["a" /* default */])(document, 'keyup', e => {
          var _menuRef$current2;

          if (e.key === 'Tab' && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;

      case 'Escape':
        if (key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
        }

        onToggle(false, meta);
        break;

      default:
    }
  });
  return /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: handleSelect
  }, /*#__PURE__*/react["createElement"](DropdownContext["a" /* default */].Provider, {
    value: context
  }, children));
}

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = propTypes;
Dropdown.Menu = DropdownMenu["a" /* default */];
Dropdown.Toggle = DropdownToggle["a" /* default */];
Dropdown.Item = DropdownItem["a" /* default */];
/* harmony default export */ var src_Dropdown = __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__(294);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/removeEventListener.js
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ var esm_removeEventListener = (removeEventListener);
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/listen.js



function listen(node, eventName, handler, options) {
  Object(addEventListener["a" /* default */])(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}

/* harmony default export */ var esm_listen = __webpack_exports__["a"] = (listen);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["a"] = (useCommittedRef);

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.Context = exports.allValues = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const allValues = obj => {
  const keys = Object.keys(obj);
  return Promise.all(keys.map(k => obj[k])).then(values => {
    const next = {};
    keys.forEach((k, i) => {
      next[k] = values[i];
    });
    return next;
  });
};

exports.allValues = allValues;

const Context = /*#__PURE__*/_react.default.createContext(); // eslint-disable-next-line react/prop-types


exports.Context = Context;

var _default = ({
  imports,
  children
}) => /*#__PURE__*/_react.default.createElement(Context.Provider, {
  value: imports
}, children);

exports.default = _default;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(271);



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = Object(_useEventCallback__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGlobalListener; });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return document;
  }, []);
  return Object(_useEventListener__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(documentTarget, event, handler, capture);
}

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isWindow; });
/* harmony import */ var _isDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (Object(_isDocument__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node)) return node.defaultView || false;
  return false;
}

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDocument; });
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _interopRequireWildcard; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),m=__webpack_require__(66),r=__webpack_require__(313);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(314);
} else {}


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(273);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/ownerWindow.js

function ownerWindow(node) {
  var doc = Object(ownerDocument["a" /* default */])(node);
  return doc && doc.defaultView || window;
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/getComputedStyle.js

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/css.js




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ var esm_css = __webpack_exports__["a"] = (style);

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(319);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL3VzZVJvb3RDbG9zZS5tZHgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50Q2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9TZWxlY3RhYmxlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9EYXRhS2V5LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL3VzZVJvb3RDbG9zZS50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Vmlld3BvcnRSZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BvcHBlci50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jYW5Vc2VET00uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Ecm9wZG93bkNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Ecm9wZG93bk1lbnUudHN4Iiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd25Ub2dnbGUudHN4Iiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL05hdkNvbnRleHQudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNhbGxiYWNrUmVmLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlVXBkYXRlZFJlZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VXaWxsVW5tb3VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9zY3JvbGxiYXJTaXplLmpzIiwid2VicGFjazovLy8uLi9zcmMvaXNPdmVyZmxvd2luZy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hbmFnZUFyaWFIaWRkZW4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Nb2RhbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91c2VXYWl0Rm9yRE9NUmVmLnRzIiwid2VicGFjazovLy8uLi9zcmMvTW9kYWwudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlZFJlZnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9PdmVybGF5LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL1BvcnRhbC50c3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9UYWJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL05hdkl0ZW0udHN4Iiwid2VicGFjazovLy8uLi9zcmMvTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL05vb3BUcmFuc2l0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL1RhYnMudHN4Iiwid2VicGFjazovLy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTW91bnRlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9xdWVyeVNlbGVjdG9yQWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUZvcmNlVXBkYXRlLmpzIiwid2VicGFjazovLy8uLi9zcmMvbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3Nzci9kaXN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmNvbnRyb2xsYWJsZS9saWIvZXNtL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9ob29rLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdW5jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmNvbnRyb2xsYWJsZS9saWIvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVxdWFsL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVNhZmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VzZVBvcHBlci50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9tYXRjaGVzLmpzIiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd24udHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vbGlzdGVuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNvbW1pdHRlZFJlZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0A0Yy9kb2N1c2F1cnVzLXByZXNldC9saWIvdGhlbWUvSW1wb3J0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUdsb2JhbExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2lzV2luZG93LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2lzRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9vd25lcldpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9pc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzIl0sIm5hbWVzIjpbImZyb250TWF0dGVyIiwibWV0YWRhdGEiLCJ0b2MiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJhbGxWYWx1ZXMiLCJpc01EWENvbXBvbmVudCIsIlNlbGVjdGFibGVDb250ZXh0IiwiUmVhY3QiLCJtYWtlRXZlbnRLZXkiLCJocmVmIiwiZXZlbnRLZXkiLCJTdHJpbmciLCJ0YWdOYW1lIiwidGFiSW5kZXgiLCJkaXNhYmxlZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJpc1RyaXZpYWxIcmVmIiwib25DbGljayIsImhhbmRsZUtleURvd24iLCJyb2xlIiwidGFyZ2V0IiwicmVsIiwib25LZXlEb3duIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwidHlwZSIsImFzIiwiZWxlbWVudFR5cGUiLCJCdXR0b24iLCJDb21wb25lbnQiLCJidXR0b25Qcm9wcyIsInVzZUJ1dHRvblByb3BzIiwiQVRUUklCVVRFX1BSRUZJWCIsIlBST1BFUlRZX1BSRUZJWCIsInByb3BlcnR5IiwiZXNjYXBlS2V5Q29kZSIsIm5vb3AiLCJnZXRSZWZUYXJnZXQiLCJyZWYiLCJjbGlja1RyaWdnZXIiLCJwcmV2ZW50TW91c2VSb290Q2xvc2VSZWYiLCJ1c2VSZWYiLCJvbkNsb3NlIiwib25Sb290Q2xvc2UiLCJoYW5kbGVNb3VzZUNhcHR1cmUiLCJ1c2VDYWxsYmFjayIsImUiLCJjdXJyZW50VGFyZ2V0Iiwid2FybmluZyIsImlzTW9kaWZpZWRFdmVudCIsImlzTGVmdENsaWNrRXZlbnQiLCJjb250YWlucyIsImhhbmRsZU1vdXNlIiwidXNlRXZlbnRDYWxsYmFjayIsImhhbmRsZUtleVVwIiwidXNlRWZmZWN0IiwiY3VycmVudEV2ZW50Iiwid2luZG93IiwiZG9jIiwib3duZXJEb2N1bWVudCIsInJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyIiwibGlzdGVuIiwicmVtb3ZlTW91c2VMaXN0ZW5lciIsInJlbW92ZUtleXVwTGlzdGVuZXIiLCJtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzIiwiZWwiLCJyZW1vdmUiLCJjcmVhdGVQb3BwZXIiLCJwb3BwZXJHZW5lcmF0b3IiLCJkZWZhdWx0TW9kaWZpZXJzIiwiRHJvcGRvd25Db250ZXh0Iiwib3B0aW9ucyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQ2FsbGJhY2tSZWYiLCJoYXNTaG93blJlZiIsImZpeGVkIiwicGxhY2VtZW50IiwicG9wcGVyQ29uZmlnIiwiZW5hYmxlRXZlbnRMaXN0ZW5lcnMiLCJ1c2VQb3BwZXIiLCJzaG91bGRVc2VQb3BwZXIiLCJzaG93IiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVFbGVtZW50IiwicG9wcGVyIiwibWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyIsInBsYWNlbWVudE92ZXJyaWRlIiwiZW5hYmxlZCIsImVuYWJsZUV2ZW50cyIsIm1lbnVQcm9wcyIsInNldE1lbnUiLCJpZCIsInN0eWxlIiwiaGFzU2hvd24iLCJ0b2dnbGUiLCJhcnJvd1Byb3BzIiwiYXR0YWNoQXJyb3dSZWYiLCJhcnJvdyIsInVzZVJvb3RDbG9zZSIsImNoaWxkcmVuIiwiZmxpcCIsInJvb3RDbG9zZUV2ZW50Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidXNlRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51IiwidXNlU1NSU2FmZUlkIiwic2V0VG9nZ2xlIiwiaXNSZXF1aXJlZCIsInVzZURyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25Ub2dnbGUiLCJhY3RpdmUiLCJvblNlbGVjdEN0eCIsIm5hdkNvbnRleHQiLCJhY3RpdmVLZXkiLCJrZXkiLCJkYXRhQXR0ciIsIkRyb3Bkb3duSXRlbSIsInVzZURyb3Bkb3duSXRlbSIsIk5hdkNvbnRleHQiLCJub2RlIiwiaXNXaW5kb3ciLCJ3aW4iLCJpc0JvZHkiLCJib2R5SXNPdmVyZmxvd2luZyIsImNvbnRhaW5lciIsIkJMQUNLTElTVCIsImlzSGlkYWJsZSIsIm5vZGVUeXBlIiwic2libGluZ3MiLCJleGNsdWRlIiwiY2IiLCJiYWNrZHJvcCIsImFyaWFIaWRkZW4iLCJpZHgiLCJhcnIiLCJjb25zdHJ1Y3RvciIsImhpZGVTaWJsaW5nTm9kZXMiLCJoYW5kbGVDb250YWluZXJPdmVyZmxvdyIsImlzUlRMIiwiZ2V0U2Nyb2xsYmFyU2l6ZSIsImlzQ29udGFpbmVyT3ZlcmZsb3dpbmciLCJkYXRhIiwiY29udGFpbmVySW5kZXhGcm9tTW9kYWwiLCJmaW5kSW5kZXhPZiIsImQiLCJzZXRDb250YWluZXJTdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1Byb3AiLCJjb250YWluZXJTdGF0ZSIsInBhcnNlSW50IiwiY3NzIiwic2Nyb2xsYmFyU2l6ZSIsInJlbW92ZUNvbnRhaW5lclN0eWxlIiwiT2JqZWN0IiwiYWRkIiwibW9kYWxJZHgiLCJjb250YWluZXJJZHgiLCJoaWRlU2libGluZ3MiLCJtb2RhbHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwib3ZlcmZsb3dpbmciLCJpc092ZXJmbG93aW5nIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNob3dTaWJsaW5ncyIsImRpYWxvZyIsImlzVG9wTW9kYWwiLCJyZXNvbHZlQ29udGFpbmVyUmVmIiwidXNlU3RhdGUiLCJlYXJseVJlZiIsInNldFJlZiIsIm9uUmVzb2x2ZWQiLCJuZXh0UmVmIiwibWFuYWdlciIsIm1vZGFsTWFuYWdlciIsInByb3ZpZGVkIiwiZ2V0TWFuYWdlciIsIm1vZGFsIiwic2V0RGlhbG9nUmVmIiwic2V0QmFja2Ryb3BSZWYiLCJNb2RhbCIsImZvcndhcmRSZWYiLCJrZXlib2FyZCIsImF1dG9Gb2N1cyIsImVuZm9yY2VGb2N1cyIsInJlc3RvcmVGb2N1cyIsInJlbmRlckJhY2tkcm9wIiwib25IaWRlIiwib25FbnRlcmVkIiwicmVzdCIsInVzZVdhaXRGb3JET01SZWYiLCJ1c2VNb2RhbE1hbmFnZXIiLCJpc01vdW50ZWQiLCJ1c2VNb3VudGVkIiwicHJldlNob3ciLCJ1c2VQcmV2aW91cyIsImxhc3RGb2N1c1JlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJjYW5Vc2VET00iLCJhY3RpdmVFbGVtZW50Iiwic2V0RXhpdGVkIiwiaGFuZGxlU2hvdyIsInJlbW92ZUtleWRvd25MaXN0ZW5lclJlZiIsInJlbW92ZUZvY3VzTGlzdGVuZXJSZWYiLCJzZXRUaW1lb3V0Iiwib25TaG93IiwiY3VycmVudEFjdGl2ZUVsZW1lbnQiLCJoYW5kbGVIaWRlIiwidXNlV2lsbFVubW91bnQiLCJoYW5kbGVFbmZvcmNlRm9jdXMiLCJoYW5kbGVCYWNrZHJvcENsaWNrIiwib25CYWNrZHJvcENsaWNrIiwiaGFuZGxlRG9jdW1lbnRLZXlEb3duIiwib25Fc2NhcGVLZXlEb3duIiwiaGFuZGxlSGlkZGVuIiwib25FeGl0ZWQiLCJUcmFuc2l0aW9uIiwiZGlhbG9nUHJvcHMiLCJ1bmRlZmluZWQiLCJyZW5kZXJEaWFsb2ciLCJiYWNrZHJvcEVsZW1lbnQiLCJCYWNrZHJvcFRyYW5zaXRpb24iLCJSZWFjdERPTSIsImNvbnRhaW5lckNsYXNzTmFtZSIsInRyYW5zaXRpb24iLCJiYWNrZHJvcFRyYW5zaXRpb24iLCJyZXN0b3JlRm9jdXNPcHRpb25zIiwicHJldmVudFNjcm9sbCIsImJvb2wiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uRXhpdCIsIm9uRXhpdGluZyIsIk1hbmFnZXIiLCJNb2RhbE1hbmFnZXIiLCJPdmVybGF5IiwiY29udGFpbmVyUGFkZGluZyIsIm1lcmdlZFJlZiIsInVzZU1lcmdlZFJlZnMiLCJhdHRyaWJ1dGVzIiwibW91bnRPdmVybGF5IiwiY2hpbGQiLCJzdHlsZXMiLCJyb290Q2xvc2UiLCJyb290Q2xvc2VEaXNhYmxlZCIsImZ1bmMiLCJvblJlbmRlcmVkIiwiUG9ydGFsIiwicmVzb2x2ZWRDb250YWluZXIiLCJUYWJDb250ZXh0Iiwib25TZWxlY3QiLCJwYXJlbnRPblNlbGVjdCIsImlzQWN0aXZlIiwiY29udGV4dENvbnRyb2xsZXJJZCIsImNvbnRleHRDb250cm9sbGVkSWQiLCJOYXZJdGVtIiwidXNlTmF2SXRlbSIsIm1ldGEiLCJFVkVOVF9LRVlfQVRUUiIsIk5hdiIsImZvcmNlVXBkYXRlIiwidXNlRm9yY2VVcGRhdGUiLCJuZWVkc1JlZm9jdXNSZWYiLCJ0YWJDb250ZXh0IiwiZ2V0Q29udHJvbGxlZElkIiwiZ2V0Q29udHJvbGxlcklkIiwibGlzdE5vZGUiLCJnZXROZXh0QWN0aXZlVGFiIiwib2Zmc2V0IiwiY3VycmVudExpc3ROb2RlIiwiaXRlbXMiLCJxc2EiLCJhY3RpdmVDaGlsZCIsImluZGV4IiwibmV4dEluZGV4IiwiaGFuZGxlU2VsZWN0IiwibmV4dEFjdGl2ZUNoaWxkIiwiZGF0YVByb3AiLCJJdGVtIiwiaW4iLCJ1bm1vdW50T25FeGl0IiwiaGFzRW50ZXJlZFJlZiIsIm1vdW50T25FbnRlciIsInNob3VsZFRyYW5zaXRpb24iLCJUYWJQYW5lbCIsInVzZVRhYkNvbnRleHQiLCJwYW5lIiwiZ2VuZXJhdGVDaGlsZElkIiwiVGFicyIsInVzZVVuY29udHJvbGxlZFByb3AiLCJ1c2VNZW1vIiwiZ2VuZXJhdGVDdXN0b21DaGlsZElkIiwicmVzdWx0IiwiQXJyYXkiLCJtb2RpZmllcnMiLCJtIiwibWFwIiwiayIsInRvTW9kaWZpZXJNYXAiLCJzdHJhdGVneSIsInRvTW9kaWZpZXJBcnJheSIsImV2ZW50TGlzdGVuZXJzIiwicHJldmVudE92ZXJmbG93IiwicGFkZGluZyIsImVsZW1lbnQiLCJhcnJvd0VsZW1lbnQiLCJkaXNhYmxlZEFwcGx5U3R5bGVzTW9kaWZpZXIiLCJuYW1lIiwicGhhc2UiLCJhcmlhRGVzY3JpYmVkQnlNb2RpZmllciIsImVmZmVjdCIsInN0YXRlIiwiaWRzIiwicmVmZXJlbmNlIiwiZm4iLCJFTVBUWV9NT0RJRklFUlMiLCJjb25maWciLCJwcmV2TW9kaWZpZXJzIiwicG9wcGVySW5zdGFuY2VSZWYiLCJ1cGRhdGUiLCJ1c2VTYWZlU3RhdGUiLCJ1cGRhdGVNb2RpZmllciIsInJlcXVpcmVzIiwic2V0U3RhdGUiLCJuZXh0TW9kaWZpZXJzIiwiZGVxdWFsIiwicmVmZXJlbmNlRWxlbWVudCIsInBvcHBlckVsZW1lbnQiLCJzIiwiZm9jdXNGaXJzdEl0ZW1PblNob3ciLCJpdGVtU2VsZWN0b3IiLCJkZWZhdWx0U2hvdyIsIm9uVG9nZ2xlIiwiYXR0YWNoUmVmIiwidXNlUmVmV2l0aFVwZGF0ZSIsIm1lbnVFbGVtZW50IiwibWVudVJlZiIsInRvZ2dsZVJlZiIsImxhc3RTaG93IiwibGFzdFNvdXJjZUV2ZW50IiwiZm9jdXNJbkRyb3Bkb3duIiwic291cmNlIiwib3JpZ2luYWxFdmVudCIsImRvY3VtZW50IiwiZm9jdXNUb2dnbGUiLCJtYXliZUZvY3VzRmlyc3QiLCJmb2N1c1R5cGUiLCJtYXRjaGVzIiwiZmlyc3QiLCJnZXROZXh0Rm9jdXNlZENoaWxkIiwiTWF0aCIsInVzZUdsb2JhbExpc3RlbmVyIiwiZnJvbU1lbnUiLCJmcm9tVG9nZ2xlIiwiaXNJbnB1dCIsIm5leHQiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsIkRyb3Bkb3duIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQ29udGV4dCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwia2V5cyIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwidmFsdWVzIiwiZm9yRWFjaCIsImkiLCJjcmVhdGVDb250ZXh0IiwiX2RlZmF1bHQiLCJpbXBvcnRz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QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsWUFBb0I7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYXNzZXRzL2pzL2U5MmMyMDVlLjBkOWNlZTU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4gIGltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG4gIGV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHt9O1xuZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuICBcInVudmVyc2lvbmVkSWRcIjogXCJ1c2VSb290Q2xvc2VcIixcbiAgXCJpZFwiOiBcInVzZVJvb3RDbG9zZVwiLFxuICBcImlzRG9jc0hvbWVQYWdlXCI6IGZhbHNlLFxuICBcInRpdGxlXCI6IFwidXNlUm9vdENsb3NlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJganMgbGl2ZSByZW5kZXJBc0NvbXBvbmVudFwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvdXNlUm9vdENsb3NlLm1keFwiLFxuICBcInNsdWdcIjogXCIvdXNlUm9vdENsb3NlXCIsXG4gIFwicGVybWFsaW5rXCI6IFwiL3VpL3VzZVJvb3RDbG9zZVwiLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwic2lkZWJhclwiOiBcImRvY3NcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZVBvcHBlclwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL3VzZVBvcHBlclwiXG4gIH1cbn07XG4gIC8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgSW1wb3J0Q29udGV4dCwgeyBhbGxWYWx1ZXMgfSBmcm9tIFwiQHRoZW1lL0ltcG9ydENvbnRleHRcIjtcbmV4cG9ydCBjb25zdCB0b2MgPSBbXTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPEltcG9ydENvbnRleHQgaW1wb3J0cz17KCkgPT4gYWxsVmFsdWVzKHtcbiAgICAgIFwiQHJlc3RhcnQvdWlcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy11c2VSb290Q2xvc2UubWR4XCIgKi9cbiAgICAgICdAcmVzdGFydC91aScpXG4gICAgfSl9IG1keFR5cGU9XCJJbXBvcnRDb250ZXh0XCI+XG4gICAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIixcbiAgICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIHJlbmRlckFzQ29tcG9uZW50XCIsXG4gICAgICAgICAgXCJsaXZlXCI6IHRydWUsXG4gICAgICAgICAgXCJyZW5kZXJBc0NvbXBvbmVudFwiOiB0cnVlXG4gICAgICAgIH19PntgaW1wb3J0IHsgdXNlUm9vdENsb3NlIH0gZnJvbSBcIkByZXN0YXJ0L3VpXCI7XG5cbmNvbnN0IHJlZiA9IHVzZVJlZigpO1xuY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgaGFuZGxlUm9vdENsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XG5cbnVzZVJvb3RDbG9zZShyZWYsIGhhbmRsZVJvb3RDbG9zZSwge1xuICBkaXNhYmxlZDogIXNob3csXG59KTtcblxucmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3codHJ1ZSl9XG4gICAgPlxuICAgICAgUmVuZGVyIFJvb3RDbG9zZVdyYXBwZXJcbiAgICA8L2J1dHRvbj5cblxuICAgIHtzaG93ICYmIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgc2hhZG93IGJnLXdoaXRlIHAtNlwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuPkNsaWNrIGFueXdoZXJlIHRvIGRpc21pc3MgbWUhPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9JbXBvcnRDb250ZXh0PlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4gICIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQ29tbWl0dGVkUmVmIGZyb20gJy4vdXNlQ29tbWl0dGVkUmVmJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50Q2FsbGJhY2soZm4pIHtcbiAgdmFyIHJlZiA9IHVzZUNvbW1pdHRlZFJlZihmbik7XG4gIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50ICYmIHJlZi5jdXJyZW50LmFwcGx5KHJlZiwgYXJndW1lbnRzKTtcbiAgfSwgW3JlZl0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdENhbGxiYWNrIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFNlbGVjdGFibGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTZWxlY3RDYWxsYmFjayB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgbWFrZUV2ZW50S2V5ID0gKFxuICBldmVudEtleT86IHN0cmluZyB8IG51bWJlciB8IG51bGwsXG4gIGhyZWY6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChldmVudEtleSAhPSBudWxsKSByZXR1cm4gU3RyaW5nKGV2ZW50S2V5KTtcbiAgcmV0dXJuIGhyZWYgfHwgbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGFibGVDb250ZXh0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25UeXBlID0gJ2J1dHRvbicgfCAncmVzZXQnIHwgJ3N1Ym1pdCcgfCBzdHJpbmc7XG5cbmludGVyZmFjZSBVc2VCdXR0b25Qcm9wc09wdGlvbnMge1xuICB0eXBlPzogQnV0dG9uVHlwZTtcbiAgaHJlZj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbiAgb25DbGljaz86IFJlYWN0LkV2ZW50SGFuZGxlcjxSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuS2V5Ym9hcmRFdmVudD47XG4gIHRhYkluZGV4PzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBpc1RyaXZpYWxIcmVmKGhyZWY/OiBzdHJpbmcpIHtcbiAgcmV0dXJuICFocmVmIHx8IGhyZWYudHJpbSgpID09PSAnIyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b25Qcm9wcyh7XG4gIHRhZ05hbWUgPSAnYnV0dG9uJyxcbiAgZGlzYWJsZWQsXG4gIGhyZWYsXG4gIHRhcmdldCxcbiAgcmVsLFxuICBvbkNsaWNrLFxuICB0YWJJbmRleCA9IDAsXG59OiBVc2VCdXR0b25Qcm9wc09wdGlvbnMgJiB7IHRhZ05hbWU6IHN0cmluZyB9KSB7XG4gIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJykgcmV0dXJuIHsgZGlzYWJsZWQgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgaXNUcml2aWFsSHJlZihocmVmKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQ2xpY2s/LihldmVudCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByb2xlOiAnYnV0dG9uJyxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0YWJJbmRleCxcbiAgICBocmVmOiB0YWdOYW1lID09PSAnYScgJiYgZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBocmVmLFxuICAgIHRhcmdldDogdGFnTmFtZSA9PT0gJ2EnID8gdGFyZ2V0IDogdW5kZWZpbmVkLFxuICAgICdhcmlhLWRpc2FibGVkJzogIWRpc2FibGVkID8gdW5kZWZpbmVkIDogZGlzYWJsZWQsXG4gICAgcmVsOiB0YWdOYW1lID09PSAnYScgPyByZWwgOiB1bmRlZmluZWQsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzXG4gIGV4dGVuZHMgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sICdvbkNsaWNrJz4sXG4gICAgVXNlQnV0dG9uUHJvcHNPcHRpb25zIHtcbiAgYXM/OiBSZWFjdC5FbGVtZW50VHlwZTtcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIEJ1dHRvbiwgcHJldmVudGluZyBtb3VzZSBldmVudHMsXG4gICAqIGV2ZW4gaWYgdGhlIHVuZGVybHlpbmcgY29tcG9uZW50IGlzIGFuIGA8YT5gIGVsZW1lbnRcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogUHJvdmlkaW5nIGEgYGhyZWZgIHdpbGwgcmVuZGVyIGFuIGA8YT5gIGVsZW1lbnQsIF9zdHlsZWRfIGFzIGEgYnV0dG9uLiAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIEhUTUwgYnV0dG9uIHR5cGUgYXR0cmlidXRlLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnYnV0dG9uJ1xuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCcsIG51bGxdKSxcblxuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxufTtcblxuY29uc3QgQnV0dG9uOiBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudDxcbiAgJ2J1dHRvbicsXG4gIEJ1dHRvblByb3BzXG4+ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MQnV0dG9uRWxlbWVudCwgQnV0dG9uUHJvcHM+KFxuICAoeyB0eXBlLCBhczogQ29tcG9uZW50LCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycgPyBDb21wb25lbnQgOiBwcm9wcy5ocmVmID8gJ2EnIDogJ2J1dHRvbic7XG5cbiAgICBjb25zdCBidXR0b25Qcm9wcyA9IHVzZUJ1dHRvblByb3BzKHsgdGFnTmFtZSwgLi4ucHJvcHMgfSk7XG5cbiAgICBDb21wb25lbnQgPSBDb21wb25lbnQgfHwgdGFnTmFtZTtcblxuICAgIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJyAmJiAhdHlwZSkge1xuICAgICAgdHlwZSA9ICdidXR0b24nO1xuICAgIH1cblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLmJ1dHRvblByb3BzfSByZWY9e3JlZn0gdHlwZT17dHlwZX0gLz47XG4gIH0sXG4pO1xuXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImV4cG9ydCBjb25zdCBBVFRSSUJVVEVfUFJFRklYID0gYGRhdGEtcnItdWktYCBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IFBST1BFUlRZX1BSRUZJWCA9IGByclVpYCBhcyBjb25zdDtcblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBdHRyPFQgZXh0ZW5kcyBzdHJpbmc+KHByb3BlcnR5OiBUKSB7XG4gIHJldHVybiBgJHtBVFRSSUJVVEVfUFJFRklYfSR7cHJvcGVydHl9YCBhcyBjb25zdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFQcm9wPFQgZXh0ZW5kcyBzdHJpbmc+KHByb3BlcnR5OiBUKSB7XG4gIHJldHVybiBgJHtQUk9QRVJUWV9QUkVGSVh9JHtwcm9wZXJ0eX1gIGFzIGNvbnN0O1xufVxuIiwiaW1wb3J0IGNvbnRhaW5zIGZyb20gJ2RvbS1oZWxwZXJzL2NvbnRhaW5zJztcbmltcG9ydCBsaXN0ZW4gZnJvbSAnZG9tLWhlbHBlcnMvbGlzdGVuJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuXG5jb25zdCBlc2NhcGVLZXlDb2RlID0gMjc7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnRzID0ge1xuICBbSyBpbiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXBdOiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXBbS10gZXh0ZW5kcyBNb3VzZUV2ZW50XG4gICAgPyBLXG4gICAgOiBuZXZlcjtcbn1ba2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwXTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudDogTW91c2VFdmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jb25zdCBnZXRSZWZUYXJnZXQgPSAoXG4gIHJlZjogUmVhY3QuUmVmT2JqZWN0PEVsZW1lbnQ+IHwgRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4pID0+IHJlZiAmJiAoJ2N1cnJlbnQnIGluIHJlZiA/IHJlZi5jdXJyZW50IDogcmVmKTtcblxuZXhwb3J0IGludGVyZmFjZSBSb290Q2xvc2VPcHRpb25zIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjbGlja1RyaWdnZXI/OiBNb3VzZUV2ZW50cztcbn1cbi8qKlxuICogVGhlIGB1c2VSb290Q2xvc2VgIGhvb2sgcmVnaXN0ZXJzIHlvdXIgY2FsbGJhY2sgb24gdGhlIGRvY3VtZW50XG4gKiB3aGVuIHJlbmRlcmVkLiBQb3dlcnMgdGhlIGA8T3ZlcmxheS8+YCBjb21wb25lbnQuIFRoaXMgaXMgdXNlZCBhY2hpZXZlIG1vZGFsXG4gKiBzdHlsZSBiZWhhdmlvciB3aGVyZSB5b3VyIGNhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHRyaWVzIHRvXG4gKiBpbnRlcmFjdCB3aXRoIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCBvciBoaXRzIHRoZSBgZXNjYCBrZXkuXG4gKlxuICogQHBhcmFtIHtSZWY8SFRNTEVsZW1lbnQ+fCBIVE1MRWxlbWVudH0gcmVmICBUaGUgZWxlbWVudCBib3VuZGFyeVxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25Sb290Q2xvc2VcbiAqIEBwYXJhbSB7b2JqZWN0PX0gIG9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdGlvbnMuZGlzYWJsZWRcbiAqIEBwYXJhbSB7c3RyaW5nPX0gIG9wdGlvbnMuY2xpY2tUcmlnZ2VyIFRoZSBET00gZXZlbnQgbmFtZSAoY2xpY2ssIG1vdXNlZG93biwgZXRjKSB0byBhdHRhY2ggbGlzdGVuZXJzIG9uXG4gKi9cbmZ1bmN0aW9uIHVzZVJvb3RDbG9zZShcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8RWxlbWVudD4gfCBFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgb25Sb290Q2xvc2U6IChlOiBFdmVudCkgPT4gdm9pZCxcbiAgeyBkaXNhYmxlZCwgY2xpY2tUcmlnZ2VyID0gJ2NsaWNrJyB9OiBSb290Q2xvc2VPcHRpb25zID0ge30sXG4pIHtcbiAgY29uc3QgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3Qgb25DbG9zZSA9IG9uUm9vdENsb3NlIHx8IG5vb3A7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VDYXB0dXJlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBnZXRSZWZUYXJnZXQocmVmKTtcblxuICAgICAgd2FybmluZyhcbiAgICAgICAgISFjdXJyZW50VGFyZ2V0LFxuICAgICAgICAnUm9vdENsb3NlIGNhcHR1cmVkIGEgY2xvc2UgZXZlbnQgYnV0IGRvZXMgbm90IGhhdmUgYSByZWYgdG8gY29tcGFyZSBpdCB0by4gJyArXG4gICAgICAgICAgJ3VzZVJvb3RDbG9zZSgpLCBzaG91bGQgYmUgcGFzc2VkIGEgcmVmIHRoYXQgcmVzb2x2ZXMgdG8gYSBET00gbm9kZScsXG4gICAgICApO1xuXG4gICAgICBwcmV2ZW50TW91c2VSb290Q2xvc2VSZWYuY3VycmVudCA9XG4gICAgICAgICFjdXJyZW50VGFyZ2V0IHx8XG4gICAgICAgIGlzTW9kaWZpZWRFdmVudChlKSB8fFxuICAgICAgICAhaXNMZWZ0Q2xpY2tFdmVudChlKSB8fFxuICAgICAgICAhIWNvbnRhaW5zKGN1cnJlbnRUYXJnZXQsIGUudGFyZ2V0KTtcbiAgICB9LFxuICAgIFtyZWZdLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlID0gdXNlRXZlbnRDYWxsYmFjaygoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQpIHtcbiAgICAgIG9uQ2xvc2UoZSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVLZXlVcCA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBlc2NhcGVLZXlDb2RlKSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgcmVmID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBldmVudCB0byBhdm9pZCB0cmlnZ2VyaW5nIGhhbmRsZXJzIGltbWVkaWF0ZWx5XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDA3NFxuICAgIGxldCBjdXJyZW50RXZlbnQgPSB3aW5kb3cuZXZlbnQ7XG5cbiAgICBjb25zdCBkb2MgPSBvd25lckRvY3VtZW50KGdldFJlZlRhcmdldChyZWYpISk7XG5cbiAgICAvLyBVc2UgY2FwdHVyZSBmb3IgdGhpcyBsaXN0ZW5lciBzbyBpdCBmaXJlcyBiZWZvcmUgUmVhY3QncyBsaXN0ZW5lciwgdG9cbiAgICAvLyBhdm9pZCBmYWxzZSBwb3NpdGl2ZXMgaW4gdGhlIGNvbnRhaW5zKCkgY2hlY2sgYmVsb3cgaWYgdGhlIHRhcmdldCBET01cbiAgICAvLyBlbGVtZW50IGlzIHJlbW92ZWQgaW4gdGhlIFJlYWN0IG1vdXNlIGNhbGxiYWNrLlxuICAgIGNvbnN0IHJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyID0gbGlzdGVuKFxuICAgICAgZG9jIGFzIGFueSxcbiAgICAgIGNsaWNrVHJpZ2dlcixcbiAgICAgIGhhbmRsZU1vdXNlQ2FwdHVyZSxcbiAgICAgIHRydWUsXG4gICAgKTtcblxuICAgIGNvbnN0IHJlbW92ZU1vdXNlTGlzdGVuZXIgPSBsaXN0ZW4oZG9jIGFzIGFueSwgY2xpY2tUcmlnZ2VyLCAoZSkgPT4ge1xuICAgICAgLy8gc2tpcCBpZiB0aGlzIGV2ZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcnVubmluZyB3aGVuIHdlIGFkZGVkIHRoZSBoYW5kbGVyc1xuICAgICAgaWYgKGUgPT09IGN1cnJlbnRFdmVudCkge1xuICAgICAgICBjdXJyZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZU1vdXNlKGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlS2V5dXBMaXN0ZW5lciA9IGxpc3Rlbihkb2MgYXMgYW55LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgLy8gc2tpcCBpZiB0aGlzIGV2ZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcnVubmluZyB3aGVuIHdlIGFkZGVkIHRoZSBoYW5kbGVyc1xuICAgICAgaWYgKGUgPT09IGN1cnJlbnRFdmVudCkge1xuICAgICAgICBjdXJyZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZUtleVVwKGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXSBhcyBBcnJheTwoKSA9PiB2b2lkPjtcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgbW9iaWxlU2FmYXJpSGFja0xpc3RlbmVycyA9IFtdLnNsaWNlXG4gICAgICAgIC5jYWxsKGRvYy5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAubWFwKChlbCkgPT4gbGlzdGVuKGVsLCAnbW91c2Vtb3ZlJywgbm9vcCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lcigpO1xuICAgICAgcmVtb3ZlTW91c2VMaXN0ZW5lcigpO1xuICAgICAgcmVtb3ZlS2V5dXBMaXN0ZW5lcigpO1xuICAgICAgbW9iaWxlU2FmYXJpSGFja0xpc3RlbmVycy5mb3JFYWNoKChyZW1vdmUpID0+IHJlbW92ZSgpKTtcbiAgICB9O1xuICB9LCBbXG4gICAgcmVmLFxuICAgIGRpc2FibGVkLFxuICAgIGNsaWNrVHJpZ2dlcixcbiAgICBoYW5kbGVNb3VzZUNhcHR1cmUsXG4gICAgaGFuZGxlTW91c2UsXG4gICAgaGFuZGxlS2V5VXAsXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb290Q2xvc2U7XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB4OiByZWN0LmxlZnQsXG4gICAgeTogcmVjdC50b3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF0aE1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCBhcnJvdyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2Fycm93JztcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcyc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycyc7XG5pbXBvcnQgZmxpcCBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAnO1xuaW1wb3J0IGhpZGUgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQnO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzJztcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cnO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcyc7XG5pbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IgfSBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWJhc2UnO1xuXG4vLyBGb3IgdGhlIGNvbW1vbiBKUyBidWlsZCB3ZSB3aWxsIHR1cm4gdGhpcyBmaWxlIGludG8gYSBidW5kbGUgd2l0aCBubyBpbXBvcnRzLlxuLy8gVGhpcyBpcyBiL2MgdGhlIFBvcHBlciBsaWIgaXMgYWxsIGVzbSBmaWxlcywgYW5kIHdvdWxkIGJyZWFrIGluIGEgY29tbW9uIGpzIG9ubHkgZW52aXJvbm1lbnRcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3BwZXIgPSBwb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBbXG4gICAgaGlkZSxcbiAgICBwb3BwZXJPZmZzZXRzLFxuICAgIGNvbXB1dGVTdHlsZXMsXG4gICAgZXZlbnRMaXN0ZW5lcnMsXG4gICAgb2Zmc2V0LFxuICAgIGZsaXAsXG4gICAgcHJldmVudE92ZXJmbG93LFxuICAgIGFycm93LFxuICBdLFxufSk7XG5cbmV4cG9ydCB7IHBsYWNlbWVudHMgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBQbGFjZW1lbnQgfSBmcm9tICcuL3VzZVBvcHBlcic7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duQ29udGV4dFZhbHVlID0ge1xuICB0b2dnbGU6IChuZXh0U2hvdzogYm9vbGVhbiwgZXZlbnQ/OiBSZWFjdC5TeW50aGV0aWNFdmVudCB8IEV2ZW50KSA9PiB2b2lkO1xuICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICB0b2dnbGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHNldE1lbnU6IChyZWY6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZDtcbiAgc2V0VG9nZ2xlOiAocmVmOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHZvaWQ7XG5cbiAgc2hvdzogYm9vbGVhbjtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xufTtcblxuY29uc3QgRHJvcGRvd25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxEcm9wZG93bkNvbnRleHRWYWx1ZSB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkNvbnRleHQ7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNhbGxiYWNrUmVmIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCBEcm9wZG93bkNvbnRleHQsIHsgRHJvcGRvd25Db250ZXh0VmFsdWUgfSBmcm9tICcuL0Ryb3Bkb3duQ29udGV4dCc7XG5pbXBvcnQgdXNlUG9wcGVyLCB7XG4gIFVzZVBvcHBlck9wdGlvbnMsXG4gIFBsYWNlbWVudCxcbiAgT2Zmc2V0LFxuICBVc2VQb3BwZXJTdGF0ZSxcbn0gZnJvbSAnLi91c2VQb3BwZXInO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSwgeyBSb290Q2xvc2VPcHRpb25zIH0gZnJvbSAnLi91c2VSb290Q2xvc2UnO1xuaW1wb3J0IG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcgZnJvbSAnLi9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnJztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL3BvcHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25NZW51T3B0aW9ucyB7XG4gIGZsaXA/OiBib29sZWFuO1xuICBzaG93PzogYm9vbGVhbjtcbiAgZml4ZWQ/OiBib29sZWFuO1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG4gIHVzZVBvcHBlcj86IGJvb2xlYW47XG4gIGVuYWJsZUV2ZW50TGlzdGVuZXJzPzogYm9vbGVhbjtcbiAgb2Zmc2V0PzogT2Zmc2V0O1xuICByb290Q2xvc2VFdmVudD86IFJvb3RDbG9zZU9wdGlvbnNbJ2NsaWNrVHJpZ2dlciddO1xuICBwb3BwZXJDb25maWc/OiBPbWl0PFVzZVBvcHBlck9wdGlvbnMsICdlbmFibGVkJyB8ICdwbGFjZW1lbnQnPjtcbn1cblxuZXhwb3J0IHR5cGUgVXNlckRyb3Bkb3duTWVudVByb3BzID0gUmVjb3JkPHN0cmluZywgYW55PiAmIHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgJ2FyaWEtbGFiZWxsZWRieSc/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyRHJvcGRvd25NZW51QXJyb3dQcm9wcyA9IFJlY29yZDxzdHJpbmcsIGFueT4gJiB7XG4gIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+O1xuICBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEge1xuICBzaG93OiBib29sZWFuO1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG4gIGhhc1Nob3duOiBib29sZWFuO1xuICB0b2dnbGU/OiBEcm9wZG93bkNvbnRleHRWYWx1ZVsndG9nZ2xlJ107XG4gIHBvcHBlcjogVXNlUG9wcGVyU3RhdGUgfCBudWxsO1xuICBhcnJvd1Byb3BzOiBQYXJ0aWFsPFVzZXJEcm9wZG93bk1lbnVBcnJvd1Byb3BzPjtcbn1cblxuY29uc3Qgbm9vcDogYW55ID0gKCkgPT4ge307XG5cbi8qKlxuICogQG1lbWJlck9mIERyb3Bkb3duXG4gKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5mbGlwIEF1dG9tYXRpY2FsbHkgYWRqdXN0IHRoZSBtZW51IGBkcm9wYCBwb3NpdGlvbiBiYXNlZCBvbiB2aWV3cG9ydCBlZGdlIGRldGVjdGlvblxuICogQHBhcmFtIHtbbnVtYmVyLCBudW1iZXJdfSBvcHRpb25zLm9mZnNldCBEZWZpbmUgYW4gb2Zmc2V0IGRpc3RhbmNlIGJldHdlZW4gdGhlIE1lbnUgYW5kIHRoZSBUb2dnbGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zaG93IERpc3BsYXkgdGhlIG1lbnUgbWFudWFsbHksIGlnbm9yZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBgRHJvcGRvd25gXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlUG9wcGVyIG9wdCBpbi9vdXQgb2YgdXNpbmcgUG9wcGVySlMgdG8gcG9zaXRpb24gbWVudXMuIFdoZW4gZGlzYWJsZWQgeW91IG11c3QgcG9zaXRpb24gaXQgeW91cnNlbGYuXG4gKiBAcGFyYW0ge3N0cmluZ30gIG9wdGlvbnMucm9vdENsb3NlRXZlbnQgVGhlIHBvaW50ZXIgZXZlbnQgdG8gbGlzdGVuIGZvciB3aGVuIGRldGVybWluaW5nIFwiY2xpY2tzIG91dHNpZGVcIiB0aGUgbWVudSBmb3IgdHJpZ2dlcmluZyBhIGNsb3NlLlxuICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zLnBvcHBlckNvbmZpZyBPcHRpb25zIHBhc3NlZCB0byB0aGUgW2B1c2VQb3BwZXJgXSgvYXBpL3VzZVBvcHBlcikgaG9vay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3Bkb3duTWVudShvcHRpb25zOiBVc2VEcm9wZG93bk1lbnVPcHRpb25zID0ge30pIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoRHJvcGRvd25Db250ZXh0KTtcblxuICBjb25zdCBbYXJyb3dFbGVtZW50LCBhdHRhY2hBcnJvd1JlZl0gPSB1c2VDYWxsYmFja1JlZjxFbGVtZW50PigpO1xuXG4gIGNvbnN0IGhhc1Nob3duUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCB7XG4gICAgZmxpcCxcbiAgICBvZmZzZXQsXG4gICAgcm9vdENsb3NlRXZlbnQsXG4gICAgZml4ZWQgPSBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudE92ZXJyaWRlLFxuICAgIHBvcHBlckNvbmZpZyA9IHt9LFxuICAgIGVuYWJsZUV2ZW50TGlzdGVuZXJzID0gdHJ1ZSxcbiAgICB1c2VQb3BwZXI6IHNob3VsZFVzZVBvcHBlciA9ICEhY29udGV4dCxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3Qgc2hvdyA9IGNvbnRleHQ/LnNob3cgPT0gbnVsbCA/ICEhb3B0aW9ucy5zaG93IDogY29udGV4dC5zaG93O1xuXG4gIGlmIChzaG93ICYmICFoYXNTaG93blJlZi5jdXJyZW50KSB7XG4gICAgaGFzU2hvd25SZWYuY3VycmVudCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCB8IEV2ZW50KSA9PiB7XG4gICAgY29udGV4dD8udG9nZ2xlKGZhbHNlLCBlKTtcbiAgfTtcblxuICBjb25zdCB7IHBsYWNlbWVudCwgc2V0TWVudSwgbWVudUVsZW1lbnQsIHRvZ2dsZUVsZW1lbnQgfSA9IGNvbnRleHQgfHwge307XG5cbiAgY29uc3QgcG9wcGVyID0gdXNlUG9wcGVyKFxuICAgIHRvZ2dsZUVsZW1lbnQsXG4gICAgbWVudUVsZW1lbnQsXG4gICAgbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyh7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudE92ZXJyaWRlIHx8IHBsYWNlbWVudCB8fCAnYm90dG9tLXN0YXJ0JyxcbiAgICAgIGVuYWJsZWQ6IHNob3VsZFVzZVBvcHBlcixcbiAgICAgIGVuYWJsZUV2ZW50czogZW5hYmxlRXZlbnRMaXN0ZW5lcnMgPT0gbnVsbCA/IHNob3cgOiBlbmFibGVFdmVudExpc3RlbmVycyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGZsaXAsXG4gICAgICBmaXhlZCxcbiAgICAgIGFycm93RWxlbWVudCxcbiAgICAgIHBvcHBlckNvbmZpZyxcbiAgICB9KSxcbiAgKTtcblxuICBjb25zdCBtZW51UHJvcHM6IFVzZXJEcm9wZG93bk1lbnVQcm9wcyA9IHtcbiAgICByZWY6IHNldE1lbnUgfHwgbm9vcCxcbiAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdG9nZ2xlRWxlbWVudD8uaWQsXG4gICAgLi4ucG9wcGVyLmF0dHJpYnV0ZXMucG9wcGVyLFxuICAgIHN0eWxlOiBwb3BwZXIuc3R5bGVzLnBvcHBlciBhcyBhbnksXG4gIH07XG5cbiAgY29uc3QgbWV0YWRhdGE6IFVzZURyb3Bkb3duTWVudU1ldGFkYXRhID0ge1xuICAgIHNob3csXG4gICAgcGxhY2VtZW50LFxuICAgIGhhc1Nob3duOiBoYXNTaG93blJlZi5jdXJyZW50LFxuICAgIHRvZ2dsZTogY29udGV4dD8udG9nZ2xlLFxuICAgIHBvcHBlcjogc2hvdWxkVXNlUG9wcGVyID8gcG9wcGVyIDogbnVsbCxcbiAgICBhcnJvd1Byb3BzOiBzaG91bGRVc2VQb3BwZXJcbiAgICAgID8ge1xuICAgICAgICAgIHJlZjogYXR0YWNoQXJyb3dSZWYsXG4gICAgICAgICAgLi4ucG9wcGVyLmF0dHJpYnV0ZXMuYXJyb3csXG4gICAgICAgICAgc3R5bGU6IHBvcHBlci5zdHlsZXMuYXJyb3cgYXMgYW55LFxuICAgICAgICB9XG4gICAgICA6IHt9LFxuICB9O1xuXG4gIHVzZVJvb3RDbG9zZShtZW51RWxlbWVudCwgaGFuZGxlQ2xvc2UsIHtcbiAgICBjbGlja1RyaWdnZXI6IHJvb3RDbG9zZUV2ZW50LFxuICAgIGRpc2FibGVkOiAhc2hvdyxcbiAgfSk7XG5cbiAgcmV0dXJuIFttZW51UHJvcHMsIG1ldGFkYXRhXSBhcyBjb25zdDtcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgYSBNZW51IGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBzcHJlYWQgdGhyb3VnaCB0byAqKmEgY29tcG9uZW50IHRoYXQgY2FuIGFjY2VwdCBhIHJlZioqLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBzaG93OiBib29sZWFuLFxuICAgKiAgIGNsb3NlOiAoP1N5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgKiAgIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgKiAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcbiAgICogICBmb3JjZVVwZGF0ZTogKCkgPT4gdm9pZCxcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgICAgYXJpYS1sYWJlbGxlZGJ5OiA/c3RyaW5nXG4gICAqICAgfSxcbiAgICogICBhcnJvd1Byb3BzOiB7XG4gICAqICAgICByZWY6ICg/SFRNTEVsZW1lbnQpID0+IHZvaWQsXG4gICAqICAgICBzdHlsZTogeyBbc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0sXG4gICAqICAgfSxcbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBDb250cm9scyB0aGUgdmlzaWJsZSBzdGF0ZSBvZiB0aGUgbWVudSwgZ2VuZXJhbGx5IHRoaXMgaXNcbiAgICogcHJvdmlkZWQgYnkgdGhlIHBhcmVudCBgRHJvcGRvd25gIGNvbXBvbmVudCxcbiAgICogYnV0IG1heSBhbHNvIGJlIHNwZWNpZmllZCBhcyBhIHByb3AgZGlyZWN0bHkuXG4gICAqL1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIFBvcHBlckpTIHBsYWNlbWVudCBmb3IgcG9zaXRpb25pbmcgdGhlIERyb3Bkb3duIG1lbnUgaW4gcmVsYXRpb24gdG8gaXQncyBUb2dnbGUuXG4gICAqIEdlbmVyYWxseSB0aGlzIGlzIHByb3ZpZGVkIGJ5IHRoZSBwYXJlbnQgYERyb3Bkb3duYCBjb21wb25lbnQsXG4gICAqIGJ1dCBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgYXMgYSBwcm9wIGRpcmVjdGx5LlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YocGxhY2VtZW50cyksXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIFBvcHBlci5qcyBgZmxpcGAgbW9kaWZpZXIsIGFsbG93aW5nIHRoZSBEcm9wZG93biB0b1xuICAgKiBhdXRvbWF0aWNhbGx5IGFkanVzdCBpdCdzIHBsYWNlbWVudCBpbiBjYXNlIG9mIG92ZXJsYXAgd2l0aCB0aGUgdmlld3BvcnQgb3IgdG9nZ2xlLlxuICAgKiBSZWZlciB0byB0aGUgW2ZsaXAgZG9jc10oaHR0cHM6Ly9wb3BwZXIuanMub3JnL3BvcHBlci1kb2N1bWVudGF0aW9uLmh0bWwjbW9kaWZpZXJzLi5mbGlwLmVuYWJsZWQpIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGZsaXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIHVzZVBvcHBlcjogUHJvcFR5cGVzLm9uZU9mKFt0cnVlLCBmYWxzZV0pLFxuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwb3BwZXIgb3B0aW9ucyBhbmQgcHJvcHMgcGFzc2VkIGRpcmVjdGx5IHRvIHJlYWN0LXBvcHBlcidzIFBvcHBlciBjb21wb25lbnQuXG4gICAqL1xuICBwb3BwZXJDb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGV2ZW50IHVzZWQgYnkgUm9vdENsb3NlV3JhcHBlci5cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICB1c2VQb3BwZXI6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duTWVudVByb3BzIGV4dGVuZHMgVXNlRHJvcGRvd25NZW51T3B0aW9ucyB7XG4gIGNoaWxkcmVuOiAoXG4gICAgcHJvcHM6IFVzZXJEcm9wZG93bk1lbnVQcm9wcyxcbiAgICBtZXRhOiBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQWxzbyBleHBvcnRlZCBhcyBgPERyb3Bkb3duLk1lbnU+YCBmcm9tIGBEcm9wZG93bmAuXG4gKlxuICogQGRpc3BsYXlOYW1lIERyb3Bkb3duTWVudVxuICogQG1lbWJlck9mIERyb3Bkb3duXG4gKi9cbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGNoaWxkcmVuLCAuLi5vcHRpb25zIH06IERyb3Bkb3duTWVudVByb3BzKSB7XG4gIGNvbnN0IFtwcm9wcywgbWV0YV0gPSB1c2VEcm9wZG93bk1lbnUob3B0aW9ucyk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVuKHByb3BzLCBtZXRhKX08Lz47XG59XG5cbkRyb3Bkb3duTWVudS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bk1lbnUnO1xuXG5Ecm9wZG93bk1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRHJvcGRvd25NZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuLyoqIEBjb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTWVudTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IHVzZVNTUlNhZmVJZCB9IGZyb20gJ0ByZWFjdC1hcmlhL3Nzcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcm9wZG93bkNvbnRleHQsIHsgRHJvcGRvd25Db250ZXh0VmFsdWUgfSBmcm9tICcuL0Ryb3Bkb3duQ29udGV4dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25Ub2dnbGVQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIHJlZjogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3NldFRvZ2dsZSddO1xuICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcbiAgJ2FyaWEtaGFzcG9wdXAnOiBib29sZWFuO1xuICAnYXJpYS1leHBhbmRlZCc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSB7XG4gIHNob3c6IERyb3Bkb3duQ29udGV4dFZhbHVlWydzaG93J107XG4gIHRvZ2dsZTogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3RvZ2dsZSddO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogV2lyZXMgdXAgRHJvcGRvd24gdG9nZ2xlIGZ1bmN0aW9uYWxpdHksIHJldHVybmluZyBhIHNldCBhIHByb3BzIHRvIGF0dGFjaFxuICogdG8gdGhlIGVsZW1lbnQgdGhhdCBmdW5jdGlvbnMgYXMgdGhlIGRyb3Bkb3duIHRvZ2dsZSAoZ2VuZXJhbGx5IGEgYnV0dG9uKS5cbiAqXG4gKiBAbWVtYmVyT2YgRHJvcGRvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3Bkb3duVG9nZ2xlKCk6IFtcbiAgVXNlRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbl0ge1xuICBjb25zdCBpZCA9IHVzZVNTUlNhZmVJZCgpO1xuICBjb25zdCB7IHNob3cgPSBmYWxzZSwgdG9nZ2xlID0gbm9vcCwgc2V0VG9nZ2xlIH0gPVxuICAgIHVzZUNvbnRleHQoRHJvcGRvd25Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgdG9nZ2xlKCFzaG93LCBlKTtcbiAgICB9LFxuICAgIFtzaG93LCB0b2dnbGVdLFxuICApO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQsXG4gICAgICByZWY6IHNldFRvZ2dsZSB8fCBub29wLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAnYXJpYS1leHBhbmRlZCc6ICEhc2hvdyxcbiAgICB9LFxuICAgIHsgc2hvdywgdG9nZ2xlIH0sXG4gIF07XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGEgVG9nZ2xlIGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBzcHJlYWQgdGhyb3VnaCB0byAqKmEgY29tcG9uZW50IHRoYXQgY2FuIGFjY2VwdCBhIHJlZioqLiBVc2VcbiAgICogdGhlIGBvblRvZ2dsZWAgYXJndW1lbnQgdG8gdG9nZ2xlIHRoZSBtZW51IG9wZW4gb3IgY2xvc2VkXG4gICAqXG4gICAqIEB0eXBlIHtGdW5jdGlvbiAoe1xuICAgKiAgIHNob3c6IGJvb2xlYW4sXG4gICAqICAgdG9nZ2xlOiAoc2hvdzogYm9vbGVhbikgPT4gdm9pZCxcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgYXJpYS1oYXNwb3B1cDogdHJ1ZVxuICAgKiAgICAgYXJpYS1leHBhbmRlZDogYm9vbGVhblxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Ub2dnbGVQcm9wcyB7XG4gIGNoaWxkcmVuOiAoXG4gICAgcHJvcHM6IFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gICAgbWV0YTogVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQWxzbyBleHBvcnRlZCBhcyBgPERyb3Bkb3duLlRvZ2dsZT5gIGZyb20gYERyb3Bkb3duYC5cbiAqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25Ub2dnbGVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93blRvZ2dsZSh7IGNoaWxkcmVuIH06IERyb3Bkb3duVG9nZ2xlUHJvcHMpIHtcbiAgY29uc3QgW3Byb3BzLCBtZXRhXSA9IHVzZURyb3Bkb3duVG9nZ2xlKCk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVuKHByb3BzLCBtZXRhKX08Lz47XG59XG5cbkRyb3Bkb3duVG9nZ2xlLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duVG9nZ2xlJztcbkRyb3Bkb3duVG9nZ2xlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuLyoqIEBjb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duVG9nZ2xlO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcblxuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSAnLi9OYXZDb250ZXh0JztcblxuaW1wb3J0IHsgRXZlbnRLZXksIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bkl0ZW1Qcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZXZlbnRLZXk/OiBFdmVudEtleTtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSGlnaGxpZ2h0IHRoZSBtZW51IGl0ZW0gYXMgYWN0aXZlLlxuICAgKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgbWVudSBpdGVtLCBtYWtpbmcgaXQgdW5zZWxlY3RhYmxlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBWYWx1ZSBwYXNzZWQgdG8gdGhlIGBvblNlbGVjdGAgaGFuZGxlciwgdXNlZnVsIGZvciBpZGVudGlmeWluZyB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLlxuICAgKi9cbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogSFRNTCBgaHJlZmAgYXR0cmlidXRlIGNvcnJlc3BvbmRpbmcgdG8gYGEuaHJlZmAuXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBAZGVmYXVsdCBCdXR0b24gKi9cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbn07XG5cbmludGVyZmFjZSBVc2VEcm9wZG93bkl0ZW1PcHRpb25zIHtcbiAga2V5PzogRXZlbnRLZXkgfCBudWxsO1xuICBocmVmPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkcm9wZG93biBpdGVtLiBSZXR1cm5zIGEgc2V0IG9mIHByb3BzIGZvciB0aGUgZHJvcGRvd24gaXRlbSBjb21wb25lbnRcbiAqIGluY2x1ZGluZyBhbiBgb25DbGlja2AgaGFuZGxlciB0aGF0IHByZXZlbnRzIHNlbGVjdGlvbiB3aGVuIHRoZSBpdGVtIGlzIGRpc2FibGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93bkl0ZW0oe1xuICBrZXksXG4gIGhyZWYsXG4gIGFjdGl2ZSxcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG59OiBVc2VEcm9wZG93bkl0ZW1PcHRpb25zKSB7XG4gIGNvbnN0IG9uU2VsZWN0Q3R4ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xuXG4gIGNvbnN0IHsgYWN0aXZlS2V5IH0gPSBuYXZDb250ZXh0IHx8IHt9O1xuICBjb25zdCBldmVudEtleSA9IG1ha2VFdmVudEtleShrZXksIGhyZWYpO1xuXG4gIGFjdGl2ZSA9XG4gICAgYWN0aXZlID09IG51bGwgJiYga2V5ICE9IG51bGxcbiAgICAgID8gbWFrZUV2ZW50S2V5KGFjdGl2ZUtleSkgPT09IGV2ZW50S2V5XG4gICAgICA6IGFjdGl2ZTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUV2ZW50Q2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG5cbiAgICBvbkNsaWNrPy4oZXZlbnQpO1xuXG4gICAgaWYgKG9uU2VsZWN0Q3R4ICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICBvblNlbGVjdEN0eChldmVudEtleSwgZXZlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgdW5kZWZpbmVkLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBhY3RpdmUsXG4gICAgICBbZGF0YUF0dHIoJ2Ryb3Bkb3duLWl0ZW0nKV06ICcnLFxuICAgIH0sXG4gICAgeyBhY3RpdmUgfSxcbiAgXSBhcyBjb25zdDtcbn1cblxuY29uc3QgRHJvcGRvd25JdGVtOiBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudDxcbiAgdHlwZW9mIEJ1dHRvbixcbiAgRHJvcGRvd25JdGVtUHJvcHNcbj4gPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgZXZlbnRLZXksXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBhY3RpdmUsXG4gICAgICBhczogQ29tcG9uZW50ID0gQnV0dG9uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9OiBEcm9wZG93bkl0ZW1Qcm9wcyxcbiAgICByZWYsXG4gICkgPT4ge1xuICAgIGNvbnN0IFtkcm9wZG93bkl0ZW1Qcm9wc10gPSB1c2VEcm9wZG93bkl0ZW0oe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGhyZWY6IHByb3BzLmhyZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBhY3RpdmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gXCJUUzI2MDQ6IEpTWCBlbGVtZW50IHR5cGUgJ0NvbXBvbmVudCcgZG9lcyBub3QgaGF2ZSBhbnkgY29uc3RydWN0IG9yIGNhbGwgc2lnbmF0dXJlcy5cIlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IHJlZj17cmVmfSB7Li4uZHJvcGRvd25JdGVtUHJvcHN9IC8+XG4gICAgKTtcbiAgfSxcbik7XG5cbkRyb3Bkb3duSXRlbS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bkl0ZW0nO1xuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRLZXkgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIE5hdkNvbnRleHRUeXBlIHtcbiAgcm9sZT86IHN0cmluZzsgLy8gdXNlZCBieSBOYXZJdGVtIHRvIGRldGVybWluZSBpdCdzIHJvbGVcbiAgYWN0aXZlS2V5OiBFdmVudEtleSB8IG51bGw7XG4gIGdldENvbnRyb2xsZWRJZDogKGtleTogRXZlbnRLZXkgfCBudWxsKSA9PiBzdHJpbmc7XG4gIGdldENvbnRyb2xsZXJJZDogKGtleTogRXZlbnRLZXkgfCBudWxsKSA9PiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5hdkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5OYXZDb250ZXh0LmRpc3BsYXlOYW1lID0gJ05hdkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZDb250ZXh0O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEEgY29udmVuaWVuY2UgaG9vayBhcm91bmQgYHVzZVN0YXRlYCBkZXNpZ25lZCB0byBiZSBwYWlyZWQgd2l0aFxuICogdGhlIGNvbXBvbmVudCBbY2FsbGJhY2sgcmVmXShodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI2NhbGxiYWNrLXJlZnMpIGFwaS5cbiAqIENhbGxiYWNrIHJlZnMgYXJlIHVzZWZ1bCBvdmVyIGB1c2VSZWYoKWAgd2hlbiB5b3UgbmVlZCB0byByZXNwb25kIHRvIHRoZSByZWYgYmVpbmcgc2V0XG4gKiBpbnN0ZWFkIG9mIGxhemlseSBhY2Nlc3NpbmcgaXQgaW4gYW4gZWZmZWN0LlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBbZWxlbWVudCwgYXR0YWNoUmVmXSA9IHVzZUNhbGxiYWNrUmVmPEhUTUxEaXZFbGVtZW50PigpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgaWYgKCFlbGVtZW50KSByZXR1cm5cbiAqXG4gKiAgIGNvbnN0IGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihlbGVtZW50KVxuICpcbiAqICAgcmV0dXJuICgpID0+IHtcbiAqICAgICBjYWxlbmRhci5kZXN0cm95KClcbiAqICAgfVxuICogfSwgW2VsZW1lbnRdKVxuICpcbiAqIHJldHVybiA8ZGl2IHJlZj17YXR0YWNoUmVmfSAvPlxuICogYGBgXG4gKlxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYWxsYmFja1JlZigpIHtcbiAgcmV0dXJuIHVzZVN0YXRlKG51bGwpO1xufSIsImltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4vb3duZXJEb2N1bWVudCc7XG4vKipcbiAqIFJldHVybiB0aGUgYWN0aXZlbHkgZm9jdXNlZCBlbGVtZW50IHNhZmVseS5cbiAqXG4gKiBAcGFyYW0gZG9jIHRoZSBkb2N1bWVudCB0byBjaGVjbFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2ZUVsZW1lbnQoZG9jKSB7XG4gIGlmIChkb2MgPT09IHZvaWQgMCkge1xuICAgIGRvYyA9IG93bmVyRG9jdW1lbnQoKTtcbiAgfVxuXG4gIC8vIFN1cHBvcnQ6IElFIDkgb25seVxuICAvLyBJRTkgdGhyb3dzIGFuIFwiVW5zcGVjaWZpZWQgZXJyb3JcIiBhY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBmcm9tIGFuIDxpZnJhbWU+XG4gIHRyeSB7XG4gICAgdmFyIGFjdGl2ZSA9IGRvYy5hY3RpdmVFbGVtZW50OyAvLyBJRTExIHJldHVybnMgYSBzZWVtaW5nbHkgZW1wdHkgb2JqZWN0IGluIHNvbWUgY2FzZXMgd2hlbiBhY2Nlc3NpbmdcbiAgICAvLyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGZyb20gYW4gPGlmcmFtZT5cblxuICAgIGlmICghYWN0aXZlIHx8ICFhY3RpdmUubm9kZU5hbWUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhY3RpdmU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvKiBpZSB0aHJvd3MgaWYgbm8gYWN0aXZlIGVsZW1lbnQgKi9cbiAgICByZXR1cm4gZG9jLmJvZHk7XG4gIH1cbn0iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFJldHVybnMgYSByZWYgdGhhdCBpcyBpbW1lZGlhdGVseSB1cGRhdGVkIHdpdGggdGhlIG5ldyB2YWx1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgUmVmIHZhbHVlXG4gKiBAY2F0ZWdvcnkgcmVmc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVwZGF0ZWRSZWYodmFsdWUpIHtcbiAgdmFyIHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuICByZXR1cm4gdmFsdWVSZWY7XG59IiwiaW1wb3J0IHVzZVVwZGF0ZWRSZWYgZnJvbSAnLi91c2VVcGRhdGVkUmVmJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQXR0YWNoIGEgY2FsbGJhY2sgdGhhdCBmaXJlcyB3aGVuIGEgY29tcG9uZW50IHVubW91bnRzXG4gKlxuICogQHBhcmFtIGZuIEhhbmRsZXIgdG8gcnVuIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xuICogQGNhdGVnb3J5IGVmZmVjdHNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaWxsVW5tb3VudChmbikge1xuICB2YXIgb25Vbm1vdW50ID0gdXNlVXBkYXRlZFJlZihmbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvblVubW91bnQuY3VycmVudCgpO1xuICAgIH07XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn0iLCJpbXBvcnQgaGFzQ2xhc3MgZnJvbSAnLi9oYXNDbGFzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArIFwiIFwiICsgY2xhc3NOYW1lKTtcbn0iLCJmdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NUb1JlbW92ZSArIFwiKD86XFxcXHN8JClcIiwgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICA7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG4gIH1cbn0iLCJpbXBvcnQgY2FuVXNlRE9NIGZyb20gJy4vY2FuVXNlRE9NJztcbnZhciBzaXplO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsYmFyU2l6ZShyZWNhbGMpIHtcbiAgaWYgKCFzaXplICYmIHNpemUgIT09IDAgfHwgcmVjYWxjKSB7XG4gICAgaWYgKGNhblVzZURPTSkge1xuICAgICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gICAgICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gICAgICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgICAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgICBzaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzaXplO1xufSIsImltcG9ydCBpc1dpbmRvdyBmcm9tICdkb20taGVscGVycy9pc1dpbmRvdyc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcblxuZnVuY3Rpb24gaXNCb2R5KG5vZGU6IEVsZW1lbnQpOiBub2RlIGlzIEhUTUxCb2R5RWxlbWVudCB7XG4gIHJldHVybiBub2RlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYm9keSc7XG59XG5cbmZ1bmN0aW9uIGJvZHlJc092ZXJmbG93aW5nKG5vZGU6IEVsZW1lbnQgfCBEb2N1bWVudCB8IFdpbmRvdykge1xuICBjb25zdCBkb2MgPSBpc1dpbmRvdyhub2RlKSA/IG93bmVyRG9jdW1lbnQoKSA6IG93bmVyRG9jdW1lbnQobm9kZSBhcyBFbGVtZW50KTtcbiAgY29uc3Qgd2luID0gaXNXaW5kb3cobm9kZSkgfHwgZG9jLmRlZmF1bHRWaWV3ITtcblxuICByZXR1cm4gZG9jLmJvZHkuY2xpZW50V2lkdGggPCB3aW4uaW5uZXJXaWR0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPdmVyZmxvd2luZyhjb250YWluZXI6IEVsZW1lbnQpIHtcbiAgY29uc3Qgd2luID0gaXNXaW5kb3coY29udGFpbmVyKTtcbiAgcmV0dXJuIHdpbiB8fCBpc0JvZHkoY29udGFpbmVyKVxuICAgID8gYm9keUlzT3ZlcmZsb3dpbmcoY29udGFpbmVyKVxuICAgIDogY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG59XG4iLCJjb25zdCBCTEFDS0xJU1QgPSBbJ3RlbXBsYXRlJywgJ3NjcmlwdCcsICdzdHlsZSddO1xuXG5jb25zdCBpc0hpZGFibGUgPSAoeyBub2RlVHlwZSwgdGFnTmFtZSB9OiBFbGVtZW50KSA9PlxuICBub2RlVHlwZSA9PT0gMSAmJiBCTEFDS0xJU1QuaW5kZXhPZih0YWdOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMTtcblxuY29uc3Qgc2libGluZ3MgPSAoXG4gIGNvbnRhaW5lcjogRWxlbWVudCxcbiAgZXhjbHVkZTogRWxlbWVudFtdLFxuICBjYjogKGVsOiBFbGVtZW50KSA9PiBhbnksXG4pID0+IHtcbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgKG5vZGUpID0+IHtcbiAgICBpZiAoZXhjbHVkZS5pbmRleE9mKG5vZGUpID09PSAtMSAmJiBpc0hpZGFibGUobm9kZSkpIHtcbiAgICAgIGNiKG5vZGUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXJpYUhpZGRlbihoaWRlOiBib29sZWFuLCBub2RlOiBFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICBpZiAoIW5vZGUpIHJldHVybjtcbiAgaWYgKGhpZGUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59XG5cbmludGVyZmFjZSBTaWJsaW5nRXhjbHVzaW9ucyB7XG4gIGRpYWxvZzogRWxlbWVudDtcbiAgYmFja2Ryb3A6IEVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZVNpYmxpbmdzKFxuICBjb250YWluZXI6IEVsZW1lbnQsXG4gIHsgZGlhbG9nLCBiYWNrZHJvcCB9OiBTaWJsaW5nRXhjbHVzaW9ucyxcbikge1xuICBzaWJsaW5ncyhjb250YWluZXIsIFtkaWFsb2csIGJhY2tkcm9wXSwgKG5vZGUpID0+IGFyaWFIaWRkZW4odHJ1ZSwgbm9kZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpYmxpbmdzKFxuICBjb250YWluZXI6IEVsZW1lbnQsXG4gIHsgZGlhbG9nLCBiYWNrZHJvcCB9OiBTaWJsaW5nRXhjbHVzaW9ucyxcbikge1xuICBzaWJsaW5ncyhjb250YWluZXIsIFtkaWFsb2csIGJhY2tkcm9wXSwgKG5vZGUpID0+IGFyaWFIaWRkZW4oZmFsc2UsIG5vZGUpKTtcbn1cbiIsImltcG9ydCBhZGRDbGFzcyBmcm9tICdkb20taGVscGVycy9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IGNzcyBmcm9tICdkb20taGVscGVycy9jc3MnO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnZG9tLWhlbHBlcnMvc2Nyb2xsYmFyU2l6ZSc7XG5cbmltcG9ydCBpc092ZXJmbG93aW5nIGZyb20gJy4vaXNPdmVyZmxvd2luZyc7XG5pbXBvcnQgeyBhcmlhSGlkZGVuLCBoaWRlU2libGluZ3MsIHNob3dTaWJsaW5ncyB9IGZyb20gJy4vbWFuYWdlQXJpYUhpZGRlbic7XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mPFQ+KGFycjogVFtdLCBjYjogKGl0ZW06IFQsIGlkeDogbnVtYmVyKSA9PiBib29sZWFuKSB7XG4gIGxldCBpZHggPSAtMTtcbiAgYXJyLnNvbWUoKGQsIGkpID0+IHtcbiAgICBpZiAoY2IoZCwgaSkpIHtcbiAgICAgIGlkeCA9IGk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGlkeDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEluc3RhbmNlIHtcbiAgZGlhbG9nOiBFbGVtZW50O1xuICBiYWNrZHJvcDogRWxlbWVudDtcbn1cblxuZXhwb3J0IHR5cGUgQ29udGFpbmVyU3RhdGUgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+ICYge1xuICBpc092ZXJmbG93aW5nPzogYm9vbGVhbjtcbiAgc3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+O1xuICBtb2RhbHM6IE1vZGFsSW5zdGFuY2VbXTtcbn07XG4vKipcbiAqIFByb3BlciBzdGF0ZSBtYW5hZ2VtZW50IGZvciBjb250YWluZXJzIGFuZCB0aGUgbW9kYWxzIGluIHRob3NlIGNvbnRhaW5lcnMuXG4gKlxuICogQGludGVybmFsIFVzZWQgYnkgdGhlIE1vZGFsIHRvIGVuc3VyZSBwcm9wZXIgc3R5bGluZyBvZiBjb250YWluZXJzLlxuICovXG5jbGFzcyBNb2RhbE1hbmFnZXIge1xuICByZWFkb25seSBoaWRlU2libGluZ05vZGVzOiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93OiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGlzUlRMOiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IG1vZGFsczogTW9kYWxJbnN0YW5jZVtdO1xuXG4gIHJlYWRvbmx5IGNvbnRhaW5lcnM6IEhUTUxFbGVtZW50W107XG5cbiAgcmVhZG9ubHkgZGF0YTogQ29udGFpbmVyU3RhdGVbXTtcblxuICByZWFkb25seSBzY3JvbGxiYXJTaXplOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGhpZGVTaWJsaW5nTm9kZXMgPSB0cnVlLFxuICAgIGhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gdHJ1ZSxcbiAgICBpc1JUTCA9IGZhbHNlLFxuICB9ID0ge30pIHtcbiAgICB0aGlzLmhpZGVTaWJsaW5nTm9kZXMgPSBoaWRlU2libGluZ05vZGVzO1xuICAgIHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cgPSBoYW5kbGVDb250YWluZXJPdmVyZmxvdztcbiAgICB0aGlzLmlzUlRMID0gaXNSVEw7XG4gICAgdGhpcy5tb2RhbHMgPSBbXTtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnNjcm9sbGJhclNpemUgPSBnZXRTY3JvbGxiYXJTaXplKCk7XG4gIH1cblxuICBpc0NvbnRhaW5lck92ZXJmbG93aW5nKG1vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVt0aGlzLmNvbnRhaW5lckluZGV4RnJvbU1vZGFsKG1vZGFsKV07XG4gICAgcmV0dXJuIGRhdGEgPyBkYXRhLm92ZXJmbG93aW5nIDogZmFsc2U7XG4gIH1cblxuICBjb250YWluZXJJbmRleEZyb21Nb2RhbChtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIHJldHVybiBmaW5kSW5kZXhPZih0aGlzLmRhdGEsIChkKSA9PiBkLm1vZGFscy5pbmRleE9mKG1vZGFsKSAhPT0gLTEpO1xuICB9XG5cbiAgc2V0Q29udGFpbmVyU3R5bGUoY29udGFpbmVyU3RhdGU6IENvbnRhaW5lclN0YXRlLCBjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc3R5bGU6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7IG92ZXJmbG93OiAnaGlkZGVuJyB9O1xuXG4gICAgLy8gd2UgYXJlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgYWN0dWFsIGBzdHlsZWAgaGVyZVxuICAgIC8vIGJlY2F1c2Ugd2Ugd2lsbCBvdmVycmlkZSBpdFxuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gdGhpcy5pc1JUTCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcblxuICAgIGNvbnRhaW5lclN0YXRlLnN0eWxlID0ge1xuICAgICAgb3ZlcmZsb3c6IGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyxcbiAgICAgIFtwYWRkaW5nUHJvcF06IGNvbnRhaW5lci5zdHlsZVtwYWRkaW5nUHJvcF0sXG4gICAgfTtcblxuICAgIGlmIChjb250YWluZXJTdGF0ZS5vdmVyZmxvd2luZykge1xuICAgICAgLy8gdXNlIGNvbXB1dGVkIHN0eWxlLCBoZXJlIHRvIGdldCB0aGUgcmVhbCBwYWRkaW5nXG4gICAgICAvLyB0byBhZGQgb3VyIHNjcm9sbGJhciB3aWR0aFxuICAgICAgc3R5bGVbcGFkZGluZ1Byb3BdID0gYCR7XG4gICAgICAgIHBhcnNlSW50KGNzcyhjb250YWluZXIsIHBhZGRpbmdQcm9wKSB8fCAnMCcsIDEwKSArIHRoaXMuc2Nyb2xsYmFyU2l6ZVxuICAgICAgfXB4YDtcbiAgICB9XG5cbiAgICBjc3MoY29udGFpbmVyLCBzdHlsZSBhcyBhbnkpO1xuICB9XG5cbiAgcmVtb3ZlQ29udGFpbmVyU3R5bGUoY29udGFpbmVyU3RhdGU6IENvbnRhaW5lclN0YXRlLCBjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgT2JqZWN0LmFzc2lnbihjb250YWluZXIuc3R5bGUsIGNvbnRhaW5lclN0YXRlLnN0eWxlKTtcbiAgfVxuXG4gIGFkZChtb2RhbDogTW9kYWxJbnN0YW5jZSwgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lPzogc3RyaW5nKSB7XG4gICAgbGV0IG1vZGFsSWR4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG4gICAgY29uc3QgY29udGFpbmVySWR4ID0gdGhpcy5jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKTtcblxuICAgIGlmIChtb2RhbElkeCAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmxlbmd0aDtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcblxuICAgIGlmICh0aGlzLmhpZGVTaWJsaW5nTm9kZXMpIHtcbiAgICAgIGhpZGVTaWJsaW5ncyhjb250YWluZXIsIG1vZGFsKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVySWR4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kYXRhW2NvbnRhaW5lcklkeF0ubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgICAgcmV0dXJuIG1vZGFsSWR4O1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBtb2RhbHM6IFttb2RhbF0sXG4gICAgICAvLyByaWdodCBub3cgb25seSB0aGUgZmlyc3QgbW9kYWwgb2YgYSBjb250YWluZXIgd2lsbCBoYXZlIGl0cyBjbGFzc2VzIGFwcGxpZWRcbiAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pIDogW10sXG4gICAgICBvdmVyZmxvd2luZzogaXNPdmVyZmxvd2luZyhjb250YWluZXIpLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdykge1xuICAgICAgdGhpcy5zZXRDb250YWluZXJTdHlsZShkYXRhLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGRhdGEuY2xhc3Nlcy5mb3JFYWNoKGFkZENsYXNzLmJpbmQobnVsbCwgY29udGFpbmVyKSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuICAgIHRoaXMuZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgcmV0dXJuIG1vZGFsSWR4O1xuICB9XG5cbiAgcmVtb3ZlKG1vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgY29uc3QgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgIGlmIChtb2RhbElkeCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJJZHggPSB0aGlzLmNvbnRhaW5lckluZGV4RnJvbU1vZGFsKG1vZGFsKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW2NvbnRhaW5lcklkeF07XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lcklkeF07XG5cbiAgICBkYXRhLm1vZGFscy5zcGxpY2UoZGF0YS5tb2RhbHMuaW5kZXhPZihtb2RhbCksIDEpO1xuXG4gICAgdGhpcy5tb2RhbHMuc3BsaWNlKG1vZGFsSWR4LCAxKTtcblxuICAgIC8vIGlmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLFxuICAgIC8vIGNsZWFuIHVwIHRoZSBjb250YWluZXJcbiAgICBpZiAoZGF0YS5tb2RhbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLmNsYXNzZXMuZm9yRWFjaChyZW1vdmVDbGFzcy5iaW5kKG51bGwsIGNvbnRhaW5lcikpO1xuXG4gICAgICBpZiAodGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbnRhaW5lclN0eWxlKGRhdGEsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhpZGVTaWJsaW5nTm9kZXMpIHtcbiAgICAgICAgc2hvd1NpYmxpbmdzKGNvbnRhaW5lciwgbW9kYWwpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250YWluZXJzLnNwbGljZShjb250YWluZXJJZHgsIDEpO1xuICAgICAgdGhpcy5kYXRhLnNwbGljZShjb250YWluZXJJZHgsIDEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oaWRlU2libGluZ05vZGVzKSB7XG4gICAgICAvLyBvdGhlcndpc2UgbWFrZSBzdXJlIHRoZSBuZXh0IHRvcCBtb2RhbCBpcyB2aXNpYmxlIHRvIGEgU1JcbiAgICAgIGNvbnN0IHsgYmFja2Ryb3AsIGRpYWxvZyB9ID0gZGF0YS5tb2RhbHNbZGF0YS5tb2RhbHMubGVuZ3RoIC0gMV07XG4gICAgICBhcmlhSGlkZGVuKGZhbHNlLCBkaWFsb2cpO1xuICAgICAgYXJpYUhpZGRlbihmYWxzZSwgYmFja2Ryb3ApO1xuICAgIH1cbiAgfVxuXG4gIGlzVG9wTW9kYWwobW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISF0aGlzLm1vZGFscy5sZW5ndGggJiYgdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XG4iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIERPTUNvbnRhaW5lcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4gPVxuICB8IFRcbiAgfCBSZWFjdC5SZWZPYmplY3Q8VD5cbiAgfCBudWxsXG4gIHwgKCgpID0+IFQgfCBSZWFjdC5SZWZPYmplY3Q8VD4gfCBudWxsKTtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVDb250YWluZXJSZWYgPSA8VCBleHRlbmRzIEhUTUxFbGVtZW50PihcbiAgcmVmOiBET01Db250YWluZXI8VD4gfCB1bmRlZmluZWQsXG4pOiBUIHwgSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgaWYgKHJlZiA9PSBudWxsKSByZXR1cm4gb3duZXJEb2N1bWVudCgpLmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50O1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykgcmVmID0gcmVmKCk7XG5cbiAgaWYgKHJlZiAmJiAnY3VycmVudCcgaW4gcmVmKSByZWYgPSByZWYuY3VycmVudDtcbiAgaWYgKHJlZj8ubm9kZVR5cGUpIHJldHVybiByZWYgfHwgbnVsbDtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdhaXRGb3JET01SZWY8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICByZWY6IERPTUNvbnRhaW5lcjxUPiB8IHVuZGVmaW5lZCxcbiAgb25SZXNvbHZlZD86IChlbGVtZW50OiBUIHwgSFRNTEJvZHlFbGVtZW50KSA9PiB2b2lkLFxuKSB7XG4gIGNvbnN0IFtyZXNvbHZlZFJlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKCgpID0+IHJlc29sdmVDb250YWluZXJSZWYocmVmKSk7XG5cbiAgaWYgKCFyZXNvbHZlZFJlZikge1xuICAgIGNvbnN0IGVhcmx5UmVmID0gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICAgIGlmIChlYXJseVJlZikgc2V0UmVmKGVhcmx5UmVmKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9uUmVzb2x2ZWQgJiYgcmVzb2x2ZWRSZWYpIHtcbiAgICAgIG9uUmVzb2x2ZWQocmVzb2x2ZWRSZWYpO1xuICAgIH1cbiAgfSwgW29uUmVzb2x2ZWQsIHJlc29sdmVkUmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXh0UmVmID0gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICAgIGlmIChuZXh0UmVmICE9PSByZXNvbHZlZFJlZikge1xuICAgICAgc2V0UmVmKG5leHRSZWYpO1xuICAgIH1cbiAgfSwgW3JlZiwgcmVzb2x2ZWRSZWZdKTtcblxuICByZXR1cm4gcmVzb2x2ZWRSZWY7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUsIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuaW1wb3J0IGFjdGl2ZUVsZW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvYWN0aXZlRWxlbWVudCc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnZG9tLWhlbHBlcnMvY29udGFpbnMnO1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICdkb20taGVscGVycy9jYW5Vc2VET00nO1xuaW1wb3J0IGxpc3RlbiBmcm9tICdkb20taGVscGVycy9saXN0ZW4nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICBmb3J3YXJkUmVmLFxuICB1c2VFZmZlY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHVzZU1vdW50ZWQgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlTW91bnRlZCc7XG5pbXBvcnQgdXNlV2lsbFVubW91bnQgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlV2lsbFVubW91bnQnO1xuXG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlUHJldmlvdXMnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gJy4vTW9kYWxNYW5hZ2VyJztcbmltcG9ydCB1c2VXYWl0Rm9yRE9NUmVmLCB7IERPTUNvbnRhaW5lciB9IGZyb20gJy4vdXNlV2FpdEZvckRPTVJlZic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ2FsbGJhY2tzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBtYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG5cbmV4cG9ydCB0eXBlIE1vZGFsVHJhbnNpdGlvbkNvbXBvbmVudCA9IFJlYWN0LkNvbXBvbmVudFR5cGU8XG4gIHtcbiAgICBpbjogYm9vbGVhbjtcbiAgICBhcHBlYXI/OiBib29sZWFuO1xuICAgIHVubW91bnRPbkV4aXQ/OiBib29sZWFuO1xuICB9ICYgVHJhbnNpdGlvbkNhbGxiYWNrc1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJNb2RhbERpYWxvZ1Byb3BzIHtcbiAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB1bmRlZmluZWQ7XG4gIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0YWJJbmRleDogbnVtYmVyO1xuICByb2xlOiBzdHJpbmc7XG4gIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8RWxlbWVudD47XG4gICdhcmlhLW1vZGFsJzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJNb2RhbEJhY2tkcm9wUHJvcHMge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEVsZW1lbnQ+O1xuICBvbkNsaWNrOiAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkO1xufVxuXG4vKlxuICBNb2RhbCBwcm9wcyBhcmUgc3BsaXQgaW50byBhIHZlcnNpb24gd2l0aCBhbmQgd2l0aG91dCBpbmRleCBzaWduYXR1cmUgc28gdGhhdCB5b3UgY2FuIGZ1bGx5IHVzZSB0aGVtIGluIGFub3RoZXIgcHJvamVjdHNcbiAgVGhpcyBpcyBkdWUgdG8gVHlwZXNjcmlwdCBub3QgcGxheWluZyB3ZWxsIHdpdGggaW5kZXggc2luZ2F0dXJlcyBlLmcuIHdoZW4gdXNpbmcgT21pdFxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZU1vZGFsUHJvcHMgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHJvbGU/OiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIHNob3c/OiBib29sZWFuO1xuICBjb250YWluZXI/OiBET01Db250YWluZXI7XG4gIG9uU2hvdz86ICgpID0+IHZvaWQ7XG4gIG9uSGlkZT86ICgpID0+IHZvaWQ7XG4gIG1hbmFnZXI/OiBNb2RhbE1hbmFnZXI7XG4gIGJhY2tkcm9wPzogdHJ1ZSB8IGZhbHNlIHwgJ3N0YXRpYyc7XG5cbiAgcmVuZGVyRGlhbG9nPzogKHByb3BzOiBSZW5kZXJNb2RhbERpYWxvZ1Byb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG4gIHJlbmRlckJhY2tkcm9wPzogKHByb3BzOiBSZW5kZXJNb2RhbEJhY2tkcm9wUHJvcHMpID0+IFJlYWN0LlJlYWN0Tm9kZTtcblxuICBvbkVzY2FwZUtleURvd24/OiAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcbiAgb25CYWNrZHJvcENsaWNrPzogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkO1xuICBjb250YWluZXJDbGFzc05hbWU/OiBzdHJpbmc7XG4gIGtleWJvYXJkPzogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbj86IE1vZGFsVHJhbnNpdGlvbkNvbXBvbmVudDtcbiAgYmFja2Ryb3BUcmFuc2l0aW9uPzogTW9kYWxUcmFuc2l0aW9uQ29tcG9uZW50O1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xuICBlbmZvcmNlRm9jdXM/OiBib29sZWFuO1xuICByZXN0b3JlRm9jdXM/OiBib29sZWFuO1xuICByZXN0b3JlRm9jdXNPcHRpb25zPzoge1xuICAgIHByZXZlbnRTY3JvbGw6IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcm9wcyBleHRlbmRzIEJhc2VNb2RhbFByb3BzIHtcbiAgW290aGVyOiBzdHJpbmddOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGdldE1hbmFnZXIoKSB7XG4gIGlmICghbWFuYWdlcikgbWFuYWdlciA9IG5ldyBNb2RhbE1hbmFnZXIoKTtcbiAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmZ1bmN0aW9uIHVzZU1vZGFsTWFuYWdlcihwcm92aWRlZD86IE1vZGFsTWFuYWdlcikge1xuICBjb25zdCBtb2RhbE1hbmFnZXIgPSBwcm92aWRlZCB8fCBnZXRNYW5hZ2VyKCk7XG5cbiAgY29uc3QgbW9kYWwgPSB1c2VSZWYoe1xuICAgIGRpYWxvZzogKG51bGwgYXMgYW55KSBhcyBIVE1MRWxlbWVudCxcbiAgICBiYWNrZHJvcDogKG51bGwgYXMgYW55KSBhcyBIVE1MRWxlbWVudCxcbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obW9kYWwuY3VycmVudCwge1xuICAgIGFkZDogKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZT86IHN0cmluZykgPT5cbiAgICAgIG1vZGFsTWFuYWdlci5hZGQobW9kYWwuY3VycmVudCwgY29udGFpbmVyLCBjbGFzc05hbWUpLFxuXG4gICAgcmVtb3ZlOiAoKSA9PiBtb2RhbE1hbmFnZXIucmVtb3ZlKG1vZGFsLmN1cnJlbnQpLFxuXG4gICAgaXNUb3BNb2RhbDogKCkgPT4gbW9kYWxNYW5hZ2VyLmlzVG9wTW9kYWwobW9kYWwuY3VycmVudCksXG5cbiAgICBzZXREaWFsb2dSZWY6IHVzZUNhbGxiYWNrKChyZWY6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgbW9kYWwuY3VycmVudC5kaWFsb2cgPSByZWYhO1xuICAgIH0sIFtdKSxcblxuICAgIHNldEJhY2tkcm9wUmVmOiB1c2VDYWxsYmFjaygocmVmOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgIG1vZGFsLmN1cnJlbnQuYmFja2Ryb3AgPSByZWYhO1xuICAgIH0sIFtdKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIYW5kbGUge1xuICBkaWFsb2c6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgYmFja2Ryb3A6IEhUTUxFbGVtZW50IHwgbnVsbDtcbn1cblxuY29uc3QgTW9kYWw6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIE1vZGFsUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPE1vZGFsSGFuZGxlPlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBzaG93ID0gZmFsc2UsXG4gICAgICByb2xlID0gJ2RpYWxvZycsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYmFja2Ryb3AgPSB0cnVlLFxuICAgICAga2V5Ym9hcmQgPSB0cnVlLFxuICAgICAgb25CYWNrZHJvcENsaWNrLFxuICAgICAgb25Fc2NhcGVLZXlEb3duLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbixcbiAgICAgIGF1dG9Gb2N1cyA9IHRydWUsXG4gICAgICBlbmZvcmNlRm9jdXMgPSB0cnVlLFxuICAgICAgcmVzdG9yZUZvY3VzID0gdHJ1ZSxcbiAgICAgIHJlc3RvcmVGb2N1c09wdGlvbnMsXG4gICAgICByZW5kZXJEaWFsb2csXG4gICAgICByZW5kZXJCYWNrZHJvcCA9IChwcm9wczogUmVuZGVyTW9kYWxCYWNrZHJvcFByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc30gLz4sXG4gICAgICBtYW5hZ2VyOiBwcm92aWRlZE1hbmFnZXIsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lclJlZixcbiAgICAgIGNvbnRhaW5lckNsYXNzTmFtZSxcbiAgICAgIG9uU2hvdyxcbiAgICAgIG9uSGlkZSA9ICgpID0+IHt9LFxuXG4gICAgICBvbkV4aXQsXG4gICAgICBvbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyxcbiAgICAgIG9uRW50ZXIsXG4gICAgICBvbkVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkLFxuXG4gICAgICAuLi5yZXN0XG4gICAgfTogTW9kYWxQcm9wcyxcbiAgICByZWY6IFJlYWN0LlJlZjxNb2RhbEhhbmRsZT4sXG4gICkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHVzZVdhaXRGb3JET01SZWYoY29udGFpbmVyUmVmKTtcbiAgICBjb25zdCBtb2RhbCA9IHVzZU1vZGFsTWFuYWdlcihwcm92aWRlZE1hbmFnZXIpO1xuXG4gICAgY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpO1xuICAgIGNvbnN0IHByZXZTaG93ID0gdXNlUHJldmlvdXMoc2hvdyk7XG4gICAgY29uc3QgW2V4aXRlZCwgc2V0RXhpdGVkXSA9IHVzZVN0YXRlKCFzaG93KTtcbiAgICBjb25zdCBsYXN0Rm9jdXNSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiBtb2RhbCwgW21vZGFsXSk7XG5cbiAgICBpZiAoY2FuVXNlRE9NICYmICFwcmV2U2hvdyAmJiBzaG93KSB7XG4gICAgICBsYXN0Rm9jdXNSZWYuY3VycmVudCA9IGFjdGl2ZUVsZW1lbnQoKSBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoIXRyYW5zaXRpb24gJiYgIXNob3cgJiYgIWV4aXRlZCkge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoc2hvdyAmJiBleGl0ZWQpIHtcbiAgICAgIHNldEV4aXRlZChmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9IHVzZUV2ZW50Q2FsbGJhY2soKCkgPT4ge1xuICAgICAgbW9kYWwuYWRkKGNvbnRhaW5lciEsIGNvbnRhaW5lckNsYXNzTmFtZSk7XG5cbiAgICAgIHJlbW92ZUtleWRvd25MaXN0ZW5lclJlZi5jdXJyZW50ID0gbGlzdGVuKFxuICAgICAgICBkb2N1bWVudCBhcyBhbnksXG4gICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgaGFuZGxlRG9jdW1lbnRLZXlEb3duLFxuICAgICAgKTtcblxuICAgICAgcmVtb3ZlRm9jdXNMaXN0ZW5lclJlZi5jdXJyZW50ID0gbGlzdGVuKFxuICAgICAgICBkb2N1bWVudCBhcyBhbnksXG4gICAgICAgICdmb2N1cycsXG4gICAgICAgIC8vIHRoZSB0aW1lb3V0IGlzIG5lY2Vzc2FyeSBiL2MgdGhpcyB3aWxsIHJ1biBiZWZvcmUgdGhlIG5ldyBtb2RhbCBpcyBtb3VudGVkXG4gICAgICAgIC8vIGFuZCBzbyBzdGVhbHMgZm9jdXMgZnJvbSBpdFxuICAgICAgICAoKSA9PiBzZXRUaW1lb3V0KGhhbmRsZUVuZm9yY2VGb2N1cyksXG4gICAgICAgIHRydWUsXG4gICAgICApO1xuXG4gICAgICBpZiAob25TaG93KSB7XG4gICAgICAgIG9uU2hvdygpO1xuICAgICAgfVxuXG4gICAgICAvLyBhdXRvZm9jdXMgYWZ0ZXIgb25TaG93IHRvIG5vdCB0cmlnZ2VyIGEgZm9jdXMgZXZlbnQgZm9yIHByZXZpb3VzXG4gICAgICAvLyBtb2RhbHMgYmVmb3JlIHRoaXMgb25lIGlzIHNob3duLlxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQoZG9jdW1lbnQpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2RhbC5kaWFsb2cgJiZcbiAgICAgICAgICBjdXJyZW50QWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICFjb250YWlucyhtb2RhbC5kaWFsb2csIGN1cnJlbnRBY3RpdmVFbGVtZW50KVxuICAgICAgICApIHtcbiAgICAgICAgICBsYXN0Rm9jdXNSZWYuY3VycmVudCA9IGN1cnJlbnRBY3RpdmVFbGVtZW50O1xuICAgICAgICAgIG1vZGFsLmRpYWxvZy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVIaWRlID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcblxuICAgICAgcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmLmN1cnJlbnQ/LigpO1xuICAgICAgcmVtb3ZlRm9jdXNMaXN0ZW5lclJlZi5jdXJyZW50Py4oKTtcblxuICAgICAgaWYgKHJlc3RvcmVGb2N1cykge1xuICAgICAgICAvLyBTdXBwb3J0OiA8PUlFMTEgZG9lc24ndCBzdXBwb3J0IGBmb2N1cygpYCBvbiBzdmcgZWxlbWVudHMgKFJCOiAjOTE3KVxuICAgICAgICBsYXN0Rm9jdXNSZWYuY3VycmVudD8uZm9jdXM/LihyZXN0b3JlRm9jdXNPcHRpb25zKTtcbiAgICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVE9ETzogdHJ5IGFuZCBjb21iaW5lIHRoZXNlIGVmZmVjdHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3Qtb3ZlcmxheXMvcHVsbC83OTQjZGlzY3Vzc2lvbl9yNDA5OTU0MTIwXG5cbiAgICAvLyBTaG93IGxvZ2ljIHdoZW46XG4gICAgLy8gIC0gc2hvdyBpcyBgdHJ1ZWAgX2FuZF8gYGNvbnRhaW5lcmAgaGFzIHJlc29sdmVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghc2hvdyB8fCAhY29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgIGhhbmRsZVNob3coKTtcbiAgICB9LCBbc2hvdywgY29udGFpbmVyLCAvKiBzaG91bGQgbmV2ZXIgY2hhbmdlOiAqLyBoYW5kbGVTaG93XSk7XG5cbiAgICAvLyBIaWRlIGNsZWFudXAgbG9naWMgd2hlbjpcbiAgICAvLyAgLSBgZXhpdGVkYCBzd2l0Y2hlcyB0byB0cnVlXG4gICAgLy8gIC0gY29tcG9uZW50IHVubW91bnRzO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIWV4aXRlZCkgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVIaWRlKCk7XG4gICAgfSwgW2V4aXRlZCwgaGFuZGxlSGlkZV0pO1xuXG4gICAgdXNlV2lsbFVubW91bnQoKCkgPT4ge1xuICAgICAgaGFuZGxlSGlkZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0IGhhbmRsZUVuZm9yY2VGb2N1cyA9IHVzZUV2ZW50Q2FsbGJhY2soKCkgPT4ge1xuICAgICAgaWYgKCFlbmZvcmNlRm9jdXMgfHwgIWlzTW91bnRlZCgpIHx8ICFtb2RhbC5pc1RvcE1vZGFsKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50QWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQoKTtcblxuICAgICAgaWYgKFxuICAgICAgICBtb2RhbC5kaWFsb2cgJiZcbiAgICAgICAgY3VycmVudEFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgIWNvbnRhaW5zKG1vZGFsLmRpYWxvZywgY3VycmVudEFjdGl2ZUVsZW1lbnQpXG4gICAgICApIHtcbiAgICAgICAgbW9kYWwuZGlhbG9nLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gdXNlRXZlbnRDYWxsYmFjaygoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb25CYWNrZHJvcENsaWNrPy4oZSk7XG5cbiAgICAgIGlmIChiYWNrZHJvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBvbkhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZURvY3VtZW50S2V5RG93biA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXlib2FyZCAmJiBlLmtleUNvZGUgPT09IDI3ICYmIG1vZGFsLmlzVG9wTW9kYWwoKSkge1xuICAgICAgICBvbkVzY2FwZUtleURvd24/LihlKTtcblxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIG9uSGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW1vdmVGb2N1c0xpc3RlbmVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGxpc3Rlbj4gfCBudWxsPigpO1xuICAgIGNvbnN0IHJlbW92ZUtleWRvd25MaXN0ZW5lclJlZiA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBsaXN0ZW4+IHwgbnVsbD4oKTtcblxuICAgIGNvbnN0IGhhbmRsZUhpZGRlbjogVHJhbnNpdGlvbkNhbGxiYWNrc1snb25FeGl0ZWQnXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBzZXRFeGl0ZWQodHJ1ZSk7XG4gICAgICBvbkV4aXRlZD8uKC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBUcmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICBpZiAoIWNvbnRhaW5lciB8fCAhKHNob3cgfHwgKFRyYW5zaXRpb24gJiYgIWV4aXRlZCkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkaWFsb2dQcm9wcyA9IHtcbiAgICAgIHJvbGUsXG4gICAgICByZWY6IG1vZGFsLnNldERpYWxvZ1JlZixcbiAgICAgIC8vIGFwcGFyZW50bHkgb25seSB3b3JrcyBvbiB0aGUgZGlhbG9nIHJvbGUgZWxlbWVudFxuICAgICAgJ2FyaWEtbW9kYWwnOiByb2xlID09PSAnZGlhbG9nJyA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICAuLi5yZXN0LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB0YWJJbmRleDogLTEsXG4gICAgfTtcblxuICAgIGxldCBkaWFsb2cgPSByZW5kZXJEaWFsb2cgPyAoXG4gICAgICByZW5kZXJEaWFsb2coZGlhbG9nUHJvcHMpXG4gICAgKSA6IChcbiAgICAgIDxkaXYgey4uLmRpYWxvZ1Byb3BzfT5cbiAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiEsIHsgcm9sZTogJ2RvY3VtZW50JyB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAoVHJhbnNpdGlvbikge1xuICAgICAgZGlhbG9nID0gKFxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGFwcGVhclxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICBpbj17ISFzaG93fVxuICAgICAgICAgIG9uRXhpdD17b25FeGl0fVxuICAgICAgICAgIG9uRXhpdGluZz17b25FeGl0aW5nfVxuICAgICAgICAgIG9uRXhpdGVkPXtoYW5kbGVIaWRkZW59XG4gICAgICAgICAgb25FbnRlcj17b25FbnRlcn1cbiAgICAgICAgICBvbkVudGVyaW5nPXtvbkVudGVyaW5nfVxuICAgICAgICAgIG9uRW50ZXJlZD17b25FbnRlcmVkfVxuICAgICAgICA+XG4gICAgICAgICAge2RpYWxvZ31cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcbiAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgIGNvbnN0IEJhY2tkcm9wVHJhbnNpdGlvbiA9IGJhY2tkcm9wVHJhbnNpdGlvbjtcblxuICAgICAgYmFja2Ryb3BFbGVtZW50ID0gcmVuZGVyQmFja2Ryb3Aoe1xuICAgICAgICByZWY6IG1vZGFsLnNldEJhY2tkcm9wUmVmLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChCYWNrZHJvcFRyYW5zaXRpb24pIHtcbiAgICAgICAgYmFja2Ryb3BFbGVtZW50ID0gKFxuICAgICAgICAgIDxCYWNrZHJvcFRyYW5zaXRpb24gYXBwZWFyIGluPXshIXNob3d9PlxuICAgICAgICAgICAge2JhY2tkcm9wRWxlbWVudH1cbiAgICAgICAgICA8L0JhY2tkcm9wVHJhbnNpdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2JhY2tkcm9wRWxlbWVudH1cbiAgICAgICAgICAgIHtkaWFsb2d9XG4gICAgICAgICAgPC8+LFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH0sXG4pO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIE1vZGFsXG4gICAqL1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBET00gZWxlbWVudCwgYSBgcmVmYCB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgTW9kYWwgaXMgYXBwZW5kZWQgdG8gaXQncyBgY29udGFpbmVyYCBlbGVtZW50LlxuICAgKlxuICAgKiBGb3IgdGhlIHNha2Ugb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgdGhlIGNvbnRhaW5lciBzaG91bGQgdXN1YWxseSBiZSB0aGUgZG9jdW1lbnQgYm9keSwgc28gdGhhdCB0aGUgcmVzdCBvZiB0aGVcbiAgICogcGFnZSBjb250ZW50IGNhbiBiZSBwbGFjZWQgYmVoaW5kIGEgdmlydHVhbCBiYWNrZHJvcCBhcyB3ZWxsIGFzIGEgdmlzdWFsIG9uZS5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNb2RhbCBpcyBvcGVuaW5nLlxuICAgKi9cbiAgb25TaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGVpdGhlciB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZCwgb3IgdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogVGhlIGBvbkhpZGVgIGNhbGxiYWNrIG9ubHkgc2lnbmFscyBpbnRlbnQgZnJvbSB0aGUgTW9kYWwsXG4gICAqIHlvdSBtdXN0IGFjdHVhbGx5IHNldCB0aGUgYHNob3dgIHByb3AgdG8gYGZhbHNlYCBmb3IgdGhlIE1vZGFsIHRvIGNsb3NlLlxuICAgKi9cbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW5jbHVkZSBhIGJhY2tkcm9wIGNvbXBvbmVudC5cbiAgICovXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXSksXG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkaWFsb2cgY29tcG9uZW50LiBVc2VmdWwgZm9yIGN1c3RvbVxuICAgKiByZW5kZXJpbmcuICoqTm90ZToqKiB0aGUgY29tcG9uZW50IHNob3VsZCBtYWtlIHN1cmUgdG8gYXBwbHkgdGhlIHByb3ZpZGVkIHJlZi5cbiAgICpcbiAgICogYGBganMgc3RhdGljXG4gICAqIHJlbmRlckRpYWxvZz17cHJvcHMgPT4gPE15RGlhbG9nIHsuLi5wcm9wc30gLz59XG4gICAqIGBgYFxuICAgKi9cbiAgcmVuZGVyRGlhbG9nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBiYWNrZHJvcCBjb21wb25lbnQuIFVzZWZ1bCBmb3IgY3VzdG9tXG4gICAqIGJhY2tkcm9wIHJlbmRlcmluZy5cbiAgICpcbiAgICogYGBganNcbiAgICogIHJlbmRlckJhY2tkcm9wPXtwcm9wcyA9PiA8TXlCYWNrZHJvcCB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckJhY2tkcm9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBlc2NhcGUga2V5LCBpZiBzcGVjaWZpZWQgaW4gYGtleWJvYXJkYCwgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogSWYgcHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGtleWJvYXJkIGV2ZW50LCBjbG9zaW5nIHRoZSBtb2RhbCB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AsIGlmIHNwZWNpZmllZCwgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY3NzIGNsYXNzIG9yIHNldCBvZiBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGNvbnRhaW5lciB3aGVuIHRoZSBtb2RhbCBpcyBvcGVuLFxuICAgKiBhbmQgcmVtb3ZlZCB3aGVuIGl0IGlzIGNsb3NlZC5cbiAgICovXG4gIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBAMi4wLjBgIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQgdXNlZFxuICAgKiB0byBjb250cm9sIGFuaW1hdGlvbnMgZm9yIHRoZSBkaWFsb2cgY29tcG9uZW50LlxuICAgKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwQDIuMC4wYCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50IHVzZWRcbiAgICogdG8gY29udHJvbCBhbmltYXRpb25zIGZvciB0aGUgYmFja2Ryb3AgY29tcG9uZW50cy5cbiAgICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmRcbiAgICogcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuIFRoaXMgYWxzb1xuICAgKiB3b3JrcyBjb3JyZWN0bHkgd2l0aCBhbnkgTW9kYWwgY2hpbGRyZW4gdGhhdCBoYXZlIHRoZSBgYXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIE1vZGFsIHdoaWxlIG9wZW4uXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYGZhbHNlYCBhcyBpdCBtYWtlcyB0aGUgTW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBlbmZvcmNlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogbW9kYWwgaXMgaGlkZGVuXG4gICAqL1xuICByZXN0b3JlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPcHRpb25zIHBhc3NlZCB0byBmb2N1cyBmdW5jdGlvbiB3aGVuIGByZXN0b3JlRm9jdXNgIGlzIHNldCB0byBgdHJ1ZWBcbiAgICpcbiAgICogQGxpbmsgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9mb2N1cyNQYXJhbWV0ZXJzXG4gICAqL1xuICByZXN0b3JlRm9jdXNPcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHByZXZlbnRTY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICB9KSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNb2RhbCB0cmFuc2l0aW9ucyBpblxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFzIHRoZSBNb2RhbCBiZWdpbnMgdG8gdHJhbnNpdGlvbiBpblxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBNb2RhbCBmaW5pc2hlcyB0cmFuc2l0aW9uaW5nIGluXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCByaWdodCBiZWZvcmUgdGhlIE1vZGFsIHRyYW5zaXRpb25zIG91dFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE1vZGFsIGJlZ2lucyB0byB0cmFuc2l0aW9uIG91dFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIE1vZGFsIGZpbmlzaGVzIHRyYW5zaXRpb25pbmcgb3V0XG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgTW9kYWxNYW5hZ2VyIGluc3RhbmNlIHVzZWQgdG8gdHJhY2sgYW5kIG1hbmFnZSB0aGUgc3RhdGUgb2Ygb3BlblxuICAgKiBNb2RhbHMuIFVzZWZ1bCB3aGVuIGN1c3RvbWl6aW5nIGhvdyBtb2RhbHMgaW50ZXJhY3Qgd2l0aGluIGEgY29udGFpbmVyXG4gICAqL1xuICBtYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNb2RhbE1hbmFnZXIpLFxufTtcblxuTW9kYWwuZGlzcGxheU5hbWUgPSAnTW9kYWwnO1xuTW9kYWwucHJvcFR5cGVzID0gcHJvcFR5cGVzIGFzIGFueTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihNb2RhbCwge1xuICBNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsXG59KTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbnZhciB0b0ZuUmVmID0gZnVuY3Rpb24gdG9GblJlZihyZWYpIHtcbiAgcmV0dXJuICFyZWYgfHwgdHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJyA/IHJlZiA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWZzKHJlZkEsIHJlZkIpIHtcbiAgdmFyIGEgPSB0b0ZuUmVmKHJlZkEpO1xuICB2YXIgYiA9IHRvRm5SZWYocmVmQik7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoYSkgYSh2YWx1ZSk7XG4gICAgaWYgKGIpIGIodmFsdWUpO1xuICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybnMgYSBzaW5nbGUgY2FsbGJhY2sgcmVmIGNvbXBvc2VkIGZyb20gdHdvIG90aGVyIFJlZnMuXG4gKlxuICogYGBgdHN4XG4gKiBjb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCk7XG4gKiAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnMocmVmLCBhdHRhY2hSZWYpO1xuICpcbiAqICAgcmV0dXJuIDxidXR0b24gcmVmPXttZXJnZWRSZWZ9IHsuLi5wcm9wc30vPlxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSByZWZBIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBwYXJhbSByZWZCIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcyhyZWZBLCByZWZCKSB7XG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWVyZ2VSZWZzKHJlZkEsIHJlZkIpO1xuICB9LCBbcmVmQSwgcmVmQl0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNZXJnZWRSZWZzOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICdAcmVzdGFydC9ob29rcy91c2VDYWxsYmFja1JlZic7XG5pbXBvcnQgdXNlTWVyZ2VkUmVmcyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VNZXJnZWRSZWZzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVBvcHBlciwge1xuICBPZmZzZXQsXG4gIFBsYWNlbWVudCxcbiAgU3RhdGUsXG4gIFVzZVBvcHBlck9wdGlvbnMsXG59IGZyb20gJy4vdXNlUG9wcGVyJztcbmltcG9ydCB1c2VSb290Q2xvc2UsIHsgUm9vdENsb3NlT3B0aW9ucyB9IGZyb20gJy4vdXNlUm9vdENsb3NlJztcbmltcG9ydCB1c2VXYWl0Rm9yRE9NUmVmLCB7IERPTUNvbnRhaW5lciB9IGZyb20gJy4vdXNlV2FpdEZvckRPTVJlZic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ2FsbGJhY2tzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyBmcm9tICcuL21lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcnO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJy4vcG9wcGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5UHJvcHMgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzIHtcbiAgZmxpcD86IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbiAgb2Zmc2V0PzogT2Zmc2V0O1xuICBjb250YWluZXJQYWRkaW5nPzogbnVtYmVyO1xuICBwb3BwZXJDb25maWc/OiBPbWl0PFVzZVBvcHBlck9wdGlvbnMsICdwbGFjZW1lbnQnPjtcbiAgY29udGFpbmVyPzogRE9NQ29udGFpbmVyO1xuICB0YXJnZXQ6IERPTUNvbnRhaW5lcjtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRyYW5zaXRpb24/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxuICAgIHsgaW4/OiBib29sZWFuOyBhcHBlYXI/OiBib29sZWFuIH0gJiBUcmFuc2l0aW9uQ2FsbGJhY2tzXG4gID47XG4gIG9uSGlkZT86IChlOiBFdmVudCkgPT4gdm9pZDtcbiAgcm9vdENsb3NlPzogYm9vbGVhbjtcbiAgcm9vdENsb3NlRGlzYWJsZWQ/OiBib29sZWFuO1xuICByb290Q2xvc2VFdmVudD86IFJvb3RDbG9zZU9wdGlvbnNbJ2NsaWNrVHJpZ2dlciddO1xuICBjaGlsZHJlbjogKHZhbHVlOiB7XG4gICAgc2hvdzogYm9vbGVhbjtcbiAgICBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgICB1cGRhdGU6ICgpID0+IHZvaWQ7XG4gICAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQ7XG4gICAgc3RhdGU/OiBTdGF0ZTtcbiAgICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiAmIHtcbiAgICAgIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+O1xuICAgICAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gICAgICAnYXJpYS1sYWJlbGxlZGJ5Jz86IHN0cmluZztcbiAgICB9O1xuICAgIGFycm93UHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gJiB7XG4gICAgICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgICAgIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAgIH07XG4gIH0pID0+IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuLyoqXG4gKiBCdWlsdCBvbiB0b3Agb2YgYFBvcHBlci5qc2AsIHRoZSBvdmVybGF5IGNvbXBvbmVudCBpc1xuICogZ3JlYXQgZm9yIGN1c3RvbSB0b29sdGlwIG92ZXJsYXlzLlxuICovXG5jb25zdCBPdmVybGF5ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgT3ZlcmxheVByb3BzPihcbiAgKHByb3BzLCBvdXRlclJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGZsaXAsXG4gICAgICBvZmZzZXQsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBjb250YWluZXJQYWRkaW5nID0gNSxcbiAgICAgIHBvcHBlckNvbmZpZyA9IHt9LFxuICAgICAgdHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBbcm9vdEVsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRWxlbWVudD4oKTtcbiAgICBjb25zdCBbYXJyb3dFbGVtZW50LCBhdHRhY2hBcnJvd1JlZl0gPSB1c2VDYWxsYmFja1JlZjxFbGVtZW50PigpO1xuICAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnM8SFRNTEVsZW1lbnQgfCBudWxsPihhdHRhY2hSZWYsIG91dGVyUmVmKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHVzZVdhaXRGb3JET01SZWYocHJvcHMuY29udGFpbmVyKTtcbiAgICBjb25zdCB0YXJnZXQgPSB1c2VXYWl0Rm9yRE9NUmVmKHByb3BzLnRhcmdldCk7XG5cbiAgICBjb25zdCBbZXhpdGVkLCBzZXRFeGl0ZWRdID0gdXNlU3RhdGUoIXByb3BzLnNob3cpO1xuXG4gICAgY29uc3QgeyBzdHlsZXMsIGF0dHJpYnV0ZXMsIC4uLnBvcHBlciB9ID0gdXNlUG9wcGVyKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcm9vdEVsZW1lbnQsXG4gICAgICBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnKHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBlbmFibGVFdmVudHM6ICEhcHJvcHMuc2hvdyxcbiAgICAgICAgY29udGFpbmVyUGFkZGluZzogY29udGFpbmVyUGFkZGluZyB8fCA1LFxuICAgICAgICBmbGlwLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFycm93RWxlbWVudCxcbiAgICAgICAgcG9wcGVyQ29uZmlnLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIGlmIChwcm9wcy5zaG93KSB7XG4gICAgICBpZiAoZXhpdGVkKSBzZXRFeGl0ZWQoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIXByb3BzLnRyYW5zaXRpb24gJiYgIWV4aXRlZCkge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUhpZGRlbjogVHJhbnNpdGlvbkNhbGxiYWNrc1snb25FeGl0ZWQnXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBzZXRFeGl0ZWQodHJ1ZSk7XG5cbiAgICAgIGlmIChwcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBwcm9wcy5vbkV4aXRlZCguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRG9uJ3QgdW4tcmVuZGVyIHRoZSBvdmVybGF5IHdoaWxlIGl0J3MgdHJhbnNpdGlvbmluZyBvdXQuXG4gICAgY29uc3QgbW91bnRPdmVybGF5ID0gcHJvcHMuc2hvdyB8fCAoVHJhbnNpdGlvbiAmJiAhZXhpdGVkKTtcblxuICAgIHVzZVJvb3RDbG9zZShyb290RWxlbWVudCwgcHJvcHMub25IaWRlISwge1xuICAgICAgZGlzYWJsZWQ6ICFwcm9wcy5yb290Q2xvc2UgfHwgcHJvcHMucm9vdENsb3NlRGlzYWJsZWQsXG4gICAgICBjbGlja1RyaWdnZXI6IHByb3BzLnJvb3RDbG9zZUV2ZW50LFxuICAgIH0pO1xuXG4gICAgaWYgKCFtb3VudE92ZXJsYXkpIHtcbiAgICAgIC8vIERvbid0IGJvdGhlciBzaG93aW5nIGFueXRoaW5nIGlmIHdlIGRvbid0IGhhdmUgdG8uXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbih7XG4gICAgICAuLi5wb3BwZXIsXG4gICAgICBzaG93OiAhIXByb3BzLnNob3csXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICAgICAgc3R5bGU6IHN0eWxlcy5wb3BwZXIgYXMgYW55LFxuICAgICAgICByZWY6IG1lcmdlZFJlZixcbiAgICAgIH0sXG4gICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgIC4uLmF0dHJpYnV0ZXMuYXJyb3csXG4gICAgICAgIHN0eWxlOiBzdHlsZXMuYXJyb3cgYXMgYW55LFxuICAgICAgICByZWY6IGF0dGFjaEFycm93UmVmLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChUcmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB7IG9uRXhpdCwgb25FeGl0aW5nLCBvbkVudGVyLCBvbkVudGVyaW5nLCBvbkVudGVyZWQgfSA9IHByb3BzO1xuXG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBpbj17cHJvcHMuc2hvd31cbiAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICBvbkV4aXQ9e29uRXhpdH1cbiAgICAgICAgICBvbkV4aXRpbmc9e29uRXhpdGluZ31cbiAgICAgICAgICBvbkV4aXRlZD17aGFuZGxlSGlkZGVufVxuICAgICAgICAgIG9uRW50ZXI9e29uRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyID8gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkLCBjb250YWluZXIpIDogbnVsbDtcbiAgfSxcbik7XG5cbk92ZXJsYXkuZGlzcGxheU5hbWUgPSAnT3ZlcmxheSc7XG5cbk92ZXJsYXkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBPdmVybGF5XG4gICAqL1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogU3BlY2lmeSB3aGVyZSB0aGUgb3ZlcmxheSBlbGVtZW50IGlzIHBvc2l0aW9uZWQgaW4gcmVsYXRpb24gdG8gdGhlIHRhcmdldCBlbGVtZW50ICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKHBsYWNlbWVudHMpLFxuXG4gIC8qKlxuICAgKiBBIERPTSBFbGVtZW50LCBSZWYgdG8gYW4gZWxlbWVudCwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci4gVGhlIGB0YXJnZXRgIGVsZW1lbnQgaXMgd2hlcmVcbiAgICogdGhlIG92ZXJsYXkgaXMgcG9zaXRpb25lZCByZWxhdGl2ZSB0by5cbiAgICovXG4gIHRhcmdldDogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBET00gRWxlbWVudCwgUmVmIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIFBvcnRhbCBjaGlsZHJlblxuICAgKiBhcHBlbmRlZCB0byBpdC5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgUG9wcGVyLmpzIGBmbGlwYCBtb2RpZmllciwgYWxsb3dpbmcgdGhlIE92ZXJsYXkgdG9cbiAgICogYXV0b21hdGljYWxseSBhZGp1c3QgaXQncyBwbGFjZW1lbnQgaW4gY2FzZSBvZiBvdmVybGFwIHdpdGggdGhlIHZpZXdwb3J0IG9yIHRvZ2dsZS5cbiAgICogUmVmZXIgdG8gdGhlIFtmbGlwIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9wb3BwZXItZG9jdW1lbnRhdGlvbi5odG1sI21vZGlmaWVycy4uZmxpcC5lbmFibGVkKSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmbGlwOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgYW4gZWxlbWVudCB0byBvdmVybGF5IGFuZCBwb3NpdGlvbi4gU2VlXG4gICAqIHRoZSBbcmVhY3QtcG9wcGVyIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcmVhY3QtcG9wcGVyI2NoaWxkcmVuKSBmb3IgbW9yZSBpbmZvLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBzaG93OiBib29sZWFuLFxuICAgKiAgIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgKiAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcbiAgICogICBmb3JjZVVwZGF0ZTogKCkgPT4gdm9pZCxcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgICAgYXJpYS1sYWJlbGxlZGJ5OiA/c3RyaW5nXG4gICAqICAgICBbc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyLFxuICAgKiAgIH0sXG4gICAqICAgYXJyb3dQcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgICAgW3N0cmluZ106IHN0cmluZyB8IG51bWJlcixcbiAgICogICB9LFxuICAgKiB9KSA9PiBSZWFjdC5FbGVtZW50fVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENvbnRyb2wgaG93IG11Y2ggc3BhY2UgdGhlcmUgaXMgYmV0d2VlbiB0aGUgZWRnZSBvZiB0aGUgYm91bmRhcnkgZWxlbWVudCBhbmQgb3ZlcmxheS5cbiAgICogQSBjb252ZW5pZW5jZSBzaG9ydGN1dCB0byBzZXR0aW5nIGBwb3BwZXJDb25maWcubW9kZmllcnMucHJldmVudE92ZXJmbG93LnBhZGRpbmdgXG4gICAqL1xuICBjb250YWluZXJQYWRkaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwb3BwZXIgb3B0aW9ucyBhbmQgcHJvcHMgcGFzc2VkIGRpcmVjdGx5IHRvIHJlYWN0LXBvcHBlcidzIFBvcHBlciBjb21wb25lbnQuXG4gICAqL1xuICBwb3BwZXJDb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdHJpZ2dlciBgb25IaWRlYCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBvdmVybGF5XG4gICAqL1xuICByb290Q2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGV2ZW50IGZvciB0b2dnbGluZyBvdmVybGF5XG4gICAqL1xuICByb290Q2xvc2VFdmVudDogUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnbW91c2Vkb3duJ10pLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGRpc2FibGVkIGZvciBkaXNhYmxlIFJvb3RDbG9zZVdyYXBwZXJcbiAgICovXG4gIHJvb3RDbG9zZURpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEEgQ2FsbGJhY2sgZmlyZWQgYnkgdGhlIE92ZXJsYXkgd2hlbiBpdCB3aXNoZXMgdG8gYmUgaGlkZGVuLlxuICAgKlxuICAgKiBfX3JlcXVpcmVkX18gd2hlbiBgcm9vdENsb3NlYCBpcyBgdHJ1ZWAuXG4gICAqXG4gICAqIEB0eXBlIGZ1bmNcbiAgICovXG4gIG9uSGlkZShwcm9wcywgLi4uYXJncykge1xuICAgIGlmIChwcm9wcy5yb290Q2xvc2UpIHtcbiAgICAgIHJldHVybiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkKHByb3BzLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvcFR5cGVzLmZ1bmMocHJvcHMsIC4uLmFyZ3MpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwQDIuMC4wYCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50XG4gICAqIHVzZWQgdG8gYW5pbWF0ZSB0aGUgb3ZlcmxheSBhcyBpdCBjaGFuZ2VzIHZpc2liaWxpdHkuXG4gICAqL1xuICAvLyBAdHMtaWdub3JlXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBPdmVybGF5IHRyYW5zaXRpb25zIGluXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE92ZXJsYXkgYmVnaW5zIHRvIHRyYW5zaXRpb24gaW5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgT3ZlcmxheSBmaW5pc2hlcyB0cmFuc2l0aW9uaW5nIGluXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCByaWdodCBiZWZvcmUgdGhlIE92ZXJsYXkgdHJhbnNpdGlvbnMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhcyB0aGUgT3ZlcmxheSBiZWdpbnMgdG8gdHJhbnNpdGlvbiBvdXRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBPdmVybGF5IGZpbmlzaGVzIHRyYW5zaXRpb25pbmcgb3V0XG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIERPTSBlbGVtZW50LCBSZWYgdG8gYW4gZWxlbWVudCwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci4gVGhlIGBjb250YWluZXJgIHdpbGwgaGF2ZSB0aGUgUG9ydGFsIGNoaWxkcmVuXG4gICAqIGFwcGVuZGVkIHRvIGl0LlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuXG4gIG9uUmVuZGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGNvbnRhaW5lcjogRE9NQ29udGFpbmVyO1xuICBvblJlbmRlcmVkPzogKGVsZW1lbnQ6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IFBvcnRhbCA9ICh7IGNvbnRhaW5lciwgY2hpbGRyZW4sIG9uUmVuZGVyZWQgfTogUG9ydGFsUHJvcHMpID0+IHtcbiAgY29uc3QgcmVzb2x2ZWRDb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKGNvbnRhaW5lciwgb25SZW5kZXJlZCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkQ29udGFpbmVyID8gKFxuICAgIDw+e1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgcmVzb2x2ZWRDb250YWluZXIpfTwvPlxuICApIDogbnVsbDtcbn07XG5cblBvcnRhbC5kaXNwbGF5TmFtZSA9ICdQb3J0YWwnO1xuUG9ydGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRLZXkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJDb250ZXh0VHlwZSB7XG4gIG9uU2VsZWN0OiBhbnk7XG4gIGFjdGl2ZUtleTogYW55O1xuICB0cmFuc2l0aW9uOiBhbnk7XG4gIG1vdW50T25FbnRlcjogYm9vbGVhbjtcbiAgdW5tb3VudE9uRXhpdDogYm9vbGVhbjtcbiAgZ2V0Q29udHJvbGxlZElkOiAoa2V5OiBFdmVudEtleSkgPT4gYW55O1xuICBnZXRDb250cm9sbGVySWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBhbnk7XG59XG5cbmNvbnN0IFRhYkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFRhYkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRleHQ7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tICcuL05hdkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHtcbiAgRXZlbnRLZXksXG4gIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50LFxuICBTZWxlY3RDYWxsYmFjayxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJvcHNcbiAgZXh0ZW5kcyBPbWl0PFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiwgJ29uU2VsZWN0Jz4ge1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHRhYkluZGV4PzogbnVtYmVyO1xuICBvblNlbGVjdD86IFNlbGVjdENhbGxiYWNrO1xufVxuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIGFzOiBQcm9wVHlwZXMuYW55LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICdhcmlhLWNvbnRyb2xzJzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTmF2SXRlbU9wdGlvbnMge1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWQ/OiBzdHJpbmc7XG4gIHJvbGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXZJdGVtKHtcbiAga2V5LFxuICBvbkNsaWNrLFxuICBhY3RpdmUsXG4gIGlkLFxuICByb2xlLFxuICBkaXNhYmxlZCxcbn06IFVzZU5hdkl0ZW1PcHRpb25zKSB7XG4gIGNvbnN0IHBhcmVudE9uU2VsZWN0ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xuXG4gIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgY29uc3QgcHJvcHMgPSB7fSBhcyBhbnk7XG5cbiAgaWYgKG5hdkNvbnRleHQpIHtcbiAgICBpZiAoIXJvbGUgJiYgbmF2Q29udGV4dC5yb2xlID09PSAndGFibGlzdCcpIHByb3BzLnJvbGUgPSAndGFiJztcblxuICAgIGNvbnN0IGNvbnRleHRDb250cm9sbGVySWQgPSBuYXZDb250ZXh0LmdldENvbnRyb2xsZXJJZChrZXkgPz8gbnVsbCk7XG4gICAgY29uc3QgY29udGV4dENvbnRyb2xsZWRJZCA9IG5hdkNvbnRleHQuZ2V0Q29udHJvbGxlZElkKGtleSA/PyBudWxsKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcm9wc1tkYXRhQXR0cignZXZlbnQta2V5JyldID0ga2V5O1xuXG4gICAgcHJvcHMuaWQgPSBjb250ZXh0Q29udHJvbGxlcklkIHx8IGlkO1xuICAgIHByb3BzWydhcmlhLWNvbnRyb2xzJ10gPSBjb250ZXh0Q29udHJvbGxlZElkO1xuXG4gICAgaXNBY3RpdmUgPVxuICAgICAgYWN0aXZlID09IG51bGwgJiYga2V5ICE9IG51bGwgPyBuYXZDb250ZXh0LmFjdGl2ZUtleSA9PT0ga2V5IDogYWN0aXZlO1xuICB9XG5cbiAgaWYgKHByb3BzLnJvbGUgPT09ICd0YWInKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgICAgcHJvcHNbJ2FyaWEtZGlzYWJsZWQnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcHJvcHNbJ2FyaWEtc2VsZWN0ZWQnXSA9IGlzQWN0aXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIHByb3BzLm9uQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG5cbiAgICBvbkNsaWNrPy4oZSk7XG5cbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50T25TZWxlY3QgJiYgIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgcGFyZW50T25TZWxlY3Q/LihrZXksIGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtwcm9wcywgeyBpc0FjdGl2ZSB9XSBhcyBjb25zdDtcbn1cblxuY29uc3QgTmF2SXRlbTogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gIHR5cGVvZiBCdXR0b24sXG4gIE5hdkl0ZW1Qcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIE5hdkl0ZW1Qcm9wcz4oXG4gICh7IGFzOiBDb21wb25lbnQgPSBCdXR0b24sIGV2ZW50S2V5LCBocmVmLCAuLi5vcHRpb25zIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtwcm9wcywgbWV0YV0gPSB1c2VOYXZJdGVtKHtcbiAgICAgIGtleTogbWFrZUV2ZW50S2V5KGV2ZW50S2V5LCBocmVmKSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJvcHNbZGF0YUF0dHIoJ2FjdGl2ZScpXSA9IG1ldGEuaXNBY3RpdmU7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ub3B0aW9uc30gey4uLnByb3BzfSByZWY9e3JlZn0gLz47XG4gIH0sXG4pO1xuXG5OYXZJdGVtLmRpc3BsYXlOYW1lID0gJ05hdkl0ZW0nO1xuTmF2SXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iLCJpbXBvcnQgcXNhIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGwnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZvcmNlVXBkYXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUZvcmNlVXBkYXRlJztcbmltcG9ydCB1c2VNZXJnZWRSZWZzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnMnO1xuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSAnLi9OYXZDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJy4vVGFiQ29udGV4dCc7XG5pbXBvcnQge1xuICBFdmVudEtleSxcbiAgRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQsXG4gIFNlbGVjdENhbGxiYWNrLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGFBdHRyLCBkYXRhUHJvcCB9IGZyb20gJy4vRGF0YUtleSc7XG5pbXBvcnQgTmF2SXRlbSwgeyBVc2VOYXZJdGVtT3B0aW9ucywgTmF2SXRlbVByb3BzIH0gZnJvbSAnLi9OYXZJdGVtJztcblxuZXhwb3J0IHR5cGUgeyBVc2VOYXZJdGVtT3B0aW9ucywgTmF2SXRlbVByb3BzIH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAvKiogQHByaXZhdGUgKi9cbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlByb3BzXG4gIGV4dGVuZHMgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sICdvblNlbGVjdCc+IHtcbiAgYWN0aXZlS2V5PzogRXZlbnRLZXk7XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG59XG5cbmNvbnN0IEVWRU5UX0tFWV9BVFRSID0gZGF0YUF0dHIoJ2V2ZW50LWtleScpO1xuXG5jb25zdCBOYXY6IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PCdkaXYnLCBOYXZQcm9wcz4gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRWxlbWVudCxcbiAgTmF2UHJvcHNcbj4oXG4gIChcbiAgICB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gICAgICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIHJvbGUsXG4gICAgICBvbktleURvd24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmLFxuICApID0+IHtcbiAgICAvLyBBIHJlZiBhbmQgZm9yY2VVcGRhdGUgZm9yIHJlZm9jdXMsIGIvYyB3ZSBvbmx5IHdhbnQgdG8gdHJpZ2dlciB3aGVuIG5lZWRlZFxuICAgIC8vIGFuZCBkb24ndCB3YW50IHRvIHJlc2V0IHRoZSBzZXQgaW4gdGhlIGVmZmVjdFxuICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgICBjb25zdCBuZWVkc1JlZm9jdXNSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgY29uc3QgcGFyZW50T25TZWxlY3QgPSB1c2VDb250ZXh0KFNlbGVjdGFibGVDb250ZXh0KTtcbiAgICBjb25zdCB0YWJDb250ZXh0ID0gdXNlQ29udGV4dChUYWJDb250ZXh0KTtcblxuICAgIGxldCBnZXRDb250cm9sbGVkSWQsIGdldENvbnRyb2xsZXJJZDtcblxuICAgIGlmICh0YWJDb250ZXh0KSB7XG4gICAgICByb2xlID0gcm9sZSB8fCAndGFibGlzdCc7XG4gICAgICBhY3RpdmVLZXkgPSB0YWJDb250ZXh0LmFjdGl2ZUtleTtcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gZHVwbGljYXRlIHRoZXNlP1xuICAgICAgZ2V0Q29udHJvbGxlZElkID0gdGFiQ29udGV4dC5nZXRDb250cm9sbGVkSWQ7XG4gICAgICBnZXRDb250cm9sbGVySWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZXJJZDtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0Tm9kZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCBnZXROZXh0QWN0aXZlVGFiID0gKG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50TGlzdE5vZGUgPSBsaXN0Tm9kZS5jdXJyZW50O1xuICAgICAgaWYgKCFjdXJyZW50TGlzdE5vZGUpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpdGVtcyA9IHFzYShcbiAgICAgICAgY3VycmVudExpc3ROb2RlLFxuICAgICAgICBgWyR7RVZFTlRfS0VZX0FUVFJ9XTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pYCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNoaWxkID0gY3VycmVudExpc3ROb2RlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAnW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0nLFxuICAgICAgKTtcbiAgICAgIGlmICghYWN0aXZlQ2hpbGQpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoYWN0aXZlQ2hpbGQpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIG9mZnNldDtcbiAgICAgIGlmIChuZXh0SW5kZXggPj0gaXRlbXMubGVuZ3RoKSBuZXh0SW5kZXggPSAwO1xuICAgICAgaWYgKG5leHRJbmRleCA8IDApIG5leHRJbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICByZXR1cm4gaXRlbXNbbmV4dEluZGV4XTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGtleTogc3RyaW5nIHwgbnVsbCwgZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBpZiAoa2V5ID09IG51bGwpIHJldHVybjtcbiAgICAgIG9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG4gICAgICBwYXJlbnRPblNlbGVjdD8uKGtleSwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgICAgb25LZXlEb3duPy4oZXZlbnQpO1xuXG4gICAgICBpZiAoIXRhYkNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV4dEFjdGl2ZUNoaWxkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgbmV4dEFjdGl2ZUNoaWxkID0gZ2V0TmV4dEFjdGl2ZVRhYigtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIG5leHRBY3RpdmVDaGlsZCA9IGdldE5leHRBY3RpdmVUYWIoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0QWN0aXZlQ2hpbGQpIHJldHVybjtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaGFuZGxlU2VsZWN0KFxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQuZGF0YXNldFtkYXRhUHJvcCgnRXZlbnRLZXknKV0gfHwgbnVsbCxcbiAgICAgICAgZXZlbnQsXG4gICAgICApO1xuXG4gICAgICBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGxpc3ROb2RlLmN1cnJlbnQgJiYgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2hpbGQgPSBsaXN0Tm9kZS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgIGBbJHtFVkVOVF9LRVlfQVRUUn1dW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV1gLFxuICAgICAgICApO1xuXG4gICAgICAgIGFjdGl2ZUNoaWxkPy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGxpc3ROb2RlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgIDxOYXZDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIHJvbGUsIC8vIHVzZWQgYnkgTmF2TGluayB0byBkZXRlcm1pbmUgaXQncyByb2xlXG4gICAgICAgICAgICBhY3RpdmVLZXk6IG1ha2VFdmVudEtleShhY3RpdmVLZXkpLFxuICAgICAgICAgICAgZ2V0Q29udHJvbGxlZElkOiBnZXRDb250cm9sbGVkSWQgfHwgbm9vcCxcbiAgICAgICAgICAgIGdldENvbnRyb2xsZXJJZDogZ2V0Q29udHJvbGxlcklkIHx8IG5vb3AsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgIHJlZj17bWVyZ2VkUmVmfVxuICAgICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH0sXG4pO1xuXG5OYXYuZGlzcGxheU5hbWUgPSAnTmF2Jztcbk5hdi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oTmF2LCB7IEl0ZW06IE5hdkl0ZW0gfSk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBOb29wVHJhbnNpdGlvbih7XG4gIGNoaWxkcmVuLFxuICBpbjogaW5Qcm9wLFxuICBtb3VudE9uRW50ZXIsXG4gIHVubW91bnRPbkV4aXQsXG59OiBUcmFuc2l0aW9uUHJvcHMpIHtcbiAgY29uc3QgaGFzRW50ZXJlZFJlZiA9IHVzZVJlZihpblByb3ApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluUHJvcCkgaGFzRW50ZXJlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW2luUHJvcF0pO1xuXG4gIGlmIChpblByb3ApIHJldHVybiBjaGlsZHJlbjtcblxuICAvLyBub3QgaW5cbiAgLy9cbiAgLy8gaWYgKCFtb3VudE9uRW50ZXIgJiYgIXVubW91bnRPbkV4aXQpIHtcbiAgLy8gICByZXR1cm4gY2hpbGRyZW47XG4gIC8vIH1cbiAgaWYgKHVubW91bnRPbkV4aXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWhhc0VudGVyZWRSZWYuY3VycmVudCAmJiBtb3VudE9uRW50ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9vcFRyYW5zaXRpb247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi9UYWJDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7XG4gIEV2ZW50S2V5LFxuICBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCxcbiAgVHJhbnNpdGlvbkNhbGxiYWNrcyxcbiAgVHJhbnNpdGlvblR5cGUsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IE5vb3BUcmFuc2l0aW9uIGZyb20gJy4vTm9vcFRyYW5zaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlBhbmVsUHJvcHNcbiAgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzLFxuICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIGFzOiBSZWFjdC5FbGVtZW50VHlwZTtcbiAgZXZlbnRLZXk/OiBFdmVudEtleTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlO1xuICBtb3VudE9uRW50ZXI/OiBib29sZWFuO1xuICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBIGtleSB0aGF0IGFzc29jaWF0ZXMgdGhlIGBUYWJQYW5lbGAgd2l0aCBpdCdzIGNvbnRyb2xsaW5nIGBOYXZMaW5rYC5cbiAgICovXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgVGFiUGFuZWwsIHRoaXMgaXMgZ2VuZXJhbGx5IGNvbnRyb2xsZWQgYnkgYVxuICAgKiBUYWJDb250YWluZXIuXG4gICAqL1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgYW5pbWF0aW9uIHdoZW4gc2hvd2luZyBvciBoaWRpbmcgYDxUYWJQYW5lbD5gcy4gRGVmYXVsdHMgdG8gYDxGYWRlPmBcbiAgICogYW5pbWF0aW9uLCBlbHNlIHVzZSBgZmFsc2VgIHRvIGRpc2FibGUgb3IgYSByZWFjdC10cmFuc2l0aW9uLWdyb3VwXG4gICAqIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlciBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlcmluZyBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlcmVkIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRXhpdCBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkV4aXRpbmcgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FeGl0ZWQgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2FpdCB1bnRpbCB0aGUgZmlyc3QgXCJlbnRlclwiIHRyYW5zaXRpb24gdG8gbW91bnQgdGhlIHRhYiAoYWRkIGl0IHRvIHRoZSBET00pXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVbm1vdW50IHRoZSB0YWIgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIHZpc2libGVcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBAaWdub3JlICogKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEBpZ25vcmUgKiAqL1xuICAnYXJpYS1sYWJlbGxlZGJ5JzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmZ1bmN0aW9uIHVzZVRhYkNvbnRleHQocHJvcHM6IFRhYlBhbmVsUHJvcHMpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGFiQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gcHJvcHM7XG5cbiAgY29uc3QgeyBhY3RpdmVLZXksIGdldENvbnRyb2xsZWRJZCwgZ2V0Q29udHJvbGxlcklkLCAuLi5yZXN0IH0gPSBjb250ZXh0O1xuICBjb25zdCBzaG91bGRUcmFuc2l0aW9uID1cbiAgICBwcm9wcy50cmFuc2l0aW9uICE9PSBmYWxzZSAmJiByZXN0LnRyYW5zaXRpb24gIT09IGZhbHNlO1xuXG4gIGNvbnN0IGtleSA9IG1ha2VFdmVudEtleShwcm9wcy5ldmVudEtleSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICBhY3RpdmU6XG4gICAgICBwcm9wcy5hY3RpdmUgPT0gbnVsbCAmJiBrZXkgIT0gbnVsbFxuICAgICAgICA/IG1ha2VFdmVudEtleShhY3RpdmVLZXkpID09PSBrZXlcbiAgICAgICAgOiBwcm9wcy5hY3RpdmUsXG4gICAgaWQ6IGdldENvbnRyb2xsZWRJZChwcm9wcy5ldmVudEtleSEpLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiBnZXRDb250cm9sbGVySWQocHJvcHMuZXZlbnRLZXkhKSxcbiAgICB0cmFuc2l0aW9uOiBzaG91bGRUcmFuc2l0aW9uICYmIChwcm9wcy50cmFuc2l0aW9uIHx8IHJlc3QudHJhbnNpdGlvbiksXG4gICAgbW91bnRPbkVudGVyOlxuICAgICAgcHJvcHMubW91bnRPbkVudGVyICE9IG51bGwgPyBwcm9wcy5tb3VudE9uRW50ZXIgOiByZXN0Lm1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0OlxuICAgICAgcHJvcHMudW5tb3VudE9uRXhpdCAhPSBudWxsID8gcHJvcHMudW5tb3VudE9uRXhpdCA6IHJlc3QudW5tb3VudE9uRXhpdCxcbiAgfTtcbn1cblxuY29uc3QgVGFiUGFuZWw6IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PFxuICAnZGl2JyxcbiAgVGFiUGFuZWxQcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIFRhYlBhbmVsUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgb25FbnRlcixcbiAgICBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZCxcbiAgICBvbkV4aXQsXG4gICAgb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkLFxuICAgIG1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0LFxuICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24gPSBOb29wVHJhbnNpdGlvbixcbiAgICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gICAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAgIGV2ZW50S2V5OiBfLFxuICAgIC4uLnJlc3RcbiAgfSA9IHVzZVRhYkNvbnRleHQocHJvcHMpO1xuXG4gIGlmICghYWN0aXZlICYmICFUcmFuc2l0aW9uICYmIHVubW91bnRPbkV4aXQpIHJldHVybiBudWxsO1xuXG4gIGxldCBwYW5lID0gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXshYWN0aXZlfVxuICAgICAgYXJpYS1oaWRkZW49eyFhY3RpdmV9XG4gICAgLz5cbiAgKTtcblxuICBpZiAoVHJhbnNpdGlvbikge1xuICAgIHBhbmUgPSAoXG4gICAgICA8VHJhbnNpdGlvblxuICAgICAgICBpbj17YWN0aXZlfVxuICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICBvbkVudGVyaW5nPXtvbkVudGVyaW5nfVxuICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgIG9uRXhpdGluZz17b25FeGl0aW5nfVxuICAgICAgICBvbkV4aXRlZD17b25FeGl0ZWR9XG4gICAgICAgIG1vdW50T25FbnRlcj17bW91bnRPbkVudGVyfVxuICAgICAgICB1bm1vdW50T25FeGl0PXt1bm1vdW50T25FeGl0fVxuICAgICAgPlxuICAgICAgICB7cGFuZX1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICApO1xuICB9XG4gIC8vIFdlIHByb3ZpZGUgYW4gZW1wdHkgdGhlIFRhYkNvbnRleHQgc28gYDxOYXY+YHMgaW4gYDxUYWJQYW5lbD5gcyBkb24ndFxuICAvLyBjb25mbGljdCB3aXRoIHRoZSB0b3AgbGV2ZWwgb25lLlxuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+XG4gICAgICAgIHtwYW5lfVxuICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RhYkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59KTtcblxuVGFiUGFuZWwuZGlzcGxheU5hbWUgPSAnVGFiUGFuZWwnO1xuVGFiUGFuZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJQYW5lbDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB7IHVzZVNTUlNhZmVJZCB9IGZyb20gJ0ByZWFjdC1hcmlhL3Nzcic7XG5cbmltcG9ydCBUYWJDb250ZXh0LCB7IFRhYkNvbnRleHRUeXBlIH0gZnJvbSAnLi9UYWJDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7IEV2ZW50S2V5LCBTZWxlY3RDYWxsYmFjaywgVHJhbnNpdGlvblR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUYWJQYW5lbCwgeyBUYWJQYW5lbFByb3BzIH0gZnJvbSAnLi9UYWJQYW5lbCc7XG5cbmV4cG9ydCB0eXBlIHsgVGFiUGFuZWxQcm9wcyB9O1xuZXhwb3J0IGludGVyZmFjZSBUYWJzUHJvcHMgZXh0ZW5kcyBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx1bmtub3duPiB7XG4gIGlkPzogc3RyaW5nO1xuICB0cmFuc2l0aW9uPzogVHJhbnNpdGlvblR5cGU7XG4gIG1vdW50T25FbnRlcj86IGJvb2xlYW47XG4gIHVubW91bnRPbkV4aXQ/OiBib29sZWFuO1xuICBnZW5lcmF0ZUNoaWxkSWQ/OiAoZXZlbnRLZXk6IEV2ZW50S2V5LCB0eXBlOiAndGFiJyB8ICdwYW5lJykgPT4gc3RyaW5nO1xuICBvblNlbGVjdD86IFNlbGVjdENhbGxiYWNrO1xuICBhY3RpdmVLZXk/OiBFdmVudEtleTtcbiAgZGVmYXVsdEFjdGl2ZUtleT86IEV2ZW50S2V5O1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgYW5pbWF0aW9uIHN0cmF0ZWd5IGZvciBhbGwgY2hpbGRyZW4gYDxUYWJQYW5lPmBzLlxuICAgKiBVc2UgYSByZWFjdC10cmFuc2l0aW9uLWdyb3VwIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQuXG4gICAqXG4gICAqIEB0eXBlIHt7VHJhbnNpdGlvbiB8IGZhbHNlfX1cbiAgICogQGRlZmF1bHQge0ZhZGV9XG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSksXG4gICAgUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBdKSxcbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIGZpcnN0IFwiZW50ZXJcIiB0cmFuc2l0aW9uIHRvIG1vdW50IHRhYnMgKGFkZCB0aGVtIHRvIHRoZSBET00pXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVbm1vdW50IHRhYnMgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gdGhleSBhcmUgbm8gbG9uZ2VyIHZpc2libGVcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gYGV2ZW50S2V5YCBhbmQgYHR5cGVgIGFuZCByZXR1cm5zIGEgdW5pcXVlIGlkIGZvclxuICAgKiBjaGlsZCB0YWIgYDxOYXZJdGVtPmBzIGFuZCBgPFRhYlBhbmU+YHMuIFRoZSBmdW5jdGlvbiBfbXVzdF8gYmUgYSBwdXJlXG4gICAqIGZ1bmN0aW9uLCBtZWFuaW5nIGl0IHNob3VsZCBhbHdheXMgcmV0dXJuIHRoZSBfc2FtZV8gaWQgZm9yIHRoZSBzYW1lIHNldFxuICAgKiBvZiBpbnB1dHMuIFRoZSBkZWZhdWx0IHZhbHVlIHJlcXVpcmVzIHRoYXQgYW4gYGlkYCB0byBiZSBzZXQgZm9yIHRoZVxuICAgKiBgPFRhYkNvbnRhaW5lcj5gLlxuICAgKlxuICAgKiBUaGUgYHR5cGVgIGFyZ3VtZW50IHdpbGwgZWl0aGVyIGJlIGBcInRhYlwiYCBvciBgXCJwYW5lXCJgLlxuICAgKlxuICAgKiBAZGVmYXVsdFZhbHVlIChldmVudEtleSwgdHlwZSkgPT4gYCR7cHJvcHMuaWR9LSR7dHlwZX0tJHtldmVudEtleX1gXG4gICAqL1xuICBnZW5lcmF0ZUNoaWxkSWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZpcmVkIHdoZW4gYSB0YWIgaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgYWN0aXZlS2V5XG4gICAqL1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBgZXZlbnRLZXlgIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYi5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBvblNlbGVjdFxuICAgKi9cbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5jb25zdCBUYWJzID0gKHByb3BzOiBUYWJzUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkOiB1c2VySWQsXG4gICAgZ2VuZXJhdGVDaGlsZElkOiBnZW5lcmF0ZUN1c3RvbUNoaWxkSWQsXG4gICAgb25TZWxlY3Q6IHByb3BzT25TZWxlY3QsXG4gICAgYWN0aXZlS2V5OiBwcm9wc0FjdGl2ZUtleSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5LFxuICAgIHRyYW5zaXRpb24sXG4gICAgbW91bnRPbkVudGVyLFxuICAgIHVubW91bnRPbkV4aXQsXG4gICAgY2hpbGRyZW4sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbYWN0aXZlS2V5LCBvblNlbGVjdF0gPSB1c2VVbmNvbnRyb2xsZWRQcm9wKFxuICAgIHByb3BzQWN0aXZlS2V5LFxuICAgIGRlZmF1bHRBY3RpdmVLZXksXG4gICAgcHJvcHNPblNlbGVjdCxcbiAgKTtcblxuICBjb25zdCBpZCA9IHVzZVNTUlNhZmVJZCh1c2VySWQpO1xuXG4gIGNvbnN0IGdlbmVyYXRlQ2hpbGRJZCA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGdlbmVyYXRlQ3VzdG9tQ2hpbGRJZCB8fFxuICAgICAgKChrZXk6IEV2ZW50S2V5LCB0eXBlOiBzdHJpbmcpID0+IChpZCA/IGAke2lkfS0ke3R5cGV9LSR7a2V5fWAgOiBudWxsKSksXG4gICAgW2lkLCBnZW5lcmF0ZUN1c3RvbUNoaWxkSWRdLFxuICApO1xuXG4gIGNvbnN0IHRhYkNvbnRleHQ6IFRhYkNvbnRleHRUeXBlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgb25TZWxlY3QsXG4gICAgICBhY3RpdmVLZXksXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgbW91bnRPbkVudGVyOiBtb3VudE9uRW50ZXIgfHwgZmFsc2UsXG4gICAgICB1bm1vdW50T25FeGl0OiB1bm1vdW50T25FeGl0IHx8IGZhbHNlLFxuICAgICAgZ2V0Q29udHJvbGxlZElkOiAoa2V5OiBFdmVudEtleSkgPT4gZ2VuZXJhdGVDaGlsZElkKGtleSwgJ3RhYnBhbmUnKSxcbiAgICAgIGdldENvbnRyb2xsZXJJZDogKGtleTogRXZlbnRLZXkpID0+IGdlbmVyYXRlQ2hpbGRJZChrZXksICd0YWInKSxcbiAgICB9KSxcbiAgICBbXG4gICAgICBvblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBtb3VudE9uRW50ZXIsXG4gICAgICB1bm1vdW50T25FeGl0LFxuICAgICAgZ2VuZXJhdGVDaGlsZElkLFxuICAgIF0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFiQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGFiQ29udGV4dH0+XG4gICAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e29uU2VsZWN0IHx8IG51bGx9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvVGFiQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cblRhYnMucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuVGFicy5QYW5lbCA9IFRhYlBhbmVsO1xuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJztcbmltcG9ydCB7IHVzZURyb3Bkb3duTWVudSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHVzZURyb3Bkb3duVG9nZ2xlIH0gZnJvbSAnLi9Ecm9wZG93blRvZ2dsZSc7XG5pbXBvcnQgeyB1c2VEcm9wZG93bkl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXknO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL1BvcnRhbCc7XG5pbXBvcnQgdXNlUm9vdENsb3NlIGZyb20gJy4vdXNlUm9vdENsb3NlJztcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuaW1wb3J0IE5hdkl0ZW0sIHsgdXNlTmF2SXRlbSB9IGZyb20gJy4vTmF2SXRlbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBUYWJzIGZyb20gJy4vVGFicyc7XG5pbXBvcnQgVGFiUGFuZWwgZnJvbSAnLi9UYWJQYW5lbCc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbixcbiAgRHJvcGRvd24sXG4gIHVzZURyb3Bkb3duTWVudSxcbiAgdXNlRHJvcGRvd25Ub2dnbGUsXG4gIHVzZURyb3Bkb3duSXRlbSxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICB1c2VOYXZJdGVtLFxuICBNb2RhbCxcbiAgT3ZlcmxheSxcbiAgUG9ydGFsLFxuICB1c2VSb290Q2xvc2UsXG4gIFRhYnMsXG4gIFRhYlBhbmVsLFxufTtcblxuZXhwb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB0eXBlIHtcbiAgRHJvcGRvd25Qcm9wcyxcbiAgRHJvcGRvd25NZW51UHJvcHMsXG4gIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhLFxuICBVc2VEcm9wZG93bk1lbnVPcHRpb25zLFxuICBEcm9wZG93blRvZ2dsZVByb3BzLFxuICBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxuICBEcm9wZG93bkl0ZW1Qcm9wcyxcbn0gZnJvbSAnLi9Ecm9wZG93bic7XG5leHBvcnQgdHlwZSB7IE5hdkl0ZW1Qcm9wcywgVXNlTmF2SXRlbU9wdGlvbnMsIE5hdlByb3BzIH0gZnJvbSAnLi9OYXYnO1xuZXhwb3J0IHR5cGUgeyBNb2RhbFByb3BzIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgdHlwZSB7IE92ZXJsYXlQcm9wcyB9IGZyb20gJy4vT3ZlcmxheSc7XG5leHBvcnQgdHlwZSB7IFBvcnRhbFByb3BzIH0gZnJvbSAnLi9Qb3J0YWwnO1xuZXhwb3J0IHR5cGUgeyBUYWJzUHJvcHMsIFRhYlBhbmVsUHJvcHMgfSBmcm9tICcuL1RhYnMnO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFN0b3JlIHRoZSBsYXN0IG9mIHNvbWUgdmFsdWUuIFRyYWNrZWQgdmlhIGEgYFJlZmAgb25seSB1cGRhdGluZyBpdFxuICogYWZ0ZXIgdGhlIGNvbXBvbmVudCByZW5kZXJzLlxuICpcbiAqIEhlbHBmdWwgaWYgeW91IG5lZWQgdG8gY29tcGFyZSBhIHByb3AgdmFsdWUgdG8gaXQncyBwcmV2aW91cyB2YWx1ZSBkdXJpbmcgcmVuZGVyLlxuICpcbiAqIGBgYHRzXG4gKiBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMpIHtcbiAqICAgY29uc3QgbGFzdFByb3BzID0gdXNlUHJldmlvdXMocHJvcHMpXG4gKlxuICogICBpZiAobGFzdFByb3BzLmZvbyAhPT0gcHJvcHMuZm9vKVxuICogICAgIHJlc2V0VmFsdWVGcm9tUHJvcHMocHJvcHMuZm9vKVxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byB0cmFja1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn0iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogVHJhY2sgd2hldGhlciBhIGNvbXBvbmVudCBpcyBjdXJyZW50IG1vdW50ZWQuIEdlbmVyYWxseSBsZXNzIHByZWZlcmFibGUgdGhhblxuICogcHJvcGVybGx5IGNhbmNlbGluZyBlZmZlY3RzIHNvIHRoZXkgZG9uJ3QgcnVuIGFmdGVyIGEgY29tcG9uZW50IGlzIHVubW91bnRlZCxcbiAqIGJ1dCBoZWxwZnVsIGluIGNhc2VzIHdoZXJlIHRoYXQgaXNuJ3QgZmVhc2libGUsIHN1Y2ggYXMgYSBgUHJvbWlzZWAgcmVzb2x1dGlvbi5cbiAqXG4gKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBpc01vdW50ZWQgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICogY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgZmV0Y2hkYXRhKCkudGhlbigobmV3RGF0YSkgPT4ge1xuICogICAgICBpZiAoaXNNb3VudGVkKCkpIHtcbiAqICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xuICogICAgICB9XG4gKiAgIH0pXG4gKiB9KVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnRlZCgpIHtcbiAgdmFyIG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VSZWYoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb3VudGVkLmN1cnJlbnQ7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBpc01vdW50ZWQuY3VycmVudDtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlLCBuby1jb25kLWFzc2lnbiAqL1xuLy8gSFRNTCBET00gYW5kIFNWRyBET00gbWF5IGhhdmUgZGlmZmVyZW50IHN1cHBvcnQgbGV2ZWxzLFxuLy8gc28gd2UgbmVlZCB0byBjaGVjayBvbiBjb250ZXh0IGluc3RlYWQgb2YgYSBkb2N1bWVudCByb290IGVsZW1lbnQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhjb250ZXh0LCBub2RlKSB7XG4gIGlmIChjb250ZXh0LmNvbnRhaW5zKSByZXR1cm4gY29udGV4dC5jb250YWlucyhub2RlKTtcbiAgaWYgKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHJldHVybiBjb250ZXh0ID09PSBub2RlIHx8ICEhKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBNRFhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xudmFyIHdpdGhNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gd2l0aE1EWENvbXBvbmVudHMoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnRzOiBhbGxDb21wb25lbnRzXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciB1c2VNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIHZhciBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dCk7XG4gIHZhciBhbGxDb21wb25lbnRzID0gY29udGV4dENvbXBvbmVudHM7XG5cbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBhbGxDb21wb25lbnRzID0gaXNGdW5jdGlvbihjb21wb25lbnRzKSA/IGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpIDogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRleHRDb21wb25lbnRzKSwgY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4gYWxsQ29tcG9uZW50cztcbn07XG52YXIgTURYUHJvdmlkZXIgPSBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wcykge1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNRFhDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFsbENvbXBvbmVudHNcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxudmFyIFRZUEVfUFJPUF9OQU1FID0gJ21keFR5cGUnO1xudmFyIERFRkFVTFRTID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIE1EWENyZWF0ZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJvcENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgbWR4VHlwZSA9IHByb3BzLm1keFR5cGUsXG4gICAgICBvcmlnaW5hbFR5cGUgPSBwcm9wcy5vcmlnaW5hbFR5cGUsXG4gICAgICBwYXJlbnROYW1lID0gcHJvcHMucGFyZW50TmFtZSxcbiAgICAgIGV0YyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY29tcG9uZW50c1wiLCBcIm1keFR5cGVcIiwgXCJvcmlnaW5hbFR5cGVcIiwgXCJwYXJlbnROYW1lXCJdKTtcblxuICB2YXIgY29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcENvbXBvbmVudHMpO1xuICB2YXIgdHlwZSA9IG1keFR5cGU7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRzW1wiXCIuY29uY2F0KHBhcmVudE5hbWUsIFwiLlwiKS5jb25jYXQodHlwZSldIHx8IGNvbXBvbmVudHNbdHlwZV0gfHwgREVGQVVMVFNbdHlwZV0gfHwgb3JpZ2luYWxUeXBlO1xuXG4gIGlmIChwcm9wQ29tcG9uZW50cykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgZXRjKSwge30sIHtcbiAgICAgIGNvbXBvbmVudHM6IHByb3BDb21wb25lbnRzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoe1xuICAgIHJlZjogcmVmXG4gIH0sIGV0YykpO1xufSk7XG5NRFhDcmVhdGVFbGVtZW50LmRpc3BsYXlOYW1lID0gJ01EWENyZWF0ZUVsZW1lbnQnO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBtZHhUeXBlID0gcHJvcHMgJiYgcHJvcHMubWR4VHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IG1keFR5cGUpIHtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gTURYQ3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UHJvcHMub3JpZ2luYWxUeXBlID0gdHlwZTtcbiAgICBuZXdQcm9wc1tUWVBFX1BST1BfTkFNRV0gPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbWR4VHlwZTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbn1cblxuZXhwb3J0IHsgTURYQ29udGV4dCwgTURYUHJvdmlkZXIsIGNyZWF0ZUVsZW1lbnQgYXMgbWR4LCB1c2VNRFhDb21wb25lbnRzLCB3aXRoTURYQ29tcG9uZW50cyB9O1xuIiwidmFyIHRvQXJyYXkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBbXS5zbGljZSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxc2EoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRvQXJyYXkoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICcuL2NhblVzZURPTSc7XG5leHBvcnQgdmFyIG9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcbmV4cG9ydCB2YXIgb25jZVN1cHBvcnRlZCA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgIHJldHVybiBvcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZ2V0IG9uY2UoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbXVsdGktYXNzaWduXG4gICAgICByZXR1cm4gb25jZVN1cHBvcnRlZCA9IG9wdGlvbnNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgIH1cblxuICB9O1xuXG4gIGlmIChjYW5Vc2VET00pIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgdHJ1ZSk7XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgLyogKi9cbn1cblxuLyoqXG4gKiBBbiBgYWRkRXZlbnRMaXN0ZW5lcmAgcG9ueWZpbGwsIHN1cHBvcnRzIHRoZSBgb25jZWAgb3B0aW9uXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnYm9vbGVhbicgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICB2YXIgb25jZSA9IG9wdGlvbnMub25jZSxcbiAgICAgICAgY2FwdHVyZSA9IG9wdGlvbnMuY2FwdHVyZTtcbiAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgaWYgKCFvbmNlU3VwcG9ydGVkICYmIG9uY2UpIHtcbiAgICAgIHdyYXBwZWRIYW5kbGVyID0gaGFuZGxlci5fX29uY2UgfHwgZnVuY3Rpb24gb25jZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlci5fX29uY2UgPSB3cmFwcGVkSGFuZGxlcjtcbiAgICB9XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwcGVkSGFuZGxlciwgb3B0aW9uc1N1cHBvcnRlZCA/IG9wdGlvbnMgOiBjYXB0dXJlKTtcbiAgfVxuXG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudExpc3RlbmVyOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyBhIGNvbXBvbmVudCB1cGRhdGUuIHRoZSBob29rIGVxdWl2YWxlbnQgdG9cbiAqIGB0aGlzLmZvcmNlVXBkYXRlKClgIGluIGEgY2xhc3MgY29tcG9uZW50LiBJbiBtb3N0IGNhc2VzIHVzaW5nIGEgc3RhdGUgdmFsdWUgZGlyZWN0bHlcbiAqIGlzIHByZWZlcmFibGUgYnV0IG1heSBiZSByZXF1aXJlZCBpbiBzb21lIGFkdmFuY2VkIHVzYWdlcyBvZiByZWZzIGZvciBpbnRlcm9wIG9yXG4gKiB3aGVuIGRpcmVjdCBET00gbWFuaXB1bGF0aW9uIGlzIHJlcXVpcmVkLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gKlxuICogY29uc3QgdXBkYXRlT25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAqICBmb3JjZVVwZGF0ZSgpXG4gKiB9LCBbZm9yY2VVcGRhdGVdKVxuICpcbiAqIHJldHVybiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt1cGRhdGVPbkNsaWNrfT5IaSB0aGVyZTwvYnV0dG9uPlxuICogYGBgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gIC8vIFRoZSB0b2dnbGluZyBzdGF0ZSB2YWx1ZSBpcyBkZXNpZ25lZCB0byBkZWZlYXQgUmVhY3Qgb3B0aW1pemF0aW9ucyBmb3Igc2tpcHBpbmdcbiAgLy8gdXBkYXRlcyB3aGVuIHRoZXkgYXJlIHN0cmljdGluZyBlcXVhbCB0byB0aGUgbGFzdCBzdGF0ZSB2YWx1ZVxuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiAhc3RhdGU7XG4gIH0sIGZhbHNlKSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgcmV0dXJuIGRpc3BhdGNoO1xufSIsImltcG9ydCB7IFVzZVBvcHBlck9wdGlvbnMsIE9mZnNldCwgUGxhY2VtZW50LCBNb2RpZmllcnMgfSBmcm9tICcuL3VzZVBvcHBlcic7XG5cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgZmxpcD86IGJvb2xlYW47XG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgYWxpZ25FbmQ/OiBib29sZWFuO1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgY29udGFpbmVyUGFkZGluZz86IG51bWJlcjtcbiAgYXJyb3dFbGVtZW50PzogRWxlbWVudCB8IG51bGw7XG4gIGVuYWJsZUV2ZW50cz86IGJvb2xlYW47XG4gIG9mZnNldD86IE9mZnNldDtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuICBwb3BwZXJDb25maWc/OiBVc2VQb3BwZXJPcHRpb25zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvTW9kaWZpZXJNYXAobW9kaWZpZXJzOiBNb2RpZmllcnMgfCB1bmRlZmluZWQpIHtcbiAgY29uc3QgcmVzdWx0OiBNb2RpZmllcnMgPSB7fTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgIHJldHVybiBtb2RpZmllcnMgfHwgcmVzdWx0O1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICBtb2RpZmllcnM/LmZvckVhY2goKG0pID0+IHtcbiAgICByZXN1bHRbbS5uYW1lIV0gPSBtO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTW9kaWZpZXJBcnJheShtYXA6IE1vZGlmaWVycyB8IHVuZGVmaW5lZCA9IHt9KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcCkpIHJldHVybiBtYXA7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtYXApLm1hcCgoaykgPT4ge1xuICAgIG1hcFtrXS5uYW1lID0gaztcbiAgICByZXR1cm4gbWFwW2tdO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyh7XG4gIGVuYWJsZWQsXG4gIGVuYWJsZUV2ZW50cyxcbiAgcGxhY2VtZW50LFxuICBmbGlwLFxuICBvZmZzZXQsXG4gIGZpeGVkLFxuICBjb250YWluZXJQYWRkaW5nLFxuICBhcnJvd0VsZW1lbnQsXG4gIHBvcHBlckNvbmZpZyA9IHt9LFxufTogQ29uZmlnKTogVXNlUG9wcGVyT3B0aW9ucyB7XG4gIGNvbnN0IG1vZGlmaWVycyA9IHRvTW9kaWZpZXJNYXAocG9wcGVyQ29uZmlnLm1vZGlmaWVycyk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wb3BwZXJDb25maWcsXG4gICAgcGxhY2VtZW50LFxuICAgIGVuYWJsZWQsXG4gICAgc3RyYXRlZ3k6IGZpeGVkID8gJ2ZpeGVkJyA6IHBvcHBlckNvbmZpZy5zdHJhdGVneSxcbiAgICBtb2RpZmllcnM6IHRvTW9kaWZpZXJBcnJheSh7XG4gICAgICAuLi5tb2RpZmllcnMsXG4gICAgICBldmVudExpc3RlbmVyczoge1xuICAgICAgICBlbmFibGVkOiBlbmFibGVFdmVudHMsXG4gICAgICB9LFxuICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgIC4uLm1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3csXG4gICAgICAgIG9wdGlvbnM6IGNvbnRhaW5lclBhZGRpbmdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogY29udGFpbmVyUGFkZGluZyxcbiAgICAgICAgICAgICAgLi4ubW9kaWZpZXJzLnByZXZlbnRPdmVyZmxvdz8ub3B0aW9ucyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3c/Lm9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgLi4ubW9kaWZpZXJzLm9mZnNldD8ub3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICAuLi5tb2RpZmllcnMuYXJyb3csXG4gICAgICAgIGVuYWJsZWQ6ICEhYXJyb3dFbGVtZW50LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgLi4ubW9kaWZpZXJzLmFycm93Py5vcHRpb25zLFxuICAgICAgICAgIGVsZW1lbnQ6IGFycm93RWxlbWVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmbGlwOiB7XG4gICAgICAgIGVuYWJsZWQ6ICEhZmxpcCxcbiAgICAgICAgLi4ubW9kaWZpZXJzLmZsaXAsXG4gICAgICB9LFxuICAgIH0pLFxuICB9O1xufVxuIiwiaW1wb3J0IF9yZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBEZWZhdWx0IGNvbnRleHQgdmFsdWUgdG8gdXNlIGluIGNhc2UgdGhlcmUgaXMgbm8gU1NSUHJvdmlkZXIuIFRoaXMgaXMgZmluZSBmb3Jcbi8vIGNsaWVudC1vbmx5IGFwcHMuIEluIG9yZGVyIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29waWVzIG9mIFJlYWN0IEFyaWEgcG90ZW50aWFsbHlcbi8vIGJlaW5nIG9uIHRoZSBwYWdlIGF0IG9uY2UsIHRoZSBwcmVmaXggaXMgc2V0IHRvIGEgcmFuZG9tIG51bWJlci4gU1NSUHJvdmlkZXJcbi8vIHdpbGwgcmVzZXQgdGhpcyB0byB6ZXJvIGZvciBjb25zaXN0ZW5jeSBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50LCBzbyBpbiB0aGVcbi8vIFNTUiBjYXNlIG11bHRpcGxlIGNvcGllcyBvZiBSZWFjdCBBcmlhIGlzIG5vdCBzdXBwb3J0ZWQuXG5jb25zdCAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQgPSB7XG4gIHByZWZpeDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApLFxuICBjdXJyZW50OiAwXG59O1xuXG5jb25zdCAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dCA9IF9yZWFjdC5jcmVhdGVDb250ZXh0KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCk7XG5cbi8qKlxuICogV2hlbiB1c2luZyBTU1Igd2l0aCBSZWFjdCBBcmlhLCBhcHBsaWNhdGlvbnMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIFNTUlByb3ZpZGVyLlxuICogVGhpcyBlbnN1cmVzIHRoYXQgYXV0byBnZW5lcmF0ZWQgaWRzIGFyZSBjb25zaXN0ZW50IGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU1NSUHJvdmlkZXIocHJvcHMpIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpO1xuICBsZXQgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgU1NSUHJvdmlkZXIsIHNldCB0byB6ZXJvLCBvdGhlcndpc2UgaW5jcmVtZW50LlxuICAgIHByZWZpeDogY3VyID09PSAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQgPyAwIDogKytjdXIucHJlZml4LFxuICAgIGN1cnJlbnQ6IDBcbiAgfSksIFtjdXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuY3JlYXRlRWxlbWVudCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59XG5sZXQgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGNhblVzZURPTSA9IEJvb2xlYW4odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbi8qKiBAcHJpdmF0ZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU1NSU2FmZUlkKGRlZmF1bHRJZCkge1xuICBsZXQgY3R4ID0gdXNlQ29udGV4dCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dCk7IC8vIElmIHdlIGFyZSByZW5kZXJpbmcgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBhbmQgdGhlcmUncyBubyBTU1JQcm92aWRlcixcbiAgLy8gcHJvdmlkZSBhIHdhcm5pbmcgdG8gaGludCB0byB0aGUgZGV2ZWxvcGVyIHRvIGFkZCBvbmUuXG5cbiAgaWYgKGN0eCA9PT0gJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0ICYmICEkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkY2FuVXNlRE9NKSB7XG4gICAgY29uc29sZS53YXJuKCdXaGVuIHNlcnZlciByZW5kZXJpbmcsIHlvdSBtdXN0IHdyYXAgeW91ciBhcHBsaWNhdGlvbiBpbiBhbiA8U1NSUHJvdmlkZXI+IHRvIGVuc3VyZSBjb25zaXN0ZW50IGlkcyBhcmUgZ2VuZXJhdGVkIGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLicpO1xuICB9XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZGVmYXVsdElkIHx8IFwicmVhY3QtYXJpYS1cIiArIGN0eC5wcmVmaXggKyBcIi1cIiArICsrY3R4LmN1cnJlbnQsIFtkZWZhdWx0SWRdKTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgY3VycmVudGx5IGJlaW5nIHNlcnZlciBzaWRlIHJlbmRlcmVkIG9yXG4gKiBoeWRyYXRlZCBvbiB0aGUgY2xpZW50LiBDYW4gYmUgdXNlZCB0byBkZWxheSBicm93c2VyLXNwZWNpZmljIHJlbmRlcmluZ1xuICogdW50aWwgYWZ0ZXIgaHlkcmF0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1NTUigpIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpO1xuICBsZXQgaXNJblNTUkNvbnRleHQgPSBjdXIgIT09ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dDtcbiAgbGV0IFtpc1NTUiwgc2V0SXNTU1JdID0gdXNlU3RhdGUoaXNJblNTUkNvbnRleHQpOyAvLyBJZiBvbiB0aGUgY2xpZW50LCBhbmQgdGhlIGNvbXBvbmVudCB3YXMgaW5pdGlhbGx5IHNlcnZlciByZW5kZXJlZCxcbiAgLy8gdGhlbiBzY2hlZHVsZSBhIGxheW91dCBlZmZlY3QgdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgYWZ0ZXIgaHlkcmF0aW9uLlxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luU1NSQ29udGV4dCkge1xuICAgIC8vIFRoaXMgaWYgc3RhdGVtZW50IHRlY2huaWNhbGx5IGJyZWFrcyB0aGUgcnVsZXMgb2YgaG9va3MsIGJ1dCBpcyBzYWZlXG4gICAgLy8gYmVjYXVzZSB0aGUgY29uZGl0aW9uIG5ldmVyIGNoYW5nZXMgYWZ0ZXIgbW91bnRpbmcuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIHNldElzU1NSKGZhbHNlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICByZXR1cm4gaXNTU1I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIHJlYWRPbmx5UHJvcFR5cGUoaGFuZGxlciwgbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwcm9wc1toYW5kbGVyXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiWW91IGhhdmUgcHJvdmlkZWQgYSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIHRvIGBcIiArIG5hbWUgKyBcImAgXCIgKyAoXCJ3aXRob3V0IGFuIGBcIiArIGhhbmRsZXIgKyBcImAgaGFuZGxlciBwcm9wLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBcIikgKyAoXCJJZiB0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBcIiArIGRlZmF1bHRLZXkocHJvcE5hbWUpICsgXCJgLiBcIikgKyAoXCJPdGhlcndpc2UsIHNldCBgXCIgKyBoYW5kbGVyICsgXCJgLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5jb250cm9sbGVkUHJvcFR5cGVzKGNvbnRyb2xsZWRWYWx1ZXMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBwcm9wVHlwZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoY29udHJvbGxlZFZhbHVlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIC8vIGFkZCBkZWZhdWx0IHByb3BUeXBlcyBmb3IgZm9sa3MgdGhhdCB1c2UgcnVudGltZSBjaGVja3NcbiAgICBwcm9wVHlwZXNbZGVmYXVsdEtleShwcm9wKV0gPSBub29wO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gY29udHJvbGxlZFZhbHVlc1twcm9wXTtcbiAgICAgICEodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnICYmIGhhbmRsZXIudHJpbSgpLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdVbmNvbnRyb2xsYWJsZSAtIFslc106IHRoZSBwcm9wIGAlc2AgbmVlZHMgYSB2YWxpZCBoYW5kbGVyIGtleSBuYW1lIGluIG9yZGVyIHRvIG1ha2UgaXQgdW5jb250cm9sbGFibGUnLCBkaXNwbGF5TmFtZSwgcHJvcCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcHJvcFR5cGVzW3Byb3BdID0gcmVhZE9ubHlQcm9wVHlwZShoYW5kbGVyLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb3BUeXBlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3AocHJvcHMsIHByb3ApIHtcbiAgcmV0dXJuIHByb3BzW3Byb3BdICE9PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEtleShrZXkpIHtcbiAgcmV0dXJuICdkZWZhdWx0JyArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG59XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkFjY2VwdFJlZihjb21wb25lbnQpIHtcbiAgcmV0dXJuICEhY29tcG9uZW50ICYmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnZnVuY3Rpb24nIHx8IGNvbXBvbmVudC5wcm90b3R5cGUgJiYgY29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiB1c2VVbmNvbnRyb2xsZWRQcm9wKHByb3BWYWx1ZSwgZGVmYXVsdFZhbHVlLCBoYW5kbGVyKSB7XG4gIHZhciB3YXNQcm9wUmVmID0gdXNlUmVmKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKSxcbiAgICAgIHN0YXRlVmFsdWUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgaXNQcm9wID0gcHJvcFZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIHZhciB3YXNQcm9wID0gd2FzUHJvcFJlZi5jdXJyZW50O1xuICB3YXNQcm9wUmVmLmN1cnJlbnQgPSBpc1Byb3A7XG4gIC8qKlxuICAgKiBJZiBhIHByb3Agc3dpdGNoZXMgZnJvbSBjb250cm9sbGVkIHRvIFVuY29udHJvbGxlZFxuICAgKiByZXNldCBpdHMgdmFsdWUgdG8gdGhlIGRlZmF1bHRWYWx1ZVxuICAgKi9cblxuICBpZiAoIWlzUHJvcCAmJiB3YXNQcm9wICYmIHN0YXRlVmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xuICAgIHNldFN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gW2lzUHJvcCA/IHByb3BWYWx1ZSA6IHN0YXRlVmFsdWUsIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyKSBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgW3ZhbHVlXS5jb25jYXQoYXJncykpO1xuICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgfSwgW2hhbmRsZXJdKV07XG59XG5cbmV4cG9ydCB7IHVzZVVuY29udHJvbGxlZFByb3AgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVuY29udHJvbGxlZChwcm9wcywgY29uZmlnKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBmaWVsZE5hbWUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYgPSByZXN1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWZbVXRpbHMuZGVmYXVsdEtleShmaWVsZE5hbWUpXSxcbiAgICAgICAgcHJvcHNWYWx1ZSA9IF9yZWZbZmllbGROYW1lXSxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtVdGlscy5kZWZhdWx0S2V5KGZpZWxkTmFtZSksIGZpZWxkTmFtZV0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICB2YXIgaGFuZGxlck5hbWUgPSBjb25maWdbZmllbGROYW1lXTtcblxuICAgIHZhciBfdXNlVW5jb250cm9sbGVkUHJvcCA9IHVzZVVuY29udHJvbGxlZFByb3AocHJvcHNWYWx1ZSwgZGVmYXVsdFZhbHVlLCBwcm9wc1toYW5kbGVyTmFtZV0pLFxuICAgICAgICB2YWx1ZSA9IF91c2VVbmNvbnRyb2xsZWRQcm9wWzBdLFxuICAgICAgICBoYW5kbGVyID0gX3VzZVVuY29udHJvbGxlZFByb3BbMV07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2ZpZWxkTmFtZV0gPSB2YWx1ZSwgX2V4dGVuZHMyW2hhbmRsZXJOYW1lXSA9IGhhbmRsZXIsIF9leHRlbmRzMikpO1xuICB9LCBwcm9wcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbnZhciBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9qcXVlbnNlL3NyYy91bmNvbnRyb2xsYWJsZS9zcmMvdW5jb250cm9sbGFibGUuanNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5jb250cm9sbGFibGUoQ29tcG9uZW50LCBjb250cm9sbGVkVmFsdWVzLCBtZXRob2RzKSB7XG4gIGlmIChtZXRob2RzID09PSB2b2lkIDApIHtcbiAgICBtZXRob2RzID0gW107XG4gIH1cblxuICB2YXIgZGlzcGxheU5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIHZhciBjYW5BY2NlcHRSZWYgPSBVdGlscy5jYW5BY2NlcHRSZWYoQ29tcG9uZW50KTtcbiAgdmFyIGNvbnRyb2xsZWRQcm9wcyA9IE9iamVjdC5rZXlzKGNvbnRyb2xsZWRWYWx1ZXMpO1xuICB2YXIgUFJPUFNfVE9fT01JVCA9IGNvbnRyb2xsZWRQcm9wcy5tYXAoVXRpbHMuZGVmYXVsdEtleSk7XG4gICEoY2FuQWNjZXB0UmVmIHx8ICFtZXRob2RzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdbdW5jb250cm9sbGFibGVdIHN0YXRlbGVzcyBmdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBwYXNzIHRocm91Z2ggbWV0aG9kcyAnICsgJ2JlY2F1c2UgdGhleSBoYXZlIG5vIGFzc29jaWF0ZWQgaW5zdGFuY2VzLiBDaGVjayBjb21wb25lbnQ6ICcgKyBkaXNwbGF5TmFtZSArICcsICcgKyAnYXR0ZW1wdGluZyB0byBwYXNzIHRocm91Z2ggbWV0aG9kczogJyArIG1ldGhvZHMuam9pbignLCAnKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIHZhciBVbmNvbnRyb2xsZWRDb21wb25lbnQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFVuY29udHJvbGxlZENvbXBvbmVudCgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5oYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJOYW1lID0gY29udHJvbGxlZFZhbHVlc1twcm9wTmFtZV07XG5cbiAgICAgICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wc1toYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgICAgICAgX3RoaXMuX25vdGlmeWluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIChfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzKVtoYW5kbGVyTmFtZV0uYXBwbHkoX3RoaXMkcHJvcHMsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKTtcblxuICAgICAgICAgICAgX3RoaXMuX25vdGlmeWluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMudW5tb3VudGVkKSBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWVzOiBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKG51bGwpLCB2YWx1ZXMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3Byb3BOYW1lXSA9IHZhbHVlLCBfZXh0ZW5kczIpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVyc1toYW5kbGVyTmFtZV0gPSBoYW5kbGVDaGFuZ2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChtZXRob2RzLmxlbmd0aCkgX3RoaXMuYXR0YWNoUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICBfdGhpcy5pbm5lciA9IHJlZjtcbiAgICAgIH07XG4gICAgICB2YXIgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGNvbnRyb2xsZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFsdWVzW2tleV0gPSBfdGhpcy5wcm9wc1tVdGlscy5kZWZhdWx0S2V5KGtleSldO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHByZXZQcm9wczoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgLy9sZXQgc2V0U3RhdGUgdHJpZ2dlciB0aGUgdXBkYXRlXG4gICAgICByZXR1cm4gIXRoaXMuX25vdGlmeWluZztcbiAgICB9O1xuXG4gICAgVW5jb250cm9sbGVkQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBfcmVmMi52YWx1ZXMsXG4gICAgICAgICAgcHJldlByb3BzID0gX3JlZjIucHJldlByb3BzO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWVzOiBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKG51bGwpLCB2YWx1ZXMpLFxuICAgICAgICBwcmV2UHJvcHM6IHt9XG4gICAgICB9O1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBwcm9wIHN3aXRjaGVzIGZyb20gY29udHJvbGxlZCB0byBVbmNvbnRyb2xsZWRcbiAgICAgICAgICogcmVzZXQgaXRzIHZhbHVlIHRvIHRoZSBkZWZhdWx0VmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIG5leHRTdGF0ZS5wcmV2UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG5cbiAgICAgICAgaWYgKCFVdGlscy5pc1Byb3AocHJvcHMsIGtleSkgJiYgVXRpbHMuaXNQcm9wKHByZXZQcm9wcywga2V5KSkge1xuICAgICAgICAgIG5leHRTdGF0ZS52YWx1ZXNba2V5XSA9IHByb3BzW1V0aWxzLmRlZmF1bHRLZXkoa2V5KV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVubW91bnRlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczIuaW5uZXJSZWYsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImlubmVyUmVmXCJdKTtcblxuICAgICAgUFJPUFNfVE9fT01JVC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wc1twcm9wXTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IF90aGlzMi5wcm9wc1twcm9wTmFtZV07XG4gICAgICAgIG5ld1Byb3BzW3Byb3BOYW1lXSA9IHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcFZhbHVlIDogX3RoaXMyLnN0YXRlLnZhbHVlc1twcm9wTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCBuZXdQcm9wcywgdGhpcy5oYW5kbGVycywge1xuICAgICAgICByZWY6IGlubmVyUmVmIHx8IHRoaXMuYXR0YWNoUmVmXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBVbmNvbnRyb2xsZWRDb21wb25lbnQ7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBwb2x5ZmlsbChVbmNvbnRyb2xsZWRDb21wb25lbnQpO1xuICBVbmNvbnRyb2xsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIlVuY29udHJvbGxlZChcIiArIGRpc3BsYXlOYW1lICsgXCIpXCI7XG4gIFVuY29udHJvbGxlZENvbXBvbmVudC5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7XG4gICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKCkge31cbiAgfSwgVXRpbHMudW5jb250cm9sbGVkUHJvcFR5cGVzKGNvbnRyb2xsZWRWYWx1ZXMsIGRpc3BsYXlOYW1lKSk7XG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgVW5jb250cm9sbGVkQ29tcG9uZW50LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gJHByb3hpZWRNZXRob2QoKSB7XG4gICAgICB2YXIgX3RoaXMkaW5uZXI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkaW5uZXIgPSB0aGlzLmlubmVyKVttZXRob2RdLmFwcGx5KF90aGlzJGlubmVyLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pO1xuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IFVuY29udHJvbGxlZENvbXBvbmVudDtcblxuICBpZiAoUmVhY3QuZm9yd2FyZFJlZikge1xuICAgIFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVbmNvbnRyb2xsZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTI4XG4gICAgICAgIH0sXG4gICAgICAgIF9fc2VsZjogdGhpc1xuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIFdyYXBwZWRDb21wb25lbnQucHJvcFR5cGVzID0gVW5jb250cm9sbGVkQ29tcG9uZW50LnByb3BUeXBlcztcbiAgfVxuXG4gIFdyYXBwZWRDb21wb25lbnQuQ29udHJvbGxlZENvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgLyoqXG4gICAqIHVzZWZ1bCB3aGVuIHdyYXBwaW5nIGEgQ29tcG9uZW50IGFuZCB5b3Ugd2FudCB0byBjb250cm9sXG4gICAqIGV2ZXJ5dGhpbmdcbiAgICovXG5cbiAgV3JhcHBlZENvbXBvbmVudC5kZWZlckNvbnRyb2xUbyA9IGZ1bmN0aW9uIChuZXdDb21wb25lbnQsIGFkZGl0aW9ucywgbmV4dE1ldGhvZHMpIHtcbiAgICBpZiAoYWRkaXRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIGFkZGl0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB1bmNvbnRyb2xsYWJsZShuZXdDb21wb25lbnQsIF9leHRlbmRzKHt9LCBjb250cm9sbGVkVmFsdWVzLCBhZGRpdGlvbnMpLCBuZXh0TWV0aG9kcyk7XG4gIH07XG5cbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQ7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VVbmNvbnRyb2xsZWQsIHVzZVVuY29udHJvbGxlZFByb3AgfSBmcm9tICcuL2hvb2snO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmNvbnRyb2xsYWJsZSB9IGZyb20gJy4vdW5jb250cm9sbGFibGUnOyIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBmaW5kKGl0ZXIsIHRhciwga2V5KSB7XG5cdGZvciAoa2V5IG9mIGl0ZXIua2V5cygpKSB7XG5cdFx0aWYgKGRlcXVhbChrZXksIHRhcikpIHJldHVybiBrZXk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuLCB0bXA7XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gU2V0KSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW47XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYmFyLmhhcyh0bXApKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gTWFwKSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW5bMF07XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGVxdWFsKGxlblsxXSwgYmFyLmdldCh0bXApKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG5cdFx0XHRmb28gPSBuZXcgVWludDhBcnJheShmb28pO1xuXHRcdFx0YmFyID0gbmV3IFVpbnQ4QXJyYXkoYmFyKTtcblx0XHR9IGVsc2UgaWYgKGN0b3IgPT09IERhdGFWaWV3KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb28uZ2V0SW50OChsZW4pID09PSBiYXIuZ2V0SW50OChsZW4pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZm9vKSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vW2xlbl0gPT09IGJhcltsZW5dKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5cbmZ1bmN0aW9uIHVzZVNhZmVTdGF0ZShzdGF0ZSkge1xuICB2YXIgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpO1xuICByZXR1cm4gW3N0YXRlWzBdLCB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFN0YXRlKSB7XG4gICAgaWYgKCFpc01vdW50ZWQoKSkgcmV0dXJuO1xuICAgIHJldHVybiBzdGF0ZVsxXShuZXh0U3RhdGUpO1xuICB9LCBbaXNNb3VudGVkLCBzdGF0ZVsxXV0pXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2FmZVN0YXRlOyIsImltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSAnZGVxdWFsJztcbmltcG9ydCB1c2VTYWZlU3RhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlU2FmZVN0YXRlJztcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gJy4vcG9wcGVyJztcblxuY29uc3QgZGlzYWJsZWRBcHBseVN0eWxlc01vZGlmaWVyID0ge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiBmYWxzZSxcbiAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbn07XG5cbi8vIHVudGlsIGRvY2pzIHN1cHBvcnRzIHR5cGUgZXhwb3J0cy4uLlxuZXhwb3J0IHR5cGUgTW9kaWZpZXI8TmFtZSwgT3B0aW9ucz4gPSBQb3BwZXIuTW9kaWZpZXI8TmFtZSwgT3B0aW9ucz47XG5leHBvcnQgdHlwZSBPcHRpb25zID0gUG9wcGVyLk9wdGlvbnM7XG5leHBvcnQgdHlwZSBJbnN0YW5jZSA9IFBvcHBlci5JbnN0YW5jZTtcbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9IFBvcHBlci5QbGFjZW1lbnQ7XG5leHBvcnQgdHlwZSBWaXJ0dWFsRWxlbWVudCA9IFBvcHBlci5WaXJ0dWFsRWxlbWVudDtcbmV4cG9ydCB0eXBlIFN0YXRlID0gUG9wcGVyLlN0YXRlO1xuXG5leHBvcnQgdHlwZSBPZmZzZXRWYWx1ZSA9IFtcbiAgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbl07XG5leHBvcnQgdHlwZSBPZmZzZXRGdW5jdGlvbiA9IChkZXRhaWxzOiB7XG4gIHBvcHBlcjogUG9wcGVyLlJlY3Q7XG4gIHJlZmVyZW5jZTogUG9wcGVyLlJlY3Q7XG4gIHBsYWNlbWVudDogUGxhY2VtZW50O1xufSkgPT4gT2Zmc2V0VmFsdWU7XG5cbmV4cG9ydCB0eXBlIE9mZnNldCA9IE9mZnNldEZ1bmN0aW9uIHwgT2Zmc2V0VmFsdWU7XG5cbmV4cG9ydCB0eXBlIE1vZGlmaWVyTWFwID0gUmVjb3JkPHN0cmluZywgUGFydGlhbDxNb2RpZmllcjxhbnksIGFueT4+PjtcbmV4cG9ydCB0eXBlIE1vZGlmaWVycyA9XG4gIHwgUG9wcGVyLk9wdGlvbnNbJ21vZGlmaWVycyddXG4gIHwgUmVjb3JkPHN0cmluZywgUGFydGlhbDxNb2RpZmllcjxhbnksIGFueT4+PjtcblxuZXhwb3J0IHR5cGUgVXNlUG9wcGVyT3B0aW9ucyA9IE9taXQ8XG4gIE9wdGlvbnMsXG4gICdtb2RpZmllcnMnIHwgJ3BsYWNlbWVudCcgfCAnc3RyYXRlZ3knXG4+ICYge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgcGxhY2VtZW50PzogT3B0aW9uc1sncGxhY2VtZW50J107XG4gIHN0cmF0ZWd5PzogT3B0aW9uc1snc3RyYXRlZ3knXTtcbiAgbW9kaWZpZXJzPzogT3B0aW9uc1snbW9kaWZpZXJzJ107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVBvcHBlclN0YXRlIHtcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIHVwZGF0ZTogKCkgPT4gdm9pZDtcbiAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQ7XG4gIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT4+O1xuICBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4+O1xuICBzdGF0ZT86IFN0YXRlO1xufVxuXG5jb25zdCBhcmlhRGVzY3JpYmVkQnlNb2RpZmllcjogTW9kaWZpZXI8J2FyaWFEZXNjcmliZWRCeScsIHVuZGVmaW5lZD4gPSB7XG4gIG5hbWU6ICdhcmlhRGVzY3JpYmVkQnknLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICBlZmZlY3Q6ICh7IHN0YXRlIH0pID0+ICgpID0+IHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgcG9wcGVyIH0gPSBzdGF0ZS5lbGVtZW50cztcbiAgICBpZiAoJ3JlbW92ZUF0dHJpYnV0ZScgaW4gcmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBpZHMgPSAocmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpIHx8ICcnKVxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAuZmlsdGVyKChpZCkgPT4gaWQudHJpbSgpICE9PSBwb3BwZXIuaWQpO1xuXG4gICAgICBpZiAoIWlkcy5sZW5ndGgpIHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIGVsc2UgcmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGlkcy5qb2luKCcsJykpO1xuICAgIH1cbiAgfSxcbiAgZm46ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBzdGF0ZS5lbGVtZW50cztcblxuICAgIGNvbnN0IHJvbGUgPSBwb3BwZXIuZ2V0QXR0cmlidXRlKCdyb2xlJyk/LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAocG9wcGVyLmlkICYmIHJvbGUgPT09ICd0b29sdGlwJyAmJiAnc2V0QXR0cmlidXRlJyBpbiByZWZlcmVuY2UpIHtcbiAgICAgIGNvbnN0IGlkcyA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIGlmIChpZHMgJiYgaWRzLnNwbGl0KCcsJykuaW5kZXhPZihwb3BwZXIuaWQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JyxcbiAgICAgICAgaWRzID8gYCR7aWRzfSwke3BvcHBlci5pZH1gIDogcG9wcGVyLmlkLFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG59O1xuXG5jb25zdCBFTVBUWV9NT0RJRklFUlMgPSBbXSBhcyBhbnk7XG4vKipcbiAqIFBvc2l0aW9uIGFuIGVsZW1lbnQgcmVsYXRpdmUgc29tZSByZWZlcmVuY2UgZWxlbWVudCB1c2luZyBQb3BwZXIuanNcbiAqXG4gKiBAcGFyYW0gcmVmZXJlbmNlRWxlbWVudFxuICogQHBhcmFtIHBvcHBlckVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgIG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0PX0gICAgIG9wdGlvbnMubW9kaWZpZXJzIFBvcHBlci5qcyBtb2RpZmllcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbj19ICAgIG9wdGlvbnMuZW5hYmxlZCB0b2dnbGUgdGhlIHBvcHBlciBmdW5jdGlvbmFsaXR5IG9uL29mZlxuICogQHBhcmFtIHtzdHJpbmc9fSAgICAgb3B0aW9ucy5wbGFjZW1lbnQgVGhlIHBvcHBlciBlbGVtZW50IHBsYWNlbWVudCByZWxhdGl2ZSB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nPX0gICAgIG9wdGlvbnMuc3RyYXRlZ3kgdGhlIHBvc2l0aW9uaW5nIHN0cmF0ZWd5XG4gKiBAcGFyYW0ge2Z1bmN0aW9uPX0gICBvcHRpb25zLm9uQ3JlYXRlIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZFxuICogQHBhcmFtIHtmdW5jdGlvbj19ICAgb3B0aW9ucy5vblVwZGF0ZSBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWRcbiAqXG4gKiBAcmV0dXJucyB7VXNlUG9wcGVyU3RhdGV9IFRoZSBwb3BwZXIgc3RhdGVcbiAqL1xuZnVuY3Rpb24gdXNlUG9wcGVyKFxuICByZWZlcmVuY2VFbGVtZW50OiBWaXJ0dWFsRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHBvcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAge1xuICAgIGVuYWJsZWQgPSB0cnVlLFxuICAgIHBsYWNlbWVudCA9ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5ID0gJ2Fic29sdXRlJyxcbiAgICBtb2RpZmllcnMgPSBFTVBUWV9NT0RJRklFUlMsXG4gICAgLi4uY29uZmlnXG4gIH06IFVzZVBvcHBlck9wdGlvbnMgPSB7fSxcbik6IFVzZVBvcHBlclN0YXRlIHtcbiAgY29uc3QgcHJldk1vZGlmaWVycyA9IHVzZVJlZjxVc2VQb3BwZXJPcHRpb25zWydtb2RpZmllcnMnXT4obW9kaWZpZXJzKTtcbiAgY29uc3QgcG9wcGVySW5zdGFuY2VSZWYgPSB1c2VSZWY8SW5zdGFuY2U+KCk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQ/LnVwZGF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudD8uZm9yY2VVcGRhdGUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtwb3BwZXJTdGF0ZSwgc2V0U3RhdGVdID0gdXNlU2FmZVN0YXRlKFxuICAgIHVzZVN0YXRlPFVzZVBvcHBlclN0YXRlPih7XG4gICAgICBwbGFjZW1lbnQsXG4gICAgICB1cGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHBvcHBlcjoge30sXG4gICAgICAgIGFycm93OiB7fSxcbiAgICAgIH0sXG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgdXBkYXRlTW9kaWZpZXIgPSB1c2VNZW1vPE1vZGlmaWVyPCd1cGRhdGVTdGF0ZU1vZGlmaWVyJywgYW55Pj4oXG4gICAgKCkgPT4gKHtcbiAgICAgIG5hbWU6ICd1cGRhdGVTdGF0ZU1vZGlmaWVyJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ3dyaXRlJyxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbiAgICAgIGZuOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlczogVXNlUG9wcGVyU3RhdGVbJ3N0eWxlcyddID0ge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IFVzZVBvcHBlclN0YXRlWydhdHRyaWJ1dGVzJ10gPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHN0eWxlc1tlbGVtZW50XSA9IHN0YXRlLnN0eWxlc1tlbGVtZW50XTtcbiAgICAgICAgICBhdHRyaWJ1dGVzW2VsZW1lbnRdID0gc3RhdGUuYXR0cmlidXRlc1tlbGVtZW50XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgIHVwZGF0ZSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIFt1cGRhdGUsIGZvcmNlVXBkYXRlLCBzZXRTdGF0ZV0sXG4gICk7XG5cbiAgY29uc3QgbmV4dE1vZGlmaWVycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghZGVxdWFsKHByZXZNb2RpZmllcnMuY3VycmVudCwgbW9kaWZpZXJzKSkge1xuICAgICAgcHJldk1vZGlmaWVycy5jdXJyZW50ID0gbW9kaWZpZXJzO1xuICAgIH1cbiAgICByZXR1cm4gcHJldk1vZGlmaWVycy5jdXJyZW50ITtcbiAgfSwgW21vZGlmaWVyc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50IHx8ICFlbmFibGVkKSByZXR1cm47XG5cbiAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50LnNldE9wdGlvbnMoe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4ubmV4dE1vZGlmaWVycyxcbiAgICAgICAgdXBkYXRlTW9kaWZpZXIsXG4gICAgICAgIGRpc2FibGVkQXBwbHlTdHlsZXNNb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSk7XG4gIH0sIFtzdHJhdGVneSwgcGxhY2VtZW50LCB1cGRhdGVNb2RpZmllciwgZW5hYmxlZCwgbmV4dE1vZGlmaWVyc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbmFibGVkIHx8IHJlZmVyZW5jZUVsZW1lbnQgPT0gbnVsbCB8fCBwb3BwZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJFbGVtZW50LCB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneSxcbiAgICAgIG1vZGlmaWVyczogWy4uLm5leHRNb2RpZmllcnMsIGFyaWFEZXNjcmliZWRCeU1vZGlmaWVyLCB1cGRhdGVNb2RpZmllcl0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgICAuLi5zLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgIHN0eWxlczogeyBwb3BwZXI6IHt9IH0sXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoaXMgaXMgb25seSBydW4gb25jZSB0byBfY3JlYXRlXyB0aGUgcG9wcGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZW5hYmxlZCwgcmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudF0pO1xuXG4gIHJldHVybiBwb3BwZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUG9wcGVyO1xuIiwidmFyIG1hdGNoZXNJbXBsO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF0Y2hlcyhub2RlLCBzZWxlY3Rvcikge1xuICBpZiAoIW1hdGNoZXNJbXBsKSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBuYXRpdmVNYXRjaCA9IGJvZHkubWF0Y2hlcyB8fCBib2R5Lm1hdGNoZXNTZWxlY3RvciB8fCBib2R5LndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBib2R5Lm1vek1hdGNoZXNTZWxlY3RvciB8fCBib2R5Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgbWF0Y2hlc0ltcGwgPSBmdW5jdGlvbiBtYXRjaGVzSW1wbChuLCBzKSB7XG4gICAgICByZXR1cm4gbmF0aXZlTWF0Y2guY2FsbChuLCBzKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXNJbXBsKG5vZGUsIHNlbGVjdG9yKTtcbn0iLCJpbXBvcnQgbWF0Y2hlcyBmcm9tICdkb20taGVscGVycy9tYXRjaGVzJztcbmltcG9ydCBxc2EgZnJvbSAnZG9tLWhlbHBlcnMvcXVlcnlTZWxlY3RvckFsbCc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdkb20taGVscGVycy9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAndW5jb250cm9sbGFibGUnO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCB1c2VGb3JjZVVwZGF0ZSBmcm9tICdAcmVzdGFydC9ob29rcy91c2VGb3JjZVVwZGF0ZSc7XG5pbXBvcnQgdXNlR2xvYmFsTGlzdGVuZXIgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlR2xvYmFsTGlzdGVuZXInO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5cbmltcG9ydCBEcm9wZG93bkNvbnRleHQgZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuaW1wb3J0IERyb3Bkb3duTWVudSwge1xuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG59IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCBEcm9wZG93blRvZ2dsZSwge1xuICBEcm9wZG93blRvZ2dsZVByb3BzLFxuICBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxufSBmcm9tICcuL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCBEcm9wZG93bkl0ZW0sIHsgRHJvcGRvd25JdGVtUHJvcHMgfSBmcm9tICcuL0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQgZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgeyBTZWxlY3RDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZGF0YUF0dHIgfSBmcm9tICcuL0RhdGFLZXknO1xuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnLi91c2VQb3BwZXInO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJy4vcG9wcGVyJztcblxuZXhwb3J0IHR5cGUge1xuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG4gIERyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG4gIERyb3Bkb3duSXRlbVByb3BzLFxufTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgdGhlIHJvb3QgZHJvcGRvd24gZWxlbWVudC4gVGhlIGBwcm9wc2BcbiAgICogYXJndW1lbnQgc2hvdWxkIHNwcmVhZCB0aHJvdWdoIHRvIGFuIGVsZW1lbnQgY29udGFpbmluZyBfYm90aF8gdGhlXG4gICAqIG1lbnUgYW5kIHRvZ2dsZSBpbiBvcmRlciB0byBoYW5kbGUga2V5Ym9hcmQgZXZlbnRzIGZvciBmb2N1cyBtYW5hZ2VtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgb25LZXlEb3duOiAoU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gICAqICAgfSxcbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIFBvcHBlckpTIHBsYWNlbWVudCBmb3IgcG9zaXRpb25pbmcgdGhlIERyb3Bkb3duIG1lbnUgaW4gcmVsYXRpb24gdG8gaXQncyBUb2dnbGUuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdib3R0b20tc3RhcnQnXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihwbGFjZW1lbnRzKSxcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIGZvY3VzIGJlaGF2aW9yIGZvciB3aGVuIHRoZSBEcm9wZG93biBpcyBvcGVuZWQuIFNldCB0b1xuICAgKiBgdHJ1ZWAgdG8gYWx3YXlzIGZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW0sIGBrZXlib2FyZGAgdG8gZm9jdXMgb25seSB3aGVuXG4gICAqIG5hdmlnYXRpbmcgdmlhIHRoZSBrZXlib2FyZCwgb3IgYGZhbHNlYCB0byBkaXNhYmxlIGNvbXBsZXRlbHlcbiAgICpcbiAgICogVGhlIERlZmF1bHQgYmVoYXZpb3IgaXMgYGZhbHNlYCAqKnVubGVzcyoqIHRoZSBNZW51IGhhcyBhIGByb2xlPVwibWVudVwiYFxuICAgKiB3aGVyZSBpdCB3aWxsIGRlZmF1bHQgdG8gYGtleWJvYXJkYCB0byBtYXRjaCB0aGUgcmVjb21tZW5kZWQgW0FSSUEgQXV0aG9yaW5nIHByYWN0aWNlc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI21lbnVidXR0b24pLlxuICAgKi9cbiAgZm9jdXNGaXJzdEl0ZW1PblNob3c6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsIHRydWUsICdrZXlib2FyZCddKSxcblxuICAvKipcbiAgICogQSBjc3Mgc2xlY3RvciBzdHJpbmcgdGhhdCB3aWxsIHJldHVybiBfX2ZvY3VzYWJsZV9fIG1lbnUgaXRlbXMuXG4gICAqIFNlbGVjdG9ycyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIG1lbnUgY29tcG9uZW50OlxuICAgKiBlLmcuIGAgPiBsaTpub3QoJy5kaXNhYmxlZCcpYFxuICAgKi9cbiAgaXRlbVNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgRHJvcGRvd24gaXMgdmlzaWJsZS5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBvblRvZ2dsZVxuICAgKi9cbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgc2hvdyBwb3NpdGlvbiBvZiB0aGUgRHJvcGRvd24uXG4gICAqL1xuICBkZWZhdWx0U2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgRHJvcGRvd24gd2lzaGVzIHRvIGNoYW5nZSB2aXNpYmlsaXR5LiBDYWxsZWQgd2l0aCB0aGUgcmVxdWVzdGVkXG4gICAqIGBzaG93YCB2YWx1ZSwgdGhlIERPTSBldmVudCwgYW5kIHRoZSBzb3VyY2UgdGhhdCBmaXJlZCBpdDogYCdjbGljaydgLGAna2V5ZG93bidgLGAncm9vdENsb3NlJ2AsIG9yIGAnc2VsZWN0J2AuXG4gICAqXG4gICAqIGBgYHRzIHN0YXRpY1xuICAgKiBmdW5jdGlvbihcbiAgICogICBpc09wZW46IGJvb2xlYW4sXG4gICAqICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50LFxuICAgKiApOiB2b2lkXG4gICAqIGBgYFxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIHNob3dcbiAgICovXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmplY3RlZFByb3BzIHtcbiAgb25LZXlEb3duOiBSZWFjdC5LZXlib2FyZEV2ZW50SGFuZGxlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVNZXRhZGF0YSB7XG4gIHNvdXJjZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvcmlnaW5hbEV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCB8IEV2ZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duUHJvcHMge1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG4gIGRlZmF1bHRTaG93PzogYm9vbGVhbjtcbiAgc2hvdz86IGJvb2xlYW47XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG4gIG9uVG9nZ2xlPzogKG5leHRTaG93OiBib29sZWFuLCBtZXRhOiBUb2dnbGVNZXRhZGF0YSkgPT4gdm9pZDtcbiAgaXRlbVNlbGVjdG9yPzogc3RyaW5nO1xuICBmb2N1c0ZpcnN0SXRlbU9uU2hvdz86IGZhbHNlIHwgdHJ1ZSB8ICdrZXlib2FyZCc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZldpdGhVcGRhdGUoKSB7XG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGF0dGFjaFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbGVtZW50OiBudWxsIHwgSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IGEgbWVudSBzZXQgdHJpZ2dlcnMgYW4gdXBkYXRlIGZvciBjb25zdW1lcnNcbiAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgfSxcbiAgICBbZm9yY2VVcGRhdGVdLFxuICApO1xuICByZXR1cm4gW3JlZiwgYXR0YWNoUmVmXSBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRHJvcGRvd24oe1xuICBkZWZhdWx0U2hvdyxcbiAgc2hvdzogcmF3U2hvdyxcbiAgb25TZWxlY3QsXG4gIG9uVG9nZ2xlOiByYXdPblRvZ2dsZSxcbiAgaXRlbVNlbGVjdG9yID0gYCogWyR7ZGF0YUF0dHIoJ2Ryb3Bkb3duLWl0ZW0nKX1dYCxcbiAgZm9jdXNGaXJzdEl0ZW1PblNob3csXG4gIHBsYWNlbWVudCA9ICdib3R0b20tc3RhcnQnLFxuICBjaGlsZHJlbixcbn06IERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3QgW3Nob3csIG9uVG9nZ2xlXSA9IHVzZVVuY29udHJvbGxlZFByb3AoXG4gICAgcmF3U2hvdyxcbiAgICBkZWZhdWx0U2hvdyEsXG4gICAgcmF3T25Ub2dnbGUsXG4gICk7XG5cbiAgLy8gV2UgdXNlIG5vcm1hbCByZWZzIGluc3RlYWQgb2YgdXNlQ2FsbGJhY2tSZWYgaW4gb3JkZXIgdG8gcG9wdWxhdGUgdGhlXG4gIC8vIHRoZSB2YWx1ZSBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLCBvdGhlcndpc2UgdGhlIGVmZmVjdCB0byBmb2N1cyB0aGUgZWxlbWVudFxuICAvLyBtYXkgcnVuIGJlZm9yZSB0aGUgc3RhdGUgdmFsdWUgaXMgc2V0XG4gIGNvbnN0IFttZW51UmVmLCBzZXRNZW51XSA9IHVzZVJlZldpdGhVcGRhdGUoKTtcbiAgY29uc3QgbWVudUVsZW1lbnQgPSBtZW51UmVmLmN1cnJlbnQ7XG5cbiAgY29uc3QgW3RvZ2dsZVJlZiwgc2V0VG9nZ2xlXSA9IHVzZVJlZldpdGhVcGRhdGUoKTtcbiAgY29uc3QgdG9nZ2xlRWxlbWVudCA9IHRvZ2dsZVJlZi5jdXJyZW50O1xuXG4gIGNvbnN0IGxhc3RTaG93ID0gdXNlUHJldmlvdXMoc2hvdyk7XG4gIGNvbnN0IGxhc3RTb3VyY2VFdmVudCA9IHVzZVJlZjxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZm9jdXNJbkRyb3Bkb3duID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3Qgb25TZWxlY3RDdHggPSB1c2VDb250ZXh0KFNlbGVjdGFibGVDb250ZXh0KTtcblxuICBjb25zdCB0b2dnbGUgPSB1c2VDYWxsYmFjayhcbiAgICAoXG4gICAgICBuZXh0U2hvdzogYm9vbGVhbixcbiAgICAgIGV2ZW50PzogRXZlbnQgfCBSZWFjdC5TeW50aGV0aWNFdmVudCxcbiAgICAgIHNvdXJjZSA9IGV2ZW50Py50eXBlLFxuICAgICkgPT4ge1xuICAgICAgb25Ub2dnbGUobmV4dFNob3csIHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHNvdXJjZSB9KTtcbiAgICB9LFxuICAgIFtvblRvZ2dsZV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlRXZlbnRDYWxsYmFjayhcbiAgICAoa2V5OiBzdHJpbmcgfCBudWxsLCBldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgIG9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG5cbiAgICAgIGlmICghZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgdG9nZ2xlKGZhbHNlLCBldmVudCwgJ3NlbGVjdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgb25TZWxlY3RDdHg/LihrZXksIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICApO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB0b2dnbGUsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBzaG93LFxuICAgICAgbWVudUVsZW1lbnQsXG4gICAgICB0b2dnbGVFbGVtZW50LFxuICAgICAgc2V0TWVudSxcbiAgICAgIHNldFRvZ2dsZSxcbiAgICB9KSxcbiAgICBbdG9nZ2xlLCBwbGFjZW1lbnQsIHNob3csIG1lbnVFbGVtZW50LCB0b2dnbGVFbGVtZW50LCBzZXRNZW51LCBzZXRUb2dnbGVdLFxuICApO1xuXG4gIGlmIChtZW51RWxlbWVudCAmJiBsYXN0U2hvdyAmJiAhc2hvdykge1xuICAgIGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50ID0gbWVudUVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICBjb25zdCBmb2N1c1RvZ2dsZSA9IHVzZUV2ZW50Q2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh0b2dnbGVFbGVtZW50ICYmIHRvZ2dsZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgIHRvZ2dsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG1heWJlRm9jdXNGaXJzdCA9IHVzZUV2ZW50Q2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBsYXN0U291cmNlRXZlbnQuY3VycmVudDtcbiAgICBsZXQgZm9jdXNUeXBlID0gZm9jdXNGaXJzdEl0ZW1PblNob3c7XG5cbiAgICBpZiAoZm9jdXNUeXBlID09IG51bGwpIHtcbiAgICAgIGZvY3VzVHlwZSA9XG4gICAgICAgIG1lbnVSZWYuY3VycmVudCAmJiBtYXRjaGVzKG1lbnVSZWYuY3VycmVudCwgJ1tyb2xlPW1lbnVdJylcbiAgICAgICAgICA/ICdrZXlib2FyZCdcbiAgICAgICAgICA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGZvY3VzVHlwZSA9PT0gZmFsc2UgfHxcbiAgICAgIChmb2N1c1R5cGUgPT09ICdrZXlib2FyZCcgJiYgIS9ea2V5LiskLy50ZXN0KHR5cGUhKSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdCA9IHFzYShtZW51UmVmLmN1cnJlbnQhLCBpdGVtU2VsZWN0b3IpWzBdO1xuICAgIGlmIChmaXJzdCAmJiBmaXJzdC5mb2N1cykgZmlyc3QuZm9jdXMoKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvdykgbWF5YmVGb2N1c0ZpcnN0KCk7XG4gICAgZWxzZSBpZiAoZm9jdXNJbkRyb3Bkb3duLmN1cnJlbnQpIHtcbiAgICAgIGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBmb2N1c1RvZ2dsZSgpO1xuICAgIH1cbiAgICAvLyBvbmx5IGBzaG93YCBzaG91bGQgYmUgY2hhbmdpbmdcbiAgfSwgW3Nob3csIGZvY3VzSW5Ecm9wZG93biwgZm9jdXNUb2dnbGUsIG1heWJlRm9jdXNGaXJzdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQgPSBudWxsO1xuICB9KTtcblxuICBjb25zdCBnZXROZXh0Rm9jdXNlZENoaWxkID0gKGN1cnJlbnQ6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgIGlmICghbWVudVJlZi5jdXJyZW50KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGl0ZW1zID0gcXNhKG1lbnVSZWYuY3VycmVudCwgaXRlbVNlbGVjdG9yKTtcblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoY3VycmVudCkgKyBvZmZzZXQ7XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgaXRlbXMubGVuZ3RoKSk7XG5cbiAgICByZXR1cm4gaXRlbXNbaW5kZXhdO1xuICB9O1xuXG4gIHVzZUdsb2JhbExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0IGZyb21NZW51ID0gbWVudVJlZi5jdXJyZW50Py5jb250YWlucyh0YXJnZXQpO1xuICAgIGNvbnN0IGZyb21Ub2dnbGUgPSB0b2dnbGVSZWYuY3VycmVudD8uY29udGFpbnModGFyZ2V0KTtcblxuICAgIC8vIFNlY29uZCBvbmx5IHRvIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzhjZmJmNjkzM2I4YTAxNDZhYzNmYmMzNjlmMTllNTIwYmQxZWJkYWMvanMvc3JjL2Ryb3Bkb3duLmpzI0w0MDBcbiAgICAvLyBpbiBpbnNjcnV0YWJpbGl0eVxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHRhcmdldC50YWdOYW1lKTtcbiAgICBpZiAoaXNJbnB1dCAmJiAoa2V5ID09PSAnICcgfHwgKGtleSAhPT0gJ0VzY2FwZScgJiYgZnJvbU1lbnUpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZnJvbU1lbnUgJiYgIWZyb21Ub2dnbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnVGFiJyAmJiAoIW1lbnVSZWYuY3VycmVudCB8fCAhc2hvdykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsYXN0U291cmNlRXZlbnQuY3VycmVudCA9IGV2ZW50LnR5cGU7XG4gICAgY29uc3QgbWV0YSA9IHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHNvdXJjZTogZXZlbnQudHlwZSB9O1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzoge1xuICAgICAgICBjb25zdCBuZXh0ID0gZ2V0TmV4dEZvY3VzZWRDaGlsZCh0YXJnZXQsIC0xKTtcbiAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5mb2N1cykgbmV4dC5mb2N1cygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghc2hvdykge1xuICAgICAgICAgIG9uVG9nZ2xlKHRydWUsIG1ldGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBnZXROZXh0Rm9jdXNlZENoaWxkKHRhcmdldCwgMSk7XG4gICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5mb2N1cykgbmV4dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIC8vIG9uIGtleWRvd24gdGhlIHRhcmdldCBpcyB0aGUgZWxlbWVudCBiZWluZyB0YWJiZWQgRlJPTSwgd2UgbmVlZCB0aGF0XG4gICAgICAgIC8vIHRvIGtub3cgaWYgdGhpcyBldmVudCBpcyByZWxldmFudCB0byB0aGlzIGRyb3Bkb3duIChlLmcuIGluIHRoaXMgbWVudSkuXG4gICAgICAgIC8vIE9uIGBrZXl1cGAgdGhlIHRhcmdldCBpcyB0aGUgZWxlbWVudCBiZWluZyB0YWdnZWQgVE8gd2hpY2ggd2UgdXNlIHRvIGNoZWNrXG4gICAgICAgIC8vIGlmIGZvY3VzIGhhcyBsZWZ0IHRoZSBtZW51XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgZG9jdW1lbnQgYXMgYW55LFxuICAgICAgICAgICdrZXl1cCcsXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKGUua2V5ID09PSAnVGFiJyAmJiAhZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAgICFtZW51UmVmLmN1cnJlbnQ/LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG9uVG9nZ2xlKGZhbHNlLCBtZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uVG9nZ2xlKGZhbHNlLCBtZXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hhbmRsZVNlbGVjdH0+XG4gICAgICA8RHJvcGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ecm9wZG93bkNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuRHJvcGRvd24uZGlzcGxheU5hbWUgPSAnRHJvcGRvd24nO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkRyb3Bkb3duLk1lbnUgPSBEcm9wZG93bk1lbnU7XG5Ecm9wZG93bi5Ub2dnbGUgPSBEcm9wZG93blRvZ2dsZTtcbkRyb3Bkb3duLkl0ZW0gPSBEcm9wZG93bkl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwiZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgdmFyIGNhcHR1cmUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnYm9vbGVhbicgPyBvcHRpb25zLmNhcHR1cmUgOiBvcHRpb25zO1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlKTtcblxuICBpZiAoaGFuZGxlci5fX29uY2UpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLl9fb25jZSwgY2FwdHVyZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRXZlbnRMaXN0ZW5lcjsiLCJpbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICcuL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHJlbW92ZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi9yZW1vdmVFdmVudExpc3RlbmVyJztcblxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW47IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVmYCB3aG9zZSB2YWx1ZSBpcyB1cGRhdGVkIGluIGFuIGVmZmVjdCwgZW5zdXJpbmcgdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZSBpcyB0aGUgb25lIHJlbmRlcmVkIHdpdGguIEdlbmVyYWxseSBvbmx5IHJlcXVpcmVkIGZvciBDb25jdXJyZW50IG1vZGUgdXNhZ2VcbiAqIHdoZXJlIHByZXZpb3VzIHdvcmsgaW4gYHJlbmRlcigpYCBtYXkgYmUgZGlzY2FyZGVkIGJlZm9yIGJlaW5nIHVzZWQuXG4gKlxuICogVGhpcyBpcyBzYWZlIHRvIGFjY2VzcyBpbiBhbiBldmVudCBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgYFJlZmAgdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb21taXR0ZWRSZWYodmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiByZWY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvbW1pdHRlZFJlZjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuQ29udGV4dCA9IGV4cG9ydHMuYWxsVmFsdWVzID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBhbGxWYWx1ZXMgPSBvYmogPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGtleXMubWFwKGsgPT4gb2JqW2tdKSkudGhlbih2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IG5leHQgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGssIGkpID0+IHtcbiAgICAgIG5leHRba10gPSB2YWx1ZXNbaV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5hbGxWYWx1ZXMgPSBhbGxWYWx1ZXM7XG5cbmNvbnN0IENvbnRleHQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuXG5cbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XG5cbnZhciBfZGVmYXVsdCA9ICh7XG4gIGltcG9ydHMsXG4gIGNoaWxkcmVuXG59KSA9PiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gIHZhbHVlOiBpbXBvcnRzXG59LCBjaGlsZHJlbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4vdXNlRXZlbnRDYWxsYmFjayc7XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBvdXRzaWRlIGRpcmVjdGx5IHRvIHNwZWNpZmllZCBET00gZWxlbWVudFxuICogYnlwYXNzaW5nIHRoZSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc3lzdGVtLlxuICpcbiAqIEBwYXJhbSBlbGVtZW50IFRoZSB0YXJnZXQgdG8gbGlzdGVuIGZvciBldmVudHMgb25cbiAqIEBwYXJhbSBldmVudCBUaGUgRE9NIGV2ZW50IG5hbWVcbiAqIEBwYXJhbSBoYW5kbGVyIEFuIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSBjYXB0dXJlIFdoZXRoZXIgb3Igbm90IHRvIGxpc3RlbiBkdXJpbmcgdGhlIGNhcHR1cmUgZXZlbnQgcGhhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gIGlmIChjYXB0dXJlID09PSB2b2lkIDApIHtcbiAgICBjYXB0dXJlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IHVzZUV2ZW50Q2FsbGJhY2sobGlzdGVuZXIpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0YXJnZXQgPSB0eXBlb2YgZXZlbnRUYXJnZXQgPT09ICdmdW5jdGlvbicgPyBldmVudFRhcmdldCgpIDogZXZlbnRUYXJnZXQ7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgIH07XG4gIH0sIFtldmVudFRhcmdldF0pO1xufSIsImltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIG91dHNpZGUgZGlyZWN0bHkgdG8gdGhlIGBkb2N1bWVudGAsXG4gKiBieXBhc3NpbmcgdGhlIHJlYWN0IHN5bnRoZXRpYyBldmVudCBzeXN0ZW0uXG4gKlxuICogYGBgdHNcbiAqIHVzZUdsb2JhbExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gKiAgY29uc29sZS5sb2coZXZlbnQua2V5KVxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBldmVudCBUaGUgRE9NIGV2ZW50IG5hbWVcbiAqIEBwYXJhbSBoYW5kbGVyIEFuIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSBjYXB0dXJlIFdoZXRoZXIgb3Igbm90IHRvIGxpc3RlbiBkdXJpbmcgdGhlIGNhcHR1cmUgZXZlbnQgcGhhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2xvYmFsTGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgaWYgKGNhcHR1cmUgPT09IHZvaWQgMCkge1xuICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudFRhcmdldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHVzZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnRUYXJnZXQsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbn0iLCJpbXBvcnQgaXNEb2N1bWVudCBmcm9tICcuL2lzRG9jdW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaW5kb3cobm9kZSkge1xuICBpZiAoJ3dpbmRvdycgaW4gbm9kZSAmJiBub2RlLndpbmRvdyA9PT0gbm9kZSkgcmV0dXJuIG5vZGU7XG4gIGlmIChpc0RvY3VtZW50KG5vZGUpKSByZXR1cm4gbm9kZS5kZWZhdWx0VmlldyB8fCBmYWxzZTtcbiAgcmV0dXJuIGZhbHNlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRG9jdW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gJ25vZGVUeXBlJyBpbiBlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IGRvY3VtZW50LkRPQ1VNRU5UX05PREU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxtPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLHI9cmVxdWlyZShcInNjaGVkdWxlclwiKTtmdW5jdGlvbiB5KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifWlmKCFhYSl0aHJvdyBFcnJvcih5KDIyNykpO3ZhciBiYT1uZXcgU2V0LGNhPXt9O2Z1bmN0aW9uIGRhKGEsYil7ZWEoYSxiKTtlYShhK1wiQ2FwdHVyZVwiLGIpfVxuZnVuY3Rpb24gZWEoYSxiKXtjYVthXT1iO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspYmEuYWRkKGJbYV0pfVxudmFyIGZhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KSxoYT0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8saWE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbmphPXt9LGthPXt9O2Z1bmN0aW9uIGxhKGEpe2lmKGlhLmNhbGwoa2EsYSkpcmV0dXJuITA7aWYoaWEuY2FsbChqYSxhKSlyZXR1cm4hMTtpZihoYS50ZXN0KGEpKXJldHVybiBrYVthXT0hMDtqYVthXT0hMDtyZXR1cm4hMX1mdW5jdGlvbiBtYShhLGIsYyxkKXtpZihudWxsIT09YyYmMD09PWMudHlwZSlyZXR1cm4hMTtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJmdW5jdGlvblwiOmNhc2UgXCJzeW1ib2xcIjpyZXR1cm4hMDtjYXNlIFwiYm9vbGVhblwiOmlmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpcmV0dXJuIWMuYWNjZXB0c0Jvb2xlYW5zO2E9YS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsNSk7cmV0dXJuXCJkYXRhLVwiIT09YSYmXCJhcmlhLVwiIT09YTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIG5hKGEsYixjLGQpe2lmKG51bGw9PT1ifHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fG1hKGEsYixjLGQpKXJldHVybiEwO2lmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpc3dpdGNoKGMudHlwZSl7Y2FzZSAzOnJldHVybiFiO2Nhc2UgNDpyZXR1cm4hMT09PWI7Y2FzZSA1OnJldHVybiBpc05hTihiKTtjYXNlIDY6cmV0dXJuIGlzTmFOKGIpfHwxPmJ9cmV0dXJuITF9ZnVuY3Rpb24gQihhLGIsYyxkLGUsZixnKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1iO3RoaXMuc2FuaXRpemVVUkw9Zjt0aGlzLnJlbW92ZUVtcHR5U3RyaW5nPWd9dmFyIEQ9e307XG5cImNoaWxkcmVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGRlZmF1bHRWYWx1ZSBkZWZhdWx0Q2hlY2tlZCBpbm5lckhUTUwgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBzdHlsZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwwLCExLGEsbnVsbCwhMSwhMSl9KTtbW1wiYWNjZXB0Q2hhcnNldFwiLFwiYWNjZXB0LWNoYXJzZXRcIl0sW1wiY2xhc3NOYW1lXCIsXCJjbGFzc1wiXSxbXCJodG1sRm9yXCIsXCJmb3JcIl0sW1wiaHR0cEVxdWl2XCIsXCJodHRwLWVxdWl2XCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWFbMF07RFtiXT1uZXcgQihiLDEsITEsYVsxXSxudWxsLCExLCExKX0pO1tcImNvbnRlbnRFZGl0YWJsZVwiLFwiZHJhZ2dhYmxlXCIsXCJzcGVsbENoZWNrXCIsXCJ2YWx1ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwyLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiYXV0b1JldmVyc2VcIixcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcImZvY3VzYWJsZVwiLFwicHJlc2VydmVBbHBoYVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwyLCExLGEsbnVsbCwhMSwhMSl9KTtcImFsbG93RnVsbFNjcmVlbiBhc3luYyBhdXRvRm9jdXMgYXV0b1BsYXkgY29udHJvbHMgZGVmYXVsdCBkZWZlciBkaXNhYmxlZCBkaXNhYmxlUGljdHVyZUluUGljdHVyZSBkaXNhYmxlUmVtb3RlUGxheWJhY2sgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImNoZWNrZWRcIixcIm11bHRpcGxlXCIsXCJtdXRlZFwiLFwic2VsZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMywhMCxhLG51bGwsITEsITEpfSk7W1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNCwhMSxhLG51bGwsITEsITEpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw2LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO3ZhciBvYT0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHBhKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLFxucGEpO0RbYl09bmV3IEIoYiwxLCExLGEsbnVsbCwhMSwhMSl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxwYSk7RFtiXT1uZXcgQihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMSwhMSl9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxwYSk7RFtiXT1uZXcgQihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCExLCExKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuRC54bGlua0hyZWY9bmV3IEIoXCJ4bGlua0hyZWZcIiwxLCExLFwieGxpbms6aHJlZlwiLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCEwLCExKTtbXCJzcmNcIixcImhyZWZcIixcImFjdGlvblwiLFwiZm9ybUFjdGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCEwLCEwKX0pO1xuZnVuY3Rpb24gcWEoYSxiLGMsZCl7dmFyIGU9RC5oYXNPd25Qcm9wZXJ0eShiKT9EW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwobmEoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP2xhKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG52YXIgcmE9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsc2E9NjAxMDMsdGE9NjAxMDYsdWE9NjAxMDcsd2E9NjAxMDgseGE9NjAxMTQseWE9NjAxMDksemE9NjAxMTAsQWE9NjAxMTIsQmE9NjAxMTMsQ2E9NjAxMjAsRGE9NjAxMTUsRWE9NjAxMTYsRmE9NjAxMjEsR2E9NjAxMjgsSGE9NjAxMjksSWE9NjAxMzAsSmE9NjAxMzE7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgRT1TeW1ib2wuZm9yO3NhPUUoXCJyZWFjdC5lbGVtZW50XCIpO3RhPUUoXCJyZWFjdC5wb3J0YWxcIik7dWE9RShcInJlYWN0LmZyYWdtZW50XCIpO3dhPUUoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTt4YT1FKFwicmVhY3QucHJvZmlsZXJcIik7eWE9RShcInJlYWN0LnByb3ZpZGVyXCIpO3phPUUoXCJyZWFjdC5jb250ZXh0XCIpO0FhPUUoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtCYT1FKFwicmVhY3Quc3VzcGVuc2VcIik7Q2E9RShcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7RGE9RShcInJlYWN0Lm1lbW9cIik7RWE9RShcInJlYWN0LmxhenlcIik7RmE9RShcInJlYWN0LmJsb2NrXCIpO0UoXCJyZWFjdC5zY29wZVwiKTtHYT1FKFwicmVhY3Qub3BhcXVlLmlkXCIpO0hhPUUoXCJyZWFjdC5kZWJ1Z190cmFjZV9tb2RlXCIpO0lhPUUoXCJyZWFjdC5vZmZzY3JlZW5cIik7SmE9RShcInJlYWN0LmxlZ2FjeV9oaWRkZW5cIil9XG52YXIgS2E9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIExhKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1LYSYmYVtLYV18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH12YXIgTWE7ZnVuY3Rpb24gTmEoYSl7aWYodm9pZCAwPT09TWEpdHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGMpe3ZhciBiPWMuc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7TWE9YiYmYlsxXXx8XCJcIn1yZXR1cm5cIlxcblwiK01hK2F9dmFyIE9hPSExO1xuZnVuY3Rpb24gUGEoYSxiKXtpZighYXx8T2EpcmV0dXJuXCJcIjtPYT0hMDt2YXIgYz1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT12b2lkIDA7dHJ5e2lmKGIpaWYoYj1mdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJwcm9wc1wiLHtzZXQ6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO319KSxcIm9iamVjdFwiPT09dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuY29uc3RydWN0KXt0cnl7UmVmbGVjdC5jb25zdHJ1Y3QoYixbXSl9Y2F0Y2goayl7dmFyIGQ9a31SZWZsZWN0LmNvbnN0cnVjdChhLFtdLGIpfWVsc2V7dHJ5e2IuY2FsbCgpfWNhdGNoKGspe2Q9a31hLmNhbGwoYi5wcm90b3R5cGUpfWVsc2V7dHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGspe2Q9a31hKCl9fWNhdGNoKGspe2lmKGsmJmQmJlwic3RyaW5nXCI9PT10eXBlb2Ygay5zdGFjayl7Zm9yKHZhciBlPWsuc3RhY2suc3BsaXQoXCJcXG5cIiksXG5mPWQuc3RhY2suc3BsaXQoXCJcXG5cIiksZz1lLmxlbmd0aC0xLGg9Zi5sZW5ndGgtMTsxPD1nJiYwPD1oJiZlW2ddIT09ZltoXTspaC0tO2Zvcig7MTw9ZyYmMDw9aDtnLS0saC0tKWlmKGVbZ10hPT1mW2hdKXtpZigxIT09Z3x8MSE9PWgpe2RvIGlmKGctLSxoLS0sMD5ofHxlW2ddIT09ZltoXSlyZXR1cm5cIlxcblwiK2VbZ10ucmVwbGFjZShcIiBhdCBuZXcgXCIsXCIgYXQgXCIpO3doaWxlKDE8PWcmJjA8PWgpfWJyZWFrfX19ZmluYWxseXtPYT0hMSxFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT1jfXJldHVybihhPWE/YS5kaXNwbGF5TmFtZXx8YS5uYW1lOlwiXCIpP05hKGEpOlwiXCJ9XG5mdW5jdGlvbiBRYShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTpyZXR1cm4gTmEoYS50eXBlKTtjYXNlIDE2OnJldHVybiBOYShcIkxhenlcIik7Y2FzZSAxMzpyZXR1cm4gTmEoXCJTdXNwZW5zZVwiKTtjYXNlIDE5OnJldHVybiBOYShcIlN1c3BlbnNlTGlzdFwiKTtjYXNlIDA6Y2FzZSAyOmNhc2UgMTU6cmV0dXJuIGE9UGEoYS50eXBlLCExKSxhO2Nhc2UgMTE6cmV0dXJuIGE9UGEoYS50eXBlLnJlbmRlciwhMSksYTtjYXNlIDIyOnJldHVybiBhPVBhKGEudHlwZS5fcmVuZGVyLCExKSxhO2Nhc2UgMTpyZXR1cm4gYT1QYShhLnR5cGUsITApLGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1cbmZ1bmN0aW9uIFJhKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgdWE6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgdGE6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIHhhOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIHdhOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgQmE6cmV0dXJuXCJTdXNwZW5zZVwiO2Nhc2UgQ2E6cmV0dXJuXCJTdXNwZW5zZUxpc3RcIn1pZihcIm9iamVjdFwiPT09dHlwZW9mIGEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgemE6cmV0dXJuKGEuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Db25zdW1lclwiO2Nhc2UgeWE6cmV0dXJuKGEuX2NvbnRleHQuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Qcm92aWRlclwiO2Nhc2UgQWE6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7XG5yZXR1cm4gYS5kaXNwbGF5TmFtZXx8KFwiXCIhPT1iP1wiRm9yd2FyZFJlZihcIitiK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtjYXNlIERhOnJldHVybiBSYShhLnR5cGUpO2Nhc2UgRmE6cmV0dXJuIFJhKGEuX3JlbmRlcik7Y2FzZSBFYTpiPWEuX3BheWxvYWQ7YT1hLl9pbml0O3RyeXtyZXR1cm4gUmEoYShiKSl9Y2F0Y2goYyl7fX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBTYShhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gVGEoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFVhKGEpe3ZhciBiPVRhKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBWYShhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VWEoYSkpfWZ1bmN0aW9uIFdhKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1UYShhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfWZ1bmN0aW9uIFhhKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1cbmZ1bmN0aW9uIFlhKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBtKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1mdW5jdGlvbiBaYShhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1TYShudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uICRhKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmcWEoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIGFiKGEsYil7JGEoYSxiKTt2YXIgYz1TYShiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9iYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZiYihhLGIudHlwZSxTYShiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIGNiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBiYihhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fFhhKGEub3duZXJEb2N1bWVudCkhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX1mdW5jdGlvbiBkYihhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBlYihhLGIpe2E9bSh7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPWRiKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1cbmZ1bmN0aW9uIGZiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitTYShjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZ2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHkoOTEpKTtyZXR1cm4gbSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBoYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmNoaWxkcmVuO2I9Yi5kZWZhdWx0VmFsdWU7aWYobnVsbCE9Yyl7aWYobnVsbCE9Yil0aHJvdyBFcnJvcih5KDkyKSk7aWYoQXJyYXkuaXNBcnJheShjKSl7aWYoISgxPj1jLmxlbmd0aCkpdGhyb3cgRXJyb3IoeSg5MykpO2M9Y1swXX1iPWN9bnVsbD09YiYmKGI9XCJcIik7Yz1ifWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOlNhKGMpfX1cbmZ1bmN0aW9uIGliKGEsYil7dmFyIGM9U2EoYi52YWx1ZSksZD1TYShiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGpiKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJlwiXCIhPT1iJiZudWxsIT09YiYmKGEudmFsdWU9Yil9dmFyIGtiPXtodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLG1hdGhtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIixzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifTtcbmZ1bmN0aW9uIGxiKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19ZnVuY3Rpb24gbWIoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP2xiKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIG5iLG9iPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgTVNBcHAmJk1TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uP2Z1bmN0aW9uKGIsYyxkLGUpe01TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX06YX0oZnVuY3Rpb24oYSxiKXtpZihhLm5hbWVzcGFjZVVSSSE9PWtiLnN2Z3x8XCJpbm5lckhUTUxcImluIGEpYS5pbm5lckhUTUw9YjtlbHNle25iPW5ifHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO25iLmlubmVySFRNTD1cIjxzdmc+XCIrYi52YWx1ZU9mKCkudG9TdHJpbmcoKStcIjwvc3ZnPlwiO2ZvcihiPW5iLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYi5maXJzdENoaWxkKX19KTtcbmZ1bmN0aW9uIHBiKGEsYil7aWYoYil7dmFyIGM9YS5maXJzdENoaWxkO2lmKGMmJmM9PT1hLmxhc3RDaGlsZCYmMz09PWMubm9kZVR5cGUpe2Mubm9kZVZhbHVlPWI7cmV0dXJufX1hLnRleHRDb250ZW50PWJ9XG52YXIgcWI9e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGJvcmRlckltYWdlT3V0c2V0OiEwLGJvcmRlckltYWdlU2xpY2U6ITAsYm9yZGVySW1hZ2VXaWR0aDohMCxib3hGbGV4OiEwLGJveEZsZXhHcm91cDohMCxib3hPcmRpbmFsR3JvdXA6ITAsY29sdW1uQ291bnQ6ITAsY29sdW1uczohMCxmbGV4OiEwLGZsZXhHcm93OiEwLGZsZXhQb3NpdGl2ZTohMCxmbGV4U2hyaW5rOiEwLGZsZXhOZWdhdGl2ZTohMCxmbGV4T3JkZXI6ITAsZ3JpZEFyZWE6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTcGFuOiEwLGdyaWRSb3dTdGFydDohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblNwYW46ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUNsYW1wOiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHRhYlNpemU6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwLGZpbGxPcGFjaXR5OiEwLFxuZmxvb2RPcGFjaXR5OiEwLHN0b3BPcGFjaXR5OiEwLHN0cm9rZURhc2hhcnJheTohMCxzdHJva2VEYXNob2Zmc2V0OiEwLHN0cm9rZU1pdGVybGltaXQ6ITAsc3Ryb2tlT3BhY2l0eTohMCxzdHJva2VXaWR0aDohMH0scmI9W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdO09iamVjdC5rZXlzKHFiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JiLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHJpbmcoMSk7cWJbYl09cWJbYV19KX0pO2Z1bmN0aW9uIHNiKGEsYixjKXtyZXR1cm4gbnVsbD09Ynx8XCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJcIj09PWI/XCJcIjpjfHxcIm51bWJlclwiIT09dHlwZW9mIGJ8fDA9PT1ifHxxYi5oYXNPd25Qcm9wZXJ0eShhKSYmcWJbYV0/KFwiXCIrYikudHJpbSgpOmIrXCJweFwifVxuZnVuY3Rpb24gdGIoYSxiKXthPWEuc3R5bGU7Zm9yKHZhciBjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9MD09PWMuaW5kZXhPZihcIi0tXCIpLGU9c2IoYyxiW2NdLGQpO1wiZmxvYXRcIj09PWMmJihjPVwiY3NzRmxvYXRcIik7ZD9hLnNldFByb3BlcnR5KGMsZSk6YVtjXT1lfX12YXIgdWI9bSh7bWVudWl0ZW06ITB9LHthcmVhOiEwLGJhc2U6ITAsYnI6ITAsY29sOiEwLGVtYmVkOiEwLGhyOiEwLGltZzohMCxpbnB1dDohMCxrZXlnZW46ITAsbGluazohMCxtZXRhOiEwLHBhcmFtOiEwLHNvdXJjZTohMCx0cmFjazohMCx3YnI6ITB9KTtcbmZ1bmN0aW9uIHZiKGEsYil7aWYoYil7aWYodWJbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih5KDEzNyxhKSk7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl7aWYobnVsbCE9Yi5jaGlsZHJlbil0aHJvdyBFcnJvcih5KDYwKSk7aWYoIShcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih5KDYxKSk7fWlmKG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZSl0aHJvdyBFcnJvcih5KDYyKSk7fX1cbmZ1bmN0aW9uIHdiKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX1mdW5jdGlvbiB4YihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9dmFyIHliPW51bGwsemI9bnVsbCxBYj1udWxsO1xuZnVuY3Rpb24gQmIoYSl7aWYoYT1DYihhKSl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHliKXRocm93IEVycm9yKHkoMjgwKSk7dmFyIGI9YS5zdGF0ZU5vZGU7YiYmKGI9RGIoYikseWIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpKX19ZnVuY3Rpb24gRWIoYSl7emI/QWI/QWIucHVzaChhKTpBYj1bYV06emI9YX1mdW5jdGlvbiBGYigpe2lmKHpiKXt2YXIgYT16YixiPUFiO0FiPXpiPW51bGw7QmIoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKUJiKGJbYV0pfX1mdW5jdGlvbiBHYihhLGIpe3JldHVybiBhKGIpfWZ1bmN0aW9uIEhiKGEsYixjLGQsZSl7cmV0dXJuIGEoYixjLGQsZSl9ZnVuY3Rpb24gSWIoKXt9dmFyIEpiPUdiLEtiPSExLExiPSExO2Z1bmN0aW9uIE1iKCl7aWYobnVsbCE9PXpifHxudWxsIT09QWIpSWIoKSxGYigpfVxuZnVuY3Rpb24gTmIoYSxiLGMpe2lmKExiKXJldHVybiBhKGIsYyk7TGI9ITA7dHJ5e3JldHVybiBKYihhLGIsYyl9ZmluYWxseXtMYj0hMSxNYigpfX1cbmZ1bmN0aW9uIE9iKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9RGIoYyk7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRW50ZXJcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2lmKGMmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGMpdGhyb3cgRXJyb3IoeSgyMzEsYix0eXBlb2YgYykpO3JldHVybiBjfXZhciBQYj0hMTtpZihmYSl0cnl7dmFyIFFiPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShRYixcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7UGI9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLFFiLFFiKX1jYXRjaChhKXtQYj0hMX1mdW5jdGlvbiBSYihhLGIsYyxkLGUsZixnLGgsayl7dmFyIGw9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsbCl9Y2F0Y2gobil7dGhpcy5vbkVycm9yKG4pfX12YXIgU2I9ITEsVGI9bnVsbCxVYj0hMSxWYj1udWxsLFdiPXtvbkVycm9yOmZ1bmN0aW9uKGEpe1NiPSEwO1RiPWF9fTtmdW5jdGlvbiBYYihhLGIsYyxkLGUsZixnLGgsayl7U2I9ITE7VGI9bnVsbDtSYi5hcHBseShXYixhcmd1bWVudHMpfVxuZnVuY3Rpb24gWWIoYSxiLGMsZCxlLGYsZyxoLGspe1hiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihTYil7aWYoU2Ipe3ZhciBsPVRiO1NiPSExO1RiPW51bGx9ZWxzZSB0aHJvdyBFcnJvcih5KDE5OCkpO1VifHwoVWI9ITAsVmI9bCl9fWZ1bmN0aW9uIFpiKGEpe3ZhciBiPWEsYz1hO2lmKGEuYWx0ZXJuYXRlKWZvcig7Yi5yZXR1cm47KWI9Yi5yZXR1cm47ZWxzZXthPWI7ZG8gYj1hLDAhPT0oYi5mbGFncyYxMDI2KSYmKGM9Yi5yZXR1cm4pLGE9Yi5yZXR1cm47d2hpbGUoYSl9cmV0dXJuIDM9PT1iLnRhZz9jOm51bGx9ZnVuY3Rpb24gJGIoYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9YS5tZW1vaXplZFN0YXRlO251bGw9PT1iJiYoYT1hLmFsdGVybmF0ZSxudWxsIT09YSYmKGI9YS5tZW1vaXplZFN0YXRlKSk7aWYobnVsbCE9PWIpcmV0dXJuIGIuZGVoeWRyYXRlZH1yZXR1cm4gbnVsbH1mdW5jdGlvbiBhYyhhKXtpZihaYihhKSE9PWEpdGhyb3cgRXJyb3IoeSgxODgpKTt9XG5mdW5jdGlvbiBiYyhhKXt2YXIgYj1hLmFsdGVybmF0ZTtpZighYil7Yj1aYihhKTtpZihudWxsPT09Yil0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBiIT09YT9udWxsOmF9Zm9yKHZhciBjPWEsZD1iOzspe3ZhciBlPWMucmV0dXJuO2lmKG51bGw9PT1lKWJyZWFrO3ZhciBmPWUuYWx0ZXJuYXRlO2lmKG51bGw9PT1mKXtkPWUucmV0dXJuO2lmKG51bGwhPT1kKXtjPWQ7Y29udGludWV9YnJlYWt9aWYoZS5jaGlsZD09PWYuY2hpbGQpe2ZvcihmPWUuY2hpbGQ7Zjspe2lmKGY9PT1jKXJldHVybiBhYyhlKSxhO2lmKGY9PT1kKXJldHVybiBhYyhlKSxiO2Y9Zi5zaWJsaW5nfXRocm93IEVycm9yKHkoMTg4KSk7fWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2Zvcih2YXIgZz0hMSxoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PVxuYyl7Zz0hMDtjPWY7ZD1lO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZjtjPWU7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpdGhyb3cgRXJyb3IoeSgxODkpKTt9fWlmKGMuYWx0ZXJuYXRlIT09ZCl0aHJvdyBFcnJvcih5KDE5MCkpO31pZigzIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgxODgpKTtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIGNjKGEpe2E9YmMoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNT09PWIudGFnfHw2PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBkYyhhLGIpe2Zvcih2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09Yjspe2lmKGI9PT1hfHxiPT09YylyZXR1cm4hMDtiPWIucmV0dXJufXJldHVybiExfXZhciBlYyxmYyxnYyxoYyxpYz0hMSxqYz1bXSxrYz1udWxsLGxjPW51bGwsbWM9bnVsbCxuYz1uZXcgTWFwLG9jPW5ldyBNYXAscGM9W10scWM9XCJtb3VzZWRvd24gbW91c2V1cCB0b3VjaGNhbmNlbCB0b3VjaGVuZCB0b3VjaHN0YXJ0IGF1eGNsaWNrIGRibGNsaWNrIHBvaW50ZXJjYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlcnVwIGRyYWdlbmQgZHJhZ3N0YXJ0IGRyb3AgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGlucHV0IHRleHRJbnB1dCBjb3B5IGN1dCBwYXN0ZSBjbGljayBjaGFuZ2UgY29udGV4dG1lbnUgcmVzZXQgc3VibWl0XCIuc3BsaXQoXCIgXCIpO1xuZnVuY3Rpb24gcmMoYSxiLGMsZCxlKXtyZXR1cm57YmxvY2tlZE9uOmEsZG9tRXZlbnROYW1lOmIsZXZlbnRTeXN0ZW1GbGFnczpjfDE2LG5hdGl2ZUV2ZW50OmUsdGFyZ2V0Q29udGFpbmVyczpbZF19fWZ1bmN0aW9uIHNjKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6a2M9bnVsbDticmVhaztjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmxjPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJtb3VzZW91dFwiOm1jPW51bGw7YnJlYWs7Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpuYy5kZWxldGUoYi5wb2ludGVySWQpO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpvYy5kZWxldGUoYi5wb2ludGVySWQpfX1cbmZ1bmN0aW9uIHRjKGEsYixjLGQsZSxmKXtpZihudWxsPT09YXx8YS5uYXRpdmVFdmVudCE9PWYpcmV0dXJuIGE9cmMoYixjLGQsZSxmKSxudWxsIT09YiYmKGI9Q2IoYiksbnVsbCE9PWImJmZjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtiPWEudGFyZ2V0Q29udGFpbmVycztudWxsIT09ZSYmLTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHVjKGEsYixjLGQsZSl7c3dpdGNoKGIpe2Nhc2UgXCJmb2N1c2luXCI6cmV0dXJuIGtjPXRjKGtjLGEsYixjLGQsZSksITA7Y2FzZSBcImRyYWdlbnRlclwiOnJldHVybiBsYz10YyhsYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJtb3VzZW92ZXJcIjpyZXR1cm4gbWM9dGMobWMsYSxiLGMsZCxlKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZj1lLnBvaW50ZXJJZDtuYy5zZXQoZix0YyhuYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSk7cmV0dXJuITA7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6cmV0dXJuIGY9ZS5wb2ludGVySWQsb2Muc2V0KGYsdGMob2MuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gdmMoYSl7dmFyIGI9d2MoYS50YXJnZXQpO2lmKG51bGwhPT1iKXt2YXIgYz1aYihiKTtpZihudWxsIT09YylpZihiPWMudGFnLDEzPT09Yil7aWYoYj0kYihjKSxudWxsIT09Yil7YS5ibG9ja2VkT249YjtoYyhhLmxhbmVQcmlvcml0eSxmdW5jdGlvbigpe3IudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KGEucHJpb3JpdHksZnVuY3Rpb24oKXtnYyhjKX0pfSk7cmV0dXJufX1lbHNlIGlmKDM9PT1iJiZjLnN0YXRlTm9kZS5oeWRyYXRlKXthLmJsb2NrZWRPbj0zPT09Yy50YWc/Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO3JldHVybn19YS5ibG9ja2VkT249bnVsbH1cbmZ1bmN0aW9uIHhjKGEpe2lmKG51bGwhPT1hLmJsb2NrZWRPbilyZXR1cm4hMTtmb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09YylyZXR1cm4gYj1DYihjKSxudWxsIT09YiYmZmMoYiksYS5ibG9ja2VkT249YywhMTtiLnNoaWZ0KCl9cmV0dXJuITB9ZnVuY3Rpb24gemMoYSxiLGMpe3hjKGEpJiZjLmRlbGV0ZShiKX1cbmZ1bmN0aW9uIEFjKCl7Zm9yKGljPSExOzA8amMubGVuZ3RoOyl7dmFyIGE9amNbMF07aWYobnVsbCE9PWEuYmxvY2tlZE9uKXthPUNiKGEuYmxvY2tlZE9uKTtudWxsIT09YSYmZWMoYSk7YnJlYWt9Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9eWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbCE9PWMpe2EuYmxvY2tlZE9uPWM7YnJlYWt9Yi5zaGlmdCgpfW51bGw9PT1hLmJsb2NrZWRPbiYmamMuc2hpZnQoKX1udWxsIT09a2MmJnhjKGtjKSYmKGtjPW51bGwpO251bGwhPT1sYyYmeGMobGMpJiYobGM9bnVsbCk7bnVsbCE9PW1jJiZ4YyhtYykmJihtYz1udWxsKTtuYy5mb3JFYWNoKHpjKTtvYy5mb3JFYWNoKHpjKX1cbmZ1bmN0aW9uIEJjKGEsYil7YS5ibG9ja2VkT249PT1iJiYoYS5ibG9ja2VkT249bnVsbCxpY3x8KGljPSEwLHIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhyLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LEFjKSkpfVxuZnVuY3Rpb24gQ2MoYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gQmMoYixhKX1pZigwPGpjLmxlbmd0aCl7QmMoamNbMF0sYSk7Zm9yKHZhciBjPTE7YzxqYy5sZW5ndGg7YysrKXt2YXIgZD1qY1tjXTtkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKX19bnVsbCE9PWtjJiZCYyhrYyxhKTtudWxsIT09bGMmJkJjKGxjLGEpO251bGwhPT1tYyYmQmMobWMsYSk7bmMuZm9yRWFjaChiKTtvYy5mb3JFYWNoKGIpO2ZvcihjPTA7YzxwYy5sZW5ndGg7YysrKWQ9cGNbY10sZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCk7Zm9yKDswPHBjLmxlbmd0aCYmKGM9cGNbMF0sbnVsbD09PWMuYmxvY2tlZE9uKTspdmMoYyksbnVsbD09PWMuYmxvY2tlZE9uJiZwYy5zaGlmdCgpfVxuZnVuY3Rpb24gRGMoYSxiKXt2YXIgYz17fTtjW2EudG9Mb3dlckNhc2UoKV09Yi50b0xvd2VyQ2FzZSgpO2NbXCJXZWJraXRcIithXT1cIndlYmtpdFwiK2I7Y1tcIk1velwiK2FdPVwibW96XCIrYjtyZXR1cm4gY312YXIgRWM9e2FuaW1hdGlvbmVuZDpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uRW5kXCIpLGFuaW1hdGlvbml0ZXJhdGlvbjpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uSXRlcmF0aW9uXCIpLGFuaW1hdGlvbnN0YXJ0OkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25TdGFydFwiKSx0cmFuc2l0aW9uZW5kOkRjKFwiVHJhbnNpdGlvblwiLFwiVHJhbnNpdGlvbkVuZFwiKX0sRmM9e30sR2M9e307XG5mYSYmKEdjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJBbmltYXRpb25FdmVudFwiaW4gd2luZG93fHwoZGVsZXRlIEVjLmFuaW1hdGlvbmVuZC5hbmltYXRpb24sZGVsZXRlIEVjLmFuaW1hdGlvbml0ZXJhdGlvbi5hbmltYXRpb24sZGVsZXRlIEVjLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbiksXCJUcmFuc2l0aW9uRXZlbnRcImluIHdpbmRvd3x8ZGVsZXRlIEVjLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbik7ZnVuY3Rpb24gSGMoYSl7aWYoRmNbYV0pcmV0dXJuIEZjW2FdO2lmKCFFY1thXSlyZXR1cm4gYTt2YXIgYj1FY1thXSxjO2ZvcihjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSYmYyBpbiBHYylyZXR1cm4gRmNbYV09YltjXTtyZXR1cm4gYX1cbnZhciBJYz1IYyhcImFuaW1hdGlvbmVuZFwiKSxKYz1IYyhcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxLYz1IYyhcImFuaW1hdGlvbnN0YXJ0XCIpLExjPUhjKFwidHJhbnNpdGlvbmVuZFwiKSxNYz1uZXcgTWFwLE5jPW5ldyBNYXAsT2M9W1wiYWJvcnRcIixcImFib3J0XCIsSWMsXCJhbmltYXRpb25FbmRcIixKYyxcImFuaW1hdGlvbkl0ZXJhdGlvblwiLEtjLFwiYW5pbWF0aW9uU3RhcnRcIixcImNhbnBsYXlcIixcImNhblBsYXlcIixcImNhbnBsYXl0aHJvdWdoXCIsXCJjYW5QbGF5VGhyb3VnaFwiLFwiZHVyYXRpb25jaGFuZ2VcIixcImR1cmF0aW9uQ2hhbmdlXCIsXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCIsXCJlbmNyeXB0ZWRcIixcImVuY3J5cHRlZFwiLFwiZW5kZWRcIixcImVuZGVkXCIsXCJlcnJvclwiLFwiZXJyb3JcIixcImdvdHBvaW50ZXJjYXB0dXJlXCIsXCJnb3RQb2ludGVyQ2FwdHVyZVwiLFwibG9hZFwiLFwibG9hZFwiLFwibG9hZGVkZGF0YVwiLFwibG9hZGVkRGF0YVwiLFwibG9hZGVkbWV0YWRhdGFcIixcImxvYWRlZE1ldGFkYXRhXCIsXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiLFxuXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiLFwicGxheWluZ1wiLFwicGxheWluZ1wiLFwicHJvZ3Jlc3NcIixcInByb2dyZXNzXCIsXCJzZWVraW5nXCIsXCJzZWVraW5nXCIsXCJzdGFsbGVkXCIsXCJzdGFsbGVkXCIsXCJzdXNwZW5kXCIsXCJzdXNwZW5kXCIsXCJ0aW1ldXBkYXRlXCIsXCJ0aW1lVXBkYXRlXCIsTGMsXCJ0cmFuc2l0aW9uRW5kXCIsXCJ3YWl0aW5nXCIsXCJ3YWl0aW5nXCJdO2Z1bmN0aW9uIFBjKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKz0yKXt2YXIgZD1hW2NdLGU9YVtjKzFdO2U9XCJvblwiKyhlWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSk7TmMuc2V0KGQsYik7TWMuc2V0KGQsZSk7ZGEoZSxbZF0pfX12YXIgUWM9ci51bnN0YWJsZV9ub3c7UWMoKTt2YXIgRj04O1xuZnVuY3Rpb24gUmMoYSl7aWYoMCE9PSgxJmEpKXJldHVybiBGPTE1LDE7aWYoMCE9PSgyJmEpKXJldHVybiBGPTE0LDI7aWYoMCE9PSg0JmEpKXJldHVybiBGPTEzLDQ7dmFyIGI9MjQmYTtpZigwIT09YilyZXR1cm4gRj0xMixiO2lmKDAhPT0oYSYzMikpcmV0dXJuIEY9MTEsMzI7Yj0xOTImYTtpZigwIT09YilyZXR1cm4gRj0xMCxiO2lmKDAhPT0oYSYyNTYpKXJldHVybiBGPTksMjU2O2I9MzU4NCZhO2lmKDAhPT1iKXJldHVybiBGPTgsYjtpZigwIT09KGEmNDA5NikpcmV0dXJuIEY9Nyw0MDk2O2I9NDE4NjExMiZhO2lmKDAhPT1iKXJldHVybiBGPTYsYjtiPTYyOTE0NTYwJmE7aWYoMCE9PWIpcmV0dXJuIEY9NSxiO2lmKGEmNjcxMDg4NjQpcmV0dXJuIEY9NCw2NzEwODg2NDtpZigwIT09KGEmMTM0MjE3NzI4KSlyZXR1cm4gRj0zLDEzNDIxNzcyODtiPTgwNTMwNjM2OCZhO2lmKDAhPT1iKXJldHVybiBGPTIsYjtpZigwIT09KDEwNzM3NDE4MjQmYSkpcmV0dXJuIEY9MSwxMDczNzQxODI0O1xuRj04O3JldHVybiBhfWZ1bmN0aW9uIFNjKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiAxNTtjYXNlIDk4OnJldHVybiAxMDtjYXNlIDk3OmNhc2UgOTY6cmV0dXJuIDg7Y2FzZSA5NTpyZXR1cm4gMjtkZWZhdWx0OnJldHVybiAwfX1mdW5jdGlvbiBUYyhhKXtzd2l0Y2goYSl7Y2FzZSAxNTpjYXNlIDE0OnJldHVybiA5OTtjYXNlIDEzOmNhc2UgMTI6Y2FzZSAxMTpjYXNlIDEwOnJldHVybiA5ODtjYXNlIDk6Y2FzZSA4OmNhc2UgNzpjYXNlIDY6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gOTc7Y2FzZSAzOmNhc2UgMjpjYXNlIDE6cmV0dXJuIDk1O2Nhc2UgMDpyZXR1cm4gOTA7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDM1OCxhKSk7fX1cbmZ1bmN0aW9uIFVjKGEsYil7dmFyIGM9YS5wZW5kaW5nTGFuZXM7aWYoMD09PWMpcmV0dXJuIEY9MDt2YXIgZD0wLGU9MCxmPWEuZXhwaXJlZExhbmVzLGc9YS5zdXNwZW5kZWRMYW5lcyxoPWEucGluZ2VkTGFuZXM7aWYoMCE9PWYpZD1mLGU9Rj0xNTtlbHNlIGlmKGY9YyYxMzQyMTc3MjcsMCE9PWYpe3ZhciBrPWYmfmc7MCE9PWs/KGQ9UmMoayksZT1GKTooaCY9ZiwwIT09aCYmKGQ9UmMoaCksZT1GKSl9ZWxzZSBmPWMmfmcsMCE9PWY/KGQ9UmMoZiksZT1GKTowIT09aCYmKGQ9UmMoaCksZT1GKTtpZigwPT09ZClyZXR1cm4gMDtkPTMxLVZjKGQpO2Q9YyYoKDA+ZD8wOjE8PGQpPDwxKS0xO2lmKDAhPT1iJiZiIT09ZCYmMD09PShiJmcpKXtSYyhiKTtpZihlPD1GKXJldHVybiBiO0Y9ZX1iPWEuZW50YW5nbGVkTGFuZXM7aWYoMCE9PWIpZm9yKGE9YS5lbnRhbmdsZW1lbnRzLGImPWQ7MDxiOyljPTMxLVZjKGIpLGU9MTw8YyxkfD1hW2NdLGImPX5lO3JldHVybiBkfVxuZnVuY3Rpb24gV2MoYSl7YT1hLnBlbmRpbmdMYW5lcyYtMTA3Mzc0MTgyNTtyZXR1cm4gMCE9PWE/YTphJjEwNzM3NDE4MjQ/MTA3Mzc0MTgyNDowfWZ1bmN0aW9uIFhjKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTU6cmV0dXJuIDE7Y2FzZSAxNDpyZXR1cm4gMjtjYXNlIDEyOnJldHVybiBhPVljKDI0Jn5iKSwwPT09YT9YYygxMCxiKTphO2Nhc2UgMTA6cmV0dXJuIGE9WWMoMTkyJn5iKSwwPT09YT9YYyg4LGIpOmE7Y2FzZSA4OnJldHVybiBhPVljKDM1ODQmfmIpLDA9PT1hJiYoYT1ZYyg0MTg2MTEyJn5iKSwwPT09YSYmKGE9NTEyKSksYTtjYXNlIDI6cmV0dXJuIGI9WWMoODA1MzA2MzY4Jn5iKSwwPT09YiYmKGI9MjY4NDM1NDU2KSxifXRocm93IEVycm9yKHkoMzU4LGEpKTt9ZnVuY3Rpb24gWWMoYSl7cmV0dXJuIGEmLWF9ZnVuY3Rpb24gWmMoYSl7Zm9yKHZhciBiPVtdLGM9MDszMT5jO2MrKyliLnB1c2goYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiAkYyhhLGIsYyl7YS5wZW5kaW5nTGFuZXN8PWI7dmFyIGQ9Yi0xO2Euc3VzcGVuZGVkTGFuZXMmPWQ7YS5waW5nZWRMYW5lcyY9ZDthPWEuZXZlbnRUaW1lcztiPTMxLVZjKGIpO2FbYl09Y312YXIgVmM9TWF0aC5jbHozMj9NYXRoLmNsejMyOmFkLGJkPU1hdGgubG9nLGNkPU1hdGguTE4yO2Z1bmN0aW9uIGFkKGEpe3JldHVybiAwPT09YT8zMjozMS0oYmQoYSkvY2R8MCl8MH12YXIgZGQ9ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxlZD1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxmZD0hMDtmdW5jdGlvbiBnZChhLGIsYyxkKXtLYnx8SWIoKTt2YXIgZT1oZCxmPUtiO0tiPSEwO3RyeXtIYihlLGEsYixjLGQpfWZpbmFsbHl7KEtiPWYpfHxNYigpfX1mdW5jdGlvbiBpZChhLGIsYyxkKXtlZChkZCxoZC5iaW5kKG51bGwsYSxiLGMsZCkpfVxuZnVuY3Rpb24gaGQoYSxiLGMsZCl7aWYoZmQpe3ZhciBlO2lmKChlPTA9PT0oYiY0KSkmJjA8amMubGVuZ3RoJiYtMTxxYy5pbmRleE9mKGEpKWE9cmMobnVsbCxhLGIsYyxkKSxqYy5wdXNoKGEpO2Vsc2V7dmFyIGY9eWMoYSxiLGMsZCk7aWYobnVsbD09PWYpZSYmc2MoYSxkKTtlbHNle2lmKGUpe2lmKC0xPHFjLmluZGV4T2YoYSkpe2E9cmMoZixhLGIsYyxkKTtqYy5wdXNoKGEpO3JldHVybn1pZih1YyhmLGEsYixjLGQpKXJldHVybjtzYyhhLGQpfWpkKGEsYixkLG51bGwsYyl9fX19XG5mdW5jdGlvbiB5YyhhLGIsYyxkKXt2YXIgZT14YihkKTtlPXdjKGUpO2lmKG51bGwhPT1lKXt2YXIgZj1aYihlKTtpZihudWxsPT09ZillPW51bGw7ZWxzZXt2YXIgZz1mLnRhZztpZigxMz09PWcpe2U9JGIoZik7aWYobnVsbCE9PWUpcmV0dXJuIGU7ZT1udWxsfWVsc2UgaWYoMz09PWcpe2lmKGYuc3RhdGVOb2RlLmh5ZHJhdGUpcmV0dXJuIDM9PT1mLnRhZz9mLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7ZT1udWxsfWVsc2UgZiE9PWUmJihlPW51bGwpfX1qZChhLGIsZCxlLGMpO3JldHVybiBudWxsfXZhciBrZD1udWxsLGxkPW51bGwsbWQ9bnVsbDtcbmZ1bmN0aW9uIG5kKCl7aWYobWQpcmV0dXJuIG1kO3ZhciBhLGI9bGQsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgZz1jLWE7Zm9yKGQ9MTtkPD1nJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gbWQ9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1mdW5jdGlvbiBvZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1mdW5jdGlvbiBwZCgpe3JldHVybiEwfWZ1bmN0aW9uIHFkKCl7cmV0dXJuITF9XG5mdW5jdGlvbiByZChhKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dGhpcy5fcmVhY3ROYW1lPWI7dGhpcy5fdGFyZ2V0SW5zdD1lO3RoaXMudHlwZT1kO3RoaXMubmF0aXZlRXZlbnQ9Zjt0aGlzLnRhcmdldD1nO3RoaXMuY3VycmVudFRhcmdldD1udWxsO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiPWFbY10sdGhpc1tjXT1iP2IoZik6ZltjXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWYuZGVmYXVsdFByZXZlbnRlZD9mLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1mLnJldHVyblZhbHVlKT9wZDpxZDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXFkO3JldHVybiB0aGlzfW0oYi5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJlxuKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBkKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBkKX0scGVyc2lzdDpmdW5jdGlvbigpe30saXNQZXJzaXN0ZW50OnBkfSk7cmV0dXJuIGJ9XG52YXIgc2Q9e2V2ZW50UGhhc2U6MCxidWJibGVzOjAsY2FuY2VsYWJsZTowLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6MCxpc1RydXN0ZWQ6MH0sdGQ9cmQoc2QpLHVkPW0oe30sc2Qse3ZpZXc6MCxkZXRhaWw6MH0pLHZkPXJkKHVkKSx3ZCx4ZCx5ZCxBZD1tKHt9LHVkLHtzY3JlZW5YOjAsc2NyZWVuWTowLGNsaWVudFg6MCxjbGllbnRZOjAscGFnZVg6MCxwYWdlWTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkLGJ1dHRvbjowLGJ1dHRvbnM6MCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hLnJlbGF0ZWRUYXJnZXQ/YS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50OmEucmVsYXRlZFRhcmdldH0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpblxuYSlyZXR1cm4gYS5tb3ZlbWVudFg7YSE9PXlkJiYoeWQmJlwibW91c2Vtb3ZlXCI9PT1hLnR5cGU/KHdkPWEuc2NyZWVuWC15ZC5zY3JlZW5YLHhkPWEuc2NyZWVuWS15ZC5zY3JlZW5ZKTp4ZD13ZD0wLHlkPWEpO3JldHVybiB3ZH0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe3JldHVyblwibW92ZW1lbnRZXCJpbiBhP2EubW92ZW1lbnRZOnhkfX0pLEJkPXJkKEFkKSxDZD1tKHt9LEFkLHtkYXRhVHJhbnNmZXI6MH0pLERkPXJkKENkKSxFZD1tKHt9LHVkLHtyZWxhdGVkVGFyZ2V0OjB9KSxGZD1yZChFZCksR2Q9bSh7fSxzZCx7YW5pbWF0aW9uTmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksSGQ9cmQoR2QpLElkPW0oe30sc2Qse2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxKZD1yZChJZCksS2Q9bSh7fSxzZCx7ZGF0YTowfSksTGQ9cmQoS2QpLE1kPXtFc2M6XCJFc2NhcGVcIixcblNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LE5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLDExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLFxuMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxPZD17QWx0OlwiYWx0S2V5XCIsQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gUGQoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1PZFthXSk/ISFiW2FdOiExfWZ1bmN0aW9uIHpkKCl7cmV0dXJuIFBkfVxudmFyIFFkPW0oe30sdWQse2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9TWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9b2QoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP05kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sY29kZTowLGxvY2F0aW9uOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLHJlcGVhdDowLGxvY2FsZTowLGdldE1vZGlmaWVyU3RhdGU6emQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP29kKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/b2QoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxSZD1yZChRZCksU2Q9bSh7fSxBZCx7cG9pbnRlcklkOjAsd2lkdGg6MCxoZWlnaHQ6MCxwcmVzc3VyZTowLHRhbmdlbnRpYWxQcmVzc3VyZTowLHRpbHRYOjAsdGlsdFk6MCx0d2lzdDowLHBvaW50ZXJUeXBlOjAsaXNQcmltYXJ5OjB9KSxUZD1yZChTZCksVWQ9bSh7fSx1ZCx7dG91Y2hlczowLHRhcmdldFRvdWNoZXM6MCxjaGFuZ2VkVG91Y2hlczowLGFsdEtleTowLG1ldGFLZXk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkfSksVmQ9cmQoVWQpLFdkPW0oe30sc2Qse3Byb3BlcnR5TmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksWGQ9cmQoV2QpLFlkPW0oe30sQWQse2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LFxuZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOjAsZGVsdGFNb2RlOjB9KSxaZD1yZChZZCksJGQ9WzksMTMsMjcsMzJdLGFlPWZhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxiZT1udWxsO2ZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihiZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO3ZhciBjZT1mYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIWJlLGRlPWZhJiYoIWFlfHxiZSYmODxiZSYmMTE+PWJlKSxlZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxmZT0hMTtcbmZ1bmN0aW9uIGdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09JGQuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImZvY3Vzb3V0XCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gaGUoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgaWU9ITE7ZnVuY3Rpb24gamUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGhlKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDtmZT0hMDtyZXR1cm4gZWU7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09ZWUmJmZlP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIGtlKGEsYil7aWYoaWUpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IWFlJiZnZShhLGIpPyhhPW5kKCksbWQ9bGQ9a2Q9bnVsbCxpZT0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gZGUmJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIGxlPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIG1lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhbGVbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfWZ1bmN0aW9uIG5lKGEsYixjLGQpe0ViKGQpO2I9b2UoYixcIm9uQ2hhbmdlXCIpOzA8Yi5sZW5ndGgmJihjPW5ldyB0ZChcIm9uQ2hhbmdlXCIsXCJjaGFuZ2VcIixudWxsLGMsZCksYS5wdXNoKHtldmVudDpjLGxpc3RlbmVyczpifSkpfXZhciBwZT1udWxsLHFlPW51bGw7ZnVuY3Rpb24gcmUoYSl7c2UoYSwwKX1mdW5jdGlvbiB0ZShhKXt2YXIgYj11ZShhKTtpZihXYShiKSlyZXR1cm4gYX1cbmZ1bmN0aW9uIHZlKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIHdlPSExO2lmKGZhKXt2YXIgeGU7aWYoZmEpe3ZhciB5ZT1cIm9uaW5wdXRcImluIGRvY3VtZW50O2lmKCF5ZSl7dmFyIHplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7emUuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLFwicmV0dXJuO1wiKTt5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgemUub25pbnB1dH14ZT15ZX1lbHNlIHhlPSExO3dlPXhlJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpfWZ1bmN0aW9uIEFlKCl7cGUmJihwZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkscWU9cGU9bnVsbCl9ZnVuY3Rpb24gQmUoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnRlKHFlKSl7dmFyIGI9W107bmUoYixxZSxhLHhiKGEpKTthPXJlO2lmKEtiKWEoYik7ZWxzZXtLYj0hMDt0cnl7R2IoYSxiKX1maW5hbGx5e0tiPSExLE1iKCl9fX19XG5mdW5jdGlvbiBDZShhLGIsYyl7XCJmb2N1c2luXCI9PT1hPyhBZSgpLHBlPWIscWU9YyxwZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkpOlwiZm9jdXNvdXRcIj09PWEmJkFlKCl9ZnVuY3Rpb24gRGUoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gdGUocWUpfWZ1bmN0aW9uIEVlKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gRmUoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gR2UoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBIZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpHZSxJZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gSmUoYSxiKXtpZihIZShhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIUllLmNhbGwoYixjW2RdKXx8IUhlKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gS2UoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gTGUoYSxiKXt2YXIgYz1LZShhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1LZShjKX19ZnVuY3Rpb24gTWUoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9NZShhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBOZSgpe2Zvcih2YXIgYT13aW5kb3csYj1YYSgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e3ZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYi5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWZ9Y2F0Y2goZCl7Yz0hMX1pZihjKWE9Yi5jb250ZW50V2luZG93O2Vsc2UgYnJlYWs7Yj1YYShhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBPZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxudmFyIFBlPWZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsUWU9bnVsbCxSZT1udWxsLFNlPW51bGwsVGU9ITE7XG5mdW5jdGlvbiBVZShhLGIsYyl7dmFyIGQ9Yy53aW5kb3c9PT1jP2MuZG9jdW1lbnQ6OT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQ7VGV8fG51bGw9PVFlfHxRZSE9PVhhKGQpfHwoZD1RZSxcInNlbGVjdGlvblN0YXJ0XCJpbiBkJiZPZShkKT9kPXtzdGFydDpkLnNlbGVjdGlvblN0YXJ0LGVuZDpkLnNlbGVjdGlvbkVuZH06KGQ9KGQub3duZXJEb2N1bWVudCYmZC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGQ9e2FuY2hvck5vZGU6ZC5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpkLmFuY2hvck9mZnNldCxmb2N1c05vZGU6ZC5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6ZC5mb2N1c09mZnNldH0pLFNlJiZKZShTZSxkKXx8KFNlPWQsZD1vZShSZSxcIm9uU2VsZWN0XCIpLDA8ZC5sZW5ndGgmJihiPW5ldyB0ZChcIm9uU2VsZWN0XCIsXCJzZWxlY3RcIixudWxsLGIsYyksYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpkfSksYi50YXJnZXQ9UWUpKSl9XG5QYyhcImNhbmNlbCBjYW5jZWwgY2xpY2sgY2xpY2sgY2xvc2UgY2xvc2UgY29udGV4dG1lbnUgY29udGV4dE1lbnUgY29weSBjb3B5IGN1dCBjdXQgYXV4Y2xpY2sgYXV4Q2xpY2sgZGJsY2xpY2sgZG91YmxlQ2xpY2sgZHJhZ2VuZCBkcmFnRW5kIGRyYWdzdGFydCBkcmFnU3RhcnQgZHJvcCBkcm9wIGZvY3VzaW4gZm9jdXMgZm9jdXNvdXQgYmx1ciBpbnB1dCBpbnB1dCBpbnZhbGlkIGludmFsaWQga2V5ZG93biBrZXlEb3duIGtleXByZXNzIGtleVByZXNzIGtleXVwIGtleVVwIG1vdXNlZG93biBtb3VzZURvd24gbW91c2V1cCBtb3VzZVVwIHBhc3RlIHBhc3RlIHBhdXNlIHBhdXNlIHBsYXkgcGxheSBwb2ludGVyY2FuY2VsIHBvaW50ZXJDYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlckRvd24gcG9pbnRlcnVwIHBvaW50ZXJVcCByYXRlY2hhbmdlIHJhdGVDaGFuZ2UgcmVzZXQgcmVzZXQgc2Vla2VkIHNlZWtlZCBzdWJtaXQgc3VibWl0IHRvdWNoY2FuY2VsIHRvdWNoQ2FuY2VsIHRvdWNoZW5kIHRvdWNoRW5kIHRvdWNoc3RhcnQgdG91Y2hTdGFydCB2b2x1bWVjaGFuZ2Ugdm9sdW1lQ2hhbmdlXCIuc3BsaXQoXCIgXCIpLFxuMCk7UGMoXCJkcmFnIGRyYWcgZHJhZ2VudGVyIGRyYWdFbnRlciBkcmFnZXhpdCBkcmFnRXhpdCBkcmFnbGVhdmUgZHJhZ0xlYXZlIGRyYWdvdmVyIGRyYWdPdmVyIG1vdXNlbW92ZSBtb3VzZU1vdmUgbW91c2VvdXQgbW91c2VPdXQgbW91c2VvdmVyIG1vdXNlT3ZlciBwb2ludGVybW92ZSBwb2ludGVyTW92ZSBwb2ludGVyb3V0IHBvaW50ZXJPdXQgcG9pbnRlcm92ZXIgcG9pbnRlck92ZXIgc2Nyb2xsIHNjcm9sbCB0b2dnbGUgdG9nZ2xlIHRvdWNobW92ZSB0b3VjaE1vdmUgd2hlZWwgd2hlZWxcIi5zcGxpdChcIiBcIiksMSk7UGMoT2MsMik7Zm9yKHZhciBWZT1cImNoYW5nZSBzZWxlY3Rpb25jaGFuZ2UgdGV4dElucHV0IGNvbXBvc2l0aW9uc3RhcnQgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb251cGRhdGVcIi5zcGxpdChcIiBcIiksV2U9MDtXZTxWZS5sZW5ndGg7V2UrKylOYy5zZXQoVmVbV2VdLDApO2VhKFwib25Nb3VzZUVudGVyXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7XG5lYShcIm9uTW91c2VMZWF2ZVwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2VhKFwib25Qb2ludGVyRW50ZXJcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJMZWF2ZVwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtkYShcIm9uQ2hhbmdlXCIsXCJjaGFuZ2UgY2xpY2sgZm9jdXNpbiBmb2N1c291dCBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvblNlbGVjdFwiLFwiZm9jdXNvdXQgY29udGV4dG1lbnUgZHJhZ2VuZCBmb2N1c2luIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uQmVmb3JlSW5wdXRcIixbXCJjb21wb3NpdGlvbmVuZFwiLFwia2V5cHJlc3NcIixcInRleHRJbnB1dFwiLFwicGFzdGVcIl0pO2RhKFwib25Db21wb3NpdGlvbkVuZFwiLFwiY29tcG9zaXRpb25lbmQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO1xuZGEoXCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcImNvbXBvc2l0aW9uc3RhcnQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO2RhKFwib25Db21wb3NpdGlvblVwZGF0ZVwiLFwiY29tcG9zaXRpb251cGRhdGUgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO3ZhciBYZT1cImFib3J0IGNhbnBsYXkgY2FucGxheXRocm91Z2ggZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2Ugc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksWWU9bmV3IFNldChcImNhbmNlbCBjbG9zZSBpbnZhbGlkIGxvYWQgc2Nyb2xsIHRvZ2dsZVwiLnNwbGl0KFwiIFwiKS5jb25jYXQoWGUpKTtcbmZ1bmN0aW9uIFplKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD1jO1liKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9XG5mdW5jdGlvbiBzZShhLGIpe2I9MCE9PShiJjQpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5ldmVudDtkPWQubGlzdGVuZXJzO2E6e3ZhciBmPXZvaWQgMDtpZihiKWZvcih2YXIgZz1kLmxlbmd0aC0xOzA8PWc7Zy0tKXt2YXIgaD1kW2ddLGs9aC5pbnN0YW5jZSxsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO1plKGUsaCxsKTtmPWt9ZWxzZSBmb3IoZz0wO2c8ZC5sZW5ndGg7ZysrKXtoPWRbZ107az1oLmluc3RhbmNlO2w9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a319fWlmKFViKXRocm93IGE9VmIsVWI9ITEsVmI9bnVsbCxhO31cbmZ1bmN0aW9uIEcoYSxiKXt2YXIgYz0kZShiKSxkPWErXCJfX2J1YmJsZVwiO2MuaGFzKGQpfHwoYWYoYixhLDIsITEpLGMuYWRkKGQpKX12YXIgYmY9XCJfcmVhY3RMaXN0ZW5pbmdcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtmdW5jdGlvbiBjZihhKXthW2JmXXx8KGFbYmZdPSEwLGJhLmZvckVhY2goZnVuY3Rpb24oYil7WWUuaGFzKGIpfHxkZihiLCExLGEsbnVsbCk7ZGYoYiwhMCxhLG51bGwpfSkpfVxuZnVuY3Rpb24gZGYoYSxiLGMsZCl7dmFyIGU9NDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOjAsZj1jO1wic2VsZWN0aW9uY2hhbmdlXCI9PT1hJiY5IT09Yy5ub2RlVHlwZSYmKGY9Yy5vd25lckRvY3VtZW50KTtpZihudWxsIT09ZCYmIWImJlllLmhhcyhhKSl7aWYoXCJzY3JvbGxcIiE9PWEpcmV0dXJuO2V8PTI7Zj1kfXZhciBnPSRlKGYpLGg9YStcIl9fXCIrKGI/XCJjYXB0dXJlXCI6XCJidWJibGVcIik7Zy5oYXMoaCl8fChiJiYoZXw9NCksYWYoZixhLGUsYiksZy5hZGQoaCkpfVxuZnVuY3Rpb24gYWYoYSxiLGMsZCl7dmFyIGU9TmMuZ2V0KGIpO3N3aXRjaCh2b2lkIDA9PT1lPzI6ZSl7Y2FzZSAwOmU9Z2Q7YnJlYWs7Y2FzZSAxOmU9aWQ7YnJlYWs7ZGVmYXVsdDplPWhkfWM9ZS5iaW5kKG51bGwsYixjLGEpO2U9dm9pZCAwOyFQYnx8XCJ0b3VjaHN0YXJ0XCIhPT1iJiZcInRvdWNobW92ZVwiIT09YiYmXCJ3aGVlbFwiIT09Ynx8KGU9ITApO2Q/dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtjYXB0dXJlOiEwLHBhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITApOnZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7cGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9XG5mdW5jdGlvbiBqZChhLGIsYyxkLGUpe3ZhciBmPWQ7aWYoMD09PShiJjEpJiYwPT09KGImMikmJm51bGwhPT1kKWE6Zm9yKDs7KXtpZihudWxsPT09ZClyZXR1cm47dmFyIGc9ZC50YWc7aWYoMz09PWd8fDQ9PT1nKXt2YXIgaD1kLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKGg9PT1lfHw4PT09aC5ub2RlVHlwZSYmaC5wYXJlbnROb2RlPT09ZSlicmVhaztpZig0PT09Zylmb3IoZz1kLnJldHVybjtudWxsIT09Zzspe3ZhciBrPWcudGFnO2lmKDM9PT1rfHw0PT09aylpZihrPWcuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8saz09PWV8fDg9PT1rLm5vZGVUeXBlJiZrLnBhcmVudE5vZGU9PT1lKXJldHVybjtnPWcucmV0dXJufWZvcig7bnVsbCE9PWg7KXtnPXdjKGgpO2lmKG51bGw9PT1nKXJldHVybjtrPWcudGFnO2lmKDU9PT1rfHw2PT09ayl7ZD1mPWc7Y29udGludWUgYX1oPWgucGFyZW50Tm9kZX19ZD1kLnJldHVybn1OYihmdW5jdGlvbigpe3ZhciBkPWYsZT14YihjKSxnPVtdO1xuYTp7dmFyIGg9TWMuZ2V0KGEpO2lmKHZvaWQgMCE9PWgpe3ZhciBrPXRkLHg9YTtzd2l0Y2goYSl7Y2FzZSBcImtleXByZXNzXCI6aWYoMD09PW9kKGMpKWJyZWFrIGE7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjprPVJkO2JyZWFrO2Nhc2UgXCJmb2N1c2luXCI6eD1cImZvY3VzXCI7az1GZDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjp4PVwiYmx1clwiO2s9RmQ7YnJlYWs7Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6az1GZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pYnJlYWsgYTtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOms9QmQ7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6az1cbkRkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOms9VmQ7YnJlYWs7Y2FzZSBJYzpjYXNlIEpjOmNhc2UgS2M6az1IZDticmVhaztjYXNlIExjOms9WGQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOms9dmQ7YnJlYWs7Y2FzZSBcIndoZWVsXCI6az1aZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjprPUpkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOms9VGR9dmFyIHc9MCE9PShiJjQpLHo9IXcmJlwic2Nyb2xsXCI9PT1hLHU9dz9udWxsIT09aD9oK1wiQ2FwdHVyZVwiOm51bGw6aDt3PVtdO2Zvcih2YXIgdD1kLHE7bnVsbCE9PVxudDspe3E9dDt2YXIgdj1xLnN0YXRlTm9kZTs1PT09cS50YWcmJm51bGwhPT12JiYocT12LG51bGwhPT11JiYodj1PYih0LHUpLG51bGwhPXYmJncucHVzaChlZih0LHYscSkpKSk7aWYoeilicmVhazt0PXQucmV0dXJufTA8dy5sZW5ndGgmJihoPW5ldyBrKGgseCxudWxsLGMsZSksZy5wdXNoKHtldmVudDpoLGxpc3RlbmVyczp3fSkpfX1pZigwPT09KGImNykpe2E6e2g9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWE7az1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoaCYmMD09PShiJjE2KSYmKHg9Yy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KSYmKHdjKHgpfHx4W2ZmXSkpYnJlYWsgYTtpZihrfHxoKXtoPWUud2luZG93PT09ZT9lOihoPWUub3duZXJEb2N1bWVudCk/aC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3c6d2luZG93O2lmKGspe2lmKHg9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCxrPWQseD14P3djKHgpOm51bGwsbnVsbCE9PVxueCYmKHo9WmIoeCkseCE9PXp8fDUhPT14LnRhZyYmNiE9PXgudGFnKSl4PW51bGx9ZWxzZSBrPW51bGwseD1kO2lmKGshPT14KXt3PUJkO3Y9XCJvbk1vdXNlTGVhdmVcIjt1PVwib25Nb3VzZUVudGVyXCI7dD1cIm1vdXNlXCI7aWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKXc9VGQsdj1cIm9uUG9pbnRlckxlYXZlXCIsdT1cIm9uUG9pbnRlckVudGVyXCIsdD1cInBvaW50ZXJcIjt6PW51bGw9PWs/aDp1ZShrKTtxPW51bGw9PXg/aDp1ZSh4KTtoPW5ldyB3KHYsdCtcImxlYXZlXCIsayxjLGUpO2gudGFyZ2V0PXo7aC5yZWxhdGVkVGFyZ2V0PXE7dj1udWxsO3djKGUpPT09ZCYmKHc9bmV3IHcodSx0K1wiZW50ZXJcIix4LGMsZSksdy50YXJnZXQ9cSx3LnJlbGF0ZWRUYXJnZXQ9eix2PXcpO3o9djtpZihrJiZ4KWI6e3c9azt1PXg7dD0wO2ZvcihxPXc7cTtxPWdmKHEpKXQrKztxPTA7Zm9yKHY9dTt2O3Y9Z2YodikpcSsrO2Zvcig7MDx0LXE7KXc9Z2YodyksdC0tO2Zvcig7MDxxLXQ7KXU9XG5nZih1KSxxLS07Zm9yKDt0LS07KXtpZih3PT09dXx8bnVsbCE9PXUmJnc9PT11LmFsdGVybmF0ZSlicmVhayBiO3c9Z2Yodyk7dT1nZih1KX13PW51bGx9ZWxzZSB3PW51bGw7bnVsbCE9PWsmJmhmKGcsaCxrLHcsITEpO251bGwhPT14JiZudWxsIT09eiYmaGYoZyx6LHgsdywhMCl9fX1hOntoPWQ/dWUoZCk6d2luZG93O2s9aC5ub2RlTmFtZSYmaC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwic2VsZWN0XCI9PT1rfHxcImlucHV0XCI9PT1rJiZcImZpbGVcIj09PWgudHlwZSl2YXIgSj12ZTtlbHNlIGlmKG1lKGgpKWlmKHdlKUo9RmU7ZWxzZXtKPURlO3ZhciBLPUNlfWVsc2Uoaz1oLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09ay50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09aC50eXBlfHxcInJhZGlvXCI9PT1oLnR5cGUpJiYoSj1FZSk7aWYoSiYmKEo9SihhLGQpKSl7bmUoZyxKLGMsZSk7YnJlYWsgYX1LJiZLKGEsaCxkKTtcImZvY3Vzb3V0XCI9PT1hJiYoSz1oLl93cmFwcGVyU3RhdGUpJiZcbksuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWgudHlwZSYmYmIoaCxcIm51bWJlclwiLGgudmFsdWUpfUs9ZD91ZShkKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6aWYobWUoSyl8fFwidHJ1ZVwiPT09Sy5jb250ZW50RWRpdGFibGUpUWU9SyxSZT1kLFNlPW51bGw7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6U2U9UmU9UWU9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6VGU9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOlRlPSExO1VlKGcsYyxlKTticmVhaztjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoUGUpYnJlYWs7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjpVZShnLGMsZSl9dmFyIFE7aWYoYWUpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6dmFyIEw9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIjticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOkw9XCJvbkNvbXBvc2l0aW9uRW5kXCI7YnJlYWsgYjtcbmNhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOkw9XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCI7YnJlYWsgYn1MPXZvaWQgMH1lbHNlIGllP2dlKGEsYykmJihMPVwib25Db21wb3NpdGlvbkVuZFwiKTpcImtleWRvd25cIj09PWEmJjIyOT09PWMua2V5Q29kZSYmKEw9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIik7TCYmKGRlJiZcImtvXCIhPT1jLmxvY2FsZSYmKGllfHxcIm9uQ29tcG9zaXRpb25TdGFydFwiIT09TD9cIm9uQ29tcG9zaXRpb25FbmRcIj09PUwmJmllJiYoUT1uZCgpKTooa2Q9ZSxsZD1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxpZT0hMCkpLEs9b2UoZCxMKSwwPEsubGVuZ3RoJiYoTD1uZXcgTGQoTCxhLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OkwsbGlzdGVuZXJzOkt9KSxRP0wuZGF0YT1ROihRPWhlKGMpLG51bGwhPT1RJiYoTC5kYXRhPVEpKSkpO2lmKFE9Y2U/amUoYSxjKTprZShhLGMpKWQ9b2UoZCxcIm9uQmVmb3JlSW5wdXRcIiksMDxkLmxlbmd0aCYmKGU9bmV3IExkKFwib25CZWZvcmVJbnB1dFwiLFxuXCJiZWZvcmVpbnB1dFwiLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmUsbGlzdGVuZXJzOmR9KSxlLmRhdGE9USl9c2UoZyxiKX0pfWZ1bmN0aW9uIGVmKGEsYixjKXtyZXR1cm57aW5zdGFuY2U6YSxsaXN0ZW5lcjpiLGN1cnJlbnRUYXJnZXQ6Y319ZnVuY3Rpb24gb2UoYSxiKXtmb3IodmFyIGM9YitcIkNhcHR1cmVcIixkPVtdO251bGwhPT1hOyl7dmFyIGU9YSxmPWUuc3RhdGVOb2RlOzU9PT1lLnRhZyYmbnVsbCE9PWYmJihlPWYsZj1PYihhLGMpLG51bGwhPWYmJmQudW5zaGlmdChlZihhLGYsZSkpLGY9T2IoYSxiKSxudWxsIT1mJiZkLnB1c2goZWYoYSxmLGUpKSk7YT1hLnJldHVybn1yZXR1cm4gZH1mdW5jdGlvbiBnZihhKXtpZihudWxsPT09YSlyZXR1cm4gbnVsbDtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfVxuZnVuY3Rpb24gaGYoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yi5fcmVhY3ROYW1lLGc9W107bnVsbCE9PWMmJmMhPT1kOyl7dmFyIGg9YyxrPWguYWx0ZXJuYXRlLGw9aC5zdGF0ZU5vZGU7aWYobnVsbCE9PWsmJms9PT1kKWJyZWFrOzU9PT1oLnRhZyYmbnVsbCE9PWwmJihoPWwsZT8oaz1PYihjLGYpLG51bGwhPWsmJmcudW5zaGlmdChlZihjLGssaCkpKTplfHwoaz1PYihjLGYpLG51bGwhPWsmJmcucHVzaChlZihjLGssaCkpKSk7Yz1jLnJldHVybn0wIT09Zy5sZW5ndGgmJmEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6Z30pfWZ1bmN0aW9uIGpmKCl7fXZhciBrZj1udWxsLGxmPW51bGw7ZnVuY3Rpb24gbWYoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4hIWIuYXV0b0ZvY3VzfXJldHVybiExfVxuZnVuY3Rpb24gbmYoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm9wdGlvblwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfXZhciBvZj1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCxwZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDA7ZnVuY3Rpb24gcWYoYSl7MT09PWEubm9kZVR5cGU/YS50ZXh0Q29udGVudD1cIlwiOjk9PT1hLm5vZGVUeXBlJiYoYT1hLmJvZHksbnVsbCE9YSYmKGEudGV4dENvbnRlbnQ9XCJcIikpfVxuZnVuY3Rpb24gcmYoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWt9cmV0dXJuIGF9ZnVuY3Rpb24gc2YoYSl7YT1hLnByZXZpb3VzU2libGluZztmb3IodmFyIGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIiRcIj09PWN8fFwiJCFcIj09PWN8fFwiJD9cIj09PWMpe2lmKDA9PT1iKXJldHVybiBhO2ItLX1lbHNlXCIvJFwiPT09YyYmYisrfWE9YS5wcmV2aW91c1NpYmxpbmd9cmV0dXJuIG51bGx9dmFyIHRmPTA7ZnVuY3Rpb24gdWYoYSl7cmV0dXJueyQkdHlwZW9mOkdhLHRvU3RyaW5nOmEsdmFsdWVPZjphfX12YXIgdmY9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksd2Y9XCJfX3JlYWN0RmliZXIkXCIrdmYseGY9XCJfX3JlYWN0UHJvcHMkXCIrdmYsZmY9XCJfX3JlYWN0Q29udGFpbmVyJFwiK3ZmLHlmPVwiX19yZWFjdEV2ZW50cyRcIit2ZjtcbmZ1bmN0aW9uIHdjKGEpe3ZhciBiPWFbd2ZdO2lmKGIpcmV0dXJuIGI7Zm9yKHZhciBjPWEucGFyZW50Tm9kZTtjOyl7aWYoYj1jW2ZmXXx8Y1t3Zl0pe2M9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWIuY2hpbGR8fG51bGwhPT1jJiZudWxsIT09Yy5jaGlsZClmb3IoYT1zZihhKTtudWxsIT09YTspe2lmKGM9YVt3Zl0pcmV0dXJuIGM7YT1zZihhKX1yZXR1cm4gYn1hPWM7Yz1hLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQ2IoYSl7YT1hW3dmXXx8YVtmZl07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnJiYxMyE9PWEudGFnJiYzIT09YS50YWc/bnVsbDphfWZ1bmN0aW9uIHVlKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt0aHJvdyBFcnJvcih5KDMzKSk7fWZ1bmN0aW9uIERiKGEpe3JldHVybiBhW3hmXXx8bnVsbH1cbmZ1bmN0aW9uICRlKGEpe3ZhciBiPWFbeWZdO3ZvaWQgMD09PWImJihiPWFbeWZdPW5ldyBTZXQpO3JldHVybiBifXZhciB6Zj1bXSxBZj0tMTtmdW5jdGlvbiBCZihhKXtyZXR1cm57Y3VycmVudDphfX1mdW5jdGlvbiBIKGEpezA+QWZ8fChhLmN1cnJlbnQ9emZbQWZdLHpmW0FmXT1udWxsLEFmLS0pfWZ1bmN0aW9uIEkoYSxiKXtBZisrO3pmW0FmXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIENmPXt9LE09QmYoQ2YpLE49QmYoITEpLERmPUNmO1xuZnVuY3Rpb24gRWYoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBDZjt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1mdW5jdGlvbiBGZihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uIEdmKCl7SChOKTtIKE0pfWZ1bmN0aW9uIEhmKGEsYixjKXtpZihNLmN1cnJlbnQhPT1DZil0aHJvdyBFcnJvcih5KDE2OCkpO0koTSxiKTtJKE4sYyl9XG5mdW5jdGlvbiBJZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7YT1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpaWYoIShlIGluIGEpKXRocm93IEVycm9yKHkoMTA4LFJhKGIpfHxcIlVua25vd25cIixlKSk7cmV0dXJuIG0oe30sYyxkKX1mdW5jdGlvbiBKZihhKXthPShhPWEuc3RhdGVOb2RlKSYmYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8Q2Y7RGY9TS5jdXJyZW50O0koTSxhKTtJKE4sTi5jdXJyZW50KTtyZXR1cm4hMH1mdW5jdGlvbiBLZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoIWQpdGhyb3cgRXJyb3IoeSgxNjkpKTtjPyhhPUlmKGEsYixEZiksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1hLEgoTiksSChNKSxJKE0sYSkpOkgoTik7SShOLGMpfVxudmFyIExmPW51bGwsTWY9bnVsbCxOZj1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxPZj1yLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssUGY9ci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxRZj1yLnVuc3RhYmxlX3Nob3VsZFlpZWxkLFJmPXIudW5zdGFibGVfcmVxdWVzdFBhaW50LFNmPXIudW5zdGFibGVfbm93LFRmPXIudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsVWY9ci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxWZj1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LFdmPXIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksWGY9ci51bnN0YWJsZV9Mb3dQcmlvcml0eSxZZj1yLnVuc3RhYmxlX0lkbGVQcmlvcml0eSxaZj17fSwkZj12b2lkIDAhPT1SZj9SZjpmdW5jdGlvbigpe30sYWc9bnVsbCxiZz1udWxsLGNnPSExLGRnPVNmKCksTz0xRTQ+ZGc/U2Y6ZnVuY3Rpb24oKXtyZXR1cm4gU2YoKS1kZ307XG5mdW5jdGlvbiBlZygpe3N3aXRjaChUZigpKXtjYXNlIFVmOnJldHVybiA5OTtjYXNlIFZmOnJldHVybiA5ODtjYXNlIFdmOnJldHVybiA5NztjYXNlIFhmOnJldHVybiA5NjtjYXNlIFlmOnJldHVybiA5NTtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBmZyhhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gVWY7Y2FzZSA5ODpyZXR1cm4gVmY7Y2FzZSA5NzpyZXR1cm4gV2Y7Y2FzZSA5NjpyZXR1cm4gWGY7Y2FzZSA5NTpyZXR1cm4gWWY7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMzMikpO319ZnVuY3Rpb24gZ2coYSxiKXthPWZnKGEpO3JldHVybiBOZihhLGIpfWZ1bmN0aW9uIGhnKGEsYixjKXthPWZnKGEpO3JldHVybiBPZihhLGIsYyl9ZnVuY3Rpb24gaWcoKXtpZihudWxsIT09Ymcpe3ZhciBhPWJnO2JnPW51bGw7UGYoYSl9amcoKX1cbmZ1bmN0aW9uIGpnKCl7aWYoIWNnJiZudWxsIT09YWcpe2NnPSEwO3ZhciBhPTA7dHJ5e3ZhciBiPWFnO2dnKDk5LGZ1bmN0aW9uKCl7Zm9yKDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTtkbyBjPWMoITApO3doaWxlKG51bGwhPT1jKX19KTthZz1udWxsfWNhdGNoKGMpe3Rocm93IG51bGwhPT1hZyYmKGFnPWFnLnNsaWNlKGErMSkpLE9mKFVmLGlnKSxjO31maW5hbGx5e2NnPSExfX19dmFyIGtnPXJhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnO2Z1bmN0aW9uIGxnKGEsYil7aWYoYSYmYS5kZWZhdWx0UHJvcHMpe2I9bSh7fSxiKTthPWEuZGVmYXVsdFByb3BzO2Zvcih2YXIgYyBpbiBhKXZvaWQgMD09PWJbY10mJihiW2NdPWFbY10pO3JldHVybiBifXJldHVybiBifXZhciBtZz1CZihudWxsKSxuZz1udWxsLG9nPW51bGwscGc9bnVsbDtmdW5jdGlvbiBxZygpe3BnPW9nPW5nPW51bGx9XG5mdW5jdGlvbiByZyhhKXt2YXIgYj1tZy5jdXJyZW50O0gobWcpO2EudHlwZS5fY29udGV4dC5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gc2coYSxiKXtmb3IoO251bGwhPT1hOyl7dmFyIGM9YS5hbHRlcm5hdGU7aWYoKGEuY2hpbGRMYW5lcyZiKT09PWIpaWYobnVsbD09PWN8fChjLmNoaWxkTGFuZXMmYik9PT1iKWJyZWFrO2Vsc2UgYy5jaGlsZExhbmVzfD1iO2Vsc2UgYS5jaGlsZExhbmVzfD1iLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKTthPWEucmV0dXJufX1mdW5jdGlvbiB0ZyhhLGIpe25nPWE7cGc9b2c9bnVsbDthPWEuZGVwZW5kZW5jaWVzO251bGwhPT1hJiZudWxsIT09YS5maXJzdENvbnRleHQmJigwIT09KGEubGFuZXMmYikmJih1Zz0hMCksYS5maXJzdENvbnRleHQ9bnVsbCl9XG5mdW5jdGlvbiB2ZyhhLGIpe2lmKHBnIT09YSYmITEhPT1iJiYwIT09Yil7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBifHwxMDczNzQxODIzPT09YilwZz1hLGI9MTA3Mzc0MTgyMztiPXtjb250ZXh0OmEsb2JzZXJ2ZWRCaXRzOmIsbmV4dDpudWxsfTtpZihudWxsPT09b2cpe2lmKG51bGw9PT1uZyl0aHJvdyBFcnJvcih5KDMwOCkpO29nPWI7bmcuZGVwZW5kZW5jaWVzPXtsYW5lczowLGZpcnN0Q29udGV4dDpiLHJlc3BvbmRlcnM6bnVsbH19ZWxzZSBvZz1vZy5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgd2c9ITE7ZnVuY3Rpb24geGcoYSl7YS51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEubWVtb2l6ZWRTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6bnVsbCxsYXN0QmFzZVVwZGF0ZTpudWxsLHNoYXJlZDp7cGVuZGluZzpudWxsfSxlZmZlY3RzOm51bGx9fVxuZnVuY3Rpb24geWcoYSxiKXthPWEudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT09PWEmJihiLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmEuZmlyc3RCYXNlVXBkYXRlLGxhc3RCYXNlVXBkYXRlOmEubGFzdEJhc2VVcGRhdGUsc2hhcmVkOmEuc2hhcmVkLGVmZmVjdHM6YS5lZmZlY3RzfSl9ZnVuY3Rpb24gemcoYSxiKXtyZXR1cm57ZXZlbnRUaW1lOmEsbGFuZTpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbH19ZnVuY3Rpb24gQWcoYSxiKXthPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWEpe2E9YS5zaGFyZWQ7dmFyIGM9YS5wZW5kaW5nO251bGw9PT1jP2IubmV4dD1iOihiLm5leHQ9Yy5uZXh0LGMubmV4dD1iKTthLnBlbmRpbmc9Yn19XG5mdW5jdGlvbiBCZyhhLGIpe3ZhciBjPWEudXBkYXRlUXVldWUsZD1hLmFsdGVybmF0ZTtpZihudWxsIT09ZCYmKGQ9ZC51cGRhdGVRdWV1ZSxjPT09ZCkpe3ZhciBlPW51bGwsZj1udWxsO2M9Yy5maXJzdEJhc2VVcGRhdGU7aWYobnVsbCE9PWMpe2Rve3ZhciBnPXtldmVudFRpbWU6Yy5ldmVudFRpbWUsbGFuZTpjLmxhbmUsdGFnOmMudGFnLHBheWxvYWQ6Yy5wYXlsb2FkLGNhbGxiYWNrOmMuY2FsbGJhY2ssbmV4dDpudWxsfTtudWxsPT09Zj9lPWY9ZzpmPWYubmV4dD1nO2M9Yy5uZXh0fXdoaWxlKG51bGwhPT1jKTtudWxsPT09Zj9lPWY9YjpmPWYubmV4dD1ifWVsc2UgZT1mPWI7Yz17YmFzZVN0YXRlOmQuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTplLGxhc3RCYXNlVXBkYXRlOmYsc2hhcmVkOmQuc2hhcmVkLGVmZmVjdHM6ZC5lZmZlY3RzfTthLnVwZGF0ZVF1ZXVlPWM7cmV0dXJufWE9Yy5sYXN0QmFzZVVwZGF0ZTtudWxsPT09YT9jLmZpcnN0QmFzZVVwZGF0ZT1iOmEubmV4dD1cbmI7Yy5sYXN0QmFzZVVwZGF0ZT1ifVxuZnVuY3Rpb24gQ2coYSxiLGMsZCl7dmFyIGU9YS51cGRhdGVRdWV1ZTt3Zz0hMTt2YXIgZj1lLmZpcnN0QmFzZVVwZGF0ZSxnPWUubGFzdEJhc2VVcGRhdGUsaD1lLnNoYXJlZC5wZW5kaW5nO2lmKG51bGwhPT1oKXtlLnNoYXJlZC5wZW5kaW5nPW51bGw7dmFyIGs9aCxsPWsubmV4dDtrLm5leHQ9bnVsbDtudWxsPT09Zz9mPWw6Zy5uZXh0PWw7Zz1rO3ZhciBuPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1uKXtuPW4udXBkYXRlUXVldWU7dmFyIEE9bi5sYXN0QmFzZVVwZGF0ZTtBIT09ZyYmKG51bGw9PT1BP24uZmlyc3RCYXNlVXBkYXRlPWw6QS5uZXh0PWwsbi5sYXN0QmFzZVVwZGF0ZT1rKX19aWYobnVsbCE9PWYpe0E9ZS5iYXNlU3RhdGU7Zz0wO249bD1rPW51bGw7ZG97aD1mLmxhbmU7dmFyIHA9Zi5ldmVudFRpbWU7aWYoKGQmaCk9PT1oKXtudWxsIT09biYmKG49bi5uZXh0PXtldmVudFRpbWU6cCxsYW5lOjAsdGFnOmYudGFnLHBheWxvYWQ6Zi5wYXlsb2FkLGNhbGxiYWNrOmYuY2FsbGJhY2ssXG5uZXh0Om51bGx9KTthOnt2YXIgQz1hLHg9ZjtoPWI7cD1jO3N3aXRjaCh4LnRhZyl7Y2FzZSAxOkM9eC5wYXlsb2FkO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBDKXtBPUMuY2FsbChwLEEsaCk7YnJlYWsgYX1BPUM7YnJlYWsgYTtjYXNlIDM6Qy5mbGFncz1DLmZsYWdzJi00MDk3fDY0O2Nhc2UgMDpDPXgucGF5bG9hZDtoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBDP0MuY2FsbChwLEEsaCk6QztpZihudWxsPT09aHx8dm9pZCAwPT09aClicmVhayBhO0E9bSh7fSxBLGgpO2JyZWFrIGE7Y2FzZSAyOndnPSEwfX1udWxsIT09Zi5jYWxsYmFjayYmKGEuZmxhZ3N8PTMyLGg9ZS5lZmZlY3RzLG51bGw9PT1oP2UuZWZmZWN0cz1bZl06aC5wdXNoKGYpKX1lbHNlIHA9e2V2ZW50VGltZTpwLGxhbmU6aCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxuZXh0Om51bGx9LG51bGw9PT1uPyhsPW49cCxrPUEpOm49bi5uZXh0PXAsZ3w9aDtmPWYubmV4dDtpZihudWxsPT09XG5mKWlmKGg9ZS5zaGFyZWQucGVuZGluZyxudWxsPT09aClicmVhaztlbHNlIGY9aC5uZXh0LGgubmV4dD1udWxsLGUubGFzdEJhc2VVcGRhdGU9aCxlLnNoYXJlZC5wZW5kaW5nPW51bGx9d2hpbGUoMSk7bnVsbD09PW4mJihrPUEpO2UuYmFzZVN0YXRlPWs7ZS5maXJzdEJhc2VVcGRhdGU9bDtlLmxhc3RCYXNlVXBkYXRlPW47RGd8PWc7YS5sYW5lcz1nO2EubWVtb2l6ZWRTdGF0ZT1BfX1mdW5jdGlvbiBFZyhhLGIsYyl7YT1iLmVmZmVjdHM7Yi5lZmZlY3RzPW51bGw7aWYobnVsbCE9PWEpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGQ9YVtiXSxlPWQuY2FsbGJhY2s7aWYobnVsbCE9PWUpe2QuY2FsbGJhY2s9bnVsbDtkPWM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGUpdGhyb3cgRXJyb3IoeSgxOTEsZSkpO2UuY2FsbChkKX19fXZhciBGZz0obmV3IGFhLkNvbXBvbmVudCkucmVmcztcbmZ1bmN0aW9uIEdnKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjptKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7MD09PWEubGFuZXMmJihhLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1jKX1cbnZhciBLZz17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxzKT9aYihhKT09PWE6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1IZygpLGU9SWcoYSksZj16ZyhkLGUpO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtBZyhhLGYpO0pnKGEsZSxkKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1IZygpLGU9SWcoYSksZj16ZyhkLGUpO2YudGFnPTE7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBjPUhnKCksZD1JZyhhKSxlPXpnKGMsZCk7ZS50YWc9Mjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGUuY2FsbGJhY2s9XG5iKTtBZyhhLGUpO0pnKGEsZCxjKX19O2Z1bmN0aW9uIExnKGEsYixjLGQsZSxmLGcpe2E9YS5zdGF0ZU5vZGU7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuc2hvdWxkQ29tcG9uZW50VXBkYXRlP2Euc2hvdWxkQ29tcG9uZW50VXBkYXRlKGQsZixnKTpiLnByb3RvdHlwZSYmYi5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQ/IUplKGMsZCl8fCFKZShlLGYpOiEwfVxuZnVuY3Rpb24gTWcoYSxiLGMpe3ZhciBkPSExLGU9Q2Y7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2Y9dmcoZik6KGU9RmYoYik/RGY6TS5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/RWYoYSxlKTpDZik7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPUtnO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbHM9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gTmcoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJktnLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24gT2coYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz1GZzt4ZyhhKTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PXZnKGYpOihmPUZmKGIpP0RmOk0uY3VycmVudCxlLmNvbnRleHQ9RWYoYSxmKSk7Q2coYSxjLGUsZCk7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKEdnKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fFxuKGI9ZS5zdGF0ZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJktnLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLENnKGEsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZmxhZ3N8PTQpfXZhciBQZz1BcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gUWcoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDMwOSkpO3ZhciBkPWMuc3RhdGVOb2RlfWlmKCFkKXRocm93IEVycm9yKHkoMTQ3LGEpKTt2YXIgZT1cIlwiK2E7aWYobnVsbCE9PWImJm51bGwhPT1iLnJlZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIucmVmJiZiLnJlZi5fc3RyaW5nUmVmPT09ZSlyZXR1cm4gYi5yZWY7Yj1mdW5jdGlvbihhKXt2YXIgYj1kLnJlZnM7Yj09PUZnJiYoYj1kLnJlZnM9e30pO251bGw9PT1hP2RlbGV0ZSBiW2VdOmJbZV09YX07Yi5fc3RyaW5nUmVmPWU7cmV0dXJuIGJ9aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhKXRocm93IEVycm9yKHkoMjg0KSk7aWYoIWMuX293bmVyKXRocm93IEVycm9yKHkoMjkwLGEpKTt9cmV0dXJuIGF9XG5mdW5jdGlvbiBSZyhhLGIpe2lmKFwidGV4dGFyZWFcIiE9PWEudHlwZSl0aHJvdyBFcnJvcih5KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO31cbmZ1bmN0aW9uIFNnKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZmxhZ3M9OH19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIpe2E9VGcoYSxiKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZmxhZ3M9MixcbmMpOmQ7Yi5mbGFncz0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmbnVsbD09PWIuYWx0ZXJuYXRlJiYoYi5mbGFncz0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9VWcoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gayhhLGIsYyxkKXtpZihudWxsIT09YiYmYi5lbGVtZW50VHlwZT09PWMudHlwZSlyZXR1cm4gZD1lKGIsYy5wcm9wcyksZC5yZWY9UWcoYSxiLGMpLGQucmV0dXJuPWEsZDtkPVZnKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPVFnKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPVxuV2coYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG4oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPVhnKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gQShhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9VWcoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGM9VmcoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksYy5yZWY9UWcoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIHRhOnJldHVybiBiPVdnKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYn1pZihQZyhiKXx8TGEoYikpcmV0dXJuIGI9WGcoYixcbmEubW9kZSxjLG51bGwpLGIucmV0dXJuPWEsYjtSZyhhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIHAoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGMua2V5PT09ZT9jLnR5cGU9PT11YT9uKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsZSk6ayhhLGIsYyxkKTpudWxsO2Nhc2UgdGE6cmV0dXJuIGMua2V5PT09ZT9sKGEsYixjLGQpOm51bGx9aWYoUGcoYyl8fExhKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm4oYSxiLGMsZCxudWxsKTtSZyhhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIEMoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1hLmdldChjKXx8XG5udWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsZC50eXBlPT09dWE/bihiLGEsZC5wcm9wcy5jaGlsZHJlbixlLGQua2V5KTprKGIsYSxkLGUpO2Nhc2UgdGE6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGwoYixhLGQsZSl9aWYoUGcoZCl8fExhKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG4oYixhLGQsZSxudWxsKTtSZyhiLGQpfXJldHVybiBudWxsfWZ1bmN0aW9uIHgoZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsdD1udWxsLHU9Zyx6PWc9MCxxPW51bGw7bnVsbCE9PXUmJno8aC5sZW5ndGg7eisrKXt1LmluZGV4Pno/KHE9dSx1PW51bGwpOnE9dS5zaWJsaW5nO3ZhciBuPXAoZSx1LGhbel0sayk7aWYobnVsbD09PW4pe251bGw9PT11JiYodT1xKTticmVha31hJiZ1JiZudWxsPT09XG5uLmFsdGVybmF0ZSYmYihlLHUpO2c9ZihuLGcseik7bnVsbD09PXQ/bD1uOnQuc2libGluZz1uO3Q9bjt1PXF9aWYoej09PWgubGVuZ3RoKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDt6PGgubGVuZ3RoO3orKyl1PUEoZSxoW3pdLGspLG51bGwhPT11JiYoZz1mKHUsZyx6KSxudWxsPT09dD9sPXU6dC5zaWJsaW5nPXUsdD11KTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7ejxoLmxlbmd0aDt6KyspcT1DKHUsZSx6LGhbel0sayksbnVsbCE9PXEmJihhJiZudWxsIT09cS5hbHRlcm5hdGUmJnUuZGVsZXRlKG51bGw9PT1xLmtleT96OnEua2V5KSxnPWYocSxnLHopLG51bGw9PT10P2w9cTp0LnNpYmxpbmc9cSx0PXEpO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gdyhlLGcsaCxrKXt2YXIgbD1MYShoKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgbCl0aHJvdyBFcnJvcih5KDE1MCkpO2g9bC5jYWxsKGgpO2lmKG51bGw9PVxuaCl0aHJvdyBFcnJvcih5KDE1MSkpO2Zvcih2YXIgdD1sPW51bGwsdT1nLHo9Zz0wLHE9bnVsbCxuPWgubmV4dCgpO251bGwhPT11JiYhbi5kb25lO3orKyxuPWgubmV4dCgpKXt1LmluZGV4Pno/KHE9dSx1PW51bGwpOnE9dS5zaWJsaW5nO3ZhciB3PXAoZSx1LG4udmFsdWUsayk7aWYobnVsbD09PXcpe251bGw9PT11JiYodT1xKTticmVha31hJiZ1JiZudWxsPT09dy5hbHRlcm5hdGUmJmIoZSx1KTtnPWYodyxnLHopO251bGw9PT10P2w9dzp0LnNpYmxpbmc9dzt0PXc7dT1xfWlmKG4uZG9uZSlyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7IW4uZG9uZTt6Kyssbj1oLm5leHQoKSluPUEoZSxuLnZhbHVlLGspLG51bGwhPT1uJiYoZz1mKG4sZyx6KSxudWxsPT09dD9sPW46dC5zaWJsaW5nPW4sdD1uKTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7IW4uZG9uZTt6Kyssbj1oLm5leHQoKSluPUModSxlLHosbi52YWx1ZSxrKSxudWxsIT09biYmKGEmJm51bGwhPT1uLmFsdGVybmF0ZSYmXG51LmRlbGV0ZShudWxsPT09bi5rZXk/ejpuLmtleSksZz1mKG4sZyx6KSxudWxsPT09dD9sPW46dC5zaWJsaW5nPW4sdD1uKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfXJldHVybiBmdW5jdGlvbihhLGQsZixoKXt2YXIgaz1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT11YSYmbnVsbD09PWYua2V5O2smJihmPWYucHJvcHMuY2hpbGRyZW4pO3ZhciBsPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY7aWYobClzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSBzYTphOntsPWYua2V5O2ZvcihrPWQ7bnVsbCE9PWs7KXtpZihrLmtleT09PWwpe3N3aXRjaChrLnRhZyl7Y2FzZSA3OmlmKGYudHlwZT09PXVhKXtjKGEsay5zaWJsaW5nKTtkPWUoayxmLnByb3BzLmNoaWxkcmVuKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWJyZWFrO2RlZmF1bHQ6aWYoay5lbGVtZW50VHlwZT09PWYudHlwZSl7YyhhLGsuc2libGluZyk7XG5kPWUoayxmLnByb3BzKTtkLnJlZj1RZyhhLGssZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX19YyhhLGspO2JyZWFrfWVsc2UgYihhLGspO2s9ay5zaWJsaW5nfWYudHlwZT09PXVhPyhkPVhnKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1WZyhmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1RZyhhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2UgdGE6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9XG5XZyhmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKX1pZihcInN0cmluZ1wiPT09dHlwZW9mIGZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZiksZC5yZXR1cm49YSxhPWQpOihjKGEsZCksZD1VZyhmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKTtpZihQZyhmKSlyZXR1cm4geChhLGQsZixoKTtpZihMYShmKSlyZXR1cm4gdyhhLGQsZixoKTtsJiZSZyhhLGYpO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgZiYmIWspc3dpdGNoKGEudGFnKXtjYXNlIDE6Y2FzZSAyMjpjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRocm93IEVycm9yKHkoMTUyLFJhKGEudHlwZSl8fFwiQ29tcG9uZW50XCIpKTt9cmV0dXJuIGMoYSxkKX19dmFyIFlnPVNnKCEwKSxaZz1TZyghMSksJGc9e30sYWg9QmYoJGcpLGJoPUJmKCRnKSxjaD1CZigkZyk7XG5mdW5jdGlvbiBkaChhKXtpZihhPT09JGcpdGhyb3cgRXJyb3IoeSgxNzQpKTtyZXR1cm4gYX1mdW5jdGlvbiBlaChhLGIpe0koY2gsYik7SShiaCxhKTtJKGFoLCRnKTthPWIubm9kZVR5cGU7c3dpdGNoKGEpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOm1iKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDphPTg9PT1hP2IucGFyZW50Tm9kZTpiLGI9YS5uYW1lc3BhY2VVUkl8fG51bGwsYT1hLnRhZ05hbWUsYj1tYihiLGEpfUgoYWgpO0koYWgsYil9ZnVuY3Rpb24gZmgoKXtIKGFoKTtIKGJoKTtIKGNoKX1mdW5jdGlvbiBnaChhKXtkaChjaC5jdXJyZW50KTt2YXIgYj1kaChhaC5jdXJyZW50KTt2YXIgYz1tYihiLGEudHlwZSk7YiE9PWMmJihJKGJoLGEpLEkoYWgsYykpfWZ1bmN0aW9uIGhoKGEpe2JoLmN1cnJlbnQ9PT1hJiYoSChhaCksSChiaCkpfXZhciBQPUJmKDApO1xuZnVuY3Rpb24gaWgoYSl7Zm9yKHZhciBiPWE7bnVsbCE9PWI7KXtpZigxMz09PWIudGFnKXt2YXIgYz1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsPT09Y3x8XCIkP1wiPT09Yy5kYXRhfHxcIiQhXCI9PT1jLmRhdGEpKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZmxhZ3MmNjQpKXJldHVybiBifWVsc2UgaWYobnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ31yZXR1cm4gbnVsbH12YXIgamg9bnVsbCxraD1udWxsLGxoPSExO1xuZnVuY3Rpb24gbWgoYSxiKXt2YXIgYz1uaCg1LG51bGwsbnVsbCwwKTtjLmVsZW1lbnRUeXBlPVwiREVMRVRFRFwiO2MudHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yy5mbGFncz04O251bGwhPT1hLmxhc3RFZmZlY3Q/KGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsYS5sYXN0RWZmZWN0PWMpOmEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PWN9ZnVuY3Rpb24gb2goYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHBoKGEpe2lmKGxoKXt2YXIgYj1raDtpZihiKXt2YXIgYz1iO2lmKCFvaChhLGIpKXtiPXJmKGMubmV4dFNpYmxpbmcpO2lmKCFifHwhb2goYSxiKSl7YS5mbGFncz1hLmZsYWdzJi0xMDI1fDI7bGg9ITE7amg9YTtyZXR1cm59bWgoamgsYyl9amg9YTtraD1yZihiLmZpcnN0Q2hpbGQpfWVsc2UgYS5mbGFncz1hLmZsYWdzJi0xMDI1fDIsbGg9ITEsamg9YX19ZnVuY3Rpb24gcWgoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxMyE9PWEudGFnOylhPWEucmV0dXJuO2poPWF9XG5mdW5jdGlvbiByaChhKXtpZihhIT09amgpcmV0dXJuITE7aWYoIWxoKXJldHVybiBxaChhKSxsaD0hMCwhMTt2YXIgYj1hLnR5cGU7aWYoNSE9PWEudGFnfHxcImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIW5mKGIsYS5tZW1vaXplZFByb3BzKSlmb3IoYj1raDtiOyltaChhLGIpLGI9cmYoYi5uZXh0U2libGluZyk7cWgoYSk7aWYoMTM9PT1hLnRhZyl7YT1hLm1lbW9pemVkU3RhdGU7YT1udWxsIT09YT9hLmRlaHlkcmF0ZWQ6bnVsbDtpZighYSl0aHJvdyBFcnJvcih5KDMxNykpO2E6e2E9YS5uZXh0U2libGluZztmb3IoYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiLyRcIj09PWMpe2lmKDA9PT1iKXtraD1yZihhLm5leHRTaWJsaW5nKTticmVhayBhfWItLX1lbHNlXCIkXCIhPT1jJiZcIiQhXCIhPT1jJiZcIiQ/XCIhPT1jfHxiKyt9YT1hLm5leHRTaWJsaW5nfWtoPW51bGx9fWVsc2Uga2g9amg/cmYoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9XG5mdW5jdGlvbiBzaCgpe2toPWpoPW51bGw7bGg9ITF9dmFyIHRoPVtdO2Z1bmN0aW9uIHVoKCl7Zm9yKHZhciBhPTA7YTx0aC5sZW5ndGg7YSsrKXRoW2FdLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PW51bGw7dGgubGVuZ3RoPTB9dmFyIHZoPXJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsd2g9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcseGg9MCxSPW51bGwsUz1udWxsLFQ9bnVsbCx5aD0hMSx6aD0hMTtmdW5jdGlvbiBBaCgpe3Rocm93IEVycm9yKHkoMzIxKSk7fWZ1bmN0aW9uIEJoKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIUhlKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBDaChhLGIsYyxkLGUsZil7eGg9ZjtSPWI7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2IubGFuZXM9MDt2aC5jdXJyZW50PW51bGw9PT1hfHxudWxsPT09YS5tZW1vaXplZFN0YXRlP0RoOkVoO2E9YyhkLGUpO2lmKHpoKXtmPTA7ZG97emg9ITE7aWYoISgyNT5mKSl0aHJvdyBFcnJvcih5KDMwMSkpO2YrPTE7VD1TPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO3ZoLmN1cnJlbnQ9Rmg7YT1jKGQsZSl9d2hpbGUoemgpfXZoLmN1cnJlbnQ9R2g7Yj1udWxsIT09UyYmbnVsbCE9PVMubmV4dDt4aD0wO1Q9Uz1SPW51bGw7eWg9ITE7aWYoYil0aHJvdyBFcnJvcih5KDMwMCkpO3JldHVybiBhfWZ1bmN0aW9uIEhoKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxiYXNlUXVldWU6bnVsbCxxdWV1ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hO3JldHVybiBUfVxuZnVuY3Rpb24gSWgoKXtpZihudWxsPT09Uyl7dmFyIGE9Ui5hbHRlcm5hdGU7YT1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbH1lbHNlIGE9Uy5uZXh0O3ZhciBiPW51bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZTpULm5leHQ7aWYobnVsbCE9PWIpVD1iLFM9YTtlbHNle2lmKG51bGw9PT1hKXRocm93IEVycm9yKHkoMzEwKSk7Uz1hO2E9e21lbW9pemVkU3RhdGU6Uy5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpTLmJhc2VTdGF0ZSxiYXNlUXVldWU6Uy5iYXNlUXVldWUscXVldWU6Uy5xdWV1ZSxuZXh0Om51bGx9O251bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZT1UPWE6VD1ULm5leHQ9YX1yZXR1cm4gVH1mdW5jdGlvbiBKaChhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIEtoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9UyxlPWQuYmFzZVF1ZXVlLGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXtpZihudWxsIT09ZSl7dmFyIGc9ZS5uZXh0O2UubmV4dD1mLm5leHQ7Zi5uZXh0PWd9ZC5iYXNlUXVldWU9ZT1mO2MucGVuZGluZz1udWxsfWlmKG51bGwhPT1lKXtlPWUubmV4dDtkPWQuYmFzZVN0YXRlO3ZhciBoPWc9Zj1udWxsLGs9ZTtkb3t2YXIgbD1rLmxhbmU7aWYoKHhoJmwpPT09bCludWxsIT09aCYmKGg9aC5uZXh0PXtsYW5lOjAsYWN0aW9uOmsuYWN0aW9uLGVhZ2VyUmVkdWNlcjprLmVhZ2VyUmVkdWNlcixlYWdlclN0YXRlOmsuZWFnZXJTdGF0ZSxuZXh0Om51bGx9KSxkPWsuZWFnZXJSZWR1Y2VyPT09YT9rLmVhZ2VyU3RhdGU6YShkLGsuYWN0aW9uKTtlbHNle3ZhciBuPXtsYW5lOmwsYWN0aW9uOmsuYWN0aW9uLGVhZ2VyUmVkdWNlcjprLmVhZ2VyUmVkdWNlcixcbmVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH07bnVsbD09PWg/KGc9aD1uLGY9ZCk6aD1oLm5leHQ9bjtSLmxhbmVzfD1sO0RnfD1sfWs9ay5uZXh0fXdoaWxlKG51bGwhPT1rJiZrIT09ZSk7bnVsbD09PWg/Zj1kOmgubmV4dD1nO0hlKGQsYi5tZW1vaXplZFN0YXRlKXx8KHVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZDtiLmJhc2VTdGF0ZT1mO2IuYmFzZVF1ZXVlPWg7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1kfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBMaChhKXt2YXIgYj1JaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih5KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPWMuZGlzcGF0Y2gsZT1jLnBlbmRpbmcsZj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUpe2MucGVuZGluZz1udWxsO3ZhciBnPWU9ZS5uZXh0O2RvIGY9YShmLGcuYWN0aW9uKSxnPWcubmV4dDt3aGlsZShnIT09ZSk7SGUoZixiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO251bGw9PT1iLmJhc2VRdWV1ZSYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bZixkXX1cbmZ1bmN0aW9uIE1oKGEsYixjKXt2YXIgZD1iLl9nZXRWZXJzaW9uO2Q9ZChiLl9zb3VyY2UpO3ZhciBlPWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk7aWYobnVsbCE9PWUpYT1lPT09ZDtlbHNlIGlmKGE9YS5tdXRhYmxlUmVhZExhbmVzLGE9KHhoJmEpPT09YSliLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWQsdGgucHVzaChiKTtpZihhKXJldHVybiBjKGIuX3NvdXJjZSk7dGgucHVzaChiKTt0aHJvdyBFcnJvcih5KDM1MCkpO31cbmZ1bmN0aW9uIE5oKGEsYixjLGQpe3ZhciBlPVU7aWYobnVsbD09PWUpdGhyb3cgRXJyb3IoeSgzNDkpKTt2YXIgZj1iLl9nZXRWZXJzaW9uLGc9ZihiLl9zb3VyY2UpLGg9dmguY3VycmVudCxrPWgudXNlU3RhdGUoZnVuY3Rpb24oKXtyZXR1cm4gTWgoZSxiLGMpfSksbD1rWzFdLG49a1swXTtrPVQ7dmFyIEE9YS5tZW1vaXplZFN0YXRlLHA9QS5yZWZzLEM9cC5nZXRTbmFwc2hvdCx4PUEuc291cmNlO0E9QS5zdWJzY3JpYmU7dmFyIHc9UjthLm1lbW9pemVkU3RhdGU9e3JlZnM6cCxzb3VyY2U6YixzdWJzY3JpYmU6ZH07aC51c2VFZmZlY3QoZnVuY3Rpb24oKXtwLmdldFNuYXBzaG90PWM7cC5zZXRTbmFwc2hvdD1sO3ZhciBhPWYoYi5fc291cmNlKTtpZighSGUoZyxhKSl7YT1jKGIuX3NvdXJjZSk7SGUobixhKXx8KGwoYSksYT1JZyh3KSxlLm11dGFibGVSZWFkTGFuZXN8PWEmZS5wZW5kaW5nTGFuZXMpO2E9ZS5tdXRhYmxlUmVhZExhbmVzO2UuZW50YW5nbGVkTGFuZXN8PWE7Zm9yKHZhciBkPVxuZS5lbnRhbmdsZW1lbnRzLGg9YTswPGg7KXt2YXIgaz0zMS1WYyhoKSx2PTE8PGs7ZFtrXXw9YTtoJj1+dn19fSxbYyxiLGRdKTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3JldHVybiBkKGIuX3NvdXJjZSxmdW5jdGlvbigpe3ZhciBhPXAuZ2V0U25hcHNob3QsYz1wLnNldFNuYXBzaG90O3RyeXtjKGEoYi5fc291cmNlKSk7dmFyIGQ9SWcodyk7ZS5tdXRhYmxlUmVhZExhbmVzfD1kJmUucGVuZGluZ0xhbmVzfWNhdGNoKHEpe2MoZnVuY3Rpb24oKXt0aHJvdyBxO30pfX0pfSxbYixkXSk7SGUoQyxjKSYmSGUoeCxiKSYmSGUoQSxkKXx8KGE9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6SmgsbGFzdFJlbmRlcmVkU3RhdGU6bn0sYS5kaXNwYXRjaD1sPU9oLmJpbmQobnVsbCxSLGEpLGsucXVldWU9YSxrLmJhc2VRdWV1ZT1udWxsLG49TWgoZSxiLGMpLGsubWVtb2l6ZWRTdGF0ZT1rLmJhc2VTdGF0ZT1uKTtyZXR1cm4gbn1cbmZ1bmN0aW9uIFBoKGEsYixjKXt2YXIgZD1JaCgpO3JldHVybiBOaChkLGEsYixjKX1mdW5jdGlvbiBRaChhKXt2YXIgYj1IaCgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9Yi5xdWV1ZT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9T2guYmluZChudWxsLFIsYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX1cbmZ1bmN0aW9uIFJoKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtiPVIudXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbH0sUi51cGRhdGVRdWV1ZT1iLGIubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGM9Yi5sYXN0RWZmZWN0LG51bGw9PT1jP2IubGFzdEVmZmVjdD1hLm5leHQ9YTooZD1jLm5leHQsYy5uZXh0PWEsYS5uZXh0PWQsYi5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBTaChhKXt2YXIgYj1IaCgpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfWZ1bmN0aW9uIFRoKCl7cmV0dXJuIEloKCkubWVtb2l6ZWRTdGF0ZX1mdW5jdGlvbiBVaChhLGIsYyxkKXt2YXIgZT1IaCgpO1IuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiBWaChhLGIsYyxkKXt2YXIgZT1JaCgpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1TKXt2YXIgZz1TLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJkJoKGQsZy5kZXBzKSl7UmgoYixjLGYsZCk7cmV0dXJufX1SLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1SaCgxfGIsYyxmLGQpfWZ1bmN0aW9uIFdoKGEsYil7cmV0dXJuIFVoKDUxNiw0LGEsYil9ZnVuY3Rpb24gWGgoYSxiKXtyZXR1cm4gVmgoNTE2LDQsYSxiKX1mdW5jdGlvbiBZaChhLGIpe3JldHVybiBWaCg0LDIsYSxiKX1mdW5jdGlvbiBaaChhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fVxuZnVuY3Rpb24gJGgoYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBWaCg0LDIsWmguYmluZChudWxsLGIsYSksYyl9ZnVuY3Rpb24gYWkoKXt9ZnVuY3Rpb24gYmkoYSxiKXt2YXIgYz1JaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmQmgoYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9ZnVuY3Rpb24gY2koYSxiKXt2YXIgYz1JaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmQmgoYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9XG5mdW5jdGlvbiBkaShhLGIpe3ZhciBjPWVnKCk7Z2coOTg+Yz85ODpjLGZ1bmN0aW9uKCl7YSghMCl9KTtnZyg5NzxjPzk3OmMsZnVuY3Rpb24oKXt2YXIgYz13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7YSghMSksYigpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1jfX0pfVxuZnVuY3Rpb24gT2goYSxiLGMpe3ZhciBkPUhnKCksZT1JZyhhKSxmPXtsYW5lOmUsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sZz1iLnBlbmRpbmc7bnVsbD09PWc/Zi5uZXh0PWY6KGYubmV4dD1nLm5leHQsZy5uZXh0PWYpO2IucGVuZGluZz1mO2c9YS5hbHRlcm5hdGU7aWYoYT09PVJ8fG51bGwhPT1nJiZnPT09Uil6aD15aD0hMDtlbHNle2lmKDA9PT1hLmxhbmVzJiYobnVsbD09PWd8fDA9PT1nLmxhbmVzKSYmKGc9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1nKSl0cnl7dmFyIGg9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxrPWcoaCxjKTtmLmVhZ2VyUmVkdWNlcj1nO2YuZWFnZXJTdGF0ZT1rO2lmKEhlKGssaCkpcmV0dXJufWNhdGNoKGwpe31maW5hbGx5e31KZyhhLGUsZCl9fVxudmFyIEdoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpBaCx1c2VDb250ZXh0OkFoLHVzZUVmZmVjdDpBaCx1c2VJbXBlcmF0aXZlSGFuZGxlOkFoLHVzZUxheW91dEVmZmVjdDpBaCx1c2VNZW1vOkFoLHVzZVJlZHVjZXI6QWgsdXNlUmVmOkFoLHVzZVN0YXRlOkFoLHVzZURlYnVnVmFsdWU6QWgsdXNlRGVmZXJyZWRWYWx1ZTpBaCx1c2VUcmFuc2l0aW9uOkFoLHVzZU11dGFibGVTb3VyY2U6QWgsdXNlT3BhcXVlSWRlbnRpZmllcjpBaCx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LERoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe0hoKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OldoLHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBVaCg0LDIsWmguYmluZChudWxsLFxuYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFVoKDQsMixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9SGgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9ZC5xdWV1ZT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6U2gsdXNlU3RhdGU6UWgsdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPVFoKGEpLGM9YlswXSxkPWJbMV07V2goZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO1xud2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPVFoKCExKSxiPWFbMF07YT1kaS5iaW5kKG51bGwsYVsxXSk7U2goYSk7cmV0dXJuW2EsYl19LHVzZU11dGFibGVTb3VyY2U6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUhoKCk7ZC5tZW1vaXplZFN0YXRlPXtyZWZzOntnZXRTbmFwc2hvdDpiLHNldFNuYXBzaG90Om51bGx9LHNvdXJjZTphLHN1YnNjcmliZTpjfTtyZXR1cm4gTmgoZCxhLGIsYyl9LHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtpZihsaCl7dmFyIGE9ITEsYj11ZihmdW5jdGlvbigpe2F8fChhPSEwLGMoXCJyOlwiKyh0ZisrKS50b1N0cmluZygzNikpKTt0aHJvdyBFcnJvcih5KDM1NSkpO30pLGM9UWgoYilbMV07MD09PShSLm1vZGUmMikmJihSLmZsYWdzfD01MTYsUmgoNSxmdW5jdGlvbigpe2MoXCJyOlwiKyh0ZisrKS50b1N0cmluZygzNikpfSxcbnZvaWQgMCxudWxsKSk7cmV0dXJuIGJ9Yj1cInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KTtRaChiKTtyZXR1cm4gYn0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxFaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOktoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBLaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1LaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUtoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBLaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRmg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6JGgsdXNlTGF5b3V0RWZmZWN0OlloLHVzZU1lbW86Y2ksdXNlUmVkdWNlcjpMaCx1c2VSZWY6VGgsdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gTGgoSmgpfSx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9TGgoSmgpLGM9YlswXSxkPWJbMV07WGgoZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1MaChKaClbMF07cmV0dXJuW1RoKCkuY3VycmVudCxcbmFdfSx1c2VNdXRhYmxlU291cmNlOlBoLHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtyZXR1cm4gTGgoSmgpWzBdfSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LGVpPXJhLlJlYWN0Q3VycmVudE93bmVyLHVnPSExO2Z1bmN0aW9uIGZpKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/WmcoYixudWxsLGMsZCk6WWcoYixhLmNoaWxkLGMsZCl9ZnVuY3Rpb24gZ2koYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO3RnKGIsZSk7ZD1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBpaShhLGIsYyxkLGUsZil7aWYobnVsbD09PWEpe3ZhciBnPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmIWppKGcpJiZ2b2lkIDA9PT1nLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1nLGtpKGEsYixnLGQsZSxmKTthPVZnKGMudHlwZSxudWxsLGQsYixiLm1vZGUsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWc9YS5jaGlsZDtpZigwPT09KGUmZikmJihlPWcubWVtb2l6ZWRQcm9wcyxjPWMuY29tcGFyZSxjPW51bGwhPT1jP2M6SmUsYyhlLGQpJiZhLnJlZj09PWIucmVmKSlyZXR1cm4gaGkoYSxiLGYpO2IuZmxhZ3N8PTE7YT1UZyhnLGQpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIGtpKGEsYixjLGQsZSxmKXtpZihudWxsIT09YSYmSmUoYS5tZW1vaXplZFByb3BzLGQpJiZhLnJlZj09PWIucmVmKWlmKHVnPSExLDAhPT0oZiZlKSkwIT09KGEuZmxhZ3MmMTYzODQpJiYodWc9ITApO2Vsc2UgcmV0dXJuIGIubGFuZXM9YS5sYW5lcyxoaShhLGIsZik7cmV0dXJuIGxpKGEsYixjLGQsZil9XG5mdW5jdGlvbiBtaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLmNoaWxkcmVuLGY9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7aWYoXCJoaWRkZW5cIj09PWQubW9kZXx8XCJ1bnN0YWJsZS1kZWZlci13aXRob3V0LWhpZGluZ1wiPT09ZC5tb2RlKWlmKDA9PT0oYi5tb2RlJjQpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjB9LG5pKGIsYyk7ZWxzZSBpZigwIT09KGMmMTA3Mzc0MTgyNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixudWxsIT09Zj9mLmJhc2VMYW5lczpjKTtlbHNlIHJldHVybiBhPW51bGwhPT1mP2YuYmFzZUxhbmVzfGM6YyxiLmxhbmVzPWIuY2hpbGRMYW5lcz0xMDczNzQxODI0LGIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmF9LG5pKGIsYSksbnVsbDtlbHNlIG51bGwhPT1mPyhkPWYuYmFzZUxhbmVzfGMsYi5tZW1vaXplZFN0YXRlPW51bGwpOmQ9YyxuaShiLGQpO2ZpKGEsYixlLGMpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gb2koYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5mbGFnc3w9MTI4fWZ1bmN0aW9uIGxpKGEsYixjLGQsZSl7dmFyIGY9RmYoYyk/RGY6TS5jdXJyZW50O2Y9RWYoYixmKTt0ZyhiLGUpO2M9Q2goYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhdWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tNTE3LGEubGFuZXMmPX5lLGhpKGEsYixlKTtiLmZsYWdzfD0xO2ZpKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gcGkoYSxiLGMsZCxlKXtpZihGZihjKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO3RnKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKW51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLE1nKGIsYyxkKSxPZyhiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgaz1nLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD12ZyhsKToobD1GZihjKT9EZjpNLmN1cnJlbnQsbD1FZihiLGwpKTt2YXIgbj1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBufHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtBfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGshPT1sKSYmTmcoYixnLGQsbCk7d2c9ITE7dmFyIHA9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTtrPWIubWVtb2l6ZWRTdGF0ZTtoIT09ZHx8cCE9PWt8fE4uY3VycmVudHx8d2c/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuJiYoR2coYixjLG4sZCksaz1iLm1lbW9pemVkU3RhdGUpLChoPXdnfHxMZyhiLGMsaCxkLHAsayxsKSk/KEF8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudHx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudCYmZy5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSksXCJmdW5jdGlvblwiPT09XG50eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9ayksZy5wcm9wcz1kLGcuc3RhdGU9ayxnLmNvbnRleHQ9bCxkPWgpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGQ9ITEpfWVsc2V7Zz1iLnN0YXRlTm9kZTt5ZyhhLGIpO2g9Yi5tZW1vaXplZFByb3BzO2w9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOmxnKGIudHlwZSxoKTtnLnByb3BzPWw7QT1iLnBlbmRpbmdQcm9wcztwPWcuY29udGV4dDtrPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPXZnKGspOihrPUZmKGMpP0RmOk0uY3VycmVudCxrPUVmKGIsaykpO3ZhciBDPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOyhuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBDfHxcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09QXx8cCE9PWspJiZOZyhiLGcsZCxrKTt3Zz0hMTtwPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXA7Q2coYixkLGcsZSk7dmFyIHg9Yi5tZW1vaXplZFN0YXRlO2ghPT1BfHxwIT09eHx8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIEMmJihHZyhiLGMsQyxkKSx4PWIubWVtb2l6ZWRTdGF0ZSksKGw9d2d8fExnKGIsYyxsLGQscCx4LGspKT8obnx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCxcbngsayksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCx4LGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZmxhZ3N8PTI1NikpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTI1NiksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPXgpLGcucHJvcHM9ZCxnLnN0YXRlPXgsZy5jb250ZXh0PWssZD1sKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxcbmg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTI1NiksZD0hMSl9cmV0dXJuIHFpKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIHFpKGEsYixjLGQsZSxmKXtvaShhLGIpO3ZhciBnPTAhPT0oYi5mbGFncyY2NCk7aWYoIWQmJiFnKXJldHVybiBlJiZLZihiLGMsITEpLGhpKGEsYixmKTtkPWIuc3RhdGVOb2RlO2VpLmN1cnJlbnQ9Yjt2YXIgaD1nJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZmxhZ3N8PTE7bnVsbCE9PWEmJmc/KGIuY2hpbGQ9WWcoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD1ZZyhiLG51bGwsaCxmKSk6ZmkoYSxiLGgsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmS2YoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiByaShhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P0hmKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJkhmKGEsYi5jb250ZXh0LCExKTtlaChhLGIuY29udGFpbmVySW5mbyl9XG52YXIgc2k9e2RlaHlkcmF0ZWQ6bnVsbCxyZXRyeUxhbmU6MH07XG5mdW5jdGlvbiB0aShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1QLmN1cnJlbnQsZj0hMSxnOyhnPTAhPT0oYi5mbGFncyY2NCkpfHwoZz1udWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZT8hMTowIT09KGUmMikpO2c/KGY9ITAsYi5mbGFncyY9LTY1KTpudWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZXx8dm9pZCAwPT09ZC5mYWxsYmFja3x8ITA9PT1kLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwoZXw9MSk7SShQLGUmMSk7aWYobnVsbD09PWEpe3ZvaWQgMCE9PWQuZmFsbGJhY2smJnBoKGIpO2E9ZC5jaGlsZHJlbjtlPWQuZmFsbGJhY2s7aWYoZilyZXR1cm4gYT11aShiLGEsZSxjKSxiLmNoaWxkLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczpjfSxiLm1lbW9pemVkU3RhdGU9c2ksYTtpZihcIm51bWJlclwiPT09dHlwZW9mIGQudW5zdGFibGVfZXhwZWN0ZWRMb2FkVGltZSlyZXR1cm4gYT11aShiLGEsZSxjKSxiLmNoaWxkLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczpjfSxcbmIubWVtb2l6ZWRTdGF0ZT1zaSxiLmxhbmVzPTMzNTU0NDMyLGE7Yz12aSh7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjphfSxiLm1vZGUsYyxudWxsKTtjLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWN9aWYobnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSl7aWYoZilyZXR1cm4gZD13aShhLGIsZC5jaGlsZHJlbixkLmZhbGxiYWNrLGMpLGY9Yi5jaGlsZCxlPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZSxmLm1lbW9pemVkU3RhdGU9bnVsbD09PWU/e2Jhc2VMYW5lczpjfTp7YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31pZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9Olxue2Jhc2VMYW5lczplLmJhc2VMYW5lc3xjfSxmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jLGIubWVtb2l6ZWRTdGF0ZT1zaSxkO2M9eGkoYSxiLGQuY2hpbGRyZW4sYyk7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGN9ZnVuY3Rpb24gdWkoYSxiLGMsZCl7dmFyIGU9YS5tb2RlLGY9YS5jaGlsZDtiPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Yn07MD09PShlJjIpJiZudWxsIT09Zj8oZi5jaGlsZExhbmVzPTAsZi5wZW5kaW5nUHJvcHM9Yik6Zj12aShiLGUsMCxudWxsKTtjPVhnKGMsZSxkLG51bGwpO2YucmV0dXJuPWE7Yy5yZXR1cm49YTtmLnNpYmxpbmc9YzthLmNoaWxkPWY7cmV0dXJuIGN9XG5mdW5jdGlvbiB4aShhLGIsYyxkKXt2YXIgZT1hLmNoaWxkO2E9ZS5zaWJsaW5nO2M9VGcoZSx7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpjfSk7MD09PShiLm1vZGUmMikmJihjLmxhbmVzPWQpO2MucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGw7bnVsbCE9PWEmJihhLm5leHRFZmZlY3Q9bnVsbCxhLmZsYWdzPTgsYi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YSk7cmV0dXJuIGIuY2hpbGQ9Y31cbmZ1bmN0aW9uIHdpKGEsYixjLGQsZSl7dmFyIGY9Yi5tb2RlLGc9YS5jaGlsZDthPWcuc2libGluZzt2YXIgaD17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmN9OzA9PT0oZiYyKSYmYi5jaGlsZCE9PWc/KGM9Yi5jaGlsZCxjLmNoaWxkTGFuZXM9MCxjLnBlbmRpbmdQcm9wcz1oLGc9Yy5sYXN0RWZmZWN0LG51bGwhPT1nPyhiLmZpcnN0RWZmZWN0PWMuZmlyc3RFZmZlY3QsYi5sYXN0RWZmZWN0PWcsZy5uZXh0RWZmZWN0PW51bGwpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PW51bGwpOmM9VGcoZyxoKTtudWxsIT09YT9kPVRnKGEsZCk6KGQ9WGcoZCxmLGUsbnVsbCksZC5mbGFnc3w9Mik7ZC5yZXR1cm49YjtjLnJldHVybj1iO2Muc2libGluZz1kO2IuY2hpbGQ9YztyZXR1cm4gZH1mdW5jdGlvbiB5aShhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtzZyhhLnJldHVybixiKX1cbmZ1bmN0aW9uIHppKGEsYixjLGQsZSxmKXt2YXIgZz1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWc/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLHJlbmRlcmluZ1N0YXJ0VGltZTowLGxhc3Q6ZCx0YWlsOmMsdGFpbE1vZGU6ZSxsYXN0RWZmZWN0OmZ9OihnLmlzQmFja3dhcmRzPWIsZy5yZW5kZXJpbmc9bnVsbCxnLnJlbmRlcmluZ1N0YXJ0VGltZT0wLGcubGFzdD1kLGcudGFpbD1jLGcudGFpbE1vZGU9ZSxnLmxhc3RFZmZlY3Q9Zil9XG5mdW5jdGlvbiBBaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLnJldmVhbE9yZGVyLGY9ZC50YWlsO2ZpKGEsYixkLmNoaWxkcmVuLGMpO2Q9UC5jdXJyZW50O2lmKDAhPT0oZCYyKSlkPWQmMXwyLGIuZmxhZ3N8PTY0O2Vsc2V7aWYobnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpYTpmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7aWYoMTM9PT1hLnRhZyludWxsIT09YS5tZW1vaXplZFN0YXRlJiZ5aShhLGMpO2Vsc2UgaWYoMTk9PT1hLnRhZyl5aShhLGMpO2Vsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1iKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxhLnJldHVybj09PWIpYnJlYWsgYTthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47YT1hLnNpYmxpbmd9ZCY9MX1JKFAsZCk7aWYoMD09PShiLm1vZGUmMikpYi5tZW1vaXplZFN0YXRlPVxubnVsbDtlbHNlIHN3aXRjaChlKXtjYXNlIFwiZm9yd2FyZHNcIjpjPWIuY2hpbGQ7Zm9yKGU9bnVsbDtudWxsIT09YzspYT1jLmFsdGVybmF0ZSxudWxsIT09YSYmbnVsbD09PWloKGEpJiYoZT1jKSxjPWMuc2libGluZztjPWU7bnVsbD09PWM/KGU9Yi5jaGlsZCxiLmNoaWxkPW51bGwpOihlPWMuc2libGluZyxjLnNpYmxpbmc9bnVsbCk7emkoYiwhMSxlLGMsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJiYWNrd2FyZHNcIjpjPW51bGw7ZT1iLmNoaWxkO2ZvcihiLmNoaWxkPW51bGw7bnVsbCE9PWU7KXthPWUuYWx0ZXJuYXRlO2lmKG51bGwhPT1hJiZudWxsPT09aWgoYSkpe2IuY2hpbGQ9ZTticmVha31hPWUuc2libGluZztlLnNpYmxpbmc9YztjPWU7ZT1hfXppKGIsITAsYyxudWxsLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwidG9nZXRoZXJcIjp6aShiLCExLG51bGwsbnVsbCx2b2lkIDAsYi5sYXN0RWZmZWN0KTticmVhaztkZWZhdWx0OmIubWVtb2l6ZWRTdGF0ZT1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaGkoYSxiLGMpe251bGwhPT1hJiYoYi5kZXBlbmRlbmNpZXM9YS5kZXBlbmRlbmNpZXMpO0RnfD1iLmxhbmVzO2lmKDAhPT0oYyZiLmNoaWxkTGFuZXMpKXtpZihudWxsIT09YSYmYi5jaGlsZCE9PWEuY2hpbGQpdGhyb3cgRXJyb3IoeSgxNTMpKTtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9VGcoYSxhLnBlbmRpbmdQcm9wcyk7Yi5jaGlsZD1jO2ZvcihjLnJldHVybj1iO251bGwhPT1hLnNpYmxpbmc7KWE9YS5zaWJsaW5nLGM9Yy5zaWJsaW5nPVRnKGEsYS5wZW5kaW5nUHJvcHMpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9cmV0dXJuIG51bGx9dmFyIEJpLENpLERpLEVpO1xuQmk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O0NpPWZ1bmN0aW9uKCl7fTtcbkRpPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEubWVtb2l6ZWRQcm9wcztpZihlIT09ZCl7YT1iLnN0YXRlTm9kZTtkaChhaC5jdXJyZW50KTt2YXIgZj1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjplPVlhKGEsZSk7ZD1ZYShhLGQpO2Y9W107YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxlKTtkPWViKGEsZCk7Zj1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6ZT1tKHt9LGUse3ZhbHVlOnZvaWQgMH0pO2Q9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtmPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmU9Z2IoYSxlKTtkPWdiKGEsZCk7Zj1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihhLm9uY2xpY2s9amYpfXZiKGMsZCk7dmFyIGc7Yz1udWxsO2ZvcihsIGluIGUpaWYoIWQuaGFzT3duUHJvcGVydHkobCkmJmUuaGFzT3duUHJvcGVydHkobCkmJm51bGwhPWVbbF0paWYoXCJzdHlsZVwiPT09XG5sKXt2YXIgaD1lW2xdO2ZvcihnIGluIGgpaC5oYXNPd25Qcm9wZXJ0eShnKSYmKGN8fChjPXt9KSxjW2ddPVwiXCIpfWVsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sJiZcImNoaWxkcmVuXCIhPT1sJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJlwiYXV0b0ZvY3VzXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/Znx8KGY9W10pOihmPWZ8fFtdKS5wdXNoKGwsbnVsbCkpO2ZvcihsIGluIGQpe3ZhciBrPWRbbF07aD1udWxsIT1lP2VbbF06dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkobCkmJmshPT1oJiYobnVsbCE9a3x8bnVsbCE9aCkpaWYoXCJzdHlsZVwiPT09bClpZihoKXtmb3IoZyBpbiBoKSFoLmhhc093blByb3BlcnR5KGcpfHxrJiZrLmhhc093blByb3BlcnR5KGcpfHwoY3x8KGM9e30pLGNbZ109XCJcIik7Zm9yKGcgaW4gaylrLmhhc093blByb3BlcnR5KGcpJiZoW2ddIT09a1tnXSYmKGN8fFxuKGM9e30pLGNbZ109a1tnXSl9ZWxzZSBjfHwoZnx8KGY9W10pLGYucHVzaChsLGMpKSxjPWs7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWw/KGs9az9rLl9faHRtbDp2b2lkIDAsaD1oP2guX19odG1sOnZvaWQgMCxudWxsIT1rJiZoIT09ayYmKGY9Znx8W10pLnB1c2gobCxrKSk6XCJjaGlsZHJlblwiPT09bD9cInN0cmluZ1wiIT09dHlwZW9mIGsmJlwibnVtYmVyXCIhPT10eXBlb2Yga3x8KGY9Znx8W10pLnB1c2gobCxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmKGNhLmhhc093blByb3BlcnR5KGwpPyhudWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1sJiZHKFwic2Nyb2xsXCIsYSksZnx8aD09PWt8fChmPVtdKSk6XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09ayYmay4kJHR5cGVvZj09PUdhP2sudG9TdHJpbmcoKTooZj1mfHxbXSkucHVzaChsLGspKX1jJiYoZj1mfHxbXSkucHVzaChcInN0eWxlXCIsXG5jKTt2YXIgbD1mO2lmKGIudXBkYXRlUXVldWU9bCliLmZsYWdzfD00fX07RWk9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJihiLmZsYWdzfD00KX07ZnVuY3Rpb24gRmkoYSxiKXtpZighbGgpc3dpdGNoKGEudGFpbE1vZGUpe2Nhc2UgXCJoaWRkZW5cIjpiPWEudGFpbDtmb3IodmFyIGM9bnVsbDtudWxsIT09YjspbnVsbCE9PWIuYWx0ZXJuYXRlJiYoYz1iKSxiPWIuc2libGluZztudWxsPT09Yz9hLnRhaWw9bnVsbDpjLnNpYmxpbmc9bnVsbDticmVhaztjYXNlIFwiY29sbGFwc2VkXCI6Yz1hLnRhaWw7Zm9yKHZhciBkPW51bGw7bnVsbCE9PWM7KW51bGwhPT1jLmFsdGVybmF0ZSYmKGQ9YyksYz1jLnNpYmxpbmc7bnVsbD09PWQ/Ynx8bnVsbD09PWEudGFpbD9hLnRhaWw9bnVsbDphLnRhaWwuc2libGluZz1udWxsOmQuc2libGluZz1udWxsfX1cbmZ1bmN0aW9uIEdpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcztzd2l0Y2goYi50YWcpe2Nhc2UgMjpjYXNlIDE2OmNhc2UgMTU6Y2FzZSAwOmNhc2UgMTE6Y2FzZSA3OmNhc2UgODpjYXNlIDEyOmNhc2UgOTpjYXNlIDE0OnJldHVybiBudWxsO2Nhc2UgMTpyZXR1cm4gRmYoYi50eXBlKSYmR2YoKSxudWxsO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2Q9Yi5zdGF0ZU5vZGU7ZC5wZW5kaW5nQ29udGV4dCYmKGQuY29udGV4dD1kLnBlbmRpbmdDb250ZXh0LGQucGVuZGluZ0NvbnRleHQ9bnVsbCk7aWYobnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKXJoKGIpP2IuZmxhZ3N8PTQ6ZC5oeWRyYXRlfHwoYi5mbGFnc3w9MjU2KTtDaShiKTtyZXR1cm4gbnVsbDtjYXNlIDU6aGgoYik7dmFyIGU9ZGgoY2guY3VycmVudCk7Yz1iLnR5cGU7aWYobnVsbCE9PWEmJm51bGwhPWIuc3RhdGVOb2RlKURpKGEsYixjLGQsZSksYS5yZWYhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCk7ZWxzZXtpZighZCl7aWYobnVsbD09PVxuYi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjYpKTtyZXR1cm4gbnVsbH1hPWRoKGFoLmN1cnJlbnQpO2lmKHJoKGIpKXtkPWIuc3RhdGVOb2RlO2M9Yi50eXBlO3ZhciBmPWIubWVtb2l6ZWRQcm9wcztkW3dmXT1iO2RbeGZdPWY7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpHKFwiY2FuY2VsXCIsZCk7RyhcImNsb3NlXCIsZCk7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpHKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihhPTA7YTxYZS5sZW5ndGg7YSsrKUcoWGVbYV0sZCk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGQpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGQpO0coXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsZCk7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoZCxmKTtHKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpkLl93cmFwcGVyU3RhdGU9XG57d2FzTXVsdGlwbGU6ISFmLm11bHRpcGxlfTtHKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGQsZiksRyhcImludmFsaWRcIixkKX12YihjLGYpO2E9bnVsbDtmb3IodmFyIGcgaW4gZilmLmhhc093blByb3BlcnR5KGcpJiYoZT1mW2ddLFwiY2hpbGRyZW5cIj09PWc/XCJzdHJpbmdcIj09PXR5cGVvZiBlP2QudGV4dENvbnRlbnQhPT1lJiYoYT1bXCJjaGlsZHJlblwiLGVdKTpcIm51bWJlclwiPT09dHlwZW9mIGUmJmQudGV4dENvbnRlbnQhPT1cIlwiK2UmJihhPVtcImNoaWxkcmVuXCIsXCJcIitlXSk6Y2EuaGFzT3duUHJvcGVydHkoZykmJm51bGwhPWUmJlwib25TY3JvbGxcIj09PWcmJkcoXCJzY3JvbGxcIixkKSk7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGQpO2NiKGQsZiwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoZCk7amIoZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJvcHRpb25cIjpicmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLm9uQ2xpY2smJihkLm9uY2xpY2s9XG5qZil9ZD1hO2IudXBkYXRlUXVldWU9ZDtudWxsIT09ZCYmKGIuZmxhZ3N8PTQpfWVsc2V7Zz05PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudDthPT09a2IuaHRtbCYmKGE9bGIoYykpO2E9PT1rYi5odG1sP1wic2NyaXB0XCI9PT1jPyhhPWcuY3JlYXRlRWxlbWVudChcImRpdlwiKSxhLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGE9YS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpKTpcInN0cmluZ1wiPT09dHlwZW9mIGQuaXM/YT1nLmNyZWF0ZUVsZW1lbnQoYyx7aXM6ZC5pc30pOihhPWcuY3JlYXRlRWxlbWVudChjKSxcInNlbGVjdFwiPT09YyYmKGc9YSxkLm11bHRpcGxlP2cubXVsdGlwbGU9ITA6ZC5zaXplJiYoZy5zaXplPWQuc2l6ZSkpKTphPWcuY3JlYXRlRWxlbWVudE5TKGEsYyk7YVt3Zl09YjthW3hmXT1kO0JpKGEsYiwhMSwhMSk7Yi5zdGF0ZU5vZGU9YTtnPXdiKGMsZCk7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpHKFwiY2FuY2VsXCIsYSk7RyhcImNsb3NlXCIsYSk7XG5lPWQ7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpHKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZT0wO2U8WGUubGVuZ3RoO2UrKylHKFhlW2VdLGEpO2U9ZDticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGEpO0coXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RyhcInRvZ2dsZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW5wdXRcIjpaYShhLGQpO2U9WWEoYSxkKTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWViKGEsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFkLm11bHRpcGxlfTtlPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7RyhcImludmFsaWRcIixhKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihhLGQpO2U9XG5nYihhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7ZGVmYXVsdDplPWR9dmIoYyxlKTt2YXIgaD1lO2ZvcihmIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShmKSl7dmFyIGs9aFtmXTtcInN0eWxlXCI9PT1mP3RiKGEsayk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zj8oaz1rP2suX19odG1sOnZvaWQgMCxudWxsIT1rJiZvYihhLGspKTpcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2Ygaz8oXCJ0ZXh0YXJlYVwiIT09Y3x8XCJcIiE9PWspJiZwYihhLGspOlwibnVtYmVyXCI9PT10eXBlb2YgayYmcGIoYSxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1mJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09ZiYmXCJhdXRvRm9jdXNcIiE9PWYmJihjYS5oYXNPd25Qcm9wZXJ0eShmKT9udWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1mJiZHKFwic2Nyb2xsXCIsYSk6bnVsbCE9ayYmcWEoYSxmLGssZykpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShhKTtjYihhLGQsITEpO1xuYnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoYSk7amIoYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWQudmFsdWUmJmEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK1NhKGQudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5tdWx0aXBsZT0hIWQubXVsdGlwbGU7Zj1kLnZhbHVlO251bGwhPWY/ZmIoYSwhIWQubXVsdGlwbGUsZiwhMSk6bnVsbCE9ZC5kZWZhdWx0VmFsdWUmJmZiKGEsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLCEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLm9uQ2xpY2smJihhLm9uY2xpY2s9amYpfW1mKGMsZCkmJihiLmZsYWdzfD00KX1udWxsIT09Yi5yZWYmJihiLmZsYWdzfD0xMjgpfXJldHVybiBudWxsO2Nhc2UgNjppZihhJiZudWxsIT1iLnN0YXRlTm9kZSlFaShhLGIsYS5tZW1vaXplZFByb3BzLGQpO2Vsc2V7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBkJiZudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjYpKTtcbmM9ZGgoY2guY3VycmVudCk7ZGgoYWguY3VycmVudCk7cmgoYik/KGQ9Yi5zdGF0ZU5vZGUsYz1iLm1lbW9pemVkUHJvcHMsZFt3Zl09YixkLm5vZGVWYWx1ZSE9PWMmJihiLmZsYWdzfD00KSk6KGQ9KDk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShkKSxkW3dmXT1iLGIuc3RhdGVOb2RlPWQpfXJldHVybiBudWxsO2Nhc2UgMTM6SChQKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZigwIT09KGIuZmxhZ3MmNjQpKXJldHVybiBiLmxhbmVzPWMsYjtkPW51bGwhPT1kO2M9ITE7bnVsbD09PWE/dm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLmZhbGxiYWNrJiZyaChiKTpjPW51bGwhPT1hLm1lbW9pemVkU3RhdGU7aWYoZCYmIWMmJjAhPT0oYi5tb2RlJjIpKWlmKG51bGw9PT1hJiYhMCE9PWIubWVtb2l6ZWRQcm9wcy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8MCE9PShQLmN1cnJlbnQmMSkpMD09PVYmJihWPTMpO2Vsc2V7aWYoMD09PVZ8fDM9PT1WKVY9XG40O251bGw9PT1VfHwwPT09KERnJjEzNDIxNzcyNykmJjA9PT0oSGkmMTM0MjE3NzI3KXx8SWkoVSxXKX1pZihkfHxjKWIuZmxhZ3N8PTQ7cmV0dXJuIG51bGw7Y2FzZSA0OnJldHVybiBmaCgpLENpKGIpLG51bGw9PT1hJiZjZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGIpLG51bGw7Y2FzZSAxNzpyZXR1cm4gRmYoYi50eXBlKSYmR2YoKSxudWxsO2Nhc2UgMTk6SChQKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtmPTAhPT0oYi5mbGFncyY2NCk7Zz1kLnJlbmRlcmluZztpZihudWxsPT09ZylpZihmKUZpKGQsITEpO2Vsc2V7aWYoMCE9PVZ8fG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmNjQpKWZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtnPWloKGEpO2lmKG51bGwhPT1nKXtiLmZsYWdzfD02NDtGaShkLCExKTtmPWcudXBkYXRlUXVldWU7bnVsbCE9PWYmJihiLnVwZGF0ZVF1ZXVlPWYsYi5mbGFnc3w9NCk7XG5udWxsPT09ZC5sYXN0RWZmZWN0JiYoYi5maXJzdEVmZmVjdD1udWxsKTtiLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0O2Q9Yztmb3IoYz1iLmNoaWxkO251bGwhPT1jOylmPWMsYT1kLGYuZmxhZ3MmPTIsZi5uZXh0RWZmZWN0PW51bGwsZi5maXJzdEVmZmVjdD1udWxsLGYubGFzdEVmZmVjdD1udWxsLGc9Zi5hbHRlcm5hdGUsbnVsbD09PWc/KGYuY2hpbGRMYW5lcz0wLGYubGFuZXM9YSxmLmNoaWxkPW51bGwsZi5tZW1vaXplZFByb3BzPW51bGwsZi5tZW1vaXplZFN0YXRlPW51bGwsZi51cGRhdGVRdWV1ZT1udWxsLGYuZGVwZW5kZW5jaWVzPW51bGwsZi5zdGF0ZU5vZGU9bnVsbCk6KGYuY2hpbGRMYW5lcz1nLmNoaWxkTGFuZXMsZi5sYW5lcz1nLmxhbmVzLGYuY2hpbGQ9Zy5jaGlsZCxmLm1lbW9pemVkUHJvcHM9Zy5tZW1vaXplZFByb3BzLGYubWVtb2l6ZWRTdGF0ZT1nLm1lbW9pemVkU3RhdGUsZi51cGRhdGVRdWV1ZT1nLnVwZGF0ZVF1ZXVlLGYudHlwZT1nLnR5cGUsYT1nLmRlcGVuZGVuY2llcyxcbmYuZGVwZW5kZW5jaWVzPW51bGw9PT1hP251bGw6e2xhbmVzOmEubGFuZXMsZmlyc3RDb250ZXh0OmEuZmlyc3RDb250ZXh0fSksYz1jLnNpYmxpbmc7SShQLFAuY3VycmVudCYxfDIpO3JldHVybiBiLmNoaWxkfWE9YS5zaWJsaW5nfW51bGwhPT1kLnRhaWwmJk8oKT5KaSYmKGIuZmxhZ3N8PTY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMil9ZWxzZXtpZighZilpZihhPWloKGcpLG51bGwhPT1hKXtpZihiLmZsYWdzfD02NCxmPSEwLGM9YS51cGRhdGVRdWV1ZSxudWxsIT09YyYmKGIudXBkYXRlUXVldWU9YyxiLmZsYWdzfD00KSxGaShkLCEwKSxudWxsPT09ZC50YWlsJiZcImhpZGRlblwiPT09ZC50YWlsTW9kZSYmIWcuYWx0ZXJuYXRlJiYhbGgpcmV0dXJuIGI9Yi5sYXN0RWZmZWN0PWQubGFzdEVmZmVjdCxudWxsIT09YiYmKGIubmV4dEVmZmVjdD1udWxsKSxudWxsfWVsc2UgMipPKCktZC5yZW5kZXJpbmdTdGFydFRpbWU+SmkmJjEwNzM3NDE4MjQhPT1jJiYoYi5mbGFnc3w9XG42NCxmPSEwLEZpKGQsITEpLGIubGFuZXM9MzM1NTQ0MzIpO2QuaXNCYWNrd2FyZHM/KGcuc2libGluZz1iLmNoaWxkLGIuY2hpbGQ9Zyk6KGM9ZC5sYXN0LG51bGwhPT1jP2Muc2libGluZz1nOmIuY2hpbGQ9ZyxkLmxhc3Q9Zyl9cmV0dXJuIG51bGwhPT1kLnRhaWw/KGM9ZC50YWlsLGQucmVuZGVyaW5nPWMsZC50YWlsPWMuc2libGluZyxkLmxhc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0LGQucmVuZGVyaW5nU3RhcnRUaW1lPU8oKSxjLnNpYmxpbmc9bnVsbCxiPVAuY3VycmVudCxJKFAsZj9iJjF8MjpiJjEpLGMpOm51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGwhPT1hJiZudWxsIT09YS5tZW1vaXplZFN0YXRlIT09KG51bGwhPT1iLm1lbW9pemVkU3RhdGUpJiZcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCIhPT1kLm1vZGUmJihiLmZsYWdzfD00KSxudWxsfXRocm93IEVycm9yKHkoMTU2LGIudGFnKSk7fVxuZnVuY3Rpb24gTGkoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDE6RmYoYS50eXBlKSYmR2YoKTt2YXIgYj1hLmZsYWdzO3JldHVybiBiJjQwOTY/KGEuZmxhZ3M9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2I9YS5mbGFncztpZigwIT09KGImNjQpKXRocm93IEVycm9yKHkoMjg1KSk7YS5mbGFncz1iJi00MDk3fDY0O3JldHVybiBhO2Nhc2UgNTpyZXR1cm4gaGgoYSksbnVsbDtjYXNlIDEzOnJldHVybiBIKFApLGI9YS5mbGFncyxiJjQwOTY/KGEuZmxhZ3M9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMTk6cmV0dXJuIEgoUCksbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksbnVsbDtjYXNlIDEwOnJldHVybiByZyhhKSxudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gS2koKSxudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24gTWkoYSxiKXt0cnl7dmFyIGM9XCJcIixkPWI7ZG8gYys9UWEoZCksZD1kLnJldHVybjt3aGlsZShkKTt2YXIgZT1jfWNhdGNoKGYpe2U9XCJcXG5FcnJvciBnZW5lcmF0aW5nIHN0YWNrOiBcIitmLm1lc3NhZ2UrXCJcXG5cIitmLnN0YWNrfXJldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmV9fWZ1bmN0aW9uIE5pKGEsYil7dHJ5e2NvbnNvbGUuZXJyb3IoYi52YWx1ZSl9Y2F0Y2goYyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGM7fSl9fXZhciBPaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBQaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO2MucGF5bG9hZD17ZWxlbWVudDpudWxsfTt2YXIgZD1iLnZhbHVlO2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtRaXx8KFFpPSEwLFJpPWQpO05pKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gU2koYSxiLGMpe2M9emcoLTEsYyk7Yy50YWc9Mzt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe05pKGEsYik7cmV0dXJuIGQoZSl9fXZhciBmPWEuc3RhdGVOb2RlO251bGwhPT1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5jb21wb25lbnREaWRDYXRjaCYmKGMuY2FsbGJhY2s9ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT1UaT9UaT1uZXcgU2V0KFt0aGlzXSk6VGkuYWRkKHRoaXMpLE5pKGEsYikpO3ZhciBjPWIuc3RhY2s7dGhpcy5jb21wb25lbnREaWRDYXRjaChiLnZhbHVlLHtjb21wb25lbnRTdGFjazpudWxsIT09Yz9jOlwiXCJ9KX0pO3JldHVybiBjfXZhciBVaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldDtcbmZ1bmN0aW9uIFZpKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe1dpKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1mdW5jdGlvbiBYaShhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpjYXNlIDIyOnJldHVybjtjYXNlIDE6aWYoYi5mbGFncyYyNTYmJm51bGwhPT1hKXt2YXIgYz1hLm1lbW9pemVkUHJvcHMsZD1hLm1lbW9pemVkU3RhdGU7YT1iLnN0YXRlTm9kZTtiPWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT9jOmxnKGIudHlwZSxjKSxkKTthLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlPWJ9cmV0dXJuO2Nhc2UgMzpiLmZsYWdzJjI1NiYmcWYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7cmV0dXJuO2Nhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gWWkoYSxiLGMpe3N3aXRjaChjLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpjYXNlIDIyOmI9Yy51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXthPWI9Yi5uZXh0O2Rve2lmKDM9PT0oYS50YWcmMykpe3ZhciBkPWEuY3JlYXRlO2EuZGVzdHJveT1kKCl9YT1hLm5leHR9d2hpbGUoYSE9PWIpfWI9Yy51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXthPWI9Yi5uZXh0O2Rve3ZhciBlPWE7ZD1lLm5leHQ7ZT1lLnRhZzswIT09KGUmNCkmJjAhPT0oZSYxKSYmKFppKGMsYSksJGkoYyxhKSk7YT1kfXdoaWxlKGEhPT1iKX1yZXR1cm47Y2FzZSAxOmE9Yy5zdGF0ZU5vZGU7Yy5mbGFncyY0JiYobnVsbD09PWI/YS5jb21wb25lbnREaWRNb3VudCgpOihkPWMuZWxlbWVudFR5cGU9PT1jLnR5cGU/Yi5tZW1vaXplZFByb3BzOmxnKGMudHlwZSxiLm1lbW9pemVkUHJvcHMpLGEuY29tcG9uZW50RGlkVXBkYXRlKGQsXG5iLm1lbW9pemVkU3RhdGUsYS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSkpKTtiPWMudXBkYXRlUXVldWU7bnVsbCE9PWImJkVnKGMsYixhKTtyZXR1cm47Y2FzZSAzOmI9Yy51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YT1udWxsO2lmKG51bGwhPT1jLmNoaWxkKXN3aXRjaChjLmNoaWxkLnRhZyl7Y2FzZSA1OmE9Yy5jaGlsZC5zdGF0ZU5vZGU7YnJlYWs7Y2FzZSAxOmE9Yy5jaGlsZC5zdGF0ZU5vZGV9RWcoYyxiLGEpfXJldHVybjtjYXNlIDU6YT1jLnN0YXRlTm9kZTtudWxsPT09YiYmYy5mbGFncyY0JiZtZihjLnR5cGUsYy5tZW1vaXplZFByb3BzKSYmYS5mb2N1cygpO3JldHVybjtjYXNlIDY6cmV0dXJuO2Nhc2UgNDpyZXR1cm47Y2FzZSAxMjpyZXR1cm47Y2FzZSAxMzpudWxsPT09Yy5tZW1vaXplZFN0YXRlJiYoYz1jLmFsdGVybmF0ZSxudWxsIT09YyYmKGM9Yy5tZW1vaXplZFN0YXRlLG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbCE9PWMmJkNjKGMpKSkpO1xucmV0dXJuO2Nhc2UgMTk6Y2FzZSAxNzpjYXNlIDIwOmNhc2UgMjE6Y2FzZSAyMzpjYXNlIDI0OnJldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31cbmZ1bmN0aW9uIGFqKGEsYil7Zm9yKHZhciBjPWE7Oyl7aWYoNT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihiKWQ9ZC5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5zZXRQcm9wZXJ0eT9kLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmQuZGlzcGxheT1cIm5vbmVcIjtlbHNle2Q9Yy5zdGF0ZU5vZGU7dmFyIGU9Yy5tZW1vaXplZFByb3BzLnN0eWxlO2U9dm9pZCAwIT09ZSYmbnVsbCE9PWUmJmUuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2UuZGlzcGxheTpudWxsO2Quc3R5bGUuZGlzcGxheT1zYihcImRpc3BsYXlcIixlKX19ZWxzZSBpZig2PT09Yy50YWcpYy5zdGF0ZU5vZGUubm9kZVZhbHVlPWI/XCJcIjpjLm1lbW9pemVkUHJvcHM7ZWxzZSBpZigoMjMhPT1jLnRhZyYmMjQhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8Yz09PWEpJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PVxuYSlicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YSlyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIGJqKGEsYil7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyVW5tb3VudCl0cnl7TWYub25Db21taXRGaWJlclVubW91bnQoTGYsYil9Y2F0Y2goZil7fXN3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNhc2UgMjI6YT1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1hJiYoYT1hLmxhc3RFZmZlY3QsbnVsbCE9PWEpKXt2YXIgYz1hPWEubmV4dDtkb3t2YXIgZD1jLGU9ZC5kZXN0cm95O2Q9ZC50YWc7aWYodm9pZCAwIT09ZSlpZigwIT09KGQmNCkpWmkoYixjKTtlbHNle2Q9Yjt0cnl7ZSgpfWNhdGNoKGYpe1dpKGQsZil9fWM9Yy5uZXh0fXdoaWxlKGMhPT1hKX1icmVhaztjYXNlIDE6VmkoYik7YT1iLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7YS5wcm9wcz1iLm1lbW9pemVkUHJvcHMsYS5zdGF0ZT1iLm1lbW9pemVkU3RhdGUsYS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGYpe1dpKGIsXG5mKX1icmVhaztjYXNlIDU6VmkoYik7YnJlYWs7Y2FzZSA0OmNqKGEsYil9fWZ1bmN0aW9uIGRqKGEpe2EuYWx0ZXJuYXRlPW51bGw7YS5jaGlsZD1udWxsO2EuZGVwZW5kZW5jaWVzPW51bGw7YS5maXJzdEVmZmVjdD1udWxsO2EubGFzdEVmZmVjdD1udWxsO2EubWVtb2l6ZWRQcm9wcz1udWxsO2EubWVtb2l6ZWRTdGF0ZT1udWxsO2EucGVuZGluZ1Byb3BzPW51bGw7YS5yZXR1cm49bnVsbDthLnVwZGF0ZVF1ZXVlPW51bGx9ZnVuY3Rpb24gZWooYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiBmaihhKXthOntmb3IodmFyIGI9YS5yZXR1cm47bnVsbCE9PWI7KXtpZihlaihiKSlicmVhayBhO2I9Yi5yZXR1cm59dGhyb3cgRXJyb3IoeSgxNjApKTt9dmFyIGM9YjtiPWMuc3RhdGVOb2RlO3N3aXRjaChjLnRhZyl7Y2FzZSA1OnZhciBkPSExO2JyZWFrO2Nhc2UgMzpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgxNjEpKTt9Yy5mbGFncyYxNiYmKHBiKGIsXCJcIiksYy5mbGFncyY9LTE3KTthOmI6Zm9yKGM9YTs7KXtmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGVqKGMucmV0dXJuKSl7Yz1udWxsO2JyZWFrIGF9Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2ZvcihjPWMuc2libGluZzs1IT09Yy50YWcmJjYhPT1jLnRhZyYmMTghPT1jLnRhZzspe2lmKGMuZmxhZ3MmMiljb250aW51ZSBiO2lmKG51bGw9PT1cbmMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmZsYWdzJjIpKXtjPWMuc3RhdGVOb2RlO2JyZWFrIGF9fWQ/Z2ooYSxjLGIpOmhqKGEsYyxiKX1cbmZ1bmN0aW9uIGdqKGEsYixjKXt2YXIgZD1hLnRhZyxlPTU9PT1kfHw2PT09ZDtpZihlKWE9ZT9hLnN0YXRlTm9kZTphLnN0YXRlTm9kZS5pbnN0YW5jZSxiPzg9PT1jLm5vZGVUeXBlP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxiKTpjLmluc2VydEJlZm9yZShhLGIpOig4PT09Yy5ub2RlVHlwZT8oYj1jLnBhcmVudE5vZGUsYi5pbnNlcnRCZWZvcmUoYSxjKSk6KGI9YyxiLmFwcGVuZENoaWxkKGEpKSxjPWMuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09YyYmdm9pZCAwIT09Y3x8bnVsbCE9PWIub25jbGlja3x8KGIub25jbGljaz1qZikpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihnaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWdqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGhqKGEsYixjKXt2YXIgZD1hLnRhZyxlPTU9PT1kfHw2PT09ZDtpZihlKWE9ZT9hLnN0YXRlTm9kZTphLnN0YXRlTm9kZS5pbnN0YW5jZSxiP2MuaW5zZXJ0QmVmb3JlKGEsYik6Yy5hcHBlbmRDaGlsZChhKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoaGooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOyloaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBjaihhLGIpe2Zvcih2YXIgYz1iLGQ9ITEsZSxmOzspe2lmKCFkKXtkPWMucmV0dXJuO2E6Zm9yKDs7KXtpZihudWxsPT09ZCl0aHJvdyBFcnJvcih5KDE2MCkpO2U9ZC5zdGF0ZU5vZGU7c3dpdGNoKGQudGFnKXtjYXNlIDU6Zj0hMTticmVhayBhO2Nhc2UgMzplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGE7Y2FzZSA0OmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYX1kPWQucmV0dXJufWQ9ITB9aWYoNT09PWMudGFnfHw2PT09Yy50YWcpe2E6Zm9yKHZhciBnPWEsaD1jLGs9aDs7KWlmKGJqKGcsayksbnVsbCE9PWsuY2hpbGQmJjQhPT1rLnRhZylrLmNoaWxkLnJldHVybj1rLGs9ay5jaGlsZDtlbHNle2lmKGs9PT1oKWJyZWFrIGE7Zm9yKDtudWxsPT09ay5zaWJsaW5nOyl7aWYobnVsbD09PWsucmV0dXJufHxrLnJldHVybj09PWgpYnJlYWsgYTtrPWsucmV0dXJufWsuc2libGluZy5yZXR1cm49ay5yZXR1cm47az1rLnNpYmxpbmd9Zj8oZz1lLGg9Yy5zdGF0ZU5vZGUsXG44PT09Zy5ub2RlVHlwZT9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaCk6Zy5yZW1vdmVDaGlsZChoKSk6ZS5yZW1vdmVDaGlsZChjLnN0YXRlTm9kZSl9ZWxzZSBpZig0PT09Yy50YWcpe2lmKG51bGwhPT1jLmNoaWxkKXtlPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87Zj0hMDtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX19ZWxzZSBpZihiaihhLGMpLG51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybjs0PT09Yy50YWcmJihkPSExKX1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIGlqKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjp2YXIgYz1iLnVwZGF0ZVF1ZXVlO2M9bnVsbCE9PWM/Yy5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWMpe3ZhciBkPWM9Yy5uZXh0O2RvIDM9PT0oZC50YWcmMykmJihhPWQuZGVzdHJveSxkLmRlc3Ryb3k9dm9pZCAwLHZvaWQgMCE9PWEmJmEoKSksZD1kLm5leHQ7d2hpbGUoZCE9PWMpfXJldHVybjtjYXNlIDE6cmV0dXJuO2Nhc2UgNTpjPWIuc3RhdGVOb2RlO2lmKG51bGwhPWMpe2Q9Yi5tZW1vaXplZFByb3BzO3ZhciBlPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpkO2E9Yi50eXBlO3ZhciBmPWIudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKG51bGwhPT1mKXtjW3hmXT1kO1wiaW5wdXRcIj09PWEmJlwicmFkaW9cIj09PWQudHlwZSYmbnVsbCE9ZC5uYW1lJiYkYShjLGQpO3diKGEsZSk7Yj13YihhLGQpO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKz1cbjIpe3ZhciBnPWZbZV0saD1mW2UrMV07XCJzdHlsZVwiPT09Zz90YihjLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/b2IoYyxoKTpcImNoaWxkcmVuXCI9PT1nP3BiKGMsaCk6cWEoYyxnLGgsYil9c3dpdGNoKGEpe2Nhc2UgXCJpbnB1dFwiOmFiKGMsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYyxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YT1jLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsYy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZC5tdWx0aXBsZSxmPWQudmFsdWUsbnVsbCE9Zj9mYihjLCEhZC5tdWx0aXBsZSxmLCExKTphIT09ISFkLm11bHRpcGxlJiYobnVsbCE9ZC5kZWZhdWx0VmFsdWU/ZmIoYywhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApOmZiKGMsISFkLm11bHRpcGxlLGQubXVsdGlwbGU/W106XCJcIiwhMSkpfX19cmV0dXJuO2Nhc2UgNjppZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjIpKTtiLnN0YXRlTm9kZS5ub2RlVmFsdWU9XG5iLm1lbW9pemVkUHJvcHM7cmV0dXJuO2Nhc2UgMzpjPWIuc3RhdGVOb2RlO2MuaHlkcmF0ZSYmKGMuaHlkcmF0ZT0hMSxDYyhjLmNvbnRhaW5lckluZm8pKTtyZXR1cm47Y2FzZSAxMjpyZXR1cm47Y2FzZSAxMzpudWxsIT09Yi5tZW1vaXplZFN0YXRlJiYoamo9TygpLGFqKGIuY2hpbGQsITApKTtraihiKTtyZXR1cm47Y2FzZSAxOTpraihiKTtyZXR1cm47Y2FzZSAxNzpyZXR1cm47Y2FzZSAyMzpjYXNlIDI0OmFqKGIsbnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSk7cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fWZ1bmN0aW9uIGtqKGEpe3ZhciBiPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2EudXBkYXRlUXVldWU9bnVsbDt2YXIgYz1hLnN0YXRlTm9kZTtudWxsPT09YyYmKGM9YS5zdGF0ZU5vZGU9bmV3IFVpKTtiLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9bGouYmluZChudWxsLGEsYik7Yy5oYXMoYil8fChjLmFkZChiKSxiLnRoZW4oZCxkKSl9KX19XG5mdW5jdGlvbiBtaihhLGIpe3JldHVybiBudWxsIT09YSYmKGE9YS5tZW1vaXplZFN0YXRlLG51bGw9PT1hfHxudWxsIT09YS5kZWh5ZHJhdGVkKT8oYj1iLm1lbW9pemVkU3RhdGUsbnVsbCE9PWImJm51bGw9PT1iLmRlaHlkcmF0ZWQpOiExfXZhciBuaj1NYXRoLmNlaWwsb2o9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixwaj1yYS5SZWFjdEN1cnJlbnRPd25lcixYPTAsVT1udWxsLFk9bnVsbCxXPTAscWo9MCxyaj1CZigwKSxWPTAsc2o9bnVsbCx0aj0wLERnPTAsSGk9MCx1aj0wLHZqPW51bGwsamo9MCxKaT1JbmZpbml0eTtmdW5jdGlvbiB3aigpe0ppPU8oKSs1MDB9dmFyIFo9bnVsbCxRaT0hMSxSaT1udWxsLFRpPW51bGwseGo9ITEseWo9bnVsbCx6aj05MCxBaj1bXSxCaj1bXSxDaj1udWxsLERqPTAsRWo9bnVsbCxGaj0tMSxHaj0wLEhqPTAsSWo9bnVsbCxKaj0hMTtmdW5jdGlvbiBIZygpe3JldHVybiAwIT09KFgmNDgpP08oKTotMSE9PUZqP0ZqOkZqPU8oKX1cbmZ1bmN0aW9uIElnKGEpe2E9YS5tb2RlO2lmKDA9PT0oYSYyKSlyZXR1cm4gMTtpZigwPT09KGEmNCkpcmV0dXJuIDk5PT09ZWcoKT8xOjI7MD09PUdqJiYoR2o9dGopO2lmKDAhPT1rZy50cmFuc2l0aW9uKXswIT09SGomJihIaj1udWxsIT09dmo/dmoucGVuZGluZ0xhbmVzOjApO2E9R2o7dmFyIGI9NDE4NjExMiZ+SGo7YiY9LWI7MD09PWImJihhPTQxODYxMTImfmEsYj1hJi1hLDA9PT1iJiYoYj04MTkyKSk7cmV0dXJuIGJ9YT1lZygpOzAhPT0oWCY0KSYmOTg9PT1hP2E9WGMoMTIsR2opOihhPVNjKGEpLGE9WGMoYSxHaikpO3JldHVybiBhfVxuZnVuY3Rpb24gSmcoYSxiLGMpe2lmKDUwPERqKXRocm93IERqPTAsRWo9bnVsbCxFcnJvcih5KDE4NSkpO2E9S2ooYSxiKTtpZihudWxsPT09YSlyZXR1cm4gbnVsbDskYyhhLGIsYyk7YT09PVUmJihIaXw9Yiw0PT09ViYmSWkoYSxXKSk7dmFyIGQ9ZWcoKTsxPT09Yj8wIT09KFgmOCkmJjA9PT0oWCY0OCk/TGooYSk6KE1qKGEsYyksMD09PVgmJih3aigpLGlnKCkpKTooMD09PShYJjQpfHw5OCE9PWQmJjk5IT09ZHx8KG51bGw9PT1Daj9Daj1uZXcgU2V0KFthXSk6Q2ouYWRkKGEpKSxNaihhLGMpKTt2aj1hfWZ1bmN0aW9uIEtqKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO2M9YTtmb3IoYT1hLnJldHVybjtudWxsIT09YTspYS5jaGlsZExhbmVzfD1iLGM9YS5hbHRlcm5hdGUsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpLGM9YSxhPWEucmV0dXJuO3JldHVybiAzPT09Yy50YWc/Yy5zdGF0ZU5vZGU6bnVsbH1cbmZ1bmN0aW9uIE1qKGEsYil7Zm9yKHZhciBjPWEuY2FsbGJhY2tOb2RlLGQ9YS5zdXNwZW5kZWRMYW5lcyxlPWEucGluZ2VkTGFuZXMsZj1hLmV4cGlyYXRpb25UaW1lcyxnPWEucGVuZGluZ0xhbmVzOzA8Zzspe3ZhciBoPTMxLVZjKGcpLGs9MTw8aCxsPWZbaF07aWYoLTE9PT1sKXtpZigwPT09KGsmZCl8fDAhPT0oayZlKSl7bD1iO1JjKGspO3ZhciBuPUY7ZltoXT0xMDw9bj9sKzI1MDo2PD1uP2wrNUUzOi0xfX1lbHNlIGw8PWImJihhLmV4cGlyZWRMYW5lc3w9ayk7ZyY9fmt9ZD1VYyhhLGE9PT1VP1c6MCk7Yj1GO2lmKDA9PT1kKW51bGwhPT1jJiYoYyE9PVpmJiZQZihjKSxhLmNhbGxiYWNrTm9kZT1udWxsLGEuY2FsbGJhY2tQcmlvcml0eT0wKTtlbHNle2lmKG51bGwhPT1jKXtpZihhLmNhbGxiYWNrUHJpb3JpdHk9PT1iKXJldHVybjtjIT09WmYmJlBmKGMpfTE1PT09Yj8oYz1Mai5iaW5kKG51bGwsYSksbnVsbD09PWFnPyhhZz1bY10sYmc9T2YoVWYsamcpKTphZy5wdXNoKGMpLFxuYz1aZik6MTQ9PT1iP2M9aGcoOTksTGouYmluZChudWxsLGEpKTooYz1UYyhiKSxjPWhnKGMsTmouYmluZChudWxsLGEpKSk7YS5jYWxsYmFja1ByaW9yaXR5PWI7YS5jYWxsYmFja05vZGU9Y319XG5mdW5jdGlvbiBOaihhKXtGaj0tMTtIaj1Haj0wO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTt2YXIgYj1hLmNhbGxiYWNrTm9kZTtpZihPaigpJiZhLmNhbGxiYWNrTm9kZSE9PWIpcmV0dXJuIG51bGw7dmFyIGM9VWMoYSxhPT09VT9XOjApO2lmKDA9PT1jKXJldHVybiBudWxsO3ZhciBkPWM7dmFyIGU9WDtYfD0xNjt2YXIgZj1QaigpO2lmKFUhPT1hfHxXIT09ZCl3aigpLFFqKGEsZCk7ZG8gdHJ5e1JqKCk7YnJlYWt9Y2F0Y2goaCl7U2ooYSxoKX13aGlsZSgxKTtxZygpO29qLmN1cnJlbnQ9ZjtYPWU7bnVsbCE9PVk/ZD0wOihVPW51bGwsVz0wLGQ9Vik7aWYoMCE9PSh0aiZIaSkpUWooYSwwKTtlbHNlIGlmKDAhPT1kKXsyPT09ZCYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxjPVdjKGEpLDAhPT1jJiYoZD1UaihhLGMpKSk7aWYoMT09PWQpdGhyb3cgYj1zaixRaihhLDApLElpKGEsYyksTWooYSxPKCkpLGI7YS5maW5pc2hlZFdvcms9XG5hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1jO3N3aXRjaChkKXtjYXNlIDA6Y2FzZSAxOnRocm93IEVycm9yKHkoMzQ1KSk7Y2FzZSAyOlVqKGEpO2JyZWFrO2Nhc2UgMzpJaShhLGMpO2lmKChjJjYyOTE0NTYwKT09PWMmJihkPWpqKzUwMC1PKCksMTA8ZCkpe2lmKDAhPT1VYyhhLDApKWJyZWFrO2U9YS5zdXNwZW5kZWRMYW5lcztpZigoZSZjKSE9PWMpe0hnKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZlO2JyZWFrfWEudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksZCk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA0OklpKGEsYyk7aWYoKGMmNDE4NjExMik9PT1jKWJyZWFrO2Q9YS5ldmVudFRpbWVzO2ZvcihlPS0xOzA8Yzspe3ZhciBnPTMxLVZjKGMpO2Y9MTw8ZztnPWRbZ107Zz5lJiYoZT1nKTtjJj1+Zn1jPWU7Yz1PKCktYztjPSgxMjA+Yz8xMjA6NDgwPmM/NDgwOjEwODA+Yz8xMDgwOjE5MjA+Yz8xOTIwOjNFMz5jPzNFMzo0MzIwPlxuYz80MzIwOjE5NjAqbmooYy8xOTYwKSktYztpZigxMDxjKXthLnRpbWVvdXRIYW5kbGU9b2YoVWouYmluZChudWxsLGEpLGMpO2JyZWFrfVVqKGEpO2JyZWFrO2Nhc2UgNTpVaihhKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHkoMzI5KSk7fX1NaihhLE8oKSk7cmV0dXJuIGEuY2FsbGJhY2tOb2RlPT09Yj9Oai5iaW5kKG51bGwsYSk6bnVsbH1mdW5jdGlvbiBJaShhLGIpe2ImPX51ajtiJj1+SGk7YS5zdXNwZW5kZWRMYW5lc3w9YjthLnBpbmdlZExhbmVzJj1+Yjtmb3IoYT1hLmV4cGlyYXRpb25UaW1lczswPGI7KXt2YXIgYz0zMS1WYyhiKSxkPTE8PGM7YVtjXT0tMTtiJj1+ZH19XG5mdW5jdGlvbiBMaihhKXtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7T2ooKTtpZihhPT09VSYmMCE9PShhLmV4cGlyZWRMYW5lcyZXKSl7dmFyIGI9Vzt2YXIgYz1UaihhLGIpOzAhPT0odGomSGkpJiYoYj1VYyhhLGIpLGM9VGooYSxiKSl9ZWxzZSBiPVVjKGEsMCksYz1UaihhLGIpOzAhPT1hLnRhZyYmMj09PWMmJihYfD02NCxhLmh5ZHJhdGUmJihhLmh5ZHJhdGU9ITEscWYoYS5jb250YWluZXJJbmZvKSksYj1XYyhhKSwwIT09YiYmKGM9VGooYSxiKSkpO2lmKDE9PT1jKXRocm93IGM9c2osUWooYSwwKSxJaShhLGIpLE1qKGEsTygpKSxjO2EuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWI7VWooYSk7TWooYSxPKCkpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gVmooKXtpZihudWxsIT09Q2ope3ZhciBhPUNqO0NqPW51bGw7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZXhwaXJlZExhbmVzfD0yNCZhLnBlbmRpbmdMYW5lcztNaihhLE8oKSl9KX1pZygpfWZ1bmN0aW9uIFdqKGEsYil7dmFyIGM9WDtYfD0xO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fWZ1bmN0aW9uIFhqKGEsYil7dmFyIGM9WDtYJj0tMjtYfD04O3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fWZ1bmN0aW9uIG5pKGEsYil7SShyaixxaik7cWp8PWI7dGp8PWJ9ZnVuY3Rpb24gS2koKXtxaj1yai5jdXJyZW50O0gocmopfVxuZnVuY3Rpb24gUWooYSxiKXthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO3ZhciBjPWEudGltZW91dEhhbmRsZTstMSE9PWMmJihhLnRpbWVvdXRIYW5kbGU9LTEscGYoYykpO2lmKG51bGwhPT1ZKWZvcihjPVkucmV0dXJuO251bGwhPT1jOyl7dmFyIGQ9Yztzd2l0Y2goZC50YWcpe2Nhc2UgMTpkPWQudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09ZCYmdm9pZCAwIT09ZCYmR2YoKTticmVhaztjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTticmVhaztjYXNlIDU6aGgoZCk7YnJlYWs7Y2FzZSA0OmZoKCk7YnJlYWs7Y2FzZSAxMzpIKFApO2JyZWFrO2Nhc2UgMTk6SChQKTticmVhaztjYXNlIDEwOnJnKGQpO2JyZWFrO2Nhc2UgMjM6Y2FzZSAyNDpLaSgpfWM9Yy5yZXR1cm59VT1hO1k9VGcoYS5jdXJyZW50LG51bGwpO1c9cWo9dGo9YjtWPTA7c2o9bnVsbDt1aj1IaT1EZz0wfVxuZnVuY3Rpb24gU2ooYSxiKXtkb3t2YXIgYz1ZO3RyeXtxZygpO3ZoLmN1cnJlbnQ9R2g7aWYoeWgpe2Zvcih2YXIgZD1SLm1lbW9pemVkU3RhdGU7bnVsbCE9PWQ7KXt2YXIgZT1kLnF1ZXVlO251bGwhPT1lJiYoZS5wZW5kaW5nPW51bGwpO2Q9ZC5uZXh0fXloPSExfXhoPTA7VD1TPVI9bnVsbDt6aD0hMTtwai5jdXJyZW50PW51bGw7aWYobnVsbD09PWN8fG51bGw9PT1jLnJldHVybil7Vj0xO3NqPWI7WT1udWxsO2JyZWFrfWE6e3ZhciBmPWEsZz1jLnJldHVybixoPWMsaz1iO2I9VztoLmZsYWdzfD0yMDQ4O2guZmlyc3RFZmZlY3Q9aC5sYXN0RWZmZWN0PW51bGw7aWYobnVsbCE9PWsmJlwib2JqZWN0XCI9PT10eXBlb2YgayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGsudGhlbil7dmFyIGw9aztpZigwPT09KGgubW9kZSYyKSl7dmFyIG49aC5hbHRlcm5hdGU7bj8oaC51cGRhdGVRdWV1ZT1uLnVwZGF0ZVF1ZXVlLGgubWVtb2l6ZWRTdGF0ZT1uLm1lbW9pemVkU3RhdGUsaC5sYW5lcz1uLmxhbmVzKTpcbihoLnVwZGF0ZVF1ZXVlPW51bGwsaC5tZW1vaXplZFN0YXRlPW51bGwpfXZhciBBPTAhPT0oUC5jdXJyZW50JjEpLHA9Zztkb3t2YXIgQztpZihDPTEzPT09cC50YWcpe3ZhciB4PXAubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09eClDPW51bGwhPT14LmRlaHlkcmF0ZWQ/ITA6ITE7ZWxzZXt2YXIgdz1wLm1lbW9pemVkUHJvcHM7Qz12b2lkIDA9PT13LmZhbGxiYWNrPyExOiEwIT09dy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjaz8hMDpBPyExOiEwfX1pZihDKXt2YXIgej1wLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT16KXt2YXIgdT1uZXcgU2V0O3UuYWRkKGwpO3AudXBkYXRlUXVldWU9dX1lbHNlIHouYWRkKGwpO2lmKDA9PT0ocC5tb2RlJjIpKXtwLmZsYWdzfD02NDtoLmZsYWdzfD0xNjM4NDtoLmZsYWdzJj0tMjk4MTtpZigxPT09aC50YWcpaWYobnVsbD09PWguYWx0ZXJuYXRlKWgudGFnPTE3O2Vsc2V7dmFyIHQ9emcoLTEsMSk7dC50YWc9MjtBZyhoLHQpfWgubGFuZXN8PTE7YnJlYWsgYX1rPVxudm9pZCAwO2g9Yjt2YXIgcT1mLnBpbmdDYWNoZTtudWxsPT09cT8ocT1mLnBpbmdDYWNoZT1uZXcgT2ksaz1uZXcgU2V0LHEuc2V0KGwsaykpOihrPXEuZ2V0KGwpLHZvaWQgMD09PWsmJihrPW5ldyBTZXQscS5zZXQobCxrKSkpO2lmKCFrLmhhcyhoKSl7ay5hZGQoaCk7dmFyIHY9WWouYmluZChudWxsLGYsbCxoKTtsLnRoZW4odix2KX1wLmZsYWdzfD00MDk2O3AubGFuZXM9YjticmVhayBhfXA9cC5yZXR1cm59d2hpbGUobnVsbCE9PXApO2s9RXJyb3IoKFJhKGgudHlwZSl8fFwiQSBSZWFjdCBjb21wb25lbnRcIikrXCIgc3VzcGVuZGVkIHdoaWxlIHJlbmRlcmluZywgYnV0IG5vIGZhbGxiYWNrIFVJIHdhcyBzcGVjaWZpZWQuXFxuXFxuQWRkIGEgPFN1c3BlbnNlIGZhbGxiYWNrPS4uLj4gY29tcG9uZW50IGhpZ2hlciBpbiB0aGUgdHJlZSB0byBwcm92aWRlIGEgbG9hZGluZyBpbmRpY2F0b3Igb3IgcGxhY2Vob2xkZXIgdG8gZGlzcGxheS5cIil9NSE9PVYmJihWPTIpO2s9TWkoayxoKTtwPVxuZztkb3tzd2l0Y2gocC50YWcpe2Nhc2UgMzpmPWs7cC5mbGFnc3w9NDA5NjtiJj0tYjtwLmxhbmVzfD1iO3ZhciBKPVBpKHAsZixiKTtCZyhwLEopO2JyZWFrIGE7Y2FzZSAxOmY9azt2YXIgSz1wLnR5cGUsUT1wLnN0YXRlTm9kZTtpZigwPT09KHAuZmxhZ3MmNjQpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEsuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09USYmXCJmdW5jdGlvblwiPT09dHlwZW9mIFEuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoUSkpKSl7cC5mbGFnc3w9NDA5NjtiJj0tYjtwLmxhbmVzfD1iO3ZhciBMPVNpKHAsZixiKTtCZyhwLEwpO2JyZWFrIGF9fXA9cC5yZXR1cm59d2hpbGUobnVsbCE9PXApfVpqKGMpfWNhdGNoKHZhKXtiPXZhO1k9PT1jJiZudWxsIT09YyYmKFk9Yz1jLnJldHVybik7Y29udGludWV9YnJlYWt9d2hpbGUoMSl9XG5mdW5jdGlvbiBQaigpe3ZhciBhPW9qLmN1cnJlbnQ7b2ouY3VycmVudD1HaDtyZXR1cm4gbnVsbD09PWE/R2g6YX1mdW5jdGlvbiBUaihhLGIpe3ZhciBjPVg7WHw9MTY7dmFyIGQ9UGooKTtVPT09YSYmVz09PWJ8fFFqKGEsYik7ZG8gdHJ5e2FrKCk7YnJlYWt9Y2F0Y2goZSl7U2ooYSxlKX13aGlsZSgxKTtxZygpO1g9Yztvai5jdXJyZW50PWQ7aWYobnVsbCE9PVkpdGhyb3cgRXJyb3IoeSgyNjEpKTtVPW51bGw7Vz0wO3JldHVybiBWfWZ1bmN0aW9uIGFrKCl7Zm9yKDtudWxsIT09WTspYmsoWSl9ZnVuY3Rpb24gUmooKXtmb3IoO251bGwhPT1ZJiYhUWYoKTspYmsoWSl9ZnVuY3Rpb24gYmsoYSl7dmFyIGI9Y2soYS5hbHRlcm5hdGUsYSxxaik7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iP1pqKGEpOlk9Yjtwai5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiBaaihhKXt2YXIgYj1hO2Rve3ZhciBjPWIuYWx0ZXJuYXRlO2E9Yi5yZXR1cm47aWYoMD09PShiLmZsYWdzJjIwNDgpKXtjPUdpKGMsYixxaik7aWYobnVsbCE9PWMpe1k9YztyZXR1cm59Yz1iO2lmKDI0IT09Yy50YWcmJjIzIT09Yy50YWd8fG51bGw9PT1jLm1lbW9pemVkU3RhdGV8fDAhPT0ocWomMTA3Mzc0MTgyNCl8fDA9PT0oYy5tb2RlJjQpKXtmb3IodmFyIGQ9MCxlPWMuY2hpbGQ7bnVsbCE9PWU7KWR8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGU9ZS5zaWJsaW5nO2MuY2hpbGRMYW5lcz1kfW51bGwhPT1hJiYwPT09KGEuZmxhZ3MmMjA0OCkmJihudWxsPT09YS5maXJzdEVmZmVjdCYmKGEuZmlyc3RFZmZlY3Q9Yi5maXJzdEVmZmVjdCksbnVsbCE9PWIubGFzdEVmZmVjdCYmKG51bGwhPT1hLmxhc3RFZmZlY3QmJihhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxhLmxhc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0KSwxPGIuZmxhZ3MmJihudWxsIT09XG5hLmxhc3RFZmZlY3Q/YS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YjphLmZpcnN0RWZmZWN0PWIsYS5sYXN0RWZmZWN0PWIpKX1lbHNle2M9TGkoYik7aWYobnVsbCE9PWMpe2MuZmxhZ3MmPTIwNDc7WT1jO3JldHVybn1udWxsIT09YSYmKGEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PW51bGwsYS5mbGFnc3w9MjA0OCl9Yj1iLnNpYmxpbmc7aWYobnVsbCE9PWIpe1k9YjtyZXR1cm59WT1iPWF9d2hpbGUobnVsbCE9PWIpOzA9PT1WJiYoVj01KX1mdW5jdGlvbiBVaihhKXt2YXIgYj1lZygpO2dnKDk5LGRrLmJpbmQobnVsbCxhLGIpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRrKGEsYil7ZG8gT2ooKTt3aGlsZShudWxsIT09eWopO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTt2YXIgYz1hLmZpbmlzaGVkV29yaztpZihudWxsPT09YylyZXR1cm4gbnVsbDthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO2lmKGM9PT1hLmN1cnJlbnQpdGhyb3cgRXJyb3IoeSgxNzcpKTthLmNhbGxiYWNrTm9kZT1udWxsO3ZhciBkPWMubGFuZXN8Yy5jaGlsZExhbmVzLGU9ZCxmPWEucGVuZGluZ0xhbmVzJn5lO2EucGVuZGluZ0xhbmVzPWU7YS5zdXNwZW5kZWRMYW5lcz0wO2EucGluZ2VkTGFuZXM9MDthLmV4cGlyZWRMYW5lcyY9ZTthLm11dGFibGVSZWFkTGFuZXMmPWU7YS5lbnRhbmdsZWRMYW5lcyY9ZTtlPWEuZW50YW5nbGVtZW50cztmb3IodmFyIGc9YS5ldmVudFRpbWVzLGg9YS5leHBpcmF0aW9uVGltZXM7MDxmOyl7dmFyIGs9MzEtVmMoZiksbD0xPDxrO2Vba109MDtnW2tdPS0xO2hba109LTE7ZiY9fmx9bnVsbCE9PVxuQ2omJjA9PT0oZCYyNCkmJkNqLmhhcyhhKSYmQ2ouZGVsZXRlKGEpO2E9PT1VJiYoWT1VPW51bGwsVz0wKTsxPGMuZmxhZ3M/bnVsbCE9PWMubGFzdEVmZmVjdD8oYy5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxkPWMuZmlyc3RFZmZlY3QpOmQ9YzpkPWMuZmlyc3RFZmZlY3Q7aWYobnVsbCE9PWQpe2U9WDtYfD0zMjtwai5jdXJyZW50PW51bGw7a2Y9ZmQ7Zz1OZSgpO2lmKE9lKGcpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBnKWg9e3N0YXJ0Omcuc2VsZWN0aW9uU3RhcnQsZW5kOmcuc2VsZWN0aW9uRW5kfTtlbHNlIGE6aWYoaD0oaD1nLm93bmVyRG9jdW1lbnQpJiZoLmRlZmF1bHRWaWV3fHx3aW5kb3csKGw9aC5nZXRTZWxlY3Rpb24mJmguZ2V0U2VsZWN0aW9uKCkpJiYwIT09bC5yYW5nZUNvdW50KXtoPWwuYW5jaG9yTm9kZTtmPWwuYW5jaG9yT2Zmc2V0O2s9bC5mb2N1c05vZGU7bD1sLmZvY3VzT2Zmc2V0O3RyeXtoLm5vZGVUeXBlLGsubm9kZVR5cGV9Y2F0Y2godmEpe2g9bnVsbDtcbmJyZWFrIGF9dmFyIG49MCxBPS0xLHA9LTEsQz0wLHg9MCx3PWcsej1udWxsO2I6Zm9yKDs7KXtmb3IodmFyIHU7Oyl7dyE9PWh8fDAhPT1mJiYzIT09dy5ub2RlVHlwZXx8KEE9bitmKTt3IT09a3x8MCE9PWwmJjMhPT13Lm5vZGVUeXBlfHwocD1uK2wpOzM9PT13Lm5vZGVUeXBlJiYobis9dy5ub2RlVmFsdWUubGVuZ3RoKTtpZihudWxsPT09KHU9dy5maXJzdENoaWxkKSlicmVhazt6PXc7dz11fWZvcig7Oyl7aWYodz09PWcpYnJlYWsgYjt6PT09aCYmKytDPT09ZiYmKEE9bik7ej09PWsmJisreD09PWwmJihwPW4pO2lmKG51bGwhPT0odT13Lm5leHRTaWJsaW5nKSlicmVhazt3PXo7ej13LnBhcmVudE5vZGV9dz11fWg9LTE9PT1BfHwtMT09PXA/bnVsbDp7c3RhcnQ6QSxlbmQ6cH19ZWxzZSBoPW51bGw7aD1ofHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBoPW51bGw7bGY9e2ZvY3VzZWRFbGVtOmcsc2VsZWN0aW9uUmFuZ2U6aH07ZmQ9ITE7SWo9bnVsbDtKaj0hMTtaPWQ7ZG8gdHJ5e2VrKCl9Y2F0Y2godmEpe2lmKG51bGw9PT1cblopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7SWo9bnVsbDtaPWQ7ZG8gdHJ5e2ZvcihnPWE7bnVsbCE9PVo7KXt2YXIgdD1aLmZsYWdzO3QmMTYmJnBiKFouc3RhdGVOb2RlLFwiXCIpO2lmKHQmMTI4KXt2YXIgcT1aLmFsdGVybmF0ZTtpZihudWxsIT09cSl7dmFyIHY9cS5yZWY7bnVsbCE9PXYmJihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygdj92KG51bGwpOnYuY3VycmVudD1udWxsKX19c3dpdGNoKHQmMTAzOCl7Y2FzZSAyOmZqKFopO1ouZmxhZ3MmPS0zO2JyZWFrO2Nhc2UgNjpmaihaKTtaLmZsYWdzJj0tMztpaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDEwMjQ6Wi5mbGFncyY9LTEwMjU7YnJlYWs7Y2FzZSAxMDI4OlouZmxhZ3MmPS0xMDI1O2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgNDppaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDg6aD1aO2NqKGcsaCk7dmFyIEo9aC5hbHRlcm5hdGU7ZGooaCk7bnVsbCE9PVxuSiYmZGooSil9Wj1aLm5leHRFZmZlY3R9fWNhdGNoKHZhKXtpZihudWxsPT09Wil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTt2PWxmO3E9TmUoKTt0PXYuZm9jdXNlZEVsZW07Zz12LnNlbGVjdGlvblJhbmdlO2lmKHEhPT10JiZ0JiZ0Lm93bmVyRG9jdW1lbnQmJk1lKHQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdCkpe251bGwhPT1nJiZPZSh0KSYmKHE9Zy5zdGFydCx2PWcuZW5kLHZvaWQgMD09PXYmJih2PXEpLFwic2VsZWN0aW9uU3RhcnRcImluIHQ/KHQuc2VsZWN0aW9uU3RhcnQ9cSx0LnNlbGVjdGlvbkVuZD1NYXRoLm1pbih2LHQudmFsdWUubGVuZ3RoKSk6KHY9KHE9dC5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJnEuZGVmYXVsdFZpZXd8fHdpbmRvdyx2LmdldFNlbGVjdGlvbiYmKHY9di5nZXRTZWxlY3Rpb24oKSxoPXQudGV4dENvbnRlbnQubGVuZ3RoLEo9TWF0aC5taW4oZy5zdGFydCxoKSxnPXZvaWQgMD09PVxuZy5lbmQ/SjpNYXRoLm1pbihnLmVuZCxoKSwhdi5leHRlbmQmJko+ZyYmKGg9ZyxnPUosSj1oKSxoPUxlKHQsSiksZj1MZSh0LGcpLGgmJmYmJigxIT09di5yYW5nZUNvdW50fHx2LmFuY2hvck5vZGUhPT1oLm5vZGV8fHYuYW5jaG9yT2Zmc2V0IT09aC5vZmZzZXR8fHYuZm9jdXNOb2RlIT09Zi5ub2RlfHx2LmZvY3VzT2Zmc2V0IT09Zi5vZmZzZXQpJiYocT1xLmNyZWF0ZVJhbmdlKCkscS5zZXRTdGFydChoLm5vZGUsaC5vZmZzZXQpLHYucmVtb3ZlQWxsUmFuZ2VzKCksSj5nPyh2LmFkZFJhbmdlKHEpLHYuZXh0ZW5kKGYubm9kZSxmLm9mZnNldCkpOihxLnNldEVuZChmLm5vZGUsZi5vZmZzZXQpLHYuYWRkUmFuZ2UocSkpKSkpKTtxPVtdO2Zvcih2PXQ7dj12LnBhcmVudE5vZGU7KTE9PT12Lm5vZGVUeXBlJiZxLnB1c2goe2VsZW1lbnQ6dixsZWZ0OnYuc2Nyb2xsTGVmdCx0b3A6di5zY3JvbGxUb3B9KTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgdC5mb2N1cyYmdC5mb2N1cygpO2Zvcih0PVxuMDt0PHEubGVuZ3RoO3QrKyl2PXFbdF0sdi5lbGVtZW50LnNjcm9sbExlZnQ9di5sZWZ0LHYuZWxlbWVudC5zY3JvbGxUb3A9di50b3B9ZmQ9ISFrZjtsZj1rZj1udWxsO2EuY3VycmVudD1jO1o9ZDtkbyB0cnl7Zm9yKHQ9YTtudWxsIT09Wjspe3ZhciBLPVouZmxhZ3M7SyYzNiYmWWkodCxaLmFsdGVybmF0ZSxaKTtpZihLJjEyOCl7cT12b2lkIDA7dmFyIFE9Wi5yZWY7aWYobnVsbCE9PVEpe3ZhciBMPVouc3RhdGVOb2RlO3N3aXRjaChaLnRhZyl7Y2FzZSA1OnE9TDticmVhaztkZWZhdWx0OnE9TH1cImZ1bmN0aW9uXCI9PT10eXBlb2YgUT9RKHEpOlEuY3VycmVudD1xfX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO1o9bnVsbDskZigpO1g9ZX1lbHNlIGEuY3VycmVudD1jO2lmKHhqKXhqPSExLHlqPWEsemo9YjtlbHNlIGZvcihaPWQ7bnVsbCE9PVo7KWI9XG5aLm5leHRFZmZlY3QsWi5uZXh0RWZmZWN0PW51bGwsWi5mbGFncyY4JiYoSz1aLEsuc2libGluZz1udWxsLEsuc3RhdGVOb2RlPW51bGwpLFo9YjtkPWEucGVuZGluZ0xhbmVzOzA9PT1kJiYoVGk9bnVsbCk7MT09PWQ/YT09PUVqP0RqKys6KERqPTAsRWo9YSk6RGo9MDtjPWMuc3RhdGVOb2RlO2lmKE1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgTWYub25Db21taXRGaWJlclJvb3QpdHJ5e01mLm9uQ29tbWl0RmliZXJSb290KExmLGMsdm9pZCAwLDY0PT09KGMuY3VycmVudC5mbGFncyY2NCkpfWNhdGNoKHZhKXt9TWooYSxPKCkpO2lmKFFpKXRocm93IFFpPSExLGE9UmksUmk9bnVsbCxhO2lmKDAhPT0oWCY4KSlyZXR1cm4gbnVsbDtpZygpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZWsoKXtmb3IoO251bGwhPT1aOyl7dmFyIGE9Wi5hbHRlcm5hdGU7Smp8fG51bGw9PT1Janx8KDAhPT0oWi5mbGFncyY4KT9kYyhaLElqKSYmKEpqPSEwKToxMz09PVoudGFnJiZtaihhLFopJiZkYyhaLElqKSYmKEpqPSEwKSk7dmFyIGI9Wi5mbGFnczswIT09KGImMjU2KSYmWGkoYSxaKTswPT09KGImNTEyKXx8eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSk7Wj1aLm5leHRFZmZlY3R9fWZ1bmN0aW9uIE9qKCl7aWYoOTAhPT16ail7dmFyIGE9OTc8emo/OTc6emo7emo9OTA7cmV0dXJuIGdnKGEsZmspfXJldHVybiExfWZ1bmN0aW9uICRpKGEsYil7QWoucHVzaChiLGEpO3hqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpfWZ1bmN0aW9uIFppKGEsYil7QmoucHVzaChiLGEpO3hqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpfVxuZnVuY3Rpb24gZmsoKXtpZihudWxsPT09eWopcmV0dXJuITE7dmFyIGE9eWo7eWo9bnVsbDtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzMxKSk7dmFyIGI9WDtYfD0zMjt2YXIgYz1CajtCaj1bXTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrPTIpe3ZhciBlPWNbZF0sZj1jW2QrMV0sZz1lLmRlc3Ryb3k7ZS5kZXN0cm95PXZvaWQgMDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyl0cnl7ZygpfWNhdGNoKGspe2lmKG51bGw9PT1mKXRocm93IEVycm9yKHkoMzMwKSk7V2koZixrKX19Yz1BajtBaj1bXTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7ZT1jW2RdO2Y9Y1tkKzFdO3RyeXt2YXIgaD1lLmNyZWF0ZTtlLmRlc3Ryb3k9aCgpfWNhdGNoKGspe2lmKG51bGw9PT1mKXRocm93IEVycm9yKHkoMzMwKSk7V2koZixrKX19Zm9yKGg9YS5jdXJyZW50LmZpcnN0RWZmZWN0O251bGwhPT1oOylhPWgubmV4dEVmZmVjdCxoLm5leHRFZmZlY3Q9bnVsbCxoLmZsYWdzJjgmJihoLnNpYmxpbmc9XG5udWxsLGguc3RhdGVOb2RlPW51bGwpLGg9YTtYPWI7aWcoKTtyZXR1cm4hMH1mdW5jdGlvbiBnayhhLGIsYyl7Yj1NaShjLGIpO2I9UGkoYSxiLDEpO0FnKGEsYik7Yj1IZygpO2E9S2ooYSwxKTtudWxsIT09YSYmKCRjKGEsMSxiKSxNaihhLGIpKX1cbmZ1bmN0aW9uIFdpKGEsYil7aWYoMz09PWEudGFnKWdrKGEsYSxiKTtlbHNlIGZvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKDM9PT1jLnRhZyl7Z2soYyxhLGIpO2JyZWFrfWVsc2UgaWYoMT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXthPU1pKGIsYSk7dmFyIGU9U2koYyxhLDEpO0FnKGMsZSk7ZT1IZygpO2M9S2ooYywxKTtpZihudWxsIT09YykkYyhjLDEsZSksTWooYyxlKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKGQpKSl0cnl7ZC5jb21wb25lbnREaWRDYXRjaChiLGEpfWNhdGNoKGYpe31icmVha319Yz1jLnJldHVybn19XG5mdW5jdGlvbiBZaihhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2I9SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmM7VT09PWEmJihXJmMpPT09YyYmKDQ9PT1WfHwzPT09ViYmKFcmNjI5MTQ1NjApPT09VyYmNTAwPk8oKS1qaj9RaihhLDApOnVqfD1jKTtNaihhLGIpfWZ1bmN0aW9uIGxqKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2I9MDswPT09YiYmKGI9YS5tb2RlLDA9PT0oYiYyKT9iPTE6MD09PShiJjQpP2I9OTk9PT1lZygpPzE6MjooMD09PUdqJiYoR2o9dGopLGI9WWMoNjI5MTQ1NjAmfkdqKSwwPT09YiYmKGI9NDE5NDMwNCkpKTtjPUhnKCk7YT1LaihhLGIpO251bGwhPT1hJiYoJGMoYSxiLGMpLE1qKGEsYykpfXZhciBjaztcbmNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iLmxhbmVzO2lmKG51bGwhPT1hKWlmKGEubWVtb2l6ZWRQcm9wcyE9PWIucGVuZGluZ1Byb3BzfHxOLmN1cnJlbnQpdWc9ITA7ZWxzZSBpZigwIT09KGMmZCkpdWc9MCE9PShhLmZsYWdzJjE2Mzg0KT8hMDohMTtlbHNle3VnPSExO3N3aXRjaChiLnRhZyl7Y2FzZSAzOnJpKGIpO3NoKCk7YnJlYWs7Y2FzZSA1OmdoKGIpO2JyZWFrO2Nhc2UgMTpGZihiLnR5cGUpJiZKZihiKTticmVhaztjYXNlIDQ6ZWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOmQ9Yi5tZW1vaXplZFByb3BzLnZhbHVlO3ZhciBlPWIudHlwZS5fY29udGV4dDtJKG1nLGUuX2N1cnJlbnRWYWx1ZSk7ZS5fY3VycmVudFZhbHVlPWQ7YnJlYWs7Y2FzZSAxMzppZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXtpZigwIT09KGMmYi5jaGlsZC5jaGlsZExhbmVzKSlyZXR1cm4gdGkoYSxiLGMpO0koUCxQLmN1cnJlbnQmMSk7Yj1oaShhLGIsYyk7cmV0dXJuIG51bGwhPT1cbmI/Yi5zaWJsaW5nOm51bGx9SShQLFAuY3VycmVudCYxKTticmVhaztjYXNlIDE5OmQ9MCE9PShjJmIuY2hpbGRMYW5lcyk7aWYoMCE9PShhLmZsYWdzJjY0KSl7aWYoZClyZXR1cm4gQWkoYSxiLGMpO2IuZmxhZ3N8PTY0fWU9Yi5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoZS5yZW5kZXJpbmc9bnVsbCxlLnRhaWw9bnVsbCxlLmxhc3RFZmZlY3Q9bnVsbCk7SShQLFAuY3VycmVudCk7aWYoZClicmVhaztlbHNlIHJldHVybiBudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gYi5sYW5lcz0wLG1pKGEsYixjKX1yZXR1cm4gaGkoYSxiLGMpfWVsc2UgdWc9ITE7Yi5sYW5lcz0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmQ9Yi50eXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7ZT1FZihiLE0uY3VycmVudCk7dGcoYixjKTtlPUNoKG51bGwsYixkLGEsZSxjKTtiLmZsYWdzfD0xO2lmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mKXtiLnRhZz0xO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtpZihGZihkKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO2IubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGw7eGcoYik7dmFyIGc9ZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJkdnKGIsZCxnLGEpO2UudXBkYXRlcj1LZztiLnN0YXRlTm9kZT1lO2UuX3JlYWN0SW50ZXJuYWxzPWI7T2coYixkLGEsYyk7Yj1xaShudWxsLGIsZCwhMCxmLGMpfWVsc2UgYi50YWc9MCxmaShudWxsLGIsZSxjKSxiPWIuY2hpbGQ7cmV0dXJuIGI7Y2FzZSAxNjplPWIuZWxlbWVudFR5cGU7YTp7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7XG5hPWIucGVuZGluZ1Byb3BzO2Y9ZS5faW5pdDtlPWYoZS5fcGF5bG9hZCk7Yi50eXBlPWU7Zj1iLnRhZz1oayhlKTthPWxnKGUsYSk7c3dpdGNoKGYpe2Nhc2UgMDpiPWxpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDE6Yj1waShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxMTpiPWdpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDE0OmI9aWkobnVsbCxiLGUsbGcoZS50eXBlLGEpLGQsYyk7YnJlYWsgYX10aHJvdyBFcnJvcih5KDMwNixlLFwiXCIpKTt9cmV0dXJuIGI7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLGxpKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLHBpKGEsYixkLGUsYyk7Y2FzZSAzOnJpKGIpO2Q9Yi51cGRhdGVRdWV1ZTtpZihudWxsPT09YXx8bnVsbD09PWQpdGhyb3cgRXJyb3IoeSgyODIpKTtcbmQ9Yi5wZW5kaW5nUHJvcHM7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6bnVsbDt5ZyhhLGIpO0NnKGIsZCxudWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpc2goKSxiPWhpKGEsYixjKTtlbHNle2U9Yi5zdGF0ZU5vZGU7aWYoZj1lLmh5ZHJhdGUpa2g9cmYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mby5maXJzdENoaWxkKSxqaD1iLGY9bGg9ITA7aWYoZil7YT1lLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE7aWYobnVsbCE9YSlmb3IoZT0wO2U8YS5sZW5ndGg7ZSs9MilmPWFbZV0sZi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1hW2UrMV0sdGgucHVzaChmKTtjPVpnKGIsbnVsbCxkLGMpO2ZvcihiLmNoaWxkPWM7YzspYy5mbGFncz1jLmZsYWdzJi0zfDEwMjQsYz1jLnNpYmxpbmd9ZWxzZSBmaShhLGIsZCxjKSxzaCgpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIGdoKGIpLG51bGw9PT1hJiZcbnBoKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxnPWUuY2hpbGRyZW4sbmYoZCxlKT9nPW51bGw6bnVsbCE9PWYmJm5mKGQsZikmJihiLmZsYWdzfD0xNiksb2koYSxiKSxmaShhLGIsZyxjKSxiLmNoaWxkO2Nhc2UgNjpyZXR1cm4gbnVsbD09PWEmJnBoKGIpLG51bGw7Y2FzZSAxMzpyZXR1cm4gdGkoYSxiLGMpO2Nhc2UgNDpyZXR1cm4gZWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9WWcoYixudWxsLGQsYyk6ZmkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLGdpKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixcbmMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2c9Yi5tZW1vaXplZFByb3BzO2Y9ZS52YWx1ZTt2YXIgaD1iLnR5cGUuX2NvbnRleHQ7SShtZyxoLl9jdXJyZW50VmFsdWUpO2guX2N1cnJlbnRWYWx1ZT1mO2lmKG51bGwhPT1nKWlmKGg9Zy52YWx1ZSxmPUhlKGgsZik/MDooXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzP2QuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzKGgsZik6MTA3Mzc0MTgyMyl8MCwwPT09Zil7aWYoZy5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFOLmN1cnJlbnQpe2I9aGkoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGg9Yi5jaGlsZCxudWxsIT09aCYmKGgucmV0dXJuPWIpO251bGwhPT1oOyl7dmFyIGs9aC5kZXBlbmRlbmNpZXM7aWYobnVsbCE9PWspe2c9aC5jaGlsZDtmb3IodmFyIGw9XG5rLmZpcnN0Q29udGV4dDtudWxsIT09bDspe2lmKGwuY29udGV4dD09PWQmJjAhPT0obC5vYnNlcnZlZEJpdHMmZikpezE9PT1oLnRhZyYmKGw9emcoLTEsYyYtYyksbC50YWc9MixBZyhoLGwpKTtoLmxhbmVzfD1jO2w9aC5hbHRlcm5hdGU7bnVsbCE9PWwmJihsLmxhbmVzfD1jKTtzZyhoLnJldHVybixjKTtrLmxhbmVzfD1jO2JyZWFrfWw9bC5uZXh0fX1lbHNlIGc9MTA9PT1oLnRhZz9oLnR5cGU9PT1iLnR5cGU/bnVsbDpoLmNoaWxkOmguY2hpbGQ7aWYobnVsbCE9PWcpZy5yZXR1cm49aDtlbHNlIGZvcihnPWg7bnVsbCE9PWc7KXtpZihnPT09Yil7Zz1udWxsO2JyZWFrfWg9Zy5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1nLnJldHVybjtnPWg7YnJlYWt9Zz1nLnJldHVybn1oPWd9ZmkoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZj1iLnBlbmRpbmdQcm9wcyxkPWYuY2hpbGRyZW4sdGcoYixjKSxlPXZnKGUsXG5mLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZmxhZ3N8PTEsZmkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDE0OnJldHVybiBlPWIudHlwZSxmPWxnKGUsYi5wZW5kaW5nUHJvcHMpLGY9bGcoZS50eXBlLGYpLGlpKGEsYixlLGYsZCxjKTtjYXNlIDE1OnJldHVybiBraShhLGIsYi50eXBlLGIucGVuZGluZ1Byb3BzLGQsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKSxiLnRhZz0xLEZmKGQpPyhhPSEwLEpmKGIpKTphPSExLHRnKGIsYyksTWcoYixkLGUpLE9nKGIsZCxlLGMpLHFpKG51bGwsYixkLCEwLGEsYyk7Y2FzZSAxOTpyZXR1cm4gQWkoYSxiLGMpO2Nhc2UgMjM6cmV0dXJuIG1pKGEsYixjKTtjYXNlIDI0OnJldHVybiBtaShhLGIsYyl9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTtcbn07ZnVuY3Rpb24gaWsoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLmZsYWdzPTA7dGhpcy5sYXN0RWZmZWN0PXRoaXMuZmlyc3RFZmZlY3Q9dGhpcy5uZXh0RWZmZWN0PW51bGw7dGhpcy5jaGlsZExhbmVzPXRoaXMubGFuZXM9MDt0aGlzLmFsdGVybmF0ZT1udWxsfWZ1bmN0aW9uIG5oKGEsYixjLGQpe3JldHVybiBuZXcgaWsoYSxiLGMsZCl9ZnVuY3Rpb24gamkoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1cbmZ1bmN0aW9uIGhrKGEpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBqaShhKT8xOjA7aWYodm9pZCAwIT09YSYmbnVsbCE9PWEpe2E9YS4kJHR5cGVvZjtpZihhPT09QWEpcmV0dXJuIDExO2lmKGE9PT1EYSlyZXR1cm4gMTR9cmV0dXJuIDJ9XG5mdW5jdGlvbiBUZyhhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO251bGw9PT1jPyhjPW5oKGEudGFnLGIsYS5rZXksYS5tb2RlKSxjLmVsZW1lbnRUeXBlPWEuZWxlbWVudFR5cGUsYy50eXBlPWEudHlwZSxjLnN0YXRlTm9kZT1hLnN0YXRlTm9kZSxjLmFsdGVybmF0ZT1hLGEuYWx0ZXJuYXRlPWMpOihjLnBlbmRpbmdQcm9wcz1iLGMudHlwZT1hLnR5cGUsYy5mbGFncz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcztjLmxhbmVzPWEubGFuZXM7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntsYW5lczpiLmxhbmVzLGZpcnN0Q29udGV4dDpiLmZpcnN0Q29udGV4dH07XG5jLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIFZnKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlqaShhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm4gWGcoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSBIYTpnPTg7ZXw9MTY7YnJlYWs7Y2FzZSB3YTpnPTg7ZXw9MTticmVhaztjYXNlIHhhOnJldHVybiBhPW5oKDEyLGMsYixlfDgpLGEuZWxlbWVudFR5cGU9eGEsYS50eXBlPXhhLGEubGFuZXM9ZixhO2Nhc2UgQmE6cmV0dXJuIGE9bmgoMTMsYyxiLGUpLGEudHlwZT1CYSxhLmVsZW1lbnRUeXBlPUJhLGEubGFuZXM9ZixhO2Nhc2UgQ2E6cmV0dXJuIGE9bmgoMTksYyxiLGUpLGEuZWxlbWVudFR5cGU9Q2EsYS5sYW5lcz1mLGE7Y2FzZSBJYTpyZXR1cm4gdmkoYyxlLGYsYik7Y2FzZSBKYTpyZXR1cm4gYT1uaCgyNCxjLGIsZSksYS5lbGVtZW50VHlwZT1KYSxhLmxhbmVzPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBhJiZudWxsIT09YSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB5YTpnPTEwO2JyZWFrIGE7Y2FzZSB6YTpnPTk7YnJlYWsgYTtjYXNlIEFhOmc9MTE7YnJlYWsgYTtjYXNlIERhOmc9MTQ7YnJlYWsgYTtjYXNlIEVhOmc9MTY7ZD1udWxsO2JyZWFrIGE7Y2FzZSBGYTpnPTIyO2JyZWFrIGF9dGhyb3cgRXJyb3IoeSgxMzAsbnVsbD09YT9hOnR5cGVvZiBhLFwiXCIpKTt9Yj1uaChnLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5sYW5lcz1mO3JldHVybiBifWZ1bmN0aW9uIFhnKGEsYixjLGQpe2E9bmgoNyxhLGQsYik7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIHZpKGEsYixjLGQpe2E9bmgoMjMsYSxkLGIpO2EuZWxlbWVudFR5cGU9SWE7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIFVnKGEsYixjKXthPW5oKDYsYSxudWxsLGIpO2EubGFuZXM9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIFdnKGEsYixjKXtiPW5oKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmxhbmVzPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gamsoYSxiLGMpe3RoaXMudGFnPWI7dGhpcy5jb250YWluZXJJbmZvPWE7dGhpcy5maW5pc2hlZFdvcms9dGhpcy5waW5nQ2FjaGU9dGhpcy5jdXJyZW50PXRoaXMucGVuZGluZ0NoaWxkcmVuPW51bGw7dGhpcy50aW1lb3V0SGFuZGxlPS0xO3RoaXMucGVuZGluZ0NvbnRleHQ9dGhpcy5jb250ZXh0PW51bGw7dGhpcy5oeWRyYXRlPWM7dGhpcy5jYWxsYmFja05vZGU9bnVsbDt0aGlzLmNhbGxiYWNrUHJpb3JpdHk9MDt0aGlzLmV2ZW50VGltZXM9WmMoMCk7dGhpcy5leHBpcmF0aW9uVGltZXM9WmMoLTEpO3RoaXMuZW50YW5nbGVkTGFuZXM9dGhpcy5maW5pc2hlZExhbmVzPXRoaXMubXV0YWJsZVJlYWRMYW5lcz10aGlzLmV4cGlyZWRMYW5lcz10aGlzLnBpbmdlZExhbmVzPXRoaXMuc3VzcGVuZGVkTGFuZXM9dGhpcy5wZW5kaW5nTGFuZXM9MDt0aGlzLmVudGFuZ2xlbWVudHM9WmMoMCk7dGhpcy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPW51bGx9XG5mdW5jdGlvbiBrayhhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOnRhLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuZnVuY3Rpb24gbGsoYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9SGcoKSxnPUlnKGUpO2E6aWYoYyl7Yz1jLl9yZWFjdEludGVybmFscztiOntpZihaYihjKSE9PWN8fDEhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE3MCkpO3ZhciBoPWM7ZG97c3dpdGNoKGgudGFnKXtjYXNlIDM6aD1oLnN0YXRlTm9kZS5jb250ZXh0O2JyZWFrIGI7Y2FzZSAxOmlmKEZmKGgudHlwZSkpe2g9aC5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYn19aD1oLnJldHVybn13aGlsZShudWxsIT09aCk7dGhyb3cgRXJyb3IoeSgxNzEpKTt9aWYoMT09PWMudGFnKXt2YXIgaz1jLnR5cGU7aWYoRmYoaykpe2M9SWYoYyxrLGgpO2JyZWFrIGF9fWM9aH1lbHNlIGM9Q2Y7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj16ZyhmLGcpO2IucGF5bG9hZD17ZWxlbWVudDphfTtkPXZvaWQgMD09PWQ/bnVsbDpkO251bGwhPT1cbmQmJihiLmNhbGxiYWNrPWQpO0FnKGUsYik7SmcoZSxnLGYpO3JldHVybiBnfWZ1bmN0aW9uIG1rKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA1OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19ZnVuY3Rpb24gbmsoYSxiKXthPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmbnVsbCE9PWEuZGVoeWRyYXRlZCl7dmFyIGM9YS5yZXRyeUxhbmU7YS5yZXRyeUxhbmU9MCE9PWMmJmM8Yj9jOmJ9fWZ1bmN0aW9uIG9rKGEsYil7bmsoYSxiKTsoYT1hLmFsdGVybmF0ZSkmJm5rKGEsYil9ZnVuY3Rpb24gcGsoKXtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIHFrKGEsYixjKXt2YXIgZD1udWxsIT1jJiZudWxsIT1jLmh5ZHJhdGlvbk9wdGlvbnMmJmMuaHlkcmF0aW9uT3B0aW9ucy5tdXRhYmxlU291cmNlc3x8bnVsbDtjPW5ldyBqayhhLGIsbnVsbCE9YyYmITA9PT1jLmh5ZHJhdGUpO2I9bmgoMyxudWxsLG51bGwsMj09PWI/NzoxPT09Yj8zOjApO2MuY3VycmVudD1iO2Iuc3RhdGVOb2RlPWM7eGcoYik7YVtmZl09Yy5jdXJyZW50O2NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtpZihkKWZvcihhPTA7YTxkLmxlbmd0aDthKyspe2I9ZFthXTt2YXIgZT1iLl9nZXRWZXJzaW9uO2U9ZShiLl9zb3VyY2UpO251bGw9PWMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT9jLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9W2IsZV06Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhLnB1c2goYixlKX10aGlzLl9pbnRlcm5hbFJvb3Q9Y31cbnFrLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSl7bGsoYSx0aGlzLl9pbnRlcm5hbFJvb3QsbnVsbCxudWxsKX07cWsucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9pbnRlcm5hbFJvb3QsYj1hLmNvbnRhaW5lckluZm87bGsobnVsbCxhLG51bGwsZnVuY3Rpb24oKXtiW2ZmXT1udWxsfSl9O2Z1bmN0aW9uIHJrKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1cbmZ1bmN0aW9uIHNrKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgcWsoYSwwLGI/e2h5ZHJhdGU6ITB9OnZvaWQgMCl9XG5mdW5jdGlvbiB0ayhhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXt2YXIgZz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2guY2FsbChhKX19bGsoYixnLGEsZSl9ZWxzZXtmPWMuX3JlYWN0Um9vdENvbnRhaW5lcj1zayhjLGQpO2c9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1tayhnKTtrLmNhbGwoYSl9fVhqKGZ1bmN0aW9uKCl7bGsoYixnLGEsZSl9KX1yZXR1cm4gbWsoZyl9ZWM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDQsYik7b2soYSw0KX19O2ZjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCk7SmcoYSw2NzEwODg2NCxiKTtvayhhLDY3MTA4ODY0KX19O1xuZ2M9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKSxjPUlnKGEpO0pnKGEsYyxiKTtvayhhLGMpfX07aGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYigpfTtcbnliPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYil7Y2FzZSBcImlucHV0XCI6YWIoYSxjKTtiPWMubmFtZTtpZihcInJhZGlvXCI9PT1jLnR5cGUmJm51bGwhPWIpe2ZvcihjPWE7Yy5wYXJlbnROb2RlOyljPWMucGFyZW50Tm9kZTtjPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIrSlNPTi5zdHJpbmdpZnkoXCJcIitiKSsnXVt0eXBlPVwicmFkaW9cIl0nKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdO2lmKGQhPT1hJiZkLmZvcm09PT1hLmZvcm0pe3ZhciBlPURiKGQpO2lmKCFlKXRocm93IEVycm9yKHkoOTApKTtXYShkKTthYihkLGUpfX19YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYSxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLnZhbHVlLG51bGwhPWImJmZiKGEsISFjLm11bHRpcGxlLGIsITEpfX07R2I9V2o7XG5IYj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVg7WHw9NDt0cnl7cmV0dXJuIGdnKDk4LGEuYmluZChudWxsLGIsYyxkLGUpKX1maW5hbGx5e1g9ZiwwPT09WCYmKHdqKCksaWcoKSl9fTtJYj1mdW5jdGlvbigpezA9PT0oWCY0OSkmJihWaigpLE9qKCkpfTtKYj1mdW5jdGlvbihhLGIpe3ZhciBjPVg7WHw9Mjt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX07ZnVuY3Rpb24gdWsoYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4ga2soYSxiLG51bGwsYyl9dmFyIHZrPXtFdmVudHM6W0NiLHVlLERiLEViLEZiLE9qLHtjdXJyZW50OiExfV19LHdrPXtmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3YyxidW5kbGVUeXBlOjAsdmVyc2lvbjpcIjE3LjAuMlwiLHJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn07XG52YXIgeGs9e2J1bmRsZVR5cGU6d2suYnVuZGxlVHlwZSx2ZXJzaW9uOndrLnZlcnNpb24scmVuZGVyZXJQYWNrYWdlTmFtZTp3ay5yZW5kZXJlclBhY2thZ2VOYW1lLHJlbmRlcmVyQ29uZmlnOndrLnJlbmRlcmVyQ29uZmlnLG92ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVSZW5hbWVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLG92ZXJyaWRlUHJvcHNEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wc1JlbmFtZVBhdGg6bnVsbCxzZXRTdXNwZW5zZUhhbmRsZXI6bnVsbCxzY2hlZHVsZVVwZGF0ZTpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOnJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1jYyhhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6d2suZmluZEZpYmVyQnlIb3N0SW5zdGFuY2V8fFxucGssZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoOm51bGwsc2NoZWR1bGVSZWZyZXNoOm51bGwsc2NoZWR1bGVSb290Om51bGwsc2V0UmVmcmVzaEhhbmRsZXI6bnVsbCxnZXRDdXJyZW50RmliZXI6bnVsbH07aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pe3ZhciB5az1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoIXlrLmlzRGlzYWJsZWQmJnlrLnN1cHBvcnRzRmliZXIpdHJ5e0xmPXlrLmluamVjdCh4ayksTWY9eWt9Y2F0Y2goYSl7fX1leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPXZrO2V4cG9ydHMuY3JlYXRlUG9ydGFsPXVrO1xuZXhwb3J0cy5maW5kRE9NTm9kZT1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxzO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyBFcnJvcih5KDE4OCkpO3Rocm93IEVycm9yKHkoMjY4LE9iamVjdC5rZXlzKGEpKSk7fWE9Y2MoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfTtleHBvcnRzLmZsdXNoU3luYz1mdW5jdGlvbihhLGIpe3ZhciBjPVg7aWYoMCE9PShjJjQ4KSlyZXR1cm4gYShiKTtYfD0xO3RyeXtpZihhKXJldHVybiBnZyg5OSxhLmJpbmQobnVsbCxiKSl9ZmluYWxseXtYPWMsaWcoKX19O2V4cG9ydHMuaHlkcmF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIHRrKG51bGwsYSxiLCEwLGMpfTtcbmV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITEsYyl9O2V4cG9ydHMudW5tb3VudENvbXBvbmVudEF0Tm9kZT1mdW5jdGlvbihhKXtpZighcmsoYSkpdGhyb3cgRXJyb3IoeSg0MCkpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KFhqKGZ1bmN0aW9uKCl7dGsobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbDthW2ZmXT1udWxsfSl9KSwhMCk6ITF9O2V4cG9ydHMudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM9V2o7ZXhwb3J0cy51bnN0YWJsZV9jcmVhdGVQb3J0YWw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdWsoYSxiLDI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsKX07XG5leHBvcnRzLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyPWZ1bmN0aW9uKGEsYixjLGQpe2lmKCFyayhjKSl0aHJvdyBFcnJvcih5KDIwMCkpO2lmKG51bGw9PWF8fHZvaWQgMD09PWEuX3JlYWN0SW50ZXJuYWxzKXRocm93IEVycm9yKHkoMzgpKTtyZXR1cm4gdGsoYSxiLGMsITEsZCl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MC4yMC4yXG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBmLGcsaCxrO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBsPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIGwubm93KCl9fWVsc2V7dmFyIHA9RGF0ZSxxPXAubm93KCk7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gcC5ub3coKS1xfX1cbmlmKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgTWVzc2FnZUNoYW5uZWwpe3ZhciB0PW51bGwsdT1udWxsLHc9ZnVuY3Rpb24oKXtpZihudWxsIT09dCl0cnl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0KCEwLGEpO3Q9bnVsbH1jYXRjaChiKXt0aHJvdyBzZXRUaW1lb3V0KHcsMCksYjt9fTtmPWZ1bmN0aW9uKGEpe251bGwhPT10P3NldFRpbWVvdXQoZiwwLGEpOih0PWEsc2V0VGltZW91dCh3LDApKX07Zz1mdW5jdGlvbihhLGIpe3U9c2V0VGltZW91dChhLGIpfTtoPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpfTtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2s9ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbigpe319ZWxzZXt2YXIgeD13aW5kb3cuc2V0VGltZW91dCx5PXdpbmRvdy5jbGVhclRpbWVvdXQ7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlKXt2YXIgej1cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcmVhY3QtcG9seWZpbGxzXCIpO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiB6JiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKX12YXIgQT0hMSxCPW51bGwsQz0tMSxEPTUsRT0wO2V4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4gZXhwb3J0cy51bnN0YWJsZV9ub3coKT49XG5FfTtrPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKGEpezA+YXx8MTI1PGE/Y29uc29sZS5lcnJvcihcImZvcmNlRnJhbWVSYXRlIHRha2VzIGEgcG9zaXRpdmUgaW50IGJldHdlZW4gMCBhbmQgMTI1LCBmb3JjaW5nIGZyYW1lIHJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHN1cHBvcnRlZFwiKTpEPTA8YT9NYXRoLmZsb29yKDFFMy9hKTo1fTt2YXIgRj1uZXcgTWVzc2FnZUNoYW5uZWwsRz1GLnBvcnQyO0YucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7aWYobnVsbCE9PUIpe3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7RT1hK0Q7dHJ5e0IoITAsYSk/Ry5wb3N0TWVzc2FnZShudWxsKTooQT0hMSxCPW51bGwpfWNhdGNoKGIpe3Rocm93IEcucG9zdE1lc3NhZ2UobnVsbCksYjt9fWVsc2UgQT0hMX07Zj1mdW5jdGlvbihhKXtCPWE7QXx8KEE9ITAsRy5wb3N0TWVzc2FnZShudWxsKSl9O2c9ZnVuY3Rpb24oYSxiKXtDPVxueChmdW5jdGlvbigpe2EoZXhwb3J0cy51bnN0YWJsZV9ub3coKSl9LGIpfTtoPWZ1bmN0aW9uKCl7eShDKTtDPS0xfX1mdW5jdGlvbiBIKGEsYil7dmFyIGM9YS5sZW5ndGg7YS5wdXNoKGIpO2E6Zm9yKDs7KXt2YXIgZD1jLTE+Pj4xLGU9YVtkXTtpZih2b2lkIDAhPT1lJiYwPEkoZSxiKSlhW2RdPWIsYVtjXT1lLGM9ZDtlbHNlIGJyZWFrIGF9fWZ1bmN0aW9uIEooYSl7YT1hWzBdO3JldHVybiB2b2lkIDA9PT1hP251bGw6YX1cbmZ1bmN0aW9uIEsoYSl7dmFyIGI9YVswXTtpZih2b2lkIDAhPT1iKXt2YXIgYz1hLnBvcCgpO2lmKGMhPT1iKXthWzBdPWM7YTpmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTspe3ZhciBtPTIqKGQrMSktMSxuPWFbbV0sdj1tKzEscj1hW3ZdO2lmKHZvaWQgMCE9PW4mJjA+SShuLGMpKXZvaWQgMCE9PXImJjA+SShyLG4pPyhhW2RdPXIsYVt2XT1jLGQ9dik6KGFbZF09bixhW21dPWMsZD1tKTtlbHNlIGlmKHZvaWQgMCE9PXImJjA+SShyLGMpKWFbZF09cixhW3ZdPWMsZD12O2Vsc2UgYnJlYWsgYX19cmV0dXJuIGJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gSShhLGIpe3ZhciBjPWEuc29ydEluZGV4LWIuc29ydEluZGV4O3JldHVybiAwIT09Yz9jOmEuaWQtYi5pZH12YXIgTD1bXSxNPVtdLE49MSxPPW51bGwsUD0zLFE9ITEsUj0hMSxTPSExO1xuZnVuY3Rpb24gVChhKXtmb3IodmFyIGI9SihNKTtudWxsIT09Yjspe2lmKG51bGw9PT1iLmNhbGxiYWNrKUsoTSk7ZWxzZSBpZihiLnN0YXJ0VGltZTw9YSlLKE0pLGIuc29ydEluZGV4PWIuZXhwaXJhdGlvblRpbWUsSChMLGIpO2Vsc2UgYnJlYWs7Yj1KKE0pfX1mdW5jdGlvbiBVKGEpe1M9ITE7VChhKTtpZighUilpZihudWxsIT09SihMKSlSPSEwLGYoVik7ZWxzZXt2YXIgYj1KKE0pO251bGwhPT1iJiZnKFUsYi5zdGFydFRpbWUtYSl9fVxuZnVuY3Rpb24gVihhLGIpe1I9ITE7UyYmKFM9ITEsaCgpKTtRPSEwO3ZhciBjPVA7dHJ5e1QoYik7Zm9yKE89SihMKTtudWxsIT09TyYmKCEoTy5leHBpcmF0aW9uVGltZT5iKXx8YSYmIWV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQoKSk7KXt2YXIgZD1PLmNhbGxiYWNrO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXtPLmNhbGxiYWNrPW51bGw7UD1PLnByaW9yaXR5TGV2ZWw7dmFyIGU9ZChPLmV4cGlyYXRpb25UaW1lPD1iKTtiPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGU/Ty5jYWxsYmFjaz1lOk89PT1KKEwpJiZLKEwpO1QoYil9ZWxzZSBLKEwpO089SihMKX1pZihudWxsIT09Tyl2YXIgbT0hMDtlbHNle3ZhciBuPUooTSk7bnVsbCE9PW4mJmcoVSxuLnN0YXJ0VGltZS1iKTttPSExfXJldHVybiBtfWZpbmFsbHl7Tz1udWxsLFA9YyxRPSExfX12YXIgVz1rO2V4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7XG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eT00O2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZz1udWxsO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe2EuY2FsbGJhY2s9bnVsbH07ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe1J8fFF8fChSPSEwLGYoVikpfTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIFB9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gSihMKX07XG5leHBvcnRzLnVuc3RhYmxlX25leHQ9ZnVuY3Rpb24oYSl7c3dpdGNoKFApe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOnZhciBiPTM7YnJlYWs7ZGVmYXVsdDpiPVB9dmFyIGM9UDtQPWI7dHJ5e3JldHVybiBhKCl9ZmluYWxseXtQPWN9fTtleHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludD1XO2V4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9UDtQPWE7dHJ5e3JldHVybiBiKCl9ZmluYWxseXtQPWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jPyhjPWMuZGVsYXksYz1cIm51bWJlclwiPT09dHlwZW9mIGMmJjA8Yz9kK2M6ZCk6Yz1kO3N3aXRjaChhKXtjYXNlIDE6dmFyIGU9LTE7YnJlYWs7Y2FzZSAyOmU9MjUwO2JyZWFrO2Nhc2UgNTplPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmU9MUU0O2JyZWFrO2RlZmF1bHQ6ZT01RTN9ZT1jK2U7YT17aWQ6TisrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpjLGV4cGlyYXRpb25UaW1lOmUsc29ydEluZGV4Oi0xfTtjPmQ/KGEuc29ydEluZGV4PWMsSChNLGEpLG51bGw9PT1KKEwpJiZhPT09SihNKSYmKFM/aCgpOlM9ITAsZyhVLGMtZCkpKTooYS5zb3J0SW5kZXg9ZSxIKEwsYSksUnx8UXx8KFI9ITAsZihWKSkpO3JldHVybiBhfTtcbmV4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPVA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9UDtQPWI7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e1A9Y319fTtcbiIsImltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4vb3duZXJEb2N1bWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lcldpbmRvdyhub2RlKSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KG5vZGUpO1xuICByZXR1cm4gZG9jICYmIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4vb3duZXJXaW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwc3VlZG9FbGVtZW50KSB7XG4gIHJldHVybiBvd25lcldpbmRvdyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBzdWVkb0VsZW1lbnQpO1xufSIsInZhciByVXBwZXIgPSAvKFtBLVpdKS9nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoclVwcGVyLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cbmltcG9ydCBoeXBoZW5hdGUgZnJvbSAnLi9oeXBoZW5hdGUnO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufSIsInZhciBzdXBwb3J0ZWRUcmFuc2Zvcm1zID0gL14oKHRyYW5zbGF0ZXxyb3RhdGV8c2NhbGUpKFh8WXxafDNkKT98bWF0cml4KDNkKT98cGVyc3BlY3RpdmV8c2tldyhYfFkpPykkL2k7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgc3VwcG9ydGVkVHJhbnNmb3Jtcy50ZXN0KHZhbHVlKSk7XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSAnLi9nZXRDb21wdXRlZFN0eWxlJztcbmltcG9ydCBoeXBoZW5hdGUgZnJvbSAnLi9oeXBoZW5hdGVTdHlsZSc7XG5pbXBvcnQgaXNUcmFuc2Zvcm0gZnJvbSAnLi9pc1RyYW5zZm9ybSc7XG5cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHByb3BlcnR5KSB7XG4gIHZhciBjc3MgPSAnJztcbiAgdmFyIHRyYW5zZm9ybXMgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKHByb3BlcnR5KSkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKGh5cGhlbmF0ZShwcm9wZXJ0eSkpO1xuICB9XG5cbiAgT2JqZWN0LmtleXMocHJvcGVydHkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnR5W2tleV07XG5cbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGh5cGhlbmF0ZShrZXkpKTtcbiAgICB9IGVsc2UgaWYgKGlzVHJhbnNmb3JtKGtleSkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0ga2V5ICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzICs9IGh5cGhlbmF0ZShrZXkpICsgXCI6IFwiICsgdmFsdWUgKyBcIjtcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFuc2Zvcm1zKSB7XG4gICAgY3NzICs9IFwidHJhbnNmb3JtOiBcIiArIHRyYW5zZm9ybXMgKyBcIjtcIjtcbiAgfVxuXG4gIG5vZGUuc3R5bGUuY3NzVGV4dCArPSBcIjtcIiArIGNzcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9