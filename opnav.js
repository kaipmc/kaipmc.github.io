$(document).ready(function(){var opnavHuge={logoWidthStart:400,logoWidthEnd:300,logoPaddingStart:40,logoPaddingEnd:20}
var opnavLarge={logoWidthStart:350,logoWidthEnd:250,logoPaddingStart:35,logoPaddingEnd:20}
var opnavMedium={logoWidthStart:340,logoWidthEnd:270,logoPaddingStart:30,logoPaddingEnd:15}
var opnavSmall={logoWidthStart:250,logoWidthEnd:200,logoPaddingStart:20,logoPaddingEnd:10}
var startMenuOffset;saveStartPositions();calculateAnimation();fadeIn();$(window).scroll(function(){calculateAnimation();});$(window).bind('touchmove',function(e){calculateAnimation();});$(window).resize(function(){saveStartPositions();calculateAnimation();});function saveStartPositions()
{startMenuOffset=$(window).height()-$('.opnav-menu').outerHeight();}
function calculateAnimation()
{var width=$(window).width();if(width>1280)var config=opnavHuge
else if(width>900)var config=opnavLarge;else if(width>750)var config=opnavMedium;else var config=opnavSmall;var sizefactor=$(window).scrollTop()/$(window).height();if(sizefactor>1)sizefactor=1;if($('.opnav').outerHeight()>=$('.js-opnav-layer').outerHeight()-$(window).scrollTop())
$('.opnav').addClass("is-ontop");else
$('.opnav').removeClass("is-ontop");var logowidth=config.logoWidthStart-(config.logoWidthStart-config.logoWidthEnd)*sizefactor;var logopadding=config.logoPaddingStart-(config.logoPaddingStart-config.logoPaddingEnd)*sizefactor;$('.opnav-logo').css({width:logowidth,padding:logopadding});var opacitySpanTo=$('.centertext-text').position().top-$('.opnav-logo').outerHeight();var opacityFactor=($(window).scrollTop()-opacitySpanTo/2)/opacitySpanTo;if(opacityFactor<0)opacityFactor=0;var textOpacity=1-opacityFactor;$('.centertext-text').css({opacity:textOpacity});var menutop=startMenuOffset-(startMenuOffset+$('.opnav').height())*sizefactor;if(menutop<0)menutop=0;$('.opnav-menu').css({top:menutop});}
function fadeIn()
{var fadeSpeed=400;$('.centertext').animate({opacity:1},fadeSpeed,function(){$('.opnav-logo').animate({opacity:1},fadeSpeed);$('.opnav-menu').animate({opacity:1},fadeSpeed);});}});