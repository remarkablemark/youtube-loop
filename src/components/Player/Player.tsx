import YouTube from 'react-youtube';

import { useState } from '../../hooks';

export default function Player() {
  const state = useState();

  if (!state.videoId) {
    return null;
  }

  const opts = {
    playerVars: {
      start: state.timeStart,
    },
  };

  return (
    <div class="flex justify-center mt-4">
      <div class="container flex justify-center">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <YouTube videoId={state.videoId} opts={opts} />
      </div>
    </div>
  );
}
