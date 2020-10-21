(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/sign-in.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/form/sign-in.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/index */ "./src/api/index.js");
/* harmony import */ var mixins_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mixins/base */ "./src/components/mixins/base.js");
/* harmony import */ var utils_macros_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/macros/routes */ "./src/utils/macros/routes.js");
/* harmony import */ var _dbetka_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dbetka/utils */ "./node_modules/@dbetka/utils/dist/index.js");
/* harmony import */ var _dbetka_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dbetka_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var molecules_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! molecules/input */ "./src/components/molecules/input.vue");
/* harmony import */ var atoms_button_submit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! atoms/button/submit */ "./src/components/atoms/button/submit.vue");
/* harmony import */ var organisms_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organisms/form */ "./src/components/organisms/form.vue");
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
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'o-form-sign-in',
  mixins: [mixins_base__WEBPACK_IMPORTED_MODULE_1__["mixins"].form],
  components: {
    OForm: organisms_form__WEBPACK_IMPORTED_MODULE_6__["default"],
    AButtonSubmit: atoms_button_submit__WEBPACK_IMPORTED_MODULE_5__["default"],
    MInput: molecules_input__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: () => ({
    values: {
      user: '',
      password: ''
    },
    blockForm: false,
    isSending: false,
    message: ''
  }),

  mounted() {
    if (true) {
      this.signInAutomatically();
    }
  },

  methods: {
    onSignIn(data) {
      this.$store.dispatch('user/signIn', data).then(() => {
        this.$router.push(utils_macros_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].start.path);
        this.isSending = false;
        this.blockForm = false;
      });
    },

    signIn() {
      this.isSending = true;
      this.blockForm = true;
      api_index__WEBPACK_IMPORTED_MODULE_0__["api"].signIn(this.values).then(this.onSignIn).catch(this.onErrorOccurs);
    },

    signInAutomatically() {
      this.isSending = true;
      this.blockForm = true;
      this.values.user = "demo@demo.com";
      this.values.password = "HarcMap1";
      _dbetka_utils__WEBPACK_IMPORTED_MODULE_3__["uPromise"].timeout(500).then(() => this.signIn());
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/sign-in.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/sign-in.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var templates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! templates/page */ "./src/components/templates/page.vue");
/* harmony import */ var organisms_form_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organisms/form/sign-in */ "./src/components/organisms/form/sign-in.vue");
/* harmony import */ var atoms_button_secondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atoms/button/secondary */ "./src/components/atoms/button/secondary.vue");
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
  name: 'p-sign-in',
  components: {
    AButtonSecondary: atoms_button_secondary__WEBPACK_IMPORTED_MODULE_2__["default"],
    OFormSignIn: organisms_form_sign_in__WEBPACK_IMPORTED_MODULE_1__["default"],
    TPage: templates_page__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/sign-in.vue?vue&type=template&id=19017730&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/form/sign-in.vue?vue&type=template&id=19017730& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { attrs: { "on-submit": _vm.signIn } },
    [
      _c("m-input", {
        attrs: { disabled: _vm.blockForm, placeholder: "E-mail" },
        model: {
          value: _vm.values.user,
          callback: function($$v) {
            _vm.$set(_vm.values, "user", $$v)
          },
          expression: "values.user"
        }
      }),
      _vm._v(" "),
      _c("m-input", {
        attrs: {
          disabled: _vm.blockForm,
          placeholder: "Hasło",
          type: "password"
        },
        model: {
          value: _vm.values.password,
          callback: function($$v) {
            _vm.$set(_vm.values, "password", $$v)
          },
          expression: "values.password"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "f-text-center f-text-danger",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/sign-in.vue?vue&type=template&id=a142e9ec&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/sign-in.vue?vue&type=template&id=a142e9ec& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    { staticClass: "f-flex f-flex-col", attrs: { title: "Logowanie" } },
    [
      _c("o-form-sign-in"),
      _vm._v(" "),
      _c(
        "a-button-secondary",
        {
          on: {
            click: function($event) {
              return _vm.$router.push(_vm.ROUTES.remindPassword.path)
            }
          }
        },
        [_vm._v("\n    Przypomnij hasło\n  ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/organisms/form/sign-in.vue":
/*!***************************************************!*\
  !*** ./src/components/organisms/form/sign-in.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_in_vue_vue_type_template_id_19017730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.vue?vue&type=template&id=19017730& */ "./src/components/organisms/form/sign-in.vue?vue&type=template&id=19017730&");
/* harmony import */ var _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.vue?vue&type=script&lang=js& */ "./src/components/organisms/form/sign-in.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sign_in_vue_vue_type_template_id_19017730___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sign_in_vue_vue_type_template_id_19017730___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/organisms/form/sign-in.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/organisms/form/sign-in.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/organisms/form/sign-in.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/sign-in.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/organisms/form/sign-in.vue?vue&type=template&id=19017730&":
/*!**********************************************************************************!*\
  !*** ./src/components/organisms/form/sign-in.vue?vue&type=template&id=19017730& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_19017730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=template&id=19017730& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/form/sign-in.vue?vue&type=template&id=19017730&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_19017730___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_19017730___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/sign-in.vue":
/*!******************************************!*\
  !*** ./src/components/pages/sign-in.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_in_vue_vue_type_template_id_a142e9ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.vue?vue&type=template&id=a142e9ec& */ "./src/components/pages/sign-in.vue?vue&type=template&id=a142e9ec&");
/* harmony import */ var _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.vue?vue&type=script&lang=js& */ "./src/components/pages/sign-in.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sign_in_vue_vue_type_template_id_a142e9ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sign_in_vue_vue_type_template_id_a142e9ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/sign-in.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/sign-in.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/pages/sign-in.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/sign-in.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/pages/sign-in.vue?vue&type=template&id=a142e9ec&":
/*!*************************************************************************!*\
  !*** ./src/components/pages/sign-in.vue?vue&type=template&id=a142e9ec& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_a142e9ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=template&id=a142e9ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/sign-in.vue?vue&type=template&id=a142e9ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_a142e9ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_a142e9ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvcm0vc2lnbi1pbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3BhZ2VzL3NpZ24taW4udnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9mb3JtL3NpZ24taW4udnVlPzA3ZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc2lnbi1pbi52dWU/NTYxNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9ybS9zaWduLWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9ybS9zaWduLWluLnZ1ZT8zZmYzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9mb3JtL3NpZ24taW4udnVlP2E0ODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc2lnbi1pbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc2lnbi1pbi52dWU/NWQxMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zaWduLWluLnZ1ZT80ZmE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBRUEsbUVBRkE7QUFHQTtBQUNBLGlFQURBO0FBRUEsOEVBRkE7QUFHQTtBQUhBLEdBSEE7QUFRQTtBQUNBO0FBQ0EsY0FEQTtBQUVBO0FBRkEsS0FEQTtBQUtBLG9CQUxBO0FBTUEsb0JBTkE7QUFPQTtBQVBBLElBUkE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FyQkE7O0FBc0JBO0FBQ0E7QUFDQSxnREFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUEsS0FSQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQSx3RUFDQSxJQURBLENBQ0EsYUFEQSxFQUVBLEtBRkEsQ0FFQSxrQkFGQTtBQUdBLEtBZkE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFDQSxJQURBLENBQ0EsbUJBREE7QUFFQTs7QUF2QkE7QUF0QkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLG1CQURBO0FBRUE7QUFDQSxvRkFEQTtBQUVBLCtFQUZBO0FBR0E7QUFIQTtBQUZBLEc7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUywwQkFBMEIsRUFBRTtBQUMxQztBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFpRDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUEyQyxxQkFBcUIsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBcUwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjcuYXBwLjJiYjljODdjZWIyYWI2YzE3YTRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8by1mb3JtIDpvbi1zdWJtaXQ9XCJzaWduSW5cIj5cbiAgICA8bS1pbnB1dFxuICAgICAgOmRpc2FibGVkPVwiYmxvY2tGb3JtXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcbiAgICAgIHYtbW9kZWw9XCJ2YWx1ZXMudXNlclwiXG4gICAgLz5cbiAgICA8bS1pbnB1dFxuICAgICAgOmRpc2FibGVkPVwiYmxvY2tGb3JtXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiSGFzxYJvXCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICB2LW1vZGVsPVwidmFsdWVzLnBhc3N3b3JkXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJmLXRleHQtY2VudGVyIGYtdGV4dC1kYW5nZXJcIiB2LXRleHQ9XCJtZXNzYWdlXCIvPlxuICAgIDxhLWJ1dHRvbi1zdWJtaXRcbiAgICAgIDpkaXNhYmxlZD1cImJsb2NrRm9ybVwiXG4gICAgICA6aXMtc2VuZGluZz1cImlzU2VuZGluZ1wiXG4gICAgLz5cbiAgPC9vLWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnYXBpL2luZGV4JztcbmltcG9ydCB7IG1peGlucyB9IGZyb20gJ21peGlucy9iYXNlJztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJ3V0aWxzL21hY3Jvcy9yb3V0ZXMnO1xuaW1wb3J0IHsgdVByb21pc2UgfSBmcm9tICdAZGJldGthL3V0aWxzJztcbmltcG9ydCBNSW5wdXQgZnJvbSAnbW9sZWN1bGVzL2lucHV0JztcbmltcG9ydCBBQnV0dG9uU3VibWl0IGZyb20gJ2F0b21zL2J1dHRvbi9zdWJtaXQnO1xuaW1wb3J0IE9Gb3JtIGZyb20gJ29yZ2FuaXNtcy9mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnby1mb3JtLXNpZ24taW4nLFxuICBtaXhpbnM6IFttaXhpbnMuZm9ybV0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBPRm9ybSxcbiAgICBBQnV0dG9uU3VibWl0LFxuICAgIE1JbnB1dCxcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH0sXG4gICAgYmxvY2tGb3JtOiBmYWxzZSxcbiAgICBpc1NlbmRpbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KSxcbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKFBST0RVQ1RJT04gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNpZ25JbkF1dG9tYXRpY2FsbHkoKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNpZ25JbiAoZGF0YSkge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VzZXIvc2lnbkluJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFJPVVRFUy5zdGFydC5wYXRoKTtcbiAgICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYmxvY2tGb3JtID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2lnbkluICgpIHtcbiAgICAgIHRoaXMuaXNTZW5kaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYmxvY2tGb3JtID0gdHJ1ZTtcbiAgICAgIGFwaS5zaWduSW4odGhpcy52YWx1ZXMpXG4gICAgICAgIC50aGVuKHRoaXMub25TaWduSW4pXG4gICAgICAgIC5jYXRjaCh0aGlzLm9uRXJyb3JPY2N1cnMpO1xuICAgIH0sXG4gICAgc2lnbkluQXV0b21hdGljYWxseSAoKSB7XG4gICAgICB0aGlzLmlzU2VuZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmJsb2NrRm9ybSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlcy51c2VyID0gVVNFUjtcbiAgICAgIHRoaXMudmFsdWVzLnBhc3N3b3JkID0gUEFTU1dPUkQ7XG4gICAgICB1UHJvbWlzZS50aW1lb3V0KDUwMClcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zaWduSW4oKSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHQtcGFnZSB0aXRsZT1cIkxvZ293YW5pZVwiIGNsYXNzPVwiZi1mbGV4IGYtZmxleC1jb2xcIj5cbiAgICA8by1mb3JtLXNpZ24taW4vPlxuICAgIDxhLWJ1dHRvbi1zZWNvbmRhcnkgQGNsaWNrPVwiJHJvdXRlci5wdXNoKFJPVVRFUy5yZW1pbmRQYXNzd29yZC5wYXRoKVwiPlxuICAgICAgUHJ6eXBvbW5paiBoYXPFgm9cbiAgICA8L2EtYnV0dG9uLXNlY29uZGFyeT5cbiAgPC90LXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRQYWdlIGZyb20gJ3RlbXBsYXRlcy9wYWdlJztcbmltcG9ydCBPRm9ybVNpZ25JbiBmcm9tICdvcmdhbmlzbXMvZm9ybS9zaWduLWluJztcbmltcG9ydCBBQnV0dG9uU2Vjb25kYXJ5IGZyb20gJ2F0b21zL2J1dHRvbi9zZWNvbmRhcnknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwLXNpZ24taW4nLFxuICBjb21wb25lbnRzOiB7XG4gICAgQUJ1dHRvblNlY29uZGFyeSxcbiAgICBPRm9ybVNpZ25JbixcbiAgICBUUGFnZSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJvLWZvcm1cIixcbiAgICB7IGF0dHJzOiB7IFwib24tc3VibWl0XCI6IF92bS5zaWduSW4gfSB9LFxuICAgIFtcbiAgICAgIF9jKFwibS1pbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uYmxvY2tGb3JtLCBwbGFjZWhvbGRlcjogXCJFLW1haWxcIiB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWVzLnVzZXIsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlcywgXCJ1c2VyXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWVzLnVzZXJcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm0taW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRpc2FibGVkOiBfdm0uYmxvY2tGb3JtLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkhhc8WCb1wiLFxuICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWVzLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS52YWx1ZXMsIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZXMucGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImYtdGV4dC1jZW50ZXIgZi10ZXh0LWRhbmdlclwiLFxuICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tZXNzYWdlKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImEtYnV0dG9uLXN1Ym1pdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uYmxvY2tGb3JtLCBcImlzLXNlbmRpbmdcIjogX3ZtLmlzU2VuZGluZyB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInQtcGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZi1mbGV4IGYtZmxleC1jb2xcIiwgYXR0cnM6IHsgdGl0bGU6IFwiTG9nb3dhbmllXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiby1mb3JtLXNpZ24taW5cIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYS1idXR0b24tc2Vjb25kYXJ5XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChfdm0uUk9VVEVTLnJlbWluZFBhc3N3b3JkLnBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgIFByenlwb21uaWogaGFzxYJvXFxuICBcIildXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NpZ24taW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MDE3NzMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NpZ24taW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE5MDE3NzMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE5MDE3NzMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE5MDE3NzMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaWduLWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTAxNzczMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxOTAxNzczMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvcm0vc2lnbi1pbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbi1pbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbi1pbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTkwMTc3MzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NpZ24taW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNDJlOWVjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NpZ24taW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ExNDJlOWVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ExNDJlOWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ExNDJlOWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaWduLWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMTQyZTllYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhMTQyZTllYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcGFnZXMvc2lnbi1pbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbi1pbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbi1pbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTE0MmU5ZWMmXCIiXSwic291cmNlUm9vdCI6IiJ9