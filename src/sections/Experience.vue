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
						<div class="tabs is-centered">
							<ul>
								<li><a>2002 - 2011</a></li>
								<li><a>2012</a></li>
								<li><a>2013</a></li>
								<li><a>2014</a></li>
								<li class="is-active"><a>2015 - 2019</a></li>
							</ul>
						</div>
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
	.hero{
        background: white url('../assets/Degrade.svg');
        background-size: cover;
    }

	.hero-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
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
	.tabs{
		height: 10%;
		width: 100%;
	}

	.tabs li.is-active a {
    border-bottom-color: #87eafd;
    color: #ffffff;
	}
</style>