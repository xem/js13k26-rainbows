// story2 steps:
// 0: text
// 1: drawing
// 2: waterfall done
story2 = 2;

imgwaterfall = new Image();

// Story animations:
story2_1 = () => {
  paths = [[]]; 
  a.style.top = 0;
  b.style.opacity = 1;
  drawboard(3);
}

story2_2 = () => {
  a.style.top = "-405px";
  b.style.opacity = 0;
  setTimeout(()=>{
    text2.innerHTML = "“I have a friend that will help you go through the stream !”";
  }, 6000);
  setTimeout(()=>{text2.style.opacity = 1;}, 6100);
  setTimeout(()=>{text2.style.opacity = 0;}, 11000);
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
  if(story2 == 1) { story2_1(); }
  else if(story2 == 2){
    story2_2();
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