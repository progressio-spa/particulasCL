<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t("Strategic.title") }}</p>
                    </div>
                    <div class="description">
                        <p>
                            {{ $t("Strategic.description") }}
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div class="columns" id="columns-body">
                <div class="column is-full" id="brands">
                    <img src="../assets/alianzaEstrategica.png" alt="foto" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
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
    color: #47525e;
}

.header {
    display: flex;
    flex-direction: column;
    padding-bottom: 5vh;
}

.description {
    color: #8190a5;
}

.aboutUs-body {
    height: 100%;
    color: #8190a5;
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
}

@media (max-width: 767px) {
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