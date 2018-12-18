CSSPlugin.defaultTransformPerspective = 400; 

TweenMax.to(".green", 3, {rotationX:360});
TweenMax.to(".orange", 3, {rotationY:360});
TweenMax.to(".grey", 3, {x:100, y:100, scale:2, skewX:45, rotation:180});


$(window).mousemove(function(e) {
    var xpos=e.clientX;
    var ypos=e.clientY;
    var xpos=xpos*2;
    ypos=ypos*2;
    wWidth = window.innerWidth;
    if(wWidth < 600){
      righPercent = 0
      $('.img-overlay').css('top',((0+(ypos/50))+"px"));
      $('.img-overlay').css('right',(( righPercent+(xpos/80))+"px")); 
    } else {
      righPercent = (wWidth*20)/100;
      $('.img-overlay').css('top',((0+(ypos/50))+"px"));
      $('.img-overlay').css('right',(( righPercent+(xpos/80))+"px")); 
    }               
  });


