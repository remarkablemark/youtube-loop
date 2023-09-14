import { useEffect } from 'preact/hooks';

import { useStore } from '../../hooks';
import { getQueryParameters } from '../../utils';

export default function Load() {
  const setTimeEnd = useStore((store) => store.setTimeEnd);
  const setTimeStart = useStore((store) => store.setTimeStart);
  const setVideoId = useStore((store) => store.setVideoId);
  const setWidth = useStore((store) => store.setWidth);

  useEffect(() => {
    for (const [name, value] of getQueryParameters()) {
      switch (name) {
        case 'timeEnd': {
          const seconds = parseInt(value, 10);
          if (seconds) {
            setTimeEnd(seconds);
          }
          break;
        }

        case 'timeStart': {
          const seconds = parseInt(value, 10);
          if (seconds) {
            setTimeStart(seconds);
          }
          break;
        }

        case 'videoId':
          setVideoId(value);
          break;

        case 'width': {
          const width = parseInt(value, 10);
          if (width >= 200 && width <= 1080) {
            setWidth(width);
          }
          break;
        }
      }
    }
  }, []);

  return null;
}
