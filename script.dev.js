var code = '';
for (var i = 0; i < 4; i++) {
	code += Math.floor(Math.random() * 10);
}
var css = document.createElement('link');
css.setAttribute('href', 'https://harmlesswebsite.leoshi6.repl.co/style.css');
css.setAttribute('rel', 'stylesheet');
document.getElementsByTagName('head')[0].appendChild(css);
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}
function write(text) {
	document.getElementById('baudy').innerHTML = text;
}
function taitl(text) {
	document.getElementById('taitl').innerHTML = text;
}
var id = uuidv4();
function goto(num) {
	if (document.getElementById('pos')) {
		document.getElementById('pos').textContent = num;
	}
    switch (num) {
        // Any scripts inserted with innerHTML will
        // not run. Moving the injected script into
        // the HTML file.
        case 0:
            document.getElementById('taitl').textContent = 'OH NO I HATE RICKROLLS!!!'; document.getElementById("baudy").innerHTML = `
    ${'<link href="style.css" rel="stylesheet" type="text/css" /><style>iframe::before{display: block;content:"\00a0";width:100%;height:100%;position:relative;top:0px;left:0px;'}
						 z-index:9999;background-color:red;}</style>
  </head>
  <body>
    <center>
	  <div style="width:100vw;height:100vh;position:fixed;top:0;left:0; font-size: 50px">ARRRG I HATE THIS</div><br />
      <br>
      <br>
<div style="display: table; width: 100vw;">

    <iframe style="width: 49%;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<iframe style="width: 49%;" src="https://www.youtube.com/embed/BjDebmqFRuc?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=BjDebmqFRuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
<style>
iframe {
height: 540px;
max-height: 100%;
}
</style>
      </center>
  </body>`;
            break;
        case -1:
            // document.write will trash the page.
            document.getElementById("baudy").innerHTML =
                '<span onclick="goto(1)">Exactly what you were looking for.</span> <br><br><br><br><br><br><br><br><br><br>AHH how do I go back<br><br><br><br><br><br><br><br><br><br><span style="font-size: 8px;">Pro Tip: stuff doesn\'t have to be buttons or links or even visible to be clickable. This piece of advice goes beyond just this very blank page.</span>';
            break;
        case "loadme":
            document.getElementById("load").innerHTML = `<br>Ahh smart! This might take a while to load, though. <br /> <img src='https://harmlesswebsite.leoshi6.repl.co/loading.gif'/> <br> <button onclick="goto('impatience')" tabindex="0">Skip the wait. Be impatient.</button>`;
            break;
        case "impatience":
            document.getElementById("load").innerHTML = "<br>See, very harmless! It even taught you a lesson!";
            document.getElementById("creator").innerHTML = "You were too impatient to see the creator. Next time be more patient.";``
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            break;
        case -2:
            document.getElementById("baudy").innerHTML = '<button onclick="goto(4)">back</button><br><br>';
            row = random(2, 29);
            column = random(1, 120);
            document.getElementById("baudy").style.fontSize = "20px";
            for (var x = 1; x <= 30; x++) {
                for (var y = 1; y <= 120; y++) {
                    if ((x == row) & (y == column)) {
                        document.getElementById("baudy").innerHTML += `<span onclick="goto('code')">n</span>`;
                    } else {
                        document.getElementById("baudy").innerHTML += "h";
                    }
                }
                document.getElementById("baudy").innerHTML += "<br>";
            }
            break;
        case "randomizeColor":
            var color1 = Math.floor(Math.random() * 256).toString();
            var color2 = Math.floor(Math.random() * 256).toString();
            var color3 = Math.floor(Math.random() * 256).toString();
			
			if (document.getElementById('colorPopup')) {
			if (document.getElementById('colorbox')) {	document.getElementById('colorbox').removeAttribute('style');
				document.getElementById('colorbox').innerHTML = "Color opens in popup at bottom-right of screen.";
													 }
				globalThis.noOpen = true;
				document.getElementById('colorPopup').style.display = 'block';
				document.querySelector('#colorPopupDIV').style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")"; 
			} else {
            document.getElementById("colorbox").style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
			}
			if (document.getElementById('rgb')) {
            document.getElementById("rgb").innerHTML = "rgb of color: " + color1 + ", " + color2 + ", " + color3;
            document.getElementById("rgb").innerHTML += "<br>hex of color: " + rgbToHex(color1, color2, color3).toUpperCase();
			}
            break;
        case 1:
            document.getElementById("baudy").innerHTML = `
      
	  <h1>Hey look! This is a very safe website. Stuff will never go wrong!</h1>
    <button onclick='goto(-1)'>A very blank page</button><br /><br />
    <br />
    <button onclick='goto(0)'>You lose! Try not to go to this page.</button><br /><br />
    <span style='font-size: 30px;' id='creator'>Do you want to see the creator of this awesome and very harmless website? Click <span onclick="goto('loadme')" tabindex="0">this</span> following button!</span><span id="load"></span> <br />
    <div id='load'>
    <button onclick='goto(0)'>This is the button described in the previous message.</button>
    </div>
    <p>AYY LEARN HTML ALREADY</p>
    <a target="_blank" href='htmltags.pdf'>Here's a list of all of the tags</a><br>
	  <label>You can test out your code here:</label>
    <textarea name="html" id="html">Write code here</textarea><br /><button onclick="submit()">submit</button><br></br>
	  <span id="result">Results here ya BIG NUB</span><br></br>
    <iframe width="110" height="200" src="https://www.myinstants.com/instant/rick-rolled-99226/embed/"></iframe>
      <p>Tired of so many unexpected rickrolls? <a href='https://harmlesswebsite.leoshi6.repl.co/pro.html'>Upgrade your membership!</a></p>
    <a href='https://harmlesswebsite.leoshi6.repl.co/wesitecrasher.html'>don't click this or your website will crash! (and this website won't be safe anymore so dont click it and ruin its reputation)</a>
    <p>Don't have a favorite color? Find one!</p>
    <div id='colorbox' style='background-color: rgb(255,255,255); width: 200px; height: 150px; border: 2px solid black;'></div><br>
    <button onclick='goto("randomizeColor")'>Randomize!</button>
    <p id='rgb'>rgb of color: 255, 255, 255<br>hex of color: #FFFFFF</p>
    <a href='https://harmlesswebsite.leoshi6.repl.co/endlessEnemies.html'>minigame if you're bored</a><br>
    <a href='https://harmlesswebsite.leoshi6.repl.co/stoneAgeSurvival.html'>another minigame if you're bored of the previous one</a>
    <p>You can do cool stuff with html editing!</p><br> 
    <img src='https://harmlesswebsite.leoshi6.repl.co/be4edit.png'><br>
    can turn into <br>
    <img src='https://harmlesswebsite.leoshi6.repl.co/afteredit.png'><br>
    <button onclick='goto(2)'>More Information</button>`;
            break;
        case "code":
            document.getElementById("baudy").innerHTML =
                '</p><br><center><h1><button onclick="goto(4)">back</button><br>AWW COME ON! ITS A BLANK PAGE WITH <span style = "text-decoration: italic;">ABSOLUTELY NOTHING</span> ON IT!</h1><p>But please try looking below</p></center><br><br><br><br><br><br><br><br><br><p style="font-size: 1px;">Save this code. It will come in handy later: ' +
                code +
                "</p>";
            break;
        case 2:
            document.getElementById("baudy").innerHTML = `
    <h1>Your browser has encountered an error!</h1>
    <p style='width: 550px'>ERROR CODE 352: A  hacker has hacked this system for some reason. Your request to view this following page has been blocked. Your browser is working to fix this error and to find this hacker. In the meantime, you have the following options: </p>
    <ul>
      <li>
        <a href='https://bit.ly/3fK2HD6'>Check if there has been any typo's in the URL of the site you are trying to view (may lead to some URL changes you might not like)</a>
      </li>
      <li>
        <a href='https://alanhw.weeklyd3.repl.co/'>Check out how to photoshop images while the error is being fixed</a>
      </li>
      <li>
        <a href='https://alanhw.weeklyd3.repl.co/schoology.html'>Do some homework while your browser catches the hacker</a>
      </li>
    </ul>
  <br></br>
  <p>Sorry for the inconvenience. Click <button onclick='goto(3)'>this</button> to go to the home page if none of the above works.</p>`;
            break;
        case "rick":
            document.getElementById("baudy").innerHTML = "";
            document.querySelector("link").href = "rick.css";
            for (var x = 1; x <= 10; x++) {
                for (var y = 1; y <= 10; y++) {
                    document.getElementById("baudy").innerHTML += '<img src="https://harmlesswebsite.leoshi6.repl.co/rickroll.gif">';
                }
            }
            break;
        case "havefun":
            document.getElementById("baudy").innerHTML = 'If you want to have fun, try the these two minigames: <a href="endlessEnemies.html">first minigame</a> and <a href="stoneAgeSurvival.html">second minigame</a>.';
            break;
        case "hacksite":
            document.getElementById("baudy").innerHTML =
                "<button onclick=\"window.open('https://alanhw.weeklyd3.repl.co/terminal.html', 'alanhw', 'height=500,width=800');\">Open in new window</button><iframe src=\"https://alanhw.weeklyd3.repl.co/terminal.html\" style=\"width: 100%; height: 80vh; border: none;\"></iframe>";
            document.getElementById("baudy").innerHTML += "Doesn't work? try the manual code editor on the <button onclick='goto(1)'>home</button> page.";
            document.getElementById("baudy").innerHTML += "<p>Process ID: {" + uuidv4() + "}, <button onclick=\"goto('hacksite');\">start new instance</button></p>";
            break;
        case "learnhtml":
            document.getElementById("baudy").innerHTML = 'if you really want to learn html, go <a href = "https://developer.mozilla.org/en-US/docs/Learn/HTML">here</a> instead of bothering me.';
            break;
        case "curious":
            document.getElementById("baudy").innerHTML = 'if you are that curious, find out what <button onclick="goto(0)">this button</button> goes to.';
            break;
        case "deadend":
            document.getElementById('baudy').innerHTML = "<h1>AWW COME ON YOU GOT DEAD ENDED</h1><p>But hey, at least you didnt get rickrolled.</p>";
            break;
        case 3:
            document.getElementById("baudy").innerHTML = `
      <h4>Why did you come to this page?</h4>
    <ol type = "a">
         <li onclick='goto("rick")'>To get rickrolled 100 times</li>
         <li onclick='goto("havefun")'>To have fun</li>
         <li onclick='goto("hacksite")'>To hack this site</li>
         <li onclick='goto("learnhtml")'>To learn HTML</li>
         <li onclick='goto(1)'>I GOT TRICKED INTO COMING HERE!</li>
         <li onclick='goto("curious")'>I was just curious</li>
         <li onclick='goto("deadend")'>To not get rickrolled</li>
         <li onclick='goto(4)'>None of the above</li>
      </ol>`;
            break;
        case 4:
            document.getElementById("baudy").innerHTML = `<div style = 'height: 100vh; width: 100%;'><p>
      ERROR CODE 356: A  hacker has hacked this system for some reason. Your view of the following page has been slightly changed. Your browser is working to fix this error and to find this hacker. Meanwhile, please wait patiently for the your browser to fix this error.
    </p>
    <h2>ARRG HOW COME YOU KEEP PASSING MY TESTS!? Are you sure you want to <span onclick='goto(5)'>continue?</span></h2><br>
    <button onclick='goto(0)'>No</button> or <button onclick='goto(0)'>No</button>
    <br></br><a style='font-size: 7px' href='https://bit.ly/3fK2HD6'>or no</a></div><button onclick='this.textContent = "Loading the information..."; this.disabled = true; goto(-2)'>Or no, but I want to see something important that I will need later on.</button><br />`;

            break;
        case 5:
            document.getElementById(
                "baudy"
            ).innerHTML = `<h2>Ok you're sort of good at this. However, I still need to see if you're absolutely worthy of continuing before I allow you to continue. I will give you a test. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-hacker</h2><br></br>
    <button id='start' onclick='document.getElementById("start").style.display="none"; document,getElementById("test").style.display="block"'>Start the test!</button>
    <div id='test' style='display: none;'>
    1. Type the name of this singer:
    <img src='https://harmlesswebsite.leoshi6.repl.co/rickastley.png' style='width: 512px; height: 288px;'> <br>
    <span id='rickinput' style="white-space:pre-wrap;"></span><img src="https://harmlesswebsite.leoshi6.repl.co/Cursor.gif" alt="" /><br>
<span id="keyboard">
      <button onclick='document.getElementById("rickinput").innerHTML += "A"'>A</button><button onclick='document.getElementById("rickinput").innerHTML += "B"'>B</button><button onclick='document.getElementById("rickinput").innerHTML += "C"'>C</button><button onclick='document.getElementById("rickinput").innerHTML += "D"'>D</button><button onclick='document.getElementById("rickinput").innerHTML += "E"'>E</button><button onclick='document.getElementById("rickinput").innerHTML += "F"'>F</button><button onclick='document.getElementById("rickinput").innerHTML += "G"'>G</button><button onclick='document.getElementById("rickinput").innerHTML += "H"'>H</button><button onclick='document.getElementById("rickinput").innerHTML += "I"'>I</button><button onclick='document.getElementById("rickinput").innerHTML += "J"'>J</button><button onclick='document.getElementById("rickinput").innerHTML += "K"'>K</button><button onclick='document.getElementById("rickinput").innerHTML += "L"'>L</button><button onclick='document.getElementById("rickinput").innerHTML += "M"'>M</button><br><button onclick='document.getElementById("rickinput").innerHTML += "N"'>N</button><button onclick='document.getElementById("rickinput").innerHTML += "O"'>O</button><button onclick='document.getElementById("rickinput").innerHTML += "P"'>P</button><button onclick='document.getElementById("rickinput").innerHTML += "Q"'>Q</button><button onclick='document.getElementById("rickinput").innerHTML += "R"'>R</button><button onclick='document.getElementById("rickinput").innerHTML += "S"'>S</button><button onclick='document.getElementById("rickinput").innerHTML += "T"'>T</button><button onclick='document.getElementById("rickinput").innerHTML += "U"'>U</button><button onclick='document.getElementById("rickinput").innerHTML += "V"'>V</button><button onclick='document.getElementById("rickinput").innerHTML += "W"'>W</button><button onclick='document.getElementById("rickinput").innerHTML += "X"'>X</button><button onclick='document.getElementById("rickinput").innerHTML += "Y"'>Y</button><button onclick='document.getElementById("rickinput").innerHTML += "Z"'>Z</button><br><button onclick='document.getElementById("rickinput").innerHTML += " "'>Space</button></button><button onclick='document.getElementById("rickinput").innerHTML = document.getElementById("rickinput").innerHTML.slice(0, -1)'>Delete</button></span><button onclick='submitrick()'>Submit</button><br /><button onclick="document.getElementById('fill').style.display = 'block'; document.getElementById('filltext').style.display = 'block';this.style.display = 'none';document.getElementById('keyboard').style.display = 'none';document.getElementById('filltext').focus();document.getElementById('filltext').value = document.getElementById('rickinput').textContent;" id="fillbutton">Enable keyboard input</button>

<form autocomplete='off' action="javascript:;" style="display: none;" id="fill">Please type to fill in the answer.
<label><span style="display: none;">Fill with text:</span> <input oninput="document.getElementById('rickinput').textContent = document.getElementById('filltext').value;" id="filltext" onblur="document.getElementById('keyboard').style.display = 'inline'; document.getElementById('fillbutton').style.display = 'block'; this.parentNode.parentNode.style.display = 'none';" /></label></form><br>
    </div>`;
            break;
        case 6:
            document.getElementById("baudy").innerHTML = `<p>Hacker is so annoying!</p>
    <button onclick='kinghacker()'>report</button>`;
            break;
        case 7:
            if (document.getElementById("taitl")) {
                document.getElementById("taitl").innerHTML = "Hacker's virtual escape course";
            }
            document.getElementById(
                "baudy"
            ).innerHTML = `<p>Police: A hacker has been detected on this site. Since you are the only one online, you must be the hacker. You have to understand that hacking is a VERY serious crime. </p><label>Choose your way of punishment: <select id='choice'><option disabled='disabled' selected='selected'>Choose...</option><option value='prison'>30 years in prison</option><option value='fine'>5 million dollar fine</option><option value='rickroll'>Rickrolled 100 times</option></select></label>
    <br>
    <button onclick='chooseanswer()'>Submit</button>`;
			break;
      case 8:
        document.getElementById('baudy').innerHTML = `<h3>Your chosen way of punishment: "Choose..."?</h3>
    <p>Something has gone very wrong. That wasn't supposed to be choosable. Please file a bug at... well, by sending it to <a href="https://guestbook.weeklyd3.repl.co">here</a>. Not that it is going to get a response. Or you can try reporting the error here: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://github.com/weeklyd3/nodb-forum</a>.</p>
	  <p>So please choose another way of punishment, or the police, who are actively chasing you through cyberspace right now, are going to decide for you. They LOVE to judge by chance!</p>
    <button onclick='goto(7)'>I want to choose by myself</button><button onclick='goto("palize")'>I want the police to choose for me</button><button onclick='goto(9)'>Stubbornly continue with my current choice</button>`
      break;
    case "palize":
      var x = Math.floor(Math.random()*3); 
    if (x === 0){
      goto("rick");
    } 
    if (x === 1){
      write("I expect you to stay here for 30 years. I hope you are honest despite being a hacker since I won't check.");
    } 
    if (x === 2){
      write("Find a way to leave some E-money here, okay? I'll come and collect it in a while.");
    }
      break;
      case 9:
        document.getElementById('baudy').innerHTML = `
    <h3>Hmm, so how should you be punished by "Choose..."?</h3>
    <p>I have no idea! but since you so stubbornly insisted that you should be punished this way, let me consult my smartest friend: Google!</p>
    <img src='https://harmlesswebsite.leoshi6.repl.co/googlesearch.png' alt="Google Search returns a web page called How to Choose Appropriate Consequences" />
    <p>Okay, actually, scratch that. Google is the dumbest thing that humanity has ever created. I would need to interpret your way of punishment by myself. Hmm, lets see... Oh I know! I will make you choose a bunch of options until you get bored to death! That will be a good way to punish you!</p>
    <p>Choose the following: </p>
    <ol>
      <li onclick='choose("a")'>A</li>
      <li onclick='choose("i")'>I</li>
      <li onclick='choose("t")'>T</li>
      <li onclick='choose("l")'>L</li>
      <li onclick='choose("m")'>M</li>
      <li onclick='choose("u")'>U</li>
      <li onclick='choose("n")'>N</li>
    </ol>
    <p>And don't worry, when you choose one, if nothing happens, you did choose it. Hey, this is your punishment. It's supposed to be boring.</p>
    <noscript id='word'></noscript>`
        break;
      case 10:
        document.getElementById('baudy').innerHTML = `
    <center><h2>1 SECOND CPS TEST</h2><br><p>get 10 cps or more to continue.</p> <h3 id='clicks'>Clicks: 0</h3><button onclick = 'clickTest()' style='height: 400px; width: 500px;'>Click me to start</button><br />
<button id="goon" onclick="goto(11);" disabled="disabled">Continue</button>
	<p id="results"></p></center>`
        break;
		case 11:
			document.getElementById('baudy').innerHTML = `<p>I assume you have noticed that your tests are gradually getting harder. That is very true. And I'm very sure you don't like it. Just deal with it, k? The escape course is almost over. I just need to make sure that you aren't cheating in anything. Anyway, lets play some word association! (but if you give the answer I'm not looking for, gg.) <br> -Hacker</p><br></br>
    <button onclick='document.getElementById("wordassociation").style.display = "block"; document.getElementById("start").style.display = "none"' id='start'>Start!</button>
    <div id = 'wordassociation' style='display: none;'>
      <h2 id='word'>poop</h2>
	  <form action="javascript:;" onsubmit="submitAssociation()">
      <input autocomplete='off' type='text' id='answer'> <button>Submit</button>
	  </form>
    </div>`
    break;
      case 12:
        document.getElementById('baudy').innerHTML = `
    <div id='thebutton' style='width: 500px; height: 500px; background-color: gray;' onmousedown='clickthebutton()' tabindex="0"></div>`
        break;
      case 13:
        document.getElementById('baudy').innerHTML ='<h1>you lose :(</h1><p>you thought you were a pro at this? <button onclick="goto(14)">No you aren\'t!</button>';
        break;
		case 14:
			document.getElementById('baudy').innerHTML = `
<h1>Oh, so you think you're good?</h1>
<p>Pass this!</p>
<span>Do you want to be rickrolled?</span>
<button onclick='goto(15)' style='border: none; background-color: white; color: white;'>no</button><br>
    <button onclick='goto(0)' id='yesss' onmouseover = 'this.innerHTML = "YES"; document.getElementById("noooo").innerHTML = "NO"'>YES</button><button onclick='goto(0)' id='noooo' onmouseover = 'this.innerHTML = "YES";document.getElementById("yesss").innerHTML = "NO"'>NO</button>
</p>
<button onclick="goto(7)">Never mind, I'm bad at this</button>
`;
			break;
      case 15:
			taitl("Final Test");
        document.getElementById('baudy').innerHTML = `<h1>FINAL TEST</h1>
    <h3>Enter the code you saw earlier.</h3>
    <h5>I mean, you did save it, didn't you?</h5>
    <input type='text' id='enterthecode'></input><button onclick='checkforcode()'>Submit</button>`
        break;
      case 'win':
			taitl('Most important decision of your life');
        document.getElementById('baudy').innerHTML = `<h1><strong>YOU PASSED!</strong></h1>
<p>You can leave now, or you can continue to move on to another level.</p><button onclick="goto('closewindow')"">leave</button>
    <button onclick='goto("heckercaught")'>continue</button><br /><br />`
        break;
		case 'closewindow':
				document.getElementById('baudy').innerHTML = "<div class=\"sysmsg\"><big><big><big>Congrats!</big></big></big>\nYou won harmlesswebsite. Have a good day!</div>";
			break;
      case 'heckercaught':
			document.getElementById('taitl').textContent = 'Homework';
        document.getElementById('baudy').innerHTML = `<h1>Oh, that's not the end...</h1><p>But to pass, please:<br /><img src="https://badhtml.com/pics/captcha.jpg" alt="Calculus equation" /></p>
<form onsubmit="submitCAPTCHA()" action="javascript:;">
<label>Answer:
<input type="text" name="answer" />
</label>
<input type="submit" value="Submit Assessment" />
</form>
`;

			break;
		case 'ransomware':
			document.getElementById('taitl').textContent = 'Oh no...';
			write(`
<h1>The hacker isn't done yet</h1>
<p>He has encrypted the server</p>
<button onclick="goto('ransom')">Continue</button>
`);
			break;
		case 'ransom':
			taitl("Debug Info -- Intercepted Message");
			write(ransomMessage(`The server has been encrypted. Thus, your request to access the content at <code>/script.js</code> could not be fulfilled.<br /><br />See below for decryption directions<br /><br />Oh, and before you read the decryption directions, don't start the decryption, or you'll get rickrolled.`, true));
			break;
		case 'decryptionDirections':
			taitl(`Decryption Directions`);
			write(ransomMessage(`To decrypt your files, please <b>CHANGE</b> the paragraph on the main files decrypted page.</p><p>Please make it say:</p><p>BWAHAHAHAHA I'M PASSING THIS LEVEL</p><small>hint: contenteditable='true'<p>Then, on the home page, click <kbd>Begin Decryption</kbd>.</p><p>Click below to go back:`, false));
			break;
		case 'ransomWin':
			taitl('Decrypting files...');
			write(`Please wait while we decrypt your files...<br /><progress id="progress" max="100" value="0" style="display: block; height: 30px; width: 100%; -webkit-appearance: none; -moz-appearance: none; appearance: none;"></progress><center><span id="progressText">0</span>%</center><center><button id="continueButton" disabled="disabled" onclick="goto('gasLeak')">Continue to site</button>`);
			var int = setInterval(function() {
				var currentProgressText = document.getElementById('progressText');
				if (currentProgressText === null) return;
				var currentProgress = parseInt(currentProgressText.textContent);
				if (currentProgress == 99) clearInterval(int);
				var newProgress = currentProgress + 1;
				document.getElementById('progressText').textContent = newProgress;
				document.getElementById('progress').value = newProgress;
				if (newProgress == 100) {
					document.getElementById('continueButton').disabled = '';
				}
				
			}, 150);
			break;
		case 'gasLeak':
			taitl('Gas leak!');
			write(`<h2>The gas leaked!</h2><p>You're stolling next to the server room, feeling good about cracking the ransomware, and BOOM!</p><p>It kinda stinks here!</p><img src="https://harmlesswebsite.leoshi6.repl.co/itkindastinkshere.png" alt="It kinda stinks here!" /><p>Image credit: Alan via Photoshopped Images folder, leyzbones [at] gmail.com</p>
<p>You tell the office. But you're the manager.</p>
<button onclick="goto('evacuation')">Request Evacuation</button>
<button onclick="goto(0)">Run away and don't care</button>
<p>By the way, this is exactly what happended <time datetime="2022-03-17T15:46">on March 17, 2022 at around 3:46 PM</time> at school.</p>
`);
			break;
		case 'evacuation':
			write(`<p>You request evevryone to evacuate.</p><p>Now, this:<br /><img src="https://alanhw.weeklyd3.repl.co/BSIV.png" alt="BSIV" /><br /> gets full of people.</p><p>Finally, the speakers announce that...</p><button onclick="goto('evacuation1');">click here to find out</button>`);
			break;
		case 'evacuation1':
			write(`<p>You got disconnected. Attempting to reconnect...</p><p><b><img src="https://harmlesswebsite.leoshi6.repl.co/loading.gif" style="height: 1em; width: 1em;" alt="" /> connecting...</b></p><p><button onclick="goto('serverChoice');">Impatient? Switch server</button></p><details><summary>Debugging server? Open details.</summary><pre id="connection-log">-- Disconnected, attempting to re-connect --</pre></details>`);
			globalThis.currentPreLogPosition = 0;
			preLogItems = ["Trying with primary domain...", "Looking up host: <i>https://harmlesswebsite.leoshi6.repl.co</i>", "Connecting...", "<b>Failed</b>: Internet connection not found", "Trying again with alternative server <i>https://harmlesswebsite.idkwutocalmself.repl.co</i>...", "Connecting...", "<b>Failed</b>: DNS resolution error"];
			var tipInterval = setInterval(function() {
			if (!document.getElementById('connection-log')) { 
				clearInterval(tipInterval); return; 
															} else {
				document.getElementById('connection-log').innerHTML += "\n" + preLogItems[globalThis.currentPreLogPosition];
			}
				globalThis.currentPreLogPosition += 1;
				if (globalThis.currentPreLogPosition === 7) globalThis.currentPreLogPosition = 0;
			}, 1500);
			break;
		case 'showServerStatus':
			clearTimeout(rickroll1);
			write(`<p>FINALLY! You have been connected.</p><p>But you found out that you left your COMPUTER in your LOCKER, and...</p>
<div style="border: 1px solid; padding: 5px;">
<h2>Mid-Term Assignment</h2>
<p>
For this assignment, please write a 200-word report. You can access study materials <a href="https://alanhw.weeklyd3.repl.co/schoology.html" target="_blank">here</a>.
</p>
<p>
Please note that <strong>you will not be able to access the study materials with a different computer than the one at your school.</strong> The online system has a <a href="https://www.gnu.org/philosophy/right-to-read.en.html">DRM system that verifies you have the right to read every time you log on.</a> Unauthorized requests will be rickrolled and reported to the principle. (OOOPS, I meant principal)</p>
<p>Alert: Assignment is due tomorrow</p>
<button onclick="goto(0)">Don't do the assignment because you need your computer for it</button>

<button onclick="goto('submitHWAssignment')">Submit Assignment</button>
</div>
<p>Full disclosure: This is what happened to someone else. Not saying who, but you know who you are.</p>`);
			break;
		case 'submitCheckboxes':
			if (!(document.querySelector('#question-0').checked && document.querySelector('#question-1').checked)) {
				write(`Why aren't you looking at this?`);
				setTimeout(function() {
					goto(0);
				}, 1000);
				break;
			}
			if (document.querySelector('#question-14').checked && !document.querySelector('#question-15').checked) {
				write(`WHAT PART OF 'TELL THE TRUTH' DO YOU NOT UNDERSTAND!?`);
				setTimeout(function() {
					goto(0);
				}, 1000);
				break;
			}
			if (document.querySelector('#question-3').checked) {
				write(`<h2>Unknown Error</h2><p>Unfortunately, you did not answer a simple question correctly, so you must be failed.</p><button onclick="goto(0)">Click here to continue.</button>`);
				break;
			}
			if (parseInt(document.getElementById('score').textContent) > 0) {
				write(`
<div style="background-color: #ffefd5; border: 1px solid; padding: 7px;">
<center>
<h1 style="font-size: 32px;"><img alt="stop" src="//upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/30px-Stop_hand_nuvola.svg.png" decoding="async" title="Stop" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/45px-Stop_hand_nuvola.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/60px-Stop_hand_nuvola.svg.png 2x" data-file-width="240" data-file-height="240" /> <span style="font-size: 32px;">STOP!</span></h1>
<h2>Abuse Prevention System</h2>An artifically inflated score has been detected. To prevent abuse, this connection must be immediately terminated. All users of this network who have engaged in this kind of fradulent activity have been stripped of their ability to access this site.
<p>Note that this block may NOT be appealed due to the high volume of abuse from this IP address. Too bad, sucks to be you.</p>
<p>Please switch an IP address so it can be blocked as well. You will then also be blocked of IP-address hopping. Then, you should use an IPv6 address.</p>
<p>WARNINGS TO IPv6 address users:</p>
<p>On 3/21/2020 at 3:25 PM:</p>
<div style="border: 1px solid; padding: 3px; background-color: white;">Hi. This is a message to let you know that <b>you have recently hacked this site.</b> Hacking is a very serious crime. We demand that you <b>cease and desist</b> this fraudulent activity. Thank you. --<a href="https://forumexperiment.weeklyd3.repl.co/account/viewuser.php?user=weeklyd3">weeklyd3</a> (<b>cannot contact user</b>)</div>
<p>On 3/22/2021 at 12:03 AM:</p>
<div style="border: 1px solid; padding: 3px; background-color: white;">Please refrain from attempting to hack this site. Repeated hacking will result in being blocked from this site.  --<a href="https://forumexperiment.weeklyd3.repl.co/account/viewuser.php?user=weeklyd3">weeklyd3</a> (<b>cannot contact user</b>)</div>
<p>On 3/01/2022 at 9:05 AM:</p>
<div style="border: 1px solid; padding: 3px; background-color: white;"><b>Cease and desist</b> from hacking this site. You will be reported to administrators. --<a href="https://forumexperiment.weeklyd3.repl.co/account/viewuser.php?user=weeklyd3">weeklyd3</a> (<b>cannot contact user</b>)</div>
<p>On 3/12/2022 at 8:47 AM:</p>
<div style="border: 1px solid; padding: 3px; background-color: white;">You <strong>will</strong> be blocked from this site the next time you <strong>disrupt or otherwise attempt to hack</strong> this site. --<a href="https://forumexperiment.weeklyd3.repl.co/account/viewuser.php?user=weeklyd3">weeklyd3</a> (<b>cannot contact user</b>)</div>
<p>On 3/14/2022 at 3:14 PM:</p>
<div style="border: 1px solid; padding: 3px; background-color: white;">Reported to administrators. --<a href="https://forumexperiment.weeklyd3.repl.co/account/viewuser.php?user=weeklyd3">weeklyd3</a> (<b>cannot contact user</b>)</div>
<p>On 3/15/2022 at 1:15 AM:</p>
<div style="border: 1px solid; padding: 3px; background-color: white;"><b>Blocked</b> indefinitely. --<a href="https://forumexperiment.weeklyd3.repl.co/account/viewuser.php?user=admin">admin</a> (<b>cannot contact user</b>)</div>
</center></div>`);
				break;
			}
			write(`<div style="background-color: #ffefd5; border: 1px solid; padding: 7px;">
<center>
<h1 style="font-size: 32px;"><img alt="stop" src="//upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/30px-Stop_hand_nuvola.svg.png" decoding="async" title="Stop" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/45px-Stop_hand_nuvola.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/60px-Stop_hand_nuvola.svg.png 2x" data-file-width="240" data-file-height="240" /> <span style="font-size: 32px;">STOP!</span></h1>
<p>You have received an exceptionally low score. You must solve more levels.</p><p>Or <button onclick="goto(0)">click here to escape.</button></p><p><button onclick="goto('harderLevels')">Continue</button></p>`);
			break;
		case 'submitEssay':
			if (!globalThis.focused) {
				write('FALIURE. You did not modify it.');
				setTimeout(function() {
					goto(0);
				}, 1000);
				break;
			}
			write(`Well well well... PASS THIS!!! BWAHAHAHAHA<br />
<input type="button" onclick="goto('submitCheckboxes')" value="Submit" />
<br />
Score:
<span id="score">0</span>
<div id="questions"></div>
`);
			var questions = [
				{
					content: "Are you looking at this? (FREE POINTS !!1!!!1!!1!!)",
					points: 8888888888
				},
				{
					content: "REALLY?",
					points: -8888888888
				},
				{
					content: "Is 1+1 2?",
					points: -2147483647
				},
				{
					content: "Is 1+1 3?",
					points: 2147483647
				},
				{
					content: "Did you heck this game to get here in 5 shots?",
					points: -1
				},
				{
					content: "4 shots?",
					points: -10
				},
				{
					content: "3 shots?",
					points: -100
				},
				{
					content: "2 shots?",
					points: -1000
				},
				{
					content: "1 shot!?!?",
					points: -88888888
				},
				{
					content: "Even 0 shots?",
					points: -8888888888
				},
				{
					content: "Less than 0 shots? LIAR LIAR LIAR",
					points: -9999999999
				},
				{
					content: "Did you check the previous one?",
					points: 0
				},
				{
					content: "The previous one?",
					points: 0
				},
				{
					content: "Do you think you are going to get points for the 'Did you check the previous one' questions?",
					points: -999999999
				},
				{
					content: "Do you like points?",
					points: 2 ** 33 - 1
				},
				{
					content: "Seriously!?",
					points: -(2 ** 33)
				}
			];
			globalThis.questions = questions;
			for (var i = 0; i < questions.length; i++) {
				var label = document.createElement('label');
				var checkbox = document.createElement('input');
				checkbox.setAttribute('type', 'checkbox');
				checkbox.id = 'question-' + i;
				checkbox.addEventListener('change', function() {
					if (this.checked) {
					document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent) + questions[parseInt(this.getAttribute('questionNum'))].points; 
					} else {
						document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent) - questions[parseInt(this.getAttribute('questionNum'))].points; 
					}
				});
				checkbox.setAttribute('questionNum', i);
				label.appendChild(checkbox);
				var text = " " + questions[i].content + " (" + questions[i].points + " point(s))";
				var textLeaf = document.createElement('span');
				textLeaf.textContent = text;
				label.appendChild(textLeaf);
				document.querySelector('#questions').appendChild(label);
				var br = document.createElement('br');
				document.querySelector('#questions').appendChild(br);
			}
			break;
		case 'submitHWAssignment':
			globalThis.focused = false;
			write(`
<p>Please write a 200 word essay below:</p>
<p>(Disclaimer: This will not be saved once you pass this level. If you contributed substantial content, please be sure to save it somewhere else.)</p>
<p id="toolbar">
Please click below to edit this document.</p>
<button onclick="goto('submitEssay')">Submit</button>
<p>Oh, and it looks like someone started an essay for you. Modify it and turn it in!</p>
<button onclick="globalThis.focused = true; if (document.querySelector('div#editor').getAttribute('contenteditable'))  {document.querySelector('div[id=editor]').removeAttribute('contenteditable'); document.getElementById('toolbar').innerHTML = 'Please click below to edit this document.'; this.innerHTML = 'Edit'; } else {document.querySelector('div[id=editor]').setAttribute('contenteditable', 'true');  document.getElementById('toolbar').innerHTML = toolbarButtons; this.innerHTML = 'Stop editing'; document.getElementById('editor').focus(); }">Edit</button>
<div style="border: 1px solid; padding: 3px; outline: none !important; height: 50vh; overflow: scroll;" id="editor">
<h2 id="h1">Feces is Yummy</h2>
<div style="float: right; background-color: #cccccc;">
<center style="font-weight: 700;">Contents</center>
<ol>
<li><a href="#h1">Feces is Yummy</a>
<ol type="a"><li><a href="#h1h1">Effects of eating feces</li>
<li><a href="#h1h2">Controversies</a></li>
</ol></li>
<li><a href="#h0">Footnotes</a></li>
</ol>
</div>
<p>I like eating poop. Poop is the yummiest thing that could ever exist in the whole world. The following report will explain why.</p>
<p>First, poop is very abundant. It can be found in toilets, in bathrooms, on the ground, and anywhere in between. Even laboratories (OOOPS I meant lavatories) have poop in them.</p>
<p>Second, it is yummy. You can eat poop and have enjoyment! I once had a friend that was failing in class, and then ate poo and studied harder. He passed! It was because of the poo consumption and definitely NOT because of the studying.</p>
<h3 id="h1h1">Effects of eating feces</h3>
<p>Studies<sup><a href="#note1" id="notelink1">[1]</a></sup> show that feces is healthy. Even healthier than vegetables, that is. Eating poop can give people benefits that were not possible before, such as:</p>
<ul>
<li>Increased stomachaches<sup><a href="#note2" id="notelink2">[2]</a></li>
<li>Increased feelings to use the restroom<sup>[citation needed]</sup></li>
</ul>
<h3 id="h1h2">Controversies</h3>
<p>People THINK eating poo or drinking pee is bad, well, let's find out!</p>
<p>I would like to draw your attention to Exhibit A:</p>
<div class="nowhenedit">
<iframe width="559" height="419" src="https://www.youtube-nocookie.com/embed/fs-hxI_wLSI" style="border: 1px solid;" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
<p>And Exhibit B:</p>
<div class="nowhenedit">
<iframe width="745" height="419" src="https://www.youtube-nocookie.com/embed/zTtXr-VFKS4" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
<p>These two sources show that yes, it is totally healthy to eat poo and drink pee.<sup><a href="#note3" id="notelink3">[3]</a></sup></p>
<h2 id="h0">Footnotes</h2>
<ul style="font-size: 90%;">
<li><a href="#notelink1" id="note1">[1]</a>: I conducted the studies myself. BWAHAHAHA</li>
<li><a href="#notelink2" id="note2">[2]</a>: Self-published study. Published by <strong>ME ME ME</strong>. March 1, 1995.</li>
<li><a href="#notelink3" id="note3">[3]</a>: What? It's user generated content? Does that mean that it is not a <a href="https://en.wikipedia.org/wiki/WP:RS">reliable source?</a></li>
</ul>
</div><style>
.nowhenedit {
display: inline-block;
}
div[contenteditable=true] .nowhenedit iframe {
display: none;
}
div[contenteditable=true] .nowhenedit::before {
content: "[Embedded content]";
color: gray;
padding: 7px;
border: 1px solid;
}
div[contenteditable=true] .nowhenedit:hover::before {
background-color: blue;
color: white;
}
iframe {
max-width: 100%;
}
@keyframes flash { 0% { background-color: gold; color: black; } 100% { background-color: transparent; }} :target:not([contenteditable=true] :target) { animation: flash 5s linear; }</style>`);
			taitl('Submit Assignment');
			
			break;
		case 'serverChoiceSubmit':
			var server = document.getElementById('server').selectedIndex;
			console.log(server);
			switch (server) {
				case 0:
					write('<p onclick="goto(\'showServerStatus\')">BWAHAHA THAT IS NOT GOING TO WORK THIS TIME</p>');
					var rickroll1 = setTimeout(function() {
						goto(0);
					}, 2000);
					break;
				case 1:
					goto('evacuation1');
					break;
				case 2:
					write(`To visit alanhw, please <a href="https://alanhw.weeklyd3.repl.co">launch it.</a><p>Or, you can try this frame:</p><div style="background-color: cyan;">ALANHW embed</div><iframe src="https://alanhw.weeklyd3.repl.co" style="width: 100%; height: 50%; border: 1px solid;"></iframe><div><br />Or <button onclick="goto('serverChoice');">switch a server AGAIN</button>`);
					break;
				case 3:
					goto('showServerStatus');
					break;
			}
			break;
		case 'serverChoice':
			clearInterval(tipInterval);
			write(`
Choose a server.
<label>
Server:
<select id="server">
<option>Choose...</option>
<option>Harmlesswebsite: leoshi6/idkwutocalmself</option>
<option>alanhw</option>
</select></label>
<input type="submit" onclick="goto('serverChoiceSubmit')" />
<p><small>hint: add an extra option by HTML editing it.</small></p>
<button onclick="addExtraOption()">Too lazy?</button>
`);
			break;
		case 'harderLevels':
			globalThis.correctHistory = [];
			taitl(`Double work card`);
			write(`Hey, you wanted this.<br /> <fieldset><legend style="font-variant: small-caps;">Share on guestbook.weeklyd3.repl.co</legend>Enter your guestbook.weeklyd3.repl.co username and password to complain about how bad it is:
<form action="https://guestbook.weeklyd3.repl.co/login.php" method="post" target="_blank" onsubmit="setTimeout(function() { this.textContent = 'Done - opened URL to log in'; }, 1000);">
(<a href="https://guestbook.weeklyd3.repl.co/login.php">login help</a>)
<div>
<label>Username:
<input type="text" name="username" value="" />
</label>
</div>
<div>
<label>Password:
<input type="password" name="password" value="" />
</label>
</div>
<input type="submit" name="login" value="Log in" />
</form>
</fieldset>
<br />
Anyway, let's get started.
<p>Attempt number <span id="attempt">1</span></p>
<table id="answers">
<tr>
<th>
#
</th>
<th>Question</th>
<th>Your Answer</th>
<th>Status</th>
</tr>
</table>
<input type="button" onclick="goto('submitMeth')" value="Submit" />

<input type="button" id="continueButton" onclick="goto('quizPass')" style="display: none;" value="Continue >>>" />
<p>History:</p>
<ul id="correcthist">
<li>Attempt 1: in progress</li>
</ul>
`);
			var tableQuestions = [
				{
					content: "What is 1 + 1?",
					answer: "11"
				},
				{
					content: "2 + 3",
					answer: "5"
				},
				{
					content: "I have 9 buckets of candy. I eat 69. What do I have now?",
					answer: "rotten teeth"
				},
				{
					content: "Fill in the blank: <code>______ entrance Fart I 280 Barf",
					answer: "Feeway"
				},
				{
					content: "Fill in the blank: <code>Feeway ________ Fart I 280 Barf</code>",
					answer: "entrance"
				},
				{
					content: "Fill in the blank: <code>Feeway entrance ____ I 280 Barf</code>",
					answer: "fart"
				},
				{
					content: "Fill in the blank: <code>Feeway entrance Fart _ 280 Barf</code>",
					answer: "I"
				},
				{
					content: "Fill in the blank: <code>Feeway entrance Fart I ___ Barf</code>",
					answer: "280"
				},
				{
					content: "One more time: Fill in the blank: <code>Feeway entrance Fart I 280 ____</code>",
					answer: "barf"
				},
				{
					content: "What room does Algebra 1 p6 normally take place in?",
					answer: "245"
				},
				{
					content: "In which room did it take place on 3/21/2022?",
					answer: "302"
				}
			];
			globalThis.mathHW = tableQuestions;
			globalThis.attempts = 0;
			for (var i = 0; i < tableQuestions.length; i++) {
				var tr = document.createElement('tr');
				var questionNumber = document.createElement('td');
				questionNumber.textContent = (i + 1) + ".";
				tr.appendChild(questionNumber);
				var question = document.createElement('label');
				var leftColumn = document.createElement('td');
				question.setAttribute('for', "mathproblem" + i);
				question.innerHTML = tableQuestions[i].content;
				leftColumn.appendChild(question);
				tr.appendChild(leftColumn);
				var rightColumn = document.createElement('td');
				var ansInput = document.createElement('input');
				ansInput.setAttribute('style', 'border:1px solid black;');
				ansInput.type = 'text';
				ansInput.id = "mathproblem" + i;
				rightColumn.appendChild(ansInput);
				tr.appendChild(rightColumn);
				var status = document.createElement('td');
				status.setAttribute('id', 'mathstatus' + i);
				status.textContent = "Not graded yet";
				tr.appendChild(status);
				document.querySelector('#answers').appendChild(tr);
			}
			break;
		case 'submitMeth':
			globalThis.attempts++;
			document.getElementById('attempt').textContent = globalThis.attempts + 1;
			var tableQuestions = globalThis.mathHW;
			globalThis.correct = 0;
			
			for (var i = 0; i < tableQuestions.length; i++) {
				var input = document.getElementById('mathproblem' + i);
				var answer = globalThis.mathHW[i].answer;
				if (input.value.toLowerCase() !== answer.toLowerCase()) {
					input.setAttribute('style', 'border: 1px solid red;');
					if (input.value === '') {
						document.getElementById('mathstatus' + i).innerHTML = '<b style="color: red;">Blank</b>';
					} else {
					document.getElementById('mathstatus' + i).innerHTML = '<b style="color: red;">Incorrect</b>';
					}
				} else {
					console.log('correct');
					globalThis.correct = globalThis.correct + 1;
					console.log(globalThis.correct);
					input.setAttribute('style', 'border: 1px solid green');
					document.getElementById('mathstatus' + i).innerHTML = '<b style="color: green;">Correct!</b>';
				}
			}
			console.log('-----');
			console.log(globalThis.correct);
				console.log(globalThis.correctHistory);

			if (globalThis.correct === tableQuestions.length) {
				document.getElementById('continueButton').style.display = 'block';
			}
				globalThis.correctHistory.push(globalThis.correct);
					document.querySelector('#correcthist').innerHTML = '';
				for (var i = 0; i < globalThis.correctHistory.length; i++) {
					var item = document.createElement('li');
					item.textContent = "Attempt " + (i + 1) + ": " + globalThis.correctHistory[i] + "/" + tableQuestions.length + " correct";
					document.querySelector('#correcthist').appendChild(item);
				}
				var inProgress = document.createElement('li');
				inProgress.textContent = "Attempt " + (globalThis.correctHistory.length + 1) + ": In progress";
				document.querySelector('#correcthist').appendChild(inProgress);
			
			break;

		case 'quizPass':
			taitl(`Quiz results`);
			write(`
<h1>You got a...</h1>
<center><button onclick="this.parentNode.setAttribute('style', 'font-size: 40px;'); this.parentNode.innerHTML = '11 out of 11'; document.getElementById('morecontent').style.display = 'block'; taitl('You won level 2 as well!')">Click to find out!</button></center>
<div id="morecontent" style="display: none;">
<center style="font-size: 20px;">
Wow, you're really good at this! That's the end of level 2, and have a good day!
</center>
</div>
`);
			break;
  }
					if (document.getElementById('output') && !globalThis.noOpen) {document.getElementById('output').style.display = 'block';}

			globalThis.noOpen = false;
}
function submitRansomMessage() {
	console.log(document.getElementById('htmleditans').innerHTML);
	if (document.getElementById('htmleditans').textContent !== "BWAHAHAHAHA I'M PASSING THIS LEVEL") goto(0);
	else goto('ransomWin');
}
function ransomMessage(text, contenteditable) {
	var stringbef = `
<p>
Error <b>503</b>: Can't access resource <code>/script.js</code>: Connection intercepted.</p>	
<p>[Server debug] The message that the intercepter sent should be shown on screen.</p>
</div>
<div style="z-index: 3999; background-color: white;position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); color: black;border: 1px solid; -webkit-box-shadow: 5px 5px 15px 5px #cccccc;  box-shadow: 5px 5px 15px 5px #cccccc;">
<div style="background-color: red; color: white; ">
<h2>Ransomware Message (from harmlesswebsite) (<button disabled="disabled">&times;</button>)</h2>
</div>
`;
	stringbef += "<p id=\"htmleditans\"";
	if (contenteditable) stringbef += ' contenteditable="true"';
	stringbef += ">";
	var stringafter = `</p>
<p><b>Helpful pages:</b>
<button onclick="goto('ransom')">Home</button>
<button onclick="goto('decryptionDirections')">Decryption Directions</button>
<button onclick="submitRansomMessage()">Begin Decryption</button>
`;
	return stringbef + text + stringafter;
}
// Do not use onclick. Instead, use an event listener
// like the one below.
function submit() {
    document.close();
    document.getElementById("result").innerHTML = document.getElementById("html").value;
}
function rgbToHex(r, g, b) {
    r = Number(r).toString(16);
    g = Number(g).toString(16);
    b = Number(b).toString(16);
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}
function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
    }
});
function submitrick() {
    if (document.getElementById("rickinput").textContent.toLowerCase() == "rick astley") {
        document.getElementById("test").innerHTML = `<span onclick='test3()'>2</span>. What is 1+1? <br><ol type='a'> <li onclick='goto(0)'>11</li><li onclick='goto(0)'>window</li><li onclick='goto(0)'>3</li><li onclick='goto(0)'>+</li>`;
    } else {
        goto(0);
    }
}
function test3() {
    document.getElementById("test").innerHTML = '3. Do you want to <span style="color: white;">not</span> continue? <br><ol type="a"><li onclick="goto(0)">Yes</li><li onclick="goto(0)">Yes</li><li onclick="goto(6)">No</li></ol>';
}
function kinghacker() {
    document.getElementById(
        "baudy"
    ).innerHTML = `<div style="background-color: gold; padding: 7px;"><p>You have <b>1</b> new message(s). First, new message: Typewriter fax from Hacker: <a href="HeckerMail.pdf" target="_blank">Click to view.</a></p></div><button onclick="goto(7)">Continue</button><iframe style="display:none;" id="embeddoc" src="HeckerMail.pdf"></iframe>`;
}
function chooseanswer() {
    switch (document.getElementById("choice").value) {
        case "prison":
            write("I expect you to stay here for 30 years. I hope you are honest despite being a hacker since I won't check.");
            break;
        case "fine":
            write("Find a way to leave some E-money here, okay? I'll come and collect it in a while.");
            break;
        case "rickroll":
            goto("rick");
            break;
      
        default:
            goto(8);
            break;
    }
}
function choose(params) {
  document.getElementById('word').innerHTML += params;
  if (document.getElementById('word').innerHTML  == 'illuminati'){
    goto(10);
  }
}
globalThis.clickTestStarted = false;
		  globalThis.clicksNow = 0;
		  globalThis.seconds = 1;
		  globalThis.records = [];
		  function clickTest() {
			  if (globalThis.clickTestStarted === false) {
			  	globalThis.clickTestStarted = true;
				globalThis.startTime = new Date().getTime();
			  setTimeout(function() {
				  document.getElementById('clicks').innerHTML += "<br /><b>Test terminated. Clicks per second: " + (Math.round(globalThis.clicksNow * 100 / globalThis.seconds) / 100) + "</b>";
				  globalThis.records.push(globalThis.clicksNow / globalThis.seconds);
				  globalThis.clickTestStarted = false;
          if (globalThis.clicksNow >= 10){
            document.querySelector('#goon').disabled = '';
          }
		  globalThis.clicksNow = 0;
				  document.querySelector('[onclick="clickTest()"]').innerHTML = 'Click me in 2 seconds';
				  document.querySelector('[onclick="clickTest()"]').disabled = 'disabled';
				  setTimeout(function() {
					  document.querySelector('[onclick="clickTest()"]').disabled = '';
					  document.querySelector('[onclick="clickTest()"]').innerHTML = 'Click me to start';
				  }, 2000);
			  }, globalThis.seconds * 1000);
			  }
        globalThis.clicksNow += 1;
			
        document.querySelector('[onclick="clickTest()"]').innerHTML = "Quick! Raise your click count to " + (globalThis.clicksNow + 1) + "!"; 
			  document.getElementById('clicks').innerHTML = 'Clicks: '+globalThis.clicksNow;
		  }
