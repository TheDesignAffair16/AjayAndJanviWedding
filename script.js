const W = {
  bride:         "Ajay",
  groom:         "Janvi",
  tagline:       "Two souls, one love — forever entwined.",
  groomParents:  "S/O Mr. Satish Rameshwarji Mallawat\n& Mrs. Kirti Satish Mallawat",
  brideParents:  "D/O Mr. Sanjay Shankarlalji Jalani\n& Mrs. Bela Sanjay Jalani",
  weddingDate:   "2026-12-12",
  weddingTime:   "12:00 AM",
  venue:         "Jodhpur",
  
  mapEmbedLink: "https://www.google.com/maps?q=Pachranga%20Resort%2C%20Narayan%20Sagar%2C%20AIIMS%20Road%2C%20Jodhpur%2C%20Rajasthan%20342008&output=embed",

  mapOpenLink: "https://www.google.com/maps/search/?api=1&query=Pachranga%20Resort%2C%20Narayan%20Sagar%2C%20AIIMS%20Road%2C%20Jodhpur%2C%20Rajasthan%20342008",

  scratchDay:    "12",
  scratchMonth:  "December",
  scratchYear:   "2026",

  heroDesktop: "Video-82115.mp4",
  heroMobile:  "https://ik.imagekit.io/ctbeventinvites/ChatGPT%20Image%20May%2020,%202026,%2010_31_36%20PM.png?updatedAt=1779305527925",
  footerDesktop: "https://ik.imagekit.io/ctbeventinvites/ChatGPT%20Image%20May%2024,%202026,%2010_14_09%20PM.png",
  footerMobile:  "https://ik.imagekit.io/ctbeventinvites/ChatGPT%20Image%20May%2024,%202026,%2010_12_35%20PM.png",
  topBorderDesktop: "https://ik.imagekit.io/ctbeventinvites/ChatGPT%20Image%20May%2024,%202026,%2010_16_28%20PM.png",
  topBorderMobile:  "https://ik.imagekit.io/ctbeventinvites/ChatGPT%20Image%20May%2024,%202026,%2010_16_28%20PM.png",
  venueImage: "pachranga resort.png",

  carouselImages: [
    { url: "Ajay & Janvi-12.jpg", caption: "Blooming Forever" },
    { url: "Ajay & Janvi-59.jpg", caption: "Love In Full Bloom" },
    { url: "Ajay & Janvi-78.jpg", caption: "A Red Rose Romance" },
    { url: "Ajay & Janvi-144.jpg", caption: "Together Forever" },
  ],

  // Haldi & Mehendi Image Cards
  haldiCardImage:   "Sangeet.png",
  haldiVenueText:   "Venue: Amber Fort Residence, Jaipur",
  haldiMapLink:     "https://maps.google.com",

  carnivalCardImage: "Carnival.png",
  carnivalVenueText: "Venue: Groom's Residence, Jodhpur",
  carnivalMapLink:   "https://maps.google.com",

  baratCardImage: "Barat.png",
  baratVenueText: "Venue: Groom's Residence, Jodhpur",
 baratMapLink:   "https://maps.google.com",

  varmalaCardImage: "Varmala.png",
  varmalaVenueText: "Venue: Groom's Residence, Jodhpur",
 varmalaMapLink:   "https://maps.google.com",

  phereCardImage: "Phere.png",
  phereVenueText: "Venue: Groom's Residence, Jodhpur",
 phereMapLink:   "https://maps.google.com",

 receptionCardImage: "Phere.png",
  receptionVenueText: "Venue: Groom's Residence, Jodhpur",
 receptionMapLink:   "https://maps.google.com",


  // Footer Logo
  footerLogoImage:  "Ajay & Janvi Logo Transparent.png"
};

/* ===== Next original script block ===== */

function g(id){return document.getElementById(id);}
function pad(n){return String(n).padStart(2,'0');}
var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];

var ev=new Date(W.weddingDate+'T17:30:00');

