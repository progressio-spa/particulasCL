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
                    <span>Left</span>
                  </a>
                </li>
                <li>
                  <a @click="tab+=1;">
                    <span>Right</span>
                    <span class="icon"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                  </a>
                </li>
              </ul>
            </div>      

            <div class="columns" id="columns-body" v-if="tab % 8 == 0">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <li>Modelación de la calidad del aire y olores molestos</li>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 1">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <li>Modelación meteorológica</li>
                        </ul>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color"></div>
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="tab % 8 == 2">
                <div class="column is-half" id="left">
                    <div class="aboutUs-body">
                        <ul>
                            <li>Inventario de emisiones</li>
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
                            <li>Estudio de efectos en salud</li>
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
                            <li>Monitoreo de contaminantes atmosféricos</li>
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
                            <li>Estudios de abatimiento y reducción de emisiones</li>
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
                            <li>Soluciones energéticas para reducción de emisiones</li>
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
                            <li>Modelación Fluido Dínamica (CFD) de Procesos Industriales con OpenFOAM</li>
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
                tab: 1,
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
        padding-top: 30%;
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