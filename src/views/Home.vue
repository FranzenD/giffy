<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <g-search></g-search>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import GSearch from '@/components/GSearch.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    GSearch
  }
};
</script>
