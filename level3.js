function goto3(endpoint) {
	switch (endpoint) {
		case 0:
			write(`<center><h1>ARRRRG I HATE THIS</h1>

<small>Well, that didn't exactly work. Let's try it again:
<small>
<h2>ARRRRG I HATE THIS</h2>
<small>ARRRRG I HATE THIS THING THAT DOESN'T WORK
<small>But <button onclick="goto(0)">here's</button> the actual video</small>
</small>
</small>
</small>
</center>
`);
			break;
		case 'home':
			write(`
Welcome to level 3! By now, you probably know most of these levels aren't easy. If so, click below to continue.

<button onclick="goto(0)">Start level 3!</button><br />
<span style="font-size: 0.5px;">Or actually, <button onclick="goto3('level3')">click here.</button></span>
<p>As a BONUS, you can hover over buttons to see what they will do on click.</p>
`);
            const peekcss = document.createElement('link');
            peekcss.setAttribute('href', 'https://harmlesswebsite.leoshi6.repl.co/peek.css');
            peekcss.setAttribute('rel', 'stylesheet');
            document.querySelector('head').appendChild(peekcss);
			break;
		case 'level3':
write(`<h1>Hey look! This is the NEW harmless website. Stuff may go wrong!</h1>
<button onclick="goto3('infiniteLoop1')">A very blank page</button>
<br />
<br />
<button onclick="goto3(0)">You lose! Try not to go to this page.</button>
<br />
<fieldset>
<legend>Try to go here!</legend>
<button disabled="disabled" onclick="window.location.href = 'https://harmlesswebsite.leoshi6.repl.co/sus.html'">You lose! Try <strong>to</strong> go to this page.</button>
<br />
<label><input onchange="this.checked = false;" type="checkbox" /> Un-disable the above button</label>
<label><input checked="checked" onchange="this.checked = true;" type="checkbox" /> Disable this thing (reverses previous checkbox) </label>
</fieldset>
<big><big><big>Do you want to see the ACTUAL creator? You had to solve 2 whole levels to see it! (Click <a href="https://harmlesswebsite.leoshi6.repl.co/sus.html">here</a>!)</big></big></big>
<button onclick="window.location.href='https://harmlesswebsite.leoshi6.repl.co/sus.html';">This is the button described in the previous message.</button>
<button onclick="goto3('puzzle')">More Information</button>
`);
			break;
		case 'infiniteLoop1':
			write(`
<h1>Hey look! This is a blank page!</h1>
<button onclick="goto3('infiniteLoop2')">Back</button>`);
			break;
		case 'infiniteLoop2':
			write(`
<pre>Uncaught ERROR: Syntax error

goto3('home');
    ^^^^^^^^^^ we hate you 
               so we throw errors
</pre>
<button onclick="goto3('infiniteLoop1')">The ACTUAL back button</button>
`);
			break;
		case 'puzzle':
			write(`<h1>Magic Square</h1>
    <p>Fill out this magic square with numbers 1-9 so that every row, column, and diagonal adds up to the same number (15).</p>
<table id="magicsquare"></table>
    <br>
    <button onclick='submitMagicSquare()'>Submit</button>`);
			var pos = 1;
			for (var i = 0; i < 3; i++) {
				var row = document.createElement('tr');
				for (var j = 0; j < 3; j++) {
					var input = document.createElement('input');
					input.setAttribute('size', 1);
					input.setAttribute('type', 'number');
					input.setAttribute('max', '9');
					input.setAttribute('maxlength', 1);
					input.setAttribute('required', 'required');
					input.setAttribute('id', pos);
          input.setAttribute('style', 'height: 50px; width: 50px;')
					var label = document.createElement('label');
					var hiddenLabel = document.createElement('span');
					hiddenLabel.textContent = "Answer";
					hiddenLabel.setAttribute('hidden', 'hidden');
					label.appendChild(hiddenLabel);
					label.appendChild(input);
					var td = document.createElement('td');
					td.appendChild(label);
					row.appendChild(td);
					pos++;
				}
				document.querySelector('table#magicsquare').appendChild(row);
			}
			break;
        case 'baja':
            const mazeScript = document.createElement('script');
            write(`<div id="output">Loading...</div>`);
            mazeScript.setAttribute('src', 'https://maze.weeklyd3.repl.co/script.js');
            document.querySelector('head').appendChild(mazeScript);
            break;
        case 'winbaja':
            write(`YOU WON THE BAJA CALIFORNIA EXERCISE! How!?!?!?

<h2>Okay, you're kinda good at this. But to continue,</h2>
<p>do a test!</p>
Write JavaScript code to do the following task:
<b>Add all the numbers provided.</b>
<table>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
<tr>
<td><code>add(1)</code></td>
<td>1</td>
</tr>
<tr>
<td><code>add(1, 2, 3)</code></td>
<td>6</td>
</tr>
</table>
<p>Hint: spread syntax</p>
<p>NOTE: The test cases are generated, so you can't pre-compute the answers.</p>
<form onsubmit="submitAddCodeExercise()" action="javascript:;" id="exercise">
<label>
Write code here:<br />
<textarea id="code" spellcheck="off" rows="10" cols="75">
function add(params) {
    // COMPLETE THE ADD FUNCTION.
    // This function takes a list of any amount of numbers
    // and outputs their sum.
}
</textarea>
</label><br />
<p style="display: none;" id="wincodeexercise">YOU WON! <input type="button" onclick="goto3('postcode')" value="I won, please go on!" /></p>
<input type="submit" value="Submit code" />
<pre id="output">After you run the code, the output will be here.</pre>`);
            document.getElementById('code').addEventListener('keydown', function(e) {
                switch (e.key) {
                    case "Tab":
                        e.preventDefault();
                        var start = this.selectionStart;
                        var end = this.selectionEnd;
                        
                        this.value = this.value.substring(0, start) +
                          "\t" + this.value.substring(end);
                        
                        this.selectionStart = this.selectionEnd = start + 1;
                    break;
                    case "{":
                        e.preventDefault();
                        var start = this.selectionStart;
                        var end = this.selectionEnd;
                        this.value = this.value.substring(0, start) + "{}" + this.value.substring(end);
    
                        this.selectionStart = this.selectionEnd = start + 1;
                    break;
                    case "(":
                        e.preventDefault();
                        var start = this.selectionStart;
                        var end = this.selectionEnd;
                        this.value = this.value.substring(0, start) + "()" + this.value.substring(end);
                        this.selectionStart = this.selectionEnd = start + 1;
                    break;
                case 'Enter':
                        if (this.value[start-1] == "{") {
                            e.preventDefault();
                            var start = this.selectionStart;
                            var end = this.selectionEnd;
                        
                            this.value = this.value.substring(0, start) + "\n\t\n}" + this.value.substring(end);
                            this.selectionStart = this.selectionEnd = start + 1;
                        }
                    }
                    /*else
                        document.body.innerHTML += e.key;*/
                
            });
            break;
        case 'postcode':
            write(`
<h1>Precision Game</h1>
Press the button when the box you will see is exactly 50 percent full.
<button onclick="goto3('precision')">Start the test!</h1>
`);
            break;
        case 'precision':
            write(`
<div id="output">
<img alt="Glass of water" style="position: fixed; top: 3px; left: 3px; z-index: 1;" src="https://harmlesswebsite.leoshi6.repl.co/whitewithempty.png" onclick="submitGlass()" />
<div style="position: fixed; top: 3px; left: 3px; z-index: -1; height: 100px; width: 100px; background-color: white;" id="water"></div>
<div style="position: fixed; top: 3px; left: 3px; z-index: -2; height: 100px; width: 100px; background-color: blue;"></div>
</div>
`);
            setInterval(function() {
                if (!document.getElementById('water')) {
                    return;
                }
                document.getElementById('water').style.height = (parseInt(document.getElementById('water').style.height.slice(0, -1)) - 1)  + "px";
            }, 500);
            break;
        case 'afterprec':
            write(`
Hack this site to continue.
<p>Available commands:</p>
<code>root@harmlesswebsite:/# <label>
<span hidden="hidden">Command:</span>
<select id="command1" onchange="cmdOptions(this.options[this.selectedIndex].textContent)">
<option disabled="disabled" selected="selected">Choose...</option>
<option>rm</option>
<option>ls</option>
<option>edit</option>
</select>
<select id="command2" disabled="disabled">
<option>(none)</option>
</select>
<select id="command3" disabled="disabled">
<option>(none)</option>
</select>
<br />
<input type="button" onclick="submitCMD()" value="Execute" />
`);
            break;
        case 'repair':
            write(`
<link rel="stylesheet" href="https://harmlesswebsite.leoshi6.repl.co/unpeek.css" />
<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; overflow: scroll; background-color: white; border: 1px solid; border-radius: 3px;">
<h1 style="position: sticky; top: 0; background-color: skyblue;">Installation</h1><div id="output">Loading...</div>
</div>
<style>#baudy { background-color: #180153; } </style>
`)
            var importScript = document.createElement('script');
            taitl('Software Installation');
            importScript.src = 'https://osinstall.weeklyd3.repl.co/output.php';
            importScript.onload = function() { osinstall(0); }
            document.querySelector('head').appendChild(importScript);
            break;
        case 'postinstall':
            write(`
Ahh, thank you so much for re-installing the server operating system! That should get rid of some hackers!
<p>That's the end of level 3!</p>
`);
      break;
    default:
      write('not done yet!');
			break;
	}
}
function submitMagicSquare() {
	// This is SPAGHETTI CODE
  var r1c1 = parseInt(document.getElementById('1').value)
  var r1c2 = parseInt(document.getElementById('2').value)
  var r1c3 = parseInt(document.getElementById('3').value)
  var r2c1 = parseInt(document.getElementById('4').value)
  var r2c2 = parseInt(document.getElementById('5').value)
  var r2c3 = parseInt(document.getElementById('6').value)
  var r3c1 = parseInt(document.getElementById('7').value)
  var r3c2 = parseInt(document.getElementById('8').value)
  var r3c3 = parseInt(document.getElementById('9').value)
  var sett = new Set()
  sett.add(r1c1)
  sett.add(r1c2)
  sett.add(r1c3)
  sett.add(r2c1)
  sett.add(r2c2)
  sett.add(r2c3)
  sett.add(r3c1)
  sett.add(r3c2)
  sett.add(r3c3)
  if (sett.size == 9){
    if (r1c1 + r1c2 + r1c3 == 15 && r2c1 + r2c2 + r2c3 == 15 && r3c1 + r3c2 + r3c3 == 15 && r1c1 + r2c1 + r3c1 == 15 && r1c2 + r2c2 + r3c2 == 15 && r1c3 + r2c3 + r3c3 == 15 && r1c1 + r2c2 + r3c3 == 15 && r1c3 + r2c2 + r3c1 == 15){
      goto3('baja')
    }
    else {
      write('Faliure. Not all of the rows, columns, and diagonals summed up to 15.');
      setTimeout(function(){goto(0)}, 3000)
    }
  }
 else {
    write('Faliure. Not all of the numbers were different.');
    setTimeout(function(){goto(0)}, 3000)
  } 
}
function submitAddCodeExercise() {
    document.getElementById('output').innerHTML = '';
    var code = document.getElementById('code').value;
    eval(code);

    var testcases2 = [];
    for (let i = 0; i < (55 + Math.floor(Math.random() * 50)) * 20; i++) {
        var input = [];

        for (let j = 0; j < Math.floor(Math.random() * 100); i++)
            input.push(Math.floor(Math.random() * 100000));

        var sum = 0;
        for (const num of input)
            sum += num;

        testcases2.push({
            input: input,
            output: sum
        });
    }
    console.log(testcases2);
    
    var testcases = [
        {
            input: [1, 2, 3],
            output: 6
        },
        {
            input: [1],
            output: 1
        },
      {
        input: [512, 1000],
        output: 1512
      },
      {
        input: [666],
          output: 666
      }
    ];
    var wrong = 0;
    for (var i = 0; i < testcases2.length; i++) {
        document.querySelector('#output').innerHTML += "TEST CASE " + (i + 1) + ":\n";
        try {
            var output = add.apply(null, testcases2[i].input);
            if (output !== testcases2[i].output) {
                document.querySelector('#output').innerHTML += "TEST CASE FAILED: Your output was " + JSON.stringify(output) + " and the correct output was " + JSON.stringify(testcases2[i].output) + "\nInput:" + JSON.stringify(testcases2[i].input) + "\n";
                wrong++;
                break;
            } else {
                document.querySelector('#output').innerHTML += "TEST CASE SUCCESSFUL!\n";
            }
        } catch (e) {
            document.querySelector('#output').innerHTML += "\nERROR: " + e.toString();
            break;
        }
    }
    if (wrong === 0) document.getElementById('wincodeexercise').style.display = 'block';
}
function submitGlass() {
    var heightNow = 100 -parseInt(document.getElementById('water').style.height.slice(0, -1));
    document.getElementById('output').innerHTML = `
Let's see! You stopped it when the glass was <span id="percentfull">$PERCENT</span>% full!<br /><br /><span id="message">$MESSAGE</span>!
`;
    document.getElementById('percentfull').textContent = heightNow;
    if (Math.abs(heightNow - 50) > 5) {
        document.getElementById('message').textContent = 'Aww COME ON... You could have done better';
        setTimeout(function() { goto(0) }, 3000);
    } else {
        document.getElementById('message').innerHTML = 'Well... NOICE! Click <button onclick="goto3(\'afterprec\')">here</button> to continue';
    }
}
function cmdOptions(content) {
    document.getElementById('command2').disabled = '';
    document.getElementById('command3').disabled = '';
    var commands = {
        rm: [["-rf", "-r", "-f"], ["/", "~"]],
        ls: [["/"], null],
        edit: [["index.php"], null]
    };
    var commandList = commands[content];
    var availableCommands1 = commandList[0];
    document.getElementById('command2').innerHTML = '';
    if (availableCommands1 === null) {
        document.getElementById('command2').innerHTML = `<option>(no options)</option>`;
        document.getElementById('command2').disabled = 'disabled'; 
    } else {
        for (var i = 0; i < availableCommands1.length; i++) {
            var option = document.createElement('option');
            option.textContent = availableCommands1[i];
            document.getElementById('command2').appendChild(option);
        }
    }
    var availableCommands2 = commandList[1];
    document.getElementById('command3').innerHTML = '';
    if (availableCommands2 === null) {
        document.getElementById('command3').innerHTML = `<option>(no options)</option>`;
        document.getElementById('command3').disabled = 'disabled'; 
    } else {
        for (var i = 0; i < availableCommands2.length; i++) {
            var option = document.createElement('option');
            option.textContent = availableCommands2[i];
            document.getElementById('command3').appendChild(option);
        }
    }
}
function submitCMD() {
    var command = lib.selectedText(document.getElementById('command1'))
    + " "
    + lib.selectedText(document.getElementById('command2'))
    + (!document.getElementById('command3').disabled ? (" " + lib.selectedText(document.getElementById('command3'))) : "");
    switch (command) {
        case 'rm -rf /':
            write(`The server has crashed.<p><button onclick="goto3('repair')">Repair installation</button></p> (Note: peek will be disabled due to it obscuring buttons)`);
            // NONONONONO THAT IS HOW YOU WIN
            break;
        case 'rm -r /':
            write(`Too many confirmation prompts nub. FALIURE`);
            setTimeout(function() { goto(0); }, 3000);
            break;
        case 'rm -f /':
            write(`Haha, you didn't delete the server files`);
            setTimeout(function() { goto(0); }, 3000);
            break;
        case 'ls /':
            write(`WATT? Directory listing - access denied!`);
            setTimeout(function() { goto(0); }, 3000);
            break;
        case 'edit index.php':
            write(`\`index.php\` file is read only`);
            setTimeout(function() { goto(0); }, 3000);
            break;
    }
    if (command.endsWith('~')) {
        write(`You didn't delete ANY system files!`);
        setTimeout(function() { goto(0); }, 3000);
    }
}