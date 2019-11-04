<template>
    <section class="hero is-fullheight">
        <div class="hero-body" id="training">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t('Training.title') }}</p>
                    </div>
                    <br />
                    <div class="description">
                        <p>
                            {{ $t('Training.paragraph1') }}
                            <br />
                            {{ $t('Training.paragraph2') }}
                            <br />
                            {{ $t('Training.paragraph3') }}
                            <br />
                            {{ $t('Training.paragraph4') }}
                            <br />
                            {{ $t('Training.paragraph5') }}
                            <br />
                            {{ $t('Training.paragraph6') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns" id="columns-body">
                <div class="column is-full">
                    <div class="header-subtitle">
                        <p class="subtitle">{{ $t('Training.title2') }}</p>
                    </div>
                    <div class="aboutUs-body">
                        <ul style="list-style-type:disc;">
                            <li>
                                <b>{{ $t('Training.listed1') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc1') }}</p>
                            <li>
                                <b>{{ $t('Training.listed2') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc2') }}</p>
                            <li>
                                <b>{{ $t('Training.listed3') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc3') }}</p>
                            <li>
                                <b>{{ $t('Training.listed4') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc4') }}</p>
                            <li>
                                <b>{{ $t('Training.listed5') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc5') }}</p>
                            <li>
                                <b>{{ $t('Training.listed6') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc6') }}</p>
                            <li>
                                <b>{{ $t('Training.listed7') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_desc7') }}</p>
                            <li>
                                <b>{{ $t('Training.listed8') }}</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div class="columns" id="columns-body">
                <div class="column is-full">
                    <div class="header-subtitle">
                        <p class="subtitle">{{ $t('Training.title3') }}</p>
                    </div>
                    <div class="aboutUs-body">
                        <ul style="list-style-type:disc;">
                            <li>
                                <b>{{ $t('Training.listed_sem1') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_sem_desc1') }}</p>
                            <li>
                                <b>{{ $t('Training.listed_sem2') }}</b>
                            </li>
                            <p>{{ $t('Training.listed_sem_desc2') }}</p>
                            <li>
                                <b>{{ $t('Training.listed_sem3') }}</b>
                            </li>
                            <br />
                            <p>{{ $t('Training.last_paragraph') }}</p>
                            <br />
                            <p>{{ $t('Training.contact') }}</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img src="../assets/capacitacion.png"/>
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
    height: 100%;
}

.title {
    color: #47525e;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 7vh;
}

.header-subtitle {
    display: flex;
    flex-direction: row;
    justify-content: left;
    padding-bottom: 3vh;
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
}

@media (max-width: 767px) {
    .hero-body {
        padding-top: 10%;
    }
}
</style>