g('nb-bride').textContent=W.bride;
g('nb-groom').textContent=W.groom;
if(g('invite-groom-parents')) g('invite-groom-parents').textContent=W.groomParents;
if(g('invite-bride-parents')) g('invite-bride-parents').textContent=W.brideParents;
g('nb-tagline').textContent=W.tagline;

g('cd-date-display').textContent=DAYS[ev.getDay()]+', '+ev.getDate()+' '+MONTHS[ev.getMonth()]+' '+ev.getFullYear();
g('venue-addr').textContent=W.venue;
g('footer-bride').textContent=W.bride;
g('footer-groom').textContent=W.groom;
g('footer-date').textContent=DAYS[ev.getDay()]+' · '+ev.getDate()+' '+MONTHS[ev.getMonth()]+' '+ev.getFullYear();
g('footer-tagline').textContent=W.tagline;

// Haldi Setup
if(W.haldiCardImage) { g('haldi-card-img').src = W.haldiCardImage; }
g('disp-haldi-venue').textContent = W.haldiVenueText;
g('disp-haldi-mapbtn').href = W.haldiMapLink;

// Mehendi Setup
if(W.mehendiCardImage) { g('mehendi-card-img').src = W.mehendiCardImage; }
g('disp-mehendi-venue').textContent = W.mehendiVenueText;
g('disp-mehendi-mapbtn').href = W.mehendiMapLink;

// Footer Logo Setup
if(W.footerLogoImage) { g('footer-logo-img').src = W.footerLogoImage; }

function applyResponsiveImages(){
  var isMobile = window.innerWidth <= 400;
  g('curtain-bg').style.backgroundImage = 'url(' + (isMobile ? W.heroMobile : W.heroDesktop) + ')';
  document.querySelector('.footer-bg').style.backgroundImage = 'url(' + (isMobile ? W.footerMobile : W.footerDesktop) + ')';
  document.querySelectorAll('.petal-strip-img').forEach(function(el){
    el.style.backgroundImage = 'url(' + (isMobile ? W.topBorderMobile : W.topBorderDesktop) + ')';
  });
}
applyResponsiveImages();
window.addEventListener('resize', applyResponsiveImages);

g('venue-image').src = W.venueImage;
g('map-frame').src = W.mapEmbedLink;
g('map-btn').href = W.mapOpenLink;

