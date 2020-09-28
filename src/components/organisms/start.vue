<template>
  <div class="f-flex f-flex-col f-flex-al-center">
    <div class="a-title" v-text="name"/>
    <div class="f-pb-2 f-text-bold" v-text="userTeam"/>
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
        <a-icon
          :name="ICONS.star"
          :size="64"
        />
      </div>
      <div>
        {{ collectedPointsIds.length }}
      </div>
    </canvas>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { THEMES } from 'utils/style-manager';
import AIcon from 'atoms/icon';

let ctx = null;
let percent = 0;

export default {
  name: 'o-start',
  components: {
    AIcon,
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
      'userTeam',
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
    resetValue () {
      this.value = this.collectedPointsIds.length - 1;
    },
    makeAnimationStep () {
      window.requestAnimationFrame(this.drawCanvas);
    },
    runSpecificDrawing () {
      this.resetValue();
      if (this.valueChanged === true) {
        this.makeAnimationStep();
        this.$store.commit('user/setValueChanged', false);
      } else {
        this.drawCanvas({ finished: true });
      }
    },
    drawText (text, textColor) {
      ctx.fillStyle = textColor;
      ctx.font = '42px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 75, 55);
      ctx.save();
    },
    drawCircle (circleColor) {
      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(75, 5);
      ctx.arc(75, 55, 50, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * (percent / 50)));
      ctx.strokeStyle = circleColor;
      ctx.stroke();
    },
    drawCanvas ({ finished = false }) {
      percent += 3;

      if (finished) {
        percent = 100;
        this.value++;
      }

      ctx.clearRect(0, 0, 300, 300);

      const circleColor = '#9a28d9';
      this.drawCircle(circleColor);

      const text = String(this.value);
      const textColor = this.themeName === THEMES.light ? 'black' : 'white';
      this.drawText(text, textColor);

      if (percent < 99) {
        this.makeAnimationStep();
      } else if (percent === 99) {
        this.value++;
        this.makeAnimationStep();
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
      this.runSpecificDrawing();
    },
  },
};

</script>
