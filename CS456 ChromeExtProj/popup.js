document.addEventListener('DOMContentLoaded', function() {
  var applyFilterButton = document.getElementById('applyFilter');
  applyFilterButton.addEventListener('click', function() {
    var selectedFilter = document.getElementById('filterSelect').value;
    var filterCode = '';
    var contrast = '100%'; // Adjust the contrast level here
    switch(selectedFilter) {
      case 'normal':
        filterCode = 'unset';
        contrast = '100%';
        break;
      case 'protanopia':
        filterCode = 'protanopia-filter';
        contrast = '105%';
        break;
      case 'deuteranopia':
        filterCode = 'deuteranopia-filter';
        contrast = '105%';
        break;
      case 'tritanopia':
        filterCode = 'tritanopia-filter';
        contrast = '105%';
        break;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: setPageFilter,
        args: [filterCode, contrast]
      });
    });
  });
});

document.getElementById('cssInject').addEventListener('click', function() {
  const css = `
    /* CSS styles to improve text visibility and brightness */
    text {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    body {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    header {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    footer {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    div {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    p {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    h1 {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    h2 {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    h3 {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    a {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    textarea {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    img {
      color: #333; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
  `;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.insertCSS({
      target: { tabId: tabs[0].id },
      css: css
    });
  });
});

document.getElementById('cssInject2').addEventListener('click', function() {
  const css = `
    /* CSS styles to improve text visibility and brightness */
    text {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    body {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    header {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    footer {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    div {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    p {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    h1 {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    h2 {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    h3 {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    a {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    textarea {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
    img {
      color: white; /* Dark gray text color */
      filter: contrast(150%)
      background-color: #fff; /* White background color */
      font-size: 1.2em; /* Increase font size by 20% */
      font-weight: bold; /* Use bold font weight */
      font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font */
      line-height: 1.5; /* Increase line spacing by 1.5 times */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
    }
  `;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.insertCSS({
      target: { tabId: tabs[0].id },
      css: css
    });
  });
});

function setPageFilter(filterId, contrast) {
  var svgFilter = `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <filter id="protanopia-filter">
              <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0
                   0.558, 0.442, 0, 0, 0
                   0,     0.242, 0.758, 0, 0
                   0,     0,     0,     1, 0" />
          </filter>
          <filter id="deuteranopia-filter">
              <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0
                   0.7,   0.3,   0, 0, 0
                   0,     0.3,   0.7, 0, 0
                   0,     0,     0,   1, 0" />
          </filter>
          <filter id="tritanopia-filter">
              <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0
                   0,    0.433, 0.567, 0, 0
                   0,    0.475, 0.525, 0, 0
                   0,    0,     0,     1, 0" />
          </filter>
      </svg>
  `;
  var existingFilters = document.getElementById('colorBlindnessFilters');
  if (existingFilters) {
      existingFilters.remove();
  }
  var filtersDiv = document.createElement('div');
  filtersDiv.id = 'colorBlindnessFilters';
  filtersDiv.innerHTML = svgFilter;
  document.body.appendChild(filtersDiv);
  document.body.style.filter = filterId ? `url(#${filterId}) contrast(${contrast})` : 'none';
}