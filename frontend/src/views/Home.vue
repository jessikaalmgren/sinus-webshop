<template>
<section class="grid">
  <div class="grid-header">
    <Header />
  </div>
  <div class="grid-products">
  <ProductsListed />
  </div>
  <div class="grid-footer">
	<Footer />
  </div>
  </section>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import ProductsListed from '@/components/Landing/ProductsListed.vue'
import Footer from '@/components/Landing/Footer.vue'


export default {
	created() {
    return this.$store.dispatch("getProducts");
  },
  components: {
	Header,
	ProductsListed,
	Footer,
  },
  
  methods: {
	changeRoute(id) {
      this.$router.push(`/singleproduct/${id}`);
    },
  },
  computed: {
	product(){
		return this.$store.getters.allProducts;
	},
  },
}
</script>

<style scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr auto);
	padding: 2em 10em 10em 10em;
}

.box{
	background-color: #D9C5B4;
}

.grid-header{
	grid-column: 1/4;
	grid-row: 1/2;
}

.grid-products{
	grid-row: 2/3;
	grid-column: 1/4;
}

.grid-footer{
	grid-column: 1/4;
	grid-row: 3/4;
}
</style>
