document.addEventListener('DOMContentLoaded', function() {
    var voiceList = document.createElement('select');
    var bienvenida = 'Hola, bienvenido al sistema web por habla. Para poder utilizar este modo debes identificar las teclas F y J; Coloca tus manos sobre el teclado y con tus dedos indices, busca dos teclas que tengan un relieve. La del lado izquierdo es la F, la cual te permite pausar el texto, y la del lado derecho es la J, la que te permitirá seguir escuchando.';

    var tts = window.speechSynthesis;
    var voices = [];

    getVoices();

    if (speechSynthesis !== undefined) {
        speechSynthesis.onvoiceschanged = getVoices;
    }


    function getVoices() {
        voices = tts.getVoices();
        voiceList.innerHTML = '';
        voices.forEach((voice) => {
            var listItem = document.createElement('option');
            listItem.textContent = voice.name;
            listItem.setAttribute('data-lang', voice.lang);
            listItem.setAttribute('data-name', voice.name);
            voiceList.appendChild(listItem);
        });

        voiceList.selectedIndex = 0;
    }


    //btnSpeak.addEventListener('click', () => {
        
    //});
    window.addEventListener('keydown', (event) => {
        if(event.key == ' ') {
            var toSpeak = new SpeechSynthesisUtterance(bienvenida);
            voices.forEach((voice) => {
                if (voice.name == 'Juan') {
                    toSpeak.voice = voice;
                }
            });
            tts.speak(toSpeak);
        }
    })
    
});