'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var require$$1 = _interopDefault(require('prop-types'));
var reactDom = _interopDefault(require('react-dom'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var FormContext = React__default.createContext({ data: null });

var FormConsumer = function (_Component) {
    inherits(FormConsumer, _Component);

    function FormConsumer() {
        classCallCheck(this, FormConsumer);
        return possibleConstructorReturn(this, (FormConsumer.__proto__ || Object.getPrototypeOf(FormConsumer)).apply(this, arguments));
    }

    createClass(FormConsumer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                FormContext.Consumer,
                null,
                function (props) {
                    return _this2.props.children(props);
                }
            );
        }
    }]);
    return FormConsumer;
}(React.Component);

var FormItemError = function (_Component) {
    inherits(FormItemError, _Component);

    function FormItemError() {
        classCallCheck(this, FormItemError);
        return possibleConstructorReturn(this, (FormItemError.__proto__ || Object.getPrototypeOf(FormItemError)).apply(this, arguments));
    }

    createClass(FormItemError, [{
        key: "render",
        value: function render() {
            var data = this.props.data;

            if (!data || !data.errors || !data.errors[this.props.name]) return null;

            return React__default.createElement(
                "p",
                { className: "text-danger" },
                data.errors[this.props.name].error
            );
        }
    }]);
    return FormItemError;
}(React.Component);

var CheckBox = function (_Component) {
    inherits(CheckBox, _Component);

    function CheckBox() {
        classCallCheck(this, CheckBox);
        return possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
    }

    createClass(CheckBox, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                FormConsumer,
                null,
                function (data) {
                    return _this2.renderCheckBox(data);
                }
            );
        }
    }, {
        key: "renderCheckBox",
        value: function renderCheckBox(data) {
            var _this3 = this;

            var props = _extends({}, this.props);
            if (props.children) delete props.children;
            if (props.onChangeValue) delete props.onChangeValue;
            return React__default.createElement(
                "div",
                { className: "form-check" },
                React__default.createElement("input", _extends({
                    type: "checkbox",
                    checked: this.props.value,
                    onChange: function onChange(e) {
                        return _this3.props.onChangeValue(e.target.checked);
                    }
                }, props)),
                this.renderLabel(data),
                React__default.createElement(FormItemError, { name: this.props.name, data: data })
            );
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(data) {
            if (this.props.children.length) {
                return React__default.createElement(
                    "label",
                    { className: "form-check-label", htmlFor: this.props.id },
                    this.props.children
                );
            }
        }
    }]);
    return CheckBox;
}(React.Component);


CheckBox.defaultProps = {
    name: 'checkbox',
    id: 'checkbox',
    className: 'form-check-input',
    onChangeValue: function onChangeValue(checked) {}
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

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

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  polyfill: polyfill
});

var ChildMapping = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;



/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React__default.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, React__default.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, React__default.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React__default.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
});

unwrapExports(ChildMapping);
var ChildMapping_1 = ChildMapping.getChildMapping;
var ChildMapping_2 = ChildMapping.mergeChildMappings;
var ChildMapping_3 = ChildMapping.getInitialChildMapping;
var ChildMapping_4 = ChildMapping.getNextChildMapping;

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require$$1);

var _react = _interopRequireDefault(React__default);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(TransitionGroup_1);

var constant = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.ACTION = exports.TYPE = exports.POSITION = void 0;
var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
exports.POSITION = POSITION;
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default'
};
exports.TYPE = TYPE;
var ACTION = {
  SHOW: 0,
  CLEAR: 1,
  DID_MOUNT: 2,
  WILL_UNMOUNT: 3,
  ON_CHANGE: 4
};
exports.ACTION = ACTION;
});

unwrapExports(constant);
var constant_1 = constant.ACTION;
var constant_2 = constant.TYPE;
var constant_3 = constant.POSITION;

var propValidator = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isValidDelay = isValidDelay;
exports.objectValues = objectValues;
exports.falseOrElement = exports.falseOrDelay = void 0;



function isValidDelay(val) {
  return typeof val === 'number' && !isNaN(val) && val > 0;
}

function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}

function withRequired(fn) {
  fn.isRequired = function (props, propName, componentName) {
    var prop = props[propName];

    if (typeof prop === 'undefined') {
      return new Error("The prop " + propName + " is marked as required in \n      " + componentName + ", but its value is undefined.");
    }

    fn(props, propName, componentName);
  };

  return fn;
}

var falseOrDelay = withRequired(function (props, propName, componentName) {
  var prop = props[propName];

  if (prop !== false && !isValidDelay(prop)) {
    return new Error(componentName + " expect " + propName + " \n      to be a valid Number > 0 or equal to false. " + prop + " given.");
  }

  return null;
});
exports.falseOrDelay = falseOrDelay;
var falseOrElement = withRequired(function (props, propName, componentName) {
  var prop = props[propName];

  if (prop !== false && !(0, React__default.isValidElement)(prop)) {
    return new Error(componentName + " expect " + propName + " \n      to be a valid react element or equal to false. " + prop + " given.");
  }

  return null;
});
exports.falseOrElement = falseOrElement;
});

unwrapExports(propValidator);
var propValidator_1 = propValidator.isValidDelay;
var propValidator_2 = propValidator.objectValues;
var propValidator_3 = propValidator.falseOrElement;
var propValidator_4 = propValidator.falseOrDelay;

