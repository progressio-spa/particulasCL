<template>
    <section class="hero is-fullheight" id="services">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t("Services.sectionTitle") }}</p>
                    </div>
                </div>
            </div>

            <div class="dropdown is-left"
                :class="{'is-active': showServiceList}">
                <div class="dropdown-trigger">
                    <button 
                        class="button"
                        aria-haspopup="false"
                        aria-controls="dropdown-menu"
                        @click="changeShowServiceListValue">
                        <span>{{ itemSelected() }}</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div
                    class="dropdown-menu"
                    id="dropdown-menu"
                    role="menu"
                    st>
                    <div
                        class="dropdown-content">
                        <a class="dropdown-item service-item" @click="serviceItemSelected(0)">
                        {{ $t("Services.firstTitle") }}
                        </a>
                        <a class="dropdown-item service-item" @click="serviceItemSelected(1)">
                        {{ $t("Services.secondTitle") }}
                        </a>
                        <a class="dropdown-item service-item" @click="serviceItemSelected(2)">
                        {{ $t("Services.thirdTitle") }}
                        </a>
                        <a class="dropdown-item service-item" @click="serviceItemSelected(3)">
                        {{ $t("Services.fourthTitle") }}
                        </a>
                    </div>
                </div>
            </div>
            <br><br>
            <div v-if="showServiceList">
                <br><br><br><br><br>
            </div>
            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 0">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">{{ $t("Services.firstTitle") }}</p>
                    <p>{{ $t("Services.firstDescription1") }}</p>
                    <br />
                    <p>{{ $t("Services.secondDescription1") }}</p>
                    <br />
                    <li>{{ $t("Services.firstListed1") }}</li>
                    <li>{{ $t("Services.secondListed1") }}</li>
                    <li>{{ $t("Services.thirdListed1") }}</li>
                    <li>{{ $t("Services.fourthListed1") }}</li>
                    <li>{{ $t("Services.fifthListed1") }}</li>
                    <li>{{ $t("Services.sixthListed1") }}</li>
                    <li>{{ $t("Services.seventhListed1") }}</li>
                    <li>{{ $t("Services.eighthListed1") }}</li>
                    <li>{{ $t("Services.ninethListed1") }}</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/reduccionEmisiones.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 1  ">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">{{ $t("Services.secondTitle") }}</p>
                    <li>{{ $t("Services.firstListed2") }}</li>
                    <li>{{ $t("Services.secondListed2") }}</li>
                    <li>{{ $t("Services.thirdListed2") }}</li>
                    <li>{{ $t("Services.fourthListed2") }}</li>
                    <li>{{ $t("Services.fifthListed2") }}</li>
                    <li>{{ $t("Services.sixthListed2") }}</li>
                    <li>{{ $t("Services.seventhListed2") }}</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 2">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">{{ $t("Services.thirdTitle") }}</p>
                    <li>{{ $t("Services.firstListed3") }}</li>
                    <li>{{ $t("Services.secondListed3") }}</li>
                    <li>{{ $t("Services.thirdListed3") }}</li>
                    <li>{{ $t("Services.fourthListed3") }}</li>
                    <li>{{ $t("Services.fifthListed3") }}</li>
                    <li>{{ $t("Services.sixthListed3") }}</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 3">
                <div class="column is-half" id="left">
                    <p class="title" style="font-size: 120%;">{{ $t("Services.fourthTitle") }}</p>
                    <li>{{ $t("Services.firstListed4") }}</li>
                    <li>{{ $t("Services.secondListed4") }}</li>
                    <li>{{ $t("Services.thirdListed4") }}</li>
                    <li>{{ $t("Services.fourthListed4") }}</li>
                    <li>{{ $t("Services.fifthListed4") }}</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/reduccionEmisiones.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 4">
                <div class="column is-half" id="left">
                    <p
                        class="title"
                        style="font-size: 120%;"
                    >{{ $t("Services.fifthTitle") }}</p>
                    <li>{{ $t("Services.firstListed5") }}</li>
                    <li>{{ $t("Services.secondListed5") }}</li>
                    <li>{{ $t("Services.thirdListed5") }}</li>
                    <li>{{ $t("Services.fourthListed5") }}</li>
                    <li>{{ $t("Services.fifthListed5") }}</li>
                    <li>{{ $t("Services.sixthListed5") }}</li>
                    <li>{{ $t("Services.seventhListed5") }}</li>
                    <li>{{ $t("Services.eighthListed5") }}</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 5">
                <div class="column is-half" id="left">
                    <p
                        class="title"
                        style="font-size: 120%;"
                    >{{ $t("Services.sixthTitle") }}</p>
                    <p
                        class="title"
                        style="font-size: 100%; color: grey;"
                    >{{ $t("Services.firstSubTitle6") }}</p>
                    <p>{{ $t("Services.firstDescription6") }}</p>
                    <br />
                    <p
                        class="title"
                        style="font-size: 100%; color: grey;"
                    >{{ $t("Services.secondSubTitle6") }}</p>
                    <p>{{ $t("Services.secondDescription6") }}</p>
                    <br />
                    <p>{{ $t("Services.thirdDescription6") }}</p>
                    <br />
                    <li>{{ $t("Services.firstListed6") }}</li>
                    <li>{{ $t("Services.secondListed6") }}</li>
                    <li>{{ $t("Services.thirdListed6") }}</li>
                    <li>{{ $t("Services.fourthListed6") }}</li>
                    <li>{{ $t("Services.fifthListed6") }}</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/reduccionEmisiones.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 6">
                <div class="column is-half" id="left">
                    <p
                        class="title"
                        style="font-size: 120%;"
                    >{{ $t("Services.seventhTitle") }}</p>
                    <p
                        class="title"
                        style="font-size: 100%; color: grey;"
                    >{{ $t("Services.firstSubTitle7") }}</p>
                    <p>{{ $t("Services.firstDescription7") }}</p>
                    <br />
                    <p
                        class="title"
                        style="font-size: 100%; color: grey;"
                    >{{ $t("Services.secondSubTitle7") }}</p>
                    <p>{{ $t("Services.secondDescription7") }}</p>
                    <br />
                    <p>{{ $t("Services.thirdDescription7") }}</p>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/monitoreoAire.jpg" alt="test" />
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 8) == 7">
                <div class="column is-half" id="left">
                    <p
                        class="title"
                        style="font-size: 120%;"
                    >{{ $t("Services.eighthTitle") }}</p>
                    <p>{{ $t("Services.firstDescription8") }}</p>
                    <br />
                    <li>{{ $t("Services.firstListed8") }}</li>
                    <li>{{ $t("Services.secondListed8") }}</li>
                    <li>{{ $t("Services.thirdListed8") }}</li>
                    <li>{{ $t("Services.fourthListed8") }}</li>
                    <br />
                    <p>{{ $t("Services.secondDescription8") }}</p>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/services/reduccionEmisiones.jpg" alt="test" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,
            showServiceList: false,
        }
    },

    methods: {
        set_tab(number, mod) {
            if (number >= 0) return number % mod

            // return (number * -1) % mod;
            this.tab = mod - 1
            return this.tab % mod
        },
        changeShowServiceListValue() {
            this.showServiceList = !this.showServiceList;
        },
        serviceItemSelected(value) {
            this.tab = value;
            this.showServiceList = false;
        },
        itemSelected() {
            const items = [
                this.$t("Services.firstTitle"),
                this.$t("Services.secondTitle"),
                this.$t("Services.thirdTitle"),
                this.$t("Services.fourthTitle"),
            ];
            return items[this.set_tab(this.tab, 8)];
        }
    },
}
</script>

<style scoped>
.hero {
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
    color: #47525e;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5vh;
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

.service-item {
    text-align: center;
    padding: 0.375rem 1rem;
}

#left {
    padding-left: 0;
}

#right {
    padding-right: 0;
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
        height: 1500px;
    }
}

@media (max-width: 767px) {
    .hero {
        background: white url('../assets/mobile/WhiteMobile.svg');
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