function ics(d){return d.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';}
var end=new Date(ev.getTime()+5*3600000);
g('cal-btn').href='https://www.google.com/calendar/render?action=TEMPLATE'
  +'&text='+encodeURIComponent(W.bride+' & '+W.groom+' Wedding')
  +'&dates='+ics(ev)+'/'+ics(end)
  +'&details='+encodeURIComponent(W.tagline)
  +'&location='+encodeURIComponent(W.venue);

/* CURTAIN LOGIC */
var sc=g('s-curtain'), curtains=g('curtains'), hint=g('tap-hint');
var petalsLayer=g('petals-layer');
var opened=false;

for(var pi=0;pi<22;pi++){
  var p=document.createElement('div');
  p.className='petal-fall';
  var left=(Math.random()*100).toFixed(1)+'%';
  var dur=(3+Math.random()*5).toFixed(2)+'s';
  var delay=(-Math.random()*6).toFixed(2)+'s';
  var size=(10+Math.random()*12).toFixed(1)+'px';
  p.style.cssText='left:'+left+';width:'+size+';height:'+(parseFloat(size)*1.5)+'px;animation-duration:'+dur+';animation-delay:'+delay+';';
  var shapes=['50% 20% 50% 20%','40% 60% 40% 60%','60% 40% 40% 60%','50% 50% 30% 50%'];
  p.style.borderRadius=shapes[Math.floor(Math.random()*shapes.length)];
  petalsLayer.appendChild(p);
}

var introStage = g('intro-stage');
var matchMoveStarted = false;
function turnToInvitation(){
  if(matchMoveStarted) return;
  matchMoveStarted = true;
  if(introStage) introStage.classList.add('match-move');
  // After the match-and-move transition, restore normal document flow so
  // the invitation is followed by the scratch card and all remaining sections.
  window.setTimeout(function(){
    if(introStage){
      introStage.classList.add('intro-complete');
      introStage.classList.remove('match-move');
    }
    var invitation = g('s-invitation');
    if(invitation){
      invitation.setAttribute('tabindex','-1');
      invitation.focus({preventScroll:true});
    }
  }, 1150);
}
function openCurtain(){
  if(opened)return;

  // Start background music directly inside the visitor's gate tap/click.
  // This is the most reliable way to satisfy mobile Safari/Chrome autoplay policies.
  var weddingAudio = g('wedding-background-music');
  var musicButton = g('music-toggle');
  var musicIcon = g('music-toggle-icon');
  if (weddingAudio) {
    weddingAudio.volume = 0.65;
    var musicPromise = weddingAudio.play();
    if (musicPromise && typeof musicPromise.then === 'function') {
      musicPromise.then(function () {
        if (musicButton) {
          musicButton.setAttribute('aria-pressed', 'true');
          musicButton.setAttribute('aria-label', 'Pause wedding music');
          musicButton.setAttribute('title', 'Pause music');
        }
        if (musicIcon) musicIcon.textContent = 'Ⅱ';
      }).catch(function (error) {
        console.warn('Wedding music could not start on gate tap:', error);
      });
    } else if (musicButton) {
      musicButton.setAttribute('aria-pressed', 'true');
      musicButton.setAttribute('aria-label', 'Pause wedding music');
      musicButton.setAttribute('title', 'Pause music');
      if (musicIcon) musicIcon.textContent = 'Ⅱ';
    }
  }

  opened=true;
  sc.classList.add('c-opened');
  curtains.classList.add('c-opened');
  hint.style.opacity='0';
  hint.style.visibility='hidden';

  var curtainVideo = g('curtain-video');
  if(curtainVideo){
    // iOS/Safari needs muted + inline playback; the play call is made directly
    // inside the visitor's tap/click handler to satisfy mobile playback rules.
    curtainVideo.muted = true;
    curtainVideo.defaultMuted = true;
    curtainVideo.playsInline = true;
    curtainVideo.setAttribute('muted', '');
    curtainVideo.setAttribute('playsinline', '');
    curtainVideo.setAttribute('webkit-playsinline', '');
    curtainVideo.setAttribute('preload', 'auto');
    curtainVideo.onended = function(){
      window.setTimeout(turnToInvitation, 1100);
    };
    try { curtainVideo.currentTime = 0; } catch(e) {}
    var playPromise = curtainVideo.play();
    if(playPromise && typeof playPromise.catch === 'function'){
      playPromise.catch(function(error){
        console.warn('Opening video playback was blocked on this device:', error);
        // Do not prematurely hide the entry scene if mobile playback is blocked.
        // Keep the gate/video scene visible so the visitor can retry with another tap.
        opened = false;
        sc.classList.remove('c-opened');
        curtains.classList.remove('c-opened');
        hint.style.opacity = '1';
        hint.style.visibility = 'visible';
      });
    }
  } else {
    window.setTimeout(turnToInvitation, 8000);
  }
}
sc.addEventListener('click',openCurtain);
sc.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')openCurtain();});

/* SCRATCH CARD LOGIC */
var SCRATCH_DATA=[
  {icon:'🦚',label:'Day',value:W.scratchDay},
  {icon:'🦚',label:'Month',value:W.scratchMonth},
  {icon:'🦚',label:'Year',value:W.scratchYear},
];
var scratched=0;
var scratchRow=g('scratch-row');

SCRATCH_DATA.forEach(function(item,idx){
  var card=document.createElement('div');
  card.className='scratch-card';
  card.id='sc-'+idx;

  var prize=document.createElement('div');
  prize.className='scratch-prize';
  prize.innerHTML='<span class="scratch-prize-icon">'+item.icon+'</span>'
    +'<span class="scratch-prize-label">'+item.label+'</span>'
    +'<span class="scratch-prize-value">'+item.value+'</span>';

  var cv=document.createElement('canvas');
  cv.className='scratch-canvas';
  card.appendChild(prize);
  card.appendChild(cv);
  scratchRow.appendChild(card);

  requestAnimationFrame(function(){
    var rect=card.getBoundingClientRect();
    var W2=rect.width-4, H2=rect.height-4;
    cv.width=W2; cv.height=H2;
    var ctx=cv.getContext('2d');
    var grd=ctx.createLinearGradient(0,0,W2,H2);
    grd.addColorStop(0,'#F9E596');
    grd.addColorStop(0.3,'#E6C25B');
    grd.addColorStop(0.6,'#F9E596');
    grd.addColorStop(0.8,'#C5A031');
    grd.addColorStop(1,'#E6C25B');
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,W2,H2);

    ctx.fillStyle='rgba(136,14,79,0.68)';
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    /* Larger, clearer two-line instruction with balanced vertical spacing */
    ctx.font='700 '+(W2*0.085)+'px Montserrat,sans-serif';
    ctx.fillText('SCRATCH',W2/2,H2/2-9);
    ctx.font='600 '+(W2*0.068)+'px Montserrat,sans-serif';
    ctx.fillText('HERE',W2/2,H2/2+11);

    var isScratching=false;
    var totalPx=W2*H2;
    var done=false;
    var lastCheck=0;
    var lastPoint=null;

    function checkScratchProgress(force){
      if(done)return;
      var now=performance.now();
      if(!force && now-lastCheck<140)return;
      lastCheck=now;
      // Sample pixels instead of scanning every pixel on every pointer move.
      var data=ctx.getImageData(0,0,cv.width,cv.height).data;
      var clear=0, samples=0;
      for(var i=3;i<data.length;i+=32){samples++;if(data[i]<128)clear++;}
      if(samples && clear/samples>0.55){
        done=true;
        ctx.clearRect(0,0,cv.width,cv.height);
        scratched++;
        if(scratched===3)launchConfetti();
      }
    }
    function scratchAt(ex,ey){
      if(done)return;
      var cr=cv.getBoundingClientRect();
      var x=(ex-cr.left)*(cv.width/cr.width), y=(ey-cr.top)*(cv.height/cr.height);
      ctx.globalCompositeOperation='destination-out';
      ctx.lineCap='round';ctx.lineJoin='round';
      var radius=Math.max(14,Math.min(28,W2*0.13));
      if(lastPoint){
        ctx.lineWidth=radius*2;ctx.beginPath();ctx.moveTo(lastPoint.x,lastPoint.y);ctx.lineTo(x,y);ctx.stroke();
      }
      ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
      lastPoint={x:x,y:y};
      checkScratchProgress(false);
    }
    cv.addEventListener('pointerdown',function(e){
      if(done)return;
      e.preventDefault();isScratching=true;lastPoint=null;
      try{cv.setPointerCapture(e.pointerId);}catch(err){}
      scratchAt(e.clientX,e.clientY);
    });
    cv.addEventListener('pointermove',function(e){if(isScratching){e.preventDefault();scratchAt(e.clientX,e.clientY);}});
    function stopScratch(){isScratching=false;lastPoint=null;checkScratchProgress(true);}
    cv.addEventListener('pointerup',stopScratch);
    cv.addEventListener('pointercancel',stopScratch);
    cv.addEventListener('lostpointercapture',stopScratch);
  });
});

