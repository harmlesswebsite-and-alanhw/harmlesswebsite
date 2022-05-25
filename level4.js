var total = '';
// This file is getting too large. Moving on!
function goto4(endpoint, save = true) {
    if (save)    saveProgress(4, endpoint);

    switch (endpoint) {
        case 'home':
          
            write(`<link rel="stylesheet" href="https://harmlesswebsite.leoshi6.repl.co/unpeek.css" />
Per a new RfC, spambots are targeting our forums. Please prove <span onclick="goto4(2)">you are not a bot</span> to continue.<br />
<a onclick="document.getElementById('spambots').style.display = 'block'; document.getElementById('spamboth').style.display = 'none'; document.getElementById('spambots').scrollIntoView();" href="javascript:;">How do spambots work?</a><br />
<span id="captcha" style="display: inline-block; padding: 7px; background-color: #cccccc; border: 1px solid #aaaaaa; font-size: 16px;">
<span style="display: inline-block; border: 1px solid #aaaaaa; background-color: white; width: 16px; height: 16px; margin: 0; padding: 0;" id="captcha-button">&nbsp;</span>
<span id="captcha-text">I'm not <span style="color: #cccccc;">not</span> a robot</span>
</span>
<div id="spamboth">Please solve the CAPTCHA above.</div>
<div id="spambots" style="display: none;">How do spambots work? They work by:
<ol>
<li>Finding a game like ours</li>
<li>Bombing it with requests</li>
<li>Posting spam</li>
<li>And making us remove it!</li>
</ol>
</div>
`);
            document.getElementById('captcha-button').addEventListener('click', function() {
                document.getElementById('captcha-button').innerHTML = `<img src="https://harmlesswebsite.leoshi6.repl.co/loading.gif" width="16" height="16" alt="Loading..." />`;
                setTimeout(function() {
                    document.getElementById('captcha-button').innerHTML = `<img src="https://forumexperiment.weeklyd3.repl.co/img/icons/CheckIcon.png" width="16" height="16" alt="Confirmed" />`;
                    document.getElementById('captcha-text').textContent = 'Confirmed, please click the CAPTCHA again.';
                    document.getElementById('captcha').addEventListener('click', function() {
                        goto4(1);
                    });
                }, 5000);
            });
            break;
        case 1:
            write(`You admitted you're a bot. So sorry about that.`);
            setTimeout(() => goto(0), 1000);
            break;
        case 2:
            write(`Wow. You can join our <a href="https://ircclone.weeklyd3.repl.co/" target="_blank">chat now!</a><br />Or...

<p>Remember the essay you wrote?</p>
<p><button onclick="goto4(3)">See your score!</button></p>
`);
            globalThis.vars = {};
            break;
        case 3:
            taitl(`Stolen story`)
            write(`
Message from the techer:
<pre id="techermsg">
Loading...
</pre>
<p>(preview of what's next)</p>
<button onclick="goto4(4)">I'm done reading this message</button>
`);
            fetch("https://hw-stery.weeklyd3.repl.co/?html=true")
            .then(function(r) {
                r.text()
                .then(function(t) {
                    document.getElementById('techermsg').innerHTML = t;
                });
            }, function() {
                throw 'Something went wrong';
            })
            .catch(function() {
                document.getElementById('techermsg').innerHTML = 'Error while loading message (<a href="https://hw-stery.weeklyd3.repl.co" target="_blank">try reading directly?</a>)'
            });
            break;
        case 4:
            write(`Here's another stery:
<pre id="techermsg">Loading...</pre><br><button onclick="goto4(5)">I'm done reading this message</button>
`);
            fetch("https://hw-stery.weeklyd3.repl.co/?html=true&story=1")
            .then(function(r) {
                r.text()
                .then(function(t) {
                    document.getElementById('techermsg').innerHTML = t;
                });
            }, function() {
                throw 'Something went wrong';
            })
            .catch(function() {
                document.getElementById('techermsg').innerHTML = 'Error while loading message (<a href="https://hw-stery.weeklyd3.repl.co/?story=1" target="_blank">try reading directly?</a>)'
            });
            break;
      case 5:
        write(`<h3>Uhh hello? Are you paying attention? I was trying to explain to you what was wrong in your essay! And what were you doing? Driving down bird poop road? Just as I expected. I will give you a quiz to see if you actually read my feedback.<br />-techer</h3>
  What did<span style='color: white; font-size: 7px;'>n't</span>Mr. Kent not have?
  <select id='question1'>
    <option selected disabled>Choose...</option>
    <option>Water</option>
    <option>NaHCO<sub>3</sub></option>
    <option>Hair</option>
    <option>A life</option>
  </select>
  <button onclick='question1()'>Submit</button>`)
        break;
        case 6:
            write(`Wow!<p>Uhh hello? Well, you are stuck on Bird Poop Road now!</p><p><span onclick="goto4(7)">Click</span> a highway sign below:</p>
<img src="https://alanhw.weeklyd3.repl.co/BIRDPOOPRD.png" alt="Bird Poop Road" onclick="goto(0)" />`);
            break;
        case 7:
            write(`
Hello? What ARE you doing? Driving on Bird Poop Road? Well, dust the picture below to continue!
(Key: D = dirty, C = clean)
<table style="user-select: none; cursor: pointer">` +
    `<tr>
        <td>D</td>
        <td>D</td>
        <td>D</td>
        <td>D</td>
        <td>D</td>
    </tr>`.repeat(5) +
"</table>");
            var square = document.querySelectorAll('td');
            for (var i = 0; i < square.length; i++) {
                square[i].addEventListener('click', function() {
                    this.textContent = 'C';
                    if (determineIfAllIsClean()) goto4(8);
                    setTimeout(function(a) {
                        a.textContent = 'D';
                    }, 20000, this);
                });
            }
            break;
        case 8:
            // DO NOT USE THE WRITE FUNCTION ANYMORE.
            // Use cashWrite.
            globalThis.cash = 200;
            write(`
<p id="cash-wrapper">Cash: <span onclick="updateCash()" id="cash">Please click to view</span></p>
<div id="output-window"><span onclick="goto4(9)">You win</span> 200 dollhairs for cleaning up the picture.
<p>Any time you get cash below zero, you will get rickrolled.</p>
<p>(Note: Click the cash value above to update it.)</p>
<button onclick="goto(0)">Spend $400 to stay alive</button>
</div>
`);
            break;
        case 9:
            cashWrite(`BWAHAHAHA. For every second you lose a <span onclick="goto4(10)">dollhair!!!</span><span id="still-decreasing"></span>`);
            setInterval(function() {
                if (!document.getElementById('still-decreasing')) return;

                globalThis.cash--;
                updateCash();
                if (globalThis.cash < 0) {
                    goto(0);
                }
            }, 1000);
            break;
        case 10:
            document.getElementById('cash-wrapper').hidden = 'hidden';
            cashWrite(`
A robber has come up along the road.
<p>Eat lead, robber!</p>
<p>Luckily, your money is currently still here, but you need to get out of here quickly!</p>
<button onclick="goto4(11)">Start!</button>
`);
            break;
        case 11:
            cashWrite(`
<div style="width: 100%; height: 100px; background-image: url(https://harmlesswebsite.leoshi6.repl.co/roadbg.png);"></div>
<p>This is old Ninny's tomb. Where's everything?</p>
<label>Choose:
<select id="ninnytomb">
<option selected="selected" disabled="disabled">Choose...</option>
<option>ROARRRR</option>
<option>I wanna quit</option>
<option>Getting rickrolled</option>
</select>
</label>
<input type="button" onclick="goto4(12)" value="It is here!" />
`);
            break;
        case 12:
            switch (document.getElementById('ninnytomb').selectedindex) {
                case 0:
                    write(`You IDIOT. That won't work this time!`);
                    setTimeout(() => goto(0), 2000);
                    break;
                case 1:
                    goto4(13);
                    break;
                case 2:
                    goto(1);
                    break;
                case 3:
                    goto(0);
                    break;
                default:
                    goto4(13);
                    break;
            }
            break;
        case 13:
            document.getElementById('cash-wrapper').hidden = '';
            cashWrite(`Someone can hack the site for you for FREE. Do you take the offer?
<button onclick="goto(7)">YESSS!!!</button><br />
<span style="font-size: 1px;">Or <span onclick="goto4(14)">no</span></span>
`);
            break;
        case 14:
            write(`
Unfortunately, all your cash is gone now due to it being placed in the trash.

<br /><br />
However, you get to see how to photoshop images!
<p>Select an option below:</p>
<ul>
<li><a href="#photopea">Photopea tutorial</a></li>
<li><a href="#paintnet">Paint.net tutorial</a></li>
</ul>
<div id="photopea">
<video controls="controls" style="width: 90%;">

    <source type="video/mp4" src="https://harmlesswebsite.leoshi6.repl.co/morone_street_photoshopping/Photopea.mp4" />

    Sorry, your browser doesn't support embedded videos.
</video>

</div>
<div id="paintnet">

<video controls="controls" style="width: 90%;">

    <source type="video/mp4" src="https://harmlesswebsite.leoshi6.repl.co/morone_street_photoshopping/Paint.net.mp4" />

    Sorry, your browser doesn't support embedded videos.
</video></div>
<style>
#photopea, #paintnet {
display: none;
}
#photopea:target, #paintnet:target {
display: block;
}
</style>
<button onclick="goto4(15)">Continue</button>
`);
            break;
        case 15:
            write(`
<p>Place the periods AND commas (blank spaces allowed):</p>
<p>(wait, you lost your script!?)</p>
<p id="quince">If we offend, it is with our good will<span class="period"></span><br />That you should think<span class="period"></span> we come not to offend<span class="period"></span><br />but with good will<span class="period"></span><br />To show our simple skill<span class="period"></span> <br />that is the true beginning of our end<span class="period"></span><br />Consider then we come but in despite<span class="period"></span><br />We do not come as minding to contest you<span class="period"></span><br />our true intent is<span class="period"></span><br />All for your delight<span class="period"></span> we are not here<span class="period"></span><br />That you should here repent you. The actors are at hand<span class="period"></span> and by their show you shall know all that you are like to know<span class="period"></span></p>
<input onclick="goto4(16)" value="Done!" type="button" />
`);
            /* 
Correct answer:
If we offend, it is with our good will.
That you should think, we come not to
offend, but with good will. To show our
simple skill that is the true beginning
of our end. Consider then we come but in
despite. We do not come as minding to 
contest you, our true intent is. All
for your delight we are not here. That you
should here repent you the actors are at 
hand and by their show you shall know
all that you are like to know.
*/
            var periods = document.querySelectorAll('.period');
            for (var i = 0; i < periods.length; i++) {
                var text = document.createElement('input');
                text.maxlength = 1;
                text.size = 1;
                text.pattern = '/(\.|\,| )/';
                periods[i].appendChild(text);
            }
            break;
        case 16:
            var t = getTextContentInInputs(document.querySelector('#quince'));
            if (t !== ".,,. ..,. . .")
                goto(0);
            else
                goto4(17);
            
            break;
        case 17:
            write(`
I assume that you did not lose your script. Anyway, let's do some matching!
<button onclick="this.style.display = 'none'; document.getElementById('matching-quiz').hidden = '';">Start!</button>
<div id="matching-quiz" hidden="hidden">
<table id="matching-quiz-table">
<tr>
<th>Term</th>
<th>Which one?</th>
<th>Word Bank</th>
</tr>
</table>
<input onclick="goto4(18)" value="Submit" type="button" />
</div>
`);
            var terms = {
                "Electrostatics": "Psychics",
                "Poop": "YUMMY",
                "Pee": "YES",
                "F666": "NONONONONO",
                "M555": "YesYesYesYes",
                "Puck": "Hockey",
                "Fart...": "...amento"
            };
            var keys = Object.keys(terms);
            shuffle(keys);
            var values = Object.values(terms);
            globalThis.keys = keys,
            globalThis.values = values;
            globalThis.terms = terms;
            shuffle(values);
            for (var i = 0; i < keys.length; i++) {
                var tr = document.createElement('tr');
                var term = document.createElement('td');
                var label = document.createElement('label');
                label.setAttribute('for', 'question-' + i);
                var span = document.createElement('span');
                span.textContent = keys[i];
                label.appendChild(span);
                var pad = document.createElement('span');
                pad.textContent = ': ';
                label.appendChild(pad);
                var data = document.createElement('td');
                var input = document.createElement('input');
                input.setAttribute('id', 'question-' + i);
                input.setAttribute('data-term', keys[i]);
                data.appendChild(input);
                term.appendChild(label);
                tr.appendChild(term);
                tr.appendChild(data);
                var value = document.createElement('td');
                value.textContent = values[i] + " (" + (i + 1) + ")";
                tr.appendChild(value);
                document.getElementById('matching-quiz-table').appendChild(tr);
            }
            break;
            
        case 18:
            var correct = 0; 
            for (var i = 0; i < globalThis.keys.length; i++) {
                console.log(i);
                console.log(globalThis.values[parseInt(document.querySelector('#question-' + i).value) - 1]);
                if (globalThis.values[parseInt(document.querySelector('#question-' + i).value) - 1] !== globalThis.terms[globalThis.keys[i]])
                    goto(0);
                else 
                    correct++;
                
            }
            if (correct == globalThis.keys.length)
                goto4(19);
            
            break;
        case 19:
            write(`Wow, you are good at this! But are you good at everything or are you just <span onclick = 'goto4(20)' style="user-select: none;">lucky</span>? <br> I'll give you some options about your next test. <select id='nexttest'><option>Hacking this site</option><option>Poop eating</option> <option>Pee drinking</option></select><button onclick='goto(3)'>Submit</button>`);
            break;
      case 20:
            write(`
<link rel="stylesheet" href="https://harmlesswebsite.idkwutocalmself.repl.co/peek.css" />
ARRRG I HATE YOU KEEP PASSING MY TESTS! You're passing them even faster than I can write more <span onclick="goto(0)" title="This is not clickable" id="fakeclick">levels</span>!

<p>See, peek says it rickrolls you!</p>
`);
            document.getElementById('fakeclick').addEventListener('click', function(ev) {
                ev.stopImmediatePropagation();
                goto4(21);
            });
        break;
      case 21:
        write(`HAHA there is nothing to do anymore except for <span onclick='load7()'>hacking</span>.`)
        break;
      case 22:
        write(`
<p>Click these buttons in order four times.</p>
<p>It should be easy, right? Well, some of the buttons will disappear!</p>
<center>
<button class="flasher flash1" onclick="addToStr('1')">ONE</button>
<button class="flasher flash2" onclick="addToStr('2')">TWO</button>
<button class="flasher flash3" onclick="addToStr('3')">THREE</button>
<button class="flasher flash4" onclick="addToStr('4')">FOUR</button>
<div style="font-size: 40px;" id="numbers"></div>
</center>`);
        
        break;
        case 23:
            write(`Wait 400 seconds to continue<br /><button onclick="timerObj = timer('<button onclick=checkTime()>Check</button>')">Start the timer</button>`);
            break; 
        case 24:
            write(`<p>This is level 22, but harder.</p>
<div id="butthouseroad"></div>`);
            globalThis.prog = 1;
            for (var i = 1; i < 51; i++) {
                var butt = document.createElement('button');
                var totalButton = document.createElement('span');

                butt.id = 'butt-' + i;
                if (i !== 1) { butt.style.opacity = 0; totalButton.style.opacity = 0; }
                butt.textContent = i;
                butt.setAttribute('onclick', '');
                document.getElementById('butthouseroad').appendChild(butt);
                if (i === 50) {
                    butt.addEventListener('click', function() {
                        goto4(25);
                    });
                }
                if (i !== 50) {
                    butt.addEventListener('click', function() {
                        if (globalThis.prog != this.textContent) goto(0);
                        else {
                            this.style.opacity = 1;
                            globalThis.prog++;
                            console.log(parseInt(this.textContent) + 1);
                            document.getElementById('butt-' + (parseInt(this.textContent) + 1)).disabled = '';
                            document.getElementById('totalButt-' + (parseInt(this.textContent) + 1)).style.opacity = '1';                        }
                    });
                }
                var pad = document.createElement('span');
                pad.textContent = '->';
                totalButton.id = 'totalButt-' + i;
                if (i !== 1) {
                    totalButton.appendChild(pad);
                }
                totalButton.appendChild(butt);

                document.getElementById('butthouseroad').appendChild(totalButton);
            }
            break;
        case 25:
            write(`<div id="findthis"></div>`);
            globalThis.ansRow = randomIntFromInterval(0, 9);
            globalThis.ansCol = randomIntFromInterval(0, 9);
            for (var i = 0; i < 10; i++) {
                var row = document.createElement('div');
                for (var j = 0; j < 10; j++) {
                    var cell = document.createElement('button');
                    cell.setAttribute('data-coords', JSON.stringify([j, i]));
                    cell.textContent = '?';
                    cell.addEventListener('click', function() {
                        var cellCoords = JSON.parse(this.getAttribute('data-coords'));
                        if (cellCoords[0] == globalThis.ansCol && cellCoords[1] == globalThis.ansRow) {
                            goto4(26);
                        } else {
                            this.textContent = 'N';
                        }
                    });
                    row.appendChild(cell);
                }
                document.getElementById('findthis').appendChild(row);
            }
            break;
        case 26:
            write(`<h2>Authentication</h2><p>Keep these tokens ready. They will be used in the future. If you are failing the game, you may be able to enter a token to pass. Each token can only be used once. <strong>These tokens will never be shown again, and have to be entered EXACTLY AS SHOWN, including capitalization and spaces.</strong></p>
<ul id="tokens"></ul>
<button onclick="globalThis.tokens = []; newTokens(); goto4(26);">Too hard, generate new ones</button><br />
<button onclick="goto4(27)">Start the test!</button>
`);
            for (var i = 0; i < globalThis.tokens.length; i++) {
                var token = document.createElement('li');
                var code = document.createElement('code');
                code.textContent = globalThis.tokens[i];
                token.appendChild(code); 
                document.getElementById('tokens').appendChild(token);
            }
            break;
        case 27:
            write(`You still have to remember the code!<br />Enter the code from level 1 OR one of the tokens that were shown to you.<br /><label>Code or token: <input id="code" /></label> <input type="submit" value="Verify" onclick="goto4(28)" />`);
            break;
        case 28:
            if ((document.getElementById('code').value != globalThis.code) && !verifyToken(document.getElementById('code').value)) {
                goto(0);
            } else {
                goto4(29);
            }
            break;
        case 29:
            write(`You passed. You have ${globalThis.tokens.length} token${(globalThis.tokens.length > 1) ? "s" : ""} left.<br />
<div id="passwordIncorrect" style="display: none; background-color: red; color: white; padding: 7px;">Incorrect password entered.</div>
<label>Enter the password no one knows:<br />
<input type="password" id="password" />
</label><br />
<a onclick="goto4(30)" href="javascript:;">Forgot your password?</a>
<br />
<button onclick="goto4(29);document.getElementById('passwordIncorrect').style.display = 'block';">Log in</button>
`);
            break;
        case 30:
            write(`You passed. You have ${globalThis.tokens.length} token${(globalThis.tokens.length > 1) ? "s" : ""} left.<br />
            <div id="passwordIncorrect" style="display: none; background-color: red; color: white; padding: 7px;">Incorrect token entered.</div>
            <label>Enter one of your tokens to start a reset:<br />
            <input type="password" id="password" />
            </label><br />
            <a onclick="goto4(29)" href="javascript:;">Return to login</a>
            <br />
            <button onclick="goto4(31)">Reset</button>
            `);
            break;
        case 31:
            if (!verifyToken(document.getElementById('password').value)) {
                goto4(30);
                    document.getElementById('passwordIncorrect').style.display = 'block';
            } else {
                goto4(32);
            }
            break;
        case 32:
            write(`Haha, I lied. There was no password. <input onclick="goto4(33)" value="Continue" type="button" />`);
            break;
        case 33:
            lib.importStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/vs.min.css');
            lib.importScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js').then(function() { hljs.highlightAll(); });
            write(`DO NOT RUN THIS CODE!<br /><pre><code class="language-javascript" style="word-break: break-all;">function _0x2bfd(){var _0x544af9=['10412370baEgSG','PLEASE\x20WAIT\x20HALF\x20A\x20SECOND','522654oAdtUE','pos','Website\x20crasher\x20active','8oGlOXm','1847000DgkAWg','95aNpvTw','440654zdJMZH','960270wyyGgk','1998836trbUtg','62532JpXIRJ'];_0x2bfd=function(){return _0x544af9;};return _0x2bfd();}var _0x4193a2=_0x302e;(function(_0x4b4121,_0x141b96){var _0x272927=_0x302e,_0x23cf9f=_0x4b4121();while(!![]){try{var _0x476a43=parseInt(_0x272927(0xe0))/0x1+parseInt(_0x272927(0xda))/0x2+parseInt(_0x272927(0xdb))/0x3+parseInt(_0x272927(0xe4))/0x4+-parseInt(_0x272927(0xe5))/0x5*(-parseInt(_0x272927(0xdd))/0x6)+-parseInt(_0x272927(0xdc))/0x7*(parseInt(_0x272927(0xe3))/0x8)+-parseInt(_0x272927(0xde))/0x9;if(_0x476a43===_0x141b96)break;else _0x23cf9f['push'](_0x23cf9f['shift']());}catch(_0x3d98ff){_0x23cf9f['push'](_0x23cf9f['shift']());}}}(_0x2bfd,0x44729));function crash(){var _0x35f6a1=_0x302e;for(write(_0x35f6a1(0xe2));a='a';)a+=a;}function _0x302e(_0x16aa65,_0x5997e2){var _0x2bfd9b=_0x2bfd();return _0x302e=function(_0x302ee6,_0x3b82d3){_0x302ee6=_0x302ee6-0xda;var _0x44909b=_0x2bfd9b[_0x302ee6];return _0x44909b;},_0x302e(_0x16aa65,_0x5997e2);}globalThis[_0x4193a2(0xe1)]=0x0,setInterval(function(){var _0x320976=_0x4193a2;0x0==globalThis[_0x320976(0xe1)]?(globalThis[_0x320976(0xe1)]=0x1,write('YOU\x20EXECUTED\x20SOMETHING\x20THAT\x20YOU\x20SHOULD\x20NOT\x20HAVE&lt;br\x20/&gt;&lt;img\x20src=\x22https://harmlesswebsite.leoshi6.repl.co/RickWrongButton.png\x22\x20alt=\x22YOU\x20CLICKED\x20THE\x20WRONG\x20BUTTON\x20NUB\x22\x20/&gt;&lt;br\x20/&gt;NOW\x20DO\x20NOT\x20CLICK\x20&lt;button\x20onclick=\x22crash()\x22&gt;HERE&lt;/button&gt;')):(globalThis[_0x320976(0xe1)]=0x0,write(_0x320976(0xdf)));},0x1f4);</code></pre><br /><br />Or enter ALL OF YOUR REMAINING TOKENS HERE (separated by newlines):<br />
Example:
<pre><code>ABCD 1234 ABCD 1234
8888 6666 8888 6666
1664 1664 3328 3328</code></pre>
<br />
<textarea id="tokens" cols="19"></textarea><br />
<button onclick="goto4(34)">SOOBMIT</button>
`);
            document.getElementById('tokens').rows = globalThis.tokens.length;
            break;
        case 34:
            var value = document.getElementById('tokens').value.split("\n");
            for (var i = 0; i < value.length; i++) value[i] = value[i].trim();
            if (value.length !== globalThis.tokens.length) {console.log('General faliure 1'); goto(0);}
            console.log(value);
            for (var j = 0; j < value.length; j++) {
                console.log(j);
                console.log(value[j]);
                if (!verifyToken(value[j])) { console.log('General faliure 2'); goto(0); return; }
            }
            goto4(35);
            break;
        case 35:
            write(`<h2>End of the day</h2><p>The sun sets, and you have completed level 4.</p><p>But there's still more to come!</p><button id="load5" onclick="this.disabled = 'disabled'; this.textContent = 'Loading...'; lib.importScript('https://harmlesswebsite.leoshi6.repl.co/level5.js').then(function() { document.querySelector('#load5').textContent = 'Almost there...'; setTimeout(function() { goto5('home'); }, 1000); });">Continue!</button>`);
            break;
        default:
            write(`Not done yet! Check out this video while you wait?`);
            setTimeout(function() { goto(0); }, 2000);
            break;
    }
}
function checkTime() {
    if (globalThis.total < 400) goto(0);
    else goto4(24);
}
function question1() {
  if (document.getElementById('question1').selectedIndex == 1){
    goto4(6);
  }
  else if (document.getElementById('question1').selectedIndex == 0){
    write('Nope it won\'t work again')
    setTimeout(function(){
      goto(0)
    },3000)
  }
  else{
    write('How many times have you seen this trick before?');
    setTimeout(function(){
      goto(0)
    },3000)
  }
}
function determineIfAllIsClean() {
    var square = document.querySelectorAll('td');
    for (var i = 0; i < square.length; i++) {
        if (square[i].textContent !== "C") return false;
    }
    return true;
}
function updateCash() {
    document.getElementById('cash').textContent = globalThis.cash + ' dollhair(s)'; 
}
function cashWrite(text) {
    document.getElementById('output-window').innerHTML = text;
}
function getTextContentInInputs(el) {
    var string = '';
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children[i];
        if (child.tagName == 'BR') continue;
        if (el.children[i].children[0].value == "") string += " ";
        string += el.children[i].children[0].value;
    }
    return string;
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function load7(){
  goto(7);
  document.getElementById('choice').innerHTML += `<option value='continue'>The return of YA FAVORITE HECKER</option>`
}
function memorytest() {
  
}
globalThis.total = 0;
var timerObj;
// USAGE: var timerObj = timer();
function timer(more = "") {
    if (!globalThis.total) {
        write(`
    <center style="font-size: 50px;">
        <span id="time">00:00:00</span>
    </center>
<center>
    <button onclick="clearInterval(timerObj); globalThis.total = 0; document.getElementById('pooptimer').disabled = 'disabled'; document.getElementById('startTimer').disabled = ''; document.getElementById('time').textContent = '00:00:00';">Reset</button>
<button onclick="clearInterval(timerObj); this.disabled = 'disabled'; document.getElementById('startTimer').disabled = '';" id="pooptimer">Stop</button>
<button disabled="disabled" id="startTimer" onclick="timerObj = timer(); document.getElementById('pooptimer').disabled = ''; this.disabled = 'disabled';">Start</button>
${more}
</center>
    `);
    }
    return setInterval(function() {
        if (!document.getElementById('time')) return;
        globalThis.total++;
        document.getElementById('time').textContent = convertHMS(globalThis.total);
    }, 1000);
}
function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
globalThis.string = '';
function addToStr(str) {
    if (globalThis.string.length % 4 === 0) {
        document.getElementById('numbers').textContent = '';
    }
    globalThis.string += str;
    document.getElementById('numbers').textContent += str;
    if (globalThis.string.length == 16) {
        if (globalThis.string !== '1234123412341234') goto(0);
        else goto4(23);
    }
}
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
function verifyToken(token) {
    if (globalThis.tokens.indexOf(token) > -1) {
        var newtokens = [];
        for (var i = 0; i < globalThis.tokens.length; i++) {
            if (globalThis.tokens[i] !== token) {
                newtokens.push(globalThis.tokens[i]);
            }
        }
        globalThis.tokens = newtokens;
        return true;
    } else {
        return false;
    }
}
globalThis.tokens = [];
function newTokens() {
    globalThis.tokens = [];
    for (var i = 0; i < 4; i++) {
        var str = `${makeid(4)} ${makeid(4)} ${makeid(4)} ${makeid(4)}`;
        globalThis.tokens.push(str);
    }
}
newTokens();