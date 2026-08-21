// story steps:
// 0: text + scroll
// 1: find yellow crayon
// 2: draw the sun
// 3: ok
// 4: sun in the sky, text + scroll
// 5: draw the grass
// 6: ok
story = 5;


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
  setTimeout(() => { text2.style.opacity = 0; scrolling = 0; }, 2000);
  setTimeout(() => { text2.innerHTML = "The crayon said: “use me to chase the clouds!”"; text2.style.opacity = 1; }, 4000);
  setTimeout(() => { text2.style.opacity = 0; }, 7000);
  setTimeout(() => { text2.innerHTML = "“I'll put your drawing up in the sky!”"; }, 8000);
  setTimeout(() => { text2.style.opacity = 1; }, 8100);
  setTimeout(() => { text2.style.opacity = 0; }, 10000);
  setTimeout(() => { story = 2; a.style.top = 0; story2(); }, 12000);
  
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
    drawboard();
    story5();
  }, 14000); 
}

story5 = () => {
  
}


// debug
start = () => {
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
    paths = [[]]; 
    a.style.top = 0;
    b.style.opacity = 1;
    scrolling = 0;
    scroll = 543;
  }
}