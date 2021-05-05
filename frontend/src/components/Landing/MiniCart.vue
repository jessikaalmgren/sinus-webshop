<template>
<div>
 <div class="dropdown-menu p-2"
    
  >
    <div v-for="item in cart" :key="item.id">
      <div class="">
        <div>
          <strong>{{ item.title }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.title }}
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
      <span>Total: Kr</span>
      <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
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
},

}
</script>

<style scoped>
</style>