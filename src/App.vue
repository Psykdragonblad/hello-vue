<template>
  <div id="app">         
    {{descricao}}<br/>
     <router-link to="/mapa">Eu sou um link para o mapa</router-link> 
    <mapa></mapa>
    
    <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
     descricao: 'Esse mapa é um componente'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
