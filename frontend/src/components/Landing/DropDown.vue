<template>
<section>
	<center>
	<button @click="clicked">
		<i class="fas fa-shopping-cart"></i>
	</button>
	<div v-bind:class="{'show': showDropDown, 'hide': !showDropDown}">
		<MiniCart /> 
	</div>
	</center>
</section>
</template>

<script>
import MiniCart from '@/components/Landing/MiniCart.vue'
export default {
	components: {
		MiniCart,
	},
	data() {return{
	showDropDown: false,
	}},
methods: {
	clicked(){
		this.showDropDown = !this.showDropDown;
		console.log('Clicked!')
	}
}
}
</script>

<style scoped>
.show{
  background: #444;
  color: #eee;
  height: auto;
	width: 300px;
  transition: all 500ms ease-in-out;
  opacity: 1;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
  position: absolute;
  margin-left: -150px;
  overflow: hidden;

}

.hide{
  background: #444;
  color: #eee;  
  width: 0px;
  height: 0px ;
  transition: all 500ms ease-in-out;
  opacity: 0;
  padding: 0px;
  border-radius: 5px;
  box-shadow: 0 0 10px 10px rgba(0,0,0,0);
  position: absolute;
  overflow: hidden;

}

button{
	background-color: transparent;
	border: none;
}


</style>