const CACHE_NAME = "app-cache-v1";
const precacheResources = [
  "/",
  "service_worker.html",
  // ...其他资源
];
self.addEventListener("install", (event) => {
  console.log("Service Worker 安装中");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("资源缓存中", cache);
      return cache.addAll(precacheResources);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 创建一个从网络获取资源并更新缓存的 Promise
      const fetchAndUpdateCache = fetch(event.request).then((response) => {
        if (event.request.url.indexOf("chrome-extension") === -1) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            console.log("cache is what", cache);
            cache.put(event.request, responseClone);
          });
        }
        return response;
      });

      // 如果有匹配的缓存（旧缓存或新缓存），返回缓存的资源
      // 同时，尝试从网络获取资源并更新缓存-这个策略叫做"stale-while-revalidate"
      if (cachedResponse) {
        console.log("命中缓存", event.request);
        fetchAndUpdateCache.catch((error) => console.error(error));
        return cachedResponse;
      }
      console.log("未命中缓存", event.request);
      // 如果缓存中没有匹配的资源，直接从网络获取并更新缓存
      return fetchAndUpdateCache;
    })
  );
});

self.addEventListener("push", (event) => {
  const pushData = event.data.text(); //.json()

  //   // 设置通知的选项
  //   const options = {
  //     body: pushData.body,
  //     icon: pushData.icon,
  //     badge: pushData.badge,
  //     tag: pushData.tag,
  //     data: pushData.data,
  //     requireInteraction: pushData.requireInteraction || false,
  //     actions: pushData.actions || [],
  //     silent: pushData.silent || false,
  //     vibrate: pushData.vibrate || undefined,
  //   };

  // 显示通知
  event.waitUntil(self.registration.showNotification(pushData));
});

// 监听 notificationclick 事件，处理用户点击通知的行为
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action) {
    // 处理用户点击通知中的按钮
    console.log(`用户点击了 ${event.action} 按钮`);
  } else {
    // 处理用户点击通知本身
    console.log("用户点击了通知");
  }

  // 在此处添加处理点击通知的相关逻辑
});

//数据同步+消息通知
self.addEventListener("sync", function (event) {
  if (event.type === "sync") {
    console.log("sync");
    self.clients.matchAll().then(function (clients) {
      console.log("sync-clients", clients);
      clients.forEach(function (client) {
        client.postMessage({
          message: "Hello from Service Worker!",
        });
      });
    });
  }
});

/**
 * 协商缓存下的缓存更新
self.addEventListener("fetch", (event) => {
  event.respondWith(
    // 尝试从缓存中获取资源
    caches.match(event.request).then((cachedResponse) => {
      // 如果缓存中没有匹配的资源，直接从网络获取
      if (!cachedResponse) {
        return fetch(event.request);
      }

      // 创建一个从网络获取资源的 Promise
      const networkFetch = fetch(event.request).then((networkResponse) => {
        // 检查网络响应是否有效
        if (
          !networkResponse ||
          networkResponse.status !== 200 ||
          networkResponse.type !== "basic"
        ) {
          return networkResponse;
        }

        // 判断资源是否更新（比较 ETag 或 Last-Modified）
        const cachedEtag = cachedResponse.headers.get("ETag");
        const networkEtag = networkResponse.headers.get("ETag");
        const cachedLastModified = cachedResponse.headers.get("Last-Modified");
        const networkLastModified =
          networkResponse.headers.get("Last-Modified");

        if (
          cachedEtag !== networkEtag ||
          cachedLastModified !== networkLastModified
        ) {
          // 如果资源已更新，将新资源添加到缓存
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }

        // 返回网络响应
        return networkResponse;
      });

      // 如果在缓存中找到资源，返回缓存的资源
      // 同时，尝试从网络获取资源并根据协商缓存情况更新缓存
      return (
        cachedResponse || networkFetch.catch((error) => console.error(error))
      );
    })
  );
});
 */
