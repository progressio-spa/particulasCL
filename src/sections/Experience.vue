<template>
    <section class="hero is-fullheight" id="experience">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t("Experience.title") }}</p>
                    </div>
                </div>
            </div>

            <div class="columns" id="columns-body">
                <div class="column is-full">
                    <tabs id="tab" animation="slide" :only-fade="false">
                        <tab-pane label="2002 - 2011" disabled>
                            <li>{{ $t("Services.firstListed1") }}</li>
                            <li>{{ $t("Services.secondListed1") }}</li>
                            <li>{{ $t("Services.thirdListed1") }}</li>
                            <li>{{ $t("Services.fourthListed1") }}</li>
                            <li>{{ $t("Services.fifthListed1") }}</li>
                            <li>{{ $t("Services.sixthListed1") }}</li>
                            <li>{{ $t("Services.seventhListed1") }}</li>
                            <li>{{ $t("Services.eighthListed1") }}</li>
                        </tab-pane>
                        <tab-pane label="2012" disabled>
                            <li>{{ $t("Services.firstListed2") }}</li>
                            <li>{{ $t("Services.secondListed2") }}</li>
                            <li>{{ $t("Services.thirdListed2") }}</li>
                            <li>{{ $t("Services.fourthListed2") }}</li>
                        </tab-pane>
                        <tab-pane label="2013" selected>
                            <li>{{ $t("Services.firstListed3") }}</li>
                            <li>{{ $t("Services.secondListed3") }}</li>
                            <li>{{ $t("Services.thirdListed3") }}</li>
                        </tab-pane>

                        <tab-pane label="2014">
                            <li>{{ $t("Services.firstListed4") }}</li>
                            <li>{{ $t("Services.secondListed4") }}</li>
                            <li>{{ $t("Services.thirdListed4") }}</li>
                            <li>{{ $t("Services.fourthListed4") }}</li>
                            <li>{{ $t("Services.fifthListed4") }}</li>
                        </tab-pane>
                        <tab-pane label="2014 - 2019">
                            <li>{{ $t("Services.firstListed5") }}</li>
                            <li>{{ $t("Services.secondListed5") }}</li>
                            <li>{{ $t("Services.thirdListed5") }}</li>
                            <li>{{ $t("Services.fourthListed5") }}</li>
                            <li>{{ $t("Services.fifthListed5") }}</li>
                            <li>{{ $t("Services.sixthListed5") }}</li>
                            <li>{{ $t("Services.seventhListed5") }}</li>
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
export default {
    components: {
        Tabs,
        TabPane,
    },
    data() {
        return {
            tab: 0,
        }
    },

    methods: {
        set_tab(number, mod) {
            if (number >= 0) return number % mod

            // return (number * -1) % mod;
            this.tab = mod - 1
            return this.tab % mod
        },
    },
}
</script>

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
    height: 700px;
}

.title {
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

#tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tabs li.is-active a {
    color: red;
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
    #columns-body {
        height: 700px;
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
    #columns-body {
        height: 1500px;
    }
}
</style>