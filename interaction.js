$(function () {
    $('.create').submit(function (e) {
        var texto = $('#texto-twit').val();
        var nombre = $('#name').val();
        var nuevo = $('.twit').eq(0).clone();
        //crearMiTwit.appendTo('#twits');
        //tweet.appendTo('#twits');
        nuevo.prependTo('#twits');
        nuevo.find('.profile_name h2').val(nombre);
        nuevo.find('.twit__text').text(texto);
        //nuevo.find('.image-selected').val(imag);
        $('#texto-twit').val('');
        //$('#twits').prepend(
        // '<li class="twit">'
        //     + '<img src="assets/02.jpg" alt="" class="twit__image">'
        //     + '<div class="profile_name">'
        //     + '<h2>'
        //     + nombre
        //     + '</h2>'
        //     + '</div>'
        //     + '<p class="twit__text">'
        //     + texto
        //     + '</p>'
        //     + '<hr>'
        //     + '<span class="fas fa-heart twit__like"> 0 </span>'
        //     + '<button class="twit__delete"> Delete </button>'
        //     + '</li>'
        // )
        e.preventDefault();
        e.stopPropagation();
    });

    $('#twits').on("click", ".twit__like", function () {
        event.stopPropagation();
        event.preventDefault();
        $(this).addClass('twit__like--red');
    });

    $('#twits').on("click", ".twit__delete", function () {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
        e.stopPropagation();
        e.preventDefault();
    });



    $('#twits').on("click", ".twit__like", function () {
        var contador = 0;
        contador = $(this).find('span').text();
        contador = parseInt(contador);
        contador = contador + 1;
        //contador++;
        $(this).find('span').text(contador);
        e.preventDefault();
        e.stopPropagation();
        // contador += 1;
    });
    //contador++;
    //contador = $('.like__result').text(contador);
    //contador = parseInt(contador);
    //contador = contador + 1;
    // $(this).html('<i>' + '' + contador + '</i>');
    // var contador = $('.twit__like'),
    //  count = 0;
    // contador.onClick = function () {
    //    count += 1;
    // };
    // });


});