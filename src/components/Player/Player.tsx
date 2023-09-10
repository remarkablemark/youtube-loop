import YouTube from 'react-youtube';

import { useStore } from '../../hooks';

export default function Player() {
  const videoId = useStore((state) => state.videoId);

  if (!videoId) {
    return null;
  }

  return (
    <div class="flex justify-center mt-4">
      <div class="container flex justify-center">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <YouTube videoId={videoId} />
      </div>
    </div>
  );
}
