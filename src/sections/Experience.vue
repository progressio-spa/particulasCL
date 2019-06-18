<template>
	<section class="hero is-fullheight">
		<div class="hero-body">
			<div class="columns" id="columns-header">
				<div class="column is-full">
					<div class="header">
						<p class="title">
							Experiencia
						</p>
					</div>
				</div>
			</div>
			<div class="columns" id="columns-body">
				<div class="column is-half" id="left">
					<div class="aboutUs-body">
						<p>
							<h1><b>PARTICULAS</b></h1>
							<br>
							Consultores en Ingeniería y Gestión de la Calidad del Aire en el Sector Minero e Industrial
							<br>

							Somos CATEGORIA A - SICEP 
							<br>
							Asociación de Industriales de Antofagasta


						</p>
						<br>
						<p>Años 2014-2019</p>
						<br>
						<p>Año 2014</p>
						<br>
						<p>Año 2013</p>
						<br>
						<p>Año 2012</p>
						<br>
						<p>Años 2002-2011</p>

					</div>
				</div>
				<div class="column is-half" id="right">
					<div class="color">

					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>

</script>


<style scoped>
	.hero-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		background-image: url('../assets/Degrade.svg');

		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		padding-top: 5%;
		padding-left: 8vw;
        padding-right: 8vw;
	}

	.container {
		height: 600px;
		width: auto;
		display: grid;
		padding: 0;
	}

	#columns-body {
		border: 1px;
		width: 100%;
		height: 600px;
	}

	.title {
		color: white;
		padding-top: 30%;
	}

	.header {
		display: block;
		padding-bottom: 5vh;
	}

	.aboutUs-body {
		height: 100%;
		color: white;
		text-align: justify;
	}

	#left {
		padding-left: 0;
		padding-right: 3vw;
	}

	#right {
		padding-right: 0;
	}

	.color {
		width: 100%;
		height: 100%;
		background-color: white;
	}

	#columns-header{
		display: block;
	}
</style>