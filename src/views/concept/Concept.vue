<template lang="pug">
section#concept(v-anchor="'concept'")
  img.img(:src="require(`@img/concept-${locale}.gif`)" alt="concept")
  .concept-content
    .section-title {{ $t('header.concept') }}
    p.content(v-html="$t('concept.content')")
</template>
<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Concept',
  setup() {
    const { locale } = useI18n();
    
    return {
      locale
    };
  }
};
</script>
<style lang="sass" scoped>
#concept
  .img
    display: block
  .concept-content
    display: none
  @media (max-width: $mb)
    +flex-box()
    position: relative
    width: 100%
    height: 70vw
    background-image: url('~@img/m-concept.jpg')
    background-size: cover
    background-position: center
    .img
      display: none
    .concept-content
      +flex-box(flex-start, flex-start)
      flex-direction: column
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      padding: 10vmin 17vmin
      @media (max-width: $iphone)
        padding: 4vmax 4vmax
      color: #fff
      .section-title
        color: #fff
      .content
        margin-top: 2vmax
        font-size: 3vmin
</style>