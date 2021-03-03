<template>
  <div
    v-if="detailsAreOpen"
    class="m-cover f-popup"
    @click="toggle"
  >
    <div class="o-popup f-score" @click.stop>
      <div class="f-text-primary f-pb-1">{{ user.userTeam }}</div>
      <o-collected-points
        class="f-text-16 f-text-normal"
        :collected-points="collectedPointsByUser(user)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OCollectedPoints from 'organisms/collected-points';

export default {
  name: 'o-popup-score',
  components: { OCollectedPoints },
  data: () => ({
    detailsAreOpen: false,
  }),
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('event', [
      'categories',
    ]),
    ...mapGetters('allUsers', [
      'collectedPointsByUser',
    ]),
    filteredCategories () {
      return this.categories.filter(category => category.categoryId !== 0);
    },
  },
  methods: {
    toggle () {
      this.detailsAreOpen = (this.detailsAreOpen === false);
    },
  },
};
</script>
