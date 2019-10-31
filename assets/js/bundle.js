/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var relaxApp = function relaxApp() {
  var song = document.querySelector('.app .app__player audio');
  var play = document.querySelector('.app .play');
  var outline = document.querySelector('.app .track-outline circle');
  var video = document.querySelector('.video video');
  var sounds = document.querySelectorAll('.app .app__sound .btn');
  var timeCountdown = document.querySelector('.app .app__countdown');
  var outlineLength = outline.getTotalLength();
  var timeSelect = document.querySelectorAll('.app .app__time .btn');
  var duration = 120;
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;
  sounds.forEach(function (sound) {
    sound.addEventListener('click', function () {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    });
  });
  play.addEventListener('click', function () {
    checkPlaying(song);
  });
  timeSelect.forEach(function (option) {
    option.addEventListener('click', function () {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
      song.pause();
      video.pause();
      song.play();
      video.play();
      duration = this.getAttribute('data-time');
      timeCountdown.textContent = "".concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);
    });
  });

  var checkPlaying = function checkPlaying(song) {
    if (song.paused) {
      song.play();
      video.play();
      play.src = './assets/images/pause.svg';
    } else {
      song.pause();
      video.pause();
      play.src = './assets/images/play.svg';
    }
  };

  song.ontimeupdate = function () {
    var currentTime = song.currentTime;
    var elapsedTime = duration - currentTime;
    var seconds = Math.floor(elapsedTime % 60);
    var minutes = Math.floor(elapsedTime / 60);
    var progress = outlineLength - currentTime / duration * outlineLength;
    outline.style.strokeDashoffset = progress;
    timeCountdown.textContent = "".concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);

    if (currentTime >= duration) {
      song.pause();
      video.pause();
      song.currentTime = 0;
      play.src = './assets/images/play.svg';
    }
  };
};

relaxApp();

/***/ })

/******/ });