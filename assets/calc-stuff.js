'use strict';



;define("calc-stuff/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("calc-stuff/app", ["exports", "ember-resolver", "ember-load-initializers", "calc-stuff/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("calc-stuff/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("calc-stuff/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("calc-stuff/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("calc-stuff/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
});
;define("calc-stuff/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("calc-stuff/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete-highlight", ["exports", "ember-paper/components/paper-autocomplete/highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete", ["exports", "ember-paper/components/paper-autocomplete/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/ebd-content", ["exports", "ember-paper/components/paper-autocomplete/ebd-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/ebd-trigger", ["exports", "ember-paper/components/paper-autocomplete/ebd-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/eps-trigger", ["exports", "ember-paper/components/paper-autocomplete/eps-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/highlight", ["exports", "ember-paper/components/paper-autocomplete/highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/no-matches-message", ["exports", "ember-paper/components/paper-autocomplete/no-matches-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/options", ["exports", "ember-paper/components/paper-autocomplete/options/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-autocomplete/reset-button", ["exports", "ember-paper/components/paper-autocomplete/reset-button/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-backdrop", ["exports", "ember-paper/components/paper-backdrop"], function (_exports, _paperBackdrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperBackdrop.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-button", ["exports", "ember-paper/components/paper-button"], function (_exports, _paperButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperButton.default;
    }
  });
});
;define("calc-stuff/components/paper-card-actions", ["exports", "ember-paper/components/paper-card-actions"], function (_exports, _paperCardActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardActions.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-avatar", ["exports", "ember-paper/components/paper-card-avatar"], function (_exports, _paperCardAvatar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardAvatar.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-content", ["exports", "ember-paper/components/paper-card-content"], function (_exports, _paperCardContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardContent.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-header-headline", ["exports", "ember-paper/components/paper-card-header-headline"], function (_exports, _paperCardHeaderHeadline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderHeadline.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-header-subhead", ["exports", "ember-paper/components/paper-card-header-subhead"], function (_exports, _paperCardHeaderSubhead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderSubhead.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-header-text", ["exports", "ember-paper/components/paper-card-header-text"], function (_exports, _paperCardHeaderText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderText.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-header-title", ["exports", "ember-paper/components/paper-card-header-title"], function (_exports, _paperCardHeaderTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderTitle.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-header", ["exports", "ember-paper/components/paper-card-header"], function (_exports, _paperCardHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeader.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-icon-actions", ["exports", "ember-paper/components/paper-card-icon-actions"], function (_exports, _paperCardIconActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardIconActions.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-image", ["exports", "ember-paper/components/paper-card-image"], function (_exports, _paperCardImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardImage.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-media", ["exports", "ember-paper/components/paper-card-media"], function (_exports, _paperCardMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardMedia.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-title-media", ["exports", "ember-paper/components/paper-card-title-media"], function (_exports, _paperCardTitleMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitleMedia.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-title-text", ["exports", "ember-paper/components/paper-card-title-text"], function (_exports, _paperCardTitleText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitleText.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card-title", ["exports", "ember-paper/components/paper-card-title"], function (_exports, _paperCardTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitle.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-card", ["exports", "ember-paper/components/paper-card"], function (_exports, _paperCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCard.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-checkbox", ["exports", "ember-paper/components/paper-checkbox"], function (_exports, _paperCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCheckbox.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-chips", ["exports", "ember-paper/components/paper-chips/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-contact-chips", ["exports", "ember-paper/components/paper-contact-chips/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-content", ["exports", "ember-paper/components/paper-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-dialog-actions", ["exports", "ember-paper/components/paper-dialog-actions"], function (_exports, _paperDialogActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
;define("calc-stuff/components/paper-dialog-container", ["exports", "ember-paper/components/paper-dialog-container"], function (_exports, _paperDialogContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
;define("calc-stuff/components/paper-dialog-content", ["exports", "ember-paper/components/paper-dialog-content"], function (_exports, _paperDialogContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
;define("calc-stuff/components/paper-dialog-inner", ["exports", "ember-paper/components/paper-dialog-inner"], function (_exports, _paperDialogInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
;define("calc-stuff/components/paper-dialog", ["exports", "ember-paper/components/paper-dialog"], function (_exports, _paperDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
;define("calc-stuff/components/paper-divider", ["exports", "ember-paper/components/paper-divider/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-form", ["exports", "ember-paper/components/paper-form"], function (_exports, _paperForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperForm.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-grid-list", ["exports", "ember-paper/components/paper-grid-list"], function (_exports, _paperGridList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
;define("calc-stuff/components/paper-grid-tile-footer", ["exports", "ember-paper/components/paper-grid-tile-footer"], function (_exports, _paperGridTileFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
;define("calc-stuff/components/paper-grid-tile", ["exports", "ember-paper/components/paper-grid-tile"], function (_exports, _paperGridTile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
;define("calc-stuff/components/paper-icon", ["exports", "ember-paper/components/paper-icon"], function (_exports, _paperIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperIcon.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-ink-bar", ["exports", "ember-paper/components/paper-ink-bar"], function (_exports, _paperInkBar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
;define("calc-stuff/components/paper-input", ["exports", "ember-paper/components/paper-input"], function (_exports, _paperInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperInput.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-item", ["exports", "ember-paper/components/paper-item"], function (_exports, _paperItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperItem.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-list", ["exports", "ember-paper/components/paper-list"], function (_exports, _paperList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperList.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-menu", ["exports", "ember-paper/components/paper-menu/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-menu/content", ["exports", "ember-paper/components/paper-menu/content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-menu/item", ["exports", "ember-paper/components/paper-menu/item/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-menu/trigger", ["exports", "ember-paper/components/paper-menu/trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-progress-circular", ["exports", "ember-paper/components/paper-progress-circular"], function (_exports, _paperProgressCircular) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
;define("calc-stuff/components/paper-progress-linear", ["exports", "ember-paper/components/paper-progress-linear"], function (_exports, _paperProgressLinear) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
;define("calc-stuff/components/paper-radio-group-label", ["exports", "ember-paper/components/paper-radio-group-label"], function (_exports, _paperRadioGroupLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioGroupLabel.default;
    }
  });
});
;define("calc-stuff/components/paper-radio-group", ["exports", "ember-paper/components/paper-radio-group"], function (_exports, _paperRadioGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
;define("calc-stuff/components/paper-radio-proxiable", ["exports", "ember-paper/components/paper-radio-proxiable"], function (_exports, _paperRadioProxiable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
;define("calc-stuff/components/paper-radio", ["exports", "ember-paper/components/paper-radio"], function (_exports, _paperRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
;define("calc-stuff/components/paper-reset-button", ["exports", "ember-paper/components/paper-reset-button"], function (_exports, _paperResetButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
;define("calc-stuff/components/paper-ripple", ["exports", "ember-paper/components/paper-ripple/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select", ["exports", "ember-paper/components/paper-select/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/ebd-content", ["exports", "ember-paper/components/paper-select/ebd-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/ebd-trigger", ["exports", "ember-paper/components/paper-select/ebd-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/eps-trigger", ["exports", "ember-paper/components/paper-select/eps-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/no-matches-message", ["exports", "ember-paper/components/paper-select/no-matches-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/option", ["exports", "ember-paper/components/paper-select/option/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/options", ["exports", "ember-paper/components/paper-select/options/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/search-message", ["exports", "ember-paper/components/paper-select/search-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-select/search", ["exports", "ember-paper/components/paper-select/search/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-sidenav-container", ["exports", "ember-paper/components/paper-sidenav-container"], function (_exports, _paperSidenavContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
;define("calc-stuff/components/paper-sidenav-inner", ["exports", "ember-paper/components/paper-sidenav-inner"], function (_exports, _paperSidenavInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenavInner.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-sidenav-toggle", ["exports", "ember-paper/components/paper-sidenav-toggle"], function (_exports, _paperSidenavToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenavToggle.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-sidenav", ["exports", "ember-paper/components/paper-sidenav"], function (_exports, _paperSidenav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenav.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-slider", ["exports", "ember-paper/components/paper-slider/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/paper-speed-dial-actions-action", ["exports", "ember-paper/components/paper-speed-dial-actions-action"], function (_exports, _paperSpeedDialActionsAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActionsAction.default;
    }
  });
});
;define("calc-stuff/components/paper-speed-dial-actions", ["exports", "ember-paper/components/paper-speed-dial-actions"], function (_exports, _paperSpeedDialActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActions.default;
    }
  });
});
;define("calc-stuff/components/paper-speed-dial-trigger", ["exports", "ember-paper/components/paper-speed-dial-trigger"], function (_exports, _paperSpeedDialTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialTrigger.default;
    }
  });
});
;define("calc-stuff/components/paper-speed-dial", ["exports", "ember-paper/components/paper-speed-dial"], function (_exports, _paperSpeedDial) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDial.default;
    }
  });
});
;define("calc-stuff/components/paper-subheader", ["exports", "ember-paper/components/paper-subheader"], function (_exports, _paperSubheader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSubheader.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-switch", ["exports", "ember-paper/components/paper-switch"], function (_exports, _paperSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSwitch.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-tab", ["exports", "ember-paper/components/paper-tab"], function (_exports, _paperTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
;define("calc-stuff/components/paper-tabs", ["exports", "ember-paper/components/paper-tabs"], function (_exports, _paperTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
;define("calc-stuff/components/paper-toast-inner", ["exports", "ember-paper/components/paper-toast-inner"], function (_exports, _paperToastInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
;define("calc-stuff/components/paper-toast-text", ["exports", "ember-paper/components/paper-toast-text"], function (_exports, _paperToastText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
;define("calc-stuff/components/paper-toast", ["exports", "ember-paper/components/paper-toast"], function (_exports, _paperToast) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
;define("calc-stuff/components/paper-toaster", ["exports", "ember-paper/components/paper-toaster"], function (_exports, _paperToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define("calc-stuff/components/paper-toolbar-tools", ["exports", "ember-paper/components/paper-toolbar-tools"], function (_exports, _paperToolbarTools) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperToolbarTools.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-toolbar", ["exports", "ember-paper/components/paper-toolbar"], function (_exports, _paperToolbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperToolbar.default;
  _exports.default = _default;
});
;define("calc-stuff/components/paper-tooltip-inner", ["exports", "ember-paper/components/paper-tooltip-inner"], function (_exports, _paperTooltipInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
;define("calc-stuff/components/paper-tooltip", ["exports", "ember-paper/components/paper-tooltip"], function (_exports, _paperTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
;define("calc-stuff/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define("calc-stuff/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("calc-stuff/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define("calc-stuff/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define("calc-stuff/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noMatchesMessage.default;
    }
  });
});
;define("calc-stuff/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define("calc-stuff/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define("calc-stuff/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define("calc-stuff/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define("calc-stuff/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("calc-stuff/components/transition-group", ["exports", "ember-css-transitions/components/transition-group"], function (_exports, _transitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
;define("calc-stuff/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("calc-stuff/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("calc-stuff/config/environment.d", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = config;
  /**
   * Type declarations for
   *    import config from './config/environment'
   *
   * For now these need to be managed by the developer
   * since different ember addons can materialize new entries.
   */

  _exports.default = _default;
});
;define("calc-stuff/controllers/minimum-number-of-runs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let MinimumNumberOfRuns = (_class = (_temp = class MinimumNumberOfRuns extends Ember.Controller.extend({// anything which *must* be merged to prototype here
  }) {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "width", _descriptor, this);

      _initializerDefineProperty(this, "length", _descriptor2, this);
    }

    get area() {
      return this.width * this.length;
    }

    get twoFtBoundryExclusionDeterminant() {
      return this.area - 16 * (this.length + this.width) + 64;
    }

    get twoFtExclusionApplies() {
      return this.twoFtBoundryExclusionDeterminant > 0;
    }

    get NminZ() {
      return 2 * Math.sqrt(this.area);
    }

    get Smax() {
      return Math.floor((this.width - 4) * Math.sqrt(2));
    }

    get Zmax() {
      return 2 * this.Smax - 19;
    }

    get MinRuns() {
      let minRuns = Math.ceil(this.NminZ / this.Zmax);
      return minRuns > 2 ? minRuns : 2;
    }

    setLength(length) {
      this.length = Number(length);
    }

    setWidth(width) {
      this.width = Number(width);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "width", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 1;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "length", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 1;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setLength", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "setLength"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setWidth", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "setWidth"), _class.prototype)), _class); // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.

  _exports.default = MinimumNumberOfRuns;
});
;define("calc-stuff/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("calc-stuff/helpers/-clear-element", ["exports", "ember-in-element-polyfill/helpers/-clear-element"], function (_exports, _clearElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clearElement.default;
    }
  });
  Object.defineProperty(_exports, "clearElement", {
    enumerable: true,
    get: function () {
      return _clearElement.clearElement;
    }
  });
});
;define("calc-stuff/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("calc-stuff/helpers/-paper-underscore", ["exports", "ember-paper/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define("calc-stuff/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("calc-stuff/helpers/app-version", ["exports", "calc-stuff/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("calc-stuff/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("calc-stuff/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("calc-stuff/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("calc-stuff/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("calc-stuff/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("calc-stuff/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("calc-stuff/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("calc-stuff/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("calc-stuff/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("calc-stuff/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("calc-stuff/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("calc-stuff/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("calc-stuff/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("calc-stuff/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("calc-stuff/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("calc-stuff/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("calc-stuff/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("calc-stuff/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("calc-stuff/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("calc-stuff/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "calc-stuff/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("calc-stuff/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("calc-stuff/initializers/debug", ["exports", "@html-next/vertical-collection/-debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'vertical-collection-debug',

    initialize() {}

  };
  _exports.default = _default;
});
;define("calc-stuff/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("calc-stuff/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("calc-stuff/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("calc-stuff/initializers/export-application-global", ["exports", "calc-stuff/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("calc-stuff/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("calc-stuff/mixins/transition-mixin", ["exports", "ember-css-transitions/mixins/transition-mixin"], function (_exports, _transitionMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
;define("calc-stuff/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("calc-stuff/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("calc-stuff/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("calc-stuff/router", ["exports", "calc-stuff/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('minimum-calc-stuff', {
      path: '/'
    });
  });
});
;define("calc-stuff/routes/minimum-number-of-runs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class MinimumNumberOfRuns extends Ember.Route {}

  _exports.default = MinimumNumberOfRuns;
});
;define("calc-stuff/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("calc-stuff/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("calc-stuff/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("calc-stuff/services/constants", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    sniffer: Ember.inject.service('sniffer'),
    webkit: Ember.computed(function () {
      return /webkit/i.test(this.get('sniffer.vendorPrefix'));
    }),

    vendorProperty(name) {
      return this.get('webkit') ? `-webkit-${name.charAt(0)}${name.substring(1)}` : name;
    },

    CSS: Ember.computed('webkit', function () {
      let webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: `transitionend${webkit ? ' webkitTransitionEnd' : ''}`,
        ANIMATIONEND: `animationend${webkit ? ' webkitAnimationEnd' : ''}`,
        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),
    KEYCODE: Ember.Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });

  _exports.default = _default;
});
;define("calc-stuff/services/paper-sidenav", ["exports", "ember-paper/services/paper-sidenav"], function (_exports, _paperSidenav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
;define("calc-stuff/services/paper-theme", ["exports", "ember-paper/services/paper-theme"], function (_exports, _paperTheme) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTheme.default;
    }
  });
});
;define("calc-stuff/services/paper-toaster", ["exports", "ember-paper/services/paper-toaster"], function (_exports, _paperToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define("calc-stuff/services/sniffer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  let isString = function (value) {
    return typeof value === 'string';
  };

  let lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  let toInt = function (str) {
    return parseInt(str, 10);
  };

  var _default = Ember.Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,
    android: Ember.computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init() {
      this._super(...arguments);

      if (typeof FastBoot !== 'undefined') {
        return;
      }

      let _document = document;
      let _window = window;
      this.setProperties({
        _document,
        _window
      });
      let bodyStyle = _document.body && _document.body.style;
      let vendorPrefix, match;
      let vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;
      let transitions = false;
      let animations = false;

      if (bodyStyle) {
        for (let prop in bodyStyle) {
          match = vendorRegex.exec(prop);

          if (match) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || `${vendorPrefix}Transition` in bodyStyle);
        animations = !!('animation' in bodyStyle || `${vendorPrefix}Animation` in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);
      this.set('vendorPrefix', vendorPrefix);
    }

  });

  _exports.default = _default;
});
;define("calc-stuff/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("calc-stuff/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define("calc-stuff/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BqsazRao",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calc-stuff/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("calc-stuff/templates/minimum-number-of-runs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1l8aF+f/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\",true],[8],[0,\"\\n  Calculate minimum runs\\n\"],[9],[0,\"\\n\"],[5,\"paper-content\",[[12,\"class\",\"flex layout-column\"]],[[\"@padding\"],[true]],{\"statements\":[[0,\"\\n  \"],[5,\"paper-input\",[],[[\"@label\",\"@type\",\"@value\",\"@onChange\",\"@min\"],[\"height (ft)\",\"number\",[23,0,[\"length\"]],[23,0,[\"setLength\"]],1]]],[0,\"\\n  \"],[5,\"paper-input\",[],[[\"@label\",\"@type\",\"@value\",\"@onChange\",\"@min\"],[\"width (ft)\",\"number\",[23,0,[\"width\"]],[23,0,[\"setWidth\"]],1]]],[0,\"\\n  \"],[7,\"span\",true],[8],[0,\"\\n    \"],[7,\"bold\",true],[8],[0,\"\\n      area:\\n    \"],[9],[0,\"\\n    \"],[1,[23,0,[\"area\"]],false],[0,\"\\n    sq ft\\n  \"],[9],[0,\"\\n  \"],[7,\"span\",true],[8],[0,\"\\n    \"],[7,\"bold\",true],[8],[0,\"\\n      2 ft boundry exclusion determinant:\\n    \"],[9],[0,\"\\n    \"],[1,[23,0,[\"twoFtBoundryExclusionDeterminant\"]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"span\",true],[11,\"style\",[29,[\"color: \",[28,\"if\",[[23,0,[\"twoFtExclusionApplies\"]],\"green\",\"red\"],null],\";\"]]],[8],[0,\"\\n    \"],[1,[28,\"if\",[[23,0,[\"twoFtExclusionApplies\"]],\"2 ft exclusion applies\",\"no 2ft exclusion\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[23,0,[\"twoFtExclusionApplies\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\",true],[8],[0,\"\\n      \"],[7,\"bold\",true],[8],[0,\"\\n        NminZ = (2 * sqrt(\"],[1,[23,0,[\"area\"]],false],[0,\")) =\\n      \"],[9],[0,\"\\n      \"],[1,[23,0,[\"NminZ\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"span\",true],[8],[0,\"\\n      \"],[7,\"bold\",true],[8],[0,\"\\n        Smax = Floor((\"],[1,[23,0,[\"width\"]],false],[0,\" - 4) * sqrt(2)) =\\n      \"],[9],[0,\"\\n      \"],[1,[23,0,[\"Smax\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"span\",true],[8],[0,\"\\n      \"],[7,\"bold\",true],[8],[0,\"\\n        Zmax = 2 * \"],[1,[23,0,[\"Smax\"]],false],[0,\" - 19 =\\n      \"],[9],[0,\"\\n      \"],[1,[23,0,[\"Zmax\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"span\",true],[8],[0,\"\\n      \"],[7,\"bold\",true],[8],[0,\"\\n        MinRuns = \"],[1,[23,0,[\"NminZ\"]],false],[0,\" / \"],[1,[23,0,[\"Zmax\"]],false],[0,\" =\\n      \"],[9],[0,\"\\n      \"],[1,[23,0,[\"MinRuns\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\"],[5,\"paper-content\",[],[[],[]]]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calc-stuff/templates/minimum-number-of-runs.hbs"
    }
  });

  _exports.default = _default;
});
;define("calc-stuff/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("calc-stuff/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("calc-stuff/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("calc-stuff/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("calc-stuff/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _calculatePosition.default;
    }
  });
});
;define("calc-stuff/utils/clamp", ["exports", "ember-paper/utils/clamp"], function (_exports, _clamp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});
;

;define('calc-stuff/config/environment', [], function() {
  var prefix = 'calc-stuff';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("calc-stuff/app")["default"].create({"name":"calc-stuff","version":"0.0.0+9e8f2b5c"});
          }
        
//# sourceMappingURL=calc-stuff.map
