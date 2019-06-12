<template>
	<div>
		<Header></Header>
    <Index></Index>
		<Contact></Contact>
		<News></News>

	</div>
</template>

<script>

import Header from '@/components/Header.vue';
import Index from '@/sections/Index.vue';
import News from '@/components/News.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'home',
  components: {
    Header,
    Index,
    News,
    Contact
  }
}
</script>
