"use strict";var precacheConfig=[["/index.html","e09a754baebd9bb08c83854889d8d497"],["/static/css/main.922b552c.css","e7e26dc8e9baa183eacb398a406ab429"],["/static/js/main.f7ac869d.js","16717d29032b1a6228b4f356d7aa798a"],["/static/media/allcat.ea13897b.jpg","ea13897bb59531554bc2e73c49c8f5a2"],["/static/media/bat.9cf8677a.jpg","9cf8677a1d1c576f5f5b1ec8673096e5"],["/static/media/bois.4a19855b.jpg","4a19855b032b1bf2b9558966087835cb"],["/static/media/clothes.9ec981e7.jpg","9ec981e78133cea4ca9586a97df382ac"],["/static/media/cuisine.5baf7332.jpg","5baf733244eae159162e6112637fbd74"],["/static/media/elec.9b28b38c.jpg","9b28b38c3379c18086017e769c855635"],["/static/media/jonathan-chng-1057613-unsplash.a6cbf0cb.jpg","a6cbf0cbaf7d6c7b6a34220eb3ae58ce"],["/static/media/metal.c1733bd1.jpg","c1733bd1e2f0e7b7a706084528e4abd5"],["/static/media/mobilier.052e8c2c.jpg","052e8c2c46a9864ac7a67ed335ca4877"],["/static/media/papier.cadb294f.jpg","cadb294fe462f841314486c984d4bbb9"],["/static/media/toxic.7979cef8.jpg","7979cef8b40f4371221cab2fc8b3973e"],["/static/media/verre.a9f2d5ea.jpg","a9f2d5ea8b97b2a45904b581ecb08ffd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});