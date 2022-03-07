var code = '';
for (var i = 0; i < 4; i++) {
	code += Math.floor(Math.random() * 10);
}
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

var id = uuidv4();
function goto(num) {
    switch (num) {
        // Any scripts inserted with innerHTML will
        // not run. Moving the injected script into
        // the HTML file.
        case 0:
            document.getElementById("stuff").innerHTML = `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Oh no I hate rickrolls</title>
    ${'<link href="style.css" rel="stylesheet" type="text/css" /><style>iframe::before{display: block;content:"\00a0";width:100%;height:100%;position:relative;top:0px;left:0px;'}
						 z-index:9999;background-color:red;}</style>
  </head>
  <body>
    <center>
	  <div style="width:100vw;height:100vh;position:fixed;top:0;left:0; font-size: 50px">ARRRG I HATE THIS</div><br />
      <br>
      <br>
    <iframe width="720" height="540" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </center>
    <script>
	  document.body.onkeydown = function(e) {
		  e.preventDefault();
	  } 
	  document.body.onkeypress = function(e) {
		  e.preventDefault();
	  } 
	  document.body.onkeyup = function(e) {
		  e.preventDefault();
	  } 
	   window.onbeforeunload = function() {
		   return "Do you want to finish pooping?";
	   }
</script>
  </body>`;
            break;
        case -1:
            // document.write will trash the page.
            document.getElementById("baudy").innerHTML =
                '<span onclick="goto(1)">Exactly what you were looking for.</span> <br><br><br><br><br><br><br><br><br><br>AHH how do I go back<br><br><br><br><br><br><br><br><br><br><span style="font-size: 8px;">Pro Tip: stuff don\'t have to be buttons or links to be clickable. This piece of advice goes beyond just this very blank page.</span>';
            break;
        case "loadme":
            document.getElementById("load").innerHTML = `<br>Ahh smart! This might take a while to load, though. <br /> <img src='loading.gif'/> <br> <button onclick="goto('impatience')" tabindex="0">Skip the wait. Be impatient.</button>`;
            break;
        case "impatience":
            document.getElementById("load").innerHTML = "<br>See, very harmless! It even taught you a lesson!";
            document.getElementById("creator").innerHTML = "You were too impatient to see the creator. Next time be more patient.";``
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            break;
        case -2:
            document.getElementById("baudy").innerHTML = '<button onclick="goto(1)">home</button><br><br>';
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
            document.getElementById("colorbox").style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
            document.getElementById("rgb").innerHTML = "rgb of color: " + color1 + ", " + color2 + ", " + color3;
            document.getElementById("rgb").innerHTML += "<br>hex of color: " + rgbToHex(color1, color2, color3);
            break;
        case 1:
            document.getElementById("stuff").innerHTML = `
      <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>A very harmless website</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body id='baudy'>
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
      <p>Tired of so many unexpected rickrolls? <a href='pro.html'>Upgrade your membership!</a></p>
    <a href='wesitecrasher.html'>don't click this or your website will crash! (and this website won't be safe anymore so dont click it and ruin its reputation)</a>
    <p>Don't have a favorite color? Find one!</p>
    <div id='colorbox' style='background-color: rgb(255,255,255); width: 200px; height: 150px; border: 2px solid black;'></div><br>
    <button onclick='goto("randomizeColor")'>Randomize!</button>
    <p id='rgb'>rgb of color: 255, 255, 255<br>hex of color: #ffffff</p>
    <a href='endlessEnemies.html'>minigame if you're bored</a><br>
    <a href='stoneAgeSurvival.html'>another minigame if you're bored of the previous one</a>
    <p>You can do cool stuff with html editing!</p><br> 
    <img src='be4edit.png'><br>
    can turn into <br>
    <img src='afteredit.png'><br>
    <button onclick='goto(2)'>More Information</button>
    <script src='script.js'></script>
  </body>`;
            break;
        case "code":
            document.getElementById("baudy").innerHTML =
                '</p><br><center><h1><button onclick="goto(1)">home</button><br>AWW COME ON! ITS A BLANK PAGE WITH <span style = "text-decoration: italic;">ABSOLUTELY NOTHING</span> ON IT!</h1><p>But please try looking below</p></center><br><br><br><br><br><br><br><br><br><p style="font-size: 1px;">Save this code. It will come in handy later: ' +
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
                    document.getElementById("baudy").innerHTML += '<img src="rickroll.gif">';
                }
            }
            break;
        case "havefun":
            document.getElementById("baudy").innerHTML = 'If you want to have fun, try the these two minigames: <a href="endlessEnemies.html">first minigame</a> and <a href="stoneAgeSurvival.html">second minigame</a>.';
            break;
        case "hacksite":
            document.getElementById("baudy").innerHTML =
                "<button onclick=\"window.open('https://alanhw.weeklyd3.repl.co/terminal.html', 'alanhw', 'height=500,width=800');\">Open in new window</button><iframe src=\"https://alanhw.weeklyd3.repl.co/terminal.html\" style=\"width: 100%; height: 80%; border: none;\"></iframe>";
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
            document.write("<h1>AWW COME ON YOU GOT DEAD ENDED</h1><p>But hey, at least you didnt get rickrolled.</p>");
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
    <img src='rickastley.png' style='width: 512px; height: 288px;'> <br>
    <span id='rickinput' style="white-space:pre-wrap;"></span><img src="Cursor.gif" alt="" /><br>
