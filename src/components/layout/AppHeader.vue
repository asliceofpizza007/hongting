<template lang="pug">
header#header(:class="toggleClass")
  .header-top
    .top.view-fix
      .lang-selector
        span.lang(
          :class="{active: locale === 'tw'}"
          @click="switchLocale('tw')"
        ) {{ $t('header.langTw') }}
        span.slash /
        span.lang(
          :class="{active: locale === 'en'}"
          @click="switchLocale('en')"
        ) English
      a.contact(href="mailto:sysht0175@gmail.com")
        img(src="@img/mail-icon.png" alt="mail-icon")
        span Contact Us
  .header-bottom
    .bottom.view-fix
      .logo
        img(src="@img/header-icon.png" alt="logo")
      Nav
  .header-mb
    .hamburger(
      :class="{cross: isNavOpen}"
      @click="toggleNav"
    )
      span.bar
      span.bar
      span.bar
      span.bar
    .logo
      img(src="@img/header-icon.png" alt="logo")
    Nav(@toggle-menu="toggleNav")
    .lang-selector
      span.lang(
        :class="{active: locale === 'tw'}"
        @click="switchLocale('tw')"
      ) {{ $t('header.langTw') }}
      span.lang(
        :class="{active: locale === 'en'}"
        @click="switchLocale('en')"
      ) English
</template>

<script>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useDeviceDetector from '@/hooks/useDeviceDetector';
import useScrollHandler from '@/hooks/useScrollHandler';
import Nav from '../Nav';

export default {
  name: 'AppHeader',
  components: {
    Nav
  },
  setup(){
    const isNavOpen = ref(false);

    const { locale } = useI18n();
    const { device } = useDeviceDetector();
    const { scrollY } = useScrollHandler();


    const toggleClass = computed(() => {
      const classes = [];
      if (device.value !== 'mobile') return;
      if (isNavOpen.value) {
        classes.push('menu-open');
      }
      if (scrollY.value > 0) {
        classes.push('header-bg');
      }
      return classes;
    });

    const switchLocale = lang => {
      locale.value = lang;
      if (device.value === 'mobile') {
        toggleNav();
      }
    };

    const toggleNav = () => {
      isNavOpen.value = !isNavOpen.value;
    };

    return {
      isNavOpen,
      locale,
      switchLocale,
      toggleClass,
      toggleNav
    };
  }
};
</script>
<style lang="sass" scoped>
#header
  position: sticky
  top: 0
  left: 0
  width: 100%
  z-index: 1000
  .logo
    +flex-box()
  .lang-selector
    +flex-box()
    margin-right: 30px
    .lang
      cursor: pointer
      @media (min-width: $mb)
        +hover-effect()
      &.active
        text-shadow: 0 0 2px #fff, 0 0 1px #fff
    .slash
      margin: 0 0.5rem
  .header-top
    +flex-box()
    height: 28px
    background-color: $primary-color
    color: #fff
    .top
      +flex-box(center, flex-end)
      font-size: 14px
      .contact
        +flex-box()
        span
          +hover-effect()
          margin-left: 0.5rem
          cursor: pointer
  .header-bottom
    +flex-box()
    height: 114px
    background-color: #d1d0d0
    .bottom
      +flex-box(center, space-between)
  .header-mb
    display: none

  @media (max-width: $mb)
    position: fixed
    height: 15vmin
    transition: height 0.5s ease-in-out, background 0.5s ease-in-out, box-shadow 0.5s ease-in-out
    background: transparent
    overflow: hidden
    &.header-bg
      background: rgba(255, 255, 255, 0.9)
      box-shadow: 0px 0px 10px #000
    &.menu-open
      background: rgba(255, 255, 255, 0.9)
      height: 100vmax
    .header-top,
    .header-bottom
      display: none
    .header-mb
      position: relative
      display: block
      padding: 3vmin 0
    .logo
      margin-bottom: 5vmax
      >img
        max-width: 50vmin
    .lang-selector
      flex-direction: column
      margin-right: unset
      margin-top: 10vmax
      font-size: 5vmin
      .lang
        color: $primary-color
        &:first-child
          margin-bottom: 2vmax
        &.active
          font-weight: bold
    .hamburger
      +flex-box()
      flex-direction: column
      position: absolute
      top: 4vmin
      right: 3vmin
      width: 6vmin
      height: 5vmin
      .bar
        position: absolute
        left: 0
        display: block
        width: 100%
        height: 3px
        background-color: #000
        transition: all 0.25s ease-in-out
        &:not(:first-child):not(:last-child)
          top: 50%
          transform: translateY(-50%)
        &:first-child
          top: 0
        &:last-child
          bottom: 0
      &.cross
        .bar
          &:first-child,
          &:last-child
            width: 0%
            top: 50%
            left: 50%
          &:nth-child(2)
            transform: translateY(-50%) rotate(45deg)
          &:nth-child(3)
            transform: translateY(-50%) rotate(-45deg)
</style>