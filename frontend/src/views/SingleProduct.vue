<template>
<div>
	<section class="grid">
<div class="wrapper1">
	<h1>{{product.title}}</h1>
	<p>{{product.shortDesc}}</p>
	<img :src="require('@/assets/' + product.imgFile)" alt="">
	</div>
<div class="wrapper2">
<h2>Price: {{product.price}}:-</h2>
<label>Description:</label>
<p>{{product.longDesc}}</p>
<h4>Category: {{product.category}}</h4>
<button class="button"
        @click="addToCart()">Add to Cart</button>
</div>

	</section>
</div>
</template>

<script>


export default {
	created() {
    return this.$store.dispatch("getProductId");
  },
		
	computed: {
	product(){
		return this.$store.getters.getProductId(this.$route.params.id)
	},
	products(){
		return this.$store.state.products;
	},
	},

	methods: {
	addToCart() {
      this.$store.dispatch('addProductToCart', {
		product: this.product,
		quantity: 1 
	})
    },
},
}
</script>

<style scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(2, 23em);
	grid-template-rows: repeat(1, 1fr auto); 
	padding: 2em 10em 10em 10em;
	justify-content: center;
	padding-top: 15em;
}

.wrapper1{
	background-color: white; 
	grid-column: 1/2;
	grid-row: 1/2; 
	
}

.wrapper2{
	grid-column: 2/3;
	grid-row: 1/2;
	background-color: white;
	padding-right: 2.5em;
	padding-top: 1em;
	
}

img{
	width: 20em;
	padding-bottom: 2em;
}

button{
 border-style: none;
 width: 15vh;
 height: 5vh;
 margin-top: 3em;
 color: white;
 background-color: black;
}





</style>