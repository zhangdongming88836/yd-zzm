<template>
  <div id="app">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 *{margin:0;padding:0;box-sizing:border-box;}
 ul{list-style:none;}
 a{text-decoration:none;}
</style>
