<template>
	<div>
		<Header></Header>
		<Contact></Contact>
		<News></News>

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
