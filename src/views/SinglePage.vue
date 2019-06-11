<template>
	<div>
		<Header></Header>
		<News></News>
		<Contact></Contact>
	</div>
</template>

<script>

import Header from '@/components/Header.vue';
import News from '@/components/News.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'home',
  components: {
    Header,
    News,
    Contact
  }
}
</script>
