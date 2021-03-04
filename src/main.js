import '@css/_reset.sass';
import '@css/style.sass';

import { createApp } from 'vue';
import App from './App.vue';
import i18n from '@lang';
import useScrollHandler from '@/hooks/useScrollHandler';

const app = createApp(App);

/** register anchor system directive */
const {
  setAnchorPoints,
  setHeaderRef
} = useScrollHandler();

app.directive('anchor', {
  mounted: (el, binding) => {
    const {
      modifiers,
      value
    } = binding;
    if (modifiers.header) {
      setHeaderRef(el);
      return;
    }
    setAnchorPoints(el, value);
  }
});

app.use(i18n).mount('#app');
