// h1 {color: red}
//. parraf {...}
// #pid {...}

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result');

btn.addEventListener('submit', addInputValues()); // with the function doesnt have the ()? 
//name of the event, function




function addInputValues(event){
    //event.preventDefault();
    const num1 = parseInt(input1.value)
    const num2 = parseInt(input2.value)
    const result = num1 + num2;
    
    //console.log(result);  
    pResult.innerText = "Result :" + result;
} 


/* const p = document.querySelector('q');
const parraf = document.querySelector('parraf');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
 */


//console.log(h1.getAttribute('screen'));
//h1.setAttribute('class', 'rojo');

//h1.classList.add('green');
//h1.classList.remove('coope');
//h1.classList.toggle();
//h1.classList.contains();

//input.value = "666"

//const img = document.createElement('img');
//img.setAttribute('src','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2018%2F11%2F10%2Fautossell%2F23satan%2F09-SATANICTEMPLE-superJumbo.jpg%3Fquality%3D90%26auto%3Dwebp&f=1&nofb=1&ipt=53a85508a6545fd67801c145395bd16597f60af10e922fc0f895739df9880d5f&ipo=images');
//console.log(img);

//pid.append(img); 
