<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="header-description">
                <div class="header">
                    <p class="title">Nuestros Clientes</p>
                </div>
                <div class="description">
                    <p>Instituciones públicas y privadas
                    </p>
                </div>
            </div>
            <div class="columns-body">
                <div class="columns">
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3 is-offset-one-quarter">
                        <div class="color"></div>
                    </div>
                    <div class="column is-3">
                        <div class="color"></div>
                    </div>
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
        padding-left: 8vw;
        padding-right: 8vw;
        padding-top:5%;
    }

    .container {
        height: 600px;
        width: auto;
        display: grid;
        padding: 0;
    }

    .columns-body {
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
        padding-bottom: 1vh;
    }

    .description{
        color: #8190A5;
        padding-left: 8vw;
        padding-right: 8vw;
        padding-bottom: 5vh;
    }

    .color {
        width: 100%;
        height: 100%;
        background-color: rgb(226, 226, 226);
    }

    .column{
        height: 12vh;
    }
</style>