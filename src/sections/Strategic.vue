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
            <br>
            <div class="columns" id="columns-body">
                <div class="column is-full" id="brands">
                    <img src="../assets/alianzaEstrategica.png" alt="foto">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

    .hero{
        background: white url('../assets/DegradeBlanco.svg');
        background-size: cover;
    }
    .hero-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 10%;
        padding-left: 8vw;
        padding-right: 8vw;
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
        padding-bottom: 5vh;
    }

    .description{
        color: #8190A5;
    }

    .aboutUs-body {
        height: 100%;
        color: #8190A5;
        text-align: justify;
    }


    #brands {
        padding: 0;        
    }

    .color {
        width: 100%;
        height: 100%;
        background-color: rgb(226, 226, 226);
    }

    #columns-header {
        display: block;
    }

    @media (max-width: 1024px) {
        .hero {
            background: white;
            background-size: cover;
        }
        .hero-body {
            padding-top: 0%;
        }
        #columns-body {
            height: 50px;
        }
    
    }

    @media (max-width:  767px) {
        .hero {
            background: white;
            background-size: cover;
        }
        .hero-body {
            padding-top: 10%;
        }
        #columns-body {
            height: 200px;
        }
        #columns-header {
            display: flex;
            flex-direction: column;

        }
    }
</style>