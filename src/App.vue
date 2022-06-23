<template>
  <div id="app">
    <nav>
      <router-link to="/">Авторизация</router-link>
      <router-link to="/analytics">Аналитика</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3236;
}

nav {
  padding: 30px;
  box-shadow: 0px 0px 5px 1px;

  a {
    font-weight: bold;
    color: #2c3236;
    text-decoration: none;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #ff4402;
    }
  }
}

h1 {
  margin-top: 30px;
  color: #ff4402;
}
</style>
