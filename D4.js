/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area (l1, l2){
    return l1*l2
}


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
let num1=20
let num2=20
function crazySum(num1,num2) {
    if (num1 === num2) 
        {
        return (num1 + num2)*3
    }
else {
return num1+num2
}
}
console.log(crazySum(num1,num2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff (num2){
    if (num2 > 19) {
        return Math.abs(num2-19)*3
    }
    else {
    return Math.abs(num2 - 19)
}
}
console.log (crazyDiff(num2))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
let n = 4
function boundary (n) {
    return (n>20 && n<=100 || n===400 )
}
console.log (boundary(n))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify (stringa){
    if (stringa.startsWith ("EPICODE")){
        return stringa
    } 
    else{
        return  "EPICODE" + stringa
    }
}


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
 function check3and7 (num)
{
    return Math.abs(num) %3 ===0 || Math.abs (num) %7 ===0
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


function reverseString (stringa) {
    return stringa.split.revers().join
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst (stringa) {
    return stringa.char.toUpperCasa
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString (stringa) {

}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom (n) {

}
