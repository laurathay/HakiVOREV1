$(document).ready(function() {
    const newLocation = 'justeUnMoment.html';
    function newPage() {
        window.location = newLocation 
    }
    // On affiche le corps de la page en fadeIn
    $('body').fadeIn(1000);
    window.setTimeout(
        // Cette fonction sera appelée à la fin du temps que tu donnes (ici 1000 millisecondes)
        function() {
            // On fadeout la page actuelle et on execute la fonction newpage à la fin du fadeout
            $('body').fadeOut(1000, newpage);
        },
        1000
    );
});


// 3eme essaie
// $(document).ready(function() {
//     const newLocation = 'justeUnMoment.html';
//     function newPage() {
//         window.location = newLocation
//     }
//     // On affiche le corps de la page en fadeIn
//     $('body').fadeIn(1000);
//     window.setTimeout(
//         // Cette fonction sera appelée à la fin du temps que tu donnes (ici 1000 millisecondes)
//         function() {
//             // On fadeout la page actuelle et on execute la fonction newpage à la fin du fadeout
//             $('body').fadeOut(1000, newpage);
//         },
//         1000
//     );
// });



// 2eme essaie
// $(document.body).ready(function() {
// $('body'.justeUnMoment.html).css('display', 'none');
// $('body'.index.html).fadeOut(1000);
//
// $('.link').setTimeout(function(appear) {
// event.preventDefault();
// newLocation = this.justeUnMoment.html;
// $('body').fadeIn(1000, newpage);
// });
//
//
//
// function newpage() {
// window.location = newLocation;
// }
// });

// de base
//$(document).ready(function() {
// $('body').css('display', 'none');
// $('body').fadeIn(1000);
// $('.link').click(function(event) {
// event.preventDefault();
// newLocation = this.href;
// $('body').fadeOut(1000, newpage);
// });
//
//
//
// function newpage() {
// window.location = newLocation;
// }
// });
