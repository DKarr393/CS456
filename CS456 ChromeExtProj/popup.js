// Example: Sending a message to content.js to apply a color filter
function applyColorFilter(filter) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "apply_color_filter", filter: filter});
    });
  }
  
  // Example: Button click to apply color filter
  document.getElementById('applyProtanopia').addEventListener('click', function() {
    applyColorFilter('protanopia');
  });
  
  document.getElementById('applyDeuteranopia').addEventListener('click', function() {
    applyColorFilter('deuteranopia');
  });