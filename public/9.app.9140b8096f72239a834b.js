(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/start.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/start.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var utils_style_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/style-manager */ "./src/utils/style-manager.js");
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
  name: 'o-start',
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['userTeam', 'sumOfCollectedPoints']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('event', ['name']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('theme', {
      themeName: 'name'
    }),

    style() {
      if (this.themeName === utils_style_manager__WEBPACK_IMPORTED_MODULE_1__["THEMES"].dark) {
        return 'background-image: url("/img/map-screen-dark.png")';
      } else {
        return 'background-image: url("/img/map-screen.png")';
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/start.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/start.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var templates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! templates/page */ "./src/components/templates/page.vue");
/* harmony import */ var organisms_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organisms/start */ "./src/components/organisms/start.vue");
/* harmony import */ var atoms_button_primary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atoms/button/primary */ "./src/components/atoms/button/primary.vue");
/* harmony import */ var atoms_button_secondary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! atoms/button/secondary */ "./src/components/atoms/button/secondary.vue");
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
  name: 'p-start',
  components: {
    AButtonSecondary: atoms_button_secondary__WEBPACK_IMPORTED_MODULE_3__["default"],
    AButtonPrimary: atoms_button_primary__WEBPACK_IMPORTED_MODULE_2__["default"],
    TPage: templates_page__WEBPACK_IMPORTED_MODULE_0__["default"],
    OStart: organisms_start__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/start.vue?vue&type=template&id=37887ed4&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/start.vue?vue&type=template&id=37887ed4& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "m-panel f-start" }, [
    _c("div", { staticClass: "a-img f-map", style: _vm.style }, [
      _c("div", {
        staticClass: "a-text f-title f-start",
        domProps: { textContent: _vm._s(_vm.name) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "f-p-2" }, [
      _vm.sumOfCollectedPoints > 0
        ? _c("div", { staticClass: "a-text f-subtitle f-start" }, [
            _vm._v("\n      Zebraliście już "),
            _c("span", { staticClass: "f-text-white" }, [
              _vm._v(_vm._s(_vm.sumOfCollectedPoints) + " pkt")
            ])
          ])
        : _c("div", { staticClass: "a-text f-subtitle f-start" }, [
            _vm._v("\n      Nie zebraliście jeszcze żadnych punktów\n    ")
          ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/start.vue?vue&type=template&id=4fd018f7&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/start.vue?vue&type=template&id=4fd018f7& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    { staticClass: "f-start", attrs: { title: "Start" } },
    [
      _c("o-start"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "f-p-2" },
        [
          _c(
            "a-button-primary",
            {
              staticClass: "f-fill f-mt-3 f-mb-4",
              on: {
                click: function($event) {
                  return _vm.$router.push(_vm.ROUTES.map.path)
                }
              }
            },
            [_vm._v("\n      Rozpocznij poszukiwania!\n    ")]
          ),
          _vm._v(" "),
          _c(
            "a-button-secondary",
            {
              staticClass: "f-fill",
              on: {
                click: function($event) {
                  return _vm.$router.push(_vm.ROUTES.collectedPoints.path)
                }
              }
            },
            [_vm._v("\n      Sprawdź swoje wyniki\n    ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/organisms/start.vue":
/*!********************************************!*\
  !*** ./src/components/organisms/start.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_vue_vue_type_template_id_37887ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.vue?vue&type=template&id=37887ed4& */ "./src/components/organisms/start.vue?vue&type=template&id=37887ed4&");
/* harmony import */ var _start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.vue?vue&type=script&lang=js& */ "./src/components/organisms/start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _start_vue_vue_type_template_id_37887ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _start_vue_vue_type_template_id_37887ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/organisms/start.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/organisms/start.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/organisms/start.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./start.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/organisms/start.vue?vue&type=template&id=37887ed4&":
/*!***************************************************************************!*\
  !*** ./src/components/organisms/start.vue?vue&type=template&id=37887ed4& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_37887ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./start.vue?vue&type=template&id=37887ed4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/start.vue?vue&type=template&id=37887ed4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_37887ed4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_37887ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/start.vue":
/*!****************************************!*\
  !*** ./src/components/pages/start.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_vue_vue_type_template_id_4fd018f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.vue?vue&type=template&id=4fd018f7& */ "./src/components/pages/start.vue?vue&type=template&id=4fd018f7&");
/* harmony import */ var _start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.vue?vue&type=script&lang=js& */ "./src/components/pages/start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _start_vue_vue_type_template_id_4fd018f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _start_vue_vue_type_template_id_4fd018f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/start.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/start.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/pages/start.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./start.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/pages/start.vue?vue&type=template&id=4fd018f7&":
/*!***********************************************************************!*\
  !*** ./src/components/pages/start.vue?vue&type=template&id=4fd018f7& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_4fd018f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./start.vue?vue&type=template&id=4fd018f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/start.vue?vue&type=template&id=4fd018f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_4fd018f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_4fd018f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0YXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3RhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9zdGFydC52dWU/OTdmNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdGFydC52dWU/YWJlMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvc3RhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9zdGFydC52dWU/MzdlNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvc3RhcnQudnVlP2FjYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3RhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N0YXJ0LnZ1ZT80YTUzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N0YXJ0LnZ1ZT83NzA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFFQTtBQUNBLGlCQURBO0FBRUEsY0FDQSxvRUFDQSxVQURBLEVBRUEsc0JBRkEsRUFEQTtBQUtBLHlFQUNBLE1BREEsRUFMQTtBQVFBO0FBQ0E7QUFEQSxNQVJBOztBQVdBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQkE7QUFGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGlCQURBO0FBRUE7QUFDQSxvRkFEQTtBQUVBLGdGQUZBO0FBR0EsaUVBSEE7QUFJQTtBQUpBO0FBRkEsRzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRCxlQUFlLCtDQUErQztBQUM5RDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGlDQUFpQyxpQkFBaUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFtTCxDQUFnQiwrT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBbUwsQ0FBZ0IsK09BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjkuYXBwLjkxNDBiODA5NmY3MjIzOWE4MzRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibS1wYW5lbCBmLXN0YXJ0XCI+XG4gICAgPGRpdiBjbGFzcz1cImEtaW1nIGYtbWFwXCIgOnN0eWxlPVwic3R5bGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhLXRleHQgZi10aXRsZSBmLXN0YXJ0XCIgdi10ZXh0PVwibmFtZVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZi1wLTJcIj5cbiAgICAgIDxkaXYgdi1pZj1cInN1bU9mQ29sbGVjdGVkUG9pbnRzID4gMFwiIGNsYXNzPVwiYS10ZXh0IGYtc3VidGl0bGUgZi1zdGFydFwiPlxuICAgICAgICBaZWJyYWxpxZtjaWUganXFvCA8c3BhbiBjbGFzcz1cImYtdGV4dC13aGl0ZVwiPnt7IHN1bU9mQ29sbGVjdGVkUG9pbnRzIH19IHBrdDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJhLXRleHQgZi1zdWJ0aXRsZSBmLXN0YXJ0XCI+XG4gICAgICAgIE5pZSB6ZWJyYWxpxZtjaWUgamVzemN6ZSDFvGFkbnljaCBwdW5rdMOzd1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IFRIRU1FUyB9IGZyb20gJ3V0aWxzL3N0eWxlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvLXN0YXJ0JyxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKCd1c2VyJywgW1xuICAgICAgJ3VzZXJUZWFtJyxcbiAgICAgICdzdW1PZkNvbGxlY3RlZFBvaW50cycsXG4gICAgXSksXG4gICAgLi4ubWFwR2V0dGVycygnZXZlbnQnLCBbXG4gICAgICAnbmFtZScsXG4gICAgXSksXG4gICAgLi4ubWFwR2V0dGVycygndGhlbWUnLCB7XG4gICAgICB0aGVtZU5hbWU6ICduYW1lJyxcbiAgICB9KSxcbiAgICBzdHlsZSAoKSB7XG4gICAgICBpZiAodGhpcy50aGVtZU5hbWUgPT09IFRIRU1FUy5kYXJrKSB7XG4gICAgICAgIHJldHVybiAnYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltZy9tYXAtc2NyZWVuLWRhcmsucG5nXCIpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltZy9tYXAtc2NyZWVuLnBuZ1wiKSc7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8dC1wYWdlIHRpdGxlPVwiU3RhcnRcIiBjbGFzcz1cImYtc3RhcnRcIj5cbiAgICA8by1zdGFydD48L28tc3RhcnQ+XG4gICAgPGRpdiBjbGFzcz1cImYtcC0yXCI+XG4gICAgICA8YS1idXR0b24tcHJpbWFyeVxuICAgICAgICBjbGFzcz1cImYtZmlsbCBmLW10LTMgZi1tYi00XCJcbiAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKFJPVVRFUy5tYXAucGF0aClcIlxuICAgICAgPlxuICAgICAgICBSb3pwb2N6bmlqIHBvc3p1a2l3YW5pYSFcbiAgICAgIDwvYS1idXR0b24tcHJpbWFyeT5cbiAgICAgIDxhLWJ1dHRvbi1zZWNvbmRhcnlcbiAgICAgICAgY2xhc3M9XCJmLWZpbGxcIlxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goUk9VVEVTLmNvbGxlY3RlZFBvaW50cy5wYXRoKVwiXG4gICAgICA+XG4gICAgICAgIFNwcmF3ZMW6IHN3b2plIHd5bmlraVxuICAgICAgPC9hLWJ1dHRvbi1zZWNvbmRhcnk+XG4gICAgPC9kaXY+XG4gIDwvdC1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUUGFnZSBmcm9tICd0ZW1wbGF0ZXMvcGFnZSc7XG5pbXBvcnQgT1N0YXJ0IGZyb20gJ29yZ2FuaXNtcy9zdGFydCc7XG5pbXBvcnQgQUJ1dHRvblByaW1hcnkgZnJvbSAnYXRvbXMvYnV0dG9uL3ByaW1hcnknO1xuaW1wb3J0IEFCdXR0b25TZWNvbmRhcnkgZnJvbSAnYXRvbXMvYnV0dG9uL3NlY29uZGFyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3Atc3RhcnQnLFxuICBjb21wb25lbnRzOiB7XG4gICAgQUJ1dHRvblNlY29uZGFyeSxcbiAgICBBQnV0dG9uUHJpbWFyeSxcbiAgICBUUGFnZSxcbiAgICBPU3RhcnQsXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibS1wYW5lbCBmLXN0YXJ0XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYS1pbWcgZi1tYXBcIiwgc3R5bGU6IF92bS5zdHlsZSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImEtdGV4dCBmLXRpdGxlIGYtc3RhcnRcIixcbiAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubmFtZSkgfVxuICAgICAgfSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZi1wLTJcIiB9LCBbXG4gICAgICBfdm0uc3VtT2ZDb2xsZWN0ZWRQb2ludHMgPiAwXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhLXRleHQgZi1zdWJ0aXRsZSBmLXN0YXJ0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgWmVicmFsacWbY2llIGp1xbwgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZi10ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdW1PZkNvbGxlY3RlZFBvaW50cykgKyBcIiBwa3RcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImEtdGV4dCBmLXN1YnRpdGxlIGYtc3RhcnRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBOaWUgemVicmFsacWbY2llIGplc3pjemUgxbxhZG55Y2ggcHVua3TDs3dcXG4gICAgXCIpXG4gICAgICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0LXBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImYtc3RhcnRcIiwgYXR0cnM6IHsgdGl0bGU6IFwiU3RhcnRcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJvLXN0YXJ0XCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImYtcC0yXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhLWJ1dHRvbi1wcmltYXJ5XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImYtZmlsbCBmLW10LTMgZi1tYi00XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goX3ZtLlJPVVRFUy5tYXAucGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgUm96cG9jem5paiBwb3N6dWtpd2FuaWEhXFxuICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImEtYnV0dG9uLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmLWZpbGxcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChfdm0uUk9VVEVTLmNvbGxlY3RlZFBvaW50cy5wYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTcHJhd2TFuiBzd29qZSB3eW5pa2lcXG4gICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zdGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc4ODdlZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zdGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2RvbWluaWsvUHJvamVjdHMvaGFyY21hcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzg4N2VkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzg4N2VkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzg4N2VkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3ODg3ZWQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3ODg3ZWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvc3RhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3ODg3ZWQ0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zdGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGZkMDE4ZjcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zdGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2RvbWluaWsvUHJvamVjdHMvaGFyY21hcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZmQwMThmNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZmQwMThmNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZmQwMThmNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmZDAxOGY3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRmZDAxOGY3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wYWdlcy9zdGFydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0YXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGZkMDE4ZjcmXCIiXSwic291cmNlUm9vdCI6IiJ9