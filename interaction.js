$(function () {
    $('.create').submit(function (e) {
        var texto = $('#texto-twit').val();
        var nombre = $('#name').val();

        // var tweet = crearMiTweet(img, nombre, texto)

        var nuevo = $('.twit').eq(0).clone();
        // tweet.appendTo('#twits');
        nuevo.appendTo('#twits');
        nuevo.find('.profile_name h2').val(nombre);
        nuevo.find('.twit__text').text(texto);

        $('#texto-twit').val('');
        e.preventDefault();
        e.stopPropagation();
    });

    $('#twits').on("click", ".twit__like", function () {
        event.stopPropagation();
        event.preventDefault();
        $(this).toggleClass('twit__like--red');
    });

    $('#twits').on("click", ".twit__delete", function () {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
    });

});

// function crearMiTweet(img, nombre, texto) {
//     var html = '<li class="twit">';

//     html +=            '<img src="' + img +'" alt="" class="twit__image">'
//     html +=            <div class="profile_name">
//                     <h2>nombre</h2>
//                     let html +=            </div>
//                 <p class="twit__text">
//                     texto
//                 </p>
//                 <hr>
//                 <div class="twit__like twit__like--red">
//                     <i class="fas fa-heart"></i>
//                 </div>
//                 <div class="like__result">
//                 </div>
//                 <button class="twit__delete">
//                     Delete
//                 </button>
//             </li>

//     return html;
// }