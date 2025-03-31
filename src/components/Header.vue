<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    padding: 10px;
  }
  nav ul {
    display: flex;
    gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  