var ProgressBar_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(classnames);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ProgressBar(_ref) {
  var _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      isProgressDone = _ref.isProgressDone,
      rtl = _ref.rtl;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1,
    transform: controlledProgress ? "scaleX(" + progress + ")" : null
  });

  var classNames = (0, _classnames.default)('Toastify__progress-bar', controlledProgress ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated', "Toastify__progress-bar--" + type, {
    'Toastify__progress-bar--rtl': rtl
  }, className);
  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && isProgressDone ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && !isProgressDone ? null : closeToast, _animationEvent);
  return _react.default.createElement("div", _extends({
    className: classNames,
    style: style
  }, animationEvent));
}

ProgressBar.propTypes = {
  /**
   * The animation delay which determine when to close the toast
   */
  delay: propValidator.falseOrDelay.isRequired,

  /**
   * Whether or not the animation is running or paused
   */
  isRunning: _propTypes.default.bool.isRequired,

  /**
   * Func to close the current toast
   */
  closeToast: _propTypes.default.func.isRequired,

  /**
   * Support rtl content
   */
  rtl: _propTypes.default.bool.isRequired,

  /**
   * Optional type : info, success ...
   */
  type: _propTypes.default.string,

  /**
   * Hide or not the progress bar
   */
  hide: _propTypes.default.bool,

  /**
   * Optionnal className
   */
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * Controlled progress value
   */
  progress: _propTypes.default.number,

  /**
   * Tell wether or not controlled progress bar is used
   */
  controlledProgress: _propTypes.default.bool,

  /**
   * Helper to close the toast when using controlled progress value
   */
  isProgressDone: _propTypes.default.bool
};
ProgressBar.defaultProps = {
  type: constant.TYPE.DEFAULT,
  hide: false
};
var _default = ProgressBar;
exports.default = _default;
});

unwrapExports(ProgressBar_1);

var Toast_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(classnames);

var _ProgressBar = _interopRequireDefault(ProgressBar_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

var noop = function noop() {};

var Toast =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Toast, _Component);

  function Toast() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isRunning: true,
      preventExitTransition: false
    };
    _this.flag = {
      canCloseOnClick: true,
      canDrag: false
    };
    _this.drag = {
      start: 0,
      x: 0,
      y: 0,
      deltaX: 0,
      removalDistance: 0
    };
    _this.ref = null;

    _this.pauseToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: false
        });
      }
    };

    _this.playToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: true
        });
      }
    };

    _this.onDragStart = function (e) {
      _this.flag.canCloseOnClick = true;
      _this.flag.canDrag = true;
      _this.ref.style.transition = '';
      _this.drag.start = _this.drag.x = getX(e.nativeEvent);
      _this.drag.removalDistance = _this.ref.offsetWidth * (_this.props.draggablePercent / 100);
    };

    _this.onDragMove = function (e) {
      if (_this.flag.canDrag) {
        if (_this.state.isRunning) {
          _this.pauseToast();
        }

        _this.drag.x = getX(e);
        _this.drag.deltaX = _this.drag.x - _this.drag.start; // prevent false positif during a toast click

        _this.drag.start !== _this.drag.x && (_this.flag.canCloseOnClick = false);
        _this.ref.style.transform = "translateX(" + _this.drag.deltaX + "px)";
        _this.ref.style.opacity = 1 - Math.abs(_this.drag.deltaX / _this.drag.removalDistance);
      }
    };

    _this.onDragEnd = function (e) {
      if (_this.flag.canDrag) {
        _this.flag.canDrag = false;

        if (Math.abs(_this.drag.deltaX) > _this.drag.removalDistance) {
          _this.setState({
            preventExitTransition: true
          }, _this.props.closeToast);

          return;
        }

        _this.drag.y = getY(e);
        _this.ref.style.transition = 'transform 0.2s, opacity 0.2s';
        _this.ref.style.transform = 'translateX(0)';
        _this.ref.style.opacity = 1;
      }
    };

    _this.onDragTransitionEnd = function () {
      var _this$ref$getBounding = _this.ref.getBoundingClientRect(),
          top = _this$ref$getBounding.top,
          bottom = _this$ref$getBounding.bottom,
          left = _this$ref$getBounding.left,
          right = _this$ref$getBounding.right;

      if (_this.props.pauseOnHover && _this.drag.x >= left && _this.drag.x <= right && _this.drag.y >= top && _this.drag.y <= bottom) {
        _this.pauseToast();
      } else {
        _this.playToast();
      }
    };

    return _this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.onOpen(this.props.children.props);

    if (this.props.draggable) {
      this.bindDragEvents();
    } // Maybe I could bind the event in the ToastContainer and rely on delegation


    if (this.props.pauseOnFocusLoss) {
      this.bindFocusEvents();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.draggable !== this.props.draggable) {
      if (this.props.draggable) {
        this.bindDragEvents();
      } else {
        this.unbindDragEvents();
      }
    }

    if (prevProps.pauseOnFocusLoss !== this.props.pauseOnFocusLoss) {
      if (this.props.pauseOnFocusLoss) {
        this.bindFocusEvents();
      } else {
        this.unbindFocusEvents();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.onClose(this.props.children.props);

    if (this.props.draggable) {
      this.unbindDragEvents();
    }

    if (this.props.pauseOnFocusLoss) {
      this.unbindFocusEvents();
    }
  };

  _proto.bindFocusEvents = function bindFocusEvents() {
    window.addEventListener('focus', this.playToast);
    window.addEventListener('blur', this.pauseToast);
  };

  _proto.unbindFocusEvents = function unbindFocusEvents() {
    window.removeEventListener('focus', this.playToast);
    window.removeEventListener('blur', this.pauseToast);
  };

  _proto.bindDragEvents = function bindDragEvents() {
    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('touchmove', this.onDragMove);
    document.addEventListener('touchend', this.onDragEnd);
  };

  _proto.unbindDragEvents = function unbindDragEvents() {
    document.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('mouseup', this.onDragEnd);
    document.removeEventListener('touchmove', this.onDragMove);
    document.removeEventListener('touchend', this.onDragEnd);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        closeButton = _this$props.closeButton,
        children = _this$props.children,
        autoClose = _this$props.autoClose,
        pauseOnHover = _this$props.pauseOnHover,
        closeOnClick = _this$props.closeOnClick,
        type = _this$props.type,
        hideProgressBar = _this$props.hideProgressBar,
        closeToast = _this$props.closeToast,
        Transition = _this$props.transition,
        position = _this$props.position,
        onExited = _this$props.onExited,
        className = _this$props.className,
        bodyClassName = _this$props.bodyClassName,
        progressClassName = _this$props.progressClassName,
        progressStyle = _this$props.progressStyle,
        updateId = _this$props.updateId,
        role = _this$props.role,
        progress = _this$props.progress,
        isProgressDone = _this$props.isProgressDone,
        rtl = _this$props.rtl;
    var toastProps = {
      className: (0, _classnames.default)('Toastify__toast', "Toastify__toast--" + type, {
        'Toastify__toast--rtl': rtl
      }, className)
    };

    if (autoClose && pauseOnHover) {
      toastProps.onMouseEnter = this.pauseToast;
      toastProps.onMouseLeave = this.playToast;
    } // prevent toast from closing when user drags the toast


    if (closeOnClick) {
      toastProps.onClick = function () {
        return _this2.flag.canCloseOnClick && closeToast();
      };
    }

    var controlledProgress = parseFloat(progress) === progress;
    return _react.default.createElement(Transition, {
      in: this.props.in,
      appear: true,
      unmountOnExit: true,
      onExited: onExited,
      position: position,
      preventExitTransition: this.state.preventExitTransition
    }, _react.default.createElement("div", _extends({}, toastProps, {
      ref: function ref(_ref) {
        return _this2.ref = _ref;
      },
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onTransitionEnd: this.onDragTransitionEnd
    }), _react.default.createElement("div", _extends({}, this.props.in && {
      role: role
    }, {
      className: (0, _classnames.default)('Toastify__toast-body', bodyClassName)
    }), children), closeButton && closeButton, (autoClose || controlledProgress) && _react.default.createElement(_ProgressBar.default, _extends({}, updateId && !controlledProgress ? {
      key: "pb-" + updateId
    } : {}, {
      rtl: rtl,
      delay: autoClose,
      isRunning: this.state.isRunning,
      closeToast: closeToast,
      hide: hideProgressBar,
      type: type,
      style: progressStyle,
      className: progressClassName,
      controlledProgress: controlledProgress,
      isProgressDone: isProgressDone,
      progress: progress
    }))));
  };

  return Toast;
}(_react.Component);

