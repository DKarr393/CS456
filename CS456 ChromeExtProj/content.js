document.querySelectorAll('*').forEach(function(node) {
    node.style.color = 'black';
  });

  // Simulate protanopia (red-blindness)
document.querySelectorAll('*').forEach(function(node) {
    if (window.getComputedStyle(node).color === 'red') {
      node.style.color = 'black';
    }
    if (window.getComputedStyle(node).backgroundColor === 'red') {
      node.style.backgroundColor = 'white';
    }
  });

function applyColorFilter(filter) {
    document.querySelectorAll('*').forEach(function(node) {
        // Apply the color filter logic here
        // This is just a basic example
        if (filter === 'protanopia') {
        // Change red to black
        if (window.getComputedStyle(node).color === 'red') {
            node.style.color = 'black';
        }
        if (window.getComputedStyle(node).backgroundColor === 'red') {
            node.style.backgroundColor = 'white';
        }
        } else if (filter === 'deuteranopia') {
        // Change green to black
        if (window.getComputedStyle(node).color === 'green') {
            node.style.color = 'black';
        }
        if (window.getComputedStyle(node).backgroundColor === 'green') {
            node.style.backgroundColor = 'white';
        }
        }
        // Add more conditions for other types of color blindness
    });
}