var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;
    showtime = time/1000;

$('body').append($('<div>', {class: 'preloader-wrap'}));

  $( "div.preloader-wrap" ).html( '<div class="percentage" id="precent"></div><div class="loader"><div class="trackbar"><div class="loadbar"></div></div><div class="glow"></div></div></div><div class="loaderCloud"><div class="logo"><img class="shadow" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1455399/csrCloud_logo-200x200-bw.png"><div class="mask"><div class="background-movement"><div class="rainbow-container"><div class="green"></div><div class="pink"></div><div class="blue"></div></div></div></div></div><svg viewBox="-391 395 16 11"><path class="cloud-loading" d="M-377.1,400l0-0.3c0-2.6-2.1-4.7-4.7-4.7c-1.9,0-3.5,1.1-4.2,2.7c-0.4-0.3-0.8-0.5-1.3-0.5 c-1.2,0-2.2,1-2.2,2.2c0,0.2,0,0.4,0.1,0.6c-0.9,0.6-1.6,1.6-1.6,2.7c0,1.7,1.4,3.2,3.1,3.2v0h0l0,0l0,0h9.3l0.2,0 c1.7,0,3.1-1.4,3.1-3.1C-375.2,401.6-376,400.5-377.1,400" /><path class="cloud-loading-inner" d="M-377.1,400l0-0.3c0-2.6-2.1-4.7-4.7-4.7c-1.9,0-3.5,1.1-4.2,2.7c-0.4-0.3-0.8-0.5-1.3-0.5 c-1.2,0-2.2,1-2.2,2.2c0,0.2,0,0.4,0.1,0.6c-0.9,0.6-1.6,1.6-1.6,2.7c0,1.7,1.4,3.2,3.1,3.2v0h0l0,0l0,0h9.3l0.2,0 c1.7,0,3.1-1.4,3.1-3.1C-375.2,401.6-376,400.5-377.1,400" /></svg><div class="text">Instanciating cloud session in ' + showtime + ' s </div></div>' );

// Loadbar Animation
$(".loadbar").animate({
  width: width + "%"
}, time);

// Loadbar Glow Animation
$(".glow").animate({
  width: width + "%"
}, time);

// Percentage Increment Animation
var PercentageID = $("#precent"),
		start = 0,
		end = 100,
		durataion = time;
		animateValue(PercentageID, start, end, durataion);
		
function animateValue(id, start, end, duration) {
  
	var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");
      //obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}



// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.preloader-wrap').fadeOut(800);
}, time);

