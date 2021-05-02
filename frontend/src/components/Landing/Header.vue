<template>
<div>
<div class="box header">
	<div class="box-content">
		<div id="nav">
			<img class="logo" src="@/assets/sinus-logo.svg" alt="Image not loading">
		<div class="flexend">
    <router-link to="/">{{linkProducts}}</router-link> 
	<router-link to="/register">{{linkRegForm}}</router-link> 
    <router-link to="/login" v-show="!currentUser">{{linkLogIn}}</router-link>
	<router-link to="/myaccount" v-show="currentUser">{{myAccount}}</router-link> 
	<a v-if="currentUser" @click="handleLogOut">{{logOut}}</a>
	<img src="@/assets/icon-bag-white.svg" alt="Image no loading" class="icon">
	<p v-if="currentUser">Inloggad som: {{currentUser.name}}</p>
	<p v-if="!currentUser">Ej inloggad</p>
		</div>
	</div>
	</div>
	</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data(){return{
		linkProducts: 'Produkter',
		linkLogIn: 'Logga in',
		linkRegForm: 'Registrera dig',
		logOut: 'Logga ut',
		myAccount: 'Mitt konto',
	}},
	computed: {
		...mapGetters(['currentUser'])
	}, 
	methods: {
		handleLogOut(){
			this.$router.push('/')
			location.reload();
		}
	}
}
</script>

<style scoped>
.box{
	background-color: grey;
}

.header{
	grid-column: 1/4;
	grid-row: 1/2;
}

.logo{
	width: 10em;
}

.icon{
	margin-left: 3em;
}

.flexend{ 
	margin-top: 0.3em;
}

#nav {
	display: flex;
	justify-content: space-between;
	
  padding: 30px;

}
</style>
