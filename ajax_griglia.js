$(document).ready(function(){

  $.ajax({
    'url': 'https://www.boolean.careers/api/random/int',
    'method': 'GET',
    'success': function(data){
      console.log(data.response);
    },
    'error': function() {
      alert('errore');
    }
  });



$('.quadrato').click(function(){
  var questoquadrato = $(this);
  console.log(questoquadrato);

    $.ajax({
      'url': 'https://www.boolean.careers/api/random/int',
      'method': 'GET',
      'success': function(data){
        questoquadrato.text(data.response);
        

      },
      'error': function() {
        alert('errore');
      }
    })


  });



});
