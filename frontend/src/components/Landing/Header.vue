<template>
<div>
<div class="box header">
	<div class="box-content">
		<div id="nav">
			<img class="logo" src="@/assets/sinus-logo.svg" alt="Image not loading">
		<ul class="menulinks">
    <li><router-link to="/">{{linkProducts}}</router-link> </li>
	<li><router-link to="/register">{{linkRegForm}}</router-link> </li>
    <li><router-link to="/login" v-show="!currentUser">{{linkLogIn}}</router-link></li>
	<li><router-link to="/myaccount" v-show="currentUser">{{myAccount}}</router-link> </li>
	<li><a v-if="currentUser" @click="handleLogOut">{{logOut}}</a></li>
	<li><DropDown /></li>
	<br>
	<li><p v-if="currentUser">Inloggad som: {{currentUser.name}}</p></li>
	<li><p v-if="!currentUser">Ej inloggad</p></li>
</ul>
		
	</div>
	</div>
	</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import DropDown from '@/components/Landing/DropDown.vue'
export default {
	components: {
		DropDown,
	},
	data(){return{
		linkProducts: 'Produkter',
		linkLogIn: 'Logga in',
		linkRegForm: 'Registrera dig',
		logOut: 'Logga ut',
		myAccount: 'Mitt konto',
		showCart: false,
	}},
	computed: {
		...mapGetters(['currentUser'])
	}, 
	methods: {
		handleLogOut(){
			this.$router.push('/')
			location.reload();
		},
		cart(){
		console.log('Pressed!')
		this.showCart = true;
	},
	},
}
</script>

<style scoped>
.box{
	background-color: #D9C5B4;
}

.header{
	grid-column: 1/4;
	grid-row: 1/2;
}

.logo{
	width: 10em;
}

.icon{
	margin-left: 2em;
	margin-right: 1.5em;
	margin-top: 1.7em;
	position: relative;
	display: inline-block;
margin-right: 0;
}

#nav {
  padding: 30px;
}

.dropdown-content {
  display: flex;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  justify-content: center;
}

.menulinks{
	margin-left: 30%;
	position: relative;
	top: 1.5em;
}

.menulinks ul {
    width: 100%;
    list-style-type: none;
    margin: auto;
    white-space: nowrap;
}
.menulinks li { 
    display: inline-block;
}
</style>