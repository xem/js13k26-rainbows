// story3 steps:
// 0: text
// 1: draw apple
// 2: ok
// 3: draw flower
// 4: ok
// 5: go to mom
// 6: draw rainbow
// 7: ok
story3 = 0;
imgflower = new Image();
imgapple = new Image();



// Story animations:
story3_1 = () => {
  story3 = 1;
  paths = [[]]; 
  a.style.top = 0;
  b.style.opacity = 1;
  drawboard(5);
}

story3_2 = () => {
  text2.style.width = "720px";
  text2.innerHTML = "“Hello, I am Baby Wa ! Thanks for saving me...”";
  setTimeout(()=>{ text2.style.opacity = 1; }, 7000);
  setTimeout(()=>{ text2.style.opacity = 0; }, 10000);
  setTimeout(()=>{ text2.innerHTML = "“I was stuck up there and I couldn't get down...”";}, 11000);
  setTimeout(()=>{ text2.style.opacity = 1; }, 11100);
  setTimeout(()=>{ text2.style.opacity = 0; }, 14000);
  setTimeout(()=>{ text2.innerHTML = "“You know what's missing on this island? Flowers !”";}, 15000);
  setTimeout(()=>{ text2.style.opacity = 1; }, 15100);
  setTimeout(()=>{ text2.style.opacity = 0; }, 19000);
  setTimeout(()=>{ story3 = 3; story3_3(); }, 20000);
}

story3_3 = () => {
  paths = [[]]; 
  a.style.top = 0;
  b.style.opacity = 1;
  drawboard(6);
}

story3_4 = () => {
  frame = 0;
  ghY = 80;
  fade.style.display = "block";
  fade.style.background = "#000";
  fade.style.opacity = 0;
  setTimeout(()=>{ text2.innerHTML = "“Yayy, let's find my mom !”"; }, 5000);
  setTimeout(()=>{ text2.style.opacity = 1; }, 5100);
  setTimeout(()=>{ text2.style.opacity = 0; }, 8000);
  setTimeout(()=>{ fade.style.opacity = 1; }, 9000);
  setTimeout(()=>{ 
    story3 = 5;
    story3_5();
    frame = 0;
  }, 10000);
}

story3_5 = () => {
  s3oy = -20;
  fade.style.opacity = 0;
  setTimeout(()=>{ text2.innerHTML = "Baby Wa was finally reunited with Mama Wa..."; }, 2000);
  setTimeout(()=>{ text2.style.opacity = 1; }, 2100);
  setTimeout(()=>{ text2.style.opacity = 0; }, 6000);
  setTimeout(()=>{ text2.innerHTML = "Mama Wa said: “Let's bring back our rainbow !”"; }, 7000);
  setTimeout(()=>{ text2.style.opacity = 1; }, 7100);
  setTimeout(()=>{ text2.style.opacity = 0; }, 11000);
  setTimeout(()=>{ story3_6(); }, 12000);
}

story3_6 = () => {
  story3 = 6;
  s3oy = -20;
  paths = [[]];
  a.style.top = 0;
  b.style.opacity = 1;
  drawboard(7); 
  for(i of ["purple", "indigo", "blue", "green", "yellow", "orange", "red"]){
    crayons.innerHTML += "<div onclick='pick(\""+i+"\", this)'>"+crayon(i.replace("blue","#4fa7e5").replace("green", "#248620"))+"</div>";
  }
  crayons.style.display = "block";
  b.style.cursor = "pointer";
  setTimeout(()=>{
    crayons.style.opacity = 1;
    //resetb.style.opacity = 1;
  },100);
}

story3_7 = () => {
  fade.style.opacity = 0;
};

// debug
start3 = () => {
  text2.style.top = "0px";
  text2.style.padding = "5px 20px";
  sky2.style.opacity = 0;
  scrolling = 0;
  text2.style.color = "#000";
  text2.style.fontWeight = "bold";
  text2.style.textShadow = "0 0 10px #fff, 0 0 10px #fff";
  text2.style.width = "630px";
  setTimeout(()=>{fade.style.background = "#0000"; }, 500);
  setTimeout(()=>{fade.style.display = "none"; }, 1500);
  
  // 1
  if(story3 == 1) { story3_1(); }
  
  // 2
  else if(story3 == 2) { story3_2(); } 
  
  // 3
  else if(story3 == 3) { story3_3(); }
  
  // 4
  else if(story3 == 4) { story3_4(); }
  
  // 5
  else if(story3 == 5) { story3_5(); }
  
  // 6
  else if(story3 == 6) { story3_6(); }
  
  // 7
  else if(story3 == 7) { story3_7(); }
  
  // 0
  else {
    //console.log(story3);
    
    text2.innerHTML = "“Hi guys, we're up here !”";
    setTimeout(()=>{ text2.style.opacity = 1; }, 1000);
    setTimeout(()=>{ text2.style.opacity = 0; }, 3000);
    setTimeout(()=>{ text2.innerHTML = "“I wish there was something to eat on that tree...”";}, 4000);
    setTimeout(()=>{ text2.style.opacity = 1; }, 4100);
    setTimeout(()=>{ text2.style.opacity = 0; }, 7000);
    setTimeout(()=>{ story3 = 1; story3_1(); }, 7000);
  }
}