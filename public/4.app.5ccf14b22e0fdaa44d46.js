(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/field/text.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/field/text.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var molecules_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! molecules/input */ "./src/components/molecules/input.vue");
/* harmony import */ var mixins_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mixins/base */ "./src/components/mixins/base.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'm-field-text',
  mixins: [mixins_base__WEBPACK_IMPORTED_MODULE_1__["mixins"].vModel],
  components: {
    MInput: molecules_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/collect-point.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/form/collect-point.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_map_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/map-manager */ "./src/utils/map-manager.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var utils_macros_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/macros/routes */ "./src/utils/macros/routes.js");
/* harmony import */ var mixins_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mixins/base */ "./src/components/mixins/base.js");
/* harmony import */ var organisms_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organisms/form */ "./src/components/organisms/form.vue");
/* harmony import */ var molecules_field_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! molecules/field/text */ "./src/components/molecules/field/text.vue");
/* harmony import */ var atoms_button_submit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! atoms/button/submit */ "./src/components/atoms/button/submit.vue");
/* harmony import */ var src_jscash_icons_names_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/__jscash__/icons-names-list */ "./src/__jscash__/icons-names-list.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'o-form-collect-point',
  mixins: [mixins_base__WEBPACK_IMPORTED_MODULE_3__["mixins"].form, mixins_base__WEBPACK_IMPORTED_MODULE_3__["mixins"].validation],
  components: {
    AButtonSubmit: atoms_button_submit__WEBPACK_IMPORTED_MODULE_6__["default"],
    MFieldText: molecules_field_text__WEBPACK_IMPORTED_MODULE_5__["default"],
    OForm: organisms_form__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: () => ({
    collectedPointId: '',
    blockForm: false,
    isSending: false,
    message: ''
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', ['collectedPointsIds'])
  },
  methods: {
    onCollectPoint() {
      this.$store.dispatch('popup/openTemporary', {
        messages: ['Gratulujemy!', 'Zdobyłeś punkt!'],
        icon: src_jscash_icons_names_list__WEBPACK_IMPORTED_MODULE_7__["ICONS"].check_circle_outline
      }).then(() => {
        this.isSending = false;
        this.blockForm = false;
        this.$router.push(utils_macros_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].start.path);
      });
    },

    collectPoint() {
      const pointId = this.collectedPointId;
      utils_map_manager__WEBPACK_IMPORTED_MODULE_0__["mapManager"].collectPoint(pointId).then(this.onCollectPoint).catch(this.onErrorOccurs);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collect-point.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/collect-point.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var templates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! templates/page */ "./src/components/templates/page.vue");
/* harmony import */ var organisms_form_collect_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organisms/form/collect-point */ "./src/components/organisms/form/collect-point.vue");
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'p-collect-point',
  components: {
    OFormCollectPoint: organisms_form_collect_point__WEBPACK_IMPORTED_MODULE_1__["default"],
    TPage: templates_page__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/field/text.vue?vue&type=template&id=9a1dd858&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/field/text.vue?vue&type=template&id=9a1dd858& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "validation-observer",
    [
      _c("validation-provider", {
        attrs: { name: _vm.label.toLowerCase(), rules: _vm.rules },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var errors = ref.errors
              return [
                _c("m-input", {
                  attrs: {
                    type: "text",
                    disabled: _vm.disabled,
                    placeholder: _vm.label,
                    error: errors.length > 0,
                    assist: errors[0]
                  },
                  model: {
                    value: _vm.vModel,
                    callback: function($$v) {
                      _vm.vModel = $$v
                    },
                    expression: "vModel"
                  }
                })
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/collect-point.vue?vue&type=template&id=2e572820&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/form/collect-point.vue?vue&type=template&id=2e572820& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "o-form",
    { attrs: { "on-submit": _vm.collectPoint } },
    [
      _c("m-field-text", {
        attrs: {
          label: "Kod punktu",
          rules: _vm.rules.pointId,
          disabled: _vm.blockForm
        },
        model: {
          value: _vm.collectedPointId,
          callback: function($$v) {
            _vm.collectedPointId = $$v
          },
          expression: "collectedPointId"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "f-text-danger",
        domProps: { textContent: _vm._s(_vm.message) }
      }),
      _vm._v(" "),
      _c("a-button-submit", {
        attrs: { disabled: _vm.blockForm, "is-sending": _vm.isSending }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collect-point.vue?vue&type=template&id=9649257c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/collect-point.vue?vue&type=template&id=9649257c& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-page",
    { attrs: { title: "Zbierz punkt" } },
    [
      _c("div", { staticClass: "f-pt-1 f-pb-4" }, [
        _vm._v(
          "\n    Aby zebrać punkty udaj się do miejsc oznaczonych na mapie\n    i wpisz kod z koperty do poniższego pola tekstowego.\n    Następnie wciśnij przycisk „Dalej”.\n  "
        )
      ]),
      _vm._v(" "),
      _c("o-form-collect-point")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/molecules/field/text.vue":
/*!*************************************************!*\
  !*** ./src/components/molecules/field/text.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_vue_vue_type_template_id_9a1dd858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.vue?vue&type=template&id=9a1dd858& */ "./src/components/molecules/field/text.vue?vue&type=template&id=9a1dd858&");
/* harmony import */ var _text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.vue?vue&type=script&lang=js& */ "./src/components/molecules/field/text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _text_vue_vue_type_template_id_9a1dd858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _text_vue_vue_type_template_id_9a1dd858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/molecules/field/text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/molecules/field/text.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/molecules/field/text.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./text.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/field/text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/molecules/field/text.vue?vue&type=template&id=9a1dd858&":
/*!********************************************************************************!*\
  !*** ./src/components/molecules/field/text.vue?vue&type=template&id=9a1dd858& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_template_id_9a1dd858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./text.vue?vue&type=template&id=9a1dd858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/field/text.vue?vue&type=template&id=9a1dd858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_template_id_9a1dd858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_template_id_9a1dd858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/organisms/form/collect-point.vue":
/*!*********************************************************!*\
  !*** ./src/components/organisms/form/collect-point.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collect_point_vue_vue_type_template_id_2e572820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collect-point.vue?vue&type=template&id=2e572820& */ "./src/components/organisms/form/collect-point.vue?vue&type=template&id=2e572820&");
/* harmony import */ var _collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collect-point.vue?vue&type=script&lang=js& */ "./src/components/organisms/form/collect-point.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collect_point_vue_vue_type_template_id_2e572820___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collect_point_vue_vue_type_template_id_2e572820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/organisms/form/collect-point.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/organisms/form/collect-point.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/components/organisms/form/collect-point.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./collect-point.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/collect-point.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/organisms/form/collect-point.vue?vue&type=template&id=2e572820&":
/*!****************************************************************************************!*\
  !*** ./src/components/organisms/form/collect-point.vue?vue&type=template&id=2e572820& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_template_id_2e572820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./collect-point.vue?vue&type=template&id=2e572820& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/collect-point.vue?vue&type=template&id=2e572820&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_template_id_2e572820___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_template_id_2e572820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/collect-point.vue":
/*!************************************************!*\
  !*** ./src/components/pages/collect-point.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collect_point_vue_vue_type_template_id_9649257c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collect-point.vue?vue&type=template&id=9649257c& */ "./src/components/pages/collect-point.vue?vue&type=template&id=9649257c&");
/* harmony import */ var _collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collect-point.vue?vue&type=script&lang=js& */ "./src/components/pages/collect-point.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collect_point_vue_vue_type_template_id_9649257c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collect_point_vue_vue_type_template_id_9649257c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/collect-point.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/collect-point.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/pages/collect-point.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./collect-point.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collect-point.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/pages/collect-point.vue?vue&type=template&id=9649257c&":
/*!*******************************************************************************!*\
  !*** ./src/components/pages/collect-point.vue?vue&type=template&id=9649257c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_template_id_9649257c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./collect-point.vue?vue&type=template&id=9649257c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collect-point.vue?vue&type=template&id=9649257c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_template_id_9649257c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collect_point_vue_vue_type_template_id_9649257c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/utils/map-manager.js":
/*!**********************************!*\
  !*** ./src/utils/map-manager.js ***!
  \**********************************/
/*! exports provided: mapManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapManager", function() { return mapManager; });
/* harmony import */ var store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/index */ "./src/store/index.js");
/* harmony import */ var utils_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/error-message */ "./src/utils/error-message.js");
/* harmony import */ var vendors_logical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vendors/logical */ "./vendors/logical.js");
/* harmony import */ var vendors_logical__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vendors_logical__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_macros_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/macros/errors */ "./src/utils/macros/errors.js");
// import { map } from 'map/index';




const mapManager = {
  collectPoint(pointId) {
    return new Promise((resolve, reject) => {
      const point = store_index__WEBPACK_IMPORTED_MODULE_0__["store"].getters['event/getPointById'](pointId); // const mapIsDefined = logical.isObject(map.realMap);
      // let feature;

      if (vendors_logical__WEBPACK_IMPORTED_MODULE_2__["logical"].isUndefined(point)) {
        reject(utils_macros_errors__WEBPACK_IMPORTED_MODULE_3__["ERRORS"].pointWithPointIdDoesntExist(pointId));
      } // if (mapIsDefined) {
      //   const olUid = point.olUid;
      //   feature = map.points.getFeatureByOlUid(olUid);
      //   map.points.removeByOlUid(olUid);
      // }


      api.collectPoint({
        eventId: store_index__WEBPACK_IMPORTED_MODULE_0__["store"].getters['event/eventId'],
        user: store_index__WEBPACK_IMPORTED_MODULE_0__["store"].getters['user/user'],
        pointId
      }).then(() => {
        store_index__WEBPACK_IMPORTED_MODULE_0__["store"].commit('event/updatePoint', {
          pointId,
          collectionTime: Date.now()
        });
        store_index__WEBPACK_IMPORTED_MODULE_0__["store"].commit('user/addCollectedPointId', pointId);
        resolve();
      }).catch(error => {
        // if (mapIsDefined) {
        //   map.points.add(feature);
        // }
        console.trace(error);
        const errorMessage = new utils_error_message__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"](error);
        errorMessage.showMessage('Punkt nie został zebrany przez problem z serwerem. \nSpróbuj ponownie później.');
        reject(errorMessage);
      });
    });
  }

};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2ZpZWxkL3RleHQudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9ybS9jb2xsZWN0LXBvaW50LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdC1wb2ludC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2ZpZWxkL3RleHQudnVlP2JlN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvcm0vY29sbGVjdC1wb2ludC52dWU/ZDE5MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb2xsZWN0LXBvaW50LnZ1ZT82YzM3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9maWVsZC90ZXh0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvZmllbGQvdGV4dC52dWU/NTM3MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvZmllbGQvdGV4dC52dWU/OGNhZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9ybS9jb2xsZWN0LXBvaW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9ybS9jb2xsZWN0LXBvaW50LnZ1ZT8wYzIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9mb3JtL2NvbGxlY3QtcG9pbnQudnVlP2MwNTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdC1wb2ludC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdC1wb2ludC52dWU/MjZhOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb2xsZWN0LXBvaW50LnZ1ZT84NWZjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9tYXAtbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJtYXBNYW5hZ2VyIiwiY29sbGVjdFBvaW50IiwicG9pbnRJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9pbnQiLCJzdG9yZSIsImdldHRlcnMiLCJsb2dpY2FsIiwiaXNVbmRlZmluZWQiLCJFUlJPUlMiLCJwb2ludFdpdGhQb2ludElkRG9lc250RXhpc3QiLCJhcGkiLCJldmVudElkIiwidXNlciIsInRoZW4iLCJjb21taXQiLCJjb2xsZWN0aW9uVGltZSIsIkRhdGUiLCJub3ciLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInRyYWNlIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3JNZXNzYWdlIiwic2hvd01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUEscUVBRkE7QUFHQTtBQUFBO0FBQUEsR0FIQTtBQUlBO0FBQ0EscUJBREE7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQUZBO0FBTUE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFOQTtBQUpBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSw4QkFEQTtBQUVBLGtJQUZBO0FBR0E7QUFDQSw4RUFEQTtBQUVBLDRFQUZBO0FBR0E7QUFIQSxHQUhBO0FBUUE7QUFDQSx3QkFEQTtBQUVBLG9CQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLElBUkE7QUFjQSxjQUNBLG9FQUNBLG9CQURBO0FBREEsR0FkQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQSxtQkFDQSxjQURBLEVBRUEsaUJBRkEsQ0FEQTtBQUtBO0FBTEEsU0FPQSxJQVBBLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FkQTs7QUFlQTtBQUNBO0FBQ0EseUZBQ0EsSUFEQSxDQUNBLG1CQURBLEVBRUEsS0FGQSxDQUVBLGtCQUZBO0FBR0E7O0FBcEJBO0FBbkJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBO0FBQ0EseUJBREE7QUFFQTtBQUNBLDJGQURBO0FBRUE7QUFGQTtBQUZBLEc7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQWtEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsZ0NBQWdDLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyx3QkFBd0IsRUFBRTtBQUN4QztBQUNBLGlCQUFpQiwrQkFBK0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBd0wsQ0FBZ0IsOE9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDM0I7QUFDTDs7O0FBRzVEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLHVQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQix1UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxVQUFVLEdBQUc7QUFDeEJDLGNBQVksQ0FBRUMsT0FBRixFQUFXO0FBQ3JCLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0QyxZQUFNQyxLQUFLLEdBQUdDLGlEQUFLLENBQUNDLE9BQU4sQ0FBYyxvQkFBZCxFQUFvQ04sT0FBcEMsQ0FBZCxDQURzQyxDQUV0QztBQUNBOztBQUVBLFVBQUlPLHVEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLEtBQXBCLENBQUosRUFBZ0M7QUFDOUJELGNBQU0sQ0FBQ00sMERBQU0sQ0FBQ0MsMkJBQVAsQ0FBbUNWLE9BQW5DLENBQUQsQ0FBTjtBQUNELE9BUHFDLENBU3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBVyxTQUFHLENBQUNaLFlBQUosQ0FBaUI7QUFDZmEsZUFBTyxFQUFFUCxpREFBSyxDQUFDQyxPQUFOLENBQWMsZUFBZCxDQURNO0FBRWZPLFlBQUksRUFBRVIsaURBQUssQ0FBQ0MsT0FBTixDQUFjLFdBQWQsQ0FGUztBQUdmTjtBQUhlLE9BQWpCLEVBS0djLElBTEgsQ0FLUSxNQUFNO0FBQ1ZULHlEQUFLLENBQUNVLE1BQU4sQ0FBYSxtQkFBYixFQUFrQztBQUNoQ2YsaUJBRGdDO0FBRWhDZ0Isd0JBQWMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBRmdCLFNBQWxDO0FBSUFiLHlEQUFLLENBQUNVLE1BQU4sQ0FBYSwwQkFBYixFQUF5Q2YsT0FBekM7QUFDQUUsZUFBTztBQUNSLE9BWkgsRUFhR2lCLEtBYkgsQ0FhU0MsS0FBSyxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0FDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjRixLQUFkO0FBQ0EsY0FBTUcsWUFBWSxHQUFHLElBQUlDLGdFQUFKLENBQWlCSixLQUFqQixDQUFyQjtBQUNBRyxvQkFBWSxDQUFDRSxXQUFiLENBQXlCLGdGQUF6QjtBQUNBdEIsY0FBTSxDQUFDb0IsWUFBRCxDQUFOO0FBQ0QsT0FyQkg7QUFzQkQsS0FyQ00sQ0FBUDtBQXNDRDs7QUF4Q3VCLENBQW5CLEMiLCJmaWxlIjoiNC5hcHAuNWNjZjE0YjIyZTBmZGFhNDRkNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2YWxpZGF0aW9uLW9ic2VydmVyPlxuICAgIDx2YWxpZGF0aW9uLXByb3ZpZGVyXG4gICAgICA6bmFtZT1cImxhYmVsLnRvTG93ZXJDYXNlKClcIlxuICAgICAgOnJ1bGVzPVwicnVsZXNcIlxuICAgICAgdi1zbG90PVwieyBlcnJvcnMgfVwiXG4gICAgPlxuICAgICAgPG0taW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2LW1vZGVsPVwidk1vZGVsXCJcbiAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYWJlbFwiXG4gICAgICAgIDplcnJvcj1cImVycm9ycy5sZW5ndGggPiAwXCJcbiAgICAgICAgOmFzc2lzdD1cImVycm9yc1swXVwiXG4gICAgICAvPlxuICAgIDwvdmFsaWRhdGlvbi1wcm92aWRlcj5cbiAgPC92YWxpZGF0aW9uLW9ic2VydmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNSW5wdXQgZnJvbSAnbW9sZWN1bGVzL2lucHV0JztcbmltcG9ydCB7IG1peGlucyB9IGZyb20gJ21peGlucy9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbS1maWVsZC10ZXh0JyxcbiAgbWl4aW5zOiBbbWl4aW5zLnZNb2RlbF0sXG4gIGNvbXBvbmVudHM6IHsgTUlucHV0IH0sXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcnVsZXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxvLWZvcm0gOm9uLXN1Ym1pdD1cImNvbGxlY3RQb2ludFwiPlxuICAgIDxtLWZpZWxkLXRleHRcbiAgICAgIGxhYmVsPVwiS29kIHB1bmt0dVwiXG4gICAgICA6cnVsZXM9XCJydWxlcy5wb2ludElkXCJcbiAgICAgIHYtbW9kZWw9XCJjb2xsZWN0ZWRQb2ludElkXCJcbiAgICAgIDpkaXNhYmxlZD1cImJsb2NrRm9ybVwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwiZi10ZXh0LWRhbmdlclwiIHYtdGV4dD1cIm1lc3NhZ2VcIi8+XG4gICAgPGEtYnV0dG9uLXN1Ym1pdFxuICAgICAgOmRpc2FibGVkPVwiYmxvY2tGb3JtXCJcbiAgICAgIDppcy1zZW5kaW5nPVwiaXNTZW5kaW5nXCJcbiAgICAvPlxuICA8L28tZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNYW5hZ2VyIH0gZnJvbSAndXRpbHMvbWFwLW1hbmFnZXInO1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAndXRpbHMvbWFjcm9zL3JvdXRlcyc7XG5pbXBvcnQgeyBtaXhpbnMgfSBmcm9tICdtaXhpbnMvYmFzZSc7XG5pbXBvcnQgT0Zvcm0gZnJvbSAnb3JnYW5pc21zL2Zvcm0nO1xuaW1wb3J0IE1GaWVsZFRleHQgZnJvbSAnbW9sZWN1bGVzL2ZpZWxkL3RleHQnO1xuaW1wb3J0IEFCdXR0b25TdWJtaXQgZnJvbSAnYXRvbXMvYnV0dG9uL3N1Ym1pdCc7XG5pbXBvcnQgeyBJQ09OUyB9IGZyb20gJ3NyYy9fX2pzY2FzaF9fL2ljb25zLW5hbWVzLWxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvLWZvcm0tY29sbGVjdC1wb2ludCcsXG4gIG1peGluczogW21peGlucy5mb3JtLCBtaXhpbnMudmFsaWRhdGlvbl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBQnV0dG9uU3VibWl0LFxuICAgIE1GaWVsZFRleHQsXG4gICAgT0Zvcm0sXG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgY29sbGVjdGVkUG9pbnRJZDogJycsXG4gICAgYmxvY2tGb3JtOiBmYWxzZSxcbiAgICBpc1NlbmRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKCd1c2VyJywgW1xuICAgICAgJ2NvbGxlY3RlZFBvaW50c0lkcycsXG4gICAgXSksXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNvbGxlY3RQb2ludCAoKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncG9wdXAvb3BlblRlbXBvcmFyeScsIHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnR3JhdHVsdWplbXkhJyxcbiAgICAgICAgICAnWmRvYnnFgmXFmyBwdW5rdCEnLFxuICAgICAgICBdLFxuICAgICAgICBpY29uOiBJQ09OUy5jaGVja19jaXJjbGVfb3V0bGluZSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYmxvY2tGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goUk9VVEVTLnN0YXJ0LnBhdGgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNvbGxlY3RQb2ludCAoKSB7XG4gICAgICBjb25zdCBwb2ludElkID0gdGhpcy5jb2xsZWN0ZWRQb2ludElkO1xuICAgICAgbWFwTWFuYWdlci5jb2xsZWN0UG9pbnQocG9pbnRJZClcbiAgICAgICAgLnRoZW4odGhpcy5vbkNvbGxlY3RQb2ludClcbiAgICAgICAgLmNhdGNoKHRoaXMub25FcnJvck9jY3Vycyk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHQtcGFnZSB0aXRsZT1cIlpiaWVyeiBwdW5rdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmLXB0LTEgZi1wYi00XCI+XG4gICAgICBBYnkgemVicmHEhyBwdW5rdHkgdWRhaiBzacSZIGRvIG1pZWpzYyBvem5hY3pvbnljaCBuYSBtYXBpZVxuICAgICAgaSB3cGlzeiBrb2QgeiBrb3BlcnR5IGRvIHBvbmnFvHN6ZWdvIHBvbGEgdGVrc3Rvd2Vnby5cbiAgICAgIE5hc3TEmXBuaWUgd2NpxZtuaWogcHJ6eWNpc2sg4oCeRGFsZWrigJ0uXG4gICAgPC9kaXY+XG4gICAgPG8tZm9ybS1jb2xsZWN0LXBvaW50Lz5cbiAgPC90LXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRQYWdlIGZyb20gJ3RlbXBsYXRlcy9wYWdlJztcbmltcG9ydCBPRm9ybUNvbGxlY3RQb2ludCBmcm9tICdvcmdhbmlzbXMvZm9ybS9jb2xsZWN0LXBvaW50JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncC1jb2xsZWN0LXBvaW50JyxcbiAgY29tcG9uZW50czoge1xuICAgIE9Gb3JtQ29sbGVjdFBvaW50LFxuICAgIFRQYWdlLFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZhbGlkYXRpb24tb2JzZXJ2ZXJcIixcbiAgICBbXG4gICAgICBfYyhcInZhbGlkYXRpb24tcHJvdmlkZXJcIiwge1xuICAgICAgICBhdHRyczogeyBuYW1lOiBfdm0ubGFiZWwudG9Mb3dlckNhc2UoKSwgcnVsZXM6IF92bS5ydWxlcyB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gcmVmLmVycm9yc1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwibS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9ycy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICBhc3Npc3Q6IGVycm9yc1swXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udk1vZGVsLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZNb2RlbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZNb2RlbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiby1mb3JtXCIsXG4gICAgeyBhdHRyczogeyBcIm9uLXN1Ym1pdFwiOiBfdm0uY29sbGVjdFBvaW50IH0gfSxcbiAgICBbXG4gICAgICBfYyhcIm0tZmllbGQtdGV4dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwiS29kIHB1bmt0dVwiLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ucnVsZXMucG9pbnRJZCxcbiAgICAgICAgICBkaXNhYmxlZDogX3ZtLmJsb2NrRm9ybVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uY29sbGVjdGVkUG9pbnRJZCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uY29sbGVjdGVkUG9pbnRJZCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJjb2xsZWN0ZWRQb2ludElkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmLXRleHQtZGFuZ2VyXCIsXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1lc3NhZ2UpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYS1idXR0b24tc3VibWl0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5ibG9ja0Zvcm0sIFwiaXMtc2VuZGluZ1wiOiBfdm0uaXNTZW5kaW5nIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidC1wYWdlXCIsXG4gICAgeyBhdHRyczogeyB0aXRsZTogXCJaYmllcnogcHVua3RcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmLXB0LTEgZi1wYi00XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgQWJ5IHplYnJhxIcgcHVua3R5IHVkYWogc2nEmSBkbyBtaWVqc2Mgb3puYWN6b255Y2ggbmEgbWFwaWVcXG4gICAgaSB3cGlzeiBrb2QgeiBrb3BlcnR5IGRvIHBvbmnFvHN6ZWdvIHBvbGEgdGVrc3Rvd2Vnby5cXG4gICAgTmFzdMSZcG5pZSB3Y2nFm25paiBwcnp5Y2lzayDigJ5EYWxlauKAnS5cXG4gIFwiXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiby1mb3JtLWNvbGxlY3QtcG9pbnRcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWExZGQ4NTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9kb21pbmlrL1Byb2plY3RzL2hhcmNtYXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWExZGQ4NTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWExZGQ4NTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWExZGQ4NTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMWRkODU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzlhMWRkODU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvZmllbGQvdGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWExZGQ4NTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbGxlY3QtcG9pbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlNTcyODIwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbGxlY3QtcG9pbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0LXBvaW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJlNTcyODIwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJlNTcyODIwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJlNTcyODIwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb2xsZWN0LXBvaW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTU3MjgyMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZTU3MjgyMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvcm0vY29sbGVjdC1wb2ludC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xsZWN0LXBvaW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdC1wb2ludC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdC1wb2ludC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmU1NzI4MjAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbGxlY3QtcG9pbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2NDkyNTdjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbGxlY3QtcG9pbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0LXBvaW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk2NDkyNTdjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk2NDkyNTdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk2NDkyNTdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb2xsZWN0LXBvaW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NjQ5MjU3YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NjQ5MjU3YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdC1wb2ludC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xsZWN0LXBvaW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdC1wb2ludC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdC1wb2ludC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTY0OTI1N2MmXCIiLCIvLyBpbXBvcnQgeyBtYXAgfSBmcm9tICdtYXAvaW5kZXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdzdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICd1dGlscy9lcnJvci1tZXNzYWdlJztcbmltcG9ydCB7IGxvZ2ljYWwgfSBmcm9tICd2ZW5kb3JzL2xvZ2ljYWwnO1xuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAndXRpbHMvbWFjcm9zL2Vycm9ycyc7XG5cbmV4cG9ydCBjb25zdCBtYXBNYW5hZ2VyID0ge1xuICBjb2xsZWN0UG9pbnQgKHBvaW50SWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcG9pbnQgPSBzdG9yZS5nZXR0ZXJzWydldmVudC9nZXRQb2ludEJ5SWQnXShwb2ludElkKTtcbiAgICAgIC8vIGNvbnN0IG1hcElzRGVmaW5lZCA9IGxvZ2ljYWwuaXNPYmplY3QobWFwLnJlYWxNYXApO1xuICAgICAgLy8gbGV0IGZlYXR1cmU7XG5cbiAgICAgIGlmIChsb2dpY2FsLmlzVW5kZWZpbmVkKHBvaW50KSkge1xuICAgICAgICByZWplY3QoRVJST1JTLnBvaW50V2l0aFBvaW50SWREb2VzbnRFeGlzdChwb2ludElkKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIChtYXBJc0RlZmluZWQpIHtcbiAgICAgIC8vICAgY29uc3Qgb2xVaWQgPSBwb2ludC5vbFVpZDtcbiAgICAgIC8vICAgZmVhdHVyZSA9IG1hcC5wb2ludHMuZ2V0RmVhdHVyZUJ5T2xVaWQob2xVaWQpO1xuICAgICAgLy8gICBtYXAucG9pbnRzLnJlbW92ZUJ5T2xVaWQob2xVaWQpO1xuICAgICAgLy8gfVxuXG4gICAgICBhcGkuY29sbGVjdFBvaW50KHtcbiAgICAgICAgZXZlbnRJZDogc3RvcmUuZ2V0dGVyc1snZXZlbnQvZXZlbnRJZCddLFxuICAgICAgICB1c2VyOiBzdG9yZS5nZXR0ZXJzWyd1c2VyL3VzZXInXSxcbiAgICAgICAgcG9pbnRJZCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2V2ZW50L3VwZGF0ZVBvaW50Jywge1xuICAgICAgICAgICAgcG9pbnRJZCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXNlci9hZGRDb2xsZWN0ZWRQb2ludElkJywgcG9pbnRJZCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGlmIChtYXBJc0RlZmluZWQpIHtcbiAgICAgICAgICAvLyAgIG1hcC5wb2ludHMuYWRkKGZlYXR1cmUpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBjb25zb2xlLnRyYWNlKGVycm9yKTtcbiAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2hvd01lc3NhZ2UoJ1B1bmt0IG5pZSB6b3N0YcWCIHplYnJhbnkgcHJ6ZXogcHJvYmxlbSB6IHNlcndlcmVtLiBcXG5TcHLDs2J1aiBwb25vd25pZSBww7PFum5pZWouJyk7XG4gICAgICAgICAgcmVqZWN0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=