Toast.propTypes = {
  closeButton: propValidator.falseOrElement.isRequired,
  autoClose: propValidator.falseOrDelay.isRequired,
  children: _propTypes.default.node.isRequired,
  closeToast: _propTypes.default.func.isRequired,
  position: _propTypes.default.oneOf((0, propValidator.objectValues)(constant.POSITION)).isRequired,
  pauseOnHover: _propTypes.default.bool.isRequired,
  pauseOnFocusLoss: _propTypes.default.bool.isRequired,
  closeOnClick: _propTypes.default.bool.isRequired,
  transition: _propTypes.default.func.isRequired,
  rtl: _propTypes.default.bool.isRequired,
  hideProgressBar: _propTypes.default.bool.isRequired,
  draggable: _propTypes.default.bool.isRequired,
  draggablePercent: _propTypes.default.number.isRequired,
  in: _propTypes.default.bool,
  onExited: _propTypes.default.func,
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func,
  type: _propTypes.default.oneOf((0, propValidator.objectValues)(constant.TYPE)),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  bodyClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  progressClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  progressStyle: _propTypes.default.object,
  progress: _propTypes.default.number,
  isProgressDone: _propTypes.default.bool,
  updateId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  ariaLabel: _propTypes.default.string
};
Toast.defaultProps = {
  type: constant.TYPE.DEFAULT,
  in: true,
  onOpen: noop,
  onClose: noop,
  className: null,
  bodyClassName: null,
  progressClassName: null,
  updateId: null,
  role: 'alert'
};
var _default = Toast;
exports.default = _default;
});

unwrapExports(Toast_1);

var CloseButton_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      ariaLabel = _ref.ariaLabel;
  return _react.default.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + type,
    type: "button",
    onClick: closeToast,
    "aria-label": ariaLabel
  }, "\u2716");
}

CloseButton.propTypes = {
  closeToast: _propTypes.default.func,
  arialLabel: _propTypes.default.string
};
CloseButton.defaultProps = {
  ariaLabel: 'close'
};
var _default = CloseButton;
exports.default = _default;
});

unwrapExports(CloseButton_1);

var PropTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.classNamesShape;
var PropTypes_2 = PropTypes.timeoutsShape;

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes$$1 = _interopRequireWildcard(require$$1);

var _react = _interopRequireDefault(React__default);

