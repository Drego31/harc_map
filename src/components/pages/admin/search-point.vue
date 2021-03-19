<template>
  <t-page>
    <div>
      <m-field-text
        label="Szukaj po kodzie..."
        v-model="phrase"
      />
    </div>
    <div>
      <div v-for="[key, point] of points.entries()" :key="key">
        {{ point.pointId }}
      </div>
    </div>
  </t-page>
</template>

<script>
import { mapGetters } from 'vuex';
import TPage from 'templates/page';
import MFieldText from 'molecules/field/text';

export default {
  name: 'p-search-point',
  components: {
    MFieldText,
    TPage,
  },
  data: () => ({
    phrase: '',
  }),
  computed: {
    ...mapGetters('event', [
      'points',
    ]),
  },
};
</script>
