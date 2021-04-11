<template>
<div>
<div class="box header">
	<div class="box-content">
		<div id="nav">
			<img class="logo" src="@/assets/sinus-logo.svg" alt="Image not loading">
		<div class="flexend">
    <router-link to="/">{{linkProducts}}</router-link> 
    <router-link to="/about">{{linkMyAccount}}</router-link>
	<img src="@/assets/icon-bag-white.svg" alt="Image no loading" class="icon">
		</div>
	</div>
	</div>
	</div>
</div>
</template>

<script>
export default {
	data(){return{
		linkProducts: 'Produkter',
		linkMyAccount: 'Mitt Konto',
	}}
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
