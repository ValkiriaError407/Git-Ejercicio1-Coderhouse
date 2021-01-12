/*Desafio 1 Js - Solicita al usuario datos y realiza operacionies sobre ellos*/
var nombre = prompt("Escribi tu nombre :)");
var edad = prompt("Ahora tu edad");
var genero = prompt("Decinos como te identificás (o no): mujer, hombre, nope");

alert ("Hola" + " " + nombre + " " + ", ahora sabemos que tenés" + " " + edad + " " + "años y que sos" + " " + genero);

alert ("En realidad eso no nos importa, solo queríamos poner un dato más");

var unDivagueMas = prompt("Ahora dinos tu color favorito y te diremos que tan lindo eres del 1 al 10");

function coloresPrejuiciosos (unDivagueMas) {
    var salida = 0;
    if (unDivagueMas == "violeta") {
        salida = 10;
    } else if (unDivagueMas == "amarillo") {
        salida = 10;
    } else if (unDivagueMas == "verde") {
        salida = 10;
    } else if (unDivagueMas == "azul") {
        salida = 10;
    } else if (unDivagueMas == "rosado") {
        salida = 8;
    } else if (unDivagueMas == "rojo") {
        salida = 10;
    } else if (unDivagueMas == "negro") {
        salida = 8;
    } else if (unDivagueMas =="turquesa") {
        salida = 8;
    } else if (unDivagueMas =="celeste") {
        salida = 8;
    } else {
        salida = (5 + " :(");
    }
    return salida;
}

var aDevolver = coloresPrejuiciosos (unDivagueMas);

alert ("Tu nivel de belleza es de" + " " + aDevolver);
