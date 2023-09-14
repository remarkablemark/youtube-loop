import { useStore } from './useStore';

export function useState() {
  const timeEnd = useStore((state) => state.timeEnd);
  const timeStart = useStore((state) => state.timeStart);
  const videoId = useStore((state) => state.videoId);
  const width = useStore((state) => state.width);

  return {
    timeEnd,
    timeStart,
    videoId,
    width,
  };
}