function launchConfetti(){
  var cvs=g('confetti-canvas');
  cvs.style.display='block';
  cvs.width=window.innerWidth; cvs.height=window.innerHeight;
  var ctx=cvs.getContext('2d');
  var pieces=[];
  var colors=['#D81B60','#D4AF37','#880E4F','#FF80AB','#4E7A27','#FFF5F7'];

  for(var i=0;i<140;i++){
    pieces.push({
      x:Math.random()*cvs.width,
      y:-20-Math.random()*100,
      r:3+Math.random()*6,
      color:colors[Math.floor(Math.random()*colors.length)],
      vx:(Math.random()-0.5)*4,
      vy:3+Math.random()*5,
      rot:Math.random()*360,
      vrot:(Math.random()-0.5)*8,
      alpha:1,
    });
  }
  function draw(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    pieces.forEach(function(p){
      ctx.save();
      ctx.globalAlpha=p.alpha;
      ctx.fillStyle=p.color;
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();
      ctx.restore();
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.vrot; p.alpha-=0.008;
    });
    if(pieces[0].alpha>0)requestAnimationFrame(draw);
    else{cvs.style.display='none';}
  }
  draw();
}

/* COUNTDOWN */
function tick(){
  var diff=ev.getTime()-Date.now();
  if(diff<=0){
    ['cd-d','cd-h','cd-m','cd-s'].forEach(function(id){g(id).textContent='00';});
    g('cd-msg').textContent='🦚 Today is the day! We\'re getting married!';
    return;
  }
  g('cd-d').textContent=pad(Math.floor(diff/86400000));
  g('cd-h').textContent=pad(Math.floor((diff%86400000)/3600000));
  g('cd-m').textContent=pad(Math.floor((diff%3600000)/60000));
  g('cd-s').textContent=pad(Math.floor((diff%60000)/1000));
  var dd=Math.floor(diff/86400000);
  g('cd-msg').textContent=dd<1?'🎊 Tomorrow is the big day!':dd<7?'✨ Just days away — the lotus are blooming!':'🦚 We can\'t wait to celebrate with you';
}
tick(); setInterval(tick,1000);

