<template lang="pug">
main
  AboutUs
  Service
  Concept
  Benefits
</template>

<script>
import AboutUs from '@v/aboutUs';
import Benefits from '@v/benefits';
import Concept from '@v/concept';
import Service from '@v/service';

export default {
  name: 'Appmain',
  components: {
    AboutUs,
    Benefits,
    Concept,
    Service
  }
};
</script>