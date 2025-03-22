// Returns whether the `js-string` built-in is supported.
function detectJsStringBuiltins() {
  let bytes = [
    0,   97,  115, 109, 1,   0,   0,  0,   1,   4,   1,   96,  0,
    0,   2,   23,  1,   14,  119, 97, 115, 109, 58,  106, 115, 45,
    115, 116, 114, 105, 110, 103, 4,  99,  97,  115, 116, 0,   0
  ];
  return WebAssembly.validate(
    new Uint8Array(bytes), {builtins: ['js-string']});
}

// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = detectJsStringBuiltins()
      ? {builtins: ['js-string']} : {};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = detectJsStringBuiltins()
      ? {builtins: ['js-string']} : {};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  async instantiate(additionalImports, {loadDeferredWasm} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

      _1: (x0,x1,x2) => x0.set(x1,x2),
      _2: (x0,x1,x2) => x0.set(x1,x2),
      _6: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._6(f,arguments.length,x0) }),
      _7: x0 => new window.FinalizationRegistry(x0),
      _8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _9: (x0,x1) => x0.unregister(x1),
      _10: (x0,x1,x2) => x0.slice(x1,x2),
      _11: (x0,x1) => x0.decode(x1),
      _12: (x0,x1) => x0.segment(x1),
      _13: () => new TextDecoder(),
      _14: x0 => x0.buffer,
      _15: x0 => x0.wasmMemory,
      _16: () => globalThis.window._flutter_skwasmInstance,
      _17: x0 => x0.rasterStartMilliseconds,
      _18: x0 => x0.rasterEndMilliseconds,
      _19: x0 => x0.imageBitmaps,
      _192: x0 => x0.select(),
      _193: (x0,x1) => x0.append(x1),
      _194: x0 => x0.remove(),
      _197: x0 => x0.unlock(),
      _202: x0 => x0.getReader(),
      _211: x0 => new MutationObserver(x0),
      _222: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _223: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _226: x0 => new ResizeObserver(x0),
      _229: (x0,x1) => new Intl.Segmenter(x0,x1),
      _230: x0 => x0.next(),
      _231: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _308: x0 => x0.close(),
      _309: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _310: x0 => new window.ImageDecoder(x0),
      _311: x0 => x0.close(),
      _312: x0 => ({frameIndex: x0}),
      _313: (x0,x1) => x0.decode(x1),
      _316: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._316(f,arguments.length,x0) }),
      _317: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._317(f,arguments.length,x0) }),
      _318: (x0,x1) => ({addView: x0,removeView: x1}),
      _319: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._319(f,arguments.length,x0) }),
      _320: f => finalizeWrapper(f, function() { return dartInstance.exports._320(f,arguments.length) }),
      _321: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _322: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._322(f,arguments.length,x0) }),
      _323: x0 => ({runApp: x0}),
      _324: x0 => new Uint8Array(x0),
      _326: x0 => x0.preventDefault(),
      _327: x0 => x0.stopPropagation(),
      _328: (x0,x1) => x0.addListener(x1),
      _329: (x0,x1) => x0.removeListener(x1),
      _330: (x0,x1) => x0.prepend(x1),
      _331: x0 => x0.remove(),
      _332: x0 => x0.disconnect(),
      _333: (x0,x1) => x0.addListener(x1),
      _334: (x0,x1) => x0.removeListener(x1),
      _336: (x0,x1) => x0.append(x1),
      _337: x0 => x0.remove(),
      _338: x0 => x0.stopPropagation(),
      _342: x0 => x0.preventDefault(),
      _343: (x0,x1) => x0.append(x1),
      _344: x0 => x0.remove(),
      _345: x0 => x0.preventDefault(),
      _350: (x0,x1) => x0.removeChild(x1),
      _351: (x0,x1) => x0.appendChild(x1),
      _352: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _353: (x0,x1) => x0.appendChild(x1),
      _354: (x0,x1) => x0.transferFromImageBitmap(x1),
      _355: (x0,x1) => x0.appendChild(x1),
      _356: (x0,x1) => x0.append(x1),
      _357: (x0,x1) => x0.append(x1),
      _358: (x0,x1) => x0.append(x1),
      _359: x0 => x0.remove(),
      _360: x0 => x0.remove(),
      _361: x0 => x0.remove(),
      _362: (x0,x1) => x0.appendChild(x1),
      _363: (x0,x1) => x0.appendChild(x1),
      _364: x0 => x0.remove(),
      _365: (x0,x1) => x0.append(x1),
      _366: (x0,x1) => x0.append(x1),
      _367: x0 => x0.remove(),
      _368: (x0,x1) => x0.append(x1),
      _369: (x0,x1) => x0.append(x1),
      _370: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _371: (x0,x1) => x0.append(x1),
      _372: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _373: x0 => x0.remove(),
      _374: x0 => x0.remove(),
      _375: (x0,x1) => x0.append(x1),
      _376: x0 => x0.remove(),
      _377: (x0,x1) => x0.append(x1),
      _378: x0 => x0.remove(),
      _379: x0 => x0.remove(),
      _380: x0 => x0.getBoundingClientRect(),
      _381: x0 => x0.remove(),
      _394: (x0,x1) => x0.append(x1),
      _395: x0 => x0.remove(),
      _396: (x0,x1) => x0.append(x1),
      _397: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _398: x0 => x0.preventDefault(),
      _399: x0 => x0.preventDefault(),
      _400: x0 => x0.preventDefault(),
      _401: x0 => x0.preventDefault(),
      _402: x0 => x0.remove(),
      _403: (x0,x1) => x0.observe(x1),
      _404: x0 => x0.disconnect(),
      _405: (x0,x1) => x0.appendChild(x1),
      _406: (x0,x1) => x0.appendChild(x1),
      _407: (x0,x1) => x0.appendChild(x1),
      _408: (x0,x1) => x0.append(x1),
      _409: x0 => x0.remove(),
      _410: (x0,x1) => x0.append(x1),
      _411: (x0,x1) => x0.append(x1),
      _412: (x0,x1) => x0.appendChild(x1),
      _413: (x0,x1) => x0.append(x1),
      _414: x0 => x0.remove(),
      _415: (x0,x1) => x0.append(x1),
      _419: (x0,x1) => x0.appendChild(x1),
      _420: x0 => x0.remove(),
      _976: () => globalThis.window.flutterConfiguration,
      _977: x0 => x0.assetBase,
      _982: x0 => x0.debugShowSemanticsNodes,
      _983: x0 => x0.hostElement,
      _984: x0 => x0.multiViewEnabled,
      _985: x0 => x0.nonce,
      _987: x0 => x0.fontFallbackBaseUrl,
      _988: x0 => x0.useColorEmoji,
      _992: x0 => x0.console,
      _993: x0 => x0.devicePixelRatio,
      _994: x0 => x0.document,
      _995: x0 => x0.history,
      _996: x0 => x0.innerHeight,
      _997: x0 => x0.innerWidth,
      _998: x0 => x0.location,
      _999: x0 => x0.navigator,
      _1000: x0 => x0.visualViewport,
      _1001: x0 => x0.performance,
      _1004: (x0,x1) => x0.dispatchEvent(x1),
      _1005: (x0,x1) => x0.matchMedia(x1),
      _1007: (x0,x1) => x0.getComputedStyle(x1),
      _1008: x0 => x0.screen,
      _1009: (x0,x1) => x0.requestAnimationFrame(x1),
      _1010: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1010(f,arguments.length,x0) }),
      _1014: (x0,x1) => x0.warn(x1),
      _1016: (x0,x1) => x0.debug(x1),
      _1017: () => globalThis.window,
      _1018: () => globalThis.Intl,
      _1019: () => globalThis.Symbol,
      _1022: x0 => x0.clipboard,
      _1023: x0 => x0.maxTouchPoints,
      _1024: x0 => x0.vendor,
      _1025: x0 => x0.language,
      _1026: x0 => x0.platform,
      _1027: x0 => x0.userAgent,
      _1028: x0 => x0.languages,
      _1029: x0 => x0.documentElement,
      _1030: (x0,x1) => x0.querySelector(x1),
      _1034: (x0,x1) => x0.createElement(x1),
      _1035: (x0,x1) => x0.execCommand(x1),
      _1039: (x0,x1) => x0.createTextNode(x1),
      _1040: (x0,x1) => x0.createEvent(x1),
      _1044: x0 => x0.head,
      _1045: x0 => x0.body,
      _1046: (x0,x1) => x0.title = x1,
      _1049: x0 => x0.activeElement,
      _1052: x0 => x0.visibilityState,
      _1053: x0 => x0.hasFocus(),
      _1054: () => globalThis.document,
      _1055: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1057: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1060: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1060(f,arguments.length,x0) }),
      _1061: x0 => x0.target,
      _1063: x0 => x0.timeStamp,
      _1064: x0 => x0.type,
      _1066: x0 => x0.preventDefault(),
      _1068: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _1075: x0 => x0.firstChild,
      _1080: x0 => x0.parentElement,
      _1082: x0 => x0.parentNode,
      _1085: (x0,x1) => x0.removeChild(x1),
      _1086: (x0,x1) => x0.removeChild(x1),
      _1087: x0 => x0.isConnected,
      _1088: (x0,x1) => x0.textContent = x1,
      _1090: (x0,x1) => x0.contains(x1),
      _1095: x0 => x0.firstElementChild,
      _1097: x0 => x0.nextElementSibling,
      _1098: x0 => x0.clientHeight,
      _1099: x0 => x0.clientWidth,
      _1100: x0 => x0.offsetHeight,
      _1101: x0 => x0.offsetWidth,
      _1102: x0 => x0.id,
      _1103: (x0,x1) => x0.id = x1,
      _1106: (x0,x1) => x0.spellcheck = x1,
      _1107: x0 => x0.tagName,
      _1108: x0 => x0.style,
      _1109: (x0,x1) => x0.append(x1),
      _1110: (x0,x1) => x0.getAttribute(x1),
      _1111: x0 => x0.getBoundingClientRect(),
      _1116: (x0,x1) => x0.closest(x1),
      _1119: (x0,x1) => x0.querySelectorAll(x1),
      _1121: x0 => x0.remove(),
      _1122: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1123: (x0,x1) => x0.removeAttribute(x1),
      _1124: (x0,x1) => x0.tabIndex = x1,
      _1126: (x0,x1) => x0.focus(x1),
      _1127: x0 => x0.scrollTop,
      _1128: (x0,x1) => x0.scrollTop = x1,
      _1129: x0 => x0.scrollLeft,
      _1130: (x0,x1) => x0.scrollLeft = x1,
      _1131: x0 => x0.classList,
      _1132: (x0,x1) => x0.className = x1,
      _1139: (x0,x1) => x0.getElementsByClassName(x1),
      _1141: x0 => x0.click(),
      _1143: (x0,x1) => x0.hasAttribute(x1),
      _1146: (x0,x1) => x0.attachShadow(x1),
      _1151: (x0,x1) => x0.getPropertyValue(x1),
      _1153: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _1155: (x0,x1) => x0.removeProperty(x1),
      _1157: x0 => x0.offsetLeft,
      _1158: x0 => x0.offsetTop,
      _1159: x0 => x0.offsetParent,
      _1161: (x0,x1) => x0.name = x1,
      _1162: x0 => x0.content,
      _1163: (x0,x1) => x0.content = x1,
      _1177: (x0,x1) => x0.nonce = x1,
      _1183: x0 => x0.now(),
      _1185: (x0,x1) => x0.width = x1,
      _1187: (x0,x1) => x0.height = x1,
      _1191: (x0,x1) => x0.getContext(x1),
      _1267: (x0,x1) => x0.fetch(x1),
      _1268: x0 => x0.status,
      _1269: x0 => x0.headers,
      _1270: x0 => x0.body,
      _1271: x0 => x0.arrayBuffer(),
      _1274: (x0,x1) => x0.get(x1),
      _1277: x0 => x0.read(),
      _1278: x0 => x0.value,
      _1279: x0 => x0.done,
      _1281: x0 => x0.name,
      _1282: x0 => x0.x,
      _1283: x0 => x0.y,
      _1286: x0 => x0.top,
      _1287: x0 => x0.right,
      _1288: x0 => x0.bottom,
      _1289: x0 => x0.left,
      _1299: x0 => x0.height,
      _1300: x0 => x0.width,
      _1301: (x0,x1) => x0.value = x1,
      _1303: (x0,x1) => x0.placeholder = x1,
      _1304: (x0,x1) => x0.name = x1,
      _1305: x0 => x0.selectionDirection,
      _1306: x0 => x0.selectionStart,
      _1307: x0 => x0.selectionEnd,
      _1310: x0 => x0.value,
      _1312: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1315: x0 => x0.readText(),
      _1316: (x0,x1) => x0.writeText(x1),
      _1317: x0 => x0.altKey,
      _1318: x0 => x0.code,
      _1319: x0 => x0.ctrlKey,
      _1320: x0 => x0.key,
      _1321: x0 => x0.keyCode,
      _1322: x0 => x0.location,
      _1323: x0 => x0.metaKey,
      _1324: x0 => x0.repeat,
      _1325: x0 => x0.shiftKey,
      _1326: x0 => x0.isComposing,
      _1327: (x0,x1) => x0.getModifierState(x1),
      _1329: x0 => x0.state,
      _1330: (x0,x1) => x0.go(x1),
      _1333: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1334: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1335: x0 => x0.pathname,
      _1336: x0 => x0.search,
      _1337: x0 => x0.hash,
      _1341: x0 => x0.state,
      _1347: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1347(f,arguments.length,x0,x1) }),
      _1350: (x0,x1,x2) => x0.observe(x1,x2),
      _1353: x0 => x0.attributeName,
      _1354: x0 => x0.type,
      _1355: x0 => x0.matches,
      _1358: x0 => x0.matches,
      _1360: x0 => x0.relatedTarget,
      _1361: x0 => x0.clientX,
      _1362: x0 => x0.clientY,
      _1363: x0 => x0.offsetX,
      _1364: x0 => x0.offsetY,
      _1367: x0 => x0.button,
      _1368: x0 => x0.buttons,
      _1369: x0 => x0.ctrlKey,
      _1370: (x0,x1) => x0.getModifierState(x1),
      _1373: x0 => x0.pointerId,
      _1374: x0 => x0.pointerType,
      _1375: x0 => x0.pressure,
      _1376: x0 => x0.tiltX,
      _1377: x0 => x0.tiltY,
      _1378: x0 => x0.getCoalescedEvents(),
      _1380: x0 => x0.deltaX,
      _1381: x0 => x0.deltaY,
      _1382: x0 => x0.wheelDeltaX,
      _1383: x0 => x0.wheelDeltaY,
      _1384: x0 => x0.deltaMode,
      _1390: x0 => x0.changedTouches,
      _1392: x0 => x0.clientX,
      _1393: x0 => x0.clientY,
      _1395: x0 => x0.data,
      _1398: (x0,x1) => x0.disabled = x1,
      _1399: (x0,x1) => x0.type = x1,
      _1400: (x0,x1) => x0.max = x1,
      _1401: (x0,x1) => x0.min = x1,
      _1402: (x0,x1) => x0.value = x1,
      _1403: x0 => x0.value,
      _1404: x0 => x0.disabled,
      _1405: (x0,x1) => x0.disabled = x1,
      _1406: (x0,x1) => x0.placeholder = x1,
      _1407: (x0,x1) => x0.name = x1,
      _1408: (x0,x1) => x0.autocomplete = x1,
      _1409: x0 => x0.selectionDirection,
      _1410: x0 => x0.selectionStart,
      _1411: x0 => x0.selectionEnd,
      _1415: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1420: (x0,x1) => x0.add(x1),
      _1423: (x0,x1) => x0.noValidate = x1,
      _1424: (x0,x1) => x0.method = x1,
      _1425: (x0,x1) => x0.action = x1,
      _1450: x0 => x0.orientation,
      _1451: x0 => x0.width,
      _1452: x0 => x0.height,
      _1453: (x0,x1) => x0.lock(x1),
      _1471: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1471(f,arguments.length,x0,x1) }),
      _1482: x0 => x0.length,
      _1483: (x0,x1) => x0.item(x1),
      _1484: x0 => x0.length,
      _1485: (x0,x1) => x0.item(x1),
      _1486: x0 => x0.iterator,
      _1487: x0 => x0.Segmenter,
      _1488: x0 => x0.v8BreakIterator,
      _1492: x0 => x0.done,
      _1493: x0 => x0.value,
      _1494: x0 => x0.index,
      _1498: (x0,x1) => x0.adoptText(x1),
      _1499: x0 => x0.first(),
      _1500: x0 => x0.next(),
      _1501: x0 => x0.current(),
      _1512: x0 => x0.hostElement,
      _1513: x0 => x0.viewConstraints,
      _1515: x0 => x0.maxHeight,
      _1516: x0 => x0.maxWidth,
      _1517: x0 => x0.minHeight,
      _1518: x0 => x0.minWidth,
      _1519: x0 => x0.loader,
      _1520: () => globalThis._flutter,
      _1521: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1522: (x0,x1,x2) => x0.call(x1,x2),
      _1523: () => globalThis.Promise,
      _1524: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1524(f,arguments.length,x0,x1) }),
      _1527: x0 => x0.length,
      _1530: x0 => x0.tracks,
      _1534: x0 => x0.image,
      _1539: x0 => x0.codedWidth,
      _1540: x0 => x0.codedHeight,
      _1543: x0 => x0.duration,
      _1547: x0 => x0.ready,
      _1548: x0 => x0.selectedTrack,
      _1549: x0 => x0.repetitionCount,
      _1550: x0 => x0.frameCount,
      _1595: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1596: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1597: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1597(f,arguments.length,x0) }),
      _1598: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1599: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1599(f,arguments.length,x0) }),
      _1600: x0 => x0.send(),
      _1601: () => new XMLHttpRequest(),
      _1602: x0 => x0.createRange(),
      _1603: (x0,x1) => x0.selectNode(x1),
      _1604: x0 => x0.getSelection(),
      _1605: x0 => x0.removeAllRanges(),
      _1606: (x0,x1) => x0.addRange(x1),
      _1607: (x0,x1) => x0.createElement(x1),
      _1608: (x0,x1) => x0.add(x1),
      _1609: (x0,x1) => x0.append(x1),
      _1610: (x0,x1,x2) => x0.insertRule(x1,x2),
      _1611: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1611(f,arguments.length,x0) }),
      _1619: x0 => x0.toArray(),
      _1620: x0 => x0.toUint8Array(),
      _1621: x0 => ({serverTimestamps: x0}),
      _1622: x0 => ({source: x0}),
      _1625: x0 => new firebase_firestore.FieldPath(x0),
      _1626: (x0,x1) => new firebase_firestore.FieldPath(x0,x1),
      _1627: (x0,x1,x2) => new firebase_firestore.FieldPath(x0,x1,x2),
      _1628: (x0,x1,x2,x3) => new firebase_firestore.FieldPath(x0,x1,x2,x3),
      _1629: (x0,x1,x2,x3,x4) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4),
      _1630: (x0,x1,x2,x3,x4,x5) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5),
      _1631: (x0,x1,x2,x3,x4,x5,x6) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6),
      _1632: (x0,x1,x2,x3,x4,x5,x6,x7) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7),
      _1633: (x0,x1,x2,x3,x4,x5,x6,x7,x8) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8),
      _1634: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _1635: () => globalThis.firebase_firestore.documentId(),
      _1636: (x0,x1) => new firebase_firestore.GeoPoint(x0,x1),
      _1637: x0 => globalThis.firebase_firestore.vector(x0),
      _1638: x0 => globalThis.firebase_firestore.Bytes.fromUint8Array(x0),
      _1640: (x0,x1) => globalThis.firebase_firestore.collection(x0,x1),
      _1642: (x0,x1) => globalThis.firebase_firestore.doc(x0,x1),
      _1647: x0 => x0.call(),
      _1681: (x0,x1) => ({includeMetadataChanges: x0,source: x1}),
      _1684: (x0,x1,x2,x3) => globalThis.firebase_firestore.onSnapshot(x0,x1,x2,x3),
      _1687: (x0,x1) => globalThis.firebase_firestore.setDoc(x0,x1),
      _1688: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1689: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1690: x0 => globalThis.firebase_firestore.getDocs(x0),
      _1691: x0 => globalThis.firebase_firestore.getDocsFromServer(x0),
      _1692: x0 => globalThis.firebase_firestore.getDocsFromCache(x0),
      _1693: x0 => globalThis.firebase_firestore.limit(x0),
      _1694: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1695: x0 => globalThis.firebase_firestore.limitToLast(x0),
      _1696: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1697: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1697(f,arguments.length,x0) }),
      _1698: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1698(f,arguments.length,x0) }),
      _1699: (x0,x1) => globalThis.firebase_firestore.orderBy(x0,x1),
      _1701: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1702: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1703: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1704: (x0,x1,x2) => globalThis.firebase_firestore.where(x0,x1,x2),
      _1705: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1706: (x0,x1,x2) => globalThis.firebase_firestore.where(x0,x1,x2),
      _1707: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1710: x0 => globalThis.firebase_firestore.doc(x0),
      _1713: (x0,x1) => x0.data(x1),
      _1717: x0 => x0.docChanges(),
      _1727: () => globalThis.firebase_firestore.serverTimestamp(),
      _1728: x0 => globalThis.firebase_firestore.increment(x0),
      _1735: (x0,x1) => globalThis.firebase_firestore.getFirestore(x0,x1),
      _1736: () => globalThis.firebase_firestore.getFirestore(),
      _1737: x0 => globalThis.firebase_firestore.Timestamp.fromMillis(x0),
      _1738: x0 => globalThis.firebase_firestore.Timestamp.fromMillis(x0),
      _1739: f => finalizeWrapper(f, function() { return dartInstance.exports._1739(f,arguments.length) }),
      _1796: () => globalThis.firebase_firestore.updateDoc,
      _1799: () => globalThis.firebase_firestore.or,
      _1800: () => globalThis.firebase_firestore.and,
      _1809: x0 => x0.path,
      _1813: () => globalThis.firebase_firestore.GeoPoint,
      _1814: x0 => x0.latitude,
      _1815: x0 => x0.longitude,
      _1817: () => globalThis.firebase_firestore.VectorValue,
      _1820: () => globalThis.firebase_firestore.Bytes,
      _1824: x0 => x0.type,
      _1826: x0 => x0.doc,
      _1828: x0 => x0.oldIndex,
      _1830: x0 => x0.newIndex,
      _1832: () => globalThis.firebase_firestore.DocumentReference,
      _1836: x0 => x0.path,
      _1846: x0 => x0.metadata,
      _1847: x0 => x0.ref,
      _1855: x0 => x0.docs,
      _1857: x0 => x0.metadata,
      _1865: () => globalThis.firebase_firestore.Timestamp,
      _1866: x0 => x0.seconds,
      _1867: x0 => x0.nanoseconds,
      _1904: x0 => x0.hasPendingWrites,
      _1906: x0 => x0.fromCache,
      _1913: x0 => x0.source,
      _1918: () => globalThis.firebase_firestore.startAfter,
      _1919: () => globalThis.firebase_firestore.startAt,
      _1920: () => globalThis.firebase_firestore.endBefore,
      _1921: () => globalThis.firebase_firestore.endAt,
      _1931: () => globalThis.pdfjsLib,
      _1932: x0 => globalThis.pdfjsLib.getDocument(x0),
      _1943: x0 => globalThis.pdfjsLib.GlobalWorkerOptions.workerSrc = x0,
      _1944: x0 => x0.promise,
      _1945: (x0,x1,x2,x3,x4,x5,x6,x7) => ({url: x0,httpHeaders: x1,withCredentials: x2,password: x3,cMapUrl: x4,cMapPacked: x5,useSystemFonts: x6,standardFontDataUrl: x7}),
      _1947: (x0,x1) => x0.getPage(x1),
      _1948: x0 => x0.getPermissions(),
      _1949: x0 => x0.numPages,
      _1950: x0 => x0.destroy(),
      _1954: (x0,x1) => x0.getViewport(x1),
      _1955: (x0,x1) => x0.render(x1),
      _1957: x0 => x0.rotate,
      _1994: x0 => x0.width,
      _1996: x0 => x0.height,
      _2019: x0 => x0.promise,
      _2059: (x0,x1) => x0.createElement(x1),
      _2060: (x0,x1) => x0.querySelector(x1),
      _2061: (x0,x1) => x0.appendChild(x1),
      _2069: x0 => ({scale: x0}),
      _2070: (x0,x1,x2,x3) => ({scale: x0,offsetX: x1,offsetY: x2,dontFlip: x3}),
      _2071: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      _2072: (x0,x1,x2) => ({canvasContext: x0,viewport: x1,annotationMode: x2}),
      _2073: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      _2076: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _2077: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _2091: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _2092: (x0,x1) => x0.getItem(x1),
      _2093: (x0,x1) => x0.removeItem(x1),
      _2094: (x0,x1,x2) => x0.setItem(x1,x2),
      _2114: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
      _2115: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
      _2116: x0 => globalThis.firebase_core.getApp(x0),
      _2117: () => globalThis.firebase_core.getApp(),
      _2120: () => globalThis.firebase_core.SDK_VERSION,
      _2127: x0 => x0.apiKey,
      _2129: x0 => x0.authDomain,
      _2131: x0 => x0.databaseURL,
      _2133: x0 => x0.projectId,
      _2135: x0 => x0.storageBucket,
      _2137: x0 => x0.messagingSenderId,
      _2139: x0 => x0.measurementId,
      _2141: x0 => x0.appId,
      _2143: x0 => x0.name,
      _2144: x0 => x0.options,
      _2145: (x0,x1) => x0.debug(x1),
      _2146: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2146(f,arguments.length,x0) }),
      _2147: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._2147(f,arguments.length,x0,x1) }),
      _2148: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
      _2149: (x0,x1,x2) => x0.createPolicy(x1,x2),
      _2150: (x0,x1) => x0.createScriptURL(x1),
      _2151: (x0,x1,x2) => x0.createScript(x1,x2),
      _2152: (x0,x1) => x0.appendChild(x1),
      _2153: (x0,x1) => x0.appendChild(x1),
      _2154: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2154(f,arguments.length,x0) }),
      _2155: (x0,x1) => x0.querySelector(x1),
      _2156: (x0,x1) => x0.querySelector(x1),
      _2157: (x0,x1) => x0.item(x1),
      _2160: () => new FileReader(),
      _2161: (x0,x1) => x0.readAsArrayBuffer(x1),
      _2162: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2162(f,arguments.length,x0) }),
      _2163: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _2164: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2164(f,arguments.length,x0) }),
      _2165: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _2166: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2166(f,arguments.length,x0) }),
      _2167: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2167(f,arguments.length,x0) }),
      _2168: (x0,x1) => x0.removeChild(x1),
      _2169: x0 => x0.click(),
      _2170: (x0,x1) => x0.removeChild(x1),
      _2174: x0 => ({type: x0}),
      _2175: (x0,x1) => new Blob(x0,x1),
      _2176: x0 => globalThis.URL.createObjectURL(x0),
      _2177: x0 => x0.click(),
      _2178: x0 => x0.remove(),
      _2192: x0 => new Array(x0),
      _2194: x0 => x0.length,
      _2196: (x0,x1) => x0[x1],
      _2197: (x0,x1,x2) => x0[x1] = x2,
      _2200: (x0,x1,x2) => new DataView(x0,x1,x2),
      _2202: x0 => new Int8Array(x0),
      _2203: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _2204: x0 => new Uint8Array(x0),
      _2212: x0 => new Int32Array(x0),
      _2214: x0 => new Uint32Array(x0),
      _2216: x0 => new Float32Array(x0),
      _2218: x0 => new Float64Array(x0),
      _2220: (o, c) => o instanceof c,
      _2224: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2224(f,arguments.length,x0) }),
      _2225: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2225(f,arguments.length,x0) }),
      _2229: (o, a) => o + a,
      _2250: (decoder, codeUnits) => decoder.decode(codeUnits),
      _2251: () => new TextDecoder("utf-8", {fatal: true}),
      _2252: () => new TextDecoder("utf-8", {fatal: false}),
      _2253: x0 => new WeakRef(x0),
      _2254: x0 => x0.deref(),
      _2260: Date.now,
      _2262: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _2263: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _2264: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _2265: () => typeof dartUseDateNowForTicks !== "undefined",
      _2266: () => 1000 * performance.now(),
      _2267: () => Date.now(),
      _2268: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _2269: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _2270: () => new WeakMap(),
      _2271: (map, o) => map.get(o),
      _2272: (map, o, v) => map.set(o, v),
      _2273: () => globalThis.WeakRef,
      _2283: s => JSON.stringify(s),
      _2284: s => printToConsole(s),
      _2285: a => a.join(''),
      _2286: (o, a, b) => o.replace(a, b),
      _2288: (s, t) => s.split(t),
      _2289: s => s.toLowerCase(),
      _2290: s => s.toUpperCase(),
      _2291: s => s.trim(),
      _2292: s => s.trimLeft(),
      _2293: s => s.trimRight(),
      _2295: (s, p, i) => s.indexOf(p, i),
      _2296: (s, p, i) => s.lastIndexOf(p, i),
      _2297: (s) => s.replace(/\$/g, "$$$$"),
      _2298: Object.is,
      _2299: s => s.toUpperCase(),
      _2300: s => s.toLowerCase(),
      _2301: (a, i) => a.push(i),
      _2302: (a, i) => a.splice(i, 1)[0],
      _2304: (a, l) => a.length = l,
      _2305: a => a.pop(),
      _2306: (a, i) => a.splice(i, 1),
      _2308: (a, s) => a.join(s),
      _2309: (a, s, e) => a.slice(s, e),
      _2311: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _2312: a => a.length,
      _2313: (a, l) => a.length = l,
      _2314: (a, i) => a[i],
      _2315: (a, i, v) => a[i] = v,
      _2317: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _2318: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _2319: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _2320: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _2321: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _2322: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _2323: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _2324: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _2326: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _2327: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _2328: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _2329: (t, s) => t.set(s),
      _2331: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _2333: o => o.buffer,
      _2334: o => o.byteOffset,
      _2335: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _2336: (b, o) => new DataView(b, o),
      _2337: (b, o, l) => new DataView(b, o, l),
      _2338: Function.prototype.call.bind(DataView.prototype.getUint8),
      _2339: Function.prototype.call.bind(DataView.prototype.setUint8),
      _2340: Function.prototype.call.bind(DataView.prototype.getInt8),
      _2341: Function.prototype.call.bind(DataView.prototype.setInt8),
      _2342: Function.prototype.call.bind(DataView.prototype.getUint16),
      _2343: Function.prototype.call.bind(DataView.prototype.setUint16),
      _2344: Function.prototype.call.bind(DataView.prototype.getInt16),
      _2345: Function.prototype.call.bind(DataView.prototype.setInt16),
      _2346: Function.prototype.call.bind(DataView.prototype.getUint32),
      _2347: Function.prototype.call.bind(DataView.prototype.setUint32),
      _2348: Function.prototype.call.bind(DataView.prototype.getInt32),
      _2349: Function.prototype.call.bind(DataView.prototype.setInt32),
      _2352: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _2353: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _2354: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _2355: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _2356: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _2357: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _2370: (o, t) => o instanceof t,
      _2372: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2372(f,arguments.length,x0) }),
      _2373: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2373(f,arguments.length,x0) }),
      _2374: o => Object.keys(o),
      _2375: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _2376: (handle) => clearTimeout(handle),
      _2377: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _2378: (handle) => clearInterval(handle),
      _2379: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _2380: () => Date.now(),
      _2381: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _2382: (x0,x1,x2) => x0.fetch(x1,x2),
      _2383: (x0,x1) => x0.get(x1),
      _2384: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._2384(f,arguments.length,x0,x1,x2) }),
      _2385: (x0,x1) => x0.forEach(x1),
      _2386: x0 => x0.abort(),
      _2387: () => new AbortController(),
      _2388: x0 => x0.getReader(),
      _2389: x0 => x0.read(),
      _2390: x0 => x0.cancel(),
      _2408: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2408(f,arguments.length,x0) }),
      _2409: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2409(f,arguments.length,x0) }),
      _2419: (x0,x1) => x0.key(x1),
      _2420: x0 => x0.trustedTypes,
      _2422: (x0,x1) => x0.text = x1,
      _2428: (x0,x1) => x0.getContext(x1),
      _2438: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _2439: (x0,x1) => x0.exec(x1),
      _2440: (x0,x1) => x0.test(x1),
      _2441: (x0,x1) => x0.exec(x1),
      _2442: (x0,x1) => x0.exec(x1),
      _2443: x0 => x0.pop(),
      _2445: o => o === undefined,
      _2464: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _2466: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _2467: o => o instanceof RegExp,
      _2468: (l, r) => l === r,
      _2469: o => o,
      _2470: o => o,
      _2471: o => o,
      _2472: b => !!b,
      _2473: o => o.length,
      _2476: (o, i) => o[i],
      _2477: f => f.dartFunction,
      _2478: l => arrayFromDartList(Int8Array, l),
      _2479: l => arrayFromDartList(Uint8Array, l),
      _2480: l => arrayFromDartList(Uint8ClampedArray, l),
      _2481: l => arrayFromDartList(Int16Array, l),
      _2482: l => arrayFromDartList(Uint16Array, l),
      _2483: l => arrayFromDartList(Int32Array, l),
      _2484: l => arrayFromDartList(Uint32Array, l),
      _2485: l => arrayFromDartList(Float32Array, l),
      _2486: l => arrayFromDartList(Float64Array, l),
      _2487: x0 => new ArrayBuffer(x0),
      _2488: (data, length) => {
        const getValue = dartInstance.exports.$byteDataGetUint8;
        const view = new DataView(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
          view.setUint8(i, getValue(data, i));
        }
        return view;
      },
      _2489: l => arrayFromDartList(Array, l),
      _2490: (s, length) => {
        if (length == 0) return '';
      
        const read = dartInstance.exports.$stringRead1;
        let result = '';
        let index = 0;
        const chunkLength = Math.min(length - index, 500);
        let array = new Array(chunkLength);
        while (index < length) {
          const newChunkLength = Math.min(length - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(s, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      _2491: (s, length) => {
        if (length == 0) return '';
      
        const read = dartInstance.exports.$stringRead2;
        let result = '';
        let index = 0;
        const chunkLength = Math.min(length - index, 500);
        let array = new Array(chunkLength);
        while (index < length) {
          const newChunkLength = Math.min(length - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(s, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      _2492: (s) => {
        let length = s.length;
        let range = 0;
        for (let i = 0; i < length; i++) {
          range |= s.codePointAt(i);
        }
        const exports = dartInstance.exports;
        if (range < 256) {
          if (length <= 10) {
            if (length == 1) {
              return exports.$stringAllocate1_1(s.codePointAt(0));
            }
            if (length == 2) {
              return exports.$stringAllocate1_2(s.codePointAt(0), s.codePointAt(1));
            }
            if (length == 3) {
              return exports.$stringAllocate1_3(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2));
            }
            if (length == 4) {
              return exports.$stringAllocate1_4(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3));
            }
            if (length == 5) {
              return exports.$stringAllocate1_5(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4));
            }
            if (length == 6) {
              return exports.$stringAllocate1_6(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5));
            }
            if (length == 7) {
              return exports.$stringAllocate1_7(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6));
            }
            if (length == 8) {
              return exports.$stringAllocate1_8(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7));
            }
            if (length == 9) {
              return exports.$stringAllocate1_9(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7), s.codePointAt(8));
            }
            if (length == 10) {
              return exports.$stringAllocate1_10(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7), s.codePointAt(8), s.codePointAt(9));
            }
          }
          const dartString = exports.$stringAllocate1(length);
          const write = exports.$stringWrite1;
          for (let i = 0; i < length; i++) {
            write(dartString, i, s.codePointAt(i));
          }
          return dartString;
        } else {
          const dartString = exports.$stringAllocate2(length);
          const write = exports.$stringWrite2;
          for (let i = 0; i < length; i++) {
            write(dartString, i, s.charCodeAt(i));
          }
          return dartString;
        }
      },
      _2493: () => ({}),
      _2494: () => [],
      _2495: l => new Array(l),
      _2496: () => globalThis,
      _2497: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _2498: (o, p) => p in o,
      _2499: (o, p) => o[p],
      _2500: (o, p, v) => o[p] = v,
      _2501: (o, m, a) => o[m].apply(o, a),
      _2503: o => String(o),
      _2504: (p, s, f) => p.then(s, f),
      _2505: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _2506: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2507: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2510: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2511: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2512: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2513: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2514: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2515: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2516: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _2519: x0 => x0.index,
      _2520: x0 => x0.groups,
      _2525: x0 => x0.flags,
      _2526: x0 => x0.multiline,
      _2527: x0 => x0.ignoreCase,
      _2528: x0 => x0.unicode,
      _2529: x0 => x0.dotAll,
      _2530: (x0,x1) => x0.lastIndex = x1,
      _2531: (o, p) => p in o,
      _2532: (o, p) => o[p],
      _2533: (o, p, v) => o[p] = v,
      _2534: (o, p) => delete o[p],
      _2535: v => v.toString(),
      _2536: (d, digits) => d.toFixed(digits),
      _2540: x0 => x0.random(),
      _2541: x0 => x0.random(),
      _2545: () => globalThis.Math,
      _2547: () => globalThis.document,
      _2548: () => globalThis.window,
      _2553: (x0,x1) => x0.height = x1,
      _2555: (x0,x1) => x0.width = x1,
      _2559: x0 => x0.head,
      _2561: x0 => x0.classList,
      _2566: (x0,x1) => x0.innerText = x1,
      _2567: x0 => x0.style,
      _2568: x0 => x0.sheet,
      _2570: x0 => x0.offsetX,
      _2571: x0 => x0.offsetY,
      _2572: x0 => x0.button,
      _2585: x0 => x0.status,
      _2586: (x0,x1) => x0.responseType = x1,
      _2588: x0 => x0.response,
      _2711: (x0,x1) => x0.draggable = x1,
      _2727: x0 => x0.style,
      _3086: (x0,x1) => x0.download = x1,
      _3111: (x0,x1) => x0.href = x1,
      _3659: (x0,x1) => x0.accept = x1,
      _3673: x0 => x0.files,
      _3699: (x0,x1) => x0.multiple = x1,
      _3717: (x0,x1) => x0.type = x1,
      _3972: (x0,x1) => x0.src = x1,
      _3974: (x0,x1) => x0.type = x1,
      _3978: (x0,x1) => x0.async = x1,
      _3982: (x0,x1) => x0.crossOrigin = x1,
      _3984: (x0,x1) => x0.text = x1,
      _3992: (x0,x1) => x0.charset = x1,
      _4019: (x0,x1) => x0.width = x1,
      _4021: (x0,x1) => x0.height = x1,
      _4092: (x0,x1) => x0.fillStyle = x1,
      _4153: x0 => x0.data,
      _4459: () => globalThis.window,
      _4523: x0 => x0.navigator,
      _4785: x0 => x0.trustedTypes,
      _4787: x0 => x0.localStorage,
      _4895: x0 => x0.geolocation,
      _4898: x0 => x0.mediaDevices,
      _4900: x0 => x0.permissions,
      _4914: x0 => x0.userAgent,
      _5134: x0 => x0.length,
      _7161: x0 => x0.signal,
      _7229: x0 => x0.firstChild,
      _7240: () => globalThis.document,
      _7333: x0 => x0.body,
      _7335: x0 => x0.head,
      _7684: (x0,x1) => x0.id = x1,
      _7711: x0 => x0.children,
      _9065: x0 => x0.value,
      _9067: x0 => x0.done,
      _9253: x0 => x0.size,
      _9261: x0 => x0.name,
      _9268: x0 => x0.length,
      _9279: x0 => x0.result,
      _9788: x0 => x0.url,
      _9790: x0 => x0.status,
      _9792: x0 => x0.statusText,
      _9793: x0 => x0.headers,
      _9794: x0 => x0.body,
      _12227: (x0,x1) => x0.display = x1,
      _14186: () => globalThis.console,
      _14215: () => globalThis.window.flutterCanvasKit,
      _14216: () => globalThis.window._flutter_skwasmInstance,
      _14217: x0 => x0.name,
      _14218: x0 => x0.message,
      _14219: x0 => x0.code,

    };

    const baseImports = {
      dart2wasm: dart2wasm,


      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
    };

    const deferredLibraryHelper = {
      "loadModule": async (moduleName) => {
        if (!loadDeferredWasm) {
          throw "No implementation of loadDeferredWasm provided.";
        }
        const source = await Promise.resolve(loadDeferredWasm(moduleName));
        const module = await ((source instanceof Response)
            ? WebAssembly.compileStreaming(source, this.builtins)
            : WebAssembly.compile(source, this.builtins));
        return await WebAssembly.instantiate(module, {
          ...baseImports,
          ...additionalImports,
          "wasm:js-string": jsStringPolyfill,
          "module0": dartInstance.exports,
        });
      },
    };

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      "deferredLibraryHelper": deferredLibraryHelper,
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}

