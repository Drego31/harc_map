<template>
  <t-page class="f-flex f-flex-col">
    <div>
      <m-field-text
        :label="$t('page.admin.searchPoint.search')"
        :assist="$t('page.admin.searchPoint.searchAssist')"
        v-model="phrase"
      />
    </div>
    <div class="f-flex-1 f-scroll-default f-mr--2">
      <div
        class="m-grid f-search-point f-mr-2"
        v-for="[key, point] of filteredPoints.entries()"
        :key="key"
      >
        <a-button-icon class="f-minimal">
          <a-icon-category :category-id="point.pointCategory"/>
        </a-button-icon>
        <div class="f-py-2">{{ point.pointId }}</div>
        <div class="f-pl-1 f-py-2 f-text-subtext f-text-14">{{ point.pointName }}</div>
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
import { map } from 'map';
import AButtonIcon from 'atoms/button/icon';
import AIconCategory from 'atoms/icon/category';

export default {
  name: 'p-search-point',
  components: {
    AIconCategory,
    AButtonIcon,
    MFieldText,
    TPage,
  },
  data: () => ({
    phrase: '',
    searcher: new JsSearch.Search('pointId'),
  }),
  mounted () {
    this.defineSearcher({ withoutClass: true });
  },
  computed: {
    ...mapGetters('event', ['points']),
    filteredPoints () {
      const searched = this.searcher.search(this.phrase);
      return this.phrase === '' ? this.points : searched;
    },
  },
  methods: {
    panToMap (point) {
      map.panToPointLocationOnMap(point);
    },
    defineSearcher (config = { withoutClass: false }) {
      if (config.withoutClass === false) {
        this.searcher = new JsSearch.Search('pointId');
      }
      this.searcher.addIndex('pointId');
      this.searcher.addIndex('pointName');
      this.searcher.addDocuments(this.points);
    },
  },
  watch: {
    points () {
      this.defineSearcher();
    },
  },
};
</script>
