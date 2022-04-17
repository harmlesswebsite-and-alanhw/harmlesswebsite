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
                    setTimeout(function() { goto(0); }, 2000);
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
<p id="quince">If we offend, it is with our good will<span class="period"></span><br />That you should think<span class="period"></span> we come not to offend<span class="period"></span><br />but with good will<span class="period"></span><br />To show our simple skill<span class="period"></span> <br />that is the true beginning of our end<span class="period"></span><br />Consider then we come but in despite<span class="period"></span><br />We do not come as minding to contest you<span class="period"></span><br />our true intent is<span class="period"></span><br />All for your delight<span class="period"></span> we are not here<span class="period"></span><br />The actors are at hand<span class="period"></span> and by their show you shall know all that you are like to know<span class="period"></span></p>
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
for your delight we are not here. The
actors are at hand and by their show you
shall know all that you are like to know.
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
            if (t !== ".,,. ..,. . .") {
                goto(0);
            } else {
                goto4(17);
            }
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
                if (globalThis.values[parseInt(document.querySelector('#question-' + i).value) - 1] !== globalThis.terms[globalThis.keys[i]]) {
                    goto(0);
                } else {
                    correct++;
                }
            }
            if (correct == globalThis.keys.length) {
                goto4(19);
            }
            break;
        case 19:
            write(`Wow, you are good at this! But are you good at everything or are you just lucky?`);
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