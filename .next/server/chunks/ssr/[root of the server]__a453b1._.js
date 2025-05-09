module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/js/mobster.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const titles = [
    "Herkese Açık Giriş Ekranı",
    "Özel Menülere Erişim",
    "Cv Bankası Geçerlilik Süresi",
    "Almanak Erişimi ve İşlevsellik"
];
const texts = [
    "Uygulama giriş ekranı üye olsun ya da olmasın tüm kullanıcılara açıktır",
    "Üyeler giriş yaptıklarında kendilerine özel menülere erişim sağlayabilir",
    "Cv Bankası için 1 aylık geçerlilik süresi vardır. Süre dolduğunda ilgili üyeye SMS bildirimi ya da E-Mail bildirimi yapılır.",
    "Üyeler almanağa erişim sağlayabilir, almanak üzerinde arama ve filtreleme işlemleri yapabilirler"
];
const images = [
    "/img/onay_kodu.png",
    "/img/menuler.png",
    "/img/anasayfa.png",
    "/img/panel.png"
];
let index = 0; // Şu anki içerik indeksini takip eder
function updateContent() {
    // Elementleri seç
    const titleElement = document.getElementById("dynamic-title");
    const textElement = document.getElementById("dynamic-text");
    const imageElement = document.getElementById("dynamic-image");
    // Fade-out animasyonu ekle
    titleElement.classList.add("fade-out");
    textElement.classList.add("fade-out");
    imageElement.classList.add("fade-out");
    // Fade-out tamamlandıktan sonra içerikleri değiştir
    setTimeout(()=>{
        titleElement.textContent = titles[index];
        textElement.textContent = texts[index];
        imageElement.src = images[index];
        // Fade-in animasyonu ekle
        titleElement.classList.remove("fade-out");
        titleElement.classList.add("fade-in");
        textElement.classList.remove("fade-out");
        textElement.classList.add("fade-in");
        imageElement.classList.remove("fade-out");
        imageElement.classList.add("fade-in");
        // Bir süre sonra tekrar sınıfları sıfırla
        setTimeout(()=>{
            titleElement.classList.remove("fade-in");
            textElement.classList.remove("fade-in");
            imageElement.classList.remove("fade-in");
        }, 500);
    }, 500);
    // İndeksi güncelle
    index = (index + 1) % titles.length;
}
// Her 3 saniyede bir içerik değişimi
setInterval(updateContent, 3750);
document.getElementById("download-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Varsayılan link davranışını engelle
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var downloadLink = "#"; // Varsayılan olarak hiçbir yere yönlendirmez
    var iosLink = "https://apps.apple.com/tr/app/sakarya-smmmo/id1668300960?l=tr"; // iOS linki
    var androidLink = "https://play.google.com/store/apps/details?id=com.bgs.smmmo"; // Android linki
    if (/windows phone/i.test(userAgent)) {
        downloadLink = "https://example.com/wind"; // Windows Phone indirme linki
    } else if (/android/i.test(userAgent)) {
        downloadLink = androidLink; // Android indirme linki
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        downloadLink = iosLink; // iOS indirme linki
    } else {
        downloadLink = "https://example.com/other-download"; // Diğer cihazlar için link
    }
    window.location.href = downloadLink;
});
}}),
"[project]/app/components/MobsterClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MobsterClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function MobsterClient() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __turbopack_require__("[project]/app/js/mobster.js [app-ssr] (ecmascript)");
    }, []);
    return null;
}
}}),
"[project]/app/contact/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wowjs$2f$dist$2f$wow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wowjs/dist/wow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MobsterClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/MobsterClient.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wowjs$2f$dist$2f$wow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].WOW().init(); // Initialize WOW.js
    }, []);
    const egitimResimleri = [
        "/img/egitimler.png",
        "/img/egitimler_2.png"
    ];
    const [egitimResmi, setEgitimResmi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(egitimResimleri[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setEgitimResmi((oncekiResim)=>{
                const currentIndex = egitimResimleri.indexOf(oncekiResim);
                const sonrakiIndex = (currentIndex + 1) % egitimResimleri.length;
                return egitimResimleri[sonrakiIndex];
            });
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MobsterClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/contact/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/wowjs/dist/wow.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(function() {
    var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, indexOf = [].indexOf || function(item) {
        for(var i = 0, l = this.length; i < l; i++){
            if (i in this && this[i] === item) return i;
        }
        return -1;
    };
    Util = function() {
        function Util() {}
        Util.prototype.extend = function(custom, defaults) {
            var key, value;
            for(key in defaults){
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value;
                }
            }
            return custom;
        };
        Util.prototype.isMobile = function(agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };
        Util.prototype.createEvent = function(event, bubble, cancel, detail) {
            var customEvent;
            if (bubble == null) {
                bubble = false;
            }
            if (cancel == null) {
                cancel = false;
            }
            if (detail == null) {
                detail = null;
            }
            if (document.createEvent != null) {
                customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent(event, bubble, cancel, detail);
            } else if (document.createEventObject != null) {
                customEvent = document.createEventObject();
                customEvent.eventType = event;
            } else {
                customEvent.eventName = event;
            }
            return customEvent;
        };
        Util.prototype.emitEvent = function(elem, event) {
            if (elem.dispatchEvent != null) {
                return elem.dispatchEvent(event);
            } else if (event in (elem != null)) {
                return elem[event]();
            } else if ("on" + event in (elem != null)) {
                return elem["on" + event]();
            }
        };
        Util.prototype.addEvent = function(elem, event, fn) {
            if (elem.addEventListener != null) {
                return elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent != null) {
                return elem.attachEvent("on" + event, fn);
            } else {
                return elem[event] = fn;
            }
        };
        Util.prototype.removeEvent = function(elem, event, fn) {
            if (elem.removeEventListener != null) {
                return elem.removeEventListener(event, fn, false);
            } else if (elem.detachEvent != null) {
                return elem.detachEvent("on" + event, fn);
            } else {
                return delete elem[event];
            }
        };
        Util.prototype.innerHeight = function() {
            if ('innerHeight' in window) {
                return window.innerHeight;
            } else {
                return document.documentElement.clientHeight;
            }
        };
        return Util;
    }();
    WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = function() {
        function WeakMap() {
            this.keys = [];
            this.values = [];
        }
        WeakMap.prototype.get = function(key) {
            var i, item, j, len, ref;
            ref = this.keys;
            for(i = j = 0, len = ref.length; j < len; i = ++j){
                item = ref[i];
                if (item === key) {
                    return this.values[i];
                }
            }
        };
        WeakMap.prototype.set = function(key, value) {
            var i, item, j, len, ref;
            ref = this.keys;
            for(i = j = 0, len = ref.length; j < len; i = ++j){
                item = ref[i];
                if (item === key) {
                    this.values[i] = value;
                    return;
                }
            }
            this.keys.push(key);
            return this.values.push(value);
        };
        return WeakMap;
    }());
    MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = function() {
        function MutationObserver() {
            if (typeof console !== "undefined" && console !== null) {
                console.warn('MutationObserver is not supported by your browser.');
            }
            if (typeof console !== "undefined" && console !== null) {
                console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
            }
        }
        MutationObserver.notSupported = true;
        MutationObserver.prototype.observe = function() {};
        return MutationObserver;
    }());
    getComputedStyle = this.getComputedStyle || function(el, pseudo) {
        this.getPropertyValue = function(prop) {
            var ref;
            if (prop === 'float') {
                prop = 'styleFloat';
            }
            if (getComputedStyleRX.test(prop)) {
                prop.replace(getComputedStyleRX, function(_, _char) {
                    return _char.toUpperCase();
                });
            }
            return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
        };
        return this;
    };
    getComputedStyleRX = /(\-([a-z]){1})/g;
    this.WOW = function() {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: null,
            scrollContainer: null
        };
        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = bind(this.scrollCallback, this);
            this.scrollHandler = bind(this.scrollHandler, this);
            this.resetAnimation = bind(this.resetAnimation, this);
            this.start = bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
            if (options.scrollContainer != null) {
                this.config.scrollContainer = document.querySelector(options.scrollContainer);
            }
            this.animationNameCache = new WeakMap();
            this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        WOW.prototype.init = function() {
            var ref;
            this.element = window.document.documentElement;
            if ((ref = document.readyState) === "interactive" || ref === "complete") {
                this.start();
            } else {
                this.util().addEvent(document, 'DOMContentLoaded', this.start);
            }
            return this.finished = [];
        };
        WOW.prototype.start = function() {
            var box, j, len, ref;
            this.stopped = false;
            this.boxes = (function() {
                var j, len, ref, results;
                ref = this.element.querySelectorAll("." + this.config.boxClass);
                results = [];
                for(j = 0, len = ref.length; j < len; j++){
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            this.all = (function() {
                var j, len, ref, results;
                ref = this.boxes;
                results = [];
                for(j = 0, len = ref.length; j < len; j++){
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    ref = this.boxes;
                    for(j = 0, len = ref.length; j < len; j++){
                        box = ref[j];
                        this.applyStyle(box, true);
                    }
                }
            }
            if (!this.disabled()) {
                this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
                this.util().addEvent(window, 'resize', this.scrollHandler);
                this.interval = setInterval(this.scrollCallback, 50);
            }
            if (this.config.live) {
                return new MutationObserver(function(_this) {
                    return function(records) {
                        var k, len1, node, record, results;
                        results = [];
                        for(k = 0, len1 = records.length; k < len1; k++){
                            record = records[k];
                            results.push((function() {
                                var l, len2, ref1, results1;
                                ref1 = record.addedNodes || [];
                                results1 = [];
                                for(l = 0, len2 = ref1.length; l < len2; l++){
                                    node = ref1[l];
                                    results1.push(this.doSync(node));
                                }
                                return results1;
                            }).call(_this));
                        }
                        return results;
                    };
                }(this)).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };
        WOW.prototype.stop = function() {
            this.stopped = true;
            this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
            this.util().removeEvent(window, 'resize', this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };
        WOW.prototype.sync = function(element) {
            if (MutationObserver.notSupported) {
                return this.doSync(this.element);
            }
        };
        WOW.prototype.doSync = function(element) {
            var box, j, len, ref, results;
            if (element == null) {
                element = this.element;
            }
            if (element.nodeType !== 1) {
                return;
            }
            element = element.parentNode || element;
            ref = element.querySelectorAll("." + this.config.boxClass);
            results = [];
            for(j = 0, len = ref.length; j < len; j++){
                box = ref[j];
                if (indexOf.call(this.all, box) < 0) {
                    this.boxes.push(box);
                    this.all.push(box);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle();
                    } else {
                        this.applyStyle(box, true);
                    }
                    results.push(this.scrolled = true);
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };
        WOW.prototype.show = function(box) {
            this.applyStyle(box);
            box.className = box.className + " " + this.config.animateClass;
            if (this.config.callback != null) {
                this.config.callback(box);
            }
            this.util().emitEvent(box, this.wowEvent);
            this.util().addEvent(box, 'animationend', this.resetAnimation);
            this.util().addEvent(box, 'oanimationend', this.resetAnimation);
            this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
            return box;
        };
        WOW.prototype.applyStyle = function(box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return this.animate(function(_this) {
                return function() {
                    return _this.customStyle(box, hidden, duration, delay, iteration);
                };
            }(this));
        };
        WOW.prototype.animate = function() {
            if ('requestAnimationFrame' in window) {
                return function(callback) {
                    return window.requestAnimationFrame(callback);
                };
            } else {
                return function(callback) {
                    return callback();
                };
            }
        }();
        WOW.prototype.resetStyle = function() {
            var box, j, len, ref, results;
            ref = this.boxes;
            results = [];
            for(j = 0, len = ref.length; j < len; j++){
                box = ref[j];
                results.push(box.style.visibility = 'visible');
            }
            return results;
        };
        WOW.prototype.resetAnimation = function(event) {
            var target;
            if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                target = event.target || event.srcElement;
                return target.className = target.className.replace(this.config.animateClass, '').trim();
            }
        };
        WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
            if (hidden) {
                this.cacheAnimationName(box);
            }
            box.style.visibility = hidden ? 'hidden' : 'visible';
            if (duration) {
                this.vendorSet(box.style, {
                    animationDuration: duration
                });
            }
            if (delay) {
                this.vendorSet(box.style, {
                    animationDelay: delay
                });
            }
            if (iteration) {
                this.vendorSet(box.style, {
                    animationIterationCount: iteration
                });
            }
            this.vendorSet(box.style, {
                animationName: hidden ? 'none' : this.cachedAnimationName(box)
            });
            return box;
        };
        WOW.prototype.vendors = [
            "moz",
            "webkit"
        ];
        WOW.prototype.vendorSet = function(elem, properties) {
            var name, results, value, vendor;
            results = [];
            for(name in properties){
                value = properties[name];
                elem["" + name] = value;
                results.push((function() {
                    var j, len, ref, results1;
                    ref = this.vendors;
                    results1 = [];
                    for(j = 0, len = ref.length; j < len; j++){
                        vendor = ref[j];
                        results1.push(elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value);
                    }
                    return results1;
                }).call(this));
            }
            return results;
        };
        WOW.prototype.vendorCSS = function(elem, property) {
            var j, len, ref, result, style, vendor;
            style = getComputedStyle(elem);
            result = style.getPropertyCSSValue(property);
            ref = this.vendors;
            for(j = 0, len = ref.length; j < len; j++){
                vendor = ref[j];
                result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
            }
            return result;
        };
        WOW.prototype.animationName = function(box) {
            var animationName, error;
            try {
                animationName = this.vendorCSS(box, 'animation-name').cssText;
            } catch (error) {
                animationName = getComputedStyle(box).getPropertyValue('animation-name');
            }
            if (animationName === 'none') {
                return '';
            } else {
                return animationName;
            }
        };
        WOW.prototype.cacheAnimationName = function(box) {
            return this.animationNameCache.set(box, this.animationName(box));
        };
        WOW.prototype.cachedAnimationName = function(box) {
            return this.animationNameCache.get(box);
        };
        WOW.prototype.scrollHandler = function() {
            return this.scrolled = true;
        };
        WOW.prototype.scrollCallback = function() {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function() {
                    var j, len, ref, results;
                    ref = this.boxes;
                    results = [];
                    for(j = 0, len = ref.length; j < len; j++){
                        box = ref[j];
                        if (!box) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        results.push(box);
                    }
                    return results;
                }).call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop();
                }
            }
        };
        WOW.prototype.offsetTop = function(element) {
            var top;
            while(element.offsetTop === void 0){
                element = element.parentNode;
            }
            top = element.offsetTop;
            while(element = element.offsetParent){
                top += element.offsetTop;
            }
            return top;
        };
        WOW.prototype.isVisible = function(box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };
        WOW.prototype.util = function() {
            return this._util != null ? this._util : this._util = new Util();
        };
        WOW.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };
        return WOW;
    }();
}).call(this);
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a453b1._.js.map