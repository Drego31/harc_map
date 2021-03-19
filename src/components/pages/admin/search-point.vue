<template>
  <t-page>
    <div>
      <m-field-text
        label="Szukaj..."
        assist="Szukaj po kodzie lub nazwie punktu."
        v-model="phrase"
      />
    </div>
    <div>
      <div
        class="m-grid f-search-point"
        v-for="[key, point] of filteredPoints.entries()"
        :key="key"
      >
        <div class="f-py-2">{{ point.pointId }}</div>
        <div class="f-pl-1 f-py-2 f-text-subtext f-text-14">
          {{ point.pointName }}
        </div>
        <a-button-icon @click="panToMap(point)">
          <a-icon :name="ICONS.map"/>
        </a-button-icon>
      </div>
    </div>
  </t-page>
</template>

<script>
import * as JsSearch from 'js-search';
import { mapGetters } from 'vuex';
import TPage from 'templates/page';
import MFieldText from 'molecules/field/text';
import AIcon from 'atoms/icon';
import { map } from 'map';
import AButtonIcon from 'atoms/button/icon';

export default {
  name: 'p-search-point',
  components: {
    AButtonIcon,
    AIcon,
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
  methods: {
    panToMap (point) {
      map.panToPointLocationOnMap(point);
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
