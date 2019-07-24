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

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 0">
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

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 1">
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

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 2">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">Inventario de emisiones</p>
                    <li>Declaración de emisiones de acuerdo a DS138/2005</li>
                    <li>Asesoría técnica, procesamiento de dato y reporte a la autoridad de la medición continua de emisiones, CEMs</li>
                    <li>Desarrollo de inventario de emisiones de fuentes fijas</li>
                    <li>Desarrollo de inventario de emisiones de fuentes areales, especialmente de la combustión residencial de leña, rellenos sanitarios, agricultura y ganadería</li>
                    <li>Desarrollo de inventario de emisiones de fuentes móviles en ruta y fuera de ruta (modelos MOVES, EDMS, NONROAD)</li>
                    <li>Desarrollo de Inventario de emisiones de fuentes biogénicas (MEGAN)</li>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 3">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">Estudios de efectos en salud</p>
                    <li>Efectos agudos en salud por exposición al PM2.5</li>
                    <li>Efectos agudos en salud por exposición al ozono</li>
                    <li>Evaluación del riesgo en salud por exposición crónica a sustancias tóxicas del aire</li>
                    <li>Estudios de percepción en salud por contaminación atmosférica</li>
                    <li>Análisis de beneficios en salud de implementación de medidas con BenMaP</li>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 4">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">Monitoreo de contaminantes atmosféricos</p>
                    <li>Medición de masa y especies químicas orgánicas e inorgánicas del PM10 y PM2.5</li>
                    <li>Medición de masa y especies químicas del materioal particulado suspendido, MPS</li>
                    <li>Medición de distribución de tamaños del material particulado fino y ultrafino</li>
                    <li>Medición de concentraciones de gases (O3, CO, SO2 y NOx)</li>
                    <li>Medición de compuestos orgánicos volátiles, COVs</li>
                    <li>Medición de hidrocarburos aromáticos policíclicos (PAHs) en fase gas y fase sólida</li>
                    <li>Medición de carbono negro atmosférico (Black Carbon)</li>
                    <li>Medición de variables meteorológicas</li>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 5">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">Estudios de abatimiento y reducción de emisiones</p>
                    <p class="title" style="font-size: 100%; color: grey;">Evaluación de conformidad MACT</p>
                    <p>Evaluamos y analizamos caso a caso las Máximas Tecnologías de Control Disponibles (MACT) de emisiones de sustancias tóxicas en fuentes de tipo similar para identificar el piso de MACT y llevamos a cabo un análisis más allá del piso de MACT. El análisis de MACT incluye una revisión detallada de los equipos de control de contaminación, técnica y económicamente viables.</p>
                    <br>
                    <p class="title" style="font-size: 100%; color: grey;">Evaluación de conformidad BACT</p>
                    <p>Realizamos análisis de las Mejores Tecnologías de Control Disponibles (BACT) para establecer una limitación de emisiones, basado en el máximo grado de reducción, incluyendo el uso de equipos de control de emisiones, aplicación de métodos innovadores de producción o la utilización de materias primas alternativas para cada caso, teniendo en cuenta los impactos en la energía, medio ambiente y económicos, entre otros costos.</p>
                    <br>
                    <p>En general, se ofrecen los siguientes servicios:</p>
                    <br>
                    <li>Biofiltración para el tratamiento de olores</li>
                    <li>Sistemas de abatimientos de material particulado</li>
                    <li>Sistemas de abatimiento de gases ácidos</li>
                    <li>Sistemas de calefacción distrital</li>
                    <li>Sistemas de limpieza de aire de interiores (residencial y comercial)</li>


                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 6">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">Soluciones energéticas para reducción de emisiones</p>
                    <p class="title" style="font-size: 100%; color: grey;">Auditoría energética y de emisiones</p>
                    <p>Es la base para desarrollar un plan de ahorro energético y reducción de emisiones de contaminantes atmosféricos. La auditoría implica realizar un análisis exhaustivo del consumo energético y sistema de control de emisiones actual para una posterior propuesta de alternativas y una cuantificación del ahorro energético y reducción de emisiones.</p>
                    <br>
                    <p class="title" style="font-size: 100%; color: grey;">Gasto energético y de calidad del aire</p>
                    <p>La gestión energética y de calidad del aire es la pieza clave para que una organización, independientemente de su tamaño o sector, pueda obtener unos niveles de eficiencia y ahorro de energía óptimos, así como mejorar su competitividad y compromiso con el medio ambiente. Esta gestión energética y de calidad del aire incluye un control de las instalaciones a tiempo real para realizar una gestión eficaz.</p>
                    <br>
                    <p>Estos dos servicios los realizamos con nuestro socio estrátegico ORIGINA.</p>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 7">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">Modelación Fluido Dínamica (CFD) de Procesos Industriales con OpenFOAM</p>
                    <p>La simulación de procesos es una herramienta dinámica e intuitiva para conocer, predecir y optimizar un proceso industrial. Ofrecemos una completa gama de posibilidades para su empresa en particular, algunos ejemplos de la aplicación de esta herramienta incluyen:</p>
                    <br>
                    <li>Industrias químicas: Bombas centrífugas, válvulas, mezclado de líquidos miscibles e inmiscibles, flujo en tuberías en estado laminar y turbulento. Flujos bifásicos en canaletas y pulpas.</li>
                    <li>Ingeniería ambiental: dispersión de contaminantes gaseosos y líquidos en efluentes de la industria, perfil de temperaturas en sitios cerrados. Flujo de RILES. Predicción de sistemas HVAC.</li>
                    <li>Seguridad ocupacional: simulación de zonas seguras en plantas con altos niveles de ruido y material particulado.</li>
                    <li>Optimización de procesos: Balances de materia y energía para encontrar fuentes de mejora, bajo metodología de Pareto</li>
                    <br>
                    <p>El software utilizado es OpenFOAM, por lo cual se asegura que el personal de la empresa podrá seguir trabajando en la supervisión del modelo fluidodinámico implementado.</p>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{

        data(){
            return {
                tab: 0,
            };
        },

        methods:{
            set_tab(number, mod){
                if (number >= 0)
                    return number % mod;

                // return (number * -1) % mod;
                this.tab = mod-1;
                return this.tab % mod;
            }
        }
    }
</script>

<style scoped>

    .hero{
        background: white url('../assets/LineaDegradado.svg');
        background-size: cover;
    }

    .hero-body {
        display: flex;
        flex-direction: column;
        padding-left: 8vw;
        padding-right: 8vw;
        padding-top: 10%;
    }

    #columns-body {
        width: 100%;
        height: 700px;
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

    @media (max-width: 1024px) {

        .hero {
        background: white url('../assets/mobile/WhiteMobile.svg');
        background-size: cover;
        }

        .hero-body {
            padding-top: 10%;
        }
        #columns-body {
            height: 700px;
        }
    
    }

    @media (max-width:  767px) {

        .hero {
        background: white url('../assets/mobile/WhiteMobile.svg');
        background-size: cover;
        }

        .hero-body {
            padding-top: 10%;
        }
        #columns-body {
            height: 700px;
        }
    }
</style>