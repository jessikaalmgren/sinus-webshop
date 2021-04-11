<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>
.products{
	grid-row: 2/3;
	grid-column: 1/4;
}

.products-grid{
	display: grid;
	grid-template-columns: repeat(3, 1fr auto);
	grid-template-rows: repeat(3, 1fr auto);
	grid-gap: 1em;
}
</style>