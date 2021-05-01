<template>
<div>
	<section class="grid">
	<div class="grid-header">
<Header />
	</div>
	<div class="grid-orders-details">
<Ordrar />
<AccDetails />
</div>
</section>
</div>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import Ordrar from '@/components/MyAccount/Ordrar.vue'
import AccDetails from '@/components/MyAccount/AccDetails.vue'
export default {
components: {
	Header,
	Ordrar,
	AccDetails,
}
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

.grid-orders-details{
	grid-row: 2/3;
	grid-column: 1/4;
	display: flex;
	flex-direction: row;
}
</style>