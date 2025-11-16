'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "df6174bd4bfcee073762a475e8623607",
"version.json": "e9eb58db72d407be27e9fa052224c304",
"index.html": "62f890108550a42ac9a5292d3199d459",
"/": "62f890108550a42ac9a5292d3199d459",
"main.dart.js": "9839c38c4fa0289d822042a2c9fbed9e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"readme.md": "3905d7917f2b3429490b01cfb60d8f5b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "27d9796bad7f85f47bb4065cf1679ccc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7473a968a287916942f6a36c31364eb9",
".git/config": "e8b808f2a2744cc807f651d20465d741",
".git/objects/0d/1717810dbb0b3f075736b602e700f65d3900ce": "b07282dc73f2532e3e55e0b9071565ea",
".git/objects/95/e3d242ea0f4c4a8ca161caca73b32a255712ff": "40644abf197915d1b43962ca8c86a6f2",
".git/objects/92/9ba03955ff884399dc0ac67947ae655f022b2b": "ab20987b71bd6c253146ef27a34c2df8",
".git/objects/3b/611580c9fb74d10de837e1336af2f554954042": "c5c6dac65051a268b79e56be8edacdcc",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/9e/f3dae396ecfd98c3fc0aabea8712b71ce7c8b6": "4af9fddf3a452af9e79b08408e63a326",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "5f22e4867814a2022aa2a916bbf3efef",
".git/objects/3c/78ee2d8144f0c7c0ecdef6f363a9be6e134e05": "b0bccd5ca7bed9e5bea83633e295dd33",
".git/objects/3c/a823d3ec98c96a655c3c2c4f1d6c1ccd4d9ca2": "b3a1425d6545122e5513183ba316d61b",
".git/objects/58/34d6daaed8aa76bc6e005e7655fdda1eff484b": "ea39f0653f08593ef018c8621e527be9",
".git/objects/0b/e9f4a86324a4fe237b0eaf4e8b85313497fa04": "d1d1bcf914ae95317b3e7a02ea491ea6",
".git/objects/93/c8493be8f7cde354dbb3e63ab12ea59a620d4f": "69e7c257a3916fec4ac595f6d3d46faf",
".git/objects/0e/511c57982925ce77c516c9225aa450f47096f0": "c01150159fe93b2bb67c0e2f82b72040",
".git/objects/60/7e7029f9b8889f538bf0b2cc0c86e7dcd9c58b": "9443efff5dc8a6b2980d6464c006f737",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "5b7e482c1a03514433dfa45ae5ad5c24",
".git/objects/9d/9a9d818240984931b66af1556305fbbada0e57": "c3cf1d64085c69ee212249b1329ecf7d",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "1f4decf6bd1e79e74c383dd9dbcf3d4b",
".git/objects/d7/9c5bd7a9358cff9553800bb35be8f1111dd6e2": "d6663537d8b1476e53b6e39a85c0aa22",
".git/objects/be/5807765764b09f41b8a520af9f89a2623e5373": "50d9301aee88627835fc6e0ca0c4d263",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "f06d3f21945ea72565c84c740cbd7fd8",
".git/objects/a2/13288d7304437afe83f3472b8a06650d6d9cb3": "26f7753f192ffbd0ee2116272d635478",
".git/objects/a5/eced0ab1e3f84d43539516e02e108395a2c31b": "18a2017f13bb1c19e242e33cbc250521",
".git/objects/bd/0c397f8d2264bcd8a5546754b40fdb62a4cf17": "213f98c092dcf9a206465702dfc7c843",
".git/objects/bd/97cb0a7abd19a8d170e81e8a26d4a760b2944e": "ae8c44f3b458ddf3b70adcc39e318a2e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "c887a57ff0eafa2df6b6f3fb5d630526",
".git/objects/e5/c7f4c038a1cee9bbbde76308545062ea9ba55a": "6d5876b6a18c3d33b869a2e9242589c2",
".git/objects/f3/9f3d10488e79ddebaba0e8201ec54ec3c619a1": "712dbfddcce7db5ced4a807c73c96a07",
".git/objects/f3/68f628e34a273d321545e5dfbd4cc6b34bb4d9": "824beb4d25075d8c9bb96ecbd1490631",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ee/1e42e8fd42b31c0c0b3235c8a39c7ef7af03b0": "93a65faa34b49e0814b5a9521dccc815",
".git/objects/c9/d219d21c695b7f1b3c0a95b4d8ae8570fad79f": "eaa25dadcaab5ecffce687eb6a86ec5e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e3/3f0d39a1e14922584c722bda6bd5f97d07f90c": "526c97884234b1ff70921b53149f2455",
".git/objects/ca/33a334c98779ccf872314bb1262469f52169e5": "3e21f1e28c922291454d1190e34ad42b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "9c41d2761da53894e11f717877b1707a",
".git/objects/c6/4966afbccb1b56f311defb7dbca6b141ee72d8": "2196308dc6e6cdfba81960656a4151fe",
".git/objects/c6/98fd513b59bc891b221254cf2753dffad7a2f8": "ef1407c06d271e95fd4a9b3a9f36fe29",
".git/objects/c6/ee21b1b9f99fdabcf4946d231b1006aacf2f69": "02cf0e963c57c9787b5b2a9ec9bdc007",
".git/objects/ec/6421861ae59729777b62f191ee4a8b0678c289": "6f468e5b5873ce0e51b8318e28f9581d",
".git/objects/4e/451f27d6a7979f9a3a50a9159099d151fa8e5f": "4180214102f9493476280d97fc7f4298",
".git/objects/4e/c03500eae5cf4e5827293c9b6da2a621bddf08": "d77fbba118f69af0c6550d56560cd4af",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "acb5fd748aa46d54ae30a923f218cb1a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/18/e5afc78abcca9bbcc1e6edff9f8558b7982039": "5406eabad5398d246ec971213feb4d89",
".git/objects/27/0dd1ccc4c6f5ee151d0f3eb7bab648246a4ccb": "1123db1df8ea0963a9573410cfe2a6b9",
".git/objects/4b/ff7263dc7b68ac6a4a294b7ea0ea62bb836b74": "a184cbb6e3a49d06a3dfa3cf5e5a9baf",
".git/objects/11/10206d0608f9d98bf77330bcd51fc19198adbf": "6d5e3d7c9264194f5d4be5bbd33d14c6",
".git/objects/7d/a57e8d4a912bab2e08a6dd82cc8af1babab077": "f56dadc2bb0ec03cf491cb18c6165379",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "fea60a4487346b57a5566c176c3edf3d",
".git/objects/16/e10b85bbda4df1dedf4e4f88cc016771340b29": "d28092578f36e9f9d32d260dafcadbad",
".git/objects/42/36822427ddb73ad80e4abfd6b7053ac5d37f8c": "4a3db123b280f276568dc25bf5008e50",
".git/objects/73/38ad3a05d4485f9725ce3c64b2985c2c3c7f4d": "df93228dd7b401162e251db07f1f0e55",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "81873aad6cda7e0ddf78f27b492bc424",
".git/objects/28/f15ef13d2e960adeaf9e8165a5d1f8f04ad5ff": "89da4853291c07e3d6b8dd3a90242897",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/08a8255c1b24c288c3c9fb5db9f63d0dba2339": "bbfde340923a638bec266d5dce2dc30d",
".git/objects/26/5ef58fc920ef6c3a01336c0058aacaa2b6f39c": "f12f1025152543b2c4b2ed62f70902f1",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "889bc03fb6a15e508732478b9100196e",
".git/objects/4d/641dae2208e91578d27d758d8544e10ccad7c5": "7809b1b751e5e39848c230734ad6bc5b",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "46bca6166a7cbe51084b7538f95050b0",
".git/objects/43/13c554f80020f5f00653bcfec46589695fe9bd": "2ea85de0a91d854ea5dc260ca707680c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/e4e3e47ea1899a6146a38104708ceaccf6a6a4": "5fa306e22d8892b5163185aa538267ea",
".git/objects/9f/1492b24bd65e1e1bc32ae71d8ded17149ae0e3": "665541dd9f703e396e084b409e66f1dd",
".git/objects/6b/560af103625356cb4dbf15d2acf4c26822337a": "c788339125ea0bd1fb88459992e4d38d",
".git/objects/38/b6a2f453e3e35ce72314fb1d807aba2078d8c9": "21b948d7c0782accba8cbcaf0d6d0969",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "673223b74887b0a5d09964ce67729c09",
".git/objects/9a/6e30f5e5c14ef84fc09008b409ff52f28642b4": "02cd33a8371ef779f178b4a5cbad6a96",
".git/objects/5d/f99b732d107c8ca0dbfdba8a7bd65ee56d2d2b": "f7a4539c39bf2dac5ae944beeb9448a9",
".git/objects/5d/721c4bc34c6d9eb2d0fb3bffa77be3096c6973": "b14a2e3685578a64fb4b4f547784c728",
".git/objects/31/190df87ffb6534dee4473f9c221828d6a5d57c": "426f9f82768eac223e2ca04e2d893e36",
".git/objects/31/26b316799c08cbf8755d67de5e704733e8f804": "88002913038f670b39272aae71048f9a",
".git/objects/91/16b0d80364dfb4a3a49740a1816170d2c9e02d": "11ef24b06349e7afc86f8c9518dc2684",
".git/objects/62/449d6b03da5d7be5d48eb4c12bcb1afa441507": "126ce111bf38b8eaa6818106a45caf17",
".git/objects/96/12bee2fa847091af994c58d65c03ebe9042ff1": "e32ec85475b05af3aa9b69d4fd398e07",
".git/objects/96/394a79910dc1471ea7f31060e89b1b3412991a": "1386a174988ea73d60cb05e5e040b877",
".git/objects/96/8a0015f1b54c69e72a2808cccf931586998aa9": "1693abb4939879c5bd12cdcd4f1b73ee",
".git/objects/3a/60aad9bc78a25ad9bc3bdb69fff508484b5c28": "4db9a1b271b127e72ea1746aef4b8970",
".git/objects/54/31f8ca88aa03b6e7d96eb130a80a340dc1a93f": "1a59346e973c8e0cddc8e6ef8749f64f",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/53/2212955af40eaaf9dd1ee8919ddfb2960aca74": "066edca7a8a4fba223b64faf8a7d00fa",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "f80b8aeca87f65ef1d0dd73fe8b9eaee",
".git/objects/3f/22d948ea14b93a478f79ff69c6e8218470c77f": "a493ba0d307d59ebf1ff78930b02ae10",
".git/objects/5e/10548b9c2e0eecf1ecefe07293f03bc75eb2f9": "70c1d46e17cf3e2ddb16cc910d308478",
".git/objects/6d/8b36033e5884df775d3357d4803ef5c42e77ba": "c572c20cf2d6da98ca945de515858f59",
".git/objects/01/e07667560ece0da7ec84997af069f64ead7bc7": "2466d63423b77af74cf0f2fdf190d846",
".git/objects/06/5270e9fff53359bf031923fa4da0d1f2a3909a": "ab2566d4ea74d55885def4f0001ce2cb",
".git/objects/6c/832eb34d62d31755e162c1b29f0848ef66df4f": "a56cf8c683b2f272d7a5b594965bfee2",
".git/objects/6c/ae39d930a7dbb474740109348dd53a1cc4a5c2": "53668534bf72bab1b00f085f2f614bc3",
".git/objects/39/9be4c9bee5a90f427b6aca2ed2fc84defbf309": "cf234d2cedd08613c4cb3e102cf82e26",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "0c8aad8fb3fe9611f0ffb4f15f4b1639",
".git/objects/55/c7201d04c471b2dc3aabec95c9036307c54a63": "972300b78d320a9c0c513a4adf841e88",
".git/objects/63/13e1bb934d10f9b13c1872bb19477813d65d86": "3d5a07fdbc042fe12db99738a101d721",
".git/objects/63/aa6a1ae8c77935566ee3c647a41db18b880b7e": "bce692480678341741f4c7273525d49f",
".git/objects/0f/42cc9e0e643ae9a6599f45adb783942559474f": "c8a5f0b96c134b840e033a09533f076f",
".git/objects/0f/0ec1c9830a53867e5c24be3bbfc3d1260c89d7": "ef4a991e7bcba67f9850a1ef22202fc0",
".git/objects/0a/5fee175f809a6f940876d1e755144d6d8929e1": "5298bb35f86445719fbc899edf360e74",
".git/objects/64/d1beeebaabedbc9591d83092f3b27ae482d9da": "48c72b24aabbaaad9e45c6b904cd86a8",
".git/objects/90/7783a87c02eaa050eb81198e9d482c744c6e0c": "5a7c61c5f4b847dfe237761c1982c9c2",
".git/objects/bf/899e66f10ea8fb37e93b8b43d39639a52ad0c7": "5f509605e21cf69a06c6eb120e2f8be8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b8/9cff82c34159e75b8c21d5e20e7dba3b78ff52": "33c114e34d89b0999eb6ff1eaffb2e27",
".git/objects/dd/e35ca65dba163d093604fb9ab8b3d5d7ada2df": "a1e8000e1333d1f5ffa8c3b1e9bff156",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/a9/c475989c98c19d2c58e1641eac721225eee48f": "d40e78479dc290c8f1e1f95381e93152",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "719b91b3b0c9c9c1b12187af557fd8cf",
".git/objects/d2/5b8e37dcad613957334602c07306753ddab7fc": "79c0ddc6b4167ffd7e61c7d907599992",
".git/objects/d2/1beea4f42fb0e2aff7e0a2c72210d1b94ecd15": "677f1cb3cf72e33c6d664e6f2ed5504c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/ac067dc39c58ee326e60a2276ff3eb4301f142": "0bdd94550a113351d5e6c7a39fc2b0aa",
".git/objects/de/bc5b821b01a7a892bf4e1c201c0df683a4ad8b": "1988cb43eb61169299fd6752890ed309",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/25f62122dac5931c12e61377a89cc294987eeb": "4bda850041e37e2d3f77c6d2b22575da",
".git/objects/c4/1cec3a0b3d19c6228704a675fd1557a7cf23f0": "b601f48a3a33ecf42424d9fd27e886ca",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "34d9bb262a1db8360a1db06f4cea5edc",
".git/objects/ea/b4fec570d2cae25f35ebb38ed41cd1c34723d7": "fb5c321c04f30c595d50e65764d1a229",
".git/objects/ea/786ff2cf69cdc0e487ad1cea3b8bd361eb66a3": "84019ccb9c7e09231d126e5ad751ef75",
".git/objects/e6/f4ca8fab01c0683b579dd7bf829ed02182aa15": "2cc6e5a885095343e5408a9cd7f813fa",
".git/objects/f9/999e7daf5b470b11728afe120e697333082211": "5e8fc4af4dc1bd7f2ff015cb406e46ec",
".git/objects/f0/818a15b6817a92443da623171c5862f3c65c33": "3d11bdbd771b178779c284c06eb692ec",
".git/objects/fa/83c0ad9377343d48fda9d026b3c72816a3fc58": "e3aa3d194c30989d5304d5ca66e29107",
".git/objects/fa/2948584030c31906449d6c07fd9298bc1dbf5c": "c0d6de2a7d09e1d7e55b14563c6dd247",
".git/objects/fa/ac5cf9f99f7ed66e404e234e00ded957131637": "c4b99a8d2df1dfa4ead3f7988203b83a",
".git/objects/c5/2af44f7aeddf4746959a0bfd4236158f506783": "e87e94d95261496b18c0d7e8a08bcab5",
".git/objects/c2/17f4a12f9432c44f02465e33c7e9b8b131217d": "a9744e497baba8f7f866b775229b9d61",
".git/objects/f1/c2d4fc9438d30e73478670e8064f4624e28b01": "280c25c59401497ec52d9577819fa535",
".git/objects/e7/ad8decf7d9be924a9529865fbb747ff013c4d9": "dfca5f9216dc49e0f9a73b47b492141c",
".git/objects/cb/cc6280dafdb67f9c425c22a4d8c0c2da94fb7b": "66b1daea29e35791fd9d26739bed86a0",
".git/objects/ce/7a25bb4ba8b62c6f6ac54f192c3eeb662dde2b": "c0d79db80b242bbd5f0d7aeaa8aecec5",
".git/objects/e0/f2e6dffa5c8ab530fc765620b3ec85b2d8230c": "fa393a78890a30b04252bc9b49cf2def",
".git/objects/2c/954f6984bb28bd3e23a0a50e6b547b334ebf34": "2d337e780252abdc68d2bca5cd6034fd",
".git/objects/2c/c4957242338225d6b24190d68c994a40cb046e": "970653f0926ac0c14ce9be6e0416ab16",
".git/objects/79/7bc475b0c5bf3e19ef0f9843a5060c615c7b74": "b682b943f0e866e6d0fadc7c635eef95",
".git/objects/41/e1ab83a7d0db63b8cc35300d165ecc6dc526f6": "ea4255d46f175f9c2e4bebf8df7302ea",
".git/objects/41/8317ec91ecb10d618c7ea1be58a4cb342d4c80": "ad17e8d95dd6c310ee2da2b4cd063a30",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/70/07c1ca56b720fc3980581d097770b1624438b4": "7f85291f219396f9420dfd96dfd5110b",
".git/objects/24/6821bbcd365fa686c8a960b3570367c02fae99": "ffc4e5abf776b04e809d44b06d72dfd9",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "cfcbae98ed59ea0e225d141b40bcf512",
".git/objects/8d/69cc102fc143b2a8c59a2684e25f260dfeaf78": "7c71a1340121ec58f19133593d7cb854",
".git/objects/8d/a744d362d89c47079e9728d7f9a38b6116d82e": "f72a849063aa9902110fb41061ff56eb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/1d/130526fad28a77c8dba6fef2d45aded79a2296": "45edaa21c813f53f6e48eca6af4c166b",
".git/objects/71/1c9ac05bf19ecf8c8343a022cfe85870c6851b": "a4e2f3679f8d5b9d76cb13bc998b2e79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "81eb5686768718a01892b81166ee3cd0",
".git/objects/1c/a359bc459de1d5b41a13717a7b2e04b0c48047": "a5f806aa8c98bdd9cdb1767f54dcdf8f",
".git/objects/49/07058c2d6bdaf5aebc8dcf9954261f02fffe4a": "f0ba45ee3ba8128a6c6b5e771b343fe3",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "d8c573e15bec8452da8236d327ae81c1",
".git/objects/40/d980a08756376a62f6d8a0d7b9650c25d17c1f": "f350304741a9bd912c9e37d28da44ae8",
".git/objects/40/01be70251d455db116a0d1e6173ae9bee16e75": "6deda305e0ee2b586eabd0f568b52ab9",
".git/objects/47/3a5143a1c90a9b1662714bcc35d82789e81cb4": "ac33a951635b7d09cf40bfcd67fc81fb",
".git/objects/47/e6888927ff99440d34f954076a732b39296ffe": "aabda70f01bb75393468f0250293871c",
".git/objects/47/4150e7d47c7e7c6a81cf0b66f385d9c2f75d7f": "6b882bda60c0a1e9bb9f52e6dfd15d24",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/objects/7a/8817cb8c41e0f6f2ffd876be3bfdd132fb5cc5": "c8bba5a42a90d546097c3ce922719119",
".git/objects/8e/503200a069e59393c12fbace7f1821eec257e0": "2f0a0324216d4ef7e09f8208d81abc3f",
".git/objects/22/f7e38a56de6edfe475a84f16067110cd7f0bb6": "24d281eed98b40d080a61521ce19dbc8",
".git/objects/25/566bfe368f41f2b8e19bf070b33f836ac55381": "bae93bf1731c43f43d7929ae69cdff29",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b25a66f6d8317ce0b21875937b710f44",
".git/logs/refs/heads/gh-pages": "2f44431d65a74b3cb85f6e03acfdfb13",
".git/logs/refs/heads/master": "5117fd446cd07c601ed912ba7f1ae4b1",
".git/logs/refs/remotes/origin/gh-pages": "4ed025467d495bb76fa641322fea18e8",
".git/logs/refs/remotes/origin/master": "ff8e681abf9281fefa2793cc4aa735f0",
".git/logs/refs/remotes/origin/main": "f45ef83e19128b0a2d9e964613209924",
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
".git/refs/heads/gh-pages": "f6b9173805a9d444a1b560eeb12b9908",
".git/refs/heads/master": "b32032698f95400bd46f9205a22b463d",
".git/refs/remotes/origin/gh-pages": "f6b9173805a9d444a1b560eeb12b9908",
".git/refs/remotes/origin/master": "b32032698f95400bd46f9205a22b463d",
".git/refs/remotes/origin/main": "a5fa32ea0bd0643f43577abdb80f868a",
".git/index": "c42ef8f1c0cde46fe631a31f599bbd9b",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/FETCH_HEAD": "b9d0030f9a1c5412fee74dad34a99a1d",
"assets/AssetManifest.json": "a73577aa3d920a5a540026e5ce4a919d",
"assets/NOTICES": "95e0f7d653f1aa9cfaf8b5965005881a",
"assets/FontManifest.json": "6499acc7a9249d541b174c40e56a1d0e",
"assets/AssetManifest.bin.json": "731e4400bd2e35fa10f7bd38a6aae8fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a50bbcc5dd1143e5eaa48f4d64d9549e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo-sfr.png": "0a2f6f549eb4e0ad94825d8d47c1bdfb",
"assets/assets/template.docx": "3912f125cc234d4894b64b2f46487377",
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
