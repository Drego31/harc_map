<template>
  <div
    v-if="isOpen"
    class="m-cover f-popup"
  >
    <div class="o-popup">
      <div
        v-for="[key, message] of listOfMessages.entries()"
        :key="key"
        class="f-pb-1"
        :class="{ 'f-text-28 f-mb-1': key === 0 }"
        v-text="message"
      />
      <a-icon
        :name="icon"
        class="f-mt-1"
        size="72"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'o-popup',
  computed: {
    ...mapGetters('popup', [
      'isOpen',
      'listOfMessages',
      'icon',
    ]),
  },
};
</script>
