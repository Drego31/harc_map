<template>
  <t-point-form
    :defaultValues="defaultValues"
    :on-save="createNewPoint"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import { idUtils } from 'utils/id';
import TPointForm from 'templates/point-form';

export default {
  name: 'p-new-point',
  components: {
    TPointForm,
  },
  data: () => ({
    defaultValues: {},
  }),
  mounted () {
    this.defaultValues = {
      pointId: idUtils.generateNewId(),
    };
  },
  computed: {
    ...mapGetters('event', [
      'eventId',
    ]),
  },
  methods: {
    createNewPoint (point) {
      return this.$store.dispatch('event/addPoint', {
        point,
        eventId: this.eventId,
      });
    },
  },
};
</script>
