// CSS3D framework
C = {
unit: "px",
camX: 0,
camY: 0,
camZ: 0,
camRX: 0,
camRY: 0,
camRZ: 0,
sprite_count: 0,
sprites: [],
plane_count: 0,
cube_count: 0,
pyramid_count: 0,
options: {},
$: t => self[t],
set_unit: t => C.unit=t,
set_perspective: t => viewport.style.perspective=`${t}${C.unit}`,

// Initialize an object's properties
init: t => {
  t.css||(t.css=""),
  t.html||(t.html=""),
  t.g||(t.g="scene"),
  t.o||(t.o="center center"),
  t.o=="top left"&&(t.x+=t.w/2,t.y+=t.h/2),
  t.o=="top"&&(t.y+=t.h/2),
  t.o=="top right"&&(t.x-=t.w/2,t.y+=t.h/2),
  t.o=="right"&&(t.x-=t.w/2),
  t.o=="bottom right"&&(t.x-=t.w/2,t.y-=t.h/2),
  t.o=="bottom"&&(t.y-=t.h/2),
  t.o=="bottom left"&&(t.x+=t.w/2,t.y-=t.h/2),
  t.o=="left"&&(t.x+=t.w/2),
  t.w||(t.w=0),
  t.h||(t.h=0),
  t.x||(t.x=0),
  t.y||(t.y=0),
  t.z||(t.z=0),
  t.rx||(t.rx=0),
  t.ry||(t.ry=0),
  t.rz||(t.rz=0),
  t.sx||(t.sx=1),
  t.sy||(t.sy=1),
  t.sz||(t.sz=1),
  C.options[t.n]=t
},

// Group of objects
group: t => { 
  t.d||t.d===0||(t.d=t.h),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="group ${t.css}"style="position:absolute;width:${t.w}${C.unit};height:${t.d}${C.unit};transform:${C.tr(t)}">`
},

// Plane
plane: t => {
  t.n||(t.n=`plane${C.plane_count++}`),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="plane ${t.css}"style="position:absolute;width:${t.w}${C.unit};height:${t.h}${C.unit};background:${t.b};transform-origin:${t.o};transform:${C.tr(t)}">${t.html}`,
  C.camera()
},

// Sprite (optional)
sprite: t => {
  t.n||(t.n=`sprite${C.sprite_count++}`),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="sprite ${t.css}"style="position:absolute;width:${t.w}${C.unit};height:${t.h}${C.unit};background:${t.b};transform-origin:${t.o};transform:${C.tr(t)}">${t.html}`,
  C.sprites.push(t.n),
  C.camera()
},

// Move the camera
camera: t => {
  t&&(t.x||0===t.x)&&(C.camX=t.x),
  t&&(t.y||0===t.y)&&(C.camY=t.y),
  t&&(t.z||0===t.z)&&(C.camZ=t.z),
  t&&(t.rx||0===t.rx)&&(C.camRX=t.rx),
  t&&(t.ry||0===t.ry)&&(C.camRY=t.ry),
  t&&(t.rz||0===t.rz)&&(C.camRZ=t.rz),
  C.camX+=(Math.random()-.5)/1e3,
  scene.style.transform=`translateX(${-C.camX}${C.unit})translateY(${-C.camY}${C.unit})translateZ(${-C.camZ}${C.unit})rotateX(${C.camRX}deg)rotateY(${C.camRY}deg)rotateZ(${C.camRZ}deg)`;
  for(var r in C.sprites){
    var n=C.$(C.sprites[r]),
    o=n.style.transform.replace(/ *rotate.*\(.*?deg\)/g,"");
    n.style.transform=o+`rotateZ(${-C.camRZ}deg)rotateX(${-C.camRX}deg)`
  }
},

// Move an object
move: t => {
  if(t.n){
   var r=C.$(t.n),
   n=C.options[t.n];
   (t.x||0===t.x)&&(n.x=t.x),
   (t.y||0===t.y)&&(n.y=t.y),
   (t.z||0===t.z)&&(n.z=t.z),
   (t.rx||0===t.rx)&&(n.rx=t.rx),
   (t.ry||0===t.ry)&&(n.ry=t.ry),
   (t.rz||0===t.rz)&&(n.rz=t.rz),
   C.options[t.n]=n,
   r.style.transform=C.tr(n)
 }
},

// CSS3D transform string
tr: t => `translateX(-50%)translateY(-50%)translateX(${t.x}${C.unit})translateY(${t.y}${C.unit})translateZ(${t.z}${C.unit})rotateX(${t.rx}deg)rotateY(${t.ry}deg)rotateZ(${t.rz}deg)scaleX(${t.sx})scaleY(${t.sy})scaleZ(${t.sz})`

}

// SVG
crayon = (color = "#ffffff") => {
  return '<svg width="198" height="198" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M30 10L10 40L10 140A12 2 0 0 0 50 140L50 40Z" fill="' + color + '" stroke="#000000"/>' +
    '<path d="M10 40A12 2 0 0 0 50 40L38 22L22 22Z" fill="#f2952c" stroke="#000000"/><ellipse cx="25" cy="56" rx="2" ry="5" fill="#000000" stroke="#000000"/><ellipse cx="33" cy="56" rx="2" ry="5" fill="#000000" stroke="#000000"/><path d="M20 65Q30 72 37 65Q40 65 39 68Q29 75 21 69Q17 67 20 65" fill="#000000" stroke="#000000"/>' +
    
    //"M5 15Q15 22 22 15Q25 15 24 18Q14 25 6 19Q2 17 5 15"
    '</svg>';
};



// Sound player
py = (f,r,A,m,b,i,s) => {
  A=new AudioContext()
  m=A.createBuffer(1,96e3,48e3)
  b=m.getChannelData(0)
  for(i=96e3;i--;)b[r?20000-i:i]=f(i)
  s=A.createBufferSource()
  s.buffer=m
  s.connect(A.destination)
  s.start()
}

t=(i,n)=>(n-i)/n;

// Thunder sound
thu = (i,q,n) => {
  n=25000;
  if (i > n) return null;
  return Math.sin(i/200 - Math.sin(i/331)*Math.sin(i/61) + Math.sin(Math.sin(i/59)/39) * 33)*t(i,n)*2;
}

// crayon path
function drawCrayon(x1, y1, x2, y2, width, color, ctx = a.getContext("2d")) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (!len) return;

    const ux = dx / len;
    const uy = dy / len;
    const nx = -uy;
    const ny = ux;

    // Hash déterministe
    const hash = n => {
        n = Math.sin(n * 127.1 + 311.7) * 43758.5453;
        return n - Math.floor(n);
    };

    ctx.save();
    ctx.lineCap = "round";

    // --------------------------------------------------
    // 1. Beaucoup de petites marques de crayon
    // --------------------------------------------------

    const density = width * len * .55;

    for (let i = 0; i < density; i++) {

        // Position déterministe sur le trait
        const t = hash(i * 13.17 + x1 * .31 + y1 * .17);
        const d = t * len;

        const x = x1 + ux * d;
        const y = y1 + uy * d;

        // Distribution vers les bords du crayon
        const side = (hash(i * 7.31 + x1) - .5) * width;

        const px = x + nx * side;
        const py = y + ny * side;

        // Certaines marques sont presque invisibles
        const opacity = .025 + hash(i * 19.73) * .13;

        // Longueur de la "fibre"
        const l = .5 + hash(i * 23.91) * 5;

        // Largeur minuscule
        ctx.lineWidth = .25 + hash(i * 31.17) * .8;
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.moveTo(
            px - ux * l,
            py - uy * l
        );
        ctx.lineTo(
            px + ux * l,
            py + uy * l
        );
        ctx.stroke();
    }

    // --------------------------------------------------
    // 2. Quelques passages plus denses
    // --------------------------------------------------

    for (let pass = 0; pass < 5; pass++) {

        ctx.globalAlpha = .035 + hash(pass * 71.3) * .045;
        ctx.lineWidth = width * (.25 + hash(pass * 17.2) * .35);
        ctx.strokeStyle = color;

        const o = (hash(pass * 43.7) - .5) * width;

        ctx.beginPath();

        ctx.moveTo(
            x1 + nx * o,
            y1 + ny * o
        );

        // Trait légèrement irrégulier
        const mx =
            (x1 + x2) * .5 +
            nx * o +
            (hash(pass * 91.2) - .5) * width * .4;

        const my =
            (y1 + y2) * .5 +
            ny * o +
            (hash(pass * 37.8) - .5) * width * .4;

        ctx.quadraticCurveTo(
            mx, my,
            x2 + nx * o,
            y2 + ny * o
        );

        ctx.stroke();
    }

    ctx.restore();
}

// create img from paths
function createDrawing(paths = [{x:1, y:1},{x:100,y:100}], color="#e4cb07") {
  tmp.width ^= 0;
  const ctx = tmp.getContext("2d");
  var currentpath;
  var i;
  for(currentpath of paths){
    if(currentpath.length > 1){
      for(i = 1; i < currentpath.length; i++){
        drawCrayon(
          currentpath[i - 1].x,
          currentpath[i - 1].y,
          currentpath[i].x,
          currentpath[i].y,
          20,
          color,
          ctx
        );
      }
    }
  }
  const img = new Image();
  img.src = tmp.toDataURL("image/png");

  return img;
}

// draw board

drawboard = (img) => {
  //console.log(img);
  a.width ^= 0;
  c.lineWidth = 10;
  c.fillStyle = "#222";
  c.strokeStyle = "#733e01";
  c.beginPath();
  c.moveTo(200, 0);
  c.lineTo(200, 50);
  c.moveTo(500, 0);
  c.lineTo(500, 50);
  c.stroke();
  c.closePath();
  c.strokeStyle = "#834e11";
  c.beginPath();
  c.rect(100, 50, 500, 300);
  c.fill();
  c.stroke();
  c.closePath();
  if(img == 1){
    c.save();
    c.scale(1.3,1.3);
    c.drawImage(imgcircledash, 170, 55);
    c.restore();
    c.fillStyle = "#fff8";
    c.font = "bold 22px Calibri, sans-serif";
    c.fillText("Draw something that will chase the clouds...", 115, 75);
    c.fillText("... in your own style !", 395, 335);
  }
  
  if(img == 2){
    c.fillStyle = "#fff8";
    c.font = "bold 22px Calibri, sans-serif";
    c.fillText("Draw some grass for Froggy...", 115, 75);
    c.save();
    c.scale(3.3,3.3);
    c.drawImage(imgpatchdash, 55, 22);
    c.restore();
  }
  
  if(img == 3){
    c.fillStyle = "#fff8";
    c.font = "bold 22px Calibri, sans-serif";
    c.fillText("Draw a waterfall", 115, 75);
    c.save();
    c.scale(2.8,2.8);
    c.drawImage(imgwaterfalldash, 85, 25);
    c.restore();
  }
  
  if(img == 4){
    c.fillStyle = "#fff8";
    c.font = "bold 22px Calibri, sans-serif";
    c.fillText("Draw something made of wood to go on the river...", 115, 75);
    c.fillText("(Unicorny's head for scale)", 345, 335);
    c.save();
    c.scale(3.2,3.2);
    c.drawImage(imgboatdash, 60, 25);
    c.restore();
    c.save();
    c.translate(390,190);
    c.scale(-2.5,2.5);
    c.fillText("🦄", 0, 0);
    c.restore();
  }
  
  if(img == 5){
    c.fillStyle = "#fff8";
    c.font = "bold 22px Calibri, sans-serif";
    c.fillText("Feed this mysterious animal !", 115, 75);
    c.save();
    c.scale(3.2,3.2);
    c.drawImage(imgappledash, 60, 20);
    c.restore();
  }
  
  if(img == 6){
    c.fillStyle = "#fff8";
    c.font = "bold 22px Calibri, sans-serif";
    c.fillText("A flower for Baby Wa", 115, 75);
    c.save();
    c.scale(4,4);
    c.drawImage(imgflowerdash, 40, 5);
    c.restore();
  }
}

function lerpRGB(rgb1, rgb2, t) {
    const a = rgb1.match(/\d+/g).map(Number);
    const b = rgb2.match(/\d+/g).map(Number);

    return `rgb(${
        Math.round(a[0] + (b[0] - a[0]) * t)
    },${
        Math.round(a[1] + (b[1] - a[1]) * t)
    },${
        Math.round(a[2] + (b[2] - a[2]) * t)
    })`;
}