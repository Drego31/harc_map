<template>
  <t-point-form
    :defaultValues="defaultValues"
    :on-save="createNewPoint"
  />
</template>

<script>
import { api } from 'api';
import { mapGetters } from 'vuex';
import { idUtils } from 'utils/id';
import { mixins } from 'mixins/base';
import TPointForm from 'templates/point-form';

export default {
  mixins: [mixins.form],
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
      return api.addPoint({
        point,
        eventId: this.eventId,
      });
    },
  },
};
</script>
