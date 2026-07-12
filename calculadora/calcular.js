function sumar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    console.log(n1);
    console.log(n2);


    let suma = parseInt(n1) + parseInt(n2)
    
    // console.log(suma);
    document.getElementById("result").value = suma;
}

function restar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

     let resta = parseInt(n1) - parseInt(n2)

     document.getElementById("result").value = resta;
}

function multiplicar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

     let multiplicacion = parseInt(n1) * parseInt(n2)

     document.getElementById("result").value = multiplicacion;
}
function dividir(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

     let division = parseFloat(n1) / parseFloat(n2)

     document.getElementById("result").value = division;
}
