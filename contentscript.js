if (typeof sidebarOpen == 'undefined') { //if not set yet, it's closed
console.log("sidebar initiated");
sidebarOpen = false; //set closed

var width = '400';//variables
//resolve html tag, which is more dominant than <body>
                var html;
                if (document.documentElement) {
                  html = $(document.documentElement); //just drop $ wrapper if no jQuery
                } else if (document.getElementsByTagName('html') && document.getElementsByTagName('html')[0]) {
                  html = $(document.getElementsByTagName('html')[0]);
                } else if ($('html').length > -1) {//drop this branch if no jQuery
                  html = $('html');
                } else {
                  alert('no html tag retrieved...!');
                  throw 'no html tag retrieved son.';
                }
              //position
              if (html.css('position') === 'static') { //or getComputedStyle(html).position
                html.css('position', 'relative');//or use .style or setAttribute
              }

// Avoid recursive frame insertion...
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    // Must be declared at web_accessible_resources in manifest.json
    iframe.src = chrome.runtime.getURL('frame.html');
    iframe.className = 'todo-sidebar';

    // Some styles for a fancy sidebar
    iframe.style.cssText = 'position:fixed;top:0;right:-'+width+'px;display:block;width:'+width+'px;height:100%;z-index:1000;border-width: 0px 0px 0px 0px;';
    document.body.appendChild(iframe);
  }
} 