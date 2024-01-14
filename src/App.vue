<template>
  <div id="app">
    <header>
      <router-link to="/" class="nav-logo">
        Booking
      </router-link>
      <nav class="nav">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link @click="logout" v-if="isLoggedIn" class="nav-link">Logout</router-link>
      </nav>
    </header>

    <div class="content">
      <router-view></router-view>
    </div>

    <footer>
      <p>&copy; 2023 Ваша компанія. Усі права захищені.</p>
    </footer>
  </div>
</template>

<script>
</script>

<style>
#app {
  overflow-x: hidden;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
}

header {
  background-color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.nav-logo {
  color: #333;
  font-size: 1.5rem;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.nav-link {
  color: #333;
  margin-left: 15px;
  text-decoration: none !important;
}

.nav-link:hover {
  text-decoration: none !important;
  color: black;
}

.content {
  flex-grow: 1; 
}

footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
