// story steps:
// 0: text + scroll
// 1: find yellow crayon
// 2: draw the sun
// 3: ok
// 4: sun in the sky, text + scroll
// 5: draw the grass
// 6: ok
// 7: grass, text, scroll
story = 0;


// Globals:

// unicorn head offset
uoffsetx = -10;
uoffsety = 190;

// scroll x offset
scroll = 0;
scrolling = 1;

frame = 0;

// Story animations:
  
story0 = () => {
  setTimeout(()=> { text2.style.opacity = 1; }, 2000);
  setTimeout(()=> { text2.style.opacity = 0; }, 5000);
  setTimeout(() => { text2.innerHTML = "... until she found the yellow crayon !"; text2.style.opacity = 1; }, 8000);
  setTimeout(() => { story = 1; story1(); }, 9000);
  
}

story1 = () => {
  drawboard(1);
  setTimeout(() => { text2.style.opacity = 0; scrolling = 0; }, 2000);
  setTimeout(() => { text2.innerHTML = "The crayon said:<br>“you can use me to brighten the sky!”"; text2.style.opacity = 1; }, 4000);
  setTimeout(() => { text2.style.opacity = 0; }, 7000);
  setTimeout(() => { story = 2; a.style.top = 0; story2(); }, 10000);
  
}

story2 = () => {
  setTimeout(() => { b.style.opacity = 1; }, 1000);
}

story3 = () => {
  
}

story4 = () => {
  scrolling = 1;
  text2.style.color = "#000";
  text2.style.fontWeight = "bold";
  text2.style.width = "530px";
  text2.innerHTML = "Unicorny met her friend Froggy...";
  setTimeout(()=>{text2.style.opacity = 1 }, 4000);
  setTimeout(()=>{text2.style.opacity = 0; scrolling = 0; }, 7000);
  setTimeout(()=>{text2.innerHTML = "Froggy said:“I found a green crayon...<br>Can you draw me a patch of grass?”" }, 8000);
  setTimeout(()=>{text2.style.opacity = 1 }, 8100);
  setTimeout(()=>{text2.style.opacity = 0 }, 12000);
  setTimeout(() => { 
    paths = [[]]; 
    story = 5;
    a.style.top = 0;
    b.style.opacity = 1;
    drawboard(2);
    story5();
  }, 14000); 
}

story5 = () => {
}

story6 = () => {
  
}

story7 = () => {
  text2.style.color = "#000";
  text2.style.fontWeight = "bold";
  text2.style.width = "530px";
  text2.innerHTML = "And the grass grew and grew...<br>Until it covered all the ground !";
  setTimeout(()=>{text2.style.opacity = 1 }, 1000);
  setTimeout(()=>{text2.style.opacity = 0; scrolling = 1; fade.style.display = "block" }, 4000);
  setTimeout(()=>{fade.style.background = "#000"; }, 8000);
  setTimeout(()=>{location = "game2.html"; }, 9000);
}

// debug
start = () => {
  
  setTimeout(()=> {fade.style.background = "#0000"; }, 500);
  setTimeout(()=> {fade.style.display = "none"; }, 1500);
  
  if(story == 0){
    story0();
  }

  if(story == 1) {
    scroll = 333;
    story1();
  }

  if(story == 2) {
    scroll = 333;
    a.style.top = 0;
    scrolling = 0;
    story2();
  }
  
  if(story == 3){
    scroll = 333;
    scrolling = 0;
    story3();
  }
  
  if(story == 4){
    scroll = 333;
    scrolling = 0;
    sky2.style.opacity = 0;
    story4();
  }
  
  if(story == 5){
    drawboard(2);
    paths = [[]]; 
    a.style.top = 0;
    b.style.opacity = 1;
    sky2.style.opacity = 0;
    scrolling = 0;
    scroll = 543;
  }
  
  if(story == 6){
    sky2.style.opacity = 0;
    scrolling = 0;
    scroll = 543;
    story6();
  }
  
  if(story == 7){
    sky2.style.opacity = 0;
    scrolling = 0;
    scroll = 543;
    story7();
  }
}