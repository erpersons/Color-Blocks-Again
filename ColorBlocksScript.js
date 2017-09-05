$(document).ready(onReady);

 var rCounter = 0;
 var yCounter = 0;
 var gCounter = 0; 
 var bCounter = 0; 

function onReady(){
    console.log("JS ready!");
    //event listeners
    $('.color-button').on('click', createCube);
} //end onReady function
function createCube(){
    var $color = $(this).data('color');
$('.container').append($('<div class = "color-cube"></div>'));
$('.color-cube').last().addClass($color);

console.log($color);

if ($color === 'red') {
      rCounter++
    $('#red').html(rCounter);
  
} else if($color === 'blue') {
    bCounter++
    $('#blue').html(rCounter);
} else if ($color === 'yellow') {
    yCounter ++
    $('#yellow').html(yCounter);
} else if ($color === 'green') {
    gCounter ++
    $('#green').html(gCounter);
}
//console.log(createCube);

} //end createCube function
