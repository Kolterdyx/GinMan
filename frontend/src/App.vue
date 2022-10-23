<template>

  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Brand -->
      <a class="navbar-brand" href="/frontend/public">
<!--        <img height="50" src="../../src/assets/logo_text.svg" alt="GinMan logo"/>-->
      </a>
    </div>
    <!-- Container wrapper -->
  </nav>
  <nav id="sidebarMenu" class="sidebar bg-dark">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <NavbarItem link="/dashboard" text="Dashboard" icon="bi-speedometer2"></NavbarItem>
        <NavbarItem link="/monitoring" text="Monitoring" icon="bi-activity"></NavbarItem>
        <NavbarItem link="/settings" text="Settings" icon="bi-gear"></NavbarItem>
      </div>
    </div>
  </nav>

  <main>
    <div class="container pt-4">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>

import NavbarItem from "./components/NavbarItem";

export default {
  name: 'App',
  components: {
    NavbarItem
  }
}
</script>

<style>

@import 'assets/css/main.css';

#sidebarMenu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

main {
  margin-top: 58px;
  padding-left: 240px;
}


#sidebarMenu .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

</style>
