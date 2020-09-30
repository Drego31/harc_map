<template>
  <div class="m-grid f-point">
    <div>
      <a-icon-category :category-id="point.pointCategory"/>
    </div>
    <div>{{ point.pointId }}</div>
    <div>{{ getCategoryById(point.pointCategory).pointValue }} pkt</div>
    <div>
      <a-icon :name="ICONS.map"/>
    </div>
    <div>
      <a-icon :name="ICONS.arrow_drop_down"/>
    </div>
  </div>
</template>

<script>
import AIcon from 'atoms/icon';
import AIconCategory from 'atoms/icon/category';
import { mapGetters } from 'vuex';

export default {
  name: 'm-row-point',
  components: {
    AIconCategory,
    AIcon,
  },
  props: {
    point: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('event', [
      'getCategoryById',
    ]),
  },
};
</script>
