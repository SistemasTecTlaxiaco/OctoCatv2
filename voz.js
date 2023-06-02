window.contador=0;          
window.contadorcubogrande=0;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var arreglovoz = [  
      'hola octocat',
    'gracias octocat',
    'eso es todo por ahora',
    'octocat cuando te crearon',
    'octocat cuentanos tu historia',
    'octocat cuentanos sobre github',
    'octocat como funciona',
    'gracias octocat',
    'eso es todo por ahora',
    'octocat gira',
    'octocat para',
];

var grammar = '#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = ' + arreglovoz.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;           
recognition.lang = 'es-MX';        
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#text');  
//var hints = document.querySelector('.hints');  
var vozHTML= '';
arreglovoz.forEach(function(v, i, a){
console.log(v, i);

});
document.onkeydown = function() {
recognition.start();
console.log('Estoy listo para escuchar.');

}       

recognition.onresult = function(event) {            
var voz = event.results[0][0].transcript;
//diagnostic.textContent = 'Dijiste: ' + voz + '.';           
diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
//diagnostic.textContent = 'Dijiste: ' + voz + '.';
bg = voz;
var bg = document.querySelector('text');






//VISUALIZO EN CONSOLA
console.log(bg);
console.log(voz);

function randD(array){
var rand= Math.random()*array.length|0;
var result=array[rand];
return result;
}

// Interacciones iniciales
if (voz === 'hola octocat') 
{
      console.log("Hola, estas saludando!");
      let utterance = new SpeechSynthesisUtterance('Hola amigo, bienvenido. Estoy listo. Te escucho')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}


if (voz === 'gracias octocat')
{
      console.log("Estas dando las gracias");
      let utterance = new SpeechSynthesisUtterance('De nada amigo, quieres que te ayude con algo mas')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}



if (voz === 'eso es todo por ahora') 
{
      console.log("Hola, estas saludando!");
      let utterance = new SpeechSynthesisUtterance('De nada amigo, siempre es un placer ayudarte, que tengas un buen dia.')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}
//falta cambiarle
if (voz === 'octocat cuando te crearon')
{
      console.log("octocat cuenta su creacion");
      let utterance = new SpeechSynthesisUtterance(' El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc. Anteriormente era conocida como Logical Awesome LLC. El código de los proyectos alojados en GitHub se almacena generalmente de forma pública.');
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}

if (voz === 'octocat cuentanos tu historia') 
{
      console.log("octocat, cuenta su existencia");
      let utterance = new SpeechSynthesisUtterance('La verdad es que no hay una buena historia detrás, Tom Preston-Werner estaba buscando una imagen divertida para nuestra página 404 y encontró el Octocat en iStockphoto y compró la licencia para uso limitado por uno 50 dolares.');
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}

if (voz === 'octocat cuentanos sobre github')
{
      console.log("octocat cuenta sobre github");
      let utterance = new SpeechSynthesisUtterance('GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. ')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}



//interaccion con RA         
if (voz === 'octocat gira') 
{
      console.log("Cuidado que estoy girando");
      var es = document.querySelector('#avatar');
      es.setAttribute("src", 'https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/LUNA.glb?v=1653087819401');
      es.setAttribute("scale", '.10 .10 .10');
      el.setAttribute("position", '0 0 0');
      el.setAttribute(animation, {'property': position,'to': {x: 1, y: 1, z: 1}, 'startEvents': 'startanim001'});
}

if (voz === 'octocat para') 
    {
      console.log("octocat se detuvo");
      var el = document.querySelector('#avatar');
      el.setAttribute("src", 'https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/octocatgit.glb?v=1648149096491');
      el.setAttribute("scale", '0.1 0.1 0.1');
      el.setAttribute("position", '0 -0.25 0');
      el.setAttribute("rotation", '0 0 0');
      el.setAttribute("visible", 'true');

      let utterance = new SpeechSynthesisUtterance('Enseguida amigo. aunque ya me estoy cansando.')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }


console.log('Confidence: ' + event.results[0][0].confidence);
}


recognition.onspeechend = function() {
recognition.stop();
}

recognition.onnomatch = function(event) {
diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
//diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
}

recognition.onerror = function(event) {
diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
//diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
}
//fin
