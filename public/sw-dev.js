/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-4b7c5883'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "images/arrow-down.svg",
    "revision": "a1dbde4ed4933be7430d46139e8dce83"
  }, {
    "url": "images/Arrow-white.svg",
    "revision": "7a8c558081b2a3ef9b113827ccf57865"
  }, {
    "url": "images/Arrow.svg",
    "revision": "f0495f7da2706407661360d1b0a58690"
  }, {
    "url": "images/background.png",
    "revision": "180e8180ded314a3ecebea7bb627373f"
  }, {
    "url": "images/big-k.png",
    "revision": "d7e4eb790cabb58e4b6fd76749ff4bda"
  }, {
    "url": "images/Circle-Text.svg",
    "revision": "db48d1504f384f8ed8a5320e5a111cbb"
  }, {
    "url": "images/darkmode-logo.svg",
    "revision": "8e5d4c59f0b4d33c6ee7f4a88fe755b1"
  }, {
    "url": "images/email-Blue.svg",
    "revision": "5d52fcaaae12512f00ac34e3b02deba7"
  }, {
    "url": "images/emaill.svg",
    "revision": "7e3c9d7acaf63e5d358544f8f12b965c"
  }, {
    "url": "images/fav-icon.png",
    "revision": "d879fd9803806cc745a474833b56bc38"
  }, {
    "url": "images/Icon.svg",
    "revision": "b7c6cc19f2a228ed9dc199e2a8da1655"
  }, {
    "url": "images/left.svg",
    "revision": "f669256045853abcf565e12051b6b06d"
  }, {
    "url": "images/Locastion-blue.svg",
    "revision": "3999997560b69d02e795893b1639c87e"
  }, {
    "url": "images/location-blue.svg",
    "revision": "087de9e2eba096b00b9b496e522aa0c7"
  }, {
    "url": "images/location.svg",
    "revision": "027d7168566700036b7528823819455b"
  }, {
    "url": "images/logo-h.svg",
    "revision": "966d9cc7b1bae6746af6c414ad0731f9"
  }, {
    "url": "images/logo.png",
    "revision": "ac2f6b55dded594370e1bd64201f2500"
  }, {
    "url": "images/logo.svg",
    "revision": "263ae6a628ee167c72605e6cb0ee070d"
  }, {
    "url": "images/logox.svg",
    "revision": "1cde70e6c31e48ec1bf44dd751c69d77"
  }, {
    "url": "images/long-arrow.svg",
    "revision": "407454d6fc836f8f3a650eab8ca0f413"
  }, {
    "url": "images/mian.svg",
    "revision": "ff0ca63b745a16dcdee37de38a5f691e"
  }, {
    "url": "images/phone-blue.svg",
    "revision": "9c9d54c21bc12d24da4ebac8b8fd99ed"
  }, {
    "url": "images/proj1.png",
    "revision": "ff54fdabadac9ba2c21849e636f05d4f"
  }, {
    "url": "images/proj2.png",
    "revision": "db6bb8be0cda4215f7d243e664faeeaf"
  }, {
    "url": "images/right.svg",
    "revision": "f2e5b93f67de0f885c11e4768f5ab56e"
  }, {
    "url": "images/setting.svg",
    "revision": "901a26e3d882475c2b376d75bca7abf6"
  }, {
    "url": "images/telephone.svg",
    "revision": "fa9990dcf8840a9622390a4bf618141c"
  }, {
    "url": "images/white-arrow.svg",
    "revision": "acb807caf07d72302baaa769f6163795"
  }, {
    "url": "images/white-zigzag.svg",
    "revision": "c8a77c08fcc6e829c0d55b89e0351e30"
  }, {
    "url": "images/whitemode-logo.svg",
    "revision": "7e6984bdc54904962ce4fff0216f3302"
  }, {
    "url": "images/zigzag.svg",
    "revision": "01c05cbcb262870a51e7ba92ac4e287c"
  }, {
    "url": "manifest.json",
    "revision": "9e00d3d643c8e73256f7fe3919d84c13"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=sw-dev.js.map
