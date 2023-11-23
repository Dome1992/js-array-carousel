// variabile per dichiarare il numero delle immagini
var n_img = 5;

// variabile per indicare l'immagine corrente, ovvero la prima 
var corrente = 1;


function succ( ) {
    // nella funzione scrivo il codice e voglio che "variabile correnti" aumenti di uno, quindi "corrente++;"
    corrente++;
    // se la variabile "corrente" supera, quindi è maggiore di numero immagini "n_img=5", viene riportato ad 1, quindi "corrente=1"
    if(corrente>n_img) {
        corrente=1;
    }
    
    for( let i = 5; i > 0; i--) {
        //Inizia con i uguale a 5, e con "i--" il ciclo decresce fino ad arrivare ad i uguale a 1.
        document. querySelector("#img_slider :nth-child("+ i +")"). style.display = "none";

    }
    document. querySelector("#img_slider :nth-child("+ corrente +")"). style.display = "block";
}


function prec( ) {
    // nella funzione scrivo il codice e voglio che "variabile correnti" diminuisca di uno, quindi "corrente--;"
    corrente--;

    if(corrente == 0) {
        corrente= n_img;
    }

    for( let i = 5; i > 0; i--) {
        document. querySelector("#img_slider :nth-child("+ i +")"). style.display = "none";

    }
    document. querySelector("#img_slider :nth-child("+ corrente +")"). style.display = "block";

}
