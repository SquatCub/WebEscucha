alert('Opcion WebEscucha activada');
    var titulos = document.querySelectorAll('h1');
    var parrafos = document.querySelectorAll('p');
    //-----------------------------------------------
    var voiceList = document.createElement('select');
    var bienvenida = 'Hola, bienvenido al sistema web por habla. Para poder utilizar este modo debes identificar las teclas F y J; Coloca tus manos sobre el teclado y con tus dedos indices, busca dos teclas que tengan un relieve. La del lado izquierdo es la F, la cual te permite pausar el texto, y la del lado derecho es la J, la que te permitirá seguir escuchando.';
    var izq = 'Haz presionado la tecla F';
    //var der = "Haz presionado la tecla J";
    var err = "Error!. Haz presionado una tecla incorrecta. Para volver a escuchar el mensaje de bienvenida. Presiona la tecla espacio";
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
        } else if(event.key == 'f') {
            var toSpeak = new SpeechSynthesisUtterance(izq);
            voices.forEach((voice) => {
                if (voice.name == 'Juan') {
                    toSpeak.voice = voice;
                }
            });
            tts.pause();
        } else if(event.key == 'p') {
            var toSpeak = new SpeechSynthesisUtterance(izq);
            voices.forEach((voice) => {
                if (voice.name == 'Juan') {
                    toSpeak.voice = voice;
                }
            });
            tts.resume();
        } else if(event.key == 'j') {
            var contenido = '';
            titulos.forEach((titulo)=> {
                contenido+= titulo.innerHTML;
            });
            parrafos.forEach((parrafo)=> {
                contenido+= parrafo.textContent;
            });
            var toSpeak = new SpeechSynthesisUtterance(contenido);
            voices.forEach((voice) => {
                if (voice.name == 'Juan') {
                    toSpeak.voice = voice;
                }
            });
            tts.speak(toSpeak);
        } else {
            var toSpeak = new SpeechSynthesisUtterance(err);
            voices.forEach((voice) => {
                if (voice.name == 'Juan') {
                    toSpeak.voice = voice;
                }
            });
            tts.speak(toSpeak);
        }
    });
