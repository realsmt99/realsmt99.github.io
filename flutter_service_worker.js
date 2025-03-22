'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "16897ee3b76b278b365787b93e63dc86",
"version.json": "2a0a3c1996a9025df5a5d29cd68605dc",
"index.html": "81eca706351b3a238adb45682d061620",
"/": "81eca706351b3a238adb45682d061620",
"main.dart.js": "50cbaa2533988e68efbf8ab1f56800b6",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "3b31af96633a9856bbe45fc5cbe5771c",
"main.dart.mjs": "5580980fadb5147e90de4ac4426f4338",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5297bec82c4d9e9fabf8bf946aaadcde",
"main.dart.wasm": "5cce496671c6899623530e0be11b3b72",
".git/config": "78555bc8cf2d37bb76199fcb7793799a",
".git/objects/61/004b28a96b604a4f2e4a6041dd1ad7b5c9d7aa": "5cd5aa6402ea95a32a528b748dfd56b3",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "fa07d3cdd10e555c825c74e6c44eeb59",
".git/objects/66/51c0f146e5a823ca777ea883ccdf3a17dbc2da": "edbaacd27b2d718e13f0764a3a7d8848",
".git/objects/3e/641b6b693f031f9f89d2b69651ef1bc604152a": "dc080d6a974e761ae6931fcc951a0219",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "9c7ac2161ab4d41eb72995f10abe8780",
".git/objects/68/0b4b9deacb30bad8551e3a9048810183fc98d1": "b293aa11117476b25328bba2cb521ef9",
".git/objects/3b/86812ac7bf1ba8c874d3fb74455c044a2765a1": "568587a758799f29d77743b48dd8b159",
".git/objects/9e/65176d0a637b6fce980647cfdeb45c01cd81ce": "0384dd7c1adf5ff058c0f2685a20f2b6",
".git/objects/35/759de97102a871b591c520a774cba577bfdc34": "0ea7a02331adc529577d01acd0b67aef",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "0b652a95e80871f18df69f885cb1ff2c",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "5b7e482c1a03514433dfa45ae5ad5c24",
".git/objects/02/adb9e91518c331b5bbb46f38a0ae460d388a8c": "b7b49ab0f9c880dd309eb32a14fab4ed",
".git/objects/d9/adabe82baf30299e2c0dc0a2718f83f2433e55": "3364c082015f5a38b60a948c8447ed33",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "1f4decf6bd1e79e74c383dd9dbcf3d4b",
".git/objects/bd/a3902e2ee7a9bdace89c965ecf2316a614ab33": "d15b12dd3cf16c1a9567ea32c9ea1c47",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "00199283dd452611acddd73a67d4dee2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/e65cadb9bac07bcaea043e9918de7a29c91177": "ead8e6f58c89e4ffa38520f6bc08b0a0",
".git/objects/d8/5f89fccf4d424ebfd066644f17c33e01fcb15c": "b3a7da3fe9a732d670974a7efb68d129",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "9b6328b3efce0fa115a3b5b94bac8400",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "8fc8aaa1022819f891aeb8551b69924d",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "7f2ddce983bb049b84abfa6d99e5d433",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "95ac5ff60ebc4b897f21e99d1a33c3b3",
".git/objects/fd/f4e3122ad4e960f485cd2ef2105760421b0089": "eaaa1459b703e0e9c097fa4d8f45308d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "d8ab94e15dbe38141547eb643e354874",
".git/objects/e3/cbca147831f8b61fbaaeb8739d595d8b2e2814": "0308956f78ea1bae464af62d8de48a67",
".git/objects/cf/2b65d825782844c9f818ec607200e32d4c5666": "3e20419a9f91d99fe143ac1db39ec6ad",
".git/objects/e4/a1d6d1eac67825f9bf8074ccd8979934878f78": "45fb92727aaa523ff169cd6fca454130",
".git/objects/fb/41bd7d03e3a5b32f1aeaffe238597145094c2e": "794049bd36a09e9a288a867fae90ec02",
".git/objects/c1/9bf7a97a67f4ac4dff4362e95c79992e28e179": "6aa4fc47838dd33de38d34d9d46a1e13",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/ec/c8d585229d2a8640d349943041bc2437f233d1": "bdcbe7aba78c2c10af63c8d6ec58dd6d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/27/14fadaba9e61ac79d7c7e560cd3edd661b708d": "6f4480e7031e29f70cd6b1888d61b052",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/11/1cf6ee825a7c32a57a4b0988c4899e79f05e8c": "b013e016d0e42e986f0304dcdaa29613",
".git/objects/16/c5ef0a43f0b004612126fed1b6977e7bdfde2e": "ea134985f565acf549b23fb18371250e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/87/991b2e54dcf2a1f0fa8e8c8c1c0c344f92dada": "d852de1b95c9d8228be6a3455f09f72d",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "81873aad6cda7e0ddf78f27b492bc424",
".git/objects/8f/9dd8e2a22b0e63a32f4286bf76c86fc155ec7b": "0e3d709ee7e81eefe532850c7d98628d",
".git/objects/8a/63a9c50210d812dcc6849dac1ebd931320daf0": "da430212311ec1862308b5018727f329",
".git/objects/7e/4acde410bf5dc4fc30430599342c09223c0a43": "29dd10cd6a476c85c5e4c74e8ac1fce7",
".git/objects/19/078de4d883c2f09a0216f7ec4b520b7625a12e": "e26028d626fd657fc8aaf650c92a1098",
".git/objects/86/b624205fc7bceca7edbdcc5bface02c4a76719": "7336353f51157856c022715611c16054",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "8cd7e9ca99016151fd67939031fb3bfd",
".git/objects/2a/7ae3edd0cf53539677732a9e17166263dd6917": "6a84533644cb67ad33cad484b3d713e0",
".git/objects/43/2f324d83902deac699baf7779180a834b50864": "8c1a0403069f0cb1263799d85bc7e12d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/07/07c16af46f5acc2dd0b3cefa2fd66e5e774df2": "f9339017974ee025f80e6decfe07c378",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "673223b74887b0a5d09964ce67729c09",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "b87052610218bef0a556987fef8b2b61",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "5e80c82718faee206224e26e47316cd8",
".git/objects/9a/cfe57f0240245dcf32724c5b2b71cc942a7cde": "16021ee0003deac3e80c58694a5df7ae",
".git/objects/5d/220e2a860d174da73f8654baab781be0048ffa": "0300a08374b5d4f5ac788be3b6d2c07b",
".git/objects/31/791f64a3948405d90f1acc19b449cea00e58b1": "fac87ea13707d14779c4d069ba847ebe",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "a042574a8769026a4fa1f49fadb0a581",
".git/objects/5e/3225972dca1d1a4f6a5ce1c93e29faa3ec0cab": "32e12193600da4227edd9ff224174e6c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/6d/5a92ec2a06251a83a725b9f380cdaa36ebf903": "04cd7c89d0f7a616e1b432706560b702",
".git/objects/01/e838d14f41bf59a1b54b111cd2f54b0cd4ef15": "ed9c7290e541faad734d361c60ac8f90",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "510e1327b3e01098af74560b38416c5d",
".git/objects/39/f034d112ac75033b652438d42088ed333b1187": "0569c60472cfa308e4a32ea4df2b5f86",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "0c8aad8fb3fe9611f0ffb4f15f4b1639",
".git/objects/97/8fb79a8c3ca8d01f8d0ea18577b7c436741abe": "c7108a1768c448e5d17ca82047eb60f3",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/63/4a1f6bc90c852c0bfb2d5fc9fa4c070a6f0c3d": "8660d44fd23c4411534f17c78124a584",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/0a/0d0695b219ceefecf07ff3a2ecd22909bceb01": "0e63dae27fa8f023fc420dbef553799a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "2e7ec5cc274deefa562b01bdfd956609",
".git/objects/a7/11c07e2834bb32e12b590c55a4900209c0f368": "fb4696d3630f7bd83d3ce0d19efff20a",
".git/objects/b8/34a87513a06be513f0f699caef9cc2c372ba11": "d0a7c1c95bc7a527af71f2cc454f1866",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/1a0803ca6ab198fb9eaae39eb18f06f605dab4": "43485564bd51ba89df74e4e0679cbd84",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/a9/e976d7dc9b81c0ba6d50be12b38dfb96eaf770": "5723fb726913883df28518e3b1876bc5",
".git/objects/a9/26afe0594eee55975b1e9f8dc0c8b6472dc4da": "40c93b067d5403f46e9caa38a795ab51",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "719b91b3b0c9c9c1b12187af557fd8cf",
".git/objects/aa/a50f095118d8fe2ba1137e4952b5fe2b2706b4": "b995de4bccfd46bc6acbefae9c0f0da1",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c3/d8a69704148367d88f975c0ae0f8397ccf76f5": "aa619cde2bc4271573bae0a2722f0748",
".git/objects/c4/9318fab216daa19ae901883a8db0c90ea11e82": "aa93ff55a71954e301e89f95e7b8a029",
".git/objects/ea/6ab0b3326cac3912aa501ddc23f6d8511be0d7": "0d14549a845e5f7c2b42e8955f4a201c",
".git/objects/f9/6df525f2d423a1f1ba6f2062a9147c5b321336": "7abf72b7963384387188f3e0aff70963",
".git/objects/c5/48fb6a69babc91355ef8b86b19a1fb8344079f": "79266b2070a66cd0d400f166723536cf",
".git/objects/e7/d106c4421e680481973b9d78dfbe4f0f09ed97": "f80fd6cdcf1f6c406f9dcf4ca6c55fc7",
".git/objects/cb/c2c2212688cc6d750ce3eace6443ea303efc76": "d17539e04cddedb965796498b7fc2255",
".git/objects/cb/0df4fffd7359a77380eae6e3d25e06a699116c": "d5a61fe0f4dada0492c6ffaf03e7286c",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "5cc155d6f06cae3b697769909360ede2",
".git/objects/e0/186c0af1f8cfcd080fca834998c4cc3b650c76": "74d669332765be96b34d137e21f8bb4c",
".git/objects/2c/b2201ebd80dc0d20c81de99fc4b34099be2212": "61bbc11cc004244e64cc8ab646c8a8b3",
".git/objects/79/ca5fb348a74a513642129a8e032c3059fa7674": "eea4ac4147b05c5a3ed67d989d85fb59",
".git/objects/79/9517f7d6696125535fc3c2fba9490a60829284": "2efb5e38f34845d51b84df0aea93e0f6",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "a398f69e713b316e8215482884ad37cd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/83/f20efa56a20f251eba50a98b5d55c1a693b862": "d96aa216ffcefd045daf1193cc5400c8",
".git/objects/1b/1e6aeabb410147a4880175dda7b124af9f8d04": "9d508143e9178a44ef2d4e49b7555751",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "c271475edf20a5911cfba79292044d99",
".git/objects/77/658498b7fa92f5f34bdd2d5cffeec2a038697e": "598c6a124c9521a676930dd4d311d59b",
".git/objects/48/4b2fba0e50e33508b0f7a3d5584234f61f7210": "b2d53a2e23638430ce3fecdc477406d4",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "c3c094af00829b8acfa443209cc2f39d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "904312b32b8deb015d71513528438cd5",
".git/objects/71/033dd54049818c8343a45f143519963632c941": "42ad2d32aae953ab7f90cd1293f42253",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "81eb5686768718a01892b81166ee3cd0",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "c4f7ddc155dba947b0bfb432703955fb",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "bbb2e4132d9e6ec36ca5e33298b921c5",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "d8c573e15bec8452da8236d327ae81c1",
".git/objects/14/98cbc3235d1880d2041f5d1a33810f78e41260": "f8d658a3ce839976b7981a9eba49a0e4",
".git/objects/25/98c6b615b636f8ac3a784affc0c78784ae6030": "c0c9b9e067521fa31f8e1d35ff70212a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6292e29b782190521e9c245379fc03b1",
".git/logs/refs/heads/main": "6292e29b782190521e9c245379fc03b1",
".git/logs/refs/remotes/origin/main": "5ac0325bfb3ff5c304f2fe44cbceb966",
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
".git/refs/heads/main": "563d62337a38f22f78ddffdd422dae57",
".git/refs/remotes/origin/main": "563d62337a38f22f78ddffdd422dae57",
".git/index": "dcd9fabccf1a6407421fd29279af3b07",
".git/COMMIT_EDITMSG": "4b35f81c73d6cf4f95a36f8ebf345f8e",
"assets/AssetManifest.json": "a05fa377225a58284273258e40f1454e",
"assets/NOTICES": "a5c356cf48335c797585c56cc9f5c89f",
"assets/FontManifest.json": "363bbf47a6ed74c6684008cc187adefc",
"assets/AssetManifest.bin.json": "741340c81daf166919690d15eb213ff8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "e73f0125ca87ce9b1164d5e8aba546ae",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3aa91e570e37eb6dc6b2b751b7d09cf5",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "03a4324251625c7cad3953d30c991100",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/t1.jpg": "29597ecc9ccb4db4a633dac2bee2322f",
"assets/assets/images/teacher.png": "4edade415c5fdf989647a739860779da",
"assets/assets/images/logo_cnf2.png": "93766657d8941df4003d023d020635d9",
"assets/assets/images/Vector.png": "2dd0b28e15c6c9616612d8464396dca3",
"assets/assets/images/cnf_logo.png": "3b31af96633a9856bbe45fc5cbe5771c",
"assets/assets/images/person.jpg": "a5d8302cbf28c634acf67e0057aeb1e7",
"assets/assets/images/teacher_dashboard.png": "639224f44824085e05094b829d95b403",
"assets/assets/images/resume.png": "b6583793a567da004a9b0e415d30022f",
"assets/assets/images/course.png": "8b7939a1c69526b00150918ad27b2533",
"assets/assets/images/logo.png": "b314a401a01ad25efb22eca8e8edcde7",
"assets/assets/images/google.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/images/facebook.png": "ceda85dc6354796fd08c69a2032d2b29",
"assets/assets/images/PaperPlaneRight.png": "492dbc6d52b7f8ae12e307e200a20b3c",
"assets/assets/images/resume2.png": "717fca8cfd12f50abb1187c3e46276ba",
"assets/assets/icons/menu_dashboard.svg": "d788c8334e9c9b88531e56f121006a87",
"assets/assets/icons/menu_train.svg": "86d8a7329d5c7dcd29a6738ca000349c",
"assets/assets/icons/link-broken.png": "ff05a3fbc4c1dbf54ba5ab8dcc180937",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
