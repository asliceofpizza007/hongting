<template lang="pug">
footer#footer
  .footer-content.view-fix
    .logo
      img(src="@img/footer-icon.png" alt="logo")
    .contact-area
      .job
        div
          p.subject {{ $t('header.joinUs') }}
          a(href="https://www.104.com.tw/company/1a2x6bli49" target="_blank")
            img(src="@img/104-icon.png" alt="104-icon")
      .contact
        div
          p.subject {{ $t('header.contact') }}
          a.mail(href="mailto:sysht0175@gmail.com")
            img(src="@img/mail-icon.png" alt="mail-icon")
            span sysht0175@gmail.com
    .copyright
      span ©翃鼎有限公司  HONGTING CO., LTD.
</template>

<script>
export default {
  name: 'AppFooter',
  setup(){
    return {
    };
  }
};
</script>
<style lang="sass" scoped>
#footer
  +flex-box()
  height: 443px
  color: #fff
  background-color: #2b2b2b
  .footer-content
    +flex-box(center, space-between)
    flex-direction: column
    height: 100%
    padding-top: 78px
    padding-bottom: 28px
    .logo
      +flex-box()
      >img
        margin-right: 0.7rem
      p
        line-height: 1.2
        >span
          font-size: 17px
          &:first-child
            font-size: 30px
    .contact-area
      +flex-box(stretch)
      width: 100%
      >div
        flex-direction: column
        flex: 1
        padding: 0 53px
        .subject
          font-size: 40px
        &.job
          +flex-box(flex-end, flex-start)
          position: relative
          &::after
            content: ''
            position: absolute
            top: 50%
            right: -1px
            width: 2px
            height: 100%
            transform: translateY(-50%)
            background-color: #fff
        &.contact
          +flex-box(flex-start, flex-start)
          .mail
            +flex-box()
            >img
              margin-right: 10px
  @media (max-width: $mb)
    height: 50vmax
    .footer-content
      padding-top: 9vmin
      padding-bottom: 3vmin
      .contact-area
        >div
          padding: 0 5vmin
          .subject
            font-size: 6vmin
          &.job
            img
              max-width: 10vmin
          &.contact
            .mail
              >img
                width: 4vmin
                margin-right: 2vmin
              >span
                font-size: 3vmin
      .copyright
        font-size: 2vmin
  @media (max-width: $iphone)
    height: 30vmax
    .footer-content
      .logo
        >img
          max-width: 50vmin
</style>