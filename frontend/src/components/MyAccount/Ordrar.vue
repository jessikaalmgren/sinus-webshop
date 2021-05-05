<template>
<div>
	<div class="order">
	<p>{{orders}}</p>
	<p>hej</p>
	</div>
	
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
computed: {
	...mapState(['orders'])
}
}
</script>

<style scoped>
.order{
	width: auto; 
	height: 40em; 
	background-color: white;
}

</style>