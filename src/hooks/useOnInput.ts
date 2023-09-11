import type { JSX } from 'preact';
import YouTubeVideoId from 'youtube-video-id';

import { capitalize } from '../utils';
import { useStore } from './useStore';

export function useOnInput(type: 'timeStart' | 'videoId') {
  const setValue = useStore(
    (state) => state[`set${capitalize(type)}` as keyof typeof state],
  );

  if (typeof setValue !== 'function') {
    throw new TypeError('setValue must be a function');
  }

  return function onInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    switch (type) {
      case 'timeStart':
        setValue(parseInt(value, 10) as never);
        break;

      case 'videoId':
        YouTubeVideoId(value) && setValue(YouTubeVideoId(value) as never);
        break;

      default:
        throw new TypeError(`Invalid type: ${type}`);
    }
  };
}