<span id="keyboard">
      <button onclick='document.getElementById("rickinput").innerHTML += "A"'>A</button><button onclick='document.getElementById("rickinput").innerHTML += "B"'>B</button><button onclick='document.getElementById("rickinput").innerHTML += "C"'>C</button><button onclick='document.getElementById("rickinput").innerHTML += "D"'>D</button><button onclick='document.getElementById("rickinput").innerHTML += "E"'>E</button><button onclick='document.getElementById("rickinput").innerHTML += "F"'>F</button><button onclick='document.getElementById("rickinput").innerHTML += "G"'>G</button><button onclick='document.getElementById("rickinput").innerHTML += "H"'>H</button><button onclick='document.getElementById("rickinput").innerHTML += "I"'>I</button><button onclick='document.getElementById("rickinput").innerHTML += "J"'>J</button><button onclick='document.getElementById("rickinput").innerHTML += "K"'>K</button><button onclick='document.getElementById("rickinput").innerHTML += "L"'>L</button><button onclick='document.getElementById("rickinput").innerHTML += "M"'>M</button><br><button onclick='document.getElementById("rickinput").innerHTML += "N"'>N</button><button onclick='document.getElementById("rickinput").innerHTML += "O"'>O</button><button onclick='document.getElementById("rickinput").innerHTML += "P"'>P</button><button onclick='document.getElementById("rickinput").innerHTML += "Q"'>Q</button><button onclick='document.getElementById("rickinput").innerHTML += "R"'>R</button><button onclick='document.getElementById("rickinput").innerHTML += "S"'>S</button><button onclick='document.getElementById("rickinput").innerHTML += "T"'>T</button><button onclick='document.getElementById("rickinput").innerHTML += "U"'>U</button><button onclick='document.getElementById("rickinput").innerHTML += "V"'>V</button><button onclick='document.getElementById("rickinput").innerHTML += "W"'>W</button><button onclick='document.getElementById("rickinput").innerHTML += "X"'>X</button><button onclick='document.getElementById("rickinput").innerHTML += "Y"'>Y</button><button onclick='document.getElementById("rickinput").innerHTML += "Z"'>Z</button><br><button onclick='document.getElementById("rickinput").innerHTML += " "'>Space</button></button><button onclick='document.getElementById("rickinput").innerHTML = document.getElementById("rickinput").innerHTML.slice(0, -1)'>Delete</button></span><button onclick='submitrick()'>Submit</button><br /><button onclick="document.getElementById('fill').style.display = 'block'; document.getElementById('filltext').style.display = 'block';this.style.display = 'none';document.getElementById('keyboard').style.display = 'none';document.getElementById('filltext').focus();document.getElementById('filltext').value = document.getElementById('rickinput').textContent;" id="fillbutton">Enable keyboard input</button>

<form action="javascript:;" style="display: none;" id="fill">Please type to fill in the answer.
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
      document.write("I expect you to stay here for 30 years. I hope you are honest despite being a hacker since I won't check.");
    } 
    if (x === 2){
      document.write("Find a way to leave some E-money here, okay? I'll come and collect it in a while.");
    }
      break;
      case 9:
        document.getElementById('baudy').innerHTML = `
    <h3>Hmm, so how should you be punished by "Choose..."?</h3>
    <p>I have no idea! but since you so stubbornly insisted that you should be punished this way, let me consult my smartest friend: Google!</p>
    <img src='googlesearch.png'>
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
	<p id="results"></p></center>
	  <script>
		  
    </script>`
        break;
		case 11:
			document.getElementById('baudy').innerHTML = `<p>I assume you have noticed that your tests are gradually getting harder. That is very true. And I'm very sure you don't like it. Just deal with it, k? The escape course is almost over. I just need to make sure that you aren't cheating in anything and have looked through all the previous information. Anyway, lets play some word association! (but if you give the answer I'm not looking for, gg.) <br> -Hacker</p><br></br>
    <button onclick='document.getElementById("wordassociation").style.display = "block"; document.getElementById("start").style.display = "none"' id='start'>Start!</button>
    <div id = 'wordassociation' style='display: none;'>
      <h2 id='word'>poop</h2>
      <input type='text' id='answer'> <button onclick = 'submitAssociation()' autocomplete='off'>Submit</button>
    </div>`
    break;
      case 12:
        document.write('you win')
  }
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
            document.write("I expect you to stay here for 30 years. I hope you are honest despite being a hacker since I won't check.");
            break;
        case "fine":
            document.write("Find a way to leave some E-money here, okay? I'll come and collect it in a while.");
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
  var things = {'poop':'yummy', 'HTML':'editing', 'Feeway entrance':'fart'}
  var lists = ['poop','HTML','Feeway entrance']
  var correct = document.getElementById('word')
  var answer = document.getElementById('answer')
  if (things[correct.innerHTML] == answer.value.toLowerCase()){
    if (answer.value.toLowerCase() == 'fart'){
      goto(12)
    }
    correct.innerHTML = lists[lists.indexOf(correct.innerHTML)+1]
    answer.value = ''
  }
  else{
    goto(0)
  }
}