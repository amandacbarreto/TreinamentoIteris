<template>
  <div class="sites-favoritos">
    <h1>Sites Favoritos</h1>
    <ul>
      <li v-for="site of sitesFavoritos" :key="site.id">
        <a :href="site.link">{{site.nome}}</a>  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SitesFavoritos',
  data(){
    return {
      sitesFavoritos: []
    }
  },

  created(){
    fetch('https://hackthon-decola.firebaseio.com/sites-favoritos.json')
    .then(resultado=>resultado.json())
    .then(json=>{
      this.sitesFavoritos=json
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
