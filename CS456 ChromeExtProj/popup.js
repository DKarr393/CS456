document.addEventListener('DOMContentLoaded', function() {
  var applyFilterButton = document.getElementById('applyFilter');
  applyFilterButton.addEventListener('click', function() {
    var selectedFilter = document.getElementById('filterSelect').value;
    var filterCode = '';
    switch(selectedFilter) {
      case 'normal':
        filterCode = 'unset';
        break;
      case 'protanopia':
        filterCode = 'grayscale(60%) contrast(100%) sepia(30%) hue-rotate(-30deg) saturate(150%)';
        break;
      case 'deuteranopia':
        filterCode = 'grayscale(60%) contrast(100%) sepia(30%) hue-rotate(60deg) saturate(150%)';
        break;
      case 'tritanopia':
        filterCode = 'grayscale(60%) contrast(100%) sepia(30%) hue-rotate(120deg) saturate(150%)';
        break;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: setPageFilter,
        args: [filterCode]
      });
    });
  });
});

function setPageFilter(filterCode) {
  document.body.style.filter = filterCode;
}