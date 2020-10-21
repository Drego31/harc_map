(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/about.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/about.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var templates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! templates/page */ "./src/components/templates/page.vue");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'p-about',
  components: {
    AIcon: atoms_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
    TPage: templates_page__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: () => ({
    showMore: false,
    creators: [{
      photo: '/img/dbetka.jpeg',
      fullName: 'Dominik Betka',
      responsibilities: 'Lider, Programista front-end',
      links: [{
        label: 'GitHub',
        path: 'https://github.com/dbetka/'
      }, {
        label: 'LinkedIn',
        path: 'https://www.linkedin.com/in/dominikbetka/'
      }]
    }, {
      photo: 'https://i.ibb.co/sj5dcdW/harc.jpg',
      fullName: 'Paweł Bednarczyk',
      responsibilities: 'Programista front-end',
      links: [{
        label: 'GitHub',
        path: 'https://github.com/Bedpaw/'
      }]
    }, {
      photo: 'https://henouser.pl/photo.jpeg',
      fullName: 'Paweł Jurkiewicz',
      responsibilities: 'Programista back-end',
      links: [{
        label: 'Site',
        path: 'https://henouser.pl/'
      }, {
        label: 'GitLab',
        path: 'https://gitlab.com/henouser'
      }]
    }, {
      // photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQGHPMB1bAAq7A/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=YRm71P6-8AsosWqGUtSFam-IO1XgJxwhp-jYiPbP5GE',
      fullName: 'Filip Betka',
      responsibilities: 'Programista back-end',
      links: [{
        label: 'GitHub',
        path: 'https://github.com/filbetka/'
      }, {
        label: 'LinkedIn',
        path: 'https://www.linkedin.com/in/filip-betka-6b1b10184/'
      }]
    }, {
      photo: '',
      fullName: 'Magdalena Granke',
      responsibilities: 'UX Designer',
      links: []
    }, {
      photo: '',
      fullName: 'Adam Dominik',
      responsibilities: 'Programista front-end',
      links: []
    }]
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/about.vue?vue&type=template&id=7ee0eaa2&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/about.vue?vue&type=template&id=7ee0eaa2& ***!
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
    { staticClass: "f-text-center", attrs: { title: _vm.ROUTES.about.label } },
    [
      _c("p", { staticClass: "f-text-left" }, [
        _c("span", [
          _c("strong", [_vm._v("HarcMap")]),
          _vm._v(
            " to aplikacja przeznaczona do przeprowadzania gier terenowych dla harcerzy i nie tylko. Pomysłodawcą\n      projektu jest drużynowy z Hufca ZHP Gdynia\n    "
          )
        ]),
        _vm._v(" "),
        _vm.showMore === false
          ? _c(
              "span",
              {
                staticClass: "f-text-bold f-text-underline",
                on: {
                  click: function($event) {
                    _vm.showMore = true
                  }
                }
              },
              [_vm._v("\n      pokaż więcej...\n    ")]
            )
          : _c("span", [
              _vm._v(
                "\n      Dominik Betka, który jest z zawodu programistą. Zebrał on zespół osób z branży,\n      które chciały pomóc w formie wolontariatu. Poniżej możecie poznać ludzi, którzy poświęcili swój czas na stworzenie\n      tak ciekawego projektu. Dziękuję tym osobą za tą ciężką pracę. "
              ),
              _c("strong", [_vm._v(":)")])
            ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "f-text-bold" }, [_vm._v("O twórcach")]),
      _vm._v(" "),
      _vm._l(_vm.creators, function(person) {
        return _c(
          "div",
          { key: person.fullName, staticClass: "f-flex f-pb-1" },
          [
            person.photo
              ? _c("div", [
                  _c("img", {
                    attrs: {
                      src: person.photo,
                      alt: person.fullName,
                      width: "64",
                      height: "64"
                    }
                  })
                ])
              : _c("a-icon", {
                  attrs: { name: _vm.ICONS.account_circle, size: "64" }
                }),
            _vm._v(" "),
            _c("div", { staticClass: "f-flex-1 f-pt-1 f-pl-1 f-text-left" }, [
              _c("div", { staticClass: "f-text-bold" }, [
                _vm._v(_vm._s(person.fullName))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "f-text-14" }, [
                _vm._v(_vm._s(person.responsibilities))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "f-text-14 f-flex" },
                [
                  _vm._l(person.links, function(link, key) {
                    return [
                      key === 1
                        ? _c("span", { key: key, staticClass: "f-pr-1" }, [
                            _vm._v(",")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          key: link.path,
                          staticClass: "a-link",
                          attrs: { href: link.path, target: "_blank" }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(link.label) +
                              "\n          "
                          )
                        ]
                      )
                    ]
                  })
                ],
                2
              )
            ])
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/pages/about.vue":
/*!****************************************!*\
  !*** ./src/components/pages/about.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_vue_vue_type_template_id_7ee0eaa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=7ee0eaa2& */ "./src/components/pages/about.vue?vue&type=template&id=7ee0eaa2&");
/* harmony import */ var _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js& */ "./src/components/pages/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _about_vue_vue_type_template_id_7ee0eaa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _about_vue_vue_type_template_id_7ee0eaa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/about.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/about.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/pages/about.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/pages/about.vue?vue&type=template&id=7ee0eaa2&":
/*!***********************************************************************!*\
  !*** ./src/components/pages/about.vue?vue&type=template&id=7ee0eaa2& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_7ee0eaa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=7ee0eaa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/about.vue?vue&type=template&id=7ee0eaa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_7ee0eaa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_7ee0eaa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2Fib3V0LnZ1ZT83N2MyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9hYm91dC52dWU/ZDQ4YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9hYm91dC52dWU/Y2RhYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQ0EsNkRBREE7QUFFQTtBQUZBLEdBRkE7QUFNQTtBQUNBLG1CQURBO0FBRUEsZUFDQTtBQUNBLCtCQURBO0FBRUEsK0JBRkE7QUFHQSxzREFIQTtBQUlBLGNBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkEsT0FEQSxFQUtBO0FBQ0EseUJBREE7QUFFQTtBQUZBLE9BTEE7QUFKQSxLQURBLEVBZ0JBO0FBQ0EsZ0RBREE7QUFFQSxrQ0FGQTtBQUdBLCtDQUhBO0FBSUEsY0FDQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxPQURBO0FBSkEsS0FoQkEsRUEyQkE7QUFDQSw2Q0FEQTtBQUVBLGtDQUZBO0FBR0EsOENBSEE7QUFJQSxjQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBLE9BREEsRUFJQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxPQUpBO0FBSkEsS0EzQkEsRUF5Q0E7QUFDQTtBQUNBLDZCQUZBO0FBR0EsOENBSEE7QUFJQSxjQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBLE9BREEsRUFLQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxPQUxBO0FBSkEsS0F6Q0EsRUF3REE7QUFDQSxlQURBO0FBRUEsa0NBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBSkEsS0F4REEsRUE4REE7QUFDQSxlQURBO0FBRUEsOEJBRkE7QUFHQSwrQ0FIQTtBQUlBO0FBSkEsS0E5REE7QUFGQTtBQU5BLEc7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QyxnQ0FBZ0MsRUFBRTtBQUM5RTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQXFEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsdUJBQXVCLG9EQUFvRDtBQUMzRSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0NBQWtDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW1MLENBQWdCLCtPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIxMC5hcHAuMDM3YzE5ZWJlN2I0Mjk4NDA1YWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0LXBhZ2UgOnRpdGxlPVwiUk9VVEVTLmFib3V0LmxhYmVsXCIgY2xhc3M9XCJmLXRleHQtY2VudGVyXCI+XG4gICAgPHAgY2xhc3M9XCJmLXRleHQtbGVmdFwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzdHJvbmc+SGFyY01hcDwvc3Ryb25nPiB0byBhcGxpa2FjamEgcHJ6ZXpuYWN6b25hIGRvIHByemVwcm93YWR6YW5pYSBnaWVyIHRlcmVub3d5Y2ggZGxhIGhhcmNlcnp5IGkgbmllIHR5bGtvLiBQb215c8WCb2Rhd2PEhVxuICAgICAgICBwcm9qZWt0dSBqZXN0IGRydcW8eW5vd3kgeiBIdWZjYSBaSFAgR2R5bmlhXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICB2LWlmPVwic2hvd01vcmUgPT09IGZhbHNlXCJcbiAgICAgICAgY2xhc3M9XCJmLXRleHQtYm9sZCBmLXRleHQtdW5kZXJsaW5lXCJcbiAgICAgICAgQGNsaWNrPVwic2hvd01vcmUgPSB0cnVlXCJcbiAgICAgID5cbiAgICAgICAgcG9rYcW8Jm5ic3A7d2nEmWNlai4uLlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICBEb21pbmlrIEJldGthLCBrdMOzcnkgamVzdCB6IHphd29kdSBwcm9ncmFtaXN0xIUuIFplYnJhxYIgb24gemVzcMOzxYIgb3PDs2IgeiBicmFuxbx5LFxuICAgICAgICBrdMOzcmUgY2hjaWHFgnkgcG9tw7NjIHcgZm9ybWllIHdvbG9udGFyaWF0dS4gUG9uacW8ZWogbW/FvGVjaWUgcG96bmHEhyBsdWR6aSwga3TDs3J6eSBwb8Wbd2nEmWNpbGkgc3fDs2ogY3phcyBuYSBzdHdvcnplbmllXG4gICAgICAgIHRhayBjaWVrYXdlZ28gcHJvamVrdHUuIER6acSZa3VqxJkgdHltIG9zb2LEhSB6YSB0xIUgY2nEmcW8a8SFIHByYWPEmS4gPHN0cm9uZz46KTwvc3Ryb25nPlxuICAgICAgPC9zcGFuPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzcz1cImYtdGV4dC1ib2xkXCI+TyB0d8OzcmNhY2g8L3A+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCJwZXJzb24gb2YgY3JlYXRvcnNcIlxuICAgICAgOmtleT1cInBlcnNvbi5mdWxsTmFtZVwiXG4gICAgICBjbGFzcz1cImYtZmxleCBmLXBiLTFcIlxuICAgID5cbiAgICAgIDxkaXYgdi1pZj1cInBlcnNvbi5waG90b1wiPlxuICAgICAgICA8aW1nIDpzcmM9XCJwZXJzb24ucGhvdG9cIiA6YWx0PVwicGVyc29uLmZ1bGxOYW1lXCIgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhLWljb25cbiAgICAgICAgOm5hbWU9XCJJQ09OUy5hY2NvdW50X2NpcmNsZVwiXG4gICAgICAgIHNpemU9XCI2NFwiXG4gICAgICAgIHYtZWxzZVxuICAgICAgLz5cbiAgICAgIDwhLS0gICAgICA8aWNvbi1hY2NvdW50LWNpcmNsZSA6c2l6ZT1cIjY0XCIgdi1lbHNlLz4tLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmLWZsZXgtMSBmLXB0LTEgZi1wbC0xIGYtdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmLXRleHQtYm9sZFwiPnt7IHBlcnNvbi5mdWxsTmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZi10ZXh0LTE0XCI+e3sgcGVyc29uLnJlc3BvbnNpYmlsaXRpZXMgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImYtdGV4dC0xNCBmLWZsZXhcIj5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIHYtZm9yPVwiKGxpbmssIGtleSkgb2YgcGVyc29uLmxpbmtzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwia2V5ID09PSAxXCIgOmtleT1cImtleVwiIGNsYXNzPVwiZi1wci0xXCI+LDwvc3Bhbj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIDpocmVmPVwibGluay5wYXRoXCJcbiAgICAgICAgICAgICAgOmtleT1cImxpbmsucGF0aFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdC1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUUGFnZSBmcm9tICd0ZW1wbGF0ZXMvcGFnZSc7XG5pbXBvcnQgQUljb24gZnJvbSAnYXRvbXMvaWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3AtYWJvdXQnLFxuICBjb21wb25lbnRzOiB7XG4gICAgQUljb24sXG4gICAgVFBhZ2UsXG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc2hvd01vcmU6IGZhbHNlLFxuICAgIGNyZWF0b3JzOiBbXG4gICAgICB7XG4gICAgICAgIHBob3RvOiAnL2ltZy9kYmV0a2EuanBlZycsXG4gICAgICAgIGZ1bGxOYW1lOiAnRG9taW5payBCZXRrYScsXG4gICAgICAgIHJlc3BvbnNpYmlsaXRpZXM6ICdMaWRlciwgUHJvZ3JhbWlzdGEgZnJvbnQtZW5kJyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0dpdEh1YicsXG4gICAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly9naXRodWIuY29tL2RiZXRrYS8nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdMaW5rZWRJbicsXG4gICAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RvbWluaWtiZXRrYS8nLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwaG90bzogJ2h0dHBzOi8vaS5pYmIuY28vc2o1ZGNkVy9oYXJjLmpwZycsXG4gICAgICAgIGZ1bGxOYW1lOiAnUGF3ZcWCIEJlZG5hcmN6eWsnLFxuICAgICAgICByZXNwb25zaWJpbGl0aWVzOiAnUHJvZ3JhbWlzdGEgZnJvbnQtZW5kJyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0dpdEh1YicsXG4gICAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly9naXRodWIuY29tL0JlZHBhdy8nLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwaG90bzogJ2h0dHBzOi8vaGVub3VzZXIucGwvcGhvdG8uanBlZycsXG4gICAgICAgIGZ1bGxOYW1lOiAnUGF3ZcWCIEp1cmtpZXdpY3onLFxuICAgICAgICByZXNwb25zaWJpbGl0aWVzOiAnUHJvZ3JhbWlzdGEgYmFjay1lbmQnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2l0ZScsXG4gICAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly9oZW5vdXNlci5wbC8nLFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnR2l0TGFiJyxcbiAgICAgICAgICAgIHBhdGg6ICdodHRwczovL2dpdGxhYi5jb20vaGVub3VzZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBwaG90bzogJ2h0dHBzOi8vbWVkaWEtZXhwMS5saWNkbi5jb20vZG1zL2ltYWdlL0M0RTAzQVFHSFBNQjFiQUFxN0EvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzIwMF8yMDAvMD9lPTE1OTY2NzIwMDAmdj1iZXRhJnQ9WVJtNzFQNi04QXNvc1dxR1V0U0ZhbS1JTzFYZ0p4d2hwLWpZaVBiUDVHRScsXG4gICAgICAgIGZ1bGxOYW1lOiAnRmlsaXAgQmV0a2EnLFxuICAgICAgICByZXNwb25zaWJpbGl0aWVzOiAnUHJvZ3JhbWlzdGEgYmFjay1lbmQnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnR2l0SHViJyxcbiAgICAgICAgICAgIHBhdGg6ICdodHRwczovL2dpdGh1Yi5jb20vZmlsYmV0a2EvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGlua2VkSW4nLFxuICAgICAgICAgICAgcGF0aDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9maWxpcC1iZXRrYS02YjFiMTAxODQvJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGhvdG86ICcnLFxuICAgICAgICBmdWxsTmFtZTogJ01hZ2RhbGVuYSBHcmFua2UnLFxuICAgICAgICByZXNwb25zaWJpbGl0aWVzOiAnVVggRGVzaWduZXInLFxuICAgICAgICBsaW5rczogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwaG90bzogJycsXG4gICAgICAgIGZ1bGxOYW1lOiAnQWRhbSBEb21pbmlrJyxcbiAgICAgICAgcmVzcG9uc2liaWxpdGllczogJ1Byb2dyYW1pc3RhIGZyb250LWVuZCcsXG4gICAgICAgIGxpbmtzOiBbXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSksXG59O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidC1wYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmLXRleHQtY2VudGVyXCIsIGF0dHJzOiB7IHRpdGxlOiBfdm0uUk9VVEVTLmFib3V0LmxhYmVsIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmLXRleHQtbGVmdFwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiSGFyY01hcFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiIHRvIGFwbGlrYWNqYSBwcnplem5hY3pvbmEgZG8gcHJ6ZXByb3dhZHphbmlhIGdpZXIgdGVyZW5vd3ljaCBkbGEgaGFyY2VyenkgaSBuaWUgdHlsa28uIFBvbXlzxYJvZGF3Y8SFXFxuICAgICAgcHJvamVrdHUgamVzdCBkcnXFvHlub3d5IHogSHVmY2EgWkhQIEdkeW5pYVxcbiAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5zaG93TW9yZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImYtdGV4dC1ib2xkIGYtdGV4dC11bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd01vcmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgcG9rYcW8wqB3acSZY2VqLi4uXFxuICAgIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgIERvbWluaWsgQmV0a2EsIGt0w7NyeSBqZXN0IHogemF3b2R1IHByb2dyYW1pc3TEhS4gWmVicmHFgiBvbiB6ZXNww7PFgiBvc8OzYiB6IGJyYW7FvHksXFxuICAgICAga3TDs3JlIGNoY2lhxYJ5IHBvbcOzYyB3IGZvcm1pZSB3b2xvbnRhcmlhdHUuIFBvbmnFvGVqIG1vxbxlY2llIHBvem5hxIcgbHVkemksIGt0w7NyenkgcG/Fm3dpxJljaWxpIHN3w7NqIGN6YXMgbmEgc3R3b3J6ZW5pZVxcbiAgICAgIHRhayBjaWVrYXdlZ28gcHJvamVrdHUuIER6acSZa3VqxJkgdHltIG9zb2LEhSB6YSB0xIUgY2nEmcW8a8SFIHByYWPEmS4gXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjopXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmLXRleHQtYm9sZFwiIH0sIFtfdm0uX3YoXCJPIHR3w7NyY2FjaFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uY3JlYXRvcnMsIGZ1bmN0aW9uKHBlcnNvbikge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGtleTogcGVyc29uLmZ1bGxOYW1lLCBzdGF0aWNDbGFzczogXCJmLWZsZXggZi1wYi0xXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBwZXJzb24ucGhvdG9cbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBwZXJzb24ucGhvdG8sXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBwZXJzb24uZnVsbE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLklDT05TLmFjY291bnRfY2lyY2xlLCBzaXplOiBcIjY0XCIgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZi1mbGV4LTEgZi1wdC0xIGYtcGwtMSBmLXRleHQtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmLXRleHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBlcnNvbi5mdWxsTmFtZSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImYtdGV4dC0xNFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBlcnNvbi5yZXNwb25zaWJpbGl0aWVzKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmLXRleHQtMTQgZi1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2wocGVyc29uLmxpbmtzLCBmdW5jdGlvbihsaW5rLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsga2V5OiBrZXksIHN0YXRpY0NsYXNzOiBcImYtcHItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBsaW5rLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImEtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBsaW5rLnBhdGgsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobGluay5sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWJvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlZTBlYWEyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYWJvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9kb21pbmlrL1Byb2plY3RzL2hhcmNtYXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2VlMGVhYTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2VlMGVhYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2VlMGVhYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZWUwZWFhMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZWUwZWFhMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWJvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWJvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlZTBlYWEyJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==