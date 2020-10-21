(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/atoms/icon/category.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/icon/category.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var atoms_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atoms/icon */ "./src/components/atoms/icon.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'a-icon-category',
  components: {
    AIcon: atoms_icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    categoryId: {
      type: [Number, String],
      required: true
    }
  },
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('event', ['getCategoryById']),

    categoryClassById() {
      const pointShape = this.getCategoryById(this.categoryId).pointShape;

      switch (pointShape) {
        case 1:
          return 'f-text-info';

        case 2:
          return 'f-text-warning';

        case 3:
          return 'f-text-danger';

        default:
          return '';
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/category-sum.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/row/category-sum.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var atoms_icon_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atoms/icon/category */ "./src/components/atoms/icon/category.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: 'm-row-category-sum',
  components: {
    AIconCategory: atoms_icon_category__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', ['collectedPoints']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('event', ['getCategoryById'])
  },
  methods: {
    getCollectedPointsLengthById(categoryId) {
      return this.collectedPoints.filter(point => point.pointCategory === categoryId).length;
    },

    getCollectedPointsValueById(categoryId) {
      const length = this.collectedPoints.filter(point => point.pointCategory === categoryId).length;
      return length * this.getCategoryById(categoryId).pointValue;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/point.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/row/point.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var atoms_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atoms/icon */ "./src/components/atoms/icon.vue");
/* harmony import */ var atoms_icon_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! atoms/icon/category */ "./src/components/atoms/icon/category.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
  name: 'm-row-point',
  components: {
    AIconCategory: atoms_icon_category__WEBPACK_IMPORTED_MODULE_1__["default"],
    AIcon: atoms_icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: () => ({
    detailsAreOpen: false
  }),
  props: {
    point: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('event', ['getCategoryById']),

    getCollectionTime() {
      moment__WEBPACK_IMPORTED_MODULE_3___default.a.locale('pl');
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(this.point.pointCollectionTime).calendar();
    }

  },
  methods: {
    toggleDetails() {
      this.detailsAreOpen = this.detailsAreOpen === false;
    },

    panTo: map_index__WEBPACK_IMPORTED_MODULE_4__["map"].panToPointLocationOnMap
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/collected-points.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/collected-points.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var molecules_row_category_sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! molecules/row/category-sum */ "./src/components/molecules/row/category-sum.vue");
/* harmony import */ var molecules_row_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! molecules/row/point */ "./src/components/molecules/row/point.vue");
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
  name: 'o-collected-points',
  components: {
    MRowPoint: molecules_row_point__WEBPACK_IMPORTED_MODULE_2__["default"],
    MRowCategorySum: molecules_row_category_sum__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['collectedPoints']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('event', ['categories']),

    filteredCategories() {
      return this.categories.filter(category => category.categoryId !== 0);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collected-points.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/collected-points.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var templates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! templates/page */ "./src/components/templates/page.vue");
/* harmony import */ var organisms_collected_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organisms/collected-points */ "./src/components/organisms/collected-points.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'p-collected-points',
  components: {
    OCollectedPoints: organisms_collected_points__WEBPACK_IMPORTED_MODULE_1__["default"],
    TPage: templates_page__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/atoms/icon/category.vue?vue&type=template&id=26701667&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/icon/category.vue?vue&type=template&id=26701667& ***!
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
  return _c("a-icon", {
    class: _vm.categoryClassById,
    attrs: { name: _vm.ICONS.stop_circle }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/category-sum.vue?vue&type=template&id=fc1d5a7a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/row/category-sum.vue?vue&type=template&id=fc1d5a7a& ***!
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
  return _c("div", { staticClass: "m-grid f-category-sum" }, [
    _c(
      "div",
      [
        _c("a-icon-category", {
          attrs: { "category-id": _vm.category.categoryId }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", [
      _vm._v(_vm._s(_vm.getCollectedPointsLengthById(_vm.category.categoryId)))
    ]),
    _vm._v(" "),
    _c("div", [
      _vm._v(
        _vm._s(_vm.getCollectedPointsValueById(_vm.category.categoryId)) +
          " pkt"
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/point.vue?vue&type=template&id=1f7a69d9&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/row/point.vue?vue&type=template&id=1f7a69d9& ***!
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
  return _c("div", [
    _c("div", { staticClass: "m-grid f-point" }, [
      _c(
        "div",
        [
          _c("a-icon-category", {
            attrs: { "category-id": _vm.point.pointCategory }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", [_vm._v(_vm._s(_vm.point.pointId))]),
      _vm._v(" "),
      _c("div", [
        _vm._v(
          _vm._s(_vm.getCategoryById(_vm.point.pointCategory).pointValue) +
            " pkt"
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("a-icon", {
            attrs: { name: _vm.ICONS.map },
            on: {
              click: function($event) {
                return _vm.panTo(_vm.point)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("a-icon", {
            attrs: { name: _vm.ICONS.arrow_drop_down },
            on: { click: _vm.toggleDetails }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm.detailsAreOpen
      ? _c(
          "div",
          { staticClass: "f-line-18 f-text-14 f-text-left f-pl-3 f-pb-1" },
          [
            _vm._v("\n    Współrzędne: "),
            _c("span", { staticClass: "f-text-bold" }, [
              _vm._v(
                _vm._s(_vm.point.pointLatitude) +
                  ", " +
                  _vm._s(_vm.point.pointLongitude)
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v("\n    Czas zebrania: "),
            _c("span", { staticClass: "f-text-bold" }, [
              _vm._v(_vm._s(_vm.getCollectionTime))
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/collected-points.vue?vue&type=template&id=49bc99e5&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/collected-points.vue?vue&type=template&id=49bc99e5& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "f-line-24" },
      [
        _c("div", { staticClass: "a-text f-title f-table" }, [
          _vm._v("Suma punktów wg kategorii")
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.filteredCategories, function(category) {
          return _c("m-row-category-sum", {
            key: category.categoryId,
            attrs: { category: category }
          })
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "f-pt-3 f-line-24" },
      [
        _c("div", { staticClass: "a-text f-title f-table" }, [
          _vm._v("Lista zebranych punktów")
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._l(_vm.collectedPoints.reverse(), function(point) {
          return _c("m-row-point", {
            key: point.pointId,
            attrs: { point: point }
          })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-row f-header f-category-sum" }, [
      _c("div", [_vm._v("Kategoria")]),
      _vm._v(" "),
      _c("div", [_vm._v("Ilość zebranych")]),
      _vm._v(" "),
      _c("div", [_vm._v("Suma wartości")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-row f-header f-point" }, [
      _c("div", [_vm._v("Kat.")]),
      _vm._v(" "),
      _c("div", [_vm._v("Kod")]),
      _vm._v(" "),
      _c("div", [_vm._v("Wartość")]),
      _vm._v(" "),
      _c("div", [_vm._v("Miejsce")]),
      _vm._v(" "),
      _c("div", [_vm._v("Rozwiń")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collected-points.vue?vue&type=template&id=0c4b483c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/collected-points.vue?vue&type=template&id=0c4b483c& ***!
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
    { staticClass: "f-text-center", attrs: { title: "Zebrane punkty" } },
    [_c("o-collected-points")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/atoms/icon/category.vue":
/*!************************************************!*\
  !*** ./src/components/atoms/icon/category.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_26701667___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=26701667& */ "./src/components/atoms/icon/category.vue?vue&type=template&id=26701667&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./src/components/atoms/icon/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_26701667___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_26701667___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/atoms/icon/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/atoms/icon/category.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/atoms/icon/category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/atoms/icon/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/atoms/icon/category.vue?vue&type=template&id=26701667&":
/*!*******************************************************************************!*\
  !*** ./src/components/atoms/icon/category.vue?vue&type=template&id=26701667& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_26701667___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=26701667& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/atoms/icon/category.vue?vue&type=template&id=26701667&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_26701667___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_26701667___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/molecules/row/category-sum.vue":
/*!*******************************************************!*\
  !*** ./src/components/molecules/row/category-sum.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_sum_vue_vue_type_template_id_fc1d5a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-sum.vue?vue&type=template&id=fc1d5a7a& */ "./src/components/molecules/row/category-sum.vue?vue&type=template&id=fc1d5a7a&");
/* harmony import */ var _category_sum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-sum.vue?vue&type=script&lang=js& */ "./src/components/molecules/row/category-sum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_sum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_sum_vue_vue_type_template_id_fc1d5a7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_sum_vue_vue_type_template_id_fc1d5a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/molecules/row/category-sum.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/molecules/row/category-sum.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/components/molecules/row/category-sum.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_category_sum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./category-sum.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/category-sum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_category_sum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/molecules/row/category-sum.vue?vue&type=template&id=fc1d5a7a&":
/*!**************************************************************************************!*\
  !*** ./src/components/molecules/row/category-sum.vue?vue&type=template&id=fc1d5a7a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_sum_vue_vue_type_template_id_fc1d5a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category-sum.vue?vue&type=template&id=fc1d5a7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/category-sum.vue?vue&type=template&id=fc1d5a7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_sum_vue_vue_type_template_id_fc1d5a7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_sum_vue_vue_type_template_id_fc1d5a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/molecules/row/point.vue":
/*!************************************************!*\
  !*** ./src/components/molecules/row/point.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_vue_vue_type_template_id_1f7a69d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.vue?vue&type=template&id=1f7a69d9& */ "./src/components/molecules/row/point.vue?vue&type=template&id=1f7a69d9&");
/* harmony import */ var _point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.vue?vue&type=script&lang=js& */ "./src/components/molecules/row/point.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _point_vue_vue_type_template_id_1f7a69d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _point_vue_vue_type_template_id_1f7a69d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/molecules/row/point.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/molecules/row/point.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/molecules/row/point.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/point.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/molecules/row/point.vue?vue&type=template&id=1f7a69d9&":
/*!*******************************************************************************!*\
  !*** ./src/components/molecules/row/point.vue?vue&type=template&id=1f7a69d9& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_1f7a69d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=template&id=1f7a69d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/molecules/row/point.vue?vue&type=template&id=1f7a69d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_1f7a69d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_1f7a69d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/organisms/collected-points.vue":
/*!*******************************************************!*\
  !*** ./src/components/organisms/collected-points.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collected_points_vue_vue_type_template_id_49bc99e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collected-points.vue?vue&type=template&id=49bc99e5& */ "./src/components/organisms/collected-points.vue?vue&type=template&id=49bc99e5&");
/* harmony import */ var _collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collected-points.vue?vue&type=script&lang=js& */ "./src/components/organisms/collected-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collected_points_vue_vue_type_template_id_49bc99e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collected_points_vue_vue_type_template_id_49bc99e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/organisms/collected-points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/organisms/collected-points.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/components/organisms/collected-points.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./collected-points.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/collected-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/organisms/collected-points.vue?vue&type=template&id=49bc99e5&":
/*!**************************************************************************************!*\
  !*** ./src/components/organisms/collected-points.vue?vue&type=template&id=49bc99e5& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_template_id_49bc99e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./collected-points.vue?vue&type=template&id=49bc99e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/organisms/collected-points.vue?vue&type=template&id=49bc99e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_template_id_49bc99e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_template_id_49bc99e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/collected-points.vue":
/*!***************************************************!*\
  !*** ./src/components/pages/collected-points.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collected_points_vue_vue_type_template_id_0c4b483c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collected-points.vue?vue&type=template&id=0c4b483c& */ "./src/components/pages/collected-points.vue?vue&type=template&id=0c4b483c&");
/* harmony import */ var _collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collected-points.vue?vue&type=script&lang=js& */ "./src/components/pages/collected-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collected_points_vue_vue_type_template_id_0c4b483c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collected_points_vue_vue_type_template_id_0c4b483c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/collected-points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/collected-points.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/pages/collected-points.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./collected-points.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collected-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/pages/collected-points.vue?vue&type=template&id=0c4b483c&":
/*!**********************************************************************************!*\
  !*** ./src/components/pages/collected-points.vue?vue&type=template&id=0c4b483c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_template_id_0c4b483c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./collected-points.vue?vue&type=template&id=0c4b483c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/collected-points.vue?vue&type=template&id=0c4b483c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_template_id_0c4b483c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collected_points_vue_vue_type_template_id_0c4b483c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYXRvbXMvaWNvbi9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9yb3cvY2F0ZWdvcnktc3VtLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Jvdy9wb2ludC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdGVkLXBvaW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaWNvbi9jYXRlZ29yeS52dWU/ZTk1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L2NhdGVnb3J5LXN1bS52dWU/NmEwZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L3BvaW50LnZ1ZT9lZWM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT83ODYwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvbGxlY3RlZC1wb2ludHMudnVlPzE3YjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaWNvbi9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaWNvbi9jYXRlZ29yeS52dWU/Mjc5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9pY29uL2NhdGVnb3J5LnZ1ZT85ZGI5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9yb3cvY2F0ZWdvcnktc3VtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L2NhdGVnb3J5LXN1bS52dWU/MTQzZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L2NhdGVnb3J5LXN1bS52dWU/NTc3NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L3BvaW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L3BvaW50LnZ1ZT9lNjQwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9yb3cvcG9pbnQudnVlPzc4NDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2NvbGxlY3RlZC1wb2ludHMudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT9mMDEwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT9lY2NhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvbGxlY3RlZC1wb2ludHMudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvbGxlY3RlZC1wb2ludHMudnVlPzc4NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdGVkLXBvaW50cy52dWU/ZjdmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBLHlCQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBREEsR0FIQTtBQVNBLGNBQ0EscUVBQ0EsaUJBREEsRUFEQTs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVJBO0FBVUE7O0FBaEJBO0FBVEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFF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RSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQThMLENBQWdCLDBQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIxLmFwcC40NWRhMjM2NmMwNzQ2ZDk5MTg5YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGEtaWNvbiA6bmFtZT1cIklDT05TLnN0b3BfY2lyY2xlXCIgOmNsYXNzPVwiY2F0ZWdvcnlDbGFzc0J5SWRcIi8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFJY29uIGZyb20gJ2F0b21zL2ljb24nO1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhLWljb24tY2F0ZWdvcnknLFxuICBjb21wb25lbnRzOiB7IEFJY29uIH0sXG4gIHByb3BzOiB7XG4gICAgY2F0ZWdvcnlJZDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycygnZXZlbnQnLCBbXG4gICAgICAnZ2V0Q2F0ZWdvcnlCeUlkJyxcbiAgICBdKSxcbiAgICBjYXRlZ29yeUNsYXNzQnlJZCAoKSB7XG4gICAgICBjb25zdCBwb2ludFNoYXBlID0gdGhpcy5nZXRDYXRlZ29yeUJ5SWQodGhpcy5jYXRlZ29yeUlkKS5wb2ludFNoYXBlO1xuICAgICAgc3dpdGNoIChwb2ludFNoYXBlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJ2YtdGV4dC1pbmZvJztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnZi10ZXh0LXdhcm5pbmcnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdmLXRleHQtZGFuZ2VyJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm0tZ3JpZCBmLWNhdGVnb3J5LXN1bVwiPlxuICAgIDxkaXY+XG4gICAgICA8YS1pY29uLWNhdGVnb3J5IDpjYXRlZ29yeS1pZD1cImNhdGVnb3J5LmNhdGVnb3J5SWRcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj57eyBnZXRDb2xsZWN0ZWRQb2ludHNMZW5ndGhCeUlkKGNhdGVnb3J5LmNhdGVnb3J5SWQpIH19PC9kaXY+XG4gICAgPGRpdj57eyBnZXRDb2xsZWN0ZWRQb2ludHNWYWx1ZUJ5SWQoY2F0ZWdvcnkuY2F0ZWdvcnlJZCkgfX0gcGt0PC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBSWNvbkNhdGVnb3J5IGZyb20gJ2F0b21zL2ljb24vY2F0ZWdvcnknO1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtLXJvdy1jYXRlZ29yeS1zdW0nLFxuICBjb21wb25lbnRzOiB7XG4gICAgQUljb25DYXRlZ29yeSxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBjYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKCd1c2VyJywgW1xuICAgICAgJ2NvbGxlY3RlZFBvaW50cycsXG4gICAgXSksXG4gICAgLi4ubWFwR2V0dGVycygnZXZlbnQnLCBbXG4gICAgICAnZ2V0Q2F0ZWdvcnlCeUlkJyxcbiAgICBdKSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldENvbGxlY3RlZFBvaW50c0xlbmd0aEJ5SWQgKGNhdGVnb3J5SWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbGxlY3RlZFBvaW50cy5maWx0ZXIocG9pbnQgPT4gcG9pbnQucG9pbnRDYXRlZ29yeSA9PT0gY2F0ZWdvcnlJZCkubGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0Q29sbGVjdGVkUG9pbnRzVmFsdWVCeUlkIChjYXRlZ29yeUlkKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNvbGxlY3RlZFBvaW50cy5maWx0ZXIocG9pbnQgPT4gcG9pbnQucG9pbnRDYXRlZ29yeSA9PT0gY2F0ZWdvcnlJZCkubGVuZ3RoO1xuICAgICAgcmV0dXJuIGxlbmd0aCAqIHRoaXMuZ2V0Q2F0ZWdvcnlCeUlkKGNhdGVnb3J5SWQpLnBvaW50VmFsdWU7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwibS1ncmlkIGYtcG9pbnRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhLWljb24tY2F0ZWdvcnkgOmNhdGVnb3J5LWlkPVwicG9pbnQucG9pbnRDYXRlZ29yeVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj57eyBwb2ludC5wb2ludElkIH19PC9kaXY+XG4gICAgICA8ZGl2Pnt7IGdldENhdGVnb3J5QnlJZChwb2ludC5wb2ludENhdGVnb3J5KS5wb2ludFZhbHVlIH19IHBrdDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEtaWNvbiA6bmFtZT1cIklDT05TLm1hcFwiIEBjbGljaz1cInBhblRvKHBvaW50KVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEtaWNvblxuICAgICAgICAgIDpuYW1lPVwiSUNPTlMuYXJyb3dfZHJvcF9kb3duXCJcbiAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVEZXRhaWxzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cImRldGFpbHNBcmVPcGVuXCIgY2xhc3M9XCJmLWxpbmUtMTggZi10ZXh0LTE0IGYtdGV4dC1sZWZ0IGYtcGwtMyBmLXBiLTFcIj5cbiAgICAgIFdzcMOzxYJyesSZZG5lOiA8c3BhbiBjbGFzcz1cImYtdGV4dC1ib2xkXCI+e3sgcG9pbnQucG9pbnRMYXRpdHVkZSB9fSwge3sgcG9pbnQucG9pbnRMb25naXR1ZGUgfX08L3NwYW4+IDxicj5cbiAgICAgIEN6YXMgemVicmFuaWE6IDxzcGFuIGNsYXNzPVwiZi10ZXh0LWJvbGRcIj57eyBnZXRDb2xsZWN0aW9uVGltZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFJY29uIGZyb20gJ2F0b21zL2ljb24nO1xuaW1wb3J0IEFJY29uQ2F0ZWdvcnkgZnJvbSAnYXRvbXMvaWNvbi9jYXRlZ29yeSc7XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdtYXAvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtLXJvdy1wb2ludCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBSWNvbkNhdGVnb3J5LFxuICAgIEFJY29uLFxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGRldGFpbHNBcmVPcGVuOiBmYWxzZSxcbiAgfSksXG4gIHByb3BzOiB7XG4gICAgcG9pbnQ6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycygnZXZlbnQnLCBbXG4gICAgICAnZ2V0Q2F0ZWdvcnlCeUlkJyxcbiAgICBdKSxcbiAgICBnZXRDb2xsZWN0aW9uVGltZSAoKSB7XG4gICAgICBtb21lbnQubG9jYWxlKCdwbCcpO1xuICAgICAgcmV0dXJuIG1vbWVudCh0aGlzLnBvaW50LnBvaW50Q29sbGVjdGlvblRpbWUpLmNhbGVuZGFyKCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZURldGFpbHMgKCkge1xuICAgICAgdGhpcy5kZXRhaWxzQXJlT3BlbiA9ICh0aGlzLmRldGFpbHNBcmVPcGVuID09PSBmYWxzZSk7XG4gICAgfSxcbiAgICBwYW5UbzogbWFwLnBhblRvUG9pbnRMb2NhdGlvbk9uTWFwLFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmLWxpbmUtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhLXRleHQgZi10aXRsZSBmLXRhYmxlXCI+U3VtYSBwdW5rdMOzdyB3ZyBrYXRlZ29yaWk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtLXJvdyBmLWhlYWRlciBmLWNhdGVnb3J5LXN1bVwiPlxuICAgICAgICA8ZGl2PkthdGVnb3JpYTwvZGl2PlxuICAgICAgICA8ZGl2Pklsb8WbxIcgemVicmFueWNoPC9kaXY+XG4gICAgICAgIDxkaXY+U3VtYSB3YXJ0b8WbY2k8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG0tcm93LWNhdGVnb3J5LXN1bVxuICAgICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGZpbHRlcmVkQ2F0ZWdvcmllc1wiXG4gICAgICAgIDprZXk9XCJjYXRlZ29yeS5jYXRlZ29yeUlkXCJcbiAgICAgICAgOmNhdGVnb3J5PVwiY2F0ZWdvcnlcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZi1wdC0zIGYtbGluZS0yNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImEtdGV4dCBmLXRpdGxlIGYtdGFibGVcIj5MaXN0YSB6ZWJyYW55Y2ggcHVua3TDs3c8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtLXJvdyBmLWhlYWRlciBmLXBvaW50XCI+XG4gICAgICAgIDxkaXY+S2F0LjwvZGl2PlxuICAgICAgICA8ZGl2PktvZDwvZGl2PlxuICAgICAgICA8ZGl2PldhcnRvxZvEhzwvZGl2PlxuICAgICAgICA8ZGl2Pk1pZWpzY2U8L2Rpdj5cbiAgICAgICAgPGRpdj5Sb3p3acWEPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtLXJvdy1wb2ludFxuICAgICAgICB2LWZvcj1cInBvaW50IG9mIGNvbGxlY3RlZFBvaW50cy5yZXZlcnNlKClcIlxuICAgICAgICA6a2V5PVwicG9pbnQucG9pbnRJZFwiXG4gICAgICAgIDpwb2ludD1cInBvaW50XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IE1Sb3dDYXRlZ29yeVN1bSBmcm9tICdtb2xlY3VsZXMvcm93L2NhdGVnb3J5LXN1bSc7XG5pbXBvcnQgTVJvd1BvaW50IGZyb20gJ21vbGVjdWxlcy9yb3cvcG9pbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvLWNvbGxlY3RlZC1wb2ludHMnLFxuICBjb21wb25lbnRzOiB7XG4gICAgTVJvd1BvaW50LFxuICAgIE1Sb3dDYXRlZ29yeVN1bSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKCd1c2VyJywgW1xuICAgICAgJ2NvbGxlY3RlZFBvaW50cycsXG4gICAgXSksXG4gICAgLi4ubWFwR2V0dGVycygnZXZlbnQnLCBbXG4gICAgICAnY2F0ZWdvcmllcycsXG4gICAgXSksXG4gICAgZmlsdGVyZWRDYXRlZ29yaWVzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmNhdGVnb3J5SWQgIT09IDApO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDx0LXBhZ2UgdGl0bGU9XCJaZWJyYW5lIHB1bmt0eVwiIGNsYXNzPVwiZi10ZXh0LWNlbnRlclwiPlxuICAgIDxvLWNvbGxlY3RlZC1wb2ludHM+PC9vLWNvbGxlY3RlZC1wb2ludHM+XG4gIDwvdC1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUUGFnZSBmcm9tICd0ZW1wbGF0ZXMvcGFnZSc7XG5pbXBvcnQgT0NvbGxlY3RlZFBvaW50cyBmcm9tICdvcmdhbmlzbXMvY29sbGVjdGVkLXBvaW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3AtY29sbGVjdGVkLXBvaW50cycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBPQ29sbGVjdGVkUG9pbnRzLFxuICAgIFRQYWdlLFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImEtaWNvblwiLCB7XG4gICAgY2xhc3M6IF92bS5jYXRlZ29yeUNsYXNzQnlJZCxcbiAgICBhdHRyczogeyBuYW1lOiBfdm0uSUNPTlMuc3RvcF9jaXJjbGUgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtLWdyaWQgZi1jYXRlZ29yeS1zdW1cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1xuICAgICAgICBfYyhcImEtaWNvbi1jYXRlZ29yeVwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJjYXRlZ29yeS1pZFwiOiBfdm0uY2F0ZWdvcnkuY2F0ZWdvcnlJZCB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRDb2xsZWN0ZWRQb2ludHNMZW5ndGhCeUlkKF92bS5jYXRlZ29yeS5jYXRlZ29yeUlkKSkpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIF92bS5fcyhfdm0uZ2V0Q29sbGVjdGVkUG9pbnRzVmFsdWVCeUlkKF92bS5jYXRlZ29yeS5jYXRlZ29yeUlkKSkgK1xuICAgICAgICAgIFwiIHBrdFwiXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tZ3JpZCBmLXBvaW50XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImEtaWNvbi1jYXRlZ29yeVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImNhdGVnb3J5LWlkXCI6IF92bS5wb2ludC5wb2ludENhdGVnb3J5IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wb2ludC5wb2ludElkKSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBfdm0uX3MoX3ZtLmdldENhdGVnb3J5QnlJZChfdm0ucG9pbnQucG9pbnRDYXRlZ29yeSkucG9pbnRWYWx1ZSkgK1xuICAgICAgICAgICAgXCIgcGt0XCJcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBuYW1lOiBfdm0uSUNPTlMubWFwIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wYW5Ubyhfdm0ucG9pbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhLWljb25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLklDT05TLmFycm93X2Ryb3BfZG93biB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVEZXRhaWxzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZGV0YWlsc0FyZU9wZW5cbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImYtbGluZS0xOCBmLXRleHQtMTQgZi10ZXh0LWxlZnQgZi1wbC0zIGYtcGItMVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgIFdzcMOzxYJyesSZZG5lOiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmLXRleHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9pbnQucG9pbnRMYXRpdHVkZSkgK1xuICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9pbnQucG9pbnRMb25naXR1ZGUpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgQ3phcyB6ZWJyYW5pYTogXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZi10ZXh0LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldENvbGxlY3Rpb25UaW1lKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmLWxpbmUtMjRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImEtdGV4dCBmLXRpdGxlIGYtdGFibGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3VtYSBwdW5rdMOzdyB3ZyBrYXRlZ29yaWlcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5maWx0ZXJlZENhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwibS1yb3ctY2F0ZWdvcnktc3VtXCIsIHtcbiAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNhdGVnb3J5OiBjYXRlZ29yeSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZi1wdC0zIGYtbGluZS0yNFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYS10ZXh0IGYtdGl0bGUgZi10YWJsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJMaXN0YSB6ZWJyYW55Y2ggcHVua3TDs3dcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5jb2xsZWN0ZWRQb2ludHMucmV2ZXJzZSgpLCBmdW5jdGlvbihwb2ludCkge1xuICAgICAgICAgIHJldHVybiBfYyhcIm0tcm93LXBvaW50XCIsIHtcbiAgICAgICAgICAgIGtleTogcG9pbnQucG9pbnRJZCxcbiAgICAgICAgICAgIGF0dHJzOiB7IHBvaW50OiBwb2ludCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtLXJvdyBmLWhlYWRlciBmLWNhdGVnb3J5LXN1bVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJLYXRlZ29yaWFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiSWxvxZvEhyB6ZWJyYW55Y2hcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiU3VtYSB3YXJ0b8WbY2lcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibS1yb3cgZi1oZWFkZXIgZi1wb2ludFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJLYXQuXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIktvZFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJXYXJ0b8WbxIdcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiTWllanNjZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJSb3p3acWEXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0LXBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImYtdGV4dC1jZW50ZXJcIiwgYXR0cnM6IHsgdGl0bGU6IFwiWmVicmFuZSBwdW5rdHlcIiB9IH0sXG4gICAgW19jKFwiby1jb2xsZWN0ZWQtcG9pbnRzXCIpXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjcwMTY2NyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2NzAxNjY3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2NzAxNjY3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2NzAxNjY3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY3MDE2NjcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjY3MDE2NjcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2F0b21zL2ljb24vY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NzAxNjY3JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS1zdW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZjMWQ1YTdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LXN1bS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LXN1bS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2RvbWluaWsvUHJvamVjdHMvaGFyY21hcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmYzFkNWE3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmYzFkNWE3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmYzFkNWE3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnktc3VtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYzFkNWE3YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmYzFkNWE3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Jvdy9jYXRlZ29yeS1zdW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnktc3VtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnktc3VtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS1zdW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZjMWQ1YTdhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wb2ludC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWY3YTY5ZDkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcG9pbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wb2ludC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2RvbWluaWsvUHJvamVjdHMvaGFyY21hcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxZjdhNjlkOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxZjdhNjlkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxZjdhNjlkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcG9pbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmN2E2OWQ5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmN2E2OWQ5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvcm93L3BvaW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvaW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9pbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvaW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjdhNjlkOSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29sbGVjdGVkLXBvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDliYzk5ZTUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29sbGVjdGVkLXBvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbGxlY3RlZC1wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9kb21pbmlrL1Byb2plY3RzL2hhcmNtYXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDliYzk5ZTUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDliYzk5ZTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDliYzk5ZTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbGxlY3RlZC1wb2ludHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5YmM5OWU1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ5YmM5OWU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvY29sbGVjdGVkLXBvaW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdGVkLXBvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdGVkLXBvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDliYzk5ZTUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbGxlY3RlZC1wb2ludHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjNGI0ODNjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbGxlY3RlZC1wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZG9taW5pay9Qcm9qZWN0cy9oYXJjbWFwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBjNGI0ODNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBjNGI0ODNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBjNGI0ODNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzRiNDgzYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYzRiNDgzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcGFnZXMvY29sbGVjdGVkLXBvaW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xsZWN0ZWQtcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdGVkLXBvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sbGVjdGVkLXBvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGM0YjQ4M2MmXCIiXSwic291cmNlUm9vdCI6IiJ9