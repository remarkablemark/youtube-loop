import type { JSX } from 'preact';
import YouTubeVideoId from 'youtube-video-id';

import { useStore } from './useStore';

export function useOnInput() {
  const setVideoId = useStore((state) => state.setVideoId);

  return function onInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const videoId = YouTubeVideoId(event.currentTarget.value);

    if (videoId) {
      setVideoId(videoId);
    }
  };
}
