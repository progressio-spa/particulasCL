<template>
	<div>
		<Header></Header>
    <Index></Index>
		<Contact></Contact>
    <Experience></Experience>
		<News></News>
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

export default {
  name: 'home',
  components: {
    Header,
    Index,
    News,
    Contact,
    Experience,
    Footer
  }
}
</script>
