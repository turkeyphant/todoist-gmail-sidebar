chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "toggleSidebar.js"});
});

 /*
var icon_num = 0;
function updateIcon() {
console.log(icon_num);
  chrome.browserAction.setIcon({path:"icon" + icon_num++ + ".png"});
  icon_num = icon_num%2;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
*/