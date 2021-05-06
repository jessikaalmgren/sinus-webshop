<template>
 <section class="checkout">
    <h2>Kassa</h2><hr />
    <form @submit.prevent="payment">
		<section class="delivery">
		<h3>Leverans</h3><hr />
      <input type="text" placeholder="Namn" required v-model="name" class="info"/><br>
      <input type="email" placeholder="E-post" required v-model="email" class="info"/><br>
      <input type="text" placeholder="Adress" required v-model="address" class="info"/><br>
        <input type="text" placeholder="Postnummer" required v-model="zip" class="info"/><br>
        <input type="text" placeholder="Ort" required v-model="city" class="info"/><br>
      </section><br><br><br>
	<section class="payment">
      <h3>Välj betalsätt</h3><hr />
		<div class="radio">
        <input name="radio" type="radio" checked="checked" />
        <span>Klarna</span>
		</div><br>
		<div class="radio">
        <input name="radio" type="radio" checked="checked" />
        <span>Visa/Electron</span>
		</div><br>
		<div class="radio">
		<input name="radio" type="radio" checked="checked" />
        <span>ApplePay</span>
		</div><br>
		<div class="radio">
		<input name="radio" type="radio" checked="checked" />
        <span>Swish Payments</span>
		</div><br>
		<div class="radio">
		<input name="radio" type="radio" checked="checked" />
        <span>Kortbetalning</span>
		</div>
		<section class="items">
			<h3>I Varukorgen:</h3><hr />
			<div v-for="item in cart" :key="item.product.id">
      <div class="oneitem">
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x {{ item.product.price }} sek
        </div></div>
		<hr/>
		<span>Total: {{cartTotalPrice}} Kr</span>
        
		</section>
		<button>Beställ</button>
      </section>

    </form>
  </section>
</template>

<script>

export default {
props: ["getUser"],
data(){return{
	name: this.getUser.name,
	email: this.getUser.email,
    address: this.getUser.address.street,
    zip: this.getUser.address.zip,
    city: this.getUser.address.city,
}},
computed: {
	cart() {
      return this.$store.state.cart;
    },
	cartTotalPrice(){
		return this.$store.getters.cartTotalPrice
	}
},
methods: {
	payment() {
      const cart = {
        items: [],
      };
      this.$store.state.cart.forEach((product) => {
        for (let i = 0; i < product.quantity; i++) {
          cart.items.push(product.product._id);
        }
      });
      if (cart.items.length > 0) {
        this.$store.dispatch("postOrders", cart);
        this.$store.dispatch("emptyCart");
        alert("Order mottagen");
      } else alert("Din varukorg är tom.");

}
}
}
</script>

<style scoped>
.checkout{
	background-color: white;
	height: 40em ;
	padding: 1em;
}

form{
	height: auto;
}

.info{
	margin: 0.5em;
	padding: 0.2em;
}
.radio{
	float: left;
	padding: 0.5em;
	margin-left: 0.5em;
}
.payment{
	width: 10em;
	margin-left: 43%;
	position: relative;
	bottom: 4em;
}

.delivery{
	float: left;
	margin-left: 5em;
	width: 10em;
}

.items{
	float: right;
	position: relative;
	left: 23em;
	bottom: 16.6em;
}

.oneitem{
	padding: 0.4em;
}

button{
 border-style: none;
 width: 15vh;
 height: 5vh;
 position: relative;
 background-color: #D9C5B4;
}

</style>