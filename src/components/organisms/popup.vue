<template>
  <div
    v-if="isOpen"
    style="
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 90;
      background: rgba(0,0,0,0.3);
    "
  >
    <div
      style="
        width: 280px;
        background: rgb(0, 136, 68);
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 5px 2px;
        margin: 32vh auto auto;
        padding: 56px 32px 48px;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
      "
    >
      <div
        v-for="[key, message] of listOfMessages.entries()"
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
import AIcon from 'atoms/icon';
import { mapGetters } from 'vuex';

export default {
  name: 'o-popup',
  components: { AIcon },
  computed: {
    ...mapGetters('popup', [
      'isOpen',
      'listOfMessages',
      'icon',
    ]),
  },
};
</script>
