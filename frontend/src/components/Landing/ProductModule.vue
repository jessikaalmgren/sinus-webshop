<template>
<div>
	<div class="wrapper">
		<div class="module">

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
}
}
</script>

<style scoped>
</style>