/* CAROUSEL */
(function(){
  var track=g('carousel-track');
  var dotsEl=g('carousel-dots');
  var imgs=W.carouselImages;
  var all=[].concat(imgs,imgs,imgs);
  var slideW=0, current=0, startX=0, dragX=0, dragging=false;
  var autoTimer;

  all.forEach(function(item){
    var s=document.createElement('div');
    s.className='carousel-slide';
    s.innerHTML='<img src="'+item.url+'" alt="'+item.caption+'" loading="lazy">'
      +'<div class="carousel-caption">'+item.caption+'</div>';
    track.appendChild(s);
  });

  imgs.forEach(function(_,i){
    var d=document.createElement('div');
    d.style.cssText='width:8px;height:8px;border-radius:50%;background:var(--rose-mid);transition:background .3s,transform .3s;cursor:pointer;';
    d.addEventListener('click',function(){goTo(i+imgs.length);});
    dotsEl.appendChild(d);
  });

  function updateDots(idx){
    var norm=(idx-imgs.length)%imgs.length;
    if(norm<0)norm+=imgs.length;
    Array.from(dotsEl.children).forEach(function(d,i){
      d.style.background=i===norm?'var(--rose)':'var(--rose-mid)';
      d.style.transform=i===norm?'scale(1.3)':'scale(1)';
    });
  }

  function getSlideW(){
    var s=track.querySelector('.carousel-slide');
    if(!s)return 260;
    var gap=parseFloat(getComputedStyle(track).gap)||14;
    return s.offsetWidth+gap;
  }

  function goTo(idx){
    slideW=getSlideW();
    current=idx;
    track.style.transition='transform .55s cubic-bezier(.4,0,.2,1)';
    track.style.transform='translateX(-'+(current*slideW)+'px)';
    updateDots(idx);
    track.addEventListener('transitionend',function onEnd(){
      track.removeEventListener('transitionend',onEnd);
      track.style.transition='none';
      if(current>=imgs.length*2){current=imgs.length;track.style.transform='translateX(-'+(current*slideW)+'px)';updateDots(current);}
      if(current<imgs.length){current=imgs.length*2-1;track.style.transform='translateX(-'+(current*slideW)+'px)';updateDots(current);}
    });
  }

  function startAuto(){autoTimer=setInterval(function(){goTo(current+1);},3200);}
  function stopAuto(){clearInterval(autoTimer);}

  requestAnimationFrame(function(){
    slideW=getSlideW();
    current=imgs.length;
    track.style.transition='none';
    track.style.transform='translateX(-'+(current*slideW)+'px)';
    updateDots(current);
    startAuto();
  });

  var wrap=g('carousel-wrap');
  wrap.addEventListener('touchstart',function(e){startX=e.touches[0].clientX;dragging=true;stopAuto();track.style.transition='none';},{passive:true});
  wrap.addEventListener('touchmove',function(e){if(!dragging)return;dragX=e.touches[0].clientX-startX;track.style.transform='translateX(-'+(current*slideW-dragX)+'px)';},{passive:true});
  wrap.addEventListener('touchend',function(){dragging=false;if(Math.abs(dragX)>50){goTo(dragX<0?current+1:current-1);}else{goTo(current);}dragX=0;startAuto();});
  wrap.addEventListener('mousedown',function(e){startX=e.clientX;dragging=true;stopAuto();track.style.transition='none';});
  wrap.addEventListener('mousemove',function(e){if(!dragging)return;dragX=e.clientX-startX;track.style.transform='translateX(-'+(current*slideW-dragX)+'px)';});
  wrap.addEventListener('mouseup',function(){dragging=false;if(Math.abs(dragX)>50){goTo(dragX<0?current+1:current-1);}else{goTo(current);}dragX=0;startAuto();});
  wrap.addEventListener('mouseleave',function(){if(dragging){dragging=false;goTo(current);dragX=0;startAuto();}});
  window.addEventListener('resize',function(){slideW=getSlideW();track.style.transition='none';track.style.transform='translateX(-'+(current*slideW)+'px)';});
})();

