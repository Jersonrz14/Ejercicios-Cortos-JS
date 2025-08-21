//1
//1.1

// var nombre = "Jerson";

// console.log(nombre);

// nombre = "Steven";

// console.log(nombre);

//1.2

// const nombre = "Alan";

// console.log(nombre);

// nombre = "Leidy";

// console.log(nombre);

// Const es una variable constante, por lo tanto es una variable que no se puede cambiar

//1.3

// if(false) {
//     let edad = 30; 
// }

// console.log(edad);

//La variable let solo existe dentro del if, y como nunca se cumple el if la variable edad nunca es declarada

//2
//2.1

// let nombre = "Jerson";

// console.log(typeof nombre);

// let numero = 3;

// console.log(typeof numero);

// let vf = false; 

// console.log(typeof vf);

// let nulo = null;

// console.log(typeof nulo);

// let nose = undefined;

// console.log(typeof nose);


//2.2

// const persona = {
//     nombre: "Jerson",
//     edad: 19
// }; 

// const hobbies = ["Futbol", "Dibujar", "Series"];

// console.log(typeof persona);
// console.log(typeof hobbies); //Ambos son objetos

//3
//3.1

// const numero1 = 10; 
// const numero2 = "5";

// console.log(numero1+numero2); // El 10 se convirtio en una cadena de texto y luego se concatenan ambos
// console.log(numero1*numero2); // El * no se usa para concatenar, por la tanto volvio el "5" en un numero para poder multiplicar

//3.2

// let valor = 25;

// let String_De_Numero = String(valor);

// console.log(String_De_Numero);


// let String_De_Numero_2 = "100";

// let numero_De_String = Number(String_De_Numero_2);

// console.log(numero_De_String);


// let vacio = "";
// let no_Vacio = "hola";

// let boolean1 = Boolean(vacio);
// let boolean2 = Boolean(no_Vacio);

// console.log(`El string vacio ("") es ${boolean1}`);
// console.log(`El string "hola" es ${boolean2}`);


//4
//4.1

// let comparacion_Estricta = 10 === "10";

// console.log (`10 === "10" es: ${comparacion_Estricta}`); //Compara el valor y el tipo de dato

// let comparacion_No_Estricta = 10 == "10";

// console.log (`10 == "10" es: ${comparacion_No_Estricta}`); //Solo compara el valor


//4.2

// let valor = 5; 

// if (valor % 2 === 0) {
//     console.log(`El numero ${valor} es par.`);
// } else{
//     console.log(`El numero ${valor} es impar. `);
// }

//4.3

// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

//4.4

// try{
//     console.log("Iniciando la ejecución del bloque try...");

//     throw new Error("Algo salio mal");

//     console.log("Esta linea no se ejecutara.");} catch(error){
//         console.error("Hemos detectado un error:", error.message);
//         console.error("El error original es: ", error);
//     }

// console.log("El programa ha terminado su ejecución");

//5
//5.1

// function multiplicar(a, b){
//     return a * b;
// }

// let resultado = multiplicar(7, 9);

// console.log("El resultado de la multiplicación es: ", resultado);

//5.2

// const multiplicar = (a, b) => a * b;

// console.log(multiplicar(7, 9));

//5.3

// const saludar = () => "¡Hola a todos!";

// console.log(saludar());

//6
//6.1

// const Variable_Global = "Soy una variable global.";

// function access_Variables(){
//     const Variable_Local = "Soy una variable local.";

//     console.log("Dentro de la función:");
//     console.log(Variable_Global);
//     console.log(Variable_Local);

// }

// access_Variables();

// console.log("\nFuera de la función: ");
// console.log(Variable_Global);//Una variable declarada fuera de cualquier función tiene un ámbito global. Por eso desde cualquier parte del código, ya sea dentro o fuera de funciones funciona. 

// try{
//     console.log(Variable_Local); //Solo se puede acceder a ella dentro de la función donde fue definida. Una vez que la función termina su ejecución, la variable local deja de existir.
// } catch (error){
//     console.log("Error:", error.message);
//     console.log("No se puede acceder a la variable local fuera de la función.");

// }

//6.2

// const coche = {
//     marca: "Mazda",

//     mostrar_marca: function(){
//         console.log(`La marca del coche es ${this.marca}.`); //This hace referencia al objeto que esta llamando al metodo
//     }
// };

// coche.mostrar_marca();

//7
//7.1

// let frutas = ["Manzana", "Naranja"];

// console.log("Array inicial: ", frutas);

// frutas.push("Banano");

// console.log("Despues de push(): ", frutas);

// frutas.pop();

// console.log("Despues de pop(): ", frutas);

//7.2

// const numeros = [1, 2, 3];
// console.log("Array original: ", numeros);

// const numeros_multiplicados = numeros.map(function(numero){
//     return numero * 2;
// }); 

// console.log("Array despues de map(): ", numeros_multiplicados);

// const numeros_MayoresA1 = numeros.filter(function(numero){
//     return numero > 1;
// });

// console.log("Array despues de filter(): ", numeros_MayoresA1);

//7.3

// const frutas = ["Manzana", "Banana", "Naranja"];

// console.log("--- Iterando con Foreach ---");
// frutas.forEach(fruta =>{
//     console.log(fruta);
// });

// console.log("\n--- Usando Find() ---");

// const fruta_encontrada = frutas.find(fruta => fruta === "Banana");
// console.log("La fruta encontrada es: ", fruta_encontrada);

// console.log("\n--- Usando Findindex ---");

// const indice_manzana = frutas.findIndex(fruta => fruta === "Manzana");
// console.log("El indice de Manzana es: ", indice_manzana);

//8
//8.1

// const libro = {
//     titulo: "Satanas",
//     autor: "Mario Mendoza",

//     mostrarinfo: function(){
//         console.log(`El titulo del libro es "${this.titulo}" y su autor es ${this.autor}.`);
//     }
// };

// libro.mostrarinfo();

//8.2

// class animal {
//     constructor(nombre){
//         this.nombre = nombre;
//     }

//     saludar(){
//         return `Hola, soy ${this.nombre}`;
//     }
// }

// const perro = new animal("Chopper");

// console.log(perro.saludar());

//8.3

class animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        return `Hola soy ${this.nombre}.`;
    }
}

class perro extends animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    saludar(){
        return `${super.saludar()} y soy un perro de raza ${this.raza}.`;
    }
}

const miperro = new perro ("Chopper", "Chandoso");

console.log(miperro.saludar());
