<template>
<div>
	<div class="reg-form">
    

     <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
   
    <div class="form-group">
      <label>Email</label><br>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label>Password</label><br>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <div class="form-group">
      <label>Name</label><br>
      <input type="text" class="form-control" v-model="name" placeholder="Name"/>
    </div>

<h4>Address</h4>
    <div class="form-group">
      <label>Street</label><br>
      <input type="text" class="form-control" v-model="address.street" placeholder="Street"/>
    </div>

    <div class="form-group">
      <label>Zip</label><br>
      <input type="number" class="form-control" v-model="address.zip" placeholder="Zip"/>
    </div>

    <div class="form-group">
      <label>City</label><br>
      <input type="text" class="form-control" v-model="address.city" placeholder="City"/>
    </div>

    <button class="btn btin-primary btn-block">Sign Up</button>
     </form>
  </div>
 
</div>

</template>

<script>
import axios from 'axios'

export default {
data(){return{
    email: '',
    password: '', 
    name: '',
    address: {
    street: '',
    zip: '',
    city: '',}
  }},
	components: {
		
	},

  methods: {
    async handleSubmit(){
  
       await axios.post('http://localhost:5000/api/register', {
        email: this.email,
        password: this.password,
        name:  this.name,
        address: this.address,
        street: this.address.street, 
        zip: this.address.zip,
        city: this.address.city,

      });  
       
       this.$router.push('/home')
    }
  },
}
</script>

<style scoped>
.reg-form{
	background-color: gray;
	width: auto;
	margin: 0 auto;
	height: 39em;
	padding-top: 4em;
}

form{
	background-color: white;
	height: 32em;
	padding-top: 1em;
	border-style: solid;
	width: 20em;
	margin: 0 auto;
}

.form-group{
	margin: 0.2em;
}

button{
 border-style: none;
 width: 15vh;
 height: 5vh;
 margin: 1.8em;
}


</style>