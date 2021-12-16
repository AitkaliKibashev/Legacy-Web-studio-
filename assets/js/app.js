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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/anime.js":
/*!********************************!*\
  !*** ./src/assets/js/anime.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let loadImages = document.querySelectorAll('.js-loadme')\r\n\r\nclass ImageLoad {\r\n    constructor($wrapper) {\r\n        this.wrapper = $wrapper\r\n        this.width = $wrapper.offsetWidth\r\n        this.height = $wrapper.offsetHeight\r\n        this.src = $wrapper.getAttribute('data-src')\r\n\r\n\r\n        this.app = new PIXI.Application({ \r\n            width: this.width,\r\n            height: this.height,\r\n            transparent: true\r\n        })\r\n\r\n        this.wrapper.append(this.app.view)\r\n\r\n        this.container = new PIXI.Container();\r\n        this.app.stage.addChild(this.container);\r\n\r\n        this.load(this.startAnimation.bind(this))\r\n    }\r\n\r\n    load(afterload) {\r\n        let that = this;\r\n        let tmpImage = new Image()\r\n        tmpImage.src = this.src\r\n        tmpImage.onload = function() {\r\n            afterload()\r\n            that.img = tmpImage;\r\n        }\r\n    }\r\n\r\n    startAnimation() {\r\n        let that = this\r\n\r\n        this.bg = PIXI.Sprite.from(this.src)\r\n        this.bg.width = this.width\r\n        this.bg.height = this.height\r\n        this.bg.position.x = 0\r\n        this.bg.position.y = 0\r\n        this.container.addChild(this.bg)\r\n\r\n        this.displacementSprite = PIXI.Sprite.from('assets/images/displacementmap.jpg')\r\n        this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;\r\n        this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite)\r\n\r\n        this.app.stage.addChild(this.displacementSprite)\r\n\r\n        this.container.filters = [this.displacementFilter]\r\n\r\n        gsap.ticker.add(() => {\r\n            this.displacementSprite.x += 1\r\n        })\r\n\r\n        let tl = new TimelineMax()\r\n        tl.to(this.displacementFilter.scale, {x:15, y:15})\r\n    }\r\n}\r\n\r\nloadImages.forEach(el => {\r\n    let img = new ImageLoad(el)\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/anime.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// burger js\r\nconst burger = document.querySelector('.burger')\r\nconst closeBurger = document.querySelector('.close')\r\nconst header = document.querySelector('.header')\r\nconst headerContent = document.querySelector('.header__inner')\r\n\r\nburger.addEventListener('click', event => {\r\n    header.classList.toggle('active')\r\n})\r\n\r\ncloseBurger.addEventListener('click', event => {\r\n    header.classList.remove('active')\r\n})\r\n\r\n// header\r\n\r\nlet changeValue = 1\r\n\r\nwindow.addEventListener('scroll', event => {\r\n    // headerContent.style.height = `${160-changeValue}px`\r\n    // changeValue++\r\n\r\n    if (innerWidth > 1023) {\r\n        if (scrollY < 320) {\r\n            headerContent.style.height = `${160-scrollY/4}px`\r\n        }\r\n        if (scrollY > 320) {\r\n            headerContent.style.height = `80px`\r\n        }\r\n    } \r\n    else if (innerWidth < 1023 & innerWidth > 768) {\r\n        if (scrollY < 240) {\r\n            headerContent.style.height = `${120-scrollY/4}px`\r\n        }\r\n        if (scrollY > 240) {\r\n            headerContent.style.height = `60px`\r\n        }\r\n    } else {\r\n        if (scrollY < 160) {\r\n            headerContent.style.height = `${80-scrollY/4}px`\r\n        }\r\n        if (scrollY > 160) {\r\n            headerContent.style.height = `40px`\r\n        }\r\n    }\r\n}) \r\n\r\n// FadeAnimation\r\nfunction textFadeAnimate(selector = '') {\r\n    const $el = document.querySelector(selector)\r\n\r\n    if ($el) {\r\n        let letters = $el.textContent.split('')\r\n        $el.textContent = ''\r\n    \r\n        for(let i=0; i < letters.length; i++) {\r\n            if (letters[i] === ' ') {\r\n                $el.innerHTML += \" \"\r\n            }\r\n        \r\n            $el.innerHTML += \"<span class='letter__span'>\" + letters[i] + \"</span>\"\r\n        }\r\n    \r\n        let char = 0\r\n        let timer = setInterval(onTick, 70)\r\n    \r\n        function onTick() {\r\n            const span = $el.querySelectorAll('span')[char]\r\n    \r\n            span.classList.add('fade')\r\n            char++\r\n            if (char === letters.length) {\r\n                complete()\r\n                return\r\n            }\r\n        }\r\n    \r\n        function complete() {\r\n            clearInterval(timer)\r\n            timer = null\r\n        }\r\n    }\r\n}\r\n\r\ntextFadeAnimate('.title__piece')\r\ntextFadeAnimate('.title__piece-2')\r\n\r\n// gsap\r\ngsap.from('.main__title', {opacity: 0, duration: 2, delay: 1, y: 100, ease: \"Power3.easeOut\"})\r\ngsap.from('.header__inner', {opacity: 0, duration: 2, delay: .5, y: -50, ease: \"Power3.easeOut\"})\r\n// AOS\r\nAOS.init()\r\n\r\n// light on\r\nwindow.addEventListener('scroll', event => {\r\n    let contactSection = document.querySelector('.contact__section') \r\n\r\n    const body = document.body\r\n\r\n\r\n    if (pageYOffset >= getCoords(contactSection).top - 300) {\r\n        body.classList.add('light-on')\r\n    }\r\n    else {\r\n        body.classList.remove('light-on')\r\n    }\r\n   \r\n})\r\n\r\nfunction getCoords(elem) {\r\n    let box = elem.getBoundingClientRect()\r\n  \r\n    return {\r\n      top: box.top + pageYOffset,\r\n      left: box.left + pageXOffset\r\n    }\r\n}\r\n\r\n// dragon eyes \r\n\r\ndocument.onmousemove = function (event) {\r\n    const eyeBorder = document.querySelector('.eyes-border')\r\n    const eyeBorder2 = document.querySelector('.eyes-border.second')\r\n\r\n    if (eyeBorder & eyeBorder2) {\r\n        let x1 = event.x - eyeBorder.getBoundingClientRect().left\r\n        let y1 = event.y - eyeBorder.getBoundingClientRect().top\r\n    \r\n        let x2 = event.x - eyeBorder2.getBoundingClientRect().left\r\n        let y2 = event.y - eyeBorder2.getBoundingClientRect().top\r\n    \r\n        \r\n        eyeBorder.style.transform = 'rotate(' + 57.2958 * arcctg(x1, y1) + 'deg)'\r\n        eyeBorder2.style.transform = 'rotate(' + 57.2958 * arcctg(x2 - 56, y2) + 'deg)'\r\n    \r\n        function arcctg(x, y) {\r\n            if (x >\t0 && y > 0) return Math.PI /2 - Math.atan(x / y)\r\n            if (x <\t0 && y > 0) return Math.PI /2 -\tMath.atan(x / y)\r\n            if (x <\t0 && y < 0) return Math.PI + Math.atan(y / x)\r\n            if (x >\t0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y))\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/calculator.js":
/*!*************************************!*\
  !*** ./src/assets/js/calculator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// нужные DOM элементы\r\nconst calcBtns = document.querySelectorAll('.calc__btns')\r\nconst calcWindow = document.querySelector('.calc__window-content')\r\nconst clearBtn = document.querySelector('.throw-off__btn')\r\nconst designBtn = document.querySelector('#design-in')\r\n\r\n\r\n// глобальные переменные для вычисления \r\nlet sitePrice = 0\r\nlet designPrice = 0\r\nlet cmsPrice = 0\r\nlet totalPrice = 0\r\nlet totalTime = 0\r\n\r\n\r\n// проходимся по элементам и добавляем EventListener\r\ncalcBtns.forEach(elem => {\r\n    if (elem.hasAttribute('data-sitetype')) {\r\n        elem.addEventListener('click', event => {\r\n            if (totalPrice > 0) {\r\n                totalPrice -= sitePrice\r\n                sitePrice = 0\r\n            }\r\n\r\n            clearCalc()\r\n            \r\n            calcBtns.forEach(e => {\r\n                if (e.hasAttribute('data-sitetype')) {\r\n                    e.classList.remove('active')\r\n                }\r\n            })\r\n            \r\n            elem.classList.add('active')\r\n            \r\n            calcServicePrice('data-sitetype', '#siteType', 'Тип сайта', event)\r\n        })\r\n    }\r\n\r\n    else if (elem.hasAttribute('data-design')) {\r\n        elem.addEventListener('click', event => {\r\n            if (totalPrice > 0) {\r\n                totalPrice -= designPrice\r\n                designPrice = 0\r\n            }\r\n\r\n            calcBtns.forEach(e => {\r\n                if (e.hasAttribute('data-design')) {\r\n                    e.classList.remove('active')\r\n                }\r\n            })\r\n            \r\n            elem.classList.add('active')\r\n\r\n            calcServicePrice('data-design', '#siteDesign', `Дизайн`, event)\r\n        })\r\n    }\r\n\r\n    else {\r\n        elem.addEventListener('click', event => {\r\n            if (totalPrice > 0) {\r\n                totalPrice -= cmsPrice\r\n                cmsPrice = 0\r\n            }\r\n\r\n            calcBtns.forEach(e => {\r\n                if (e.hasAttribute('data-cms')) {\r\n                    e.classList.remove('active')\r\n                }\r\n            })\r\n            \r\n            elem.classList.add('active')\r\n\r\n            calcServicePrice('data-cms', '#siteCMS', `CMS`, event)\r\n        })\r\n    }\r\n})\r\n\r\n// функция для EventListener\r\nfunction calcServicePrice(dataName, serviceSelector, html, event) {\r\n    let $this = event.currentTarget\r\n    let dataAttribute = $this.getAttribute(dataName)\r\n    let serviceName = $this.textContent\r\n    let dataPrice = $this.getAttribute('data-price')\r\n    let dataTime = $this.getAttribute('data-days')\r\n\r\n    if (dataName === \"data-sitetype\") {\r\n        designBtn.setAttribute('data-price', `${dataPrice}`)\r\n    }\r\n    \r\n\r\n    const serviceNode = calcWindow.querySelector(serviceSelector)\r\n    const totalPriceNode = calcWindow.querySelector('.total__price')\r\n    const timeNode = calcWindow.querySelector('.total__time')\r\n\r\n    toHtml(serviceNode, totalPriceNode, serviceName, html, dataPrice, dataTime, timeNode)\r\n\r\n}\r\n\r\n// функция для добавления html и вычисления суммы\r\nfunction toHtml(serviceNode, totalPriceNode, serviceName, html, dataPrice, dataTime, timeNode) {\r\n\r\n    serviceNode.innerHTML = `\r\n    <p class=\"service__type\">\r\n        ${html}:\r\n    </p>\r\n    <p class=\"service__name\">\r\n        ${serviceName}\r\n    </p>\r\n    <p class=\"service__price\">\r\n        $ ${dataPrice}\r\n    </p>`\r\n    \r\n    if (html === 'Тип сайта') {\r\n        sitePrice += +dataPrice\r\n        totalPrice += sitePrice\r\n    }\r\n    else if (html === 'Дизайн') {\r\n        designPrice += +dataPrice\r\n        totalPrice += designPrice\r\n    }\r\n    else {\r\n        cmsPrice += +dataPrice\r\n        totalPrice += cmsPrice\r\n    }\r\n    \r\n    totalTime += +dataTime\r\n\r\n    console.log(totalTime, dataTime)\r\n    totalPriceNode.innerHTML = `<p>Примерная стоимость: <span> $ ${totalPrice}</span></p>`\r\n    timeNode.innerHTML = `<p>Примерные сроки: <span>${totalTime} дней</span></p>`\r\n}\r\n\r\n// очистка элементов\r\nclearBtn.addEventListener('click', clearCalc)\r\n\r\n\r\nfunction clearCalc() {\r\n    calcBtns.forEach(e => e.classList.remove('active'))\r\n\r\n    calcWindow.innerHTML = `\r\n    <div class=\"calc__items calc__items--gray\" id=\"siteType\">\r\n    <p class=\"service__type\">\r\n        Тип сайта: \r\n    </p>\r\n    </div>\r\n    <div class=\"calc__items\" id=\"siteDesign\">\r\n        <p class=\"service__type\">\r\n            Дизайн:  \r\n        </p>\r\n    </div>\r\n    <div class=\"calc__items calc__items--gray\" id=\"siteCMS\">\r\n        <p class=\"service__type\">\r\n            CMS:\r\n        </p>\r\n    </div>\r\n    <p class=\"total__price\">Примерная стоимость: <span>0 $</span></p>\r\n    <p class=\"total__time\">Примерные сроки: <span>0 дня</span></p>\r\n    `\r\n\r\n\r\n    totalPrice = 0\r\n    sitePrice = 0\r\n    designPrice = 0\r\n    cmsPrice = 0\r\n    totalTime = 0\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/calculator.js?");

/***/ }),

