<template>
    <section class="hero is-medium">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="columns">
                      <div class="column"> <CardBanner image='../assets/Banner/banner_1.jpg' title="Nuestro sello" description="Respondemos con calidad, puntualidad y compromiso en nuestro servicios."> </CardBanner> </div>
                      <div class="column"> <CardBanner image='../assets/Banner/banner_2.jpg' title="Somos tu gran socio" description="Te apoyamos en tus estudios y declaraciones de impacto ambiental."> </CardBanner> </div>
                      <div class="column"> <CardBanner image='../assets/Banner/banner_3.jpg' title="Garantía ecólogica" description="Te ayudamos a ser una empresa comprometida con el medio ambiente."> </CardBanner> </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CardBanner from '../components/CardBanner.vue'
    export default{
        components: {
            CardBanner
        }
    }
</script>

<style scoped>
    .hero-body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding-left: 8vw;
        padding-right: 8vw;
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
    }

    .aboutUs-body {
        height: 100%;
        color: #8190A5;
        text-align: justify;
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