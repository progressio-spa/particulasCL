<template>
	<section class="hero is-link is-fullheight" id="home">
	</section>
</template>

<script>

</script>

<style scoped>

.hero{
	background: white url('../assets/indexPage.svg') center / cover;
	/* display:  flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url('../assets/indexPage.svg');
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover; */
}

@media (max-width: 1024px) {.hero {background: white url('../assets/tablet/indexPageTablet.svg') center / cover;}}
@media (max-width:  768px) {.hero {background: white url('../assets/mobile/indexPageMobile.svg') center / cover;}}



</style>