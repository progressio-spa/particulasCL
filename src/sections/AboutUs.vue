<template>
	<section class="hero is-fullheight">
	  <div class="hero-body">
	        <div class="columns is-mobile">
                <div class="column is-half" id="left">
                    <div class="header">
                        <p class="title">
                            Quiénes Somos
                        </p>
                    </div>
                    <div class="aboutUs-body">
                        <p>
                            Particuolotech, ahora PARTICULAS fue fundada el 2014 con la misión de brindar servicios y 
                            productos de excelencia para la ingeniería y gestión de la calidad del aire. Somos proveedores 
                            del sector industrial a través de SICEP (Máxima Categoría A) y RedNegocios Cámara de Comercio de 
                            Santiago (CCS), y proveedores del Estado de Chile en ChileCompra. Estamos comprometidos con el 
                            medio ambiente y tenemos una clara Política de Eficiencia Energética.
                        </p>
                        <br>
                        <p>
                            PARTICULAS está constituida por connotados investigadores e ingenieros especializados en calidad del aire,
                           y apoyada por importantes socios estratégicos internacionales.
                        </p>
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
	display:  flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-image: url('../assets/Degrade.svg');
    
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

.container{
	height: 600px;
	width: auto;
	display: grid;
    padding: 0;
}

.columns{
    border:1px;
    width: 100%;
    height: 600px;
} 

.title{
    color:white;
}

.header{
    display: block;
    padding-bottom:5vh; 
}

.aboutUs-body{
    height:100%;
    color: white;
    text-align: justify;
}

#left{
    padding-left: 20vh;
    padding-right: 15vh;
}

#right{
    padding-right:20vh;
}

.color{
    width: 100%;
    height: 100%;
    background-color: white;
}


</style>