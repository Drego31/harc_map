<template>
  <transition name="fade">
    <o-float-container v-if="isOpen">
      <a-icon-close-popup add-class="f-mt-1 f-mr-1" @click="close"/>
      <slider ref="slider" @slide="onSlide">

        <slider-item>
          <m-slide :title="this.$t('features.guide.howItWorks.title')" :icon="ICONS.help">
            {{ this.$t('features.guide.howItWorks.description') }}
          </m-slide>
        </slider-item>

        <slider-item>
          <m-slide :title="this.$t('features.guide.eventStart.title')" :icon="ICONS.timer">
            <div>{{ $t('features.guide.eventStart.description') }}</div>
            <div class="f-mt-1 f-bold">
              <span>{{ $t('features.guide.eventStart.add0') }}</span>
              <span>{{ datetime($store.getters['event/eventStartDate']) }}</span>
            </div>
            <div class="f-mt-1 f-bold">
              <span>{{ $t('features.guide.eventStart.add1') }}</span>
              <span>{{ datetime($store.getters['event/eventEndDate']) }}</span>
            </div>
          </m-slide>
        </slider-item>

        <slider-item>
          <m-slide :title="this.$t('features.guide.permanentPoints.title')" :icon="ICONS.add_circle_outline">
            <div class="f-mb-3">{{ $t('features.guide.permanentPoints.description') }}</div>
            <div class="f-flex">
              <a-icon :name="ICONS.stop_circle" class="f-text-info f-mr-1" size="20"/>
              <div class="f-line-24">{{ $t('features.guide.permanentPoints.add0') }} <span class="f-bold">1 {{ $t('general.pointUnit')}}</span></div>
            </div>
            <div class="f-flex">
              <a-icon :name="ICONS.stop_circle" class="f-text-warning f-mr-1" size="20"/>
              <div class="f-line-24">{{ $t('features.guide.permanentPoints.add1') }} <span class="f-bold">2 {{ $t('general.pointUnit')}}</span></div>
            </div>
            <div class="f-flex">
              <a-icon :name="ICONS.stop_circle" class="f-text-danger f-mr-1" size="20"/>
              <div class="f-line-24">{{ $t('features.guide.permanentPoints.add2') }} <span class="f-bold">3 {{ $t('general.pointUnit')}}</span></div>
            </div>
          </m-slide>
        </slider-item>

        <slider-item>
          <m-slide :title="this.$t('features.guide.seeOnTimeoutPoints.title')" :icon="ICONS.star">
            <div class="f-mb-3">{{ $t('features.guide.seeOnTimeoutPoints.description') }}</div>
            <div class="f-flex">
              <a-icon :name="ICONS.history_toggle_off" class="f-disabled-point f-mr-1" size="20"/>
              <div class="f-line-24">{{ $t('features.guide.seeOnTimeoutPoints.add0') }}</div>
            </div>
            <div class="f-flex">
              <a-icon :name="ICONS.watch_later" class="f-active-point f-mr-1" size="20"/>
              <div class="f-line-24">{{ $t('features.guide.seeOnTimeoutPoints.add1') }}</div>
            </div>
            <div class="f-flex">
              <a-icon :name="ICONS.access_time" class="f-future-point f-mr-1" size="20"/>
              <div class="f-line-24">{{ $t('features.guide.seeOnTimeoutPoints.add2') }}</div>
            </div>
          </m-slide>
        </slider-item>

        <slider-item>
          <m-slide :title="this.$t('features.guide.startCollecting.title')" :icon="ICONS.score">
            {{ $t('features.guide.startCollecting.description') }}
          </m-slide>
        </slider-item>

      </slider>

    </o-float-container>
  </transition>
</template>

<script>
import { slider as Slider, slideritem as SliderItem } from 'vue-concise-slider';
import OFloatContainer from 'organisms/float-container';
import MSlide from 'molecules/slide';
import AIconClosePopup from 'atoms/icon/close-popup';
import { mapGetters, mapMutations } from 'vuex';
import moment from 'moment';
import AIcon from 'atoms/icon';

export default {
  name: 'o-guide',
  components: {
    AIcon,
    AIconClosePopup,
    Slider,
    SliderItem,
    MSlide,
    OFloatContainer,
  },
  computed: {
    ...mapGetters('guide', ['isOpen']),
  },
  methods: {
    ...mapMutations('guide', ['close']),
    onSlide ({ currentPage, direction }) {
      const isLast = currentPage > 0;
      const isRebound = direction === 'rebound';
      if (isLast && isRebound) {
        // this.close();
      }
    },
    datetime (datetime) {
      return moment(new Date(datetime)).format('DD.MM.YYYY [o] HH:mm');
    },
  },
  watch: {
    isOpen () {
      this.$refs.slider && this.$refs.slider.$emit('slideTo', 0);
    },
  },
};
</script>
