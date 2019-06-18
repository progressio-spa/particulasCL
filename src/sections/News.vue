<template>
	<section class="hero is-fullheight">
	  <div class="hero-body">
	        <div class="columns is-mobile">
                <div class="column is-half" id="left">
                    <div class="header">
                        <p class="title">
                            Noticias
                        </p>
                    </div>


                    <div class="aboutUs-body">

                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. hola</h1>
                        <br>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam. 
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
    padding-top:10%;
    padding-left: 8vw;
    padding-right: 8vw;
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
    padding-top: 100px;
}

#left{
    padding-left:0;
    padding-right:3vw;
}

#right{
    padding-right:0;
}

.color{
    width: 100%;
    height: 100%;
    background-color: white;
}


</style>