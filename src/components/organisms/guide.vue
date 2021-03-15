<template>
  <o-float-container>
    <a-icon-close-popup add-class="f-mt-1 f-mr-1"/>
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slider-item v-for="(slide, index) in slides" :key="index">
        <m-slide
          :title="slide.title"
          :description="slide.description"
          :icon="slide.icon"
        />
      </slider-item>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>

  </o-float-container>
</template>

<script>
import { slider as Slider, slideritem as SliderItem } from 'vue-concise-slider';
import OFloatContainer from 'organisms/float-container';
import MSlide from 'molecules/slide';
import AIconClosePopup from 'atoms/icon/close-popup';

export default {
  name: 'o-guide',
  components: {
    AIconClosePopup,
    Slider,
    SliderItem,
    MSlide,
    OFloatContainer,
  },
  data: () => ({
    options: {
      currentPage: 0,
    },
  }),
  computed: {
    slides () {
      return [
        {
          title: 'Sprawdź czas rozpoczęcia wydarzenia',
          description: 'Wydarzenie, na które się zarejestrowałeś rozpoczyna się konkretnego dnia i konkretnej godzinie. Informację o tym znajdziesz na stronie startowej zaraz pod zdjęciem wydarzenia.',
          icon: this.ICONS.timer,
        },
        {
          title: 'Rozpocznij poszukiwania',
          description: 'Wydarzenie, na które się zarejestrowałeś rozpoczyna się konkretnego dnia i konkretnej godzinie. Informację o tym znajdziesz na stronie startowej zaraz pod zdjęciem wydarzenia.',
          icon: this.ICONS.score,
        },
        {
          title: 'Wypatruj wydarzeń czasowych',
          description: 'Wydarzenie, na które się zarejestrowałeś rozpoczyna się konkretnego dnia i konkretnej godzinie. Informację o tym znajdziesz na stronie startowej zaraz pod zdjęciem wydarzenia.',
          icon: this.ICONS.watch_later,
        },
      ];
    },
  },
};
</script>
