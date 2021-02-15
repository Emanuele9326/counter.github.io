function incremento(event){

let valore=document.getElementById("numero").getAttribute("value");

let numero;
numero=parseInt(valore);
numero++;

document.getElementById("numero").setAttribute("value",numero);
}


function decremento(event){

let valore=document.getElementById("numero").getAttribute("value");
let numero;
numero=parseInt(valore);

if(valore>0){      //esegue il controllo del valore del counter.Sè il valore=0 il decremento non viene eseguito
 numero--;
};
document.getElementById("numero").setAttribute("value",numero);
}

function reset(event){
document.getElementById("numero").setAttribute("value",0);
}

document.getElementById("incremento").addEventListener("click",incremento);
document.getElementById("decremento").addEventListener("click",decremento);
document.getElementById("Reset").addEventListener("click",reset);
