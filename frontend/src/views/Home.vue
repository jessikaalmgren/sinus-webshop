<template>
  <div class="grid-header">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  components: {
	Header,
  }
}
</script>

<style scoped>
.grid-header{
	grid-column: 1/4;
	grid-row: 1/2;
}
</style>
