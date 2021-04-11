<template>
<section class="grid">
  <div class="grid-header">
    <Header />
  </div>
  <div class="grid-products">
  <ProductsListed />
  </div>
  </section>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import ProductsListed from '@/components/Landing/ProductsListed.vue'

export default {
  components: {
	Header,
	ProductsListed,
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

.box{
	background-color: grey;
}

.grid-header{
	grid-column: 1/4;
	grid-row: 1/2;
}

.grid-products{
	grid-row: 2/3;
	grid-column: 1/4;
}
</style>
