function carica(){
    //true = nascondo | false = non nascondo
    //3 domande visibili
    document.getElementById("Form1").hidden = true;
    document.getElementById("btn1").hidden = true;

    document.getElementById("Form2").hidden = true;
    document.getElementById("btn2").hidden = true;

    //immagine
    document.getElementById("divImg").hidden = false;

}

function carica1(){
    document.getElementById("Form1").hidden = false;
    document.getElementById("btn1").hidden = false;

    document.getElementById("Form2").hidden = true;
    document.getElementById("btn2").hidden = true;

    //immagine
    document.getElementById("divImg").hidden = true;
}


//metodo per sommare gli elementi
function sommaElementi(){
    var n1 = parseInt(document.getElementById("Range1").value);
    var n2 = parseInt(document.getElementById("Range2").value);
    var n3 = parseInt(document.getElementById("Range3").value);

    var sum = n1 + n2 + n3;
    return sum;
}

//metodo per lanciare le domande sulla pagina
function controllo(){
    document.getElementById("Form1").hidden = true;
    document.getElementById("btn1").hidden = true;
    document.getElementById("Form2").hidden = false;
    document.getElementById("btn2").hidden = false;
}

function controllo1(){
    //prendiamo la somma
    var sommaRange = parseInt(sommaElementi());
    var array1 = ["Mercurio", "Venere", "Marte","Giove", "Urano", "Nettuno", "Saturno"];
    var array3 = [];
    var x = 0;

    var n4 = parseInt(document.getElementById("Range4").value);
    var n5 = parseInt(document.getElementById("Range5").value);
    var n6 = parseInt(document.getElementById("Range6").value);
    var n7 = parseInt(document.getElementById("Range7").value);
    var n8 = parseInt(document.getElementById("Range8").value);
    var n9 = parseInt(document.getElementById("Range9").value);
    var n10 = parseInt(document.getElementById("Range10").value);

    // document.write("Questo è l'array PRIMA dall'if " + array1);

    if(sommaRange < 2){
        array1.splice(0,3, "PianetaEliminato", "PianetaEliminato", "PianetaEliminato");
    }

    if(sommaRange > 2){
        array1.splice(3,4, "PianetaEliminato", "PianetaEliminato", "PianetaEliminato","PianetaEliminato");
    }

    if(n4 > 0){
        array1.splice(0,1, "PianetaEliminato");
    }

    if(n5 > 0){
        array1.splice(1,1, "PianetaEliminato");
    }

    if(n6 > 0){
        array1.splice(2,1, "PianetaEliminato");
    }

    if(n7 < 0){
        array1.splice(3,1, "PianetaEliminato");
    }

    if(n8 < 0){
        array1.splice(4,1, "PianetaEliminato");
    }

    if(n9 < 0){
        array1.splice(5,1, "PianetaEliminato");
    }

    if(n10 < 0){
        array1.splice(6,1, "PianetaEliminato");
    }

    for(var i = 0; i < array1.length; i++){
        if(array1[i] != "PianetaEliminato"){
            x = parseInt(i);
            array3.push(x);
        }
    }

    // document.write("Array DOPO controllo ciclo " + array1);
    // document.write("Array PUSH controllo ciclo " + array3);
    //var array1 = ["Mercurio", "Venere", "Marte","Giove", "Urano", "Nettuno", "Saturno"];

    //controllo degli indici
    var lunghezzaArray3 = array3.length - 1;
    //creo numero random
    var indiceRandom = Math.floor(Math.random() * lunghezzaArray3);
    //mi salvo il pianeta che si trova alla posizione dell'indice random creato
    var elementoP = array3[indiceRandom];
    var planet = array1[elementoP];
    // document.write("Elemento in posizione ELEMENTO_P " + planet);
    //casto
    var varLink = planet + ".html";

    var varL = array3.length;
    if(varL <= 0){
        window.location.href = "Terra.html";
    } else {
        window.location.href = varLink;
    }
}

/* 
COSA MANCA
-Home con sole che fa partire quiz == fatto
-contatti nel footer == DA FARE
-modificare la rencensione negativa == fatto
-collegare la documentazione == DA FARE
-collegare alla home il logo == fatto
-collegare alla home il bottone == c'è già la home
-aggiungere scritta sopra al sole START QUIZ == DA FARE
*/
