<template lang="pug">
nav#nav
  a.nav-item(
    v-for="nav in navList"
    :key="nav"
    :href="`#${nav}`"
    @click="handleNavClick($event, nav)"
  ) {{ $t(`header.${nav}`) }}
</template>
<script>
import useScrollHandler from '@/hooks/useScrollHandler';

export default {
  name: 'Nav',
  emits: ['toggle-menu'],
  setup(props, { emit }) {
    const navList = [
      'aboutUs',
      'service',
      'concept',
      'benefits',
      'joinUs',
      'contact'
    ];

    const { scrollToAnchor } = useScrollHandler();
    const handleNavClick = (e, nav) => {
      e.preventDefault();
      let anchor = nav;
      if (nav === 'joinUs' || nav ==='contact') {
        anchor = 'footer';
      }
      scrollToAnchor(anchor);
      emit('toggle-menu');
    };

    return {
      navList,
      handleNavClick
    };
  }
};
</script>
<style lang="sass" scoped>
#nav
  .nav-item
    font-size: 20px
    font-weight: 400
    @media (min-width: $mb)
      +hover-effect($primary-color, 2px)
    &:not(:first-child)
      margin-left: 20px
  @media (max-width: $mb)
    +flex-box
    flex-direction: column
    .nav-item
      width: 60%
      font-size: 5vmin
      color: #40403f
      text-align: center
      padding: 3vmin 0
      &:not(:first-child)
        border-top: 2px solid #40403f
        margin-left: unset

</style>