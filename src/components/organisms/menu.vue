<template>
  <div :class="isOpen ? 'f-open' : ''" class="o-menu">
    <div class="f-text-right">
      <a-button-icon @click="toggle()">
        <arrow-left-icon :size="32"/>
      </a-button-icon>
    </div>
    <div
      :key="key"
      class="f-p-1"
      v-for="(route, key) in links"
    >
      <router-link
        :to="route.path"
        @click.native="toggle()"
        class="a-link f-menu"
      >
        {{ route.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ArrowLeftIcon from 'icons/ArrowLeft';
import AButtonIcon from 'atoms/button/icon';

export default {
  name: 'o-menu',
  components: {
    AButtonIcon,
    ArrowLeftIcon,
  },
  data: () => ({
    links: [
      {
        path: '/map',
        label: 'Map',
      },
    ],
  }),
  computed: {
    ...mapGetters('menu', [
      'isOpen',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
  },
};
</script>
