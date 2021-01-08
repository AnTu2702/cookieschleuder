'use strict';

var cookie = 'cookied_8080';
var port = '8080';

chrome.storage.sync.get({
    cookie: cookie,
    port: port
  }, function(items) {
    cookie = items.cookie;
    port = items.port;
});

chrome.cookies.onChanged.addListener(function(changeInfo) {

    if ((changeInfo.cookie.name == cookie) & ((changeInfo.cause == "expired_overwrite") | (changeInfo.cause == "explicit"))) {
      var xhr = new XMLHttpRequest();
      xhr.open("PUT", "http://127.0.0.1:"+port+"/"+cookie, true);
      xhr.send(changeInfo.cookie.value);
    }
});



