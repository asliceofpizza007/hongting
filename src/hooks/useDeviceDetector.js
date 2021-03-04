import { ref } from 'vue';
import { debounce } from '@/utils';

const device = ref('');
const hasListener = ref(false);

const useDeviceDetector = (boundary = 1080) => {

  const getDevice = () => {
    return window.innerWidth > boundary ? 'desktop' : 'mobile';
  };

  /** 第一次進入 device 覆值 */
  device.value = getDevice(boundary);
  
  const resizeListener = () => {
    device.value = getDevice(boundary);
  };

  const registerResizeListener = () => {
    // 如果註冊過 resize listener 不再重複註冊
    if (hasListener.value) return;
    hasListener.value = true;
    window.addEventListener('resize', debounce(resizeListener, 100));
  };
  return {
    device,
    registerResizeListener
  };
};

export default useDeviceDetector;