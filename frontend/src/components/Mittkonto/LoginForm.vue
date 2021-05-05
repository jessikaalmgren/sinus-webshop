<template>
<section class="login">
	<h1 v-if="currentUser">Du är redan inloggad!</h1>
	<form @submit.prevent="handleLoginSubmit">
    <h3>Login</h3>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <button class="btn btn-primary btn-block">Login</button>
  </form>

</section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data(){return{
	email: '',
    password: '',
	}},

	methods: {
		handleLoginSubmit(){
      
      this.$store.dispatch('logIn', {email: this.email, password: this.password})
      this.$router.push('/')
	this.$store.dispatch('currentUser')
    }
	},
	computed: {
		...mapGetters(['currentUser'])
	},

}
</script>

<style scoped>

label {
  display: block;
}

.login{
	margin: 0 auto;
	width: auto;
	height: 30em;
	background-color: gray;
	padding-top: 3em;
}
form{
	background-color: white;
	height: 20em;
	padding-top: 2em;
	border-style: solid;
	width: 20em;
	margin: 0 auto;
	
}


button{
 border-style: none;
 width: 15vh;
 height: 5vh;
}

.form-group{
  margin: 30px;
  
}
</style>