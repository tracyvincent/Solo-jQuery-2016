$('document').ready(function(){

  var numRed = 0;
  var numYellow = 0;
  var numGreen = 0;
  var numBlue = 0;


$('button').on('click', function(){
  switch($(this).html()){
    case "Red":
      $('.container').append('<div class="color-cube red"></div>');
      $('#red').empty();
      numRed++;
      $('#red').append('Total red: ' + numRed);
      break;
    case "Yellow":
      $('.container').append('<div class="color-cube yellow"></div>');
      $('#yellow').empty();
      numYellow++;
      $('#yellow').append('Total yellow: ' + numYellow);
      break;
    case "Green":
      $('.container').append('<div class="color-cube green"></div>');
      $('#green').empty();
      numGreen++;
      $('#green').append('Total green: ' + numGreen);
      break;
    case "Blue":
      $('.container').append('<div class="color-cube blue"></div>');
      $('#blue').empty();
      numBlue++;
      $('#blue').append('Total blue: ' + numBlue);
      break;
  }

});

});
