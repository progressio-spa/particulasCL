<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">Capacitación</p>
                    </div>
                    <div class="description">
                        <p>Según el Ministerio del Medio Ambiente de Chile, la educación ambiental es un instrumento de
                            gestión cuyo propósito es educar a la ciudadanía para el desarrollo sustentable,
                            generando conciencia y cambios conductuales proclives hacia la convivencia armónica entre
                            el desarrollo social, crecimiento económico y cuidado del medio ambiente.
                            <br>
                            PARTICULAS Capacitación, área de formación y desarrollo, está conformada por un equipo
                            multidisciplinario de profesionales, académicos, investigadores, asesores y consultores
                            especializados en temas ambientales, los cuales cuentan con una vasta experiencia en el
                            ámbito de la capacitación impartida en sector público y privado.
                            <br>
                            Generamos valor en las personas, mejorando sus competencias a través de un proceso de
                            enseñanza que privilegia el aprender haciendo.
                            <br>
                            Apoyamos a las instituciones en el diseño, implementación, evaluación y mejoramiento de las
                            competencias personales y organizacionales para aumentar su productividad, competitividad,
                            sustentabilidad ambiental, efectividad económica y social.
                            <br>
                            Diseñamos programas de capacitación personalizados, a partir de la interacción conjunta con
                            los clientes, considerando los recursos disponibles y la garantía de resultados planeados.
                            Nuestra misión es ser el mejor socio estratégico de nuestros clientes, agregando valor a sus
                            negocios a través de las personas.
                            <br>
                            En este contexto, nuestra empresa ofrece a las Instituciones Públicas, Empresas Privadas,
                            ONGs y Sociedad Civil los siguientes cursos y talleres.

                        </p>
                    </div>
                </div>
            </div>
            <div class="columns" id="columns-body">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <li>Fundamentos de la contaminación atmosférica</li>
                            <li>Exposición a la contaminación atmosférica y efectos en salud humana</li>
                            <li>Herramientas de gestión de la calidad del aire</li>
                            <li>Modelación de la calidad del aire usando CALPUFF View</li>
                            <li>Monitoreo y caracterización de contaminantes</li>
                            <li>Tecnologías de abatimiento de emisiones</li>
                            <li>Modelación meteorológica usando el modelo WRF y análisis estadístico con OpenAir-Project</li>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .hero-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: white;
        padding-left: 8vw;
        padding-right: 8vw;
        padding-top: 5%;
    }

    .container {
        height: 600px;
        width: auto;
        display: grid;
        padding: 0;
    }

    #columns-body {
        width: 100%;
        height: 600px;
    }

    .title {
        color: #47525E;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5vh;
    }

    .description{
        color: #8190A5;
        padding-bottom: 2vh;
        text-align: justify;
    }

    .aboutUs-body{
        height:100%;
        color: #8190A5;
        text-align: justify;
    }

    #left{
        padding-left:0;
    }

    #right{
        padding-right:0;
    }


    .color {
        width: 100%;
        height: 100%;
        background-color: rgb(226, 226, 226);
    }

    #columns-header {
        display: block;
    }
</style>