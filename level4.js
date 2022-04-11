function goto4(endpoint) {
    switch (endpoint) {
        case 'home':
            write(`
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
            write(`You admitted you're a bot. So sorry about that. Wait a few seconds...`);
            setTimeout(function() { goto(0); }, 5000);
            break;
        case 2:
            write(`Wow. You can join our <a href="https://ircclone.weeklyd3.repl.co/">chat now!</a><br />Or...

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
        write(`<h3>Uhh hello? Are you paying attention? I was trying to explain to you what was wrong in your essay! And what were you doing? Driving down bird poop road? Just as I expected. I will give you a quiz to see if you actually read my feedback.<br>-techer</h3>
  What did<span style='color: white; font-size: 7px;'>n't</span>Mr. Kent not have?
  <select id='question1'>
    <option selected='selected' disabled='disabled'>Choose...</option>
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
<table>
<tr>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
</tr>
<tr>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
</tr>
<tr>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
</tr>
<tr>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
</tr>
<tr>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
<td>D</td>
</tr>
</table>
`);
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
<p>Cash: <span onclick="updateCash()" id="cash">Please click to view</span></p>
<div id="output-window"><span onclick="goto4(9)">You win</span> $200 for cleaning up the picture.
<p>Any time you get cash below zero, you will get rickrolled.</p>
<p>(Note: Click the cash value above to update it.)</p>
<button onclick="goto(0)">Spend $400 to stay alive</button>
</div>
`);
            break;
        case 9:
            cashWrite(`BWAHAHAHA. For every second you lose a <span onclick="goto4(10)">dollar!!!</span><span id="still-decreasing"></span>`);
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
            break;
        default:
            write(`Not done yet! Check out this video while you wait?`);
            setTimeout(function() { goto(0); }, 2000);
            break;
    }
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
    document.getElementById('cash').textContent = '$' + globalThis.cash;
}
function cashWrite(text) {
    document.getElementById('output-window').innerHTML = text;
}