var _reactDom = _interopRequireDefault(reactDom);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$$1.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$$1.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$$1.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$$1.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$$1.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$$1.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   *  appear: 500,
   * }}
   * ```
   *
   * If the value of appear is not set, then the value from enter is taken.
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt = process.env.NODE_ENV !== "production" ? PropTypes.timeoutsShape : {};    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$$1.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$$1.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$$1.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$$1.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$$1.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$$1.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

exports.default = _default;
});

unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var cssTransition = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = _default;

var _react = _interopRequireDefault(React__default);

var _Transition = _interopRequireDefault(Transition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

function _default(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition;
  return function Animation(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        props = _objectWithoutPropertiesLoose(_ref2, ["children", "position", "preventExitTransition"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var enterDuration, exitDuration;

    if (Array.isArray(duration) && duration.length === 2) {
      enterDuration = duration[0];
      exitDuration = duration[1];
    } else {
      enterDuration = exitDuration = duration;
    }

    var onEnter = function onEnter(node) {
      node.classList.add(enterClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = enterDuration * 0.001 + "s";
    };

    var onEntered = function onEntered(node) {
      node.classList.remove(enterClassName);
      node.style.cssText = '';
    };

    var onExit = function onExit(node) {
      node.classList.add(exitClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = exitDuration * 0.001 + "s";
    };

    return _react.default.createElement(_Transition.default, _extends({}, props, {
      timeout: preventExitTransition ? 0 : {
        enter: enterDuration,
        exit: exitDuration
      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? noop : onExit
    }), children);
  };
}
});

unwrapExports(cssTransition);

var Transitions = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.Flip = exports.Zoom = exports.Slide = exports.Bounce = void 0;

var _cssTransition = _interopRequireDefault(cssTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bounce = (0, _cssTransition.default)({
  enter: 'Toastify__bounce-enter',
  exit: 'Toastify__bounce-exit',
  appendPosition: true
});
exports.Bounce = Bounce;
var Slide = (0, _cssTransition.default)({
  enter: 'Toastify__slide-enter',
  exit: 'Toastify__slide-exit',
  duration: [450, 750],
  appendPosition: true
});
exports.Slide = Slide;
var Zoom = (0, _cssTransition.default)({
  enter: 'Toastify__zoom-enter',
  exit: 'Toastify__zoom-exit'
});
exports.Zoom = Zoom;
var Flip = (0, _cssTransition.default)({
  enter: 'Toastify__flip-enter',
  exit: 'Toastify__flip-exit'
});
exports.Flip = Flip;
});

unwrapExports(Transitions);
var Transitions_1 = Transitions.Flip;
var Transitions_2 = Transitions.Zoom;
var Transitions_3 = Transitions.Slide;
var Transitions_4 = Transitions.Bounce;

var eventManager_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;
var eventManager = {
  list: new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event) {
    this.list.delete(event);
    return this;
  },
  emit: function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!this.list.has(event)) {
      return false;
    }

    this.list.get(event).forEach(function (callback) {
      return setTimeout(function () {
        return callback.call.apply(callback, [null].concat(args));
      }, 0);
    });
    return true;
  }
};
var _default = eventManager;
exports.default = _default;
});

unwrapExports(eventManager_1);

var ToastContainer_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(classnames);

var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

var _Toast = _interopRequireDefault(Toast_1);

var _CloseButton = _interopRequireDefault(CloseButton_1);





var _eventManager = _interopRequireDefault(eventManager_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ToastContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToastContainer, _Component);

  function ToastContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      toast: []
    };
    _this.toastKey = 1;
    _this.collection = {};

    _this.isToastActive = function (id) {
      return _this.state.toast.indexOf(id) !== -1;
    };

    return _this;
  }

  var _proto = ToastContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _eventManager.default.on(constant.ACTION.SHOW, function (content, options) {
      return _this2.show(content, options);
    }).on(constant.ACTION.CLEAR, function (id) {
      return !id ? _this2.clear() : _this2.removeToast(id);
    }).emit(constant.ACTION.DID_MOUNT, this);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _eventManager.default.off(constant.ACTION.SHOW).off(constant.ACTION.CLEAR).emit(constant.ACTION.WILL_UNMOUNT);
  };

  _proto.removeToast = function removeToast(id) {
    this.setState({
      toast: this.state.toast.filter(function (v) {
        return v !== id;
      })
    }, this.dispatchChange);
  };

  _proto.dispatchChange = function dispatchChange() {
    _eventManager.default.emit(constant.ACTION.ON_CHANGE, this.state.toast.length);
  };

  _proto.makeCloseButton = function makeCloseButton(toastClose, toastId, type) {
    var _this3 = this;

    var closeButton = this.props.closeButton;

    if ((0, _react.isValidElement)(toastClose) || toastClose === false) {
      closeButton = toastClose;
    }

    return closeButton === false ? false : (0, _react.cloneElement)(closeButton, {
      closeToast: function closeToast() {
        return _this3.removeToast(toastId);
      },
      type: type
    });
  };

  _proto.getAutoCloseDelay = function getAutoCloseDelay(toastAutoClose) {
    return toastAutoClose === false || (0, propValidator.isValidDelay)(toastAutoClose) ? toastAutoClose : this.props.autoClose;
  };

  _proto.canBeRendered = function canBeRendered(content) {
    return (0, _react.isValidElement)(content) || typeof content === 'string' || typeof content === 'number' || typeof content === 'function';
  };

  _proto.parseClassName = function parseClassName(prop) {
    if (typeof prop === 'string') {
      return prop;
    } else if (prop !== null && typeof prop === 'object' && 'toString' in prop) {
      return prop.toString();
    }

    return null;
  };

  _proto.show = function show(content, options) {
    var _this4 = this,
        _extends2;

    if (!this.canBeRendered(content)) {
      throw new Error("The element you provided cannot be rendered. You provided an element of type " + typeof content);
    }

    var toastId = options.toastId;

    var closeToast = function closeToast() {
      return _this4.removeToast(toastId);
    };

    var toastOptions = {
      id: toastId,
      // ⚠️ if no options.key, this.toastKey - 1 is assigned
      key: options.key || this.toastKey++,
      type: options.type,
      closeToast: closeToast,
      updateId: options.updateId,
      rtl: this.props.rtl,
      position: options.position || this.props.position,
      transition: options.transition || this.props.transition,
      className: this.parseClassName(options.className || this.props.toastClassName),
      bodyClassName: this.parseClassName(options.bodyClassName || this.props.bodyClassName),
      closeButton: this.makeCloseButton(options.closeButton, toastId, options.type),
      pauseOnHover: typeof options.pauseOnHover === 'boolean' ? options.pauseOnHover : this.props.pauseOnHover,
      pauseOnFocusLoss: typeof options.pauseOnFocusLoss === 'boolean' ? options.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
      draggable: typeof options.draggable === 'boolean' ? options.draggable : this.props.draggable,
      draggablePercent: typeof options.draggablePercent === 'number' && !isNaN(options.draggablePercent) ? options.draggablePercent : this.props.draggablePercent,
      closeOnClick: typeof options.closeOnClick === 'boolean' ? options.closeOnClick : this.props.closeOnClick,
      progressClassName: this.parseClassName(options.progressClassName || this.props.progressClassName),
      progressStyle: this.props.progressStyle,
      autoClose: this.getAutoCloseDelay(options.autoClose),
      hideProgressBar: typeof options.hideProgressBar === 'boolean' ? options.hideProgressBar : this.props.hideProgressBar,
      progress: parseFloat(options.progress),
      isProgressDone: options.isProgressDone
    };
    typeof options.onOpen === 'function' && (toastOptions.onOpen = options.onOpen);
    typeof options.onClose === 'function' && (toastOptions.onClose = options.onClose); // add closeToast function to react component only

    if ((0, _react.isValidElement)(content) && typeof content.type !== 'string' && typeof content.type !== 'number') {
      content = (0, _react.cloneElement)(content, {
        closeToast: closeToast
      });
    } else if (typeof content === 'function') {
      content = content({
        closeToast: closeToast
      });
    }

    this.collection = _extends({}, this.collection, (_extends2 = {}, _extends2[toastId] = {
      position: toastOptions.position,
      options: toastOptions,
      content: content
    }, _extends2));
    this.setState({
      toast: (toastOptions.updateId ? _toConsumableArray(this.state.toast) : _toConsumableArray(this.state.toast).concat([toastId])).filter(function (id) {
        return id !== options.staleToastId;
      })
    }, this.dispatchChange);
  };

  _proto.makeToast = function makeToast(content, options) {
    return _react.default.createElement(_Toast.default, _extends({}, options, {
      isDocumentHidden: this.state.isDocumentHidden,
      key: "toast-" + options.key
    }), content);
  };

  _proto.clear = function clear() {
    this.setState({
      toast: []
    });
  };

  _proto.renderToast = function renderToast() {
    var _this5 = this;

    var toastToRender = {};
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        newestOnTop = _this$props.newestOnTop;
    var collection = newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection); // group toast by position

    collection.forEach(function (toastId) {
      var _this5$collection$toa = _this5.collection[toastId],
          position = _this5$collection$toa.position,
          options = _this5$collection$toa.options,
          content = _this5$collection$toa.content;
      toastToRender[position] || (toastToRender[position] = []);

      if (_this5.state.toast.indexOf(options.id) !== -1) {
        toastToRender[position].push(_this5.makeToast(content, options));
      } else {
        toastToRender[position].push(null);
        delete _this5.collection[toastId];
      }
    });
    return Object.keys(toastToRender).map(function (position) {
      var disablePointer = toastToRender[position].length === 1 && toastToRender[position][0] === null;
      var props = {
        className: (0, _classnames.default)('Toastify__toast-container', "Toastify__toast-container--" + position, {
          'Toastify__toast-container--rtl': _this5.props.rtl
        }, _this5.parseClassName(className)),
        style: disablePointer ? _extends({}, style, {
          pointerEvents: 'none'
        }) : _extends({}, style)
      };
      return _react.default.createElement(_TransitionGroup.default, _extends({}, props, {
        key: "container-" + position
      }), toastToRender[position]);
    });
  };

  _proto.render = function render() {
    return _react.default.createElement("div", {
      className: "Toastify"
    }, this.renderToast());
  };

  return ToastContainer;
}(_react.Component);

ToastContainer.propTypes = {
  /**
   * Set toast position
   */
  position: _propTypes.default.oneOf((0, propValidator.objectValues)(constant.POSITION)),

  /**
   * Disable or set autoClose delay
   */
  autoClose: propValidator.falseOrDelay,

  /**
   * Disable or set a custom react element for the close button
   */
  closeButton: propValidator.falseOrElement,

  /**
   * Hide or not progress bar when autoClose is enabled
   */
  hideProgressBar: _propTypes.default.bool,

  /**
   * Pause toast duration on hover
   */
  pauseOnHover: _propTypes.default.bool,

  /**
   * Dismiss toast on click
   */
  closeOnClick: _propTypes.default.bool,

  /**
   * Newest on top
   */
  newestOnTop: _propTypes.default.bool,

  /**
   * An optional className
   */
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * An optional style
   */
  style: _propTypes.default.object,

  /**
   * An optional className for the toast
   */
  toastClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * An optional className for the toast body
   */
  bodyClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * An optional className for the toast progress bar
   */
  progressClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * An optional style for the toast progress bar
   */
  progressStyle: _propTypes.default.object,

  /**
   * Define enter and exit transition using react-transition-group
   */
  transition: _propTypes.default.func,

  /**
   * Support rtl display
   */
  rtl: _propTypes.default.bool,

  /**
   * Allow toast to be draggable
   */
  draggable: _propTypes.default.bool,

  /**
   * The percentage of the toast's width it takes for a drag to dismiss a toast
   */
  draggablePercent: _propTypes.default.number,

  /**
   * Pause the toast on focus loss
   */
  pauseOnFocusLoss: _propTypes.default.bool
};
ToastContainer.defaultProps = {
  position: constant.POSITION.TOP_RIGHT,
  transition: Transitions.Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: _react.default.createElement(_CloseButton.default, null),
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  className: null,
  style: null,
  toastClassName: null,
  bodyClassName: null,
  progressClassName: null,
  progressStyle: null
};
var _default = ToastContainer;
exports.default = _default;
});

unwrapExports(ToastContainer_1);

var toast_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _eventManager = _interopRequireDefault(eventManager_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var container = null;
var queue = [];

var noop = function noop() {
  return false;
};
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(options, type) {
  return _extends({}, options, {
    type: type,
    toastId: getToastId(options)
  });
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate the toastId either automatically or by provided toastId
 */


function getToastId(options) {
  if (options && (typeof options.toastId === 'string' || typeof options.toastId === 'number' && !isNaN(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * Dispatch toast. If the container is not mounted, the toast is enqueued
 */


function emitEvent(content, options) {
  if (container !== null) {
    _eventManager.default.emit(constant.ACTION.SHOW, content, options);
  } else {
    queue.push({
      action: constant.ACTION.SHOW,
      content: content,
      options: options
    });
  }

  return options.toastId;
}

var toast = _extends(function (content, options) {
  return emitEvent(content, mergeOptions(options, options && options.type || constant.TYPE.DEFAULT));
}, {
  success: function success(content, options) {
    return emitEvent(content, mergeOptions(options, constant.TYPE.SUCCESS));
  },
  info: function info(content, options) {
    return emitEvent(content, mergeOptions(options, constant.TYPE.INFO));
  },
  warn: function warn(content, options) {
    return emitEvent(content, mergeOptions(options, constant.TYPE.WARNING));
  },
  warning: function warning(content, options) {
    return emitEvent(content, mergeOptions(options, constant.TYPE.WARNING));
  },
  error: function error(content, options) {
    return emitEvent(content, mergeOptions(options, constant.TYPE.ERROR));
  },
  dismiss: function dismiss(id) {
    if (id === void 0) {
      id = null;
    }

    return container && _eventManager.default.emit(constant.ACTION.CLEAR, id);
  },
  isActive: noop,
  update: function update(toastId, options) {
    setTimeout(function () {
      if (container && typeof container.collection[toastId] !== 'undefined') {
        var _container$collection = container.collection[toastId],
            oldOptions = _container$collection.options,
            oldContent = _container$collection.content;

        var nextOptions = _extends({}, oldOptions, options, {
          toastId: options.toastId || toastId
        });

        if (!options.toastId || options.toastId === toastId) {
          nextOptions.updateId = generateToastId();
        } else {
          nextOptions.staleToastId = toastId;
        }

        var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
        delete nextOptions.render;
        emitEvent(content, nextOptions);
      }
    }, 0);
  },
  done: function done(id, progress) {
    if (progress === void 0) {
      progress = 1;
    }

    toast.update(id, {
      progress: progress,
      isProgressDone: true
    });
  },
  onChange: function onChange(callback) {
    if (typeof callback === 'function') {
      _eventManager.default.on(constant.ACTION.ON_CHANGE, callback);
    }
  },
  POSITION: constant.POSITION,
  TYPE: constant.TYPE
});
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */


_eventManager.default.on(constant.ACTION.DID_MOUNT, function (containerInstance) {
  container = containerInstance;

  toast.isActive = function (id) {
    return container.isToastActive(id);
  };

  queue.forEach(function (item) {
    _eventManager.default.emit(item.action, item.content, item.options);
  });
  queue = [];
}).on(constant.ACTION.WILL_UNMOUNT, function () {
  container = null;
  toast.isActive = noop;
});

var _default = toast;
exports.default = _default;
});

unwrapExports(toast_1);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _ToastContainer = _interopRequireDefault(ToastContainer_1);

exports.ToastContainer = _ToastContainer.default;



exports.Bounce = Transitions.Bounce;
exports.Slide = Transitions.Slide;
exports.Zoom = Transitions.Zoom;
exports.Flip = Transitions.Flip;



exports.ToastPosition = constant.POSITION;
exports.ToastType = constant.TYPE;

var _toast = _interopRequireDefault(toast_1);

exports.toast = _toast.default;

var _cssTransition = _interopRequireDefault(cssTransition);

exports.cssTransition = _cssTransition.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

unwrapExports(lib);
var lib_1 = lib.ToastContainer;
var lib_2 = lib.Bounce;
var lib_3 = lib.Slide;
var lib_4 = lib.Zoom;
var lib_5 = lib.Flip;
var lib_6 = lib.ToastPosition;
var lib_7 = lib.ToastType;
var lib_8 = lib.toast;
var lib_9 = lib.cssTransition;

var Form = function (_Component) {
    inherits(Form, _Component);

    function Form(props) {
        classCallCheck(this, Form);

        var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this._onSubmit = function (e) {
            e.preventDefault();
            _this.props.onSubmit();
            _this.displayError = true;
            return false;
        };

        _this.state = {
            data: props.data
        };

        _this.displayError = true;
        _this.handleError(props);
        return _this;
    }

    createClass(Form, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.handleError(props);
            this.setState({
                data: props.data
            });
        }
    }, {
        key: 'handleError',
        value: function handleError(props) {
            if (props.data && props.data.error && props.toast && this.displayError == true) {
                lib_8.error(props.data.error);
                this.displayError = false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React__default.createElement(
                FormContext.Provider,
                { value: this.state.data },
                React__default.createElement(
                    'form',
                    { onSubmit: this._onSubmit },
                    this.renderError(),
                    this.props.children
                ),
                React__default.createElement(lib_1, null)
            );
        }
    }, {
        key: 'renderError',
        value: function renderError() {
            if (this.state.data && this.state.data.error && !this.props.toast) {
                return React__default.createElement(
                    'p',
                    { className: 'alert alert-danger' },
                    this.state.data.error
                );
            }

            return null;
        }
    }]);
    return Form;
}(React.Component);


Form.defaultProps = {
    data: null,
    toast: false,
    onSubmit: function onSubmit() {
        console.log('[Form] submitted');
    }
};

var Input = function (_Component) {
    inherits(Input, _Component);

    function Input() {
        classCallCheck(this, Input);
        return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    createClass(Input, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                FormConsumer,
                null,
                function (data) {
                    return _this2.renderInput(data);
                }
            );
        }
    }, {
        key: "renderInput",
        value: function renderInput(data) {
            var _this3 = this;

            var props = _extends({}, this.props);
            if (props.children) delete props.children;
            if (props.onChangeValue) delete props.onChangeValue;
            return React__default.createElement(
                "div",
                { className: "form-group" },
                this.renderLabel(data),
                React__default.createElement("input", _extends({ onChange: function onChange(e) {
                        return _this3.props.onChangeValue(e.target.value);
                    } }, props)),
                React__default.createElement(FormItemError, { name: this.props.name, data: data })
            );
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(data) {
            if (this.props.label) {
                return React__default.createElement(
                    "label",
                    { htmlFor: this.props.id },
                    this.props.label
                );
            }
        }
    }]);
    return Input;
}(React.Component);


Input.defaultProps = {
    name: 'input',
    id: 'input',
    className: 'form-control',
    type: 'text',
    onChangeValue: function onChangeValue(text) {}
};

var OptionGroupContext = React__default.createContext({});

var OptionGroupConsumer = function (_Component) {
    inherits(OptionGroupConsumer, _Component);

    function OptionGroupConsumer() {
        classCallCheck(this, OptionGroupConsumer);
        return possibleConstructorReturn(this, (OptionGroupConsumer.__proto__ || Object.getPrototypeOf(OptionGroupConsumer)).apply(this, arguments));
    }

    createClass(OptionGroupConsumer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                OptionGroupContext.Consumer,
                null,
                function (props) {
                    return _this2.props.children(props);
                }
            );
        }
    }]);
    return OptionGroupConsumer;
}(React.Component);

var OptionGroup = function (_Component2) {
    inherits(OptionGroup, _Component2);

    function OptionGroup() {
        var _ref;

        var _temp, _this3, _ret;

        classCallCheck(this, OptionGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = possibleConstructorReturn(this, (_ref = OptionGroup.__proto__ || Object.getPrototypeOf(OptionGroup)).call.apply(_ref, [this].concat(args))), _this3), _this3._onChange = function (e) {
            if (_this3.props.multiple) {
                var value = [];
                var options = e.target.options;
                for (var i = 0, l = options.length; i < l; i++) {
                    if (options[i].selected) {
                        value.push(options[i].value);
                    }
                }
                _this3.props.onChangeValue(value);
            } else {
                _this3.props.onChangeValue(e.target.value);
            }
        }, _temp), possibleConstructorReturn(_this3, _ret);
    }

    createClass(OptionGroup, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React__default.createElement(
                FormConsumer,
                null,
                function (data) {
                    return _this4.renderOptionGroup(data);
                }
            );
        }
    }, {
        key: 'renderOptionGroup',
        value: function renderOptionGroup(data) {
            var _this5 = this;

            var props = _extends({}, this.props);
            return React__default.createElement(
                'div',
                { className: 'form-group' },
                this.renderLabel(),
                React__default.createElement(
                    'select',
                    _extends({}, this.props.data, props, { onChange: function onChange(e) {
                            return _this5._onChange(e);
                        } }),
                    this.renderChildren()
                ),
                React__default.createElement(FormItemError, { name: this.props.name, data: data })
            );
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            if (!this.props.label) return null;

            return React__default.createElement(
                'label',
                { htmlFor: this.props.id },
                this.props.label
            );
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return React__default.createElement(
                OptionGroupContext.Provider,
                { value: {} },
                this.props.children
            );
        }
    }]);
    return OptionGroup;
}(React.Component);


OptionGroup.defaultProps = {
    name: 'select',
    className: 'form-control',
    onChangeValue: function onChangeValue(value) {}
};

var Option = function (_Component) {
    inherits(Option, _Component);

    function Option() {
        classCallCheck(this, Option);
        return possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                OptionGroupConsumer,
                null,
                function (data) {
                    return _this2.renderOption(data);
                }
            );
        }
    }, {
        key: 'renderOption',
        value: function renderOption(data) {
            var props = _extends({}, this.props);

            return React__default.createElement(
                'option',
                props,
                this.props.children
            );
        }
    }]);
    return Option;
}(React.Component);


Option.defaultProps = {
    value: 'option'
};

var RadioGroupContext = React__default.createContext({});

var RadioGroupConsumer = function (_Component) {
    inherits(RadioGroupConsumer, _Component);

    function RadioGroupConsumer() {
        classCallCheck(this, RadioGroupConsumer);
        return possibleConstructorReturn(this, (RadioGroupConsumer.__proto__ || Object.getPrototypeOf(RadioGroupConsumer)).apply(this, arguments));
    }

    createClass(RadioGroupConsumer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                RadioGroupContext.Consumer,
                null,
                function (props) {
                    return _this2.props.children(props);
                }
            );
        }
    }]);
    return RadioGroupConsumer;
}(React.Component);

var RadioGroup = function (_Component2) {
    inherits(RadioGroup, _Component2);

    function RadioGroup() {
        classCallCheck(this, RadioGroup);
        return possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
    }

    createClass(RadioGroup, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React__default.createElement(
                FormConsumer,
                null,
                function (data) {
                    return _this4.renderRadioGroup(data);
                }
            );
        }
    }, {
        key: 'renderRadioGroup',
        value: function renderRadioGroup(data) {
            return React__default.createElement(
                'div',
                { className: 'form-options mb-3' },
                this.renderLabel(),
                this.renderChildren(),
                React__default.createElement(FormItemError, { name: this.props.name, data: data })
            );
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            if (!this.props.label) return null;

            return React__default.createElement(
                'p',
                { className: 'mb-0 mt-2' },
                this.props.label
            );
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this5 = this;

            return React__default.createElement(
                RadioGroupContext.Provider,
                { value: {
                        onChangeValue: function onChangeValue(value) {
                            return _this5.props.onChangeValue(value);
                        },
                        value: this.props.value
                    } },
                this.props.children
            );
        }
    }]);
    return RadioGroup;
}(React.Component);


RadioGroup.defaultProps = {
    name: 'radio',
    onChangeValue: function onChangeValue(value) {}
};

var Radio = function (_Component) {
    inherits(Radio, _Component);

    function Radio() {
        classCallCheck(this, Radio);
        return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    createClass(Radio, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                RadioGroupConsumer,
                null,
                function (data) {
                    return _this2.renderRadio(data);
                }
            );
        }
    }, {
        key: "renderRadio",
        value: function renderRadio(data) {
            var _this3 = this;

            var props = _extends({}, this.props);
            if (props.children) delete props.children;

            return React__default.createElement(
                "div",
                { className: "form-check" },
                React__default.createElement("input", _extends({
                    type: "radio",
                    checked: data.value === this.props.value,
                    onChange: function onChange(e) {
                        if (e.target.checked) data.onChangeValue(_this3.props.value);
                    }
                }, props)),
                this.renderLabel(data)
            );
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(data) {
            if (this.props.children.length) {
                return React__default.createElement(
                    "label",
                    { className: "form-check-label", htmlFor: this.props.id },
                    this.props.children
                );
            }
        }
    }]);
    return Radio;
}(React.Component);


Radio.defaultProps = {
    value: 'option',
    className: 'form-check-input'
};

var Submit = function (_Component) {
    inherits(Submit, _Component);

    function Submit() {
        classCallCheck(this, Submit);
        return possibleConstructorReturn(this, (Submit.__proto__ || Object.getPrototypeOf(Submit)).apply(this, arguments));
    }

    createClass(Submit, [{
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'button',
                _extends({ type: 'submit' }, this.props),
                this.props.children
            );
        }
    }]);
    return Submit;
}(React.Component);


Submit.defaultProps = {
    className: 'btn btn-primary'
};

var TextArea = function (_Component) {
    inherits(TextArea, _Component);

    function TextArea() {
        classCallCheck(this, TextArea);
        return possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
    }

    createClass(TextArea, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                FormConsumer,
                null,
                function (data) {
                    return _this2.renderTextArea(data);
                }
            );
        }
    }, {
        key: "renderTextArea",
        value: function renderTextArea(data) {
            var _this3 = this;

            var props = _extends({}, this.props);
            if (props.onChangeValue) delete props.onChangeValue;
            return React__default.createElement(
                "div",
                { className: "form-group" },
                this.renderLabel(data),
                React__default.createElement("textarea", _extends({ onChange: function onChange(e) {
                        return _this3.props.onChangeValue(e.target.value);
                    } }, props)),
                React__default.createElement(FormItemError, { name: this.props.name, data: data })
            );
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(data) {
            if (this.props.label) {
                return React__default.createElement(
                    "label",
                    { htmlFor: this.props.id },
                    this.props.label
                );
            }
        }
    }]);
    return TextArea;
}(React.Component);


TextArea.defaultProps = {
    name: 'textarea',
    id: 'textarea',
    className: 'form-control',
    onChangeValue: function onChangeValue(text) {}
};

exports.CheckBox = CheckBox;
exports.Form = Form;
exports.Input = Input;
exports.Option = Option;
exports.OptionGroup = OptionGroup;
exports.RadioGroup = RadioGroup;
exports.Radio = Radio;
exports.Submit = Submit;
exports.TextArea = TextArea;
//# sourceMappingURL=index.js.map
