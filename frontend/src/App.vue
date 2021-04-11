<template>
  <div id="app">
	<section class="grid">
		<div class="box products">
			<div class="box-content">Produkter
				<div class="products-grid">
					<div class="product1">Produkt 1 <h1>Produktnamn</h1> <p>Beskrivning</p> <img src="@/assets/hoodie-ash.png" alt=""></div>
					<div class="product2">Produkt 2</div>
					<div class="product3">Produkt 3</div>
					<div class="product4">Produkt 4</div>
					<div class="product5">Produkt 5</div>
				</div>
			</div>
		</div>
		<div class="box footer">
		<div class="box-content">Footer</div>
		</div>
    
    <router-view/>
	</section>
  </div>
</template>

<script>


export default({
	components: {
		
	}

})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr auto);
	grid-gap: 1em; 
	padding: 2em 10em 10em 10em;

}


.box{
	background-color: grey;
}



.products{
	grid-row: 2/3;
	grid-column: 1/4;
}

.footer{
	grid-column: 1/4;
	grid-row: 3/4;
}

.products-grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr auto);
	grid-template-rows: repeat(3, 1fr auto);
	grid-gap: 1em;
}

#nav {
	display: flex;
	justify-content: space-between;
	
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
	margin: 0.5em;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
