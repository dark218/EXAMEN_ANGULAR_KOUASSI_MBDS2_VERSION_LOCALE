(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+JlX":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/menuitem/menuitem.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JlX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p *ngIf=\"PharamacistRole\" class=\"menu-label\" style=\"color: azure; padding-top: 5%;padding-left: 5%;padding-right: 5%; text-align: center;\">\n    Pharmacy Management System\n</p>\n\n<!-- Pharmacist Dashboard -->\n<ul class=\"menu-list\" style=\"width: 150%;\" *ngIf=\"!isAuthenticated\">\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/main\"><span class=\"icon\" style=\"padding: 9px;\"><i class=\"fas fa-home\" style=\"margin-right: 7px;\"></i></span>Dashboard</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/assignments\"><span class=\"icon\"><i class=\"fab fa-asymmetrik\" style=\"margin-right: 7px;\"></i></span>Assignements</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/matiere\"><span class=\"icon\"><i class=\"fas fa-book\" style=\"margin-right:7px;\"></i></span>Matieres</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/professeur\"><span class=\"icon\"><i class=\"fa fa-user\" style=\"margin-right:7px;\"></i></span>Professeurs</a>\n    </li>\n\n\n    <!-- <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/pos\"><span class=\"icon\"><i class=\"fa fa-puzzle-piece fa-lg\" style=\"margin-right: 7px;\"></i></span>PoS</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/expoutofstock\"><span class=\"icon\"><i class=\"fa fa-exclamation-triangle fa-lg\" style=\"margin-right: 7px;\"></i></span> Expired</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/outofstock\"><span class=\"icon\"><i class=\"fa fa-exclamation-triangle fa-lg\" style=\"margin-right: 7px;\"></i></span> Out of Stock</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/predictionreport\"><span class=\"icon\"><i class=\"fa fa-bar-chart-o fa-lg\" style=\"margin-right: 7px;\"></i></span>Prediction Report</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn\" routerLink=\"/salesreport\"><span class=\"icon\"><i class=\"fa fa-line-chart fa-lg\" style=\"margin-right: 7px;\"></i></span>Sales Report</a>\n    </li>-->\n\n\n</ul><br>\n\n\n<!-- Assistant Pharmacist Dashboard -->\n<ul class=\"menu-list\" style=\"width: 108%;\" *ngIf=\"ApharmacistRole\">\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/\"><span class=\"icon\" style=\"padding: 9px;\"><i class=\"fa fa-tachometer fa-lg\" style=\"margin-right: 7px;\"></i></span>Dashboard</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/doctororders\"><span class=\"icon\"><i class=\"fa fa-user-md fa-lg \" style=\"margin-right: 7px;\"></i></span>Doctor Orders</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/pos\"><span class=\"icon\"><i class=\"fa fa-puzzle-piece fa-lg\" style=\"margin-right: 7px;\"></i></span>PoS</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/suppliers\"><span class=\"icon\"><i class=\"fa fa-truck fa-lg\" style=\"margin-right:7px;\"></i></span>Suppliers</a>\n    </li>\n    <!-- <li class=\"newclass :hover\" >\n    <a class=\"btn\" routerLink=\"/predictionreport\"><span class=\"icon\"><i class=\"fa fa-bar-chart-o fa-lg\" style=\"margin-right: 7px;\"></i></span>Prediction Report</a>\n  </li> -->\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/salesreport\"><span class=\"icon\"><i class=\"fa fa-line-chart fa-lg\" style=\"margin-right: 7px;\"></i></span>Sales Report</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/inventory\"><span class=\"icon\"><i class=\"fa fa-yc-square fa-lg \" style=\"margin-right:7px;\"></i></span>Inventory</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/expoutofstock\"><span class=\"icon\"><i class=\"fa fa-exclamation-triangle fa-lg\" style=\"margin-right: 7px;\"></i></span> Expired</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn assistantPharmacistStyle\" routerLink=\"/outofstock\"><span class=\"icon\"><i class=\"fa fa-exclamation-triangle fa-lg\" style=\"margin-right: 7px;\"></i></span> Out of Stock</a>\n    </li>\n</ul><br>\n\n\n<!-- Cashier Dashboard -->\n<ul class=\"menu-list\" style=\"width: 108%;\" *ngIf=\"CashierRole\">\n    <li class=\"newclass :hover\">\n        <a class=\"btn cashierStyle\" routerLink=\"/\"><span class=\"icon\" style=\"padding: 9px;\"><i class=\"fa fa-tachometer fa-lg\" style=\"margin-right: 7px;\"></i></span>Dashboard</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn cashierStyle\" routerLink=\"/doctororders\"><span class=\"icon\"><i class=\"fa fa-user-md fa-lg \" style=\"margin-right: 7px;\"></i></span>Doctor Orders</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn cashierStyle\" routerLink=\"/pos\"><span class=\"icon\"><i class=\"fa fa-puzzle-piece fa-lg\" style=\"margin-right: 7px;\"></i></span>PoS</a>\n    </li>\n    <!-- <li class=\"newclass :hover\" >\n    <a class=\"btn\" routerLink=\"/suppliers\"><span class=\"icon\"><i class=\"fa fa-truck fa-lg\" style=\"margin-right:7px;\"></i></span>Suppliers</a>\n  </li> -->\n    <!-- <li class=\"newclass :hover\" >\n    <a class=\"btn\" routerLink=\"/predictionreport\"><span class=\"icon\"><i class=\"fa fa-bar-chart-o fa-lg\" style=\"margin-right: 7px;\"></i></span>Prediction Report</a>\n  </li> -->\n    <!-- <li class=\"newclass :hover\" >\n    <a class=\"btn\" routerLink=\"/salesreport\"><span class=\"icon\"><i class=\"fa fa-line-chart fa-lg\" style=\"margin-right: 7px;\"></i></span>Sales Report</a>\n  </li> -->\n    <li class=\"newclass :hover\">\n        <a class=\"btn cashierStyle\" routerLink=\"/inventory\"><span class=\"icon\"><i class=\"fa fa-yc-square fa-lg \" style=\"margin-right:7px;\"></i></span>Inventory</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn cashierStyle\" routerLink=\"/expoutofstock\"><span class=\"icon\"><i class=\"fa fa-exclamation-triangle fa-lg\" style=\"margin-right: 7px;\"></i></span> Expired</a>\n    </li>\n    <li class=\"newclass :hover\">\n        <a class=\"btn cashierStyle\" routerLink=\"/outofstock\"><span class=\"icon\"><i class=\"fa fa-exclamation-triangle fa-lg\" style=\"margin-right: 7px;\"></i></span> Out of Stock</a>\n    </li>\n</ul><br>\n\n<!--\n<p class=\"menu-label\" *ngIf=\"!userIsAuthenticated\" style=\"color: azure; padding-top: 5%;padding-left: 5%;padding-right: 5%; text-align: center;\">\n  Some admin functionalities <br> may not be accessible\n</p>\n-->\n<style>\n    .menu-list {\n        line-height: 530%;\n        border-radius: 2px;\n        color: hsl(0, 0%, 87%);\n        display: block;\n        padding: 10px;\n        background-color: hsl(0, 0%, 29%);\n    }\n    \n    .btn {\n        color: hsl(0, 0%, 86%);\n        background-color: hsl(0, 0%, 21%);\n        border-radius: 3px;\n        height: 88px;\n    }\n    \n    .newclass :hover {\n        background-color: HSL(171, 100%, 40%);\n        color: hsl(0, 100%, 100%);\n    }\n    \n    .cashierStyle {\n        height: 135px;\n        width: 208px;\n        padding-top: 25px;\n    }\n    \n    .assistantPharmacistStyle {\n        height: 105px;\n        width: 208px;\n        padding-top: 12px;\n    }\n    \n     :active {\n        color: white;\n    }\n</style>";
      /***/
    },

    /***/
    "/pDx":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height:900px\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/assignments/\">\n\n                            <span>Assignment Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/assignments/create\">\n\n                            <span>Assignment List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"panel\" style=\"margin: 3%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Add Assignment\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px; width: 500%;\">\n\n                <app-add-assignmentr-elements></app-add-assignmentr-elements>\n            </div>\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Cours\Master2(MBDS2)\BUFFE\Projet\Assigment\Assignment1\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0K21":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: XConfigurationSettingsAdminComponent */

    /***/
    function K21(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XConfigurationSettingsAdminComponent", function () {
        return XConfigurationSettingsAdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_x_configuration_settings_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./x-configuration-settings-admin.component.html */
      "1/6F");
      /* harmony import */


      var _x_configuration_settings_admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./x-configuration-settings-admin.component.css */
      "Md46");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var XConfigurationSettingsAdminComponent = /*#__PURE__*/function () {
        function XConfigurationSettingsAdminComponent(authService) {
          _classCallCheck(this, XConfigurationSettingsAdminComponent);

          this.authService = authService;
        }

        _createClass(XConfigurationSettingsAdminComponent, [{
          key: "onSignup",
          value: function onSignup(form) {
            if (form.invalid) {
              return;
            }

            console.log(form.value.role);
            this.authService.createUser(form.value.name, form.value.email, form.value.password);
          }
        }]);

        return XConfigurationSettingsAdminComponent;
      }();

      XConfigurationSettingsAdminComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      XConfigurationSettingsAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-x-configuration-settings-admin',
        template: _raw_loader_x_configuration_settings_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_x_configuration_settings_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], XConfigurationSettingsAdminComponent);
      /***/
    },

    /***/
    "1/6F":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-add-new-users>\n</app-add-new-users>";
      /***/
    },

    /***/
    "1I/Q":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%;\">\n\n\n    <div style=\"margin-top: 2%; height:900px\">\n        <section class=\"section columns\">\n            <div class=\"column is-full-desktop is-full-mobile\">\n\n                <div class=\"tabs is-toggle is-fullwidth\">\n                    <ul>\n                        <li class=\"is-active \">\n                            <a routerLink=\"/settings\">\n\n                                <span>Add New Accounts</span>\n                            </a>\n                        </li>\n\n                        <li>\n                            <a routerLink=\"/settings/Accounts\">\n\n                                <span>Manage  User Account</span>\n                            </a>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </section>\n        <section class=\"panel is-left is-half\" style=\"margin: 3px;margin-top: -30px; width: 48%;\">\n            <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n                Add User\n            </p>\n            <div class=\"panel-block \">\n                <div style=\"height: 610px; width: 115%;\">\n\n\n\n\n                    <app-add-user></app-add-user>\n\n\n\n                </div>\n            </div>\n            <div class=\"panel-block\">\n\n            </div>\n        </section>\n\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "1eVK":
    /*!****************************************************************************!*\
      !*** ./src/app/header/header-userdetails/header-userdetails.component.css ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function eVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "2IFU":
    /*!*************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AssignmentrInventoryComponent */

    /***/
    function IFU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentrInventoryComponent", function () {
        return AssignmentrInventoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assignmentr_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assignmentr-inventory.component.html */
      "doYN");
      /* harmony import */


      var _assignmentr_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assignmentr-inventory.component.css */
      "CbD8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssignmentrInventoryComponent = /*#__PURE__*/function () {
        function AssignmentrInventoryComponent() {
          _classCallCheck(this, AssignmentrInventoryComponent);
        }

        _createClass(AssignmentrInventoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AssignmentrInventoryComponent;
      }();

      AssignmentrInventoryComponent.ctorParameters = function () {
        return [];
      };

      AssignmentrInventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assignmentr-inventory',
        template: _raw_loader_assignmentr_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assignmentr_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssignmentrInventoryComponent);
      /***/
    },

    /***/
    "2mJ2":
    /*!**************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/add-matiere/add-matiere.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function mJ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWF0aWVyZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "3C2S":
    /*!**********************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur-inventory/professeur-inventory.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ProfesseurInventoryComponent */

    /***/
    function C2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesseurInventoryComponent", function () {
        return ProfesseurInventoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_professeur_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./professeur-inventory.component.html */
      "HrGI");
      /* harmony import */


      var _professeur_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./professeur-inventory.component.css */
      "ervJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfesseurInventoryComponent = /*#__PURE__*/function () {
        function ProfesseurInventoryComponent() {
          _classCallCheck(this, ProfesseurInventoryComponent);
        }

        _createClass(ProfesseurInventoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfesseurInventoryComponent;
      }();

      ProfesseurInventoryComponent.ctorParameters = function () {
        return [];
      };

      ProfesseurInventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-professeur-inventory',
        template: _raw_loader_professeur_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_professeur_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfesseurInventoryComponent);
      /***/
    },

    /***/
    "4MUV":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-taskbar/header-taskbar.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"navbar-end level-right\">\n    <div class=\"navbar-item level-item\">\n\n\n        <div class=\"buttons\">\n\n            <!--  <button class=\"button is-accent\" (click)=\"PeuplerLaBase()\"> Peupler la base</button>-->\n            <button *ngIf=\"userIsAuthenticated\" class=\"button is-primary\" (click)=\"onLogout()\">\n        <strong>Log out</strong>\n      </button>\n            <button *ngIf=\"!isAuthenticated\" class=\"button is-primary is-rounded\">\n        <strong><span class=\"icon\"><i class=\"fa fa-cogs fa-lg \"  routerLink=\"/settings\"></i></span></strong>\n      </button>\n        </div>\n\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "4Tle":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tle(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\" style=\"background-color: #041221;max-width: none;margin-top: -1%;\">\n    <div id=\"flow\">\n        <span class=\"flow-1\"></span>\n        <span class=\"flow-2\"></span>\n        <span class=\"flow-3\"></span>\n    </div>\n    <div class=\"section\">\n\n        <section class=\"hero is-success is-fullheight\">\n            <div class=\"hero-body\">\n                <div class=\"container has-text-centered\" style=\"max-width: 1132px;\">\n                    <div class=\"column is-4 is-offset-4\">\n                        <h3 class=\"title \">Signup</h3>\n                        <hr class=\"login-hr\">\n\n                        <div class=\"box\">\n\n\n                            <form (submit)=\"onSignup (signupForm)\" #signupForm=\"ngForm\">\n\n\n                                <div class=\"field\">\n                                    <div class=\"control\">\n\n                                        <input name=\"name\" ngModel #nameInput=\"ngModel\" class=\"input is-medium\" type=\"name\" placeholder=\"Your Name\" autofocus=\"\" required>\n                                        <p class=\"login-error\" *ngIf=\"nameInput.invalid && nameInput.touched\">Please enter the name</p>\n\n                                    </div>\n                                </div>\n\n\n\n\n                                <div class=\"field\">\n                                    <div class=\"control\">\n\n                                        <input name=\"email\" ngModel #emailInput=\"ngModel\" class=\"input is-medium\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\" required email>\n                                        <p class=\"login-error\" *ngIf=\"emailInput.invalid && emailInput.touched\">Please enter valid email</p>\n\n                                    </div>\n                                </div>\n\n\n\n                                <div class=\"field\">\n                                    <div class=\"control\">\n\n                                        <input name=\"password\" ngModel #passwordInput=\"ngModel\" class=\"input is-medium\" type=\"password\" placeholder=\"Your Password\" required>\n                                        <p class=\"login-error\" *ngIf=\"passwordInput.invalid && passwordInput.touched\">Please enter valid password</p>\n\n                                    </div>\n                                </div>\n\n\n\n\n\n                                <button class=\"button is-block is-primary is-medium is-fullwidth\">SignUp <i class=\"fas fas-sign-in\" aria-hidden=\"true\"></i></button>\n                            </form>\n\n\n                        </div>\n                        <p class=\"has-text-grey\" style=\"color: #00d1b2;\">\n                            <a style=\"color: #00d1b2;\" routerLink=\"/login\">Login</a> &nbsp;&nbsp;\n\n                        </p><br><br><br>\n\n\n                    </div>\n                </div>\n            </div>\n        </section>\n\n    </div>\n</div>\n\n<script>\n    var dropdown = document.querySelector('.dropdown');\n    dropdown.addEventListener('click', function(event) {\n        event.stopPropagation();\n        dropdown.classList.toggle('is-active');\n    });\n</script>";
      /***/
    },

    /***/
    "5NQ/":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/matiere/add-matiere/add-matiere-elements/add-matiere-elements.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n\n\n    <div class=\"spinner-box loadCenter\" *ngIf=\"isLoading\">\n        <div class=\"configure-border-1\">\n            <div class=\"configure-core\"></div>\n        </div>\n        <div class=\"configure-border-2\">\n            <div class=\"configure-core\"></div>\n        </div>\n    </div>\n\n\n    <form [formGroup]=\"form\" (submit)=\"onAddMatiere()\" *ngIf=\"!isLoading\">\n\n\n        <div class=\"field\">\n            <label class=\"label\">Nom de la Matiere</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"nommat\" style=\"width: 100%;\" placeholder=\"NODE JS\">\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.nommat.touched ) && registerFormControl.nommat.errors?.required\">\n              *Ajouter un nom\n            </span>\n\n        </div>\n        <!-- Image Preview -->\n        <div class=\"form-group\">\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\n                <img [src]=\"preview\" [alt]=\"form.value.nommat\">\n            </div>\n        </div>\n\n        <!-- File Input -->\n        <div class=\"form-group\">\n            <input type=\"file\" (change)=\"uploadFile($event)\">\n        </div>\n\n\n        <div class=\"field\">\n            <label class=\"label\">Professeur</label>\n\n            <mat-select class=\"is-center input\" formControlName=\"nomprof\">\n\n                <mat-option *ngFor=\"let professeur of professeurs\" [value]=\"professeur.nomprof\">{{ professeur.nomprof }}</mat-option>\n            </mat-select>\n\n        </div>\n\n\n\n\n        <div class=\"panel-block\" style=\"width: 100%;margin-top: 30px;\">\n            <button class=\"button is-primary   is-fullwidth\" type=\"submit\">\n      Add\n    </button>\n        </div>\n    </form>\n</div>\n\n\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>\n<script>\n</script>";
      /***/
    },

    /***/
    "5V6j":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/matiere/add-matiere/add-matiere.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V6j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height:900px\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/matiere/\">\n\n                            <span>Matiere Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/matiere/create\">\n\n                            <span>Matiere List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"panel\" style=\"margin: 3%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Add Matiere\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"height: 540px; width: 100%; padding: 2%;\">\n\n                <app-add-matiere-elements></app-add-matiere-elements>\n            </div>\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "5gTv":
    /*!******************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/manage-account/manage-account.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ManageAccountComponent */

    /***/
    function gTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageAccountComponent", function () {
        return ManageAccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-account.component.html */
      "MWAZ");
      /* harmony import */


      var _manage_account_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-account.component.css */
      "ZyCK");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ManageAccountComponent = /*#__PURE__*/function () {
        function ManageAccountComponent(authService) {
          _classCallCheck(this, ManageAccountComponent);

          this.authService = authService;
          this.users = [];
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(ManageAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isLoading = true;
            this.authService.getUser();
            this.userSubs = this.authService.getUserUpdateListener().subscribe(function (posts) {
              _this.isLoading = false;
              _this.users = posts;
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(userId) {
            this.authService.deleteUser(userId);
          }
        }]);

        return ManageAccountComponent;
      }();

      ManageAccountComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      ManageAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-manage-account',
        template: _raw_loader_manage_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_account_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ManageAccountComponent);
      /***/
    },

    /***/
    "7+Mr":
    /*!***************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr-interaction.service.ts ***!
      \***************************************************************************/

    /*! exports provided: AssignmentrInteractionService */

    /***/
    function Mr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentrInteractionService", function () {
        return AssignmentrInteractionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AssignmentrInteractionService = /*#__PURE__*/function () {
        function AssignmentrInteractionService(http, router) {
          _classCallCheck(this, AssignmentrInteractionService);

          this.http = http;
          this.router = router;
          this.assignmentr = [];
          this.assignmentUpdatedr = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.url = 'https://examenangularmongokouassi.herokuapp.com//api/assignmentr';
        }

        _createClass(AssignmentrInteractionService, [{
          key: "getAssignment",
          value: function getAssignment() {
            var _this2 = this;

            this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (assignmentrData) {
              return assignmentrData.assignmentsr.map(function (assignmentr) {
                return {
                  nomdevoir: assignmentr.nomdevoir,
                  nomeleve: assignmentr.nomeleve,
                  datederendu: assignmentr.datederendu,
                  nommatiere: assignmentr.nommatiere,
                  nomprof: assignmentr.nomprof,
                  avatar1: assignmentr.avatar1,
                  note: assignmentr.note,
                  remarque: assignmentr.remarque,
                  id: assignmentr._id
                };
              });
            })).subscribe(function (transformedAssignments) {
              _this2.assignmentr = transformedAssignments;

              _this2.assignmentUpdatedr.next(_toConsumableArray(_this2.assignmentr));
            });
          }
        }, {
          key: "getAssignmentUpdateListener",
          value: function getAssignmentUpdateListener() {
            return this.assignmentUpdatedr.asObservable();
          }
        }, {
          key: "getAssignmentsr",
          value: function getAssignmentsr(id) {
            return this.http.get(this.url + id);
          }
        }, {
          key: "addAssignment",
          value: function addAssignment(nomdevoir, nomeleve, datederendu, nommatiere, nomprof, avatar1, note, remarque) {
            var _this3 = this;

            var assignmentrData = new FormData();
            assignmentrData.append("nomdevoir", nomdevoir);
            assignmentrData.append("nomeleve", nomeleve);
            assignmentrData.append("datederendu", datederendu);
            assignmentrData.append("nommatiere", nommatiere);
            assignmentrData.append("nomprof", nomprof);
            assignmentrData.append("avatar1", avatar1);
            assignmentrData.append("note", note);
            assignmentrData.append("remarque", remarque);
            this.http.post(this.url, assignmentrData).subscribe(function (responseData) {
              var assignmentr = {
                id: responseData.assignmentr.id,
                nomdevoir: nomdevoir,
                nomeleve: nomeleve,
                datederendu: datederendu,
                nommatiere: nommatiere,
                nomprof: nomprof,
                avatar1: responseData.assignmentr.avatar1,
                note: note,
                remarque: remarque
              };

              _this3.assignmentr.push(assignmentr);

              _this3.assignmentUpdatedr.next(_toConsumableArray(_this3.assignmentr));

              _this3.router.navigate(["/assignmentsr/create"]);
            });
          }
        }, {
          key: "updateAssignment",
          value: function updateAssignment(id, nomdevoir, nomeleve, datederendu, nommatiere, nomprof, avatar1, note, remarque) {
            var _this4 = this;

            var assignmentrData;

            if (typeof avatar1 === 'object') {
              assignmentrData = new FormData();
              assignmentrData.append("id", id);
              assignmentrData.append("nomdevoir", nomdevoir);
              assignmentrData.append("nomeleve", nomeleve);
              assignmentrData.append("datederendu", datederendu);
              assignmentrData.append("nommatiere", nommatiere);
              assignmentrData.append("nomprof", nomprof);
              assignmentrData.append("avatar1", avatar1);
              assignmentrData.append("note", note);
              assignmentrData.append("remarque", remarque);
            } else {
              assignmentrData = {
                id: id,
                nomdevoir: nomdevoir,
                nomeleve: nomeleve,
                datederendu: datederendu,
                nommatiere: nommatiere,
                nomprof: nomprof,
                avatar1: avatar1,
                note: note,
                remarque: remarque
              };
            }

            this.http.put(this.url + id, assignmentrData).subscribe(function (response) {
              var updatedAssignments = _toConsumableArray(_this4.assignmentr);

              var oldAssignmentIndex = updatedAssignments.findIndex(function (s) {
                return s.id === assignmentr.id;
              });
              var assignmentr = {
                id: id,
                nomdevoir: nomdevoir,
                nomeleve: nomeleve,
                datederendu: datederendu,
                nommatiere: nommatiere,
                nomprof: nomprof,
                avatar1: "",
                note: note,
                remarque: remarque
              };
              updatedAssignments[oldAssignmentIndex] = assignmentr;

              _this4.assignmentUpdatedr.next(_toConsumableArray(_this4.assignmentr));

              _this4.router.navigate(["/assignments/create"]);
            });
          }
        }, {
          key: "deleteAssignment",
          value: function deleteAssignment(assignmentrId) {
            var _this5 = this;

            this.http["delete"](this.url + assignmentrId).subscribe(function () {
              var updatedAssignmentr = _this5.assignmentr.filter(function (assignmentr) {
                return assignmentr.id !== assignmentrId;
              });

              _this5.assignmentr = updatedAssignmentr;

              _this5.assignmentUpdatedr.next(_toConsumableArray(_this5.assignmentr));
            });
          }
        }]);

        return AssignmentrInteractionService;
      }();

      AssignmentrInteractionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AssignmentrInteractionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AssignmentrInteractionService);
      /***/
    },

    /***/
    "7kYn":
    /*!***************************************************************************!*\
      !*** ./src/app/header/header-userdetails/header-userdetails.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HeaderUserdetailsComponent */

    /***/
    function kYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderUserdetailsComponent", function () {
        return HeaderUserdetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_userdetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header-userdetails.component.html */
      "inMP");
      /* harmony import */


      var _header_userdetails_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header-userdetails.component.css */
      "1eVK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");

      var HeaderUserdetailsComponent = /*#__PURE__*/function () {
        function HeaderUserdetailsComponent(authService) {
          _classCallCheck(this, HeaderUserdetailsComponent);

          this.authService = authService;
          this.userIsAuthenticated = false;
          this.users = [];
          this.isLoading = false;
        }

        _createClass(HeaderUserdetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this6.userIsAuthenticated = isAuthenticated;
            });
            this.isLoading = true;
            this.authService.getUser();
            this.userSubs = this.authService.getUserUpdateListener().subscribe(function (posts) {
              _this6.isLoading = false;
              _this6.users = posts;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return HeaderUserdetailsComponent;
      }();

      HeaderUserdetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      HeaderUserdetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-userdetails',
        template: _raw_loader_header_userdetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_userdetails_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderUserdetailsComponent);
      /***/
    },

    /***/
    "8TOV":
    /*!******************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function TOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50ci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "8syo":
    /*!***********************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere-filter.pipe.ts ***!
      \***********************************************************/

    /*! exports provided: MatiereFilterPipe */

    /***/
    function syo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatiereFilterPipe", function () {
        return MatiereFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MatiereFilterPipe = /*#__PURE__*/function () {
        function MatiereFilterPipe() {
          _classCallCheck(this, MatiereFilterPipe);
        }

        _createClass(MatiereFilterPipe, [{
          key: "transform",
          value: function transform(matieres, searchTerm) {
            if (!matieres || !searchTerm) {
              return matieres;
            }

            return matieres.filter(function (matiere) {
              return matiere.nommat.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
          }
        }]);

        return MatiereFilterPipe;
      }();

      MatiereFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'matiereFilter',
        pure: false
      })], MatiereFilterPipe);
      /***/
    },

    /***/
    "9HsR":
    /*!********************************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/add-matiere/add-matiere-elements/add-matiere-elements.component.css ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n  margin: auto;\n}\n\n.error-msg{\n  color:  red;\n  font-weight: lighter;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tYXRpZXJlLWVsZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwRkFBMEY7RUFDMUYsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvRkFBb0Y7RUFDcEYsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0VBQ1IsV0FBVztFQUNYLFlBQVk7Q0FDYixrQkFBa0I7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhZGQtbWF0aWVyZS1lbGVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogS0VZRlJBTUVTICovXG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluM0Qge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC41LC41LC41LCAzNjBkZWcpO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUtY2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS14Y2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IC4yNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gIH1cbn1cblxuLyogR1JJRCBTVFlMSU5HICovXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5uZXItYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xuXG4ubGVvLWJvcmRlci0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDEuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGZhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGVvLWJvcmRlci0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDE3MSwgMTQ1LDAuMSkgMzMlLCByZ2JhKDI1NSwgMTcxLCAxNDUsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDIuMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiOTFhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBBTFRFUk5BVElORyBPUkJJVFMgKi9cblxuLmNpcmNsZS1ib3JkZXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4uY2lyY2xlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFgtUk9UQVRJTkcgQk9YRVMgKi9cblxuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLWNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtYm9yZGVyLTIge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbGVmdDogLTExNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLXhjbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4vKiBQVUxTRSBCVUJCTEVTICovXG5cbi5wdWxzZS1jb250YWluZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnB1bHNlLWJ1YmJsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnB1bHNlLWJ1YmJsZS0xIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMiB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnB1bHNlLWJ1YmJsZS0zIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFNPTEFSIFNZU1RFTSAqL1xuXG4uc29sYXItc3lzdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yYml0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE1O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aC1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnZlbnVzLW9yYml0IHtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA3LjRzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLm1lcmN1cnktb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5wbGFuZXQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTVweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4uc3VuIHtcblx0d2lkdGg6IDM1cHg7XG5cdGhlaWdodDogMzVweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xufVxuXG4ubGVvIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmx1ZS1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZGFmZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XG59XG5cbi5ncmVlbi1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnJlZC1vcmJpdCB7XG5cdHdpZHRoOiA5MHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhOTFhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53aGl0ZS1vcmJpdCB7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLncxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAxLCAxLCA5MGRlZylcbn1cblxuLncyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAyLCAuNSwgOTBkZWcpXG59XG5cbi53MyB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoLjUsIDEsIDIsIDkwZGVnKVxufVxuXG4ubG9hZENlbnRlcntcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5lcnJvci1tc2d7XG4gIGNvbG9yOiAgcmVkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CR4F":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur-inventory/professeur-inventory-items/professeur-inventory-items.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: ProfesseurInventoryItemsComponent */

    /***/
    function CR4F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesseurInventoryItemsComponent", function () {
        return ProfesseurInventoryItemsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_professeur_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./professeur-inventory-items.component.html */
      "z//Q");
      /* harmony import */


      var _professeur_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./professeur-inventory-items.component.css */
      "G4EZ");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../professeur/professeur-interaction.service */
      "F1sD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");

      var ProfesseurInventoryItemsComponent = /*#__PURE__*/function () {
        function ProfesseurInventoryItemsComponent(professeurInteractionService, authService, snackBar) {
          _classCallCheck(this, ProfesseurInventoryItemsComponent);

          this.professeurInteractionService = professeurInteractionService;
          this.authService = authService;
          this.snackBar = snackBar;
          this.professeurs = [];
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(ProfesseurInventoryItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.isLoading = true;
            this.professeurInteractionService.getProfesseur();
            this.professeurSubs = this.professeurInteractionService.getProfesseurUpdateListener().subscribe(function (posts) {
              _this7.isLoading = false;
              _this7.professeurs = posts;
            });
            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this7.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(professeurId) {
            this.professeurInteractionService.deleteProfesseur(professeurId);
            this.snackBar.open("professeur Deleted Successfully", "Close");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.professeurSubs.unsubscribe();
            this.authStatusSub.unsubscribe();
          }
        }]);

        return ProfesseurInventoryItemsComponent;
      }();

      ProfesseurInventoryItemsComponent.ctorParameters = function () {
        return [{
          type: _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_4__["ProfesseurInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      ProfesseurInventoryItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-professeur-inventory-items',
        template: _raw_loader_professeur_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_professeur_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfesseurInventoryItemsComponent);
      /***/
    },

    /***/
    "CbD8":
    /*!**************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component.css ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CbD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50ci1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Cmfj":
    /*!*************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/add-matiere/add-matiere.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AddMatiereComponent */

    /***/
    function Cmfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMatiereComponent", function () {
        return AddMatiereComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_matiere_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-matiere.component.html */
      "5V6j");
      /* harmony import */


      var _add_matiere_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-matiere.component.css */
      "2mJ2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddMatiereComponent = /*#__PURE__*/function () {
        function AddMatiereComponent() {
          _classCallCheck(this, AddMatiereComponent);
        }

        _createClass(AddMatiereComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddMatiereComponent;
      }();

      AddMatiereComponent.ctorParameters = function () {
        return [];
      };

      AddMatiereComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-matiere',
        template: _raw_loader_add_matiere_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_matiere_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddMatiereComponent);
      /***/
    },

    /***/
    "DIMZ":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignmentr/assignmentr.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DIMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\" overflow: hidden; \" scroll=\"no\">\n    <app-header></app-header>\n    <div class=\"columns\" style=\"margin-top: 0%; \">\n        <app-auth-login></app-auth-login>\n        <div class=\"column is-sidebar-menu is-hidden-mobile is-2\" style=\"background-color:hsl(0, 0%, 29%) ;width: 270px;\">\n            <app-sidemenu></app-sidemenu>\n        </div>\n\n        <div class=\"column main \">\n            <router-outlet></router-outlet>\n\n        </div>\n    </div>\n</div>\n<div style=\"margin-top: 5%;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-image\" aria-hidden=\"true\"></i></span>\n                            <span>Assignment Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-music\" aria-hidden=\"true\"></i></span>\n                            <span>Assignment List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns is-centered\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n\n</div>";
      /***/
    },

    /***/
    "DN7M":
    /*!*********************************************!*\
      !*** ./src/app/header/header.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function DN7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "DREw":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr-elements/add-assignmentr-elements.component.css ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DREw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n  margin: auto;\n}\n\n.error-msg{\n  color:  red;\n  font-weight: lighter;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hc3NpZ25tZW50ci1lbGVtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQWhCQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG9GQUFvRjtFQUNwRixpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsMEZBQTBGO0VBQzFGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsMkVBQW1FO1VBQW5FLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksdURBQStDO1lBQS9DLCtDQUErQztBQUNuRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBQ0E7SUFDSSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0FBQ3BEOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtFQUNaLDhDQUE4QztBQUNoRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osK0NBQStDO0FBQ2pEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7RUFDWCw2Q0FBNkM7QUFDL0M7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztFQUNSLFdBQVc7RUFDWCxZQUFZO0NBQ2Isa0JBQWtCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtFQUNaLDJCQUEyQjtFQUMzQixnREFBZ0Q7QUFDbEQ7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtFQUNaLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLHlCQUF5QjtFQUN6QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakIiLCJmaWxlIjoiYWRkLWFzc2lnbm1lbnRyLWVsZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBLRVlGUkFNRVMgKi9cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgdG97XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4zRCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoLjUsLjUsLjUsIDM2MGRlZyk7XG4gIH1cbiAgdG97XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS1jbG9ja3dpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29uZmlndXJlLXhjbG9ja3dpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogLjI1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgfVxufVxuXG4vKiBHUklEIFNUWUxJTkcgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uc3Bpbm5lci1ib3gge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogU1BJTk5JTkcgQ0lSQ0xFICovXG5cbi5sZW8tYm9yZGVyLTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDYzLDI0OSwyMjAsMC4xKSAzMyUsIHJnYmEoNjMsMjQ5LDIyMCwxKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBzcGluM0QgMS44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5sZW8tY29yZS0xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZmFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sZW8tYm9yZGVyLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMTcxLCAxNDUsMC4xKSAzMyUsIHJnYmEoMjU1LCAxNzEsIDE0NSwxKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBzcGluM0QgMi4ycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5sZW8tY29yZS0yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWI5MWFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFMVEVSTkFUSU5HIE9SQklUUyAqL1xuXG4uY2lyY2xlLWJvcmRlciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDYzLDI0OSwyMjAsMC4xKSAzMyUsIHJnYmEoNjMsMjQ5LDIyMCwxKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5jaXJjbGUtY29yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogWC1ST1RBVElORyBCT1hFUyAqL1xuXG4uY29uZmlndXJlLWJvcmRlci0xIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYW5pbWF0aW9uOiBjb25maWd1cmUtY2xvY2t3aXNlIDNzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmNvbmZpZ3VyZS1ib3JkZXItMiB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBsZWZ0OiAtMTE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBjb25maWd1cmUteGNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtY29yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG5cbi8qIFBVTFNFIEJVQkJMRVMgKi9cblxuLnB1bHNlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHVsc2UtYnViYmxlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4ucHVsc2UtYnViYmxlLTEge1xuICAgIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnB1bHNlLWJ1YmJsZS0yIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC4ycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ucHVsc2UtYnViYmxlLTMge1xuICAgIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgLjRzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogU09MQVIgU1lTVEVNICovXG5cbi5zb2xhci1zeXN0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JiaXQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYTU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmVhcnRoLW9yYml0IHtcblx0d2lkdGg6IDE2NXB4O1xuXHRoZWlnaHQ6IDE2NXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4udmVudXMtb3JiaXQge1xuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTIwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDcuNHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubWVyY3VyeS1vcmJpdCB7XG5cdHdpZHRoOiA5MHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnBsYW5ldCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtNXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5zdW4ge1xuXHR3aWR0aDogMzVweDtcblx0aGVpZ2h0OiAzNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmFiOTE7XG59XG5cbi5sZW8ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ibHVlLW9yYml0IHtcblx0d2lkdGg6IDE2NXB4O1xuXHRoZWlnaHQ6IDE2NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTFkYWZmYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgM3MgbGluZWFyIC4ycyBpbmZpbml0ZTtcbn1cblxuLmdyZWVuLW9yYml0IHtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTFmZmJmYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ucmVkLW9yYml0IHtcblx0d2lkdGg6IDkwcHg7XG5cdGhlaWdodDogOTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmY2E5MWE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDFzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLndoaXRlLW9yYml0IHtcblx0d2lkdGg6IDYwcHg7XG5cdGhlaWdodDogNjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxMHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4udzEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKDEsIDEsIDEsIDkwZGVnKVxufVxuXG4udzIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKDEsIDIsIC41LCA5MGRlZylcbn1cblxuLnczIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCguNSwgMSwgMiwgOTBkZWcpXG59XG5cbi5sb2FkQ2VudGVye1xuICBtYXJnaW46IGF1dG87XG59XG5cblxuLmVycm9yLW1zZ3tcbiAgY29sb3I6ICByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Ds1s":
    /*!*********************************************************!*\
      !*** ./src/app/sidemenu/menuitem/menuitem.component.ts ***!
      \*********************************************************/

    /*! exports provided: MenuitemComponent */

    /***/
    function Ds1s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuitemComponent", function () {
        return MenuitemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menuitem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menuitem.component.html */
      "+JlX");
      /* harmony import */


      var _menuitem_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menuitem.component.css */
      "GR9J");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");

      var MenuitemComponent = /*#__PURE__*/function () {
        function MenuitemComponent(authService) {
          _classCallCheck(this, MenuitemComponent);

          this.authService = authService;
          this.userIsAuthenticated = false;
        }

        _createClass(MenuitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this8.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return MenuitemComponent;
      }();

      MenuitemComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      MenuitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menuitem',
        template: _raw_loader_menuitem_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menuitem_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuitemComponent);
      /***/
    },

    /***/
    "Dwz0":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/add-matiere/add-matiere-elements/add-matiere-elements.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AddMatiereElementsComponent */

    /***/
    function Dwz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMatiereElementsComponent", function () {
        return AddMatiereElementsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_matiere_elements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-matiere-elements.component.html */
      "5NQ/");
      /* harmony import */


      var _add_matiere_elements_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-matiere-elements.component.css */
      "9HsR");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../matiere/matiere-interaction.service */
      "Wf2d");
      /* harmony import */


      var _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../professeur/professeur-interaction.service */
      "F1sD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _mime_type_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mime-type.validator */
      "dc1N");

      var AddMatiereElementsComponent = /*#__PURE__*/function () {
        function AddMatiereElementsComponent(matiereInteractionService, professeurInteractionService, route, snackBar) {
          _classCallCheck(this, AddMatiereElementsComponent);

          this.matiereInteractionService = matiereInteractionService;
          this.professeurInteractionService = professeurInteractionService;
          this.route = route;
          this.snackBar = snackBar;
          this.isLoading = false;
          this.matieres = [];
          this.professeurs = [];
          this.users = [];
          this.mode = "create";
        }

        _createClass(AddMatiereElementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              'nommat': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'nomprof': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'avatar1': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_9__["mimeType"]]
              })
            });
            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('matiereId')) {
                _this9.mode = "edit";
                _this9.matiereId = paramMap.get('matiereId');
                _this9.isLoading = true;

                _this9.matiereInteractionService.getMatieres(_this9.matiereId).subscribe(function (matiereData) {
                  _this9.isLoading = false;
                  _this9.matiere = {
                    id: matiereData._id,
                    nommat: matiereData.nommat,
                    nomprof: matiereData.nomprof,
                    avatar1: matiereData.avatar1
                  };

                  _this9.form.setValue({
                    'nommat': _this9.matiere.nommat,
                    'nomprof': _this9.matiere.nomprof,
                    'avatar1': _this9.matiere.avatar1
                  });
                });
              } else {
                _this9.mode = "create";
                _this9.matiereId = null;
              }
            });
            this.isLoading = true;
            this.professeurInteractionService.getProfesseur();
            this.supplierSubs = this.professeurInteractionService.getProfesseurUpdateListener().subscribe(function (posts) {
              _this9.isLoading = false;
              _this9.professeurs = posts;
            });
          }
        }, {
          key: "registerFormControl",
          get: function get() {
            return this.form.controls;
          } // Image Preview

        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this10 = this;

            var file = event.target.files[0];
            this.form.patchValue({
              avatar1: file
            });
            this.form.get('avatar1').updateValueAndValidity(); // File Preview

            var reader = new FileReader();

            reader.onload = function () {
              _this10.preview = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "onAddMatiere",
          value: function onAddMatiere() {
            if (this.form.invalid) {
              return;
            }

            if (this.mode === "create") {
              this.matiereInteractionService.addMatiere(this.form.value.nommat, this.form.value.nomprof, this.form.value.avatar1);
              this.snackBar.open("Matiere Added Successfully", "Close");
            } else {
              this.matiereInteractionService.updateMatiere(this.matiereId, this.form.value.nommat, this.form.value.nomprof, this.form.value.avatar1);
              this.snackBar.open("Matiere Edited!! ", "Close");
            }

            this.form.reset();
          }
        }]);

        return AddMatiereElementsComponent;
      }();

      AddMatiereElementsComponent.ctorParameters = function () {
        return [{
          type: _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_4__["MatiereInteractionService"]
        }, {
          type: _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_5__["ProfesseurInteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      AddMatiereElementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-add-matiere-elements',
        template: _raw_loader_add_matiere_elements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_matiere_elements_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddMatiereElementsComponent);
      /***/
    },

    /***/
    "EQ6z":
    /*!***********************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment-inventory/assignment-inventory.component.css ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function EQ6z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50LWludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "F1sD":
    /*!*************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur-interaction.service.ts ***!
      \*************************************************************************/

    /*! exports provided: ProfesseurInteractionService */

    /***/
    function F1sD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesseurInteractionService", function () {
        return ProfesseurInteractionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProfesseurInteractionService = /*#__PURE__*/function () {
        function ProfesseurInteractionService(http, router) {
          _classCallCheck(this, ProfesseurInteractionService);

          this.http = http;
          this.router = router;
          this.professeur = [];
          this.professeurUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.url = 'https://examenangularmongokouassi.herokuapp.com//api/professeur';
        }

        _createClass(ProfesseurInteractionService, [{
          key: "getProfesseur",
          value: function getProfesseur() {
            var _this11 = this;

            this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (professeurData) {
              return professeurData.professeurs.map(function (professeur) {
                return {
                  nomprof: professeur.nomprof,
                  avatar1: professeur.avatar1,
                  id: professeur._id
                };
              });
            })).subscribe(function (transformedProfesseurs) {
              _this11.professeur = transformedProfesseurs;

              _this11.professeurUpdated.next(_toConsumableArray(_this11.professeur));
            });
          }
        }, {
          key: "getProfesseurUpdateListener",
          value: function getProfesseurUpdateListener() {
            return this.professeurUpdated.asObservable();
          }
        }, {
          key: "getProfesseurs",
          value: function getProfesseurs(id) {
            return this.http.get(this.url + id);
          }
        }, {
          key: "addProfesseur",
          value: function addProfesseur(nomprof, avatar1) {
            var _this12 = this;

            var professeurData = new FormData();
            professeurData.append("nomprof", nomprof);
            professeurData.append("avatar1", avatar1);
            this.http.post(this.url, professeurData).subscribe(function (responseData) {
              var professeur = {
                id: responseData.professeur.id,
                nomprof: nomprof,
                avatar1: responseData.professeur.avatar1
              };
              _this12.professeur.push(professeur), _this12.professeurUpdated.next(_toConsumableArray(_this12.professeur));

              _this12.router.navigate(["/professeur/create"]);
            });
          }
        }, {
          key: "updateProfesseur",
          value: function updateProfesseur(id, nommat, nomprof, avatar1) {
            var _this13 = this;

            var professeurData;

            if (typeof avatar1 === 'object') {
              professeurData = new FormData();
              professeurData.append("id", id);
              professeurData.append("nomprof", nomprof);
              professeurData.append("avatar1", avatar1, nommat);
            } else {
              professeurData = {
                id: id,
                nomprof: nomprof,
                avatar1: avatar1
              };
            }

            this.http.put(this.url + id, professeurData).subscribe(function (response) {
              var updatedProfesseurs = _toConsumableArray(_this13.professeur);

              var oldProfesseurIndex = updatedProfesseurs.findIndex(function (i) {
                return i.id === id;
              });
              var professeur = {
                id: id,
                nomprof: nomprof,
                avatar1: " "
              };
              updatedProfesseurs[oldProfesseurIndex] = professeur;

              _this13.professeurUpdated.next(_toConsumableArray(_this13.professeur));

              _this13.router.navigate(["/professeur/create"]);
            });
          }
        }, {
          key: "deleteProfesseur",
          value: function deleteProfesseur(professeurId) {
            var _this14 = this;

            this.http["delete"](this.url + professeurId).subscribe(function () {
              var updatedProfesseur = _this14.professeur.filter(function (professeur) {
                return professeur.id !== professeurId;
              });

              _this14.professeur = updatedProfesseur;

              _this14.professeurUpdated.next(_toConsumableArray(_this14.professeur));
            });
          }
        }]);

        return ProfesseurInteractionService;
      }();

      ProfesseurInteractionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ProfesseurInteractionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProfesseurInteractionService);
      /***/
    },

    /***/
    "G4EZ":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur-inventory/professeur-inventory-items/professeur-inventory-items.component.css ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G4EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n\n  margin-left: 150%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Zlc3NldXItaW52ZW50b3J5LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwRkFBMEY7RUFDMUYsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvRkFBb0Y7RUFDcEYsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0VBQ1IsV0FBVztFQUNYLFlBQVk7Q0FDYixrQkFBa0I7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoicHJvZmVzc2V1ci1pbnZlbnRvcnktaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEtFWUZSQU1FUyAqL1xuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbjNEIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCguNSwuNSwuNSwgMzYwZGVnKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29uZmlndXJlLWNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUteGNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAuMjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICB9XG59XG5cbi8qIEdSSUQgU1RZTElORyAqL1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zcGlubmVyLWJveCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBTUElOTklORyBDSVJDTEUgKi9cblxuLmxlby1ib3JkZXItMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsMjQ5LDIyMCwwLjEpIDMzJSwgcmdiYSg2MywyNDksMjIwLDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAxLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxlby1ib3JkZXItMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAxNzEsIDE0NSwwLjEpIDMzJSwgcmdiYSgyNTUsIDE3MSwgMTQ1LDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAyLjJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQUxURVJOQVRJTkcgT1JCSVRTICovXG5cbi5jaXJjbGUtYm9yZGVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsMjQ5LDIyMCwwLjEpIDMzJSwgcmdiYSg2MywyNDksMjIwLDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmNpcmNsZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBYLVJPVEFUSU5HIEJPWEVTICovXG5cbi5jb25maWd1cmUtYm9yZGVyLTEge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS1jbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWJvcmRlci0yIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxlZnQ6IC0xMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS14Y2xvY2t3aXNlIDNzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmNvbmZpZ3VyZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuLyogUFVMU0UgQlVCQkxFUyAqL1xuXG4ucHVsc2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wdWxzZS1idWJibGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5wdWxzZS1idWJibGUtMSB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ucHVsc2UtYnViYmxlLTIge1xuICAgIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgLjJzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBTT0xBUiBTWVNURU0gKi9cblxuLnNvbGFyLXN5c3RlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmJpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhNTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZWFydGgtb3JiaXQge1xuXHR3aWR0aDogMTY1cHg7XG5cdGhlaWdodDogMTY1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi52ZW51cy1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNy40cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5tZXJjdXJ5LW9yYml0IHtcblx0d2lkdGg6IDkwcHg7XG5cdGhlaWdodDogOTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ucGxhbmV0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC01cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnN1biB7XG5cdHdpZHRoOiAzNXB4O1xuXHRoZWlnaHQ6IDM1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYWI5MTtcbn1cblxuLmxlbyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJsdWUtb3JiaXQge1xuXHR3aWR0aDogMTY1cHg7XG5cdGhlaWdodDogMTY1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWRhZmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAzcyBsaW5lYXIgLjJzIGluZmluaXRlO1xufVxuXG4uZ3JlZW4tb3JiaXQge1xuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWZmYmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5yZWQtb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYTkxYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMXMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ud2hpdGUtb3JiaXQge1xuXHR3aWR0aDogNjBweDtcblx0aGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDEwcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53MSB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMSwgMSwgOTBkZWcpXG59XG5cbi53MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMiwgLjUsIDkwZGVnKVxufVxuXG4udzMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKC41LCAxLCAyLCA5MGRlZylcbn1cblxuLmxvYWRDZW50ZXJ7XG5cbiAgbWFyZ2luLWxlZnQ6IDE1MCU7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "GEKx":
    /*!****************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function GEKx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzZXVyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "GR9J":
    /*!**********************************************************!*\
      !*** ./src/app/sidemenu/menuitem/menuitem.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function GR9J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51aXRlbS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "GRDm":
    /*!*************************************************!*\
      !*** ./src/app/sidemenu/sidemenu.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function GRDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlbWVudS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Gzd7":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/professeur/professeur.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gzd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-image\" aria-hidden=\"true\"></i></span>\n                            <span>Professeur Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-music\" aria-hidden=\"true\"></i></span>\n                            <span>Professeur List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns is-centered\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n\n</div>";
      /***/
    },

    /***/
    "HrGI":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/professeur/professeur-inventory/professeur-inventory.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HrGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height: 900px;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li>\n                        <a routerLink=\"/professeur/\">\n\n                            <span>Professeur Form</span>\n                        </a>\n                    </li>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/professeur/create\">\n\n                            <span>Professeur List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns\" style=\"margin-top: -6%;\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <app-search-professeur></app-search-professeur>\n        </div>\n    </section>\n\n    <section class=\"panel\" style=\"margin: 2%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Professeurs\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"height: 590px; width: 100%;\">\n\n                <app-professeur-inventory-items></app-professeur-inventory-items>\n            </div>\n        </div>\n        <div class=\"panel-block\">\n\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "KQxT":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/add-assignment/add-assignment-elements/add-assignment-elements.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: AddAssignmentElementsComponent */

    /***/
    function KQxT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAssignmentElementsComponent", function () {
        return AddAssignmentElementsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_assignment_elements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-assignment-elements.component.html */
      "b95y");
      /* harmony import */


      var _add_assignment_elements_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-assignment-elements.component.css */
      "TRnO");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _assignment_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../assignment-interaction.service */
      "et3/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../matiere/matiere-interaction.service */
      "Wf2d");
      /* harmony import */


      var _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../professeur/professeur-interaction.service */
      "F1sD");
      /* harmony import */


      var _mime_type_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./mime-type.validator */
      "YAmx");

      var AddAssignmentElementsComponent = /*#__PURE__*/function () {
        function AddAssignmentElementsComponent(assignmentInteractionService, router, authService, matiereInteractionService, professeurInteractionService, route, snackBar) {
          _classCallCheck(this, AddAssignmentElementsComponent);

          this.assignmentInteractionService = assignmentInteractionService;
          this.router = router;
          this.authService = authService;
          this.matiereInteractionService = matiereInteractionService;
          this.professeurInteractionService = professeurInteractionService;
          this.route = route;
          this.snackBar = snackBar;
          this.isLoading = false;
          this.assignments = [];
          this.matieres = [];
          this.professeurs = [];
          this.note = "";
          this.remarque = "";
          this.mode = "create";
        }

        _createClass(AddAssignmentElementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              'nomdevoir': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
              }),
              'nomeleve': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
              }),
              'datederendu': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
              }),
              'nommatiere': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
              }),
              'nomprof': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
              }),
              'avatar1': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_11__["mimeType"]]
              }),
              'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
              'remarque': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
            });
            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('assignmentId')) {
                _this15.mode = "edit";
                _this15.assignmentId = paramMap.get('assignmentId');
                _this15.isLoading = true;

                _this15.assignmentInteractionService.getAssignments(_this15.assignmentId).subscribe(function (assignmentData) {
                  _this15.isLoading = false;
                  _this15.assignment = {
                    id: assignmentData._id,
                    nomdevoir: assignmentData.nomdevoir,
                    nomeleve: assignmentData.nomeleve,
                    datederendu: assignmentData.datederendu,
                    nommatiere: assignmentData.nommatiere,
                    nomprof: assignmentData.nomprof,
                    avatar1: assignmentData.avatar1,
                    note: assignmentData.note,
                    remarque: assignmentData.remarque
                  };

                  _this15.form.setValue({
                    'nomdevoir': _this15.assignment.nomdevoir,
                    'nomeleve': _this15.assignment.nomeleve,
                    'datederendu': _this15.assignment.datederendu,
                    'nommatiere': _this15.assignment.nommatiere,
                    'nomprof': _this15.assignment.nomprof,
                    'avatar1': _this15.assignment.avatar1,
                    'note': _this15.assignment.note,
                    'remarque': _this15.assignment.remarque
                  });
                });
              } else {
                _this15.mode = "create";
                _this15.assignmentId = null;
              }
            });
            this.isLoading = true;
            this.matiereInteractionService.getMatiere();
            this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener().subscribe(function (posts) {
              _this15.isLoading = false;
              _this15.matieres = posts;
            });
            this.isLoading = true;
            this.professeurInteractionService.getProfesseur();
            this.professeurSubs = this.professeurInteractionService.getProfesseurUpdateListener().subscribe(function (posts) {
              _this15.isLoading = false;
              _this15.professeurs = posts;
            });
          }
        }, {
          key: "registerFormControl",
          get: function get() {
            return this.form.controls;
          } // Image Preview

        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this16 = this;

            var file = event.target.files[0];
            this.form.patchValue({
              avatar1: file
            });
            this.form.get('avatar1').updateValueAndValidity(); // File Preview

            var reader = new FileReader();

            reader.onload = function () {
              _this16.preview = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "onAddAssignment",
          value: function onAddAssignment() {
            if (this.form.invalid) {
              return;
            }

            if (this.mode === "create") {
              this.assignmentInteractionService.addAssignment(this.form.value.nomdevoir, this.form.value.nomeleve, this.form.value.datederendu, this.form.value.nommatiere, this.form.value.nomprof, this.form.value.avatar1, this.form.value.note, this.form.value.remarque);
              this.snackBar.open("Assignment Added Successfully", "Close");
              this.router.navigate(["/assignments/create"]);
            } else {
              this.assignmentInteractionService.updateAssignment(this.assignmentId, this.form.value.nomdevoir, this.form.value.nomeleve, this.form.value.datederendu, this.form.value.nommatiere, this.form.value.nomprof, this.form.value.avatar1, this.form.value.note, this.form.value.remarque);
              this.snackBar.open("Assignment Edited!! ", "Close");
              this.router.navigate(["/assignments/create"]);
            }

            this.form.reset();
          }
        }]);

        return AddAssignmentElementsComponent;
      }();

      AddAssignmentElementsComponent.ctorParameters = function () {
        return [{
          type: _assignment_interaction_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentInteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_9__["MatiereInteractionService"]
        }, {
          type: _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_10__["ProfesseurInteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      AddAssignmentElementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-add-assignment-elements',
        template: _raw_loader_add_assignment_elements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_assignment_elements_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddAssignmentElementsComponent);
      /***/
    },

    /***/
    "LJvn":
    /*!**************************************************!*\
      !*** ./src/app/auth/signup/signup.component.css ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function LJvn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html,body {\n  font-family: 'Questrial', sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  background-color: #041221;\n}\n.hero.is-success {\n  background: #041221;\n}\n.hero .nav, .hero.is-success .nav {\n  box-shadow: none;\n}\n.box {\n  margin-top: 5rem;\n}\n.avatar {\n  margin-top: -70px;\n  padding-bottom: 20px;\n}\n.avatar img {\n  padding: 5px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);\n}\ninput {\n  font-weight: 300;\n}\np {\n  font-weight: 700;\n}\np.subtitle {\n  padding-top: 1rem;\n}\n.login-hr{\n  border-bottom: 1px solid white;\n}\n.has-text-black{\n  color: black;\n}\n.field{\n  padding-bottom: 10px;\n}\n.fa{\n  margin-left: 5px;\n}\nbody {\nbackground: #041221;\n}\n/* Card start*/\n.card {overflow:hidden}\n.card.large {\nheight: 600px;\n-webkit-backface-visibility: hidden;\nbackface-visibility: initial;\nborder-radius: 5px;\n}\n/* Card end */\n.media-content {\noverflow: hidden;\n}\n.title.no-padding {\nmargin-bottom: 0 !important;\n}\n#flow span {\ndisplay: block;\nwidth: 200vw;\nheight: 200vw;\nposition: absolute;\ntop: -180vw;\nleft: -50vw;\nborder-radius: 90vw;\nopacity: 0.6;\n}\n.flow-1 {\nbackground: #3281ff;\n-webkit-animation: rotating 20s linear infinite;\nanimation: rotating 20s linear infinite;\n}\n.flow-2 {\nbackground: #f442ee;\nposition: absolute;\n-webkit-animation: rotating 15s linear infinite;\nanimation: rotating 15s linear infinite;\n}\n.flow-3 {\nbackground: #42eef4;\nposition: absolute;\n-webkit-animation: rotating 7s linear infinite;\nanimation: rotating 7s linear infinite;\n}\n@-webkit-keyframes rotating {\nfrom {\ntransform: rotate(0deg);\n}\nto {\ntransform: rotate(360deg);\n}\n}\n@keyframes rotating {\nfrom {\ntransform: rotate(0deg);\n}\nto {\ntransform: rotate(360deg);\n}\n}\n.rotating {\n-webkit-animation: rotating 2s linear infinite;\nanimation: rotating 2s linear infinite;\n}\n.footer{\nbackground-color: #222831;\ncolor: lemonchiffon;\n}\n.footer p, strong\n{color: lemonchiffon}\n.footer a:hover\n{color: crimson;}\n.fa\n{color: lemonchiffon;\n    margin: 10px}\n::-moz-selection\n{background-color:#DEF4FF}\n::selection\n{background-color:#DEF4FF}\n.login-error{\n  color:  red;\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUVsQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVFO0FBQ0YsbUJBQW1CO0FBQ25CO0FBQ0EsY0FBYztBQUNkLE9BQU8sZUFBZTtBQUN0QjtBQUNBLGFBQWE7QUFDYixtQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQjtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsK0NBQStDO0FBSS9DLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiwrQ0FBK0M7QUFJL0MsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLDhDQUE4QztBQUk5QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBS0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFLQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFLQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUtBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFJOUMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7Q0FDQyxjQUFjLENBQUM7QUFDaEI7Q0FDQyxtQkFBbUI7SUFDaEIsWUFBWTtBQUVoQjtDQUNDLHdCQUF3QjtBQUR6QjtDQUNDLHdCQUF3QjtBQUV6QjtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHkge1xuICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MTIyMTtcbn1cbi5oZXJvLmlzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMDQxMjIxO1xufVxuLmhlcm8gLm5hdiwgLmhlcm8uaXMtc3VjY2VzcyAubmF2IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJveCB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG4uYXZhdGFyIHtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmF2YXRhciBpbWcge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxMCwxMCwxMCwuMSksIDAgMCAwIDFweCByZ2JhKDEwLDEwLDEwLC4xKTtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTAsMTAsMTAsLjEpLCAwIDAgMCAxcHggcmdiYSgxMCwxMCwxMCwuMSk7XG59XG5pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5wIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbnAuc3VidGl0bGUge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmxvZ2luLWhye1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5oYXMtdGV4dC1ibGFja3tcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZmllbGR7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZmF7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiAgYm9keSB7XG5iYWNrZ3JvdW5kOiAjMDQxMjIxO1xufVxuLyogQ2FyZCBzdGFydCovXG4uY2FyZCB7b3ZlcmZsb3c6aGlkZGVufVxuLmNhcmQubGFyZ2Uge1xuaGVpZ2h0OiA2MDBweDtcbi13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuYmFja2ZhY2UtdmlzaWJpbGl0eTogaW5pdGlhbDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi8qIENhcmQgZW5kICovXG4ubWVkaWEtY29udGVudCB7XG5vdmVyZmxvdzogaGlkZGVuO1xufVxuLnRpdGxlLm5vLXBhZGRpbmcge1xubWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuI2Zsb3cgc3BhbiB7XG5kaXNwbGF5OiBibG9jaztcbndpZHRoOiAyMDB2dztcbmhlaWdodDogMjAwdnc7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IC0xODB2dztcbmxlZnQ6IC01MHZ3O1xuYm9yZGVyLXJhZGl1czogOTB2dztcbm9wYWNpdHk6IDAuNjtcbn1cbi5mbG93LTEge1xuYmFja2dyb3VuZDogIzMyODFmZjtcbi13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAyMHMgbGluZWFyIGluZmluaXRlO1xuLW1vei1hbmltYXRpb246IHJvdGF0aW5nIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4tbXMtYW5pbWF0aW9uOiByb3RhdGluZyAyMHMgbGluZWFyIGluZmluaXRlO1xuLW8tYW5pbWF0aW9uOiByb3RhdGluZyAyMHMgbGluZWFyIGluZmluaXRlO1xuYW5pbWF0aW9uOiByb3RhdGluZyAyMHMgbGluZWFyIGluZmluaXRlO1xufVxuLmZsb3ctMiB7XG5iYWNrZ3JvdW5kOiAjZjQ0MmVlO1xucG9zaXRpb246IGFic29sdXRlO1xuLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW5nIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4tbW96LWFuaW1hdGlvbjogcm90YXRpbmcgMTVzIGxpbmVhciBpbmZpbml0ZTtcbi1tcy1hbmltYXRpb246IHJvdGF0aW5nIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4tby1hbmltYXRpb246IHJvdGF0aW5nIDE1cyBsaW5lYXIgaW5maW5pdGU7XG5hbmltYXRpb246IHJvdGF0aW5nIDE1cyBsaW5lYXIgaW5maW5pdGU7XG59XG4uZmxvdy0zIHtcbmJhY2tncm91bmQ6ICM0MmVlZjQ7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG4td2Via2l0LWFuaW1hdGlvbjogcm90YXRpbmcgN3MgbGluZWFyIGluZmluaXRlO1xuLW1vei1hbmltYXRpb246IHJvdGF0aW5nIDdzIGxpbmVhciBpbmZpbml0ZTtcbi1tcy1hbmltYXRpb246IHJvdGF0aW5nIDdzIGxpbmVhciBpbmZpbml0ZTtcbi1vLWFuaW1hdGlvbjogcm90YXRpbmcgN3MgbGluZWFyIGluZmluaXRlO1xuYW5pbWF0aW9uOiByb3RhdGluZyA3cyBsaW5lYXIgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpbmcge1xuZnJvbSB7XG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4tbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbi1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xudHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG50byB7XG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG50cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxufVxuQGtleWZyYW1lcyByb3RhdGluZyB7XG5mcm9tIHtcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbi1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG50cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbnRvIHtcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbnRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59XG59XG4ucm90YXRpbmcge1xuLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbi1tb3otYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4tbXMtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4tby1hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbmFuaW1hdGlvbjogcm90YXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xufVxuLmZvb3RlcntcbmJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XG5jb2xvcjogbGVtb25jaGlmZm9uO1xufVxuLmZvb3RlciBwLCBzdHJvbmdcbntjb2xvcjogbGVtb25jaGlmZm9ufVxuLmZvb3RlciBhOmhvdmVyXG57Y29sb3I6IGNyaW1zb247fVxuLmZhXG57Y29sb3I6IGxlbW9uY2hpZmZvbjtcbiAgICBtYXJnaW46IDEwcHh9XG5cbjo6c2VsZWN0aW9uXG57YmFja2dyb3VuZC1jb2xvcjojREVGNEZGfVxuXG4ubG9naW4tZXJyb3J7XG4gIGNvbG9yOiAgcmVkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "M8Nr":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory-items/assignmentr-inventory-items.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: AssignmentrInventoryItemsComponent */

    /***/
    function M8Nr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentrInventoryItemsComponent", function () {
        return AssignmentrInventoryItemsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assignmentr_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assignmentr-inventory-items.component.html */
      "eDkB");
      /* harmony import */


      var _assignmentr_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assignmentr-inventory-items.component.css */
      "roHA");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _assignmentr_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../assignmentr-interaction.service */
      "7+Mr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");

      var AssignmentrInventoryItemsComponent = /*#__PURE__*/function () {
        function AssignmentrInventoryItemsComponent(assignmentrInteractionService, authService, snackBar) {
          _classCallCheck(this, AssignmentrInventoryItemsComponent);

          this.assignmentrInteractionService = assignmentrInteractionService;
          this.authService = authService;
          this.snackBar = snackBar;
          this.assignmentrs = [];
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(AssignmentrInventoryItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.isLoading = true;
            this.assignmentrInteractionService.getAssignment();
            this.assignmentSubs = this.assignmentrInteractionService.getAssignmentUpdateListener().subscribe(function (posts) {
              _this17.isLoading = false;
              _this17.assignmentrs = posts;
            });
            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this17.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(assignmentId) {
            this.assignmentrInteractionService.deleteAssignment(assignmentId);
            this.snackBar.open("Assignment Deleted Successfully", "Close");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.assignmentSubs.unsubscribe();
            this.authStatusSub.unsubscribe();
          }
        }]);

        return AssignmentrInventoryItemsComponent;
      }();

      AssignmentrInventoryItemsComponent.ctorParameters = function () {
        return [{
          type: _assignmentr_interaction_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentrInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      AssignmentrInventoryItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-assignmentr-inventory-items',
        template: _raw_loader_assignmentr_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assignmentr_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssignmentrInventoryItemsComponent);
      /***/
    },

    /***/
    "MCDr":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr-elements/add-assignmentr-elements.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MCDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"overflow-y:auto ;overflow-x: hidden;height: 900px;\">\n\n\n    <div class=\"spinner-box loadCenter\" *ngIf=\"isLoading\">\n        <div class=\"configure-border-1\">\n            <div class=\"configure-core\"></div>\n        </div>\n        <div class=\"configure-border-2\">\n            <div class=\"configure-core\"></div>\n        </div>\n    </div>\n\n\n    <form [formGroup]=\"form\" (submit)=\"onAddAssignment()\" *ngIf=\"!isLoading\">\n\n\n\n\n        <div class=\"field\">\n            <label class=\"label\">NOM DU DEVOIR</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"nomdevoir\" style=\"width: 100%;\" placeholder=\"PROJET\" />\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.nomdevoir.touched ) && registerFormControl.nomdevoir.errors?.required\">\n      *Ajouter un devoir\n    </span>\n        </div>\n        <div class=\"field\">\n            <label class=\"label\">NOM DE L ELEVE</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"nomeleve\" style=\"width: 100%;\" placeholder=\"KOUASSI\" />\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.nomeleve.touched ) && registerFormControl.nomeleve.errors?.required\">\n      *Ajouter un eleve\n               </span>\n        </div>\n\n\n        <div class=\"field\">\n            <label class=\"label\">DATE DE RENDU</label>\n            <input type=\"date\" class=\"is-center input\" formControlName=\"datederendu\" style=\"width: 100%;\" placeholder=\"071xxxxxxx\" />\n        </div>\n\n\n        <div class=\"field\">\n            <label class=\"label\">NOM DE LA MATIERE</label>\n\n            <mat-select class=\"is-center input\" formControlName=\"nommatiere\">\n\n                <mat-option *ngFor=\"let matiere of matieres\" [value]=\"matiere.nommat\">{{ matiere.nommat }}</mat-option>\n            </mat-select>\n\n        </div>\n        <div class=\"field\">\n            <label class=\"label\">NOM DU PROF</label>\n\n            <mat-select class=\"is-center input\" formControlName=\"nomprof\">\n\n                <mat-option *ngFor=\"let professeur of professeurs\" [value]=\"professeur.nomprof\">{{professeur.nomprof}}</mat-option>\n            </mat-select>\n\n        </div>\n        <p>IMAGE DU PROFESSEUR</p>\n        <!-- Image Preview -->\n        <div class=\"form-group\">\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\n                <img [src]=\"preview\" [alt]=\"form.value.nommat\">\n            </div>\n        </div>\n\n        <!-- File Input -->\n        <div class=\"form-group\">\n            <input type=\"file\" (change)=\"uploadFile($event)\">\n        </div>\n        <div class=\"field\">\n            <label class=\"label\">NOTE</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"note\" style=\"width: 100%;\" placeholder=\"13\" />\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.note.touched ) && registerFormControl.note.errors?.required\">\n      *Ajouter une note\n    </span>\n        </div>\n        <div class=\"field\">\n            <label class=\"label\">REMARQUE</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"remarque\" style=\"width: 100%;\" placeholder=\"Assez bien\" />\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.remarque.touched ) && registerFormControl.remarque.errors?.required\">\n      *Ajouter une remarque\n    </span>\n        </div>\n\n\n\n\n\n        <div class=\"panel-block\" style=\"width: 100%;margin-top: 30px;\">\n            <button class=\"button is-primary   is-fullwidth\" type=\"submit\" (click)=\"onDelete(assignment.id)\">\n      Add\n    </button>\n        </div>\n    </form>\n</div>\n\n\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>\n<script>\n</script>";
      /***/
    },

    /***/
    "MWAZ":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/x-configuration-settings-admin/manage-account/manage-account.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MWAZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%;\">\n\n\n    <div style=\"margin-top: 2%; height:900px\">\n        <section class=\"section columns\">\n            <div class=\"column is-full-desktop is-full-mobile\">\n\n                <div class=\"tabs is-toggle is-fullwidth\">\n                    <ul>\n                        <li>\n                            <a routerLink=\"/settings\">\n\n                                <span>Add New Accounts</span>\n                            </a>\n                        </li>\n\n                        <li class=\"is-active\">\n                            <a routerLink=\"/settings/Accounts\">\n\n                                <span>Manage  User Account</span>\n                            </a>\n                        </li>\n\n\n\n                    </ul>\n                </div>\n            </div>\n        </section>\n        <section class=\"panel is-left is-half\" style=\"margin: 3px;margin-top: -30px; width: 98%;\">\n            <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n                Users\n            </p>\n            <div class=\"panel-block \">\n                <div style=\"height: 610px; width: 115%;\">\n\n\n\n\n\n                    <div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n                        <table class=\"table is-full menu-list\">\n                            <tbody>\n\n                                <div class=\"spinner-box loadCenter is-center\">\n                                    <div class=\"configure-border-1\">\n                                        <div class=\"configure-core\"></div>\n                                    </div>\n                                    <div class=\"configure-border-2\">\n                                        <div class=\"configure-core\"></div>\n                                    </div>\n                                </div>\n                                <div>\n                                    <tr *ngFor=\"let user of users\">\n                                        <div class=\"div columns  is-full btn r\" style=\"width: 135%;\">\n                                            <div class=\"div column\">\n                                                <table class=\"table is-full\" style=\"width:99%;\">\n                                                    <thead style=\"font-weight: bold;\">\n                                                        <td>Nom</td>\n                                                        <td>Email</td>\n                                                        <td></td>\n\n                                                    </thead>\n                                                    <tbody>\n                                                        <td style=\"width: 20%;\">{{user.name}}</td>\n                                                        <td style=\"width: 24%;\">{{user.email}}</td>\n                                                        <td class=\"level-right\">\n                                                            <a class=\"button is-small is-primary\" style=\"font-weight: bold;margin-right: 1%;\" [routerLink]=\"['/updat',user.id]\">Edit </a>\n                                                            <button class=\"button is-small is-danger\" style=\"font-weight: bold;\" (click)=\"onDelete(user.id)\">Delete</button>\n                                                        </td>\n\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div><br>\n                                    </tr>\n                                </div>\n\n\n\n\n\n                            </tbody>\n                        </table>\n                    </div>\n\n\n\n\n                </div>\n            </div>\n\n        </section>\n\n    </div>\n\n</div>\n\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>";
      /***/
    },

    /***/
    "Md46":
    /*!********************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component.css ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Md46(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ4LWNvbmZpZ3VyYXRpb24tc2V0dGluZ3MtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Mkqj":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignment/assignment-inventory/assignment-inventory-items/assignment-inventory-items.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mkqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"panel\">\n\n    <div class=\"panel-block \">\n        <div style=\"height: 50px; width: 100%;\">\n\n            <div class=\"field has-addons is-full\">\n                <div class=\"control is-full\" style=\"width: 100%;\">\n                    <input class=\"input\" type=\"text\" placeholder=\"Find Assignment by name\" [(ngModel)]=\"searchTerm\">\n                </div>\n                <div class=\"control\">\n                    <a class=\"button is-primary\">\n            Search\n          </a>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n    <div class=\"panel-block\">\n\n    </div>\n</section>\n\n<div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n    <table class=\"table is-full menu-list\">\n        <tbody>\n\n            <div class=\"spinner-box loadCenter is-center\" *ngIf=\"isLoading\">\n                <div class=\"configure-border-1\">\n                    <div class=\"configure-core\"></div>\n                </div>\n                <div class=\"configure-border-2\">\n                    <div class=\"configure-core\"></div>\n                </div>\n            </div>\n            <div *ngIf=\"!isLoading\">\n                <tr *ngFor=\"let assignment of assignments | assignmentFilter: searchTerm\">\n                    <div class=\"div columns  is-full btn r\" style=\"width: 135%;\">\n                        <div class=\"div column\">\n                            <table class=\"table is-full\" style=\"width: 100%;\">\n                                <thead style=\"font-weight: bold;\">\n                                    <td>NOM DU DEVOIR</td>\n                                    <td>NOM DE L eLEVE </td>\n                                    <td>DATE DE RENDU</td>\n                                    <td>NOM DELA MATIERE</td>\n                                    <td>NOM DU PROFESSEUR</td>\n                                    <td>IMAGE DU PROFESSEUR</td>\n\n                                    <td></td>\n\n                                </thead>\n                                <tbody>\n                                    <td style=\"width: 3%;\">{{ assignment.nomdevoir }}</td>\n                                    <td style=\"width: 3%;\">{{ assignment.nomeleve }} </td>\n                                    <td style=\"width: 3%;\">{{ assignment.datederendu }} </td>\n                                    <td style=\"width: 3%;\">{{ assignment.nommatiere }} </td>\n                                    <td style=\"width: 3%;\">{{ assignment.nomprof }} </td>\n                                    <td style=\"width: 2%;\"><img [src]=\"assignment.avatar1\"></td>\n\n\n                                    <td class=\"level-right\" *ngIf=\"userIsAuthenticated\" style=\"width: 10%;margin-right: 50%;\">\n                                        <a class=\"button is-small is-primary\" style=\"font-weight: bold;margin-right: 1%;\" [routerLink]=\"['/edita',assignment.id]\">Edit </a>\n                                        <button class=\"button is-small is-danger\" style=\"font-weight: bold;\" (click)=\"onDelete(assignment.id)\">Delete</button>\n                                    </td>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div><br>\n                </tr>\n            </div>\n\n\n\n\n\n        </tbody>\n    </table>\n</div>\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>";
      /***/
    },

    /***/
    "NfUr":
    /*!*******************************************************************!*\
      !*** ./src/app/header/header-taskbar/header-taskbar.component.ts ***!
      \*******************************************************************/

    /*! exports provided: HeaderTaskbarComponent */

    /***/
    function NfUr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderTaskbarComponent", function () {
        return HeaderTaskbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_taskbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header-taskbar.component.html */
      "4MUV");
      /* harmony import */


      var _header_taskbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header-taskbar.component.css */
      "k45a");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _mainwindow_assignment_assignment_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../mainwindow/assignment/assignment-interaction.service */
      "et3/");

      var HeaderTaskbarComponent = /*#__PURE__*/function () {
        function HeaderTaskbarComponent(authService, assignmentInteractionService) {
          _classCallCheck(this, HeaderTaskbarComponent);

          this.authService = authService;
          this.assignmentInteractionService = assignmentInteractionService;
          this.userIsAuthenticated = false;
        }

        _createClass(HeaderTaskbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this18.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "PeuplerLaBase",
          value: function PeuplerLaBase() {
            this.assignmentInteractionService.peuplerBase();
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return HeaderTaskbarComponent;
      }();

      HeaderTaskbarComponent.ctorParameters = function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _mainwindow_assignment_assignment_interaction_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentInteractionService"]
        }];
      };

      HeaderTaskbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-header-taskbar',
        template: _raw_loader_header_taskbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_taskbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderTaskbarComponent);
      /***/
    },

    /***/
    "NmID":
    /*!***********************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/add-assignment/add-assignment.component.css ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function NmID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXNzaWdubWVudC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "O5ck":
    /*!***************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment.component.ts ***!
      \***************************************************************/

    /*! exports provided: AssignmentComponent */

    /***/
    function O5ck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function () {
        return AssignmentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assignment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assignment.component.html */
      "WSB+");
      /* harmony import */


      var _assignment_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assignment.component.css */
      "mTwG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssignmentComponent = /*#__PURE__*/function () {
        function AssignmentComponent() {
          _classCallCheck(this, AssignmentComponent);
        }

        _createClass(AssignmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AssignmentComponent;
      }();

      AssignmentComponent.ctorParameters = function () {
        return [];
      };

      AssignmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assignment',
        template: _raw_loader_assignment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assignment_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssignmentComponent);
      /***/
    },

    /***/
    "P+IX":
    /*!************************************!*\
      !*** ./src/app/auth/auth.guard.ts ***!
      \************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "qXBG");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAuth = this.authService.getIsAuth();

            if (!isAuth) {
              this.router.navigate(['/login']);
            }

            return isAuth;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
      /***/
    },

    /***/
    "P/vc":
    /*!****************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AddNewUsersComponent */

    /***/
    function PVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewUsersComponent", function () {
        return AddNewUsersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_new_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-new-users.component.html */
      "1I/Q");
      /* harmony import */


      var _add_new_users_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-users.component.css */
      "Ph0q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddNewUsersComponent = /*#__PURE__*/function () {
        function AddNewUsersComponent() {
          _classCallCheck(this, AddNewUsersComponent);
        }

        _createClass(AddNewUsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddNewUsersComponent;
      }();

      AddNewUsersComponent.ctorParameters = function () {
        return [];
      };

      AddNewUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-users',
        template: _raw_loader_add_new_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_users_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddNewUsersComponent);
      /***/
    },

    /***/
    "PeBm":
    /*!***********************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/add-professeur/add-professeur.component.css ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function PeBm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZmVzc2V1ci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Ph0q":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component.css ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ph0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Q2Bl":
    /*!***************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur.component.ts ***!
      \***************************************************************/

    /*! exports provided: ProfesseurComponent */

    /***/
    function Q2Bl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesseurComponent", function () {
        return ProfesseurComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_professeur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./professeur.component.html */
      "Gzd7");
      /* harmony import */


      var _professeur_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./professeur.component.css */
      "GEKx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfesseurComponent = /*#__PURE__*/function () {
        function ProfesseurComponent() {
          _classCallCheck(this, ProfesseurComponent);
        }

        _createClass(ProfesseurComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfesseurComponent;
      }();

      ProfesseurComponent.ctorParameters = function () {
        return [];
      };

      ProfesseurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-professeur',
        template: _raw_loader_professeur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_professeur_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfesseurComponent);
      /***/
    },

    /***/
    "Q3aq":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere-inventory/matiere-inventory-items/matiere-inventory-items.component.css ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q3aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n\n  margin-left: 150%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGllcmUtaW52ZW50b3J5LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwRkFBMEY7RUFDMUYsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvRkFBb0Y7RUFDcEYsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0VBQ1IsV0FBVztFQUNYLFlBQVk7Q0FDYixrQkFBa0I7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibWF0aWVyZS1pbnZlbnRvcnktaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEtFWUZSQU1FUyAqL1xuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbjNEIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCguNSwuNSwuNSwgMzYwZGVnKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29uZmlndXJlLWNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUteGNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAuMjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICB9XG59XG5cbi8qIEdSSUQgU1RZTElORyAqL1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zcGlubmVyLWJveCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBTUElOTklORyBDSVJDTEUgKi9cblxuLmxlby1ib3JkZXItMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsMjQ5LDIyMCwwLjEpIDMzJSwgcmdiYSg2MywyNDksMjIwLDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAxLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxlby1ib3JkZXItMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAxNzEsIDE0NSwwLjEpIDMzJSwgcmdiYSgyNTUsIDE3MSwgMTQ1LDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAyLjJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQUxURVJOQVRJTkcgT1JCSVRTICovXG5cbi5jaXJjbGUtYm9yZGVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsMjQ5LDIyMCwwLjEpIDMzJSwgcmdiYSg2MywyNDksMjIwLDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmNpcmNsZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBYLVJPVEFUSU5HIEJPWEVTICovXG5cbi5jb25maWd1cmUtYm9yZGVyLTEge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS1jbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWJvcmRlci0yIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxlZnQ6IC0xMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS14Y2xvY2t3aXNlIDNzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmNvbmZpZ3VyZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuLyogUFVMU0UgQlVCQkxFUyAqL1xuXG4ucHVsc2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wdWxzZS1idWJibGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5wdWxzZS1idWJibGUtMSB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ucHVsc2UtYnViYmxlLTIge1xuICAgIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgLjJzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBTT0xBUiBTWVNURU0gKi9cblxuLnNvbGFyLXN5c3RlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmJpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhNTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZWFydGgtb3JiaXQge1xuXHR3aWR0aDogMTY1cHg7XG5cdGhlaWdodDogMTY1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi52ZW51cy1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNy40cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5tZXJjdXJ5LW9yYml0IHtcblx0d2lkdGg6IDkwcHg7XG5cdGhlaWdodDogOTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ucGxhbmV0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC01cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnN1biB7XG5cdHdpZHRoOiAzNXB4O1xuXHRoZWlnaHQ6IDM1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYWI5MTtcbn1cblxuLmxlbyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJsdWUtb3JiaXQge1xuXHR3aWR0aDogMTY1cHg7XG5cdGhlaWdodDogMTY1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWRhZmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAzcyBsaW5lYXIgLjJzIGluZmluaXRlO1xufVxuXG4uZ3JlZW4tb3JiaXQge1xuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWZmYmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5yZWQtb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYTkxYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMXMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ud2hpdGUtb3JiaXQge1xuXHR3aWR0aDogNjBweDtcblx0aGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDEwcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53MSB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMSwgMSwgOTBkZWcpXG59XG5cbi53MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMiwgLjUsIDkwZGVnKVxufVxuXG4udzMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKC41LCAxLCAyLCA5MGRlZylcbn1cblxuLmxvYWRDZW50ZXJ7XG5cbiAgbWFyZ2luLWxlZnQ6IDE1MCU7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "R8lL":
    /*!**************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere-inventory/matiere-inventory.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function R8lL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRpZXJlLWludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "RVSG":
    /*!************************************************!*\
      !*** ./src/app/sidemenu/sidemenu.component.ts ***!
      \************************************************/

    /*! exports provided: SidemenuComponent */

    /***/
    function RVSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function () {
        return SidemenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidemenu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidemenu.component.html */
      "X52n");
      /* harmony import */


      var _sidemenu_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidemenu.component.css */
      "GRDm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidemenuComponent = /*#__PURE__*/function () {
        function SidemenuComponent() {
          _classCallCheck(this, SidemenuComponent);
        }

        _createClass(SidemenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidemenuComponent;
      }();

      SidemenuComponent.ctorParameters = function () {
        return [];
      };

      SidemenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidemenu',
        template: _raw_loader_sidemenu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidemenu_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidemenuComponent);
      /***/
    },

    /***/
    "Rn/Y":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/add-professeur/add-professeur-elements/add-professeur-elements.component.css ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n  margin: auto;\n}\n\n.error-msg{\n  color:  red;\n  font-weight: lighter;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9mZXNzZXVyLWVsZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwRkFBMEY7RUFDMUYsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvRkFBb0Y7RUFDcEYsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0VBQ1IsV0FBVztFQUNYLFlBQVk7Q0FDYixrQkFBa0I7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhZGQtcHJvZmVzc2V1ci1lbGVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogS0VZRlJBTUVTICovXG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluM0Qge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC41LC41LC41LCAzNjBkZWcpO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUtY2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS14Y2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IC4yNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gIH1cbn1cblxuLyogR1JJRCBTVFlMSU5HICovXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5uZXItYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xuXG4ubGVvLWJvcmRlci0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDEuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGZhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGVvLWJvcmRlci0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDE3MSwgMTQ1LDAuMSkgMzMlLCByZ2JhKDI1NSwgMTcxLCAxNDUsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDIuMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiOTFhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBBTFRFUk5BVElORyBPUkJJVFMgKi9cblxuLmNpcmNsZS1ib3JkZXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4uY2lyY2xlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFgtUk9UQVRJTkcgQk9YRVMgKi9cblxuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLWNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtYm9yZGVyLTIge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbGVmdDogLTExNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLXhjbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4vKiBQVUxTRSBCVUJCTEVTICovXG5cbi5wdWxzZS1jb250YWluZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnB1bHNlLWJ1YmJsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnB1bHNlLWJ1YmJsZS0xIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMiB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnB1bHNlLWJ1YmJsZS0zIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFNPTEFSIFNZU1RFTSAqL1xuXG4uc29sYXItc3lzdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yYml0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE1O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aC1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnZlbnVzLW9yYml0IHtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA3LjRzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLm1lcmN1cnktb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5wbGFuZXQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTVweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4uc3VuIHtcblx0d2lkdGg6IDM1cHg7XG5cdGhlaWdodDogMzVweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xufVxuXG4ubGVvIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmx1ZS1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZGFmZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XG59XG5cbi5ncmVlbi1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnJlZC1vcmJpdCB7XG5cdHdpZHRoOiA5MHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhOTFhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53aGl0ZS1vcmJpdCB7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLncxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAxLCAxLCA5MGRlZylcbn1cblxuLncyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAyLCAuNSwgOTBkZWcpXG59XG5cbi53MyB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoLjUsIDEsIDIsIDkwZGVnKVxufVxuXG4ubG9hZENlbnRlcntcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5lcnJvci1tc2d7XG4gIGNvbG9yOiAgcmVkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "RrQS":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/professeur/add-professeur/add-professeur.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RrQS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height:900px\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/professeur/\">\n\n                            <span>Professeur Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/professeur/create\">\n\n                            <span>Professeur List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"panel\" style=\"margin: 3%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Add Professeur\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"height: 540px; width: 100%; padding: 2%;\">\n\n                <app-add-professeur-elements></app-add-professeur-elements>\n            </div>\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "SBxm":
    /*!*************************************************!*\
      !*** ./src/app/auth/signup/signup.component.ts ***!
      \*************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function SBxm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.component.html */
      "4Tle");
      /* harmony import */


      var _signup_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.component.css */
      "LJvn");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(router, authService, sankBar) {
          _classCallCheck(this, SignupComponent);

          this.router = router;
          this.authService = authService;
          this.sankBar = sankBar;
        }

        _createClass(SignupComponent, [{
          key: "onSignup",
          value: function onSignup(form) {
            if (form.invalid) {
              return;
            }

            console.log(form.value.role);
            this.authService.createUser(form.value.name, form.value.email, form.value.password);
            this.router.navigate(["/login"]);
            this.sankBar.open("User ajoute ", 'Close');
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      };

      SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupComponent);
      ;
      /***/
    },

    /***/
    "SfCW":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment-inventory/assignment-inventory-items/assignment-inventory-items.component.css ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SfCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n\n  margin-left: 150%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnQtaW52ZW50b3J5LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwRkFBMEY7RUFDMUYsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvRkFBb0Y7RUFDcEYsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0VBQ1IsV0FBVztFQUNYLFlBQVk7Q0FDYixrQkFBa0I7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXNzaWdubWVudC1pbnZlbnRvcnktaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEtFWUZSQU1FUyAqL1xuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbjNEIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCguNSwuNSwuNSwgMzYwZGVnKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29uZmlndXJlLWNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUteGNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAuMjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICB9XG59XG5cbi8qIEdSSUQgU1RZTElORyAqL1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zcGlubmVyLWJveCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBTUElOTklORyBDSVJDTEUgKi9cblxuLmxlby1ib3JkZXItMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsMjQ5LDIyMCwwLjEpIDMzJSwgcmdiYSg2MywyNDksMjIwLDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAxLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxlby1ib3JkZXItMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAxNzEsIDE0NSwwLjEpIDMzJSwgcmdiYSgyNTUsIDE3MSwgMTQ1LDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAyLjJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQUxURVJOQVRJTkcgT1JCSVRTICovXG5cbi5jaXJjbGUtYm9yZGVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsMjQ5LDIyMCwwLjEpIDMzJSwgcmdiYSg2MywyNDksMjIwLDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmNpcmNsZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBYLVJPVEFUSU5HIEJPWEVTICovXG5cbi5jb25maWd1cmUtYm9yZGVyLTEge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS1jbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWJvcmRlci0yIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxlZnQ6IC0xMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYig2MywyNDksMjIwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS14Y2xvY2t3aXNlIDNzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmNvbmZpZ3VyZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuLyogUFVMU0UgQlVCQkxFUyAqL1xuXG4ucHVsc2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wdWxzZS1idWJibGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5wdWxzZS1idWJibGUtMSB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ucHVsc2UtYnViYmxlLTIge1xuICAgIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgLjJzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBTT0xBUiBTWVNURU0gKi9cblxuLnNvbGFyLXN5c3RlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmJpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhNTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZWFydGgtb3JiaXQge1xuXHR3aWR0aDogMTY1cHg7XG5cdGhlaWdodDogMTY1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi52ZW51cy1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNy40cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5tZXJjdXJ5LW9yYml0IHtcblx0d2lkdGg6IDkwcHg7XG5cdGhlaWdodDogOTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ucGxhbmV0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC01cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnN1biB7XG5cdHdpZHRoOiAzNXB4O1xuXHRoZWlnaHQ6IDM1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYWI5MTtcbn1cblxuLmxlbyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJsdWUtb3JiaXQge1xuXHR3aWR0aDogMTY1cHg7XG5cdGhlaWdodDogMTY1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWRhZmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAzcyBsaW5lYXIgLjJzIGluZmluaXRlO1xufVxuXG4uZ3JlZW4tb3JiaXQge1xuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWZmYmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5yZWQtb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYTkxYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMXMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ud2hpdGUtb3JiaXQge1xuXHR3aWR0aDogNjBweDtcblx0aGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDEwcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53MSB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMSwgMSwgOTBkZWcpXG59XG5cbi53MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMiwgLjUsIDkwZGVnKVxufVxuXG4udzMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKC41LCAxLCAyLCA5MGRlZylcbn1cblxuLmxvYWRDZW50ZXJ7XG5cbiAgbWFyZ2luLWxlZnQ6IDE1MCU7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "Swm9":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/matiere/matiere.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Swm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-image\" aria-hidden=\"true\"></i></span>\n                            <span>Matiere Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-music\" aria-hidden=\"true\"></i></span>\n                            <span>Matiere List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns is-centered\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n\n</div>";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, authService) {
          var _this19 = this;

          _classCallCheck(this, AppComponent);

          this.authService = authService;
          this.title = 'Assignment';
          this.showMenu = true;
          this.showSignup = true;
          this.showlogin = true;
          router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
              _this19.showMenu = event.url !== "/";
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
              _this19.showSignup = event.url !== "/signup";
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
              _this19.showlogin = event.url !== "/login";
            }
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.autoAuthUser();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TRnO":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/add-assignment/add-assignment-elements/add-assignment-elements.component.css ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TRnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n  margin: auto;\n}\n\n.error-msg{\n  color:  red;\n  font-weight: lighter;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hc3NpZ25tZW50LWVsZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwRkFBMEY7RUFDMUYsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvRkFBb0Y7RUFDcEYsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0VBQ1IsV0FBVztFQUNYLFlBQVk7Q0FDYixrQkFBa0I7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0VBQ1gseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhZGQtYXNzaWdubWVudC1lbGVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogS0VZRlJBTUVTICovXG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluM0Qge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC41LC41LC41LCAzNjBkZWcpO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUtY2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS14Y2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IC4yNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gIH1cbn1cblxuLyogR1JJRCBTVFlMSU5HICovXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5uZXItYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xuXG4ubGVvLWJvcmRlci0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDEuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGZhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGVvLWJvcmRlci0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDE3MSwgMTQ1LDAuMSkgMzMlLCByZ2JhKDI1NSwgMTcxLCAxNDUsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDIuMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiOTFhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBBTFRFUk5BVElORyBPUkJJVFMgKi9cblxuLmNpcmNsZS1ib3JkZXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4uY2lyY2xlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFgtUk9UQVRJTkcgQk9YRVMgKi9cblxuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLWNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtYm9yZGVyLTIge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbGVmdDogLTExNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLXhjbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4vKiBQVUxTRSBCVUJCTEVTICovXG5cbi5wdWxzZS1jb250YWluZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnB1bHNlLWJ1YmJsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnB1bHNlLWJ1YmJsZS0xIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMiB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnB1bHNlLWJ1YmJsZS0zIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFNPTEFSIFNZU1RFTSAqL1xuXG4uc29sYXItc3lzdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yYml0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE1O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aC1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnZlbnVzLW9yYml0IHtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA3LjRzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLm1lcmN1cnktb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5wbGFuZXQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTVweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4uc3VuIHtcblx0d2lkdGg6IDM1cHg7XG5cdGhlaWdodDogMzVweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xufVxuXG4ubGVvIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmx1ZS1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZGFmZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XG59XG5cbi5ncmVlbi1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnJlZC1vcmJpdCB7XG5cdHdpZHRoOiA5MHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhOTFhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53aGl0ZS1vcmJpdCB7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLncxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAxLCAxLCA5MGRlZylcbn1cblxuLncyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAyLCAuNSwgOTBkZWcpXG59XG5cbi53MyB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoLjUsIDEsIDIsIDkwZGVnKVxufVxuXG4ubG9hZENlbnRlcntcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5lcnJvci1tc2d7XG4gIGNvbG9yOiAgcmVkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "Ugqo":
    /*!**********************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Ugqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRpZXJlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\" overflow: hidden; \" scroll=\"no\">\n    <app-header *ngIf=\"showMenu && showSignup && showlogin\"></app-header>\n    <div class=\"columns\" style=\"margin-top: 0%; \">\n        <app-auth-login></app-auth-login>\n        <div class=\"column is-sidebar-menu is-hidden-mobile is-2\" style=\"background-color:hsl(0, 0%, 29%) ;width: 270px;\" *ngIf=\"showMenu  && showSignup && showlogin \">\n            <app-sidemenu></app-sidemenu>\n        </div>\n\n        <div class=\"column main \">\n            <router-outlet></router-outlet>\n\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "WSB+":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignment/assignment.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WSB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\" overflow: hidden; \" scroll=\"no\">\n    <app-header></app-header>\n    <div class=\"columns\" style=\"margin-top: 0%; \">\n        <app-auth-login></app-auth-login>\n        <div class=\"column is-sidebar-menu is-hidden-mobile is-2\" style=\"background-color:hsl(0, 0%, 29%) ;width: 270px;\">\n            <app-sidemenu></app-sidemenu>\n        </div>\n\n        <div class=\"column main \">\n            <router-outlet></router-outlet>\n\n        </div>\n    </div>\n</div>\n<div style=\"margin-top: 5%;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-image\" aria-hidden=\"true\"></i></span>\n                            <span>Assignment Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-music\" aria-hidden=\"true\"></i></span>\n                            <span>Assignment List</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <span class=\"icon is-small\"><i class=\"fas fa-music\" aria-hidden=\"true\"></i></span>\n                            <span>Assignment rendu List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns is-centered\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n\n</div>";
      /***/
    },

    /***/
    "Wf2d":
    /*!*******************************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere-interaction.service.ts ***!
      \*******************************************************************/

    /*! exports provided: MatiereInteractionService */

    /***/
    function Wf2d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatiereInteractionService", function () {
        return MatiereInteractionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MatiereInteractionService = /*#__PURE__*/function () {
        function MatiereInteractionService(http, router) {
          _classCallCheck(this, MatiereInteractionService);

          this.http = http;
          this.router = router;
          this.matiere = [];
          this.matiereUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.url = 'https://examenangularmongokouassi.herokuapp.com//api/matiere';
        }

        _createClass(MatiereInteractionService, [{
          key: "getMatiere",
          value: function getMatiere() {
            var _this20 = this;

            this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (matiereData) {
              return matiereData.matieres.map(function (matiere) {
                return {
                  nommat: matiere.nommat,
                  nomprof: matiere.nomprof,
                  avatar1: matiere.avatar1,
                  id: matiere._id
                };
              });
            })).subscribe(function (transformedMatieres) {
              _this20.matiere = transformedMatieres;

              _this20.matiereUpdated.next(_toConsumableArray(_this20.matiere));
            });
          }
        }, {
          key: "getMatiereUpdateListener",
          value: function getMatiereUpdateListener() {
            return this.matiereUpdated.asObservable();
          }
        }, {
          key: "getMatieres",
          value: function getMatieres(id) {
            return this.http.get(this.url + id);
          }
        }, {
          key: "addMatiere",
          value: function addMatiere(nommat, nomprof, avatar1) {
            var _this21 = this;

            var matiereData = new FormData();
            matiereData.append("nommat", nommat);
            matiereData.append("nomprof", nomprof);
            matiereData.append("avatar1", avatar1);
            this.http.post(this.url, matiereData).subscribe(function (responseData) {
              var matiere = {
                id: responseData.matiere.id,
                nommat: nommat,
                nomprof: nomprof,
                avatar1: responseData.matiere.avatar1
              };
              _this21.matiere.push(matiere), _this21.matiereUpdated.next(_toConsumableArray(_this21.matiere));

              _this21.router.navigate(["/matiere/create"]);
            });
          }
        }, {
          key: "updateMatiere",
          value: function updateMatiere(id, nommat, nomprof, avatar1) {
            var _this22 = this;

            var matiereData;

            if (typeof avatar1 === 'object') {
              matiereData = new FormData();
              matiereData.append("id", id);
              matiereData.append("nommat", nommat);
              matiereData.append("nomprof", nomprof);
              matiereData.append("avatar1", avatar1, nommat);
            } else {
              matiereData = {
                id: id,
                nommat: nommat,
                nomprof: nomprof,
                avatar1: avatar1
              };
            }

            this.http.put(this.url + id, matiereData).subscribe(function (response) {
              var updatedMatieres = _toConsumableArray(_this22.matiere);

              var oldMatiereIndex = updatedMatieres.findIndex(function (i) {
                return i.id === id;
              });
              var matiere = {
                id: id,
                nommat: nommat,
                nomprof: nomprof,
                avatar1: " "
              };
              updatedMatieres[oldMatiereIndex] = matiere;

              _this22.matiereUpdated.next(_toConsumableArray(_this22.matiere));

              _this22.router.navigate(["/matiere/create"]);
            });
          }
        }, {
          key: "deleteMatiere",
          value: function deleteMatiere(matiereId) {
            var _this23 = this;

            this.http["delete"](this.url + matiereId).subscribe(function () {
              var updatedMatiere = _this23.matiere.filter(function (matiere) {
                return matiere.id !== matiereId;
              });

              _this23.matiere = updatedMatiere;

              _this23.matiereUpdated.next(_toConsumableArray(_this23.matiere));
            });
          }
        }]);

        return MatiereInteractionService;
      }();

      MatiereInteractionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      MatiereInteractionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MatiereInteractionService);
      /***/
    },

    /***/
    "X52n":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sidemenu.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function X52n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"position: fixed;\">\n<aside class=\"menu\" style=\"margin-left: 4%;margin-top: 20%;\" >\n  <app-menuitem></app-menuitem>\n</aside>\n</div>\n";
      /***/
    },

    /***/
    "XuSb":
    /*!**********************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/add-assignment/add-assignment.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddAssignmentComponent */

    /***/
    function XuSb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAssignmentComponent", function () {
        return AddAssignmentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_assignment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-assignment.component.html */
      "Zu/x");
      /* harmony import */


      var _add_assignment_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-assignment.component.css */
      "NmID");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddAssignmentComponent = /*#__PURE__*/function () {
        function AddAssignmentComponent() {
          _classCallCheck(this, AddAssignmentComponent);
        }

        _createClass(AddAssignmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddAssignmentComponent;
      }();

      AddAssignmentComponent.ctorParameters = function () {
        return [];
      };

      AddAssignmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-assignment',
        template: _raw_loader_add_assignment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_assignment_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddAssignmentComponent);
      /***/
    },

    /***/
    "YAmx":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/add-assignment/add-assignment-elements/mime-type.validator.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: mimeType */

    /***/
    function YAmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mimeType", function () {
        return mimeType;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mimeType = function mimeType(control) {
        if (typeof control.value === 'string') {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }

        var file = control.value;
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }

            switch (header) {
              case "89504e47":
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true;
                break;

              default:
                isValid = false;
                break;
            }

            if (isValid) {
              observer.next(null);
            } else {
              observer.next({
                invalidMimeType: true
              });
            }

            observer.complete();
          });
          fileReader.readAsArrayBuffer(file);
        });
        return frObs;
      };
      /***/

    },

    /***/
    "YRIP":
    /*!*************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddAssignmentComponentr */

    /***/
    function YRIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAssignmentComponentr", function () {
        return AddAssignmentComponentr;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_assignmentr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-assignmentr.component.html */
      "/pDx");
      /* harmony import */


      var _add_assignmentr_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-assignmentr.component.css */
      "yUZ3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddAssignmentComponentr = /*#__PURE__*/function () {
        function AddAssignmentComponentr() {
          _classCallCheck(this, AddAssignmentComponentr);
        }

        _createClass(AddAssignmentComponentr, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddAssignmentComponentr;
      }();

      AddAssignmentComponentr.ctorParameters = function () {
        return [];
      };

      AddAssignmentComponentr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-assignmentr',
        template: _raw_loader_add_assignmentr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_assignmentr_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddAssignmentComponentr);
      /***/
    },

    /***/
    "Z4EI":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/x-configuration-settings-admin/add-new-users/add-user/add-user.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z4EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"overflow-y:auto ;overflow-x: hidden;height: 1500px;\">\n\n\n    <form [formGroup]=\"form\" (submit)=\"onSignup()\">\n\n\n        <div class=\"field\">\n            <div class=\"control\">\n\n                <input formControlName=\"name\" class=\"input is-medium\" type=\"name\" placeholder=\"User Name\" autofocus=\"\" required>\n                <span class=\"error-msg\" *ngIf=\"(registerFormControl.name.touched ) && registerFormControl.name.errors?.required\">\n            *Ajouter un nom\n          </span>\n            </div>\n        </div>\n\n\n        <div class=\"field\">\n            <div class=\"control\">\n\n                <input formControlName=\"email\" class=\"input is-medium\" type=\"email\" placeholder=\"User Email\" autofocus=\"\" required email>\n                <span class=\"error-msg\" *ngIf=\"(registerFormControl.email.touched ) && registerFormControl.email.errors?.required\">\n            *Ajouter un email valide\n          </span>\n            </div>\n        </div>\n\n\n\n        <div class=\"field\">\n            <div class=\"control\">\n\n                <input formControlName=\"password\" class=\"input is-medium\" type=\"password\" placeholder=\"User Password\" required>\n                <span class=\"error-msg\" *ngIf=\"(registerFormControl.password.touched ) && registerFormControl.password.errors?.required\">\n              *Ajouter un mot de passe\n            </span>\n            </div>\n        </div>\n\n\n\n        <br>\n\n        <button class=\"button is-block is-primary is-medium is-fullwidth\" type=\"submit\">SignUp User</button>\n    </form>\n\n\n</div>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "P+IX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-carouselamos */
      "8KPv");
      /* harmony import */


      var angular_google_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-google-charts */
      "icpI");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "2+6u");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _header_header_userdetails_header_userdetails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./header/header-userdetails/header-userdetails.component */
      "7kYn");
      /* harmony import */


      var _header_header_taskbar_header_taskbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./header/header-taskbar/header-taskbar.component */
      "NfUr");
      /* harmony import */


      var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./sidemenu/sidemenu.component */
      "RVSG");
      /* harmony import */


      var _sidemenu_menuitem_menuitem_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./sidemenu/menuitem/menuitem.component */
      "Ds1s");
      /* harmony import */


      var _mainwindow_mainwindow_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./mainwindow/mainwindow.component */
      "aFxO");
      /* harmony import */


      var _mainwindow_matiere_matiere_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mainwindow/matiere/matiere.component */
      "fhb1");
      /* harmony import */


      var _mainwindow_professeur_professeur_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mainwindow/professeur/professeur.component */
      "Q2Bl");
      /* harmony import */


      var _mainwindow_matiere_add_matiere_add_matiere_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mainwindow/matiere/add-matiere/add-matiere.component */
      "Cmfj");
      /* harmony import */


      var _mainwindow_professeur_add_professeur_add_professeur_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mainwindow/professeur/add-professeur/add-professeur.component */
      "w19G");
      /* harmony import */


      var _mainwindow_matiere_matiere_inventory_matiere_inventory_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mainwindow/matiere/matiere-inventory/matiere-inventory.component */
      "dEJk");
      /* harmony import */


      var _mainwindow_professeur_professeur_inventory_professeur_inventory_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./mainwindow/professeur/professeur-inventory/professeur-inventory.component */
      "3C2S");
      /* harmony import */


      var _mainwindow_matiere_matiere_inventory_matiere_inventory_items_matiere_inventory_items_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mainwindow/matiere/matiere-inventory/matiere-inventory-items/matiere-inventory-items.component */
      "zbkz");
      /* harmony import */


      var _mainwindow_matiere_add_matiere_add_matiere_elements_add_matiere_elements_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mainwindow/matiere/add-matiere/add-matiere-elements/add-matiere-elements.component */
      "Dwz0");
      /* harmony import */


      var _mainwindow_professeur_add_professeur_add_professeur_elements_add_professeur_elements_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./mainwindow/professeur/add-professeur/add-professeur-elements/add-professeur-elements.component */
      "udz6");
      /* harmony import */


      var _mainwindow_professeur_professeur_inventory_professeur_inventory_items_professeur_inventory_items_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./mainwindow/professeur/professeur-inventory/professeur-inventory-items/professeur-inventory-items.component */
      "CR4F");
      /* harmony import */


      var _mainwindow_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./mainwindow/assignment/assignment.component */
      "O5ck");
      /* harmony import */


      var _mainwindow_assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./mainwindow/assignment/add-assignment/add-assignment.component */
      "XuSb");
      /* harmony import */


      var _mainwindow_assignment_assignment_inventory_assignment_inventory_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./mainwindow/assignment/assignment-inventory/assignment-inventory.component */
      "qzwa");
      /* harmony import */


      var _mainwindow_assignmentr_assignmentr_inventory_assignmentr_inventory_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component */
      "2IFU");
      /* harmony import */


      var _mainwindow_assignment_add_assignment_add_assignment_elements_add_assignment_elements_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./mainwindow/assignment/add-assignment/add-assignment-elements/add-assignment-elements.component */
      "KQxT");
      /* harmony import */


      var _mainwindow_assignment_assignment_inventory_assignment_inventory_items_assignment_inventory_items_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./mainwindow/assignment/assignment-inventory/assignment-inventory-items/assignment-inventory-items.component */
      "lYBi");
      /* harmony import */


      var _mainwindow_assignmentr_assignmentr_inventory_assignmentr_inventory_items_assignmentr_inventory_items_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory-items/assignmentr-inventory-items.component */
      "M8Nr");
      /* harmony import */


      var _mainwindow_assignmentr_assignmentr_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/assignmentr.component */
      "hUSo");
      /* harmony import */


      var _mainwindow_assignmentr_add_assignmentr_add_assignmentr_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/add-assignmentr/add-assignmentr.component */
      "YRIP");
      /* harmony import */


      var _mainwindow_assignmentr_add_assignmentr_add_assignmentr_elements_add_assignmentr_elements_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/add-assignmentr/add-assignmentr-elements/add-assignmentr-elements.component */
      "gX6L");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "bsvf");
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      "SBxm");
      /* harmony import */


      var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./auth/auth-interceptor */
      "kuTz");
      /* harmony import */


      var _mainwindow_assignment_assignment_filter_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./mainwindow/assignment/assignment-filter.pipe */
      "arLZ");
      /* harmony import */


      var _mainwindow_assignmentr_assignmentr_filter_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/assignmentr-filter.pipe */
      "nj5C");
      /* harmony import */


      var _mainwindow_matiere_matiere_filter_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./mainwindow/matiere/matiere-filter.pipe */
      "8syo");
      /* harmony import */


      var _mainwindow_professeur_professeur_filter_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./mainwindow/professeur/professeur-filter.pipe */
      "b0ZW");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_x_configuration_settings_admin_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component */
      "0K21");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/manage-account/manage-account.component */
      "5gTv");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_add_new_users_add_new_users_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component */
      "P/vc");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_add_new_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/add-new-users/add-user/add-user.component */
      "bdwb");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "aCXV");

      var appRoutes = [{
        path: '',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"]
      }, {
        path: 'main',
        component: _mainwindow_mainwindow_component__WEBPACK_IMPORTED_MODULE_20__["MainwindowComponent"]
      }, {
        path: 'matiere',
        component: _mainwindow_matiere_matiere_component__WEBPACK_IMPORTED_MODULE_21__["MatiereComponent"]
      }, {
        path: 'assignments',
        component: _mainwindow_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_31__["AssignmentComponent"]
      }, {
        path: 'assignmentsr',
        component: _mainwindow_assignmentr_assignmentr_component__WEBPACK_IMPORTED_MODULE_38__["AssignmentComponentr"]
      }, {
        path: 'professeur',
        component: _mainwindow_professeur_professeur_component__WEBPACK_IMPORTED_MODULE_22__["ProfesseurComponent"]
      }, {
        path: 'settings',
        component: _mainwindow_x_configuration_settings_admin_x_configuration_settings_admin_component__WEBPACK_IMPORTED_MODULE_49__["XConfigurationSettingsAdminComponent"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _header_header_userdetails_header_userdetails_component__WEBPACK_IMPORTED_MODULE_16__["HeaderUserdetailsComponent"], _header_header_taskbar_header_taskbar_component__WEBPACK_IMPORTED_MODULE_17__["HeaderTaskbarComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_18__["SidemenuComponent"], _sidemenu_menuitem_menuitem_component__WEBPACK_IMPORTED_MODULE_19__["MenuitemComponent"], _mainwindow_mainwindow_component__WEBPACK_IMPORTED_MODULE_20__["MainwindowComponent"], _mainwindow_matiere_matiere_component__WEBPACK_IMPORTED_MODULE_21__["MatiereComponent"], _mainwindow_matiere_add_matiere_add_matiere_component__WEBPACK_IMPORTED_MODULE_23__["AddMatiereComponent"], _mainwindow_matiere_matiere_inventory_matiere_inventory_component__WEBPACK_IMPORTED_MODULE_25__["MatiereInventoryComponent"], _mainwindow_matiere_add_matiere_add_matiere_elements_add_matiere_elements_component__WEBPACK_IMPORTED_MODULE_28__["AddMatiereElementsComponent"], _mainwindow_matiere_matiere_inventory_matiere_inventory_items_matiere_inventory_items_component__WEBPACK_IMPORTED_MODULE_27__["MatiereInventoryItemsComponent"], _mainwindow_professeur_professeur_component__WEBPACK_IMPORTED_MODULE_22__["ProfesseurComponent"], _mainwindow_professeur_add_professeur_add_professeur_component__WEBPACK_IMPORTED_MODULE_24__["AddProfesseurComponent"], _mainwindow_professeur_professeur_inventory_professeur_inventory_component__WEBPACK_IMPORTED_MODULE_26__["ProfesseurInventoryComponent"], _mainwindow_professeur_add_professeur_add_professeur_elements_add_professeur_elements_component__WEBPACK_IMPORTED_MODULE_29__["AddProfesseurElementsComponent"], _mainwindow_professeur_professeur_inventory_professeur_inventory_items_professeur_inventory_items_component__WEBPACK_IMPORTED_MODULE_30__["ProfesseurInventoryItemsComponent"], _mainwindow_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_31__["AssignmentComponent"], _mainwindow_assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_32__["AddAssignmentComponent"], _mainwindow_assignment_assignment_inventory_assignment_inventory_component__WEBPACK_IMPORTED_MODULE_33__["AssignmentInventoryComponent"], _mainwindow_assignment_add_assignment_add_assignment_elements_add_assignment_elements_component__WEBPACK_IMPORTED_MODULE_35__["AddAssignmentElementsComponent"], _mainwindow_assignment_assignment_inventory_assignment_inventory_items_assignment_inventory_items_component__WEBPACK_IMPORTED_MODULE_36__["AssignmentInventoryItemsComponent"], _mainwindow_assignmentr_assignmentr_component__WEBPACK_IMPORTED_MODULE_38__["AssignmentComponentr"], _mainwindow_assignmentr_add_assignmentr_add_assignmentr_component__WEBPACK_IMPORTED_MODULE_39__["AddAssignmentComponentr"], _mainwindow_assignmentr_add_assignmentr_add_assignmentr_elements_add_assignmentr_elements_component__WEBPACK_IMPORTED_MODULE_40__["AddAssignmentElementsComponentr"], _mainwindow_assignmentr_assignmentr_inventory_assignmentr_inventory_component__WEBPACK_IMPORTED_MODULE_34__["AssignmentrInventoryComponent"], _mainwindow_assignmentr_assignmentr_inventory_assignmentr_inventory_items_assignmentr_inventory_items_component__WEBPACK_IMPORTED_MODULE_37__["AssignmentrInventoryItemsComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_43__["SignupComponent"], _mainwindow_assignment_assignment_filter_pipe__WEBPACK_IMPORTED_MODULE_45__["AssignmentFilterPipe"], _mainwindow_assignmentr_assignmentr_filter_pipe__WEBPACK_IMPORTED_MODULE_46__["AssignmentrFilterPipe"], _mainwindow_matiere_matiere_filter_pipe__WEBPACK_IMPORTED_MODULE_47__["MatiereFilterPipe"], _mainwindow_professeur_professeur_filter_pipe__WEBPACK_IMPORTED_MODULE_48__["ProfesseurFilterPipe"], _mainwindow_x_configuration_settings_admin_x_configuration_settings_admin_component__WEBPACK_IMPORTED_MODULE_49__["XConfigurationSettingsAdminComponent"], _mainwindow_x_configuration_settings_admin_manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_50__["ManageAccountComponent"], _mainwindow_x_configuration_settings_admin_add_new_users_add_new_users_component__WEBPACK_IMPORTED_MODULE_51__["AddNewUsersComponent"], _mainwindow_x_configuration_settings_admin_add_new_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_52__["AddUserComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
          relativeLinkResolution: 'legacy'
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng2_carouselamos__WEBPACK_IMPORTED_MODULE_9__["Ng2CarouselamosModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_53__["DragDropModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_44__["AuthInterceptor"],
          multi: true
        }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "Zu/x":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignment/add-assignment/add-assignment.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZuX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height:900px\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/assignments/\">\n\n                            <span>Assignment Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/assignments/create\">\n\n                            <span>Assignment List</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/assignmentsr/create\">\n\n                            <span>Assignment rendu List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"panel\" style=\"margin: 3%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Add Assignment\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px; width: 500%;\">\n\n                <app-add-assignment-elements></app-add-assignment-elements>\n            </div>\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "ZyCK":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/manage-account/manage-account.component.css ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZyCK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "aFxO":
    /*!****************************************************!*\
      !*** ./src/app/mainwindow/mainwindow.component.ts ***!
      \****************************************************/

    /*! exports provided: MainwindowComponent */

    /***/
    function aFxO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainwindowComponent", function () {
        return MainwindowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mainwindow_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mainwindow.component.html */
      "jy5X");
      /* harmony import */


      var _mainwindow_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mainwindow.component.css */
      "sNVW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "aCXV");
      /* harmony import */


      var src_app_mainwindow_assignment_assignment_interaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/mainwindow/assignment/assignment-interaction.service */
      "et3/");
      /* harmony import */


      var src_app_mainwindow_assignmentr_assignmentr_interaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/mainwindow/assignmentr/assignmentr-interaction.service */
      "7+Mr");
      /* harmony import */


      var src_app_mainwindow_matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/mainwindow/matiere/matiere-interaction.service */
      "Wf2d");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var MainwindowComponent = /*#__PURE__*/function () {
        function MainwindowComponent(assignmentInteractionService, assignmentrInteractionService, matiereInteractionService, authService, router, snackBar) {
          _classCallCheck(this, MainwindowComponent);

          this.assignmentInteractionService = assignmentInteractionService;
          this.assignmentrInteractionService = assignmentrInteractionService;
          this.matiereInteractionService = matiereInteractionService;
          this.authService = authService;
          this.router = router;
          this.snackBar = snackBar;
          this.assignments = [];
          this.assignmentrs = [];
          this.matieres = [];
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(MainwindowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.isLoading = true;
            this.assignmentInteractionService.getAssignment();
            this.assignmentSubs = this.assignmentInteractionService.getAssignmentUpdateListener().subscribe(function (posts) {
              _this24.isLoading = false;
              _this24.assignments = posts;
            });
            this.isLoading = true;
            this.assignmentrInteractionService.getAssignment();
            this.assignmentSubs = this.assignmentrInteractionService.getAssignmentUpdateListener().subscribe(function (posts) {
              _this24.isLoading = false;
              _this24.assignmentrs = posts;
            });
            this.isLoading = true;
            this.matiereInteractionService.getMatiere();
            this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener().subscribe(function (posts) {
              _this24.isLoading = false;
              _this24.matieres = posts;
            });
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
              this.router.navigate(["/main"]);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete(assignmentId) {
            this.assignmentInteractionService.deleteAssignment(assignmentId);
            this.snackBar.open("Assignment Deleted Successfully", "Close");
          }
        }, {
          key: "onDeleter",
          value: function onDeleter(assignmentId) {
            this.assignmentrInteractionService.deleteAssignment(assignmentId);
            this.snackBar.open("Assignment Deleted Successfully", "Close");
          }
        }]);

        return MainwindowComponent;
      }();

      MainwindowComponent.ctorParameters = function () {
        return [{
          type: src_app_mainwindow_assignment_assignment_interaction_service__WEBPACK_IMPORTED_MODULE_7__["AssignmentInteractionService"]
        }, {
          type: src_app_mainwindow_assignmentr_assignmentr_interaction_service__WEBPACK_IMPORTED_MODULE_8__["AssignmentrInteractionService"]
        }, {
          type: src_app_mainwindow_matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_9__["MatiereInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
        }];
      };

      MainwindowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mainwindow',
        template: _raw_loader_mainwindow_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mainwindow_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MainwindowComponent);
      /***/
    },

    /***/
    "arLZ":
    /*!*****************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment-filter.pipe.ts ***!
      \*****************************************************************/

    /*! exports provided: AssignmentFilterPipe */

    /***/
    function arLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentFilterPipe", function () {
        return AssignmentFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssignmentFilterPipe = /*#__PURE__*/function () {
        function AssignmentFilterPipe() {
          _classCallCheck(this, AssignmentFilterPipe);
        }

        _createClass(AssignmentFilterPipe, [{
          key: "transform",
          value: function transform(assignments, searchTerm) {
            if (!assignments || !searchTerm) {
              return assignments;
            }

            return assignments.filter(function (assignment) {
              return assignment.nomdevoir.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
          }
        }]);

        return AssignmentFilterPipe;
      }();

      AssignmentFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'assignmentFilter',
        pure: false
      })], AssignmentFilterPipe);
      /***/
    },

    /***/
    "b0ZW":
    /*!*****************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur-filter.pipe.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfesseurFilterPipe */

    /***/
    function b0ZW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesseurFilterPipe", function () {
        return ProfesseurFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfesseurFilterPipe = /*#__PURE__*/function () {
        function ProfesseurFilterPipe() {
          _classCallCheck(this, ProfesseurFilterPipe);
        }

        _createClass(ProfesseurFilterPipe, [{
          key: "transform",
          value: function transform(professeurs, searchTerm) {
            if (!professeurs || !searchTerm) {
              return professeurs;
            }

            return professeurs.filter(function (professeur) {
              return professeur.nomprof.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
          }
        }]);

        return ProfesseurFilterPipe;
      }();

      ProfesseurFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'professeurFilter',
        pure: false
      })], ProfesseurFilterPipe);
      /***/
    },

    /***/
    "b95y":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignment/add-assignment/add-assignment-elements/add-assignment-elements.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b95y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"overflow-y:auto ;overflow-x: hidden;height: 900px;\">\n\n\n    <div class=\"spinner-box loadCenter\" *ngIf=\"isLoading\">\n        <div class=\"configure-border-1\">\n            <div class=\"configure-core\"></div>\n        </div>\n        <div class=\"configure-border-2\">\n            <div class=\"configure-core\"></div>\n        </div>\n    </div>\n\n\n    <form [formGroup]=\"form\" (submit)=\"onAddAssignment()\" *ngIf=\"!isLoading\">\n\n\n\n\n        <div class=\"field\">\n            <label class=\"label\">NOM DU DEVOIR</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"nomdevoir\" style=\"width: 100%;\" placeholder=\"PROJET\" />\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.nomdevoir.touched ) && registerFormControl.nomdevoir.errors?.required\">\n                *Ajouter un nom\n              </span>\n        </div>\n        <div class=\"field\">\n            <label class=\"label\">NOM DE L ELEVE</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"nomeleve\" style=\"width: 100%;\" placeholder=\"KOUASSI\" />\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.nomeleve.touched ) && registerFormControl.nomeleve.errors?.required\">\n                *Ajouter un nom\n              </span>\n        </div>\n\n\n        <div class=\"field\">\n            <label class=\"label\">DATE DE RENDU</label>\n            <input type=\"date\" class=\"is-center input\" formControlName=\"datederendu\" style=\"width: 100%;\" placeholder=\"071xxxxxxx\" />\n        </div>\n\n\n        <div class=\"field\">\n            <label class=\"label\">NOM DE LA MATIERE</label>\n\n            <mat-select class=\"is-center input\" formControlName=\"nommatiere\">\n\n                <mat-option *ngFor=\"let matiere of matieres\" [value]=\"matiere.nommat\">{{ matiere.nommat }}</mat-option>\n            </mat-select>\n\n        </div>\n        <div class=\"field\">\n            <label class=\"label\">NOM DU PROFESSEUR</label>\n\n            <mat-select class=\"is-center input\" formControlName=\"nomprof\">\n\n                <mat-option *ngFor=\"let professeur of professeurs\" [value]=\"professeur.nomprof\">{{ professeur.nomprof }}</mat-option>\n            </mat-select>\n            <p>IMAGE DU PROFESSEUR</p>\n        </div>\n        <!-- Image Preview -->\n        <div class=\"form-group\">\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\n                <img [src]=\"preview\" [alt]=\"form.value.nommat\">\n            </div>\n        </div>\n\n        <!-- File Input -->\n        <div class=\"form-group\">\n            <input type=\"file\" (change)=\"uploadFile($event)\">\n        </div>\n\n\n\n\n\n\n        <div class=\"panel-block\" style=\"width: 100%;margin-top: 30px;\">\n            <button class=\"button is-primary   is-fullwidth\" type=\"submit\">\n      Add\n    </button>\n        </div>\n    </form>\n</div>\n\n\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>\n<script>\n</script>";
      /***/
    },

    /***/
    "bdwb":
    /*!********************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/add-new-users/add-user/add-user.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: AddUserComponent */

    /***/
    function bdwb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
        return AddUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "Z4EI");
      /* harmony import */


      var _add_user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-user.component.css */
      "s6m0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddUserComponent = /*#__PURE__*/function () {
        function AddUserComponent(authService, route) {
          _classCallCheck(this, AddUserComponent);

          this.authService = authService;
          this.route = route;
          this.isLoading = false;
          this.mode = "create";
        }

        _createClass(AddUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]
              }),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]
              }),
              'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]
              })
            });
            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('userId')) {
                _this25.mode = "edit";
                _this25.docId = paramMap.get('userId');
                _this25.isLoading = true;

                _this25.authService.getUserDatas(_this25.docId).subscribe(function (docData) {
                  _this25.isLoading = false;
                  _this25.doc = {
                    id: docData._id,
                    name: docData.name,
                    email: docData.email,
                    password: docData.password
                  };
                  console.log(_this25.doc);
                  console.log(_this25.docId);

                  _this25.form.setValue({
                    'name': _this25.doc.name,
                    'email': _this25.doc.email,
                    'password': _this25.doc.password
                  });
                });
              } else {
                _this25.mode = "create";
                _this25.docId = null;
              }
            });
          }
        }, {
          key: "registerFormControl",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSignup",
          value: function onSignup() {
            if (this.form.invalid) {
              return;
            }

            if (this.mode === "create") {
              this.authService.createUser(this.form.value.name, this.form.value.email, this.form.value.password);
            } else {
              this.authService.updateUser(this.docId, this.form.value.name, this.form.value.email, this.form.value.password);
            }

            this.form.reset();
          }
        }]);

        return AddUserComponent;
      }();

      AddUserComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      AddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-add-user',
        template: _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddUserComponent);
      /***/
    },

    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "zu2e");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "wmvV");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, sankBar) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.sankBar = sankBar;
        }

        _createClass(LoginComponent, [{
          key: "onLogin",
          value: function onLogin(form) {
            if (form.invalid) {
              this.sankBar.open("Please enter valid data", 'Close');
              return;
            }

            this.sankBar.open("Logging... Please wait ", 'Close');
            this.authService.login(form.value.email, form.value.password);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      ;
      /***/
    },

    /***/
    "d9xs":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/professeur/add-professeur/add-professeur-elements/add-professeur-elements.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d9xs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n\n\n\n\n    <form [formGroup]=\"form\" (submit)=\"onAddProfesseur()\">\n\n\n        <div class=\"field\">\n            <label class=\"label\">NOM DU PROFESSEUR</label>\n            <input type=\"text\" class=\"is-center input\" formControlName=\"nomprof\" style=\"width: 100%;\" placeholder=\"DR BUFFA\">\n            <span class=\"error-msg\" *ngIf=\"(registerFormControl.nomprof.touched ) && registerFormControl.nomprof.errors?.required\">\n      *Ajouter un nom\n    </span>\n            <p>IMAGE DU PROFESSEUR</p>\n        </div>\n        <!-- Image Preview -->\n        <div class=\"form-group\">\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\n                <img [src]=\"preview\" [alt]=\"form.value.nomprof\">\n            </div>\n        </div>\n\n        <!-- File Input -->\n        <div class=\"form-group\">\n            <input type=\"file\" (change)=\"uploadFile($event)\">\n        </div>\n\n\n\n\n\n        <div class=\"panel-block\" style=\"width: 100%;margin-top: 30px;\">\n            <button class=\"button is-primary   is-fullwidth\" type=\"submit\">\n      Add\n    </button>\n        </div>\n    </form>\n</div>\n\n\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>\n<script>\n</script>";
      /***/
    },

    /***/
    "dEJk":
    /*!*************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere-inventory/matiere-inventory.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MatiereInventoryComponent */

    /***/
    function dEJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatiereInventoryComponent", function () {
        return MatiereInventoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_matiere_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./matiere-inventory.component.html */
      "pKX+");
      /* harmony import */


      var _matiere_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./matiere-inventory.component.css */
      "R8lL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MatiereInventoryComponent = /*#__PURE__*/function () {
        function MatiereInventoryComponent() {
          _classCallCheck(this, MatiereInventoryComponent);
        }

        _createClass(MatiereInventoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MatiereInventoryComponent;
      }();

      MatiereInventoryComponent.ctorParameters = function () {
        return [];
      };

      MatiereInventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-matiere-inventory',
        template: _raw_loader_matiere_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_matiere_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MatiereInventoryComponent);
      /***/
    },

    /***/
    "dc1N":
    /*!********************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/add-matiere/add-matiere-elements/mime-type.validator.ts ***!
      \********************************************************************************************/

    /*! exports provided: mimeType */

    /***/
    function dc1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mimeType", function () {
        return mimeType;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mimeType = function mimeType(control) {
        if (typeof control.value === 'string') {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }

        var file = control.value;
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }

            switch (header) {
              case "89504e47":
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true;
                break;

              default:
                isValid = false;
                break;
            }

            if (isValid) {
              observer.next(null);
            } else {
              observer.next({
                invalidMimeType: true
              });
            }

            observer.complete();
          });
          fileReader.readAsArrayBuffer(file);
        });
        return frObs;
      };
      /***/

    },

    /***/
    "doYN":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function doYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height: 900px;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li>\n                        <a routerLink=\"/assignments/\">\n\n                            <span>Assignment Form</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/assignments/create\">\n\n                            <span>Assignment List</span>\n                        </a>\n                    </li>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/assignments/create\">\n\n                            <span>Assignment rendu List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns\" style=\"margin-top: -6%;\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <app-search-assignment></app-search-assignment>\n        </div>\n    </section>\n\n    <section class=\"panel\" style=\"margin: 2%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Assignments rendus\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"height: 590px; width: 100%;\">\n\n                <app-assignmentr-inventory-items></app-assignmentr-inventory-items>\n            </div>\n        </div>\n        <div class=\"panel-block\">\n\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "eDkB":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory-items/assignmentr-inventory-items.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eDkB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"panel\">\n\n    <div class=\"panel-block \">\n        <div style=\"height: 50px; width: 100%;\">\n\n            <div class=\"field has-addons is-full\">\n                <div class=\"control is-full\" style=\"width: 100%;\">\n                    <input class=\"input\" type=\"text\" placeholder=\"Find Assignment by name\" [(ngModel)]=\"searchTerm\">\n                </div>\n                <div class=\"control\">\n                    <a class=\"button is-primary\">\n            Search\n          </a>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n    <div class=\"panel-block\">\n\n    </div>\n</section>\n\n<div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n    <table class=\"table is-full menu-list\">\n        <tbody>\n\n            <div class=\"spinner-box loadCenter is-center\" *ngIf=\"isLoading\">\n                <div class=\"configure-border-1\">\n                    <div class=\"configure-core\"></div>\n                </div>\n                <div class=\"configure-border-2\">\n                    <div class=\"configure-core\"></div>\n                </div>\n            </div>\n            <div *ngIf=\"!isLoading\">\n                <tr *ngFor=\"let assignment of assignmentrs | assignmentrFilter: searchTerm\">\n                    <div class=\"div columns  is-full btn r\" style=\"width: 135%;\">\n                        <div class=\"div column\">\n                            <table class=\"table is-full\" style=\"width: 100%;\">\n                                <thead style=\"font-weight: bold;\">\n                                    <td>NOM DEVOIR</td>\n                                    <td>NOM ELEVE </td>\n                                    <td>DATE RENDU</td>\n                                    <td>NOM MATIERE</td>\n                                    <td>NOM PROFESSEUR</td>\n                                    <td>IMAGE PROFESSEUR</td>\n                                    <td>NOTE</td>\n                                    <td>REMARQUE</td>\n\n\n                                    <td></td>\n\n                                </thead>\n                                <tbody>\n                                    <td style=\"width: 2%;\">{{ assignment.nomdevoir }}</td>\n                                    <td style=\"width: 2%;\">{{ assignment.nomeleve }} </td>\n                                    <td style=\"width: 2%;\">{{ assignment.datederendu }} </td>\n                                    <td style=\"width: 2%;\">{{ assignment.nommatiere }} </td>\n                                    <td style=\"width: 2%;\">{{ assignment.nomprof }} </td>\n                                    <td style=\"width: 2%;\"><img [src]=\"assignment.avatar1\"></td>\n                                    <td style=\"width: 2%;\">{{ assignment.note }} </td>\n                                    <td style=\"width: 2%;\">{{ assignment.remarque }} </td>\n\n                                    <td class=\"level-right\" *ngIf=\"userIsAuthenticated\" style=\"width: 10%;margin-right: 50%;\">\n\n                                        <button class=\"button is-small is-danger\" style=\"font-weight: bold;\" (click)=\"onDelete(assignment.id)\">Delete</button>\n                                    </td>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div><br>\n                </tr>\n            </div>\n\n\n\n\n\n        </tbody>\n    </table>\n</div>\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>";
      /***/
    },

    /***/
    "ervJ":
    /*!***********************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/professeur-inventory/professeur-inventory.component.css ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ervJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzZXVyLWludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "et3/":
    /*!*************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment-interaction.service.ts ***!
      \*************************************************************************/

    /*! exports provided: AssignmentInteractionService */

    /***/
    function et3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentInteractionService", function () {
        return AssignmentInteractionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data */
      "pt/F");

      var AssignmentInteractionService = /*#__PURE__*/function () {
        function AssignmentInteractionService(http, router) {
          _classCallCheck(this, AssignmentInteractionService);

          this.http = http;
          this.router = router;
          this.assignment = [];
          this.assignmentUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.url = 'https://examenangularmongokouassi.herokuapp.com//api/assignment';
        }

        _createClass(AssignmentInteractionService, [{
          key: "getAssignment",
          value: function getAssignment() {
            var _this26 = this;

            this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (assignmentData) {
              return assignmentData.assignments.map(function (assignment) {
                return {
                  nomdevoir: assignment.nomdevoir,
                  nomeleve: assignment.nomeleve,
                  datederendu: assignment.datederendu,
                  nommatiere: assignment.nommatiere,
                  nomprof: assignment.nomprof,
                  avatar1: assignment.avatar1,
                  note: assignment.note,
                  remarque: assignment.remarque,
                  id: assignment._id
                };
              });
            })).subscribe(function (transformedAssignments) {
              _this26.assignment = transformedAssignments;

              _this26.assignmentUpdated.next(_toConsumableArray(_this26.assignment));
            });
          }
        }, {
          key: "getAssignmentUpdateListener",
          value: function getAssignmentUpdateListener() {
            return this.assignmentUpdated.asObservable();
          }
        }, {
          key: "getAssignments",
          value: function getAssignments(id) {
            return this.http.get(this.url + id);
          }
        }, {
          key: "addAssignment",
          value: function addAssignment(nomdevoir, nomeleve, datederendu, nommatiere, nomprof, avatar1, note, remarque) {
            var _this27 = this;

            var assignmentData = new FormData();
            assignmentData.append("nomdevoir", nomdevoir);
            assignmentData.append("nomeleve", nomeleve);
            assignmentData.append("datederendu", datederendu);
            assignmentData.append("nommatiere", nommatiere);
            assignmentData.append("nomprof", nomprof);
            assignmentData.append("avatar1", avatar1);
            assignmentData.append("note", note);
            assignmentData.append("remarque", remarque);
            this.http.post(this.url, assignmentData).subscribe(function (responseData) {
              var assignment = {
                id: responseData.assignment.id,
                nomdevoir: nomdevoir,
                nomeleve: nomeleve,
                datederendu: datederendu,
                nommatiere: nommatiere,
                nomprof: nomprof,
                avatar1: responseData.assignment.avatar1,
                note: note,
                remarque: remarque
              };

              _this27.assignment.push(assignment);

              _this27.assignmentUpdated.next(_toConsumableArray(_this27.assignment));

              _this27.router.navigate(["/assignments/create"]);
            });
          }
        }, {
          key: "addAssignments",
          value: function addAssignments(assignment) {
            // this.assignment.push(assignment);
            return this.http.post(this.url, assignment);
          }
        }, {
          key: "updateAssignment",
          value: function updateAssignment(id, nomdevoir, nomeleve, datederendu, nommatiere, nomprof, avatar1, note, remarque) {
            var _this28 = this;

            var assignmentData;

            if (typeof avatar1 === 'object') {
              assignmentData = new FormData();
              assignmentData.append("id", id);
              assignmentData.append("nomdevoir", nomdevoir);
              assignmentData.append("nomeleve", nomeleve);
              assignmentData.append("datederendu", datederendu);
              assignmentData.append("nommatiere", nommatiere);
              assignmentData.append("nomprof", nomprof);
              assignmentData.append("avatar1", avatar1);
              assignmentData.append("note", note);
              assignmentData.append("remarque", remarque);
            } else {
              assignmentData = {
                id: id,
                nomdevoir: nomdevoir,
                nomeleve: nomeleve,
                datederendu: datederendu,
                nommatiere: nommatiere,
                nomprof: nomprof,
                avatar1: avatar1,
                note: note,
                remarque: remarque
              };
            }

            this.http.put(this.url + id, assignmentData).subscribe(function (response) {
              var updatedAssignments = _toConsumableArray(_this28.assignment);

              var oldAssignmentIndex = updatedAssignments.findIndex(function (s) {
                return s.id === assignment.id;
              });
              var assignment = {
                id: id,
                nomdevoir: nomdevoir,
                nomeleve: nomeleve,
                datederendu: datederendu,
                nommatiere: nommatiere,
                nomprof: nomprof,
                avatar1: "",
                note: note,
                remarque: remarque
              };
              updatedAssignments[oldAssignmentIndex] = assignment;

              _this28.assignmentUpdated.next(_toConsumableArray(_this28.assignment));

              _this28.router.navigate(["/assignments/create"]);
            });
          }
        }, {
          key: "peuplerBase",
          value: function peuplerBase() {
            var _this29 = this;

            _data__WEBPACK_IMPORTED_MODULE_6__["bd"].forEach(function (a) {
              var assignment = {
                id: a.id,
                nomdevoir: a.nomdevoir,
                nomeleve: a.nomeleve,
                datederendu: a.datederendu,
                nommatiere: a.nommatiere,
                nomprof: a.nomprof,
                avatar1: a.avatar1,
                note: a.note,
                remarque: a.remarque
              };

              _this29.assignment.push(assignment);

              _this29.assignmentUpdated.next(_toConsumableArray(_this29.assignment));

              _this29.router.navigate(["/assignments/create"]);

              _this29.addAssignments(assignment);
            });
          }
        }, {
          key: "deleteAssignment",
          value: function deleteAssignment(assignmentId) {
            var _this30 = this;

            this.http["delete"](this.url + assignmentId).subscribe(function () {
              var updatedAssignment = _this30.assignment.filter(function (assignment) {
                return assignment.id !== assignmentId;
              });

              _this30.assignment = updatedAssignment;

              _this30.assignmentUpdated.next(_toConsumableArray(_this30.assignment));
            });
          }
        }]);

        return AssignmentInteractionService;
      }();

      AssignmentInteractionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AssignmentInteractionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AssignmentInteractionService);
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "kjkU");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "DN7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "fhb1":
    /*!*********************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere.component.ts ***!
      \*********************************************************/

    /*! exports provided: MatiereComponent */

    /***/
    function fhb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatiereComponent", function () {
        return MatiereComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_matiere_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./matiere.component.html */
      "Swm9");
      /* harmony import */


      var _matiere_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./matiere.component.css */
      "Ugqo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MatiereComponent = /*#__PURE__*/function () {
        function MatiereComponent() {
          _classCallCheck(this, MatiereComponent);
        }

        _createClass(MatiereComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MatiereComponent;
      }();

      MatiereComponent.ctorParameters = function () {
        return [];
      };

      MatiereComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-matiere',
        template: _raw_loader_matiere_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_matiere_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MatiereComponent);
      /***/
    },

    /***/
    "gX6L":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr-elements/add-assignmentr-elements.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: AddAssignmentElementsComponentr */

    /***/
    function gX6L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAssignmentElementsComponentr", function () {
        return AddAssignmentElementsComponentr;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_assignmentr_elements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-assignmentr-elements.component.html */
      "MCDr");
      /* harmony import */


      var _add_assignmentr_elements_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-assignmentr-elements.component.css */
      "DREw");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _assignmentr_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../assignmentr-interaction.service */
      "7+Mr");
      /* harmony import */


      var _assignment_assignment_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../assignment/assignment-interaction.service */
      "et3/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../matiere/matiere-interaction.service */
      "Wf2d");
      /* harmony import */


      var _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../professeur/professeur-interaction.service */
      "F1sD");
      /* harmony import */


      var _mime_type_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./mime-type.validator */
      "oct/");

      var AddAssignmentElementsComponentr = /*#__PURE__*/function () {
        function AddAssignmentElementsComponentr(assignmentrInteractionService, router, assignmentInteractionService, authService, matiereInteractionService, professeurInteractionService, route, snackBar) {
          _classCallCheck(this, AddAssignmentElementsComponentr);

          this.assignmentrInteractionService = assignmentrInteractionService;
          this.router = router;
          this.assignmentInteractionService = assignmentInteractionService;
          this.authService = authService;
          this.matiereInteractionService = matiereInteractionService;
          this.professeurInteractionService = professeurInteractionService;
          this.route = route;
          this.snackBar = snackBar;
          this.isLoading = false;
          this.assignmentsr = [];
          this.matieres = [];
          this.professeurs = [];
          this.note = "";
          this.remarque = "";
          this.mode = "create";
        }

        _createClass(AddAssignmentElementsComponentr, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              'nomdevoir': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'nomeleve': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'datederendu': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'nommatiere': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'nomprof': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              }),
              'avatar1': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_12__["mimeType"]]
              }),
              'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(20)]
              }),
              'remarque': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]
              })
            });
            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('assignmentId')) {
                _this31.mode = "edit";
                _this31.assignmentId = paramMap.get('assignmentId');
                _this31.isLoading = true;

                _this31.assignmentInteractionService.getAssignments(_this31.assignmentId).subscribe(function (assignmentData) {
                  _this31.isLoading = false;
                  _this31.assignment = {
                    id: assignmentData._id,
                    nomdevoir: assignmentData.nomdevoir,
                    nomeleve: assignmentData.nomeleve,
                    datederendu: assignmentData.datederendu,
                    nommatiere: assignmentData.nommatiere,
                    nomprof: assignmentData.nomprof,
                    avatar1: assignmentData.avatar1,
                    note: assignmentData.note,
                    remarque: assignmentData.remarque
                  };

                  _this31.form.setValue({
                    'nomdevoir': _this31.assignment.nomdevoir,
                    'nomeleve': _this31.assignment.nomeleve,
                    'datederendu': _this31.assignment.datederendu,
                    'nommatiere': _this31.assignment.nommatiere,
                    'nomprof': _this31.assignment.nomprof,
                    'avatar1': _this31.assignment.avatar1,
                    'note': _this31.assignment.note,
                    'remarque': _this31.assignment.remarque
                  });
                });
              } else {
                _this31.mode = "create";
                _this31.assignmentId = null;
              }
            });
            this.isLoading = true;
            this.matiereInteractionService.getMatiere();
            this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener().subscribe(function (posts) {
              _this31.isLoading = false;
              _this31.matieres = posts;
            });
            this.isLoading = true;
            this.professeurInteractionService.getProfesseur();
            this.professeurSubs = this.professeurInteractionService.getProfesseurUpdateListener().subscribe(function (posts) {
              _this31.isLoading = false;
              _this31.professeurs = posts;
            });
          }
        }, {
          key: "registerFormControl",
          get: function get() {
            return this.form.controls;
          } // Image Preview

        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this32 = this;

            var file = event.target.files[0];
            this.form.patchValue({
              avatar1: file
            });
            this.form.get('avatar1').updateValueAndValidity(); // File Preview

            var reader = new FileReader();

            reader.onload = function () {
              _this32.preview = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "onAddAssignment",
          value: function onAddAssignment() {
            if (this.form.invalid) {
              return;
            }

            if (this.mode === "edit") {
              this.assignmentrInteractionService.addAssignment(this.form.value.nomdevoir, this.form.value.nomeleve, this.form.value.datederendu, this.form.value.nommatiere, this.form.value.nomprof, this.form.value.avatar1, this.form.value.note, this.form.value.remarque);
              this.snackBar.open("Assignment Added Successfully", "Close");
              this.router.navigate(["main"]);
            } else {
              this.assignmentrInteractionService.updateAssignment(this.assignmentId, this.form.value.nomdevoir, this.form.value.nomeleve, this.form.value.datederendu, this.form.value.nommatiere, this.form.value.nomprof, this.form.value.avatar1, this.form.value.note, this.form.value.remarque);
              this.snackBar.open("Assignmentr Edited!! ", "Close");
              this.router.navigate(["main"]);
            }

            this.form.reset();
          }
        }, {
          key: "onDelete",
          value: function onDelete(assignmentId) {
            this.assignmentInteractionService.deleteAssignment(assignmentId); //  this.snackBar.open("Assignment Deleted Successfully", "Close");
          }
        }]);

        return AddAssignmentElementsComponentr;
      }();

      AddAssignmentElementsComponentr.ctorParameters = function () {
        return [{
          type: _assignmentr_interaction_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentrInteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _assignment_assignment_interaction_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_10__["MatiereInteractionService"]
        }, {
          type: _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_11__["ProfesseurInteractionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      AddAssignmentElementsComponentr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-add-assignmentr-elements',
        template: _raw_loader_add_assignmentr_elements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_assignmentr_elements_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddAssignmentElementsComponentr);
      /***/
    },

    /***/
    "hUSo":
    /*!*****************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AssignmentComponentr */

    /***/
    function hUSo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentComponentr", function () {
        return AssignmentComponentr;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assignmentr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assignmentr.component.html */
      "DIMZ");
      /* harmony import */


      var _assignmentr_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assignmentr.component.css */
      "8TOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssignmentComponentr = /*#__PURE__*/function () {
        function AssignmentComponentr() {
          _classCallCheck(this, AssignmentComponentr);
        }

        _createClass(AssignmentComponentr, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AssignmentComponentr;
      }();

      AssignmentComponentr.ctorParameters = function () {
        return [];
      };

      AssignmentComponentr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assignmentr',
        template: _raw_loader_assignmentr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assignmentr_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssignmentComponentr);
      /***/
    },

    /***/
    "inMP":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-userdetails/header-userdetails.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function inMP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"navbar-brand level-left\">\n\n\n\n\n    <div id=\"navbarBasicExample\" class=\"navbar-menu level-item logo-margin\">\n\n        <a class=\"navbar-item subtitle\" style=\"color: azure;\">\n            <img src=\"../../../../../assets/images/téléchargement.jpg\" width=\"50\" height=\"50\">\n        </a>\n\n\n\n    </div>\n\n    <style>\n        .logo-margin {\n            margin-left: 13%;\n        }\n    </style>";
      /***/
    },

    /***/
    "jy5X":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/mainwindow.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jy5X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n    <p>DragandDrop</p>\r\n\r\n    <div class=\"list-container\">\r\n\r\n        <div class=\"todo-container column-container\">\r\n            <div class=\"list\" cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"assignments\" [cdkDropListConnectedTo]=\"[doneList]\">\r\n                <h2>Assignment non rendu</h2>\r\n                <mat-card *ngFor=\"let assignment of assignments; \" cdkDrag>\r\n                    <mat-card-header>\r\n                        <div mat-card-avatar class=\"example-header-image\">\r\n                            <img [src]=\"assignment.avatar1\" class=\"mr-3\">\r\n                        </div>\r\n                        <mat-card-title>{{assignment.nomdevoir}}</mat-card-title>\r\n                        <mat-card-title>Module:{{assignment.nommatiere}}</mat-card-title>\r\n                        <mat-card-subtitle>Nom du professeur:{{assignment.nomprof}} </mat-card-subtitle>\r\n                        <mat-card-subtitle>Nom de l eleve:{{assignment.nomeleve}} </mat-card-subtitle>\r\n\r\n\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <p>\r\n\r\n                        </p>\r\n                    </mat-card-content>\r\n                    <mat-card-actions>\r\n                        <a class=\"button is-small is-primary\" style=\"font-weight: bold;margin-right: 1%;\" [routerLink]=\"['/editar',assignment.id]\">Noter </a>\r\n                        <button class=\"button is-small is-danger\" style=\"font-weight: bold;\" (click)=\"onDelete(assignment.id)\">Delete</button>\r\n                    </mat-card-actions>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"done-container column-container\">\r\n            <div class=\"list\" cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"assignmentrs\" [cdkDropListConnectedTo]=\"todoList\" (cdkDropListDropped)=\"onDrop($event)\">\r\n                <h2>Assignment rendu</h2>\r\n                <mat-card *ngFor=\" let assignment of assignmentrs \" cdkDrag>\r\n                    <mat-card-header>\r\n                        <div mat-card-avatar class=\"example-header-image\">\r\n                            <img [src]=\"assignment.avatar1\" class=\"mr-3\">\r\n                        </div>\r\n                        <mat-card-title>{{assignment.nomdevoir}}</mat-card-title>\r\n                        <mat-card-title>Module:{{assignment.nommatiere}}</mat-card-title>\r\n                        <mat-card-subtitle>Nom du professeur:{{assignment.nomprof}} </mat-card-subtitle>\r\n                        <mat-card-subtitle>Nom de l eleve:{{assignment.nomeleve}} </mat-card-subtitle>\r\n\r\n\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <p>\r\n                            Note:{{assignment.note}}<br> Remarque:{{assignment.remarque}}\r\n                        </p>\r\n                    </mat-card-content>\r\n                    <mat-card-actions>\r\n\r\n                        <button class=\"button is-small is-danger \" style=\"font-weight: bold; \" (click)=\"onDeleter(assignment.id) \">Delete</button>\r\n                    </mat-card-actions>\r\n\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "k45a":
    /*!********************************************************************!*\
      !*** ./src/app/header/header-taskbar/header-taskbar.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function k45a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItdGFza2Jhci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "kjkU":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"position: fixed; width: 100%; z-index: 1;\">\n    <div class=\"navbar-menu level \" style=\"background-color: hsl(0, 0%, 29%); \" aria-label=\"main navigation;\">\n        <app-header-userdetails></app-header-userdetails>\n        <app-header-taskbar></app-header-taskbar>\n    </div>\n</div>";
      /***/
    },

    /***/
    "kuTz":
    /*!******************************************!*\
      !*** ./src/app/auth/auth-interceptor.ts ***!
      \******************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function kuTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "qXBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(authService) {
          _classCallCheck(this, AuthInterceptor);

          this.authService = authService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = this.authService.getToken();
            var authRequest = req.clone({
              headers: req.headers.set("authorization", "Bearer " + authToken)
            });
            return next.handle(authRequest);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "lYBi":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment-inventory/assignment-inventory-items/assignment-inventory-items.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: AssignmentInventoryItemsComponent */

    /***/
    function lYBi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentInventoryItemsComponent", function () {
        return AssignmentInventoryItemsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assignment_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assignment-inventory-items.component.html */
      "Mkqj");
      /* harmony import */


      var _assignment_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assignment-inventory-items.component.css */
      "SfCW");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _assignment_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../assignment-interaction.service */
      "et3/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");

      var AssignmentInventoryItemsComponent = /*#__PURE__*/function () {
        function AssignmentInventoryItemsComponent(assignmentInteractionService, authService, snackBar) {
          _classCallCheck(this, AssignmentInventoryItemsComponent);

          this.assignmentInteractionService = assignmentInteractionService;
          this.authService = authService;
          this.snackBar = snackBar;
          this.assignments = [];
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(AssignmentInventoryItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.isLoading = true;
            this.assignmentInteractionService.getAssignment();
            this.assignmentSubs = this.assignmentInteractionService.getAssignmentUpdateListener().subscribe(function (posts) {
              _this33.isLoading = false;
              _this33.assignments = posts;
            });
            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this33.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(assignmentId) {
            this.assignmentInteractionService.deleteAssignment(assignmentId);
            this.snackBar.open("Assignment Deleted Successfully", "Close");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.assignmentSubs.unsubscribe();
            this.authStatusSub.unsubscribe();
          }
        }]);

        return AssignmentInventoryItemsComponent;
      }();

      AssignmentInventoryItemsComponent.ctorParameters = function () {
        return [{
          type: _assignment_interaction_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      AssignmentInventoryItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-assignment-inventory-items',
        template: _raw_loader_assignment_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assignment_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssignmentInventoryItemsComponent);
      /***/
    },

    /***/
    "mTwG":
    /*!****************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function mTwG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "nj5C":
    /*!*******************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr-filter.pipe.ts ***!
      \*******************************************************************/

    /*! exports provided: AssignmentrFilterPipe */

    /***/
    function nj5C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentrFilterPipe", function () {
        return AssignmentrFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssignmentrFilterPipe = /*#__PURE__*/function () {
        function AssignmentrFilterPipe() {
          _classCallCheck(this, AssignmentrFilterPipe);
        }

        _createClass(AssignmentrFilterPipe, [{
          key: "transform",
          value: function transform(assignmentrs, searchTerm) {
            if (!assignmentrs || !searchTerm) {
              return assignmentrs;
            }

            return assignmentrs.filter(function (assignment) {
              return assignment.nomdevoir.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
          }
        }]);

        return AssignmentrFilterPipe;
      }();

      AssignmentrFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'assignmentrFilter',
        pure: false
      })], AssignmentrFilterPipe);
      /***/
    },

    /***/
    "oct/":
    /*!********************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr-elements/mime-type.validator.ts ***!
      \********************************************************************************************************/

    /*! exports provided: mimeType */

    /***/
    function oct(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mimeType", function () {
        return mimeType;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mimeType = function mimeType(control) {
        if (typeof control.value === 'string') {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }

        var file = control.value;
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }

            switch (header) {
              case "89504e47":
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true;
                break;

              default:
                isValid = false;
                break;
            }

            if (isValid) {
              observer.next(null);
            } else {
              observer.next({
                invalidMimeType: true
              });
            }

            observer.complete();
          });
          fileReader.readAsArrayBuffer(file);
        });
        return frObs;
      };
      /***/

    },

    /***/
    "pKX+":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/matiere/matiere-inventory/matiere-inventory.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height: 900px;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li>\n                        <a routerLink=\"/matiere/\">\n\n                            <span>Matiere Form</span>\n                        </a>\n                    </li>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/matiere/create\">\n\n                            <span>Matiere List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns\" style=\"margin-top: -6%;\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <app-search-matiere></app-search-matiere>\n        </div>\n    </section>\n\n    <section class=\"panel\" style=\"margin: 2%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Matieres\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"height: 590px; width: 100%;\">\n\n                <app-matiere-inventory-items></app-matiere-inventory-items>\n            </div>\n        </div>\n        <div class=\"panel-block\">\n\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "pt/F":
    /*!***********************************************!*\
      !*** ./src/app/mainwindow/assignment/data.ts ***!
      \***********************************************/

    /*! exports provided: bd */

    /***/
    function ptF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bd", function () {
        return bd;
      });

      var bd = [{
        "id": "60431b49f069d639ac9668c1",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Feldheim",
        "datederendu": "6/19/2021",
        "nommatiere": "Bytecard",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULFAFR8EA673589",
        "nomdevoir": "Overhold",
        "nomeleve": "Fenwick",
        "datederendu": "7/10/2021",
        "nommatiere": "Duobam",
        "nomprof": "Bigtax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D7JV1EP2AG890974",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Sully",
        "datederendu": "5/26/2021",
        "nommatiere": "Fintone",
        "nomprof": "Matsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTHDU1EF5B5435190",
        "nomdevoir": "Zathin",
        "nomeleve": "Mackerel",
        "datederendu": "4/21/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CDXFG5DH775348",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Yonge",
        "datederendu": "5/18/2021",
        "nommatiere": "Bamity",
        "nomprof": "Hatity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAXH5C52CC205024",
        "nomdevoir": "Treeflex",
        "nomeleve": "Koppelmann",
        "datederendu": "6/15/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3B1C59F5397057",
        "nomdevoir": "Trippledex",
        "nomeleve": "Jaycocks",
        "datederendu": "3/13/2021",
        "nommatiere": "Voltsillam",
        "nomprof": "Bamity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2G4GP5EX6F9434527",
        "nomdevoir": "Zoolab",
        "nomeleve": "Egle of Germany",
        "datederendu": "6/11/2021",
        "nommatiere": "Asoka",
        "nomprof": "Opela",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUFGBFCXEN782754",
        "nomdevoir": "Regrant",
        "nomeleve": "Fowden",
        "datederendu": "6/16/2021",
        "nommatiere": "Domainer",
        "nomprof": "Tin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2G4GP5EX2E9347738",
        "nomdevoir": "Konklux",
        "nomeleve": "Zapater",
        "datederendu": "3/26/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUEH98E26A542106",
        "nomdevoir": "Latlux",
        "nomeleve": "Woolen",
        "datederendu": "7/26/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N4AL2AP3CN923914",
        "nomdevoir": "Home Ing",
        "nomeleve": "Ricarde",
        "datederendu": "5/14/2021",
        "nommatiere": "Zamit",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AB5R31F0549291",
        "nomdevoir": "Voyatouch",
        "nomeleve": "Sellner",
        "datederendu": "5/23/2021",
        "nommatiere": "Y-find",
        "nomprof": "Pannier",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7RE2GK1BS667507",
        "nomdevoir": "Tin",
        "nomeleve": "Scotti",
        "datederendu": "5/30/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUVC58E85A978920",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Kinnear",
        "datederendu": "3/29/2021",
        "nommatiere": "It",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULL44E96N492537",
        "nomdevoir": "Bytecard",
        "nomeleve": "Bickerdike",
        "datederendu": "6/7/2021",
        "nommatiere": "Tempsoft",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTHBP5C21D5853660",
        "nomdevoir": "Alpha",
        "nomeleve": "Kinningley",
        "datederendu": "5/10/2021",
        "nommatiere": "Cookley",
        "nomprof": "Fixflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW517AT5FM642088",
        "nomdevoir": "Opela",
        "nomeleve": "Wybrow",
        "datederendu": "8/20/2021",
        "nommatiere": "Regrant",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3N1BC1AP4AL730874",
        "nomdevoir": "Rank",
        "nomeleve": "Ely",
        "datederendu": "8/19/2021",
        "nommatiere": "Tin",
        "nomprof": "Stim",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2B3CJ5DTXBH164545",
        "nomdevoir": "Fix San",
        "nomeleve": "Karpe",
        "datederendu": "6/8/2021",
        "nommatiere": "Subin",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBASN4C56AC037687",
        "nomdevoir": "Otcom",
        "nomeleve": "Jeannel",
        "datederendu": "7/29/2021",
        "nommatiere": "Mat Lam Tam",
        "nomprof": "Tampflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CCABG3DH637121",
        "nomdevoir": "Pannier",
        "nomeleve": "Nottingham",
        "datederendu": "7/6/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Cookley",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3FAHP0CG8CR943352",
        "nomdevoir": "Duobam",
        "nomeleve": "Layton",
        "datederendu": "6/23/2021",
        "nommatiere": "Asoka",
        "nomprof": "Aerified",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6KY54902U650596",
        "nomdevoir": "Konklab",
        "nomeleve": "Tothe",
        "datederendu": "4/10/2021",
        "nommatiere": "Zontrax",
        "nomprof": "Zamit",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVWGU7AN5CE718771",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Ellicombe",
        "datederendu": "6/18/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Transcof",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C63DPJL3CG530120",
        "nomdevoir": "Lotstring",
        "nomeleve": "Clowsley",
        "datederendu": "7/4/2021",
        "nommatiere": "Redhold",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1CV6EK1DM312745",
        "nomdevoir": "Biodex",
        "nomeleve": "Redsell",
        "datederendu": "8/4/2021",
        "nommatiere": "Temp",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3GYEK63N63G153700",
        "nomdevoir": "Bitchip",
        "nomeleve": "Earl",
        "datederendu": "6/6/2021",
        "nommatiere": "Asoka",
        "nomprof": "Toughjoyfax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYUCFEJ2AR136067",
        "nomdevoir": "Bitchip",
        "nomeleve": "Kitchingman",
        "datederendu": "5/15/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Fixflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDH94F37N186236",
        "nomdevoir": "Sonsing",
        "nomeleve": "Nibley",
        "datederendu": "5/4/2021",
        "nommatiere": "Opela",
        "nomprof": "Zaam-Dox",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DF8E52E0303021",
        "nomdevoir": "Matsoft",
        "nomeleve": "Souley",
        "datederendu": "8/8/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GKUCGEJ4AR124633",
        "nomdevoir": "Voltsillam",
        "nomeleve": "Bowes",
        "datederendu": "5/17/2021",
        "nommatiere": "Vagram",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA5M2C58ED630066",
        "nomdevoir": "Lotstring",
        "nomeleve": "Mitrovic",
        "datederendu": "4/21/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Duobam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUBFAFL7DA506940",
        "nomdevoir": "Fixflex",
        "nomeleve": "McFarlan",
        "datederendu": "7/20/2021",
        "nommatiere": "Redhold",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNDJT2A19A7330971",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Gillford",
        "datederendu": "7/13/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVWAP7AN5DE197906",
        "nomdevoir": "Veribet",
        "nomeleve": "Warricker",
        "datederendu": "6/5/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Matsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1YD54B15N616729",
        "nomdevoir": "Bitchip",
        "nomeleve": "McCauley",
        "datederendu": "8/14/2021",
        "nommatiere": "Subin",
        "nomprof": "Vagram",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7CW5GK1AS220758",
        "nomdevoir": "Transcof",
        "nomeleve": "Trevor",
        "datederendu": "6/15/2021",
        "nommatiere": "Regrant",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3G5DB03E54S737199",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Gribbins",
        "datederendu": "4/3/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JHMFB4F21CS600120",
        "nomdevoir": "Temp",
        "nomeleve": "Lotze",
        "datederendu": "8/17/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Latlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHGH4JH5EU263504",
        "nomdevoir": "Fixflex",
        "nomeleve": "Cottingham",
        "datederendu": "5/28/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNADM5A39D6480597",
        "nomdevoir": "Asoka",
        "nomeleve": "Clipston",
        "datederendu": "4/29/2021",
        "nommatiere": "Aerified",
        "nomprof": "Voltsillam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C3CDFCB9ED413153",
        "nomdevoir": "Zoolab",
        "nomeleve": "Spain",
        "datederendu": "4/21/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Y-Solowarm",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FMCU5K33AK909287",
        "nomdevoir": "Stringtough",
        "nomeleve": "Segot",
        "datederendu": "5/5/2021",
        "nommatiere": "Veribet",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AF0LY1FN019802",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Sulman",
        "datederendu": "7/1/2021",
        "nommatiere": "Lotlux",
        "nomprof": "Hatity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW507AT8FM489080",
        "nomdevoir": "Tampflex",
        "nomeleve": "Hoffmann",
        "datederendu": "6/8/2021",
        "nommatiere": "Stringtough",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAWC7C53AE356624",
        "nomdevoir": "Zontrax",
        "nomeleve": "Collin",
        "datederendu": "3/18/2021",
        "nommatiere": "Namfix",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4PS5SK0C4328211",
        "nomdevoir": "Fixflex",
        "nomeleve": "Simoneau",
        "datederendu": "4/6/2021",
        "nommatiere": "Stim",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHFH4JG2EA118084",
        "nomdevoir": "Cardify",
        "nomeleve": "Northrop",
        "datederendu": "6/24/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Tin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBGT3ZA1DC679111",
        "nomdevoir": "Flexidy",
        "nomeleve": "Ormes",
        "datederendu": "6/22/2021",
        "nommatiere": "Fix San",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBGR3ZA2DC473519",
        "nomdevoir": "Asoka",
        "nomeleve": "Coat",
        "datederendu": "6/25/2021",
        "nommatiere": "Cookley",
        "nomprof": "Hatity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AS5MT1AW261978",
        "nomdevoir": "Bamity",
        "nomeleve": "Caudell",
        "datederendu": "5/2/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFK63808R461354",
        "nomdevoir": "Stim",
        "nomeleve": "Espinas",
        "datederendu": "4/10/2021",
        "nommatiere": "Sub-Ex",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3GYFNEE38ES194041",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Valentino",
        "datederendu": "4/11/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Prodder",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WP0CA2A81DK299275",
        "nomdevoir": "Stronghold",
        "nomeleve": "Aubery",
        "datederendu": "6/25/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Daltfresh",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FMEU7FE2AU008187",
        "nomdevoir": "Quo Lux",
        "nomeleve": "Keohane",
        "datederendu": "6/27/2021",
        "nommatiere": "Voltsillam",
        "nomprof": "Asoka",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUGL98E16A335858",
        "nomdevoir": "Bitwolf",
        "nomeleve": "Gierck",
        "datederendu": "4/7/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Asoka",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA1J7C50EV461417",
        "nomdevoir": "Konklab",
        "nomeleve": "Windress",
        "datederendu": "6/3/2021",
        "nommatiere": "Zathin",
        "nomprof": "Regrant",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHEC4A45DA875656",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Malenoir",
        "datederendu": "5/14/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Regrant",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7RB1CT9BS685562",
        "nomdevoir": "Treeflex",
        "nomeleve": "Gouthier",
        "datederendu": "6/1/2021",
        "nommatiere": "Fix San",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WP0AA2A87CS652513",
        "nomdevoir": "Cardify",
        "nomeleve": "Costley",
        "datederendu": "6/9/2021",
        "nommatiere": "Tresom",
        "nomprof": "Cardify",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SAJWA1CZ7E8549888",
        "nomdevoir": "Andalax",
        "nomeleve": "Donoghue",
        "datederendu": "4/4/2021",
        "nommatiere": "Redhold",
        "nomprof": "Fixflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNDJN2A24F7978681",
        "nomdevoir": "Holdlamis",
        "nomeleve": "Lavarack",
        "datederendu": "7/25/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUC73588V544718",
        "nomdevoir": "Lotstring",
        "nomeleve": "Vasilyev",
        "datederendu": "7/11/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CA2CVXAH341212",
        "nomdevoir": "Sonair",
        "nomeleve": "Irnis",
        "datederendu": "5/2/2021",
        "nommatiere": "Regrant",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAYE8C57DD279534",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Ledgard",
        "datederendu": "7/7/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Vagram",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N4AB7AP5DN865662",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Goghin",
        "datederendu": "7/27/2021",
        "nommatiere": "Hatity",
        "nomprof": "Lotlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3FAHP0CG0CR633082",
        "nomdevoir": "Cardify",
        "nomeleve": "Petrowsky",
        "datederendu": "8/17/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "19UYA42413A678148",
        "nomdevoir": "Stim",
        "nomeleve": "Lyes",
        "datederendu": "3/14/2021",
        "nommatiere": "Regrant",
        "nomprof": "Prodder",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JM1BL1L3XD1369993",
        "nomdevoir": "Konklux",
        "nomeleve": "Stapforth",
        "datederendu": "7/24/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUN7C5XDV532123",
        "nomdevoir": "Temp",
        "nomeleve": "Waldocke",
        "datederendu": "8/15/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1AN0NW3EN688004",
        "nomdevoir": "Job",
        "nomeleve": "Ellson",
        "datederendu": "4/23/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Y-Solowarm",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2D4JN1AG4BR662859",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Baroch",
        "datederendu": "8/7/2021",
        "nommatiere": "Latlux",
        "nomprof": "Aerified",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AA0EJ4FN453226",
        "nomdevoir": "Duobam",
        "nomeleve": "Piccop",
        "datederendu": "4/29/2021",
        "nommatiere": "Biodex",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N4AA5AP4BC744234",
        "nomdevoir": "Cardguard",
        "nomeleve": "Boggon",
        "datederendu": "7/27/2021",
        "nommatiere": "Cardify",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D73Y4HL0BG511272",
        "nomdevoir": "Home Ing",
        "nomeleve": "Madeley",
        "datederendu": "8/1/2021",
        "nommatiere": "It",
        "nomprof": "Andalax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KL4CJDSB7DB051144",
        "nomdevoir": "Flexidy",
        "nomeleve": "Coffey",
        "datederendu": "6/9/2021",
        "nommatiere": "Namfix",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDGBFL8DA265496",
        "nomdevoir": "Matsoft",
        "nomeleve": "Larroway",
        "datederendu": "3/12/2021",
        "nommatiere": "Stim",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4CL959X5C110591",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Birbeck",
        "datederendu": "7/21/2021",
        "nommatiere": "Temp",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDK78T18A742283",
        "nomdevoir": "Aerified",
        "nomeleve": "Blasgen",
        "datederendu": "3/28/2021",
        "nommatiere": "Zamit",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DV8EPXE0800337",
        "nomdevoir": "Alpha",
        "nomeleve": "Dobbinson",
        "datederendu": "3/17/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Regrant",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTFW1E80AF282651",
        "nomdevoir": "Tampflex",
        "nomeleve": "Klimpt",
        "datederendu": "6/19/2021",
        "nommatiere": "Opela",
        "nomprof": "Hatity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7CW3GK1AS260066",
        "nomdevoir": "Treeflex",
        "nomeleve": "Aurelius",
        "datederendu": "5/30/2021",
        "nommatiere": "Alpha",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3C3C55EP741611",
        "nomdevoir": "Subin",
        "nomeleve": "Egdal",
        "datederendu": "3/22/2021",
        "nommatiere": "Y-Solowarm",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KL4CJDSB0DB759932",
        "nomdevoir": "Cardguard",
        "nomeleve": "Cobbled",
        "datederendu": "6/20/2021",
        "nommatiere": "Hatity",
        "nomprof": "Cardify",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DF8EG4A0171570",
        "nomdevoir": "Bamity",
        "nomeleve": "Voas",
        "datederendu": "8/17/2021",
        "nommatiere": "Rank",
        "nomprof": "Bigtax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUC7C58AV561685",
        "nomdevoir": "Flexidy",
        "nomeleve": "Iffe",
        "datederendu": "3/16/2021",
        "nommatiere": "Bamity",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AZ1FY6EW610202",
        "nomdevoir": "Rank",
        "nomeleve": "Itzchaky",
        "datederendu": "8/12/2021",
        "nommatiere": "Zaam-Dox",
        "nomprof": "Flexidy",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAWV5C52AP774059",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Abramovitch",
        "datederendu": "7/17/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Cookley",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDFAFL0AN203429",
        "nomdevoir": "It",
        "nomeleve": "Bonwick",
        "datederendu": "4/7/2021",
        "nommatiere": "Fixflex",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAU2MAFC4FN275187",
        "nomdevoir": "Greenlam",
        "nomeleve": "McWhannel",
        "datederendu": "5/15/2021",
        "nommatiere": "Alpha",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DG577190978942",
        "nomdevoir": "Sonsing",
        "nomeleve": "Wimbridge",
        "datederendu": "8/5/2021",
        "nommatiere": "Fixflex",
        "nomprof": "Rank",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3X5C57ED803804",
        "nomdevoir": "Vagram",
        "nomeleve": "McCheyne",
        "datederendu": "6/9/2021",
        "nommatiere": "Regrant",
        "nomprof": "Zamit",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTJYWRBZ7F2691393",
        "nomdevoir": "Subin",
        "nomeleve": "Vaudin",
        "datederendu": "3/14/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Asoka",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUML44E06N204523",
        "nomdevoir": "Namfix",
        "nomeleve": "Houchin",
        "datederendu": "5/6/2021",
        "nommatiere": "Keylex",
        "nomprof": "Opela",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AF5S30D0919853",
        "nomdevoir": "Rank",
        "nomeleve": "Harnett",
        "datederendu": "7/8/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAWB73568P993637",
        "nomdevoir": "Keylex",
        "nomeleve": "Peltzer",
        "datederendu": "8/12/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Domainer",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "YV140MAB1F1441111",
        "nomdevoir": "Zoolab",
        "nomeleve": "De Carlo",
        "datederendu": "3/16/2021",
        "nommatiere": "Sub-Ex",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VWJP7ATXCM355662",
        "nomdevoir": "Zaam-Dox",
        "nomeleve": "Kroch",
        "datederendu": "7/8/2021",
        "nommatiere": "Latlux",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTHHE5BC6F5938099",
        "nomdevoir": "Cardify",
        "nomeleve": "Muck",
        "datederendu": "6/23/2021",
        "nommatiere": "Prodder",
        "nomprof": "Prodder",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1YVHZ8BA0A5403715",
        "nomdevoir": "Lotstring",
        "nomeleve": "Norfolk",
        "datederendu": "5/1/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1DGAFE1FD927512",
        "nomdevoir": "Alphazap",
        "nomeleve": "Ducker",
        "datederendu": "4/8/2021",
        "nommatiere": "Span",
        "nomprof": "Zaam-Dox",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FMJK1G56DE543988",
        "nomdevoir": "Latlux",
        "nomeleve": "Ruddick",
        "datederendu": "7/15/2021",
        "nommatiere": "Fintone",
        "nomprof": "Lotlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAU4FAFR0BA850880",
        "nomdevoir": "Cardguard",
        "nomeleve": "Entwhistle",
        "datederendu": "8/13/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Zaam-Dox",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6KD57YX6U895605",
        "nomdevoir": "Bitwolf",
        "nomeleve": "Pauel",
        "datederendu": "8/19/2021",
        "nommatiere": "Job",
        "nomprof": "Zamit",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AF0KY1EN240350",
        "nomdevoir": "Quo Lux",
        "nomeleve": "Blench",
        "datederendu": "4/8/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AA0EC9FN251449",
        "nomdevoir": "Fintone",
        "nomeleve": "L'Episcopio",
        "datederendu": "7/29/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AJ5SX6E0823843",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Harler",
        "datederendu": "8/17/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBFC7ZA1EC270398",
        "nomdevoir": "Kanlam",
        "nomeleve": "McDill",
        "datederendu": "6/29/2021",
        "nommatiere": "Aerified",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DV5EP5C0451079",
        "nomdevoir": "Redhold",
        "nomeleve": "Hadigate",
        "datederendu": "8/6/2021",
        "nommatiere": "Duobam",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3GTU2YEJ2DG843811",
        "nomdevoir": "Overhold",
        "nomeleve": "Cathery",
        "datederendu": "8/8/2021",
        "nommatiere": "Sonair",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GD21ZCG1CZ820439",
        "nomdevoir": "Zontrax",
        "nomeleve": "Lundberg",
        "datederendu": "4/25/2021",
        "nommatiere": "Span",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAU3VAFR8AA148528",
        "nomdevoir": "Konklux",
        "nomeleve": "Bilney",
        "datederendu": "3/30/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6KD57YX9U133315",
        "nomdevoir": "Zamit",
        "nomeleve": "Kennon",
        "datederendu": "6/24/2021",
        "nommatiere": "Stringtough",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUC9C55DV557027",
        "nomdevoir": "Home Ing",
        "nomeleve": "Stopford",
        "datederendu": "3/8/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JM1DE1KY1C0876947",
        "nomdevoir": "Subin",
        "nomeleve": "Murrison",
        "datederendu": "7/20/2021",
        "nommatiere": "Y-Solowarm",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUGGAFR5DA283157",
        "nomdevoir": "Fintone",
        "nomeleve": "Brimelow",
        "datederendu": "8/24/2021",
        "nommatiere": "Treeflex",
        "nomprof": "Pannier",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYS4MKJ7FR385579",
        "nomdevoir": "Stringtough",
        "nomeleve": "Jecock",
        "datederendu": "5/26/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AD0CUXEN906042",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Pote",
        "datederendu": "8/5/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1WMAFE9BD748081",
        "nomdevoir": "Stronghold",
        "nomeleve": "Giovannoni",
        "datederendu": "8/9/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5UXFG2C56E0375213",
        "nomdevoir": "Stronghold",
        "nomeleve": "Cupper",
        "datederendu": "6/15/2021",
        "nommatiere": "Transcof",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKH98E86A769321",
        "nomdevoir": "Cookley",
        "nomeleve": "Pumfrey",
        "datederendu": "4/5/2021",
        "nommatiere": "Transcof",
        "nomprof": "Y-find",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1BA0NC0FN363267",
        "nomdevoir": "Transcof",
        "nomeleve": "Beldham",
        "datederendu": "5/23/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Y-find",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AL5SX7D0783927",
        "nomdevoir": "Y-find",
        "nomeleve": "Brumwell",
        "datederendu": "8/7/2021",
        "nommatiere": "Tampflex",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C3CFFCR8ET781132",
        "nomdevoir": "Latlux",
        "nomeleve": "Fieldgate",
        "datederendu": "4/5/2021",
        "nommatiere": "Bamity",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA5B1C51ED461606",
        "nomdevoir": "Lotstring",
        "nomeleve": "Meneo",
        "datederendu": "6/16/2021",
        "nommatiere": "Cardify",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5TFAW5F13EX419474",
        "nomdevoir": "Tin",
        "nomeleve": "Erickson",
        "datederendu": "5/14/2021",
        "nommatiere": "Sonair",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNADM4A3XC6552044",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Scothorne",
        "datederendu": "7/21/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WP0CA2A83BS109974",
        "nomdevoir": "Redhold",
        "nomeleve": "Durston",
        "datederendu": "6/3/2021",
        "nommatiere": "Stim",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T3BA3BB9DU172275",
        "nomdevoir": "Duobam",
        "nomeleve": "Antognazzi",
        "datederendu": "3/12/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Treeflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D7TP2CT0AG641808",
        "nomdevoir": "Gembucket",
        "nomeleve": "Mettericke",
        "datederendu": "4/27/2021",
        "nommatiere": "Domainer",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WUARL48H96K577058",
        "nomdevoir": "Cardify",
        "nomeleve": "Manueau",
        "datederendu": "4/6/2021",
        "nommatiere": "Flexidy",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AZ2NC5B9272457",
        "nomdevoir": "Flowdesk",
        "nomeleve": "MacLise",
        "datederendu": "4/24/2021",
        "nommatiere": "Alpha",
        "nomprof": "Redhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AB5RX4F0674952",
        "nomdevoir": "Matsoft",
        "nomeleve": "Hortop",
        "datederendu": "6/7/2021",
        "nommatiere": "Zontrax",
        "nomprof": "Zaam-Dox",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUSF78E57A423089",
        "nomdevoir": "Transcof",
        "nomeleve": "Eannetta",
        "datederendu": "4/29/2021",
        "nommatiere": "Alpha",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T1BF1FK3EU748520",
        "nomdevoir": "Duobam",
        "nomeleve": "Masdon",
        "datederendu": "5/8/2021",
        "nommatiere": "Aerified",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D7LT2ET1AG066109",
        "nomdevoir": "Tampflex",
        "nomeleve": "Sogg",
        "datederendu": "5/25/2021",
        "nommatiere": "Span",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1CV6FE7FM965656",
        "nomdevoir": "Otcom",
        "nomeleve": "Lighten",
        "datederendu": "3/12/2021",
        "nommatiere": "Veribet",
        "nomprof": "Zamit",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4HJ5EMXAU362870",
        "nomdevoir": "Tresom",
        "nomeleve": "Vear",
        "datederendu": "7/14/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Andalax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA5A7C58FG895561",
        "nomdevoir": "Asoka",
        "nomeleve": "Corke",
        "datederendu": "6/24/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUT9C52AA881619",
        "nomdevoir": "Y-find",
        "nomeleve": "Tolerton",
        "datederendu": "4/29/2021",
        "nommatiere": "Stim",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULC58E32A471667",
        "nomdevoir": "Zathin",
        "nomeleve": "Andryushin",
        "datederendu": "4/21/2021",
        "nommatiere": "Hatity",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1CGAFE9FD038937",
        "nomdevoir": "Flexidy",
        "nomeleve": "Miche",
        "datederendu": "6/14/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Flowdesk",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVGDF9BPXED485628",
        "nomdevoir": "Flowdesk",
        "nomeleve": "DeSousa",
        "datederendu": "4/6/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2T1KE4EE7BC348439",
        "nomdevoir": "Voyatouch",
        "nomeleve": "Zorzin",
        "datederendu": "7/5/2021",
        "nommatiere": "Flexidy",
        "nomprof": "Alpha",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2FMDK4GC2AB062835",
        "nomdevoir": "Toughjoyfax",
        "nomeleve": "Battabee",
        "datederendu": "4/16/2021",
        "nommatiere": "Prodder",
        "nomprof": "Cookley",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D7TT2CT1AG475584",
        "nomdevoir": "Trippledex",
        "nomeleve": "Crighten",
        "datederendu": "3/26/2021",
        "nommatiere": "Asoka",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFK562X9R867760",
        "nomdevoir": "Toughjoyfax",
        "nomeleve": "Knipe",
        "datederendu": "5/12/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVGEG9BP6CD505968",
        "nomdevoir": "Domainer",
        "nomeleve": "Shemwell",
        "datederendu": "3/13/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Vagram",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1YVHZ8BH2A5496069",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Demschke",
        "datederendu": "6/6/2021",
        "nommatiere": "Flexidy",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1J4PN2GK4BW127945",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Hampshire",
        "datederendu": "6/7/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2T1BU4EE5CC976410",
        "nomdevoir": "Treeflex",
        "nomeleve": "Finneran",
        "datederendu": "7/17/2021",
        "nommatiere": "Biodex",
        "nomprof": "Biodex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVWAW7AH7BV754373",
        "nomdevoir": "Treeflex",
        "nomeleve": "Franchyonok",
        "datederendu": "5/11/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3N1AB6AP1CL620525",
        "nomdevoir": "Latlux",
        "nomeleve": "Yakunkin",
        "datederendu": "3/11/2021",
        "nommatiere": "Fintone",
        "nomprof": "Stringtough",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHFH4JG5FA876423",
        "nomdevoir": "Opela",
        "nomeleve": "Daville",
        "datederendu": "7/19/2021",
        "nommatiere": "Cardguard",
        "nomprof": "Sonair",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SALCR2BG9FH925341",
        "nomdevoir": "Keylex",
        "nomeleve": "Sorley",
        "datederendu": "5/3/2021",
        "nommatiere": "Bamity",
        "nomprof": "Zamit",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DJ1E3XC0922323",
        "nomdevoir": "Job",
        "nomeleve": "MacGragh",
        "datederendu": "4/23/2021",
        "nommatiere": "Y-Solowarm",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUFMAFC8EN522565",
        "nomdevoir": "Regrant",
        "nomeleve": "O'Brogane",
        "datederendu": "8/1/2021",
        "nommatiere": "Y-Solowarm",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUVC68E92A448215",
        "nomdevoir": "Kanlam",
        "nomeleve": "Croyser",
        "datederendu": "4/13/2021",
        "nommatiere": "Tresom",
        "nomprof": "Toughjoyfax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4GJ5E30DF476596",
        "nomdevoir": "Toughjoyfax",
        "nomeleve": "Easthope",
        "datederendu": "5/3/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Viva",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULC68E02A253224",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Mulgrew",
        "datederendu": "7/3/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Overhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW467AT1DM516028",
        "nomdevoir": "Quo Lux",
        "nomeleve": "Dagworthy",
        "datederendu": "4/9/2021",
        "nommatiere": "Namfix",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N4AA5AP5AC677139",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Kingerby",
        "datederendu": "7/21/2021",
        "nommatiere": "Job",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1CGAFP8EA122023",
        "nomdevoir": "Zoolab",
        "nomeleve": "Frankum",
        "datederendu": "5/14/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C6RD6PT8CS052586",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Keets",
        "datederendu": "4/26/2021",
        "nommatiere": "It",
        "nomprof": "Sonair",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DS5E35C0060570",
        "nomdevoir": "Stronghold",
        "nomeleve": "Wycliff",
        "datederendu": "4/15/2021",
        "nommatiere": "Span",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1AN0NW5FN184829",
        "nomdevoir": "Konklab",
        "nomeleve": "Sweetenham",
        "datederendu": "5/23/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Lotlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AZ1MU4AW395574",
        "nomdevoir": "Trippledex",
        "nomeleve": "Gribble",
        "datederendu": "4/13/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Y-Solowarm",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFAD02A98G152619",
        "nomdevoir": "Redhold",
        "nomeleve": "O'Brian",
        "datederendu": "8/13/2021",
        "nommatiere": "Fixflex",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUXL68E45A324480",
        "nomdevoir": "Overhold",
        "nomeleve": "Gerling",
        "datederendu": "6/27/2021",
        "nommatiere": "Vagram",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T1BD1EB8FU514236",
        "nomdevoir": "Holdlamis",
        "nomeleve": "McGlue",
        "datederendu": "4/7/2021",
        "nommatiere": "Zathin",
        "nomprof": "Fixflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAU3GAFRXEA820296",
        "nomdevoir": "Cardify",
        "nomeleve": "Woodes",
        "datederendu": "4/26/2021",
        "nommatiere": "It",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUEF48HX7K773043",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Chipping",
        "datederendu": "3/18/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Transcof",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5FNYF3H21EB974541",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Igounet",
        "datederendu": "6/27/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Flowdesk",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUCFAFR2CA388402",
        "nomdevoir": "Sonair",
        "nomeleve": "Meace",
        "datederendu": "8/12/2021",
        "nommatiere": "Bitchip",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AD0CW6EN715493",
        "nomdevoir": "Bitwolf",
        "nomeleve": "Raun",
        "datederendu": "4/12/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C4RDHDG0FC821849",
        "nomdevoir": "Hatity",
        "nomeleve": "Petrussi",
        "datederendu": "6/17/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Namfix",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTJBM7FX9F5866346",
        "nomdevoir": "Namfix",
        "nomeleve": "Ellor",
        "datederendu": "4/7/2021",
        "nommatiere": "Latlux",
        "nomprof": "Duobam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AS5S32E0212072",
        "nomdevoir": "Home Ing",
        "nomeleve": "Marcos",
        "datederendu": "6/2/2021",
        "nommatiere": "Bytecard",
        "nomprof": "Biodex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFFDAAEXCG352496",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Mallows",
        "datederendu": "5/23/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3N1BC1CP4CK049569",
        "nomdevoir": "Voltsillam",
        "nomeleve": "Yegorov",
        "datederendu": "3/12/2021",
        "nommatiere": "Konklux",
        "nomprof": "Cardify",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4KC1F37EC919912",
        "nomdevoir": "Fix San",
        "nomeleve": "Le Grove",
        "datederendu": "6/17/2021",
        "nommatiere": "Sonair",
        "nomprof": "Duobam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUUL78E47A001204",
        "nomdevoir": "Domainer",
        "nomeleve": "Beament",
        "datederendu": "8/19/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Zaam-Dox",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAYP9C53ED759278",
        "nomdevoir": "Andalax",
        "nomeleve": "Franciskiewicz",
        "datederendu": "4/20/2021",
        "nommatiere": "Domainer",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4GC5G30FF800088",
        "nomdevoir": "Cardguard",
        "nomeleve": "Ruthven",
        "datederendu": "5/5/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Cardify",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1AA0NE2FN655399",
        "nomdevoir": "Zaam-Dox",
        "nomeleve": "Reyes",
        "datederendu": "5/9/2021",
        "nommatiere": "Keylex",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2FMDK3GC6BB080511",
        "nomdevoir": "Gembucket",
        "nomeleve": "Wogden",
        "datederendu": "3/12/2021",
        "nommatiere": "It",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D7JV1EP9AG678427",
        "nomdevoir": "Cardguard",
        "nomeleve": "Thorowgood",
        "datederendu": "6/5/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SALAG2D48AA930080",
        "nomdevoir": "Gembucket",
        "nomeleve": "Raveau",
        "datederendu": "8/14/2021",
        "nommatiere": "Andalax",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUYGAFC0CN181692",
        "nomdevoir": "Keylex",
        "nomeleve": "Crowe",
        "datederendu": "6/14/2021",
        "nommatiere": "Otcom",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CDZFJ2FH022032",
        "nomdevoir": "Latlux",
        "nomeleve": "Neles",
        "datederendu": "6/19/2021",
        "nommatiere": "Span",
        "nomprof": "Andalax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AB5S39F0490419",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Dooney",
        "datederendu": "8/22/2021",
        "nommatiere": "Prodder",
        "nomprof": "Biodex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1AY1AP3BM627224",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Casaccia",
        "datederendu": "6/21/2021",
        "nommatiere": "Flexidy",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GKS1EEF6CR508607",
        "nomdevoir": "Overhold",
        "nomeleve": "Barends",
        "datederendu": "8/17/2021",
        "nommatiere": "Vagram",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WDDGF4HB1CA300600",
        "nomdevoir": "Wrapsafe",
        "nomeleve": "Blevin",
        "datederendu": "7/30/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Zathin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAVA33557P136876",
        "nomdevoir": "Home Ing",
        "nomeleve": "Burgisi",
        "datederendu": "7/28/2021",
        "nommatiere": "Bytecard",
        "nomprof": "Y-find",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAKF3C55CJ062067",
        "nomdevoir": "Job",
        "nomeleve": "Kidstone",
        "datederendu": "5/8/2021",
        "nommatiere": "Ventosanzap",
        "nomprof": "Pannier",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVGAV3AX5EW983521",
        "nomdevoir": "Tampflex",
        "nomeleve": "Toretta",
        "datederendu": "6/9/2021",
        "nommatiere": "Holdlamis",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTEBU4BF4AK646892",
        "nomdevoir": "Biodex",
        "nomeleve": "Boncoeur",
        "datederendu": "5/4/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C4RDJAG2CC369197",
        "nomdevoir": "Trippledex",
        "nomeleve": "Domelaw",
        "datederendu": "7/31/2021",
        "nommatiere": "Cookley",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "NM0GE9F79F1115432",
        "nomdevoir": "Konklab",
        "nomeleve": "Brideau",
        "datederendu": "5/14/2021",
        "nommatiere": "Span",
        "nomprof": "Fixflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTDZN3EUXD3909681",
        "nomdevoir": "Fixflex",
        "nomeleve": "Martinelli",
        "datederendu": "6/12/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3V7C50EJ559089",
        "nomdevoir": "Flowdesk",
        "nomeleve": "Lavrinov",
        "datederendu": "7/2/2021",
        "nommatiere": "Pannier",
        "nomprof": "Solarbreeze",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4CL96848C207294",
        "nomdevoir": "Ronstring",
        "nomeleve": "Drane",
        "datederendu": "7/1/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T1BD1FKXFU013590",
        "nomdevoir": "Alphazap",
        "nomeleve": "Stannion",
        "datederendu": "4/20/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAFU9C54CC000044",
        "nomdevoir": "Duobam",
        "nomeleve": "Faier",
        "datederendu": "6/5/2021",
        "nommatiere": "Treeflex",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBANF33506B837418",
        "nomdevoir": "Bitchip",
        "nomeleve": "Cheshir",
        "datederendu": "6/15/2021",
        "nommatiere": "Tampflex",
        "nomprof": "Keylex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTMF1CW5AF622658",
        "nomdevoir": "Overhold",
        "nomeleve": "Guite",
        "datederendu": "4/29/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4GD5ER0CF873719",
        "nomdevoir": "Alphazap",
        "nomeleve": "Bril",
        "datederendu": "8/8/2021",
        "nommatiere": "Redhold",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1AJ0HP7CM054513",
        "nomdevoir": "Viva",
        "nomeleve": "Pucknell",
        "datederendu": "6/17/2021",
        "nommatiere": "Bitchip",
        "nomprof": "Temp",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW4S7AT3EM483708",
        "nomdevoir": "Veribet",
        "nomeleve": "Aronow",
        "datederendu": "3/23/2021",
        "nommatiere": "Namfix",
        "nomprof": "Rank",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1DMAFP4FA339311",
        "nomdevoir": "Cardify",
        "nomeleve": "Puddicombe",
        "datederendu": "4/5/2021",
        "nommatiere": "Treeflex",
        "nomprof": "Biodex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHTC6AD7EU075038",
        "nomdevoir": "Domainer",
        "nomeleve": "Marklin",
        "datederendu": "7/31/2021",
        "nommatiere": "Hatity",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2G4WF551721065129",
        "nomdevoir": "Matsoft",
        "nomeleve": "Freemantle",
        "datederendu": "7/30/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHTC6AD5EU051417",
        "nomdevoir": "Quo Lux",
        "nomeleve": "Lanfranchi",
        "datederendu": "6/10/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Pannier",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4HA5EM1BU635308",
        "nomdevoir": "Flexidy",
        "nomeleve": "Atcherley",
        "datederendu": "7/1/2021",
        "nommatiere": "Andalax",
        "nomprof": "Tin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SAJWA1EK9EM437035",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Dewer",
        "datederendu": "5/13/2021",
        "nommatiere": "Fix San",
        "nomprof": "Voyatouch",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUBH64B11N588248",
        "nomdevoir": "Bytecard",
        "nomeleve": "Sandlin",
        "datederendu": "6/12/2021",
        "nommatiere": "Transcof",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBALW3C52EC226564",
        "nomdevoir": "Flexidy",
        "nomeleve": "Sawney",
        "datederendu": "4/19/2021",
        "nommatiere": "Fixflex",
        "nomprof": "Home Ing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAKE3C51CE514513",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Ledwich",
        "datederendu": "5/7/2021",
        "nommatiere": "Asoka",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SAJWA0HP7EM247705",
        "nomdevoir": "Subin",
        "nomeleve": "Rubery",
        "datederendu": "7/19/2021",
        "nommatiere": "Cardify",
        "nomprof": "Zathin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AF5MV7FT917910",
        "nomdevoir": "Fix San",
        "nomeleve": "Pretti",
        "datederendu": "8/23/2021",
        "nommatiere": "Bamity",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW1K7AJ9DM259004",
        "nomdevoir": "Gembucket",
        "nomeleve": "Moggie",
        "datederendu": "3/20/2021",
        "nommatiere": "Treeflex",
        "nomprof": "Fixflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WP0CA2A81FS605040",
        "nomdevoir": "Tampflex",
        "nomeleve": "Barnshaw",
        "datederendu": "6/24/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUHF98P49A548353",
        "nomdevoir": "Cookley",
        "nomeleve": "Berceros",
        "datederendu": "6/19/2021",
        "nommatiere": "Redhold",
        "nomprof": "Bigtax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AD0CW3FN596769",
        "nomdevoir": "Sonair",
        "nomeleve": "Ditchburn",
        "datederendu": "3/19/2021",
        "nommatiere": "Keylex",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUVFAFH4CN865971",
        "nomdevoir": "Veribet",
        "nomeleve": "Kenelin",
        "datederendu": "7/11/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2B3CK3CV7AH279560",
        "nomdevoir": "Overhold",
        "nomeleve": "Allanson",
        "datederendu": "7/4/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JA32U2FU5DU071694",
        "nomdevoir": "Greenlam",
        "nomeleve": "Moultrie",
        "datederendu": "8/6/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Toughjoyfax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3N1BC1AP2AL676653",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Baggott",
        "datederendu": "6/12/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4DC548X3S613210",
        "nomdevoir": "Prodder",
        "nomeleve": "Hurl",
        "datederendu": "4/30/2021",
        "nommatiere": "Cookley",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUMFAFH2FN662657",
        "nomdevoir": "Zontrax",
        "nomeleve": "McLugaish",
        "datederendu": "6/18/2021",
        "nommatiere": "Ventosanzap",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5LMJJ3H57BE222620",
        "nomdevoir": "Cardify",
        "nomeleve": "Haeslier",
        "datederendu": "3/20/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Sonair",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3GYFNBE32ES781480",
        "nomdevoir": "Zontrax",
        "nomeleve": "Grunwall",
        "datederendu": "8/6/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Opela",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4F2CY0C74BK260567",
        "nomdevoir": "Voltsillam",
        "nomeleve": "Tennison",
        "datederendu": "7/22/2021",
        "nommatiere": "Tin",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2T2BK1BA0FC953218",
        "nomdevoir": "Tin",
        "nomeleve": "Rolph",
        "datederendu": "6/5/2021",
        "nommatiere": "Andalax",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "YV1852AR8A1005580",
        "nomdevoir": "Treeflex",
        "nomeleve": "Golly",
        "datederendu": "5/12/2021",
        "nommatiere": "Pannier",
        "nomprof": "Matsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WUARL48H37K680316",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Catcheside",
        "datederendu": "8/6/2021",
        "nommatiere": "Veribet",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNAFU6A2XC5817398",
        "nomdevoir": "Keylex",
        "nomeleve": "MacAne",
        "datederendu": "5/5/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Lotlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUUL78E36A224915",
        "nomdevoir": "Cookley",
        "nomeleve": "Fairney",
        "datederendu": "6/21/2021",
        "nommatiere": "Stim",
        "nomprof": "Aerified",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5UXZV4C55DL403658",
        "nomdevoir": "Aerified",
        "nomeleve": "Filippo",
        "datederendu": "3/10/2021",
        "nommatiere": "Tempsoft",
        "nomprof": "Transcof",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUXL58E15A875718",
        "nomdevoir": "Veribet",
        "nomeleve": "Adin",
        "datederendu": "4/14/2021",
        "nommatiere": "Overhold",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAPT735X8C138044",
        "nomdevoir": "Redhold",
        "nomeleve": "Gregoli",
        "datederendu": "5/3/2021",
        "nommatiere": "Stim",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUAC68D01A276273",
        "nomdevoir": "Wrapsafe",
        "nomeleve": "Petera",
        "datederendu": "4/29/2021",
        "nommatiere": "Veribet",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4NA12691T532145",
        "nomdevoir": "Bitchip",
        "nomeleve": "Smogur",
        "datederendu": "6/25/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Stringtough",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2T1BURHEXFC957929",
        "nomdevoir": "Redhold",
        "nomeleve": "Fitzharris",
        "datederendu": "5/12/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C4PDCDG5ET057932",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Fassbender",
        "datederendu": "8/4/2021",
        "nommatiere": "Andalax",
        "nomprof": "Opela",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTHBE1BL9E5903411",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Klassman",
        "datederendu": "5/5/2021",
        "nommatiere": "Opela",
        "nomprof": "Matsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7CE2GK1AS432514",
        "nomdevoir": "Bitwolf",
        "nomeleve": "De Roos",
        "datederendu": "5/2/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Voyatouch",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DP5E38D0561827",
        "nomdevoir": "Rank",
        "nomeleve": "Handes",
        "datederendu": "4/10/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Cardify",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNAFU5A28C5298670",
        "nomdevoir": "Wrapsafe",
        "nomeleve": "Precious",
        "datederendu": "8/15/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBANW5C50AC317105",
        "nomdevoir": "Otcom",
        "nomeleve": "Heyworth",
        "datederendu": "7/13/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Sonair",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNADM4A32C6308131",
        "nomdevoir": "Aerified",
        "nomeleve": "Reis",
        "datederendu": "7/28/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Home Ing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUEF98E08A954033",
        "nomdevoir": "Domainer",
        "nomeleve": "Launder",
        "datederendu": "6/10/2021",
        "nommatiere": "Biodex",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T1BK3DB1BU995931",
        "nomdevoir": "Veribet",
        "nomeleve": "Marzellano",
        "datederendu": "8/10/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Latlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CDZAT3FH309274",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Maken",
        "datederendu": "4/6/2021",
        "nommatiere": "Fintone",
        "nomprof": "Zamit",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AZ2KR6ET704828",
        "nomdevoir": "Greenlam",
        "nomeleve": "Lope",
        "datederendu": "3/28/2021",
        "nommatiere": "Sonair",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2FMDK3JC5AB742263",
        "nomdevoir": "Zathin",
        "nomeleve": "Hughman",
        "datederendu": "3/31/2021",
        "nommatiere": "Zaam-Dox",
        "nomprof": "Matsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAYF4C56ED373153",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Villar",
        "datederendu": "5/17/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SAJWA0FB2CL949408",
        "nomdevoir": "Span",
        "nomeleve": "Reddel",
        "datederendu": "5/28/2021",
        "nommatiere": "Fintone",
        "nomprof": "Konklab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKF98E48A676949",
        "nomdevoir": "Redhold",
        "nomeleve": "Di Giacomettino",
        "datederendu": "6/5/2021",
        "nommatiere": "Otcom",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4CU541554917187",
        "nomdevoir": "Home Ing",
        "nomeleve": "Riden",
        "datederendu": "6/15/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GKUCHE05AR624619",
        "nomdevoir": "Fixflex",
        "nomeleve": "Beach",
        "datederendu": "3/14/2021",
        "nommatiere": "Sub-Ex",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FMCU0C72BK509727",
        "nomdevoir": "Stronghold",
        "nomeleve": "Barbara",
        "datederendu": "5/27/2021",
        "nommatiere": "Asoka",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VWKZ8AJ3BM875249",
        "nomdevoir": "Aerified",
        "nomeleve": "Treasaden",
        "datederendu": "3/10/2021",
        "nommatiere": "Zamit",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3C1C55CA471347",
        "nomdevoir": "Treeflex",
        "nomeleve": "Sellens",
        "datederendu": "8/5/2021",
        "nommatiere": "Aerified",
        "nomprof": "Stim",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C4RDGCG3FR945505",
        "nomdevoir": "Lotlux",
        "nomeleve": "Kildea",
        "datederendu": "4/19/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Overhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1YVHZ8AH3A5484174",
        "nomdevoir": "Namfix",
        "nomeleve": "Malkinson",
        "datederendu": "5/7/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBDC47L87C777084",
        "nomdevoir": "Transcof",
        "nomeleve": "Ilchenko",
        "datederendu": "7/17/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CCAGG4EH332740",
        "nomdevoir": "Bitchip",
        "nomeleve": "Manwaring",
        "datederendu": "8/23/2021",
        "nommatiere": "Asoka",
        "nomprof": "Daltfresh",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDH78E66A031207",
        "nomdevoir": "Bitwolf",
        "nomeleve": "Probbin",
        "datederendu": "6/9/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Voltsillam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVGAV7AX6CW342155",
        "nomdevoir": "Lotlux",
        "nomeleve": "Burrows",
        "datederendu": "8/23/2021",
        "nommatiere": "Zaam-Dox",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHFC4DD7AA812814",
        "nomdevoir": "Redhold",
        "nomeleve": "Shillingford",
        "datederendu": "8/20/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBACN33441L197668",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Klimkin",
        "datederendu": "3/15/2021",
        "nommatiere": "Latlux",
        "nomprof": "Voyatouch",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C3CFFDR4ET474572",
        "nomdevoir": "Subin",
        "nomeleve": "Whitwham",
        "datederendu": "6/27/2021",
        "nommatiere": "Fixflex",
        "nomprof": "Voltsillam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SALAG2D41CA832043",
        "nomdevoir": "Stringtough",
        "nomeleve": "Gallehawk",
        "datederendu": "3/7/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBS3R9C53FK190896",
        "nomdevoir": "Bytecard",
        "nomeleve": "Bigrigg",
        "datederendu": "8/13/2021",
        "nommatiere": "Zontrax",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1DGBFE9ED623624",
        "nomdevoir": "Overhold",
        "nomeleve": "Cutsforth",
        "datederendu": "6/21/2021",
        "nommatiere": "Zathin",
        "nomprof": "Tampflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUAFAFL9BN472419",
        "nomdevoir": "Ronstring",
        "nomeleve": "Hazlegrove",
        "datederendu": "3/14/2021",
        "nommatiere": "Viva",
        "nomprof": "Rank",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYUKBEF6AR679980",
        "nomdevoir": "Zontrax",
        "nomeleve": "Vassano",
        "datederendu": "4/18/2021",
        "nommatiere": "Vagram",
        "nomprof": "Keylex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW517AT8FM052421",
        "nomdevoir": "Bigtax",
        "nomeleve": "McCraw",
        "datederendu": "8/11/2021",
        "nommatiere": "Veribet",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5XYZT3LB8EG257728",
        "nomdevoir": "Zathin",
        "nomeleve": "Remer",
        "datederendu": "6/22/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Zathin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUC9C59BV525730",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Tankard",
        "datederendu": "8/10/2021",
        "nommatiere": "Cookley",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3B1C50EP645196",
        "nomdevoir": "Matsoft",
        "nomeleve": "Pettiford",
        "datederendu": "3/16/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Namfix",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1VWAH7A39DC841332",
        "nomdevoir": "Gembucket",
        "nomeleve": "Barnwell",
        "datederendu": "5/3/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Holdlamis",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VW4A7AT7DM359720",
        "nomdevoir": "Greenlam",
        "nomeleve": "Dumper",
        "datederendu": "6/15/2021",
        "nommatiere": "Lotlux",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKFAFL3EA391898",
        "nomdevoir": "Toughjoyfax",
        "nomeleve": "Gransden",
        "datederendu": "4/14/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Aerified",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTSE3EL4AD640072",
        "nomdevoir": "Transcof",
        "nomeleve": "MacEntee",
        "datederendu": "7/12/2021",
        "nommatiere": "Pannier",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4DC44681S018698",
        "nomdevoir": "Zontrax",
        "nomeleve": "Nicolson",
        "datederendu": "3/13/2021",
        "nommatiere": "Prodder",
        "nomprof": "Sonair",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1HGCR2E78EA570626",
        "nomdevoir": "Keylex",
        "nomeleve": "Selby",
        "datederendu": "4/16/2021",
        "nommatiere": "Y-find",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WVGAV7AXXCW142427",
        "nomdevoir": "Matsoft",
        "nomeleve": "Tiler",
        "datederendu": "7/15/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUVC58E43A945569",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Brett",
        "datederendu": "3/30/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Overhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBANU53528C965514",
        "nomdevoir": "Fix San",
        "nomeleve": "Mansbridge",
        "datederendu": "7/18/2021",
        "nommatiere": "Stringtough",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D4PU7GX8AW819550",
        "nomdevoir": "Bamity",
        "nomeleve": "Jodlkowski",
        "datederendu": "3/28/2021",
        "nommatiere": "Konklux",
        "nomprof": "Transcof",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAFA53581L462301",
        "nomdevoir": "Konklab",
        "nomeleve": "Lumm",
        "datederendu": "5/26/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AS5MT7CW642351",
        "nomdevoir": "Veribet",
        "nomeleve": "Kingzet",
        "datederendu": "7/27/2021",
        "nommatiere": "Aerified",
        "nomprof": "Keylex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GKS1GEJ5DR245284",
        "nomdevoir": "Namfix",
        "nomeleve": "Meriot",
        "datederendu": "3/20/2021",
        "nommatiere": "Domainer",
        "nomprof": "Namfix",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2D4RN4DG0BR797353",
        "nomdevoir": "Keylex",
        "nomeleve": "McGray",
        "datederendu": "6/5/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Flowdesk",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1CV6EKXBM214200",
        "nomdevoir": "Y-find",
        "nomeleve": "Hinemoor",
        "datederendu": "6/14/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2HNYD18785H584398",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Anlay",
        "datederendu": "7/24/2021",
        "nommatiere": "Bitchip",
        "nomprof": "Voltsillam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULC58E34A639360",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Colomb",
        "datederendu": "3/20/2021",
        "nommatiere": "Viva",
        "nomprof": "Cookley",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WDDHF0EB1EA742314",
        "nomdevoir": "Holdlamis",
        "nomeleve": "Corrington",
        "datederendu": "4/25/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Redhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JM1NC2MF3D0790939",
        "nomdevoir": "Lotstring",
        "nomeleve": "Mugleston",
        "datederendu": "3/10/2021",
        "nommatiere": "Bitchip",
        "nomprof": "Flexidy",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA1F9C5XFV306713",
        "nomdevoir": "Fixflex",
        "nomeleve": "Breem",
        "datederendu": "6/14/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Solarbreeze",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JM1NC2MFXE0887699",
        "nomdevoir": "Stim",
        "nomeleve": "Pabst",
        "datederendu": "5/18/2021",
        "nommatiere": "Tempsoft",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUGGBFC8CN345269",
        "nomdevoir": "Konklux",
        "nomeleve": "Jone",
        "datederendu": "6/29/2021",
        "nommatiere": "Holdlamis",
        "nomprof": "Flexidy",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTEX1C83AK789966",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Jado",
        "datederendu": "8/18/2021",
        "nommatiere": "Hatity",
        "nomprof": "Y-find",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUJT54B73N251834",
        "nomdevoir": "Sonsing",
        "nomeleve": "Cottier",
        "datederendu": "5/19/2021",
        "nommatiere": "Fix San",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTEW1CW4AK376603",
        "nomdevoir": "Home Ing",
        "nomeleve": "Aysik",
        "datederendu": "7/12/2021",
        "nommatiere": "Voltsillam",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5GAKVCKD4EJ768448",
        "nomdevoir": "Alpha",
        "nomeleve": "Pavelka",
        "datederendu": "5/7/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1ZVBP8AMXC5146768",
        "nomdevoir": "Sonsing",
        "nomeleve": "Ouchterlony",
        "datederendu": "4/21/2021",
        "nommatiere": "Veribet",
        "nomprof": "Ronstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FMCU0F7XEU166623",
        "nomdevoir": "Aerified",
        "nomeleve": "Catford",
        "datederendu": "7/14/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JA32U1FU9DU868640",
        "nomdevoir": "Pannier",
        "nomeleve": "O'Teague",
        "datederendu": "8/8/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Redhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "19UUA75658A354768",
        "nomdevoir": "Zontrax",
        "nomeleve": "Della",
        "datederendu": "7/22/2021",
        "nommatiere": "Holdlamis",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1CV6EK3BM877723",
        "nomdevoir": "Rank",
        "nomeleve": "Reuther",
        "datederendu": "4/13/2021",
        "nommatiere": "Alpha",
        "nomprof": "Stringtough",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AH5SX6E0196735",
        "nomdevoir": "Greenlam",
        "nomeleve": "Bantick",
        "datederendu": "4/23/2021",
        "nommatiere": "Veribet",
        "nomprof": "Konklab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3FADP4AJ9BM102298",
        "nomdevoir": "Bigtax",
        "nomeleve": "Cato",
        "datederendu": "8/10/2021",
        "nommatiere": "Y-find",
        "nomprof": "Flowdesk",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFEBBAK6BG919122",
        "nomdevoir": "Cardguard",
        "nomeleve": "Heed",
        "datederendu": "8/8/2021",
        "nommatiere": "Holdlamis",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6KD57Y79U930444",
        "nomdevoir": "Zontrax",
        "nomeleve": "Buttrick",
        "datederendu": "6/10/2021",
        "nommatiere": "Transcof",
        "nomprof": "Wrapsafe",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUSH98E47A427348",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Vedyaev",
        "datederendu": "5/8/2021",
        "nommatiere": "Veribet",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4PN5SK9C4197044",
        "nomdevoir": "Sonair",
        "nomeleve": "Tough",
        "datederendu": "5/12/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Solarbreeze",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3FA6P0LU9DR218373",
        "nomdevoir": "Hatity",
        "nomeleve": "Kemmet",
        "datederendu": "6/22/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Rank",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GD11ZCG7DF200967",
        "nomdevoir": "Mat Lam Tam",
        "nomeleve": "Dorran",
        "datederendu": "5/17/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C6RD7PT3CS799194",
        "nomdevoir": "Sonsing",
        "nomeleve": "Oughtright",
        "datederendu": "5/25/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N4CL2APXBC054442",
        "nomdevoir": "Namfix",
        "nomeleve": "Castelow",
        "datederendu": "5/10/2021",
        "nommatiere": "Aerified",
        "nomprof": "Home Ing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3GYFNJE45AS089212",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Bayle",
        "datederendu": "8/22/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Namfix",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5TFCM5F19AX858736",
        "nomdevoir": "Gembucket",
        "nomeleve": "Priel",
        "datederendu": "3/14/2021",
        "nommatiere": "Tresom",
        "nomprof": "Redhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7RV1GP8AS754986",
        "nomdevoir": "Span",
        "nomeleve": "Menilove",
        "datederendu": "4/8/2021",
        "nommatiere": "Pannier",
        "nomprof": "Viva",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBADW7C52CE680424",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Roseblade",
        "datederendu": "8/8/2021",
        "nommatiere": "Vagram",
        "nomprof": "Y-find",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBABN33442P262377",
        "nomdevoir": "Hatity",
        "nomeleve": "Gosby",
        "datederendu": "4/6/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4HH5E90AU614973",
        "nomdevoir": "Asoka",
        "nomeleve": "Heckney",
        "datederendu": "8/9/2021",
        "nommatiere": "Otcom",
        "nomprof": "Flowdesk",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1WGBFP2EA578814",
        "nomdevoir": "Y-find",
        "nomeleve": "Gridley",
        "datederendu": "5/6/2021",
        "nommatiere": "Sonair",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFK33229R792254",
        "nomdevoir": "Ronstring",
        "nomeleve": "Lapish",
        "datederendu": "6/25/2021",
        "nommatiere": "Biodex",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTDKDTB32E1420978",
        "nomdevoir": "Namfix",
        "nomeleve": "Wicks",
        "datederendu": "8/13/2021",
        "nommatiere": "Aerified",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N4AA5AP6EC150216",
        "nomdevoir": "Cookley",
        "nomeleve": "Berriball",
        "datederendu": "8/12/2021",
        "nommatiere": "Vagram",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAKF5C52DE211041",
        "nomdevoir": "Prodder",
        "nomeleve": "Durrant",
        "datederendu": "6/23/2021",
        "nommatiere": "Fix San",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1AN0NW7EN387333",
        "nomdevoir": "Viva",
        "nomeleve": "De-Ville",
        "datederendu": "7/20/2021",
        "nommatiere": "Konklab",
        "nomprof": "Biodex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T3BA3BB9CU974145",
        "nomdevoir": "Cookley",
        "nomeleve": "Meyer",
        "datederendu": "5/12/2021",
        "nommatiere": "Tin",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1CR2MN6EC523481",
        "nomdevoir": "Trippledex",
        "nomeleve": "Tiffany",
        "datederendu": "4/9/2021",
        "nommatiere": "Veribet",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUAF78E28A364077",
        "nomdevoir": "Y-find",
        "nomeleve": "Mattea",
        "datederendu": "4/24/2021",
        "nommatiere": "Tempsoft",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUNF98P96A834956",
        "nomdevoir": "Fixflex",
        "nomeleve": "Athey",
        "datederendu": "6/2/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KNAFT4A23D5666610",
        "nomdevoir": "Konklux",
        "nomeleve": "Imrie",
        "datederendu": "7/16/2021",
        "nommatiere": "Temp",
        "nomprof": "Namfix",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D7TT2CT7AG789000",
        "nomdevoir": "Sonsing",
        "nomeleve": "Menel",
        "datederendu": "7/30/2021",
        "nommatiere": "Duobam",
        "nomprof": "Duobam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTEX1CM2DF405430",
        "nomdevoir": "Transcof",
        "nomeleve": "Witcherley",
        "datederendu": "5/11/2021",
        "nommatiere": "Vagram",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AL5SX0E0236452",
        "nomdevoir": "Konklab",
        "nomeleve": "Drable",
        "datederendu": "5/31/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3A5G53CN028131",
        "nomdevoir": "Opela",
        "nomeleve": "Macourek",
        "datederendu": "5/14/2021",
        "nommatiere": "Opela",
        "nomprof": "Domainer",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "W06VR54R61R412181",
        "nomdevoir": "Bytecard",
        "nomeleve": "Drabble",
        "datederendu": "5/16/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBS3R9C50FK793692",
        "nomdevoir": "Opela",
        "nomeleve": "Joriot",
        "datederendu": "8/2/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VWF17AT1FM134611",
        "nomdevoir": "Rank",
        "nomeleve": "MacCrachen",
        "datederendu": "7/2/2021",
        "nommatiere": "Subin",
        "nomprof": "Cardify",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KM8NU4CC2AU082178",
        "nomdevoir": "Overhold",
        "nomeleve": "Avrahamian",
        "datederendu": "4/4/2021",
        "nommatiere": "Temp",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1DKAFP7BA068812",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Dedden",
        "datederendu": "6/17/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUHF98P49A866439",
        "nomdevoir": "Redhold",
        "nomeleve": "Ffrench",
        "datederendu": "7/8/2021",
        "nommatiere": "Bamity",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUJT68E43A421147",
        "nomdevoir": "Zathin",
        "nomeleve": "Becker",
        "datederendu": "4/5/2021",
        "nommatiere": "Stringtough",
        "nomprof": "Overhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C4RDJEG9DC497044",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Marcroft",
        "datederendu": "8/12/2021",
        "nommatiere": "Lotlux",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SALSF2D4XDA425962",
        "nomdevoir": "Sonair",
        "nomeleve": "Chaplin",
        "datederendu": "7/28/2021",
        "nommatiere": "Temp",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CA4CD8AH204658",
        "nomdevoir": "It",
        "nomeleve": "Feacham",
        "datederendu": "6/21/2021",
        "nommatiere": "Y-find",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUHF78P86A937447",
        "nomdevoir": "Domainer",
        "nomeleve": "Cotta",
        "datederendu": "6/7/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFEBBDL2EG426336",
        "nomdevoir": "Duobam",
        "nomeleve": "Woolen",
        "datederendu": "5/10/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Domainer",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3LN6L2LU6DR944642",
        "nomdevoir": "Subin",
        "nomeleve": "Soots",
        "datederendu": "3/14/2021",
        "nommatiere": "Pannier",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DR57VX80177076",
        "nomdevoir": "Toughjoyfax",
        "nomeleve": "Auchinleck",
        "datederendu": "8/23/2021",
        "nommatiere": "Voyatouch",
        "nomprof": "Vagram",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAEW53422P028678",
        "nomdevoir": "Stronghold",
        "nomeleve": "Bosson",
        "datederendu": "6/8/2021",
        "nommatiere": "Y-find",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULK78K19A979828",
        "nomdevoir": "Rank",
        "nomeleve": "Craxford",
        "datederendu": "5/6/2021",
        "nommatiere": "Treeflex",
        "nomprof": "Biodex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4F2CY0C77AK349323",
        "nomdevoir": "Latlux",
        "nomeleve": "Revan",
        "datederendu": "7/22/2021",
        "nommatiere": "Tin",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBGC3ZA9EC866761",
        "nomdevoir": "Stim",
        "nomeleve": "Touret",
        "datederendu": "4/16/2021",
        "nommatiere": "Span",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFC26249R668022",
        "nomdevoir": "Zamit",
        "nomeleve": "Bartles",
        "datederendu": "8/24/2021",
        "nommatiere": "Konklab",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHEC4A48EA236415",
        "nomdevoir": "Hatity",
        "nomeleve": "Droghan",
        "datederendu": "8/2/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Viva",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2FMPK4J98FB585844",
        "nomdevoir": "Duobam",
        "nomeleve": "Schreurs",
        "datederendu": "5/25/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2FMGK5C86FB260197",
        "nomdevoir": "Stronghold",
        "nomeleve": "Broinlich",
        "datederendu": "7/25/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHTC6AD9FU863918",
        "nomdevoir": "Voyatouch",
        "nomeleve": "Sissons",
        "datederendu": "3/7/2021",
        "nommatiere": "Y-find",
        "nomprof": "Home Ing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AS5MT2DW548623",
        "nomdevoir": "Viva",
        "nomeleve": "Highwood",
        "datederendu": "4/3/2021",
        "nommatiere": "Veribet",
        "nomprof": "Stringtough",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G4GD5EG0AF670213",
        "nomdevoir": "Holdlamis",
        "nomeleve": "Brunsen",
        "datederendu": "6/29/2021",
        "nommatiere": "Domainer",
        "nomprof": "Zoolab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDL94FX5N198220",
        "nomdevoir": "Voltsillam",
        "nomeleve": "Poston",
        "datederendu": "5/14/2021",
        "nommatiere": "Mat Lam Tam",
        "nomprof": "Latlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2C3CK3CV8AH553299",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Lorimer",
        "datederendu": "3/13/2021",
        "nommatiere": "Biodex",
        "nomprof": "Konklab",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBXPC93429W163724",
        "nomdevoir": "Zontrax",
        "nomeleve": "Rothermel",
        "datederendu": "8/4/2021",
        "nommatiere": "Asoka",
        "nomprof": "Job",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5FPYK1F26AB468675",
        "nomdevoir": "Konklab",
        "nomeleve": "Lydiatt",
        "datederendu": "6/2/2021",
        "nommatiere": "Cookley",
        "nomprof": "Namfix",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3F9C56DF410440",
        "nomdevoir": "Keylex",
        "nomeleve": "Waryk",
        "datederendu": "6/22/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTWW3A53AE969832",
        "nomdevoir": "Overhold",
        "nomeleve": "Yorath",
        "datederendu": "8/21/2021",
        "nommatiere": "Prodder",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFK56219R748902",
        "nomdevoir": "Duobam",
        "nomeleve": "Cordaroy",
        "datederendu": "7/19/2021",
        "nommatiere": "It",
        "nomprof": "Daltfresh",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTHBF1D25F5470155",
        "nomdevoir": "Tin",
        "nomeleve": "Westgate",
        "datederendu": "8/13/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Pannier",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "4T1BF3EKXAU713951",
        "nomdevoir": "Regrant",
        "nomeleve": "Quinane",
        "datederendu": "7/23/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Hatity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1KK78R09A692244",
        "nomdevoir": "Andalax",
        "nomeleve": "Gillett",
        "datederendu": "4/5/2021",
        "nommatiere": "Lotlux",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFAD01A75G709024",
        "nomdevoir": "Gembucket",
        "nomeleve": "Gerding",
        "datederendu": "3/27/2021",
        "nommatiere": "Asoka",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VWKZ8AJ8BM477423",
        "nomdevoir": "Zamit",
        "nomeleve": "Lavell",
        "datederendu": "5/21/2021",
        "nommatiere": "Cardify",
        "nomprof": "Aerified",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBALM5C5XAE793718",
        "nomdevoir": "Flowdesk",
        "nomeleve": "Zannotelli",
        "datederendu": "8/10/2021",
        "nommatiere": "Cookley",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTSW3A54AE407680",
        "nomdevoir": "Keylex",
        "nomeleve": "Keat",
        "datederendu": "8/11/2021",
        "nommatiere": "Voltsillam",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUMFAFL9DA348433",
        "nomdevoir": "Aerified",
        "nomeleve": "Birchett",
        "datederendu": "5/7/2021",
        "nommatiere": "Fintone",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C4PDDDGXDT327998",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Cockaday",
        "datederendu": "6/14/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Alpha",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7RV1CP2BS525341",
        "nomdevoir": "Ventosanzap",
        "nomeleve": "Wipfler",
        "datederendu": "6/23/2021",
        "nommatiere": "Alphazap",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1CL0MM0EC660347",
        "nomdevoir": "Sonsing",
        "nomeleve": "McCowen",
        "datederendu": "7/29/2021",
        "nommatiere": "Bamity",
        "nomprof": "Treeflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5FRYD3H42FB149342",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Schimmang",
        "datederendu": "3/15/2021",
        "nommatiere": "Temp",
        "nomprof": "Bytecard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUFFAFL1AN101159",
        "nomdevoir": "Temp",
        "nomeleve": "Stolli",
        "datederendu": "4/25/2021",
        "nommatiere": "Opela",
        "nomprof": "Keylex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDN74F38N789055",
        "nomdevoir": "Keylex",
        "nomeleve": "Flattman",
        "datederendu": "3/17/2021",
        "nommatiere": "Namfix",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FMJU1F53AE921854",
        "nomdevoir": "Alpha",
        "nomeleve": "Semper",
        "datederendu": "5/6/2021",
        "nommatiere": "Asoka",
        "nomprof": "Alpha",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBLE47K48C428101",
        "nomdevoir": "Bytecard",
        "nomeleve": "Sebert",
        "datederendu": "5/12/2021",
        "nommatiere": "Konklux",
        "nomprof": "Treeflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4KB16577C648616",
        "nomdevoir": "Vagram",
        "nomeleve": "Szymonwicz",
        "datederendu": "7/1/2021",
        "nommatiere": "Biodex",
        "nomprof": "Rank",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JHMFA3F28AS366097",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Ivashinnikov",
        "datederendu": "6/21/2021",
        "nommatiere": "Ventosanzap",
        "nomprof": "Domainer",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUEL74F15N437775",
        "nomdevoir": "Aerified",
        "nomeleve": "Fleckness",
        "datederendu": "5/1/2021",
        "nommatiere": "Y-find",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VWJX7AJ2AM547329",
        "nomdevoir": "Latlux",
        "nomeleve": "Mardy",
        "datederendu": "6/19/2021",
        "nommatiere": "Zamit",
        "nomprof": "Gembucket",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTMF1EW3AF766125",
        "nomdevoir": "Bitwolf",
        "nomeleve": "Pau",
        "datederendu": "3/9/2021",
        "nommatiere": "Vagram",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULH64B31N395295",
        "nomdevoir": "Subin",
        "nomeleve": "Ruberti",
        "datederendu": "3/23/2021",
        "nommatiere": "Namfix",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JA32X8HW6DU692838",
        "nomdevoir": "Ronstring",
        "nomeleve": "Wheelwright",
        "datederendu": "7/12/2021",
        "nommatiere": "Y-find",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1EY94L68D468918",
        "nomdevoir": "Zathin",
        "nomeleve": "Binfield",
        "datederendu": "7/14/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Temp",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WP0AB2A80CS801986",
        "nomdevoir": "Bitwolf",
        "nomeleve": "Biggin",
        "datederendu": "3/30/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Wrapsafe",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHTC6AD0DU489633",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Corona",
        "datederendu": "4/13/2021",
        "nommatiere": "Opela",
        "nomprof": "Flexidy",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCBLC31E52C024296",
        "nomdevoir": "Matsoft",
        "nomeleve": "Deakan",
        "datederendu": "3/29/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Stringtough",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WP0AA2A83CS332198",
        "nomdevoir": "Lotstring",
        "nomeleve": "Caizley",
        "datederendu": "6/11/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUHFAFL3DA150822",
        "nomdevoir": "Matsoft",
        "nomeleve": "Alexsandrov",
        "datederendu": "5/2/2021",
        "nommatiere": "Lotlux",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JH4KA96641C415889",
        "nomdevoir": "Zathin",
        "nomeleve": "Thumnel",
        "datederendu": "5/15/2021",
        "nommatiere": "Sonsing",
        "nomprof": "Aerified",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFFDEDNXCG254927",
        "nomdevoir": "Bytecard",
        "nomeleve": "Drain",
        "datederendu": "4/24/2021",
        "nommatiere": "Bigtax",
        "nomprof": "Vagram",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTSW2A56AE914851",
        "nomdevoir": "Fixflex",
        "nomeleve": "Qualtrough",
        "datederendu": "8/11/2021",
        "nommatiere": "Fintone",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1WMAFE1DD331881",
        "nomdevoir": "Bamity",
        "nomeleve": "Riccelli",
        "datederendu": "3/23/2021",
        "nommatiere": "Sonair",
        "nomprof": "Redhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WDDJK7DA3FF768982",
        "nomdevoir": "Rank",
        "nomeleve": "Crichton",
        "datederendu": "6/15/2021",
        "nommatiere": "Overhold",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKF98E88A003307",
        "nomdevoir": "Bytecard",
        "nomeleve": "Eustis",
        "datederendu": "4/9/2021",
        "nommatiere": "Quo Lux",
        "nomprof": "Holdlamis",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AZ1MU0CW893192",
        "nomdevoir": "Tin",
        "nomeleve": "FitzGeorge",
        "datederendu": "5/1/2021",
        "nommatiere": "Ventosanzap",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUGL78E47A732034",
        "nomdevoir": "Home Ing",
        "nomeleve": "Cheal",
        "datederendu": "4/14/2021",
        "nommatiere": "Zontrax",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUEH78E97A159804",
        "nomdevoir": "Otcom",
        "nomeleve": "Hawler",
        "datederendu": "4/11/2021",
        "nommatiere": "Bitchip",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBADW3C53DE930988",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Sanger",
        "datederendu": "7/22/2021",
        "nommatiere": "Duobam",
        "nomprof": "Fix San",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JA4AD3A31FZ441833",
        "nomdevoir": "Domainer",
        "nomeleve": "Rikard",
        "datederendu": "6/27/2021",
        "nommatiere": "Span",
        "nomprof": "Y-find",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5YMGZ0C57DL316776",
        "nomdevoir": "Job",
        "nomeleve": "Maynell",
        "datederendu": "4/15/2021",
        "nommatiere": "Stringtough",
        "nomprof": "Solarbreeze",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKFAFL7EA646942",
        "nomdevoir": "Span",
        "nomeleve": "Jenicek",
        "datederendu": "4/10/2021",
        "nommatiere": "Andalax",
        "nomprof": "Stim",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDG78E15A898452",
        "nomdevoir": "Sonair",
        "nomeleve": "Belliard",
        "datederendu": "8/13/2021",
        "nommatiere": "Home Ing",
        "nomprof": "Lotstring",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTDZN3EU0EJ237255",
        "nomdevoir": "Pannier",
        "nomeleve": "Oldred",
        "datederendu": "3/28/2021",
        "nommatiere": "Bitwolf",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5GAER23788J681421",
        "nomdevoir": "Zaam-Dox",
        "nomeleve": "Scadden",
        "datederendu": "8/20/2021",
        "nommatiere": "Biodex",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUSH98E27A469050",
        "nomdevoir": "Bytecard",
        "nomeleve": "Kidney",
        "datederendu": "7/5/2021",
        "nommatiere": "Sub-Ex",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUN1C59BV555404",
        "nomdevoir": "Ronstring",
        "nomeleve": "Hulburd",
        "datederendu": "5/12/2021",
        "nommatiere": "Zathin",
        "nomprof": "Daltfresh",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2FMDK4GC1AB358493",
        "nomdevoir": "Kanlam",
        "nomeleve": "McTear",
        "datederendu": "7/26/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTDKN3DP2E3859230",
        "nomdevoir": "Zathin",
        "nomeleve": "Shovlin",
        "datederendu": "6/29/2021",
        "nommatiere": "Daltfresh",
        "nomprof": "Bitwolf",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUDF78E26A042520",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Breakwell",
        "datederendu": "6/2/2021",
        "nommatiere": "Konklux",
        "nomprof": "Asoka",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUNF78P98A968065",
        "nomdevoir": "Overhold",
        "nomeleve": "Vernalls",
        "datederendu": "8/7/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Cookley",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTEW1C87AK988280",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Bratty",
        "datederendu": "6/27/2021",
        "nommatiere": "Aerified",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBANV13539C715030",
        "nomdevoir": "Stringtough",
        "nomeleve": "Putten",
        "datederendu": "7/21/2021",
        "nommatiere": "Konklux",
        "nomprof": "Asoka",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1LMAFEXED251824",
        "nomdevoir": "Tampflex",
        "nomeleve": "Ellins",
        "datederendu": "3/16/2021",
        "nommatiere": "Cookley",
        "nomprof": "Latlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1YVHZ8BH6D5549103",
        "nomdevoir": "Voltsillam",
        "nomeleve": "Hamlyn",
        "datederendu": "7/31/2021",
        "nommatiere": "Tin",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1N6AA0CA8EN670702",
        "nomdevoir": "Tresom",
        "nomeleve": "Mildmott",
        "datederendu": "7/6/2021",
        "nommatiere": "Treeflex",
        "nomprof": "Viva",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7RB1CT3BS317247",
        "nomdevoir": "Stringtough",
        "nomeleve": "MacLese",
        "datederendu": "3/26/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Alphazap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFAB01A26G610649",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Cozzi",
        "datederendu": "3/29/2021",
        "nommatiere": "Zamit",
        "nomprof": "Subin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUMR94E68N976894",
        "nomdevoir": "It",
        "nomeleve": "Ganders",
        "datederendu": "3/10/2021",
        "nommatiere": "Cardify",
        "nomprof": "Hatity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5J8TB4H35GL611861",
        "nomdevoir": "Tresom",
        "nomeleve": "Wrout",
        "datederendu": "6/7/2021",
        "nommatiere": "Prodder",
        "nomprof": "Transcof",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C6JD7AP2CG356793",
        "nomdevoir": "Pannier",
        "nomeleve": "Goulder",
        "datederendu": "6/18/2021",
        "nommatiere": "Viva",
        "nomprof": "Sub-Ex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JA4AP3AU7BZ025912",
        "nomdevoir": "Wrapsafe",
        "nomeleve": "Glozman",
        "datederendu": "7/11/2021",
        "nommatiere": "Ronstring",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GKUKFDJ0AR754535",
        "nomdevoir": "Voltsillam",
        "nomeleve": "Alexandersson",
        "datederendu": "4/27/2021",
        "nommatiere": "Cookley",
        "nomprof": "Flowdesk",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUD2AFDXDN847061",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Tythacott",
        "datederendu": "8/20/2021",
        "nommatiere": "Redhold",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUP93558V762387",
        "nomdevoir": "Redhold",
        "nomeleve": "Allaway",
        "datederendu": "5/4/2021",
        "nommatiere": "Job",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAULFAFH3CN131183",
        "nomdevoir": "Trippledex",
        "nomeleve": "Moorhouse",
        "datederendu": "5/7/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Redhold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUPL68E44A252078",
        "nomdevoir": "Aerified",
        "nomeleve": "Dunn",
        "datederendu": "5/10/2021",
        "nommatiere": "Flexidy",
        "nomprof": "Solarbreeze",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKH94F68N882985",
        "nomdevoir": "Stim",
        "nomeleve": "Di Biagio",
        "datederendu": "6/17/2021",
        "nommatiere": "Bitchip",
        "nomprof": "Mat Lam Tam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KMHHT6KD7AU349806",
        "nomdevoir": "Vagram",
        "nomeleve": "Amberg",
        "datederendu": "5/12/2021",
        "nommatiere": "Vagram",
        "nomprof": "Trippledex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2LNBL8CV7AX684954",
        "nomdevoir": "Stronghold",
        "nomeleve": "Brownell",
        "datederendu": "5/1/2021",
        "nommatiere": "Namfix",
        "nomprof": "Duobam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "YV1902MMXF1047629",
        "nomdevoir": "Job",
        "nomeleve": "Hamsher",
        "datederendu": "3/19/2021",
        "nommatiere": "Hatity",
        "nomprof": "Bigtax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUBF78EX8A033221",
        "nomdevoir": "Fintone",
        "nomeleve": "Eldin",
        "datederendu": "4/26/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1C4RDJDG0CC637630",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Alliban",
        "datederendu": "7/20/2021",
        "nommatiere": "Flowdesk",
        "nomprof": "Stringtough",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTEW1C85AF667766",
        "nomdevoir": "Lotstring",
        "nomeleve": "Nurdin",
        "datederendu": "6/18/2021",
        "nommatiere": "Zontrax",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAU3GBFC7DN048042",
        "nomdevoir": "Overhold",
        "nomeleve": "Tuckerman",
        "datederendu": "3/17/2021",
        "nommatiere": "Sub-Ex",
        "nomprof": "Tresom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3K5C54EK670154",
        "nomdevoir": "Opela",
        "nomeleve": "Bier",
        "datederendu": "4/27/2021",
        "nommatiere": "Vagram",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SALCT2BG7FH740030",
        "nomdevoir": "Stronghold",
        "nomeleve": "Vevers",
        "datederendu": "5/1/2021",
        "nommatiere": "Span",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WDDPK4HA3CF469183",
        "nomdevoir": "Gembucket",
        "nomeleve": "Cham",
        "datederendu": "5/26/2021",
        "nommatiere": "Matsoft",
        "nomprof": "Kanlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5N1AN0NW1DN832230",
        "nomdevoir": "Trippledex",
        "nomeleve": "Wermerling",
        "datederendu": "5/28/2021",
        "nommatiere": "Alpha",
        "nomprof": "Greenlam",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAUN1C5XCV559169",
        "nomdevoir": "Sub-Ex",
        "nomeleve": "Schruur",
        "datederendu": "7/11/2021",
        "nommatiere": "Asoka",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUYGBFC9CN163584",
        "nomdevoir": "Matsoft",
        "nomeleve": "Bramstom",
        "datederendu": "3/31/2021",
        "nommatiere": "Tres-Zap",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAVC53528A324748",
        "nomdevoir": "Hatity",
        "nomeleve": "Mascall",
        "datederendu": "7/18/2021",
        "nommatiere": "Viva",
        "nomprof": "Bitchip",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3VWJP7AT1CM335011",
        "nomdevoir": "Trippledex",
        "nomeleve": "Scarsbrick",
        "datederendu": "8/6/2021",
        "nommatiere": "Stronghold",
        "nomprof": "Treeflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7RW3BK8AS475462",
        "nomdevoir": "Stronghold",
        "nomeleve": "Ox",
        "datederendu": "5/10/2021",
        "nommatiere": "Tin",
        "nomprof": "Cardguard",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WA1YD54B83N508296",
        "nomdevoir": "Bitchip",
        "nomeleve": "Rawle",
        "datederendu": "4/13/2021",
        "nommatiere": "Tampflex",
        "nomprof": "Asoka",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JM3TB2BA7D0531962",
        "nomdevoir": "Stringtough",
        "nomeleve": "Parffrey",
        "datederendu": "5/11/2021",
        "nommatiere": "Lotstring",
        "nomprof": "Tin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "ML32A3HJ0EH287775",
        "nomdevoir": "Prodder",
        "nomeleve": "Breeze",
        "datederendu": "7/6/2021",
        "nommatiere": "Tresom",
        "nomprof": "Konklux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFC56279R996620",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Kubasiewicz",
        "datederendu": "4/16/2021",
        "nommatiere": "Lotlux",
        "nomprof": "Bamity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTJBJRBZ0F2336361",
        "nomdevoir": "Cardguard",
        "nomeleve": "Ware",
        "datederendu": "6/30/2021",
        "nommatiere": "Transcof",
        "nomprof": "Bamity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA1K5C52FV297574",
        "nomdevoir": "Toughjoyfax",
        "nomeleve": "Burds",
        "datederendu": "3/12/2021",
        "nommatiere": "Bytecard",
        "nomprof": "Lotlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUXL58E25A884301",
        "nomdevoir": "Regrant",
        "nomeleve": "Theyer",
        "datederendu": "6/26/2021",
        "nommatiere": "Regrant",
        "nomprof": "Pannier",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYEE23A990367848",
        "nomdevoir": "Y-Solowarm",
        "nomeleve": "Pighills",
        "datederendu": "6/6/2021",
        "nommatiere": "Fix San",
        "nomprof": "Ventosanzap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3D73Y4CL9AG378467",
        "nomdevoir": "Tin",
        "nomeleve": "Murtagh",
        "datederendu": "6/5/2021",
        "nommatiere": "Zathin",
        "nomprof": "Fintone",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2G4WE587381538889",
        "nomdevoir": "Ronstring",
        "nomeleve": "Kerry",
        "datederendu": "8/17/2021",
        "nommatiere": "Zamit",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUKH94F38N381276",
        "nomdevoir": "Voyatouch",
        "nomeleve": "Florez",
        "datederendu": "4/12/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Tempsoft",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBSBR93482E003907",
        "nomdevoir": "Stim",
        "nomeleve": "Taylor",
        "datederendu": "8/19/2021",
        "nommatiere": "Bamity",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "SCFEDCAD3BG304092",
        "nomdevoir": "Treeflex",
        "nomeleve": "Legister",
        "datederendu": "5/12/2021",
        "nommatiere": "Viva",
        "nomprof": "Domainer",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN1CV6EK6CM746819",
        "nomdevoir": "Duobam",
        "nomeleve": "Scholfield",
        "datederendu": "8/23/2021",
        "nommatiere": "Gembucket",
        "nomprof": "Toughjoyfax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DA67V480488306",
        "nomdevoir": "Tempsoft",
        "nomeleve": "Fleetham",
        "datederendu": "7/4/2021",
        "nommatiere": "Domainer",
        "nomprof": "Latlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1FTSW3B54AE446204",
        "nomdevoir": "Keylex",
        "nomeleve": "Polkinhorn",
        "datederendu": "4/7/2021",
        "nommatiere": "Span",
        "nomprof": "Lotlux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DM5EG3A0266349",
        "nomdevoir": "Zathin",
        "nomeleve": "Vaar",
        "datederendu": "6/1/2021",
        "nommatiere": "Fix San",
        "nomprof": "It",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6AY5S3XF0587787",
        "nomdevoir": "It",
        "nomeleve": "Troctor",
        "datederendu": "3/7/2021",
        "nommatiere": "Zoolab",
        "nomprof": "Viva",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBAHL035X6D634416",
        "nomdevoir": "Rank",
        "nomeleve": "Wycliff",
        "datederendu": "5/4/2021",
        "nommatiere": "Zamit",
        "nomprof": "Otcom",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "KL4CJBSB9FB858708",
        "nomdevoir": "Solarbreeze",
        "nomeleve": "Dinse",
        "datederendu": "6/4/2021",
        "nommatiere": "Job",
        "nomprof": "Home Ing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DA1ED2B0063848",
        "nomdevoir": "Home Ing",
        "nomeleve": "Kleinpeltz",
        "datederendu": "6/17/2021",
        "nommatiere": "Bamity",
        "nomprof": "Treeflex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GKS2GEJ9BR214291",
        "nomdevoir": "Cardguard",
        "nomeleve": "Dupoy",
        "datederendu": "6/18/2021",
        "nommatiere": "Mat Lam Tam",
        "nomprof": "Zontrax",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WBA3C1C54FP618775",
        "nomdevoir": "Tres-Zap",
        "nomeleve": "Marcone",
        "datederendu": "3/29/2021",
        "nommatiere": "Wrapsafe",
        "nomprof": "Keylex",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYEE437490171395",
        "nomdevoir": "Daltfresh",
        "nomeleve": "Porte",
        "datederendu": "6/30/2021",
        "nommatiere": "Flexidy",
        "nomprof": "Tres-Zap",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "TRURD38J881554084",
        "nomdevoir": "Temp",
        "nomeleve": "Raine",
        "datederendu": "7/4/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Span",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3C3CFFHHXET621561",
        "nomdevoir": "Prodder",
        "nomeleve": "Raddin",
        "datederendu": "7/23/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Vagram",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "3N1CN7AP7FL937347",
        "nomdevoir": "Span",
        "nomeleve": "Dagger",
        "datederendu": "3/14/2021",
        "nommatiere": "Viva",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1D7CW2GK5AS595678",
        "nomdevoir": "Bitchip",
        "nomeleve": "Dugget",
        "datederendu": "6/30/2021",
        "nommatiere": "Kanlam",
        "nomprof": "Bamity",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUFFAFL9DA640950",
        "nomdevoir": "Vagram",
        "nomeleve": "Ratt",
        "datederendu": "8/20/2021",
        "nommatiere": "Bytecard",
        "nomprof": "Veribet",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "WAUEH78E06A931170",
        "nomdevoir": "Zaam-Dox",
        "nomeleve": "Straffon",
        "datederendu": "3/14/2021",
        "nommatiere": "Vagram",
        "nomprof": "Stronghold",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8CS1MW2FM268470",
        "nomdevoir": "Flowdesk",
        "nomeleve": "Stacy",
        "datederendu": "5/9/2021",
        "nommatiere": "Toughjoyfax",
        "nomprof": "Home Ing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "5XYKT3A65FG168921",
        "nomdevoir": "Gembucket",
        "nomeleve": "Tritton",
        "datederendu": "3/11/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Flexidy",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JTDKTUD33DD938486",
        "nomdevoir": "Zontrax",
        "nomeleve": "Shipp",
        "datederendu": "3/23/2021",
        "nommatiere": "Greenlam",
        "nomprof": "Holdlamis",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "2G4WC582371360653",
        "nomdevoir": "Job",
        "nomeleve": "Rubinovitch",
        "datederendu": "4/16/2021",
        "nommatiere": "Alpha",
        "nomprof": "Transcof",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1GYFK56239R779312",
        "nomdevoir": "Rank",
        "nomeleve": "Ianne",
        "datederendu": "5/19/2021",
        "nommatiere": "Trippledex",
        "nomprof": "Zathin",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "YV1902AH2D1167834",
        "nomdevoir": "Job",
        "nomeleve": "Beves",
        "datederendu": "4/22/2021",
        "nommatiere": "Solarbreeze",
        "nomprof": "Quo Lux",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "JN8AZ2KR7AT036127",
        "nomdevoir": "Stringtough",
        "nomeleve": "Barstow",
        "datederendu": "7/30/2021",
        "nommatiere": "Transcof",
        "nomprof": "Sonsing",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }, {
        "id": "1G6DP8E3XC0568441",
        "nomdevoir": "Bytecard",
        "nomeleve": "Shovelin",
        "datederendu": "6/25/2021",
        "nommatiere": "Veribet",
        "nomprof": "Daltfresh",
        "avatar1": "localhost:3000/images/d.png",
        "note": "null",
        "remarque": "null"
      }];
      /***/
    },

    /***/
    "qXBG":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function qXBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router, snackBar) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.snackBar = snackBar;
          this.isAuthenticated = false;
          this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.user = [];
          this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(AuthService, [{
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
        }, {
          key: "getIsAuth",
          value: function getIsAuth() {
            return this.isAuthenticated;
          }
        }, {
          key: "getAuthStatusListener",
          value: function getAuthStatusListener() {
            return this.authStatusListener.asObservable();
          }
        }, {
          key: "createUser",
          value: function createUser(name, email, password) {
            var authData = {
              name: name,
              email: email,
              password: password
            };
            this.http.post("https://examenangularmongokouassi.herokuapp.com//api/user/signup", authData).subscribe(function (response) {
              console.log(response);
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this34 = this;

            var authData = {
              name: null,
              email: email,
              password: password
            };
            this.http.post("https://examenangularmongokouassi.herokuapp.com//api/user/login", authData).subscribe(function (response) {
              var token = response.token;
              _this34.token = token;
              var message = response.message;
              var action = 'Close';

              _this34.snackBar.open(message, action);

              if (token) {
                var expiresInDuration = response.expiresIn;

                _this34.setAuthTimer(expiresInDuration);

                _this34.isAuthenticated = true;

                _this34.authStatusListener.next(true);

                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate, email);

                _this34.saveAuthData(token, expirationDate);

                _this34.router.navigate(['/main']);
              }
            });
          }
        }, {
          key: "autoAuthUser",
          value: function autoAuthUser() {
            var authInformation = this.getAuthData();

            if (!authInformation) {
              return;
            }

            var now = new Date();
            var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
            console.log(authInformation, expiresIn);

            if (expiresIn > 0) {
              this.token = authInformation.token;
              this.isAuthenticated = true;
              this.setAuthTimer(expiresIn / 1000);
              this.authStatusListener.next(true);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = null;
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
            clearTimeout(this.tokenTimer);
            this.clearAuthData();
            this.router.navigate(['/login']);
          }
        }, {
          key: "setAuthTimer",
          value: function setAuthTimer(duration) {
            var _this35 = this;

            console.log("setting timer " + duration);
            this.tokenTimer = setTimeout(function () {
              _this35.logout();
            }, duration * 1000);
          }
        }, {
          key: "saveAuthData",
          value: function saveAuthData(token, expirationDate) {
            localStorage.setItem("token", token);
            localStorage.setItem("expiration", expirationDate.toISOString());
          }
        }, {
          key: "clearAuthData",
          value: function clearAuthData() {
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
          }
        }, {
          key: "getAuthData",
          value: function getAuthData() {
            var token = localStorage.getItem("token");
            var expirationDate = localStorage.getItem("expiration");

            if (!token || !expirationDate) {
              return;
            }

            return {
              token: token,
              expirationDate: new Date(expirationDate)
            };
          }
        }, {
          key: "getUserDatas",
          value: function getUserDatas(id) {
            return this.http.get('https://examenangularmongokouassi.herokuapp.com//api/user/' + id);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this36 = this;

            this.http.get('https://examenangularmongokouassi.herokuapp.com//api/user/getUserData').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (userData) {
              return userData.users.map(function (user) {
                return {
                  name: user.name,
                  email: user.email,
                  password: user.password,
                  id: user._id
                };
              });
            })).subscribe(function (transformedSuppliers) {
              _this36.user = transformedSuppliers;

              _this36.userUpdated.next(_toConsumableArray(_this36.user));
            });
          }
        }, {
          key: "getUserUpdateListener",
          value: function getUserUpdateListener() {
            return this.userUpdated.asObservable();
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, name, email, password) {
            var _this37 = this;

            var user = {
              id: id,
              name: name,
              email: email,
              password: password
            };
            this.http.put('https://examenangularmongokouassi.herokuapp.com//api/user/' + id, user).subscribe(function (response) {
              var updatedUser = _toConsumableArray(_this37.user);

              var oldUserIndex = updatedUser.findIndex(function (s) {
                return s.id === user.id;
              });
              updatedUser[oldUserIndex] = user;

              _this37.userUpdated.next(_toConsumableArray(_this37.user));

              _this37.router.navigate(["/settings/APharmasistAccounts"]);
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(userId) {
            var _this38 = this;

            this.http["delete"]('https://examenangularmongokouassi.herokuapp.com//api/user/' + userId).subscribe(function () {
              var updatedUser = _this38.user.filter(function (user) {
                return user.id !== userId;
              });

              _this38.user = updatedUser;

              _this38.userUpdated.next(_toConsumableArray(_this38.user));
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "qzwa":
    /*!**********************************************************************************************!*\
      !*** ./src/app/mainwindow/assignment/assignment-inventory/assignment-inventory.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: AssignmentInventoryComponent */

    /***/
    function qzwa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentInventoryComponent", function () {
        return AssignmentInventoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assignment_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assignment-inventory.component.html */
      "reVl");
      /* harmony import */


      var _assignment_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assignment-inventory.component.css */
      "EQ6z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssignmentInventoryComponent = /*#__PURE__*/function () {
        function AssignmentInventoryComponent() {
          _classCallCheck(this, AssignmentInventoryComponent);
        }

        _createClass(AssignmentInventoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AssignmentInventoryComponent;
      }();

      AssignmentInventoryComponent.ctorParameters = function () {
        return [];
      };

      AssignmentInventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assignment-inventory',
        template: _raw_loader_assignment_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assignment_inventory_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssignmentInventoryComponent);
      /***/
    },

    /***/
    "reVl":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/assignment/assignment-inventory/assignment-inventory.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function reVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 5%; height: 900px;\">\n    <section class=\"section columns\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n\n            <div class=\"tabs is-toggle is-fullwidth\">\n                <ul>\n                    <li>\n                        <a routerLink=\"/assignments/\">\n\n                            <span>Assignment Form</span>\n                        </a>\n                    </li>\n                    <li class=\"is-active\">\n                        <a routerLink=\"/assignments/create\">\n\n                            <span>Assignment List</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/assignmentsr/create\">\n\n                            <span>Assignment rendu List</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section class=\"section columns\" style=\"margin-top: -6%;\">\n        <div class=\"column is-full-desktop is-full-mobile\">\n            <app-search-assignment></app-search-assignment>\n        </div>\n    </section>\n\n    <section class=\"panel\" style=\"margin: 2%;margin-top: -3%;\">\n        <p class=\"panel-heading\" style=\"background-color:hsl(0, 0%, 88%) ;color:hsl(0, 0%, 21%)\">\n            Assignments\n        </p>\n        <div class=\"panel-block \">\n            <div style=\"height: 590px; width: 100%;\">\n\n                <app-assignment-inventory-items></app-assignment-inventory-items>\n            </div>\n        </div>\n        <div class=\"panel-block\">\n\n        </div>\n    </section>\n</div>";
      /***/
    },

    /***/
    "roHA":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory-items/assignmentr-inventory-items.component.css ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function roHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* KEYFRAMES */\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to{\n    transform: rotate(359deg);\n  }\n}\n\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@keyframes spin3D {\n  from {\n    transform: rotate3d(.5,.5,.5, 360deg);\n  }\n  to{\n    transform: rotate3d(0deg);\n  }\n}\n\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n\n/* GRID STYLING */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #37474f;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n/* SPINNING CIRCLE */\n\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #ffab91aa;\n  border-radius: 50%;\n}\n\n/* ALTERNATING ORBITS */\n\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: rgb(63,249,220);\n  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);\n  -webkit-animation: spin .8s linear 0s infinite;\n          animation: spin .8s linear 0s infinite;\n}\n\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: #37474f;\n  border-radius: 50%;\n}\n\n/* X-ROTATING BOXES */\n\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(63,249,220);\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color:white;\n}\n\n/* PULSE BUBBLES */\n\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.pulse-bubble-1 {\n    -webkit-animation: pulse .4s ease 0s infinite alternate;\n            animation: pulse .4s ease 0s infinite alternate;\n}\n\n.pulse-bubble-2 {\n    -webkit-animation: pulse .4s ease .2s infinite alternate;\n            animation: pulse .4s ease .2s infinite alternate;\n}\n\n.pulse-bubble-3 {\n    -webkit-animation: pulse .4s ease .4s infinite alternate;\n            animation: pulse .4s ease .4s infinite alternate;\n}\n\n/* SOLAR SYSTEM */\n\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.orbit {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #ffffffa5;\n\tborder-radius: 50%;\n}\n\n.earth-orbit {\n\twidth: 165px;\n\theight: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n\n.venus-orbit {\n\twidth: 120px;\n\theight: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n\n.mercury-orbit {\n\twidth: 90px;\n\theight: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n\n.planet {\n\tposition: absolute;\n\ttop: -5px;\n  width: 10px;\n  height: 10px;\n\tborder-radius: 50%;\n  background-color: #3ff9dc;\n}\n\n.sun {\n\twidth: 35px;\n\theight: 35px;\n\tborder-radius: 50%;\n\tbackground-color: #ffab91;\n}\n\n.leo {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n}\n\n.blue-orbit {\n\twidth: 165px;\n\theight: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear .2s infinite;\n}\n\n.green-orbit {\n\twidth: 120px;\n\theight: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n\n.red-orbit {\n\twidth: 90px;\n\theight: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n\n.white-orbit {\n\twidth: 60px;\n\theight: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg)\n}\n\n.w2 {\n  transform: rotate3D(1, 2, .5, 90deg)\n}\n\n.w3 {\n  transform: rotate3D(.5, 1, 2, 90deg)\n}\n\n.loadCenter{\n\n  margin-left: 150%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnRyLWludmVudG9yeS1pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQWhCQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG9GQUFvRjtFQUNwRixpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsMEZBQTBGO0VBQzFGLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0ZBQW9GO0VBQ3BGLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsMkVBQW1FO1VBQW5FLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksdURBQStDO1lBQS9DLCtDQUErQztBQUNuRDs7QUFDQTtJQUNJLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBQ0E7SUFDSSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0FBQ3BEOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtFQUNaLDhDQUE4QztBQUNoRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0VBQ1osK0NBQStDO0FBQ2pEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7RUFDWCw2Q0FBNkM7QUFDL0M7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztFQUNSLFdBQVc7RUFDWCxZQUFZO0NBQ2Isa0JBQWtCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtFQUNaLDJCQUEyQjtFQUMzQixnREFBZ0Q7QUFDbEQ7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtFQUNaLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtFQUNYLHlCQUF5QjtFQUN6QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFzc2lnbm1lbnRyLWludmVudG9yeS1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogS0VZRlJBTUVTICovXG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluM0Qge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC41LC41LC41LCAzNjBkZWcpO1xuICB9XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb25maWd1cmUtY2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS14Y2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IC4yNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gIH1cbn1cblxuLyogR1JJRCBTVFlMSU5HICovXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5uZXItYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xuXG4ubGVvLWJvcmRlci0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDEuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGZhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGVvLWJvcmRlci0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDE3MSwgMTQ1LDAuMSkgMzMlLCByZ2JhKDI1NSwgMTcxLCAxNDUsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDIuMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiOTFhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBBTFRFUk5BVElORyBPUkJJVFMgKi9cblxuLmNpcmNsZS1ib3JkZXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2MywyNDksMjIwLDAuMSkgMzMlLCByZ2JhKDYzLDI0OSwyMjAsMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4uY2lyY2xlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFgtUk9UQVRJTkcgQk9YRVMgKi9cblxuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjMsMjQ5LDIyMCk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLWNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtYm9yZGVyLTIge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbGVmdDogLTExNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDYzLDI0OSwyMjApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLXhjbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4vKiBQVUxTRSBCVUJCTEVTICovXG5cbi5wdWxzZS1jb250YWluZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnB1bHNlLWJ1YmJsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnB1bHNlLWJ1YmJsZS0xIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5wdWxzZS1idWJibGUtMiB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnB1bHNlLWJ1YmJsZS0zIHtcbiAgICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFNPTEFSIFNZU1RFTSAqL1xuXG4uc29sYXItc3lzdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yYml0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE1O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aC1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnZlbnVzLW9yYml0IHtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA3LjRzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLm1lcmN1cnktb3JiaXQge1xuXHR3aWR0aDogOTBweDtcblx0aGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5wbGFuZXQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTVweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4uc3VuIHtcblx0d2lkdGg6IDM1cHg7XG5cdGhlaWdodDogMzVweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xufVxuXG4ubGVvIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmx1ZS1vcmJpdCB7XG5cdHdpZHRoOiAxNjVweDtcblx0aGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZGFmZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XG59XG5cbi5ncmVlbi1vcmJpdCB7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnJlZC1vcmJpdCB7XG5cdHdpZHRoOiA5MHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhOTFhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53aGl0ZS1vcmJpdCB7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLncxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAxLCAxLCA5MGRlZylcbn1cblxuLncyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAyLCAuNSwgOTBkZWcpXG59XG5cbi53MyB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoLjUsIDEsIDIsIDkwZGVnKVxufVxuXG4ubG9hZENlbnRlcntcblxuICBtYXJnaW4tbGVmdDogMTUwJTtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "s6m0":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/mainwindow/x-configuration-settings-admin/add-new-users/add-user/add-user.component.css ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s6m0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-error{\n  color:  red;\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImFkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZXJyb3J7XG4gIGNvbG9yOiAgcmVkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "sBZ+":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/matiere/matiere-inventory/matiere-inventory-items/matiere-inventory-items.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"panel\">\n\n    <div class=\"panel-block \">\n        <div style=\"height: 50px; width: 100%;\">\n\n            <div class=\"field has-addons is-full\">\n                <div class=\"control is-full\" style=\"width: 100%;\">\n                    <input class=\"input\" type=\"text\" placeholder=\"Find matiere by name\" [(ngModel)]=\"searchTerm\">\n                </div>\n                <div class=\"control\">\n                    <a class=\"button is-primary\">\n            Search\n          </a>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n    <div class=\"panel-block\">\n\n    </div>\n</section>\n\n<div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n    <table class=\"table is-full menu-list\">\n        <tbody>\n\n            <div class=\"spinner-box loadCenter is-center\" *ngIf=\"isLoading\">\n                <div class=\"configure-border-1\">\n                    <div class=\"configure-core\"></div>\n                </div>\n                <div class=\"configure-border-2\">\n                    <div class=\"configure-core\"></div>\n                </div>\n            </div>\n\n            <div *ngIf=\"!isLoading\">\n                <tr *ngFor=\"let matiere of matieres | matiereFilter: searchTerm;let i = index\">\n                    <div class=\"div columns  is-full btn r\" style=\"width: 135%;\">\n                        <div class=\"div column\">\n                            <table class=\"table is-full\" style=\"width: 100%;\">\n                                <thead style=\"font-weight: bold;\">\n                                    <td>NOM MATIERE</td>\n                                    <td> IMAGE DE LA MATIERE</td>\n                                    <td>NOMPROF</td>\n\n\n                                    <td></td>\n\n                                </thead>\n\n                                <tbody>\n                                    <td style=\"width: 2%;\">{{ matiere.nommat }}</td>\n                                    <td style=\"width: 2%;\">{{matiere.nomprof }} </td>\n                                    <td style=\"width: 2%;\"><img [src]=\"matiere.avatar1\"> </td>\n\n                                    <td class=\"level-right\" *ngIf=\"userIsAuthenticated\" style=\"width: 20%;margin-right: 50%;\">\n                                        <a class=\"button is-small is-primary\" style=\"font-weight: bold;margin-right: 1%;\" [routerLink]=\"['/editm',matiere.id]\">Edit </a>\n                                        <button class=\"button is-small is-danger\" style=\"font-weight: bold;\" (click)=\"onDelete(matiere.id)\">Delete</button>\n                                    </td>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div><br>\n                </tr>\n            </div>\n\n\n\n\n\n        </tbody>\n    </table>\n</div>\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>";
      /***/
    },

    /***/
    "sNVW":
    /*!*****************************************************!*\
      !*** ./src/app/mainwindow/mainwindow.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function sNVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh2 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-self: center;\r\n}\r\n\r\n.list-container {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    margin-top: 2em;\r\n}\r\n\r\n.column-container {\r\n    width: 400px;\r\n    max-width: 100%;\r\n    margin: 0 25px 25px 0;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    background-color: RGBA(255, 255, 255, 0.05);\r\n}\r\n\r\nmat-card {\r\n    margin: 1em;\r\n    cursor: pointer;\r\n}\r\n\r\n.list {\r\n    border: RGBA(46, 49, 49, .7) solid 1px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.list-item {\r\n    margin: 10px;\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(133, 32, 32, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(202, 28, 28, 0.2), 0 8px 10px 1px rgba(228, 200, 200, 0.14), 0 3px 14px 2px rgba(235, 228, 228, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: dodgerblue;\r\n}\r\n\r\n.example-header-image {\r\n    background-image: [src]=\"assignment.avatar1\";\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW53aW5kb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFJQUFxSTtBQUN6STs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJtYWlud2luZG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5jb2x1bW4tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0JBKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgYm9yZGVyOiBSR0JBKDQ2LCA0OSwgNDksIC43KSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgxMzMsIDMyLCAzMiwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDIwMiwgMjgsIDI4LCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDIyOCwgMjAwLCAyMDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDIzNSwgMjI4LCAyMjgsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBbc3JjXT1cImFzc2lnbm1lbnQuYXZhdGFyMVwiO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "udz6":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/add-professeur/add-professeur-elements/add-professeur-elements.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: AddProfesseurElementsComponent */

    /***/
    function udz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProfesseurElementsComponent", function () {
        return AddProfesseurElementsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_professeur_elements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-professeur-elements.component.html */
      "d9xs");
      /* harmony import */


      var _add_professeur_elements_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-professeur-elements.component.css */
      "Rn/Y");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../professeur/professeur-interaction.service */
      "F1sD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _mime_type_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mime-type.validator */
      "xRjH");

      var AddProfesseurElementsComponent = /*#__PURE__*/function () {
        function AddProfesseurElementsComponent(professeurInteractionService, authService, route, snackBar) {
          _classCallCheck(this, AddProfesseurElementsComponent);

          this.professeurInteractionService = professeurInteractionService;
          this.authService = authService;
          this.route = route;
          this.snackBar = snackBar;
          this.isLoading = false;
          this.professeurs = [];
          this.users = [];
          this.mode = "create";
        }

        _createClass(AddProfesseurElementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              'nomprof': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
              }),
              'avatar1': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_9__["mimeType"]]
              })
            });
            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('professeurId')) {
                _this39.mode = "edit";
                _this39.professeurId = paramMap.get('professeurId');
                _this39.isLoading = true;

                _this39.professeurInteractionService.getProfesseurs(_this39.professeurId).subscribe(function (professeurData) {
                  _this39.isLoading = false;
                  _this39.professeur = {
                    id: professeurData._id,
                    nomprof: professeurData.nomprof,
                    avatar1: professeurData.avatar1
                  };

                  _this39.form.setValue({
                    'nomprof': _this39.professeur.nomprof,
                    'avatar1': _this39.professeur.avatar1
                  });
                });
              } else {
                _this39.mode = "create";
                _this39.professeurId = null;
              }
            });
          }
        }, {
          key: "registerFormControl",
          get: function get() {
            return this.form.controls;
          } // Image Preview

        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this40 = this;

            var file = event.target.files[0];
            this.form.patchValue({
              avatar1: file
            });
            this.form.get('avatar1').updateValueAndValidity(); // File Preview

            var reader = new FileReader();

            reader.onload = function () {
              _this40.preview = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "onAddProfesseur",
          value: function onAddProfesseur() {
            if (this.form.invalid) {
              return;
            }

            if (this.mode === "create") {
              this.professeurInteractionService.addProfesseur(this.form.value.nomprof, this.form.value.avatar1);
              this.snackBar.open("Professeur Added Successfully", "Close");
            } else {
              this.professeurInteractionService.updateProfesseur(this.professeurId, this.form.value.nommat, this.form.value.nomprof, this.form.value.avatar1);
              this.snackBar.open("Professeur Edited!! ", "Close");
            }

            this.form.reset();
          }
        }]);

        return AddProfesseurElementsComponent;
      }();

      AddProfesseurElementsComponent.ctorParameters = function () {
        return [{
          type: _professeur_professeur_interaction_service__WEBPACK_IMPORTED_MODULE_4__["ProfesseurInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      AddProfesseurElementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-add-professeur-elements',
        template: _raw_loader_add_professeur_elements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_professeur_elements_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddProfesseurElementsComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_add_new_users_add_new_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component */
      "P/vc");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/manage-account/manage-account.component */
      "5gTv");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "P+IX");
      /* harmony import */


      var _mainwindow_matiere_matiere_inventory_matiere_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mainwindow/matiere/matiere-inventory/matiere-inventory.component */
      "dEJk");
      /* harmony import */


      var _mainwindow_professeur_professeur_inventory_professeur_inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mainwindow/professeur/professeur-inventory/professeur-inventory.component */
      "3C2S");
      /* harmony import */


      var _mainwindow_assignment_assignment_inventory_assignment_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mainwindow/assignment/assignment-inventory/assignment-inventory.component */
      "qzwa");
      /* harmony import */


      var _mainwindow_assignmentr_assignmentr_inventory_assignmentr_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component */
      "2IFU");
      /* harmony import */


      var _mainwindow_matiere_add_matiere_add_matiere_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mainwindow/matiere/add-matiere/add-matiere.component */
      "Cmfj");
      /* harmony import */


      var _mainwindow_professeur_add_professeur_add_professeur_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mainwindow/professeur/add-professeur/add-professeur.component */
      "w19G");
      /* harmony import */


      var _mainwindow_assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mainwindow/assignment/add-assignment/add-assignment.component */
      "XuSb");
      /* harmony import */


      var _mainwindow_assignmentr_add_assignmentr_add_assignmentr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./mainwindow/assignmentr/add-assignmentr/add-assignmentr.component */
      "YRIP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "bsvf");
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      "SBxm");
      /* harmony import */


      var _mainwindow_x_configuration_settings_admin_x_configuration_settings_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component */
      "0K21");

      var routes = [{
        path: 'matiere',
        component: _mainwindow_matiere_add_matiere_add_matiere_component__WEBPACK_IMPORTED_MODULE_8__["AddMatiereComponent"]
      }, {
        path: 'matiere/create',
        component: _mainwindow_matiere_matiere_inventory_matiere_inventory_component__WEBPACK_IMPORTED_MODULE_4__["MatiereInventoryComponent"]
      }, {
        path: 'editm/:matiereId',
        component: _mainwindow_matiere_add_matiere_add_matiere_component__WEBPACK_IMPORTED_MODULE_8__["AddMatiereComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'professeur',
        component: _mainwindow_professeur_add_professeur_add_professeur_component__WEBPACK_IMPORTED_MODULE_9__["AddProfesseurComponent"]
      }, {
        path: 'professeur/create',
        component: _mainwindow_professeur_professeur_inventory_professeur_inventory_component__WEBPACK_IMPORTED_MODULE_5__["ProfesseurInventoryComponent"]
      }, {
        path: 'editp/:professeurId',
        component: _mainwindow_professeur_add_professeur_add_professeur_component__WEBPACK_IMPORTED_MODULE_9__["AddProfesseurComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'assignments',
        component: _mainwindow_assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_10__["AddAssignmentComponent"]
      }, {
        path: 'assignments/create',
        component: _mainwindow_assignment_assignment_inventory_assignment_inventory_component__WEBPACK_IMPORTED_MODULE_6__["AssignmentInventoryComponent"]
      }, {
        path: 'edita/:assignmentId',
        component: _mainwindow_assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_10__["AddAssignmentComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'assignmentsr',
        component: _mainwindow_assignmentr_add_assignmentr_add_assignmentr_component__WEBPACK_IMPORTED_MODULE_11__["AddAssignmentComponentr"]
      }, {
        path: 'assignmentsr/create',
        component: _mainwindow_assignmentr_assignmentr_inventory_assignmentr_inventory_component__WEBPACK_IMPORTED_MODULE_7__["AssignmentrInventoryComponent"]
      }, {
        path: 'editar/:assignmentId',
        component: _mainwindow_assignmentr_add_assignmentr_add_assignmentr_component__WEBPACK_IMPORTED_MODULE_11__["AddAssignmentComponentr"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
      }, {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
      }, {
        path: 'settings',
        component: _mainwindow_x_configuration_settings_admin_x_configuration_settings_admin_component__WEBPACK_IMPORTED_MODULE_16__["XConfigurationSettingsAdminComponent"]
      }, {
        path: 'settings/Accounts',
        component: _mainwindow_x_configuration_settings_admin_manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_2__["ManageAccountComponent"]
      }, {
        path: 'updat/:userId',
        component: _mainwindow_x_configuration_settings_admin_add_new_users_add_new_users_component__WEBPACK_IMPORTED_MODULE_1__["AddNewUsersComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "w19G":
    /*!**********************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/add-professeur/add-professeur.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddProfesseurComponent */

    /***/
    function w19G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProfesseurComponent", function () {
        return AddProfesseurComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_professeur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-professeur.component.html */
      "RrQS");
      /* harmony import */


      var _add_professeur_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-professeur.component.css */
      "PeBm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddProfesseurComponent = /*#__PURE__*/function () {
        function AddProfesseurComponent() {
          _classCallCheck(this, AddProfesseurComponent);
        }

        _createClass(AddProfesseurComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddProfesseurComponent;
      }();

      AddProfesseurComponent.ctorParameters = function () {
        return [];
      };

      AddProfesseurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-professeur',
        template: _raw_loader_add_professeur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_professeur_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddProfesseurComponent);
      /***/
    },

    /***/
    "wmvV":
    /*!************************************************!*\
      !*** ./src/app/auth/login/login.component.css ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function wmvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html,body {\n  font-family: 'Questrial', sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  background-color: #041221;\n}\n.hero.is-success {\n  background: #041221;\n}\n.hero .nav, .hero.is-success .nav {\n  box-shadow: none;\n}\n.box {\n  margin-top: 5rem;\n}\n.avatar {\n  margin-top: -70px;\n  padding-bottom: 20px;\n}\n.avatar img {\n  padding: 5px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);\n}\ninput {\n  font-weight: 300;\n}\np {\n  font-weight: 700;\n}\np.subtitle {\n  padding-top: 1rem;\n}\n.login-hr{\n  border-bottom: 1px solid white;\n}\n.has-text-black{\n  color: black;\n}\n.field{\n  padding-bottom: 10px;\n}\n.fa{\n  margin-left: 5px;\n}\nbody {\nbackground: #041221;\n}\n/* Card start*/\n.card {overflow:hidden}\n.card.large {\nheight: 600px;\n-webkit-backface-visibility: hidden;\nbackface-visibility: initial;\nborder-radius: 5px;\n}\n/* Card end */\n.media-content {\noverflow: hidden;\n}\n.title.no-padding {\nmargin-bottom: 0 !important;\n}\n#flow span {\ndisplay: block;\nwidth: 200vw;\nheight: 200vw;\nposition: absolute;\ntop: -180vw;\nleft: -50vw;\nborder-radius: 90vw;\nopacity: 0.6;\n}\n.flow-1 {\nbackground: #3281ff;\n-webkit-animation: rotating 20s linear infinite;\nanimation: rotating 20s linear infinite;\n}\n.flow-2 {\nbackground: #f442ee;\nposition: absolute;\n-webkit-animation: rotating 15s linear infinite;\nanimation: rotating 15s linear infinite;\n}\n.flow-3 {\nbackground: #42eef4;\nposition: absolute;\n-webkit-animation: rotating 7s linear infinite;\nanimation: rotating 7s linear infinite;\n}\n@-webkit-keyframes rotating {\nfrom {\ntransform: rotate(0deg);\n}\nto {\ntransform: rotate(360deg);\n}\n}\n@keyframes rotating {\nfrom {\ntransform: rotate(0deg);\n}\nto {\ntransform: rotate(360deg);\n}\n}\n.rotating {\n-webkit-animation: rotating 2s linear infinite;\nanimation: rotating 2s linear infinite;\n}\n.footer{\nbackground-color: #222831;\ncolor: lemonchiffon;\n}\n.footer p, strong\n{color: lemonchiffon}\n.footer a:hover\n{color: crimson;}\n.fa\n{color: lemonchiffon;\n    margin: 10px}\n::-moz-selection\n{background-color:#DEF4FF}\n::selection\n{background-color:#DEF4FF}\n.login-error{\n  color:  red;\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBRWxCLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUU7QUFDRixtQkFBbUI7QUFDbkI7QUFDQSxjQUFjO0FBQ2QsT0FBTyxlQUFlO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiLG1DQUFtQztBQUNuQyw0QkFBNEI7QUFDNUIsa0JBQWtCO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLGNBQWM7QUFDZCxZQUFZO0FBQ1osYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQiwrQ0FBK0M7QUFJL0MsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLCtDQUErQztBQUkvQyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsOENBQThDO0FBSTlDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFLQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUtBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUtBLHVCQUF1QjtBQUN2QjtBQUNBO0FBS0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUk5QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtDQUNDLGNBQWMsQ0FBQztBQUNoQjtDQUNDLG1CQUFtQjtJQUNoQixZQUFZO0FBRWhCO0NBQ0Msd0JBQXdCO0FBRHpCO0NBQ0Msd0JBQXdCO0FBRXpCO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDEyMjE7XG59XG4uaGVyby5pcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogIzA0MTIyMTtcbn1cbi5oZXJvIC5uYXYsIC5oZXJvLmlzLXN1Y2Nlc3MgLm5hdiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5ib3gge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuLmF2YXRhciB7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5hdmF0YXIgaW1nIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTAsMTAsMTAsLjEpLCAwIDAgMCAxcHggcmdiYSgxMCwxMCwxMCwuMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDEwLDEwLDEwLC4xKSwgMCAwIDAgMXB4IHJnYmEoMTAsMTAsMTAsLjEpO1xufVxuaW5wdXQge1xuICBmb250LXdlaWdodDogMzAwO1xufVxucCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5wLnN1YnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5sb2dpbi1ocntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaGFzLXRleHQtYmxhY2t7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpZWxke1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmZhe1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4gIGJvZHkge1xuYmFja2dyb3VuZDogIzA0MTIyMTtcbn1cbi8qIENhcmQgc3RhcnQqL1xuLmNhcmQge292ZXJmbG93OmhpZGRlbn1cbi5jYXJkLmxhcmdlIHtcbmhlaWdodDogNjAwcHg7XG4td2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbmJhY2tmYWNlLXZpc2liaWxpdHk6IGluaXRpYWw7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4vKiBDYXJkIGVuZCAqL1xuLm1lZGlhLWNvbnRlbnQge1xub3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50aXRsZS5uby1wYWRkaW5nIHtcbm1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiNmbG93IHNwYW4ge1xuZGlzcGxheTogYmxvY2s7XG53aWR0aDogMjAwdnc7XG5oZWlnaHQ6IDIwMHZ3O1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAtMTgwdnc7XG5sZWZ0OiAtNTB2dztcbmJvcmRlci1yYWRpdXM6IDkwdnc7XG5vcGFjaXR5OiAwLjY7XG59XG4uZmxvdy0xIHtcbmJhY2tncm91bmQ6ICMzMjgxZmY7XG4td2Via2l0LWFuaW1hdGlvbjogcm90YXRpbmcgMjBzIGxpbmVhciBpbmZpbml0ZTtcbi1tb3otYW5pbWF0aW9uOiByb3RhdGluZyAyMHMgbGluZWFyIGluZmluaXRlO1xuLW1zLWFuaW1hdGlvbjogcm90YXRpbmcgMjBzIGxpbmVhciBpbmZpbml0ZTtcbi1vLWFuaW1hdGlvbjogcm90YXRpbmcgMjBzIGxpbmVhciBpbmZpbml0ZTtcbmFuaW1hdGlvbjogcm90YXRpbmcgMjBzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5mbG93LTIge1xuYmFja2dyb3VuZDogI2Y0NDJlZTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbi13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAxNXMgbGluZWFyIGluZmluaXRlO1xuLW1vei1hbmltYXRpb246IHJvdGF0aW5nIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4tbXMtYW5pbWF0aW9uOiByb3RhdGluZyAxNXMgbGluZWFyIGluZmluaXRlO1xuLW8tYW5pbWF0aW9uOiByb3RhdGluZyAxNXMgbGluZWFyIGluZmluaXRlO1xuYW5pbWF0aW9uOiByb3RhdGluZyAxNXMgbGluZWFyIGluZmluaXRlO1xufVxuLmZsb3ctMyB7XG5iYWNrZ3JvdW5kOiAjNDJlZWY0O1xucG9zaXRpb246IGFic29sdXRlO1xuLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW5nIDdzIGxpbmVhciBpbmZpbml0ZTtcbi1tb3otYW5pbWF0aW9uOiByb3RhdGluZyA3cyBsaW5lYXIgaW5maW5pdGU7XG4tbXMtYW5pbWF0aW9uOiByb3RhdGluZyA3cyBsaW5lYXIgaW5maW5pdGU7XG4tby1hbmltYXRpb246IHJvdGF0aW5nIDdzIGxpbmVhciBpbmZpbml0ZTtcbmFuaW1hdGlvbjogcm90YXRpbmcgN3MgbGluZWFyIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW5nIHtcbmZyb20ge1xuLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4tby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbnRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxudG8ge1xuLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4tbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4tby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xudHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cbn1cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuZnJvbSB7XG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4tbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbi1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xudHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG50byB7XG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG50cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxufVxuLnJvdGF0aW5nIHtcbi13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4tbW96LWFuaW1hdGlvbjogcm90YXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xuLW1zLWFuaW1hdGlvbjogcm90YXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xuLW8tYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG5hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5mb290ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xuY29sb3I6IGxlbW9uY2hpZmZvbjtcbn1cbi5mb290ZXIgcCwgc3Ryb25nXG57Y29sb3I6IGxlbW9uY2hpZmZvbn1cbi5mb290ZXIgYTpob3Zlclxue2NvbG9yOiBjcmltc29uO31cbi5mYVxue2NvbG9yOiBsZW1vbmNoaWZmb247XG4gICAgbWFyZ2luOiAxMHB4fVxuXG46OnNlbGVjdGlvblxue2JhY2tncm91bmQtY29sb3I6I0RFRjRGRn1cblxuLmxvZ2luLWVycm9ye1xuICBjb2xvcjogIHJlZDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "xRjH":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/mainwindow/professeur/add-professeur/add-professeur-elements/mime-type.validator.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: mimeType */

    /***/
    function xRjH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mimeType", function () {
        return mimeType;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mimeType = function mimeType(control) {
        if (typeof control.value === 'string') {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }

        var file = control.value;
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }

            switch (header) {
              case "89504e47":
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true;
                break;

              default:
                isValid = false;
                break;
            }

            if (isValid) {
              observer.next(null);
            } else {
              observer.next({
                invalidMimeType: true
              });
            }

            observer.complete();
          });
          fileReader.readAsArrayBuffer(file);
        });
        return frObs;
      };
      /***/

    },

    /***/
    "yUZ3":
    /*!**************************************************************************************!*\
      !*** ./src/app/mainwindow/assignmentr/add-assignmentr/add-assignmentr.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function yUZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXNzaWdubWVudHIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "z//Q":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainwindow/professeur/professeur-inventory/professeur-inventory-items/professeur-inventory-items.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"panel\">\n\n    <div class=\"panel-block \">\n        <div style=\"height: 50px; width: 100%;\">\n\n            <div class=\"field has-addons is-full\">\n                <div class=\"control is-full\" style=\"width: 100%;\">\n                    <input class=\"input\" type=\"text\" placeholder=\"Find Professeur by name\" [(ngModel)]=\"searchTerm\">\n                </div>\n                <div class=\"control\">\n                    <a class=\"button is-primary\">\n            Search\n          </a>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n    <div class=\"panel-block\">\n\n    </div>\n</section>\n\n<div style=\"overflow-y:auto ;overflow-x: hidden;height: 500px;\">\n    <table class=\"table is-full menu-list\">\n        <tbody>\n\n            <div class=\"spinner-box loadCenter is-center\" *ngIf=\"isLoading\">\n                <div class=\"configure-border-1\">\n                    <div class=\"configure-core\"></div>\n                </div>\n                <div class=\"configure-border-2\">\n                    <div class=\"configure-core\"></div>\n                </div>\n            </div>\n\n            <div *ngIf=\"!isLoading\">\n                <tr *ngFor=\"let professeur of professeurs | professeurFilter: searchTerm\">\n                    <div class=\"div columns  is-full btn r\" style=\"width: 135%;\">\n                        <div class=\"div column\">\n                            <table class=\"table is-full\" style=\"width: 100%;\">\n                                <thead style=\"font-weight: bold;\">\n\n                                    <td>NOMPROF </td>\n                                    <td>IMAGE</td>\n\n                                    <td></td>\n\n                                </thead>\n\n                                <tbody>\n\n                                    <td style=\"width: 1%;\">{{professeur.nomprof }} </td>\n                                    <td style=\"width: 1%;\"><img [src]=\"professeur.avatar1\"> </td>\n\n\n                                    <td class=\"level-right\" *ngIf=\"userIsAuthenticated\" style=\"width: 20%;margin-right: 100%;\">\n                                        <a class=\"button is-small is-primary\" style=\"font-weight: bold;margin-right: 1%;\" [routerLink]=\"['/editp',professeur.id]\">Edit </a>\n                                        <button class=\"button is-small is-danger\" style=\"font-weight: bold;\" (click)=\"onDelete(professeur.id)\">Delete</button>\n                                    </td>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div><br>\n                </tr>\n            </div>\n\n\n\n\n\n        </tbody>\n    </table>\n</div>\n<style>\n    .menu-list {\n        border-radius: 2px;\n        width: 220%;\n        display: block;\n        padding: 10px;\n    }\n    \n    .btn {\n        width: 100%;\n        color: hsl(0, 0%, 21%);\n        background-color: hsl(0, 0%, 88%);\n        border-radius: 3px;\n    }\n    \n    .newclass :hover {\n        background-color: hsl(0, 0%, 21%);\n        color: hsl(0, 0%, 88%);\n    }\n</style>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zbkz":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/mainwindow/matiere/matiere-inventory/matiere-inventory-items/matiere-inventory-items.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: MatiereInventoryItemsComponent */

    /***/
    function zbkz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatiereInventoryItemsComponent", function () {
        return MatiereInventoryItemsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_matiere_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./matiere-inventory-items.component.html */
      "sBZ+");
      /* harmony import */


      var _matiere_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./matiere-inventory-items.component.css */
      "Q3aq");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../matiere/matiere-interaction.service */
      "Wf2d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");

      var MatiereInventoryItemsComponent = /*#__PURE__*/function () {
        function MatiereInventoryItemsComponent(matiereInteractionService, authService, snackBar) {
          _classCallCheck(this, MatiereInventoryItemsComponent);

          this.matiereInteractionService = matiereInteractionService;
          this.authService = authService;
          this.snackBar = snackBar;
          this.matieres = [];
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(MatiereInventoryItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.isLoading = true;
            this.matiereInteractionService.getMatiere();
            this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener().subscribe(function (posts) {
              _this41.isLoading = false;
              _this41.matieres = posts;
            });
            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this41.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(matiereId) {
            this.matiereInteractionService.deleteMatiere(matiereId);
            this.snackBar.open("Matiere Deleted Successfully", "Close");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.matiereSubs.unsubscribe();
            this.authStatusSub.unsubscribe();
          }
        }]);

        return MatiereInventoryItemsComponent;
      }();

      MatiereInventoryItemsComponent.ctorParameters = function () {
        return [{
          type: _matiere_matiere_interaction_service__WEBPACK_IMPORTED_MODULE_4__["MatiereInteractionService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      };

      MatiereInventoryItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-matiere-inventory-items',
        template: _raw_loader_matiere_inventory_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_matiere_inventory_items_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MatiereInventoryItemsComponent);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zu2e":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zu2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\" style=\"background-color: #041221;max-width: none;margin-top: -1%;\">\n    <div id=\"flow\">\n        <span class=\"flow-1\"></span>\n        <span class=\"flow-2\"></span>\n        <span class=\"flow-3\"></span>\n    </div>\n    <div class=\"section\">\n\n        <section class=\"hero is-success is-fullheight\">\n            <div class=\"hero-body\">\n                <div class=\"container has-text-centered\" style=\"max-width: 1132px;\">\n                    <div class=\"column is-4 is-offset-4\">\n                        <h3 class=\"title \">Login</h3>\n                        <hr class=\"login-hr\">\n\n                        <div class=\"box\">\n                            <figure class=\"avatar\">\n                                <img src=\"https://placehold.it/128x128\">\n                            </figure>\n\n\n                            <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n                                <div class=\"field\">\n                                    <div class=\"control\">\n\n                                        <input name=\"email\" ngModel #emailInput=\"ngModel\" class=\"input is-medium\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\" required email>\n                                        <p class=\"login-error\" *ngIf=\"!emailInput.valid && emailInput.touched\">Please enter valid email</p>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"field\">\n                                    <div class=\"control\">\n\n                                        <input name=\"password\" ngModel #passwordInput=\"ngModel\" class=\"input is-medium\" type=\"password\" placeholder=\"Your Password\" required>\n                                        <p class=\"login-error\" *ngIf=\"!passwordInput.valid && passwordInput.touched\">Please enter valid password</p>\n\n                                    </div>\n                                </div>\n                                <div class=\"field\">\n                                    <label class=\"checkbox\">\n                              <input type=\"checkbox\">\n                              Remember me\n                            </label>\n                                </div>\n                                <button class=\"button is-block is-primary is-medium is-fullwidth\" type=\"submit\">Login <i class=\"fas fas-sign-in\" aria-hidden=\"true\"></i></button>\n                            </form>\n\n\n                        </div>\n                        <p class=\"has-text-grey\" style=\"color: #00d1b2;\">\n                            <a style=\"color: #00d1b2;\" routerLink=\"/signup\">Sign Up</a> &nbsp;·&nbsp;\n                            <a style=\"color: #00d1b2;\" routerLink=\"/\">Forgot Password</a> &nbsp;·&nbsp;\n                            <a style=\"color: #00d1b2;\" href=\"../\">Need Help?</a>\n                        </p><br><br><br>\n\n\n                    </div>\n                </div>\n            </div>\n        </section>\n\n    </div>\n</div>";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map