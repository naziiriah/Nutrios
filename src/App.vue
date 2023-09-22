<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeHeader from './components/HomeHeader.vue';
</script>

<template>
  <main>
    <HomeHeader />
    <RouterView />
  </main>
</template>

<style>
</style>
