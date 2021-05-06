<template>
<section class="grid">
  <div class="grid-header">
	<Header />
	<div class="grid-orderform">
<OrderForm :getUser="getUser"/>
</div>
</div>
<div class="grid-footer">
	<Footer />
  </div>

</section>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import OrderForm from '@/components/Mittkonto/OrderForm.vue'
import Footer from '@/components/Landing/Footer.vue'

export default {
components: {
	Header,
	OrderForm,
	Footer,
}, 
computed: {
	getUser(){
		const emptyUser = {
			email: "",
			name: "",
			address: {
				street: "",
				zip: "",
				city: ""
			},
		}
		if(this.$store.state.currentUser){
			return this.$store.state.currentUser
		}else{
			return emptyUser
		}
	}
}
}

</script>

<style scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr auto);
	
	padding: 2em 10em 10em 10em;
}

.grid-header{
	grid-column: 1/4;
	grid-row: 1/2;
}

.grid-orderform{
	grid-row: 2/3;
	grid-column: 1/4;
}

.grid-footer{
	grid-column: 1/4;
	grid-row: 3/4;
}
</style>