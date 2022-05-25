window.lib = (function(w) {
    function selectedText(select) {
        return select.options[select.selectedIndex].textContent;
    }
    function selectedValue(select) {
        return select.options[select.selectedIndex].value;
    }
    function importStyle(url) {
        return new Promise(function(resolve, reject) {
            var style = document.createElement('link');
            style.rel = 'stylesheet';
            style.onload = function() {
                resolve('Script loaded');
            };
            style.onerror = function() {
                reject('Script loading error');
            }
            style.href = url;
            document.querySelector('head').appendChild(style);
        });
    }
    function importScript(url) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.onload = function() {
                resolve('Script loaded');
            };
            script.onerror = function() {
                reject('Script loading error');
            }
            script.src = url;
            document.querySelector('head').appendChild(script);
        });
    }
    function shuffle(array) {
      var copy = [], n = array.length, i;
    
      // While there remain elements to shuffle…
      while (n) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length);
    
        // If not already shuffled, move it to the new array.
        if (i in array) {
          copy.push(array[i]);
          delete array[i];
          n--;
        }
      }
    
      return copy;
    }
    var o = {};
    o.selectedText = selectedText;
    o.selectedValue = selectedValue;
    o.importScript = importScript;
    o.importStyle = importStyle;
    o.shuffle = shuffle;
    return o;
})(window);