<template>
    <section class="hero is-fullheight" id="experience">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t('Experience.title') }}</p>
                    </div>
                </div>
            </div>

            <div class="columns" id="columns-body">
                <div class="column is-full">
                    <div class="header-subtitle">
                        <p class="subtitle">{{ $t('Experience.lastYears') }}</p>
                    </div>
                    <div class="aboutUs-body">
                        <ul style="list-style-type:disc;">
                            <li>
                                {{ $t('Experience.lastYears-1') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-2') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-3') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-4') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-5') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-6') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-7') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-8') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-9') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-10') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-11') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-12') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-13') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-14') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-15') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-16') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-17') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-18') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-19') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-20') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-21') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-22') }}
                            </li>
                            <li>
                                {{ $t('Experience.lastYears-23') }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div class="column is-full">
                <div class="header-subtitle">
                    <p class="subtitle">
                        <b>
                            {{ $t('Experience.secondTitle') }}
                        </b>
                    </p>
                </div>
                <div class="header-subtitle">
                    <p class="subtitle">
                        2014
                    </p>
                </div>
                <div class="aboutUs-body">
                    <ul style="list-style-type:disc;">
                        <li>
                            {{ $t('Experience.firstListed4') }}
                        </li>
                        <li>
                            {{ $t('Experience.secondListed4') }}
                        </li>
                        <li>
                            {{ $t('Experience.thirdListed4') }}
                        </li>
                        <li>
                            {{ $t('Experience.fourthListed4') }}
                        </li>
                        <li>
                            {{ $t('Experience.fifthListed4') }}
                        </li>
                    </ul>
                </div>
                <br />
                <div class="header-subtitle">
                    <p class="subtitle">
                        2013
                    </p>
                </div>

                <div class="aboutUs-body">
                    <ul style="list-style-type:disc;">
                        <li>
                            {{ $t('Experience.firstListed3') }}
                        </li>
                        <li>
                            {{ $t('Experience.secondListed3') }}
                        </li>
                        <li>
                            {{ $t('Experience.thirdListed3') }}
                        </li>
                    </ul>
                </div>
                <br />
                <div class="header-subtitle">
                    <p class="subtitle">
                        2012
                    </p>
                </div>
                <div class="aboutUs-body">
                    <ul style="list-style-type:disc;">
                        <li>
                            {{ $t('Experience.firstListed2') }}
                        </li>
                        <li>
                            {{ $t('Experience.secondListed2') }}
                        </li>
                        <li>
                            {{ $t('Experience.thirdListed2') }}
                        </li>
                        <li>
                            {{ $t('Experience.fourthListed2') }}
                        </li>
                    </ul>
                </div>
                <br />
                <div class="header-subtitle">
                    <p class="subtitle">
                        2002 - 2011
                    </p>
                </div>
                <div class="aboutUs-body">
                    <ul style="list-style-type:disc;">
                        <li>
                            {{ $t('Experience.firstListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.secondListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.thirdListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.fourthListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.fifthListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.sixthListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.seventhListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.eighthListed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.9Listed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.10Listed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.11Listed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.12Listed1') }}
                        </li>
                        <li>
                            {{ $t('Experience.13Listed1') }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    background: white url('../assets/Degrade.svg');
    background-size: cover;
    color: white;
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
    height: 100%;
}

.title {
    color: white;
}
.subtitle {
    color: white;
}
.icon {
    color: white;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
}
.header-subtitle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
}

#columns-header {
    display: block;
}

@media (max-width: 1024px) {
    .hero {
        background: white url('../assets/mobile/BlueMobile.svg');
        background-size: cover;
    }

    .hero-body {
        padding-top: 10%;
    }
}

@media (max-width: 767px) {
    .hero {
        background: white url('../assets/mobile/BlueMobile.svg');
        background-size: cover;
    }

    .hero-body {
        padding-top: 10%;
    }
}
</style>
