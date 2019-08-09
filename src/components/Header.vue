<template>
	<nav v-bind:class="{navbar: true, 'is-fixed-top': true, 'is-spaced': true, initialHeader: scrollPosition < windowSize, secondaryHeader: scrollPosition > windowSize}" role="navigation" aria-label="main navigation">
		
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<img src="@/assets/logoparticulas.svg" class="header-logo"  width="120" height="auto">
			</a>
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showNavbarBurger">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbarBasicExample" v-bind:class="{ 'navbar-menu menu': true, 'is-active': showNavbarMobile}">
			<div class="navbar-start">
				<a class="navbar-item header-item" v-scroll-to="'#home'">
					Home
				</a>
				<a class="navbar-item header-item" v-scroll-to="'#aboutUs'">
					Quiénes Somos
				</a>
				<a class="navbar-item header-item" v-scroll-to="'#services'">
					Servicios
				</a>
				<a class="navbar-item header-item" v-scroll-to="'#experience'">
					Experiencia
				</a>
				<a class="navbar-item header-item" v-scroll-to="'#customers'">
					Clientes
				</a>
				<a  class="navbar-item header-item" v-scroll-to="'#news'">
					Noticias
				</a>
				<a class="navbar-item header-item" v-scroll-to="'#training'">
					Capacitación
				</a>
			</div>
			<div class="navbar-end end">
				<div class="navbar-item">
					<a v-bind:class="{'button is-primary': true, contact: !showNavbarMobile, contactMobile: showNavbarMobile}" v-scroll-to="'#contact'">
						<strong>Contacto</strong>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	
export default{
	data(){
		return {
			scrollPosition: 0,
			windowSize: 0,
			showNavbarMobile: false
		}
	},
	mounted(){
		window.addEventListener('scroll', this.updateScroll);
		this.windowSize = window.innerHeight * 0.7;
	},
	methods: {
	    updateScroll() {
	    	this.scrollPosition = window.scrollY
	    },
	    showNavbarBurger(){
	    	this.showNavbarMobile = !this.showNavbarMobile;
	    }

	},
	destroy() {
	  window.removeEventListener('scroll', this.updateScroll)
	}
}

</script>

<style scoped>

.initialHeader {
	background-color: transparent;
	transition: 1.0s;
}

.secondaryHeader {
	background-image: url(../assets/FondoDegradado.png);
	-webkit-transform: translate(0, windowSize * -1);
	transform: translate(0, windowSize * -1);
	transition: transform .5s;
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

@media(max-width: 425px){
	.header-item {
		font-family: 'Lato', sans-serif;
		font-weight: bold;
		font-size: 18px;
		color: white;
		margin: 0;
		padding-left: 3%;
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
	.end{
		margin: 0;
	}
}

.contact {
	font-family: 'Lato', sans-serif;
	background-color: #4F93EE !important;
	border-radius: 55px;
	font-size: 18px;
	margin: 0 1% 0 1%;
}

.end{
	margin-right: -3%;
}

</style>
