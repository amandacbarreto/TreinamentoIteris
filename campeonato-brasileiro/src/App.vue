<template>
  <v-app>
    <AppTopBar/>
    <PaginaInicial/>
  </v-app>
</template>

<script>
import PaginaInicial from './components/PaginaInicial.vue';
import AppTopBar from './components/shared/AppTopBar.vue';

export default {
  name: 'App',
  components: {
    PaginaInicial,
    AppTopBar
  }
};

</script>
