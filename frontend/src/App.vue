<template>
  <div id="app">
    
    <router-view/>
	
  </div>
</template>

<script>


export default({
	components: {
		
	}

})
</script>


<style lang="scss">
body{
	background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
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
