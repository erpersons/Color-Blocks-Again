console.log('test');
$(document).ready(onReady);

function onReady() {
    $('.color-button').on('click', onClick);
 // end onReady function
//counter
$('span').data('count', 0);

function onClick() {
    var color = $(this).data('color');
    var newBlock = $('<div>').addClass('color-cube').addClass($(this).data('color'));
$('.container').append(newBlock);
$('#' + color).data('count', $('#' + color).data('count') + 1);

$('#' + color).text($('#' + color).data('count'));
  
 
} //end onClick function
} //end onReady function