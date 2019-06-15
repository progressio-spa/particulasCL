<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">Alianza Estratégica</p>
                    </div>
                    <div class="description">
                        <p>Los profesionales de partículas tienen en promedio 15 años de experiencia en servicios de consultoría
                            y asesorías ambientales, especialmente en la gestión de calidad de aire y control de la contaminación
                            atmosférica. Esta experiencia, junto con una sólida formación académica y colaboración nacional e internacional
                            con el centro de tecnologías ambientales (CETAM), y las empresas de gestión ambiental, EYE3, AIRON, ENERCOM, Quantum
                            Enviromental y Engineering Services, ORIGINA, TROPOSFERA, PrOlor nos proporciona los conocimientos y competencias para
                            identificar, entender y resolver las necesidades de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns" id="columns-body">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <p>Particuolotech,
                            ahora PARTICULAS fue fundada el 2014 con la misión de brindar servicios y productos de
                            excelencia para la ingeniería y gestión de la calidad del aire. Somos proveedores del sector
                            industrial a través de SICEP (Máxima Categoría A) y RedNegocios Cámara de Comercio de
                            Santiago (CCS),
                            y proveedores del Estado de Chile en ChileCompra. Estamos comprometidos con el medio
                            ambiente y tenemos una clara Política de Eficiencia Energética. </p><br>
                        <p>PARTICULAS está constituida por connotados investigadores e ingenieros especializados en
                            calidad del aire,
                            y apoyada por importantes socios estratégicos internacionales. </p>
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
        background-image: url('../assets/DegradeBlanco.svg');

        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .container {
        height: 600px;
        width: auto;
        display: grid;
        padding: 0;
    }

    #columns-body {
        border: 1px;
        width: 100%;
        height: 600px;
    }

    .title {
        color: #47525E;
    }

    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 5vh;
    }

    .description{
        color: #47525E;
    }

    .aboutUs-body {
        height: 100%;
        color: #8190A5;
        text-align: justify;
    }

    #left {
        padding-left: 20vh;
        padding-right: 15vh;
    }

    #right {
        padding-right: 20vh;
    }

    .color {
        width: 100%;
        height: 100%;
        background-color: #8190A5;
    }

    #columns-header {
        display: block;
    }
</style>