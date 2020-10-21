(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/clock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/clock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/date */ "./src/utils/date.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'clock.vue',
  data: () => ({
    hours: 0,
    minutes: 0,
    seconds: 0
  }),

  mounted() {
    this.updateDateTime();
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },

  beforeDestroy() {
    clearInterval(this.$options.interval);
  },

  methods: {
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = Object(utils_date__WEBPACK_IMPORTED_MODULE_0__["getMinutesAsString"])(now);
      this.seconds = Object(utils_date__WEBPACK_IMPORTED_MODULE_0__["getSecondsAsString"])(now);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/table-row/temporary-points.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/table-row/temporary-points.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/date */ "./src/utils/date.js");
/* harmony import */ var atoms_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! atoms/icon */ "./src/components/atoms/icon.vue");
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'm-table-row-temporary-points',
  components: {
    AIcon: atoms_icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: () => ({
    pointAppearanceTime: null,
    pointExpirationTime: null
  }),

  created() {
    this.pointExpirationTime = new Date(this.point.pointExpirationTime);
    this.pointAppearanceTime = Object(utils_date__WEBPACK_IMPORTED_MODULE_0__["modifyDateHours"])(this.pointExpirationTime, -this.pointDurationTime);
  },

  props: {
    pointDurationTime: {
      required: true,
      type: Number
    },
    point: {
      required: true,
      type: Object
    }
  },
  methods: {
    getAvailabilityTimeAsString(expirationDate) {
      return Object(utils_date__WEBPACK_IMPORTED_MODULE_0__["getHoursAndMinutesAsString"])(this.pointAppearanceTime) + ' - ' + Object(utils_date__WEBPACK_IMPORTED_MODULE_0__["getHoursAndMinutesAsString"])(expirationDate);
    },

    classByPointExpirationStatus(pointExpirationTime) {
      const now = new Date().getTime();

      if (this.pointAppearanceTime >= now) {
        return 'f-future-point';
      } else if (pointExpirationTime >= now) {
        return 'f-active-point';
      } else {
        return 'f-disabled-point';
      }
    },

    panTo(point) {
      const now = new Date().getTime();

      if (this.pointExpirationTime >= now) {
        this.$emit('panTo', point);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/temporary-points.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/temporary-points.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var molecules_table_row_temporary_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! molecules/table-row/temporary-points */ "./src/components/molecules/table-row/temporary-points.vue");
/* harmony import */ var molecules_clock_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! molecules/clock.vue */ "./src/components/molecules/clock.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var utils_macros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/macros */ "./src/utils/macros.js");
/* harmony import */ var map_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! map/index */ "./src/map/index.js");
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
  name: 'o-temporary-points',
  components: {
    MTableRowTemporaryPoints: molecules_table_row_temporary_points__WEBPACK_IMPORTED_MODULE_0__["default"],
    clock: molecules_clock_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: () => ({
    pointDurationTime: utils_macros__WEBPACK_IMPORTED_MODULE_3__["MACROS"].pointDurationTime
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('event', {
      points: 'getTemporaryPoints'
    })
  },
  methods: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])('event', ['setMapPosition', 'setMapZoom']),
    panToPointLocationOnMap: map_index__WEBPACK_IMPORTED_MODULE_4__["map"].panToPointLocationOnMap
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/temporary-points.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/temporary-points.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var templates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! templates/page */ "./src/components/templates/page.vue");
/* harmony import */ var organisms_temporary_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organisms/temporary-points */ "./src/components/organisms/temporary-points.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'p-collected-points',
  components: {
    TPage: templates_page__WEBPACK_IMPORTED_MODULE_0__["default"],
    OTemporaryPoints: organisms_temporary_points__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/clock.vue?vue&type=template&id=b3c86368&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/clock.vue?vue&type=template&id=b3c86368& ***!
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
  return _c(
    "div",
    { staticClass: "f-mb-2 f-text-center f-text-32 f-text-bold " },
    [
      _vm._v(
        "\n  " +
          _vm._s(_vm.hours) +
          ":" +
          _vm._s(_vm.minutes) +
          ":" +
          _vm._s(_vm.seconds) +
          "\n"
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/table-row/temporary-points.vue?vue&type=template&id=8a42ab76&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/table-row/temporary-points.vue?vue&type=template&id=8a42ab76& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "m-grid f-temporary-points" },
    [
      _c("a-icon", {
        class: _vm.classByPointExpirationStatus(_vm.pointExpirationTime),
        attrs: { name: _vm.ICONS.watch_later, size: 24 }
      }),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "f-text-left" }, [
          _vm._v(_vm._s(_vm.point.pointName))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "f-text-14" }, [
          _vm._v(
            " " +
              _vm._s(_vm.getAvailabilityTimeAsString(_vm.pointExpirationTime))
          )
        ])
      ]),
      _vm._v(" "),
      _c("a-icon", {
        class: _vm.classByPointExpirationStatus(_vm.pointExpirationTime),
        attrs: { name: _vm.ICONS.map, size: 24 },
        on: {
          click: function($event) {
            return _vm.panTo(_vm.point)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/temporary-points.vue?vue&type=template&id=8f419c46&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/temporary-points.vue?vue&type=template&id=8f419c46& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("clock"),
      _vm._v(" "),
      _vm._l(_vm.points, function(point) {
        return _c("m-table-row-temporary-points", {
          key: point.pointId,
          attrs: { point: point, pointDurationTime: _vm.pointDurationTime },
          on: { panTo: _vm.panToPointLocationOnMap }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/temporary-points.vue?vue&type=template&id=687cf3da&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/temporary-points.vue?vue&type=template&id=687cf3da& ***!
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
    "t-page",
    { attrs: { title: "Wydarzenia czasowe" } },
    [_c("o-temporary-points")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/molecules/clock.vue":
/*!********************************************!*\
  !*** ./src/components/molecules/clock.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock_vue_vue_type_template_id_b3c86368___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock.vue?vue&type=template&id=b3c86368& */ "./src/components/molecules/clock.vue?vue&type=template&id=b3c86368&");
/* harmony import */ var _clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.vue?vue&type=script&lang=js& */ "./src/components/molecules/clock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clock_vue_vue_type_template_id_b3c86368___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clock_vue_vue_type_template_id_b3c86368___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/molecules/clock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/molecules/clock.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/molecules/clock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./clock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/clock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/molecules/clock.vue?vue&type=template&id=b3c86368&":
/*!***************************************************************************!*\
  !*** ./src/components/molecules/clock.vue?vue&type=template&id=b3c86368& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_template_id_b3c86368___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./clock.vue?vue&type=template&id=b3c86368& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/clock.vue?vue&type=template&id=b3c86368&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_template_id_b3c86368___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_template_id_b3c86368___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/molecules/table-row/temporary-points.vue":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/table-row/temporary-points.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _temporary_points_vue_vue_type_template_id_8a42ab76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temporary-points.vue?vue&type=template&id=8a42ab76& */ "./src/components/molecules/table-row/temporary-points.vue?vue&type=template&id=8a42ab76&");
/* harmony import */ var _temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temporary-points.vue?vue&type=script&lang=js& */ "./src/components/molecules/table-row/temporary-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _temporary_points_vue_vue_type_template_id_8a42ab76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _temporary_points_vue_vue_type_template_id_8a42ab76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/molecules/table-row/temporary-points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/molecules/table-row/temporary-points.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/components/molecules/table-row/temporary-points.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./temporary-points.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/table-row/temporary-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/molecules/table-row/temporary-points.vue?vue&type=template&id=8a42ab76&":
/*!************************************************************************************************!*\
  !*** ./src/components/molecules/table-row/temporary-points.vue?vue&type=template&id=8a42ab76& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_8a42ab76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./temporary-points.vue?vue&type=template&id=8a42ab76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/table-row/temporary-points.vue?vue&type=template&id=8a42ab76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_8a42ab76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_8a42ab76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/organisms/temporary-points.vue":
/*!*******************************************************!*\
  !*** ./src/components/organisms/temporary-points.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _temporary_points_vue_vue_type_template_id_8f419c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temporary-points.vue?vue&type=template&id=8f419c46& */ "./src/components/organisms/temporary-points.vue?vue&type=template&id=8f419c46&");
/* harmony import */ var _temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temporary-points.vue?vue&type=script&lang=js& */ "./src/components/organisms/temporary-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _temporary_points_vue_vue_type_template_id_8f419c46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _temporary_points_vue_vue_type_template_id_8f419c46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/organisms/temporary-points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/organisms/temporary-points.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/components/organisms/temporary-points.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./temporary-points.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/temporary-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/organisms/temporary-points.vue?vue&type=template&id=8f419c46&":
/*!**************************************************************************************!*\
  !*** ./src/components/organisms/temporary-points.vue?vue&type=template&id=8f419c46& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_8f419c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./temporary-points.vue?vue&type=template&id=8f419c46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/temporary-points.vue?vue&type=template&id=8f419c46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_8f419c46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_8f419c46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/temporary-points.vue":
/*!***************************************************!*\
  !*** ./src/components/pages/temporary-points.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _temporary_points_vue_vue_type_template_id_687cf3da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temporary-points.vue?vue&type=template&id=687cf3da& */ "./src/components/pages/temporary-points.vue?vue&type=template&id=687cf3da&");
/* harmony import */ var _temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temporary-points.vue?vue&type=script&lang=js& */ "./src/components/pages/temporary-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _temporary_points_vue_vue_type_template_id_687cf3da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _temporary_points_vue_vue_type_template_id_687cf3da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/temporary-points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/temporary-points.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/pages/temporary-points.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./temporary-points.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/temporary-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/pages/temporary-points.vue?vue&type=template&id=687cf3da&":
/*!**********************************************************************************!*\
  !*** ./src/components/pages/temporary-points.vue?vue&type=template&id=687cf3da& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_687cf3da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./temporary-points.vue?vue&type=template&id=687cf3da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/temporary-points.vue?vue&type=template&id=687cf3da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_687cf3da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_temporary_points_vue_vue_type_template_id_687cf3da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/*! exports provided: modifyDateHours, getZeroPad, getMinutesAsString, getSecondsAsString, getFullDateAsString, getHoursAndMinutesAsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyDateHours", function() { return modifyDateHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZeroPad", function() { return getZeroPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutesAsString", function() { return getMinutesAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondsAsString", function() { return getSecondsAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullDateAsString", function() { return getFullDateAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursAndMinutesAsString", function() { return getHoursAndMinutesAsString; });
const modifyDateHours = (date, modifyValue) => {
  const modifiedDate = new Date(date);
  const modifiedDateHour = date.getHours() + modifyValue;
  return new Date(modifiedDate.setHours(modifiedDateHour));
};
const getZeroPad = n => (parseInt(n, 10) >= 10 ? '' : '0') + n;
const getMinutesAsString = date => `${getZeroPad(date.getMinutes())}`;
const getSecondsAsString = date => `${getZeroPad(date.getSeconds())}`;
const getFullDateAsString = date => `${date.getHours()}` + ':' + getMinutesAsString(date) + ':' + getSecondsAsString(date);
const getHoursAndMinutesAsString = date => {
  return `${date.getHours()}` + ':' + getMinutesAsString(date);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Nsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RhYmxlLXJvdy90ZW1wb3JhcnktcG9pbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL3RlbXBvcmFyeS1wb2ludHMudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wYWdlcy90ZW1wb3JhcnktcG9pbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvY2xvY2sudnVlPzRiNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RhYmxlLXJvdy90ZW1wb3JhcnktcG9pbnRzLnZ1ZT83YmUxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy90ZW1wb3JhcnktcG9pbnRzLnZ1ZT8zNjY2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3RlbXBvcmFyeS1wb2ludHMudnVlP2UyZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Nsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvY2xvY2sudnVlPzYzZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Nsb2NrLnZ1ZT80Njc5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy90YWJsZS1yb3cvdGVtcG9yYXJ5LXBvaW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RhYmxlLXJvdy90ZW1wb3JhcnktcG9pbnRzLnZ1ZT84MDdkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy90YWJsZS1yb3cvdGVtcG9yYXJ5LXBvaW50cy52dWU/NTRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvdGVtcG9yYXJ5LXBvaW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL3RlbXBvcmFyeS1wb2ludHMudnVlPzkxNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL3RlbXBvcmFyeS1wb2ludHMudnVlP2UzY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvdGVtcG9yYXJ5LXBvaW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvdGVtcG9yYXJ5LXBvaW50cy52dWU/M2ZiNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy90ZW1wb3JhcnktcG9pbnRzLnZ1ZT9jZjEyIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kYXRlLmpzIl0sIm5hbWVzIjpbIm1vZGlmeURhdGVIb3VycyIsImRhdGUiLCJtb2RpZnlWYWx1ZSIsIm1vZGlmaWVkRGF0ZSIsIkRhdGUiLCJtb2RpZmllZERhdGVIb3VyIiwiZ2V0SG91cnMiLCJzZXRIb3VycyIsImdldFplcm9QYWQiLCJuIiwicGFyc2VJbnQiLCJnZXRNaW51dGVzQXNTdHJpbmciLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kc0FzU3RyaW5nIiwiZ2V0U2Vjb25kcyIsImdldEZ1bGxEYXRlQXNTdHJpbmciLCJnZXRIb3Vyc0FuZE1pbnV0ZXNBc1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFFQTtBQUNBLG1CQURBO0FBR0E7QUFDQSxZQURBO0FBRUEsY0FGQTtBQUdBO0FBSEEsSUFIQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQSxHQVhBOztBQVlBO0FBQ0E7QUFDQSxHQWRBOztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBZkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2NBO0FBQ0E7QUFF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R0FBR0osSUFBSSxDQUFDSyxRQUFMLEtBQWtCSixXQUEzQztBQUNBLFNBQU8sSUFBSUUsSUFBSixDQUFTRCxZQUFZLENBQUNJLFFBQWIsQ0FBc0JGLGdCQUF0QixDQUFULENBQVA7QUFFRCxDQUxNO0FBT0EsTUFBTUcsVUFBVSxHQUFJQyxDQUFELElBQU8sQ0FBQ0MsUUFBUSxDQUFDRCxDQUFELEVBQUksRUFBSixDQUFSLElBQW1CLEVBQW5CLEdBQXdCLEVBQXhCLEdBQTZCLEdBQTlCLElBQXFDQSxDQUEvRDtBQUVBLE1BQU1FLGtCQUFrQixHQUFJVixJQUFELElBQVcsR0FBRU8sVUFBVSxDQUFDUCxJQUFJLENBQUNXLFVBQUwsRUFBRCxDQUFvQixFQUF0RTtBQUVBLE1BQU1DLGtCQUFrQixHQUFJWixJQUFELElBQVcsR0FBRU8sVUFBVSxDQUFDUCxJQUFJLENBQUNhLFVBQUwsRUFBRCxDQUFvQixFQUF0RTtBQUVBLE1BQU1DLG1CQUFtQixHQUFJZCxJQUFELElBQVcsR0FBRUEsSUFBSSxDQUFDSyxRQUFMLEVBQWdCLEVBQW5CLEdBQXVCLEdBQXZCLEdBQTZCSyxrQkFBa0IsQ0FBQ1YsSUFBRCxDQUEvQyxHQUF3RCxHQUF4RCxHQUE4RFksa0JBQWtCLENBQUNaLElBQUQsQ0FBdEg7QUFFQSxNQUFNZSwwQkFBMEIsR0FBSWYsSUFBRCxJQUFVO0FBQ2xELFNBQVEsR0FBRUEsSUFBSSxDQUFDSyxRQUFMLEVBQWdCLEVBQW5CLEdBQXVCLEdBQXZCLEdBQTZCSyxrQkFBa0IsQ0FBQ1YsSUFBRCxDQUF0RDtBQUNELENBRk0sQyIsImZpbGUiOiIzLmFwcC44MzMzMWI5YWYxM2Q5YTYyMjA3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImYtbWItMiBmLXRleHQtY2VudGVyIGYtdGV4dC0zMiBmLXRleHQtYm9sZCBcIj5cbiAgICB7eyBob3VycyB9fTp7eyBtaW51dGVzIH19Ont7IHNlY29uZHMgfX1cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZ2V0TWludXRlc0FzU3RyaW5nLCBnZXRTZWNvbmRzQXNTdHJpbmcgfSBmcm9tICd1dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY2xvY2sudnVlJyxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGhvdXJzOiAwLFxuICAgIG1pbnV0ZXM6IDAsXG4gICAgc2Vjb25kczogMCxcbiAgfSksXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICB0aGlzLiRvcHRpb25zLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVEYXRlVGltZSwgMTAwMCk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy4kb3B0aW9ucy5pbnRlcnZhbCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVEYXRlVGltZSAoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy5ob3VycyA9IG5vdy5nZXRIb3VycygpO1xuICAgICAgdGhpcy5taW51dGVzID0gZ2V0TWludXRlc0FzU3RyaW5nKG5vdyk7XG4gICAgICB0aGlzLnNlY29uZHMgPSBnZXRTZWNvbmRzQXNTdHJpbmcobm93KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibS1ncmlkIGYtdGVtcG9yYXJ5LXBvaW50c1wiPlxuICAgIDxhLWljb25cbiAgICAgIDpuYW1lPVwiSUNPTlMud2F0Y2hfbGF0ZXJcIlxuICAgICAgOnNpemU9XCIyNFwiXG4gICAgICA6Y2xhc3M9XCJjbGFzc0J5UG9pbnRFeHBpcmF0aW9uU3RhdHVzKHBvaW50RXhwaXJhdGlvblRpbWUpXCJcbiAgICAvPlxuXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmLXRleHQtbGVmdFwiPnt7IHBvaW50LnBvaW50TmFtZSB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImYtdGV4dC0xNFwiPiB7eyBnZXRBdmFpbGFiaWxpdHlUaW1lQXNTdHJpbmcocG9pbnRFeHBpcmF0aW9uVGltZSkgfX08L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxhLWljb25cbiAgICAgIDpuYW1lPVwiSUNPTlMubWFwXCJcbiAgICAgIDpzaXplPVwiMjRcIlxuICAgICAgOmNsYXNzPVwiY2xhc3NCeVBvaW50RXhwaXJhdGlvblN0YXR1cyhwb2ludEV4cGlyYXRpb25UaW1lKVwiXG4gICAgICBAY2xpY2s9XCJwYW5Ubyhwb2ludClcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGdldEhvdXJzQW5kTWludXRlc0FzU3RyaW5nLCBtb2RpZnlEYXRlSG91cnMgfSBmcm9tICd1dGlscy9kYXRlJztcbmltcG9ydCBBSWNvbiBmcm9tICdhdG9tcy9pY29uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbS10YWJsZS1yb3ctdGVtcG9yYXJ5LXBvaW50cycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBSWNvbixcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBwb2ludEFwcGVhcmFuY2VUaW1lOiBudWxsLFxuICAgIHBvaW50RXhwaXJhdGlvblRpbWU6IG51bGwsXG4gIH0pLFxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLnBvaW50RXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZSh0aGlzLnBvaW50LnBvaW50RXhwaXJhdGlvblRpbWUpO1xuICAgIHRoaXMucG9pbnRBcHBlYXJhbmNlVGltZSA9IG1vZGlmeURhdGVIb3Vycyh0aGlzLnBvaW50RXhwaXJhdGlvblRpbWUsIC10aGlzLnBvaW50RHVyYXRpb25UaW1lKTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBwb2ludER1cmF0aW9uVGltZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgICBwb2ludDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEF2YWlsYWJpbGl0eVRpbWVBc1N0cmluZyAoZXhwaXJhdGlvbkRhdGUpIHtcbiAgICAgIHJldHVybiBnZXRIb3Vyc0FuZE1pbnV0ZXNBc1N0cmluZyh0aGlzLnBvaW50QXBwZWFyYW5jZVRpbWUpICsgJyAtICcgKyBnZXRIb3Vyc0FuZE1pbnV0ZXNBc1N0cmluZyhleHBpcmF0aW9uRGF0ZSk7XG4gICAgfSxcbiAgICBjbGFzc0J5UG9pbnRFeHBpcmF0aW9uU3RhdHVzIChwb2ludEV4cGlyYXRpb25UaW1lKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgaWYgKHRoaXMucG9pbnRBcHBlYXJhbmNlVGltZSA+PSBub3cpIHtcbiAgICAgICAgcmV0dXJuICdmLWZ1dHVyZS1wb2ludCc7XG4gICAgICB9IGVsc2UgaWYgKHBvaW50RXhwaXJhdGlvblRpbWUgPj0gbm93KSB7XG4gICAgICAgIHJldHVybiAnZi1hY3RpdmUtcG9pbnQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdmLWRpc2FibGVkLXBvaW50JztcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhblRvIChwb2ludCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBpZiAodGhpcy5wb2ludEV4cGlyYXRpb25UaW1lID49IG5vdykge1xuICAgICAgICB0aGlzLiRlbWl0KCdwYW5UbycsIHBvaW50KTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGNsb2NrLz5cbiAgICA8bS10YWJsZS1yb3ctdGVtcG9yYXJ5LXBvaW50c1xuICAgICAgdi1mb3I9XCJwb2ludCBpbiBwb2ludHNcIlxuICAgICAgOnBvaW50PVwicG9pbnRcIlxuICAgICAgOmtleT1cInBvaW50LnBvaW50SWRcIlxuICAgICAgOnBvaW50RHVyYXRpb25UaW1lPVwicG9pbnREdXJhdGlvblRpbWVcIlxuICAgICAgQHBhblRvPVwicGFuVG9Qb2ludExvY2F0aW9uT25NYXBcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNVGFibGVSb3dUZW1wb3JhcnlQb2ludHMgZnJvbSAnbW9sZWN1bGVzL3RhYmxlLXJvdy90ZW1wb3JhcnktcG9pbnRzJztcbmltcG9ydCBjbG9jayBmcm9tICdtb2xlY3VsZXMvY2xvY2sudnVlJztcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgTUFDUk9TIH0gZnJvbSAndXRpbHMvbWFjcm9zJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ21hcC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ28tdGVtcG9yYXJ5LXBvaW50cycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNVGFibGVSb3dUZW1wb3JhcnlQb2ludHMsXG4gICAgY2xvY2ssXG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcG9pbnREdXJhdGlvblRpbWU6IE1BQ1JPUy5wb2ludER1cmF0aW9uVGltZSxcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycygnZXZlbnQnLCB7XG4gICAgICBwb2ludHM6ICdnZXRUZW1wb3JhcnlQb2ludHMnLFxuICAgIH0pLFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwTXV0YXRpb25zKCdldmVudCcsIFtcbiAgICAgICdzZXRNYXBQb3NpdGlvbicsXG4gICAgICAnc2V0TWFwWm9vbScsXG4gICAgXSksXG4gICAgcGFuVG9Qb2ludExvY2F0aW9uT25NYXA6IG1hcC5wYW5Ub1BvaW50TG9jYXRpb25Pbk1hcCxcbiAgfSxcbn1cbjtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8dC1wYWdlIHRpdGxlPVwiV3lkYXJ6ZW5pYSBjemFzb3dlXCI+XG4gICAgPG8tdGVtcG9yYXJ5LXBvaW50cy8+XG4gIDwvdC1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUUGFnZSBmcm9tICd0ZW1wbGF0ZXMvcGFnZSc7XG5pbXBvcnQgT1RlbXBvcmFyeVBvaW50cyBmcm9tICdvcmdhbmlzbXMvdGVtcG9yYXJ5LXBvaW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3AtY29sbGVjdGVkLXBvaW50cycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUUGFnZSxcbiAgICBPVGVtcG9yYXJ5UG9pbnRzLFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZi1tYi0yIGYtdGV4dC1jZW50ZXIgZi10ZXh0LTMyIGYtdGV4dC1ib2xkIFwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgXCIgK1xuICAgICAgICAgIF92bS5fcyhfdm0uaG91cnMpICtcbiAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgX3ZtLl9zKF92bS5taW51dGVzKSArXG4gICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgIF92bS5fcyhfdm0uc2Vjb25kcykgK1xuICAgICAgICAgIFwiXFxuXCJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtLWdyaWQgZi10ZW1wb3JhcnktcG9pbnRzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgIGNsYXNzOiBfdm0uY2xhc3NCeVBvaW50RXhwaXJhdGlvblN0YXR1cyhfdm0ucG9pbnRFeHBpcmF0aW9uVGltZSksXG4gICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5JQ09OUy53YXRjaF9sYXRlciwgc2l6ZTogMjQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImYtdGV4dC1sZWZ0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBvaW50LnBvaW50TmFtZSkpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImYtdGV4dC0xNFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0QXZhaWxhYmlsaXR5VGltZUFzU3RyaW5nKF92bS5wb2ludEV4cGlyYXRpb25UaW1lKSlcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgIGNsYXNzOiBfdm0uY2xhc3NCeVBvaW50RXhwaXJhdGlvblN0YXR1cyhfdm0ucG9pbnRFeHBpcmF0aW9uVGltZSksXG4gICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5JQ09OUy5tYXAsIHNpemU6IDI0IH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5wYW5Ubyhfdm0ucG9pbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiY2xvY2tcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5wb2ludHMsIGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBfYyhcIm0tdGFibGUtcm93LXRlbXBvcmFyeS1wb2ludHNcIiwge1xuICAgICAgICAgIGtleTogcG9pbnQucG9pbnRJZCxcbiAgICAgICAgICBhdHRyczogeyBwb2ludDogcG9pbnQsIHBvaW50RHVyYXRpb25UaW1lOiBfdm0ucG9pbnREdXJhdGlvblRpbWUgfSxcbiAgICAgICAgICBvbjogeyBwYW5UbzogX3ZtLnBhblRvUG9pbnRMb2NhdGlvbk9uTWFwIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidC1wYWdlXCIsXG4gICAgeyBhdHRyczogeyB0aXRsZTogXCJXeWRhcnplbmlhIGN6YXNvd2VcIiB9IH0sXG4gICAgW19jKFwiby10ZW1wb3JhcnktcG9pbnRzXCIpXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Nsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iM2M4NjM2OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Nsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2IzYzg2MzY4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2IzYzg2MzY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2IzYzg2MzY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjNjODYzNjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjNjODYzNjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL21vbGVjdWxlcy9jbG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjNjODYzNjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThhNDJhYjc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhhNDJhYjc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhhNDJhYjc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhhNDJhYjc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YTQyYWI3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4YTQyYWI3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RhYmxlLXJvdy90ZW1wb3JhcnktcG9pbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YTQyYWI3NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGVtcG9yYXJ5LXBvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGY0MTljNDYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGVtcG9yYXJ5LXBvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9kb21pbmlrL1Byb2plY3RzL2hhcmNtYXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGY0MTljNDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGY0MTljNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGY0MTljNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThmNDE5YzQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhmNDE5YzQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvdGVtcG9yYXJ5LXBvaW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVtcG9yYXJ5LXBvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVtcG9yYXJ5LXBvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGY0MTljNDYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4N2NmM2RhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RlbXBvcmFyeS1wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY4N2NmM2RhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY4N2NmM2RhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY4N2NmM2RhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ODdjZjNkYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ODdjZjNkYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcGFnZXMvdGVtcG9yYXJ5LXBvaW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wb3JhcnktcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVtcG9yYXJ5LXBvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVtcG9yYXJ5LXBvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njg3Y2YzZGEmXCIiLCJleHBvcnQgY29uc3QgbW9kaWZ5RGF0ZUhvdXJzID0gKGRhdGUsIG1vZGlmeVZhbHVlKSA9PiB7XG4gIGNvbnN0IG1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCBtb2RpZmllZERhdGVIb3VyID0gZGF0ZS5nZXRIb3VycygpICsgbW9kaWZ5VmFsdWU7XG4gIHJldHVybiBuZXcgRGF0ZShtb2RpZmllZERhdGUuc2V0SG91cnMobW9kaWZpZWREYXRlSG91cikpO1xuXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0WmVyb1BhZCA9IChuKSA9PiAocGFyc2VJbnQobiwgMTApID49IDEwID8gJycgOiAnMCcpICsgbjtcblxuZXhwb3J0IGNvbnN0IGdldE1pbnV0ZXNBc1N0cmluZyA9IChkYXRlKSA9PiBgJHtnZXRaZXJvUGFkKGRhdGUuZ2V0TWludXRlcygpKX1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kc0FzU3RyaW5nID0gKGRhdGUpID0+IGAke2dldFplcm9QYWQoZGF0ZS5nZXRTZWNvbmRzKCkpfWA7XG5cbmV4cG9ydCBjb25zdCBnZXRGdWxsRGF0ZUFzU3RyaW5nID0gKGRhdGUpID0+IGAke2RhdGUuZ2V0SG91cnMoKX1gICsgJzonICsgZ2V0TWludXRlc0FzU3RyaW5nKGRhdGUpICsgJzonICsgZ2V0U2Vjb25kc0FzU3RyaW5nKGRhdGUpO1xuXG5leHBvcnQgY29uc3QgZ2V0SG91cnNBbmRNaW51dGVzQXNTdHJpbmcgPSAoZGF0ZSkgPT4ge1xuICByZXR1cm4gYCR7ZGF0ZS5nZXRIb3VycygpfWAgKyAnOicgKyBnZXRNaW51dGVzQXNTdHJpbmcoZGF0ZSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==