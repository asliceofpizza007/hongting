<template lang="pug">
section.about-us(v-anchor="'aboutUs'")
  .view-fix
    .about-content
      h1.section-title {{ $t('header.aboutUs') }}
      p.section-content(v-html="$t('about.section')")
  .scroll-down(@click="scrollToAnchor('service')")
    img(src="@img/scroll-down-icon.png" alt="scroll-down-icon")
    p.scroll Scroll
</template>
<script>
import useScrollHandler from '@/hooks/useScrollHandler';

export default {
  name: 'AboutUs',
  setup() {
    const { scrollToAnchor } = useScrollHandler();

    return {
      scrollToAnchor
    };
  }
};
</script>
<style lang="sass" scoped>
.about-us
  +flex-box(flex-start)
  position: relative
  width: 100%
  height: 818px
  background: url('~@img/banner.jpg') center
  .about-content
    +flex-box(flex-start, flex-start)
    flex-direction: column
    padding: 0 135px
    margin-top: 160px
    .section-content
      font-size: 20px
      line-height: 1.5
  .scroll-down
    +flex-box()
    flex-direction: column
    position: absolute
    bottom: 45px
    left: 50%
    transform: translateX(-50%)
    color: #fff
    cursor: pointer
    .scroll
      margin-top: 1rem
      font-size: 24px
      text-shadow: 0 0 1px #fff, 0 0 1px #fff
  @media (max-width: $mb)
    height: 100vmax
    background-image: url('~@img/m-banner.jpg')
    background-size: cover
    background-position: center
    .about-content
      padding: 0 11vw
      margin-top: 20vmax
      .section-content
        font-size: 3vmin
    .scroll-down
      display: none
  @media (max-width: $phone)
    .about-content
      .section-content
        font-size: 4vmin
</style>