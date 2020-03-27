<template>
  <div class="f-flex f-flex-col f-flex-al-center">
    <div class="a-title" v-text="name"/>
    <div class="f-pb-2 f-text-bold" v-text="teamName"/>
    <div class="f-text-14 f-pt-2 f-pb-1 f-text-gray">
      Zebrane punkty
    </div>

    <canvas
      id="points"
      class="f-pb-2"
      width="150"
      height="115"
    >
      <div>
        <icon-star :size="64"/>
      </div>
      <div>
        {{ collectedPointsIds.length }}
      </div>
    </canvas>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconStar from 'icons/Star.vue';
import { THEMES } from 'utils/style-manager';

let ctx = null;
let percent = 0;

export default {
  name: 'o-start',
  components: {
    IconStar,
  },
  data: () => ({
    value: 0,
  }),
  mounted () {
    ctx = document.getElementById('points').getContext('2d');

    this.runSpecificDrawing();
  },
  computed: {
    ...mapGetters('user', [
      'teamName',
      'collectedPointsIds',
      'valueChanged',
    ]),
    ...mapGetters('event', [
      'name',
    ]),
    ...mapGetters('theme', {
      themeName: 'name',
    }),
  },
  methods: {
    runSpecificDrawing () {
      this.value = this.collectedPointsIds.length - 1;
      if (this.valueChanged === true) {
        window.requestAnimationFrame(this.draw);
        this.$store.commit('user/setValueChanged', false);
      } else {
        this.draw({ finished: true });
      }
    },
    draw ({ finished = false }) {
      percent += 3;

      if (finished) {
        percent = 100;
      }

      ctx.clearRect(0, 0, 300, 300);

      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(75, 5);
      ctx.arc(75, 55, 50, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * (percent / 50)));
      ctx.strokeStyle = '#9a28d9';
      ctx.fillStyle = this.themeName === THEMES.light ? 'black' : 'white';
      ctx.stroke();
      ctx.font = '42px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(this.value), 75, 55);
      ctx.save();

      if (percent < 99) {
        window.requestAnimationFrame(this.draw);
      } else if (percent === 99) {
        this.value++;
        window.requestAnimationFrame(this.draw);
      } else {
        percent = 0;
      }
    },
  },
  watch: {
    $route () {
      this.runSpecificDrawing();
    },
    themeName () {
      this.draw({ finished: true });
    },
  },
};

</script>
