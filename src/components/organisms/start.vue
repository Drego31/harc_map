<template>
  <div class="m-panel f-start">
    <div class="a-img f-map" :style="style">
      <div class="a-text f-title f-start" v-text="eventName"/>
    </div>
    <div class="f-p-2">
      <div v-if="sumOfCollectedPoints > 0" class="a-text f-subtitle f-start">
        {{ $t('page.start.alreadyCollected') }}
        <span class="f-text-white">
          {{ sumOfCollectedPoints }} {{ $t('general.pointUnit') }}
        </span>
      </div>
      <div v-else class="a-text f-subtitle f-start">
        {{ $t('page.start.nothingCollected') }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { THEMES } from 'utils/style-manager';

export default {
  name: 'o-start',
  computed: {
    ...mapGetters('user', [
      'userTeam',
      'sumOfCollectedPoints',
    ]),
    ...mapGetters('event', [
      'eventName',
    ]),
    ...mapGetters('theme', {
      themeName: 'name',
    }),
    style () {
      if (this.themeName === THEMES.dark) {
        return 'background-image: url("/img/map-screen-dark.png")';
      } else {
        return 'background-image: url("/img/map-screen.png")';
      }
    },
  },
};

</script>
