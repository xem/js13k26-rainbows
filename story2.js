// story2 steps:
// 0: text
// 1: draw waterfall
// 2: waterfall done
// 3: beavy arrives
// 4: draw boat
// 5: cruisin
story2 = 3;
beavyX = 0;

imgwaterfall = new Image();

// Story animations:
story2_1 = () => {
  story2 = 1;
  paths = [[]]; 
  a.style.top = 0;
  b.style.opacity = 1;
  drawboard(3);
}

story2_2 = () => {
  story2 = 2;
  a.style.top = "-405px";
  b.style.opacity = 0;
  setTimeout(()=>{
    text2.innerHTML = "“Wait a second, I know someone who will help you go through the stream !”";
  }, 6000);
  setTimeout(()=>{text2.style.opacity = 1;}, 6100);
  setTimeout(()=>{text2.style.opacity = 0;}, 14000);
  setTimeout(()=>{story2_3();}, 15000);
}

story2_3 = () => {
  story2 = 3;
  frame = 0;
  a.style.top = "-405px";
  b.style.opacity = 0;
  setTimeout(()=>{
    text2.innerHTML = "“Hi, I am Beavy !<br>I found an orange crayon...”";
  }, 3000);
  setTimeout(()=>{text2.style.opacity = 1;}, 3100);
  setTimeout(()=>{text2.style.opacity = 0;}, 7000);
  setTimeout(()=>{
    text2.innerHTML = "“Its color reminds me freshly cut wood...”";
  }, 8000);
  setTimeout(()=>{text2.style.opacity = 1;}, 8100);
  setTimeout(()=>{text2.style.opacity = 0;}, 11000);
  setTimeout(()=>{
    text2.innerHTML = "“Mmmmh, wood...”";
  }, 12000);
  setTimeout(()=>{text2.style.opacity = 1;}, 12100);
  setTimeout(()=>{text2.style.opacity = 0;}, 13500);
  setTimeout(()=>{
    text2.innerHTML = "“Anyway, I'm sure you can use it to build something cool !”";
  }, 14500);
  setTimeout(()=>{text2.style.opacity = 1;}, 14600);
  setTimeout(()=>{text2.style.opacity = 0;}, 18500);
  setTimeout(()=>{story2 = 4; story2_4()}, 19500);
}

story2_4 = () => {
  story2 = 4;
  paths = [[]]; 
  a.style.top = 0;
  b.style.opacity = 1;
  drawboard(4);
}

story2_5 = () => {
  frame = 0;
  fade.style.opacity = 0;
  setTimeout(()=>{fade.style.opacity = "1"}, 6000);
  setTimeout(()=>{location = "game3.html"; }, 7000);
}

// debug
start2 = () => {
  sky2.style.opacity = 0;
  scrolling = 0;
  text2.style.color = "#000";
  text2.style.fontWeight = "bold";
  text2.style.width = "330px";
  setTimeout(()=>{fade.style.background = "#0000"; }, 500);
  setTimeout(()=>{fade.style.display = "none"; text2.innerHTML = "Unicorny met<br>her friend Blubbly..."; }, 1500);
  
  // 1
  if(story2 == 1) { story2_1(); }
  
  // 2
  else if(story2 == 2){
    story2_2();
  }
  
  // 3
  else if(story2 == 3){
    story2_3();
  }
  
  // 4
  else if(story2 == 4){
    story2_4();
  }
  
  // 5
  else if(story2 == 5){
    story2_5();
  }
  
  // 0
  else {
    setTimeout(()=>{ text2.style.opacity = 1 }, 2000);
    setTimeout(()=>{ text2.style.opacity = 0 }, 5000);
    setTimeout(()=>{ text2.innerHTML = "Blubbly said:<br>“there used to be a waterfall here...”"; }, 6000);
    setTimeout(()=>{ text2.style.opacity = 1 }, 6100);
    setTimeout(()=>{ text2.style.opacity = 0 }, 9000);
    setTimeout(()=>{ text2.innerHTML = "“Here's a blue crayon, can you bring it back?”"; }, 10000);
    setTimeout(()=>{ text2.style.opacity = 1 }, 10100);
    setTimeout(()=>{ text2.style.opacity = 0; story2_1();  }, 13000);
  }
}