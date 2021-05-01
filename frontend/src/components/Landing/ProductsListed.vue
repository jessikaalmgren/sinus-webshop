<template>
<div class="box products">
			<div class="box-content">
				<div class="products-grid">
					<div class="oneProduct" v-for="prod in products" :key="prod.name" v-bind:price="prod.price"
    v-bind:shortDesc="prod.shortDesc"
    v-bind:img="prod.imgFile" >
					<h2>{{prod.title}}</h2>
					<p>{{prod.shortDesc}}</p>
					<img :src="require('@/assets/' + prod.imgFile)" @click="showModal(product)" alt="">
					<h4>{{prod.price}} KR</h4>
					<button class="button is-success"
        @click="addToCart()">Add to Cart</button>
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
	showModal(prod) {
    this.$emit("showModal", prod);
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
}

.oneProduct{
	margin-bottom: 6em;
}

img{
	height: 20em;
	
}
button{
 border-style: none;
 width: 15vh;
 height: 5vh;
}
</style>