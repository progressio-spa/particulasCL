<template>
	<div>
        <Header></Header>
        <Index></Index>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Strategic></Strategic>
        <Services></Services>
        <Experience></Experience>
        <Customers></Customers>
        <News></News>
        <Training></Training>
        <Contact></Contact>
        <Footer></Footer>
        <SocialNetworks></SocialNetworks>
	</div>
</template>

<script>

import Header from '@/components/Header.vue';
import Index from '@/sections/Index.vue';
import Banner from '@/sections/Banner.vue';
import AboutUs from '@/sections/AboutUs.vue';
import Strategic from '@/sections/Strategic.vue';
import Services from '@/sections/Services.vue';
import Experience from '@/sections/Experience.vue';
import Customers from '@/sections/Customers.vue';
import News from '@/sections/News.vue';
import Training from '@/sections/Training.vue';
import Contact from '@/sections/Contact.vue';
import Footer from '@/components/Footer.vue';
import SocialNetworks from '@/components/SocialNetworks.vue';


export default {
  name: 'home',
  components: {
    Header,
    Index,
    Banner,
    AboutUs,
    Strategic,
    Services,
    Experience,
    Customers,
    News,
    Training,
    Contact,
    Footer,
    SocialNetworks
  }
}
</script>

<style scoped>

</style>
