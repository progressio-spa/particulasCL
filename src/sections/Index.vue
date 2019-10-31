<template>
    <section class="hero is-link is-fullheight" id="home"></section>
</template>

<script>
</script>

<style scoped>
.hero {
    background: white url('../assets/indexPage.svg') center / cover;
}

@media (max-width: 1023px) {
    .hero {
        background: white url('../assets/tablet/indexPageTablet.svg') center /
            cover;
    }
}
@media (max-width: 767px) {
    .hero {
        background: white url('../assets/mobile/indexPageMobile.svg') center /
            cover;
    }
}
</style>