<template>
    <div id="app">
      <AppHeader />
      <router-view />
      <AppFooter />
    </div>
  </template>
  
  <script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
  
  export default {
    name: "App",
    components: { AppHeader, AppFooter },
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    margin: 0;
  }
  </style>
  