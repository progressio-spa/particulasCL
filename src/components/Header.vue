<template>
	<nav v-bind:class="{navbar: true, 'is-fixed-top': true, 'is-spaced': true, initialHeader: scrollPosition < windowSize, secondaryHeader: scrollPosition > windowSize}" role="navigation" aria-label="main navigation">
		
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<img src="@/assets/logoparticulas.svg" class="header-logo"  width="120" height="auto">
			</a>
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbarBasicExample" class="navbar-menu menu">
			<div class="navbar-start">
				<a class="navbar-item header-item">
					Home
				</a>
				<a class="navbar-item header-item">
					Quiénes Somos
				</a>
				<a class="navbar-item header-item">
					Servicios
				</a>
				<a class="navbar-item header-item">
					Experiencia
				</a>
				<a class="navbar-item header-item">
					Clientes
				</a>
				<a  class="navbar-item header-item">
					Noticias
				</a>
				<a class="navbar-item header-item">
					Capacitación
				</a>
			</div>
			<div class="navbar-end" style="margin-right: -3%;">
				<div class="navbar-item">
					<a class="button is-primary contact">
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
			windowSize: 0
		}
	},
	mounted(){
		window.addEventListener('scroll', this.updateScroll);
		this.windowSize = window.innerHeight * 0.7;
	},
	methods: {
	    updateScroll() {
	      this.scrollPosition = window.scrollY
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

.contact {
	font-family: 'Lato', sans-serif;
	background-color: #4F93EE !important;
	border-radius: 55px;
	font-size: 18px;
	margin: 0 1% 0 1%;
}

</style>