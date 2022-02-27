import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

const useRaf = (ms: number = 1e12, delay: number = 0, e?: { start?: Function; end?: Function }): [number, Function] => {
  const [elapsed, set] = useState<number>(0);

  const [active, setActive] = useState(false);
  const [startup, setStartup] = useState(false);

  const action = (isActive: boolean) => {
    setActive(isActive);
    setStartup(true);
  };

  useIsomorphicLayoutEffect(() => {
    let raf: number;
    let timerStop: NodeJS.Timeout;
    let start: number;
    let timerDelay: NodeJS.Timeout;

    const onFrame = () => {
      const time = Math.min(1, (Date.now() - start) / ms);
      set(active ? time : 1 - time);
      loop();
    };
    const loop = () => {
      raf = requestAnimationFrame(onFrame);
    };
    const onStart = () => {
      e?.start?.();
      timerStop = setTimeout(() => {
        cancelAnimationFrame(raf);
        set(active ? 1 : 0);
        setStartup(false);
        e?.end?.();
      }, ms);
      start = Date.now();
      loop();
    };
    if (startup) {
      timerDelay = setTimeout(onStart, delay);
    }

    return () => {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(raf);
    };
  }, [ms, delay, startup, active]);

  return [elapsed, action];
};

export default useRaf;
