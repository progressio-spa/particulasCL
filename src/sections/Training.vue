<template>
    <section class="hero is-fullheight" id="training">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t("Training.title") }}</p>
                    </div>
                    <div class="description">
                        <p>
                            {{ $t("Training.paragraph1") }}
                            <br />{{ $t("Training.paragraph2") }}
                            <br />{{ $t("Training.paragraph3") }}
                            <br />{{ $t("Training.paragraph4") }}
                            <br />{{ $t("Training.paragraph5") }}
                            <br />{{ $t("Training.paragraph6") }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns" id="columns-body">
                <div class="column is-full" id="left">
                    <div class="aboutUs-body">
                        <ul style="list-style-type:disc;">
                            <li>{{ $t("Training.listed1") }}</li>
                            <li>{{ $t("Training.listed2") }}</li>
                            <li>{{ $t("Training.listed3") }}</li>
                            <li>{{ $t("Training.listed4") }}</li>
                            <li>{{ $t("Training.listed5") }}</li>
                            <li>{{ $t("Training.listed6") }}</li>
                            <li>{{ $t("Training.listed7") }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="columns" id="columns-image">
                <div class="column is-full" id="right">
                    <img src="../assets/capacitacion.png" alt="capacitacion" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    background-color: white;
}

.hero-body {
    display: flex;
    flex-direction: column;
    padding-left: 8vw;
    padding-right: 8vw;
}

#columns-body {
    width: 100%;
    height: 250px;
}

.title {
    color: #47525e;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
}

.description {
    color: #8190a5;
    padding-bottom: 2vh;
    text-align: justify;
}

.aboutUs-body {
    height: 100%;
    color: #8190a5;
    text-align: justify;
}

#columns-header {
    display: block;
}

@media (max-width: 1024px) {
    .hero-body {
        padding-top: 10%;
    }
    #columns-body {
        height: 200px;
    }
}

@media (max-width: 767px) {
    #columns-body {
        height: 400px;
    }

    .hero-body {
        padding-top: 10%;
    }
}
</style>