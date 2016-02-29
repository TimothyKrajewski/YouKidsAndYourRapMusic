var mp3Choice;
function re_up() {
  chrome.storage.sync.get({
    favoriteRapper: 'DJKhaled'
  }, function(items) {
      mp3Choice = items.favoriteRapper;
  });
}
chrome.tabs.onCreated.addListener(function(tab)
{
  re_up();
  var audio = new Audio('mp3/'+ mp3Choice+ '.mp3');
  audio.play();
}
);
