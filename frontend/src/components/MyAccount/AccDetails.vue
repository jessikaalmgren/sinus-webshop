<template>
<div>
	<div class="details" v-show="currentUser">
		<div class="infobox">
		<h1>Account Details</h1>
		<h1 v-if="!currentUser">Du är inte inloggad!</h1>
		<div class="container">
		<p><strong>Name: </strong>{{currentUser.name}}</p>
		</div>
		<div class="container">
		<p><strong>Email: </strong>{{currentUser.email}}</p>
		</div>
		<div class="container">
		<p><strong>Role: </strong>{{currentUser.role}}</p>
		</div>
		<h4>Address:</h4>
		<div class="container">
		<p><strong>Street: </strong>{{currentUser.address.street}}</p>
		</div>
		<div class="container">
		<p><strong>Zip code: </strong>{{currentUser.address.zip}}</p>
		</div>
		<div class="container">
		<p><strong>City: </strong>{{currentUser.address.city}}</p>
		</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters(['currentUser'])
	}
}
</script>

<style scoped>
.infobox{
	background-color: white;
	width: auto;
	margin: 0 auto;
	border-style:solid;
	margin-top: 1em;
	margin: 3em;
}

.container{
	margin: 1.5em;
}
</style>