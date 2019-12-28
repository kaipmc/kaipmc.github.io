$(document).ready(function(){var scrollpointsHuge={menuHeight:97}
var scrollpointsLarge={menuHeight:87}
var scrollpointsMedium={menuHeight:83}
var scrollpointsSmall={menuHeight:69}
$('[data-scrollpoint]').click(function(event){var width=$(window).width();if(width>1280)var config=scrollpointsHuge
else if(width>900)var config=scrollpointsLarge;else if(width>750)var config=scrollpointsMedium;else var config=scrollpointsSmall;event.preventDefault();var targetSelector=$(this).attr("data-scrollpoint");var targetPosition=$(targetSelector).position().top;var targetScroll=targetPosition-config.menuHeight;if(targetScroll<0)targetScroll=0;$('html,body').animate({scrollTop:targetScroll});});});