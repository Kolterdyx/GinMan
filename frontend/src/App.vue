<template>

  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark gm-bg-primary fixed-top">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Brand -->
      <a class="navbar-brand" href="/">
        <img height="50" src="./assets/logo.svg" alt="GinMan logo"/>
      </a>
    </div>
    <!-- Container wrapper -->
  </nav>

  <div id="sidebarWrapper" class="gm-bg-dark">
    <b-sidebar id="sidebarMenu" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <NavbarItem link="/dashboard" text="Dashboard" icon="BIconSpeedometer2"></NavbarItem>
        <NavbarItem link="/monitoring" text="Monitoring" icon="BIconActivity"></NavbarItem>
        <NavbarItem link="/settings" text="Settings" icon="BIconGear"></NavbarItem>
      </div>
    </b-sidebar>
  </div>

  <main>
    <div class="container pt-4">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>

import NavbarItem from "@/components/NavbarItem";

export default {
  name: 'App',
  components: {
    NavbarItem
  }
}
</script>

<style scoped>

@import "@/assets/css/main.css";

#sidebarMenu {
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
}

#sidebarMenu .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

#sidebarWrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 76px 0 0;
  width: 240px;
  z-index: 600;

}

main {
  margin-top: 58px;
  padding-left: 240px;
}


</style>
