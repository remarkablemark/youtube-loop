import type { JSX } from 'preact';
import YouTubeVideoId from 'youtube-video-id';

import { capitalize, changeQueryParameter } from '../utils';
import { useStore } from './useStore';

export function useOnInput(
  type: 'timeEnd' | 'timeStart' | 'videoId' | 'width',
) {
  const setValue = useStore(
    (state) => state[`set${capitalize(type)}` as keyof typeof state],
  );

  if (typeof setValue !== 'function') {
    throw new TypeError('setValue must be a function');
  }

  return function onInput(
    event: JSX.TargetedEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { value } = event.currentTarget;

    switch (type) {
      case 'timeEnd':
      case 'timeStart': {
        const seconds = parseInt(value, 10) || 0;
        setValue(seconds as never);
        if (seconds) {
          changeQueryParameter({ [type]: String(seconds) });
        }
        break;
      }

      case 'videoId': {
        const videoId = YouTubeVideoId(value);
        if (videoId) {
          setValue(videoId as never);
          changeQueryParameter({ [type]: videoId });
        }
        break;
      }

      case 'width': {
        const width = parseInt(value, 10);
        if (width >= 200 && width <= 1080) {
          setValue(width as never);
          changeQueryParameter({ [type]: String(width) });
        }
        break;
      }

      default:
        throw new TypeError(`Invalid type: ${type}`);
    }
  };
}
