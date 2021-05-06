<template>
<div class="box products">
			<div class="box-content">
				<div class="products-grid">
					<div class="oneProduct" v-for="product in products" :key="product.name" v-bind:price="product.price"
    v-bind:shortDesc="product.shortDesc"
    v-bind:img="product.imgFile" >
					<h2>{{product.title}}</h2>
					<p>{{product.shortDesc}}</p>
					<img :src="require('@/assets/' + product.imgFile)" @click="changeRoute(product._id)" alt="">
					<h4>{{product.price}} KR</h4>
					<button class="button is-success"
        @click="addToCart(product)">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>

export default {
	data(){return{
		created() {
    return this.$store.dispatch("getProducts");
  },
		
	}},
	computed: {
	products(){
		return this.$store.state.products
	},
	
  },
  methods:{
	changeRoute(id) {
      this.$router.push(`/singleproduct/${id}`);
    },
	addToCart(product) {
      this.$store.dispatch('addProductToCart', {
		product,
		quantity: 1,
	})
    },
  }
}
</script>

<style scoped>
.products{
	grid-row: 2/3;
	grid-column: 1/4;
}

.products-grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1em;
	padding: 1em;
}

.oneProduct{
	margin-bottom: 6em;
	border: solid;
	padding: 1em;
	background-color: white;
}

img{
	height: 20em;
}

button{
 border-style: none;
 width: 15vh;
 height: 5vh;
 background-color: #D9C5B4;
}
</style>