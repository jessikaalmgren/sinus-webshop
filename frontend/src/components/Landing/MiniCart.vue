<template>
<div>
 <div class="dropdown-menu p-2"
    
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x {{ item.product.price }} sek
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.product)"
          >remove</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: {{cartTotalPrice}} Kr</span>
      <a href="#" @click.prevent="clearCartItems()">Clear Cart</a><br>
	<button @click.prevent="checkOut">Checkout</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "MiniCart",
computed: {
	cart() {
      return this.$store.state.cart;
    },
	cartTotalPrice(){
		return this.$store.getters.cartTotalPrice
	}
},
methods: {
	removeProductFromCart(product){
		this.$store.dispatch('removeProductFromCart', product)
	},
	clearCartItems(){
		this.$store.dispatch('clearCartItems')
	},
	checkOut(){
		this.$router.push('/checkout')
	}
},
	

}
</script>

<style scoped>
button{
border-style: none;
 width: 15vh;
 height: 5vh;
 background-color: #D9C5B4;
 margin: 1em;
}
</style>