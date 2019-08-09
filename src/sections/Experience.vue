<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">
                            Experiencia
                        </p>
                    </div>
                </div>
            </div>

            <div class="tabs is-fullwidth">
              <ul>
                <li>
                  <a @click="tab-=1;">
                    <span class="icon"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
                    <span style="color: white;">Anterior</span>
                  </a>
                </li>
                <li>
                  <a @click="tab+=1;">
                    <span style="color: white;">Siguiente</span>
                    <span class="icon"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                  </a>
                </li>
              </ul>
            </div>   

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 5) == 0">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">2014 - 2019</p>
						<li>
							Modelado y simulación computacional CFD con OpenFOAM de un sistema de ventilación para una planta de
							compostaje de biomasa en Alicante, España, Mandante Troposfera Soluciones Sostenibles, S.L.
						</li>
						<br>
						<li>
							Inventario de emisiones y modelación de contaminantes atmosféricos para Fundición Chagres, Mandante: Anglo
							American.

						</li>
						<br>
				
						<li>
							Simulacion y modelación de la calidad del aire para determinar potencial área de influencia proyecto CODELCO
							Andina, Mandante SGS Chile Ltda.
						</li>
						<br>
						<li>
							Monitoreo y análisis de variables meteorologicas en ENAMI Planta José Antonio Moreno de Taltal - Better SpA
						</li>
						<br>
						<li>
							Simulacion y modelación de la calidad del aire por emisiones del Terminal Quintero de ENAP Refinerías SpA,
							Mandantes: UTFSM - ECHEVERRIA ILHARREBORDE SPA.
						</li>
						<br>
						<li>
							Pronóstico del material particulado MP10 de la fase de construcción proyecto SGO Minera Spence, BHP-Billiton.
							Mandante: EYE3 SpA.
						</li>
						<br>
						<li>
							Evaluación de desempeño del modelo de pronóstico de calidad del aire para MP10, basado en WRF-Chem, trazador
							CO, entre las regiones Metropolitana de Santiago y Los Lagos, Ministerio del Medio Ambiente, Nivel Central.
						</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/reduccionEmisiones.jpg" alt="test">
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 5) == 1  ">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">2014</p>
						<li>Estudio de información de aporte de fuentes fijas a MP2,5 en la región de O´Higgins. Ministerio del Medio Ambiente.</li>
						<br>
						<li>Estudio de modelación de dispersión de contaminantes atmosféricos provenientes de fuentes fugitivas del puerto de Arica. CENMA.</li>
						<br>
						<li>Estudio caracterización de contaminantes emitidos por combustión residencial para diferentes leñas de la región del Biobío. Ministerio del Medio Ambiente.</li>
						<br>
						<li>Implementation of a robust physical chemical mechanism for polycyclic aromatic hydrocarbons into the state-of-the-science deterministic Community Multiscale Air Quality Modeling System (CMAQ) and its application to simulating Benzo (a) pyrene. FONDECYT 1120791.</li>
						<br>
						<li>Análisis y Generación de Base de Datos de Potencial Energético y Emisiones Contaminantes de Biocombustibles de Interés Nacional. FONDEF DO9I1070.</li>                
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test"> 
                </div>
            </div>


            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 5) == 2">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">2013</p>
					<li>Implementación de Convertidores Catalíticos en la zona urbana de Temuco. Municipalidad de Temuco.</li>
					<br>
					<li>Estimación del Consumo y caracterización del uso de leña en la ciudad de Osorno, Chile. Ministerio del Medio Ambiente.</li>
					<br>
					<li>Investigación y Generación de Factores de Emisión de Contaminantes Atmosféricos para Artefactos Residenciales que Combustionan Biomasa de Relevancia Nacional. FONDEF D08I1147.</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test"> 
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 5) == 3">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">2012</p>
                    <li>Modelación Atmosférica de Contaminantes Asociados a Fundiciones de Cobre. 608897-18-LE12. Ministerio del Medio Ambiente</li>
					<br>
                    <li>Contaminación atmosférica por material particulado ultra fino, mortalidad y morbilidad en Temuco: susceptibilidad entre los más ancianos y niños. FONIS SA08I20055.</li>
					<br>
                    <li>Desarrollo de tecnologías de combustión de leña, más limpias y eficientes, para uso domiciliario. INNOVA-CORFO 07CN13PYT-216.</li>
					<br>
                    <li>Desarrollo de un Paquete Tecnológico para la Producción de Etanol Celulósico a partir de Álamos Híbridos en Chile. FONDEFD07I1078.</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/reduccionEmisiones.jpg" alt="test">
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 5) == 4">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">2002 - 2011</p>
					<li>ProProyecto CONAMA Biobío, “Análisis de efectos en mortalidad y morbilidad por contaminación atmosférica.yecto CONAMA Biobío “Inventario de emisiones ciudades de Chillán y Los Ángeles".</li>
					<br>
                    <li>Proyecto CONAMA Araucanía, “Estudio de Mortalidad y Morbilidad por Contaminación Atmosférica en Temuco y Padre Las Casas".</li>
					<br>
                    <li>Proyecto CONAMA Los Lagos, “Determinación de la zona saturada por material particulado respirable de Osorno".</li>
					<br>
                    <li>Proyecto CONAMA Araucanía, “Evaluación del impacto de la aplicación de medidas del PDA en la calidad del aire de Temuco y Padre Las Casas".</li>
					<br>
                    <li>Proyecto CONAMA Valparaíso, “Propuesta de actualización del Plan de Descontaminación de Ventanas".</li>
					<br>
                    <li>Proyecto CONAMA O’Higgins: “Estudio diagnóstico inventario compuestos orgánicos volátiles y campaña fotoquímica Rancagua".</li>
					<br>
                    <li>Proyecto CONAMA Biobío, “Actualización del Inventario de emisiones de Concepción Metropolitano".</li>
					<br>
                    <li>Proyecto CONAMA Biobío “Inventario de emisiones ciudades de Chillán y Los Ángeles".</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test"> 
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
        background: white url('../assets/Degrade.svg');
        background-size: cover;
		color:white;
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
		color: white;
	}
	.icon {
		color:white;
	}

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5vh;
    }

    #left{
        padding-left:0;
    }

    #right{
        padding-right:0;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #right img {
        max-height: 100%;
        max-width: 100%;
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
			background: white url('../assets/mobile/BlueMobile.svg');
			background-size: cover;
		}

        .hero-body {
            padding-top: 10%;
        }
        #columns-body {
            height: 1500px;
        }
    }
</style>