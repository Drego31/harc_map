<template>
  <t-page>
    <div>
      <m-field-text
        label="Szukaj po kodzie..."
        v-model="phrase"
      />
    </div>
    <div>
      <div v-for="[key, point] of filteredPoints.entries()" :key="key">
        {{ point.pointId }}
      </div>
    </div>
  </t-page>
</template>

<script>
import * as JsSearch from 'js-search';
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
    searcher: new JsSearch.Search('pointId'),
  }),
  mounted () {
    this.searcher.addIndex('pointId');
    this.searcher.addIndex('pointName');
    this.searcher.addDocuments(this.points);
  },
  computed: {
    ...mapGetters('event', [
      'points',
    ]),
    filteredPoints () {
      const searched = this.searcher.search(this.phrase);
      return this.phrase === '' ? this.points : searched;
    },
  },
  watch: {
    points () {
      this.searcher = new JsSearch.Search('pointId');
      this.searcher.addIndex('pointId');
      this.searcher.addIndex('pointName');
      this.searcher.addDocuments(this.points);
    },
  },
};
</script>