/***/ "./src/assets/js/smooth_scroll.js":
/*!****************************************!*\
  !*** ./src/assets/js/smooth_scroll.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("SmoothScroll({ \r\n    stepSize: 100,\r\n    animationTime: 1200,\r\n    touchpadSupport: true,\r\n    fixedBackground: false,  \r\n    pulseAlgorithm: true,\r\n    pulseScale: 3,\r\n    pulseNormalize: 1,\r\n })\n\n//# sourceURL=webpack:///./src/assets/js/smooth_scroll.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************!*\
  !*** multi ./src/assets/js/anime.js ./src/assets/js/app.js ./src/assets/js/calculator.js ./src/assets/js/smooth_scroll.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\user\\Desktop\\WWW\\qarov.ru\\src\\assets\\js\\anime.js */\"./src/assets/js/anime.js\");\n__webpack_require__(/*! C:\\Users\\user\\Desktop\\WWW\\qarov.ru\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\user\\Desktop\\WWW\\qarov.ru\\src\\assets\\js\\calculator.js */\"./src/assets/js/calculator.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\user\\Desktop\\WWW\\qarov.ru\\src\\assets\\js\\smooth_scroll.js */\"./src/assets/js/smooth_scroll.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/anime.js_./src/assets/js/app.js_./src/assets/js/calculator.js_./src/assets/js/smooth_scroll.js?");

/***/ })

/******/ });