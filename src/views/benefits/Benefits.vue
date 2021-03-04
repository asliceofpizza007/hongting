<template lang="pug">
section.benefits(v-anchor="'benefits'")
  .benefits-content.view-fix
    h1.section-title {{ $t('header.benefits') }}
    ul.benefits-list(:style="`--rowCount: ${rowCount}`")
      li.benefits-item(
        v-for="(item, i) in benefitList"
        :key="item"
        :class="getBarClass(i)"
      )
        img(:src="require(`@img/benefits-icon${i + 1}.png`)" :alt="item")
        p.title {{ $t(`benefits.${item}`) }}
        p.sub-title(v-if="locale === 'tw'") {{ $t(`benefits.sub-${item}`) }}
</template>
<script>
import { computed } from 'vue';
import useDeviceDetector from '@/hooks/useDeviceDetector';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Benefits',
  setup() {
    const benefitList = [
      'bonus',
      'flextime',
      'reward',
      'encouragement-plan',
      'tea-time',
      'pension-plan',
      'training',
      'paid-vacation'
    ];
    const { device } = useDeviceDetector();
    const rowCount = computed(() => {
      return device.value === 'desktop' ? 4 : 2;
    });

    const { locale } = useI18n();

    const getBarClass = (i) => {
      const  classes = [];
      if (i % rowCount.value) {
        classes.push('left-bar');
      }
      if (i >= rowCount.value) {
        classes.push('top-bar');
      }
      return classes;
    };

    return {
      benefitList,
      locale,
      rowCount,
      getBarClass
    };
  }
};
</script>
<style lang="sass" scoped>
.benefits
  +flex-box()
  height: 871px
  &-content
    +flex-box()
    flex-direction: column
  &-list
    +flex-box()
    flex-wrap: wrap
    margin-top: 33px
  &-item
    +flex-box(center, flex-start)
    flex-direction: column
    position: relative
    width: calc(100% / var(--rowCount))
    height: 288px
    padding: 1rem 2rem
    text-align: center
    >img
      max-width: 80%
      margin: 1rem 0
    >p
      line-height: 28px
      font-weight: bold
    .title
      color: $primary-color
      font-size: 21px
    .sub-title
      font-size: 18px
    &.left-bar
      &::before
        content: ''
        position: absolute
        top: 50%
        left: 0
        width: 2px
        height: 80%
        background-color: $primary-color
        transform: translate(-1px, -50%)
    &.top-bar
      &::after
        content: ''
        position: absolute
        top: 0
        left: 50%
        width: 80%
        height: 2px
        background-color: $primary-color
        transform: translate(-50%, -1px)
  @media (max-width: $mb)
    height: auto
    padding: 2vmax 0
    &-list
      margin-top: 2vmax
    &-item
      height: 40vmax
      padding: 1rem 5vw
      >img
        margin: 2vmax 0
      >p
        line-height: 1.5
      .title
        font-size: 4vmin
      .sub-title
        font-size: 3vmin
</style>