window.lib = (function(w) {
    function selectedText(select) {
        return select.options[select.selectedIndex].textContent;
    }
    function selectedValue(select) {
        return select.options[select.selectedIndex].value;
    }
    var o = {};
    o.selectedText = selectedText;
    o.selectedValue = selectedValue;
    return o;
})(window);