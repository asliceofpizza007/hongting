<template lang="pug">
section.service(v-anchor="'service'")
  .service-content.view-fix
    h1.section-title {{ $t('header.service') }}
    ul.service-list
      li.service-item(
        v-for="n in 3"
        :key="`service${n}`"
      )
        img(:src="require(`@img/service-icon${n}.png`)" :alt="`service${n}`")
        p(
          v-html="$t(`service.service-text${n}`)"
          :class="`style-${locale}`"
        )
</template>
<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Service',
  setup() {
    const { locale } = useI18n();

    return {
      locale
    };
  }
};
</script>
<style lang="sass" scoped>
.service
  +flex-box()
  height: 588px
  &-content
    +flex-box()
    flex-direction: column
  &-list
    +flex-box()
    margin-top: 78px
  &-item
    +flex-box()
    flex-direction: column
    width: 274px
    height: 274px
    border: 1px solid $primary-color
    border-radius: 12px
    &:not(:first-child)
      margin-left: 40px
    >img
      max-width: 60%
    p
      text-align: center
      font-weight: bold
      color: $primary-color
      &.style-tw
        font-size: 24px
        margin-top: 37px
      &.style-en
        font-size: 20px
        margin-top: 18px
  @media (max-width: $mb)
    height: auto
    padding: 10vw 0
    &-list
      width: 100%
      margin-top: 4vmax
    &-item
      width: 25vw
      height: 25vw
      &:not(:first-child)
        margin-left: 5vw
      p
        &.style-tw
          font-size: 3vmin
          margin-top: 3vmax
        &.style-en
          font-size: 2vmin
          margin-top: 2vmax
  @media (max-width: $phone)
    &-list
      flex-wrap: wrap
    &-item
      width: 60vw
      height: 60vw
      &:not(:first-child)
        margin-left: unset
        margin-top: 5vmax
      >img
        max-width: 80%
      p
        &.style-tw
          font-size: 5vmin
          margin-top: 3vmax
        &.style-en
          font-size: 4vmin
            margin-top: 2vmax
</style>