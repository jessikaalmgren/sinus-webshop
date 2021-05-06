<template>
  <div id="app">
    
    <router-view/>
	
  </div>
</template>

<script>

export default({

})
</script>


<style lang="scss">
body{
	background-color: #F2E8DF;
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
    color: #261E1A;
	margin: 0.5em;
	text-decoration: none;

    &.router-link-exact-active {
      color: #040D08;
	text-decoration: none;
    }
  }
}
</style>
