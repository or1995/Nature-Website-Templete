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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cycleImages = exports.cycleImages = function cycleImages(i) {
    var iNode = document.querySelectorAll('.board__right__carousel-img');

    //const imgArray = Array.from(iNode);

    iNode.forEach(function (el) {
        if (i === parseInt(el.dataset.num, 10)) {
            el.style.zIndex = 10;
            el.style.opacity = 1;
        } else {
            el.style.zIndex = 9;
            el.style.opacity = 0;
        }
    });
};

/* obsolete
export const albumCycle = (i) => {
    const images = document.querySelectorAll('.album__left-img');

    images.forEach(el => {
        if(i === parseInt(el.dataset.id, 10)) {
            el.style.transform = "translateY(-3.5rem)";
        } else {
            el.style.transform = "translateY(0)";
        }
    });

}*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var i = 0;

var ElList = document.querySelectorAll('.carousel__body__el');
var numOfEl = ElList.length - 1;

// carousel built by me with no help
var carouselright = exports.carouselright = function carouselright() {
    //console.log(numOfEl);
    if (i >= 0 && i < numOfEl) {
        i += 1;
        document.querySelector('.carousel__body').style.left = '-' + i * 100 + 'vw';
        document.querySelector('.h1-' + (i - 1)).classList.toggle('h1-active');
        document.querySelector('.h1-' + i).classList.toggle('h1-active');
        document.querySelector('.p-' + (i - 1)).classList.toggle('p-active');
        document.querySelector('.p-' + i).classList.toggle('p-active');

        //console.log(`h1-${i-1}`);

        //console.log(`p-${i-1}`);
        //console.log(`-${i*100}vw`);
    } else if (i >= numOfEl) {
        i = 0;
        //console.log(`me1`);

        document.querySelector('.carousel__body').style.left = '-' + i * 100 + 'vw';
        document.querySelector('.h1-2').classList.toggle('h1-active');
        document.querySelector('.h1-' + i).classList.toggle('h1-active');
        //console.log(`h1-${i-1}`);
        document.querySelector('.p-2').classList.toggle('p-active');
        document.querySelector('.p-' + i).classList.toggle('p-active');

        //console.log(`p-${i-1}`);
    }
};

var carouselleft = exports.carouselleft = function carouselleft() {
    if (i > 0 && i <= numOfEl) {
        i -= 1;

        document.querySelector('.carousel__body').style.left = '-' + i * 100 + 'vw';
        document.querySelector('.h1-' + (i + 1)).classList.toggle('h1-active');
        document.querySelector('.h1-' + i).classList.toggle('h1-active');
        document.querySelector('.p-' + (i + 1)).classList.toggle('p-active');
        document.querySelector('.p-' + i).classList.toggle('p-active');

        //console.log(`-${i*100}vw`);
        //i -= 1;
    } else if (i <= 0) {
        i = numOfEl;
        //console.log(`me2`);
        document.querySelector('.carousel__body').style.left = '-' + i * 100 + 'vw';
        document.querySelector('.h1-0').classList.toggle('h1-active');
        document.querySelector('.h1-' + i).classList.toggle('h1-active');
        //console.log(`h1-${i-1}`);
        document.querySelector('.p-0').classList.toggle('p-active');
        document.querySelector('.p-' + i).classList.toggle('p-active');
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var activeNav = exports.activeNav = function activeNav() {
    document.querySelector('.nav__list').classList.toggle('nav-active');
    document.querySelector('.burger').classList.toggle('toggle');

    var itemsList = document.querySelectorAll('.nav__list-item');
    var itemsArr = Array.from(itemsList);

    var time = 0;
    var oldtime = 0;
    itemsArr.forEach(function (el) {
        oldtime = time;
        time = time + .3;
        console.log(oldtime, time);
        el.style.transitionDelay = oldtime + "s";
        el.style.transition = "all " + time + "s";
        el.classList.toggle('item-visible');
    });
};

var mq = window.matchMedia("(min-width: 701px)");

var scrollFunction = exports.scrollFunction = function scrollFunction() {
    if (mq.matches) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            //document.querySelector(".nav__list").style.fontSize = "1.3rem";
            document.querySelector(".nav").style.display = "flex";
            document.querySelector(".nav").style.height = "7vh";
            document.querySelector(".nav__logo").style.fontSize = "0";
            document.querySelector(".nav__logo-icon").style.transform = "scale(.8)";
            document.querySelector(".nav__form").style.display = "none";
        } else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            //document.querySelector(".nav__list").style.fontSize = "1.3rem";
            document.querySelector(".nav").style.height = "0";
            document.querySelector(".nav").style.overflow = "hidden";
            document.querySelector(".nav").style.display = "hidden";
        } else {
            //document.querySelector(".nav__list").style.fontSize = "1.5rem";
            document.querySelector(".nav").style.display = "flex";
            document.querySelector(".nav").style.height = "8vh";
            document.querySelector(".nav__logo").style.fontSize = "3rem";
            document.querySelector(".nav__logo-icon").style.transform = "scale(1)";
            document.querySelector(".nav__form").style.display = "flex";
        }
    } else {
        document.querySelector(".nav").style.display = "flex";
        document.querySelector(".nav").style.height = "8vh";
        document.querySelector(".nav__logo").style.fontSize = "3rem";
        document.querySelector(".nav__logo-icon").style.transform = "scale(1)";
        document.querySelector(".nav__form").style.display = "flex";
        document.querySelector(".nav").style.overflow = "visible";
    }
};

var smallNavScroll = exports.smallNavScroll = function smallNavScroll() {
    var mw = window.matchMedia("(max-width: 700px)");
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (mw.matches) {
            if (st > lastScrollTop) {
                // downscroll code
                document.querySelector(".nav").style.marginTop = "-14vh";
            } else {
                // upscroll code
                document.querySelector(".nav").style.marginTop = "0";
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        } else {
            document.querySelector(".nav").style.marginTop = "0";
        }
    }, false);
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _nav = __webpack_require__(2);

var _carousel = __webpack_require__(1);

var _album = __webpack_require__(0);

//NAV
// for the burger button when in mobile view
document.querySelector('.burger').addEventListener('click', _nav.activeNav);
// change navbar size on scroll
window.onscroll = function () {
    (0, _nav.scrollFunction)();
};

(0, _nav.smallNavScroll)();

//CAROUSEL
// when clicking carousel right button
document.querySelector('.carousel__right').addEventListener('click', _carousel.carouselright);
// when clicking carousel left button
document.querySelector('.carousel__left').addEventListener('click', _carousel.carouselleft);
// auto go to right after 3 second

function sleep(ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    });
}

async function waitCar() {
    for (var i = 0; i < 3; i++) {
        await sleep(5000);
        (0, _carousel.carouselright)();
    }
    waitCar();
};

// auto go to right after 5 second
waitCar();

console.log("omar");

async function waitImg() {
    for (var i = 1; i < 5; i++) {
        await sleep(5000);
        (0, _album.cycleImages)(i);
    }
    waitImg();
};

waitImg();

/* obsolete
async function waitAlbum () {
  for (let i = 1; i < 5; i++) {
        await sleep(1000);
        albumCycle(i);
    }
    waitAlbum();
};

waitAlbum();*/

/***/ })
/******/ ]);