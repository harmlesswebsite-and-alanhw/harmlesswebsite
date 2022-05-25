// ==UserScript==
// @name         HTML Editing Aid
// @version      8.8.8
// @description  Adds a 'Vandalize' button to the bottom of web pages.
// @author       weeklyd3
// @match      *://*/*
// @grant        none
// ==/UserScript==
function userImportStyle(url) {
    return new Promise(function(resolve, reject) {
        var scr = document.createElement('link');
        scr.rel = 'stylesheet';
        scr.href = url;
        scr.onload = function() {
            resolve('Loaded');
        }
        scr.onerror = function() {
            reject('Error');
        }
        document.querySelector('body').appendChild(scr);
    });
}
function userImportScript(url) {
    return new Promise(function(resolve, reject) {
        var scr = document.createElement('script');
        scr.onload = function() {
            resolve('Loaded');
        }
        scr.onerror = function() {
            reject('Error');
        }
        scr.src = url;
        document.querySelector('body').appendChild(scr);
    });
}
function handleUserscriptConsole(ev) {
    if (ev.currentTarget.selectionStart == 0) {
        ev.preventDefault();
        ev.currentTarget.selectionStart = 1;
    }
    if (!ev.currentTarget.value.startsWith('>')) {
        ev.preventDefault();
        ev.currentTarget.value = '>' + ev.currentTarget.value;
    }
    if (ev.keyCode === 13 && !ev.shiftKey) {
        if (ev.currentTarget.value.trim() === '>') return;
        event.preventDefault();
        var cmd = document.createElement('div');
        var promptSpan = document.createElement('span');
        promptSpan.textContent = '>> ';
        promptSpan.style.color = '#cccccc';
        var cmdSpan = document.createElement('span');
        cmdSpan.textContent = ev.currentTarget.value.slice(1);
        cmd.appendChild(promptSpan);
        cmd.appendChild(cmdSpan);
        document.getElementById('userscript-terminal-output').appendChild(cmd);
        var output = document.createElement('div');
        var morePrompt = document.createElement('span');
        morePrompt.textContent = '<< ';
        morePrompt.style.color = '#cccccc';
        output.appendChild(morePrompt);
        var res = document.createElement('span');
        try {
            res.textContent = JSON.stringify(eval(ev.currentTarget.value.slice(1)));
        } catch (e) {
            res = userscriptError(e);
        }
        output.appendChild(res);
        document.getElementById('userscript-terminal-output').appendChild(output);
        ev.currentTarget.value = '>';
    }
}
(function() {
    'use strict';

    var butt = document.createElement('button');
    butt.textContent = 'Vandalize';
    butt.addEventListener('click', function() {
        if (document.body.getAttribute('contenteditable') === 'true') {
            this.textContent = 'Vandalize';
            document.body.removeAttribute('contenteditable');
        } else {
            this.textContent = 'AAAHH Stop the vandalism';
            document.body.setAttribute('contenteditable', 'true');
        }
    });
    var div = document.createElement('div');
    div.setAttribute('contenteditable', 'false');
    div.style.width = "100%";
    div.style.zIndex = '33283328';
    div.style.fontFamily = 'sans-serif';
    div.style.padding = '15px';
    div.style.border = '1px solid lightgray';
    div.style.backgroundColor = 'white';
    var h2 = document.createElement('h2');
    h2.textContent = 'Vandalize this page';
    div.appendChild(h2);
    div.appendChild(butt);
    var reload = document.createElement('button');
    reload.textContent = 'Reset and reload';
    reload.addEventListener('click', function() {
        if (!confirm('Are you sure you want to lose all your HTML edits?')) return;
        location.reload();
    });
    div.appendChild(reload);
    var console = document.createElement('div');
    console.innerHTML = `<details id="userscript-jsconsole">
                <summary>JavaScript Console</summary>
                <button onclick="document.getElementById('userscript-terminal-output').textContent = 'Console cleared';">Clear console</button>
                <button onclick="document.getElementById('userscript-jsconsole').open = false;">Close</button>
                <br />
    <label for="input">Your JS:</label>
        <div id="userscript-terminal-output" style="white-space: pre-wrap; font-size: 16px; font-family: Consolas, monospace; max-height: 600px; resize: both; overflow-y: scroll;">Start of console

You can type your commands below. The leading > will not be included. Console methods are supported. console.log, console.warn, console.clear, and console.error also output here.</div>
    <textarea spellcheck="false" id="input" onkeydown="handleUserscriptConsole(event)" onmouseup="handleUserscriptConsole(event)" rows="2" style="font-family: Consolas, monospace; padding: 3px; border: 1px solid #cccccc; outline: none; width: 100%;"></textarea>
</details>
<details>
<summary id="userpagesource">Page source</summary>
<div style="position: fixed; top: 0; left: 0; z-index: 2147483647; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
    <div style="background-color: white; width: 75%; height: 75%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); overflow: auto;">
    <div style="height:90%; overflow:auto">
    <div style="display: table;"><div style="display: table-row; overflow: auto;"><pre style="font-size: 16px; white-space: pre-wrap; display: table-cell; word-break: break-all;"><code id="userpagesourcecode"></code></pre></div>
    </div></div>
<div style="margin:20px"><button style="width: 100%" onclick="document.getElementById('userpagesource').click();">Close</button></div></div>
</div>
</details>`;
    div.appendChild(console);

    document.body.appendChild(div);
    document.getElementById("userpagesource").onclick = userscriptRenderSource;
})();
window.handleUserscriptConsole = handleUserscriptConsole;
window.oldLog = console.log;
window.oldError = console.error;
window.oldWarn = console.warn;
window.oldClear = console.clear;
console.clear = function() {
    document.querySelector('[id="userscript-terminal-output"]').innerHTML = 'Console cleared using console.clear()';
    oldClear();
}
window.console.clear = console.clear;
console.error = function(text, type = "Thrown error", line = "e^((pi)(i))", stack = "idk", filename = "idk") {
    oldError(text);
    var output = document.createElement('div');
    var morePrompt = document.createElement('span');
    morePrompt.textContent = '<< ';
    morePrompt.style.color = '#cccccc';
    output.appendChild(morePrompt);
    var res = document.createElement('span');
    res = userscriptError({toString: function() { return text; }, stack: stack, lineNumber: line, fileName: filename, name: type});
    output.appendChild(res);
    var terminal = document.getElementById('userscript-terminal-output')
    terminal.appendChild(output);
    terminal.scrollTop = terminal.scrollHeight;
}
console.log = function(text) {
    oldLog(text);
    var output = document.createElement('div');
    var morePrompt = document.createElement('span');
    morePrompt.textContent = '<< ';
    morePrompt.style.color = '#cccccc';
    output.appendChild(morePrompt);
    var res = document.createElement('span');
    res.textContent = text;
    res.style.backgroundColor = 'black';
    res.style.color = 'white';
    output.appendChild(res);
    var terminal = document.getElementById('userscript-terminal-output')
    terminal.appendChild(output);
    terminal.scrollTop = terminal.scrollHeight;
}
console.warn = function(text) {
    oldWarn(text);
    var output = document.createElement('div');
    var morePrompt = document.createElement('span');
    morePrompt.textContent = '<< ';
    morePrompt.style.color = '#cccccc';
    output.appendChild(morePrompt);
    var res = document.createElement('span');
    res.style.backgroundColor = 'gold';
    res.textContent = text;
    output.appendChild(res);
    var terminal = document.getElementById('userscript-terminal-output')
    terminal.appendChild(output);
    terminal.scrollTop = terminal.scrollHeight;
}
window.console.log = console.log;
window.console.error = console.error;
window.onerror = function(message, source, lineno, colno, error) {
    console.error(error.toString(), error.name, error.lineNumber, error.stack,  error.fileName);
};
function userscriptError(e) {
    var res = document.createElement('span');
    res.textContent = 'ERROR: ' + e.name + "\n" + e.toString() + `\n  @file '${e.fileName}', line ${e.lineNumber}\nStack trace:\n${e.stack}`;
    res.style.color = 'red';
    res.style.backgroundColor = 'pink';
    return res;
}
window.userscriptError = userscriptError;


function userscriptRenderSource() {
    document.getElementById('userpagesourcecode').innerHTML = '';
    document.getElementById('userpagesourcecode').textContent = new XMLSerializer().serializeToString(document);
    userImportStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/vs.min.css');
    userImportScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js').then(function() {

        hljs.highlightElement(document.getElementById('userpagesourcecode'));
    });
}
window.userscriptRenderSource = userscriptRenderSource;