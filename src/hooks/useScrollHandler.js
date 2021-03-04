import { ref } from 'vue';

const anchorPoints = ref(new Map());
const headerRef = ref(null);
const hasListener = ref(false);
const scrollY = ref(0);

const useScrollHandler = () => {

  const setAnchorPoints = (anchor, id) => {
    anchorPoints.value.set(id, anchor);
  };

  const setHeaderRef = (header) => {
    headerRef.value = header;
  };

  const scrollToAnchor = (id) => {
    const currentAnchor = anchorPoints.value.get(id);
    if (currentAnchor) {
      const {
        offsetHeight,
        offsetTop
      } = currentAnchor;
      let headerHeight = 0;
      if (headerRef.value) {
        headerHeight = headerRef.value.offsetHeight === window.innerHeight ? window.innerWidth / 100 * 15 : headerRef.value.offsetHeight;
      }
      const diffHeight = window.innerHeight - headerHeight;
      const anchorPoint = offsetTop - headerHeight;
      const middleAnchorPoint = anchorPoint + offsetHeight/2 - diffHeight/2;
      const top = offsetHeight > diffHeight ? anchorPoint : middleAnchorPoint;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  const scrollListener = () => {
    scrollY.value = window.scrollY;
  };

  const registerScrollListener = () => {
    // 如果註冊過 scroll listener 不再重複註冊
    if (hasListener.value) return;
    hasListener.value = true;
    window.addEventListener('scroll', scrollListener);
  };

  return {
    anchorPoints,
    scrollY,
    setAnchorPoints,
    setHeaderRef,
    scrollToAnchor,
    registerScrollListener
  };
};

export default useScrollHandler;