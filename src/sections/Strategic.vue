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
                <div class="column is-full" id="brands">
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
        padding-top: 2vh;
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
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5vh;
    }

    .description{
        color: #8190A5;
        padding-left: 8vw;
        padding-right: 8vw;
    }

    .aboutUs-body {
        height: 100%;
        color: #8190A5;
        text-align: justify;
    }


    #brands {
        padding-left: 8vw;        
        padding-right: 8vw;
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