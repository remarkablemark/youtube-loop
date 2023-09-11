import { useStore } from './useStore';

export function useState() {
  const timeStart = useStore((state) => state.timeStart);
  const videoId = useStore((state) => state.videoId);

  return {
    timeStart,
    videoId,
  };
}
