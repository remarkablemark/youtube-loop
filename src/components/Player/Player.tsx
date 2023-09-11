import { useCallback, useRef } from 'preact/hooks';
import YouTube, { type YouTubeEvent } from 'react-youtube';

import { useState } from '../../hooks';

export default function Player() {
  const intervalRef = useRef<number>();
  const state = useState();

  if (!state.videoId) {
    return null;
  }

  const opts = {
    playerVars: {
      start: state.timeStart,
    },
  };

  const onStateChange = useCallback(
    (event: YouTubeEvent) => {
      clearInterval(intervalRef.current);

      if (event.data === YT.PlayerState.PLAYING) {
        intervalRef.current = setInterval(
          () => {
            if (
              state.timeEnd > state.timeStart &&
              event.target.getCurrentTime() > state.timeEnd
            ) {
              event.target.seekTo(state.timeStart);
            }
          },
          300,
          event.target,
        );
      } else {
        clearInterval(intervalRef.current);
      }
    },
    [state],
  );

  return (
    <div class="flex justify-center mt-4">
      <div class="container flex justify-center">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <YouTube
          videoId={state.videoId}
          opts={opts}
          onStateChange={onStateChange}
        />
      </div>
    </div>
  );
}
