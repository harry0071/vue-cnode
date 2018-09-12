<template>
  <div id="app">
    <TopNav/>
    <router-view/>
    <router-view name="sidebar" />
  </div>
</template>

<script>
  import TopNav from 'cp/TopNav.vue';
  export default {
    components: {
        TopNav
    },
  }
</script>

<style>

</style>
