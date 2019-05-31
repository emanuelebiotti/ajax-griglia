$(document).ready(function(){

  var source   = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);

  for (i = 0; i<36; i++){
    var context = {};
    var html = template(context);
    $('.container').append(html)
  }

  var cliccati = [];

  $('.quadratino').click(function(){
  var questoquadrato = $(this);

  if (!cliccati.includes(questoquadrato.index())) {

      $.ajax({
        'url': 'https://www.boolean.careers/api/random/int',
        'method': 'GET',
        'success': function(numeri){

          questoquadrato.text(numeri.response);

            if (numeri.response <=5) {
              questoquadrato.css('background-color', 'yellow');
            } else {
              questoquadrato.css('background-color', 'green')
            }

          cliccati.push(questoquadrato.index())
        },
        'error': function(){
          alert('errore');
        }
      });
    }
  })


});
