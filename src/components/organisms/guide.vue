<template>
  <o-float-container>
    <m-slide
      title="Sprawdź czas rozpoczęcia wydarzenia"
      description="Wydarzenie, na które się zarejestrowałeś rozpoczyna się konkretnego dnia i konkretnej godzinie.
      Informację o tym znajdziesz na stronie startowej zaraz pod zdjęciem wydarzenia."
      :icon="ICONS.timer"
      slide-position="0"
      slide-max="4"
    />
  </o-float-container>
</template>

<script>
import OFloatContainer from 'organisms/float-container';
import MSlide from 'molecules/slide';
export default {
  name: 'o-guide',
  components: { MSlide, OFloatContainer },
};
</script>
