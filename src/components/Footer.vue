<template>
	<footer class="footer">
		<div class="content has-text-centered">
			<div class="columns">
				<div class="column is-2"></div>
				<div class="column is-2">
					<ul class="footer-list">
						<li class="footer-list-item">Inicio</li>
						<li class="footer-list-item">Quiénes Somos</li>
						<li class="footer-list-item">Servicios</li>
						<li class="footer-list-item">Experiencia</li>
					</ul>
				</div>
				<div class="column is-2">
					<ul class="footer-list">
						<li class="footer-list-item">Clientes</li>
						<li class="footer-list-item">Noticias</li>
						<li class="footer-list-item">Capacitación</li>
						<li class="footer-list-item">Contacto</li>
					</ul>
				</div>
				<div class="column is-4">
					<div class="logos">
						<span class="icon has-text-white is-large">
							<i class="fab fa-facebook fa-2x"></i>
						</span>
						<span class="icon has-text-white is-large">
							<i class="fab fa-instagram fa-2x"></i>
						</span>
						<span class="icon has-text-white is-large">
							<i class="fab fa-twitter fa-2x"></i>
						</span>
						<span class="icon has-text-white is-large">
							<i class="fab fa-linkedin fa-2x"></i>
						</span>
					</div>
				</div>
				<div class="column is-2"></div>
			</div>
		</div>
		<center><a href="https://progressio.cl" class="progressio-signature">2019 © Progressio</a></center>
	</footer>
</template>

<script>
	
</script>

<style scoped>
	
.footer{
	background-image: url('../assets/fondoDegradado.svg');
    
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	padding: 3rem 1.5rem 0 1.5rem;
}

.footer-list{
	list-style-type: none;
	text-align: left;
}

.footer-list-item{
	font-family: 'Lato', sans-serif;
	font-size: 17px;
	color: white;
	cursor: pointer;
}

.logos{
	text-align: center;
	cursor: pointer;
	position: relative;
	top: calc(60% - 32px);
}

.progressio-signature {
	font-family: 'Lato', sans-serif;
	color: white;
	position: relative;
	bottom: 0;
}

</style>