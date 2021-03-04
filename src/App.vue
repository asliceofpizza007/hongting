<template lang="pug">
AppHeader(v-anchor.header)

AppMain

AppFooter(v-anchor="'footer'")

button.go-top(
  :class="{hidden: scrollY < 200}"
  @click="goTop"
)
  img(src="@img/go-top.png" alt="got-top")
</template>

<script>
import { AppHeader, AppFooter, AppMain } from '@c/layout';
import useDeviceDetector from '@/hooks/useDeviceDetector';
import useScrollHandler from '@/hooks/useScrollHandler';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';

export default {
  name: 'App',
  components:{
    AppHeader,
    AppFooter,
    AppMain
  },
  setup(){
    const { locale } = useI18n();
    watch(locale, (curr) => {
      if (curr === 'tw') {
        document.title = '翃鼎有限公司';
        return;
      }
      document.title = 'HONGTING CO., LTD.';
    });

    const { registerResizeListener } = useDeviceDetector();
    registerResizeListener();

    const { scrollY, registerScrollListener } = useScrollHandler();
    registerScrollListener();

    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    return {
      scrollY,
      goTop
    };
  }
};
</script>
<style lang="sass" scoped>
.go-top
  position: fixed
  right: 0
  bottom: 30%
  border: unset
  background: unset
  transform: translateY(-50%)
  opacity: 1
  transition: opacity 0.3s ease-in-out
  &.hidden
    opacity: 0
  @media (max-width: $mb)
    >img
      width: 8vmin
</style>