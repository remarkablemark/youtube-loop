import { useStore } from './useStore';

export function useState() {
  const timeEnd = useStore((state) => state.timeEnd);
  const timeStart = useStore((state) => state.timeStart);
  const videoId = useStore((state) => state.videoId);

  return {
    timeEnd,
    timeStart,
    videoId,
  };
}
