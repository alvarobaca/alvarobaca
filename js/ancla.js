  //Cuando cargue la página completamente
  $(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data("ancla");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 3000);
    });
  });




  $(document).ready(main);

  var contador = 1;
  
  function main(){
      $('.menu_bar').click(function(){
          // $('nav').toggle(); 
  
          if(contador == 1){
              $('nav').animate({
                  left: '0'
              });
              contador = 0;
          } else {
              contador = 1;
              $('nav').animate({
                  left: '-100%'
              });
          }
  
      });
  
  };


  const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