/* INTERSECTION OBSERVER */
if('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('animated');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});

  document.querySelectorAll('.animate-on-scroll').forEach(function(el){
    io.observe(el);
  });
}

/* ===== Next original script block ===== */

(function(){
  var audio=document.getElementById('wedding-background-music');
  var button=document.getElementById('music-toggle');
  var icon=document.getElementById('music-toggle-icon');
  if(!audio||!button||!icon)return;
  audio.volume=0.65;
  var started=false;
  function paint(playing){
    button.setAttribute('aria-pressed',playing?'true':'false');
    button.setAttribute('aria-label',playing?'Pause wedding music':'Play wedding music');
    button.setAttribute('title',playing?'Pause music':'Play music');
    icon.textContent=playing?'Ⅱ':'♫';
  }
  function playMusic(){
    var result=audio.play();
    if(result&&typeof result.then==='function'){
      result.then(function(){started=true;paint(true);}).catch(function(){paint(false);});
    }else{started=true;paint(true);}
  }
  function firstSiteInteraction(event){
    if(event&&button.contains(event.target))return;
    if(started||!audio.paused)return;
    playMusic();
    document.removeEventListener('pointerdown',firstSiteInteraction,true);
    document.removeEventListener('keydown',firstSiteInteraction,true);
  }
  // Browsers block sound autoplay until a real user gesture; start on the first site click/tap.
  document.addEventListener('pointerdown',firstSiteInteraction,true);
  document.addEventListener('keydown',firstSiteInteraction,true);
  button.addEventListener('click',function(event){
    event.preventDefault();event.stopPropagation();
    if(audio.paused){playMusic();}
    else{audio.pause();started=false;paint(false);}
  });
  audio.addEventListener('play',function(){paint(true);});
  audio.addEventListener('pause',function(){paint(false);});
  audio.addEventListener('error',function(){button.title='Music file could not be loaded';});
  paint(false);
})();
