<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">Servicios</p>
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
        background-image: url('../assets/LineaDegradado.svg');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        padding-left: 8vw;
        padding-right: 8vw;
        padding-top: 10vh;
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