const dimensiones = [
{
    titulo: "Dimensión 1. Relaciones humanas y convivencia escolar",
    preguntas: [
        ["¿Consideras que existe una relación sana y respetuosa entre los estudiantes de tu escuela?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Sientes que tus compañeros te apoyan cuando enfrentas alguna dificultad escolar o personal?",
        ["Siempre", "Casi siempre", "Algunas veces", "Casi nunca", "Nunca"]],

        ["¿Consideras que los docentes brindan un trato respetuoso y equitativo a todos los estudiantes?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que los directivos y el personal administrativo (secretarias, control escolar, orientación y servicio social) ofrecen una atención respetuosa y oportuna?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que el personal de limpieza, mantenimiento, prefectura, vigilancia, portería y cafetería recibe un trato digno y respetuoso por parte de la comunidad escolar?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]]
    ]
},
{
    titulo: "Dimensión 2. Violencia, seguridad y prevención de conflictos",
    preguntas: [
        ["¿Has presenciado o experimentado situaciones de violencia física, verbal o psicológica dentro del plantel?",
        ["Nunca", "Rara vez", "Algunas veces", "Frecuentemente", "Muy frecuentemente", "Prefiero no responder"]],

        ["¿Has observado situaciones de discriminación, burlas, amenazas, exclusión o acoso entre integrantes de la comunidad escolar?",
        ["Nunca", "Rara vez", "Algunas veces", "Frecuentemente", "Muy frecuentemente", "Prefiero no responder"]],

        ["¿Te sientes seguro dentro de las instalaciones del plantel, incluyendo salones, sanitarios, patios y pasillos?",
        ["Siempre", "Casi siempre", "Algunas veces", "Casi nunca", "Nunca"]],

        ["¿Sabes a quién acudir si sufres o presencias alguna situación de violencia, acoso o amenaza dentro de la escuela?",
        ["Sí, conozco claramente a quién acudir", "Tengo una idea, pero no estoy completamente seguro", "No, desconozco a quién acudir"]],

        ["¿Consideras que las autoridades escolares atienden adecuadamente los reportes de violencia y conflictos?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo", "No tengo información suficiente para responder"]]
    ]
},
{
    titulo: "Dimensión 3. Salud, bienestar y problemáticas sociales",
    preguntas: [
        ["¿Consideras que el ambiente escolar influye en tu estado de ánimo y bienestar emocional?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que la carga académica te permite mantener un equilibrio entre tus actividades escolares, descanso y vida personal?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que en el plantel existen acciones suficientes para prevenir el consumo de alcohol, tabaco, vapeadores y otras sustancias?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo", "No tengo información suficiente para responder"]],

        ["¿Consideras que el ausentismo, las faltas frecuentes y el abandono de clases afectan el aprendizaje y la convivencia escolar?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que la cafetería ofrece alimentos y bebidas saludables, en condiciones adecuadas de higiene y calidad?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo", "No consumo alimentos de la cafetería / No puedo evaluar este aspecto"]]
    ]
},
{
    titulo: "Dimensión 4. Infraestructura, mobiliario y servicios escolares",
    preguntas: [
        ["¿Consideras que los salones cuentan con suficientes bancas, sillas, mesas y pizarrones en buenas condiciones?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que las aulas, pasillos, patios y áreas comunes cuentan con iluminación, ventilación y limpieza adecuadas?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que los sanitarios cuentan con agua, limpieza, iluminación y condiciones adecuadas para su utilización?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]],

        ["¿Consideras que los laboratorios cuentan con materiales, instrumentos y equipos suficientes para realizar las prácticas escolares?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo", "No utilizo laboratorios ni talleres"]],

        ["¿Consideras que existe una atención oportuna cuando se reportan desperfectos en las instalaciones, mobiliario o equipos del plantel?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo", "No tengo información suficiente para responder"]]
    ]
},
{
    titulo: "Dimensión 5. Participación, responsabilidad y cultura de paz",
    preguntas: [
        ["¿Utilizas el diálogo y mantienes la calma para resolver problemas o desacuerdos con tus compañeros?",
        ["Siempre", "Casi siempre", "Algunas veces", "Casi nunca", "Nunca"]],

        ["¿Respetas las opiniones, creencias y formas de pensar de los demás, aunque sean diferentes a las tuyas?",
        ["Siempre", "Casi siempre", "Algunas veces", "Casi nunca", "Nunca"]],

        ["¿Te sientes escuchado, integrado y respetado dentro de tu grupo escolar?",
        ["Siempre", "Casi siempre", "Algunas veces", "Casi nunca", "Nunca"]],

        ["¿Consideras que los estudiantes, docentes, directivos y personal de apoyo participan en acciones para mejorar la convivencia y cuidar las instalaciones del plantel?",
        ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo", "No tengo información suficiente para responder"]]
    ]
}
];

const contenedor = document.getElementById("preguntas");
const formulario = document.getElementById("cuestionario");

let numero = 0;

dimensiones.forEach(dimension => {

    const titulo = document.createElement("h2");
    titulo.className = "dimension";
    titulo.textContent = dimension.titulo;
    contenedor.appendChild(titulo);

    dimension.preguntas.forEach(pregunta => {

        numero++;

        const tarjeta = document.createElement("div");
        tarjeta.className = "pregunta";

        const tituloPregunta = document.createElement("h3");
        tituloPregunta.textContent = numero + ". " + pregunta[0];

        tarjeta.appendChild(tituloPregunta);

        pregunta[1].forEach((respuesta, indice) => {

            const etiqueta = document.createElement("label");
            etiqueta.className = "opcion";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "Pregunta " + numero;
            radio.value = respuesta;

            if (indice === 0) {
                radio.required = true;
            }

            const texto = document.createElement("span");
            texto.textContent = respuesta;

            etiqueta.appendChild(radio);
            etiqueta.appendChild(texto);

            tarjeta.appendChild(etiqueta);

            radio.addEventListener("change", actualizarProgreso);
        });

        contenedor.appendChild(tarjeta);
    });
});

function actualizarProgreso() {

    const respondidas = document.querySelectorAll(
        '#preguntas input[type="radio"]:checked'
    ).length;

    const porcentaje = (respondidas / 24) * 100;

    document.getElementById("avance").style.width =
        porcentaje + "%";

    document.getElementById("contador").textContent =
        respondidas + " de 24 preguntas contestadas";
}

formulario.addEventListener("submit", function(event) {

    const respondidas = document.querySelectorAll(
        '#preguntas input[type="radio"]:checked'
    ).length;

    if (respondidas !== 24) {
        event.preventDefault();
        alert("Por favor, responde las 24 preguntas antes de enviar.");
        return;
    }

    const boton = document.getElementById("enviar");
    boton.textContent = "Enviando respuestas...";
    boton.disabled = true;
});