<template>
	<div>
		<Header></Header>
    <Index></Index>
    <AboutUs></AboutUs>
    <Strategic></Strategic>
    <Services></Services>
    <Experience></Experience>
    <Customers></Customers>
		<News></News>
    <Training></Training>
		<Contact></Contact>
    <Footer></Footer>
	</div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Index from '@/sections/Index.vue';
import News from '@/sections/News.vue';
import Contact from '@/sections/Contact.vue';
import Experience from '@/sections/Experience.vue';
import AboutUs from '@/sections/AboutUs.vue';
import Strategic from '@/sections/Strategic.vue';
import Training from '@/sections/Training.vue';
import Customers from '@/sections/Customers.vue';
import Services from '@/sections/Services.vue';


export default {
  name: 'home',
  components: {
    Header,
    Index,
    News,
    Contact,
    Experience,
    AboutUs,
    Strategic,
    Training,
    Footer,
    Customers,
    Services
  }
}
</script>
