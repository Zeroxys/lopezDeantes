import "../css/index.css"
import "../main.html"
import "../serviciosl.html"
import "font-awesome/css/font-awesome.css"

// $('.btn-menu').click(function(event) {
//     $('.menu-des').css({'height' : alto});
//       if(!$('.menu-des').hasClass('abierto')){
//         $('.menu-des').slideToggle(400).addClass('abierto');
//         $('.btn-menu').css({
//           'background-image': 'url(img/close2.png)'
//         });
//        // $('.menu-des').animate({'right': 0}, 500).addClass('abierto');
//       }else{
//         $('.menu-des').slideToggle(400).removeClass('abierto');
//         $('.btn-menu').css({
//           'background-image': 'url(img/menu.png)'
//         });
//          // $('.menu-des').slideToggle(1200);
//       }
//   });

 $('nav').click(function(event) {
    if($('.menu-des').hasClass('abierto')){
        //$('.menu-des').animate({'right': '-50%'}, 500).removeClass('abierto');
        $('.menu-des').slideToggle(400).removeClass('abierto');
        $('.btn-menu').css({
          'background-image': 'url(img/menu.png)'
        });
      }
  });