function saveProgress(level, minilevel) {
    if (typeof saveCallbackFunction === 'function') {
        saveCallbackFunction(level, minilevel);
    }
    if (!document.getElementById('saving')) return;
    if (!localStorage.getItem('history')) localStorage.setItem('history', '[]');
    var heestoree = JSON.parse(localStorage.getItem('history'));
    var item = {};
    item.level = level;
    item.place = minilevel;
    heestoree.push(item);
    localStorage.setItem('history', JSON.stringify(heestoree));
    var i = {
        "level": level,
        "place": minilevel
    };
    i = JSON.stringify(i);
    document.getElementById('saving').style.display = 'block';
    localStorage.setItem('level', i);
    setTimeout(function() {
        document.getElementById('saving').textContent = 'Saved';
        setTimeout(function() {
            document.getElementById('saving').style.display = 'none';
            document.getElementById('saving').textContent = 'Saving...';
        }, 100);
    }, 500);
}
function loadProgress() {
    var l = JSON.parse(localStorage.getItem('level'));
    var level = l.level;
    safeGoto(l.level, l.place);
}
function safeGoto(level, place, save) {
    var l = {};
    l.place = place;

    if (save == 0) save = "start";
    
    switch (level) {
        case 1:
            goto(l.place, save);
            break;
        case 3:
            goto3(l.place, save);
            break;
        case 4:
            goto4(l.place, save);
            break;
        case 5:
            goto5(l.place, save);
            break;
        case 6:
            goto6(l.place, save);
            break;
    }
}