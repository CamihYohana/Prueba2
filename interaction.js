$(function () {
    $('.create').submit(function (e) {
        var texto = $('#texto-twit').val();
        var nombre = $('#name').val();

        var nuevo = $('.twit').eq(0).clone();
        nuevo.appendTo('.twits');
        nuevo.find('.profile_name h2').text(nombre);
        nuevo.find('.twit__text').text(texto);

        $(this).find('input').val('');
        e.preventDefault();
        e.stopPropagation();
    });
    $('.twit__like').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).toggleClass('twit__like--red');
    });
    $('#twit__delete').click(function (e) {
        $(this).parent().fadeOut();
    });

});