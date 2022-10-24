const suma=(numero1,numero2)=>{
    //const numero1=4, numero2=5;

    let operacion = numero1 + numero2;
    
    console.log(`la suma de los numeros ${numero1} + ${numero2} es de ${operacion}`)
    
}

const resta=(numero1,numero2)=>{
    //const numero1=4, numero2=5;

    let operacion = numero1 - numero2;
    
    console.log(`la resta de los numeros ${numero1} - ${numero2} es de ${operacion}`)
    
}

const multiplicar=(numero1,numero2)=>{
    //const numero1=4, numero2=5;

    let operacion = numero1 * numero2;
    
    console.log(`la multiplicacion de los numeros ${numero1} x ${numero2} es de ${operacion}`)
    
}

const dividir=(numero1,numero2)=>{
    //const numero1=4, numero2=5;

    let operacion = numero1 / numero2;
    
    console.log(`la division de los numeros ${numero1} / ${numero2} es de ${operacion}`)
    
}

/*exports.suma=suma
exports.resta=resta
exports.multiplicar=multiplicar
exports.dividir=dividir*/

const operaciones={}

operaciones.suma=suma
operaciones.resta=resta
operaciones.multiplicar=multiplicar
operaciones.dividir=dividir

module.exports=operaciones