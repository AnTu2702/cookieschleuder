'use strict';

var cookie = 'cookied_8080';
var port = '8080';

chrome.cookies.onChanged.addListener(async (changeInfo) => {

    chrome.storage.sync.get({
      cookie: cookie,
      port: port
    }, function(items) {
      cookie = items.cookie;
      port = items.port;
    });
    
    if ((changeInfo.cookie.name.localeCompare(cookie) == 0) & ((changeInfo.cause == "expired_overwrite") | (changeInfo.cause == "explicit"))) {

      await fetch("http://127.0.0.1:"+port+"/"+cookie, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(changeInfo.cookie.value)
      })
      .catch((err) => console.log("err", err))
    }
  }
);
