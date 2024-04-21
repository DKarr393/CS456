chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === "toggle_color_correction") {
      // Toggle color correction on/off
      // Example: Send message to content script to start/stop color correction
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "toggle_color_correction"});
      });
    }
  });