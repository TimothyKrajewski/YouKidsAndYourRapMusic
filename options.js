

// Saves options to chrome.storage
function save_options() {
  var Rappers = document.getElementById('rapper').value;
  chrome.storage.sync.set({
    'favoriteRapper': Rappers
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    favoriteRapper: 'DJKhaled'
  }, function(items) {
    document.getElementById('rapper').value = items.favoriteRapper;
  });
}
  document.addEventListener('DOMContentLoaded', restore_options);
  var savebtn = document.getElementById('save');
  savebtn.addEventListener('click', save_options);
