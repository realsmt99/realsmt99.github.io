'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bb13d688f1be0e911e41f48ed0d3423e",
"version.json": "e9eb58db72d407be27e9fa052224c304",
"index.html": "62f890108550a42ac9a5292d3199d459",
"/": "62f890108550a42ac9a5292d3199d459",
"main.dart.js": "8b54aba8100e2a14da5ff74495c402af",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "a7deff2beeef7f40cc5b975adbc22616",
"logo.png": "27d9796bad7f85f47bb4065cf1679ccc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7473a968a287916942f6a36c31364eb9",
"main.dart.wasm": "babff1ff0b5263345f615de9a8a6b7df",
".git/config": "64af348182d5bc047e79aa89d2d6388b",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "5f22e4867814a2022aa2a916bbf3efef",
".git/objects/3c/a823d3ec98c96a655c3c2c4f1d6c1ccd4d9ca2": "b3a1425d6545122e5513183ba316d61b",
".git/objects/60/7e7029f9b8889f538bf0b2cc0c86e7dcd9c58b": "9443efff5dc8a6b2980d6464c006f737",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "5b7e482c1a03514433dfa45ae5ad5c24",
".git/objects/9d/9a9d818240984931b66af1556305fbbada0e57": "c3cf1d64085c69ee212249b1329ecf7d",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "1f4decf6bd1e79e74c383dd9dbcf3d4b",
".git/objects/d7/9c5bd7a9358cff9553800bb35be8f1111dd6e2": "d6663537d8b1476e53b6e39a85c0aa22",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "f06d3f21945ea72565c84c740cbd7fd8",
".git/objects/a5/eced0ab1e3f84d43539516e02e108395a2c31b": "18a2017f13bb1c19e242e33cbc250521",
".git/objects/bd/0c397f8d2264bcd8a5546754b40fdb62a4cf17": "213f98c092dcf9a206465702dfc7c843",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "c887a57ff0eafa2df6b6f3fb5d630526",
".git/objects/f3/68f628e34a273d321545e5dfbd4cc6b34bb4d9": "824beb4d25075d8c9bb96ecbd1490631",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "9c41d2761da53894e11f717877b1707a",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "acb5fd748aa46d54ae30a923f218cb1a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/4b/ff7263dc7b68ac6a4a294b7ea0ea62bb836b74": "a184cbb6e3a49d06a3dfa3cf5e5a9baf",
".git/objects/7d/a57e8d4a912bab2e08a6dd82cc8af1babab077": "f56dadc2bb0ec03cf491cb18c6165379",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "fea60a4487346b57a5566c176c3edf3d",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "81873aad6cda7e0ddf78f27b492bc424",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/26/5ef58fc920ef6c3a01336c0058aacaa2b6f39c": "f12f1025152543b2c4b2ed62f70902f1",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "889bc03fb6a15e508732478b9100196e",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "46bca6166a7cbe51084b7538f95050b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/1492b24bd65e1e1bc32ae71d8ded17149ae0e3": "665541dd9f703e396e084b409e66f1dd",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "673223b74887b0a5d09964ce67729c09",
".git/objects/5d/721c4bc34c6d9eb2d0fb3bffa77be3096c6973": "b14a2e3685578a64fb4b4f547784c728",
".git/objects/31/26b316799c08cbf8755d67de5e704733e8f804": "88002913038f670b39272aae71048f9a",
".git/objects/91/16b0d80364dfb4a3a49740a1816170d2c9e02d": "11ef24b06349e7afc86f8c9518dc2684",
".git/objects/62/449d6b03da5d7be5d48eb4c12bcb1afa441507": "126ce111bf38b8eaa6818106a45caf17",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "f80b8aeca87f65ef1d0dd73fe8b9eaee",
".git/objects/6c/ae39d930a7dbb474740109348dd53a1cc4a5c2": "53668534bf72bab1b00f085f2f614bc3",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "0c8aad8fb3fe9611f0ffb4f15f4b1639",
".git/objects/55/c7201d04c471b2dc3aabec95c9036307c54a63": "972300b78d320a9c0c513a4adf841e88",
".git/objects/63/aa6a1ae8c77935566ee3c647a41db18b880b7e": "bce692480678341741f4c7273525d49f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "719b91b3b0c9c9c1b12187af557fd8cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "34d9bb262a1db8360a1db06f4cea5edc",
".git/objects/e6/f4ca8fab01c0683b579dd7bf829ed02182aa15": "2cc6e5a885095343e5408a9cd7f813fa",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "cfcbae98ed59ea0e225d141b40bcf512",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "81eb5686768718a01892b81166ee3cd0",
".git/objects/49/07058c2d6bdaf5aebc8dcf9954261f02fffe4a": "f0ba45ee3ba8128a6c6b5e771b343fe3",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "d8c573e15bec8452da8236d327ae81c1",
".git/objects/40/01be70251d455db116a0d1e6173ae9bee16e75": "6deda305e0ee2b586eabd0f568b52ab9",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/objects/7a/8817cb8c41e0f6f2ffd876be3bfdd132fb5cc5": "c8bba5a42a90d546097c3ce922719119",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "264da97bbfbf4440a9216ef2f9ae3fca",
".git/logs/refs/heads/master": "264da97bbfbf4440a9216ef2f9ae3fca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "f2e7f1c04fd06c10192cf702c761b8e1",
".git/index": "57916b27b40b27817d4cceb12153f4d6",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
"assets/AssetManifest.json": "adda7667ea9fa2a0c6ff695e9da2808d",
"assets/NOTICES": "31277ae6d83fbf381fd40668ea8014bd",
"assets/FontManifest.json": "6499acc7a9249d541b174c40e56a1d0e",
"assets/AssetManifest.bin.json": "8856f0e14923060fa55f255c082f6c58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "24369213cb0ef11e3ea52141936067bd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo-sfr.png": "0a2f6f549eb4e0ad94825d8d47c1bdfb",
"assets/assets/keos-logo.jpeg": "c02895e7833aae8e1217f8e94d8d7ec5",
"assets/assets/logo.png": "27d9796bad7f85f47bb4065cf1679ccc",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
