const quizData = [
    {
      pregunta: "¿Qué son las API Rest?",
      opciones: [
        "Un conjunto de reglas para diseñar bases de datos",
        "Un tipo de lenguaje de programación",
        "Un conjunto de herramientas de diseño web",
        "Un conjunto de reglas y convenciones para diseñar y acceder a servicios web en línea."
      ],
      respuestaCorrecta: 3,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Para qué sirven las API REST?",
      opciones: [
        "Para enviar correos electrónicos",
        "Para crear aplicaciones que se comuniquen a través de la web",
        "Para diseñar interfaces gráficas de usuario",
        "Para escribir código en lenguaje ensamblador"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué son los métodos HTTP?",
      opciones: [
        "Instrucciones para construir bases de datos",
        "Operaciones estándar para manipular recursos en la web",
        "Nuevas etiquetas para HTML",
        "Una forma de diseñar interfaces gráficas"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué método HTTP utilizamos para obtener información de un recurso?",
      opciones: [
        "POST",
        "GET",
        "PUT",
        "DELETE"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es JSON?",
      opciones: [
        "Un nuevo lenguaje de programación",
        "Un formato de texto sencillo para el intercambio de datos",
        "Un programa de edición de imágenes",
        "Un tipo de base de datos"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es Fetch?",
      opciones: [
        "Una herramienta para atrapar errores en el código",
        "Un formato de intercambio de datos",
        "Un lenguaje de programación",
        "Una herramienta para realizar solicitudes de red en aplicaciones web"
      ],
      respuestaCorrecta: 3,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es una 'request' o petición?",
      opciones: [
        "Una solicitud para comprar un producto en línea",
        "Una solicitud para enviar correos electrónicos",
        "Una solicitud para obtener datos o recursos de un servidor web",
        "Una solicitud para programar una reunión"
      ],
      respuestaCorrecta: 2,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es una 'response' o respuesta?",
      opciones: [
        "Una respuesta a una pregunta",
        "Una respuesta que se obtiene al realizar una solicitud a un servidor web",
        "Una respuesta automática de un sistema",
        "Una respuesta a un correo electrónico"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué atributo me indica el contenido o valor de un elemento HTML 'input'?",
      opciones: [
        "Content",
        "Text",
        "Value",
        "InputValue"
      ],
      respuestaCorrecta: 2,
      dificultad: "Media"
    },
    {
      pregunta: "¿Qué tipos de validaciones hemos realizado hasta ahora?",
      opciones: [
        "Validaciones de edad",
        "Validaciones de contenido multimedia",
        "Validaciones de entrada de usuario",
        "Validaciones con el atributo 'required' en HTML y condiciones en el script"
      ],
      respuestaCorrecta: 3,
      dificultad: "Media"
    },
    {
      pregunta: "¿Puedo indicar un patrón de ingreso determinado en un input?",
      opciones: [
        "No, no es posible",
        "Sí, si lo defino con el atributo 'pattern'",
        "Sí, solo con JavaScript",
        "Sí, solo con CSS"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Qué tipos de datos puedo almacenar en un objeto JSON?",
      opciones: [
        "Solo números y cadenas de texto",
        "Solo objetos JSON anidados",
        "Números, cadenas, valores booleanos, y el valor especial null",
        "Solo valores booleanos"
      ],
      respuestaCorrecta: 2,
      dificultad: "Media"
    },
    {
      pregunta: "¿Cómo es la estructura de un objeto JSON?",
      opciones: [
        "Una lista de valores",
        "Una estructura de pares clave-valor",
        "Una matriz de valores",
        "Una cadena de texto"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Para qué sirve el comando git init?",
      opciones: [
        "Para iniciar una nueva aplicación web",
        "Para inicializar un nuevo repositorio de Git",
        "Para instalar nuevas dependencias en un proyecto",
        "Para formatear el disco duro"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Cómo funciona 'git add'?",
      opciones: [
        "Añade cambios directamente al repositorio remoto",
        "Añade cambios a la rama principal",
        "Añade cambios al área de preparación antes de realizar una confirmación",
        "Añade cambios a todas las ramas del repositorio"
      ],
      respuestaCorrecta: 2,
      dificultad: "Media"
    },
    {
      pregunta: "¿Cómo funciona 'commit'?",
      opciones: [
        "Guarda una copia del repositorio en la nube",
        "Confirma los cambios en el repositorio local",
        "Elimina los cambios realizados",
        "Crea una nueva rama en el repositorio"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Qué es una 'branch'?",
      opciones: [
        "Una etiqueta en HTML",
        "Una línea de desarrollo independiente en Git",
        "Un comando de terminal",
        "Una función en JavaScript"
      ],
      respuestaCorrecta: 2,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Para qué sirve 'git merge'?",
      opciones: [
        "Para dividir el código en fragmentos más pequeños",
        "Para combinar los cambios de una rama en otra",
        "Para eliminar ramas innecesarias",
        "Para crear una nueva rama"
      ],
      respuestaCorrecta: 1,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué es una API key?",
      opciones: [
        "Una clave para abrir una puerta",
        "Una cadena de caracteres utilizada para autenticar y autorizar el acceso a una API",
        "Una función en JavaScript",
        "Una clave para abrir una caja fuerte"
      ],
      respuestaCorrecta: 2,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué es 'Async'?",
      opciones: [
        "Un comando en Git",
        "Una función que devuelve una promesa en JavaScript",
        "Una forma de realizar solicitudes HTTP",
        "Un formato de intercambio de datos"
      ],
      respuestaCorrecta: 1,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué es 'Await'?",
      opciones: [
        "Una palabra clave en JavaScript para pausar la ejecución",
        "Un comando en Git",
        "Un formato de intercambio de datos",
        "Una función para realizar solicitudes HTTP"
      ],
      respuestaCorrecta: 0,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Cómo funciona 'try...catch'?",
      opciones: [
        "Es un comando en Git",
        "Permite manejar excepciones en JavaScript",
        "Es una estructura de control en CSS",
        "Permite realizar pruebas unitarias"
      ],
      respuestaCorrecta: 1,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué son las API Rest?",
      opciones: [
        "Un conjunto de reglas para diseñar bases de datos",
        "Un tipo de lenguaje de programación",
        "Un conjunto de herramientas de diseño web",
        "Un conjunto de reglas y convenciones para diseñar y acceder a servicios web en línea."
      ],
      respuestaCorrecta: 3,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Para qué sirven las API REST?",
      opciones: [
        "Para enviar correos electrónicos",
        "Para crear aplicaciones que se comuniquen a través de la web",
        "Para diseñar interfaces gráficas de usuario",
        "Para escribir código en lenguaje ensamblador"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué son los métodos HTTP?",
      opciones: [
        "Instrucciones para construir bases de datos",
        "Operaciones estándar para manipular recursos en la web",
        "Nuevas etiquetas para HTML",
        "Una forma de diseñar interfaces gráficas"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué método HTTP utilizamos para obtener información de un recurso?",
      opciones: [
        "POST",
        "GET",
        "PUT",
        "DELETE"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es JSON?",
      opciones: [
        "Un nuevo lenguaje de programación",
        "Un formato de texto sencillo para el intercambio de datos",
        "Un programa de edición de imágenes",
        "Un tipo de base de datos"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es Fetch?",
      opciones: [
        "Una herramienta para atrapar errores en el código",
        "Un formato de intercambio de datos",
        "Un lenguaje de programación",
        "Una herramienta para realizar solicitudes de red en aplicaciones web"
      ],
      respuestaCorrecta: 3,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es una 'request' o petición?",
      opciones: [
        "Una solicitud para comprar un producto en línea",
        "Una solicitud para enviar correos electrónicos",
        "Una solicitud para obtener datos o recursos de un servidor web",
        "Una solicitud para programar una reunión"
      ],
      respuestaCorrecta: 2,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué es una 'response' o respuesta?",
      opciones: [
        "Una respuesta a una pregunta",
        "Una respuesta que se obtiene al realizar una solicitud a un servidor web",
        "Una respuesta automática de un sistema",
        "Una respuesta a un correo electrónico"
      ],
      respuestaCorrecta: 1,
      dificultad: "Fácil"
    },
    {
      pregunta: "¿Qué atributo me indica el contenido o valor de un elemento HTML 'input'?",
      opciones: [
        "Content",
        "Text",
        "Value",
        "InputValue"
      ],
      respuestaCorrecta: 2,
      dificultad: "Media"
    },
    {
      pregunta: "¿Qué tipos de validaciones hemos realizado hasta ahora?",
      opciones: [
        "Validaciones de edad",
        "Validaciones de contenido multimedia",
        "Validaciones de entrada de usuario",
        "Validaciones con el atributo 'required' en HTML y condiciones en el script"
      ],
      respuestaCorrecta: 3,
      dificultad: "Media"
    },
    {
      pregunta: "¿Puedo indicar un patrón de ingreso determinado en un input?",
      opciones: [
        "No, no es posible",
        "Sí, si lo defino con el atributo 'pattern'",
        "Sí, solo con JavaScript",
        "Sí, solo con CSS"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Qué tipos de datos puedo almacenar en un objeto JSON?",
      opciones: [
        "Solo números y cadenas de texto",
        "Solo objetos JSON anidados",
        "Números, cadenas, valores booleanos, y el valor especial null",
        "Solo valores booleanos"
      ],
      respuestaCorrecta: 2,
      dificultad: "Media"
    },
    {
      pregunta: "¿Cómo es la estructura de un objeto JSON?",
      opciones: [
        "Una lista de valores",
        "Una estructura de pares clave-valor",
        "Una matriz de valores",
        "Una cadena de texto"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Para qué sirve el comando git init?",
      opciones: [
        "Para iniciar una nueva aplicación web",
        "Para inicializar un nuevo repositorio de Git",
        "Para instalar nuevas dependencias en un proyecto",
        "Para formatear el disco duro"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Cómo funciona 'git add'?",
      opciones: [
        "Añade cambios directamente al repositorio remoto",
        "Añade cambios a la rama principal",
        "Añade cambios al área de preparación antes de realizar una confirmación",
        "Añade cambios a todas las ramas del repositorio"
      ],
      respuestaCorrecta: 2,
      dificultad: "Media"
    },
    {
      pregunta: "¿Cómo funciona 'commit'?",
      opciones: [
        "Guarda una copia del repositorio en la nube",
        "Confirma los cambios en el repositorio local",
        "Elimina los cambios realizados",
        "Crea una nueva rama en el repositorio"
      ],
      respuestaCorrecta: 1,
      dificultad: "Media"
    },
    {
      pregunta: "¿Qué es una 'branch'?",
      opciones: [
        "Una etiqueta en HTML",
        "Una línea de desarrollo independiente en Git",
        "Un comando de terminal",
        "Una función en JavaScript"
      ],
      respuestaCorrecta: 2,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Para qué sirve 'git merge'?",
      opciones: [
        "Para dividir el código en fragmentos más pequeños",
        "Para combinar los cambios de una rama en otra",
        "Para eliminar ramas innecesarias",
        "Para crear una nueva rama"
      ],
      respuestaCorrecta: 1,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué es una API key?",
      opciones: [
        "Una clave para abrir una puerta",
        "Una cadena de caracteres utilizada para autenticar y autorizar el acceso a una API",
        "Una función en JavaScript",
        "Una clave para abrir una caja fuerte"
      ],
      respuestaCorrecta: 2,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué es 'Async'?",
      opciones: [
        "Un comando en Git",
        "Una función que devuelve una promesa en JavaScript",
        "Una forma de realizar solicitudes HTTP",
        "Un formato de intercambio de datos"
      ],
      respuestaCorrecta: 1,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Qué es 'Await'?",
      opciones: [
        "Una palabra clave en JavaScript para pausar la ejecución",
        "Un comando en Git",
        "Un formato de intercambio de datos",
        "Una función para realizar solicitudes HTTP"
      ],
      respuestaCorrecta: 0,
      dificultad: "Difícil"
    },
    {
      pregunta: "¿Cómo funciona 'try...catch'?",
      opciones: [
        "Es un comando en Git",
        "Permite manejar excepciones en JavaScript",
        "Es una estructura de control en CSS",
        "Permite realizar pruebas unitarias"
      ],
      respuestaCorrecta: 1,
      dificultad: "Difícil"
    }
  ];

  let n;

  function randomNumber(data) {
    n = Math.floor(Math.random() * data.length);

    return n;
  }

  const quizDiv = document.querySelector('#quiz');

  function showQuestion(data) {

    randomNumber(quizData);

    quizDiv.innerHTML = `

    <h2 class="fw-light pb-3">${data[n].pregunta}</h2>

    <p class="fw-light">Dificultad: ${data[n].dificultad}</p>

    <form>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="option" id="0">
            <label class="form-check-label" for="0">${data[n].opciones[0]}</label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="option" id="1">
            <label class="form-check-label" for="1">${data[n].opciones[1]}</label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="option" id="2">
            <label class="form-check-label" for="2">${data[n].opciones[2]}</label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="option" id="3">
            <label class="form-check-label" for="3">${data[n].opciones[3]}</label>
        </div>

    </form>

    `
  }

  document.addEventListener('DOMContentLoaded', () => {
    showQuestion(quizData)

    document.querySelector('#send').addEventListener('click', (e) => {
        e.preventDefault();
        const selectedOption = document.querySelector('input[name="option"]:checked');
    
        if (selectedOption) {
            const selectedId = parseInt(selectedOption.id);
            if (selectedId === quizData[n].respuestaCorrecta) {
                document.getElementById('answer').innerHTML = '<p class="display-4" style="color: green">Correcto</p>';
            } else {
                document.getElementById('answer').innerHTML = '<p class="display-4" style="color: red">Incorrecto</p>';
            }
        } else {
            document.getElementById('answer').innerText = 'Por favor, selecciona una opción';
        }
    });
    
    document.querySelector('#newQuestion').addEventListener('click', (e) => {
        e.preventDefault();
        randomNumber(quizData);
        showQuestion(quizData);
        document.getElementById('answer').innerHTML = '';
    });
  });