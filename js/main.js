$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $(".navbar").addClass("navbarShadow");
      } else {
        $(".navbar").removeClass("navbarShadow");
      }
    });
  })

  /****Estoque ****/
  function btnCaneta()
  {
    document.getElementById('imgCardImgMatEscritorio').src = "img/estoque_caneta.jpg"
};

function btnLapis()
{
  document.getElementById('imgCardImgMatEscritorio').src = "img/estoque_lapis.jpg"
};

function btnPostIt()
{
  document.getElementById('imgCardImgMatEscritorio').src = "img/estoque_post_it.jpg"
};


