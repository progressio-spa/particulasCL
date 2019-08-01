<template>
	<section class="hero is-fullheight">
	  <div class="hero-body">
	        <div class="columns is-desktop">
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
                    <img src="../assets/QuienesSomos.jpg" alt="foto">
                </div>
            </div>
	  </div>
	</section>
</template>


<script>
	
</script>


<style scoped>

.hero{
    background: white url('../assets/Degrade.svg');
	background-size: cover;
}

.hero-body {
    padding-top:10%;
    padding-left: 8vw;
    padding-right: 8vw;
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
    padding-left:0;
    padding-right:3vw;
}

#right{
    padding-right:0;
}

@media (max-width: 1024px) {
    .hero {
    background: white url('../assets/mobile/BlueMobile.svg');
    background-size: cover;
    }
    .columns{
        height: 600px;
    }
    .hero-body {
        padding-top: 0%;
    }
    #left{
    padding-left:2vw;
    padding-right:0;
    }
}

@media (max-width:  767px) {
    .hero {
    background: white url('../assets/mobile/BlueMobile.svg');
    background-size: cover;
    }
    .columns {
        height: 820px;
    }
    .hero-body {
        padding-top: 15%;
    }
    #left{
    padding-right:0;
    }
}
</style>