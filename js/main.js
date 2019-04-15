$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $(".navbar").addClass("navbarShadow");
      } else {
        $(".navbar").removeClass("navbarShadow");
      }
    });
  })

  /****Estoque - Materiais de Escritório ****/
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



  /****Estoque - Produtos Higiênicos ****/
  function btnPapelHigienico()
  {
    document.getElementById('imgCardImgProdHigienicos').src = "img/estoque_papel_higienico.jpg"
};

function btnPapelToalha()
{
  document.getElementById('imgCardImgProdHigienicos').src = "img/estoque_papel_toalha.jpg"
};

function btnAlcoolEmGel()
{
  document.getElementById('imgCardImgProdHigienicos').src = "img/estoque_alcool_em_gel.jpg"
};


  /****Estoque - Alimentos ****/
  function btnCafe()
  {
    document.getElementById('imgCardImgAlimentos').src = "img/estoque_cafe.jpg"
};

function btnAcucar()
{
  document.getElementById('imgCardImgAlimentos').src = "img/estoque_acucar.jpg"
};

function btnSal()
{
  document.getElementById('imgCardImgAlimentos').src = "img/estoque_sal.jpg"
};
