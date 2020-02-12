<template>
  <div class="o-menu">
    <div class="f-text-right">
      <arrow-left-icon :size="32"/>
    </div>
    <div
      v-for="(route, key) in links"
      :key="key"
      class="f-p-1"
    >
      <router-link
        class="a-link f-menu"
        :to="route.path"
      >
        {{ route.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
import ArrowLeftIcon from 'icons/ArrowLeft'

export default {
  name: 'o-menu',
  components: {
    ArrowLeftIcon,
  },
  data: () => ({
    links: [
      {
        path: '/sign-in',
        label: 'Sign in',
      },
      {
        path: '/sign-up',
        label: 'About',
      },
      {
        path: '/map',
        label: 'Map',
      },
    ],
  }),
}
</script>
