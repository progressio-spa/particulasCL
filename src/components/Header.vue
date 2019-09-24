<template>
    <nav
        v-bind:class="{navbar: true, 'is-fixed-top': true, 'is-spaced': true, initialHeader: scrollPosition < windowSize, secondaryHeader: scrollPosition > windowSize}"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img
                    src="@/assets/logoparticulas.svg"
                    class="header-logo"
                    width="160"
                    height="auto"
                />
            </a>
            <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                @click="showNavbarBurger"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div
            id="navbarBasicExample"
            v-bind:class="{ 'navbar-menu menu': true, 'is-active': showNavbarMobile}"
        >
            <div class="navbar-start">
                <a class="navbar-item header-item" v-scroll-to="'#home'">{{ $t("Header.home") }}</a>
                <a class="navbar-item header-item" v-scroll-to="'#aboutUs'">{{ $t("Header.aboutUs") }}</a>
                <a class="navbar-item header-item" v-scroll-to="'#services'">{{ $t("Header.services") }}</a>
                <a class="navbar-item header-item" v-scroll-to="'#experience'">{{ $t("Header.experience") }}</a>
                <a class="navbar-item header-item" v-scroll-to="'#customers'">{{ $t("Header.customers") }}</a>
                <a class="navbar-item header-item" v-scroll-to="'#news'">{{ $t("Header.news") }}</a>
                <a class="navbar-item header-item" v-scroll-to="'#training'">{{ $t("Header.training") }}</a>
                <div class="locale-changer">
                    <select v-model="$i18n.locale">
                        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                    </select>
                </div>

            </div>
            <div class="navbar-end end">
                <div class="navbar-item">
                    <a
                        v-bind:class="{'button is-primary': true, contact: !showNavbarMobile, contactMobile: showNavbarMobile}"
                        v-scroll-to="'#contact'"
                    >
                        <strong>{{ $t("Header.contact") }}</strong>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'locale-changer',
    data() {
        return {
            scrollPosition: 0,
            windowSize: 0,
            showNavbarMobile: false,
            langs: ['es', 'en'],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
        this.windowSize = window.innerHeight * 0.7
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        showNavbarBurger() {
            this.showNavbarMobile = !this.showNavbarMobile
        },
    },
    destroy() {
        window.removeEventListener('scroll', this.updateScroll)
    },
}
</script>

<style scoped>
.initialHeader {
    background-color: transparent;
    transition: 1s;
}

.secondaryHeader {
    background-image: url('../assets/fondoDegradado.svg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    -webkit-transform: translate(0, windowSize * -1);
    transform: translate(0, windowSize * -1);
    transition: transform 0.5s;
}

.header-item {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: white;
    margin-right: 3%;
}

.menu {
    margin-left: 5%;
}

.navbar-item img {
    max-height: 3rem;
}

.header-logo {
    width: 160;
    height: auto;
}

@media (max-width: 425px) {
    .header-item {
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        font-size: 18px;
        color: white;
        margin: 0;
        padding-left: 3%;
    }
    .header-logo {
        width: 120px;
        height: auto;
    }
    .menu {
        margin-left: 0;
        background-image: url(../assets/FondoDegradado.png);
        overflow-x: none;
    }
    .contactMobile {
        font-family: 'Lato', sans-serif;
        background-color: transparent !important;
        border-radius: 55px;
        font-size: 18px;
        margin: 0;
        padding: 0 0 0 0;
        line-height: 43px;
    }
    .end {
        margin: 0;
    }
}

.contact {
    font-family: 'Lato', sans-serif;
    background-color: #4f93ee !important;
    border-radius: 55px;
    font-size: 18px;
    margin: 0 1% 0 1%;
}

.end {
    margin-right: -3%;
}
</style>
