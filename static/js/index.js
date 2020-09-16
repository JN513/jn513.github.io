$(document).ready(function() {
    // Exibe ou oculta o botão
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.volteaotopo').fadeIn(200);
        } else {
            $('.volteaotopo').fadeOut(200);
        }
    });

    // Faz animação para subir
    $('.volteaotopo').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })
});

