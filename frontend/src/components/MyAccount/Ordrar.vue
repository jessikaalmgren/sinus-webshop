<template>
	<section class="orders">
		<div class="wrapper" v-if="currentUser">
			<h1>Orderhistorik</h1><hr/>
			<h1 v-if="!currentUser">Du är inte inloggad!</h1>
	<div class="ordershistory" v-for="(order, index) in orders" :key="index">
<div class="top">
        <h3>
          Order {{ index + 1 }}: <span class="status">{{ order.status }}</span>
        </h3><br>
        
          {{ new Date(order.timeStamp).toLocaleDateString("sv") }}
        
		<div class="items-container">
		<div class="items" v-for="(item, index) in order.items" :key="index">
			<div>
            <h4>{{ item.title }}</h4>
			<img :src="require('@/assets/' + item.imgFile)">
			<div class="info-container">
            <p class="pris"><span>Pris:</span> {{ item.price }}kr </p>
            <p><span> Antal:</span> {{ item.amount }}st</p>
          </div>
          </div> </div>
		<p class="total-price">
        <span>Total summa:</span> {{ order.orderValue }}kr
      </p>
      </div> </div> </div></div>
	</section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
created() {
     this.$store.dispatch("getOrders");
  },
  computed: {
	...mapGetters(['currentUser'])
	, 
	orders() {
      return this.$store.state.orders;
    },
  },
}
</script>
<style scoped>
.wrapper{
	background-color: white;
	width: auto;
	margin: 0 auto;
	border-style:solid;
	margin-top: 1em;
	margin: 3em;
	padding: 1em;
}
img{
	width: 3em;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.status {
  text-transform: lowercase;
  font-size: 14px;
  color: green;
}

.items-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
  border-bottom: 2px solid #c0c0c0;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}
.info-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  margin-bottom: 5px;
}
span {
  color: black;
  font-weight: bold;
}
.total-price {
  margin-top: 1em;
  margin-bottom: 1em;
}

</style>