<template>
  <div class="o-menu">
    <div class="m-nav">
      <router-link
        v-for="(route, key) in links"
        :key="key"
        class="a-link f-menu"
        :to="route.path"
      >
        {{ route.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'o-menu',
  data: () => ({
    links: [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '/about',
        label: 'About',
      },
      {
        path: '/contact',
        label: 'Contact',
      },
    ],
  }),
}
</script>
