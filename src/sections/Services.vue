<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">
                            Servicios
                        </p>
                    </div>
                </div>
            </div>

            <div class="tabs is-fullwidth">
              <ul>
                <li>
                  <a @click="tab-=1;">
                    <span class="icon"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
                    <span>Anterior</span>
                  </a>
                </li>
                <li>
                  <a @click="tab+=1;">
                    <span>Siguiente</span>
                    <span class="icon"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                  </a>
                </li>
              </ul>
            </div>      

            <div class="columns" id="columns-body" v-if="tab % 8 == 0">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">Modelación de la calidad del aire y olores molestos </p>
                        <li>Modelación Fotoquímicos de Contaminantes (WRF-CMAQ).</li>
                        <li>Pronóstico de MP10 y MP2,5 en faenas mineras; fase construcción y operación.</li>
                        <li>Modelación y pronóstico de la dispersión de olores, PrOlor.</li>
                        <li>Modelos de Receptor para estudios de aportes de fuentes de emisiones.</li>
                        <li>Modelos de Dispersión (AERMOD y CALPUFF) para permisos ambientales.</li>
                        <li>Apoyo en Estudios y Declaraciones de Impacto Ambiental.</li>
                        <li>Servicios de Cambio Climático.</li>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 1">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">Modelación meteorológica</p>
                        <p>Para los modelos Calpuff y Community Multi-Scale Air Quality (CMAQ) se requiere de la meteorología obtenida de modelos mesoescala como el WRF-ARW (Weather Research and Forecasting Model-Advanced Research WRF), en conjunto con información meteorológica local de superficie y altura. Para Calpuff, esta información es integrada con el modelo meteorológico de diagnóstico Calmet para resolver situaciones especiales derivadas de terrenos complejos, circulaciones costeras, presencia de cuerpos de agua superficiales, zonas urbanas, etc. Esta información es fundamental para una modelación adecuada de la fotoquímica y dispersión de contaminantes.</p>
                        <br>
                        <p>Para la modelación meteorológica, Particuolotech realiza los siguientes trabajos:</p>
                        <br>
                        <li>Definición de los dominios de modelación (anidados o no)</li>
                        <li>Definición y estimación de episodios de contaminación atmosférica</li>
                        <li>Modelación meteorológica con WRF.</li>
                        <li>Transformación de las salidas de WRF para Calpuff (calmet.dat)</li>
                        <li>Transformación de las salidas de WRF para CMAQ</li>
                        <li>Modelación meteorológica con Calmet</li>
                        <li>Análisis estadístico de la data de las estaciones meteorológicas y de calidad del aire con OpenAir-Project</li>
                        <li>Modelación y simulación de los campos de vientos</li>
                        <li>Modelación y simulación de las capas de inversión térmica</li>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 2">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <h1>Inventario de emisiones</h1>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 3">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <h1>Estudio de efectos en salud</h1>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 4">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <h1>Monitoreo de contaminantes atmosféricos</h1>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 5">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <h1>Estudios de abatimiento y reducción de emisiones</h1>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 6">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <h1>Soluciones energéticas para reducción de emisiones</h1>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 7">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <h1>Modelación Fluido Dínamica (CFD) de Procesos Industriales con OpenFOAM</h1>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <!-- <div class="columns" v-if="tab % 8 == 0">
                <div class="column" style="">
                    <CardBanner image="here goes the route" title="Modelación de la calidad del aire y olores molestos" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
                <div class="column" style="">
                    <CardBanner image="here goes the route" title="Modelación Meteorológica" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
                <div class="column" style="">
                    <CardBanner image="here goes the route" title="Inventario de emisiones" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
                <div class="column">
                    <CardBanner image="here goes the route" title="Estudio de efectos en salud" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
            </div>
            <div class="columns" v-if="tab==0">
                <div class="column">
                    <CardBanner image="here goes the route" title="Monitoreo de contaminantes atmosféricos" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
                <div class="column">
                    <CardBanner image="here goes the route" title="Estudio de abatimiento y reducción de emisiones" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
                <div class="column">
                    <CardBanner image="here goes the route" title="Soluciones energéticas para reducción de emisiones" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
                <div class="column">
                    <CardBanner image="here goes the route" title="Modelación fluido dinámicas (CFD) de procesos industriales con OpenFOAM" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."> </CardBanner>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
    import CardBanner from '../components/CardBanner.vue'
    export default{
        components: {
            CardBanner
        },

        data(){
            return {
                tab: 0,
            };
        },
    }
</script>

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
        padding-top: 10%;
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
        width: 70%%;
        height: 100%;
        background-color: rgb(226, 226, 226);
    }

    #columns-header {
        display: block;
    }
</style>