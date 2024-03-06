## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
- ¿Cuándo me sirve usar una función en mi código?
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de coidgo u otro depende de alguna codición o validación,

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF( else y else if), Switch 

 El condicional if () nos permite hacer validaciones completamente distintas (si asi queremos) en cada vakudacupin o cindicional, En cambio en el switch todos los cases se comprar con la misma variable o condición que definimos en el switch 



- ¿Puedo combinar funciones y condicionales?
Si. las funcionas pueden encapsular cualquier bloque de código, incluyendo condicionales

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
if(tipoDeSuscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
    } else if(tipoDeSuscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    } else if (tipoDeSuscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
    } else if (tipoDeSuscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
    } 
### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```
function findSubscriptionType(subscription){
    if (typesOfSubscriptions[subscription]){
        console.log(typesOfSubscriptions[subscription])
        return;
    }
    console.warn('Ese tipo de suscripción no existe');
}
```


function findSubscriptionType(subscription){
    if(subscription == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if(subscription == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
        return;
    } if (subscription == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
        return;
    } if (subscription == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
        return;
    } 
    console.warn('Ese Tipo de suscripción no existe');


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    Forma de ejecutar un código hasta que se cumpla cierta condición 
- ¿Qué tipos de ciclos existen en JavaScript?

    while, so while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

    en cuanto la valicación de nuestros condicionales nunca se cumple y termina dañando la aplicación

- ¿Puedo mezclar ciclos y condicionales?

    Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas ciclos,

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i>=2){
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2+2')
    respuesta = pregunta;

}


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos 
```

const array = [1, 'haha', true , false];

```
- ¿Qué es un objeto?
 
 Es una lista de elementos, pero cada elemento tiene un nombre clave, 

```

 const obj={
    nombre: 'Fulanito',
    edad: 28,
    comidasFavoritas: ['Pollo frito', 'vegetales']
 };

```

- ¿Cuándo es mejor usar objetos o arrays?

    Arrays cuando lo que haremos en un elemento lo mismo que entodos los demás (las reglas se puede incumplir) mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  

  Si. Los arrays pueden guardar objetos y los objectos pueden guardar aarays entre sus propiedades  



### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

    function printFirstElementArray (arr) {
     console.log(arr[0])  
    }

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```

function printArray(arr){
    for (let index = 0; index <arr.length; index++) {
        console.log(arr[index]); 
    }
}
 
```
### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```

const arr = Object.values(obj);

function printObject(arr){
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
```