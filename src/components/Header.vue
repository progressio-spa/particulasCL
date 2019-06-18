<template>
	<nav class="navbar is-fixed-top header" role="navigation" aria-label="main navigation">
		
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<img src="@/assets/logoParticulas.png" class="header-logo">
			</a>
			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbarBasicExample" class="navbar-menu">
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
			<div class="navbar-end">
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
	
</script>

<style scoped>

.header {
	background-color: transparent;
	padding: 2% 2% 0 2%;
}

.header-item {
	font-family: 'Lato', sans-serif;
	font-weight: bold;
	font-size: 18px;
	color: white;
}

.contact {
	font-family: 'Lato', sans-serif;
	background-color: #4F93EE !important;
	border-radius: 55px;
	font-size: 18px;
	margin: 0 1% 0 1%;
}

</style>