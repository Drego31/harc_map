<template>
  <div
    class="o-footer"
  > <!--    v-if="isLogin"-->
    <a-button-icon
      class="f-footer"
    >
      <span>
        <icon-home :size="32"/>
      </span>
    </a-button-icon>
    <a-button-icon
      class="f-footer"
    >
      <icon-clock :size="32"/>
    </a-button-icon>
    <a-button-icon
      class="f-footer"
    >
      <icon-star :size="32"/>
    </a-button-icon>
    <a-button-icon
      class="f-footer"
    >
      <icon-map :size="32"/>
    </a-button-icon>
    <a-button-icon
      class="f-footer"
      @click="toggle()"
    >
      <icon-menu :size="32"/>
    </a-button-icon>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IconMap from 'icons/Map.vue';
import IconMenu from 'icons/Menu.vue';
import IconStar from 'icons/Star.vue';
import IconClock from 'icons/Clock.vue';
import IconHome from 'icons/Home.vue';
import AButtonIcon from 'atoms/button/icon';

export default {
  name: 'o-footer',
  components: {
    AButtonIcon,
    IconMap,
    IconMenu,
    IconStar,
    IconClock,
    IconHome,
  },
  computed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
  },
};
</script>
