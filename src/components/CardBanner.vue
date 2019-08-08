<template>
	<div>
		<div class="card">
		  <div class="card-image">
		    <figure class="image is-4by3">
		      <img :src="require(`@/assets/Banner/${image}`)" alt="Placeholder image">
		    </figure>
		  </div>
		  <div class="card-content">
		    <div class="media">
		      <div class="media-content">
		        <p class="title is-4">{{title}}</p>
		      </div>
		    </div>

		    <div class="content">
		      {{description}}
		      <br>
		    </div>
		  </div>
		</div>
	</div>

</template>

<script>
	export default {
		props: {
			image: String,
			title: String,
			description: String
		}
	}
</script>

<style scoped>

	.card-content {
	  height: 100%;
	}
	
</style>