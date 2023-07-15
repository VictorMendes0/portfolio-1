$(document).ready(function () {
  $('.carousel').height($(window).height());

  // Adiciona um evento de clique aos botões da navegação
  $('.nav-link').click(function() {
    // Remove a classe "show" de todas as abas
    $('.tab-pane').removeClass('show');

    // Adiciona a classe "d-none" a todas as abas
    $('.tab-pane').addClass('d-none');

    // Adiciona a classe "show" à aba selecionada
    $($(this).data('bs-target')).addClass('show');

    // Remove a classe "d-none" da aba selecionada
    $($(this).data('bs-target')).removeClass('d-none');
  });
});

$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


