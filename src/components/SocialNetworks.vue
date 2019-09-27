<template>
	<div>
		<div class="rrss-image" style="bottom: 50%;" @click="goToRRSS('Instagram')">
			<span class="icon has-text-info fa-2x">
				<i class="fab fa-instagram"></i>
			</span>
		</div>
		<div class="rrss-image" style="bottom: 40%;" @click="goToRRSS('Twitter')">
			<span class="icon has-text-info fa-2x">
				<i class="fab fa-twitter"></i>
			</span>
		</div>
		<div class="rrss-image" style="bottom: 30%;" @click="goToRRSS('Linkedin')">
			<span class="icon has-text-info fa-2x">
				<i class="fab fa-linkedin"></i>
			</span>
		</div>
	</div>
</template>

<script>

import RRSS from '@/constants/rrss.js';

export default {
	methods: {
		goToRRSS(socialNetwork) {
			window.open(RRSS[socialNetwork], '_blank');
		}
	}
}
	
</script>

<style scoped>

.rrss-image {
    position: fixed;
    right: 15px;
    z-index: 4;
    background-color: white;
    box-sizing: border-box;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 
}

@media(max-width: 425px) {
	.rrss-image {
		right: 0;
	}
}

</style>