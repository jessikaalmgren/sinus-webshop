<template>
  <section class="grid">
  <div class="grid-header">
<Header />
 </div>
 <div class="grid-login">
<LoginForm />
</div>
<Footer />
    
 
</section>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import LoginForm from '../components/Mittkonto/LoginForm.vue'
import Footer from '@/components/Landing/Footer.vue'
export default {
	components: {
		Header,
		LoginForm,
		Footer,
	},
	
}
</script>


<style scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr auto);
	grid-gap: 1em; 
	padding: 2em 10em 10em 10em;
}

.grid-header{
	grid-column: 1/4;
	grid-row: 1/2;
}

.grid-login{
	grid-row: 2/3;
	grid-column: 1/4;
}

</style>