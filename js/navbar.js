
var a = $("#section2").offset();

$(window).scroll(function(){
    if($(window).scrollTop() + $('#navbar').height() > a.top) {   

    	$('#navbar').css('background', 'blue');
    } else {
    	$('#navbar').css('background', 'green');
    }
});