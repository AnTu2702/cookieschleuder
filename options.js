function save_options() {
  var cookie = document.getElementById('cookie').value;
  var port = document.getElementById('port').value;
  chrome.storage.sync.set({
    cookie: cookie,
    port: port
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    cookie: 'cookied_8080',
    port: '8080'
  }, function(items) {
    document.getElementById('cookie').value = items.cookie;
    document.getElementById('port').value = items.port;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);