function submitAssociation() {
  var things = {'poop':'yummy', 'HTML':'editing','Hacker':"report", 'Rick':'roll', 'Feeway entrance':'fart'}
  var lists = ['poop','HTML','Hacker','Rick', 'Feeway entrance',]
  var correct = document.getElementById('word')
  var answer = document.getElementById('answer')
  if (things[correct.innerHTML] == answer.value.toLowerCase()){
    if (answer.value.toLowerCase() == 'fart'){
      goto(12);
    }
    correct.innerHTML = lists[lists.indexOf(correct.innerHTML)+1]
    answer.value = ''
  }
  else{
    goto(0)
  }
}
function clickthebutton() {
  var l = parseInt(document.getElementById('thebutton').style.width)
  if (l == 2){
    goto(13)
  }
  else{
    document.getElementById('thebutton').style.width = (l-2)+'px';
    document.getElementById('thebutton').style.height = (l-2)+'px';
  }
}
function checkforcode() {
  if (document.getElementById('enterthecode').value == code){
    goto('win')
  }
  else{
    goto(0)
  }
}
function submitCAPTCHA() {
	if (document.querySelector('input').value.toLowerCase() !== 'illuminati') {
		goto(0);
	} else {
		goto('ransomware');
	}
}
function addExtraOption() {
	document.getElementById('server').innerHTML += '<option>get rickrolled</option>';
	if (!document.getElementById('getrickrolled')) {
	return alert('All right, you have a fourth option - get rickrolled.');
	} else {
	document.getElementById('getrickrolled').style.display = 'block';
	}
}

var toolbarButtons = `<button onclick="document.execCommand('bold')">Bold</button>
<button onclick="document.execCommand('italic')">Italic</button>`;
function quizScore(score) {
	document.querySelector('#score').textContent = parseInt(document.querySelector('#score').textContent) + score;
}