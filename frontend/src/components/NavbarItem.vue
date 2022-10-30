<template>
  <b-list-group-item class="list-group-item-action py-2 ripple bg-dark list-group-item-light">
    <router-link class="no-underline " v-bind:to="link_">
      <div class="link">
        <span class="link-icon">
          <component :is="icon_"></component>
        </span>
        <span class="link-text">{{ text_ }}</span>
      </div>
    </router-link>
  </b-list-group-item>
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

.link {
    color: #fff;
    display: flex;
    align-items: center;
}

.link:hover {
    color: #999;
}

.link-text {
    flex-shrink: 0;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1rem;

}

.link-icon {
    flex-shrink: 0;
    font-size: 1.5rem;
    font-weight: 600;
}
</style>