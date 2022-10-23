<template>
  <span class="list-group-item list-group-item-action py-2 ripple bg-dark list-group-item-light">
    <router-link class="no-underline " v-bind:to="link_">
      <div class="gm-nav-link">
        <span class="bi gm-nav-link-icon" :class="icon_"></span>
        <span class="gm-nav-link-text">{{ text_ }}</span>
      </div>
    </router-link>
  </span>
</template>

<script>
export default {
  name: "NavbarItem",
  props: {
    link: String,
    text: String,
    icon: String,
  },
  data() {
    return {
      link_: this.$props.link,
      text_: this.$props.text,
      icon_: this.$props.icon,
    }
  }
}
</script>

<style scoped>

</style>