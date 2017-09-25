// JavaScript Document
$(document).ready(function() {
	"use strict";
	var animationSpeed = 500;
	
	$('.mouseDetect').hover(function(e) {
		var whichSide = "unknown";
		var thisOff = $(this).offset();
		var numTop = e.pageY - Math.round(thisOff.top);
		var numLeft = e.pageX - Math.round(thisOff.left);
		var numRight = ($(this).width() + Math.round(thisOff.left)) - e.pageX;
		var numBottom = ($(this).height() + Math.round(thisOff.top)) - e.pageY;
		var numSmallest = Math.min(numTop, numLeft, numRight, numBottom);
		switch(numSmallest) {
			case numTop:
				whichSide = "Top";
				$(this).children('.slideInfo').css({'top':'-100%','left':0});
				$(this).children('.slideInfo').animate({'top':"0"},animationSpeed);
				break;
			case numLeft:
				whichSide = "Left";
				$(this).children('.slideInfo').css({'top':0,'left':'-100%'});
				$(this).children('.slideInfo').animate({'left':"0"},animationSpeed);
				break;
			case numRight:
				whichSide = "Right";
				$(this).children('.slideInfo').css({'top':0,'left':'+100%'});
				$(this).children('.slideInfo').animate({'left':"0"},animationSpeed);
				break;
			case numBottom:
				whichSide = "Bottom";
				$(this).children('.slideInfo').css({'top':'+100%','left':0});
				$(this).children('.slideInfo').animate({'top':"0"},animationSpeed);
				break;
		}
	}, function(e) {
		var whichSide = "unknown";
		if(e.offsetX <= 0) {
			whichSide = "Left";
			$(this).children('.slideInfo').animate({'left':"-110%"},animationSpeed);
		}else if(e.offsetY <= 0) {
			whichSide = "Top";
			$(this).children('.slideInfo').animate({'top':"-110%"},animationSpeed);
		}else if(e.offsetY > 0 && e.offsetX > 0 && (Math.abs($(this).height() - e.offsetY) < Math.abs($(this).width() - e.offsetX))) {
		   whichSide = "Bottom";
			$(this).children('.slideInfo').animate({'top':"+110%"},animationSpeed);
		}else if(e.offsetY > 0 && e.offsetX > 0 && (Math.abs($(this).height() - e.offsetY) > Math.abs($(this).width() - e.offsetX))) {
		   whichSide = "Right";
			$(this).children('.slideInfo').animate({'left':"+110%"},animationSpeed);
		}
	});
});