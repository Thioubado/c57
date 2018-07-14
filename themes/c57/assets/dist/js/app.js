/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homepagemsg_js__ = __webpack_require__(2);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__homepagemsg_js__["a" /* default */])();

/*
 * Application
 */

/*
 $(document).tooltip({
 selector: "[data-toggle=tooltip]"
 })
 */

jQuery(document).ready(function ($) {

  /*
   * Auto hide navbar
   */
  var $header = $('.navbar-autohide'),
      scrolling = false,
      previousTop = 0,
      currentTop = 0,
      scrollDelta = 10,
      scrollOffset = 150;

  $(window).on('scroll', function () {
    if (!scrolling) {
      scrolling = true;

      if (!window.requestAnimationFrame) {
        setTimeout(autoHideHeader, 250);
      } else {
        requestAnimationFrame(autoHideHeader);
      }
    }
  });

  function autoHideHeader() {
    var currentTop = $(window).scrollTop();

    // Scrolling up
    if (previousTop - currentTop > scrollDelta) {
      $header.removeClass('is-hidden');
    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
      // Scrolling down
      $header.addClass('is-hidden');
    }

    previousTop = currentTop;
    scrolling = false;
  }
});

(function ($) {

  $('#maCase').html('<strong>Salut</strong> le Monde !');
  $('#MoviesFilter').on('change', 'input, select', function () {
    var $form = $(this).closest('form');
    $form.request();
  });
})(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding /opt/lampp/htdocs/w/c57/node_modules/node-sass/vendor/linux-x64-57/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - Windows 64-bit with Node.js 6.x\n  - Windows 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (/opt/lampp/htdocs/w/c57/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/opt/lampp/htdocs/w/c57/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/opt/lampp/htdocs/w/c57/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at runLoaders (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/opt/lampp/htdocs/w/c57/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModule.js:268:15)\n    at Compilation.buildModule (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/Compilation.js:142:10)\n    at moduleFactory.create (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/Compilation.js:429:9)\n    at /opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModuleFactory.js:251:4\n    at /opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModuleFactory.js:93:13\n    at /opt/lampp/htdocs/w/c57/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/opt/lampp/htdocs/w/c57/node_modules/tapable/lib/Tapable.js:272:13)\n    at onDoneResolving (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModuleFactory.js:68:11)\n    at onDoneResolving (/opt/lampp/htdocs/w/c57/node_modules/webpack/lib/NormalModuleFactory.js:197:6)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ajoutParImport;
function ajoutParImport() {
            $('#testlihp').html('Ok posé par un fichier importé en jQ.');
            $('#testlihp').css('border', '1px solid red').css('border-radius', '4px').css('padding', '5px 10px').css('background-color', '#fff');
            $('#testlihp').append(' <span style="font-size:.8em; font-style:italic; color:red">(Et chargé par webpack.)</span>');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);