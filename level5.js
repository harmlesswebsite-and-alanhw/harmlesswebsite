function goto5(index, save = true){
     if (save)   saveProgress(5, index);

  switch (index) {
    case "home":
      write(`What!? How did you make it this far!?<br />ARE YOU SURE YOU WANT TO <span onclick="goto(0)">CONTINUE</span>?

<br /><br />
<button onclick="goto5(1)">NO</button>
<button onclick="goto5(1)">NO</button>
<span style="font-size: 5px;"><a href="https://alanhw.weeklyd3.repl.co/schoology.html">Or no</a></span>`);
          break;
      case 1:
          write(`Hey look! This is a<pre style="color: red; font-size: 16px; background-color: black;">Parse error - argument 1 passed to render() must be string, 
string given on /home/not/a/rickroll.php
on <u onclick="goto5(2)">line 888</u></pre>`);
          break;
      case 2:
          lib.importStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/vs.min.css');
          write(`<style>.line { margin-right: 6px; background-color: #cccccc; } .error { color: red; background-color: #dddddd; }</style>
<pre><code class="language-php"><code class="language-php"><span class="line error">888  </span><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">render</span>(<span class="hljs-params"><b class="hljs-keyword" title="Error - argument 1 should be string, string passed"><i>string</i></b> <span class="hljs-variable">$text</span></span>) </span>{
<span class="line">889  </span>    <span class="hljs-variable">$pdo</span> = <span class="hljs-keyword">new</span> PDO;
<span class="line">890  </span>    <span class="hljs-variable">$stmt</span> = <span class="hljs-variable">$pdo</span>-&gt;<span class="hljs-title function_ invoke__">prepare</span>(<span class="hljs-string">'SELECT * from posts where name = :name'</span>);
<span class="line">891  </span>    <span class="hljs-variable">$stmt</span>-&gt;<span class="hljs-title function_ invoke__">execute</span>(<span class="hljs-keyword">array</span>(<span class="hljs-string">'name'</span> =&gt; <span class="hljs-variable">$text</span>));
</code></pre>
<p>Bored yet? <button onclick="goto5(3)">Continue</button></p>
`);
          break;
      case 3:
          write(`
<div style="display: table; font-size: 40px;">
<div style="display: table-row;">
    <div style="display: table-cell; padding: 7px;">YOU</div>
    <div style="padding: 7px;display:table-cell;">MATTER</div>
</div>
<div style="display: table-row;">
    <div style="display: table-cell; padding: 7px;">DON'T</div>
    <div style="display:table-cell; padding: 7px;">WORRY</div>
</div>
</div>
<p>Read this from top to bottom.</p>
<fieldset>
<legend>What does it say?</legend>
<ul>
<li><label><input required="required" type="radio" id="one" name="a" /> You matter, don't worry</label></li>
<li><label><input required="required" type="radio" id="two" name="a" /> You don't matter, worry.</label></li>
</ul>
</fieldset>
<button onclick="goto5(4)">OK</button>
`);
          break;
      case 4:
          if (document.getElementById('one').checked) {
              return goto(0);
          }
          goto5(5);
          break;
      case 5:
          globalThis.left = 10;
          write(`
<center style="font-size: 40px;">
    Would you like to be rick rolled?<br />
<div id="o"><button onclick="goto(0)">YES!</button> <button onclick="goto5(6)">NO!</button></div>
<div id="t"><button onclick="goto5(6)">NO!</button> <button onclick="goto(0)">YES!</button></div>
</center>
`);
          goto5(6);
          break;
      case 6:
          globalThis.left--;
          var whichNum = Math.random();
          document.getElementById('t').hidden = 'hidden';
          document.getElementById('o').hidden = 'hidden';
          if (whichNum < 0.5) {
              document.getElementById('t').hidden = '';
          } else {
              document.getElementById('o').hidden = '';
          }
          if (globalThis.left === 0) {
              goto5(7);
          }
          break;
    case 7:
      write(`Remember that memory test in level 4? That was super easy. Try doing this!<br />
(Note: The squares disappear after some time as an extra test.)
<br />
<div style="font-size: 40px;">>>> <b id="string"></b><img src="https://harmlesswebsite.leoshi6.repl.co/Cursor.gif" height="40" alt="" /></div>
<br />
<div id="order">Your 15-keypress order is:<br /><span id="order"></span></div>
<br /> <div id="butts" class="appearAfter2"><button class="test" id="1" onclick="this.classList.add('disappearAfter2'); submitButton('0')"></button> <button class="test" id="2" onclick="this.classList.add('disappearAfter2'); submitButton('1')"></button> <button class="test" id="3" onclick="this.classList.add('disappearAfter2'); submitButton('2')"></button> <button class="test" id="4" onclick="this.classList.add('disappearAfter2'); submitButton('3')"></button> <button class="test" id="4" onclick="this.classList.add('disappearAfter2'); submitButton('3')"></button>`);
      var buttonOrder = ['1','2','3','4','5']
      buttonOrder = lib.shuffle(buttonOrder);
      var coll = document.querySelectorAll('.test')
      for (var i = 0; i < coll.length; i++){
        coll[i].setAttribute('id',buttonOrder[i])
        coll[i].setAttribute('onclick',"this.classList.add('disappearAfter2'); submitButton('"+buttonOrder[i]+"')")
      }
      var order = ['1','2','3','4','5','1','2','3','4','5','1','2','3','4','5'];
      order = lib.shuffle(order);
          globalThis.targetString = order.join("");
          document.getElementById('order').innerHTML = "<kbd>" + order.join("</kbd><kbd>") + "</kbd>";
          globalThis.buttonString = '';
      //im trying to make it so that it shows the buttons one by one in the order shown by the array order in line 85
          // OK, got it
      for (var i = 0; i < coll.length; i++){
        coll[i].style.display = 'inline';
          coll[i].textContent = buttonOrder[i];
      }
    break;
      case 8:
          write(`Remember the quiz? That was EZ!<br />Solve this to prove you are a human:<br />1ббч + 1ббч = ???<br /><label>Answer: <input id="3328" /></label><br /><input onclick="goto5(9)" value="Soobmit" type="button" />`);
          break;
      case 9:
          if (document.getElementById('3328').value.toLowerCase() !== 'зз28') goto(0);
          else goto5(10);
          break;
      case 10:
          write(`<h1>Overdue <b style='font-size: 50px;'>ass</b>ignments:</h1>Critique: <br /><cite><ul><li>Almost, Canada in Maine</li><li>A Midwinter Day's Reality</li><li>1Зth Day</li></ul></cite><button onclick="goto5(11)">BOOOORING</button>`);
          break;
      case 11:
          write(`<label>Drag this slider to the right to continue:<br />
<input type="range" min="0" max="100" value="50" onchange="goto5(12);" style="width: 100%;" />
</label>
<p id="slidemore"></p>`);
          break;
      case 12:
          var value = parseInt(document.querySelector('[type=range]').value);
          var i;
          if (value < 50) i = -5;
          else i = 5;

          var interv = setInterval(function() {
              if (!document.querySelector('[type=range]')) return;
              if (document.querySelector('[type=range]').value == "50") return;
                  document.querySelector('[type=range]').value = toString(parseInt(document.querySelector('[type=range]').value) + i);
          }, 2000);
          if (value > 5 && value < 50) { document.getElementById('slidemore').textContent = 'Maybe slide it a bit more...'; return; }
          document.getElementById('slidemore').textContent = '';
          if (value <= 5) {
            clearInterval(interv)
              goto5(13);
          } else {
            clearInterval(interv)
              goto(0);
          }
          break;
      case 13:
      write(`ERROR. Hecker has hacked this site. If you move your mouse on a landmine spot, you will die by explosion. This website is now very dangerous and volatile.<p>Note: The check mark lets you move on. Hovering over the X marks will make you lose.</p> <div id="mine"></div>`);
      //make a bunch of areas where if you hover over it, it goes to 14
          var ansRow = randomIntFromInterval(0, 4);
          var ansCol = randomIntFromInterval(0, 4);
          globalThis.ansRow = ansRow;
          globalThis.ansCol = ansCol;
          for (var i = 0; i < 5; i++) {
              var di = document.createElement('div');
              for (var j = 0; j < 5; j++) { 
                  var butt = document.createElement('button');
                  butt.style.margin = '5px';
                  butt.textContent = '?';   
                  butt.setAttribute('data-row', i);
                  butt.setAttribute('data-col', j);
                  if (butt.getAttribute('data-row') === ("" + globalThis.ansRow) && butt.getAttribute('data-col') === ("" + globalThis.ansCol)) {
                      butt.textContent = '✓';
                  } else {
                      butt.textContent = '×';
                  }
                  butt.addEventListener('mouseover', function() {
                      console.log(this.getAttribute('data-row'));
                      if (this.getAttribute('data-row') === ("" + globalThis.ansRow) && this.getAttribute('data-col') === ("" + globalThis.ansCol)) {
                          goto5(15);
                      } else {
                          goto5(14);
                      }
                  });
                  di.appendChild(butt);
              }
              document.getElementById('mine').appendChild(di);
          }
          break;
    case 14:
      write('<center><img src="https://harmlesswebsite.leoshi6.repl.co/nuke.gif" style="height: 100vh;" /></center>')
      setTimeout(function(){goto(0)},2250);
      break;
      case 15:
          write(`UNRECOVERABLE DATABASE ERROR. System will explode in a short while.
<pre>00000000: 8950 4e47 0d0a 1a0a 0000 000d 4948 4452  .PNG........IHDR
00000010: 0000 067b 0000 01ec 0802 0000 0095 048f  ...{............
00000020: 2400 0000 0467 414d 4100 00b1 8f0b fc61  $....gAMA......a
00000030: 0500 0000 2063 4852 4d00 007a 2600 0080  .... cHRM..z&...
00000040: 8400 00fa 0000 0080 e800 0075 3000 00ea  ...........u0...
00000050: 6000 003a 9800 0017 709c ba51 3c00 0000  \`..:....p..Q<...
00000060: 0662 4b47 4400 ff00 ff00 ffa0 bda7 9300  .bKGD...........
00000070: 0000 0970 4859 7300 0016 2400 0016 2401  ...pHYs...$...$.
00000080: 9b15 c614 0000 8000 4944 4154 78da ecfd  ........IDATx...
00000090: db9a e348 9224 0caa a819 40d2 dd23 220f  ...H.$....@..#".
000000a0: 55d5 ddd3 bdf3 fdef 7fbb b7fb 0afb 04f3  U...............
000000b0: cf3f dddb dd75 c88c 888c f013 49c0 4c65  .?...u......I.Le
000000c0: 2f0c 0001 1224 c193 3bdd 03a8 aa2c 269d  /....$..;....,&.
000000d0: 040d 7650 5315 1355 c1ff fbff f3ff 9521  ..vPS..U.......!</pre><p>Stack trace:</p><ul id="stacktrace"></ul>`);
          for (var i = 0; i < randomIntFromInterval(5, 15); i++) {
              var item = document.createElement('li');
              item.textContent = '@file script' + (i * randomIntFromInterval(1, 4)) + ".js, line " + randomIntFromInterval(666, 888);
              document.getElementById('stacktrace').appendChild(item);
          }
          setTimeout(function() {
              goto5(16);
          }, 5000);
          break;
      case 16:
          write(`<img src="https://harmlesswebsite.leoshi6.repl.co/nuke.gif" alt="Nuked!" />`);
          setTimeout(function() {
              goto5(17);
          }, 2000);
          break;
      case 17:
          write(`<h1>Error 888</h1>We're sorry. The system has shut down and is currently unable to process your request.<p>The reason was:</p><span style="font-size: 500px;">BIG TEXT</span> IVE HACKED THE SITE`);
          setTimeout(function() { goto5(18); }, 2000);
          break;
      case 18:
          globalThis.moveOn = setTimeout(function() {if (globalThis.stopInterval) return; goto5(19); }, 400000);
          globalThis.increase = setInterval(function() {
              if (!document.getElementById('repairText')) return;
              if (globalThis.stopInterval) return;
              globalThis.repairProg++;
              if (globalThis.repairProg == 99 && !globalThis.firstTimeReset) {
                  globalThis.firstTimeReset = true;
                  globalThis.repairProg = 0;
              }
              document.getElementById('repairProg').textContent = globalThis.repairProg + "%";
              document.getElementById('repair').value = globalThis.repairProg;
              if (globalThis.repairProg === 100) {
                  goto5(19);
              }
          }, 4000);
          globalThis.firstTimeReset = false;
          globalThis.repairProg = 0;
          write(`<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; text-align: center; background-color: black; color: white;"><span id="repairText" style="font-size: 40px;">Repairing OS...</span><br />
<span id="repairProg" style="font-size: 30px;">0%</span>
<br />
<progress style="width: 99%;" min="0" max="100" value="0" id="repair" class="new"></progress><br />
<button style="background-color: skyblue; color: black; padding: 7px;" onclick="document.getElementById('repair').removeAttribute('value'); document.getElementById('repairText').textContent = 'BWAHAHAHAHA NOW IT WILL NEVER COMPLETE'; globalThis.repairProg = 0; document.getElementById('repairProg').innerHTML = '<i>e<sup>πi</sup></i>%'; clearInterval(globalThis.moveOn); clearInterval(globalThis.increase); globalThis.stopInterval = true;">Speed up the dum loading thing</button><br>
</div>`);
          break;
    case 19:
      write(`<p>Click somewhere.</p>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAOECAIAAAB2LGhsAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TiyIVBQuKOGSoThZERRy1CkWoEGqFVh1MLv2CJg1Jiouj4Fpw8GOx6uDirKuDqyAIfoA4OjkpukiJ/0sKLWI8OO7Hu3uPu3eAUC8zzeoYBzTdNlOJuJjJroqdrwghiD4AAzKzjDlJSsJ3fN0jwNe7GM/yP/fn6FFzFgMCIvEsM0ybeIN4etM2OO8TR1hRVonPicdMuiDxI9cVj984F1wWeGbETKfmiSPEYqGNlTZmRVMjniKOqppO+ULGY5XzFmetXGXNe/IXhnP6yjLXaQ4jgUUsQYIIBVWUUIaNGK06KRZStB/38Q+5folcCrlKYORYQAUaZNcP/ge/u7XykxNeUjgOhF4c52ME6NwFGjXH+T52nMYJEHwGrvSWv1IHZj5Jr7W06BHQuw1cXLc0ZQ+43AEGnwzZlF0pSFPI54H3M/qmLNB/C3Sveb0193H6AKSpq+QNcHAIjBYoe93n3V3tvf17ptnfD+SLcm4ilZXUAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5gUEDysNSNaM8QAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAA4sSURBVHja7dYxAQAwCMCwMZfYwwy2kAFHIqFXI7seAABs+BIAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBADCjEgAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAMKMSAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQAwoxIAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAABgRgEAMKMAAGBGAQAwowAAYEYBADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAADCjAACYUQAAMKMAAJhRAAAwowAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAJhRAADMKAAAmFEAAMwoAACYUQAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAzCgAAGYUAADMKAAAZhQAAMwoAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgAAZhQAADMKAABmFAAAMwoAAGYUAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAAAzCgCAGQUAADMKAIAZBQAAMwoAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAIAZBQDAjAIAgBkFAMCMAgCAGQUAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAGBGAQDAjAIAYEYBAMCMAgBgRgEAwIwCAHDdAIwECMqEIllLAAAAAElFTkSuQmCC" usemap="#image-map" alt="" />

<map name="image-map">
    <area alt="" title="" href="#win" coords="255,673,209,607,160,509,262,448,375,437,387,554,396,647" shape="poly">
    <area alt="" title="" href="#win" coords="390,713,172,687,184,622,452,599,554,515,499,425" shape="poly">
    <area alt="" title="" href="#win" coords="547,632,662,519,782,432,802,523,760,686,703,704,606,735,514,716" shape="poly">
</map>
<div id="win"><button onclick="goto5(20)">Continue</button></div>
`);
      break;
      case 20:
          write(`Survive for З minutes: <br /><iframe src="https://tag.weeklyd3.repl.co" style="resize: both; width: 300px; height: 500px; border: none;"></iframe>`);
          window.onmessage = function(ev) {
              if (ev.data === 'out') goto(0);
              if (ev.data === 'nameerror') goto(0);
              if (ev.data === '3min') goto5(21);
          }
          break;
    case 21:
      write(`Drag your mouse over to clean the following image. One of them blows you up. Try not to die!:
<div id="d005tan"></div>
`);
          globalThis.cleaned = 0;
          var loseRow = randomIntFromInterval(0, 22);
          var loseCol = randomIntFromInterval(0, 22);
          for (var i = 0; i < 22; i++) {
              var row = document.createElement('div');
              for (var j = 0; j < 22; j++) {
                  var cell = document.createElement('button');
                  cell.style.backgroundColor = 'red';
                  cell.style.color = 'white';
                  cell.textContent = '□';
                  if (loseRow === i && loseCol === j) {cell.textContent = 'X'; cell.setAttribute('lose', 'asdfasdf'); cell.style.backgroundColor = 'blue';}
                  cell.setAttribute('row', i);
                  cell.setAttribute('col', j);
                  cell.addEventListener('mouseover', function() {
                      if (this.getAttribute('lose')) return goto5(14);
                      if (this.style.color === 'black') return;
                      this.textContent = '☑';
                      this.style.color = 'black';
                      this.style.backgroundColor = 'lime';
                      globalThis.cleaned++;
                      if (globalThis.cleaned === 483) goto5(22);
                  });
                  row.appendChild(cell);
              }
              document.getElementById('d005tan').appendChild(row);
          }
          break;
      case 22:
          taitl('Choose a difficulty');
          write(`
<center>I'll let you choose the difficulty of the next level.<br />
<button onclick="globalThis.d = -1; goto5(23); setTimeout(function() { goto(0); }, 3000);">IMMEDIATE PASS</button>
<button onclick="globalThis.d = 0.1; goto5(23);">EASY</button>
<button onclick="globalThis.d = 0.3; goto5(23);">MEDIUM</button>
<button onclick="globalThis.d = 0.5; goto5(23);">HARD</button>
<button onclick="globalThis.d = 0.9; goto5(23);">ASIAN</button>
<button onclick="globalThis.d = 2; goto5(23);">CHINESE</button>
</center>
`)
          break;
      case 23:
          taitl('Starting the play');
          write(`Loading script...`);
          var xhr = new XMLHttpRequest();
          xhr.addEventListener('load', function() {
              globalThis.midsummer = JSON.parse(this.responseText);
              goto5(24, false);
          });
          xhr.addEventListener('error', function() {
              write(`An error occurred. Re-trying in 2 seconds...`);
              setTimeout(function() { goto5(23); }, 2000);
          });
          xhr.open('GET', 'https://hw-cdn.weeklyd3.repl.co/index.php?action=download&filename=bsiv-amnd');
          xhr.send();
          // The link to the lines
          // are in the repl invite
          // links document.
          break;
      case 24:
          taitl('Play time!');
          write(`<p style="position: sticky; background-color: white; top: 0;">Overwrite the blanks with the remaining words in your script! <button onclick="goto5(22)">Choose another difficulty (DISCARDS ALL YOUR CHANGES)</button> <button onclick="goto5(24)">New blanks! (DISCARDS ALL YOUR CHANGES)</button></p><div style="position: fixed; right: 0; bottom: 0; background-color: white; width: 50%; padding: 7px; border: 1px solid;" id="answer" hidden="hidden"><h2>Correct answer:</h2><pre id="correctAnswer" style="word-break: break-word; white-space: pre-wrap;">$correctAnswer</pre><p>This has been filled.</p><button onclick="document.getElementById('answer').hidden = 'hidden';">Got it!</button></div><table id="play">
<caption>Nope, you can't drop your script yet!</caption></table><button onclick="goto5(25)">Submit</button><div id="status"></div>`);    
          var lines = globalThis.midsummer;
          for (var i = 0; i < lines.length; i++) {
              var line = lines[i];
              if (!line) {
                  var row = document.createElement('tr');
                  var c = document.createElement('td');
                  c.textContent = '- Some lines were skipped because of faulty memory. They will be added later. -';
                  c.style.textAlign = 'center';
                  c.colSpan = '3';
                  row.appendChild(c);
                  document.getElementById('play').appendChild(row);
                  continue;
              }
              // Skip the stage directions.
              if (!lines[i].person) continue;
              var row = document.createElement('tr');
              var person = document.createElement('td');
              person.setAttribute('valign', 'top');
              person.textContent = line['person'];
              row.appendChild(person);
              var input = document.createElement('td');
              var label = document.createElement('label');
              var hidden = document.createElement('span');
              hidden.style.position = 'fixed';
              hidden.style.top = '-9999px';
              hidden.textContent = 'Line';
              label.appendChild(hidden);
              var textArea = document.createElement('textarea');
              textArea.setAttribute('data-row', i);
              textArea.addEventListener('input', function() {
                  var correctAnswer = globalThis.midsummer[this.getAttribute('data-row')].line;
                  if (correctAnswer.toLowerCase() === this.value.toLowerCase()) { 
                      document.getElementById(`status-${this.getAttribute('data-row')}`).textContent = '✓';
                      document.getElementById(`status-${this.getAttribute('data-row')}`).style.color = 'green';
                  }
                  else  {
                      document.getElementById(`status-${this.getAttribute('data-row')}`).style.color = 'red';
                      document.getElementById(`status-${this.getAttribute('data-row')}`).textContent = '×';
                  }
              });
              textArea.addEventListener('focus', function() {
                  var correctAnswer = globalThis.midsummer[this.getAttribute('data-row')].line;
                  if (globalThis.cheat) { this.value = correctAnswer;
                                         document.getElementById('answer').hidden = '';
                                         document.getElementById('correctAnswer').textContent = correctAnswer;
                                        }
                  if (correctAnswer.toLowerCase() === this.value.toLowerCase()) { 
                      document.getElementById(`status-${this.getAttribute('data-row')}`).textContent = '✓';
                      document.getElementById(`status-${this.getAttribute('data-row')}`).style.color = 'green';
                  }
                  else  {
                      document.getElementById(`status-${this.getAttribute('data-row')}`).style.color = 'red';
                      document.getElementById(`status-${this.getAttribute('data-row')}`).textContent = '×';
                  }
              });
              textArea.cols = 75;
              textArea.setAttribute('rows', lines[i].line.split("\n").length);
              var processedNs = [];
              var ns = line['line'].split("\n");
              for (var k = 0; k < ns.length; k++) {
                  var words = [];
                  for (let j = 0; j < ns[k].split(" ").length; j++) {
                      if (Math.random() < globalThis.d) words.push("_".repeat(ns[k].split(" ")[j].length));
                      else words.push(ns[k].split(" ")[j]);
                  }
                  processedNs.push(words.join(" "));
          }
              textArea.value = processedNs.join("\n");
              label.appendChild(textArea);
              input.appendChild(label);
              row.appendChild(input);
              var status = document.createElement('td');
              status.setAttribute('id', `status-${i}`);
              status.textContent = '?';
              row.appendChild(status);
                document.getElementById('play').appendChild(row);
              checkLine(textArea);
              
          }
          break;
    case 25:
          console.log('Please wait...');
    var checks = document.querySelectorAll('td[id^=status]');
          for (var i = 0; i < checks.length; i++) {
              if (checks[i].textContent !== '✓') {
                  return document.getElementById('status').textContent = 'Not all lines are correct. Please try again.';
              }
          }
          goto5(26);
          break;
      case 26:
      write(`Well, I guess you know your lines quite well! Time for the showcase! But who's coming?\n<div id="checks"></div><br /><p>And who's who?</p><table id="whoswho"></table><button onclick="goto5(27)">Submit</button>`);
          var people = {
              "Dr. Jensen": true,
              "Mr. Lueders": false,
              "Ms. Chen": true,
              "Ms. Miller": true,
              "Ms. Odell": false,
              "Ms. Sweet": true,
              "Mr. Dean": false,
              "Dr. B": true
          };
          globalThis.showcasePeople = people;
          var whoswho = {
              "Theseus": "Vibha",
              "Hippolyta": "Evelyn",
              "Philostrate": "Kavya",
              "Bottom": "Iris",
              "Egeus": "Joshua",
              "Flute": "Timothy L",
              "Quince": "Jaya",
              "Snout": "Hanna",
              "Starveling": "Ayush",
              "Snug": "Timothy W",
              "Oberon": "Austin",
              "Titania": "Annie",
              "Puck": "Leo",
              "Peaseblossom": "Avi",
              "Lysander": "Zanda",
              "Demetrius": "Grace",
              "Hermia": "Avani",
              "Helena": "Sophie"
          };
          var whoswhoreal = Object.values(whoswho);
          var select = document.createElement('select');
          var choose = document.createElement('option');
          choose.textContent = 'Choose...';
          select.appendChild(choose);
          for (var i = 0; i < Object.keys(whoswho).length; i++) {
              var row = document.createElement('tr');
              var character = document.createElement('th');
              character.scope = 'row';
              character.textContent = Object.keys(whoswho)[i];
              var w = document.createElement('td');
              var l = document.createElement('label');
              var s = document.createElement('span');
              s.style.position = 'fixed';
              s.style.top = '-8888px';
              s.textContent = 'Real person:';
              l.appendChild(s);
              var sel = document.createElement('select');
              sel.setAttribute('id', `whoswho${i}`);
              var choose = document.createElement('option');
              choose.textContent = 'Choose...';
              sel.appendChild(choose);
              var whoswhoreal = lib.shuffle(whoswhoreal);
              
              for (var j = 0; j < whoswhoreal.length; j++) {
                  var option = document.createElement('option');
                  option.textContent = whoswhoreal[j];
                  sel.appendChild(option);
              }              sel.setAttribute('data-correct', whoswho[Object.keys(whoswho)[i]]);
              l.appendChild(sel);
              w.appendChild(l);
              row.appendChild(character);
              row.appendChild(w);
              document.getElementById('whoswho').appendChild(row);
          }
          for (var i = 0; i < Object.keys(people).length; i++) {
              var person = Object.keys(people)[i];
              var here = people[person];
              var div = document.createElement('div');
              var label = document.createElement('label');
              var checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              if (here) checkbox.setAttribute('data-here', 'asdf');
              label.appendChild(checkbox);
              var blank = document.createElement('span');
              blank.innerHTML = '&nbsp;';
              label.appendChild(blank);
              var name = document.createElement('span');
              name.textContent = person;
       label.appendChild(name);       div.appendChild(label);
              document.getElementById('checks').appendChild(div);
          }
          break;
      case 27:
    var whoshere = document.querySelectorAll('div#checks div label input[type="checkbox"]');
          for (var i = 0; i < whoshere.length; i++) {
              var c = whoshere[i];
              console.log(c);
              if ((c.getAttribute('data-here') && c.checked) || (!c.getAttribute('data-here') && !c.checked)) continue;
              else return goto(0);
          }
         var whoswhoall = document.querySelectorAll('select[id^=whoswho]');
          for (var i = 0; i < whoswhoall.length; i++) {
              console.log(i);
              if (whoswhoall[i].selectedIndex === 0) {
                  write('Nope. It will not work again.');
                  return setTimeout(function() { goto(0); }, 2000);
              }
              if (whoswhoall[i].options[whoswhoall[i].selectedIndex].text !== whoswhoall[i].getAttribute('data-correct')) return goto(0);
          }
          goto5(28);
          break;
      case 28:
          write(`Please wait...<br /><button onclick="goto5(29)">Then continue here</button>`);
          break;
      case 29:
          new Audio('rickroll_with_30second_silence.mp3').play();
          write(`If we shadows have offended,<br />Think but this, and all is mended.<br />While you have but slumbered here<br />While these visions did appear.`);
          setTimeout(function() {
              goto5(30);
          }, 242000);
          // Callback hell
          setTimeout(function() {
              write(`And this weak and idling theme`);
              setTimeout(function() {
                  write(`No more yielding but a dream.`);
                  globalThis.ricky = setTimeout(function() {
                      write(`WOOHOO! CURTAIN CALL! For 20 whole seconds!`);
                      setTimeout(function() {
                          write(`Leo: I hope there isn't going to be a rickroll at the end. For 4 seconds...`);
                          setTimeout(function() {
                              taitl(`Rickroll from the sound booth`);
                              write(`ARRRRRG WHY DID THE SOUND BOOTH HAVE TO PLAY THIS RICKROLL!?<div>Leo does the 'WHAAAAAAAAT' dance.</div>`);
                          }, 4000);
                      }, 20000);
                  }, 2000);
              }, 2000);
          }, 2000);
          break;
      case 30:
          setTimeout(function() { if (document.getElementById('select2')) goto(0); }, 10000);
          write(`<p>Quick Quick Quick, you only have 10 seconds to decide:</p><strong>Titania:</strong><pre>Come now, a roundel and a fairy song.
Then for the third part of a minute, hence-
Some to kill cankers in the musk-rose buds,
Some war with reremice for their leathern wings
To make my small elves coats, and some keep back
The clamorous owl that nightly hoots and wonders
At our quaint spirits. Sing me now asleep.
Then to your offices and let me rest.</pre><p>What happens next?</p><input name="asdf" type="radio" class='selectThis' id="select1" /><label for="select1"><span class="pre">We're no strangers to hate
You know the rules eat the poop on your plate
Or else you will eat Snickles
And jump in a pee filled hole
I just want to dunk you in a pee hole
Gotta make you understand

Never gonna eat you up
Never gonna poop you out
Never gonna pee you up and poop you</span></label>
<input id="select2" class="selectThis" type="radio" name="asdf" />
<label for="select2"><span class="pre">Philomel, with melody
Sing in our sweet lullaby.
Lulla, lulla, lullaby, lulla, lulla, lullaby.
Never harm
Nor spell nor charm
Come our lovely lady nigh.
So good night, with lullaby.</pre></label>
<input id="selectЗ" type="radio" name="asdf" class="selectThis" />
<label for="selectЗ">QUIET BACKSTAGE!</label>
<input id="selectЧ" type="radio" name="asdf" class="selectThis" />
<label for="selectЧ" onclick="goto5(29)">Or this</label><br />
<input onclick="console.log(document.querySelector('[name=asdf]:checked').id.slice(6)); switch (document.querySelector('[name=asdf]:checked').id.slice(6)) {case '1': goto5(32); break; case '2': goto5(31); break; case 'З': goto(0); break; case 'Ч': alert('THAT WAS NOT SUPPOSED TO HAPPEN'); break;}" type="button" value="CONTINUE!" />`);
          break;
    case 31:
      write(`The showcase is over! FINALLY! It was just a dream! And since the showcase is finally over, level 5 is also finally over.<button onclick='goto6(1)'>Start Level 6!</button>`);
          break;
      case 32:
          write(`And so you rick rolled the sound booth. Gr8 job. I appreci8 your b8 and r8 it an 8/8.<br /><strong>Titania:</strong><pre>Come now, a roundel and a fairy song.
Then for the third part of a minute, hence-
Some to kill cankers in the musk-rose buds,
Some war with reremice for their leathern wings
To make my small elves coats, and some keep back
The clamorous owl that nightly hoots and wonders
At our quaint spirits. Sing me now asleep.
Then to your offices and let me rest.</pre>`);
          setTimeout(function() { goto5(33); }, 5000);
          break;
      case 33:
          write(`<p>Current status of sound system:</p>
<span style="border: 1px solid black;"><span style="background-color: green; color: white;" id="switch1">NORMAL</span></span><span style="border: 1px solid black;"><span style="background-color: red; color: white; opacity: 0;" id="switch2">ERROR</span></span>
<p hidden="hidden" id="switch3">The system appears to be hijacked. This is an irrecoverable situation and may require reinstallation of the operating system. <button onclick="goto3('repair')">WHAT DID YOU DO TO THE SYSTEM!? CLICK HERE TO REINSTALL!</button></p>`);
          setTimeout(function() { document.getElementById('switch1').style.opacity = 0; document.getElementById('switch2').style.opacity = 1; document.getElementById('switch3').hidden = ''; }, 3000);
          setInterval(function() {
              if (!document.getElementById('switch1')) {document.getElementById('baudy').style.top = 'unset';document.getElementById('baudy').style.left = 'unset';document.getElementById('baudy').style.width = 'unset';document.getElementById('baudy').style.color = 'inherit';document.getElementById('baudy').style.backgroundColor = 'unset';document.getElementById('baudy').style.height = 'unset';return document.getElementById('baudy').style.position = 'unset'; }
              if (document.getElementById("baudy").style.backgroundColor === 'red') { 
            document.getElementById('baudy').style.backgroundColor = 'white'; document.getElementById("baudy").style.color = 'black'; document.getElementById('switch2').style.color = 'white';
              document.getElementById('switch2').style.backgroundColor = 'red';return;}
              document.getElementById('switch2').style.color = 'red';
              document.getElementById('switch2').style.backgroundColor = 'white';
              document.getElementById('baudy').style.color = 'white'; document.getElementById('baudy').style.position = 'fixed';
              document.getElementById('baudy').style.top = '0';
              document.getElementById('baudy').style.left = '0';
              document.getElementById('baudy').style.width = '100vw';
              document.getElementById('baudy').style.height = '100vh';
              document.getElementById("baudy").style.backgroundColor = 'red'; 
          }, 333);
          break;
      default:
      write('not done yet!');
          break;
  }
}
function submitButton(t) {
    var text = t;
    globalThis.buttonString += text;
    document.getElementById('string').textContent += text;
    if (globalThis.buttonString.length === globalThis.targetString.length) {
        if (globalThis.buttonString !== globalThis.targetString) {
            goto(0);
        } else {
            goto5(8);
        }
    }
}
function checkLine(textArea) {
  var correctAnswer = globalThis.midsummer[textArea.getAttribute('data-row')].line;
  if (correctAnswer.toLowerCase() === textArea.value.toLowerCase()) { 
      document.getElementById(`status-${textArea.getAttribute('data-row')}`).textContent = '✓';
      document.getElementById(`status-${textArea.getAttribute('data-row')}`).style.color = 'green';
  }
  else  {
      document.getElementById(`status-${textArea.getAttribute('data-row')}`).style.color = 'red';
      document.getElementById(`status-${textArea.getAttribute('data-row')}`).textContent = '×';
  }
}